const re = /\./g;
const str = '23.4.';
let match;
while ((match = re.exec(str)) !== null) {
    console.log(match && match.index);
}