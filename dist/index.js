(()=>{"use strict";var e,n={200:(e,n,r)=>{r(216);let t={currentOp:"0",operation:"",prevOperation:""};function o(e){t={...t,...e}}function a(){let e=0,n=parseFloat(t.prevOperation.replaceAll(",",".")),r=parseFloat(t.currentOp.replaceAll(",","."));if(!isNaN(n)&&!isNaN(r)){switch(t.operation){case"+":e=n+r;break;case"-":e=n-r;break;case"/":e=n/r;break;case"%":e=n%r;break;case"*":e=n*r;break;default:return}o({currentOp:e%1==0?e.toFixed(0):e.toFixed(5),operation:"",prevOperation:""})}}function i(){let e=document.getElementById("result"),n=document.getElementById("test");e.innerText=t.currentOp,n.innerText=t.prevOperation+t.operation}window.addEventListener("load",(()=>{let e=document.querySelectorAll("[aria-n]"),n=document.querySelectorAll("[aria-o]"),r=document.querySelector("[aria-equals]"),c=document.querySelector("[aria-ac]");document.querySelector("[aria-plusMinus]").addEventListener("click",(()=>{o({currentOp:String(-1*parseFloat(t.currentOp))}),i()})),c.addEventListener("click",(()=>{o({currentOp:"0",operation:"",prevOperation:""}),i()})),e.forEach((e=>{e.addEventListener("click",(e=>{var n;","===(n=e.currentTarget.innerText)&&t.currentOp.indexOf(",")>-1||("0"===t.currentOp&&","!=n&&o({currentOp:""}),"0"===t.currentOp&&","==n&&o({currentOp:"0"}),t.currentOp+=n,o({currentOp:t.currentOp})),i()}))})),n.forEach((e=>{e.addEventListener("click",(e=>{var n;n=e.currentTarget.innerText,""!==t.currentOp&&(""!==t.prevOperation&&a(),o({operation:n,prevOperation:t.currentOp,currentOp:""})),i()}))})),r.addEventListener("click",(()=>{a(),i()}))}))},523:(e,n,r)=>{r.r(n),r.d(n,{default:()=>c});var t=r(601),o=r.n(t),a=r(314),i=r.n(a)()(o());i.push([e.id,'* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n:root {\n  --color-back-calc: #1c1c1c;\n  --color-button-active: #dc9e00;\n  --color-button: #ffb800;\n  --color-number: #ffffff;\n  --color-darkGray: #6d6d6d;\n  --color-darkGrayActiveOrHover: #565656;\n  --color-lightGary: #aeaeae;\n  --color-lightGaryActiveOrHover: #858585;\n  --color-lightGaryModeL: #d9d9d9;\n  --color-darkGrayModeL: #d9d9d9;\n  --color-back-calcModeL: #4a4a4a;\n  --color-btn-close: red;\n  --color-btn-collapse: yellow;\n  --color-btn-any: green;\n}\n\np,h1,label{\n  font-family: \'Franklin Gothic Medium\', \'Arial Narrow\', Arial, sans-serif;\n}\np {\n  \n  font-size: 30px;\n  text-transform: uppercase;\n  pointer-events: none;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 7vh 80vh 7vh;\n  grid-template-columns: auto 95vw auto;\n  grid-template-areas: ". header ." ". main ." ". footer .";\n  row-gap: 10px;\n}\nheader,\nmain,\nfooter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\nheader {\n  grid-area: header;\n}\nmain {\n  grid-area: main;\n  display: grid;\n  grid-template-rows: 20px auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: "dark light" "calc calc";\n  gap: 20px;\n}\nlabel[for="light"],\nlabel[for="dark"] {\n  width: clamp(100px,10%,200px);\n  display: flex;\n  justify-self: center;\n  justify-content: center;\n  \n  -webkit-tap-highlight-color: transparent !important;\n}\n#test {\n  color: red;\n}\nlabel[for="dark"] {\n  grid-area: dark;\n  \n}\nlabel[for="light"] {\n  grid-area: light;\n}\n.main_container {\n  grid-area: calc;\n  display: flex;\n  justify-content: center;\n  height: 100%;\n}\nfooter {\n  grid-area: footer;\n}\n.calc {\n  width: clamp(280px,50%,320px);\n  \n  min-height: 400px;\n  height: 95%;\n  max-height: 563px;\n  background-color: var(--color-back-calc);\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: 5% 30% 65%;\n  grid-template-areas: "mode" "screen" "buttons";\n  border-radius: 10px;\n  overflow: hidden;\n  -webkit-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 11px 33px 12px rgba(34, 60, 80, 0.2);\n}\n.calc_screen_button {\n  grid-area: mode;\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n}\n.calc_screen_button > label[for="close"],\nlabel[for="collapse"],\nlabel[for="any"] {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  display: block;\n}\nlabel[for="close"] {\n  background-color: var(--color-btn-close);\n}\nlabel[for="collapse"] {\n  background-color: var(--color-btn-collapse);\n}\nlabel[for="any"] {\n  background-color: var(--color-btn-any);\n}\n.calc_screen {\n  grid-area: screen;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-end;\n  padding: 10px 20px;\n}\n.calc_buttons {\n  grid-area: buttons;\n}\n.calc_buttons {\n  display: grid;\n  grid-template-rows: repeat(5, 1fr);\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-areas:\n    "btn1 btn2 btn3 btn4"\n    "btn5 btn6 btn7 btn8"\n    "btn9 btn10 btn11 btn12"\n    "btn13 btn14 btn15 btn16"\n    "btn17 btn17 btn18 btn19";\n  gap: 2px;\n}\n.btn {\n  color: var(--color-number);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent !important;\n  outline: none;\n  user-select: none;\n}\n\n.orangeBtn {\n  background-color: var(--color-button);\n}\n.orangeBtn:active {\n  background-color: var(--color-button-active);\n}\n.darkGray {\n  background-color: var(--color-darkGray);\n}\n.lightGray {\n  background-color: var(--color-lightGary);\n}\n.darkGray:active {\n  background-color: var(--color-darkGrayActiveOrHover);\n}\n.lightGray:active {\n  background-color: var(--color-lightGaryActiveOrHover);\n}\n.btn1 {\n  grid-area: btn1;\n}\n.btn2 {\n  grid-area: btn2;\n}\n.btn3 {\n  grid-area: btn3;\n}\n.btn4 {\n  grid-area: btn4;\n}\n.btn5 {\n  grid-area: btn5;\n}\n.btn6 {\n  grid-area: btn6;\n}\n.btn7 {\n  grid-area: btn7;\n}\n.btn8 {\n  grid-area: btn8;\n}\n.btn9 {\n  grid-area: btn9;\n}\n.btn10 {\n  grid-area: btn10;\n}\n.btn11 {\n  grid-area: btn11;\n}\n.btn12 {\n  grid-area: btn12;\n}\n.btn13 {\n  grid-area: btn13;\n}\n.btn14 {\n  grid-area: btn14;\n}\n.btn15 {\n  grid-area: btn15;\n}\n.btn16 {\n  grid-area: btn16;\n}\n.btn17 {\n  grid-area: btn17;\n}\n.btn18 {\n  grid-area: btn18;\n}\n.btn19 {\n  grid-area: btn19;\n}\n.calc_screen_container {\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: repeat(2, 1fr);\n  grid-template-areas: "p1" "p2";\n}\n#test,\n#result {\n  width: 100%;\n  height: 100%;\n  text-align: end;\n}\n#test {\n  grid-area: p1;\n}\n#result {\n  grid-area: p2;\n}\n\n#result {\n  color: var(--color-number);\n  font-size: 48px;\n}\n.light,\n.lightB {\n  transition: 0.7s ease-in-out;\n}\ninput[type="radio"] {\n  display: none;\n}\ninput[id="dark"] ~ label[for="dark"],\ninput[id="light"] ~ label[for="light"] {\n  background-color: var(--color-button);\n  padding: 10px;\n  border-radius: 5px;\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);\n  transition: 0.7s ease-in-out;\n}\ninput[id="dark"]:checked ~ label[for="dark"],\ninput[id="light"]:checked ~ label[for="light"] {\n  background-color: var(--color-button-active);\n  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;\n}\n\ninput[id="light"]:checked ~ .main_container .light {\n  background-color: var(--color-back-calcModeL);\n}\ninput[id="light"]:checked ~ .main_container .lightB {\n  background: var(--color-darkGrayModeL);\n  color: var(--color-back-calc);\n}\n\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n  background-color: var(--color-darkGrayModeL);\n  transition: 0.7s ease-in-out;\n}\ninput[id="dark"]:checked ~ .background {\n  background-color: var(--color-button-active);\n}\nfooter>p{\n  font-size: 10px;\n  padding: 0;\n}',""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var r="",t=void 0!==n[5];return n[4]&&(r+="@supports (".concat(n[4],") {")),n[2]&&(r+="@media ".concat(n[2]," {")),t&&(r+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),r+=e(n),t&&(r+="}"),n[2]&&(r+="}"),n[4]&&(r+="}"),r})).join("")},n.i=function(e,r,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);t&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},216:(e,n,r)=>{var t=r(72),o=r.n(t),a=r(825),i=r.n(a),c=r(659),d=r.n(c),l=r(56),u=r.n(l),s=r(540),p=r.n(s),f=r(113),h=r.n(f),b=r(523),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=d().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p();var v=o()(b.default,g);if(!b.default.locals||e.hot.invalidate){var m=!b.default.locals,y=m?b:b.default.locals;e.hot.accept(523,(n=>{b=r(523),function(e,n,r){if(!e&&n||e&&!n)return!1;var t;for(t in e)if((!r||"default"!==t)&&e[t]!==n[t])return!1;for(t in n)if(!(r&&"default"===t||e[t]))return!1;return!0}(y,m?b:b.default.locals,m)?(y=m?b:b.default.locals,v(b.default)):e.hot.invalidate()}))}e.hot.dispose((function(){v()})),b.default&&b.default.locals&&b.default.locals},72:e=>{var n=[];function r(e){for(var r=-1,t=0;t<n.length;t++)if(n[t].identifier===e){r=t;break}return r}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var d=e[c],l=t.base?d[0]+t.base:d[0],u=a[l]||0,s="".concat(l," ").concat(u);a[l]=u+1;var p=r(s),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var h=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:s,updater:h,references:1})}i.push(s)}return i}function o(e,n){var r=n.domAPI(n);return r.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;r.update(e=n)}else r.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);n[c].references--}for(var d=t(e,o),l=0;l<a.length;l++){var u=r(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=d}}},659:e=>{var n={};e.exports=function(e,r){var t=function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,r)=>{e.exports=function(e){var n=r.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(r){!function(e,n,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,e,n.options)}(n,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},r={};function t(e){var o=r[e];if(void 0!==o){if(void 0!==o.error)throw o.error;return o.exports}var a=r[e]={id:e,exports:{}};try{var i={id:e,module:a,factory:n[e],require:t};t.i.forEach((function(e){e(i)})),a=i.module,i.factory.call(a.exports,a,a.exports,i.require)}catch(e){throw a.error=e,e}return a.exports}t.m=n,t.c=r,t.i=[],t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.hu=e=>e+"."+t.h()+".hot-update.js",t.hmrF=()=>"filename."+t.h()+".hot-update.json",t.h=()=>"18e3eff42218fbde888a",t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),e={},t.l=(n,r,o,a)=>{if(e[n])e[n].push(r);else{var i,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,t.nc&&i.setAttribute("nonce",t.nc),i.src=n),e[n]=[r];var s=(r,t)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,n,r,o={},a=t.c,i=[],c=[],d="idle",l=0,u=[];function s(e){d=e;for(var n=[],r=0;r<c.length;r++)n[r]=c[r].call(null,e);return Promise.all(n).then((function(){}))}function p(){0==--l&&s("ready").then((function(){if(0===l){var e=u;u=[];for(var n=0;n<e.length;n++)e[n]()}}))}function f(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return s("check").then(t.hmrM).then((function(r){return r?s("prepare").then((function(){var o=[];return n=[],Promise.all(Object.keys(t.hmrC).reduce((function(e,a){return t.hmrC[a](r.c,r.r,r.m,e,n,o),e}),[])).then((function(){return n=function(){return e?b(e):s("ready").then((function(){return o}))},0===l?n():new Promise((function(e){u.push((function(){e(n())}))}));var n}))})):s(g()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+d+")")})):b(e)}function b(e){e=e||{},g();var t=n.map((function(n){return n(e)}));n=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var a=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,c=s("apply"),d=function(e){i||(i=e)},l=[];return t.forEach((function(e){if(e.apply){var n=e.apply(d);if(n)for(var r=0;r<n.length;r++)l.push(n[r])}})),Promise.all([a,c]).then((function(){return i?s("fail").then((function(){throw i})):r?b(e).then((function(e){return l.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):s("idle").then((function(){return l}))}))}function g(){if(r)return n||(n=[]),Object.keys(t.hmrI).forEach((function(e){r.forEach((function(r){t.hmrI[e](r,n)}))})),r=void 0,!0}t.hmrD=o,t.i.push((function(u){var b,g,v,m,y=u.module,x=function(n,r){var t=a[r];if(!t)return n;var o=function(o){if(t.hot.active){if(a[o]){var c=a[o].parents;-1===c.indexOf(r)&&c.push(r)}else i=[r],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+r),i=[];return n(o)},c=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&"e"!==u&&Object.defineProperty(o,u,c(u));return o.e=function(e,r){return function(e){switch(d){case"ready":s("prepare");case"prepare":return l++,e.then(p,p),e;default:return e}}(n.e(e,r))},o}(u.require,u.id);y.hot=(b=u.id,g=y,m={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:v=e!==b,_requireSelf:function(){i=g.parents.slice(),e=v?void 0:b,t(b)},active:!0,accept:function(e,n,r){if(void 0===e)m._selfAccepted=!0;else if("function"==typeof e)m._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)m._acceptedDependencies[e[t]]=n||function(){},m._acceptedErrorHandlers[e[t]]=r;else m._acceptedDependencies[e]=n||function(){},m._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)m._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)m._declinedDependencies[e[n]]=!0;else m._declinedDependencies[e]=!0},dispose:function(e){m._disposeHandlers.push(e)},addDisposeHandler:function(e){m._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=m._disposeHandlers.indexOf(e);n>=0&&m._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":n=[],Object.keys(t.hmrI).forEach((function(e){t.hmrI[e](b,n)})),s("ready");break;case"ready":Object.keys(t.hmrI).forEach((function(e){t.hmrI[e](b,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(b)}},check:f,apply:h,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var n=c.indexOf(e);n>=0&&c.splice(n,1)},data:o[b]},e=void 0,m),y.parents=i,y.children=[],i=[],u.require=x})),t.hmrC={},t.hmrI={}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&"SCRIPT"===n.currentScript.tagName.toUpperCase()&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e,n,r,o,a,i=t.hmrS_jsonp=t.hmrS_jsonp||{616:0},c={};function d(n,r){return e=r,new Promise(((e,r)=>{c[n]=e;var o=t.p+t.hu(n),a=new Error;t.l(o,(e=>{if(c[n]){c[n]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+n+" failed.\n("+t+": "+o+")",a.name="ChunkLoadError",a.type=t,a.request=o,r(a)}}))}))}function l(e){function c(e){for(var n=[e],r={},o=n.map((function(e){return{chain:[e],id:e}}));o.length>0;){var a=o.pop(),i=a.id,c=a.chain,l=t.c[i];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<l.parents.length;u++){var s=l.parents[u],p=t.c[s];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(p.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),d(r[s],[i])):(delete r[s],n.push(s),o.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function d(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}t.f&&delete t.f.jsonpHmr,n=void 0;var l={},u=[],s={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(t.o(r,f)){var h=r[f],b=h?c(f):{type:"disposed",moduleId:f},g=!1,v=!1,m=!1,y="";switch(b.chain&&(y="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":e.onDeclined&&e.onDeclined(b),e.ignoreDeclined||(g=new Error("Aborted because of self decline: "+b.moduleId+y));break;case"declined":e.onDeclined&&e.onDeclined(b),e.ignoreDeclined||(g=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+y));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(b),e.ignoreUnaccepted||(g=new Error("Aborted because "+f+" is not accepted"+y));break;case"accepted":e.onAccepted&&e.onAccepted(b),v=!0;break;case"disposed":e.onDisposed&&e.onDisposed(b),m=!0;break;default:throw new Error("Unexception type "+b.type)}if(g)return{error:g};if(v)for(f in s[f]=h,d(u,b.outdatedModules),b.outdatedDependencies)t.o(b.outdatedDependencies,f)&&(l[f]||(l[f]=[]),d(l[f],b.outdatedDependencies[f]));m&&(d(u,[b.moduleId]),s[f]=p)}r=void 0;for(var x,k=[],w=0;w<u.length;w++){var E=u[w],_=t.c[E];_&&(_.hot._selfAccepted||_.hot._main)&&s[E]!==p&&!_.hot._selfInvalidated&&k.push({module:E,require:_.hot._requireSelf,errorHandler:_.hot._selfAccepted})}return{dispose:function(){var e;o.forEach((function(e){delete i[e]})),o=void 0;for(var n,r=u.slice();r.length>0;){var a=r.pop(),c=t.c[a];if(c){var d={},s=c.hot._disposeHandlers;for(w=0;w<s.length;w++)s[w].call(null,d);for(t.hmrD[a]=d,c.hot.active=!1,delete t.c[a],delete l[a],w=0;w<c.children.length;w++){var p=t.c[c.children[w]];p&&(e=p.parents.indexOf(a))>=0&&p.parents.splice(e,1)}}}for(var f in l)if(t.o(l,f)&&(c=t.c[f]))for(x=l[f],w=0;w<x.length;w++)n=x[w],(e=c.children.indexOf(n))>=0&&c.children.splice(e,1)},apply:function(n){for(var r in s)t.o(s,r)&&(t.m[r]=s[r]);for(var o=0;o<a.length;o++)a[o](t);for(var i in l)if(t.o(l,i)){var c=t.c[i];if(c){x=l[i];for(var d=[],p=[],f=[],h=0;h<x.length;h++){var b=x[h],g=c.hot._acceptedDependencies[b],v=c.hot._acceptedErrorHandlers[b];if(g){if(-1!==d.indexOf(g))continue;d.push(g),p.push(v),f.push(b)}}for(var m=0;m<d.length;m++)try{d[m].call(null,x)}catch(r){if("function"==typeof p[m])try{p[m](r,{moduleId:i,dependencyId:f[m]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[m],error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[m],error:r}),e.ignoreErrored||n(r)}}}for(var y=0;y<k.length;y++){var w=k[y],E=w.module;try{w.require(E)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:E,module:t.c[E]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:E,error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:E,error:r}),e.ignoreErrored||n(r)}}return u}}}self.webpackHotUpdate=(n,o,i)=>{for(var d in o)t.o(o,d)&&(r[d]=o[d],e&&e.push(d));i&&a.push(i),c[n]&&(c[n](),c[n]=void 0)},t.hmrI.jsonp=function(e,n){r||(r={},a=[],o=[],n.push(l)),t.o(r,e)||(r[e]=t.m[e])},t.hmrC.jsonp=function(e,c,u,s,p,f){p.push(l),n={},o=c,r=u.reduce((function(e,n){return e[n]=!1,e}),{}),a=[],e.forEach((function(e){t.o(i,e)&&void 0!==i[e]?(s.push(d(e,f)),n[e]=!0):n[e]=!1})),t.f&&(t.f.jsonpHmr=function(e,r){n&&t.o(n,e)&&!n[e]&&(r.push(d(e)),n[e]=!0)})},t.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(t.p+t.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),t.nc=void 0,t(200)})();