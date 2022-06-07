!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,n){return t(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports}var n=e((function(t){function e(n){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},e(n)}t.exports=e}));var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=n(t)););return t},o=(e((function(t){function e(n,o,a){return"undefined"!=typeof Reflect&&Reflect.get?t.exports=e=Reflect.get:t.exports=e=function(t,e,n){var o=r(t,e);if(o){var a=Object.getOwnPropertyDescriptor(o,e);return a.get?a.get.call(n):a.value}},e(n,o,a||n)}t.exports=e})),e((function(t){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},e(n,r)}t.exports=e})));var a=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)},i=e((function(t){function e(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=e=function(t){return typeof t}:t.exports=e=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(n)}t.exports=e}));var c=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var u=function(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?c(t):e};var s=function(t){return-1!==Function.toString.call(t).indexOf("[native code]")};var l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}},f=e((function(t){function e(n,r,a){return l()?t.exports=e=Reflect.construct:t.exports=e=function(t,e,n){var r=[null];r.push.apply(r,e);var a=new(Function.bind.apply(t,r));return n&&o(a,n.prototype),a},e.apply(null,arguments)}t.exports=e})),p=e((function(t){function e(r){var a="function"==typeof Map?new Map:void 0;return t.exports=e=function(t){if(null===t||!s(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(t))return a.get(t);a.set(t,e)}function e(){return f(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},e(r)}t.exports=e}));var d=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r};var h=function(t){if(Array.isArray(t))return d(t)};var v=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)};var y=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}};var m=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var g=function(t){return h(t)||v(t)||y(t)||m()};var b=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var $,_=function(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t};function S(){}function O(t){return t()}function x(){return Object.create(null)}function D(t){t.forEach(O)}function M(t){return"function"==typeof t}function j(t,e){return t!=t?e==e:t!==e||t&&"object"===i(t)||"function"==typeof t}function T(t,e,n){t.insertBefore(e,n||null)}function k(t){t.parentNode.removeChild(t)}function P(t){return document.createElement(t)}function A(t,e,n,r){return t.addEventListener(e,n,r),function(){return t.removeEventListener(e,n,r)}}function E(t){return function(e){return e.preventDefault(),t.call(this,e)}}function L(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Y(t){return Array.from(t.childNodes)}function C(t){$=t}var R=[],F=[],U=[],H=[],I=Promise.resolve(),z=!1;function W(t){U.push(t)}var B=!1,N=new Set;function G(){if(!B){B=!0;do{for(var t=0;t<R.length;t+=1){var e=R[t];C(e),V(e.$$)}for(R.length=0;F.length;)F.pop()();for(var n=0;n<U.length;n+=1){var r=U[n];N.has(r)||(N.add(r),r())}U.length=0}while(R.length);for(;H.length;)H.pop()();z=!1,B=!1,N.clear()}}function V(t){if(null!==t.fragment){t.update(),D(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var Z=new Set;function J(t,e){t&&t.i&&(Z.delete(t),t.i(e))}function q(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),W((function(){var e=a.map(O).filter(M);i?i.push.apply(i,g(e)):D(e),t.$$.on_mount=[]})),c.forEach(W)}function X(t,e){-1===t.$$.dirty[0]&&(R.push(t),z||(z=!0,I.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(t,e,n,r,o,a){var i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=$;C(t);var u=e.props||{},s=t.$$={fragment:null,ctx:null,props:a,update:S,not_equal:o,bound:x(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:x(),dirty:i},l=!1;if(s.ctx=n?n(t,u,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return s.ctx&&o(s.ctx[e],s.ctx[e]=r)&&(s.bound[e]&&s.bound[e](r),l&&X(t,e)),n})):[],s.update(),l=!0,D(s.before_update),s.fragment=!!r&&r(s.ctx),e.target){if(e.hydrate){var f=Y(e.target);s.fragment&&s.fragment.l(f),f.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&J(t.$$.fragment),q(t,e.target,e.anchor),G()}C(c)}var Q=function(){function t(){b(this,t)}return _(t,[{key:"$destroy",value:function(){var t,e;t=1,null!==(e=this.$$).fragment&&(D(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[]),this.$destroy=S}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),tt=e((function(t,e){t.exports=function t(e,n,r){var o,a,i=window,c="application/octet-stream",u=r||c,s=e,l=!n&&!r&&s,f=document.createElement("a"),p=function(t){return String(t)},d=i.Blob||i.MozBlob||i.WebKitBlob||p,h=n||"download";if(d=d.call?d.bind(i):Blob,"true"===String(this)&&(u=(s=[s,u])[0],s=s[1]),l&&l.length<2048&&(h=l.split("/").pop().split("?")[0],f.href=l,-1!==f.href.indexOf(l))){var v=new XMLHttpRequest;return v.open("GET",l,!0),v.responseType="blob",v.onload=function(e){t(e.target.response,h,c)},setTimeout((function(){v.send()}),0),v}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(s)){if(!(s.length>2096103.424&&d!==p))return navigator.msSaveBlob?navigator.msSaveBlob(b(s),h):w(s);u=(s=b(s)).type||c}else if(/([\x80-\xff])/.test(s)){for(var y=0,m=new Uint8Array(s.length),g=m.length;y<g;++y)m[y]=s.charCodeAt(y);s=new d([m],{type:u})}function b(t){for(var e=t.split(/[:;,]/),n=e[1],r=("base64"==e[2]?atob:decodeURIComponent)(e.pop()),o=r.length,a=0,i=new Uint8Array(o);a<o;++a)i[a]=r.charCodeAt(a);return new d([i],{type:n})}function w(t,e){if("download"in f)return f.href=t,f.setAttribute("download",h),f.className="download-js-link",f.innerHTML="downloading...",f.style.display="none",document.body.appendChild(f),setTimeout((function(){f.click(),document.body.removeChild(f),!0===e&&setTimeout((function(){i.URL.revokeObjectURL(f.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),window.open(t)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=t),!0;var n=document.createElement("iframe");document.body.appendChild(n),!e&&/^data:/.test(t)&&(t="data:"+t.replace(/^data:([\w\/\-\+]+)/,c)),n.src=t,setTimeout((function(){document.body.removeChild(n)}),333)}if(o=s instanceof d?s:new d([s],{type:u}),navigator.msSaveBlob)return navigator.msSaveBlob(o,h);if(i.URL)w(i.URL.createObjectURL(o),!0);else{if("string"==typeof o||o.constructor===p)try{return w("data:"+u+";base64,"+i.btoa(o))}catch(t){return w("data:"+u+","+encodeURIComponent(o))}(a=new FileReader).onload=function(t){w(this.result)},a.readAsDataURL(o)}return!0}}));var et=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t};var nt=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o};var rt=function(t,e){if(null==t)return{};var n,r,o=nt(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o},ot=e((function(t,e){var n;n=function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function a(e,n,a){if("undefined"!=typeof document){"number"==typeof(a=t({path:"/"},o.defaults,a)).expires&&(a.expires=new Date(1*new Date+864e5*a.expires)),a.expires=a.expires?a.expires.toUTCString():"";try{var i=JSON.stringify(n);/^[\{\[]/.test(i)&&(n=i)}catch(t){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in a)a[u]&&(c+="; "+u,!0!==a[u]&&(c+="="+a[u].split(";")[0]));return document.cookie=e+"="+n+c}}function i(t,n){if("undefined"!=typeof document){for(var o={},a=document.cookie?document.cookie.split("; "):[],i=0;i<a.length;i++){var c=a[i].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var s=e(c[0]);if(u=(r.read||r)(u,s)||e(u),n)try{u=JSON.parse(u)}catch(t){}if(o[s]=u,t===s)break}catch(t){}}return t?o[t]:o}}return o.set=a,o.get=function(t){return i(t,!1)},o.getJSON=function(t){return i(t,!0)},o.remove=function(e,n){a(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))},t.exports=n()}));function at(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=n(t);if(e){var a=n(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return u(this,r)}}function it(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?it(Object(n),!0).forEach((function(e){et(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):it(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var ut="crumb",st=new Set(["get","head","options","trace"]);function lt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.fetch)try{e.fetch=window.fetch}catch(t){throw new Error("Neither options.fetch nor window.fetch is defined.")}if(!e.baseUrl)try{e.baseUrl="//".concat(window.dw.backend.__api_domain)}catch(t){throw new Error("Neither options.baseUrl nor window.dw is defined.")}var n,r=ct(ct({payload:null,raw:!1,method:"GET",mode:"cors",credentials:"include"},e),{},{headers:ct({"Content-Type":"application/json"},e.headers)}),o=r.payload,a=r.baseUrl,i=r.fetch,c=r.raw,u=rt(r,["payload","baseUrl","fetch","raw"]),s="".concat(a.replace(/\/$/,""),"/").concat(t.replace(/^\//,""));if(o&&(u.body=JSON.stringify(o)),st.has(u.method.toLowerCase()))n=i(s,u);else{var l=ot.get(ut);l?(u.headers["X-CSRF-Token"]=l,n=i(s,u)):n=lt("/v3/me",{fetch:i,baseUrl:a}).then((function(){var t=ot.get(ut);t&&(u.headers["X-CSRF-Token"]=t)})).catch((function(){})).then((function(){return i(s,u)}))}return n.then((function(t){if(c)return t;if(!t.ok)throw new pt(t);if(204===t.status||!t.headers.get("content-type"))return t;var e=t.headers.get("content-type").split(";")[0];return"application/json"===e?t.json():"image/png"===e||"application/pdf"===e?t.blob():t.text()}))}lt.get=ft("GET"),lt.patch=ft("PATCH"),lt.put=ft("PUT"),lt.post=ft("POST"),lt.head=ft("HEAD");function ft(t){return function(e,n){if(n&&n.method)throw new Error("Setting option.method is not allowed in httpReq.".concat(t.toLowerCase(),"()"));return lt(e,ct(ct({},n),{},{method:t}))}}lt.delete=ft("DELETE");var pt=function(t){a(n,t);var e=at(n);function n(t){var r;return b(this,n),(r=e.call(this)).name="HttpReqError",r.status=t.status,r.statusText=t.statusText,r.message="[".concat(t.status,"] ").concat(t.statusText),r.response=t,r}return n}(p(Error));var dt=Array.isArray,ht="object"==i(t)&&t&&t.Object===Object&&t,vt="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,yt=ht||vt||Function("return this")(),mt=yt.Symbol,gt=Object.prototype,bt=gt.hasOwnProperty,wt=gt.toString,$t=mt?mt.toStringTag:void 0;var _t=function(t){var e=bt.call(t,$t),n=t[$t];try{t[$t]=void 0;var r=!0}catch(t){}var o=wt.call(t);return r&&(e?t[$t]=n:delete t[$t]),o},St=Object.prototype.toString;var Ot=function(t){return St.call(t)},xt=mt?mt.toStringTag:void 0;var Dt=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":xt&&xt in Object(t)?_t(t):Ot(t)};var Mt=function(t){return null!=t&&"object"==i(t)};var jt=function(t){return"symbol"==i(t)||Mt(t)&&"[object Symbol]"==Dt(t)},Tt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,kt=/^\w*$/;var Pt=function(t,e){if(dt(t))return!1;var n=i(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!jt(t))||(kt.test(t)||!Tt.test(t)||null!=e&&t in Object(e))};var At=function(t){var e=i(t);return null!=t&&("object"==e||"function"==e)};var Et,Lt=function(t){if(!At(t))return!1;var e=Dt(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},Yt=yt["__core-js_shared__"],Ct=(Et=/[^.]+$/.exec(Yt&&Yt.keys&&Yt.keys.IE_PROTO||""))?"Symbol(src)_1."+Et:"";var Rt=function(t){return!!Ct&&Ct in t},Ft=Function.prototype.toString;var Ut=function(t){if(null!=t){try{return Ft.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Ht=/^\[object .+?Constructor\]$/,It=Function.prototype,zt=Object.prototype,Wt=It.toString,Bt=zt.hasOwnProperty,Nt=RegExp("^"+Wt.call(Bt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Gt=function(t){return!(!At(t)||Rt(t))&&(Lt(t)?Nt:Ht).test(Ut(t))};var Vt=function(t,e){return null==t?void 0:t[e]};var Zt=function(t,e){var n=Vt(t,e);return Gt(n)?n:void 0},Jt=Zt(Object,"create");var qt=function(){this.__data__=Jt?Jt(null):{},this.size=0};var Xt=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},Kt=Object.prototype.hasOwnProperty;var Qt=function(t){var e=this.__data__;if(Jt){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return Kt.call(e,t)?e[t]:void 0},te=Object.prototype.hasOwnProperty;var ee=function(t){var e=this.__data__;return Jt?void 0!==e[t]:te.call(e,t)};var ne=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Jt&&void 0===e?"__lodash_hash_undefined__":e,this};function re(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}re.prototype.clear=qt,re.prototype.delete=Xt,re.prototype.get=Qt,re.prototype.has=ee,re.prototype.set=ne;var oe=re;var ae=function(){this.__data__=[],this.size=0};var ie=function(t,e){return t===e||t!=t&&e!=e};var ce=function(t,e){for(var n=t.length;n--;)if(ie(t[n][0],e))return n;return-1},ue=Array.prototype.splice;var se=function(t){var e=this.__data__,n=ce(e,t);return!(n<0)&&(n==e.length-1?e.pop():ue.call(e,n,1),--this.size,!0)};var le=function(t){var e=this.__data__,n=ce(e,t);return n<0?void 0:e[n][1]};var fe=function(t){return ce(this.__data__,t)>-1};var pe=function(t,e){var n=this.__data__,r=ce(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this};function de(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}de.prototype.clear=ae,de.prototype.delete=se,de.prototype.get=le,de.prototype.has=fe,de.prototype.set=pe;var he=de,ve=Zt(yt,"Map");var ye=function(){this.size=0,this.__data__={hash:new oe,map:new(ve||he),string:new oe}};var me=function(t){var e=i(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var ge=function(t,e){var n=t.__data__;return me(e)?n["string"==typeof e?"string":"hash"]:n.map};var be=function(t){var e=ge(this,t).delete(t);return this.size-=e?1:0,e};var we=function(t){return ge(this,t).get(t)};var $e=function(t){return ge(this,t).has(t)};var _e=function(t,e){var n=ge(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this};function Se(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Se.prototype.clear=ye,Se.prototype.delete=be,Se.prototype.get=we,Se.prototype.has=$e,Se.prototype.set=_e;var Oe=Se;function xe(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(xe.Cache||Oe),n}xe.Cache=Oe;var De=xe;var Me=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,je=/\\(\\)?/g,Te=function(t){var e=De(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(Me,(function(t,n,r,o){e.push(r?o.replace(je,"$1"):n||t)})),e}));var ke=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o},Pe=mt?mt.prototype:void 0,Ae=Pe?Pe.toString:void 0;var Ee=function t(e){if("string"==typeof e)return e;if(dt(e))return ke(e,t)+"";if(jt(e))return Ae?Ae.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n};var Le=function(t){return null==t?"":Ee(t)};var Ye=function(t,e){return dt(t)?t:Pt(t,e)?[t]:Te(Le(t))};var Ce=function(t){if("string"==typeof t||jt(t))return t;var e=t+"";return"0"==e&&1/t==-Infinity?"-0":e};var Re=function(t,e){for(var n=0,r=(e=Ye(e,t)).length;null!=t&&n<r;)t=t[Ce(e[n++])];return n&&n==r?t:void 0};var Fe=function(t,e,n){var r=null==t?void 0:Re(t,e);return void 0===r?n:r},Ue=e((function(t,e){t.exports=function(){var t=1e3,e=6e4,n=36e5,r="millisecond",o="second",a="minute",c="hour",u="day",s="week",l="month",f="quarter",p="year",d="date",h="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},b={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),o=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(o,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),o=e.clone().add(r,l),a=n-o<0,i=e.clone().add(r+(a?-1:1),l);return+(-(r+(n-o)/(a?o-i:i-o))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:p,w:s,d:u,D:d,h:c,m:a,s:o,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},w="en",$={};$[w]=m;var _=function(t){return t instanceof D},S=function(t,e,n){var r;if(!t)return w;if("string"==typeof t)$[t]&&(r=t),e&&($[t]=e,r=t);else{var o=t.name;$[o]=t,r=o}return!n&&r&&(w=r),r||!n&&w},O=function(t,e){if(_(t))return t.clone();var n="object"==i(e)?e:{};return n.date=t,n.args=arguments,new D(n)},x=b;x.l=S,x.i=_,x.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function i(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=i.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(x.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(v);if(r){var o=r[2]-1||0,a=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],o,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return x},m.isValid=function(){return!(this.$d.toString()===h)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return x.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!x.u(e)||e,i=x.p(t),f=function(t,e){var o=x.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?o:o.endOf(u)},h=function(t,e){return x.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,y=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(i){case p:return r?f(1,0):f(31,11);case l:return r?f(1,y):f(0,y+1);case s:var b=this.$locale().weekStart||0,w=(v<b?v+7:v)-b;return f(r?m-w:m+(6-w),y);case u:case d:return h(g+"Hours",0);case c:return h(g+"Minutes",1);case a:return h(g+"Seconds",2);case o:return h(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,i=x.p(t),s="set"+(this.$u?"UTC":""),f=(n={},n[u]=s+"Date",n[d]=s+"Date",n[l]=s+"Month",n[p]=s+"FullYear",n[c]=s+"Hours",n[a]=s+"Minutes",n[o]=s+"Seconds",n[r]=s+"Milliseconds",n)[i],h=i===u?this.$D+(e-this.$W):e;if(i===l||i===p){var v=this.clone().set(d,1);v.$d[f](h),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](h);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[x.p(t)]()},m.add=function(r,i){var f,d=this;r=Number(r);var h=x.p(i),v=function(t){var e=O(d);return x.w(e.date(e.date()+Math.round(t*r)),d)};if(h===l)return this.set(l,this.$M+r);if(h===p)return this.set(p,this.$y+r);if(h===u)return v(1);if(h===s)return v(7);var y=(f={},f[a]=e,f[c]=n,f[o]=t,f)[h]||1,m=this.$d.getTime()+r*y;return x.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=t||"YYYY-MM-DDTHH:mm:ssZ",o=x.z(this),a=this.$H,i=this.$m,c=this.$M,u=n.weekdays,s=n.months,l=function(t,n,o,a){return t&&(t[n]||t(e,r))||o[n].substr(0,a)},f=function(t){return x.s(a%12||12,t,"0")},p=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},d={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:x.s(c+1,2,"0"),MMM:l(n.monthsShort,c,s,3),MMMM:l(s,c),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,u,2),ddd:l(n.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(a),HH:x.s(a,2,"0"),h:f(1),hh:f(2),a:p(a,i,!0),A:p(a,i,!1),m:String(i),mm:x.s(i,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:o};return r.replace(y,(function(t,e){return e||d[t]||o.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,i,d){var h,v=x.p(i),y=O(r),m=(y.utcOffset()-this.utcOffset())*e,g=this-y,b=x.m(this,y);return b=(h={},h[p]=b/12,h[l]=b,h[f]=b/3,h[s]=(g-m)/6048e5,h[u]=(g-m)/864e5,h[c]=g/n,h[a]=g/e,h[o]=g/t,h)[v]||g,d?b:x.a(b)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return $[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return x.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},i}(),M=D.prototype;return O.prototype=M,[["$ms",r],["$s",o],["$m",a],["$H",c],["$W",u],["$M",l],["$y",p],["$D",d]].forEach((function(t){M[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,D,O),t.$i=!0),O},O.locale=S,O.isDayjs=_,O.unix=function(t){return O(1e3*t)},O.en=$[w],O.Ls=$,O.p={},O}()})),He=e((function(t,e){t.exports=function(t,e,n){var r=e.prototype,o=r.format;n.en.ordinal=function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"},r.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return o.bind(this)(t);var r=this.$utils(),a=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return n.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return n.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}}));return o.bind(this)(a)}}})),Ie=e((function(t,e){var n;t.exports=(n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},function(t,e,r){var o=e.prototype,a=o.format;r.en.formats=n,o.format=function(t){void 0===t&&(t="YYYY-MM-DDTHH:mm:ssZ");var e=this.$locale().formats,r=function(t,e){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,r,o){var a=o&&o.toUpperCase();return r||e[o]||n[o]||e[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(t,e,n){return e||n.slice(1)}))}))}(t,void 0===e?{}:e);return a.call(this,r)}})}));function ze(t,e){var n=Ue(t);return n.isValid()?n.format(e):t}function We(t){var e,n=t.type,r=t.chart,o=t.imagePrefix,a=t.apiDomain,i=t.downloadFormats,c=t.downloadFilenameTemplate,u=t.settings,s=function(){var t=!1;try{t=window.parent&&window.parent!==window.self&&window.parent.dw&&window.parent.dw.backend}catch(t){}return t}(),l=s?"".concat(window.location.protocol,"//").concat(a):o;s&&(e=dw.notify({icon:'<i style="margin-right:10px;" class="fa fa-spin fa-circle-o-notch"></i>',translateKey:"chart-notification / download / ".concat(n),closeable:!1}));var f,p,d=(0,dw.utils.templateParser)(c||"{{ LOWER(title) }}"),h=function(t){var e=[{label:"Title",name:"title",type:"text",chartProperty:"title",value:"Example Title"},{label:"Published At",name:"published_at",type:"date",chartProperty:"publishedAt",value:"2022-03-24T13:49:07.232Z"},{label:"Public ID",name:"public_id",type:"text",chartProperty:"publicId",value:"Abc12"},{label:"Public Version",name:"public_version",type:"number",chartProperty:"publicVersion",value:1},{label:"Language",name:"language",type:"text",chartProperty:"language",value:"en-US"},{label:"Intro",name:"intro",type:"text",chartProperty:"metadata.describe.intro",value:"Example Intro"},{label:"Byline",name:"byline",type:"text",chartProperty:"metadata.describe.byline",value:"Example Byline"}],n=(t.customFields||[]).filter((function(t){return t.key})).map((function(t){var e=t.key,n=t.title;return{label:"".concat(n," (Custom)"),name:e,type:"text",chartProperty:"metadata.custom.".concat(e),value:"Example Custom Field"}}));return e.push.apply(e,g(n)),e}(u),v=(f=h.map((function(t){return t.name.toString().toLowerCase().replace(/\s+/g,"_").replace(/[^\w-]+/g,"").replace(/-/g,"_").replace(/__+/g,"_").replace(/^_+/,"").replace(/_+$/,"").replace(/^(\d)/,"_$1").replace(/^(and|or|in|true|false)$/,"$1_")})),p=new Set,f.map((function(t){for(var e=t,n=0;p.has(e);)e="".concat(t,"_").concat(++n);return p.add(e),e}))),y={FORMAT:ze};v.forEach((function(t,e){var n=Fe(r,h[e].chartProperty,"");y[t]=n,"number"===h[e].type&&["min","max","sum","mean","median"].forEach((function(e){y["".concat(t,"__").concat(e)]=n}))}));var m=d(y).replace(/[^\w\d.]+/g,"-"),b=i[n].filename,w=s?"/v3/charts/".concat(r.id,"/export/").concat(n):"/".concat(r.publicId,"/").concat(b,".").concat(n);s?(delete i[n].filename,lt.post(w,{baseUrl:l,raw:!0,payload:i[n]}).then((function(t){return t.blob()})).then((function(t){e(),tt(t,"".concat(m,".").concat(n),"image/".concat(n))})).catch((function(){e(),dw.notify({translateKey:"chart-notification / download / fail / ".concat(n),closeable:!0,type:"error"})}))):lt.get(w,{baseUrl:l,raw:!0}).then((function(t){return t.blob()})).then((function(t){return tt(t,"".concat(m,".").concat(n),"image/".concat(n))})).catch((function(){window.open(w)}))}function Be(t){let e,n,r;return{c(){e=P("a"),L(e,"class","chart-action-image"),L(e,"href","#")},m(o,a){T(o,e,a),e.innerHTML=t[1],n||(r=A(e,"click",E(t[8])),n=!0)},p(t,[n]){2&n&&(e.innerHTML=t[1])},i:S,o:S,d(t){t&&k(e),n=!1,r()}}}function Ne(t,e,n){let{props:r}=e;const{get:o,__:a,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l}=r;let f,p,d;return t.$set=t=>{"props"in t&&n(7,r=t.props)},t.$$.update=()=>{128&t.$$.dirty&&n(0,f=r.chart),128&t.$$.dirty&&n(9,p=r.theme),512&t.$$.dirty&&n(1,d=o(p,"data.options.blocks.download-image.data.caption",a("Download Image")))},[f,d,i,c,u,s,l,r,()=>We({type:"png",chart:f,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l})]}Ue.extend(He),Ue.extend(Ie),Ue.extend((function(t,e){var n=e.prototype,r=n.format;n.format=function(t){var e=this,n=t||"YYYY-MM-DDTHH:mm:ssZ",o=this.$locale().seasonSeparator||"-",a=n.replace(/(\[[^\]]+])|BB|B/g,(function(t,n){var r,a,i=e.$y,c=i+1,u="B"===t,s=u?[String(i).slice(-2),2]:[i,4],l=[String(c).slice(-2),2];return n||"".concat(u?"'":"").concat((r=e.$utils()).s.apply(r,s.concat(["0"]))).concat(o).concat(u?"'":"").concat((a=e.$utils()).s.apply(a,l.concat(["0"])))}));return r.bind(this)(a)}}));class Ge extends Q{constructor(t){super(),K(this,t,Ne,Be,j,{props:7})}}function Ve(t){let e,n,r;return{c(){e=P("a"),L(e,"class","chart-action-pdf"),L(e,"href","#")},m(o,a){T(o,e,a),e.innerHTML=t[1],n||(r=A(e,"click",E(t[8])),n=!0)},p(t,[n]){2&n&&(e.innerHTML=t[1])},i:S,o:S,d(t){t&&k(e),n=!1,r()}}}function Ze(t,e,n){let{props:r}=e;const{get:o,__:a,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l}=r;let f,p,d;return t.$set=t=>{"props"in t&&n(7,r=t.props)},t.$$.update=()=>{128&t.$$.dirty&&n(0,f=r.chart),128&t.$$.dirty&&n(9,p=r.theme),512&t.$$.dirty&&n(1,d=o(p,"data.options.blocks.download-pdf.data.caption",a("Download PDF")))},[f,d,i,c,u,s,l,r,()=>We({type:"pdf",chart:f,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l})]}class Je extends Q{constructor(t){super(),K(this,t,Ze,Ve,j,{props:7})}}function qe(t){let e,n,r;return{c(){e=P("a"),L(e,"class","chart-action-svg"),L(e,"href","#")},m(o,a){T(o,e,a),e.innerHTML=t[1],n||(r=A(e,"click",E(t[8])),n=!0)},p(t,[n]){2&n&&(e.innerHTML=t[1])},i:S,o:S,d(t){t&&k(e),n=!1,r()}}}function Xe(t,e,n){let{props:r}=e;const{get:o,__:a,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l}=r;let f,p,d;return t.$set=t=>{"props"in t&&n(7,r=t.props)},t.$$.update=()=>{128&t.$$.dirty&&n(0,f=r.chart),128&t.$$.dirty&&n(9,p=r.theme),512&t.$$.dirty&&n(1,d=o(p,"data.options.blocks.download-svg.data.caption",a("Download SVG")))},[f,d,i,c,u,s,l,r,()=>We({type:"svg",chart:f,imagePrefix:i,apiDomain:c,downloadFormats:u,downloadFilenameTemplate:s,settings:l})]}class Ke extends Q{constructor(t){super(),K(this,t,Xe,qe,j,{props:7})}}function Qe(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e)return t;for(var r=Array.isArray(e)?e:e.split("."),o=t,a=0;a<r.length&&null!=o;a++)o=o[r[a]];return null==o?n:o}Object.assign(Ge,{test:function(t){var e=t.chart,n=t.isStyleStatic;return!!Qe(e,"metadata.publish.blocks.download-image")&&!n}}),Object.assign(Je,{test:function(t){var e=t.chart,n=t.isStyleStatic;return!!Qe(e,"metadata.publish.blocks.download-pdf")&&!n}}),Object.assign(Ke,{test:function(t){var e=t.chart,n=t.isStyleStatic;return!!Qe(e,"metadata.publish.blocks.download-svg")&&!n}}),dw.block.register("DownloadImage",Ge),dw.block.register("DownloadPDF",Je),dw.block.register("DownloadSVG",Ke)}();