//new binding and the window binding 

//Constructor function 
var Animal = function(color,name,type){
 	 //js gonna create a brand new object for us behind the scene and save it for us as this = {}
  this.color = color;
  this.name = name;
  this.type = type; 
}

//Concept of the new binding 

var zebra = new Animal('Black and White','Zebra','Animal')

console.log(zebra.color);

//When the new word is used to create a new object, the this keyword references the new object which gets constructed 


//WINDOW BINDING 

var sayAge = function() {
 	console.log(this.age);
}


var prateek = {
	age : 21
}

//Call the sayAge function in the context 


sayAge.call(prateek); 

//Say we directly invoke just the sayAge function  
//Then the context in which it runs is the window object and 
//where the this keyword is window object where no age variable exists hence undefined 

//If we call sayAge directly then 
//it will refer to the context of window object



