(()=>{function e(e){return e&&e.__esModule?e.default:e}const t=(...e)=>{console.log("CovOne Helper:",...e)},o=()=>{HTMLElement.prototype.trigger=function(e){var t=document.createEvent("HTMLEvents");t.initEvent(e,!0,!0),this.dispatchEvent(t)}},n=(e,t=2e3,o=10)=>new Promise(((n,r)=>{const i=t/o;let c=0;const a=()=>{const t=document.querySelector(e);t?n(t):++c>=o?r("Element does not exist."):setTimeout(a,i)};a()}));const r=(e,t)=>(e.page.map(((o,n)=>{o.output.map(((o,r)=>{const i=JSON.stringify(o),c=t(o,r);c&&(console.log(n,r,i,JSON.stringify(c)),e.page[n].output[r]=c)}))})),e),i=(e,t)=>{const o=r(JSON.parse(e),((e,o)=>t.find((t=>t===e.fieldCode))?(e.type="NUM",e):null));console.log(JSON.stringify(o))},c=(e,t)=>{const o=r(JSON.parse(e),((e,o)=>{if("item_char"===e.mode)return e.fontSize=t,e}));console.log(JSON.stringify(o))};const a=async()=>(await kintone.api(kintone.api.url("/k/v1/apps",!0),"GET",{})).apps;var s={};const p=/\s+at.*[(\s](.*)\)?/,l=/^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,d=void 0===e(s).homedir?"":e(s).homedir().replace(/\\/g,"/");function u(e,{pretty:t=!1,basePath:o}={}){const n=o&&new RegExp(`(at | \\()${function(e){if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(o.replace(/\\/g,"/"))}`,"g");if("string"==typeof e)return e.replace(/\\/g,"/").split("\n").filter((e=>{const t=e.match(p);if(null===t||!t[1])return!0;const o=t[1];return!o.includes(".app/Contents/Resources/electron.asar")&&!o.includes(".app/Contents/Resources/default_app.asar")&&!l.test(o)})).filter((e=>""!==e.trim())).map((e=>(n&&(e=e.replace(n,"$1")),t&&(e=e.replace(p,((e,t)=>e.replace(t,t.replace(d,"~"))))),e))).join("\n")}class g extends Error{#e;name="AggregateError";constructor(e){if(!Array.isArray(e))throw new TypeError("Expected input to be an Array, got "+typeof e);let t=(e=e.map((e=>e instanceof Error?e:null!==e&&"object"==typeof e?Object.assign(new Error(e.message),e):new Error(e)))).map((e=>"string"==typeof e.stack?u(e.stack).replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,""):String(e))).join("\n");t="\n"+function(e,t=1,o={}){const{indent:n=" ",includeEmptyLines:r=!1}=o;if("string"!=typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!=typeof t)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);if(t<0)throw new RangeError(`Expected \`count\` to be at least 0, got \`${t}\``);if("string"!=typeof n)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n}\``);if(0===t)return e;const i=r?/^/gm:/^(?!\s*$)/gm;return e.replace(i,n.repeat(t))}(t,4),super(t),this.#e=e}get errors(){return this.#e.slice()}}const y=Symbol("skip"),f=async()=>{const e=await a();console.log(e);const t=[];for(let o=1;o<=42;o++){const n=e.find((e=>!!e.name.match(new RegExp(`^CovOne_F${o}[^0-9].+$`))));t.push({id:n?n.appId:-1,name:`F${o}`})}console.log(t);let o="";t.forEach((e=>{o+=`${-1!=e.id?e.id:""}\t${e.name}\n`})),console.log(o);let n="";t.forEach((e=>{-1!=e.id&&(n+=`${e.id},`)})),console.log(n)},m=async(e,t="")=>{const o=await a();console.log(o),await async function(e,t,{concurrency:o=Number.POSITIVE_INFINITY,stopOnError:n=!0}={}){return new Promise(((r,i)=>{if(void 0===e[Symbol.iterator]&&void 0===e[Symbol.asyncIterator])throw new TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);if("function"!=typeof t)throw new TypeError("Mapper function is required");if(!Number.isSafeInteger(o)&&o!==Number.POSITIVE_INFINITY||!(o>=1))throw new TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${o}\` (${typeof o})`);const c=[],a=[],s=new Map;let p=!1,l=!1,d=!1,u=0,f=0;const m=void 0===e[Symbol.iterator]?e[Symbol.asyncIterator]():e[Symbol.iterator](),h=e=>{p=!0,l=!0,i(e)},w=async()=>{if(l)return;const e=await m.next(),o=f;if(f++,e.done){if(d=!0,0===u&&!l){if(!n&&a.length>0)return void h(new g(a));if(l=!0,!s.size)return void r(c);const e=[];for(const[t,o]of c.entries())s.get(t)!==y&&e.push(o);r(e)}}else u++,(async()=>{try{const n=await e.value;if(l)return;const r=await t(n,o);r===y&&s.set(o,r),c[o]=r,u--,await w()}catch(e){if(n)h(e);else{a.push(e),u--;try{await w()}catch(e){h(e)}}}})()};(async()=>{for(let e=0;e<o;e++){try{await w()}catch(e){h(e);break}if(d||p)break}})()}))}(o,(async o=>{const n=await(async e=>(await kintone.api(kintone.api.url("/k/v1/app/form/fields",!0),"GET",{app:e})).properties)(o.appId),r=Object.keys(n).find((t=>t.match(new RegExp(`^${e}$`))));r&&console.log("app",o.appId,o.name,""!=t?n[r][t]:n[r])}))};t("Main Version","202203011932"),(()=>{const e=e=>{o();const n=document.createElement("div"),r=document.createElement("h3");r.innerText="Bok Helper";const i=document.createElement("button");i.innerText="クリップボードからコマンドを反映",i.setAttribute("id","apply-command"),i.addEventListener("click",(async e=>{const t=await navigator.clipboard.readText();if(t)try{const e=t.split(":"),o=e[1].split(","),n=e[0].split(",");for(const[e,t]of o.entries()){let o=n[e];if(!o)continue;console.log(t,o);const r=document.querySelector(`.BoKpdf_prop_value_${t}`);if(console.log(r),r){if("fieldcode"===t&&"現在日時"===o&&(o="&DATE"),"fieldcode"===t&&!r.querySelector(`option[value="${o}"]`))continue;if(o.match(/^\!.+/))continue;r.value=o,r.focus(),"SELECT"===r.nodeName?r.trigger("change"):(r.trigger("change"),r.trigger("keyup"))}else{const e=document.querySelector(`[name=BoKpdf_prop_value_${t}][value=${o}]`);if(!e)continue;e.checked=!0,e.focus(),e.trigger("change")}}}catch(e){return void alert("コマンドの実行に失敗しました\n"+e.message)}}));const c=document.createElement("blockquote");c.innerText="\n複製: Ctrl + d\n削除: Ctrl + Backspace\nツールバー選択: Ctrl + 1-6\nコマンド適用: Ctrl + a\n",n.appendChild(r),n.appendChild(i),n.appendChild(c),e.appendChild(n),document.addEventListener("keydown",(async e=>e.ctrlKey&&"d"===e.key?(t("Shortcut","Dupulicate"),document.querySelector(".reportpdf_report_config_dialog_itemCopy").trigger("click"),await(async e=>{await new Promise((t=>setTimeout(t,e)))})(100),document.querySelector(".reportpdf_report_config_dialog_itemPaste").trigger("click"),!1):e.ctrlKey&&"Backspace"===e.key?(t("Shortcut","Delete"),document.querySelector(".reportpdf_report_config_dialog_itemRemove").trigger("click"),!1):e.ctrlKey&&"a"===e.key?(t("Shortcut","Apply Command"),document.querySelector("#apply-command").trigger("click"),!1):e.ctrlKey&&e.key.match(/[1-6]/)?(t("Shortcut","Toolbox",e.key),document.querySelector(`.reportpdf_report_toolbox:nth-child(${e.key})`).trigger("click"),!1):void 0))};(async()=>{try{(await n("#kintoneplugin-pattern-tbody > tr:nth-child(2) > td:nth-child(5) > div > div > div > button.template_setting",3e3)).addEventListener("click",(async()=>{const t=await n("#ui-id-1 > table > tbody > tr > td:nth-child(3) > table > tbody > tr:nth-child(2) > td",2e3);e(t)}),{once:!0}),t("Bok installed")}catch(e){t("Bok not installed",e)}})()})(),window.bokData={bokDataNum:i,bokDataFontSize:c},window.app={getAppsId:f,getRelatedFieldApps:m}})();
//# sourceMappingURL=main.js.map
