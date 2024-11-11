import { updateStates } from "./states.js";

function clearOperations() {
  console.log("e");
  console.log("e");
  updateStates({
    currentOp: "0",
    operation: "",
    prevOperation: "",
  });
}

export { clearOperations };
