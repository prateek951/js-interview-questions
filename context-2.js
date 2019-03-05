// Code for demonstration of Execution Call Stack and how scope works 

function first() {
  	var name = 'Prateek'
    console.log(name)
}

function second() {
 	var name = 'Node'
    console.log(name) 
}

console.log(name)
var name = 'Tyler' 
first() 
second() 
console.log(name) 
