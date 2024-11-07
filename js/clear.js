import {updateStates } from "./states.js"


function clearOperations() {
    
    updateStates({
        currentOp:"0",
        operation:"",
        prevOperation:""
    })
}


export {clearOperations}