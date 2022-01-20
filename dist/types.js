"use strict";
const e1 = {
    name: "max",
    privileges: ["aaa"],
    startDate: new Date(),
};
function Add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const inputElement = document.getElementById("text-input");
inputElement.value = "Hi there";
//# sourceMappingURL=types.js.map