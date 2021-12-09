import { convertToMorse, convertToEnglish } from "./Converters.js";

const sorter = (str) => {
    if (
        /[^a-zA-Z0-9 \"\.\,\?\'\!\/\(\)\&\:\;\=\+\-\_\$\@]/.test(str) ||
        str === undefined
    ) {
        return new error("error out");
    } else if (str === "") {
        return "Type to begin translating";
    } else if (/[^./ \-]/.test(str)) {
        return convertToMorse(str);
    } else return convertToEnglish(str);
};
export default sorter;
