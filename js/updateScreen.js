import { allState } from "./states.js";

function updateScreen() {
    let res = document.getElementById("result");
    let test = document.getElementById("test")
    res.innerText = allState.currentOp
    test.innerText = allState.prevOperation+allState.operation
   
}
export {updateScreen}