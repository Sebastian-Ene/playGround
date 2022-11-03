// function createCheckDigit(membershipId) {
//     console.log("initial value" + membershipId);
//     // Write the code that goes here.
//     if (membershipId.length == 1) return membershipId;
//     const sumOfChars = membershipId.split("").reduce((a, b) => {
//         return parseInt(a) + parseInt(b);
//     }, 0);
//     console.log(sumOfChars);
//     return createCheckDigit(sumOfChars.toString());
// }

// console.log(createCheckDigit("55555"));

function twoStrings(s1, s2) {
    // Write your code here
    const setOfArrs = new Set([...s1, ...s2]);
    if (
        [...new Set(s1)].length + [...new Set(s2)].length >
        [...setOfArrs].length
    )
        return "YES";
    return "NO";
}

console.log(twoStrings("and", "art"));
