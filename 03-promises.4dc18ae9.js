var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const l=document.querySelector(".form"),r=document.querySelector("[name=delay]"),s=document.querySelector("[name=step]"),u=document.querySelector("[name=amount]");let d=0;function a(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}l.addEventListener("submit",(function(e){e.preventDefault(),setTimeout((()=>{for(let e=0;e<u.value;e+=1){const o=+r.value+ +s.value*e;d=e+1,a(d,o).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o} ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o} ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o} ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o} ms`)}))}}),r.value)}));
//# sourceMappingURL=03-promises.4dc18ae9.js.map
