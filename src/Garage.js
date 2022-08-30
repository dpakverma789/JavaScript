
import Car from "./Car.js"

function Garage(props){
	const car_info = {name:'Nexon',company:'tata',color:'black'}
	const show = function(car_info, event){
		alert('you have purchased '+car_info.color+' '+car_info.name);
		console.log('this is '+event.type+' type event');
	}
	return (
		<>
			<h2>Garage says {props.helloword}</h2>
			<Car car={ car_info }/>
			<button onClick={ (event)=>show(car_info, event) }>Buy now</button>
		</>
	)
}

export default Garage;