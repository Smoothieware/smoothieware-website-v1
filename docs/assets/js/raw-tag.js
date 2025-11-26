// src/site/raw-tag.ts
import $ from "jquery";
$(() => {
  const $raw_elements = $("raw");
  if ($raw_elements.length === 0) {
    return;
  }
  $raw_elements.each(function() {
    const text_content = $(this).text().trim();
    const html_structure = `<span class="raw-content">${escape_html(text_content)}</span>`;
    $(this).html(html_structure);
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
