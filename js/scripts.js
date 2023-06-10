function triangleTracker(length1, length2, length3) {
    let sum1 = length1 + length2;
    let sum2 = length2 + length3;
    let sum3 = length3 + length1;
    if (sum1 <= length3 || sum2 <= length1 || sum3 <= length2) {
        return "This is not a trinagle!"
    } else if (length1 === length2 && length2 === length3) {
        return "This is a Equilateral triangle!"
    }
};