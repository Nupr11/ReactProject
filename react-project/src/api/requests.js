import { API_KEY, BASE_URL, END_POINTS } from "./config";
import axios from "axios";

export const getAllChars = (params) =>
  axios.get(`${BASE_URL}${END_POINTS.allChars}`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });

export const getAllComics = (params) =>
  axios.get(`${BASE_URL}${END_POINTS.allComics}`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });

export const getInfoByChar = (charId, params) =>
  axios.get(`${BASE_URL}${END_POINTS.allChars}/${charId}`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });

export const getComicsByChar = (charId, params) =>
  axios.get(`${BASE_URL}${END_POINTS.allChars}/${charId}/comics`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });

export const getInfoByComics = (id, params) =>
  axios.get(`${BASE_URL}${END_POINTS.allComics}/${id}`, {
    params: {
      ...params,
      apikey: API_KEY,
    },
  });
