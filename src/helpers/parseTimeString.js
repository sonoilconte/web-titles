/**
 * Expected string input looks like 1.2, .2, 0.2
 * @returns string
 */

export default (str) => {

    if (str === '.') {
        return '0.';
    }

    let re = new RegExp(/[1-9][0-9]*\.[0-9]?/);
    let match = re.exec(str);

    if (match) {
        return match[0];
    }

    re = new RegExp(/[0-9]\.[0-9]?/);
    match = re.exec(str);

    if (match) {
        return match[0];
    }

    re = new RegExp(/[1-9][0-9]*/);
    match = re.exec(str);

    if (match) {
        return match[0];
    }

    re = new RegExp(/0/);
    match = re.exec(str);
    if (match) {
        return match[0];
    }

    return '';
};