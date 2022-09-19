
var result_screen = document.getElementById('result-value');

function one() {
	result_screen.innerText +=1;
}

function two() 
{
	result_screen.innerText += 2;
}
function three() 
{
	result_screen.innerText += 3;
}
function four() 
{
	result_screen.innerText += 4;
}
function five() 
{
	result_screen.innerText += 5;
} 
function six() 
{
	result_screen.innerText += 6;
}
function seven() 
{
	result_screen.innerText += 7;
}
function eight() 
{
	result_screen.innerText += 8;
}
function nine() 
{
	result_screen.innerText += 9;
}
function zero() 
{
	result_screen.innerText += 0;
}

function clear_display(){
	result_screen.innerText = '';
}

function calculate(){
	let result = eval(result_screen.innerText);
	clear_display();
	result_screen.innerText = result;
}

function add(){
	result_screen.innerText += '+';
}

function sub(){
	result_screen.innerText += '-';
}

function multi(){
	result_screen.innerText += '*';
}

function div(){
	result_screen.innerText += '/';
}

function power(){
	result_screen.innerText += "**";
}

function point(){
	result_screen.innerText += '.';
}

function percent(){
	result_screen.innerText = parseFloat(eval(result_screen.innerText) * 100).slice(0,3);
}