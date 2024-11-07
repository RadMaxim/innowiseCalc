let allState = {
    currentOp:"0",
    operation:"",
    prevOperation:""
    
}
function updateStates(newStates) {
    console.log(newStates);
    
    allState = {...allState,...newStates}
    console.log(allState);
    
}
export {updateStates, allState}