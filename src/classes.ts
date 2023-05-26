//Department class

abstract class Department {
  static fiscalYear = 2020;
  //   private readonly id: string;
  //   private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n;
  }

  // Static methods
  static createEmployee(name: string) {
    return { name: name };
  }

  // Methods

  abstract describe(this: Department): void;
  // console.log(`Department (${this.id}): ${this.name}`);

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// IT Department class
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID:" + this.id);
  }
}

// Accounting department class
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe(): void {
    console.log("This is description of Accounting department:" + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

// End of classes

//Static methods use

const employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("id1", ["Max"]);
//const accountingDpt = new AccountingDepartment("id2", []);
const accountingDpt = AccountingDepartment.getInstance();

console.log("IT Department functions start here:");
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();

console.log("Accounting department functions start here:");

accountingDpt.mostRecentReport = "Report1";
accountingDpt.addReport("Report3");
accountingDpt.addEmployee("Max");
accountingDpt.addEmployee("Manu");
accountingDpt.printEmployeeInformation();
accountingDpt.describe();
console.log(accountingDpt.mostRecentReport);
console.log(accountingDpt);
accountingDpt.printReports();
