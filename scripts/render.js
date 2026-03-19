import { escapeHtml } from "./utils.js";

/**
 * Renderiza um card de personagem.
 */
export const renderCard = (character, fit = false) => {
  const div = document.createElement("div");
  div.className = "user";

  if (fit) {
    div.classList.add("fit");
  }

  div.setAttribute("role", "listitem");
  div.innerHTML = `
    <div class="data">
      <h2 class="name">${escapeHtml(character.name)}</h2>
      <p class="race-gender">${escapeHtml(character.race || "—")} · ${escapeHtml(character.gender || "—")}</p>
      <dl class="ki-stats">
        <div class="ki-row">
          <dt class="ki-label">Base KI</dt>
          <dd class="ki-value">${escapeHtml(character.ki)}</dd>
        </div>
        <div class="ki-row">
          <dt class="ki-label">Total KI</dt>
          <dd class="ki-value">${escapeHtml(character.maxKi)}</dd>
        </div>
      </dl>
    </div>
    <div class="avatar">
      <img src="${character.image}" alt="${character.name}" loading="lazy" />
    </div>
  `;
  return div;
};
