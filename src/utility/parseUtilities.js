export const getParseColor = (parse) => {
    parse = parseFloat(parse);
    if(parse < 25){
        return '#666666' //gray
    } else if (parse >= 25 && parse <= 50 ) {
        return '#1eff00'
    } else if (parse >= 50 && parse <= 75) {
        return '#0070ff'
    } else if (parse >= 75 && parse <= 95) {
        return '#a335ee'
    } else if (parse >= 95 && parse <= 98.9) {
        return '#ff8000'
    } else if (parse >= 99 && parse <= 99.9) {
        return '#e268a8'
    } else {
        return '#e5cc80'
    }
}

export const floatTruncate = (float) => {
    float = Math.trunc(float * 10) / 10;
    return float;
}
