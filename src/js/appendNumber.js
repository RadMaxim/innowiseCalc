import { allState, updateStates } from "./states.js";

function appNumber(num) {
  if (num === "," && allState.currentOp.indexOf(",") > -1) return;

  if (allState.currentOp === "0" && num != ",") updateStates({ currentOp: "" });

  if (allState.currentOp === "0" && num == ",")
    updateStates({ currentOp: "0" });
  if ((allState.currentOp + num).length > 25) {
    return;
  }
  allState.currentOp += num;
  updateStates({ currentOp: allState.currentOp });
  console.log(sef);
}
export { appNumber };
