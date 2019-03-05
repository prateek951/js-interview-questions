
//EXPLICIT BINDING USING .call

//  “call” is a method on every function that allows you to invoke the function
//  specifying in what context the function will be invoked.

//  Again, call is a property on every function and the first argument you pass to it
//  will be the context (or the focal object) in which the function is invoked.
//  In other words, the first argument you pass to call will be what the this keyword
//  inside that function is referencing.

//  This is the foundation of rule #2 (Explicit Binding)
//  because we’re explicitly (using .call), specifying what the this keyword is referencing.

const greet = function() {
  console.log(`My name is ${this.name}`);
}

const user = {
  name: 'PJ Medina',
  age: 23,
}

greet.call(user)

//-----------------------------------------------------------------------------------------//


//EXPLICIT BINDING USING .apply

//  .apply is the exact same thing as .call, but instead of passing in arguments one by one
//  you can pass in a single array and it will spread each element in the array out
//  for you as arguments to the function.

function greet (l1, l2, l3) {
  console.log( `Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const languages = ['JavaScript', 'Ruby', 'Python'];

const user = {
  name: 'PJ Medina',
  age: 23,
};

greet.apply(user, languages)

//------------------------------------------------------------------------------------------//


//EXPLICIT BINDING USING .bind

//  .bind is the exact same as .call but instead of immediately invoking the function,
//  it’ll return a new function that you can invoke at a later time.

function greet (l1, l2, l3) {
  console.log(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user = {
  name: 'PJ',
  age: 23,
}

const languages = ['JavaScript', 'Ruby', 'Python'];

const newFn = greet.bind(user, languages[0], languages[1], languages[2]);
newFn(); // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"
