<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title> Object-orientated JavaScript classexample</title>
    </head>

    <body>
        <p>example</p>
    </body>

        <script>
            let i = 1; //declaram var i

            //aisam 
            for( i=1; i<=10; i++){
               console.log(i);
               //alert (i);
            }
            console.log('------------');
            for( i=10; i>=1; i--){
                console.log(i);
            }
            function sum(a,b){
                return a + b;
            }
            let result= sum(4, 6);
            alert (5+1);
            {
                //Defining object 
/*let person = { 
	first_name:'Mukul', 
	last_name: 'Latiyan', 

	//method 
	getFunction : function(){ 
		return (`The name of the person is 
		${person.first_name} ${person.last_name}`) 
	}, 
	//object within object 
	phone_number : { 
		mobile:'12345', 
		landline:'6789'
	} 
} 
console.log(person.getFunction()); 
console.log(person.phone_number.landline); */

// Defining class in a Traditional Way. 
/*
function Vehicle(name,maker,engine){ 
	this.name = name, 
	this.maker = maker, 
	this.engine = engine 
}; 

Vehicle.prototype.getDetails = function(){ 
	console.log('The name of the bike is '+ this.name); 
} 

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc'); 
let bike2 = new Vehicle('Ninja','Kawasaki','998cc'); 

console.log(bike1.name); 
console.log(bike2.maker); 
console.log(bike1.getDetails()); */

// Defining class using es6 
class Vehicle { 
constructor(name, maker, engine) { 
	this.name = name; 
	this.maker = maker; 
	this.engine = engine; 
} 
getDetails(){ 
	return (`The name of the bike is ${this.name}.`) 
} 
} 
// Making object with the help of the constructor 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc'); 
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc'); 

console.log(bike1.name); // Hayabusa 
console.log(bike2.maker); // Kawasaki 
console.log(bike1.getDetails()); 



            }
        </script>
</html>