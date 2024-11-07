import { allState, updateStates } from "./states.js";

function calculate() {
    let reasult =0;
    let prev = parseFloat(allState.prevOperation.replaceAll(",","."));
    let current = parseFloat(allState.currentOp.replaceAll(",","."));
    if (isNaN(prev) || isNaN(current)) {
        return
    } 
    switch (allState.operation) {
        case '+':
            reasult = prev+current;
            break;
            case '-':
                reasult = prev-current;
            break;
            case '/':
                reasult = prev/current;
            break;
            case '%':
                reasult = prev%current;
            break;
            case '*':
                reasult = prev*current;
            break;
            
        default:
             return; 

    }
    updateStates({
        currentOp:reasult,
        operation:"",
        prevOperation:""
    })

}
export {calculate}