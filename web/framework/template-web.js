/*! art-template@4.10.1 for browser | https://github.com/aui/art-template */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.template=t():e.template=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=22)}([function(e,t,n){(function(t){e.exports=!1;try{e.exports="[object process]"===Object.prototype.toString.call(t.process)}catch(n){}}).call(t,n(4))},function(e,t,n){"use strict";var r=n(17),o=n(2),i=n(18),s=function(e,t){t.onerror(e,t);var n=function(){return"{Template Error}"};return n.mappings=[],n.sourcesContent=[],n},a=function c(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};"string"!=typeof e?t=e:t.source=e,t=o.$extend(t),e=t.source,t.debug&&(t.cache=!1,t.bail=!1,t.minimize=!1,t.compileDebug=!0),t.compileDebug&&(t.minimize=!1),t.filename&&(t.filename=t.resolveFilename(t.filename,t));var n=t.filename,a=t.cache,u=t.caches;if(a&&n){var p=u.get(n);if(p)return p}if(!e)try{e=t.loader(n,t),t.source=e}catch(d){var f=new i({name:"CompileError",path:n,message:"template not found: "+d.message,stack:d.stack});if(t.bail)throw f;return s(f,t)}var l=void 0,h=new r(t);try{l=h.build()}catch(f){if(f=new i(f),t.bail)throw f;return s(f,t)}var m=function(e,n){try{return l(e,n)}catch(f){if(!t.compileDebug)return t.cache=!1,t.compileDebug=!0,c(t)(e,n);if(f=new i(f),t.bail)throw f;return s(f,t)()}};return m.mappings=l.mappings,m.sourcesContent=l.sourcesContent,m.toString=function(){return l.toString()},a&&n&&u.set(n,m),m};a.Compiler=r,e.exports=a},function(e,t,n){"use strict";function r(){this.$extend=function(e){return e=e||{},s(e,e instanceof r?e:this)}}var o=n(0),i=n(20),s=n(9),a=n(11),c=n(13),u=n(8),p=n(12),f=n(15),l=n(16),h=n(10),m=n(14),d={source:null,filename:null,rules:[l,f],escape:!0,debug:!!o&&"production"!==process.env.NODE_ENV,bail:!1,cache:!0,minimize:!0,compileDebug:!1,resolveFilename:m,include:a,htmlMinifier:h,htmlMinifierOptions:{collapseWhitespace:!0,minifyCSS:!0,minifyJS:!0,ignoreCustomFragments:[]},onerror:c,loader:p,caches:u,root:"/",extname:".art",ignore:[],imports:i};r.prototype=d,e.exports=new r},function(e,t){},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(r){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=/((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyu]{1,5}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g,t.matchToToken=function(e){var t={type:"invalid",value:e[0]};return e[1]?(t.type="string",t.closed=!(!e[3]&&!e[4])):e[5]?t.type="comment":e[6]?(t.type="comment",t.closed=!!e[7]):e[8]?t.type="regex":e[9]?t.type="number":e[10]?t.type="name":e[11]?t.type="punctuator":e[12]&&(t.type="whitespace"),t}},function(e,t,n){"use strict";e.exports=n(2)},function(e,t,n){"use strict";var r=n(1),o=function(e,t,n){return r(e,n)(t)};e.exports=o},function(e,t,n){"use strict";var r={__data:Object.create(null),set:function(e,t){this.__data[e]=t},get:function(e){return this.__data[e]},reset:function(){this.__data={}}};e.exports=r},function(e,t,n){"use strict";var r=Object.prototype.toString,o=function(e){return null===e?"Null":r.call(e).slice(8,-1)},i=function s(e,t){var n=void 0,r=o(e);if("Object"===r?n=Object.create(t||{}):"Array"===r&&(n=[].concat(t||[])),n){for(var i in e)e.hasOwnProperty(i)&&(n[i]=s(e[i],n[i]));return n}return e};e.exports=i},function(e,t,n){"use strict";var r=n(0),o=function(e,t){if(r){var o,i=n(23).minify,s=t.htmlMinifierOptions,a=t.rules.map(function(e){return e.test});(o=s.ignoreCustomFragments).push.apply(o,a),e=i(e,s)}return e};e.exports=o},function(e,t,n){"use strict";var r=function(e,t,r,o){var i=n(1);return o=o.$extend({filename:o.resolveFilename(e,o),bail:!0,source:null}),i(o)(t,r)};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=function(e){if(r){return n(3).readFileSync(e,"utf8")}var t=document.getElementById(e);return t.value||t.innerHTML};e.exports=o},function(e,t,n){"use strict";var r=function(e){console.error(e.name,e.message)};e.exports=r},function(e,t,n){"use strict";var r=n(0),o=/^\.+\//,i=function(e,t){if(r){var i=n(3),s=t.root,a=t.extname;if(o.test(e)){var c=t.filename,u=!c||e===c,p=u?s:i.dirname(c);e=i.resolve(p,e)}else e=i.resolve(s,e);i.extname(e)||(e+=a)}return e};e.exports=i},function(e,t,n){"use strict";var r={test:/{{[ \t]*([@#]?)(\/?)([\w\W]*?)[ \t]*}}/,use:function(e,t,n,o){var i=this,s=i.options,a=i.getEsTokens(o.trim()),c=a.map(function(e){return e.value}),u={},p=void 0,f=!!t&&"raw",l=n+c.shift(),h=function(t,n){console.warn((s.filename||"anonymous")+":"+(e.line+1)+":"+(e.start+1)+"\nTemplate upgrade: {{"+t+"}} -> {{"+n+"}}")};switch("#"===t&&h("#value","@value"),l){case"set":o="var "+c.join("");break;case"if":o="if("+c.join("")+"){";break;case"else":var m=c.indexOf("if");m>-1?(c.splice(0,m+1),o="}else if("+c.join("")+"){"):o="}else{";break;case"/if":o="}";break;case"each":p=r._split(a),p.shift(),"as"===p[1]&&(h("each object as value index","each object value index"),p.splice(1,1));var d=p[0]||"$data",v=p[1]||"$value",g=p[2]||"$index";o="$each("+d+",function("+v+","+g+"){";break;case"/each":o="})";break;case"echo":l="print",h("echo value","value");case"print":case"include":case"extend":p=r._split(a),p.shift(),o=l+"("+p.join(",")+")";break;case"block":o="block("+c.join("")+",function(){";break;case"/block":o="})";break;default:if(-1!==c.indexOf("|")){for(var y=l,b=[],x=c.filter(function(e){return!/^\s+$/.test(e)});"|"!==x[0];)y+=x.shift();x.filter(function(e){return":"!==e}).forEach(function(e){"|"===e?b.push([]):b[b.length-1].push(e)}),b.reduce(function(e,t){var n=t.shift();return t.unshift(e),o="$imports."+n+"("+t.join(",")+")"},y)}else o=""+l+c.join("");f||(f="escape")}return u.code=o,u.output=f,u},_split:function(e){for(var t=0,n=e.shift(),r=[[n]];t<e.length;){var o=e[t],i=o.type;"whitespace"!==i&&"comment"!==i&&("punctuator"===n.type&&"]"!==n.value||"punctuator"===i?r[r.length-1].push(o):r.push([o]),n=o),t++}return r.map(function(e){return e.map(function(e){return e.value}).join("")})}};e.exports=r},function(e,t,n){"use strict";var r={test:/<%(#?)((?:==|=#|[=-])?)([\w\W]*?)(-?)%>/,use:function(e,t,n,r){return n={"-":"raw","=":"escape","":!1,"==":"raw","=#":"raw"}[n],t&&(r="/*"+e+"*/",n=!1),{code:r,output:n}}};e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=n(19),i=n(21),s="$data",a="$imports",c="print",u="include",p="extend",f="block",l="$$out",h="$$line",m="$$blocks",d="$$slice",v="$$from",g="$$options",y=function(e,t){return e.hasOwnProperty(t)},b=JSON.stringify,x=function(){function e(t){var n,o,y=this;r(this,e);var b=t.source,x=t.minimize,w=t.htmlMinifier;if(this.options=t,this.stacks=[],this.context=[],this.scripts=[],this.CONTEXT_MAP={},this.ignore=[s,a,g].concat(t.ignore),this.internal=(n={},n[l]="''",n[h]="[0,0]",n[m]="arguments[1]||{}",n[v]="null",n[c]="function(){var s=''.concat.apply('',arguments);"+l+"+=s;return s}",n[u]="function(src,data){var s="+g+".include(src,data||"+s+",arguments[2]||"+m+","+g+");"+l+"+=s;return s}",n[p]="function(from){"+v+"=from}",n[d]="function(c,p,s){p="+l+";"+l+"='';c();s="+l+";"+l+"=p+s;return s}",n[f]="function(){var a=arguments,s;if(typeof a[0]==='function'){return "+d+"(a[0])}else if("+v+"){"+m+"[a[0]]="+d+"(a[1])}else{s="+m+"[a[0]];if(typeof s==='string'){"+l+"+=s}else{s="+d+"(a[1])}return s}}",n),this.dependencies=(o={},o[c]=[l],o[u]=[l,g,s,m],o[p]=[v,u],o[f]=[d,v,l,m],o),this.importContext(l),t.compileDebug&&this.importContext(h),x)try{b=w(b,t)}catch(E){}this.source=b,this.getTplTokens(b,t.rules,this).forEach(function(e){e.type===i.TYPE_STRING?y.parseString(e):y.parseExpression(e)})}return e.prototype.getTplTokens=function(){return i.apply(undefined,arguments)},e.prototype.getEsTokens=function(e){return o(e)},e.prototype.getVariables=function(e){var t=!1;return e.filter(function(e){return"whitespace"!==e.type&&"comment"!==e.type}).filter(function(e){return"name"===e.type&&!t||(t="punctuator"===e.type&&"."===e.value,!1)}).map(function(e){return e.value})},e.prototype.importContext=function(e){var t=this,n="",r=this.internal,o=this.dependencies,i=this.ignore,c=this.context,u=this.options,p=u.imports,f=this.CONTEXT_MAP;y(f,e)||-1!==i.indexOf(e)||(y(r,e)?(n=r[e],y(o,e)&&o[e].forEach(function(e){return t.importContext(e)})):n="$escape"===e||"$each"===e||y(p,e)?a+"."+e:s+"."+e,f[e]=n,c.push({name:e,value:n}))},e.prototype.parseString=function(e){var t=e.value;if(t){var n=l+"+="+b(t);this.scripts.push({source:t,tplToken:e,code:n})}},e.prototype.parseExpression=function(e){var t=this,n=e.value,r=e.script,o=r.output,s=r.code;o&&(s=!1===escape||o===i.TYPE_RAW?l+"+="+r.code:l+"+=$escape("+r.code+")");var a=this.getEsTokens(s);this.getVariables(a).forEach(function(e){return t.importContext(e)}),this.scripts.push({source:n,tplToken:e,code:s})},e.prototype.checkExpression=function(e){for(var t=[[/^\s*}[\w\W]*?{?[\s;]*$/,""],[/(^[\w\W]*?\([\w\W]*?(?:=>|\([\w\W]*?\))\s*{[\s;]*$)/,"$1})"],[/(^[\w\W]*?\([\w\W]*?\)\s*{[\s;]*$)/,"$1}"]],n=0;n<t.length;){if(t[n][0].test(e)){var r;e=(r=e).replace.apply(r,t[n]);break}n++}try{return new Function(e),!0}catch(o){return!1}},e.prototype.build=function(){var e=this.options,t=this.context,n=this.scripts,r=this.stacks,o=this.source,c=e.filename,f=e.imports,d=[],x=y(this.CONTEXT_MAP,p),w=0,E=function(e,t){var n=t.line,o=t.start,i={generated:{line:r.length+w+1,column:1},original:{line:n+1,column:o+1}};return w+=e.split(/\n/).length-1,i},k=function(e){return e.replace(/^[\t ]+|[\t ]$/g,"")};r.push("function("+s+"){"),r.push("'use strict'"),r.push(s+"="+s+"||{}"),r.push("var "+t.map(function(e){return e.name+"="+e.value}).join(",")),e.compileDebug?(r.push("try{"),n.forEach(function(e){e.tplToken.type===i.TYPE_EXPRESSION&&r.push(h+"=["+[e.tplToken.line,e.tplToken.start].join(",")+"]"),d.push(E(e.code,e.tplToken)),r.push(k(e.code))}),r.push("}catch(error){"),r.push("throw {"+["name:'RuntimeError'","path:"+b(c),"message:error.message","line:"+h+"[0]+1","column:"+h+"[1]+1","source:"+b(o),"stack:error.stack"].join(",")+"}"),r.push("}")):n.forEach(function(e){d.push(E(e.code,e.tplToken)),r.push(k(e.code))}),x&&(r.push(l+"=''"),r.push(u+"("+v+","+s+","+m+")")),r.push("return "+l),r.push("}");var T=r.join("\n");try{var $=new Function(a,g,"return "+T)(f,e);return $.mappings=d,$.sourcesContent=[o],$}catch(_){for(var O=0,j=0,S=0;O<n.length;){var C=n[O];if(!this.checkExpression(C.code)){j=C.tplToken.line,S=C.tplToken.start;break}O++}throw{name:"CompileError",path:c,message:_.message,line:j+1,column:S+1,source:o,generated:T,stack:_.stack}}},e}();x.CONSTS={DATA:s,IMPORTS:a,PRINT:c,INCLUDE:u,EXTEND:p,BLOCK:f,OPTIONS:g,OUT:l,LINE:h,BLOCKS:m,SLICE:d,FROM:v,ESCAPE:"$escape",EACH:"$each"},e.exports=x},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){var t=e.name,n=e.source,r=e.path,o=e.line,i=e.column,s=e.message;if(!n)return s;var a=n.split(/\n/),c=Math.max(o-3,0),u=Math.min(a.length,o+3),p=a.slice(c,u).map(function(e,t){var n=t+c+1;return(n===o?" >> ":"    ")+n+"| "+e}).join("\n");return(r||"anonymous")+":"+o+":"+i+"\n"+p+"\n\n"+t+": "+s}var a=function(e){function t(n){r(this,t);var i=o(this,e.call(this,n.message));return i.name="TemplateError",i.message=s(n),Error.captureStackTrace&&Error.captureStackTrace(i,i.constructor),i}return i(t,e),t}(Error);e.exports=a},function(e,t,n){"use strict";var r=n(24),o=n(5)["default"],i=n(5).matchToToken,s=function(e){return e.match(o).map(function(e){return o.lastIndex=0,i(o.exec(e))}).map(function(e){return"name"===e.type&&r(e.value)&&(e.type="keyword"),e})};e.exports=s},function(e,t,n){"use strict";(function(t){function r(e){return"string"!=typeof e&&(e=e===undefined||null===e?"":"function"==typeof e?r(e.call(e)):JSON.stringify(e)),e}function o(e){var t=""+e,n=a.exec(t);if(!n)return e;var r="",o=void 0,i=void 0,s=void 0;for(o=n.index,i=0;o<t.length;o++){switch(t.charCodeAt(o)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}i!==o&&(r+=t.substring(i,o)),i=o+1,r+=s}return i!==o?r+t.substring(i,o):r}/*! art-template@runtime | https://github.com/aui/art-template */
var i=n(0),s=Object.create(i?t:window),a=/["&'<>]/;s.$escape=function(e){return o(r(e))},s.$each=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)t(e[n],n);else for(var o in e)t(e[o],o)},e.exports=s}).call(t,n(4))},function(e,t,n){"use strict";function r(e,t,n,r){this.content=e,this.line=t,this.start=n,this.end=r}r.prototype.toString=function(){return this.content};var o=function(e,t){for(var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{},o=[{type:"string",value:e,line:0,start:0,end:e.length}],i=0;i<t.length;i++)!function(e){for(var t=e.test.ignoreCase?"ig":"g",i=e.test.source+"|^$|[\\w\\W]",s=new RegExp(i,t),a=0;a<o.length;a++)if("string"===o[a].type){for(var c=o[a].line,u=o[a].start,p=o[a].end,f=o[a].value.match(s),l=[],h=0;h<f.length;h++){var m=f[h];e.test.lastIndex=0;var d=e.test.exec(m),v=d?"expression":"string",g=l[l.length-1],y=g||o[a],b=y.value;u=y.line===c?g?g.end:u:b.length-b.lastIndexOf("\n")-1,p=u+m.length;var x={type:v,value:m,line:c,start:u,end:p};if("string"===v)g&&"string"===g.type?(g.value+=m,g.end+=m.length):l.push(x);else{d[0]=new r(d[0],c,u,p);var w=e.use.apply(n,d);x.script=w,l.push(x)}c+=m.split(/\n/).length-1}o.splice.apply(o,[a,1].concat(l)),a+=l.length-1}}(t[i]);return o};o.TYPE_STRING="string",o.TYPE_EXPRESSION="expression",o.TYPE_RAW="raw",o.TYPE_ESCAPE="escape",e.exports=o},function(e,t,n){"use strict";var r=n(7),o=n(1),i=n(6),s=function(e,t){return t instanceof Object?r({filename:e},t):o({filename:e,source:t})};s.render=r,s.compile=o,s.defaults=i,e.exports=s},function(e,t){!function(e){e.noop=function(){}}("object"==typeof e&&"object"==typeof e.exports?e.exports:window)},function(e,t,n){"use strict";var r={"abstract":!0,await:!0,"boolean":!0,"break":!0,"byte":!0,"case":!0,"catch":!0,"char":!0,"class":!0,"const":!0,"continue":!0,"debugger":!0,"default":!0,"delete":!0,"do":!0,"double":!0,"else":!0,"enum":!0,"export":!0,"extends":!0,"false":!0,"final":!0,"finally":!0,"float":!0,"for":!0,"function":!0,"goto":!0,"if":!0,"implements":!0,"import":!0,"in":!0,"instanceof":!0,"int":!0,"interface":!0,"let":!0,"long":!0,"native":!0,"new":!0,"null":!0,"package":!0,"private":!0,"protected":!0,"public":!0,"return":!0,"short":!0,"static":!0,"super":!0,"switch":!0,"synchronized":!0,"this":!0,"throw":!0,"transient":!0,"true":!0,"try":!0,"typeof":!0,"var":!0,"void":!0,"volatile":!0,"while":!0,"with":!0,"yield":!0};e.exports=function(e){return r.hasOwnProperty(e)}}])});


/* ?????????????????????????????? */
template.defaults.imports.dateFormat = dateFormat;

function dateFormat(date, fmt) {
    fmt = fmt || "yyyy-MM-dd hh:mm:ss";
    var Ddate = new Date(Number(date)*1000),
        o = {
            "M+": Ddate.getMonth() + 1,
            "d+": Ddate.getDate(),
            "h+": Ddate.getHours(),
            "m+": Ddate.getMinutes(),
            "s+": Ddate.getSeconds(),
            "q+": Math.floor((Ddate.getMonth() + 3) / 3),
            "S": Ddate.getMilliseconds()
        };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (Ddate.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};
// /* ??????????????????????????????(????????? ?????? ???????????? ????????????) */
template.defaults.imports.dateFormat2 = function(s_date, s_type) {
    var o_date = new Date(s_date);
    var s_dateSec = o_date.getTime();
    var o_dateNew = new Date();
    var s_dataNewSec = o_dateNew.getTime();
    var s_difference = s_dataNewSec - s_dateSec > 0 ? (s_dataNewSec - s_dateSec) : 0;;
    if (o_date.getFullYear() == o_dateNew.getFullYear() && o_date.getMonth() == o_dateNew.getMonth() && o_date.getDate() == o_dateNew.getDate()) { /*?????????*/
        if (s_difference < 60 * 1000) { /*??????????????????*/
            return parseInt(s_difference / 1000)+1 + '??????';
        } else if (s_difference < 60 * 60 * 1000) { /*???????????????*/
            return parseInt(s_difference / 1000 / 60) + '?????????';
        } else if (s_difference < 24 * 60 * 60 * 1000) { /*?????????*/
            return parseInt(s_difference / 60 / 60 / 1000) + '?????????';
        }
    } else if (o_date.getFullYear() == o_dateNew.getFullYear() && o_date.getMonth() == o_dateNew.getMonth() && (o_dateNew.getDate() - o_date.getDate()) == 1) { /*?????????*/
        return '?????? ' + o_date.getHours() + ":" + o_date.getMinutes();
    } else if (o_date.getFullYear() == o_dateNew.getFullYear() && o_date.getMonth() == o_dateNew.getMonth() && (o_dateNew.getDate() - o_date.getDate()) == 2) { /*?????????*/
        return '?????? ' + o_date.getHours() + ":" + o_date.getMinutes();
    } else {
        return template.defaults.imports.dateFormat(s_date, s_type || 'yyyy-MM-dd hh:mm');
    }
};
/* ??????????????????(n???) */
template.defaults.imports.dateFormat3 = function(s_date, s_type) {
    var o_start, o_end, text = s_type;
    if (Object.prototype.toString.call(s_date) == "[object String]") {
        var o_newDate = new Date(),
            n_newDate = o_newDate.getTime(),
            o_date = new Date(s_date),
            n_date = o_date.getTime();
        o_start = n_newDate > n_date ? o_date : o_newDate;
        o_end = n_newDate > n_date ? o_newDate : o_date
    } else {
        if (Object.prototype.toString.call(s_date) == "[object Object]") {
            o_start = new Date(s_date.start);
            o_end = new Date(s_date.end)
        } else {
            if (Object.prototype.toString.call(s_date) == "[object Array]") {
                var o_Date1 = new Date(s_date[0]),
                    n_Date1 = o_Date1.getTime(),
                    o_date2 = new Date(s_date[1]),
                    n_date2 = o_date2.getTime();
                o_start = n_Date1 > n_date2 ? o_date2 : o_date1;
                o_end = n_date1 > n_date2 ? o_date1 : o_date2
            } else {
                console.log("???????????????????????????");
                return
            }
        }
    }
    var n_milStart = o_start.getMilliseconds() + 1,
        n_secStart = o_start.getSeconds(),
        n_minStart = o_start.getMinutes(),
        n_houStart = o_start.getHours(),
        n_dayStart = o_start.getDate(),
        n_monStart = o_start.getMonth() + 1,
        n_yeaStart = o_start.getFullYear(),
        n_milEnd = o_end.getMilliseconds() + 1,
        n_secEnd = o_end.getSeconds(),
        n_minEnd = o_end.getMinutes(),
        n_houEnd = o_end.getHours(),
        n_dayEnd = o_end.getDate(),
        n_monEnd = o_end.getMonth() + 1,
        n_yeaEnd = o_end.getFullYear(),
        n_mil, n_sec, n_min, n_hou, n_day, n_mon, n_yea;
    if (n_milEnd >= n_milStart) {
        n_mil = n_milEnd - n_milStart
    } else {
        n_secEnd -= 1;
        n_mil = n_milEnd + 1000 - n_milStart
    }
    if (n_secEnd >= n_secStart) {
        n_sec = n_secEnd - n_secStart
    } else {
        n_minEnd -= 1;
        n_sec = n_secEnd + 60 - n_secStart
    }
    if (n_minEnd >= n_minStart) {
        n_min = n_minEnd - n_minStart
    } else {
        n_houEnd -= 1;
        n_min = n_minEnd + 60 - n_minStart
    }
    if (n_houEnd >= n_houStart) {
        n_hou = n_houEnd - n_houStart
    } else {
        n_dayEnd -= 1;
        n_hou = n_houEnd + 24 - n_houStart
    }
    if (n_dayEnd >= n_dayStart) {
        n_day = n_dayEnd - n_dayStart
    } else {
        n_monEnd -= 1;
        var monDay = 0;
        if (n_monEnd == 0) {
            monDay = 31
        } else {
            if (n_monEnd == 2) {
                monDay = n_yeaEnd % 4 == 0 ? 29 : 28
            } else {
                if (n_monEnd <= 7) {
                    monDay = n_monEnd % 2 == 0 ? 30 : 31
                } else {
                    if (n_monEnd >= 8) {
                        monDay = n_monEnd % 2 == 0 ? 31 : 30
                    }
                }
            }
        }
        n_day = n_dayEnd + monDay - n_dayStart
    }
    if (n_monEnd >= n_monStart) {
        n_mon = n_monEnd - n_monStart
    } else {
        n_yeaEnd -= 1;
        n_mon = n_monEnd + 12 - n_monStart
    }
    n_yea = n_yeaEnd - n_yeaStart;
    var o_time = {
        "M+": n_mon,
        "d+": n_day,
        "h+": n_hou,
        "m+": n_min,
        "ss+": n_sec,
        "ms": n_mil
    };
    if ((/(y+)/.test(text))) {
        text = text.replace(RegExp.$1, (n_yea + "").substr(4 - RegExp.$1.length))
    }
    for (var k in o_time) {
        if (new RegExp("(" + k + ")").test(text)) {
            text = text.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o_time[k]) : (("00" + o_time[k]).substr(("" + o_time[k]).length)))
        }
    }
    return text
};
/* ??????debug */
template.defaults.debug = true;


function fnDateType(_date, _hasShowDate){
    _date = new Date(Number(_date));
    var _hour = _date.getHours(),
        _name = '??????';
    if(_hour < 6){
        _name = '??????';
    }else if (_hour < 9){
        _name = '??????';
    }else if (_hour < 12){
        _name = '??????';
    }else if (_hour < 14){
        _name = '??????';
    }else if (_hour < 17){
        _name = '??????';
    }else if (_hour < 19){
        _name = '??????';
    } else if (_hour < 22){
        _name = '??????';
    }else{
        _name = '??????';
    }
    if( _hasShowDate !== undefined ){
        return _name;
    }else{
        return _name+_date.Format('hh:mm');
    }
}
// ?????????????????? "??????19:35" ??????
template.defaults.imports.dateType = fnDateType;


// ?????????????????????
template.defaults.imports.dateTrans=function(_Millisecond){
    return (_Millisecond / 1000 / 60).toFixed(0);
}
