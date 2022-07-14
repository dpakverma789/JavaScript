

const person = {
	firstName : "Deepak",
	lastName : "Verma",
	age : 25,
	coding_language : {
		code_1 : 'Python',
		code_2 : 'Javascript',
		code_3 : 'Sql'
	},
};

person.work = 'software developer';
person.fullName = function()
	{
		return 'Hi my name is '+this.firstName+' '+this.lastName  // here this is pointing to person object
	}

const temp = person;
console.log(person.fullName());
console.log('I am '+temp.age+' year old and i am a '+temp.work.toUpperCase()+"\n")
delete person.age 

var code_array =  Object.values(person.coding_language);  // Object.values convert object values to array
console.log('I am good at these coding languages: '+code_array);

for (let code in person.coding_language){
console.log('\t'+person.coding_language[code]); // object.key will not work in loop so use object[key] to print its value
}


function student(name,surname,age)         // functional class
{
	this.student_firstName = name;           // functional attributes
	this.student_lastName = surname;
	this.student_age = age;
	this.fullName = function(){
		return this.student_firstName +' '+ this.student_lastName
	}
}

const student_1 = new student('Anki','Coszo',10);  // functional object
student.contact = "7073870596"; //we can not add new object property outside the object constructor
student.prototype.contact = "7073870596";  //for using the abv statement we have to use prototype
console.log('Student contact: '+ student_1.contact) 
console.log(student_1.fullName());


for (let x of 'Javascript')   // "of" print 'element' an "in" print 'index'
{
	console.log(x);
}

const vowels = ['a','e','i','u','a','e','i'];
const letter = new Set(vowels)
letter.add('o'); //adding element to set
console.log(letter);
console.log(letter instanceof Set);  // Returns true

// maps are also similar to dict in python
const fruits = new Map([['apple','red'],['grass','green'],['lemon','yellow']]);
fruits.set('berry','blue');
console.log(fruits,'Map size:',fruits.size);
console.log(fruits.get('berry'));
fruits.delete('grass'); // fruits.clear() to clear the map
console.log(fruits);
console.log(fruits.keys());
console.log(fruits.values());
console.log(fruits.entries());
console.log(fruits.has("apple"));  // true if key exist in map