export const lowered = (str) => str.toLowerCase().trim();

export const split = (str) => {
  if (typeof str === "string") {
    return str.split("");
  } else throw new Error("used parameter is not string");
};

const randomInt = (max) => Math.trunc(Math.random() * max);
