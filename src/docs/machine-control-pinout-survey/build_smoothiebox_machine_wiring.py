#!/usr/bin/env python3
"""Draw source-scoped machine interfaces against SmoothieBox exterior contacts.

The exterior schedule is the proposed Chapter 18 Smoothie Central case schedule.
It is not a claim that any listed machine has been retrofitted or electrically
qualified for the carrier. Machine contacts come from this atlas's cited tables.
"""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
import textwrap
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

from bs4 import BeautifulSoup


ASSET_DIR = Path(__file__).resolve().parent
PAGE = ASSET_DIR.with_suffix(".html")
OUTPUT_DIR = ASSET_DIR / "smoothiebox-machine-wiring"
GRAPH_SNAPSHOT = ASSET_DIR / "machine-side-graph-snapshot.json"
RESEARCH_DIR = ASSET_DIR.parent / "machine-research"
REFERENCE_DATA = ASSET_DIR / "smoothiebox-reference-contacts.json"
FORUM_EVIDENCE = ASSET_DIR / "forum-peripheral-evidence.json"

# Contact order and names follow smoothie-box/docs/smoothie-central/
# build_compact_gadgeteer_wiring.py, Chapter 18. The carrier terminal ordering is
# proposed there; these are not Core P1 connector numbers or a mating-face view.
BANKS = (
    ("POWER", "north", "VFET POWER IN", ("LOAD +", "GND")),
    ("FIVEIN", "north", "5V POWER IN", ("+5V", "GND")),
    ("FIVEOUT", "north", "5V ACCESSORY OUT", ("+5V", "GND")),
    ("AUX", "north", "ANALOG INPUTS", ("ANALOG 1", "GND", "ANALOG 2", "GND", "ANALOG 3", "GND")),
    ("XMIN", "east", "X MIN", ("SENSOR +", "GND", "SIGNAL")),
    ("XMAX", "east", "X MAX", ("SENSOR +", "GND", "SIGNAL")),
    ("YMIN", "east", "Y MIN", ("SENSOR +", "GND", "SIGNAL")),
    ("YMAX", "east", "Y MAX", ("SENSOR +", "GND", "SIGNAL")),
    ("ZMIN", "east", "Z MIN", ("SENSOR +", "GND", "SIGNAL")),
    ("ZMAX", "east", "Z MAX", ("SENSOR +", "GND", "SIGNAL")),
    ("PROBE", "east", "PROBE + SERVO", ("+5V", "GND", "SERVO", "PROBE IN")),
    ("TEMP", "east", "TEMPERATURE 1–3", ("SENSOR 1", "GND", "SENSOR 2", "GND", "SENSOR 3", "GND")),
    ("HEA", "west", "HOTEND A", ("LOAD +", "SWITCHED −")),
    ("HEB", "west", "HOTEND B", ("LOAD +", "SWITCHED −")),
    ("BED", "west", "BED SWITCH CONTROL", ("CONTROL +", "SWITCHED −")),
    ("FANA", "west", "FAN A", ("LOAD +", "SWITCHED −")),
    ("FANB", "west", "FAN B", ("LOAD +", "SWITCHED −")),
    ("SSR1", "west", "SSR 1 CONTROL", ("5V SWITCH", "GND")),
    ("SSR2", "west", "SSR 2 CONTROL", ("5V SWITCH", "GND")),
    ("PWM", "west", "PWM / LASER CONTROL", ("PWM", "TTL", "GND", "5V LIMITED")),
    ("DRVX", "south", "MOTOR CONTROL X", ("STEP", "GND", "DIR", "GND", "ENABLE", "GND")),
    ("DRVY", "south", "MOTOR CONTROL Y", ("STEP", "GND", "DIR", "GND", "ENABLE", "GND")),
    ("DRVZ", "south", "MOTOR CONTROL Z", ("STEP", "GND", "DIR", "GND", "ENABLE", "GND")),
    ("DRVA", "south", "MOTOR CONTROL A", ("STEP", "GND", "DIR", "GND", "ENABLE", "GND")),
)

PALETTE = {
    "ground": "#111717",
    "three": "#db2525",
    "five": "#b85e00",
    "power": "#e2bb00",
    "step": "#136da7",
    "direction": "#7443a4",
    "enable": "#087b60",
    "signal": "#087361",
    "control": "#6246a3",
    "switched": "#a13273",
    "sensor": "#416b7e",
}


@dataclass(frozen=True)
class Contact:
    number: str
    label: str
    source_id: str = ""
    fact: str = "source"
    source_relation: str = ""

    @property
    def key(self) -> str:
        return self.source_id or self.number


@dataclass(frozen=True)
class FunctionEvidence:
    contact_id: str
    wire_id: str
    reason: str
    interface: str
    checks: tuple[str, ...]
    exterior_terminal: str = ""
    alternative_set: str = ""
    axis_option: str = ""
    axis_binding: str = ""
    mutually_exclusive: bool = False
    fanout_group: str = ""


@dataclass(frozen=True)
class Peripheral:
    name: str
    contacts: tuple[Contact, ...]
    source: str
    connector_id: str = ""
    candidate_contacts: tuple[str, ...] = ()
    evidence_kind: str = "reported"
    numbering: str = "Source marks/order only; physical mating view unverified"
    origin_path: str = ""
    origin_sha256: str = ""
    candidate_evidence: tuple[FunctionEvidence, ...] = ()
    revision: str = ""
    source_urls: tuple[str, ...] = ()
    status_label: str = ""


@dataclass(frozen=True)
class Profile:
    identifier: str
    ordinal: str
    title: str
    category: str
    depth: str
    peripherals: tuple[Peripheral, ...]
    evidence_note: str


def xml(value: object) -> str:
    """Escape authored labels before placing them in standalone SVG markup."""
    return html.escape(str(value), quote=True)


def emit(message_type: str, **fields: object) -> None:
    """Give batch callers bounded, machine-readable progress."""
    print(json.dumps({"type": message_type, **fields}, ensure_ascii=False), flush=True)


def article_chunks(page_text: str):
    """Avoid materializing the 17 MB document's thousands of inline SVG nodes."""
    for match in re.finditer(r"<article\b[^>]*\bclass=\"[^\"]*machine-profile[^\"]*\"[^>]*>", page_text):
        end = page_text.find("</article>", match.end())
        if end < 0:
            raise ValueError(f"Unclosed machine profile at byte {match.start()}")
        yield page_text[match.start():end + len("</article>")]


def normalize_contacts(table) -> tuple[Contact, ...]:
    """Retain every authored machine contact row, including open/unknown rows."""
    contacts = []
    for row in table.select("tr"):
        cells = row.find_all("td", recursive=False)
        if len(cells) < 2:
            continue
        number = cells[0].get_text(" ", strip=True)
        label = cells[1].get_text(" ", strip=True)
        if number or label:
            contacts.append(Contact(number or "?", label or "Function unknown"))
    return tuple(contacts)


@lru_cache(maxsize=1)
def source_graphs() -> dict:
    """Read the portable typed-graph projection and original graph digests."""
    data = json.loads(GRAPH_SNAPSHOT.read_text())
    if data.get("schema_version") != 1 or len(data.get("profiles", {})) != 226:
        raise ValueError(f"Unexpected machine graph snapshot: {GRAPH_SNAPSHOT}")
    return data["profiles"]


@lru_cache(maxsize=128)
def source_digest(path: Path) -> str:
    """Bind generated SVG evidence to the bytes reviewed for this atlas."""
    return hashlib.sha256(path.read_bytes()).hexdigest()


def source_provenance(profile_id: str) -> dict:
    """Record the machine evidence and proposed carrier schedule per SVG."""
    if profile_id.startswith("forum-"):
        dossier = RESEARCH_DIR / f"{profile_id.removeprefix('forum-')}.md"
        machine_source = {"kind": "forum_dossier", "path": f"machine-research/{dossier.name}",
                          "sha256": source_digest(dossier), "peripheral_evidence": FORUM_EVIDENCE.name,
                          "peripheral_evidence_sha256": source_digest(FORUM_EVIDENCE)}
    else:
        record = source_graphs()[profile_id]
        machine_source = {"kind": "typed_graph_projection", "source_graph": record["source_graph"],
                          "source_sha256": record["source_sha256"],
                          "snapshot": GRAPH_SNAPSHOT.name, "snapshot_sha256": source_digest(GRAPH_SNAPSHOT)}
    result = {"profile_id": profile_id,
              "exterior_schedule": "Smoothie Central Chapter 18 proposed carrier field contacts",
              "machine_source": machine_source}
    if profile_id in reference_catalog()[0]["profiles"]:
        result["reference_additions"] = {"path": REFERENCE_DATA.name,
                                         "sha256": source_digest(REFERENCE_DATA)}
    return result


def graph_peripherals(profile_id: str) -> tuple[Peripheral, ...] | None:
    """Import machine-side evidence; a Core role match is never installed wiring."""
    record = source_graphs().get(profile_id)
    if record is None:
        return None
    graph_path = str(record["source_graph"])
    digest = str(record["source_sha256"])
    graph = record["graph"]
    if graph.get("profile_id") != profile_id:
        raise ValueError(f"Graph/profile mismatch: {graph_path}")
    roles = {device.get("id"): device.get("role") for device in graph.get("devices", [])}
    inferred: dict[str, list[FunctionEvidence]] = {}
    for wire in graph.get("wires", []):
        if wire.get("state") != "inferred" or wire.get("kind") != "function":
            continue
        for endpoint in (wire.get("a", {}), wire.get("b", {})):
            connector_id, contact_id = endpoint.get("connector"), endpoint.get("contact")
            if connector_id is None or contact_id is None:
                continue
            inferred.setdefault(str(connector_id), []).append(FunctionEvidence(
                str(contact_id), str(wire.get("id") or "unnamed-function-hypothesis"),
                str(wire.get("reason") or "Upstream function match only"),
                str(wire.get("interface") or "Interface not specified"),
                tuple(str(item) for item in wire.get("checks_required", [])),
            ))
    peripherals = []
    cable_groups = set()
    for connector in graph.get("connectors", []):
        connector_id = str(connector.get("id") or "")
        records = connector.get("contacts", [])
        scope = str(connector.get("scope") or "Installation and mating view unverified")
        name = str(connector.get("refdes") or connector.get("form") or "Named machine connector")
        if (profile_id == "base-14"
                and digest == "d0359a57ade865f35e25f83d1b1f0c7fcea3a25e11418e62b3ac98195399b386"
                and connector_id == "machine-group-001" and name == "Configurable DB25" and not records):
            # The reference names a configurable DB25 group but does not
            # establish an available or installed connector. Show nominal
            # form positions as possibilities only; never infer wiring.
            contacts = tuple(Contact(
                str(position), f"DB25 position {position} · function unspecified",
                f"possible-db25-position-{position:02d}", "form_inventory_only",
                "Possible form only; housing unverified",
            ) for position in range(1, 26))
            peripherals.append(Peripheral(
                "Possible machine-side DB25 form · configuration dependent", contacts,
                "The source graph names a configurable DB25 group but does not establish that the connector is available, fitted, or present on a specific machine. These 25 nominal form positions assign no functions and support no SmoothieBox route.",
                connector_id=connector_id, evidence_kind="reference",
                numbering="25 nominal D-sub form positions only; exact housing, availability, mating view, and installed machine connector unverified",
                origin_path=str(graph_path), origin_sha256=digest,
                status_label="POSSIBLE D-SUB FORM · NOT CONFIRMED AS INSTALLED",
            ))
            continue
        correction_path = ""
        correction_sha256 = ""
        correction_urls: tuple[str, ...] = ()
        if (profile_id == "laserplot-32"
                and digest == "6574d0487013c22837bf01cbd700312b526cb44c0df9cc1b3fe79c532ae954df"
                and not records):
            # This frozen group index predates the manufacturer's distinction:
            # TS2-40W uses manual focus and one shaft-coupled Y motor. Keep the
            # original graph intact as history, but do not display its generic
            # Y1/Y2 and motorized-Z board leads as fitted machine hardware.
            if connector_id == "machine-group-003" and name == "Z motor":
                continue
            if connector_id == "machine-group-002" and name == "Y1/Y2":
                name = "Y motor · one shaft-coupled drive"
                scope = ("TwoTrees TS2-40W series introduction describes one Y motor driving "
                         "both sides; connector contacts and fitted board socket OPEN")
                correction = RESEARCH_DIR / "twotrees-ts2-40w-manual-focus-source-audit.md"
                correction_path = f"{graph_path}; machine-research/{correction.name}"
                correction_sha256 = source_digest(correction)
                correction_urls = ("https://wiki.twotrees3d.com/en/LaserEngravingMachine/TS220W/BriefIntroduction",)
        cable_reference = (profile_id == "wiki-206" and not records
                           and re.fullmatch(r"machine-group-00[1-8]", connector_id)
                           and re.fullmatch(r"[1-4]", name)
                           and "General drag-chain motor cable core order" in scope)
        role = roles.get(connector.get("device"))
        # The excerpts do not include device records. Contact/scope evidence can
        # establish reference-only status even when a device-role label differs.
        reference = (role == "reference"
                     or any(item.get("domain") == "source_revision_only" for item in records)
                     or "reference for the named source revision" in scope.lower())
        if role != "peripheral" and not reference and not cable_reference:
            continue
        if (profile_id == "wiki-201" and reference and not records
                and connector_id in {
                    "supplement-connector-001", "supplement-connector-002",
                    "supplement-connector-003", "supplement-connector-012",
                    "supplement-connector-013", "supplement-connector-014",
                    "supplement-connector-015", "supplement-connector-016",
                    "supplement-connector-017", "supplement-connector-018",
                    "supplement-connector-019",
                }):
            # Historical Melzi labels without pins are retained in the source
            # graph; the new drawing uses the contact-bearing cards instead.
            continue
        if (profile_id == "wiki-175" and not records
                and re.fullmatch(r"machine-group-0(?:0[1-9]|1[0-2])", connector_id)
                and re.fullmatch(r"[XZ] motor cable · 0[1-6]", name)):
            # The upstream parser made six numbered group cards per motor from
            # the wiki's six contact rows. Reference cards below preserve the
            # actual X/Z contact schedule without presenting twelve cables.
            continue
        if (profile_id == "base-19" and connector_id == "machine-group-001" and not records
                and name == "H1/H4 inputs; H2/H3 motion; H6 DB25; H8 analog; H9 power"):
            # H1/H4 already have their own source cards; H6 now has its own
            # numbered DB25 reference. Keep the other unnumbered groups OPEN.
            name = "Other Acorn groups · H2/H3 motion; H8 analog; H9 power"
            scope += " The source's combined group label also named H1/H4 and H6; those appear separately in this drawing."
        if (profile_id == "base-28" and digest == "9cd1959ab41d4ac81025bce61ba507c7d28f9cf19103bb3e7c010a4c4b4e3f0c"
                and not records and (connector_id, name) in {
                    ("machine-group-001", "14-pin control"),
                    ("machine-group-002", "42-terminal CRP850"),
                }):
            # The revision-specific reference cards below replace these two
            # graph index entries with complete numbered source tables.
            continue
        if (profile_id == "base-27" and digest == "106871fe2c40c187321c73c8d5c8fabda1ee51235bec736e437348c2850605a9"
                and not records and (connector_id, name) in {
                    ("machine-group-001", "14-pin control"),
                    ("machine-group-002", "CRP850: 36-terminal HTML / 42-terminal PDF conflict"),
                    ("machine-group-003", "DB9 motor"),
                }):
            # The separate numbered reference cards retain both conflicting
            # CRP850 options and the cable/motor-contact inventories.
            continue
        if (profile_id, digest) in {
                ("mill-avid-ex-1", "b41bf1a2c61002e12dd4efa23a11a65c8211f030a02a47af753359d6b453604c"),
                ("mill-avid-ex-2", "1e118d21b210baa2fa6b8fa0d4da204944b29d92734a631f32d5b95b70aaa619"),
            } and not records and (connector_id, name) in {
                ("machine-group-001", "14-pin control cable"),
                ("machine-group-002", "motor DB9/XLR"),
            }:
            # Numbered revision-specific cable and motor cards replace these
            # duplicate source-index groups in the stepper EX drawings.
            continue
        if (profile_id, digest) in {
                ("mill-avid-ex-3", "ccf232fa89260310d06f4738dd986df76107c2657693e0b1658a5b88a06e09e7"),
                ("mill-avid-ex-4", "ccab0c8b903b86d567b124b8ac3f1f8dc4e04bfda227ac929346deb839c7ea6b"),
            } and not records and (connector_id, name) in {
                ("machine-group-001", "14-pin control cable"),
                ("machine-group-002", "servo board harness"),
            }:
            # The cable card and ten CRP5310-01E source connectors now give
            # the exact positions behind these empty servo EX index groups.
            continue
        if not records and (connector_id == "machine-unidentified" or name.lower() in {
            "unidentified machine interface", "machine interface unidentified",
        }):
            continue
        if cable_reference:
            # These are motor cable-core pseudo-groups, NOT sensor-socket pins.
            # Retain the two named references without inventing core assignments.
            key = "x-exception" if "X-stepper" in scope else "general"
            if key in cable_groups:
                continue
            cable_groups.add(key)
            peripherals.append(Peripheral(
                "X-stepper drag-chain cable — source exception" if key == "x-exception"
                else "General drag-chain motor cable — source core-order reference",
                (), "Wiki cable reference. This graph retains no individual core assignments. "
                "Cable-core ordinals are not sensor-socket pin numbers.",
                connector_id=f"wiki-206-cable-{key}", evidence_kind="reference",
                numbering="Cable conductors; no connector cavity map retained",
                origin_path=str(graph_path), origin_sha256=digest,
            ))
            continue
        contacts = tuple(Contact(
            str(item.get("mark") or item.get("id") or "?"),
            str(item.get("label") or "Function unknown — OPEN"),
            str(item.get("id") or item.get("mark") or "?"),
            str(item.get("fact") or (
                "source_unlisted" if item.get("label") == "Function not established for this scoped connector/revision"
                else "source" if item.get("label") else "unknown"
            )),
        ) for item in records)
        hints = tuple(inferred.get(connector_id, []))
        prefix = "Source reference only" if reference else "Reported machine interface; fit unverified"
        peripherals.append(Peripheral(
            name, contacts, prefix + " · " + scope, connector_id,
            () if reference else tuple(sorted({item.contact_id for item in hints})),
            evidence_kind="reference" if reference else "reported",
            origin_path=correction_path or str(graph_path),
            origin_sha256=correction_sha256 or digest,
            candidate_evidence=hints,
            source_urls=correction_urls,
        ))
    if profile_id == "wiki-124":
        dossier = RESEARCH_DIR / "wiki/cif-technodrill-2.md"
        peripherals.append(Peripheral(
            "CIF Technodrill 2 · catalog-listed drive and spindle system",
            (),
            "CIF Ed.110131 lists integrated electronics, X/Y/Z stepper motors, an 800 W spindle, and 220 V / 50 Hz supply. Exact Sorbonne unit configuration and external contacts are unverified.",
            connector_id="cif-technodrill-2-catalog-context",
            evidence_kind="context",
            numbering="Subsystem reference only; no connector pin functions or retrofit terminals are specified",
            origin_path=str(dossier.relative_to(ASSET_DIR.parent)),
            origin_sha256=source_digest(dossier),
            revision="CIF 3 & 4 axes · 3D TECHNODRILL 2 Ed.110131; fitted revision unverified",
            source_urls=(
                "https://docs.rs-online.com/8b90/0900766b80e12927.pdf",
                "https://wiki.fablab.sorbonne-universite.fr/wiki/doku.php?id=wiki:cif:introduction",
            ),
            status_label="MANUFACTURER CATALOG CONTEXT · NOT A WIRING ENDPOINT",
        ))
    return tuple(peripherals)


def checked_keys(value: object, required: set[str], optional: set[str], where: str) -> dict:
    """Keep the reference-only format closed to accidental routing extensions."""
    if not isinstance(value, dict) or not required <= value.keys() or value.keys() - required - optional:
        raise ValueError(f"Invalid reference fields at {where}")
    return value


def nonempty_text(value: object, where: str) -> str:
    if not isinstance(value, str) or not value.strip():
        raise ValueError(f"Expected nonempty text at {where}")
    return value


@lru_cache(maxsize=1)
def reference_catalog() -> tuple[dict, str]:
    raw = REFERENCE_DATA.read_bytes()
    data = checked_keys(json.loads(raw), {"schema_version", "sources", "profiles"}, set(), "root")
    if data["schema_version"] != 1:
        raise ValueError("Unsupported SmoothieBox reference schema")
    if not isinstance(data["sources"], dict) or not isinstance(data["profiles"], dict):
        raise ValueError("Reference sources/profiles must be objects")
    for source_id, value in data["sources"].items():
        source = checked_keys(value, {"dossier", "sha256", "revision", "urls"}, set(), source_id)
        for key in ("dossier", "revision"):
            nonempty_text(source[key], f"{source_id}.{key}")
        if not isinstance(source["sha256"], str) or not re.fullmatch(r"[0-9a-f]{64}", source["sha256"]):
            raise ValueError(f"Invalid captured dossier digest: {source_id}")
        if not isinstance(source["urls"], list) or not source["urls"]:
            raise ValueError(f"Missing source URLs: {source_id}")
        for url in source["urls"]:
            nonempty_text(url, source_id + ".url")
    return data, hashlib.sha256(raw).hexdigest()


def add_reference_peripherals(profile_id: str, existing: tuple[Peripheral, ...]) -> tuple[Peripheral, ...]:
    """Add dossier snapshots, reconciling only explicit, hash-bound graph aliases.

    Captured dossier hashes identify the evidence used to author the artifact;
    they are not assertions that a live web page or local dossier is unchanged.
    """
    data, artifact_digest = reference_catalog()
    section = data["profiles"].get(profile_id)
    if section is None:
        return existing
    section = checked_keys(section, {"connectors"},
                           {"graph_sha256", "candidate_routes", "replace_graph_peripherals"}, profile_id)
    # A source review may hide placeholder graph groups without rewriting history.
    replace_graph_peripherals = section.get("replace_graph_peripherals", False)
    if not isinstance(replace_graph_peripherals, bool):
        raise ValueError(f"replace_graph_peripherals must be boolean: {profile_id}")
    graph_sha256 = section.get("graph_sha256")
    if graph_sha256 is not None and (not isinstance(graph_sha256, str)
                                    or not re.fullmatch(r"[0-9a-f]{64}", graph_sha256)):
        raise ValueError(f"Invalid graph snapshot digest: {profile_id}")
    if not isinstance(section["connectors"], list):
        raise ValueError(f"Reference connectors must be a list: {profile_id}")
    result = [] if replace_graph_peripherals else list(existing)
    seen = set()
    consumed_aliases = set()
    explicit_routes: dict[str, list[FunctionEvidence]] = {}
    route_contacts: set[tuple[str, str]] = set()
    for route in section.get("candidate_routes", []):
        route = checked_keys(route, {"connector", "contact", "exterior_terminal", "reason", "interface", "checks"}, {"fanout_group"},
                             profile_id + ".candidate_route")
        for key in ("connector", "contact", "exterior_terminal", "reason", "interface"):
            nonempty_text(route[key], profile_id + ".candidate_route." + key)
        if route["exterior_terminal"] not in exterior_terminals():
            raise ValueError(f"Unknown SmoothieBox exterior terminal: {profile_id}/{route['exterior_terminal']}")
        if not isinstance(route["checks"], list) or not route["checks"] or not all(
                isinstance(check, str) and check.strip() for check in route["checks"]):
            raise ValueError(f"Candidate route needs explicit validation checks: {profile_id}/{route['contact']}")
        fanout_group = route.get("fanout_group", "")
        if not isinstance(fanout_group, str) or (fanout_group and not re.fullmatch(r"[a-z0-9][a-z0-9-]{1,63}", fanout_group)):
            raise ValueError(f"Invalid fan-out group: {profile_id}/{route['contact']}")
        route_contact = (route["connector"], route["contact"])
        if route_contact in route_contacts:
            raise ValueError(f"Duplicate candidate route for source contact: {profile_id}/{route_contact}")
        route_contacts.add(route_contact)
        explicit_routes.setdefault(route["connector"], []).append(FunctionEvidence(
            route["contact"], f"{profile_id}-design-guess-{len(route_contacts):02d}", route["reason"],
            route["interface"], tuple(route["checks"]), route["exterior_terminal"], fanout_group=fanout_group,
        ))
    declared_contacts = {
        (connector.get("id"), str(contact.get("number")))
        for connector in section["connectors"] if isinstance(connector, dict)
        for contact in connector.get("contacts", []) if isinstance(contact, dict)
    }
    if route_contacts - declared_contacts:
        raise ValueError(f"Candidate route references an unknown source contact: {profile_id}/{sorted(route_contacts - declared_contacts)}")
    for value in section["connectors"]:
        item = checked_keys(value, {"id", "name", "source", "numbering", "scope", "contacts"},
                            {"graph_alias"}, profile_id + ".connector")
        for key in ("id", "name", "source", "numbering", "scope"):
            nonempty_text(item[key], profile_id + "." + key)
        if item["id"] in seen:
            raise ValueError(f"Duplicate reference ID: {profile_id}/{item['id']}")
        seen.add(item["id"])
        if item["source"] not in data["sources"]:
            raise ValueError(f"Unknown reference source: {item['source']}")
        source = data["sources"][item["source"]]
        if not isinstance(item["contacts"], list):
            raise ValueError(f"Reference contacts must be a list: {item['id']}")
        contacts = []
        marks = set()
        for record in item["contacts"]:
            record = checked_keys(record, {"number", "label", "fact"}, {"source_relation"}, item["id"])
            mark = nonempty_text(record["number"], item["id"] + ".number")
            label = nonempty_text(record["label"], item["id"] + ".label")
            if mark in marks or mark == "?":
                raise ValueError(f"Duplicate/unknown reference position: {item['id']}/{mark}")
            marks.add(mark)
            if record["fact"] not in {"source", "source_empty", "source_unlisted", "not_transcribed", "form_inventory_only", "source_function_reference"}:
                raise ValueError(f"Invalid reference fact: {item['id']}/{mark}")
            relation = record.get("source_relation", "")
            if not isinstance(relation, str):
                raise ValueError(f"Invalid source relationship: {item['id']}/{mark}")
            if record["fact"] == "source_function_reference" and (item["id"], mark) in route_contacts:
                raise ValueError(f"Unlocated source function cannot be a routed contact: {profile_id}/{item['id']}/{mark}")
            contacts.append(Contact(mark, label, mark, record["fact"], relation))
        reference = Peripheral(
            item["name"], tuple(contacts),
            f"{source['revision']} · {item['scope']}", item["id"],
            tuple(hint.contact_id for hint in explicit_routes.get(item["id"], [])),
            evidence_kind="reference", numbering=item["numbering"],
            origin_path=f"{REFERENCE_DATA.name}#{profile_id}/{item['id']}; "
                        f"captured dossier {source['dossier']} sha256={source['sha256']}",
            candidate_evidence=tuple(explicit_routes.get(item["id"], [])),
            origin_sha256=artifact_digest, revision=source["revision"],
            source_urls=tuple(source["urls"]),
        )
        alias = item.get("graph_alias")
        matches = []
        if alias is not None:
            if graph_sha256 is None:
                raise ValueError(f"Graph alias requires a snapshot digest: {profile_id}/{item['id']}")
            alias = checked_keys(alias, {"id", "name"}, {"evidence_kind", "allow_additional_contacts"},
                                 item["id"] + ".graph_alias")
            for key in ("id", "name"):
                nonempty_text(alias[key], item["id"] + ".graph_alias." + key)
            previous_kind = alias.get("evidence_kind", "reference")
            if previous_kind not in {"reference", "reported"}:
                raise ValueError(f"Invalid graph alias evidence kind: {profile_id}/{alias['id']}")
            allow_additional_contacts = alias.get("allow_additional_contacts", False)
            if not isinstance(allow_additional_contacts, bool) or (allow_additional_contacts
                    and previous_kind != "reported"):
                raise ValueError(f"Invalid graph alias contact expansion: {profile_id}/{alias['id']}")
            if alias["id"] in consumed_aliases:
                raise ValueError(f"Repeated graph alias: {profile_id}/{alias['id']}")
            consumed_aliases.add(alias["id"])
            matches = [i for i, old in enumerate(result) if old.connector_id == alias["id"]]
            if len(matches) > 1:
                raise ValueError(f"Ambiguous reference alias: {profile_id}/{alias['id']}")
            if matches:
                old = result[matches[0]]
                if (old.name != alias["name"] or old.origin_sha256 != graph_sha256
                        or old.evidence_kind != previous_kind):
                    raise ValueError(f"Reference alias baseline changed: {profile_id}/{alias['id']}")
                if {contact.number for contact in old.contacts} - marks:
                    raise ValueError(f"Reference overlay would drop positions: {profile_id}/{alias['id']}")
                if previous_kind == "reported" and (
                        (not allow_additional_contacts and {contact.number for contact in old.contacts} != marks)
                        or old.candidate_contacts or old.candidate_evidence):
                    raise ValueError(f"Reported overlay changed contact or route inventory: {profile_id}/{alias['id']}")
        if matches:
            result[matches[0]] = reference
        else:
            if any(old.connector_id == reference.connector_id for old in result):
                raise ValueError(f"Reference ID already exists: {reference.connector_id}")
            result.append(reference)
    return tuple(result)


@lru_cache(maxsize=1)
def forum_evidence() -> dict:
    """Read exactly the 104 source-scoped forum classifications."""
    data = json.loads(FORUM_EVIDENCE.read_text())
    profiles = data.get("profiles", [])
    if data.get("schema_version") != 1 or len(profiles) != 104:
        raise ValueError(f"Unexpected forum evidence inventory: {FORUM_EVIDENCE}")
    records = {item["id"]: item for item in profiles}
    if len(records) != 104:
        raise ValueError("Duplicate forum profile in peripheral evidence")
    return records


def forum_peripherals(profile_id: str) -> tuple[Peripheral, ...]:
    """Show named source hardware while keeping unreported contacts OPEN."""
    path = RESEARCH_DIR / f"{profile_id.removeprefix('forum-')}.md"
    if not path.is_file():
        raise FileNotFoundError(f"Missing forum dossier: {path}")
    digest = source_digest(path)
    if profile_id == "forum-linuxcnc-optimill-mh50v-unlogic":
        source = ASSET_DIR / "normalized-profiles/forum-268-optimill-mh50v-unlogic-contacts.json"
        data = json.loads(source.read_text())
        items = []
        for peripheral in data["peripherals"]:
            contacts = tuple(Contact(
                str(contact["contact"]),
                str(contact["owner_drawing_observation"])
                if contact.get("owner_fact") else "Function OPEN in owner drawing",
                fact="source" if contact.get("owner_fact") else "source_unlisted",
            ) for contact in peripheral["contacts"])
            items.append(Peripheral(
                str(peripheral["connector"]), contacts,
                "Owner's historical MH50V DB44 drawing; installed drive revision and SmoothieBox interface unverified",
                evidence_kind="reference", origin_path=str(source), origin_sha256=source_digest(source),
                status_label="OWNER DRAWING REFERENCE · INSTALLED REVISION UNVERIFIED",
            ))
        return tuple(items)
    if profile_id == "forum-linuxcnc-rotarysmp-1986-maho-mh400e":
        return (
            Peripheral("MAHO 28X1 relay-board ribbon header", (
                Contact("2", "OPC1-2 machine-start/latch path; owner troubleshooting report"),),
                "Owner-reported MAHO header position; other functions and cable-core order OPEN",
                origin_path=str(path), origin_sha256=digest),
            Peripheral("MAHO 28X2 relay-board ribbon header", (
                Contact("4", "E-stop state sent to historical Mesa 7i84 TB2-2"),),
                "Owner-reported historical route; this is not a SmoothieBox safety circuit",
                evidence_kind="reference", origin_path=str(path), origin_sha256=digest,
                status_label="HISTORICAL SAFETY ROUTE · NO SMOOTHIEBOX ENDPOINT"),
            Peripheral("EXE position sensor cable", (
                Contact("?", "+5 V supply · brown conductor", "exe-brown"),
                Contact("?", "0 V return · white conductor", "exe-white"),
                Contact("?", "A channel · green conductor", "exe-green"),
                Contact("?", "B channel · blue conductor", "exe-blue")),
                "Forum-reported wire colours/functions; connector cavity numbers unreported",
                origin_path=str(path), origin_sha256=digest),
        )
    if profile_id == "forum-laseruser-x700-clone-rdc6442":
        return (Peripheral("Owner-reported Cloudray MYJG-80W PSU six-mark control bank", (
            Contact("L", "Blue lead; owner later identifies Ruida CN5/2 L-On1"),
            Contact("P", "Owner's jumper to G; water protection unvalidated"),
            Contact("G", "Yellow lead; owner's jumper to P and Ruida CN5/1 GND"),
            Contact("IN", "Red lead; owner later identifies Ruida CN5/3 LPWM1"),
            Contact("H", "No wire in owner's observed control connector"),
            Contact("5V", "No wire in owner's observed control connector")),
            "Owner's six PSU control marks; unresolved intermittent firing fault; historical Ruida circuit",
            connector_id="forum-x700-cloudray-psu-owner-observation",
            candidate_contacts=("IN",),
            numbering="Owner-reported terminal marks only; physical left-to-right order and mating view unverified",
            candidate_evidence=(FunctionEvidence(
                "IN", "x700-owner-lpwm1-to-in", "Owner reports Ruida CN5/3 LPWM1 to Cloudray IN; this supports only a PWM function analogy",
                "Installed PSU revision, input threshold, polarity, return and carrier output stage unverified",
                ("Confirm installed MYJG-80W revision and its IN input specification", "Check the SmoothieBox PWM carrier output and shared reference", "Design laser enable, water protection and interlocks separately")),),
            origin_path=str(path), origin_sha256=digest,
            status_label="OWNER-REPORTED PSU CONTROL · PWM FUNCTION GUESS ONLY"),
            Peripheral("X700 water-protection circuit / owner-reported bypass", (),
                "Owner reports Ruida CN5/4 WS1 path and a PSU P-to-G jumper; no safe switch or interlock contact map established",
                origin_path=str(path), origin_sha256=digest,
                status_label="WATER PROTECTION UNRESOLVED · NO SMOOTHIEBOX ROUTE"))
    if profile_id == "forum-linuxcnc-bassblaster-luxturn-lti-wakako-lathe":
        logical_channels = (
            ("SSR.00.out-00", "Flood coolant logical output"),
            ("SSR.00.out-01", "Spindle enable logical output"),
            ("SSR.00.out-02", "Spindle clockwise logical output"),
            ("SSR.00.out-03", "Spindle counterclockwise logical output"),
            ("SSR.00.out-04", "Machine-enabled indicator logical output"),
            ("SSR.00.out-05", "General digital output 00"),
            ("encoder.00", "Single-ended spindle encoder logical channel"),
            ("pwmgen.00", "Spindle PWM logical channel"),
        )
        return (Peripheral(
            "Mesa 7i96 logical I/O channels · source reference",
            tuple(Contact(number, label, fact="source_function_reference",
                          source_relation="forum HAL logical channel; physical terminal and cable mapping unverified")
                  for number, label in logical_channels),
            "Forum HAL names only; these are logical channels, not a physical Mesa terminal schedule",
            connector_id="forum-luxturn-mesa-logical-channels",
            evidence_kind="reference", origin_path=str(path), origin_sha256=digest,
            numbering="HAL channel name; physical terminal, signal level and machine cable unverified",
            status_label="LOGICAL CHANNEL REFERENCE · PHYSICAL CONTACT UNVERIFIED · OPEN",
        ),)

    if profile_id == "forum-linuxcnc-becksvill-nz-vmc-yuhai-servo-retrofit":
        # The owner posted a readable two-page manual screenshot, but the
        # installed drive model/revision and cabinet harness are unverified.
        # Preserve every printed reference position as OPEN source evidence;
        # no screenshot mark is treated as a fitted machine contact or route.
        manual_contacts = (
            ("1", "V-REF (alternate printed number 16)"),
            ("2", "T-REF (alternate printed number 11)"),
            ("3", "/SIGN"), ("4", "/PULS"),
            ("5", "/ALM+"), ("6", "/SO1+"),
            ("7", "/SI0 / S-ON"), ("8", "/SI3 / P-CON"),
            ("9", "/SI1 / P-OT"), ("10", "PAO"),
            ("11", "/PAO; also alternate T-REF number"),
            ("12", "PBO"), ("13", "/PBO"),
            ("14", "PCO"), ("15", "/PCO"),
            ("16", "Alternate V-REF number"), ("18", "SIGN"),
            ("19", "PULS"), ("20", "/ALM-"),
            ("21", "/SO1-"), ("22", "/SO2+"),
            ("23", "/SO3+"), ("24", "+24VIN; also printed CLR / /CLR conflict"),
            ("25", "/SI4 / ALM-RST"), ("26", "/SI5 / P-CL"),
            ("30", "SEN"), ("37", "/SO2-"),
            ("38", "/SO3-"), ("39", "/SI2 / N-OT"),
            ("40", "CLR"), ("41", "/SI6 / N-CL"),
            ("FG", "Frame-ground shell mark"),
        )
        return (Peripheral(
            "YUHAI servo-drive manual screenshot · CN3/CN1 reference positions",
            tuple(Contact(number, label, fact="source_function_reference",
                          source_relation="Owner-posted manual screenshot; installed drive label, revision and cabinet harness unverified")
                  for number, label in manual_contacts),
            "Owner-posted two-page drive manual screenshot; it labels the section CN3 while the page header says I/O Signal Connector (CN1). Printed marks are reference positions only; the fitted Chinese servo drives are not identified.",
            connector_id="forum-becksvill-yuhai-manual-screenshot-cn3-cn1",
            evidence_kind="reference", numbering="Printed screenshot positions; connector scope, mating view and installed revision unverified",
            origin_path=str(path), origin_sha256=digest,
            status_label="OWNER MANUAL REFERENCE · INSTALLED REVISION UNVERIFIED · OPEN",
        ),)

    record = forum_evidence().get(profile_id)
    if record is None or record.get("dossier") != f"src/docs/machine-research/{path.name}":
        raise ValueError(f"Forum dossier/evidence mismatch: {profile_id}")
    dossier_lines = path.read_text().splitlines()
    categories = (
        ("reported_fitted_or_used", "REPORTED FITTED / USED", "reported"),
        ("listed_for_build_unverified", "PARTS LIST · FITMENT UNVERIFIED", "reported"),
        ("historical_reference", "HISTORICAL REFERENCE", "reference"),
        ("planned_only", "PLANNED ONLY", "reference"),
        ("open_function_group", "FUNCTION / INTERFACE UNRESOLVED", "reported"),
    )
    peripherals = []
    for field, status, kind in categories:
        for item in record.get(field, []):
            line_number = item["source_line_number"]
            if line_number < 1 or line_number > len(dossier_lines) or dossier_lines[line_number - 1] != item["source_line"]:
                raise ValueError(f"Forum evidence line drift: {profile_id} / {field} / {line_number}")
            contacts = []
            for contact in item.get("contacts", []):
                contact_line_number = contact["source_line_number"]
                if (contact_line_number < 1 or contact_line_number > len(dossier_lines)
                        or dossier_lines[contact_line_number - 1] != contact["source_line"]):
                    raise ValueError(f"Forum contact evidence line drift: {profile_id} / {contact_line_number}")
                contacts.append(Contact(
                    str(contact["number"]), str(contact["label"]),
                    str(contact.get("source_id", "")), str(contact.get("fact", "source")),
                    str(contact.get("source_relation", "")),
                ))
            candidate_evidence = tuple(FunctionEvidence(
                str(hint["contact_id"]), str(hint["wire_id"]), str(hint["reason"]),
                str(hint["interface"]), tuple(str(check) for check in hint.get("checks", [])),
                str(hint.get("exterior_terminal", "")),
                str(hint.get("alternative_set", "")), str(hint.get("axis_option", "")),
                str(hint.get("axis_binding", "")), bool(hint.get("mutually_exclusive", False)),
            ) for hint in item.get("candidate_evidence", []))
            peripherals.append(Peripheral(
                str(item["name"]), tuple(contacts),
                f"{status} · dossier line {line_number} · SmoothieBox route OPEN",
                connector_id=str(item.get("connector_id", "")),
                candidate_contacts=tuple(str(contact) for contact in item.get("candidate_contacts", [])),
                evidence_kind=kind, origin_path=str(path), origin_sha256=digest,
                numbering=str(item.get("numbering", "Source marks/order only; physical mating view unverified")),
                candidate_evidence=candidate_evidence,
                status_label=status,
            ))
    if profile_id == "forum-avidcnc-seanycash-pro4896-beckhoff-twincat":
        # The owner names the E3 and EK1100 families but does not identify the
        # installed enclosure, terminal revision, or mating harness. Keep these
        # manufacturer schedules as separate OPEN reference cards and never
        # turn their functions into a SmoothieBox route.
        e3_contacts = (
            ("1", "+24 V DC user output, 100 mA"),
            ("2", "Digital input 1"),
            ("3", "Digital input 2"),
            ("4", "Digital input 3 / analogue input 2"),
            ("5", "+10 V user output, 10 mA"),
            ("6", "Analogue input 1 / digital input 4"),
            ("7", "0 V common; internally linked to terminal 9"),
            ("8", "Analogue output / digital output"),
            ("9", "0 V common; internally linked to terminal 7"),
            ("10", "Auxiliary relay common"),
            ("11", "Auxiliary relay normally-open contact"),
        )
        e3_rj45 = (
            ("1", "CAN -"), ("2", "CAN +"), ("3", "0 V"),
            ("4", "-RS485 (PC)"), ("5", "+RS485 (PC)"), ("6", "+24 V"),
            ("7", "-RS485 (Modbus RTU)"), ("8", "+RS485 (Modbus RTU)"),
        )
        ek1100_power = (
            ("1", "24 V operating supply +"), ("2", "field supply +24 V"),
            ("3", "field supply 0 V"), ("4", "protective earth"),
            ("5", "24 V operating supply 0 V"), ("6", "field supply +24 V"),
            ("7", "field supply 0 V"), ("8", "protective earth"),
        )
        ek1100_rj45 = (
            ("X1.1", "TD+"), ("X1.2", "TD-"), ("X1.3", "RD+"),
            ("X1.4", "Function not stated in source view"),
            ("X1.5", "Function not stated in source view"), ("X1.6", "RD-"),
            ("X1.7", "Function not stated in source view"),
            ("X1.8", "Function not stated in source view"),
            ("X2.1", "TD+"), ("X2.2", "TD-"), ("X2.3", "RD+"),
            ("X2.4", "Function not stated in source view"),
            ("X2.5", "Function not stated in source view"), ("X2.6", "RD-"),
            ("X2.7", "Function not stated in source view"),
            ("X2.8", "Function not stated in source view"),
        )
        official_e3 = "https://invertek.store/cdn/shop/files/82-E3I20-IN_E3_IP20_User_Guide_V1.04.pdf?v=973393679902890573"
        official_ek = "https://infosys.beckhoff.com/content/1033/ek110x_ek15xx/"
        def reference_card(name: str, items: tuple[tuple[str, str], ...], note: str,
                           source_url: str) -> Peripheral:
            return Peripheral(
                name,
                tuple(Contact(number, label, fact="source_function_reference",
                              source_relation="manufacturer family reference; installed contact unverified")
                      for number, label in items),
                note,
                connector_id=name.lower().replace(" ", "-"),
                evidence_kind="reference", origin_path=str(path), origin_sha256=digest,
                numbering="Manufacturer reference position; installed mating view and variant unverified",
                source_urls=(source_url,),
                status_label="REFERENCE ONLY · FITTED VARIANT UNVERIFIED · OPEN",
            )
        peripherals.extend((
            reference_card("Optidrive E3 IP20 control terminal strip · manufacturer reference", e3_contacts,
                           "Invertek ODE-3 IP20 User Guide V1.04 reference; the owner’s E3 enclosure and SKU are unknown",
                           official_e3),
            reference_card("Optidrive E3 IP20 built-in RJ45 · manufacturer reference", e3_rj45,
                           "Invertek ODE-3 IP20 Modbus/RJ45 reference; no owner cable, EL6020 connector or route is established",
                           official_e3),
            reference_card("Beckhoff EK1100 power contacts · manufacturer reference", ek1100_power,
                           "Beckhoff EK1100 potential-distribution reference; installed coupler revision and wiring are unknown",
                           official_ek),
            reference_card("Beckhoff EK1100 EtherCAT RJ45 X1/X2 · manufacturer reference", ek1100_rj45,
                           "Beckhoff EK1100 X1 IN/X2 OUT reference; unassigned socket positions remain explicitly unknown",
                           official_ek),
        ))
    if profile_id == "forum-buildlog-ryan-1-0-laser":
        # The related Buildlog interface PCB is a manufacturer reference, not
        # proof of Ryan's installed controller. Keep every DB25 position visible
        # and OPEN while naming only functions stated by the source blog.
        db25_contacts = tuple(
            (str(number), {
                1: "dual relay driver control 1",
                8: "dual relay driver control 2",
                14: "PWM power-control input (configurable option)",
                15: "PWM power-control input (configurable option)",
            }.get(number, "Function not stated in source view"))
            for number in range(1, 26)
        )
        reference_url = "https://www.buildlog.net/blog/2011/04/laser-interfacedriver-pcb/"
        peripherals.append(Peripheral(
            "Buildlog Laser Interface/Driver PCB standard DB25 · manufacturer reference",
            tuple(Contact(number, label, fact="source_function_reference",
                          source_relation="related manufacturer reference; Ryan installed board unverified")
                  for number, label in db25_contacts),
            "Buildlog.net blog identifies a standard 25-pin D connector; Ryan's fitted controller and cable are unknown",
            connector_id="buildlog-interface-driver-db25",
            evidence_kind="reference", origin_path=str(path), origin_sha256=digest,
            numbering="DB25 contact number; source names only pins 1, 8, 14 and 15",
            source_urls=(reference_url,),
            status_label="REFERENCE ONLY · FITTED VARIANT UNVERIFIED · OPEN",
        ))
    if profile_id == "forum-linuxcnc-currinh-sherline-cnc-lathe":
        # The owner explicitly describes a separate DB25 plug bringing out the
        # G540 terminal block and 5 V supply. No cavity/function assignment is
        # published, so preserve all 25 positions as OPEN on a peripheral.
        db25_contacts = tuple(
            Contact(str(number), "Function not stated in source; DB25 position OPEN")
            for number in range(1, 26)
        )
        peripherals.append(Peripheral(
            "Owner-reported G540 / 5 V breakout DB25 peripheral",
            db25_contacts,
            "Owner describes a DB25 plug bringing out the G540 terminal block and 5 V supply; no pin schedule or mating view is published",
            connector_id="forum-currinh-g540-breakout-db25",
            numbering="DB25 contact number; source does not assign functions",
            origin_path=str(path), origin_sha256=digest,
            status_label="OWNER-REPORTED DB25 · ALL CONTACT FUNCTIONS OPEN",
        ))
    if profile_id == "forum-linuxcnc-moosedesign-bridgeport-series2-interact4":
        # The owner listed three connector families for breakout reuse, but no
        # cavity map or function schedule. Keep each form inventory separate
        # and show every nominal position without implying installed wiring.
        for connector_name, connector_id, count in (
            ("Original encoder DB15 breakout form inventory", "forum-moosedesign-original-encoder-db15", 15),
            ("Original operator-panel DB25 breakout form inventory", "forum-moosedesign-operator-panel-db25", 25),
            ("Original Dynapath I/O IDC40 breakout form inventory", "forum-moosedesign-dynapath-idc40", 40),
        ):
            peripherals.append(Peripheral(
                connector_name,
                tuple(Contact(str(number), "Function not stated in source; nominal form position OPEN",
                              fact="form_inventory_only",
                              source_relation="Owner-listed breakout connector family; installed connector, cavity view and assignment unverified")
                      for number in range(1, count + 1)),
                "Owner-listed breakout connector family; no numbered contact-to-function table is published",
                connector_id=connector_id,
                evidence_kind="reference", numbering=f"Nominal {connector_name.split()[-3]} position; physical mating view and installed reuse unverified",
                origin_path=str(path), origin_sha256=digest,
                status_label="FORM INVENTORY ONLY · FUNCTION OPEN",
            ))
    return tuple(peripherals) or (Peripheral(
        "Machine electrical interface unidentified", (),
        f"Forum dossier {path.name} gives no source-backed peripheral or contact map",
        origin_path=str(path), origin_sha256=digest,
        status_label="ELECTRICAL INTERFACE UNIDENTIFIED",
    ),)


def extract_peripherals(article) -> tuple[Peripheral, ...]:
    """Prefer source-scoped contact tables, then named machine interfaces."""
    peripherals = []
    full_map = article.select_one(".atlas-full-map")
    if full_map:
        for index, table in enumerate(full_map.select("table"), 1):
            contacts = normalize_contacts(table)
            if not contacts:
                continue
            caption = table.find("caption")
            name = caption.get_text(" ", strip=True) if caption else f"Machine connector {index}"
            peripherals.append(Peripheral(name, contacts, "Published contact table in this profile"))
    if peripherals:
        return tuple(peripherals)

    register = article.select_one(".interface-register")
    if register:
        labels = []
        for row in register.select("tr"):
            cells = row.find_all("td", recursive=False)
            if not cells:
                continue
            label = cells[0].get_text(" ", strip=True)
            if label and label.lower() not in {"machine/controller interface", "not stated", "unknown"}:
                labels.append(label)
        for label in dict.fromkeys(labels):
            peripherals.append(Peripheral(label, (), "Named interface; individual contacts unreported"))
    return tuple(peripherals)


def extract_profiles(chunks: list[str], selected_positions: set[int]) -> list[Profile]:
    """Parse only the requested articles after indexing all 330 identities."""
    profiles = []
    for position, chunk in enumerate(chunks, 1):
        if position not in selected_positions:
            continue
        article = BeautifulSoup(chunk, "html.parser").article
        if article is None:
            continue
        heading = article.select_one(".atlas-profile-name")
        number = article.select_one(".atlas-profile-number")
        route = article.select_one(".atlas-primary-route")
        identifier = article.get("id", "")
        graph_items = graph_peripherals(identifier)
        if identifier.startswith("forum-"):
            peripheral_items = forum_peripherals(identifier)
        else:
            peripheral_items = graph_items if graph_items is not None else extract_peripherals(article)
        peripheral_items = add_reference_peripherals(identifier, peripheral_items)
        profiles.append(Profile(
            identifier=identifier,
            ordinal=number.get_text(" ", strip=True) if number else f"{position:03d}",
            title=heading.get_text(" ", strip=True) if heading else "Unnamed machine",
            category=article.get("data-category", "Unknown"),
            depth=article.get("data-depth", "lead"),
            peripherals=peripheral_items,
            evidence_note=route.get_text(" ", strip=True) if route else "No machine-side route established.",
        ))
    return profiles


def pin_kind(name: str) -> str:
    """Keep the Chapter 18 rail and motor signal color semantics."""
    upper = name.upper()
    if "GND" in upper:
        return "ground"
    if "3.3V" in upper:
        return "three"
    if "5V" in upper or "+5V" in upper:
        return "five"
    if "LOAD +" in upper or "CONTROL +" in upper:
        return "power"
    if upper == "STEP":
        return "step"
    if upper == "DIR":
        return "direction"
    if upper == "ENABLE":
        return "enable"
    if "SWITCHED" in upper:
        return "switched"
    if "SENSOR" in upper:
        return "sensor"
    if upper in {"PWM", "TTL", "SERVO"}:
        return "control"
    return "signal"


def candidate_terminal(label: str) -> tuple[str, str] | None:
    """Recognize a single function, not a return, supply, dual-use or safety path."""
    normalized = re.sub(r"[^A-Z0-9]+", " ", label.upper()).strip()
    if re.search(r"\b(GND|GROUND|RETURN|SUPPLY|PROBE|SHIELD|EARTH|UNUSED|SPARE|NC|"
                 r"ESTOP|SAFETY|DOOR|SHARED|OR)\b|\bE STOP\b", normalized):
        return None
    if re.search(r"\b(?:FUNCTION UNKNOWN|UNKNOWN FUNCTION|NOT ESTABLISHED|NOT LISTED|NOT TRANSCRIBED|UNASSIGNED)\b", normalized):
        return None
    endstops = list(re.finditer(r"\b([XYZ])\s*(?:AXIS\s*)?(?:ENDSTOP|LIMIT)\s*(MIN|MAX)\b", normalized))
    motions = list(re.finditer(r"\b([XYZA])\s*(?:AXIS\s*)?(STEP|DIRECTION|DIR|ENABLE)\b", normalized))
    if len(endstops) + len(motions) != 1:
        return None
    if endstops:
        axis, bound = endstops[0].groups()
        return f"{axis}{bound}.3", f"{axis} axis {bound.lower()} endstop signal pin"
    axis, function = motions[0].groups()
    position = {"STEP": 1, "DIR": 3, "DIRECTION": 3, "ENABLE": 5}[function]
    role = "direction" if function in {"DIR", "DIRECTION"} else function.lower()
    return f"DRV{axis}.{position}", f"{axis} axis {role} pin"


def qualified_candidates(peripheral: Peripheral, contact: Contact) -> list[tuple[str, str, FunctionEvidence | None]]:
    """Return source-qualified routes, retaining reviewed alternatives separately."""
    if (contact.number == "?" or contact.key not in peripheral.candidate_contacts
            or contact.fact not in {"source", "form_inventory_only"}):
        return []
    if peripheral.evidence_kind == "reference":
        explicit_hints = [item for item in peripheral.candidate_evidence
                          if item.contact_id == contact.key and item.exterior_terminal]
        if len(explicit_hints) != 1:
            return []
        return [(explicit_hints[0].exterior_terminal,
                 "explicit design-schematic function guess", explicit_hints[0])]
    if peripheral.evidence_kind != "reported":
        return []
    if peripheral.connector_id == "forum-x700-cloudray-psu-owner-observation" and contact.key == "IN":
        return [("PWM.1", "PWM / laser control PWM pin", None)]
    if peripheral.connector_id == "isel-mchipser-driver-function-guesses":
        explicit_hints = [item for item in peripheral.candidate_evidence
                          if item.contact_id == contact.key and item.exterior_terminal]
        return [(hint.exterior_terminal, "explicit owner-proposal function guess", hint)
                for hint in explicit_hints]
    candidate = candidate_terminal(contact.label)
    return [(candidate[0], candidate[1], None)] if candidate else []


# Stable four-edge organization; all coordinates below are absolute SVG units.
# The smaller square is an illustrative layout, not a changed carrier footprint.
CASE_X, CASE_Y, CASE_SIZE = 60, 360, 1800
CASE_RIGHT, CASE_BOTTOM = CASE_X + CASE_SIZE, CASE_Y + CASE_SIZE
CARD_WIDTH = 1340


@dataclass(frozen=True)
class ExteriorTerminal:
    key: str
    bank: str
    side: str
    number: int
    source_label: str
    role: str
    x: int
    y: int

    @property
    def svg_id(self) -> str:
        return "sb-" + self.key.replace(".", "-")


def exterior_role(bank: str, number: int, label: str) -> str:
    """Expand function names without inventing selected rails or board pins."""
    if bank.startswith("DRV"):
        role = {1: "step", 2: "step return GND", 3: "direction",
                4: "direction return GND", 5: "enable", 6: "enable return GND"}[number]
        return f"{bank[-1]} axis {role} pin"
    if bank in {f"{axis}{bound}" for axis in "XYZ" for bound in ("MIN", "MAX")}:
        role = {"SENSOR +": "sensor +", "GND": "GND", "SIGNAL": "signal"}[label]
        return f"{bank[0]} axis {bank[1:].lower()} endstop {role} pin"
    if bank == "AUX":
        channel = (number + 1) // 2
        return f"Analog input {channel} {'signal' if number % 2 else 'GND'} pin"
    if bank == "TEMP":
        channel = (number + 1) // 2
        return f"Temperature {channel} {'sensor' if number % 2 else 'GND'} pin"
    names = {
        "POWER": "Load power input", "FIVEIN": "5 V input", "FIVEOUT": "5 V accessory output",
        "HEA": "Hotend A", "HEB": "Hotend B", "BED": "Bed switch control",
        "FANA": "Fan A", "FANB": "Fan B", "SSR1": "SSR 1 control", "SSR2": "SSR 2 control",
        "PWM": "PWM / laser control", "PROBE": "Probe / servo",
    }
    return f"{names[bank]} {label} pin"


def exterior_terminals() -> dict[str, ExteriorTerminal]:
    north = {"POWER": 220, "FIVEIN": 420, "FIVEOUT": 620, "AUX": 1500}
    south = {"DRVX": 240, "DRVY": 660, "DRVZ": 1080, "DRVA": 1500}
    east = {bank: 730 + 120 * i for i, bank in enumerate(("XMIN", "XMAX", "YMIN", "YMAX", "ZMIN", "ZMAX"))}
    east.update({"PROBE": 1450, "TEMP": 1610})
    west = {bank: 730 + 120 * i for i, bank in enumerate(("HEA", "HEB", "BED", "FANA", "FANB", "SSR1", "SSR2", "PWM"))}
    terminals = {}
    for bank, side, title, pins in BANKS:
        for number, label in enumerate(pins, 1):
            if side == "north":
                x, y = north[bank] + (number - 1) * 48, CASE_Y
            elif side == "south":
                x, y = south[bank] + (number - 1) * 48, CASE_BOTTOM
            else:
                x = CASE_RIGHT if side == "east" else CASE_X
                y = (east if side == "east" else west)[bank] + (number - 1) * 30
            key = f"{bank}.{number}"
            if key in terminals:
                raise ValueError(f"Duplicate exterior contact {key}")
            terminals[key] = ExteriorTerminal(key, bank, side, number, label, exterior_role(bank, number, label), x, y)
    if len(terminals) != 82 or len(BANKS) != 24:
        raise ValueError("The proposed Chapter 18 inventory must remain 24 banks / 82 contacts")
    return terminals


def lines_for(value: str, width: int, font_size: int) -> list[str]:
    """Wrap the complete text, including long tokens; never truncate a source."""
    limit = max(8, int(width / (font_size * 0.68)))
    return textwrap.wrap(" ".join(value.split()), width=limit, break_long_words=True,
                         break_on_hyphens=False) or [""]


def text_lines(lines: list[str], x: int, baseline: int, css: str, leading: int,
               anchor: str = "start") -> list[str]:
    return [f'<text x="{x}" y="{baseline + i * leading}" class="{css}" text-anchor="{anchor}">{xml(line)}</text>'
            for i, line in enumerate(lines)]


def draw_perimeter(terminals: dict[str, ExteriorTerminal], used: set[str], counts: dict[str, int]) -> list[str]:
    output = [f'<g id="smoothiebox-exterior" data-controller="smoothiebox-exterior-only">',
              f'<rect x="{CASE_X}" y="{CASE_Y}" width="{CASE_SIZE}" height="{CASE_SIZE}" rx="18" class="case"/>']
    output.extend((
        f'<rect x="{CASE_X + 110}" y="{CASE_Y + 270}" width="{CASE_SIZE - 220}" height="74" rx="12" class="carrier-header"/>',
        f'<text x="{CASE_X + CASE_SIZE // 2}" y="{CASE_Y + 303}" class="carrier-header-title" text-anchor="middle">SMOOTHIEBOX · EXTERIOR FIELD PERIMETER</text>',
        f'<text x="{CASE_X + CASE_SIZE // 2}" y="{CASE_Y + 328}" class="carrier-header-note" text-anchor="middle">INTERNAL BOARD, DRIVER CIRCUIT AND SAFETY LOGIC OMITTED · ONLY OUTSIDE CONNECTORS SHOWN</text>',
    ))
    for bank, side, title, pins in BANKS:
        first = terminals[f"{bank}.1"]
        output.append(f'<g class="bank" data-exterior-bank="{bank}" data-side="{side}">')
        last = terminals[f"{bank}.{len(pins)}"]
        if side in {"north", "south"}:
            shell_y = CASE_Y + 360 if side == "north" else CASE_BOTTOM - 62
            shell_height = 42
            output.append(f'<rect x="{first.x - 30}" y="{shell_y}" width="{last.x - first.x + 60}" height="{shell_height}" rx="8" class="connector-shell"/>')
        else:
            shell_x = CASE_RIGHT - 62 if side == "east" else CASE_X + 20
            shell_width = 42
            output.append(f'<rect x="{shell_x}" y="{first.y - 22}" width="{shell_width}" height="{last.y - first.y + 44}" rx="8" class="connector-shell"/>')
        if side in {"north", "south"}:
            center = first.x + (len(pins) - 1) * 24
            baseline = CASE_Y - 62 if side == "north" else CASE_BOTTOM - 365
            output.append(f'<text x="{center}" y="{baseline}" class="bank-title" text-anchor="middle">{xml(title)}</text>')
            if side == "south":
                output.append(f'<text x="{center}" y="{baseline + 24}" class="small" text-anchor="middle">CONTROL TO EXTERNAL DRIVER</text>')
        else:
            x = CASE_RIGHT - 36 if side == "east" else CASE_X + 36
            anchor = "end" if side == "east" else "start"
            output.append(f'<text x="{x}" y="{first.y - 29}" class="bank-title" text-anchor="{anchor}">{xml(title)}</text>')
        for number in range(1, len(pins) + 1):
            pin = terminals[f"{bank}.{number}"]
            rim = " terminal-candidate" if pin.key in used else ""
            kind = pin_kind(pin.source_label)
            color = "#806700" if kind == "power" else PALETTE[kind]
            output.extend((
                f'<g id="{pin.svg_id}" data-exterior-contact="{pin.key}" data-role="{xml(pin.role)}" '
                f'data-source-label="{xml(pin.source_label)}" data-x="{pin.x}" data-y="{pin.y}">',
                f'<title>{xml(pin.key)} · {xml(pin.role)} · proposed carrier contact; not a mating view</title>',
                f'<rect x="{pin.x - 15}" y="{pin.y - 14}" width="30" height="28" rx="4" class="terminal{rim}"/>',
                f'<circle cx="{pin.x}" cy="{pin.y}" r="7" class="screw" style="fill:{color}"/>',
            ))
            # Dark gold retains the yellow/load meaning without pale text on ivory.
            if side in {"north", "south"}:
                ny = pin.y - 24 if side == "north" else pin.y - 20
                ty = pin.y + 38 if side == "north" else pin.y - 50
                angle = 90 if side == "north" else -90
                output.append(f'<text x="{pin.x}" y="{ny}" class="pin-number" text-anchor="middle">{number}</text>')
                output.append(f'<text x="{pin.x}" y="{ty}" transform="rotate({angle} {pin.x} {ty})" '
                              f'class="pin-label" style="fill:{color}">{xml(pin.role)}</text>')
            else:
                tx = pin.x - 36 if side == "east" else pin.x + 36
                anchor = "end" if side == "east" else "start"
                output.append(f'<text x="{tx}" y="{pin.y + 7}" class="pin-label" text-anchor="{anchor}" '
                              f'style="fill:{color}">{number} · {xml(pin.role)}</text>')
            output.append('</g>')
        output.append('</g>')
    services = (("USB DEVICE", 880), ("USB HOST", 1030), ("ETHERNET", 1180), ("microSD", 1330))
    for label, x in services:
        output.extend((
            f'<g data-service-port="{xml(label)}"><title>{xml(label)} · separate service port; no machine route specified</title>',
            f'<rect x="{x - 51}" y="{CASE_Y - 18}" width="102" height="38" rx="5" class="service"/>',
            f'<text x="{x}" y="{CASE_Y - 38}" class="service-label" text-anchor="middle">{xml(label)}</text></g>',
        ))
    center = CASE_X + CASE_SIZE // 2
    form_inventory_count = counts.get("form_inventory_contacts", 0)
    position_summary = f"{counts.get('source_positions', counts['machine_contacts'])} source positions"
    if form_inventory_count:
        position_summary += f" · {form_inventory_count} form-only positions"
    if counts.get("source_function_references", 0):
        position_summary += f" · {counts['source_function_references']} source-model functions"
    if counts.get("source_wire_references", 0):
        position_summary += f" · {counts['source_wire_references']} wire references"
    if counts.get("source_nonpin_references", 0):
        position_summary += f" · {counts['source_nonpin_references']} physical posts"
    if counts.get("source_function_references", 0):
        reference_summary = f"{counts['reference_contacts']} source-reference entries; function keys are not physical positions"
    elif counts.get("source_wire_references", 0) or counts.get("source_nonpin_references", 0):
        reference_summary = f"{counts['reference_contacts']} source-reference entries; positions, wires and physical points kept distinct"
    else:
        reference_summary = f"{counts['reference_contacts']} source-reference positions; only explicit dotted guesses are routed"
    summary = [
        "EXTERIOR CONTACT STUDY",
        "82 proposed contacts · 24 banks · 4 service ports",
        "Chapter 18 functional groups; illustrative layout",
        f"{position_summary} · {counts['guesses']} dotted function candidates",
        reference_summary,
        "NO INSTALLED SMOOTHIEBOX WIRING ESTABLISHED",
        "No Core board, internal driver or safety circuit is depicted.",
        "Rail selection, ratings, returns and fitted carrier remain unqualified.",
    ]
    output.append(f'<text x="{center}" y="1025" class="case-title" text-anchor="middle">SMOOTHIEBOX</text>')
    output.extend(text_lines(summary, center, 1070, "case-note", 38, "middle"))
    output.append('</g>')
    return output


@dataclass(frozen=True)
class MachinePort:
    peripheral_index: int
    contact_index: int
    x: int
    y: int
    width: int
    height: int
    number_lines: tuple[str, ...]
    label_lines: tuple[str, ...]
    status_lines: tuple[str, ...]
    route_id: str

    @property
    def svg_id(self) -> str:
        return f"machine-p{self.peripheral_index + 1:03d}-c{self.contact_index + 1:03d}"


@dataclass(frozen=True)
class PeripheralLayout:
    index: int
    x: int
    y: int
    width: int
    height: int
    title_lines: tuple[str, ...]
    source_lines: tuple[str, ...]
    numbering_lines: tuple[str, ...]
    boundary_lines: tuple[str, ...]
    ports: tuple[MachinePort, ...]


def family_label(name: str) -> str:
    match = re.search(r"\b(?:DB|D[- ]?SUB)\s*(15|25|44)\b|\b(15|25|44)[- ](?:PIN|CONTACT).{0,20}\bD[- ]?SUB\b", name, re.I)
    if match and "hypothetical" in name.lower():
        return "HYPOTHETICAL D-SUB " + next(group for group in match.groups() if group)
    if match:
        return "D-SUB " + next(group for group in match.groups() if group)
    if "ribbon" in name.lower():
        return "RIBBON / LOOM"
    if re.search(r"\bUTM\b", name, re.I):
        return "UTM REFERENCE"
    return "MACHINE INTERFACE"


def layout_peripheral(peripheral: Peripheral, index: int, x: int, y: int,
                      candidates: dict[tuple[int, int], list[tuple[str, str, str, FunctionEvidence | None]]]) -> PeripheralLayout:
    if peripheral.evidence_kind not in {"reported", "reference", "context"}:
        raise ValueError(f"Unknown peripheral evidence kind: {peripheral.evidence_kind}")
    if peripheral.evidence_kind == "context" and peripheral.contacts:
        raise ValueError("A context-only controller must not expose connection endpoints")
    title = lines_for(peripheral.name, CARD_WIDTH - 48, 28)
    source = lines_for(peripheral.source, CARD_WIDTH - 48, 18)
    numbering = lines_for(peripheral.numbering, CARD_WIDTH - 48, 18)
    content_top = y + 70 + len(title) * 34 + len(source) * 23 + len(numbering) * 23
    ports = []
    boundary = []
    if not peripheral.contacts:
        message = ("CONTEXT ONLY — existing control system. Replacement/coexistence is unresolved; no SmoothieBox endpoint selected."
                   if peripheral.evidence_kind == "context" else
                   "OPEN BOUNDARY — no individual contact map in current atlas evidence. Named hardware is not a pinout; no route is drawn.")
        boundary = lines_for(message, CARD_WIDTH - 80, 23)
        bottom = content_top + 36 + len(boundary) * 30
    else:
        has_candidates = any(key[0] == index for key in candidates)
        columns = 2 if len(peripheral.contacts) >= 12 and not has_candidates else 1
        column_width = (CARD_WIDTH - 48) // columns
        per_column = (len(peripheral.contacts) + columns - 1) // columns
        bottom = content_top
        for column in range(columns):
            row_y = content_top
            start = column * per_column
            for contact_index in range(start, min(start + per_column, len(peripheral.contacts))):
                contact = peripheral.contacts[contact_index]
                contact_candidates = candidates.get((index, contact_index), [])
                route_id = " / ".join(candidate[2] for candidate in contact_candidates)
                if contact_candidates and any(candidate[3] and candidate[3].alternative_set for candidate in contact_candidates):
                    axes = "/".join(candidate[3].axis_option for candidate in contact_candidates if candidate[3])
                    function = "STEP" if contact.label == "PUL+" else "DIR"
                    status = f"{route_id} · GUESS · {axes} {function} alternatives; choose one axis · NEVER JOIN"
                elif contact_candidates and any(candidate[3] and candidate[3].fanout_group for candidate in contact_candidates):
                    fanout_group = next(candidate[3].fanout_group for candidate in contact_candidates if candidate[3])
                    status = f"{route_id} · GUESS · shared fan-out {fanout_group}"
                else:
                    status = (f"{route_id} · GUESS · {contact_candidates[0][1]}"
                              if contact_candidates else "OPEN · no SmoothieBox route selected")
                full_label = contact.label + (" · " + contact.source_relation if contact.source_relation else "")
                label_lines = lines_for(full_label, column_width - 130, 22)
                status_lines = lines_for(status, column_width - 130, 17)
                number_lines = lines_for(contact.number, 82, 18)
                row_height = max(46, len(label_lines) * 27 + len(status_lines) * 22 + 16,
                                 len(number_lines) * 22 + 18)
                px = x if column == 0 else x + 24 + column * column_width
                ports.append(MachinePort(index, contact_index, px, row_y + 20, column_width, row_height,
                                         tuple(number_lines), tuple(label_lines), tuple(status_lines), route_id))
                row_y += row_height
            bottom = max(bottom, row_y)
    return PeripheralLayout(index, x, y, CARD_WIDTH, bottom - y + 24, tuple(title), tuple(source),
                            tuple(numbering), tuple(boundary), tuple(ports))


def draw_peripheral(peripheral: Peripheral, layout: PeripheralLayout) -> list[str]:
    context = peripheral.evidence_kind == "context"
    attribute = "data-machine-context" if context else "data-machine-peripheral"
    connector_family = family_label(peripheral.name)
    is_dsub = connector_family.startswith("D-SUB ")
    kind_label = peripheral.status_label or {"reference": "SOURCE REFERENCE ONLY · INSTALLED REVISION NOT ESTABLISHED",
                  "reported": "REPORTED MACHINE INTERFACE · FIT / ELECTRICAL CONTRACT UNVERIFIED",
                  "context": "EXISTING CONTROL SYSTEM · NOT A SELECTED CONNECTION ENDPOINT"}[peripheral.evidence_kind]
    x, y = layout.x, layout.y
    output = [
        f'<g class="peripheral" {attribute}="{xml(peripheral.name)}" data-evidence-kind="{peripheral.evidence_kind}" '
        f'data-connector-id="{xml(peripheral.connector_id)}" '
        f'data-connector-form="{"d-sub" if is_dsub else "source-described"}">',
        f'<title>{xml(peripheral.name)} · {xml(peripheral.source)}</title>',
        f'<rect x="{x}" y="{y}" width="{layout.width}" height="{layout.height}" rx="12" '
        f'class="{"context-card" if context else "peripheral-card"}"/>',
        f'<rect x="{x}" y="{y}" width="10" height="{layout.height}" rx="5" class="peripheral-accent-{"context" if context else peripheral.evidence_kind}"/>',
        f'<text x="{x + 24}" y="{y + 30}" class="evidence-label">{xml(kind_label)}</text>',
    ]
    output.extend((
        f'<rect x="{x + layout.width - 242}" y="{y + 14}" width="218" height="30" rx="15" class="connector-badge"/>',
        f'<text x="{x + layout.width - 133}" y="{y + 35}" class="connector-badge-text" text-anchor="middle">{xml(connector_family)}</text>',
    ))
    baseline = y + 67
    output.extend(text_lines(list(layout.title_lines), x + 24, baseline, "peripheral-name", 34))
    baseline += len(layout.title_lines) * 34
    output.extend(text_lines(list(layout.source_lines), x + 24, baseline, "source-line", 23))
    baseline += len(layout.source_lines) * 23
    output.extend(text_lines(list(layout.numbering_lines), x + 24, baseline, "source-line", 23))
    baseline += len(layout.numbering_lines) * 23
    if layout.boundary_lines:
        output.append(f'<g data-boundary-state="{"context" if context else "open"}">')
        output.extend(text_lines(list(layout.boundary_lines), x + 40, baseline + 35, "boundary-text", 30))
        output.append('</g>')
    else:
        has_only_form_slots = bool(peripheral.contacts) and all(
            contact.fact == "form_inventory_only" for contact in peripheral.contacts
        )
        has_form_slots = any(contact.fact == "form_inventory_only" for contact in peripheral.contacts)
        has_wire_references = any(contact.fact == "source_wire_reference" for contact in peripheral.contacts)
        has_nonpin_references = any(contact.fact == "source_nonpin_reference" for contact in peripheral.contacts)
        has_function_references = any(contact.fact == "source_function_reference" for contact in peripheral.contacts)
        if has_function_references:
            contact_order_label = ("SOURCE-MODEL FUNCTION KEYS; NO CONTACT ORDER OR FITTED PIN MAPPING"
                                   if all(contact.fact == "source_function_reference" for contact in peripheral.contacts) else
                                   "SOURCE ENTRIES + FUNCTION KEYS; FUNCTION KEYS ARE NOT PHYSICAL CONTACTS")
        elif has_only_form_slots:
            contact_order_label = "EDITORIAL FORM SLOTS; CAVITY ORDER UNKNOWN"
        elif has_form_slots:
            contact_order_label = "SOURCE POSITIONS + EDITORIAL FORM SLOTS; CAVITY ORDER UNKNOWN"
        elif has_wire_references:
            contact_order_label = "SOURCE LOCATORS + UNLOCATED WIRE REFERENCES; NO PHYSICAL PIN-ROW GEOMETRY"
        elif has_nonpin_references:
            contact_order_label = "SOURCE LOCATORS + PHYSICAL ATTACHMENT POINTS; NO PIN-ROW GEOMETRY"
        else:
            contact_order_label = "EXPANDED SOURCE-ORDER CONTACTS, NOT PHYSICAL PIN-ROW GEOMETRY"
        output.append(f'<text x="{x + 24}" y="{baseline + 1}" class="small">{xml(connector_family)} · {contact_order_label}</text>')
    for port in layout.ports:
        contact = peripheral.contacts[port.contact_index]
        contact_reference_kind = {
            "form_inventory_only": "editorial form slot",
            "source_wire_reference": "source-named wire reference",
            "source_nonpin_reference": "source-named physical attachment",
            "source_function_reference": "source-model function",
        }.get(contact.fact, "source position")
        number_height = max(30, len(port.number_lines) * 22 + 8)
        output.extend((
            f'<g id="{port.svg_id}" data-machine-contact="{xml(contact.key)}" data-contact-mark="{xml(contact.number)}" ' +
            ('data-contact-domain="source-model-function" ' if contact.fact == "source_function_reference" else "") +
            f'data-contact-fact="{xml(contact.fact)}" data-route-state="{"guess" if port.route_id else "open"}" '
            f'data-x="{port.x}" data-y="{port.y}">',
            f'<title>{xml(peripheral.name)} · {contact_reference_kind} {xml(contact.number)} · {xml(contact.label)} · {xml(contact.source_relation)}</title>',
            f'<circle cx="{port.x}" cy="{port.y}" r="8" class="{"candidate-socket" if port.route_id else "open-socket"}"/>',
            f'<rect x="{port.x + 16}" y="{port.y - 17}" width="90" height="{number_height}" rx="8" class="number-pill"/>',
        ))
        output.extend(text_lines(list(port.number_lines), port.x + 61, port.y + 5, "number-text", 22, "middle"))
        output.extend(text_lines(list(port.label_lines), port.x + 120, port.y + 5, "machine-contact", 27))
        output.extend(text_lines(list(port.status_lines), port.x + 120,
                                 port.y + 5 + len(port.label_lines) * 27,
                                 "guess-status" if port.route_id else "open-status", 22))
        output.append('</g>')
    output.append('</g>')
    return output


def route_path(points: list[tuple[int, int]]) -> str:
    commands = [f"M{points[0][0]} {points[0][1]}"]
    for previous, point in zip(points, points[1:]):
        if point[0] == previous[0]:
            commands.append(f"V{point[1]}")
        elif point[1] == previous[1]:
            commands.append(f"H{point[0]}")
        else:
            raise ValueError("Unexpected non-orthogonal candidate route")
    return " ".join(commands)


SVG_STYLE = """
text{font-family:Arial,Helvetica,sans-serif;fill:#21382d}
.background{fill:#edf2ec}.title{font-size:38px;font-weight:800}
.subtitle{font-size:23px;fill:#4e6758}.eyebrow{font-size:18px;font-weight:800;fill:#087b60}
.case{fill:#fffef9;stroke:#29513e;stroke-width:4}.carrier-header{fill:#e6efe8;stroke:#4d8065;stroke-width:2}.carrier-header-title{font-size:28px;font-weight:850;letter-spacing:1px}.carrier-header-note{font-size:15px;fill:#526a5b;letter-spacing:.5px}.connector-shell{fill:#d9e6dc;stroke:#4d8065;stroke-width:2}.case-title{font-size:44px;font-weight:800}
.case-note{font-size:20px;fill:#526a5b}.terminal{fill:#35ba58;stroke:#1b6338;stroke-width:2}
.terminal-candidate{stroke:#7443a4;stroke-width:4}.screw{fill:#c8d2d3;stroke:#496367;stroke-width:2}
.bank-title{font-size:19px;font-weight:800}.pin-label{font-size:20px;font-weight:650}
.pin-number{font-size:18px;font-weight:800}.service{fill:#26373b;stroke:#72898c;stroke-width:3}
.service-label{font-size:17px;font-weight:800}.small{font-size:16px;fill:#526a5b}
.peripheral-card{fill:#fffef9;stroke:#83a18b;stroke-width:2}.peripheral-accent-reported{fill:#277552}.peripheral-accent-reference{fill:#9b6b1e}.peripheral-accent-context{fill:#75837d}.connector-badge{fill:#e6efe8;stroke:#4d8065;stroke-width:1.5}.connector-badge-text{font-size:14px;font-weight:800;fill:#2f654d;letter-spacing:.5px}
.context-card{fill:#e8eceb;stroke:#72817b;stroke-width:2}
.evidence-label{font-size:17px;font-weight:800;fill:#526a5b}
.peripheral-name{font-size:28px;font-weight:800}.source-line{font-size:18px;fill:#526a5b}
.boundary-text{font-size:23px;font-weight:700;fill:#526a5b}
.open-socket{fill:#fffef9;stroke:#526a5b;stroke-width:2}
.candidate-socket{fill:#fffef9;stroke:#7443a4;stroke-width:4}
.number-pill{fill:#26373b}.number-text{font-size:18px;font-weight:800;fill:white}
.machine-contact{font-size:22px;font-weight:650}.open-status{font-size:17px;fill:#64716a}
.guess-status{font-size:17px;font-weight:800;fill:#613d85}
.guess-wire{fill:none;stroke:#7443a4;stroke-width:4;stroke-dasharray:2 10;stroke-linecap:round;stroke-linejoin:round}
.route-clearance{fill:none;stroke:#edf2ec;stroke-width:12;stroke-linecap:round;stroke-linejoin:round}
.legend-title{font-size:25px;font-weight:800}.legend{font-size:22px;fill:#42584b}
"""


def render(profile: Profile) -> tuple[str, dict[str, int]]:
    """Draw actual exterior endpoints and machine contact boundaries in one scene."""
    peripherals = profile.peripherals or (Peripheral(
        "Machine identity only · electrical interface unidentified", (),
        "Current profile evidence identifies no source-scoped connection endpoint",
        evidence_kind="context",
        status_label="MACHINE IDENTITY ONLY · NO CONNECTOR ESTABLISHED",
    ),)
    terminals = exterior_terminals()
    candidates: dict[tuple[int, int], list[tuple[str, str, str, FunctionEvidence | None]]] = {}
    for pi, peripheral in enumerate(peripherals):
        for ci, contact in enumerate(peripheral.contacts):
            contact_candidates = qualified_candidates(peripheral, contact)
            for terminal_key, meaning, evidence in contact_candidates:
                if terminal_key not in terminals:
                    raise ValueError(f"Candidate has no exterior terminal: {terminal_key}")
                route_id = f"G{sum(len(items) for items in candidates.values()) + 1:02d}"
                candidates.setdefault((pi, ci), []).append((terminal_key, meaning, route_id, evidence))
    candidate_routes = [(key, candidate) for key, routes_for_contact in candidates.items()
                        for candidate in routes_for_contact]
    counts = {
        "peripherals": len(peripherals),
        "machine_contacts": sum(len(item.contacts) for item in peripherals),
        "guesses": len(candidate_routes),
        "reference_contacts": sum(len(item.contacts) for item in peripherals if item.evidence_kind == "reference"),
        "context_devices": sum(item.evidence_kind == "context" for item in peripherals),
    }
    form_inventory_contacts = sum(
            contact.fact == "form_inventory_only"
            for item in peripherals for contact in item.contacts
        )
    wire_reference_count = sum(
            contact.fact == "source_wire_reference"
            for item in peripherals for contact in item.contacts
        )
    nonpin_reference_count = sum(
            contact.fact == "source_nonpin_reference"
            for item in peripherals for contact in item.contacts
        )
    function_reference_count = sum(
            contact.fact == "source_function_reference"
            for item in peripherals for contact in item.contacts
        )
    if function_reference_count:
        counts["source_function_references"] = function_reference_count
        # Reference-only inventories establish no installed-machine contact positions.
        if all(item.evidence_kind in {"reference", "context"} for item in peripherals):
            counts["installed_machine_contact_positions"] = 0
    if form_inventory_contacts:
        counts["form_inventory_contacts"] = form_inventory_contacts
    if form_inventory_contacts or wire_reference_count or nonpin_reference_count or function_reference_count:
        counts["source_positions"] = counts["machine_contacts"] - form_inventory_contacts - wire_reference_count - nonpin_reference_count - function_reference_count
    if wire_reference_count:
        counts["source_wire_references"] = wire_reference_count
    if nonpin_reference_count:
        counts["source_nonpin_references"] = nonpin_reference_count
    counts["open_contacts"] = counts["machine_contacts"] - counts["guesses"]
    # Incoming routes terminate on each card's left edge. Keep cards right of
    # every route rail so their opaque backgrounds cannot hide the final leg.
    card_columns = 2 if not candidates and len(peripherals) >= 7 else 1
    card_gap = 36
    card_x = CASE_RIGHT + max(360, 160 + 26 * len(candidate_routes))
    west_count = sum(terminals[candidate[0]].side == "west" for _, candidate in candidate_routes)
    left_edge = min(0, CASE_X - 180 - (west_count - 1) * 26) if west_count else 0
    routed_lane_right = CASE_RIGHT + 70 + max(0, len(candidate_routes) - 1) * 26 + 120
    right_edge = max(
        card_x + card_columns * CARD_WIDTH + (card_columns - 1) * card_gap + 60,
        routed_lane_right if candidate_routes else 0,
    )
    width = right_edge - left_edge
    layouts = []
    first_card_y = CASE_Y
    column_bottoms = [first_card_y] * card_columns
    order = sorted(range(len(peripherals)), key=lambda i: (
        peripherals[i].evidence_kind == "context", not any(key[0] == i for key in candidates), i,
    ))
    for index in order:
        item = peripherals[index]
        column = min(range(card_columns), key=lambda value: column_bottoms[value])
        item_x = card_x + column * (CARD_WIDTH + card_gap)
        measurement = layout_peripheral(item, index, item_x, 0, candidates)
        anchors = [terminals[candidate[0]].y for key, candidate in candidate_routes if key[0] == index]
        desired = (min(CASE_Y + 400, max(CASE_Y, int(sum(anchors) / len(anchors) - measurement.height / 2)))
                   if anchors else CASE_Y)
        top = max(column_bottoms[column], desired)
        placement = layout_peripheral(item, index, item_x, top, candidates)
        layouts.append(placement)
        column_bottoms[column] = top + placement.height + 32
    ports = {(port.peripheral_index, port.contact_index): port for item in layouts for port in item.ports}
    routes = []
    route_inventory = []
    max_route_y = CASE_BOTTOM
    south_index = 0
    west_index = 0
    for index, (key, value) in enumerate(candidate_routes):
        terminal_key, meaning, route_id, route_evidence = value
        source, destination = terminals[terminal_key], ports[key]
        lane_x = CASE_RIGHT + 70 + index * 26
        if source.side == "east":
            points = [(source.x, source.y), (lane_x, source.y), (lane_x, destination.y), (destination.x, destination.y)]
        elif source.side == "south":
            below = CASE_BOTTOM + 125 + south_index * 26
            south_index += 1
            max_route_y = max(max_route_y, below)
            points = [(source.x, source.y), (source.x, below), (lane_x, below), (lane_x, destination.y), (destination.x, destination.y)]
        elif source.side == "west":
            below = CASE_BOTTOM + 125 + south_index * 26
            left_lane_x = CASE_X - 120 - west_index * 26
            south_index += 1
            west_index += 1
            max_route_y = max(max_route_y, below)
            points = [(source.x, source.y), (left_lane_x, source.y), (left_lane_x, below),
                      (lane_x, below), (lane_x, destination.y), (destination.x, destination.y)]
        else:
            raise ValueError(f"No safe routing lane for candidate side {source.side}")
        path = route_path(points)
        peripheral = peripherals[key[0]]
        contact = peripheral.contacts[key[1]]
        evidence = [route_evidence] if route_evidence else []
        evidence_text = " ".join(
            f"Basis: {item.reason} Interface: {item.interface} Checks: {'; '.join(item.checks)}"
            for item in evidence
        )
        explanation = (f"{route_id}: {meaning} to {peripheral.name} position {contact.number} ({contact.label}). "
                       "FUNCTION GUESS ONLY, not a direct cable or a fitted conductor. "
                       f"{evidence_text}")
        alternative_attributes = ""
        fanout_attribute = ""
        if route_evidence and route_evidence.alternative_set:
            alternative_attributes = (
                f' data-alternative-set="{xml(route_evidence.alternative_set)}"'
                f' data-axis-option="{xml(route_evidence.axis_option)}"'
                f' data-axis-binding="{xml(route_evidence.axis_binding)}"'
                f' data-mutually-exclusive="{str(route_evidence.mutually_exclusive).lower()}"'
            )
        if route_evidence and route_evidence.fanout_group:
            fanout_attribute = f' data-fanout-group="{xml(route_evidence.fanout_group)}"'
        routes.extend((
            f'<g class="candidate-route" data-state="inferred" data-kind="function" data-route-id="{route_id}" '
            f'data-from="{source.svg_id}" data-to="{destination.svg_id}"{alternative_attributes}{fanout_attribute}>',
            f'<title>{xml(explanation)}</title>',
            f'<path d="{path}" class="route-clearance" data-decoration="crossing-clearance" aria-hidden="true"/>',
            f'<path d="{path}" class="guess-wire" data-guess="{route_id}"/>',
            '</g>',
        ))
        route_record = {
            "id": route_id, "state": "inferred", "kind": "function", "from": source.svg_id,
            "to": destination.svg_id, "points": points,
            "source_graph_hints": [dict(wire_id=item.wire_id, reason=item.reason,
                                        interface=item.interface, checks=list(item.checks),
                                        exterior_terminal=item.exterior_terminal,
                                        alternative_set=item.alternative_set, axis_option=item.axis_option,
                                        axis_binding=item.axis_binding,
                                        mutually_exclusive=item.mutually_exclusive,
                                        fanout_group=item.fanout_group) for item in evidence],
        }
        if route_evidence and route_evidence.alternative_set:
            route_record.update(alternative_set=route_evidence.alternative_set,
                                axis_option=route_evidence.axis_option,
                                axis_binding=route_evidence.axis_binding,
                                mutually_exclusive=route_evidence.mutually_exclusive)
        if route_evidence and route_evidence.fanout_group:
            route_record["fanout_group"] = route_evidence.fanout_group
        route_inventory.append(route_record)
    legend_top = max(CASE_BOTTOM + 155, max(column_bottoms) + 12, max_route_y + 60)
    legend_entries = [
        "DOTTED VIOLET = FUNCTION GUESS ONLY. Paths start at the actual drawn exterior screw and end at the named machine contact. No installed continuity or direct cable is established.",
        "OPEN / hollow contact = no SmoothieBox route selected in this study. This does not mean an electrically open circuit, unused pin or NC in the source. Source-empty, unlisted and untranscribed roles remain distinct in their labels.",
        "REFERENCE ONLY = a named source revision, not the installed machine. Reference contacts stay OPEN unless an individually cited dotted function guess is shown. Named hardware with no contact map has an OPEN boundary, not invented '?' pins.",
        "Paths may cross without joining; pale crossing clearance means NO JUNCTION. Multiple guesses from one screw are alternatives unless each shares an explicit FAN-OUT tag. A tagged fan-out still needs separate buffers and load validation. No return bus is inferred.",
        "Exterior label colors: black = circuit GND; red = 3.3 V; orange = 5 V; yellow/gold = load/control feed; blue/violet/green = STEP/DIR/ENABLE. Dotted violet is an evidence state, not a reported cable color. Protective earth is not circuit GND.",
        "DB25, DB44 and 15-contact D-sub housings are outside SmoothieBox. Contact strips preserve source order, not physical pin-row geometry. USB device, USB host, Ethernet and microSD are separate service ports.",
        "RESEARCH DIAGRAM — NOT QUALIFIED FOR PHYSICAL WIRING. Confirm the actual carrier, machine revision, mating view, electrical interface, protection, returns and safety design before construction.",
    ]
    if any(candidate[3] and candidate[3].alternative_set for _, candidate in candidate_routes):
        legend_entries.insert(1,
            "ALTERNATIVES — NOT A CIRCUIT. Routes sharing an alternative set are mutually exclusive choices; select one complete axis pair. NEVER JOIN alternatives or treat them as a fan-out.")
    if any(candidate[3] and candidate[3].fanout_group for _, candidate in candidate_routes):
        legend_entries.insert(1,
            "FAN-OUT — a tagged guess branches one SmoothieBox signal to multiple named inputs. It is not independent control; use separate suitable buffers and verify total input load before wiring.")
    if any(contact.fact == "form_inventory_only" for item in peripherals for contact in item.contacts):
        legend_entries.insert(1,
            "FORM INVENTORY ONLY = nominal positions for a named or possible connector form. This does not prove an installed connector, cavity view, function, or electrical route.")
    if function_reference_count:
        legend_entries.insert(2,
            "FUNCTION REFERENCE = a documented source-model cable function, not a located physical contact. Text keys and hollow markers do not establish cavity order, fitted revision or a host endpoint; every function remains OPEN.")
    legend = [f'<text x="60" y="{legend_top}" class="legend-title">CONNECTION / EVIDENCE KEY</text>']
    ly = legend_top + 40
    for entry_index, entry in enumerate(legend_entries):
        wrapped = lines_for(entry, right_edge - 120, 22)
        if entry_index == 0:
            legend.append(f'<path d="M65 {ly - 7}H165" class="guess-wire" data-decoration="legend-sample"/>')
            wrapped = lines_for(entry, right_edge - 245, 22)
        legend.extend(text_lines(wrapped, 190 if entry_index == 0 else 60, ly, "legend", 29))
        ly += len(wrapped) * 29 + 18
    height = ly + 35
    title = f"{profile.title} → SmoothieBox exterior connection study"
    title_lines = lines_for(title, right_edge - 120, 38)
    header_extra = max(0, len(title_lines) - 2) * 48
    height += header_extra
    inventory = {
        "profile_id": profile.identifier, "counts": counts,
        "prior_profile_route_note": profile.evidence_note,
        "exterior": [dict(id=pin.svg_id, terminal=pin.key, role=pin.role,
                          source_label=pin.source_label, x=pin.x, y=pin.y) for pin in terminals.values()],
        "peripherals": [dict(
            name=item.name, connector_id=item.connector_id, kind=item.evidence_kind,
            source=item.source, numbering=item.numbering, revision=item.revision,
            origin_path=item.origin_path, origin_sha256=item.origin_sha256, source_urls=list(item.source_urls),
            upstream_function_hints=[dict(contact_id=hint.contact_id, wire_id=hint.wire_id,
                                          reason=hint.reason, interface=hint.interface, checks=list(hint.checks),
                                          fanout_group=hint.fanout_group)
                                     for hint in item.candidate_evidence],
            contacts=[dict(id=ports[(pi, ci)].svg_id, source_id=contact.key, mark=contact.number,
                           label=contact.label, fact=contact.fact, source_relation=contact.source_relation,
                           **({"domain": "source-model-function"} if contact.fact == "source_function_reference" else {}))
                      for ci, contact in enumerate(item.contacts)],
        ) for pi, item in enumerate(peripherals)],
        "routes": route_inventory,
    }
    output = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{left_edge} {-header_extra} {width} {height}" width="{width}" height="{height}" '
        f'role="img" aria-labelledby="title desc" data-profile="{xml(profile.identifier)}">',
        f'<title id="title">{xml(title)}</title>',
        f'<desc id="desc">82 proposed exterior contacts, four SmoothieBox service ports, '
        f'{counts.get("source_positions", counts["machine_contacts"])} source positions, '
        f'{counts.get("source_wire_references", 0)} source-named wire references, '
        f'{counts.get("source_nonpin_references", 0)} source-named physical attachments, '
        f'{counts.get("form_inventory_contacts", 0)} nominal form-inventory positions, ' +
        (f'{function_reference_count} documented source-model cable functions, ' if function_reference_count else '') +
        f'{counts["guesses"]} dotted function guesses and {counts["open_contacts"]} unrouted {"source entries" if function_reference_count else "positions"}. ' +
        'All machine connectors are exterior peripherals or explicitly marked source references. No installed wiring is claimed.</desc>',
        f'<metadata id="contact-inventory">{xml(json.dumps(inventory, ensure_ascii=False, sort_keys=True))}</metadata>',
        f'<metadata id="source-provenance">{xml(json.dumps(source_provenance(profile.identifier), ensure_ascii=False, sort_keys=True))}</metadata>',
        f'<style>{SVG_STYLE}</style>',
        f'<rect x="{left_edge}" y="{-header_extra}" width="{width}" height="{height}" class="background"/>',
        f'<text x="60" y="{55 - header_extra}" class="eyebrow">MACHINE {xml(profile.ordinal)} · {xml(profile.category.upper())} · SOURCE-SCOPED EVIDENCE</text>',
        *text_lines(title_lines, 60, 105 - header_extra, "title", 48),
        f'<text x="60" y="{125 + len(title_lines) * 48 - header_extra}" class="subtitle">Proposed exterior terminals → dotted function candidates or explicit OPEN boundaries; no installed harness claim</text>',
        *routes,
        *draw_perimeter(terminals, {candidate[0] for _, candidate in candidate_routes}, counts),
        *[element for placement in layouts for element in draw_peripheral(peripherals[placement.index], placement)],
        *legend,
        '</svg>',
    ]
    return "\n".join(output) + "\n", counts


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--profile-id", action="append", help="Generate only this exact article ID; repeatable")
    parser.add_argument("--start", type=int, default=1, help="Inclusive 1-based article order")
    parser.add_argument("--end", type=int, help="Inclusive 1-based article order")
    parser.add_argument("--index-only", action="store_true", help="Report current profile inventory without writing")
    arguments = parser.parse_args()
    canonical = ASSET_DIR / 'machine-page-source' / 'articles'
    if canonical.is_dir():
        # Full canonical articles retain the peripheral evidence stripped from the compact index.
        index_chunks = list(article_chunks((ASSET_DIR / 'machine-page-source' / 'original-atlas.html').read_text()))
        chunks = [(canonical / (BeautifulSoup(chunk, 'html.parser').article['id'] + '.html')).read_text() for chunk in index_chunks]
    else:
        chunks = list(article_chunks(PAGE.read_text()))
    identifiers = []
    for chunk in chunks:
        identity = re.search(r'\bid="([^"]+)"', chunk[:400])
        identifiers.append(identity.group(1) if identity else "")
    if len(chunks) != 330 or len(set(identifiers)) != 330 or "" in identifiers:
        emit("error", message="Expected exactly 330 unique machine profiles", found=len(chunks), unique=len(set(identifiers)))
        raise SystemExit(2)
    selected_positions = {position for position, identifier in enumerate(identifiers, 1)
                          if (not arguments.profile_id or identifier in arguments.profile_id)
                          and position >= arguments.start and (arguments.end is None or position <= arguments.end)}
    selected = extract_profiles(chunks, selected_positions)
    if arguments.profile_id and len(selected) != len(set(arguments.profile_id)):
        emit("error", message="A requested profile ID was not found", requested=arguments.profile_id, found=len(selected))
        raise SystemExit(2)
    if arguments.index_only:
        for profile in selected:
            emit("profile", id=profile.identifier, ordinal=profile.ordinal, title=profile.title,
                 peripherals=len(profile.peripherals), machine_contacts=sum(len(item.contacts) for item in profile.peripherals))
        emit("summary", profiles=len(selected), total_profiles=len(chunks), written=0)
        return
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for profile in selected:
        svg, counts = render(profile)
        target = OUTPUT_DIR / f"{profile.identifier}.svg"
        temporary = target.with_suffix(".svg.tmp")
        temporary.write_text(svg)
        temporary.replace(target)
        emit("artifact", id=profile.identifier, path=str(target), bytes=len(svg.encode()), **counts)
    emit("summary", profiles=len(selected), total_profiles=len(chunks), written=len(selected))


if __name__ == "__main__":
    main()
