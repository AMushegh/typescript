// interface AddFn {
//     (a: number, b: number): number;
// }

// let add: AddFn;

// add = (n1: number, n2: number) => n1 + n2;

// interface Named {
//     readonly name: string;
//     outputName?: string;
// }

// interface Greetable extends Named {
//     greet(phrase: string): void;
// }

// class Person implements Greetable {
//     name: string;
//     age = 30;

//     constructor(name: string) {
//         this.name = name;
//     }

//     greet(phrase: string) {
//         console.log(phrase + " " + this.name);
//     }
// }

// let user1: Greetable;

// user1 = new Person("Max");

// user1.greet("hello");
// console.log(user1);
