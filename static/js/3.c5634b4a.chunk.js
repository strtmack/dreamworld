(this["webpackJsonpdreamworld-driftwood"]=this["webpackJsonpdreamworld-driftwood"]||[]).push([[3],{66:function(e,t,n){var r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useAsyncStorage",{enumerable:!0,get:function(){return u.useAsyncStorage}}),t.default=void 0;var o=r(n(78)),u=n(83),a=o.default;t.default=a},78:function(e,t,n){var r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(79)),u=r(n(80)),a=r(n(81)),l=function(e,t){return new Promise((function(n,r){try{var o=e();t&&t(null,o),n(o)}catch(u){t&&t(u),r(u)}}))},c=function(e,t,n){return Promise.all(e).then((function(e){var r=n?n(e):null;return t&&t(null,r),Promise.resolve(r)}),(function(e){return t&&t(e),Promise.reject(e)}))},i=function(){function e(){(0,o.default)(this,e)}return(0,u.default)(e,null,[{key:"getItem",value:function(e,t){return l((function(){return window.localStorage.getItem(e)}),t)}},{key:"setItem",value:function(e,t,n){return l((function(){window.localStorage.setItem(e,t)}),n)}},{key:"removeItem",value:function(e,t){return l((function(){return window.localStorage.removeItem(e)}),t)}},{key:"mergeItem",value:function(e,t,n){return l((function(){!function(e,t){var n=window.localStorage.getItem(e),r=JSON.parse(n),o=JSON.parse(t),u=JSON.stringify((0,a.default)({},r,o));window.localStorage.setItem(e,u)}(e,t)}),n)}},{key:"clear",value:function(e){return l((function(){window.localStorage.clear()}),e)}},{key:"getAllKeys",value:function(e){return l((function(){for(var e=window.localStorage.length,t=[],n=0;n<e;n+=1){var r=window.localStorage.key(n);t.push(r)}return t}),e)}},{key:"flushGetRequests",value:function(){}},{key:"multiGet",value:function(t,n){var r=t.map((function(t){return e.getItem(t)}));return c(r,n,(function(e){return e.map((function(e,n){return[t[n],e]}))}))}},{key:"multiSet",value:function(t,n){var r=t.map((function(t){return e.setItem(t[0],t[1])}));return c(r,n)}},{key:"multiRemove",value:function(t,n){var r=t.map((function(t){return e.removeItem(t)}));return c(r,n)}},{key:"multiMerge",value:function(t,n){var r=t.map((function(t){return e.mergeItem(t[0],t[1])}));return c(r,n)}}]),e}();t.default=i},79:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},80:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},81:function(e,t,n){"use strict";var r=n(82),o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null===e||void 0===e)throw new TypeError("Sources cannot be null or undefined");return Object(e)}function l(e,t,n){var u=t[n];if(void 0!==u&&null!==u){if(o.call(e,n)&&(void 0===e[n]||null===e[n]))throw new TypeError("Cannot convert undefined or null to object ("+n+")");o.call(e,n)&&r(u)?e[n]=c(Object(e[n]),t[n]):e[n]=u}}function c(e,t){if(e===t)return e;for(var n in t=Object(t))o.call(t,n)&&l(e,t,n);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(t),a=0;a<r.length;a++)u.call(t,r[a])&&l(e,t,r[a]);return e}e.exports=function(e){e=a(e);for(var t=1;t<arguments.length;t++)c(e,arguments[t]);return e}},82:function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},83:function(e,t,n){var r=n(22);Object.defineProperty(t,"__esModule",{value:!0}),t.useAsyncStorage=function(e){return{getItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.default.getItem.apply(o.default,[e].concat(n))},setItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.default.setItem.apply(o.default,[e].concat(n))},mergeItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.default.mergeItem.apply(o.default,[e].concat(n))},removeItem:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return o.default.removeItem.apply(o.default,[e].concat(n))}}};var o=r(n(78))}}]);
//# sourceMappingURL=3.c5634b4a.chunk.js.map