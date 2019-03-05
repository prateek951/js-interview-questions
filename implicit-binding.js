
//  In order to figure out what the 'this' keyword is referencing,
//  first, look to the left of the dot when the function is invoked.
//  If there is a “dot”, look to the left of that dot to find the object
//  that the this keyword is referencing.

const student = {
  studentNumber: 'SM 2015-01342',
  name: 'Prateek Madaan',
  course: 'BSCS-ST',
  yearLevel: '4th  Year',
  showStatus: function() {
    console.log(`Name: ${this.name} Student Number: ${this.studentNumber}`);
    console.log(`Course and Year: ${this.course} ${this.yearLevel}`);
  }
}

student.showStatus();

//  In the example above, student is to “the left of the dot” which means the 'this' keyword is
//  referencing the student object. So, it’s as if, inside the greet method,
//  the JavaScript interpretor changes 'this' to student.


const user = {
  name: 'Prateek Madaan',
  age: 27,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`)
  },
  mother: {
    name: 'Jane',
    greet: function() {
      console.log(`Hello, my name is ${this.name}`)
    }
  }
}

user.mother.greet(); // Hello, my name is Jane

//  Whenever we’re trying to figure out what the 'this' keyword is referencing we need to look
//  to the invocation and see what’s to the “left of the dot”. In the first invocation,
//  user is to the left of the dot which means 'this' is going to reference user.
//  In the second invocation, mother is to the left of the dot which means
//  'this' is going to reference mother
