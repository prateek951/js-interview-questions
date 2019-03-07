class Animal {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }
  eat(energy) {
      console.log(`${this.name} is eating`);
      this.energy += energy;
  }
  sleep(energy) { 
      console.log(`${this.name} is sleeping`);
      this.energy += energy;
  }
  play(energy) { 
      console.log(`${this.name} is playing`);
      this.energy -= energy;
  }
}

const leo = new Animal('leo',2000);
leo.sleep(2000);
console.log(leo.energy);

// This new way is just the syntactical sugar over the 
//old one that is shown in patterns.js 

const friends = [];
//Syntactical sugar for creating a new instance of Array
const friendsWithoutSugar = new Array(); 

// All of the methods like slice, splice, filter, map,
// reduce live on the Array.prototype 



