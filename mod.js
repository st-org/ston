var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t=!1){let n=0,i=!1,o=!1,s=0,r=!1;const l=[];for(let c=0;c<e.length;c++){if(!0===o){o=!1;continue}const a=e[c];if("line"!==r)if("block"!==r)if("'"!==a){if(i)"\\"===a&&(o=!0);else if("{"!==a&&"["!==a)if("}"!==a&&"]"!==a){if(!(n>0))if(","!==a&&"\n"!==a){if(!(s<c))if(0!==a.trimEnd().length){if("/"===a){const t=e[c+1];if("/"===t){c++,r="line",s=c+1;continue}if("*"===t){c++,r="block",s=c+1;continue}}}else s=c+1}else{const t=e.slice(s,c).trimEnd();t.length>0&&l.push(t),s=c+1}}else{if(n--,n<0){const t=e.slice(s,c).trimEnd();t.length>0&&l.push(t);break}0===n&&(l.push(e.slice(s,c+1)),s=c+1)}else if(n++,1===n&&!t){const t=e.slice(s,c).trimEnd();t.length>0&&l.push(t),s=c}}else{if(!i){if(i=!0,0===n&&!t){const t=e.slice(s,c).trimEnd();t.length>0&&l.push(t),s=c}continue}i=!1,0===n&&(l.push(e.slice(s,c+1)),s=c+1)}else"*"===a&&"/"===e[c+1]&&(c++,r=!1),s=c+1;else"\n"===a&&(r=!1),s=c+1}if(!i&&0===n){const t=e.slice(s).trimEnd();t.length>0&&l.push(t)}return l}function i(e,t,n=!1){let i=0,o=!1,s=!1,r=0,l=!1,c=[];const a=[];for(let u=0;u<e.length;u++){if(!0===s){s=!1;continue}const d=e[u];if("line"!==l)if("block"!==l)if("'"!==d){if(o)"\\"===d&&(s=!0);else if("{"!==d&&"["!==d)if("}"!==d&&"]"!==d){if(!(i>0))if(","!==d&&"\n"!==d){if(!(r<u))if(0!==d.trimEnd().length){if("/"===d){const t=e[u+1];if("/"===t){r=u,u++,l="line";continue}if("*"===t){r=u,u++,l="block";continue}}}else r=u+1}else{const n=e.slice(r,u).trimEnd();n.length>0&&(a.push({value:n,index:t+r,comment:c.join("\n")}),c=[]),r=u+1}}else{if(i--,i<0){const n=e.slice(r,u).trimEnd();n.length>0&&(a.push({value:n,index:t+r,comment:c.join("\n")}),c=[]);break}0===i&&(a.push({value:e.slice(r,u+1),index:t+r,comment:c.join("\n")}),c=[],r=u+1)}else if(i++,1===i&&!n){const n=e.slice(r,u).trimEnd();n.length>0&&(a.push({value:n,index:t+r,comment:c.join("\n")}),c=[]),r=u}}else{if(!o){if(o=!0,0===i&&!n){const n=e.slice(r,u).trimEnd();n.length>0&&(a.push({value:n,index:t+r,comment:c.join("\n")}),c=[]),r=u}continue}o=!1,0===i&&(a.push({value:e.slice(r,u+1),index:t+r,comment:c.join("\n")}),c=[],r=u+1)}else"*"===d&&"/"===e[u+1]&&(u++,l=!1,c.push(e.slice(r,u+1).replace(/\n[ ]*/g,"\n ")),r=u+1);else"\n"===d&&(l=!1,c.push(e.slice(r,u).trimEnd()),r=u+1)}if(!o&&0===i&&!1===l){const n=e.slice(r).trimEnd();n.length>0&&a.push({value:n,index:t+r,comment:c.join("\n")})}return a}function o(e){const t=[];let n=!1;for(const i of e)if(!0!==n)if("\\"!==i){if("'"===i)break;t.push(i)}else n=!0;else n=!1,"\\"!==i&&"'"!==i&&t.push("\\"),t.push(i);return t.join("")}function s(e){if(0===(e=e.trimStart()).length)return;const t=e[0];return"'"===t?o(e.slice(1)):"["===t?function(e){const t=[];for(const i of n(e)){const e=s(i);if(void 0===e)return;t.push(e)}return t}(e.slice(1)):"{"===t?function(e){const t={};for(const i of n(e,!0)){const e=i.match(/^\s*([\w-]+)/);if(null===e){const e=s(i);if(void 0===e)return;t.__=e;continue}const n=e[1],o=e[0].length;let r=i.slice(o).trimEnd();if(0===r.length)t[n]=!0;else{const e=s(r);if(void 0===e)return;t[n]=e}}return t}(e.slice(1)):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}function r(e,t=0,n=""){t+=e.length;const s=function(e,t){if(0===e.length)return;const n=e[0];return"'"===n?o(e.slice(1)):"["===n?function(e,t){const n=[];for(const{value:o,index:s,comment:l}of i(e,t)){const e=r(o,s,l);if(void 0===e)return;n.push(e)}return n}(e.slice(1),t+1):"{"===n?function(e,t){const n={};for(const{value:o,index:s,comment:l}of i(e,t,!0)){const e=o.match(/^\s*([\w-]+)/);if(null===e){const e=r(o,s,l);if(void 0===e)return;n.__=e;continue}const t=e[1],i=e[0].length;let c=o.slice(i).trimEnd();if(0===c.length)n[t]={value:!0,index:s+i,comment:l};else{const e=r(c,s+i,l);if(void 0===e)return;n[t]=e}}return n}(e.slice(1),t+1):"true"===(e=e.trimEnd())||"false"!==e&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)?Number(e):/[',{}\[\]\n\r]/.test(e)?void 0:e)}(e=e.trimStart(),t-=e.length);if(void 0!==s)return{value:s,index:t,comment:n}}function l(e,t){if(t&&e.length>0&&e[0].trim().length>0&&(1===e.length||e[e.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(e)&&"true"!==e&&"false"!==e&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(e)&&!e.startsWith("//")&&!e.startsWith("/*"))return e;const n=["'"];for(let t=0;t<e.length;t++){const i=e[t];if("\\"!==i)"'"!==i?n.push(i):n.push("\\'");else{if(t===e.length-1){n.push("\\\\");break}const o=e[t+1];if("\\"===o||"'"===o){n.push("\\\\");continue}n.push(i)}}return n.push("'"),n.join("")}function c(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:i,indentTarget:o,useUnquotedString:s}){o=o??"none",i=i??0,t=t??"never";const r=[],l=e.length>1&&("all"===o||"array"===o||"arrayInObjectAndThis"===o),a=i+(l?1:0);"arrayInObjectAndThis"===o&&(o="arrayInObject");const u="always"===n||"afterComma"===n?", ":",";let d;for(let i=0;i<e.length;i++){let f;f=void 0===d?c(e[i],{indentTarget:o,indentLevel:a,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:s}):d,i!==e.length-1&&(d=c(e[i+1],{indentTarget:o,indentLevel:a,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:s})),l||i===e.length-1||"always"!==t&&(f.endsWith("'")||f.endsWith("}")||f.endsWith("]")||void 0!==d&&(d.endsWith("'")||d.endsWith("}")||d.endsWith("]")))?r.push(f):r.push(f+u)}if(l){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`[${t}${r.join(t)}${e}]`}return`[${r.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:i,indentTarget:o,useUnquotedString:s}){o=o??"none",i=i??0,t=t??"never";const r=[],l=Object.keys(e),a=l.length>1&&("all"===o||"object"===o),u=i+(a?1:0);"arrayInObject"===o&&(o="arrayInObjectAndThis");const d="always"===n||"afterComma"===n?", ":",",f="always"===n||"afterKey"===n?" ":"";for(let i=0;i<l.length;i++){const h=l[i];if(null===h.match(/^[\w-]+$/))continue;const m=e[h];if(void 0===m)continue;const g=c(m,{indentTarget:o,indentLevel:u,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:"__"===h&&"string"==typeof m?void 0:s});g.startsWith("'")||g.startsWith("[")||g.startsWith("{")?a||i===l.length-1||"always"!==t&&"inObject"!==t?r.push(("__"===h?"":h+f)+g):r.push(("__"===h?"":h+f)+g+d):"true"===g?a||i===l.length-1?r.push(h):r.push(h+d):a||i===l.length-1?r.push(`${h} ${g}`):r.push(`${h} ${g}${d}`)}if(a){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`{${t}${r.join(t)}${e}}'`}return`{${r.join("")}}`}(e,t):"number"==typeof e?e.toString():"string"==typeof e?l(e,t.useUnquotedString):!0===e?"true":!1===e?"false":""}function a(e,t={}){return Array.isArray(e)?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:i,indentTarget:o,useUnquotedString:s}){o=o??"none",i=i??0,t=t??"never";const r=[],l=e.length>1&&("all"===o||"array"===o||"arrayInObjectAndThis"===o)||void 0!==e.find((e=>e.comment.length>0)),c=i+(l?1:0);"arrayInObjectAndThis"===o&&(o="arrayInObject");const u="always"===n||"afterComma"===n?", ":",";let d;for(let i=0;i<e.length;i++){const{value:f,comment:h}=e[i];let m;m=void 0===d?a(f,{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:s}):d,i!==e.length-1&&(d=a(e[i+1].value,{indentTarget:o,indentLevel:c,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:s})),l||i===e.length-1||"always"!==t&&(m.endsWith("'")||m.endsWith("}")||m.endsWith("]")||void 0!==d&&(d.endsWith("'")||d.endsWith("}")||d.endsWith("]")))?(h.length>0&&r.push(...h.split("\n")),r.push(m)):r.push(m+u)}if(l){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`[${t}${r.join(t)}${e}]`}return`[${r.join("")}]`}(e,t):"object"==typeof e?function(e,{addDecorativeComma:t,addDecorativeSpace:n,indentLevel:i,indentTarget:o,useUnquotedString:s}){o=o??"none",i=i??0,t=t??"never";const r=[],l=Object.keys(e);let c=l.length>1&&("all"===o||"object"===o);if(!c)for(const t of l){const n=e[t];if(void 0!==n&&n.comment.length>0){c=!0;break}}const u=i+(c?1:0);"arrayInObject"===o&&(o="arrayInObjectAndThis");const d="always"===n||"afterComma"===n?", ":",",f="always"===n||"afterKey"===n?" ":"";for(let i=0;i<l.length;i++){const h=l[i];if(null===h.match(/^[\w-]+$/))continue;const m=e[h];if(void 0===m)continue;const{value:g,comment:p}=m,v=a(g,{indentTarget:o,indentLevel:u,addDecorativeComma:t,addDecorativeSpace:n,useUnquotedString:"__"===h&&"string"==typeof g?void 0:s});p.length>0&&r.push(...p.split("\n")),v.startsWith("'")||v.startsWith("[")||v.startsWith("{")?c||i===l.length-1||"always"!==t&&"inObject"!==t?r.push(("__"===h?"":h+f)+v):r.push(("__"===h?"":h+f)+v+d):"true"===v?c||i===l.length-1?r.push(h):r.push(h+d):c||i===l.length-1?r.push(`${h} ${v}`):r.push(`${h} ${v}${d}`)}if(c){let e="\n";for(let t=0;t<i;t++)e+="    ";let t=e;return i>=0&&(t+="    "),`{${t}${r.join(t)}${e}}`}return`{${r.join("")}}`}(e,t):"string"==typeof e?l(e,t.useUnquotedString):"number"==typeof e?e.toString():!0===e?"true":!1===e?"false":""}e.d(t,{Qc:()=>s,Mo:()=>r,Pz:()=>c,kf:()=>a});var u=t.Qc,d=t.Mo,f=t.Pz,h=t.kf;export{u as parse,d as parseWithIndex,f as stringify,h as stringifyWithComment};