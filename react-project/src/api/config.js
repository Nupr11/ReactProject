export const API_KEY = `${process.env.REACT_APP_MARVEL_API_KEY}`;
export const BASE_URL = "https://gateway.marvel.com";

export const END_POINTS = {
  allChars: "/v1/public/characters",
  allComics: "/v1/public/comics",
  allSeries: "/v1/public/series",
  singleComicById: (id) => `/v1/public/comics/${id}`,
  allComicsByChar: (id) => `/v1/public/characters/${id}/comics`,
};
