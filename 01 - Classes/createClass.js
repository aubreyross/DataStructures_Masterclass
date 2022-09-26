class Student { 
  constructor(firstName, lastName) { 
    this.firstName = firstName;   //properties the object should have
    this.lastName = lastName;
  }
}


let firstStudent = new Student("Aubrey", "Ross") //new object instances 
let secondStudent = new Student("Sydney", "Warrington")

console.log(firstStudent) // Student { firstName: 'Aubrey', lastName: 'Ross' }


//class: blueprint to make objects
//constructor: method to create new objects
//constructor function gets run when the class is instantiated 
//"this" : refers the object instance created from the class
//"new" : creates new object instance