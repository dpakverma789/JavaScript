//alert("welcome to world of JavaScript");

//DATA-TYPE
var num1 = prompt('Enter num1')
var num2 = prompt('Enter num2')
var sum = parseInt(num1)+parseInt(num2)
var integer=80;
var string=" string ";
var float=10.52;
const PI=3.14;  //cannot be changed
document.write(sum,',',integer,',',string,',',float,',',PI,"<br>");
console.log(integer,string,float);


//Array (array are also object)
var arr=[' apple ',' mango ',' grapes ',' kiwi '];
document.write("<br>Array list is: ",arr,"<br>");
document.write("mango in list: ",arr[1],"<br>");
arr.pop();  //array.pop remove the element at last
document.write('Poping Kiwi:',arr,'<br>');
arr.push('banana');  //array.push insert the element at last
document.write('Inserting Banana:',arr,'<br>');
document.write('array is of type: ',typeof(arr));
len=arr.length
document.write("<br>Array length: ",len,"<br>");
document.write("Sorted Array: ",arr.sort(),"<br>");

list="<ul>";
for (i=0;i<len;i++)
{
	list+="<li>"+arr[i]+"</li>";
}
list+="</ul>"
document.write("<br>Array list is: ",list);


// OBJECT
var person=
{
	name:"deepak",
	age:24,
	work:"devloper"
}

document.write("<br>NAME: ",person.name+" "+"AGE: "+person.age," ","WORK: ",person.work,"<br>");
console.log(person.name+" "+person.age," ",person.work,"<br>");


// NAme FUNCTION
var x=5,y=8;    //global variable

function addition(a,b)   //a,b is parameter
{
  var sum=a+b;     //local variable
  return sum;
}

var add=addition(x,y);  //invokiing function and x,y is argument
document.write('<br>addition is :'+add);


//Anonymous function  
var addition=function(x,y)   //this function do not have name it is directly assign to a variable
{
	var result;
    document.write("<br>","X is:",x,"<br>","Y is:",y);
    //ternary operator   condition ? value1 : value2
	x>y?result="X is greater":result="Y is greater";
	document.write("<br>",result,"<br>");
	console.log(result);
};	
addition(5,2); //anonymous function is directly called by variable name where it is assign


//Self invoking function
(function(x,y)
{
	z=x*y
   document.write("<br>We are inside self invoking function",z,"<br>")
   
})(5,4);


//arrow function
//variable  = ()->it is function without parameter , (parameter)-->it is function with parameter
//  "=>"  this is return statement of function
const hello = (name) => 'hello '+name;
document.write('Using Arrow Function: ',hello('javaScript'));


//call-back function (same as a decorator in python)
let argumentFunction = function()
{
	document.write('I am called from inside a function','<br>');
	console.log('I am called from inside a function');
}

let mainFunction = function(callback)
{
	//callback contain the reference of argumentFunction
	document.write('<br>','do something','<br>');
	console.log('do something');
	callback();
}

mainFunction(argumentFunction);  // function argumentFunction passed as a argument to function mainFunction 



//call method using in function
// var details = 
// {
// 	fullName : function()
// 	{
// 		return this.firstName +" "+ this.lastName;
// 	}

// 	fullName2 : function()
// 	{
// 		return this.firstName +" "+ this.lastName + city;
// 	}
// }

// var person1
// {
// 	firstName : 'Deepak',
// 	lastName:    'Verma'
// };

// var person2
// {
// 	firstName : 'Yuvraj',
// 	lastName:   'singh'
// };

// const data = details.fullName.call(person2,'udaipur');   //call() method take argument seperately and apply() method takes array as an argument
// //const data = details.fullName.call(person2,['udaipur']);   apply() method
// console.log(data);  


//LET Variable
var letVariable=function()
{
	//var variable exist in block but can be access in sub block also
	var name="javaScript";  

	if (name)  // same as if (true)
	{
		 //let variable exist in block only where it is declare
		let name="Hello javaScript"; 
		document.write("<br>If name variable :",name)
	}

	document.write("<br>Function name variable :",name,"<br>")
};

letVariable();


//Function class and object
function employee(name,surname,id,dept,salary)
{
	this.name=name;
	this.surname=surname;
	this.id=id;
	this.dept=dept;
	this.salary=function()
	{
		 newsalary =salary*0.1
		 return salary+newsalary
	}
}


var emp1 = new employee("deepak","verma",1,"devlopment",300000);  //object 

var Employee=    //object array
[
	new employee("Rajveer","Singh",2,"operations",120000),  //object1
	new employee("Jitendar","Kumar",3,"operations",100000),  //object2
	new employee("Josh","mathur",4,"devlopment",200000)   //object3
];

document.write("<br>","Employee Id: ",emp1.id);   
 //emp1.id (dot notation for obejct) equal emp1["id"] (bracket notation for object)
document.write("<br>","Employee name: ",emp1["name"]);
document.write("<br>","Employee surname: ",emp1["surname"]);
document.write("<br>","Employee salaryRaise: ",emp1.salary(),"<br>");

document.write("<br>","Employee name: ",Employee[0].name);
document.write("<br>","Employee name: ",Employee[1].name);
document.write("<br>","Employee name: ",Employee[2].name);





function setCookie()  
    {  
    	try{
        document.cookie = "username=deepak";
        console.log(document.cookie);
        confirm('cookie set');
        var data;
         data = document.cookie
    }
        catch(error)
        {
        	console.log(error);
        }
    
    return data;
}

function getCookie(data)  
{  
    if(document.cookie!='')  
    {  
    	alert(document.cookie);  
    }  
    else  
    {  
    	alert("Cookie not available");  
    }  
}  
