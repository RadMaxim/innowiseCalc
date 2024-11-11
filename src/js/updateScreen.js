import { allState } from "./states.js";

function updateScreen() {
  let res = document.getElementById("result");
  let test = document.getElementById("test");
  let currentText = allState.currentOp;
  let prevText = allState.prevOperation;
  if (prevText.length > 20) {
    test.style.fontSize = "16px";
  }
  if (currentText.length > 15) {
    res.style.fontSize = "16px";
  } else if (currentText.length > 8) {
    res.style.fontSize = "26px";
  } else {
    console.log(currentText);
    res.style.fontSize = "48px";
  }
  res.innerText = allState.currentOp;
  test.innerText = allState.prevOperation + allState.operation;
}
export { updateScreen };
