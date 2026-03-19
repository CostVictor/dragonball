import "./music.js";
import {
  setLoading,
  setEmpty,
  showError,
  charactersListEl,
  emptyStateEl,
  searchBtn,
  raceSelect,
} from "./dom.js";
import { buildUrl, fetchCharacters } from "../services/api.js";
import { renderCard } from "./render.js";

/**
 * Busca personagens de Dragon Ball.
 */
const search = async () => {
  setLoading(true);
  const genderRadio = document.querySelector('input[name="gender"]:checked');
  const gender = genderRadio ? genderRadio.value : "";
  const race = raceSelect.value.trim();
  const url = buildUrl(gender, race);

  try {
    const data = await fetchCharacters(url);
    const items = data.items ?? data;
    const list = Array.isArray(items) ? items : [];

    if (list.length === 0) {
      setEmpty();
      return;
    }

    emptyStateEl.classList.add("hidden");
    charactersListEl.innerHTML = "";
    list.forEach((character) =>
      charactersListEl.appendChild(renderCard(character, list.length === 1)),
    );
  } catch (err) {
    console.error(err);
    showError("Não foi possível carregar os personagens. Tente novamente.");
  } finally {
    setLoading(false);
  }
};

searchBtn.addEventListener("click", search);

raceSelect.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    search();
  }
});

search();
