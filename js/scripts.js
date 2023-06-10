// triangle Tracker practice lesson 75, week2. Doesn't account for various arguments that the user might enter i.e. strings, negative number, blank entries, etc.
function triangleTracker(length1, length2, length3) {
    let sum1 = length1 + length2;
    let sum2 = length2 + length3;
    let sum3 = length3 + length1;
    if (sum1 <= length3 || sum2 <= length1 || sum3 <= length2) {
        return "This is not a trinagle!"
    } else if (length1 === length2 && length2 === length3) {
        return "This is an Equilateral triangle!"
    } else if (length1 === length2 || length2 === length3 || length3 === length1) {
        return "This is an Isosceles triangle!"
    } else {
        return "This is a Scalene triangle!"
    }
};

// Build a Deck practice lesson 22, week 3.

let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
let suiteArray = ["Clubs", "Spades", "Hearts", "Diamonds"];
let resultArray = [];

suiteArray.forEach(function (suite) {
    numberArray.forEach(function (number) {
        resultArray.push(number + " of " + suite);
    })
});