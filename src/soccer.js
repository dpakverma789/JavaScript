
function Goal(props){
    const isGoal = props.isGoal;
    if (isGoal){
        return(<h1>Goal!!</h1>);
    }
    return(<h1>Oh! We missed the goal</h1>);

}

export default Goal;