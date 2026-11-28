// src/site/lib/search.ts
function search_pages(pages, query, limit = 12) {
  const words = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!words.length)
    return [];
  const scored = [];
  for (const page of pages) {
    const title = page.title.toLowerCase();
    const url = page.url.toLowerCase();
    const headings = page.headings.toLowerCase();
    let score = 0;
    const all = words.every((word) => {
      const points = (title.startsWith(word) ? 14 : title.includes(word) ? 10 : 0) + (url.includes(word) ? 4 : 0) + (headings.includes(word) ? 2 : 0);
      score += points;
      return points > 0;
    });
    if (all)
      scored.push({ page, score: score - title.length / 200 });
  }
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((entry) => entry.page);
}

// src/site/page-tools.ts
var NUMBER = /^[-+−~≈<>≤≥]?\s*\d[\d\s.,]*(\s?(%|mm|V|A|mA|W|kHz|MHz|ms|µs|°C|Ω|kΩ))?$/;
function dress_table(table) {
  const parent = table.parentElement;
  if (!parent || parent.closest("table") || parent.classList.contains("table-scroll"))
    return;
  const wrapper = document.createElement("div");
  wrapper.className = "table-scroll";
  table.before(wrapper);
  wrapper.append(table);
  const rows = [...table.tBodies].flatMap((body) => [...body.rows]);
  if (rows.length < 2 || table.querySelector("[colspan], [rowspan]"))
    return;
  for (let column = 1;column < rows[0].cells.length; column++) {
    const filled = rows.map((row) => row.cells[column]?.textContent?.trim() ?? "").filter((text) => !["", "—", "-", "n/a"].includes(text));
    if (filled.length < 2 || !filled.every((text) => NUMBER.test(text)))
      continue;
    [...table.rows].forEach((row) => row.cells[column]?.classList.add("num"));
  }
}
function add_copy_button(block) {
  if (block.closest(".code-block, .code-popup, sl-tooltip, table"))
    return;
  const frame = document.createElement("div");
  frame.className = "code-block";
  block.before(frame);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "code-copy";
  button.textContent = "Copy";
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(block.innerText.replace(/\n$/, ""));
      button.textContent = "Copied";
    } catch (error) {
      console.warn("page-tools: copying a code block failed", error);
      button.textContent = "Select and copy";
    }
    setTimeout(() => {
      button.textContent = "Copy";
    }, 1600);
  });
  frame.append(block, button);
}
function is_shown(element) {
  return element.getClientRects().length > 0;
}
var CONTENTS_LIMIT = 20;
function contents_depth(headings) {
  let depth = 4;
  while (depth > 2 && headings.filter((heading) => Number(heading.tagName[1]) <= depth).length > CONTENTS_LIMIT)
    depth -= 1;
  return depth;
}
function build_contents(root) {
  if (root.querySelector(".xb-nav"))
    return;
  const headings = [...root.querySelectorAll("h2[id], h3[id], h4[id]")].filter((heading) => !heading.closest("sl-alert, sl-dialog, summary, .wiki-edit-callout, original"));
  if (headings.filter((heading) => heading.tagName === "H2").length < 2)
    return;
  const nav = document.createElement("nav");
  nav.className = "page-toc";
  nav.setAttribute("aria-label", "On this page");
  const box = document.createElement("details");
  const title = document.createElement("summary");
  title.textContent = "On this page";
  const list = document.createElement("ul");
  const entries = headings.map((heading) => {
    const item = document.createElement("li");
    if (heading.tagName === "H4")
      item.className = "subsub";
    if (heading.tagName === "H3")
      item.className = "sub";
    const link = document.createElement("a");
    link.href = `#${heading.id}`;
    const copy = heading.cloneNode(true);
    copy.querySelectorAll('.heading-anchor, a[aria-hidden="true"], sl-tooltip [slot="content"]').forEach((node) => node.remove());
    link.textContent = (copy.textContent ?? "").replace(/\s*#\s*$/, "").trim();
    item.append(link);
    list.append(item);
    return { heading, item, link };
  });
  box.append(title, list);
  nav.append(box);
  const wide = matchMedia("(min-width: 1380px)");
  const place = () => {
    box.open = wide.matches;
    if (wide.matches)
      document.body.append(nav);
    else
      root.prepend(nav);
  };
  wide.addEventListener("change", place);
  title.addEventListener("click", (event) => {
    if (wide.matches)
      event.preventDefault();
  });
  place();
  let waiting = false;
  const update = () => {
    waiting = false;
    let current;
    const visible = entries.filter(({ heading }) => is_shown(heading));
    const depth = contents_depth(visible.map(({ heading }) => heading));
    for (const entry of entries) {
      const { heading, item, link } = entry;
      item.hidden = !visible.includes(entry) || Number(heading.tagName[1]) > depth;
      link.removeAttribute("aria-current");
      if (!item.hidden && (heading.getBoundingClientRect().top < 140 || !current))
        current = link;
    }
    current?.setAttribute("aria-current", "true");
    if (current && nav.scrollHeight > nav.clientHeight) {
      const offset = current.offsetTop;
      if (offset < nav.scrollTop || offset > nav.scrollTop + nav.clientHeight - 40)
        nav.scrollTop = offset - nav.clientHeight / 2;
    }
  };
  const schedule = () => {
    if (!waiting) {
      waiting = true;
      requestAnimationFrame(update);
    }
  };
  addEventListener("scroll", schedule, { passive: true });
  new ResizeObserver(schedule).observe(root);
  update();
}
function add_scroll_helpers() {
  const bar = document.createElement("div");
  bar.className = "page-progress";
  bar.setAttribute("aria-hidden", "true");
  const top = document.createElement("button");
  top.type = "button";
  top.className = "to-top";
  top.textContent = "↑";
  top.title = "Back to top";
  top.setAttribute("aria-label", "Back to top");
  top.addEventListener("click", () => scrollTo({ top: 0 }));
  document.body.append(bar, top);
  let waiting = false;
  const update = () => {
    waiting = false;
    const length = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${length > innerHeight ? Math.min(1, scrollY / length) : 0})`;
    top.classList.toggle("is-visible", scrollY > innerHeight);
  };
  addEventListener("scroll", () => {
    if (!waiting) {
      waiting = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}
function link_tours(root) {
  root.querySelectorAll(".xb-tour-stage > img").forEach((image) => {
    const shape = () => {
      if (image.naturalHeight)
        image.parentElement?.style.setProperty("--ratio", String(image.naturalWidth / image.naturalHeight));
    };
    image.addEventListener("load", shape);
    shape();
  });
  root.querySelectorAll(".xb-tour").forEach((tour) => {
    const light = (id, on) => {
      if (!id)
        return;
      tour.querySelectorAll(`.xb-mk[href="#${CSS.escape(id)}"], li[id="${CSS.escape(id)}"]`).forEach((element) => element.classList.toggle("is-active", on));
    };
    tour.querySelectorAll(".xb-mk, .xb-tour-list li").forEach((element) => {
      const id = element.matches("li") ? element.id : element.getAttribute("href")?.slice(1) ?? null;
      for (const [type, on] of [["pointerenter", true], ["pointerleave", false], ["focusin", true], ["focusout", false]]) {
        element.addEventListener(type, () => light(id, on));
      }
    });
  });
}

class Search {
  index_url;
  dialog = document.createElement("dialog");
  input = document.createElement("input");
  results = document.createElement("ul");
  status = document.createElement("span");
  google = document.createElement("a");
  pages = null;
  selected = 0;
  constructor(index_url) {
    this.index_url = index_url;
    this.dialog.className = "search-palette";
    this.dialog.setAttribute("aria-label", "Search the documentation");
    this.input.type = "search";
    this.input.placeholder = "Search pages and sections…";
    this.input.setAttribute("aria-label", "Search pages and sections");
    this.input.autocomplete = "off";
    const footer = document.createElement("footer");
    this.google.target = "_blank";
    this.google.rel = "noopener";
    this.google.textContent = "Search the full text with Google";
    footer.append(this.status, this.google);
    this.dialog.append(this.input, this.results, footer);
    document.body.append(this.dialog);
    this.input.addEventListener("input", () => {
      this.selected = 0;
      this.render();
    });
    this.input.addEventListener("keydown", (event) => this.on_key(event));
    this.dialog.addEventListener("click", (event) => {
      if (event.target === this.dialog)
        this.dialog.close();
    });
    this.results.addEventListener("click", () => this.dialog.close());
  }
  open() {
    if (this.dialog.open)
      return;
    this.dialog.showModal();
    this.input.select();
    this.render();
  }
  load() {
    this.pages ??= fetch(this.index_url).then((response) => {
      if (!response.ok)
        throw new Error(`${response.status} ${this.index_url}`);
      return response.json();
    }).catch((error) => {
      console.warn("page-tools: the search index could not be loaded", error);
      this.pages = null;
      return [];
    });
    return this.pages;
  }
  async render() {
    const query = this.input.value.trim();
    this.google.href = `https://www.google.com/search?sitesearch=smoothieware.org&q=${encodeURIComponent(query)}`;
    const pages = await this.load();
    if (query !== this.input.value.trim())
      return;
    const found = search_pages(pages, query);
    this.results.replaceChildren(...found.map((page, position) => {
      const item = document.createElement("li");
      const link = document.createElement("a");
      link.href = page.url;
      link.setAttribute("aria-selected", String(position === this.selected));
      const title = document.createElement("b");
      title.textContent = page.title;
      const address = document.createElement("span");
      address.textContent = page.url;
      link.append(title, address);
      item.append(link);
      return item;
    }));
    this.status.textContent = !pages.length ? "Page list unavailable" : !query ? `${pages.length} pages · ↑ ↓ Enter` : found.length ? "↑ ↓ to choose, Enter to open" : "No page title or section matches";
  }
  on_key(event) {
    const links = [...this.results.querySelectorAll("a")];
    if (event.key === "Enter") {
      event.preventDefault();
      (links[this.selected] ?? this.google).click();
    } else if ((event.key === "ArrowDown" || event.key === "ArrowUp") && links.length) {
      event.preventDefault();
      this.selected = (this.selected + (event.key === "ArrowDown" ? 1 : -1) + links.length) % links.length;
      links.forEach((link, position) => link.setAttribute("aria-selected", String(position === this.selected)));
      links[this.selected].scrollIntoView({ block: "nearest" });
    }
  }
}
function add_search() {
  let search = null;
  const open = () => {
    search ??= new Search("/search.json");
    search.open();
  };
  document.addEventListener("keydown", (event) => {
    const typing = event.target.closest?.('input, textarea, select, sl-input, [contenteditable="true"]');
    const shortcut = event.key === "k" && (event.ctrlKey || event.metaKey) || event.key === "/" && !typing && !event.ctrlKey && !event.metaKey;
    if (!shortcut || document.querySelector("dialog.lightbox[open]"))
      return;
    event.preventDefault();
    open();
  });
  const trigger = document.querySelector("[data-search-open]");
  trigger?.addEventListener("click", open);
}
function start() {
  const root = document.querySelector(".markdown-body");
  add_search();
  if (!root)
    return;
  const dress = () => {
    root.querySelectorAll("table").forEach(dress_table);
    root.querySelectorAll("pre").forEach(add_copy_button);
  };
  dress();
  let queued = false;
  new MutationObserver(() => {
    if (queued)
      return;
    queued = true;
    setTimeout(() => {
      queued = false;
      dress();
    }, 250);
  }).observe(root, { childList: true, subtree: true });
  build_contents(root);
  add_scroll_helpers();
  link_tours(root);
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", start);
else
  start();
