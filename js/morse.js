import sorter from "./sorter.js";

const input = document.querySelector("#input");
const output = document.querySelector("#output");

const eventHandler = () => {
    try {
        output.value = sorter(input.value);
    } catch {
        output.value = `Hey chill man, ( ${input.value} ) is not a valid input`;
    }
};

input.addEventListener("input", eventHandler);

/*
1. make a testing plan (done)
2. make two boxes input & output (done)
3. make second box untypable
4. test tranlator function (done)
5. make input run function oninput (done)
7. Make output respond to/ mirror input(done)
8. plug translation functions into input (done)
9. perform final tests
*/
