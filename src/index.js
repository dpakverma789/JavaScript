import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';
import Garage from './Garage.js';
import App from './App.js';
import Goal from './soccer';

const msg = <span>Good evening deepak</span>

function helloword(){
    return(
      <h1>Hellow world</h1>
    )
}


// ReactDOM.render(<Car brand="nexon"/>,document.getElementById('root'))
// ReactDOM.render(<helloword/>,document.getElementById('root'))
// ReactDOM.render(<Garage helloword={ msg }/>,document.getElementById('root'))
// ReactDOM.render(<App/>,document.getElementById('root'))
ReactDOM.render(<Goal isGoal={ false }/>, document.getElementById('root'))