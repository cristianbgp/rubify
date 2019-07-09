const p = console.log;
const puts = console.log;

// String

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
  return [...string];
};

const downcase = string => {
  return string.toLowerCase();
};

const upcase = string => {
  return string.toUpperCase();
};

const capitalize = string => {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};

//Number

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

const times = function(callback) {
  for (let i = 0; i < +this; i++) {
    callback(i);
  }
};

Number.prototype.times = times;

// Array

const uniq = array => {
  return [...new Set(array)];
};

const transpose = array => {
  return array[0].map((_, i) => array.map(row => row[i]));
};

export {
  p,
  puts,
  reverse,
  empty,
  chars,
  downcase,
  upcase,
  even,
  odd,
  times,
  capitalize,
  uniq,
  transpose
};
