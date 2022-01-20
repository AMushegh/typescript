"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = this.reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report Found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please add a valid value");
        }
        this.addReport(value);
    }
    addEmployee(employee) {
        if (employee === "Max") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee = Department.createEmployee("Max");
console.log(employee);
let it = new ITDepartment("34233", ["Max"]);
it.describe();
it.addEmployee("Luciano");
it.addEmployee("Agutin");
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("123", []);
accounting.addReport("some report");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printReports();
accounting.printEmployeeInformation();
//# sourceMappingURL=classes.js.map