// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Object.prototype.hasOwnProperty;function e(e,t){return null!=e&&r.call(e,t)}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function i(r){return"number"==typeof r}function a(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+a(i):a(i)+r,n&&(r="-"+r)),r}var c=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function u(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!i(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=o(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=o(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var l=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,w=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function S(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":l(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,v,"e"),t=g.call(t,y,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,h,"e-0$1"),r.alternate&&(t=g.call(t,b,"$1."),t=g.call(t,w,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f.call(r.specifier)?f.call(t):p.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,j=Array.isArray;function T(r){return r!=r}function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,i,a,c,s,l,p,f,g,d,h;if(!j(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(i=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=S(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+_(h):_(h)+f)),c+=n.arg||"",s+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function O(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(O(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){var e,t;if("string"!=typeof r)throw new TypeError(V("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[A(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var $=Object.prototype,F=$.toString,C=$.__defineGetter__,P=$.__defineSetter__,N=$.__lookupGetter__,R=$.__lookupSetter__;var D=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?n:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(V("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(V("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=$,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&C&&C.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function G(r,e,t){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return W&&"symbol"==typeof Symbol.toStringTag}var M=Object.prototype.toString;var U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";var Y=Z()?function(r){var t,n,i;if(null==r)return M.call(r);n=r[X],t=e(r,X);try{r[X]=void 0}catch(e){return M.call(r)}return i=M.call(r),t?r[X]=n:delete r[X],i}:function(r){return M.call(r)},z=Number,q=z.prototype.toString;var B=Z();function H(r){return"object"==typeof r&&(r instanceof z||(B?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function J(r){return L(r)||H(r)}G(J,"isPrimitive",L),G(J,"isObject",H);var K=Number.POSITIVE_INFINITY,Q=z.NEGATIVE_INFINITY,rr=Math.floor;function er(r){return r<K&&r>Q&&rr(e=r)===e;var e}function tr(r){return L(r)&&er(r)}function nr(r){return H(r)&&er(r.valueOf())}function ir(r){return tr(r)||nr(r)}function ar(r){return"string"==typeof r}G(ir,"isPrimitive",tr),G(ir,"isObject",nr);var or=String.prototype.valueOf;var cr=Z();function sr(r){return"object"==typeof r&&(r instanceof String||(cr?function(r){try{return or.call(r),!0}catch(r){return!1}}(r):"[object String]"===Y(r)))}function ur(r){return ar(r)||sr(r)}G(ur,"isPrimitive",ar),G(ur,"isObject",sr);var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};function pr(r){return"object"==typeof r&&null!==r&&!lr(r)}function fr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var gr=Math.round,dr=Math.ceil,hr=/^\d{10}$|^\d{13}$/,br=["floor","ceil","round"];function wr(r,e){var t;if("string"===(t=typeof r)){if((r=Date.parse(r))!=r)throw new Error(fr("00b2R",e.toLowerCase()));r=new Date(r)}if("number"===t){if(!hr.test(r))throw new Error(fr("00b2S",e.toLowerCase()));10===r.toString().length&&(r*=1e3),r=new Date(r)}if(!(r instanceof Date))throw new TypeError(fr("00b2T",e));return r}function yr(r,t,n,i){var a,o,c,s,u,l,p,f,g;if(o=100,c=!0,a={round:"floor"},r=wr(r,"Start"),t=wr(t,"Stop"),arguments.length>2){if(3===arguments.length?pr(n)?a=n:(o=n,c=!1):(a=i,o=n),0===o)return[];if(!ir(o)||o<0)throw new TypeError(fr("00b2U",o));if(c){if(!pr(a))throw new TypeError(fr("00b2V",a));if(e(a,"round")){if(!ar(a.round))throw new TypeError(fr("00b2W","round",a.round));if(-1===br.indexOf(a.round))throw new Error(fr("00b4S","round",br.join('", "'),a.round))}}}switch(a.round){case"round":l=gr;break;case"ceil":l=dr;break;default:l=rr}for(u=o-1,f=(t.getTime()-r.getTime())/u,p=r,(s=new Array(o))[0]=p,p=p.getTime(),g=1;g<u;g++)p+=f,s[g]=new Date(l(p));return s[u]=t,s}export{yr as default};
//# sourceMappingURL=mod.js.map
