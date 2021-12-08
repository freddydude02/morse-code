const revMorseCode = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "...-": "V",
    "..-": "U",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": 0,
    ".----": 1,
    "..---": 2,
    "...--": 3,
    "....-": 4,
    "....-": 5,
    "-....": 6,
    "--...": 7,
    "---..": 8,
    "----.": 9,
    "/": " ",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    "...-..-": "$",
    ".--.-.": "@",
};
const ConvertToEnglish = (str) => {
    return str
        .split(" ")
        .map((key) => {
            return revMorseCode[key] ? revMorseCode[key] : key;
        })
        .join(" ");
};
console.log(ConvertToEnglish("-.-. --- -. ...- . .-. - / - .... .. ..."));
