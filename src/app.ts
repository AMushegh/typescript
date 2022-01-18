class Department {
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }

    addEmployee(employee: string) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

let it = new ITDepartment("34233", ["Max"]);

it.describe();
it.addEmployee("Luciano");
it.addEmployee("Agutin");

// accouting.employees[2] = "Jammie";
// accouting.employees[3] = "Irma";

it.printEmployeeInformation();

// let accountingCopy = {
//     name: "mushegh",
//     employees: [],
//     describe: accouting.describe,
// };

// accountingCopy.describe();
console.log(it);

const accounting = new AccountingDepartment("123", []);

accounting.addReport("some report");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();
