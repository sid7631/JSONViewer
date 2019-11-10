!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PdfViewer=t():e.PdfViewer=t()}(window,(function(){return function(e){var t=window.webpackHotUpdatePdfViewer;window.webpackHotUpdatePdfViewer=function(e,n){!function(e,t){if(w[e]&&g[e]){for(var n in g[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--y&&0===m&&D()}}(e,n),t&&t(e,n)};var n,r=!0,o="2ed0f890314f31ce039d",i=1e4,a={},c=[],d=[];function s(e){var t=E[e];if(!t)return P;function r(r){return t.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(c=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),P(r)}function o(e){return{configurable:!0,enumerable:!0,get:function(){return P[e]},set:function(t){P[e]=t}}}for(var i in P)Object.prototype.hasOwnProperty.call(P,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===l&&f("prepare"),m++,P.e(e).then(t,(function(e){throw t(),e}));function t(){m--,"prepare"===l&&(b[e]||j(e),0===m&&0===y&&D())}},r.t=function(e,t){return 1&t&&(e=r(e)),P.t(e,-2&t)},r}var u=[],l="idle";function f(e){l=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var p,h,v,y=0,m=0,b={},g={},w={};function x(e){return+e+""===e?+e:e}function O(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise((function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=P.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}}))}(i).then((function(e){if(!e)return f("idle"),null;g={},b={},w=e.c,v=e.h,f("prepare");var t=new Promise((function(e,t){p={resolve:e,reject:t}}));return h={},j(0),"prepare"===l&&0===m&&0===y&&D(),t}))}function j(e){w[e]?(g[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=P.p+""+e+"."+o+".hot-update.js",document.head.appendChild(t)}(e)):b[e]=!0}function D(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then((function(){return _(r)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(x(n));e.resolve(t)}}function _(t){if("ready"!==l)throw new Error("apply() is only allowed in ready status");var n,r,i,d,s;function u(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));0<r.length;){var o=r.pop(),i=o.id,a=o.chain;if((d=E[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],u=E[s];if(u){if(u.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(u.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),p(n[s],[i])):(delete n[s],t.push(s),r.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}function y(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")}t=t||{};var m={},b=[],g={};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var j;s=x(O);var D=!1,_=!1,k=!1,H="";switch((j=h[O]?u(s):{type:"disposed",moduleId:O}).chain&&(H="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(D=new Error("Aborted because of self decline: "+j.moduleId+H));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(D=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+H));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(D=new Error("Aborted because "+s+" is not accepted"+H));break;case"accepted":t.onAccepted&&t.onAccepted(j),_=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),k=!0;break;default:throw new Error("Unexception type "+j.type)}if(D)return f("abort"),Promise.reject(D);if(_)for(s in g[s]=h[s],p(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,s)&&(m[s]||(m[s]=[]),p(m[s],j.outdatedDependencies[s]));k&&(p(b,[j.moduleId]),g[s]=y)}var M,I=[];for(r=0;r<b.length;r++)s=b[r],E[s]&&E[s].hot._selfAccepted&&g[s]!==y&&I.push({module:s,errorHandler:E[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var S,B,C=b.slice();0<C.length;)if(s=C.pop(),d=E[s]){var A={},T=d.hot._disposeHandlers;for(i=0;i<T.length;i++)(n=T[i])(A);for(a[s]=A,d.hot.active=!1,delete E[s],delete m[s],i=0;i<d.children.length;i++){var U=E[d.children[i]];U&&0<=(M=U.parents.indexOf(s))&&U.parents.splice(M,1)}}for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=E[s]))for(B=m[s],i=0;i<B.length;i++)S=B[i],0<=(M=d.children.indexOf(S))&&d.children.splice(M,1);for(s in f("apply"),o=v,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var R=null;for(s in m)if(Object.prototype.hasOwnProperty.call(m,s)&&(d=E[s])){B=m[s];var L=[];for(r=0;r<B.length;r++)if(S=B[r],n=d.hot._acceptedDependencies[S]){if(-1!==L.indexOf(n))continue;L.push(n)}for(r=0;r<L.length;r++){n=L[r];try{n(B)}catch(n){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:B[r],error:n}),t.ignoreErrored||(R=R||n)}}}for(r=0;r<I.length;r++){var N=I[r];s=N.module,c=[s];try{P(s)}catch(r){if("function"==typeof N.errorHandler)try{N.errorHandler(r)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:n,originalError:r}),t.ignoreErrored||(R=R||n),R=R||r}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:r}),t.ignoreErrored||(R=R||r)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise((function(e){e(b)})))}var E={};function P(t){if(E[t])return E[t].exports;var r=E[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);0<=n&&t._disposeHandlers.splice(n,1)},check:O,apply:_,status:function(e){if(!e)return l;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);0<=t&&u.splice(t,1)},data:a[e]};return n=void 0,t}(t),parents:(d=c,c=[],d),children:[]};return e[t].call(r.exports,r,r.exports,s(t)),r.l=!0,r.exports}return P.m=e,P.c=E,P.d=function(e,t,n){P.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},P.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},P.t=function(e,t){if(1&t&&(e=P(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(P.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)P.d(n,r,function(t){return e[t]}.bind(null,r));return n},P.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return P.d(t,"a",t),t},P.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},P.p="",P.h=function(){return o},s(4)(P.s=4)}([function(e,t,n){(e.exports=n(2)(!1)).push([e.i,".pdf-viewer{width:400px;min-height:200px;border-radius:3px;background-color:#fff;padding:15px 30px;list-style-type:none}.pdf-viewer>div{background-color:#eee;margin:1px 0}",""])},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o=n(3)(r,{insert:"head",singleton:!1});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(0,(function(){var t=n(0);"string"==typeof t&&(t=[[e.i,t,""]]),o(t)})),e.hot.dispose((function(){o()}))},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(r),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot).concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(n,"}"):n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var a=0;a<e.length;a++){var c=e[a];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="(".concat(c[2],") and (").concat(n,")")),t.push(c))}},t}},function(e,t,n){"use strict";var r,o,i={},a=(o={},function(e){if(void 0===o[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}o[e]=t}return o[e]});function c(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id],a=0;if(o){for(o.refs++;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(v(r.parts[a],t))}else{for(var c=[];a<r.parts.length;a++)c.push(v(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function s(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var r=n.nc;r&&(e.attributes.nonce=r)}if(Object.keys(e.attributes).forEach((function(n){t.setAttribute(n,e.attributes[n])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}var p=null,h=0;function v(e,t){var n,r,o;if(t.singleton){var i=h++;n=p=p||s(t),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=s(t),r=function(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}.bind(null,n,t),o=function(){!function(e){null!==e.parentNode&&e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o],s=i[a.id];s&&(s.refs--,r.push(s))}e&&d(c(e,t),t);for(var u=0;u<r.length;u++){var l=r[u];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete i[l.id]}}}}},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n(1);var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.elem=t,this.boxes=n,this.initialized=!1}return function(e,t,n){t&&r(e.prototype,t)}(e,[{key:"init",value:function(){var e=document.createElement("div");e.classList.add("pdf-viewer"),this.page=this.elem.appendChild(e),this.renderBoxes(),this.initialized=!0}},{key:"getBoxData",value:function(e){return e.text}},{key:"getBoxes",value:function(){var e=this;return this.boxes.map((function(t){return e.getBoxData(t)}))}},{key:"getBoxDiv",value:function(e){var t=document.createElement("div");return t.innerHTML=e,t}},{key:"appendBox",value:function(e){this.page.appendChild(e)}},{key:"renderBoxes",value:function(){var e=this,t=this.getBoxes().map((function(t){return e.getBoxDiv(t)}));console.log(t);var n=!0,r=!1,o=void 0;try{for(var i,a=t[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var c=i.value;this.appendBox(c)}}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}},{key:"addBox",value:function(e){var t=this.getBoxData(e),n=this.getBoxDiv(t);this.appendBox(n)}}]),e}();t.default=o}]).default}));