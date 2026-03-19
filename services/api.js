export const API_BASE = "https://dragonball-api.com/api/characters";
export const LIMIT = 58;

/**
 * Constrói a URL de busca de personagens de Dragon Ball.
 */
export const buildUrl = (gender, race) => {
  let url = `${API_BASE}?limit=${LIMIT}`;
  if (gender) url += `&gender=${encodeURIComponent(gender)}`;
  if (race) url += `&race=${encodeURIComponent(race)}`;
  return url;
};

/**
 * Busca personagens de Dragon Ball.
 */
export const fetchCharacters = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Erro na API: ${response.status}`);
  return response.json();
};
