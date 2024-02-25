// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@v0.2.1-esm/index.mjs";var m=/^\d{10}$|^\d{13}$/,a=["floor","ceil","round"];function f(r,e){var t;if("string"===(t=typeof r)){if((r=Date.parse(r))!=r)throw new Error(o("00b2R",e.toLowerCase()));r=new Date(r)}if("number"===t){if(!m.test(r))throw new Error(o("00b2S",e.toLowerCase()));10===r.toString().length&&(r*=1e3),r=new Date(r)}if(!(r instanceof Date))throw new TypeError(o("00b2T",e));return r}function h(m,h,l,p){var j,b,w,c,u,g,v,x,T;if(b=100,w=!0,j={round:"floor"},m=f(m,"Start"),h=f(h,"Stop"),arguments.length>2){if(3===arguments.length?s(l)?j=l:(b=l,w=!1):(j=p,b=l),0===b)return[];if(!e(b)||b<0)throw new TypeError(o("00b2U",b));if(w){if(!s(j))throw new TypeError(o("00b2V",j));if(r(j,"round")){if(!t(j.round))throw new TypeError(o("00b2W","round",j.round));if(-1===a.indexOf(j.round))throw new Error(o("00b4S","round",a.join('", "'),j.round))}}}switch(j.round){case"round":g=n;break;case"ceil":g=d;break;default:g=i}for(u=b-1,x=(h.getTime()-m.getTime())/u,v=m,(c=new Array(b))[0]=v,v=v.getTime(),T=1;T<u;T++)v+=x,c[T]=new Date(g(v));return c[u]=h,c}export{h as default};
//# sourceMappingURL=index.mjs.map
