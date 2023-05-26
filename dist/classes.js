"use strict";
//Department class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //   private readonly id: string;
        //   private name: string;
        this.employees = [];
        // this.id = id
        // this.name = n;
    }
    // Static methods
    Department.createEmployee = function (name) {
        return { name: name };
    };
    // console.log(`Department (${this.id}): ${this.name}`);
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.fiscalYear = 2020;
    return Department;
}());
// IT Department class
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID:" + this.id);
    };
    return ITDepartment;
}(Department));
// Accounting department class
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "Accounting") || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.getInstance = function () {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
        return this.instance;
    };
    AccountingDepartment.prototype.describe = function () {
        console.log("This is description of Accounting department:" + this.id);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    };
    return AccountingDepartment;
}(Department));
// End of classes
//Static methods use
var employee1 = Department.createEmployee("Max");
console.log(employee1, Department.fiscalYear);
var it = new ITDepartment("id1", ["Max"]);
//const accountingDpt = new AccountingDepartment("id2", []);
var accountingDpt = AccountingDepartment.getInstance();
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
