{%- comment -%}
Embeds a shared include inside a page. Include sources start at ##; this moves
their headings down so they sit under the host chapter.
  file    path of the include
  title   optional chapter heading to print first (as ##)
  anchor  id of the include's anchor span that the title heading replaces
  deeper  "2" moves the headings two levels instead of one
{%- endcomment -%}
{%- assign chapter_title = include.title -%}
{%- assign chapter_anchor = include.anchor -%}
{%- assign chapter_deeper = include.deeper -%}
{%- capture nl %}
{% endcapture -%}
{%- capture chapter_body %}
{% include {{ include.file }} %}{% endcapture -%}
{%- capture from %}{{ nl }}##{% endcapture -%}
{%- capture to %}{{ nl }}###{% endcapture -%}
{%- assign chapter_body = chapter_body | replace: from, to -%}
{%- if chapter_deeper == "2" -%}{%- assign chapter_body = chapter_body | replace: from, to -%}{%- endif -%}
{%- if chapter_anchor -%}
{%- capture old_span %}<span id="{{ chapter_anchor }}"></span>{% endcapture -%}
{%- assign chapter_body = chapter_body | remove: old_span -%}
{%- endif -%}
{% if chapter_title %}
## {{ chapter_title }}
{% endif %}
{{ chapter_body }}
