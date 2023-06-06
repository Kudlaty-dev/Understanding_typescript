type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection type:
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Kudlaty",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number; //This is function overload
function add(a: string, b: string): string; //This is function overload
function add(a: Combinable, b: Combinable) {
  //Type guard:
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const fetchedUserData = {
  id: "u1",
  name: "Kudlaty",
  job: { title: "CEO", dsescription: "My own company" },
};

//Optional chaining property - with '?' it only tries to access inside if the property exists.
console.log(fetchedUserData?.job?.title);

const result = add("Max", "Kudlaty");
console.log(result);

// Nullish coalescing

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Privileges: " + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// class Car {
//   drive() {
//     console.log("Driving...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo..." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   // More elegant type guard
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// //Discriminated Unions
// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;
// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving at speed " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 30 });

// // Type Casting
// //const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
// const userInputElement = document.getElementById(
//   "user-input"
// )! as HTMLInputElement;

// userInputElement.value = "Hi there!";

// //Index properties
// interface ErrorContainer {
//     [prop: string]: string
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email!'
//     username: 'Must start with a capital character'
// }
