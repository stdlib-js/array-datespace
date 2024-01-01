// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Object.prototype.hasOwnProperty;function r(r,t){return null!=r&&e.call(r,t)}var t="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function i(e){return"number"==typeof e}function a(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function o(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+a(i):a(i)+e,n&&(e="-"+e)),e}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function u(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=o(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=o(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===s.call(e.specifier)?s.call(t):c.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function l(e){return"string"==typeof e}var p=Math.abs,f=String.prototype.toLowerCase,g=String.prototype.toUpperCase,d=String.prototype.replace,h=/e\+(\d)$/,b=/e-(\d)$/,w=/^(\d+)$/,y=/^(\d+)e/,m=/\.0$/,v=/\.0*e/,S=/(\..*[^0])0*e/;function _(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=d.call(t,S,"$1e"),t=d.call(t,v,"e"),t=d.call(t,m,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=d.call(t,h,"e+0$1"),t=d.call(t,b,"e-0$1"),e.alternate&&(t=d.call(t,w,"$1."),t=d.call(t,y,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===g.call(e.specifier)?g.call(t):f.call(t)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function j(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,x=isNaN,k=Array.isArray;function O(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,a,c,s,p,f;if(!k(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",s=1,p=0;p<e.length;p++)if(l(n=e[p]))c+=n;else{if(r=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,x(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,x(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!x(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=x(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),c+=n.arg||"",s+=1}return c}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,n,i;for(t=[],i=0,n=A.exec(e);n;)(r=e.slice(i,A.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=A.lastIndex,n=A.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function N(e){var r,t,n;if(!F(e))throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var P=Object.prototype,C=P.toString,D=P.__defineGetter__,L=P.__defineSetter__,R=P.__lookupGetter__,G=P.__lookupSetter__,U=function(){try{return t({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=P,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&D&&D.call(e,r,t.get),o&&L&&L.call(e,r,t.set),e};function Z(e,r,t){U(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function M(e){return"number"==typeof e}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return W&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString,Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"",q=J()?function(e){var t,n,i;if(null==e)return X.call(e);n=e[z],t=r(e,z);try{e[z]=void 0}catch(r){return X.call(e)}return i=X.call(e),t?e[z]=n:delete e[z],i}:function(e){return X.call(e)},B=Number,H=B.prototype.toString,K=J();function Q(e){return"object"==typeof e&&(e instanceof B||(K?function(e){try{return H.call(e),!0}catch(e){return!1}}(e):"[object Number]"===q(e)))}function ee(e){return M(e)||Q(e)}Z(ee,"isPrimitive",M),Z(ee,"isObject",Q);var re=Number.POSITIVE_INFINITY,te=B.NEGATIVE_INFINITY,ne=Math.floor;function ie(e){return e<re&&e>te&&ne(r=e)===r;var r}function ae(e){return M(e)&&ie(e)}function oe(e){return Q(e)&&ie(e.valueOf())}function ce(e){return ae(e)||oe(e)}function se(e){return"string"==typeof e}Z(ce,"isPrimitive",ae),Z(ce,"isObject",oe);var ue=String.prototype.valueOf,le=J();function pe(e){return"object"==typeof e&&(e instanceof String||(le?function(e){try{return ue.call(e),!0}catch(e){return!1}}(e):"[object String]"===q(e)))}function fe(e){return se(e)||pe(e)}Z(fe,"isPrimitive",se),Z(fe,"isObject",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===q(e)};function de(e){return"object"==typeof e&&null!==e&&!ge(e)}var he=Math.round,be=Math.ceil,we=/^\d{10}$|^\d{13}$/,ye=["floor","ceil","round"];function me(e,r){var t;if("string"==(t=typeof e)){if((e=Date.parse(e))!=e)throw new Error(N("invalid argument. Unable to parse %s date.",r.toLowerCase()));e=new Date(e)}if("number"===t){if(!we.test(e))throw new Error(N("invalid argument. Numeric %s date must be either a Unix or JavaScript timestamp.",r.toLowerCase()));10===e.toString().length&&(e*=1e3),e=new Date(e)}if(!(e instanceof Date))throw new TypeError(N("invalid argument. %s date must either be a date string, Date object, Unix timestamp, or JavaScript timestamp.",r));return e}return function(e,t,n,i){var a,o,c,s,u,l,p,f,g;if(o=100,c=!0,a={round:"floor"},e=me(e,"Start"),t=me(t,"Stop"),arguments.length>2){if(3===arguments.length?de(n)?a=n:(o=n,c=!1):(a=i,o=n),0===o)return[];if(!ce(o)||o<0)throw new TypeError(N("invalid argument. Length must be a positive integer. Value: `%s`.",o));if(c){if(!de(a))throw new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",a));if(r(a,"round")){if(!se(a.round))throw new TypeError(N("invalid option. `%s` option must be a string. Option: `%s`.","round",a.round));if(-1===ye.indexOf(a.round))throw new Error(N('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"round",ye.join('", "'),a.round))}}}switch(a.round){case"round":l=he;break;case"ceil":l=be;break;default:l=ne}for(u=o-1,f=(t.getTime()-e.getTime())/u,p=e,(s=new Array(o))[0]=p,p=p.getTime(),g=1;g<u;g++)p+=f,s[g]=new Date(l(p));return s[u]=t,s}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).datespace=r();
//# sourceMappingURL=browser.js.map
