import { calculate } from "./calculate.js";
import { allState, updateStates } from "./states.js";

function checkOperation(operation) {
  console.log(operation);
  console.log('wd');
  
  
  if (allState.currentOp === "") {
    return;
  }
  if (allState.prevOperation !== "") {
    calculate();
    
  }
  updateStates({
    operation: operation,
    prevOperation: allState.currentOp,
    currentOp: "",
  });
}
export { checkOperation };
