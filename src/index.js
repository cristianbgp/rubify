const p = console.log;
const puts = console.log;

const reverse = string => {
  if (typeof string === "string") {
    return string.split("").reduce((reversedString, character) => {
      return character + reversedString;
    }, "");
  }
};

const empty = something => {
  return something.length === 0;
};

const chars = string => {
  return string.split("");
};

const downcase = string => {
  return string.toLowerCase();
};

const upcase = string => {
  return string.toUpperCase();
};

const even = number => {
  if (typeof number === "number") {
    return number % 2 === 0;
  }
};

const odd = number => {
  if (typeof number === "number") {
    return number % 2 != 0;
  }
};

const times = (number, callback) => {
  for (let index = 1; index <= number; index++) {
    callback(index);
  }
};

const capitalize = string => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

const uniq = array => {
  return [...new Set(array)];
};
