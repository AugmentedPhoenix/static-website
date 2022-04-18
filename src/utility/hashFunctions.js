import {createHash} from "crypto-browserify";

export const hash = (string) => {
    return createHash('sha256').update(string).digest('hex');
}