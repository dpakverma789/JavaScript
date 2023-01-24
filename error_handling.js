
try{
	let status = 200;
	if (status == 200){
		console.log('hello deepak');
	}
	else{
		throw "status code is not 200";
	}
}

catch(err){
	console.log(err);
}

finally{
	console.log('Exceptional Handling complete!')
}