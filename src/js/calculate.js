import { allState, updateStates } from "./states.js";

function calculate() {
  let reasult = 0;
  let prev = parseFloat(allState.prevOperation.replaceAll(",", "."));
  let current = parseFloat(allState.currentOp.replaceAll(",", "."));
  if (isNaN(prev) || isNaN(current)) {
    return;
  }
  switch (allState.operation) {
    case "+":
      reasult = prev + current;
      break;
    case "-":
      reasult = prev - current;
      break;
    case "/":
      reasult = prev / current;
      break;
    case "%":
      reasult = (prev / 100) * current;
      break;
    case "*":
      reasult = prev * current;
      break;

    default:
      return;
  }
  console.log("we");
  console.log("we");
  console.log("we");
  updateStates({
    currentOp: reasult % 1 == 0 ? reasult.toFixed(0) : reasult.toFixed(5),
    operation: "",
    prevOperation: "",
  });
}
export { calculate };
