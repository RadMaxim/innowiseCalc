import "./index.css";
import { appNumber } from "./js/appendNumber.js";
import { calculate } from "./js/calculate.js";
import { checkOperation } from "./js/checkOperation.js";
import { clearOperations } from "./js/clear.js";
import { allState, updateStates } from "./js/states.js";
import { updateScreen } from "./js/updateScreen.js";
window.addEventListener("load", () => {
  let load = document.getElementById("loading");
  load.style.display = "none";

  let btns = document.querySelectorAll("[aria-n]");
  let operations = document.querySelectorAll("[aria-o]");
  let equalsBtn = document.querySelector("[aria-equals]");
  let clearOperation = document.querySelector("[aria-ac]");
  let plusMinus = document.querySelector("[aria-plusMinus]");
  plusMinus.addEventListener("click", () => {
    updateStates({ currentOp: String(parseFloat(allState.currentOp) * -1) });
    updateScreen();
  });
  clearOperation.addEventListener("click", () => {
    clearOperations();
    updateScreen();
  });

  btns.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let num = e.currentTarget.innerText;
      appNumber(num);
      updateScreen();
    });
  });
  operations.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let operation = e.currentTarget.innerText;

      checkOperation(operation);
      updateScreen();
    });
  });
  equalsBtn.addEventListener("click", () => {
    calculate();
    updateScreen();
  });
});
