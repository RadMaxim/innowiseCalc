
const allState = {
    currentOp:"",
    operation:"",
    prevOperation:""
    
}
window.addEventListener("load",()=>{
    let btns =  document.querySelectorAll("[aria-n]");
    let operations = document.querySelectorAll("[aria-o]")
    let equalsBtn = document.querySelector("[aria-equals]")
    console.log(equalsBtn);
    
    btns.forEach((elem)=>{
        
        elem.addEventListener("click",(e)=>{
            let num = e.currentTarget.innerText
            
            appNumber(num)
            updateScreen()
        })
    })
    operations.forEach((elem)=>{
        
        elem.addEventListener("click",(e)=>{
            let operation = e.currentTarget.innerText
            
            checkOperation(operation)
            updateScreen()
        })
    })
    equalsBtn.addEventListener("click",()=>{
    console.log("=");
    
        calculate();
        updateScreen();
    })
    
  


})

function appNumber(num) {
    let res = document.getElementById("result");
    let val =String(res.innerText);
    
    if (num===val)allState.currentOp="0"
    
    if (num==="," && allState.currentOp.indexOf(',')>-1) return
    
    if (allState.currentOp==="0" && num!=",") allState.currentOp="";
        

    if (allState.currentOp==="0" && num==",")allState.currentOp="0";
        
    
   allState.currentOp+=num 
}
function updateScreen() {
    let res = document.getElementById("result");
    let test = document.getElementById("test")
    res.innerText = allState.currentOp
    test.innerText = allState.prevOperation+allState.operation
   
}
function checkOperation(operation) {
    if (allState.currentOp==="") {
        return
    }
    if (allState.prevOperation!=="") {
        calculate()
    }
    allState.operation = operation;
    allState.prevOperation = allState.currentOp;
    allState.currentOp = ""; 
    
}
function calculate() {
    let reasult =0;
    let prev = parseFloat(allState.prevOperation);
    let current = parseFloat(allState.currentOp);
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
                reasult = prev-current;
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
    allState.currentOp = reasult;
    allState.operation="";
    allState.prevOperation="";

}