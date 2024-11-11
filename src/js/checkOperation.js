import { calculate } from "./calculate.js";
import { allState, updateStates } from "./states.js";

function checkOperation(operation) {
  if (allState.currentOp === "") {
    return;
  }
  if (allState.prevOperation !== '') {
    calculate();
    dd
  }
  updateStates({
    operation: operation,
    prevOperation: allState.currentOp,
    currentOp: "",
  });
}
export { checkOperation };
