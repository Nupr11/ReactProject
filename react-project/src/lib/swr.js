export const buildKey = (url, params) => {
  return `${url}__${Object.entries(params).flat().join("_")}`;
};
