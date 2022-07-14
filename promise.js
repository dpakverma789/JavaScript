
// state of promise  resolved/success, reject/failed, pending
// function inside then is resolve function and function inside catch is reject function
"use strict";


function success()
{
	console.log('function execute after resolve');
}

function failed()
{
	console.log('function execute after reject');
}


function func()
{
	return new Promise(function(resolve,reject){
		setTimeout(()=>{
			const status=200;
			if (status===200)
			{
				let code = 'OK '+ status;
				resolve(code);
			}
			else{
				let code = 'Not Found '+status;
				reject(code);
			}
		},2000);
	})
}

func().then(function(arg){
	console.log(arg);
	success();
}).catch(function(arg){
	console.log(arg);
	failed();
})
// =======================================================


async function hello(){  //using async keyword return promise
	return 'hello';
}

hello().then(function(arg){
	console.log(arg);
	success();
})