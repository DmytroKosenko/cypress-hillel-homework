//create a descendant class Worker - which must have its own constructor with the declaration of two fields salary, work time. There should also be two methods that display a greeting and report that the job is complete.

class Human {
  constructor() {
    if (this.constructor == Human) {
      throw new Error("it is abstract class");
    }
  }
  eat() {
    console.log("eating");
  }
  listen() {
    console.log("listening");
  }
}

class Worker extends Human {
  constructor(name, salary, workTime) {
    super();
    this.name = name;
    this.salary = salary;
    this.workTme = workTime;
  }
  sayHello() {
    console.log(`hello my name is ${this.name}`);
  }
  salaryInfo() {
    console.log(`my current salaty is ${this.salary}`);
  }
  finishWork() {
    console.log("my part of the work is over");
  }
}

let worker_1 = new Worker("jerry", 1000, 8);
worker_1.sayHello();
worker_1.salaryInfo();
worker_1.finishWork();

let worker_2 = new Worker("albert", 1000, 8);
worker_2.sayHello();
worker_2.salaryInfo();
worker_2.finishWork();

let worker_3 = new Worker("mario", 1000, 8);
worker_3.sayHello();
worker_3.salaryInfo();
worker_3.finishWork();

//create a method that will output a message to the console about whether the employee is currently working or not can be used Date()
//and depending on the hour of the method call, whether to display the business hours text or not working day from 09:00 to 18:00

class WorkTime {
  constructor(currentDate = new Date()) {
    this.currentDate = currentDate;
    this.currentHour = this.currentDate.getHours();
  }
}

class Employee extends WorkTime {
  constructor(currentDate = new Date()) {
    super(currentDate);
  }
  isWork() {
    if (this.currentHour >= 9 && this.currentHour < 18) {
      console.log("Employee is working right now.");
    } else {
      console.log("Employee is not working right now.");
    }
  }
}

let employee_1 = new Employee();
employee_1.isWork();
