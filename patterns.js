// Prototypes in Javascript

//Uncomment the below code if not using prototype way

// const animalMethods = {
//   eat(amount) {
//     console.log(`${this.name} is eating`);
//   },

//   sleep(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
//   },
//   play(length) {
//     console.log(`${this.name} is playing`);
//     this.energy -= length;
//   }
// };

function Animal(name, energy) {
  //Create an animal
  //   let animal = Object.create(animalMethods);
  // Now delegate this to the prototype
  let animal = Object.create(Animal.prototype);
  //set the animal name
  animal.name = name;
  //set the initial energy level for the animal
  animal.energy = energy;
  //methods for the animal
  //   animal.eat = animalMethods.eat;
  //   animal.sleep = animalMethods.sleep;
  //   animal.play = animalMethods.play;
  return animal;
}

function AnimalWithNew(name, energy) {
    //Using the new keyword, Javascript will call this 
    //line implicitly for you 
//   let animal = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;
  //and also call this line for you and will refer the animal 
  //using the this keyword
//   return this;
}

//Create an animal
// const leo = Animal("Leo", 1000);
// leo.sleep(1000);
// console.log(leo.energy);

// const snoop = Animal("Snoop", 2000);
// snoop.eat();

//Function ProtoTypes are just a property on a function that points
// to an object

//DOING THE ABOVE SAME CODE USING FUNCTION PROTOTYPES

// Prototype is a property that every single function that you create
//has and that points to an object

//Instead of managing the animal methods separately why not put t
// them on the prototype

//Let us comment the animalMethods

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping`);
  this.energy += length;
};

Animal.prototype.play = function(length) {
  console.log(`${this.name} is playing`);
  this.energy -= length;
};

const mark = Animal("mark", 2000);
mark.eat(1000);
console.log(mark.energy);

//Prototypes allow us to share the methods across various instances
// of Animal. All this functionality is same but instead of managing
// all the animal methods in an object we use the property that
// comes with every function to share the methods across various
//instances and this concept is known as functional prototypes.

//Let us create an animal using the new keyword 

const markNew = new AnimalWithNew('mark2',2000); 
//JS behinds the scenes will create an object for you 
//delegate it to the AnimalWithNew.prototype and 
//it will also gonna return the implicit object that 
//it is creating for you. 

AnimalWithNew.prototype.eat = function(amount) {
    console.log(`${this.name} is eating`);
    this.energy += amount;
}
AnimalWithNew.prototype.sleep = function(duration) {
    console.log(`${this.name} is sleeping`);
    this.energy += duration;
}
AnimalWithNew.prototype.play = function(duration) {
    console.log(`${this.name} is playing`);
    this.energy -= duration;
}
console.log(markNew.energy);
markNew.eat(2000);
console.log(markNew.energy);

//PROTOTYPE OF AN OBJECT 

const prototype = Object.getPrototypeOf(markNew);
console.log(prototype);

console.log(prototype === Animal.prototype);

//Loop over the keys of an object 

for(let key in markNew) { 
    console.log(key);
    // This logs all the properties of the object as well
    // as all the properties that the object delegates to
}
console.log('---------------------------------');
// For this we can use the hasOwnProperty 
console.log(markNew.hasOwnProperty('name'));
console.log(markNew.hasOwnProperty('sleep'));

Object.keys(markNew).forEach(key => console.log(key));

//Checking an object is a specific instance of the class 

function User() { 

}
console.log(markNew instanceof AnimalWithNew);
console.log(markNew instanceof User);

//Arrow functions do not have their own this keyword 
//This code wont work for the same reason 
//since it does not have an implicit this. 
// const Animal2 = () => {};
// const leoo = new Animal2();

//Arrow function do not have a prototype property 















