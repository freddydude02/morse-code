import morseCode from "./Dictionaries/engToMorseDict.js";
import revMorseCode from "./Dictionaries/morseToEngDict.js";

export const convertToMorse = (str) => {
    return str
        .toUpperCase()
        .split("")
        .map((key) => {
            return morseCode[key] ? morseCode[key] : new error("error");
        })
        .join(" ");
};
export const convertToEnglish = (str) => {
    return str
        .split(" ")
        .map((key) => {
            return revMorseCode[key] ? revMorseCode[key] : new error("error");
        })
        .join("");
};
