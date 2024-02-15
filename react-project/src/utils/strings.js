export const lowered = (str) => str.toLowerCase().trim();

export const randomInt = (max) => Math.trunc(Math.random() * max);

export const sliceUrlEnd = (str) => str.split("/").at(-1);

export const split = (str) => {
  if (typeof str === "string") {
    return str.split("");
  } else throw new Error("used parameter is not string");
};
