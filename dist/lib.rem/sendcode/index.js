/*! vue-ydui v1.1.0-beta-2 by YDCSS (c) 2017 Licensed MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ydui=t():e.ydui=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/dist/",t(0)}({0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SendCode=void 0;var o=n(119),i=r(o);t.SendCode=i.default},1:function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(o=e,i=e.default);var a="function"==typeof i?i.options:i;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var d=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];d[e]=function(){return t}})}return{esModule:o,exports:i,options:a}}},2:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},3:function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=c[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));c[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",l.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return g;r.parentNode.removeChild(r)}if(v){var i=p++;r=f||(f=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var d="undefined"!=typeof document,u=n(4),c={},l=d&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,h=!1,g=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var o=u(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=c[s.id];a.refs--,n.push(a)}t?(o=u(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var d=0;d<a.parts.length;d++)a.parts[d]();delete c[a.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},4:function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],d=i[2],u=i[3],c={id:e+":"+o,css:a,media:d,sourceMap:u};r[s]?r[s].parts.push(c):n.push(r[s]={id:s,parts:[c]})}return n}},5:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=function(e){e.preventDefault(),e.stopPropagation()},t=!1;return{lock:function(n){t||(t=!0,(n||document).addEventListener("touchmove",e))},unlock:function(n){t=!1,(n||document).removeEventListener("touchmove",e)}}}(),r=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),o=function(e){var t=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,n=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,r=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return t.test(e)||n.test(e)||r.test(e)},i=function(e){for(var t=e;t&&"HTML"!==t.tagName&&"BODY"!==t.tagName&&1===t.nodeType;){var n=document.defaultView.getComputedStyle(t).overflowY;if("scroll"===n||"auto"===n)return t;t=t.parentNode}return window},s=function(e,t){var n=e===window?document.body.offsetHeight:e.offsetHeight,r=e===window?0:e.getBoundingClientRect().top,o=t.getBoundingClientRect().top-r,i=o+t.offsetHeight;return o>=0&&o<n||i>0&&i<=n},a=function(e,t){return t=t||"",!(0===t.replace(/\s/g,"").length||!e)&&new RegExp(" "+t+" ").test(" "+e.className+" ")},d=function(e,t){a(e,t)||(e.className=""===e.className?t:e.className+" "+t)},u=function(e,t){if(a(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}},c=function(e){function t(n,r,o){if(n!==r){var i=n+o>r?r:n+o;n>r&&(i=n-o<r?r:n-o),e===window?window.scrollTo(i,i):e.scrollTop=i,window.requestAnimationFrame(function(){return t(i,r,o)})}}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return window.setTimeout(e,1e3/60)});var i=Math.abs(n-r),s=Math.ceil(i/o*50);t(n,r,s)};t.pageScroll=n,t.isIOS=r,t.isColor=o,t.getScrollview=i,t.checkInview=s,t.addClass=d,t.removeClass=u,t.scrollTop=c},16:function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".yd-button{padding:0 .24rem}.yd-btn{height:.6rem;font-size:.26rem;display:inline-block;padding:0 .2rem;box-sizing:content-box}.yd-btn,.yd-btn-block{text-align:center;position:relative;border:none;pointer-events:auto;border-radius:3px}.yd-btn-block{width:100%;display:block;font-size:.36rem;height:1rem;margin-top:.5rem}.yd-btn-circle{border-radius:200px}.yd-btn-primary{background-color:#04be02;color:#fff}.yd-btn-primary:active{background-color:#04ab02}.yd-btn-danger{background-color:#ef4f4f;color:#fff}.yd-btn-danger:active{background-color:#d74747}.yd-btn-warning{background-color:#ffb400;color:#fff}.yd-btn-warning:active{background-color:#e6a200}.yd-btn-disabled{background-color:#ccc;color:#f0f0f0;pointer-events:none}.yd-btn-disabled:active{background-color:#b8b8b8}.yd-btn-hollow{background-color:#fff;color:#454545;border:1px solid #eaeaea}.yd-btn-hollow:active{background-color:#f7f7f7}.hairline .yd-btn-hollow{border:.5px solid #dedede}",""])},18:function(e,t,n){n(27);var r=n(1)(n(29),n(24),null,null);e.exports=r.exports},24:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{class:e.classes,style:{backgroundColor:e.bgcolor,color:e.color},attrs:{disabled:e.disabled,type:e.actionType}},[e._t("default")],2)},staticRenderFns:[]}},27:function(e,t,n){var r=n(16);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals);n(3)("83af067c",r,!0)},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.default={name:"yd-button",props:{disabled:Boolean,actionType:{validator:function(e){return["button","submit","reset"].indexOf(e)>-1},default:"button"},type:{validator:function(e){return["primary","danger","warning","hollow","disabled"].indexOf(e)>-1},default:"primary"},size:{validator:function(e){return["small","large"].indexOf(e)>-1}},bgcolor:{validator:function(e){return!e||(0,r.isColor)(e)}},color:{validator:function(e){return!e||(0,r.isColor)(e)}},shape:{validator:function(e){return["square","circle"].indexOf(e)>-1},default:"square"}},computed:{classes:function(){var e="large"===this.size?"yd-btn-block":"yd-btn",t="yd-btn-"+this.type;return this.disabled&&(t="yd-btn-disabled"),this.bgcolor&&(t=""),e+" "+t+("circle"===this.shape?" yd-btn-circle":"")}}}},119:function(e,t,n){var r=n(1)(n(280),n(137),null,null);e.exports=r.exports},137:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("yd-sendcode-button",{class:e.start?"btn-disabled":"",style:{backgroundColor:e.bgcolor,color:e.color},attrs:{size:e.size,type:e.type,"action-type":e.actionType,disabled:e.start}},[e._v(e._s(e.tmpStr)+"\n")])},staticRenderFns:[]}},280:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),i=r(o);t.default={name:"yd-sendcode",extends:i.default,components:{"yd-sendcode-button":i.default},data:function(){return{tmpStr:"获取短信验证码",timer:null,start:!1,runSecond:this.second}},props:{initStr:String,second:{default:60,validator:function(e){return/^\d*$/.test(e)}},runStr:{type:String,default:"{%s}秒后重新获取"},resetStr:{type:String,default:"重新获取验证码"},value:{type:Boolean,default:!1},storageKey:{type:String}},methods:{run:function(e){var t=this,n=e?e:this.runSecond;if(this.storageKey){var r=(new Date).getTime()+1e3*n;window.sessionStorage.setItem(this.storageKey,r)}e||(this.tmpStr=this.getStr(n)),this.timer=setInterval(function(){n--,t.tmpStr=t.getStr(n),n<=0&&t.stop()},1e3)},stop:function(){this.tmpStr=this.resetStr,this.start=!1,this.$emit("input",!1),clearInterval(this.timer)},getStr:function(e){return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g,e)}},watch:{value:function(e){this.start=e,e&&this.run()}},created:function(){var e=~~((window.sessionStorage.getItem(this.storageKey)-(new Date).getTime())/1e3);e>0&&this.storageKey?(this.tmpStr=this.getStr(e),this.start=!0,this.run(e)):this.initStr&&(this.tmpStr=this.initStr)},destroyed:function(){!this.storageKey&&this.stop()}}}})});