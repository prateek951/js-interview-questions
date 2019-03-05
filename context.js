//Code to demonstrate the concept of the execution call stack 
function a() { 
 	console.log('inside function a');
  	function b() {
     	console.log('inside function b');
      
      	 function c() {
         	console.log('inside the function c');
         }
      	 c();
    }	
   b();
}

a();
