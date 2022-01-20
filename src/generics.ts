// const names: Array<string> = ["max", "manu"];

// const promise: Promise<string | number> = new Promise((reslove, reject) => {
//     setTimeout(() => {
//         reslove("this is done");
//     }, 2000);
// });

// promise.then((data) => {
//     if (typeof data === "string") console.log(data.split(" "));
// });

// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max" }, { age: 30 });
// console.log("%capp.ts line:18 mergedObj", "color: #007acc;", mergedObj);

// function indentify(value: number) {
//     return value;
// }

// interface Lengthy {
//     length: number;
// }

// function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
//     let descriptionText = "Got no value.";
//     if (element.length === 1) {
//         descriptionText = "Got 1 element.";
//     }
//     if (element.length > 1) {
//         descriptionText = `Got ${element.length} element.`;
//     }

//     return [element, descriptionText];
// }

// console.log(countAndDescribe({ length: 1, aziz: 1 }));

// function extractAndConvert<T extends object, U extends keyof T>(
//     obj: T,
//     key: U
// ) {
//     return obj[key];
// }

// console.log(extractAndConvert({ name: "Max", age: 19 }, "age"));

// const arr: Array<string> = ["1", "2"];

// console.log(extractAndConvert(arr, 0));

class MyStorage<T extends number | string | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new MyStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");

console.log(textStorage.getItems());

const numberStorage = new MyStorage<number>();

// const objStorge = new MyStorage<object>();

// objStorge.addItem({ name: "Max" });
// objStorge.addItem({ name: "Manu" });

// objStorge.removeItem({ name: "Max" });
// console.log(objStorge.getItems());
