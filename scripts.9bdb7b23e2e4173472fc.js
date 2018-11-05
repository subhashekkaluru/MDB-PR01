!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t,n){return(c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&s(i,n.prototype),i}).apply(null,arguments)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e,t,n){return(l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var d="SweetAlert2:",p=function(e){return Array.prototype.slice.call(e)},f=function(e){console.warn("".concat(d," ").concat(e))},m=function(e){console.error("".concat(d," ").concat(e))},h=[],g=function(e){-1===h.indexOf(e)&&(h.push(e),f(e))},b=function(e){return"function"==typeof e?e():e},y=function(t){return t&&"object"===e(t)&&"function"==typeof t.then},v=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),w=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},C=w(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen"]),k=w(["success","warning","info","question","error"]),x={previousBodyPadding:null},A=function(e,t){return e.classList.contains(t)},B=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},S=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},P=function(e,t){S(e,t,!0)},O=function(e,t){S(e,t,!1)},E=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(A(e.childNodes[n],t))return e.childNodes[n]},L=function(e){e.style.opacity="",e.style.display=e.id===C.content?"block":"flex"},T=function(e){e.style.opacity="",e.style.display="none"},j=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},M=function(){return document.body.querySelector("."+C.container)},V=function(e){var t=M();return t?t.querySelector("."+e):null},q=function(){return V(C.popup)},R=function(){var e=q();return p(e.querySelectorAll("."+C.icon))},H=function(){return V(C.title)},I=function(){return V(C.content)},_=function(){return V(C.image)},D=function(){return V(C.progresssteps)},N=function(){return V(C["validation-message"])},W=function(){return V(C.confirm)},z=function(){return V(C.cancel)},U=function(){return V(C.actions)},K=function(){return V(C.footer)},F=function(){return V(C.close)},Z=function(){var e=p(q().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=p(q().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return j(e)})},Q=function(){return!Y()&&!document.body.classList.contains(C["no-backdrop"])},Y=function(){return document.body.classList.contains(C["toast-shown"])},$=function(){return"undefined"==typeof window||"undefined"==typeof document},J='\n <div aria-labelledby="'.concat(C.title,'" aria-describedby="').concat(C.content,'" class="').concat(C.popup,'" tabindex="-1">\n   <div class="').concat(C.header,'">\n     <ul class="').concat(C.progresssteps,'"></ul>\n     <div class="').concat(C.icon," ").concat(k.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(C.icon," ").concat(k.question,'">\n       <span class="').concat(C["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(C.icon," ").concat(k.warning,'">\n       <span class="').concat(C["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(C.icon," ").concat(k.info,'">\n       <span class="').concat(C["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(C.icon," ").concat(k.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(C.image,'" />\n     <h2 class="').concat(C.title,'" id="').concat(C.title,'"></h2>\n     <button type="button" class="').concat(C.close,'">\xd7</button>\n   </div>\n   <div class="').concat(C.content,'">\n     <div id="').concat(C.content,'"></div>\n     <input class="').concat(C.input,'" />\n     <input type="file" class="').concat(C.file,'" />\n     <div class="').concat(C.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(C.select,'"></select>\n     <div class="').concat(C.radio,'"></div>\n     <label for="').concat(C.checkbox,'" class="').concat(C.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(C.label,'"></span>\n     </label>\n     <textarea class="').concat(C.textarea,'"></textarea>\n     <div class="').concat(C["validation-message"],'" id="').concat(C["validation-message"],'"></div>\n   </div>\n   <div class="').concat(C.actions,'">\n     <button type="button" class="').concat(C.confirm,'">OK</button>\n     <button type="button" class="').concat(C.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(C.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=M();if(t&&(t.parentNode.removeChild(t),O([document.documentElement,document.body],[C["no-backdrop"],C["toast-shown"],C["has-column"]])),!$()){var n=document.createElement("div");n.className=C.container,n.innerHTML=J,("string"==typeof e.target?document.querySelector(e.target):e.target).appendChild(n);var o,i=q(),r=I(),a=E(r,C.input),s=E(r,C.file),c=r.querySelector(".".concat(C.range," input")),u=r.querySelector(".".concat(C.range," output")),l=E(r,C.select),d=r.querySelector(".".concat(C.checkbox," input")),p=E(r,C.textarea);i.setAttribute("role",e.toast?"alert":"dialog"),i.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||i.setAttribute("aria-modal","true");var f=function(e){Te.isVisible()&&o!==e.target.value&&Te.resetValidationMessage(),o=e.target.value};return a.oninput=f,s.onchange=f,l.onchange=f,d.onchange=f,p.oninput=f,c.oninput=function(e){f(e),u.value=c.value},c.onchange=function(e){f(e),c.nextSibling.value=c.value},i}m("SweetAlert2 requires document to initialize")},G=function(t,n){if(!t)return T(n);if("object"===e(t))if(n.innerHTML="",0 in t)for(var o=0;o in t;o++)n.appendChild(t[o].cloneNode(!0));else n.appendChild(t.cloneNode(!0));else t&&(n.innerHTML=t);L(n)},ee=function(){if($())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=D(),n=parseInt(null===e.currentProgressStep?Te.getQueueStep():e.currentProgressStep,10);e.progressSteps&&e.progressSteps.length?(L(t),t.innerHTML="",n>=e.progressSteps.length&&f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),e.progressSteps.forEach(function(o,i){var r=document.createElement("li");if(P(r,C.progresscircle),r.innerHTML=o,i===n&&P(r,C.activeprogressstep),t.appendChild(r),i!==e.progressSteps.length-1){var a=document.createElement("li");P(a,C.progressline),e.progressStepsDistance&&(a.style.width=e.progressStepsDistance),t.appendChild(a)}})):T(t)},ne={},oe=function(e,t){var n=M(),o=q();if(o){null!==e&&"function"==typeof e&&e(o),O(o,C.show),P(o,C.hide);var i=function(){Y()?ie(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;ne.restoreFocusTimeout=setTimeout(function(){ne.previousActiveElement&&ne.previousActiveElement.focus?(ne.previousActiveElement.focus(),ne.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return ie(t)}),ne.keydownTarget.removeEventListener("keydown",ne.keydownHandler,{capture:ne.keydownListenerCapture}),ne.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),O([document.documentElement,document.body],[C.shown,C["height-auto"],C["no-backdrop"],C["toast-shown"],C["toast-column"]]),Q()&&(null!==x.previousBodyPadding&&(document.body.style.paddingRight=x.previousBodyPadding,x.previousBodyPadding=null),function(){if(A(document.body,C.iosfix)){var e=parseInt(document.body.style.top,10);O(document.body,C.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),p(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!A(o,C.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),A(o,C.hide)&&i()}):i()}},ie=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function re(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return c(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=i(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var ae={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},se=["useRejections","expectRejections","extraParams"],ce=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],ue=function(e){return ae.hasOwnProperty(e)||"extraParams"===e},le=function(e){return-1!==se.indexOf(e)},de=function(e){for(var t in e)ue(t)||f('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ce.indexOf(t)&&f('The parameter "'.concat(t,'" is incompatible with toasts')),le(t)&&g('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},pe='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',fe={},me=[],he=function(){var e=q();e||Te(""),e=q();var t=U(),n=W(),o=z();L(t),L(n),P([e,t],C.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},ge=Object.freeze({isValidParameter:ue,isDeprecatedParameter:le,argsToParams:function(t){var n={};switch(e(t[0])){case"object":i(n,t[0]);break;default:["title","html","type"].forEach(function(o,i){switch(e(t[i])){case"string":n[o]=t[i];break;case"undefined":break;default:m("Unexpected type of ".concat(o,'! Expected "string", got ').concat(e(t[i])))}})}return n},adaptInputValidator:function(e){return function(t,n){return e.call(this,t,n).then(function(){},function(e){return e})}},close:oe,closePopup:oe,closeModal:oe,closeToast:oe,isVisible:function(){return!!q()},clickConfirm:function(){return W().click()},clickCancel:function(){return z().click()},getContainer:M,getPopup:q,getTitle:H,getContent:I,getImage:_,getIcons:R,getCloseButton:F,getButtonsWrapper:function(){return g("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),V(C.actions)},getActions:U,getConfirmButton:W,getCancelButton:z,getFooter:K,getFocusableElements:Z,getValidationMessage:N,isLoading:function(){return q().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return c(this,t)},mixin:function(e){return re(function(n){function s(){return t(this,s),u(this,a(s).apply(this,arguments))}return r(s,n),o(s,[{key:"_main",value:function(t){return l(a(s.prototype),"_main",this).call(this,i({},e,t))}}]),s}(this))},queue:function(e){var t=this;me=e;var n=function(){me=[],document.body.removeAttribute("data-swal2-queue-step")},o=[];return new Promise(function(e){!function i(r,a){r<me.length?(document.body.setAttribute("data-swal2-queue-step",r),t(me[r]).then(function(t){void 0!==t.value?(o.push(t.value),i(r+1,a)):(n(),e({dismiss:t.dismiss}))})):(n(),e({value:o}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<me.length?me.splice(t,0,e):me.push(e)},deleteQueueStep:function(e){void 0!==me[e]&&me.splice(e,1)},showLoading:he,enableLoading:he,getTimerLeft:function(){return ne.timeout&&ne.timeout.getTimerLeft()}}),be="function"==typeof Symbol?Symbol:function(){var e=0;function t(t){return"__"+t+"_"+Math.floor(1e9*Math.random())+"_"+ ++e+"__"}return t.iterator=t("Symbol.iterator"),t}(),ye="function"==typeof WeakMap?WeakMap:function(e,t,n){function o(){t(this,e,{value:be("WeakMap")})}return o.prototype={delete:function(t){delete t[this[e]]},get:function(t){return t[this[e]]},has:function(t){return n.call(t,this[e])},set:function(n,o){t(n,this[e],{configurable:!0,value:o})}},o}(be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),ve={promise:new ye,innerParams:new ye,domCache:new ye};function we(){var e=ve.innerParams.get(this),t=ve.domCache.get(this);e.showConfirmButton||(T(t.confirmButton),e.showCancelButton||T(t.actions)),O([t.popup,t.actions],C.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Ce(e){var t=ve.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),L(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",C["validation-message"]),B(o),P(o,C.inputerror))}function ke(){var e=ve.domCache.get(this);e.validationMessage&&T(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),O(t,C.inputerror))}var xe,Ae=function e(n,o){var i,r,a;t(this,e);var s=o;this.start=function(){a=!0,r=new Date,i=setTimeout(n,s)},this.stop=function(){a=!1,clearTimeout(i),s-=new Date-r},this.getTimerLeft=function(){return a&&(this.stop(),this.start()),s},this.start()},Be={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}},Se=function(e){var t=M(),n=q();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(P(n,C.show),P(t,C.fade),O(n,C.hide)):O(n,C.fade),L(n),t.style.overflowY="hidden",ee&&!A(n,C.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",P([document.documentElement,document.body,t],C.shown),e.heightAuto&&e.backdrop&&!e.toast&&P([document.documentElement,document.body],C["height-auto"]),Q()&&(null===x.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(x.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=x.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px"),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!A(document.body,C.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",P(document.body,C.iosfix)}}(),p(document.body.children).forEach(function(e){e===M()||e.contains(M())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})),Y()||ne.previousActiveElement||(ne.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})},Pe=Object.freeze({hideLoading:we,disableLoading:we,getInput:function(e){var t=ve.innerParams.get(this),n=ve.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return E(n.content,C[e]);case"checkbox":return n.popup.querySelector(".".concat(C.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(C.radio," input:checked"))||n.popup.querySelector(".".concat(C.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(C.range," input"));default:return E(n.content,C.input)}},enableButtons:function(){var e=ve.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=ve.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){ve.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){ve.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Ce,resetValidationMessage:ke,resetValidationError:function(){g("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),ke.bind(this)()},showValidationError:function(e){g("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Ce.bind(this)(e)},getProgressSteps:function(){return ve.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=i({},ve.innerParams.get(this),{progressSteps:e});ve.innerParams.set(this,t),te(t)},showProgressSteps:function(){var e=ve.domCache.get(this);L(e.progressSteps)},hideProgressSteps:function(){var e=ve.domCache.get(this);T(e.progressSteps)},_main:function(t){var n=this;de(t);var o=i({},ae,t);!function(t){var n;t.inputValidator||Object.keys(Be).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Be[e]:Te.adaptInputValidator(Be[e]))}),t.validationMessage&&("object"!==e(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(f('Target parameter is not valid, defaulting to "body"'),t.target="body");var o=q(),i="string"==typeof t.target?document.querySelector(t.target):t.target;n=o&&i&&o.parentNode!==i.parentNode?X(t):o||X(t),t.width&&(n.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(n.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(n.style.background=t.background);for(var r=window.getComputedStyle(n).getPropertyValue("background-color"),a=n.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),s=0;s<a.length;s++)a[s].style.backgroundColor=r;var c=M(),u=F(),l=K();if(function(e){var t=H();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))}(t),function(e){var t=I().querySelector("#"+C.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,L(t)):T(t)}(t),"string"==typeof t.backdrop?M().style.background=t.backdrop:t.backdrop||P([document.documentElement,document.body],C["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in C?P(c,C[t.position]):(f('The "position" parameter is not valid, defaulting to "center"'),P(c,C.center)),t.grow&&"string"==typeof t.grow){var d="grow-"+t.grow;d in C&&P(c,C[d])}"function"==typeof t.animation&&(t.animation=t.animation.call()),t.showCloseButton?(u.setAttribute("aria-label",t.closeButtonAriaLabel),L(u)):T(u),n.className=C.popup,t.toast?(P([document.documentElement,document.body],C["toast-shown"]),P(n,C.toast)):P(n,C.modal),t.customClass&&P(n,t.customClass),te(t),function(e){for(var t=R(),n=0;n<t.length;n++)T(t[n]);if(e.type)if(-1!==Object.keys(k).indexOf(e.type)){var o=Te.getPopup().querySelector(".".concat(C.icon,".").concat(k[e.type]));L(o),e.animation&&P(o,"swal2-animate-".concat(e.type,"-icon"))}else m('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))}(t),function(e){var t=_();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),L(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=C.image,e.imageClass&&P(t,e.imageClass)):T(t)}(t),function(e){var t=U(),n=W(),o=z();if(e.showConfirmButton||e.showCancelButton?L(t):T(t),e.showCancelButton?o.style.display="inline-block":T(o),e.showConfirmButton?n.style.removeProperty("display"):T(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=C.confirm,P(n,e.confirmButtonClass),o.className=C.cancel,P(o,e.cancelButtonClass),e.buttonsStyling){P([n,o],C.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else O([n,o],C.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""}(t),G(t.footer,l),!0===t.animation?O(n,C.noanimation):P(n,C.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&f("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(o),Object.freeze(o),ve.innerParams.set(this,o),ne.timeout&&(ne.timeout.stop(),delete ne.timeout),clearTimeout(ne.restoreFocusTimeout);var r={popup:q(),container:M(),content:I(),actions:U(),confirmButton:W(),cancelButton:z(),closeButton:F(),validationMessage:N(),progressSteps:D()};ve.domCache.set(this,r);var a=this.constructor;return new Promise(function(t,i){var s=function(e){a.closePopup(o.onClose,o.onAfterClose),t(o.useRejections?e:{value:e})},c=function(e){a.closePopup(o.onClose,o.onAfterClose),o.useRejections?i(e):t({dismiss:e})},u=function(e){a.closePopup(o.onClose,o.onAfterClose),i(e)};o.timer&&(ne.timeout=new Ae(function(){c("timer"),delete ne.timeout},o.timer)),o.input&&setTimeout(function(){var e=n.getInput();e&&B(e)},0);for(var l=function(e){if(o.showLoaderOnConfirm&&a.showLoading(),o.preConfirm){n.resetValidationMessage();var t=Promise.resolve().then(function(){return o.preConfirm(e,o.extraParams)});o.expectRejections?t.then(function(t){return s(t||e)},function(e){n.hideLoading(),e&&n.showValidationMessage(e)}):t.then(function(t){j(r.validationMessage)||!1===t?n.hideLoading():s(t||e)},function(e){return u(e)})}else s(e)},d=function(e){var t=e.target,i=r.confirmButton,s=r.cancelButton,d=i&&(i===t||i.contains(t)),p=s&&(s===t||s.contains(t));switch(e.type){case"click":if(d&&a.isVisible())if(n.disableButtons(),o.input){var f=function(){var e=n.getInput();if(!e)return null;switch(o.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return o.inputAutoTrim?e.value.trim():e.value}}();if(o.inputValidator){n.disableInput();var m=Promise.resolve().then(function(){return o.inputValidator(f,o.extraParams)});o.expectRejections?m.then(function(){n.enableButtons(),n.enableInput(),l(f)},function(e){n.enableButtons(),n.enableInput(),e&&n.showValidationMessage(e)}):m.then(function(e){n.enableButtons(),n.enableInput(),e?n.showValidationMessage(e):l(f)},function(e){return u(e)})}else l(f)}else l(!0);else p&&a.isVisible()&&(n.disableButtons(),c(a.DismissReason.cancel))}},p=r.popup.querySelectorAll("button"),h=0;h<p.length;h++)p[h].onclick=d,p[h].onmouseover=d,p[h].onmouseout=d,p[h].onmousedown=d;if(r.closeButton.onclick=function(){c(a.DismissReason.close)},o.toast)r.popup.onclick=function(){o.showConfirmButton||o.showCancelButton||o.showCloseButton||o.input||c(a.DismissReason.close)};else{var g=!1;r.popup.onmousedown=function(){r.container.onmouseup=function(e){r.container.onmouseup=void 0,e.target===r.container&&(g=!0)}},r.container.onmousedown=function(){r.popup.onmouseup=function(e){r.popup.onmouseup=void 0,(e.target===r.popup||r.popup.contains(e.target))&&(g=!0)}},r.container.onclick=function(e){g?g=!1:e.target===r.container&&b(o.allowOutsideClick)&&c(a.DismissReason.backdrop)}}o.reverseButtons?r.confirmButton.parentNode.insertBefore(r.cancelButton,r.confirmButton):r.confirmButton.parentNode.insertBefore(r.confirmButton,r.cancelButton);var v=function(e,t){for(var n=Z(),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();r.popup.focus()};ne.keydownHandlerAdded&&(ne.keydownTarget.removeEventListener("keydown",ne.keydownHandler,{capture:ne.keydownListenerCapture}),ne.keydownHandlerAdded=!1),o.toast||(ne.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var o=e.target,i=Z(),s=-1,u=0;u<i.length;u++)if(o===i[u]){s=u;break}v(s,e.shiftKey?-1:1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===r.confirmButton&&j(r.cancelButton)?r.cancelButton.focus():document.activeElement===r.cancelButton&&j(r.confirmButton)&&r.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==b(t.allowEscapeKey)||c(a.DismissReason.esc);else if(e.target&&n.getInput()&&e.target.outerHTML===n.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;a.clickConfirm(),e.preventDefault()}}(e,o)},ne.keydownTarget=o.keydownListenerCapture?window:r.popup,ne.keydownListenerCapture=o.keydownListenerCapture,ne.keydownTarget.addEventListener("keydown",ne.keydownHandler,{capture:ne.keydownListenerCapture}),ne.keydownHandlerAdded=!0),n.enableButtons(),n.hideLoading(),n.resetValidationMessage(),o.toast&&(o.input||o.footer||o.showCloseButton)?P(document.body,C["toast-column"]):O(document.body,C["toast-column"]);for(var w,k,x=["input","file","range","select","radio","checkbox","textarea"],A=0;A<x.length;A++){var S=C[x[A]],M=E(r.content,S);if(w=n.getInput(x[A])){for(var V in w.attributes)if(w.attributes.hasOwnProperty(V)){var q=w.attributes[V].name;"type"!==q&&"value"!==q&&w.removeAttribute(q)}for(var R in o.inputAttributes)w.setAttribute(R,o.inputAttributes[R])}M.className=S,o.inputClass&&P(M,o.inputClass),T(M)}switch(o.input){case"text":case"email":case"password":case"number":case"tel":case"url":w=E(r.content,C.input),"string"==typeof o.inputValue||"number"==typeof o.inputValue?w.value=o.inputValue:f('Unexpected type of inputValue! Expected "string" or "number", got "'.concat(e(o.inputValue),'"')),w.placeholder=o.inputPlaceholder,w.type=o.input,L(w);break;case"file":(w=E(r.content,C.file)).placeholder=o.inputPlaceholder,w.type=o.input,L(w);break;case"range":var H=E(r.content,C.range),I=H.querySelector("input"),_=H.querySelector("output");I.value=o.inputValue,I.type=o.input,_.value=o.inputValue,L(H);break;case"select":var D=E(r.content,C.select);if(D.innerHTML="",o.inputPlaceholder){var N=document.createElement("option");N.innerHTML=o.inputPlaceholder,N.value="",N.disabled=!0,N.selected=!0,D.appendChild(N)}k=function(e){e.forEach(function(e){var t=e[0],n=e[1],i=document.createElement("option");i.value=t,i.innerHTML=n,o.inputValue.toString()===t.toString()&&(i.selected=!0),D.appendChild(i)}),L(D),D.focus()};break;case"radio":var W=E(r.content,C.radio);W.innerHTML="",k=function(e){e.forEach(function(e){var t=e[0],n=e[1],i=document.createElement("input"),r=document.createElement("label");i.type="radio",i.name=C.radio,i.value=t,o.inputValue.toString()===t.toString()&&(i.checked=!0);var a=document.createElement("span");a.innerHTML=n,a.className=C.label,r.appendChild(i),r.appendChild(a),W.appendChild(r)}),L(W);var t=W.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var z=E(r.content,C.checkbox),U=n.getInput("checkbox");U.type="checkbox",U.value=1,U.id=C.checkbox,U.checked=Boolean(o.inputValue),z.querySelector("span").innerHTML=o.inputPlaceholder,L(z);break;case"textarea":var K=E(r.content,C.textarea);K.value=o.inputValue,K.placeholder=o.inputPlaceholder,L(K);break;case null:break;default:m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(o.input,'"'))}if("select"===o.input||"radio"===o.input){var F=function(e){return k((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};y(o.inputOptions)?(a.showLoading(),o.inputOptions.then(function(e){n.hideLoading(),F(e)})):"object"===e(o.inputOptions)?F(o.inputOptions):m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(e(o.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(o.input)&&y(o.inputValue)&&(a.showLoading(),T(w),o.inputValue.then(function(e){w.value="number"===o.input?parseFloat(e)||0:e+"",L(w),w.focus(),n.hideLoading()}).catch(function(e){m("Error in inputValue promise: "+e),w.value="",L(w),w.focus(),n.hideLoading()}));Se(o),o.toast||(b(o.allowEnterKey)?o.focusCancel&&j(r.cancelButton)?r.cancelButton.focus():o.focusConfirm&&j(r.confirmButton)?r.confirmButton.focus():v(-1,1):document.activeElement&&document.activeElement.blur()),r.container.scrollTop=0})}});function Oe(){if("undefined"!=typeof window){"undefined"==typeof Promise&&m("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return m("At least 1 argument is expected!"),!1;xe=this;var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);ve.promise.set(this,i)}}Oe.prototype.then=function(e,t){return ve.promise.get(this).then(e,t)},Oe.prototype.catch=function(e){return ve.promise.get(this).catch(e)},Oe.prototype.finally=function(e){return ve.promise.get(this).finally(e)},i(Oe.prototype,Pe),i(Oe,ge),Object.keys(Pe).forEach(function(e){Oe[e]=function(){var t;if(xe)return(t=xe)[e].apply(t,arguments)}}),Oe.DismissReason=v,Oe.noop=function(){};var Ee,Le,Te=re((Ee=Oe,Le=function(n){function s(){return t(this,s),u(this,a(s).apply(this,arguments))}return r(s,Ee),o(s,[{key:"_main",value:function(e){return l(a(s.prototype),"_main",this).call(this,i({},fe,e))}}],[{key:"setDefaults",value:function(t){if(g(pe),!t||"object"!==e(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");de(t),Object.keys(t).forEach(function(e){Ee.isValidParameter(e)&&(fe[e]=t[e])})}},{key:"resetDefaults",value:function(){g(pe),fe={}}}]),s}(),"undefined"!=typeof window&&"object"===e(window._swalDefaults)&&Le.setDefaults(window._swalDefaults),Le));return Te.default=Te}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.28.4",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);