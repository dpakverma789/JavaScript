
// const prompt = require('prompt-sync')();

class friends             //defining the parent class
{
	constructor(name,surname)    //class constructor
	{ 
		this.name = name;         //class attribute
		this.surname = surname;   //class attribute
	}

	fullname()        //class method
	{
		return this.name+' '+this.surname;
		// console.log('herer');
	}

	setter(name,value='')
	{
		if (value == 'name')
		{
			this.name = name;
		}
		else if (value == 'surname')
		{
			this.surname = name;
		}
		return this.fullname();
	}

	static greeting(obj)     //static method 
	{
		return "Hello"+' '+obj.name;
	}
}


class address extends friends     //defining the child class
 {
  	constructor(name,surname,state)   //child class constructor
  	{
    	super(name,surname);      //calling the super method to pass agrument to parenet class
    	this.state = state;    //child class attribute
  	}
  
  show()                          //child class method
  	{
    	return this.fullname()+' lives in '+this.state;      //this.fullname() accessing the parent class method from the child class
  	}
}

// username = prompt('Enter your name: ');
// surname = prompt('Enter your surname: ');

let friend_1 = new friends('deepak','Ver');                 // creating parent class object
let friend_2 = new address('Prachi','Modiya','Gujarat');      // creating child class object
console.log(friend_1.fullname());            // accessing the parent class method
console.log(friend_2.show());         //accessing the child class method
console.log(friend_1.setter('Pucchu','name'));
console.log(friends.greeting(friend_1));



// javqascript object

let laptop =
{
	cpu:'i3',
	ram:'8Gb',
	gpu:'2Gb',
	os:'windows',
	company:'dell',
	specification : function()
	{
		spec = this.company+' '+this.os+' '+this.cpu+' '+this.ram+' '+this.gpu;
		return spec;
	},
	updateCompany : function(com)
	{
		laptop.company = com;
		return this.specification();
	}
}

console.log(laptop.specification());
delete laptop.os;
console.log(laptop.updateCompany('hp'));
console.log(laptop.os)
// for (let key in laptop){console.log(laptop[key]);}