window.wp=window.wp||{},window.wp.serverSideRender=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=579)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(40),o=r(30),c=r(41);function u(e,t){return Object(n.a)(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],_n=!0,n=!1,o=void 0;try{for(var c,u=e[Symbol.iterator]();!(_n=(c=u.next()).done)&&(r.push(c.value),!t||r.length!==t);_n=!0);}catch(e){n=!0,o=e}finally{try{_n||null==u.return||u.return()}finally{if(n)throw o}}return r}}(e,t)||Object(o.a)(e,t)||Object(c.a)()}},11:function(e,t){e.exports=window.wp.blocks},13:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(48);function o(e,t){if(null==e)return{};var r,o,c=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)r=u[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}},14:function(e,t){e.exports=window.wp.compose},2:function(e,t){e.exports=window.lodash},24:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"a",(function(){return n}))},3:function(e,t){e.exports=window.wp.components},30:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(24);function o(e,t){if(e){if("string"==typeof e)return Object(n.a)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n.a)(e,t):void 0}}},31:function(e,t){e.exports=window.wp.url},39:function(e,t){e.exports=window.wp.deprecated},4:function(e,t){e.exports=window.wp.data},40:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return n}))},41:function(e,t,r){"use strict";function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}r.d(t,"a",(function(){return n}))},48:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,"a",(function(){return n}))},5:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},51:function(e,t){e.exports=window.wp.apiFetch},579:function(e,t,r){"use strict";r.r(t);var n=r(9),o=r(5),c=r(13),u=r(0),i=r(4),a=r(39),l=r.n(a),s=r(10),f=r(2),p=r(14),b=r(1),d=r(51),O=r.n(d),j=r(31),w=r(3),y=r(11);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=e.className;return Object(u.createElement)(w.Placeholder,{className:t},Object(b.__)("Block rendered as empty."))}function h(e){var t=e.response,r=e.className,n=Object(b.sprintf)(// translators: %s: error message describing the problem
Object(b.__)("Error loading block: %s"),t.errorMsg);return Object(u.createElement)(w.Placeholder,{className:r},n)}function P(e){var t=e.className;return Object(u.createElement)(w.Placeholder,{className:t},Object(u.createElement)(w.Spinner,null))}function S(e){var t=e.attributes,r=e.block,o=e.className,c=e.httpMethod,i=void 0===c?"GET":c,a=e.urlQueryArgs,l=e.EmptyResponsePlaceholder,b=void 0===l?g:l,d=e.ErrorResponsePlaceholder,w=void 0===d?h:d,v=e.LoadingResponsePlaceholder,S=void 0===v?P:v,E=Object(u.useRef)(!0),x=Object(u.useRef)(),_=Object(u.useState)(null),A=Object(s.a)(_,2),R=A[0],M=A[1],k=Object(p.usePrevious)(e);function D(){if(E.current){null!==R&&M(null);var e=t&&Object(y.__experimentalSanitizeBlockAttributes)(r,t),n="POST"===i,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return Object(j.addQueryArgs)("/wp/v2/block-renderer/".concat(e),m(m({context:"edit"},null!==t?{attributes:t}:{}),r))}(r,n?null:null!=e?e:null,a),c=n?{attributes:null!=e?e:null}:null,u=x.current=O()({path:o,data:c,method:n?"POST":"GET"}).then((function(e){E.current&&u===x.current&&e&&M(e.rendered)})).catch((function(e){E.current&&u===x.current&&M({error:!0,errorMsg:e.message})}));return u}}var I=Object(p.useDebounce)(D,500);return Object(u.useEffect)((function(){return function(){E.current=!1}}),[]),Object(u.useEffect)((function(){void 0===k?D():Object(f.isEqual)(k,e)||I()})),""===R?Object(u.createElement)(b,e):R?R.error?Object(u.createElement)(w,Object(n.a)({response:R},e)):Object(u.createElement)(u.RawHTML,{className:o},R):Object(u.createElement)(S,e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x={},_=Object(i.withSelect)((function(e){var t=e("core/editor");if(t){var r=t.getCurrentPostId();if(r)return{currentPostId:r}}return x}))((function(e){var t=e.urlQueryArgs,r=void 0===t?x:t,i=e.currentPostId,a=Object(c.a)(e,["urlQueryArgs","currentPostId"]),l=Object(u.useMemo)((function(){return i?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({post_id:i},r):r}),[i,r]);return Object(u.createElement)(S,Object(n.a)({urlQueryArgs:l},a))}));window&&window.wp&&window.wp.components&&(window.wp.components.ServerSideRender=Object(u.forwardRef)((function(e,t){return l()("wp.components.ServerSideRender",{since:"5.3",alternative:"wp.serverSideRender"}),Object(u.createElement)(_,Object(n.a)({},e,{ref:t}))}))),t.default=_},9:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))}}).default;