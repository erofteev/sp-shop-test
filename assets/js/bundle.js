!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/js",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(i=o.key,u=void 0,u=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(i,"string"),"symbol"===t(u)?u:String(u)),o)}var i,u}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=o((function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.env=n(3).default,this.utils=n(4).default,this.classes={},this.components={},this.helpers={},this.modules={},document.addEventListener("DOMContentLoaded",(function(){document.documentElement.classList.remove("_loading")}))}));function u(){var e=document.querySelector(".basket__inner"),t=document.querySelector(".cart__counter"),n=document.querySelectorAll(".btn__submit"),r=document.querySelector(".total-price"),o=document.querySelector(".basket__empty");t.innerText=e.children.length,e.children.length>0?(o.classList.add("none"),r.classList.remove("none"),n.forEach((function(e){e.disabled=!1}))):(o.classList.remove("none"),r.classList.add("none"),n.forEach((function(e){e.disabled=!0})))}function c(){var e=document.querySelectorAll(".basket__item"),t=document.querySelector('[data-total-price="subtotal"]'),n=document.querySelector("[data-total-tax]").innerText.replace("$",""),r=document.querySelector("[data-total-shipping").innerText.replace("$",""),o=document.querySelector('[data-total-price="total"]'),i=0;e.forEach((function(e){var t=e.querySelector('[data-quantity="counter"]').innerText,n=e.querySelector(".basket-item__price").innerText.replace("$","");i+=parseInt(t,10)*parseInt(n,10)})),t.innerText="$ ".concat(i),o.innerText="$ ".concat(parseInt(i,10)+parseInt(n,10)+parseInt(r,10))}e.ProjectApp=new i,document.querySelector(".menu").addEventListener("click",(function(){document.querySelector(".menu__btn").classList.toggle("active"),document.querySelector(".header__nav").classList.toggle("active"),document.body.classList.toggle("lock")})),window.addEventListener("click",(function(e){var t,n="minus"===e.target.dataset.quantity,r="plus"===e.target.dataset.quantity;(n||r)&&(t=e.target.closest(".basket__item").querySelector('[data-quantity="counter"]'));n&&parseInt(t.innerText,10)>1&&(t.innerText=--t.innerText),r&&(t.innerText=++t.innerText),e.target.closest(".basket-item__delete")&&(e.target.closest(".basket__item").remove(),u(),c()),c()})),u(),c()}).call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r=window.environmentObject,o={isMobile:"_mobile"===r.platform,isDesktop:"_desktop"===r.platform,isMac:"_mac"===r.os,isWin:"_win"===r.os,isLinux:"_linux"===r.os,isAndroid:"_android"===r.os,isIOS:"_ios"===r.os,isFF:"_ff"===r.browser,isOpera:"_opera"===r.browser,isYandex:"_yandex"===r.browser,isIE:"_ie"===r.browser,isEdge:"_edge"===r.browser,isChrome:"_chrome"===r.browser,isSafari:"_safari"===r.browser,isLocal:r.isLocal};window.environmentObject=null,delete window.environmentObject,t.default=o},function(e,t,n){"use strict";n.r(t);var r={now:function(){return window.performance&&window.performance.now?this.now=function(){return window.performance.now()}:this.now=function(){return+new Date},this.now()},cubicProgress:function(e){return e=(e=e<0?0:e)>1?1:e,(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2)},debounce:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(){var o=this,i=arguments,u=function(){t=null,!r&&e.apply(o,i)},c=r&&!t;clearTimeout(t),t=setTimeout(u,n),c&&e.apply(o,i)}},throttle:function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,o=!1;function i(){o?(t=arguments,n=this):(e.apply(this,arguments),o=!0,setTimeout((function(){o=!1,t&&(i.apply(n,t),t=n=null)}),r))}return i},formatNumber:function(e){for(var t="",n=(e=e.toString()).length-1,r=0;n>=0;n--,r++)3===r?(r=0,t=e.substr(n,1)+" "+t):t=e.substr(n,1)+t;return t},declOfNum:function(e,t){return t[e%100>4&&e%100<20?2:[2,0,1,1,1,2][e%10<5?e%10:5]]}};t.default=r}]);