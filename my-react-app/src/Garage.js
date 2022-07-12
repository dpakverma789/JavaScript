
import Car from "./Car.js"

function Garage(props){
	return (
		<>
			<h2>Garage says {props.helloword}</h2>
			<Car brand="Tata"/>
		</>
	)
}

export default Garage;