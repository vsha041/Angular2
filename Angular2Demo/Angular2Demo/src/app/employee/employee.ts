﻿export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
}

//export class Employee implements IEmployee {
//    //public code: string;
//    //public name: string;
//    //public gender: string;
//    //public annualSalary: number;
//    //public dateOfBirth: string;

//    //constructor(code: string, name: string, gender: string, annualSalary: number, dateOfBirth: string) {
//    //    this.code = code;
//    //    this.name = name;
//    //    this.gender = gender;
//    //    this.annualSalary = annualSalary;
//    //    this.dateOfBirth = dateOfBirth;
//    //}

//    // Shorthand Syntax
//    constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) {

//    }

//    computeMonthlySalary(annualSalary: number): number {
//        return annualSalary / 12;
//    }

//}