const p = console.log;
const puts = console.log;

const reverse = string => {
  if (typeof string === "string") {
    return string.split("").reduce((reversedString, character) => {
      return character + reversedString;
    }, "");
  }
};
