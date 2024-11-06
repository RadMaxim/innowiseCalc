window.addEventListener("load",()=>{
    let res = document.getElementById("result")
    let btns =  document.querySelectorAll(".btn");
    for (const btn of btns) {
        btn.addEventListener("click",(e)=>{
            let symb = e.currentTarget.getAttribute("aria-c")
            // console.log();
            res.innerText+=symb;
            check(symb)
        })
        
    }


})
function check(sym) {
    console.log("test");
    
    let test = document.getElementById("test")
    console.log(test);
    console.log(sym);
    
    switch (sym) {
        case '+':
            test.innerText="plus"
            break;
            case '-':
            test.innerText="minus"
            break;
            case '/':
              test.innerText="divided"
            break;
            case '%':
             test.innerText="percent"
            break;
            case '*':
             test.innerText="multiply"
            break;
            
        default:
             test.innerText=""
            break;
    }
}