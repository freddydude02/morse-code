import sorter from "./sorter";

describe("translates alphabet and numbers to morse code correctly", () => {
    it("returns correct code for lowercase letters", () => {
        expect(sorter("a")).toBe(".-");
        expect(sorter("v")).toBe("...-");
        expect(sorter("o")).toBe("---");
    });
    it("returns correct code for uppercase letters", () => {
        expect(sorter("A")).toBe(".-");
        expect(sorter("V")).toBe("...-");
        expect(sorter("O")).toBe("---");
    });
    it("returns correct code for numbers", () => {
        expect(sorter("1")).toBe(".----");
        expect(sorter("0")).toBe("-----");
        expect(sorter("5")).toBe(".....");
    });
});
describe("translates special characters to morse code correctly", () => {
    it("returns correct code for special characters", () => {
        expect(sorter("a.")).toBe(".- .-.-.-");
        expect(sorter(",")).toBe("--..--");
        expect(sorter("?")).toBe("..--..");
        expect(sorter("'")).toBe(".----.");
        expect(sorter("!")).toBe("-.-.--");
        expect(sorter("(")).toBe("-.--.");
        expect(sorter(")")).toBe("-.--.-");
        expect(sorter("&")).toBe(".-...");
        expect(sorter(":")).toBe("---...");
        expect(sorter(";")).toBe("-.-.-.");
        expect(sorter("=")).toBe("-...-");
        expect(sorter("+")).toBe(".-.-.");
        expect(sorter("a-")).toBe(".- -....-");
        expect(sorter("_")).toBe("..--.-");
        expect(sorter('"')).toBe(".-..-.");
        expect(sorter("$")).toBe("...-..-");
        expect(sorter("@")).toBe(".--.-.");
    });
});
describe("throws errors with innappropriate inputs", () => {
    it("returns error for inappropriate symbols", () => {
        expect(() => sorter("%")).toThrow("error");
        expect(() => sorter("[")).toThrow("error");
        expect(() => sorter("]")).toThrow("error");
        expect(() => sorter("{")).toThrow("error");
        expect(() => sorter("}")).toThrow("error");
        expect(() => sorter()).toThrow("error");
        expect(sorter("")).toBe("Type to begin translating");
    });
    it("returns error for inappropriate sentences", () => {
        expect(() => sorter("----------")).toThrow("error");
        expect(() => sorter("..........")).toThrow("error");
        expect(() => sorter("...---------")).toThrow("error");
        expect(() => sorter(".........---")).toThrow("error");
    });
});
describe("converts morse back to english", () => {
    it("returns morse into letters correctly", () => {
        expect(sorter(".-")).toBe("A");
        expect(sorter("...-")).toBe("V");
        expect(sorter("---")).toBe("O");
    });
    it("returns morse into numbers correctly", () => {
        expect(sorter(".----")).toBe("1");
        expect(sorter("-----")).toBe("0");
        expect(sorter(".....")).toBe("5");
    });
});
describe("Translator works both ways with full sentences", () => {
    it("returns morse for english sentences", () => {
        expect(
            sorter(
                "hey my name is $@!?frederickkeke@gmail.com working at $999 per hour ---(which means pls hire me in chinese)--- afsdfasjdf. :))))"
            )
        ).toBe(
            ".... . -.-- / -- -.-- / -. .- -- . / .. ... / ...-..- .--.-. -.-.-- ..--.. ..-. .-. . -.. . .-. .. -.-. -.- -.- . -.- . .--.-. --. -- .- .. .-.. .-.-.- -.-. --- -- / .-- --- .-. -.- .. -. --. / .- - / ...-..- ----. ----. ----. / .--. . .-. / .... --- ..- .-. / -....- -....- -....- -.--. .-- .... .. -.-. .... / -- . .- -. ... / .--. .-.. ... / .... .. .-. . / -- . / .. -. / -.-. .... .. -. . ... . -.--.- -....- -....- -....- / .- ..-. ... -.. ..-. .- ... .--- -.. ..-. .-.-.- / ---... -.--.- -.--.- -.--.- -.--.-"
        );
        expect(
            sorter(
                "HEY MY NAME IS $@!?FREDERICKKEKE@GMAIL.COM WORKING AT $999 PER HOUR ---(WHICH MEANS PLS HIRE ME IN CHINESE)--- AFSDFASJDF. :))))"
            )
        ).toBe(
            ".... . -.-- / -- -.-- / -. .- -- . / .. ... / ...-..- .--.-. -.-.-- ..--.. ..-. .-. . -.. . .-. .. -.-. -.- -.- . -.- . .--.-. --. -- .- .. .-.. .-.-.- -.-. --- -- / .-- --- .-. -.- .. -. --. / .- - / ...-..- ----. ----. ----. / .--. . .-. / .... --- ..- .-. / -....- -....- -....- -.--. .-- .... .. -.-. .... / -- . .- -. ... / .--. .-.. ... / .... .. .-. . / -- . / .. -. / -.-. .... .. -. . ... . -.--.- -....- -....- -....- / .- ..-. ... -.. ..-. .- ... .--- -.. ..-. .-.-.- / ---... -.--.- -.--.- -.--.- -.--.-"
        );
    });
    it("returns english for morse code sentences", () => {
        expect(
            sorter(
                "-.. ... .- .--- .... ..-. -.- ... -.. .- .--- ..-. / - .... .. ... / .. ... / .--- ..- ... - / .- / -... ..- -. -.-. .... / --- ..-. / --. .. -... -... . .-. .. ... ...."
            )
        ).toBe("DSAJHFKSDAJF THIS IS JUST A BUNCH OF GIBBERISH");
        expect(
            sorter(
                "-- --- .-. . / --. .. -... -... . .-. .. ... .... / ..-. --- .-. / -.-- --- ..- / .. ..-. / -.-- --- ..- / .-.. .. -.- . .-.-.- / -. --- - / -- ..- -.-. .... / -- --- .-. . / -.. .. ..-. ..-. . .-. . -. - / ..-. .-. --- -- / -.-. .... .. -. . ... . / .- -. -.-- .-- .- -.-- --.."
            )
        ).toBe(
            "MORE GIBBERISH FOR YOU IF YOU LIKE. NOT MUCH MORE DIFFERENT FROM CHINESE ANYWAYZ"
        );
    });
    it("returns morse with even one enlish letter", () => {
        expect(sorter(".---a-")).toBe(".-.-.- -....- -....- -....- .- -....-");
        expect(sorter("---b--")).toBe(
            "-....- -....- -....- -... -....- -....-"
        );
    });
});
