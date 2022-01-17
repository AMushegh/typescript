type Combinable = number | string;

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: "as-number" | "as-text"
) {
    let result: Combinable;
    if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number"
    ) {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}

let combinedAges = combine(1, 2, "as-number");
console.log(combinedAges);

let combinedStringNumbers = combine("1", "2", "as-number");
console.log(combinedStringNumbers);
