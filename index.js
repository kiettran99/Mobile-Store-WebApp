// const multiplier = {
//   numbers: [1, 4, 2, 3],
//   multiplyBy: 2,
//   multiply() {
//     console.log(this)
//     return this.numbers.map((number) => number * this.multiplyBy)
//   },
//   arrowFunction: () => {
//     console.log(this)
//   }
// }

// console.log(multiplier.arrowFunction())

// class Person {
//   constructor(name = 'Anonymous', age = 0) {
//     this.name = name;
//     this.age = age;
//   }

//   getGretting() {
//     return `Hi, i am ${this.name}`;
//   }

//   getDesciprtion() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }

//   hasMajor() {
//     return !!this.major;
//   }

//   getDesciprtion() {
//     let description = super.getDesciprtion();

//     if (this.hasMajor()) {
//       description += ` Their major is ${this.major}.`;
//     }

//     return description;
//   }
// }

// //Traveler

// class Traveler extends Person {
//   constructor(name, age, location) {
//     super(name, age);
//     this.location = location;
//   }

//   getGretting() {
//     let gretting = super.getGretting();

//     if (this.location) {
//       gretting += ` I'm visitting from ${this.location}`;
//     }

//     return gretting;
//   }
// }

// const me = new Student("Andrew", 25, "Computer");
// console.log(me.getDesciprtion());

// const traveler = new Traveler("Andrew, 25, New York");
// console.log(traveler.getGretting());