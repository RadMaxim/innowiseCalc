(()=>{"use strict";var n={523:(n,e,r)=>{r.d(e,{A:()=>c});var t=r(601),a=r.n(t),o=r(314),i=r.n(o)()(a());i.push([n.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  --color-back-calc: #1c1c1c;\n  --color-button-active: #dc9e00;\n  --color-button: #ffb800;\n  --color-number: #ffffff;\n  --color-darkGray: #6d6d6d;\n  --color-darkGrayActiveOrHover: #565656;\n  --color-lightGary: #aeaeae;\n  --color-lightGaryActiveOrHover: #858585;\n  --color-lightGaryModeL: #d9d9d9;\n  --color-darkGrayModeL: #d9d9d9;\n  --color-back-calcModeL: #4a4a4a;\n  --color-btn-close: red;\n  --color-btn-collapse: yellow;\n  --color-btn-any: green;\n}\n\np,\nh1,\nlabel {\n  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;\n}\np {\n  font-size: 30px;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 7vh 80vh 7vh;\n  grid-template-columns: auto 95vw auto;\n  grid-template-areas: ". header ." ". main ." ". footer .";\n  row-gap: 10px;\n}\nheader,\nmain,\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nheader {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: "dark light" "calc calc";\n  gap: 20px;\n}\nlabel[for="light"],\nlabel[for="dark"] {\n  width: clamp(100px, 10%, 200px);\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n\n  -webkit-tap-highlight-color: transparent !important;\n}\n#test {\n  color: yellow;\n}\nlabel[for="dark"] {\n  grid-area: dark;\n}\nlabel[for="light"] {\n  grid-area: light;\n}\n.main_container {\n  grid-area: calc;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\nfooter {\n  grid-area: footer;\n}\n.calc {\n  width: clamp(280px, 50%, 320px);\n\n  min-height: 400px;\n  height: 95%;\n  max-height: 563px;\n  background-color: var(--color-back-calc);\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 5% 30% 65%;\n  grid-template-areas: "mode" "screen" "buttons";\n  border-radius: 10px;\n  overflow: hidden;\n  -webkit-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n}\n.calc_screen_button {\n  grid-area: mode;\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n}\n.calc_screen_button > label[for="close"],\nlabel[for="collapse"],\nlabel[for="any"] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: block;\n}\nlabel[for="close"] {\n  background-color: var(--color-btn-close);\n}\nlabel[for="collapse"] {\n  background-color: var(--color-btn-collapse);\n}\nlabel[for="any"] {\n  background-color: var(--color-btn-any);\n}\n.calc_screen {\n  grid-area: screen;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding: 10px 20px;\n}\n.calc_buttons {\n  grid-area: buttons;\n}\n.calc_buttons {\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-areas:\n    "btn1 btn2 btn3 btn4"\n    "btn5 btn6 btn7 btn8"\n    "btn9 btn10 btn11 btn12"\n    "btn13 btn14 btn15 btn16"\n    "btn17 btn17 btn18 btn19";\n  gap: 2px;\n}\n.btn {\n  color: var(--color-number);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent !important;\n  outline: none;\n  user-select: none;\n}\n\n.orangeBtn {\n  background-color: var(--color-button);\n}\n.orangeBtn:active {\n  background-color: var(--color-button-active);\n}\n.darkGray {\n  background-color: var(--color-darkGray);\n}\n.lightGray {\n  background-color: var(--color-lightGary);\n}\n.darkGray:active {\n  background-color: var(--color-darkGrayActiveOrHover);\n}\n.lightGray:active {\n  background-color: var(--color-lightGaryActiveOrHover);\n}\n.btn1 {\n  grid-area: btn1;\n}\n.btn2 {\n  grid-area: btn2;\n}\n.btn3 {\n  grid-area: btn3;\n}\n.btn4 {\n  grid-area: btn4;\n}\n.btn5 {\n  grid-area: btn5;\n}\n.btn6 {\n  grid-area: btn6;\n}\n.btn7 {\n  grid-area: btn7;\n}\n.btn8 {\n  grid-area: btn8;\n}\n.btn9 {\n  grid-area: btn9;\n}\n.btn10 {\n  grid-area: btn10;\n}\n.btn11 {\n  grid-area: btn11;\n}\n.btn12 {\n  grid-area: btn12;\n}\n.btn13 {\n  grid-area: btn13;\n}\n.btn14 {\n  grid-area: btn14;\n}\n.btn15 {\n  grid-area: btn15;\n}\n.btn16 {\n  grid-area: btn16;\n}\n.btn17 {\n  grid-area: btn17;\n}\n.btn18 {\n  grid-area: btn18;\n}\n.btn19 {\n  grid-area: btn19;\n}\n.calc_screen_container {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-areas: "p1" "p2";\n}\n#test,\n#result {\n  width: 100%;\n  height: 100%;\n  text-align: end;\n}\n#test {\n  grid-area: p1;\n}\n#result {\n  grid-area: p2;\n}\n\n#result {\n  color: var(--color-number);\n  font-size: 48px;\n}\n.light,\n.lightB {\n  transition: 0.7s ease-in-out;\n}\ninput[type="radio"] {\n  display: none;\n}\ninput[id="dark"] ~ label[for="dark"],\ninput[id="light"] ~ label[for="light"] {\n  background-color: var(--color-button);\n  padding: 10px;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  transition: 0.7s ease-in-out;\n}\ninput[id="dark"]:checked ~ label[for="dark"],\ninput[id="light"]:checked ~ label[for="light"] {\n  background-color: var(--color-button-active);\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n}\n\ninput[id="light"]:checked ~ .main_container .light {\n  background-color: var(--color-back-calcModeL);\n}\ninput[id="light"]:checked ~ .main_container .lightB {\n  background: var(--color-darkGrayModeL);\n  color: var(--color-back-calc);\n}\n\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  background-color: var(--color-darkGrayModeL);\n  transition: 0.7s ease-in-out;\n}\ninput[id="dark"]:checked ~ .background {\n  background-color: var(--color-button-active);\n}\nfooter > p {\n  font-size: 10px;\n  padding: 0;\n}\n#loading {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.61);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color-number);\n  z-index: 1;\n}\n#loading p {\n  user-select: none;\n}\n',""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);t&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),r&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=r):p[2]=r),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},i=[],c=0;c<n.length;c++){var l=n[c],d=t.base?l[0]+t.base:l[0],p=o[d]||0,s="".concat(d," ").concat(p);o[d]=p+1;var u=r(s),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(b);else{var g=a(b,t);t.byIndex=c,e.splice(c,0,{identifier:s,updater:g,references:1})}i.push(s)}return i}function a(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,a){var o=t(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=r(o[i]);e[c].references--}for(var l=t(n,a),d=0;d<o.length;d++){var p=r(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=l}}},659:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var a=void 0!==r.layer;a&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,a&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var a=e[t];if(void 0!==a)return a.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0;var t=r(72),a=r.n(t),o=r(825),i=r.n(o),c=r(659),l=r.n(c),d=r(56),p=r.n(d),s=r(540),u=r.n(s),b=r(113),g=r.n(b),f=r(523),h={};h.styleTagTransform=g(),h.setAttributes=p(),h.insert=l().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=u(),a()(f.A,h),f.A&&f.A.locals&&f.A.locals;let v={currentOp:"0",operation:"",prevOperation:""};function x(n){v={...v,...n}}function m(){let n=0,e=parseFloat(v.prevOperation.replaceAll(",",".")),r=parseFloat(v.currentOp.replaceAll(",","."));if(!isNaN(e)&&!isNaN(r)){switch(v.operation){case"+":n=e+r;break;case"-":n=e-r;break;case"/":n=e/r;break;case"%":n=e/100*r;break;case"*":n=e*r;break;default:return}x({currentOp:n%1==0?n.toFixed(0):n.toFixed(5),operation:"",prevOperation:""})}}function y(){let n=document.getElementById("result"),e=document.getElementById("test"),r=v.currentOp;v.prevOperation.length>20&&(e.style.fontSize="16px"),r.length>15?n.style.fontSize="16px":r.length>8?n.style.fontSize="26px":n.style.fontSize="48px",n.innerText=v.currentOp,e.innerText=v.prevOperation+v.operation}window.addEventListener("load",(()=>{document.getElementById("loading").style.display="none";let n=document.querySelectorAll("[aria-n]"),e=document.querySelectorAll("[aria-o]"),r=document.querySelector("[aria-equals]"),t=document.querySelector("[aria-ac]");document.querySelector("[aria-plusMinus]").addEventListener("click",(()=>{x({currentOp:String(-1*parseFloat(v.currentOp))}),y()})),t.addEventListener("click",(()=>{x({currentOp:"0",operation:"",prevOperation:""}),y()})),n.forEach((n=>{n.addEventListener("click",(n=>{var e;","===(e=n.currentTarget.innerText)&&v.currentOp.indexOf(",")>-1||("0"===v.currentOp&&","!=e&&x({currentOp:""}),"0"===v.currentOp&&","==e&&x({currentOp:"0"}),(v.currentOp+e).length>25||(v.currentOp+=e,x({currentOp:v.currentOp}))),y()}))})),e.forEach((n=>{n.addEventListener("click",(n=>{var e;e=n.currentTarget.innerText,""!==v.currentOp&&(""!==v.prevOperation&&m(),x({operation:e,prevOperation:v.currentOp,currentOp:""})),y()}))})),r.addEventListener("click",(()=>{m(),y()}))}))})();