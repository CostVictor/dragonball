/**
 * Cria um elemento HTML a partir de um texto.
 */
export const escapeHtml = (text, tagName = "div") => {
  if (text == null) return "";
  const el = document.createElement(tagName);
  el.textContent = text;
  return el.innerHTML;
};
