/** Escape data before placing it inside a prompt's XML element. */
export function xml_element(element_name: string, content: string): string {
    if (!/^[A-Za-z][A-Za-z0-9_-]*$/u.test(element_name)) throw new Error(`Invalid XML prompt element name: ${element_name}`);
    return `<${element_name}>${escape_xml_text(content)}</${element_name}>`;
}

/** Keep untrusted source pages as text instead of letting them create prompt structure. */
export function escape_xml_text(content: string): string {
    return content
        .replace(/&/gu, '&amp;')
        .replace(/</gu, '&lt;')
        .replace(/>/gu, '&gt;')
        .replace(/"/gu, '&quot;')
        .replace(/'/gu, '&apos;');
}
