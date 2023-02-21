/**
 * @returns string
 * Could refactor so it could handle any string pasted in as well
 * Here I'm assuming only one character added at a time, at end of string
 */

export default (str) => {
    if (
        str === '0'
        || str === '0.'
        || str === '0.0'
    ) {
        return str;
    }

    if (str === '.') {
        return '0.';
    }

    if (str === '00') {
        return '0';
    }

    const matchResult = str.match(/\./g);
    if (matchResult && matchResult.length > 1) {
        // Anything more that one . and we slice it off
        str = str.substring(0, str.length - 1);
    }
    const endsWithDecimal = str.endsWith('.');
    let parsedNum = parseFloat(str);
    if (parsedNum) {
        // We force the time to one decimal place because we deal in tenths of a second (100 ms)
        parsedNum = Math.floor(parsedNum * 10) / 10;
        const strResult = endsWithDecimal ? `${parsedNum.toString()}.` : parsedNum.toString();
        return strResult;
    }
    return '';
};