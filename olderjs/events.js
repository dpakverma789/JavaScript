

//external javaScript function file
function resetClick()
	{
		document.getElementById("demo").innerHTML="Hello Mr. stark";
	}

function javascript()
	{
		var text=document.getElementById('newdemo').innerHTML;
		var newtext=text.replace(/python/i,'Javascript');
		text=document.getElementById('newdemo').innerHTML=newtext;
	}
function python()
	{
		var text=document.getElementById('newdemo').innerHTML;
		var newtext=text.replace(/Javascript/i,'Python');
		text=document.getElementById('newdemo').innerHTML=newtext;
	}

// $(document).ready(function(){
	
// });
	
//STRINGS
document.write("<br>");
var str="hello world";
len=str.length;
idx=str.indexOf('world');
var x =str.slice(5,12);  //string.slice(start,end);
document.write("<br>",str.toUpperCase(),"<br>lenght is: ",len);
document.write("<br>index of world: ",idx);
document.write("<br>slicing(5,12): ",x.toLowerCase());
str=str.replace("world","JAVASCRIPT");
document.write("<br>new string is: ",str.toLowerCase());

//finding max and min using sort method

var array=[50,20,10,30,40];
document.getElementById('array').innerHTML='Unsorted Array: '+ array;

function sorting()   //sorting function
{
	 //compare funtion    array.sort(function (parameter) { return expression}); a-b for acc & b-a for dec
	array.sort(function(a,b){ return a-b});     
	document.getElementById('array').innerHTML='Sorted Array: '+ array;
	document.getElementById('min').innerHTML=array[0];
	lenght=array.length;
	document.getElementById('max').innerHTML=array[lenght-1];
}

function resetclick()
{
	var array=[50,20,10,30,40];
	document.getElementById('array').innerHTML='Unsorted Array: '+ array;
	document.getElementById('min').innerHTML='';
	document.getElementById('max').innerHTML='';
}


//DATE OBJECT
var date=new Date();
document.getElementById('date').innerHTML='<br>Today date is: '+ date.toDateString();



//Closure 
var a = 'I am a global variable';
var function1 = function()
{
	var b = 'I am local varible of function1';

	var function2 = function()
	{
		var c = 'I am local varible of function2';
		console.log(a);   //can be access by function 1 and 2
		console.log(b);   //can be access by function 1 and 2
		console.log(c);  // only can be access by function 2 not by function 1
	}
    console.log(a);  
	console.log(b);
	return function2()
}

function1();



//Promises
let ride  = new Promise(function(resolve,reject)
{
	let arrived = true;

	if (arrived)
	{
		resolve('driver arrived');
	}
	else
	{
		reject("driver didn't arrived");
	}

});


ride.then(function(resolveString)
{
   console.log(resolveString);
}).catch(function(rejectString) 
{
	console.log(rejectString);

});

//async-await 
async function status()
{
	let status_ride = await ride;
	console.log(status_ride)

};
status();





//Array Filter function
//filter() method filter and extract the element of an array that "satisfying the provided condition". It doesn't change the original array
let number =[10,44,20,54,41,52];

let newNumber = number.filter(function(value)
{
	return value>25; //checking condition in filter
});
console.log(number,'number greater than 25',newNumber);

//Array Map function
//The map() method is used for creating a new array from an existing one, "applying a function to each one of the elements" of the first array
var newarray = number.map(function(num)
{
     return num*2;  //manipalating data 
});
console.log(number,'double of number',newarray);

//reduce function
//The reduce() method reduces an array of values down to just one value
var sum = number.reduce(function(sum,num)
{
    return sum+num;  //reducing to single value from many
});
console.log(number,'sum of the number',sum);


// JAVA-SCRIPT CLASS 
class emoloyee
{
	constructor(name, age, salary)// Constructor 
	{
		this.name=name;      //constructor attributties
		this.age=age;
		this.salary=salary;
	}

	retirement()      //class method
	{
		if (this.age<25)
		{
			var retirement =  '50';
		}
		else
		{
			var retirement = '30';
		}

		return retirement;
	}
}

emp1= new emoloyee('deepak', 24, 1000000);   //class object
console.log('employee name is ',emp1.name);
console.log('employee age is',emp1.age);
console.log('employee salary is ',emp1.salary);
console.log('employee restrement is ',emp1.retirement());


//Class name as a variable
var emp2 = class{      
	constructor(name,surname)
	{
        this.name = name;
        this.surname = surname;
	}

    fullname()
    {
    	return this.name+this.surname;
    }
}

object1 = new emp2('Deepak','Verma');
console.log(object1.fullname());


















