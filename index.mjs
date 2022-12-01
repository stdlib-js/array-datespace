// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ceil@esm/index.mjs";var m=/^\d{10}$|^\d{13}$/,a=["floor","ceil","round"];function f(e,r){var t;if("string"===(t=typeof e)){if((e=Date.parse(e))!=e)throw new Error(i("00I2d",r.toLowerCase()));e=new Date(e)}if("number"===t){if(!m.test(e))throw new Error(i("00I2e",r.toLowerCase()));10===e.toString().length&&(e*=1e3),e=new Date(e)}if(!(e instanceof Date))throw new TypeError(i("00I2f",r));return e}function h(m,h,l,p){var j,w,c,g,u,b,v,x,y;if(w=100,c=!0,j={round:"floor"},m=f(m,"Start"),h=f(h,"Stop"),arguments.length>2){if(3===arguments.length?s(l)?j=l:(w=l,c=!1):(j=p,w=l),0===w)return[];if(!r(w)||w<0)throw new TypeError(i("00I2g",w));if(c){if(!s(j))throw new TypeError(i("00I2h",j));if(e(j,"round")){if(!t(j.round))throw new TypeError(i("00I2i","round",j.round));if(-1===a.indexOf(j.round))throw new Error(i("00I3t","round",a.join('", "'),j.round))}}}switch(j.round){case"round":b=n;break;case"ceil":b=d;break;default:b=o}for(u=w-1,x=(h.getTime()-m.getTime())/u,v=m,(g=new Array(w))[0]=v,v=v.getTime(),y=1;y<u;y++)v+=x,g[y]=new Date(b(v));return g[u]=h,g}export{h as default};
//# sourceMappingURL=index.mjs.map
