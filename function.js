
// js support hoisting[fucntion calling before defining] in non strict mode 
showMe('I am Hoisting');

function showMe(msg)
{
	console.log(msg);
}


function add(arg)
{
	let sum = 0;
	for (i=0;i<arg.length;i++)
	{
		sum += arg[i];
	}
	return console.log('Sum is :',sum);
}

function sub(arg)
{
	let sub = 0;
	for (i=(arg.length)-1;i>=0;i--)
	{
		arg[i+1] = arg[i] - arg[i+1];
	}
	return console.log('Sum is :',arg[i+1]);
}

function arithematic(callback,arg)
{
	callback(arg);
}

let = num = [7,0,8,5].sort((a,b)=> b-a);
arithematic(add,num);
arithematic(sub,num);




function compareBy(property)
{
	return function(a,b)
	{
		let x = a[property],y = b[property];
		if (x>y)
		{
			return 1;
		}
		else if (x<y)
		{
			return -1;
		}
		else
		{
			return 0;
		}

	}
}

let product = 
	[
		{name:'Mi',price:700},
		{name:'zsumsung',price:600},
		{name:'Iphone',price:500}
	];

console.log('without sort: ',product);
console.log(product.sort(compareBy('name')));



// anonyomous function
let greeting = function()
{

	var today = new Date();

	if (today.getHours() < 12)
	{
		msg = 'Good Morning';
	}
	else if (today.getHours()>=12 && today.getHours()<=16)
	{
		msg = 'Good afternoon';
	}
	else
	{
		msg = 'Good Evenning';
	}
	return console.log(msg);
}

greeting()


// this function execute command after time provided to it in milisec
setTimeout(function()
{
	console.log(msg);

},3000);


//self invoke finction
let js = {name:'javascript'};

(function(js){
	console.log(`${js.name}`,' can invoke itself');
})(js);


//arrow function
let name = () => console.log('Deepak Verma');     // let name =  function() { return console.log('Deepak verma'); }
name();  // function key word is remove only (argument paranthesis left) and => indicate the return keyword

let multiply = (x,y) => console.log(x*y);
multiply(5,4);

((js) => console.log(`${js.name}`,' can invoke itself using arrow function'))(js);  //self invoke function using arrow function defining


// call back function are when funtion is passed as an argument in another function

function oddnumber(num)
{
	if (num % 2 == 0)
	{
		return num;
	}
}


let number = [1,5,2,3,4,6,9,7,8];
let Oddnumber = number.filter(num => num%2).sort((a,b)=>a-b);
console.log(Oddnumber);



// using callback function for asynchronus function 
function download(callback)
{
	(setTimeout(()=>{console.log('--downloading finish --');callback();},5000));

}

let process = () => console.log('--processing started--');

download(process)


//this object and call object 
const myobject={
			firstName : "Pucchu",
			lastName : "modiya",
			fullname : function (city='Ahemdabad',state='Gujarat')
			{
				statment =  this.firstName+' '+this.lastName+' '+'belongs from '+city+' '+state;
				return statment
			}
		};


const person_1 = {
			firstName : "Golo",
			lastName : "Molu"
		}

const person_2 = {
			firstName : "Chikoo",
			lastName : "Khaja"
		}		
console.log('My full name is :',myobject.fullname());
// myobject.fullname this has person_1 object 
console.log('Person 1 is :', myobject.fullname.call(person_1,'Jaipur','Rajathan'));   // call function take argument seperatly
console.log('Person 2 is :', myobject.fullname.apply(person_2, ['Udaipur','Rajathan']));		// apply function take argument in array


//closures
let string_1 = 'I am out side the function';

const function_1 = function()
{
	let string_2 = 'I am inside the function_1';

	let function_2 = function()
	{
		let string_3 = 'I am inside the function_2';
		console.log(string_1);
		console.log(string_2);
		console.log(string_3);
	}

	console.log(string_1);
	function_2();
}

function_1();
