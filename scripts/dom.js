export const charactersListEl = document.getElementById("all-users");
export const loadingEl = document.getElementById("loading");
export const emptyStateEl = document.getElementById("empty-state");
export const searchBtn = document.getElementById("btn-buscar");
export const raceSelect = document.getElementById("race");

/**
 * Exibe ou oculta o loading.
 */
export const setLoading = (show) => {
  loadingEl.classList.toggle("hidden", !show);
};

/**
 * Exibe o estado vazio.
 */
export const setEmpty = () => {
  charactersListEl.innerHTML = "";
  emptyStateEl.classList.remove("hidden");
};

/**
 * Exibe o estado de erro.
 */
export const showError = (message) => {
  charactersListEl.innerHTML = `<div class="empty-state"><p class="empty-message">${message}</p></div>`;
  emptyStateEl.classList.add("hidden");
  loadingEl.classList.add("hidden");
};
