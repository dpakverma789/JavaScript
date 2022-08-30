
function Goal(props){
    const isGoal = props.isGoal;
    const miss = {
        color: "red"
    }
    if (isGoal){
        return(<h1 style={{color:"green"}}>Goal!!</h1>);
    }
    return(<h1 style={miss}>Oh! We missed the goal</h1>);

}

export default Goal;