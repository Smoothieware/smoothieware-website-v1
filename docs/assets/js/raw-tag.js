// src/site/raw-tag.ts
import $ from "jquery";
$(() => {
  console.log("[raw-tag.ts] Initializing raw tag handlers");
  const $raw_elements = $("raw");
  if ($raw_elements.length === 0) {
    console.log("[raw-tag.ts] No raw tags found on this page");
    return;
  }
  console.log(`[raw-tag.ts] Found ${$raw_elements.length} raw tag(s)`);
  $raw_elements.each(function() {
    const text_content = $(this).text().trim();
    const html_structure = `<span class="raw-content">${escape_html(text_content)}</span>`;
    $(this).html(html_structure);
    console.log(`[raw-tag.ts] Processed raw tag: "${text_content}"`);
  });
});
function escape_html(text) {
  const html_escape_map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  return text.replace(/[&<>"']/g, (char) => html_escape_map[char]);
}
