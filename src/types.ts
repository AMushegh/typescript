type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "max",
    privileges: ["aaa"],
    startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function Add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

// const inputElement = <HTMLInputElement>document.getElementById("text-input")!;
const inputElement = document.getElementById("text-input")! as HTMLInputElement;

inputElement.value = "Hi there";

interface ErrorContainrer {}
