class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
    this.tardies = 0; //starts at zero since there are zero tardies when we create a student
    this.scores = []; //empty since there are no tests when we create a student
  }

//Instance methods provide functionality to a single instance of Student.
  fullName() {
    return `${this.firstName}'s full name is ${this.firstName} ${this.lastName}`
  }

  markLate() {
    this.tardies++ //adds tardy to initial count
    if(this.tardies >= 3) {  //if tardy 3 times = student is expelled
      return `You are expelled!`
    }
    return `Student ${this.firstName} has been late ${this.tardies} times`
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage() {
  //reduce will take each score and sum it. Then divided by # of scores to create avg. 
    return this.scores.reduce((a, b) => a + b) / this.scores.length
  }
}

let firstStudent = new Student("Aubrey", "Ross")

firstStudent.addScore(90)
firstStudent.addScore(95) 
firstStudent.addScore(100) 
console.log(firstStudent.scores) // [ 90, 95, 100 ]
console.log(firstStudent.calculateAverage()) // 95