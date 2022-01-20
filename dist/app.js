"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registerdValidators = {};
function Required(target, propName) {
    registerdValidators[target.constructor.name] = Object.assign(Object.assign({}, registerdValidators[target.constructor.name]), { [propName]: ["required"] });
    console.log(registerdValidators);
}
function PositiveNumber(target, propName) {
    registerdValidators[target.constructor.name] = Object.assign(Object.assign({}, registerdValidators[target.constructor.name]), { [propName]: ["positive"] });
    console.log(registerdValidators);
}
function validate(obj) {
    const objValidatorConfig = registerdValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                case "positive":
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("Invalid input");
        return;
    }
    console.log(createdCourse);
});
//# sourceMappingURL=app.js.map