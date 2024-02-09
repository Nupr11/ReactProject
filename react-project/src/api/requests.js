import { API_KEY, BASE_URL, END_POINTS } from "./config";
import axios from "axios";

export const getAllChars = () => () =>
  axios.get(`${BASE_URL}${END_POINTS.allChars}`, {
    params: {
      apikey: API_KEY,
      limit: 100,
    },
  });

export const getAllComics = () => () =>
  axios.get(`${BASE_URL}${END_POINTS.allComics}`, {
    params: {
      apikey: API_KEY,
      limit: 100,
    },
  });

export const getAllComicsSWR = (params) =>
  axios.get(`${BASE_URL}${END_POINTS.allComics}`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });

export const getAllSeries = () => () => {
  axios.get(`${BASE_URL}${END_POINTS.allSeries}`, {
    params: {
      apikey: API_KEY,
      limit: 100,
    },
  });
};

export const getAllComicsByChar = (id) => () =>
  axios.get(`${BASE_URL}${END_POINTS.allComicsByChar(id)}`, {
    params: {
      apikey: API_KEY,
      limit: 100,
    },
  });
