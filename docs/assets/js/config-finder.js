// src/site/lib/config-finder.ts
var V1_CONFIG_FILES = [
  { path: "v1/Smoothieboard/config", github_repo: "Smoothieware", github_path: "ConfigSamples/Smoothieboard/config", priority: 1 },
  { path: "v1/Smoothieboard.delta/config", github_repo: "Smoothieware", github_path: "ConfigSamples/Smoothieboard.delta/config", priority: 2 },
  { path: "v1/AzteegX5Mini/config", github_repo: "Smoothieware", github_path: "ConfigSamples/AzteegX5Mini/config", priority: 3 },
  { path: "v1/AzteegX5Mini.delta/config", github_repo: "Smoothieware", github_path: "ConfigSamples/AzteegX5Mini.delta/config", priority: 4 },
  { path: "v1/rotary.delta/config", github_repo: "Smoothieware", github_path: "ConfigSamples/rotary.delta/config", priority: 5 },
  { path: "v1/Snippets/spindle.config", github_repo: "Smoothieware", github_path: "ConfigSamples/Snippets/spindle.config", priority: 10 },
  { path: "v1/Snippets/drill_cycles.config", github_repo: "Smoothieware", github_path: "ConfigSamples/Snippets/drill_cycles.config", priority: 11 },
  { path: "v1/Snippets/panel.config", github_repo: "Smoothieware", github_path: "ConfigSamples/Snippets/panel.config", priority: 12 },
  { path: "v1/Snippets/PT1000.config", github_repo: "Smoothieware", github_path: "ConfigSamples/Snippets/PT1000.config", priority: 13 },
  { path: "v1/Snippets/six-axis.config", github_repo: "Smoothieware", github_path: "ConfigSamples/Snippets/six-axis.config", priority: 14 }
];
var V2_CONFIG_FILES = [
  { path: "v2/config-3d.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/config-3d.ini", priority: 1 },
  { path: "v2/config-cnc.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/config-cnc.ini", priority: 2 },
  { path: "v2/config-delta.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/config-delta.ini", priority: 3 },
  { path: "v2/config-lathe.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/config-lathe.ini", priority: 4 },
  { path: "v2/external-drivers.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/external-drivers.ini", priority: 5 },
  { path: "v2/button-box.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/button-box.ini", priority: 6 },
  { path: "v2/minimal.ini", github_repo: "SmoothieV2", github_path: "ConfigSamples/minimal.ini", priority: 7 }
];
function generate_github_url(metadata, line_number) {
  const base_url = `https://github.com/Smoothieware/${metadata.github_repo}/blob/`;
  const branch = metadata.github_repo === "SmoothieV2" ? "master" : "edge";
  return `${base_url}${branch}/${metadata.github_path}#L${line_number + 1}`;
}
function apply_syntax_highlighting(line) {
  function escape_html(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  if (line.trim().startsWith("#")) {
    return `<span class="config-syntax-comment">${escape_html(line)}</span>`;
  }
  const section_match = line.match(/^\s*(\[.*?\])\s*(#.*)?$/);
  if (section_match) {
    const section_part = section_match[1];
    const comment_part = section_match[2] || "";
    return `<span class="config-syntax-section">${escape_html(section_part)}</span>` + (comment_part ? `<span class="config-syntax-comment">${escape_html(comment_part)}</span>` : "");
  }
  const v2_setting_match = line.match(/^(\s*)([a-zA-Z0-9_.<>]+)(\s*)(=)(\s*)([^#]*?)(#.*)?$/);
  if (v2_setting_match) {
    const [, leading_space, setting_name, space_before_eq, eq_sign, space_after_eq, value, comment] = v2_setting_match;
    return escape_html(leading_space) + `<span class="config-syntax-setting">${escape_html(setting_name)}</span>` + escape_html(space_before_eq) + `<span class="config-syntax-separator">${escape_html(eq_sign)}</span>` + escape_html(space_after_eq) + `<span class="config-syntax-value">${escape_html(value)}</span>` + (comment ? `<span class="config-syntax-comment">${escape_html(comment)}</span>` : "");
  }
  const v1_setting_match = line.match(/^(\s*)([a-zA-Z0-9_.]+)(\s+)([^#]+?)(#.*)?$/);
  if (v1_setting_match) {
    const [, leading_space, setting_name, space, value, comment] = v1_setting_match;
    return escape_html(leading_space) + `<span class="config-syntax-setting">${escape_html(setting_name)}</span>` + escape_html(space) + `<span class="config-syntax-value">${escape_html(value)}</span>` + (comment ? `<span class="config-syntax-comment">${escape_html(comment)}</span>` : "");
  }
  return escape_html(line);
}
async function find_setting_in_config(request) {
  if (request.config_content) {
    const all_lines = request.config_content.split(`
`);
    const result = request.version === "v1" ? find_setting_v1(request.setting_name, all_lines, request.module_name) : find_setting_v2(request.setting_name, all_lines, request.section_name);
    return {
      ...result,
      file_path: request.version === "v1" ? "v1/config" : "v2/config-3d.ini",
      github_url: ""
    };
  }
  const config_files = request.version === "v1" ? V1_CONFIG_FILES : V2_CONFIG_FILES;
  for (const file_metadata of config_files) {
    try {
      const response = await fetch(`/assets/config/${file_metadata.path}`);
      if (!response.ok) {
        console.warn(`Failed to fetch ${file_metadata.path}: ${response.status}`);
        continue;
      }
      const config_content = await response.text();
      const all_lines = config_content.split(`
`);
      const result = request.version === "v1" ? find_setting_v1(request.setting_name, all_lines, request.module_name) : find_setting_v2(request.setting_name, all_lines, request.section_name);
      if (result.found) {
        const target_line_number = result.lines[result.target_line_index]?.line_number || 0;
        return {
          ...result,
          file_path: file_metadata.path,
          github_url: generate_github_url(file_metadata, target_line_number)
        };
      }
    } catch (error) {
      console.error(`Error loading config file ${file_metadata.path}:`, error);
      continue;
    }
  }
  return {
    found: false,
    lines: [],
    target_line_index: -1,
    section_header_index: -1,
    file_path: "",
    github_url: "",
    error_message: `Setting "${request.setting_name}" not found in any ${request.version} config file`
  };
}
function find_setting_v1(setting_name, all_lines, module_name) {
  const setting_line_info = find_setting_line_v1(setting_name, all_lines);
  if (setting_line_info.line_number === -1) {
    return {
      found: false,
      lines: [],
      target_line_index: -1,
      section_header_index: -1,
      file_path: "",
      github_url: "",
      error_message: `Setting "${setting_name}" not found in v1 config file`
    };
  }
  const actual_module_name = module_name || extract_module_from_setting_name(setting_name);
  const module_lines = find_module_section_v1(all_lines, actual_module_name, setting_line_info.line_number);
  const lines_with_context = add_fade_context(all_lines, module_lines, setting_line_info.line_number, -1);
  const target_index = lines_with_context.findIndex((line) => line.line_number === setting_line_info.line_number);
  return {
    found: true,
    lines: lines_with_context,
    target_line_index: target_index,
    section_header_index: -1,
    file_path: "",
    github_url: "",
    error_message: undefined
  };
}
function normalize_section_name(name) {
  return name.replace(/ /g, "_").toLowerCase();
}
function find_setting_v2(setting_name, all_lines, section_name) {
  let clean_section = null;
  if (section_name) {
    clean_section = section_name.replace(/^\[|\]$/g, "").trim();
  }
  let setting_key = setting_name;
  let expected_section = clean_section;
  if (!clean_section && setting_name.includes(".")) {
    const parts = setting_name.split(".");
    if (parts.length >= 2) {
      const potential_section = parts[0];
      if (!["x", "y", "z"].includes(potential_section)) {
        expected_section = potential_section;
        setting_key = parts.slice(1).join(".");
      }
    }
  }
  if (expected_section && setting_name.startsWith(expected_section + ".")) {
    setting_key = setting_name.substring(expected_section.length + 1);
  }
  const axis_mapping = {
    "x.": "alpha.",
    "y.": "beta.",
    "z.": "gamma."
  };
  for (const [generic, specific] of Object.entries(axis_mapping)) {
    if (setting_key.startsWith(generic)) {
      setting_key = setting_key.replace(generic, specific);
      break;
    }
  }
  const setting_line_info = find_setting_line_v2(setting_key, all_lines);
  if (setting_line_info.line_number === -1) {
    return {
      found: false,
      lines: [],
      target_line_index: -1,
      section_header_index: -1,
      file_path: "",
      github_url: "",
      error_message: `Setting "${setting_key}" not found in v2 config file`
    };
  }
  if (expected_section !== null) {
    const section_info2 = find_section_for_line_v2(all_lines, setting_line_info.line_number);
    if (normalize_section_name(section_info2.section_name) !== normalize_section_name(expected_section)) {
      return {
        found: false,
        lines: [],
        target_line_index: -1,
        section_header_index: -1,
        file_path: "",
        github_url: "",
        error_message: `Setting "${setting_key}" found but not in expected section "${expected_section}"`
      };
    }
  }
  const section_info = find_section_for_line_v2(all_lines, setting_line_info.line_number);
  if (section_info.start_line === -1) {
    return {
      found: false,
      lines: [],
      target_line_index: -1,
      section_header_index: -1,
      file_path: "",
      github_url: "",
      error_message: `No section found containing setting "${setting_name}"`
    };
  }
  const section_lines = [];
  for (let line_num = section_info.start_line;line_num <= section_info.end_line; line_num++) {
    section_lines.push(line_num);
  }
  const lines_with_context = add_fade_context(all_lines, section_lines, setting_line_info.line_number, section_info.start_line);
  const target_index = lines_with_context.findIndex((line) => line.line_number === setting_line_info.line_number);
  const section_header_index = lines_with_context.findIndex((line) => line.line_number === section_info.start_line);
  return {
    found: true,
    lines: lines_with_context,
    target_line_index: target_index,
    section_header_index,
    file_path: "",
    github_url: "",
    error_message: undefined
  };
}
function find_setting_line_v1(setting_name, all_lines) {
  const has_template = /<[^>]+>|{[^}]+}/.test(setting_name);
  if (has_template) {
    let pattern_str = setting_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\<[^>]+\\>/g, "[a-zA-Z0-9_]+").replace(/\\{[^}]+\\}/g, "[a-zA-Z0-9_]+");
    const uncommented_pattern = new RegExp(`^\\s*${pattern_str}\\s+\\S`, "i");
    const commented_pattern = new RegExp(`^\\s*#\\s*${pattern_str}\\s+\\S`, "i");
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (uncommented_pattern.test(line)) {
        return { line_number: line_num, is_commented: false };
      }
    }
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (commented_pattern.test(line)) {
        return { line_number: line_num, is_commented: true };
      }
    }
  } else {
    const escaped_name = setting_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const uncommented_pattern = new RegExp(`^\\s*${escaped_name}\\s+\\S`, "i");
    const commented_pattern = new RegExp(`^\\s*#\\s*${escaped_name}\\s+\\S`, "i");
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (uncommented_pattern.test(line)) {
        return { line_number: line_num, is_commented: false };
      }
    }
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (commented_pattern.test(line)) {
        return { line_number: line_num, is_commented: true };
      }
    }
  }
  return { line_number: -1, is_commented: false };
}
function find_setting_line_v2(setting_name, all_lines) {
  const has_template = /<[^>]+>|{[^}]+}/.test(setting_name);
  if (has_template) {
    let pattern_str = setting_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\<[^>]+\\>/g, "[a-zA-Z0-9_]+").replace(/\\{[^}]+\\}/g, "[a-zA-Z0-9_]+");
    const uncommented_pattern = new RegExp(`^\\s*${pattern_str}\\s*=`, "i");
    const commented_pattern = new RegExp(`^\\s*[;#]\\s*${pattern_str}\\s*=`, "i");
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (uncommented_pattern.test(line)) {
        return { line_number: line_num, is_commented: false };
      }
    }
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (commented_pattern.test(line)) {
        return { line_number: line_num, is_commented: true };
      }
    }
  } else {
    const escaped_name = setting_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const uncommented_pattern = new RegExp(`^\\s*${escaped_name}\\s*=`, "i");
    const commented_pattern = new RegExp(`^\\s*[;#]\\s*${escaped_name}\\s*=`, "i");
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (uncommented_pattern.test(line)) {
        return { line_number: line_num, is_commented: false };
      }
    }
    for (let line_num = 0;line_num < all_lines.length; line_num++) {
      const line = all_lines[line_num];
      if (commented_pattern.test(line)) {
        return { line_number: line_num, is_commented: true };
      }
    }
    if (!setting_name.includes(".")) {
      const common_prefixes = [
        "hotend",
        "hotend2",
        "bed",
        "chamber",
        "fan",
        "fan2",
        "psu",
        "psu_off",
        "aux",
        "misc",
        "bltouch",
        "msc_but",
        "minx",
        "miny",
        "minz",
        "maxx",
        "maxy",
        "maxz",
        "probe",
        "zprobe",
        "spindle",
        "but1",
        "but2",
        "but3",
        "but4",
        "4x4keypad",
        "board",
        "alpha",
        "beta",
        "gamma",
        "delta",
        "common"
      ];
      for (const prefix of common_prefixes) {
        const prefixed_name = `${prefix}.${setting_name}`;
        const escaped_prefixed = prefixed_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const pattern = new RegExp(`^\\s*${escaped_prefixed}\\s*=`, "i");
        const commented_pattern_prefixed = new RegExp(`^\\s*[;#]\\s*${escaped_prefixed}\\s*=`, "i");
        for (let line_num = 0;line_num < all_lines.length; line_num++) {
          const line = all_lines[line_num];
          if (pattern.test(line)) {
            return { line_number: line_num, is_commented: false };
          }
        }
        for (let line_num = 0;line_num < all_lines.length; line_num++) {
          const line = all_lines[line_num];
          if (commented_pattern_prefixed.test(line)) {
            return { line_number: line_num, is_commented: true };
          }
        }
      }
    }
  }
  return { line_number: -1, is_commented: false };
}
function extract_module_from_setting_name(setting_name) {
  const parts = setting_name.split(".");
  return parts[0];
}
function find_module_section_v1(all_lines, module_name, anchor_line) {
  const module_lines = [];
  const escaped_module = module_name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const module_pattern = new RegExp(`^\\s*#?\\s*${escaped_module}(?:\\.|\\s)`, "i");
  let start_line = anchor_line;
  while (start_line > 0) {
    const prev_line = all_lines[start_line - 1];
    if (is_section_boundary_v1(prev_line)) {
      break;
    }
    if (!module_pattern.test(prev_line) && !is_comment_line_v1(prev_line)) {
      break;
    }
    start_line--;
  }
  let end_line = anchor_line;
  while (end_line < all_lines.length - 1) {
    const next_line = all_lines[end_line + 1];
    if (is_section_boundary_v1(next_line)) {
      break;
    }
    if (!module_pattern.test(next_line) && !is_comment_line_v1(next_line)) {
      break;
    }
    end_line++;
  }
  for (let line_num = start_line;line_num <= end_line; line_num++) {
    module_lines.push(line_num);
  }
  return module_lines;
}
function is_section_boundary_v1(line) {
  const trimmed = line.trim();
  if (trimmed === "") {
    return true;
  }
  if (trimmed.startsWith("#") && !trimmed.includes("=") && trimmed.length < 80) {
    return true;
  }
  return false;
}
function is_comment_line_v1(line) {
  const trimmed = line.trim();
  return trimmed.startsWith("#");
}
function find_section_for_line_v2(all_lines, target_line) {
  const section_pattern = /^\s*\[([^\]]+)\]\s*$/;
  let start_line = -1;
  let section_name = "";
  for (let line_num = target_line;line_num >= 0; line_num--) {
    const line = all_lines[line_num];
    const match = section_pattern.exec(line);
    if (match) {
      start_line = line_num;
      section_name = match[1].trim();
      break;
    }
  }
  if (start_line === -1) {
    return { start_line: -1, end_line: -1, section_name: "" };
  }
  let end_line = all_lines.length - 1;
  for (let line_num = start_line + 1;line_num < all_lines.length; line_num++) {
    const line = all_lines[line_num];
    if (section_pattern.test(line)) {
      end_line = line_num - 1;
      break;
    }
  }
  return { start_line, end_line, section_name };
}
function add_fade_context(all_lines, section_lines, target_line, section_header_line) {
  const result = [];
  const min_section_line = Math.min(...section_lines);
  const max_section_line = Math.max(...section_lines);
  for (let fade_level = 3;fade_level >= 1; fade_level--) {
    const line_num = min_section_line - fade_level;
    if (line_num >= 0) {
      const line_content = all_lines[line_num];
      result.push({
        line_number: line_num,
        content: line_content,
        html_content: apply_syntax_highlighting(line_content),
        is_target: false,
        is_section_header: false,
        fade_level
      });
    }
  }
  for (const line_num of section_lines) {
    const line_content = all_lines[line_num];
    result.push({
      line_number: line_num,
      content: line_content,
      html_content: apply_syntax_highlighting(line_content),
      is_target: line_num === target_line,
      is_section_header: line_num === section_header_line,
      fade_level: 0
    });
  }
  for (let fade_level = 1;fade_level <= 3; fade_level++) {
    const line_num = max_section_line + fade_level;
    if (line_num < all_lines.length) {
      const line_content = all_lines[line_num];
      result.push({
        line_number: line_num,
        content: line_content,
        html_content: apply_syntax_highlighting(line_content),
        is_target: false,
        is_section_header: false,
        fade_level
      });
    }
  }
  return result;
}
export {
  find_setting_in_config
};
