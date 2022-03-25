const s = "abcabcbb"
const arr = s.split(``)
let substr = ``

let substr2 = ``;
for (let ele of arr) {
    if (!substr2.includes(ele)) {
        substr2 += ele;
    } else {
        if (substr2.length > substr.length) {
            substr = substr2;
            substr2 = ele;
        }
    }
}


console.log(substr);