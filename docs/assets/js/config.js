// src/site/lib/config.ts
var CONFIG_STORAGE_KEY = "configuration";
var DEFAULT_CONFIG = {
  display_version: "nc"
};
function load_configuration() {
  try {
    const raw_config = localStorage.getItem(CONFIG_STORAGE_KEY);
    if (!raw_config) {
      return { ...DEFAULT_CONFIG };
    }
    const parsed_config = JSON.parse(raw_config);
    return {
      ...DEFAULT_CONFIG,
      ...parsed_config
    };
  } catch (error) {
    console.error("[config.ts] Error loading configuration from localStorage:", error);
    return { ...DEFAULT_CONFIG };
  }
}
function save_configuration(config) {
  try {
    const json_config = JSON.stringify(config);
    localStorage.setItem(CONFIG_STORAGE_KEY, json_config);
    console.log("[config.ts] Configuration saved:", config);
  } catch (error) {
    console.error("[config.ts] Error saving configuration to localStorage:", error);
  }
}
function get_display_version() {
  const config = load_configuration();
  return config.display_version;
}
function set_display_version(version) {
  const config = load_configuration();
  config.display_version = version;
  save_configuration(config);
}
function is_version_not_configured() {
  return get_display_version() === "nc";
}
function should_show_v1() {
  const version = get_display_version();
  return version === "nc" || version === "both" || version === "v1";
}
function should_show_v2() {
  const version = get_display_version();
  return version === "nc" || version === "both" || version === "v2";
}
function should_show_both() {
  const version = get_display_version();
  return version === "nc" || version === "both";
}
export {
  should_show_v2,
  should_show_v1,
  should_show_both,
  set_display_version,
  save_configuration,
  load_configuration,
  is_version_not_configured,
  get_display_version
};
