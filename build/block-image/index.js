(()=>{var e,a={498:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))}));e.exports=i},826:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"}))}));e.exports=i},1070:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))}));e.exports=i},1609:e=>{"use strict";e.exports=window.React},2149:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}));e.exports=i},2485:(e,a)=>{var t;!function(){"use strict";var l={}.hasOwnProperty;function i(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)){if(t.length){var n=i.apply(null,t);n&&e.push(n)}}else if("object"===r){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var s in t)l.call(t,s)&&t[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(a,[]))||(e.exports=t)}()},3072:(e,a)=>{"use strict";var t="function"==typeof Symbol&&Symbol.for,l=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,o=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,f=t?Symbol.for("react.suspense"):60113,h=t?Symbol.for("react.suspense_list"):60120,b=t?Symbol.for("react.memo"):60115,p=t?Symbol.for("react.lazy"):60116,m=t?Symbol.for("react.block"):60121,w=t?Symbol.for("react.fundamental"):60117,k=t?Symbol.for("react.responder"):60118,v=t?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var a=e.$$typeof;switch(a){case l:switch(e=e.type){case u:case g:case r:case s:case n:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case p:case b:case o:return e;default:return a}}case i:return a}}}function _(e){return y(e)===g}a.AsyncMode=u,a.ConcurrentMode=g,a.ContextConsumer=c,a.ContextProvider=o,a.Element=l,a.ForwardRef=d,a.Fragment=r,a.Lazy=p,a.Memo=b,a.Portal=i,a.Profiler=s,a.StrictMode=n,a.Suspense=f,a.isAsyncMode=function(e){return _(e)||y(e)===u},a.isConcurrentMode=_,a.isContextConsumer=function(e){return y(e)===c},a.isContextProvider=function(e){return y(e)===o},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},a.isForwardRef=function(e){return y(e)===d},a.isFragment=function(e){return y(e)===r},a.isLazy=function(e){return y(e)===p},a.isMemo=function(e){return y(e)===b},a.isPortal=function(e){return y(e)===i},a.isProfiler=function(e){return y(e)===s},a.isStrictMode=function(e){return y(e)===n},a.isSuspense=function(e){return y(e)===f},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===g||e===s||e===n||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===b||e.$$typeof===o||e.$$typeof===c||e.$$typeof===d||e.$$typeof===w||e.$$typeof===k||e.$$typeof===v||e.$$typeof===m)},a.typeOf=y},3404:(e,a,t)=>{"use strict";e.exports=t(3072)},3682:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"}))}));e.exports=i},4146:(e,a,t)=>{"use strict";var l=t(3404),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function o(e){return l.isMemo(e)?n:s[e.$$typeof]||i}s[l.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[l.Memo]=n;var c=Object.defineProperty,u=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(a,t,l){if("string"!=typeof t){if(h){var i=f(t);i&&i!==h&&e(a,i,l)}var n=u(t);g&&(n=n.concat(g(t)));for(var s=o(a),b=o(t),p=0;p<n.length;++p){var m=n[p];if(!(r[m]||l&&l[m]||b&&b[m]||s&&s[m])){var w=d(t,m);try{c(a,m,w)}catch(e){}}}}return a}},6736:(e,a,t)=>{"use strict";var l=t(1609),i=t.n(l);const r=window.wp.blocks;var n=t(2485),s=t.n(n);const o=window.lodash;var c=t.n(o);const u=window.wp.blob,g=window.wp.components,d=window.wp.data,f=window.wp.blockEditor,h=window.wp.element,b=window.wp.primitives,p=(0,h.createElement)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,h.createElement)(b.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),m=window.wp.notices,w=window.wp.i18n;var k=function(){function e(e){var a=this;this._insertTag=function(e){var t;t=0===a.tags.length?a.insertionPoint?a.insertionPoint.nextSibling:a.prepend?a.container.firstChild:a.before:a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(e,t),a.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var a=e.prototype;return a.hydrate=function(e){e.forEach(this._insertTag)},a.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var a=document.createElement("style");return a.setAttribute("data-emotion",e.key),void 0!==e.nonce&&a.setAttribute("nonce",e.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===e)return document.styleSheets[a]}(a);try{t.insertRule(e,t.cssRules.length)}catch(e){}}else a.appendChild(document.createTextNode(e));this.ctr++},a.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),v=Math.abs,y=String.fromCharCode,_=Object.assign;function S(e){return e.trim()}function C(e,a,t){return e.replace(a,t)}function E(e,a){return e.indexOf(a)}function x(e,a){return 0|e.charCodeAt(a)}function I(e,a,t){return e.slice(a,t)}function R(e){return e.length}function M(e){return e.length}function N(e,a){return a.push(e),e}var T=1,O=1,A=0,D=0,L=0,P="";function B(e,a,t,l,i,r,n){return{value:e,root:a,parent:t,type:l,props:i,children:r,line:T,column:O,length:n,return:""}}function $(e,a){return _(B("",null,null,"",null,null,0),e,{length:-e.length},a)}function F(){return L=D>0?x(P,--D):0,O--,10===L&&(O=1,T--),L}function H(){return L=D<A?x(P,D++):0,O++,10===L&&(O=1,T++),L}function z(){return x(P,D)}function j(){return D}function G(e,a){return I(P,e,a)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function U(e){return T=O=1,A=R(P=e),D=0,[]}function W(e){return P="",e}function q(e){return S(G(D-1,J(91===e?e+2:40===e?e+1:e)))}function K(e){for(;(L=z())&&L<33;)H();return V(e)>2||V(L)>3?"":" "}function Z(e,a){for(;--a&&H()&&!(L<48||L>102||L>57&&L<65||L>70&&L<97););return G(e,j()+(a<6&&32==z()&&32==H()))}function J(e){for(;H();)switch(L){case e:return D;case 34:case 39:34!==e&&39!==e&&J(L);break;case 40:41===e&&J(e);break;case 92:H()}return D}function Y(e,a){for(;H()&&e+L!==57&&(e+L!==84||47!==z()););return"/*"+G(a,D-1)+"*"+y(47===e?e:H())}function Q(e){for(;!V(z());)H();return G(e,D)}var X="-ms-",ee="-moz-",ae="-webkit-",te="comm",le="rule",ie="decl",re="@keyframes";function ne(e,a){for(var t="",l=M(e),i=0;i<l;i++)t+=a(e[i],i,e,a)||"";return t}function se(e,a,t,l){switch(e.type){case"@import":case ie:return e.return=e.return||e.value;case te:return"";case re:return e.return=e.value+"{"+ne(e.children,l)+"}";case le:e.value=e.props.join(",")}return R(t=ne(e.children,l))?e.return=e.value+"{"+t+"}":""}function oe(e){return W(ce("",null,null,null,[""],e=U(e),0,[0],e))}function ce(e,a,t,l,i,r,n,s,o){for(var c=0,u=0,g=n,d=0,f=0,h=0,b=1,p=1,m=1,w=0,k="",v=i,_=r,S=l,I=k;p;)switch(h=w,w=H()){case 40:if(108!=h&&58==x(I,g-1)){-1!=E(I+=C(q(w),"&","&\f"),"&\f")&&(m=-1);break}case 34:case 39:case 91:I+=q(w);break;case 9:case 10:case 13:case 32:I+=K(h);break;case 92:I+=Z(j()-1,7);continue;case 47:switch(z()){case 42:case 47:N(ge(Y(H(),j()),a,t),o);break;default:I+="/"}break;case 123*b:s[c++]=R(I)*m;case 125*b:case 59:case 0:switch(w){case 0:case 125:p=0;case 59+u:f>0&&R(I)-g&&N(f>32?de(I+";",l,t,g-1):de(C(I," ","")+";",l,t,g-2),o);break;case 59:I+=";";default:if(N(S=ue(I,a,t,c,u,i,s,k,v=[],_=[],g),r),123===w)if(0===u)ce(I,a,S,S,v,r,g,s,_);else switch(99===d&&110===x(I,3)?100:d){case 100:case 109:case 115:ce(e,S,S,l&&N(ue(e,S,S,0,0,i,s,k,i,v=[],g),_),i,_,g,s,l?v:_);break;default:ce(I,S,S,S,[""],_,0,s,_)}}c=u=f=0,b=m=1,k=I="",g=n;break;case 58:g=1+R(I),f=h;default:if(b<1)if(123==w)--b;else if(125==w&&0==b++&&125==F())continue;switch(I+=y(w),w*b){case 38:m=u>0?1:(I+="\f",-1);break;case 44:s[c++]=(R(I)-1)*m,m=1;break;case 64:45===z()&&(I+=q(H())),d=z(),u=g=R(k=I+=Q(j())),w++;break;case 45:45===h&&2==R(I)&&(b=0)}}return r}function ue(e,a,t,l,i,r,n,s,o,c,u){for(var g=i-1,d=0===i?r:[""],f=M(d),h=0,b=0,p=0;h<l;++h)for(var m=0,w=I(e,g+1,g=v(b=n[h])),k=e;m<f;++m)(k=S(b>0?d[m]+" "+w:C(w,/&\f/g,d[m])))&&(o[p++]=k);return B(e,a,t,0===i?le:s,o,c,u)}function ge(e,a,t){return B(e,a,t,te,y(L),I(e,2,-2),0)}function de(e,a,t,l){return B(e,a,t,ie,I(e,0,l),I(e,l+1,-1),l)}var fe=function(e,a,t){for(var l=0,i=0;l=i,i=z(),38===l&&12===i&&(a[t]=1),!V(i);)H();return G(e,D)},he=new WeakMap,be=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var a=e.value,t=e.parent,l=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===a.charCodeAt(0)||he.get(t))&&!l){he.set(e,!0);for(var i=[],r=function(e,a){return W(function(e,a){var t=-1,l=44;do{switch(V(l)){case 0:38===l&&12===z()&&(a[t]=1),e[t]+=fe(D-1,a,t);break;case 2:e[t]+=q(l);break;case 4:if(44===l){e[++t]=58===z()?"&\f":"",a[t]=e[t].length;break}default:e[t]+=y(l)}}while(l=H());return e}(U(e),a))}(a,i),n=t.props,s=0,o=0;s<r.length;s++)for(var c=0;c<n.length;c++,o++)e.props[o]=i[s]?r[s].replace(/&\f/g,n[c]):n[c]+" "+r[s]}}},pe=function(e){if("decl"===e.type){var a=e.value;108===a.charCodeAt(0)&&98===a.charCodeAt(2)&&(e.return="",e.value="")}};function me(e,a){switch(function(e,a){return 45^x(e,0)?(((a<<2^x(e,0))<<2^x(e,1))<<2^x(e,2))<<2^x(e,3):0}(e,a)){case 5103:return ae+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ae+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ae+e+ee+e+X+e+e;case 6828:case 4268:return ae+e+X+e+e;case 6165:return ae+e+X+"flex-"+e+e;case 5187:return ae+e+C(e,/(\w+).+(:[^]+)/,ae+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return ae+e+X+"flex-item-"+C(e,/flex-|-self/,"")+e;case 4675:return ae+e+X+"flex-line-pack"+C(e,/align-content|flex-|-self/,"")+e;case 5548:return ae+e+X+C(e,"shrink","negative")+e;case 5292:return ae+e+X+C(e,"basis","preferred-size")+e;case 6060:return ae+"box-"+C(e,"-grow","")+ae+e+X+C(e,"grow","positive")+e;case 4554:return ae+C(e,/([^-])(transform)/g,"$1"+ae+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,ae+"$1"),/(image-set)/,ae+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,ae+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,ae+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ae+e+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,ae+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-a>6)switch(x(e,a+1)){case 109:if(45!==x(e,a+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+ae+"$2-$3$1"+ee+(108==x(e,a+3)?"$3":"$2-$3"))+e;case 115:return~E(e,"stretch")?me(C(e,"stretch","fill-available"),a)+e:e}break;case 4949:if(115!==x(e,a+1))break;case 6444:switch(x(e,R(e)-3-(~E(e,"!important")&&10))){case 107:return C(e,":",":"+ae)+e;case 101:return C(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ae+(45===x(e,14)?"inline-":"")+"box$3$1"+ae+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(x(e,a+11)){case 114:return ae+e+X+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ae+e+X+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ae+e+X+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ae+e+X+e+e}return e}var we=[function(e,a,t,l){if(e.length>-1&&!e.return)switch(e.type){case ie:e.return=me(e.value,e.length);break;case re:return ne([$(e,{value:C(e.value,"@","@"+ae)})],l);case le:if(e.length)return function(e,a){return e.map(a).join("")}(e.props,(function(a){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(a)){case":read-only":case":read-write":return ne([$(e,{props:[C(a,/:(read-\w+)/,":-moz-$1")]})],l);case"::placeholder":return ne([$(e,{props:[C(a,/:(plac\w+)/,":"+ae+"input-$1")]}),$(e,{props:[C(a,/:(plac\w+)/,":-moz-$1")]}),$(e,{props:[C(a,/:(plac\w+)/,X+"input-$1")]})],l)}return""}))}}];const ke=function(e){var a=e.key;if("css"===a){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var l,i,r=e.stylisPlugins||we,n={},s=[];l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),(function(e){for(var a=e.getAttribute("data-emotion").split(" "),t=1;t<a.length;t++)n[a[t]]=!0;s.push(e)}));var o,c,u,g,d=[se,(g=function(e){o.insert(e)},function(e){e.root||(e=e.return)&&g(e)})],f=(c=[be,pe].concat(r,d),u=M(c),function(e,a,t,l){for(var i="",r=0;r<u;r++)i+=c[r](e,a,t,l)||"";return i});i=function(e,a,t,l){o=t,ne(oe(e?e+"{"+a.styles+"}":a.styles),f),l&&(h.inserted[a.name]=!0)};var h={key:a,sheet:new k({key:a,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:n,registered:{},insert:i};return h.sheet.hydrate(s),h},ve=function(e){for(var a,t=0,l=0,i=e.length;i>=4;++l,i-=4)a=1540483477*(65535&(a=255&e.charCodeAt(l)|(255&e.charCodeAt(++l))<<8|(255&e.charCodeAt(++l))<<16|(255&e.charCodeAt(++l))<<24))+(59797*(a>>>16)<<16),t=1540483477*(65535&(a^=a>>>24))+(59797*(a>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(i){case 3:t^=(255&e.charCodeAt(l+2))<<16;case 2:t^=(255&e.charCodeAt(l+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(l)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},ye={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var _e=/[A-Z]|^ms/g,Se=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Ce=function(e){return 45===e.charCodeAt(1)},Ee=function(e){return null!=e&&"boolean"!=typeof e},xe=function(){var e=Object.create(null);return function(a){return void 0===e[a]&&(e[a]=Ce(t=a)?t:t.replace(_e,"-$&").toLowerCase()),e[a];var t}}(),Ie=function(e,a){switch(e){case"animation":case"animationName":if("string"==typeof a)return a.replace(Se,(function(e,a,t){return Me={name:a,styles:t,next:Me},a}))}return 1===ye[e]||Ce(e)||"number"!=typeof a||0===a?a:a+"px"};function Re(e,a,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return Me={name:t.name,styles:t.styles,next:Me},t.name;if(void 0!==t.styles){var l=t.next;if(void 0!==l)for(;void 0!==l;)Me={name:l.name,styles:l.styles,next:Me},l=l.next;return t.styles+";"}return function(e,a,t){var l="";if(Array.isArray(t))for(var i=0;i<t.length;i++)l+=Re(e,a,t[i])+";";else for(var r in t){var n=t[r];if("object"!=typeof n)null!=a&&void 0!==a[n]?l+=r+"{"+a[n]+"}":Ee(n)&&(l+=xe(r)+":"+Ie(r,n)+";");else if(!Array.isArray(n)||"string"!=typeof n[0]||null!=a&&void 0!==a[n[0]]){var s=Re(e,a,n);switch(r){case"animation":case"animationName":l+=xe(r)+":"+s+";";break;default:l+=r+"{"+s+"}"}}else for(var o=0;o<n.length;o++)Ee(n[o])&&(l+=xe(r)+":"+Ie(r,n[o])+";")}return l}(e,a,t);case"function":if(void 0!==e){var i=Me,r=t(e);return Me=i,Re(e,a,r)}}if(null==a)return t;var n=a[t];return void 0!==n?n:t}var Me,Ne=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Te=function(e,a,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var l=!0,i="";Me=void 0;var r=e[0];null==r||void 0===r.raw?(l=!1,i+=Re(t,a,r)):i+=r[0];for(var n=1;n<e.length;n++)i+=Re(t,a,e[n]),l&&(i+=r[n]);Ne.lastIndex=0;for(var s,o="";null!==(s=Ne.exec(i));)o+="-"+s[1];return{name:ve(i)+o,styles:i,next:Me}},Oe=!!l.useInsertionEffect&&l.useInsertionEffect||l.useLayoutEffect,Ae=(0,l.createContext)("undefined"!=typeof HTMLElement?ke({key:"css"}):null),De=Ae.Provider,Le=function(e){return(0,l.forwardRef)((function(a,t){var i=(0,l.useContext)(Ae);return e(a,i,t)}))},Pe=(0,l.createContext)({});t(4146);var Be=Le((function(e,a){var t=e.styles,i=Te([t],void 0,(0,l.useContext)(Pe)),r=(0,l.useRef)();return Oe((function(){var e=a.key+"-global",t=new a.sheet.constructor({key:e,nonce:a.sheet.nonce,container:a.sheet.container,speedy:a.sheet.isSpeedy}),l=!1,n=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');return a.sheet.tags.length&&(t.before=a.sheet.tags[0]),null!==n&&(l=!0,n.setAttribute("data-emotion",e),t.hydrate([n])),r.current=[t,l],function(){t.flush()}}),[a]),Oe((function(){var e=r.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==i.next&&function(e,a){!function(e,a){e.key,a.name}(e,a);var t=e.key+"-"+a.name;if(void 0===e.inserted[a.name]){var l=a;do{e.insert(a===l?"."+t:"",l,e.sheet,!0),l=l.next}while(void 0!==l)}}(a,i.next),t.tags.length){var l=t.tags[t.tags.length-1].nextElementSibling;t.before=l,t.flush()}a.insert("",i,t,!1)}}),[a,i.name]),null}));function $e(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return Te(a)}window.jQuery;const Fe={media_tablet:"768px",media_desktop:"1024px",reCAPTCHA_v3_secret_key:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",reCAPTCHA_v3_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",defaultContentWidth:window?.boostify_blocks_layout_global_settings?.contentSize||"",containerPadding:"10px",enableTemplatesButton:"true",enableCopyPasteStyles:"false",containerElementsGap:"10px",blocksEditorSpacing:"0px",buttonInheritFromTheme:"false",buttonTheme:{backgroundColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor||"#0073aa",backgroundColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover||"#3a3a3a",textColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor||"#ffffff",textColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover||"#ffffff",borderRadius:window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius||"50px"},...window.boostify_blocks_global_variables||{},defaultContentWidth:window.boostify_blocks_global_variables?.defaultContentWidth||window.boostify_blocks_layout_global_settings?.contentSize};var He;He=()=>{(e=>{const a=e?.blocksEditorSpacing,t=""==a?0:a,l=((e="0px")=>`\n  /* Desktop */\n  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper\n    > * + *:not(p),\n  .edit-post-visual-editor .editor-styles-wrapper\n    .block-editor-block-list__layout.is-root-container\n    > * + *:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-root-container.wp-site-blocks\n    > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-layout-constrained\n    > * + * {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  /* Tablet */\n  @media (max-width: 768px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n\n  /* Mobile */\n  @media (max-width: 480px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n`)("number"==typeof t?`${t}px`:t);let i=document.getElementById("wcb-blocks-editor-custom-style");i||(i=document.createElement("style"),i.id="wcb-blocks-editor-custom-style",document.head.appendChild(i)),i.textContent=l})(Fe)},window.wp?.domReady&&window.wp.domReady(He);const ze=({mobile_v:e=null,tablet_v:a=null,desktop_v:t=null})=>{let l=a,i=t;return e===a&&a===t?{mobile_v:e,tablet_v:null,desktop_v:null}:(t!==a&&t!==e||(i=null),a===e&&(l=null),{mobile_v:null!=e?e:null,tablet_v:null!=l?l:null,desktop_v:null!=i?i:null})},je=$e`
	position: relative;

	&:before {
		content: "";
		display: block;
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		background: -o-repeating-linear-gradient(
			325deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		background: repeating-linear-gradient(
			125deg,
			rgba(0, 0, 0, 0.3),
			rgba(0, 0, 0, 0.05) 1px,
			transparent 2px,
			transparent 9px
		);
		border: 1px solid rgba(0, 0, 0, 0.02);
		background-color: rgba(255, 255, 255, 0.6);
		z-index: 9997;
	}
`,Ge=({advance_motionEffect:e,advance_zIndex:a,advance_responsiveCondition:t,className:l,defaultDisplay:i})=>{const{media_desktop:r,media_tablet:n}=Fe;try{if(e?.entranceAnimation){const a=document.querySelectorAll(l),t=new IntersectionObserver((a=>{a.forEach((a=>{if(a.isIntersecting){const l=a.target,i=/\banimate__\S+/g,r=l?.className.replace(i,"");l.setAttribute("class",r),setTimeout((()=>{l?.classList.add("animate__animated",`animate__${e?.entranceAnimation}`,`animate__${e?.animationDuration}`,`animate__delay-${e?.animationDelay}ms`,`animate__repeat-${e?.repeat}`)}),50),t.unobserve(l)}}))}),{threshold:.2});a.forEach((e=>t.observe(e)))}}catch(e){console.log("error, advance_motionEffect",e)}const{mobile_v:s,tablet_v:o,desktop_v:c}=ze({mobile_v:a?.Mobile||a?.Tablet||a?.Desktop,tablet_v:a?.Tablet||a?.Desktop,desktop_v:a?.Desktop}),u=e=>""===e?"":e?je:$e`display: ${i};`;return $e`
		${l} {
			visibility: visible;
			@media (min-width: ${r}) {
				z-index: ${c};
				${u(t?.isHiddenOnDesktop)}
			}

			@media (min-width: ${n}) and (max-width: ${r}) {
				z-index: ${o};
				${u(t?.isHiddenOnTablet)}
			}

			@media (max-width: ${n}) {
				z-index: ${s};
				${u(t?.isHiddenOnMobile)}
			}
		}
<<<<<<< HEAD
	`;
};

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelContent.tsx":
/*!******************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelContent.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_HEADING_PANEL_CONTENT_DEMO: () => (/* binding */ WCB_HEADING_PANEL_CONTENT_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyHeadingTagControl/MyHeadingTagControl */ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");








const WCB_HEADING_PANEL_CONTENT_DEMO = {
  textAlignment: {
    Desktop: "left"
  },
  headingTag: "h2",
  showHeading: true,
  showSeparator: false,
  showSubHeading: false,
  separatorPosition: "middle"
};
const PLANS_SEPARATOR_POSTION = [{
  name: "top",
  icon: "Top"
}, {
  name: "middle",
  icon: "Middle"
}, {
  name: "bottom",
  icon: "Bottom"
}];
const WcbHeadingPanelContent = ({
  panelContentData = WCB_HEADING_PANEL_CONTENT_DEMO,
  setAttr__panelContentData,
  onToggle,
  opened,
  initialOpen
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    textAlignment,
    headingTag,
    showHeading,
    showSeparator,
    showSubHeading,
    separatorPosition
  } = panelContentData;
  const TEXT_ALIGNMENT = textAlignment[deviceType] || textAlignment.Tablet || textAlignment.Desktop;

  //
  const handleChangeTextAlignment = selected => {
    setAttr__panelContentData({
      ...panelContentData,
      textAlignment: {
        ...textAlignment,
        [deviceType]: selected
      }
    });
  };
  const handleChangeTag = selected => {
    setAttr__panelContentData({
      ...panelContentData,
      headingTag: selected
    });
  };
  const toggleHeading = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showHeading: e
    });
  };
  const toggleSubHeading = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showSubHeading: e
    });
  };
  const toggleSeparator = e => {
    setAttr__panelContentData({
      ...panelContentData,
      showSeparator: e
    });
  };
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    className: "space-y-5",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "boostify-blocks"),
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    textAlignment: TEXT_ALIGNMENT,
    onChange: handleChangeTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tag: headingTag,
    onChange: handleChangeTag
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Heading", "boostify-blocks"),
    checked: showHeading,
    onChange: toggleHeading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Sub-heading", "boostify-blocks"),
    checked: showSubHeading,
    onChange: toggleSubHeading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Separator", "boostify-blocks"),
    checked: showSeparator,
    onChange: toggleSeparator
  }), showSeparator && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    plans: PLANS_SEPARATOR_POSTION,
    value: separatorPosition,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Separator position", "boostify-blocks"),
    onChange: value => {
      setAttr__panelContentData({
        ...panelContentData,
        separatorPosition: value
      });
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbHeadingPanelContent);

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelDimension.tsx":
/*!********************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelDimension.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_HEADING_PANEL_DIMENSION_DEMO: () => (/* binding */ WCB_HEADING_PANEL_DIMENSION_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/types */ "./src/components/controls/MyDimensionsControl/types.ts");






const WCB_HEADING_PANEL_DIMENSION_DEMO = {
  dimension: {
    ..._components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
    padding: {
      Desktop: {
        bottom: "",
        top: "",
        left: "",
        right: ""
      }
    }
  }
};
const WcbHeadingPanelDimension = ({
  panelData = WCB_HEADING_PANEL_DIMENSION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    dimension
  } = panelData;

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dimension", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dimensionControl: dimension,
    setAttrs__dimensions: dimension => setAttr__({
      dimension
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbHeadingPanelDimension);

/***/ }),

/***/ "./src/block-heading/WcbHeadingPanelSeparator.tsx":
/*!********************************************************!*\
  !*** ./src/block-heading/WcbHeadingPanelSeparator.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_HEADING_PANEL_SEPARATOR_DEMO: () => (/* binding */ WCB_HEADING_PANEL_SEPARATOR_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");









const WCB_HEADING_PANEL_SEPARATOR_DEMO = {
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_BORDER_MAIN_SINGLE_SIDE,
  width: {
    Desktop: "10%"
  },
  marginBottom: {
    Desktop: "1rem"
  }
};
const WcbHeadingPanelSeparator = ({
  panelSeparator = WCB_HEADING_PANEL_SEPARATOR_DEMO,
  setAttr__panelSeparator,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    border,
    width: widthProps,
    marginBottom
  } = panelSeparator;
  const {
    currentDeviceValue: CUSTOM_WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(widthProps, deviceType);
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(marginBottom, deviceType);
  const renderCustomWidth = () => {
    const units = [{
      value: "px",
      label: "px",
      default: 100
    }, {
      value: "%",
      label: "%",
      default: 10
    }, {
      value: "vw",
      label: "vw",
      default: 10
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-between"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "flex-shrink-0",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom Width", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
      className: "flex-grow ml-3",
      units: units,
      value: CUSTOM_WIDTH,
      onChange: value => {
        setAttr__panelSeparator({
          ...panelSeparator,
          width: {
            ...widthProps,
            [deviceType]: value
          }
        });
      }
    }));
  };
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, renderCustomWidth(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border styles"),
    onChange: border => {
      setAttr__panelSeparator({
        ...panelSeparator,
        border
      });
    },
    withSlider: true,
    value: border
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: value => {
      setAttr__panelSeparator({
        ...panelSeparator,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
    hasResponsive: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbHeadingPanelSeparator);

/***/ }),

/***/ "./src/block-image/Edit.tsx":
/*!**********************************!*\
  !*** ./src/block-image/Edit.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isExternalImage: () => (/* binding */ isExternalImage),
/* harmony export */   pickRelevantMediaFiles: () => (/* binding */ pickRelevantMediaFiles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/image.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _GlobalCss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GlobalCss */ "./src/block-image/GlobalCss.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./editor.scss */ "./src/block-image/editor.scss");
/* harmony import */ var _components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/MyCacheProvider */ "./src/components/MyCacheProvider.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Image */ "./src/block-image/Image.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants */ "./src/block-image/constants.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _block_heading_WcbHeadingPanelContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelContent */ "./src/block-heading/WcbHeadingPanelContent.tsx");
/* harmony import */ var _block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelDimension */ "./src/block-heading/WcbHeadingPanelDimension.tsx");
/* harmony import */ var _block_heading_WcbHeadingPanelSeparator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../block-heading/WcbHeadingPanelSeparator */ "./src/block-heading/WcbHeadingPanelSeparator.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");









// @ts-ignore





// @ts-ignore











// Much of this description is duplicated from MediaPlaceholder.
const placeholder = content => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
    className: "block-editor-media-placeholder"
    // @ts-ignore
    ,
    withIllustration: true,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Image"),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Upload an image file, pick one from your media library, or add one with a URL.")
  }, content);
};
const pickRelevantMediaFiles = (image, size) => {
  const imageProps = Object.fromEntries(Object.entries(image !== null && image !== void 0 ? image : {}).filter(([key]) => ["alt", "id", "link", "caption"].includes(key)));
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ["sizes", size, "url"]) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ["media_details", "sizes", size, "source_url"]) || image.url;
  return imageProps;
};
const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
const isExternalImage = (id, url) => url && !id && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
function hasDefaultSize(image, defaultSize) {
  var _image$sizes$defaultS, _image$media_details$;
  return "url" in ((_image$sizes$defaultS = image?.sizes?.[defaultSize]) !== null && _image$sizes$defaultS !== void 0 ? _image$sizes$defaultS : {}) || "source_url" in ((_image$media_details$ = image?.media_details?.sizes?.[defaultSize]) !== null && _image$media_details$ !== void 0 ? _image$media_details$ : {});
}
const Edit = props => {
  const {
    attributes,
    setAttributes,
    isSelected,
    className,
    insertBlocksAfter,
    onReplace,
    context,
    clientId
  } = props;
  //
  const {
    url = "",
    alt,
    caption,
    id,
    advance_responsiveCondition,
    advance_zIndex,
    href,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    title,
    uniqueId,
    general_settings,
    general_image,
    style_image,
    style_overlay,
    style_caption,
    style_dimension
  } = attributes;
  const [temporaryURL, setTemporaryURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_16__["default"])() || "Desktop";
  const altRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // @ts-ignore
    altRef.current = alt;
  }, [alt]);
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // @ts-ignore
    captionRef.current = caption;
  }, [caption]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)();
  const {
    imageDefaultSize,
    mediaUpload,
    isContentLocked
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // @ts-ignore
    const {
      getSettings,
      __unstableGetContentLockingParent
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const settings = getSettings();
    return {
      imageDefaultSize: settings.imageDefaultSize,
      mediaUpload: settings.mediaUpload,
      isContentLocked: !!__unstableGetContentLockingParent(clientId)
    };
  }, []);
  const {
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_8__.store);
  function onUploadError(message) {
    // @ts-ignore
    createErrorNotice(message, {
      type: "snackbar"
    });
    setAttributes({
      id: undefined,
      url: undefined,
      // @ts-ignore
      src: undefined
    });
    setTemporaryURL(undefined);
  }
  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }
    if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(media.url)) {
      setTemporaryURL(media.url);
      return;
    }
    setTemporaryURL(undefined);
    let mediaAttributes = pickRelevantMediaFiles(media, imageDefaultSize);

    // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.
    if (captionRef.current && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(mediaAttributes, ["caption"])) {
      const {
        caption: omittedCaption,
        ...restMediaAttributes
      } = mediaAttributes;
      mediaAttributes = restMediaAttributes;
    }
    let additionalAttributes;
    // Reset the dimension attributes if changing to a different image.
    if (!media.id || media.id !== id) {
      const siseSlugggg = hasDefaultSize(media, imageDefaultSize) ? imageDefaultSize : "full";
      additionalAttributes = {
        general_settings: {
          ...general_settings,
          width: {
            Desktop: undefined,
            Tablet: undefined,
            Mobile: undefined
          },
          height: {
            Desktop: undefined,
            Tablet: undefined,
            Mobile: undefined
          },
          // Fallback to size "full" if there's no default image size.
          // It means the image is smaller, and the block will use a full-size URL.
          sizeSlug: {
            Desktop: siseSlugggg,
            Tablet: siseSlugggg,
            Mobile: siseSlugggg
          }
        }
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url
      };
    }
    const mediaUploadData = {
      mediaId: media.id || 0,
      mediaUrl: media.url,
      mediaSrcSet: media.srcset || "",
      sizes: media.sizes || media.media_details?.sizes || {}
    };

    // Check if default link setting should be used.
    let linkDestination = attributes.linkDestination;
    if (!linkDestination) {
      // Use the WordPress option to determine the proper default.
      // The constants used in Gutenberg do not match WP options so a little more complicated than ideal.
      // TODO: fix this in a follow up PR, requires updating media-text and ui component.
      switch (window?.wp?.media?.view?.settings?.defaultProps?.link || _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_NONE) {
        case "file":
        case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_MEDIA:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_MEDIA;
          break;
        case "post":
        case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_ATTACHMENT:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_ATTACHMENT;
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_CUSTOM:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_CUSTOM;
          break;
        case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_NONE:
          linkDestination = _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_NONE;
          break;
      }
    }

    // Check if the image is linked to it's media.
    let href;
    switch (linkDestination) {
      case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_MEDIA:
        href = media.url;
        break;
      case _constants__WEBPACK_IMPORTED_MODULE_14__.LINK_DESTINATION_ATTACHMENT:
        href = media.link;
        break;
    }
    mediaAttributes.href = href;
    setAttributes({
      ...mediaAttributes,
      ...additionalAttributes,
      linkDestination,
      general_image: {
        ...general_image,
        image: mediaUploadData
      }
    });
  }
  function onSelectURL(newURL) {
    if (newURL !== url) {
      setAttributes({
        url: newURL,
        id: undefined
      });
    }
  }
  let isTemp = isTemporaryImage(id, url);

  // Upload a temporary image on mount.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTemp) {
      return;
    }
    const file = (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.getBlobByURL)(url);
    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: ([img]) => {
          onSelectImage(img);
        },
        allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_14__.ALLOWED_MEDIA_TYPES,
        onError: message => {
          isTemp = false;
          onUploadError(message);
        }
      });
    }
  }, []);

  // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isTemp) {
      setTemporaryURL(url);
      return;
    }
    (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.revokeBlobURL)(temporaryURL || "");
  }, [isTemp, url]);
  const isExternal = isExternalImage(id, url);
  const src = isExternal ? url : undefined;
  const mediaPreview = !!url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Edit image"),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__.__)("Edit image"),
    className: "edit-image-preview",
    src: url
  }) : null;
  const {
    currentDeviceValue: align
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_15__["default"])(general_settings.alignment, deviceType);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`align${align}`]: align,
    "is-transient": temporaryURL
    // "is-resized": !!width || !!height,
    // [`size-${sizeSlug}`]: sizeSlug,
  });
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    ref,
    className: classes
  });
  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_21__["default"])(UNIQUE_ID)
    });
  }, [UNIQUE_ID]);
  //
  //
  //
  const WcbAttrsForSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return {
      uniqueId,
      advance_responsiveCondition,
      advance_zIndex,
      general_settings,
      general_image,
      style_image,
      style_overlay,
      style_caption,
      style_dimension
    };
  }, [uniqueId, advance_responsiveCondition, advance_zIndex, general_settings, general_image, style_image, style_overlay, style_caption, style_dimension]);
  const renderOverlay = () => {
    const InitWcbBlockHeadingAttrs = {
      heading: "Title of content",
      subHeading: "Description of content",
      styles_separator: {
        ..._block_heading_WcbHeadingPanelSeparator__WEBPACK_IMPORTED_MODULE_19__.WCB_HEADING_PANEL_SEPARATOR_DEMO,
        width: {
          Desktop: "20%"
        },
        border: {
          ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_20__.DEFAULT_BORDER_MAIN_SINGLE_SIDE,
          color: "#334155"
        }
      },
      general_content: {
        ..._block_heading_WcbHeadingPanelContent__WEBPACK_IMPORTED_MODULE_17__.WCB_HEADING_PANEL_CONTENT_DEMO,
        textAlignment: {
          Desktop: "center"
        },
        showSeparator: true,
        showSubHeading: true,
        headingTag: "h3"
      },
      styles_dimensions: {
        ..._block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_18__.WCB_HEADING_PANEL_DIMENSION_DEMO,
        dimension: {
          ..._block_heading_WcbHeadingPanelDimension__WEBPACK_IMPORTED_MODULE_18__.WCB_HEADING_PANEL_DIMENSION_DEMO.dimension,
          margin: {
            Desktop: {
              bottom: "1rem",
              top: "1rem",
              left: "1rem",
              right: "1rem"
            }
          }
        }
      }
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-bg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InnerBlocks, {
      allowedBlocks: [],
      template: [["boostify-blocks/heading", InitWcbBlockHeadingAttrs]]
    }))));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_12__["default"], {
    uniqueKey: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...wrapBlockProps,
    className: `${wrapBlockProps?.className} wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${uniqueId}`,
    "data-uniqueid": uniqueId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `wcb-image__wrap-figure is-selected`
    // {...wrapBlockProps}
    // className={`${wrapBlockProps?.className} wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${uniqueId}`}
    // data-uniqueid={uniqueId}
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GlobalCss__WEBPACK_IMPORTED_MODULE_10__["default"], {
    ...WcbAttrsForSave()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (temporaryURL || url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Image__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "wcb-image__image",
    temporaryURL: temporaryURL || "",
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onSelectURL: onSelectURL,
    onUploadError: onUploadError,
    containerRef: ref,
    context: context,
    clientId: clientId,
    isContentLocked: isContentLocked
  }), general_settings.layout === "overlay" && renderOverlay()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockIcon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_22__["default"]
    }),
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
    // @ts-ignore
    ,
    placeholder: placeholder,
    accept: "image/*",
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_14__.ALLOWED_MEDIA_TYPES,
    value: {
      id,
      src
    },
    mediaPreview: mediaPreview || undefined,
    disableMediaButtons: temporaryURL || url
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-image/GlobalCss.tsx":
/*!***************************************!*\
  !*** ./src/block-image/GlobalCss.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getBoxShadowStyles */ "./src/utils/getBoxShadowStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../________ */ "./src/________.ts");











const GlobalCss = attrs => {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    style_caption,
    style_image,
    style_overlay,
    style_dimension
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_8__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const IMAGE_FIGURE = `${WRAP_CLASSNAME}.wp-block-wcb-image`;
  const IMAGE_CLASSNAME = `${WRAP_CLASSNAME} img`;
  const CAPTION_CLASSNAME = `${WRAP_CLASSNAME} figcaption.wp-element-caption`;
  const OVERLAY_BG_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-bg`;
  const OVERLAY_CONTENT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-image__overlay-content`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return {
      [`${WRAP_CLASSNAME}`]: {
        [`@media (min-width: ${media_tablet})`]: {},
        [`@media (min-width: ${media_desktop})`]: {}
      }
    };
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: WRAP_CLASSNAME,
      padding: style_image.padding,
      margin: style_image.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-image__overlay-wrap`,
      padding: style_image.padding
    })]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.width,
      prefix: "width",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.height,
      prefix: "height",
      hasUnit: false,
      unit: "px"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: IMAGE_CLASSNAME,
      value: general_settings.objectFit,
      prefix: "objectFit"
    }),
    //
    (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: IMAGE_CLASSNAME,
      border: style_image.border,
      isWithRadius: true
    }), (0,_utils_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${OVERLAY_BG_CLASSNAME}`,
      radius: style_image.border.radius
    }), (0,_utils_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: IMAGE_CLASSNAME,
      boxShadow: style_image.boxShadow
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: IMAGE_CLASSNAME,
      margin: style_dimension?.margin,
      padding: style_dimension?.padding
    })]
  }), general_settings.layout === "overlay" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [OVERLAY_BG_CLASSNAME]: {
        justifyContent: general_settings.contentAlignment,
        backgroundColor: style_overlay.backgroundColor,
        ":hover": {
          backgroundColor: style_overlay.backgroundColorHover
        }
      }
    }]
  }) : null, general_settings.hoverImage === "zoomin" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "transform 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        transform: "scale(1.05)"
      }
    }]
  }) : general_settings.hoverImage === "slide" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        transform: "translateX(-20px)"
      }
    }]
  }) : general_settings.hoverImage === "grayscale" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "filter 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        filter: "grayscale(100%)"
      }
    }]
  }) : general_settings.hoverImage === "blur" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [IMAGE_CLASSNAME]: {
        transition: "filter 0.3s ease-in-out"
      },
      [`${WRAP_CLASSNAME}:hover img`]: {
        filter: "blur(2px)"
      }
    }]
  }) : null, general_settings.layout !== "overlay" ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_6__["default"])({
      className: CAPTION_CLASSNAME,
      value: general_settings.captionAlignment,
      prefix: "textAlign"
    }), (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_7__["default"])({
      className: CAPTION_CLASSNAME,
      typography: style_caption.typography
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      className: CAPTION_CLASSNAME,
      margin: style_caption.margin
    }), {
      [CAPTION_CLASSNAME]: {
        color: style_caption.textColor
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "flex"
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_9__.Global, {
    styles: [{
      [`${IMAGE_FIGURE}.alignright`]: {
        marginLeft: 'auto',
        marginRight: 0
      },
      [`${IMAGE_FIGURE}.alignleft`]: {
        marginLeft: 0,
        marginRight: 'auto'
      },
      [`${IMAGE_FIGURE}.aligncenter`]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
      }
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-image/Image.tsx":
/*!***********************************!*\
  !*** ./src/block-image/Image.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/caption.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/crop.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/upload.js");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _use_client_width__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./use-client-width */ "./src/block-image/use-client-width.ts");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Edit */ "./src/block-image/Edit.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants */ "./src/block-image/constants.ts");
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AdvancePanelCommon */ "./src/components/AdvancePanelCommon.tsx");
/* harmony import */ var _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WcbImagePanelSettings */ "./src/block-image/WcbImagePanelSettings.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./WcbImagePanel_StyleImage */ "./src/block-image/WcbImagePanel_StyleImage.tsx");
/* harmony import */ var _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./WcbImagePanel_StyleOverlay */ "./src/block-image/WcbImagePanel_StyleOverlay.tsx");
/* harmony import */ var _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./WcbImagePanel_StyleCaption */ "./src/block-image/WcbImagePanel_StyleCaption.tsx");
/* harmony import */ var _WcbImagePanelImages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./WcbImagePanelImages */ "./src/block-image/WcbImagePanelImages.tsx");
/* harmony import */ var _WcbImagePanel_StyleDimension__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./WcbImagePanel_StyleDimension */ "./src/block-image/WcbImagePanel_StyleDimension.tsx");













// @ts-ignore
















const Image = ({
  temporaryURL,
  attributes,
  setAttributes,
  isSelected,
  insertBlocksAfter,
  onReplace,
  onSelectImage,
  onSelectURL,
  onUploadError,
  containerRef,
  context,
  clientId,
  isContentLocked
}) => {
  const {
    url = "",
    alt,
    caption,
    id,
    href,
    rel,
    linkClass,
    linkDestination,
    title,
    linkTarget,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings,
    general_image,
    uniqueId,
    style_image,
    style_overlay,
    style_caption,
    style_dimension
  } = attributes;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_20__["default"])() || "Desktop";
  const imageRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  const prevCaption = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(caption);
  const [showCaption, setShowCaption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(!!caption);
  const {
    allowResize = true
  } = context;
  const {
    currentDeviceValue: align = ""
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.alignment,
  // "Desktop"
  deviceType);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (general_image.image.mediaUrl !== url) {
      setAttributes({
        url: general_image.image.mediaUrl
      });
    }
  }, [general_image.image, url, id, setAttributes]);
  const {
    image,
    multiImageSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // @ts-ignore
    const {
      getMedia
    } = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_12__.store);
    // @ts-ignore
    const {
      getMultiSelectedBlockClientIds,
      getBlockName
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const multiSelectedClientIds = getMultiSelectedBlockClientIds();
    return {
      image: id && isSelected ? getMedia(id, {
        context: "view"
      }) : null,
      multiImageSelection: multiSelectedClientIds.length && multiSelectedClientIds.every(_clientId => getBlockName(_clientId) === "core/image")
    };
  }, [id, isSelected, clientId]);
  // @ts-ignore
  const {
    canInsertCover,
    imageEditing,
    imageSizes,
    maxWidth,
    mediaUpload
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    // @ts-ignore
    const {
      getBlockRootClientId,
      getSettings,
      canInsertBlockType
    } = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
    const rootClientId = getBlockRootClientId(clientId);
    const settings = Object.fromEntries(Object.entries(getSettings()).filter(([key]) => ["imageEditing", "imageSizes", "maxWidth", "mediaUpload"].includes(key)));
    return {
      ...settings,
      canInsertCover: canInsertBlockType("core/cover", rootClientId)
    };
  }, [clientId]);
  const {
    replaceBlocks,
    toggleSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.store);
  const {
    createErrorNotice,
    createSuccessNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_11__.store);
  const isLargeViewport = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useViewportMatch)("medium");
  const isWideAligned = ["wide", "full"].includes(align);
  // @ts-ignore
  const [{
    loadedNaturalWidth,
    loadedNaturalHeight
  }, setLoadedNaturalSize] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)({});
  const [isEditingImage, setIsEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const [externalBlob, setExternalBlob] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useState)();
  const clientWidth = (0,_use_client_width__WEBPACK_IMPORTED_MODULE_13__["default"])(containerRef, [align]);
  const isResizable = allowResize && !isContentLocked && !(isWideAligned && isLargeViewport);
  const imageSizeOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(imageSizes.filter(({
    slug
  }) => (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ["media_details", "sizes", slug, "source_url"])), ({
    name,
    slug
  }) => ({
    value: slug,
    label: name
  }));
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!(0,_Edit__WEBPACK_IMPORTED_MODULE_14__.isExternalImage)(id, url) || !isSelected || externalBlob) {
      return;
    }
    window.fetch(url).then(response => response.blob())
    // @ts-ignore
    .then(blob => setExternalBlob(blob))
    // Do nothing, cannot upload.
    .catch(() => {});
  }, [id, url, isSelected, externalBlob]);

  // We need to show the caption when changes come from
  // history navigation(undo/redo).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (caption && !prevCaption) {
      setShowCaption(true);
    }
  }, [caption, prevCaption]);

  // Focus the caption when we click to add one.
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useCallback)(node => {
    if (node && !caption) {
      node.focus();
    }
  }, [caption]);
  const {
    naturalWidth,
    naturalHeight
  } = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => {
    return {
      naturalWidth: imageRef.current?.naturalWidth || loadedNaturalWidth || undefined,
      naturalHeight: imageRef.current?.naturalHeight || loadedNaturalHeight || undefined
    };
  }, [loadedNaturalWidth, loadedNaturalHeight, imageRef.current?.complete]);
  function onResizeStart() {
    toggleSelection(false);
  }
  function onResizeStop() {
    toggleSelection(true);
  }
  function onImageError() {
    // Check if there's an embed block that handles this URL, e.g., instagram URL.
    // See: https://github.com/WordPress/gutenberg/pull/11472
  }
  function onSetHref(props) {
    setAttributes(props);
  }
  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }
  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }
  function updateImage(newSizeSlug) {
    const newUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ["media_details", "sizes", newSizeSlug, "source_url"]);
    if (!newUrl) {
      return null;
    }
    setAttributes({
      url: newUrl,
      general_settings: {
        ...general_settings,
        width: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        height: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        sizeSlug: {
          ...general_settings.sizeSlug,
          [deviceType]: newSizeSlug
        }
      }
    });
  }
  function uploadExternal() {
    mediaUpload({
      filesList: [externalBlob],
      onFileChange([img]) {
        onSelectImage(img);
        if ((0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(img.url)) {
          return;
        }
        setExternalBlob(undefined);
        // @ts-ignore
        createSuccessNotice((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Image uploaded."), {
          type: "snackbar"
        });
      },
      allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
      onError(message) {
        // @ts-ignore
        createErrorNotice(message, {
          type: "snackbar"
        });
      }
    });
  }
  function updateAlignment(nextAlign) {
    const extraUpdatedAttributes = ["wide", "full"].includes(nextAlign) ? {
      general_settings: {
        ...general_settings,
        width: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        height: {
          Desktop: undefined,
          Tablet: undefined,
          Mobile: undefined
        },
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    } : {
      general_settings: {
        ...general_settings,
        alignment: {
          ...general_settings.alignment,
          [deviceType]: nextAlign
        }
      }
    };
    setAttributes({
      ...extraUpdatedAttributes
    });
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!isSelected) {
      setIsEditingImage(false);
      if (!caption) {
        setShowCaption(false);
      }
    }
  }, [isSelected, caption]);
  const canEditImage = id && naturalWidth && naturalHeight && imageEditing;
  const allowCrop = !multiImageSelection && canEditImage && !isEditingImage;
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_17__["default"])(uniqueId);

  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanelImages__WEBPACK_IMPORTED_MODULE_25__["default"], {
          onToggle: () => handleTogglePanel("General", "Images"),
          initialOpen: tabGeneralIsPanelOpen === "General",
          opened: tabGeneralIsPanelOpen === "first" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_image: {
                ...data
              }
            });
          },
          panelData: general_image
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_19__["default"], {
          onToggle: () => handleTogglePanel("General", "General", true),
          initialOpen: tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "settings",
          opened: tabGeneralIsPanelOpen === "General" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_settings: data
            });
          },
          panelData: general_settings
          //
          ,
          imageSizeOptions: imageSizeOptions,
          isResizable: isResizable,
          naturalHeight: naturalHeight,
          naturalWidth: naturalWidth,
          setAttributes: setAttributes,
          updateImage: updateImage,
          alt: alt,
          enableCaption: showCaption,
          toggleEnableCaption: checked => {
            setShowCaption(checked);
          }
        }));
      case "Styles":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_22__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleImage", true),
          initialOpen: tabStylesIsPanelOpen === "_StyleImage" || tabStylesIsPanelOpen === "first",
          opened: tabStylesIsPanelOpen === "_StyleImage" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_image: data
            });
          },
          panelData: style_image
        }), general_settings.layout === "overlay" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_23__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleOverlay"),
          initialOpen: tabStylesIsPanelOpen === "_StyleOverlay",
          opened: tabStylesIsPanelOpen === "_StyleOverlay" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_overlay: data
            });
          },
          panelData: style_overlay
        }), showCaption && general_settings.layout !== "overlay" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_24__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleCaption"),
          initialOpen: tabStylesIsPanelOpen === "_StyleCaption",
          opened: tabStylesIsPanelOpen === "_StyleCaption" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_caption: data
            });
          },
          panelData: style_caption
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbImagePanel_StyleDimension__WEBPACK_IMPORTED_MODULE_26__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleDimension"),
          initialOpen: tabStylesIsPanelOpen === "_StyleDimension",
          opened: tabStylesIsPanelOpen === "_StyleDimension" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_dimension: data
            });
          },
          panelData: style_dimension
        }));
      case "Advances":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_18__["default"], {
          advance_responsiveCondition: attributes.advance_responsiveCondition,
          advance_zIndex: attributes.advance_zIndex,
          handleTogglePanel: handleTogglePanel,
          setAttributes: setAttributes,
          tabAdvancesIsPanelOpen: tabAdvancesIsPanelOpen
        }));
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null);
    }
  };
  const controls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "block"
  }, !isContentLocked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: () => {
      setShowCaption(!showCaption);
      if (showCaption && caption) {
        setAttributes({
          caption: undefined
        });
      }
    },
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_27__["default"],
    isPressed: showCaption,
    label: showCaption ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Remove caption") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add caption")
  }), !multiImageSelection && !isEditingImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageURLInputUI, {
    url: href || "",
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url || url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkClass,
    rel: rel
  }), allowCrop && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: () => setIsEditingImage(true),
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_28__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Crop")
  }), externalBlob && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: uploadExternal,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_29__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Upload external image")
  })), !multiImageSelection && !isEditingImage &&
  // @ts-ignore
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, {
    group: "other"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: _constants__WEBPACK_IMPORTED_MODULE_15__.ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectImage,
    onSelectURL: onSelectURL,
    onError: onUploadError
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, {
    __experimentalGroup: "advanced"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Title attribute"),
    value: title || "",
    onChange: onSetTitle,
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Describe the role of this image on the page."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("(Note: many devices and browsers do not display this text.)")))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_16__["default"], {
    renderTabPanels: renderTabBodyPanels,
    uniqueId: uniqueId
  }));

  //
  const {
    currentDeviceValue: WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.width, deviceType);
  const {
    currentDeviceValue: HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.height, deviceType);
  const {
    currentDeviceValue: SIZE_SLUG
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_21__["default"])(general_settings.sizeSlug, deviceType);
  //

  const filename = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_9__.getFilename)(url);
  let defaultedAlt;
  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.sprintf)(/* translators: %s: file name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("This image has an empty alt attribute; its file name is %s"), filename);
  } else {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("This image has an empty alt attribute");
  }
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalUseBorderProps)(attributes);
  // @ts-ignore
  const isRounded = attributes.className?.includes("is-style-rounded");
  const hasCustomBorder = !!borderProps.className || !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(borderProps.style);
  let img =
  // Disable reason: Image itself is not meant to be interactive, but
  // should direct focus to block.
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: temporaryURL || url,
    alt: defaultedAlt,
    onError: () => onImageError(),
    onLoad: event => {
      setLoadedNaturalSize({
        // @ts-ignore
        loadedNaturalWidth: event.target?.naturalWidth,
        // @ts-ignore
        loadedNaturalHeight: event.target?.naturalHeight
      });
    },
    ref: imageRef,
    className: borderProps.className,
    style: borderProps.style
  }), temporaryURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null))
  /* eslint-enable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events */;
  let imageWidthWithinContainer;
  let imageHeightWithinContainer;
  if (clientWidth && naturalWidth && naturalHeight) {
    const exceedMaxWidth = naturalWidth > clientWidth;
    const ratio = naturalHeight / naturalWidth;
    imageWidthWithinContainer = exceedMaxWidth ? clientWidth : naturalWidth;
    imageHeightWithinContainer = exceedMaxWidth ? clientWidth * ratio : naturalHeight;
  }
  if (canEditImage && isEditingImage) {
    img = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageEditor, {
      borderProps: isRounded ? undefined : borderProps,
      url: url,
      width: WIDTH,
      height: HEIGHT,
      clientWidth: clientWidth,
      naturalHeight: naturalHeight,
      naturalWidth: naturalWidth
    });
  } else if (!isResizable || !imageWidthWithinContainer) {
    img = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        width: WIDTH,
        height: HEIGHT
      }
    }, img);
  } else {
    const currentWidth = WIDTH || imageWidthWithinContainer;
    const currentHeight = HEIGHT || imageHeightWithinContainer;
    const ratio = naturalWidth / naturalHeight;
    const minWidth = naturalWidth < naturalHeight ? _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE * ratio;
    const minHeight = naturalHeight < naturalWidth ? _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE : _constants__WEBPACK_IMPORTED_MODULE_15__.MIN_SIZE / ratio;

    // ==============
    const maxWidthBuffer = maxWidth * 2.5;
    let showRightHandle = false;
    let showLeftHandle = false;

    /* eslint-disable no-lonely-if */
    // See https://github.com/WordPress/gutenberg/issues/7584.
    if (align === "center") {
      // When the image is centered, show both handles.
      showRightHandle = true;
      showLeftHandle = true;
    } else if ((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.isRTL)()) {
      // In RTL mode the image is on the right by default.
      // Show the right handle and hide the left handle only when it is
      // aligned left. Otherwise always show the left handle.
      if (align === "left") {
        showRightHandle = true;
      } else {
        showLeftHandle = true;
      }
    } else {
      // Show the left handle and hide the right handle only when the
      // image is aligned right. Otherwise always show the right handle.
      if (align === "right") {
        showLeftHandle = true;
      } else {
        showRightHandle = true;
      }
    }
    /* eslint-enable no-lonely-if */

    img = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ResizableBox, {
      className: "wcb-image__ResizableBox",
      size: {
        width: WIDTH || "auto",
        height: HEIGHT && !hasCustomBorder ? HEIGHT : "auto"
      },
      showHandle: isSelected,
      minWidth: minWidth,
      maxWidth: maxWidthBuffer,
      minHeight: minHeight,
      maxHeight: maxWidthBuffer / ratio,
      lockAspectRatio: true,
      enable: {
        top: false,
        right: showRightHandle,
        bottom: true,
        left: showLeftHandle
      },
      onResizeStart: onResizeStart,
      onResizeStop: (event, direction, elt, delta) => {
        onResizeStop();
        setAttributes({
          general_settings: {
            ...general_settings,
            width: {
              ...general_settings.width,
              [deviceType]: parseInt(currentWidth + delta.width, 10)
            },
            height: {
              ...general_settings.height,
              [deviceType]: parseInt(currentHeight + delta.height, 10)
            }
          }
        });
      },
      resizeRatio: align === "center" ? 2 : 1
    }, img);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !temporaryURL && controls, img, showCaption && (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText.isEmpty(caption) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText, {
    identifier: "caption",
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalGetElementClassName)("caption")
    // @ts-ignore
    ,
    ref: captionRef,
    tagName: "figcaption",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Image caption text"),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Add caption"),
    value: caption,
    onChange: value => setAttributes({
      caption: value
    }),
    inlineToolbar: true
    // @ts-ignore
    ,
    __unstableOnSplitAtEnd: () =>
    // @ts-ignore
    insertBlocksAfter((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__.createBlock)((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_10__.getDefaultBlockName)()))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./src/block-image/Save.tsx":
/*!**********************************!*\
  !*** ./src/block-image/Save.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-image/style.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");



// @ts-ignore





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    alt,
    caption,
    href,
    id,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    title,
    url,
    general_settings,
    general_image,
    style_image,
    style_overlay,
    style_caption,
    style_dimension
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings: {
      ...general_settings,
      // Make sure Height and Width are always object, not array
      height: typeof general_settings.height === 'object' && !Array.isArray(general_settings.height) ? general_settings.height : {
        Desktop: undefined
      },
      width: typeof general_settings.width === 'object' && !Array.isArray(general_settings.width) ? general_settings.width : {
        Desktop: undefined
      }
    },
    style_image,
    style_overlay,
    style_caption,
    style_dimension,
    general_image
  };
  const {
    currentDeviceValue: align
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.alignment, "Desktop");
  const {
    currentDeviceValue: WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.width, "Desktop");
  const {
    currentDeviceValue: HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.height, "Desktop");
  //
  //

  const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(rel) ? undefined : rel;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalGetBorderClassesAndStyles)(attributes);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [`align${align}`]: align
    // [`size-${sizeSlug}`]: sizeSlug,
    // "is-resized": width || height,
    // "has-custom-border": !!borderProps.className || !isEmpty(borderProps.style),
  });
  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(borderProps.className, {
    [`wp-image-${id}`]: !!id
  });
  const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt || "",
    className: imageClasses || undefined,
    style: borderProps.style,
    width: WIDTH,
    height: HEIGHT,
    title: title
  });
  // Render overlay content if layout is overlay
  const renderOverlay = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-bg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null))));
  };
  // Always render figure
  const figure = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `wcb-image__wrap-figure`
  }, href ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalGetElementClassName)("caption"),
    tagName: "figcaption",
    value: caption || ""
  }), general_settings.layout === "overlay" && renderOverlay()));
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps.save({
    className: `woostify-container wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${classes}`.trim(),
    style: {
      display: "flex",
      justifyContent: attributes.general_settings?.alignment?.Desktop
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "div"
  }, figure);
}

/***/ }),

/***/ "./src/block-image/Save__230626.tsx":
/*!******************************************!*\
  !*** ./src/block-image/Save__230626.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-image/style.scss");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");



// @ts-ignore





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    alt,
    caption,
    href,
    id,
    linkClass,
    linkDestination,
    linkTarget,
    rel,
    title,
    url,
    general_settings,
    general_image,
    style_image,
    style_overlay,
    style_caption
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_settings: {
      ...general_settings,
      // Make sure Height and Width are always object, not array
      height: typeof general_settings.height === 'object' && !Array.isArray(general_settings.height) ? general_settings.height : {
        Desktop: undefined
      },
      width: typeof general_settings.width === 'object' && !Array.isArray(general_settings.width) ? general_settings.width : {
        Desktop: undefined
      }
    },
    style_image,
    style_overlay,
    style_caption
  };
  const {
    currentDeviceValue: align
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.alignment, "Desktop");
  const {
    currentDeviceValue: WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.width, "Desktop");
  const {
    currentDeviceValue: HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(general_settings.height, "Desktop");
  //
  //

  const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(rel) ? undefined : rel;
  const borderProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalGetBorderClassesAndStyles)(attributes);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    [`align${align}`]: align
    // [`size-${sizeSlug}`]: sizeSlug,
    // "is-resized": width || height,
    // "has-custom-border": !!borderProps.className || !isEmpty(borderProps.style),
  });
  const imageClasses = classnames__WEBPACK_IMPORTED_MODULE_3___default()(borderProps.className, {
    [`wp-image-${id}`]: !!id
  });
  const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt || "",
    className: imageClasses || undefined,
    style: borderProps.style,
    width: WIDTH,
    height: HEIGHT,
    title: title
  });
  // Render overlay content if layout is overlay
  const renderOverlay = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-bg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-image__overlay-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks.Content, null))));
  };
  // Always render figure
  const figure = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: `wcb-image__wrap-figure`
  }, href ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : image, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText.Content, {
    className: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.__experimentalGetElementClassName)("caption"),
    tagName: "figcaption",
    value: caption || ""
  }), general_settings.layout === "overlay" && renderOverlay()));
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps.save({
    className: `woostify-container wcb-image__wrap wcb-image__wrap--${general_settings.layout} ${classes}`.trim(),
    style: {
      display: "flex",
      justifyContent: attributes.general_settings?.alignment?.Desktop
    }
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "div"
  }, figure);
}

/***/ }),

/***/ "./src/block-image/WcbImagePanelImages.tsx":
/*!*************************************************!*\
  !*** ./src/block-image/WcbImagePanelImages.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_IMAGES_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_IMAGES_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_controls_MyBackgroundControl_MyBackgroundControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBackgroundControl/MyBackgroundControl */ "./src/components/controls/MyBackgroundControl/MyBackgroundControl.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyMediaUploadCheck */ "./src/components/controls/MyMediaUploadCheck.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _hooks_useGetImageSizeOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useGetImageSizeOptions */ "./src/hooks/useGetImageSizeOptions.ts");










const WCB_IMAGE_PANEL_IMAGES_DEMO = {
  image: _components_controls_MyBackgroundControl_MyBackgroundControl__WEBPACK_IMPORTED_MODULE_4__.INIT_IMAGE_DATA_UPLOAD_DEMO,
  isShowImage: true
};
const WcbImagePanelImages = ({
  panelData = WCB_IMAGE_PANEL_IMAGES_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    image,
    isShowImage
  } = panelData;
  //
  const {
    imageSizeOptions
  } = (0,_hooks_useGetImageSizeOptions__WEBPACK_IMPORTED_MODULE_8__["default"])();
  const renderSelectImage = () => {
    if (!isShowImage) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Please enable the "Show Image" field to select images for testimonials...', "boostify-blocks"));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      hasResponsive: false
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Choose Image", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_6__["default"], {
      imageData: image,
      onChange: data => {
        setAttr__({
          ...panelData,
          image: data
        });
      }
    })));
  };
  const TABS = [{
    name: "SelectImages",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Images", "boostify-blocks")
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Images", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel`,
    activeClass: "active-tab",
    initialTabName: "SelectImages",
    tabs: TABS
  }, renderSelectImage)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanelImages);

/***/ }),

/***/ "./src/block-image/WcbImagePanelSettings.tsx":
/*!***************************************************!*\
  !*** ./src/block-image/WcbImagePanelSettings.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_SETTINGS_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_SETTINGS_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySelect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");



// @ts-ignore








const WCB_IMAGE_PANEL_SETTINGS_DEMO = {
  alignment: {
    Desktop: "center"
  },
  captionAlignment: {
    Desktop: "center"
  },
  height: {
    Desktop: undefined
  },
  sizeSlug: {
    Desktop: undefined
  },
  width: {
    Desktop: undefined
  },
  objectFit: {
    Desktop: "initial"
  },
  hoverImage: "static",
  layout: "normal",
  contentAlignment: "center"
};
const WcbImagePanelSettings = ({
  panelData = WCB_IMAGE_PANEL_SETTINGS_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened,
  //
  updateImage,
  setAttributes,
  imageSizeOptions,
  isResizable,
  naturalHeight,
  naturalWidth,
  alt,
  enableCaption,
  toggleEnableCaption
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    alignment,
    captionAlignment,
    objectFit
  } = panelData;
  const {
    currentDeviceValue: TEXT_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(alignment, deviceType);
  const {
    currentDeviceValue: CAPTION_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(captionAlignment, deviceType);
  const {
    currentDeviceValue: currentWidth
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(panelData.width, deviceType);
  const {
    currentDeviceValue: currentHeight
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(panelData.height, deviceType);
  const {
    currentDeviceValue: currentSizeSlug
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(panelData.sizeSlug, deviceType);
  const {
    currentDeviceValue: currentObjectFit
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(objectFit, deviceType);
  //

  //
  const handleChangeImageAlignment = selected => {
    setAttr__({
      ...panelData,
      alignment: {
        ...alignment,
        [deviceType]: selected
      }
    });
  };
  const handleChangeCaptionAlignment = selected => {
    setAttr__({
      ...panelData,
      captionAlignment: {
        ...captionAlignment,
        [deviceType]: selected
      }
    });
  };
  //

  const OBJECT_FIT_OPTIONS = [{
    value: "initial",
    label: "Default"
  }, {
    value: "fill",
    label: "Fill"
  }, {
    value: "cover",
    label: "Cover"
  }, {
    value: "contain",
    label: "Contain"
  }];
  const HOVER_IMAGE_OPTIONS = [{
    value: "static",
    label: "Static"
  }, {
    value: "zoomin",
    label: "Zoom In"
  }, {
    value: "slide",
    label: "Slide"
  }, {
    value: "grayscale",
    label: "Grayscale"
  }, {
    value: "blur",
    label: "Blur"
  }];
  const PLANS_LAYOUT = [{
    name: "normal",
    icon: "Normal"
  }, {
    name: "overlay",
    icon: "Overlay"
  }];
  const PLANS_CONTENT_ALIGNMENT = [{
    name: "flex-start",
    icon: "Top"
  }, {
    name: "center",
    icon: "Middle"
  }, {
    name: "flex-end",
    icon: "Bottom"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Settings", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: handleChangeImageAlignment,
    value: TEXT_ALIGNMENT,
    label: "Alignment"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl
  // @ts-ignore
  , {
    __nextHasNoMarginBottom: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Alt text (alternative text)"),
    value: alt,
    onChange: data => {
      setAttributes({
        alt: data
      });
    },
    help: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Describe the purpose of the image")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Leave empty if the image is purely decorative."))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    plans: PLANS_LAYOUT,
    value: panelData.layout,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        layout: value
      });
    }
  }), panelData.layout === "overlay" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    plans: PLANS_CONTENT_ALIGNMENT,
    value: panelData.contentAlignment,
    hasResponsive: false,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content alignment", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        contentAlignment: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Dimensions",
    hasResponsive: true,
    defaultOpen: true,
    isDisableButton: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.__experimentalImageSizeControl, {
    onChangeImage: updateImage,
    onChange: ({
      width,
      height
    }) => {
      if (typeof width === "undefined" && typeof height === "undefined") {
        setAttr__({
          ...panelData,
          width: {
            ...panelData.width,
            [deviceType]: undefined
          },
          height: {
            ...panelData.height,
            [deviceType]: undefined
          }
        });
      } else {
        const W = width ? {
          width: {
            ...panelData.width,
            [deviceType]: width
          }
        } : {};
        const H = height ? {
          height: {
            ...panelData.height,
            [deviceType]: height
          }
        } : {};
        setAttr__({
          ...panelData,
          ...W,
          ...H
        });
      }
    },
    slug: currentSizeSlug,
    width: currentWidth,
    height: currentHeight,
    imageSizeOptions: imageSizeOptions,
    isResizable: isResizable,
    imageWidth: naturalWidth,
    imageHeight: naturalHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Object Fit", "boostify-blocks"),
    hasResponsive: true,
    onChange: value => {
      setAttr__({
        ...panelData,
        objectFit: {
          ...objectFit,
          [deviceType]: value
        }
      });
    },
    value: currentObjectFit,
    options: OBJECT_FIT_OPTIONS
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("On Hover Image", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        hoverImage: value
      });
    },
    value: panelData.hoverImage,
    options: HOVER_IMAGE_OPTIONS
  }), panelData.layout !== "overlay" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable caption", "boostify-blocks"),
    checked: enableCaption,
    onChange: toggleEnableCaption
  }), panelData.layout !== "overlay" && enableCaption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    textAlignment: CAPTION_ALIGNMENT,
    onChange: handleChangeCaptionAlignment,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Caption alignment", "boostify-blocks")
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanelSettings);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleCaption.tsx":
/*!********************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleCaption.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");










const WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "",
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const WcbImagePanel_StyleCaption = ({
  panelData = WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    margin
  } = panelData;
  const {
    currentDeviceValue: currentMargin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(margin, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Caption", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: textColor,
    onChange: textColor => {
      setAttr__({
        ...panelData,
        textColor
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
      hasResponsive: true,
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "boostify-blocks")),
    values: currentMargin,
    onChange: data => {
      setAttr__({
        ...panelData,
        margin: {
          ...margin,
          [deviceType]: data
        }
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanel_StyleCaption);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleDimension.tsx":
/*!**********************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleDimension.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_STYLE_DIMENSION_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_STYLE_DIMENSION_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/types */ "./src/components/controls/MyDimensionsControl/types.ts");






const WCB_IMAGE_PANEL_STYLE_DIMENSION_DEMO = {
  ..._components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const WcbImagePanel_StyleDimension = ({
  panelData = WCB_IMAGE_PANEL_STYLE_DIMENSION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Dimension", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    dimensionControl: panelData,
    setAttrs__dimensions: data => setAttr__({
      ...panelData,
      ...data
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanel_StyleDimension);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleImage.tsx":
/*!******************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleImage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyBoxShadowControl_MyBoxShadowControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/MyBoxShadowControl */ "./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx");
/* harmony import */ var _components_controls_MyBoxShadowControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/types */ "./src/components/controls/MyBoxShadowControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO = {
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO,
  boxShadow: _components_controls_MyBoxShadowControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_BOX_SHADOW_CONTROL_DEMO,
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const WcbImagePanel_StyleImage = ({
  panelData = WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__["default"])() || "Desktop";
  const {
    border,
    boxShadow,
    padding,
    margin
  } = panelData;
  const {
    currentDeviceValue: currentPadding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(padding, deviceType);
  const {
    currentDeviceValue: currentMargin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(margin, deviceType);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    defaultOpen: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: border,
    setAttrs__border: data => {
      setAttr__({
        ...panelData,
        border: data
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Box shadow", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBoxShadowControl_MyBoxShadowControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    boxShadowControl: boxShadow,
    setAttrs__boxShadow: data => {
      setAttr__({
        ...panelData,
        boxShadow: data
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dimensionControl: panelData,
    setAttrs__dimensions: data => setAttr__({
      ...panelData,
      ...data
    })
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanel_StyleImage);

/***/ }),

/***/ "./src/block-image/WcbImagePanel_StyleOverlay.tsx":
/*!********************************************************!*\
  !*** ./src/block-image/WcbImagePanel_StyleOverlay.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO: () => (/* binding */ WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");







const WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO = {
  backgroundColor: "",
  backgroundColorHover: ""
};
const WcbImagePanel_StyleOverlay = ({
  panelData = WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    backgroundColor,
    backgroundColorHover
  } = panelData;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Overlay", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: backgroundColor,
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColor: color
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: backgroundColorHover,
    onChange: color => {
      setAttr__({
        ...panelData,
        backgroundColorHover: color
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background hover color")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Let's customize the opacity of the background right inside the color-picker popover", "boostify-blocks"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbImagePanel_StyleOverlay);

/***/ }),

/***/ "./src/block-image/attributes.ts":
/*!***************************************!*\
  !*** ./src/block-image/attributes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");
/* harmony import */ var _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WcbImagePanelSettings */ "./src/block-image/WcbImagePanelSettings.tsx");
/* harmony import */ var _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WcbImagePanel_StyleCaption */ "./src/block-image/WcbImagePanel_StyleCaption.tsx");
/* harmony import */ var _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WcbImagePanel_StyleImage */ "./src/block-image/WcbImagePanel_StyleImage.tsx");
/* harmony import */ var _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbImagePanel_StyleOverlay */ "./src/block-image/WcbImagePanel_StyleOverlay.tsx");
/* harmony import */ var _WcbImagePanelImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WcbImagePanelImages */ "./src/block-image/WcbImagePanelImages.tsx");
/* harmony import */ var _WcbImagePanel_StyleDimension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WcbImagePanel_StyleDimension */ "./src/block-image/WcbImagePanel_StyleDimension.tsx");








const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  //
  general_settings: {
    type: "object",
    default: _WcbImagePanelSettings__WEBPACK_IMPORTED_MODULE_2__.WCB_IMAGE_PANEL_SETTINGS_DEMO
  },
  general_image: {
    type: "object",
    default: _WcbImagePanelImages__WEBPACK_IMPORTED_MODULE_6__.WCB_IMAGE_PANEL_IMAGES_DEMO
  },
  style_image: {
    type: "object",
    default: _WcbImagePanel_StyleImage__WEBPACK_IMPORTED_MODULE_4__.WCB_IMAGE_PANEL_STYLE_IMAGE_DEMO
  },
  style_overlay: {
    type: "object",
    default: _WcbImagePanel_StyleOverlay__WEBPACK_IMPORTED_MODULE_5__.WCB_IMAGE_PANEL_STYLE_OVERLAY_DEMO
  },
  style_caption: {
    type: "object",
    default: _WcbImagePanel_StyleCaption__WEBPACK_IMPORTED_MODULE_3__.WCB_IMAGE_PANEL_STYLE_CAPTION_DEMO
  },
  style_dimension: {
    type: "object",
    default: _WcbImagePanel_StyleDimension__WEBPACK_IMPORTED_MODULE_7__.WCB_IMAGE_PANEL_STYLE_DIMENSION_DEMO
  },
  //

  url: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "src",
    __experimentalRole: "content"
  },
  alt: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "alt",
    default: "",
    __experimentalRole: "content"
  },
  caption: {
    type: "string",
    source: "html",
    selector: "figcaption",
    default: "",
    __experimentalRole: "content"
  },
  title: {
    type: "string",
    source: "attribute",
    selector: "img",
    attribute: "title",
    __experimentalRole: "content"
  },
  href: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "href",
    __experimentalRole: "content"
  },
  rel: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "rel"
  },
  linkClass: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "class"
  },
  id: {
    type: "number",
    __experimentalRole: "content"
  },
  linkDestination: {
    type: "string"
  },
  linkTarget: {
    type: "string",
    source: "attribute",
    selector: "figure > a",
    attribute: "target"
  },
  // THE ATTRS OF BLOCK HERE

  // ADVANCE
  advance_responsiveCondition: {
    type: "object",
    default: _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__.RESPONSIVE_CONDITON_DEMO
  },
  advance_zIndex: {
    type: "object",
    default: _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__.Z_INDEX_DEMO
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokc1Attrs);

/***/ }),

/***/ "./src/block-image/block.json":
/*!************************************!*\
  !*** ./src/block-image/block.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"boostify-blocks/image","version":"0.1.0","title":"Image","category":"boostify-blocks","icon":"- wcb-block-editor-block-icon lni lni-image","description":"Insert an image to make a visual statement.","supports":{"html":false,"anchor":true},"textdomain":"boostify-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/block-image/constants.ts":
/*!**************************************!*\
  !*** ./src/block-image/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALLOWED_MEDIA_TYPES: () => (/* binding */ ALLOWED_MEDIA_TYPES),
/* harmony export */   LINK_DESTINATION_ATTACHMENT: () => (/* binding */ LINK_DESTINATION_ATTACHMENT),
/* harmony export */   LINK_DESTINATION_CUSTOM: () => (/* binding */ LINK_DESTINATION_CUSTOM),
/* harmony export */   LINK_DESTINATION_MEDIA: () => (/* binding */ LINK_DESTINATION_MEDIA),
/* harmony export */   LINK_DESTINATION_NONE: () => (/* binding */ LINK_DESTINATION_NONE),
/* harmony export */   MEDIA_ID_NO_FEATURED_IMAGE_SET: () => (/* binding */ MEDIA_ID_NO_FEATURED_IMAGE_SET),
/* harmony export */   MIN_SIZE: () => (/* binding */ MIN_SIZE),
/* harmony export */   NEW_TAB_REL: () => (/* binding */ NEW_TAB_REL)
/* harmony export */ });
const MIN_SIZE = 20;
const LINK_DESTINATION_NONE = "none";
const LINK_DESTINATION_MEDIA = "media";
const LINK_DESTINATION_ATTACHMENT = "attachment";
const LINK_DESTINATION_CUSTOM = "custom";
const NEW_TAB_REL = ["noreferrer", "noopener"];
const ALLOWED_MEDIA_TYPES = ["image"];
const MEDIA_ID_NO_FEATURED_IMAGE_SET = 0;

/***/ }),

/***/ "./src/block-image/deprecated.tsx":
/*!****************************************!*\
  !*** ./src/block-image/deprecated.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Save_230626__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save__230626 */ "./src/block-image/Save__230626.tsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes */ "./src/block-image/attributes.ts");


const v1 = {};
const v2 = {};

// v3: blocks saved before 2026-06-23. Snapshot of Save.tsx at that date.
const v3 = {
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _Save_230626__WEBPACK_IMPORTED_MODULE_0__["default"]
};

// Order: newest deprecated first, oldest last.
const deprecated = [v3, v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/block-image/editor.scss":
/*!*************************************!*\
  !*** ./src/block-image/editor.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-image/index.js":
/*!**********************************!*\
  !*** ./src/block-image/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-image/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-image/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-image/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-image/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-image/attributes.ts");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/block-image/deprecated.tsx");
/* harmony import */ var _utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/convertAttsToPreview */ "./src/utils/convertAttsToPreview.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



const {
  Fragment
} = wp.element;
const {
  withSelect
} = wp.data;




//------------------ TAILWINDCSS AND COMMON CSS -----------------

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  __experimentalLabel(attributes, {
    context
  }) {
    if (context === "accessibility") {
      const {
        caption,
        alt,
        url
      } = attributes;
      if (!url) {
        return __("Empty");
      }
      if (!alt) {
        return caption || "";
      }

      // This is intended to be read by a screen reader.
      // A period simply means a pause, no need to translate it.
      return alt + (caption ? ". " + caption : "");
    }
  },
  getEditWrapperProps(attributes) {
    const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__["default"])() || "Desktop";
    return {
      "data-align": deviceType === "Desktop" ? attributes.general_settings?.alignment?.Desktop : deviceType === "Tablet" ? attributes.general_settings?.alignment?.Tablet : attributes.general_settings?.alignment?.Mobile
    };
  },
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"],
  example: (0,_utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_8__["default"])(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"]),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-image/style.scss":
/*!************************************!*\
  !*** ./src/block-image/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-image/use-client-width.ts":
/*!*********************************************!*\
  !*** ./src/block-image/use-client-width.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useClientWidth)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

function useClientWidth(ref, dependencies) {
  const [clientWidth, setClientWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  function calculateClientWidth() {
    setClientWidth(ref.current?.clientWidth);
  }
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(calculateClientWidth, dependencies);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const {
      defaultView
    } = ref.current.ownerDocument;
    defaultView.addEventListener("resize", calculateClientWidth);
    return () => {
      defaultView.removeEventListener("resize", calculateClientWidth);
    };
  }, []);
  return clientWidth;
}

/***/ }),

/***/ "./src/components/AdvancePanelCommon.tsx":
/*!***********************************************!*\
  !*** ./src/components/AdvancePanelCommon.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");
/* harmony import */ var _controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/MyMotionEffectControl/MyMotionEffectControl */ "./src/components/controls/MyMotionEffectControl/MyMotionEffectControl.tsx");







const AdvancePanelCommon = ({
  handleTogglePanel,
  tabAdvancesIsPanelOpen,
  advance_responsiveCondition,
  advance_zIndex,
  advance_motionEffect,
  setAttributes,
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!advance_motionEffect ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    onToggle: () => handleTogglePanel("Advances", "MyMyMotionEffectControl"),
    initialOpen: tabAdvancesIsPanelOpen === "MyMyMotionEffectControl",
    opened: tabAdvancesIsPanelOpen === "MyMyMotionEffectControl" || undefined,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Motion Effect", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: advance_motionEffect,
    onChange: data => setAttributes({
      advance_motionEffect: data
    })
  })) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    onToggle: () => handleTogglePanel("Advances", "Responsive Conditions"),
    initialOpen: tabAdvancesIsPanelOpen === "Responsive Conditions",
    opened: tabAdvancesIsPanelOpen === "Responsive Conditions" || undefined,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Responsive Conditions", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    responsiveConditionControl: advance_responsiveCondition,
    setAttrs__responsiveCondition: data => setAttributes({
      advance_responsiveCondition: data
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    onToggle: () => handleTogglePanel("Advances", "Z-Index"),
    initialOpen: tabAdvancesIsPanelOpen === "Z-Index",
    opened: tabAdvancesIsPanelOpen === "Z-Index" || undefined,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Z-Index", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    zIndexControl: advance_zIndex,
    setAttrs__zIndex: data => setAttributes({
      advance_zIndex: data
    })
  })), children ? children : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancePanelCommon);

/***/ }),

/***/ "./src/components/CheckIcon.tsx":
/*!**************************************!*\
  !*** ./src/components/CheckIcon.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function CheckIcon(props) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    ...props
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "currentColor",
    opacity: "0.2"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 13l3 3 7-7",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckIcon);

/***/ }),

/***/ "./src/components/HOCInspectorControls.tsx":
/*!*************************************************!*\
  !*** ./src/components/HOCInspectorControls.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INSPECTOR_CONTROLS_TABS: () => (/* binding */ INSPECTOR_CONTROLS_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);





const INSPECTOR_CONTROLS_TABS = [{
  name: "General",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    className: "w-5 h-5 fill-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("General", "boostify-blocks")))
}, {
  name: "Styles",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 6H16.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 18H15.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 13.95L16.47 14",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.47 10H14.47",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.44 7H2.53",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Styles", "boostify-blocks")))
}, {
  name: "Advances",
  title: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col items-center justify-center space-y-0.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-5 h-5 fill-none",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeMiterlimit: "10",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Advances", "boostify-blocks")))
}];
const HOCInspectorControls = ({
  renderTabPanels,
  tabs = INSPECTOR_CONTROLS_TABS,
  uniqueId = "",
  tabDefaultActive = "General",
  onChangeActive
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      const tabIsOpenEl = document.querySelector(".components-panel__body.is-opened");
      if (!tabIsOpenEl) {
        return;
      }
      tabIsOpenEl.scrollIntoView({
        behavior: "smooth"
      });
    }, 500);
  }, []);

  // HIDDEN PANEL ADVANCE DEFAULT OF WP
  const handleTooglePanelAdvanceDefaultWp = () => {
    const advancedPanel = document.querySelector(".components-panel__body.block-editor-block-inspector__advanced");
    const elAdvancesbtn = document.querySelector(".HOCInspectorControls__ative-tab");
    const isAdvanceTabActive = !!elAdvancesbtn?.id.includes("-Advances");
    if (!advancedPanel) {
      return;
    }
    advancedPanel.style.display = isAdvanceTabActive ? "block" : "none";
  };
  const handleChageTab = tabName => {
    onChangeActive && onChangeActive(tabName);
    setTimeout(() => {
      handleTooglePanelAdvanceDefaultWp();
    }, 100);
  };
  const renderContent = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: `wcb-inspectorControls__panel ${uniqueId}`,
      activeClass: "HOCInspectorControls__ative-tab active-tab",
      tabs: tabs,
      onSelect: handleChageTab,
      initialTabName: tabDefaultActive
    }, tab => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: tab.name,
        className: tab.name
      }, renderTabPanels(tab));
    });
  };
  const renderContent2 = () => {
    !!uniqueId && setTimeout(() => {
      handleTooglePanelAdvanceDefaultWp();
    }, 100);
    return null;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, renderContent(), renderContent2());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(HOCInspectorControls));

/***/ }),

/***/ "./src/components/MyCacheProvider.tsx":
/*!********************************************!*\
  !*** ./src/components/MyCacheProvider.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCreateCacheEmotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useCreateCacheEmotion */ "./src/hooks/useCreateCacheEmotion.ts");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const useCreateEmotionCache = function (key = "wcb-custom-cache-key") {
  const [cache, setCache] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const useRefReact = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let observer = null;
    let tries = 0;
    const createIframeCache = iframe => {
      const iframeHead = iframe?.contentDocument?.head;
      if (!iframeHead) return;
      const newCache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])({
        key,
        container: iframeHead || useRefReact.current || undefined
      });
      setCache(newCache);
    };
    const watchIframe = () => {
      const iframe = document.querySelector('iframe[name="editor-canvas"]');
      if (!iframe) {
        if (tries < 20) {
          tries++;
          setTimeout(watchIframe, 150); // retry for up to ~3s
        }
        return;
      }
      if (iframe.contentDocument?.readyState === "complete") {
        createIframeCache(iframe);
      } else {
        iframe.addEventListener("load", () => createIframeCache(iframe), {
          once: true
        });
      }
    };

    // Initial attach
    watchIframe();

    // Watch for iframe changes (device switch)
    observer = new MutationObserver(() => {
      const iframe = document.querySelector('iframe[name="editor-canvas"]');
      if (iframe && iframe !== cache?.container?.ownerDocument?.defaultView?.frameElement) {
        tries = 0;
        watchIframe();
      }
    });
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    return () => observer?.disconnect();
  }, []);
  return {
    cache,
    useRefReact
  };
};
const MyCacheProvider = ({
  children,
  uniqueKey = "uniqueid"
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";

  // if (deviceType === "Desktop") {
  // 	return <>{children}</>;
  // }

  const KEY = uniqueKey.replace(/[0-9]/g, "").replace(/ /g, "").toLocaleLowerCase();
  const {
    myCache,
    ref
  } = (0,_hooks_useCreateCacheEmotion__WEBPACK_IMPORTED_MODULE_1__["default"])("wcb-key-cache");
  const {
    cache,
    useRefReact
  } = useCreateEmotionCache("wcb-key-cache");
  if (!cache) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C, {
    value: cache
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(MyCacheProvider));

/***/ }),

/***/ "./src/components/SaveCommon.tsx":
/*!***************************************!*\
  !*** ./src/components/SaveCommon.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);




// @ts-ignore

function SaveCommon({
  className = "",
  uniqueId = "",
  HtmlTag = "div",
  children,
  attributes,
  id,
  ...props
}) {
  let blockJson = "";
  try {
    // Normalize data to prevent array vs object inconsistency
    const normalizeData = obj => {
      if (Array.isArray(obj)) {
        return obj.length === 0 ? {} : obj;
      }
      if (obj && typeof obj === 'object') {
        const normalized = {};
        for (const [key, value] of Object.entries(obj)) {
          normalized[key] = normalizeData(value);
        }
        return normalized;
      }
      return obj;
    };

    // Special handling for responsive values to ensure consistency
    const normalizeResponsiveObject = obj => {
      if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return {};
      }

      // For responsive objects, ensure they have proper structure
      const normalized = {};
      ['Desktop', 'Tablet', 'Mobile'].forEach(device => {
        if (obj[device] !== undefined && obj[device] !== null && obj[device] !== '') {
          normalized[device] = obj[device];
        }
      });

      // Only return object if it has at least one valid responsive value
      return Object.keys(normalized).length > 0 ? normalized : {};
    };
    const normalizedAttributes = normalizeData(attributes);
    blockJson = lodash__WEBPACK_IMPORTED_MODULE_1___default().escape(JSON.stringify(normalizedAttributes));
  } catch (error) {
    console.log("attributes JSON.stringify error on SAVE function", {
      error,
      className,
      attributes
    });
  }
  const rc = attributes?.advance_responsiveCondition || {};
  const responsiveClasses = [rc?.isHiddenOnDesktop ? 'wcb-hide-desktop' : '', rc?.isHiddenOnTablet ? 'wcb-hide-tab' : '', rc?.isHiddenOnMobile ? 'wcb-hide-mob' : ''].filter(Boolean).join(' ');
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HtmlTag, {
    ...props,
    className: `wcb-cm wcb-update-div ${responsiveClasses} ${className.trim()} ${uniqueId.trim()}`,
    id: id || attributes?.anchor,
    "data-uniqueid": uniqueId,
    "data-is-wcb-save-common": true
  }, children, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    "data-wcb-global-styles": uniqueId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pre", {
    "data-wcb-block-attrs": uniqueId,
    style: {
      display: "none"
    }
  }, blockJson));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveCommon);

/***/ }),

/***/ "./src/components/controls/HelpText.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/HelpText.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const HelpText = ({
  children,
  className = "my-1"
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: `components-form-token-field__help ${className}`
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelpText);

/***/ }),

/***/ "./src/components/controls/MyBackgroundControl/ControlBgImage.tsx":
/*!************************************************************************!*\
  !*** ./src/components/controls/MyBackgroundControl/ControlBgImage.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyMediaUploadCheck */ "./src/components/controls/MyMediaUploadCheck.tsx");
/* harmony import */ var _MySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBackgroundControl/types.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");








const ControlBgImage = ({
  imageData,
  setImageData,
  focalPoint,
  setFocalPoint,
  bgImageAttachment,
  setBgImageAttachment,
  bgImageRepeat,
  bgImageSize,
  setBgImageRepeat,
  setBgImageSize
}) => {
  const renderContentImage = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onChange: data => setImageData(data),
      imageData: imageData
    }))), imageData.mediaId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "w-full "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Position", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.FocalPointPicker, {
      className: "mt-2.5",
      url: imageData.mediaUrl,
      value: focalPoint
      // @ts-ignore
      ,
      onDragStart: setFocalPoint,
      onDrag: setFocalPoint,
      onChange: setFocalPoint
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Attachment", "boostify-blocks"),
      hasResponsive: true,
      hideLabelFromVision: true,
      options: _types__WEBPACK_IMPORTED_MODULE_5__.BG_ATTACHMENT_OPTIONS,
      defaultValue: bgImageAttachment,
      value: bgImageAttachment,
      onChange: value => setBgImageAttachment(value || "local")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Repeat", "boostify-blocks"),
      hasResponsive: true,
      hideLabelFromVision: true,
      defaultValue: bgImageRepeat,
      value: bgImageRepeat,
      options: _types__WEBPACK_IMPORTED_MODULE_5__.BG_REPEAT_OPTIONS,
      onChange: value => setBgImageRepeat(value || "no-repeat")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Size", "boostify-blocks"),
      hasResponsive: true,
      hideLabelFromVision: true,
      defaultValue: bgImageSize,
      value: bgImageSize,
      options: _types__WEBPACK_IMPORTED_MODULE_5__.BG_SIZE_OPTIONS,
      onChange: value => setBgImageSize(value || "cover")
    }))) : null);
  };
  return renderContentImage();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlBgImage);

/***/ }),

/***/ "./src/components/controls/MyBackgroundControl/MyBackgroundControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyBackgroundControl/MyBackgroundControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INIT_FOCAL_POINT_DEMO: () => (/* binding */ INIT_FOCAL_POINT_DEMO),
/* harmony export */   INIT_IMAGE_DATA_UPLOAD_DEMO: () => (/* binding */ INIT_IMAGE_DATA_UPLOAD_DEMO),
/* harmony export */   INIT_VIDEO_DATA_UPLOAD_DEMO: () => (/* binding */ INIT_VIDEO_DATA_UPLOAD_DEMO),
/* harmony export */   STYLES_BG_DEMO: () => (/* binding */ STYLES_BG_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/PaintBrushIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/FunnelIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/PhotoIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/VideoCameraIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBackgroundControl/types.ts");
/* harmony import */ var _MyTabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyTabs */ "./src/components/controls/MyTabs.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var _MyVideoUploadCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyVideoUploadCheck */ "./src/components/controls/MyVideoUploadCheck.tsx");
/* harmony import */ var _ControlBgImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ControlBgImage */ "./src/components/controls/MyBackgroundControl/ControlBgImage.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");












const BG_TYPES_PLANS = [{
  name: "color",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__
}, {
  name: "gradient",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__
}, {
  name: "image",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__
}, {
  name: "video",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__
}];
const OVERLAY_TYPES = ["none", "color", "gradient"];
//
const INIT_IMAGE_DATA_UPLOAD_DEMO = {
  mediaId: 0,
  mediaUrl: "",
  mediaSrcSet: undefined
};
const INIT_VIDEO_DATA_UPLOAD_DEMO = {
  mediaId: 0,
  mediaUrl: ""
};
const INIT_FOCAL_POINT_DEMO = {
  x: 0.5,
  y: 0.5
};
const STYLES_BG_DEMO = {
  bgImageAttachment: {
    Desktop: "local"
  },
  bgImageRepeat: {
    Desktop: "no-repeat"
  },
  bgImageSize: {
    Desktop: "cover"
  },
  bgType: "color",
  color: "",
  focalPoint: {
    Desktop: INIT_FOCAL_POINT_DEMO
  },
  gradient: "linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",
  imageData: {
    Desktop: INIT_IMAGE_DATA_UPLOAD_DEMO
  },
  overlayColor: "#9437374d",
  overlayGradient: "linear-gradient(104deg,rgba(93,207,232,0.72) 0%,rgba(245,120,128,0.69) 100%)",
  overlayType: "none",
  videoData: INIT_VIDEO_DATA_UPLOAD_DEMO
};
const MyBackgroundControl = ({
  className = "",
  backgroundControl = STYLES_BG_DEMO,
  setAttrs__backgroundControl,
  bgTypesPlans = BG_TYPES_PLANS
}) => {
  //
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_8__["default"])() || "Desktop";
  //
  const {
    bgImageAttachment,
    bgImageRepeat,
    bgImageSize,
    bgType,
    color,
    focalPoint,
    gradient,
    imageData,
    overlayColor,
    overlayGradient,
    overlayType,
    videoData
  } = backgroundControl;

  //
  const IMAGE_ATTACMENT = bgImageAttachment[deviceType] || bgImageAttachment.Tablet || bgImageAttachment.Desktop;
  const IMAGE_REPEAT = bgImageRepeat[deviceType] || bgImageRepeat.Tablet || bgImageRepeat.Desktop;
  const IMAGE_SIZE = bgImageSize[deviceType] || bgImageSize.Tablet || bgImageSize.Desktop;
  const FOCAL_POINT = focalPoint[deviceType] || focalPoint.Tablet || focalPoint.Desktop;
  const IMAGE_DATA = imageData[deviceType] || imageData.Tablet || imageData.Desktop;
  //

  const handleChangeBgType = type => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      bgType: type
    });
  };
  const handleChangeColor = color => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      color
    });
  };
  const handleChangeGradient = gradient => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      gradient
    });
  };
  const handleChangeImageData = value => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      imageData: {
        ...imageData,
        [deviceType]: value
      }
    });
  };
  const handleChangeFocalPoint = value => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      focalPoint: {
        ...focalPoint,
        [deviceType]: value
      }
    });
  };
  const handleChangeBgImageSize = value => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      bgImageSize: {
        ...bgImageSize,
        [deviceType]: value
      }
    });
  };
  const handleChangeBgImageRepeat = value => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      bgImageRepeat: {
        ...bgImageRepeat,
        [deviceType]: value
      }
    });
  };
  const handleChangeBgImageAttachment = value => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      bgImageAttachment: {
        ...bgImageAttachment,
        [deviceType]: value
      }
    });
  };
  const handleChangeVideoData = videoData => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      videoData
    });
  };
  const handleChangeOverlayGradient = overlayGradient => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      overlayGradient
    });
  };
  const handleChangeOverlayColor = overlayColor => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      overlayColor
    });
  };
  const handleChangeOverlayType = index => {
    setAttrs__backgroundControl({
      ...backgroundControl,
      overlayType: OVERLAY_TYPES[index]
    });
  };

  //

  const renderTypeGroupBtn = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full flex justify-between items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "flex-1"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Type", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex gap-1"
    }, bgTypesPlans.map(item => {
      const active = item.name === bgType;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: item.name,
        className: `p-2 rounded-lg border  ${active ? "text-sky-600 bg-sky-50 border-sky-400" : "border-slate-300 hover:border-slate-500 cursor-pointer"}`,
        onClick: () => handleChangeBgType(item.name),
        title: item.name
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(item.icon, {
        className: "w-4 h-4"
      }));
    })));
  };
  const renderOverlaySettings = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
      tabs: OVERLAY_TYPES,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Overlay Type", "boostify-blocks"),
      tabSelected: overlayType,
      onChangeSelected: handleChangeOverlayType
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Tab.Panel, {
      className: "absolute -inset-1.5 bg-white z-10"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Tab.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: handleChangeOverlayColor,
      color: overlayColor
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_13__.Tab.Panel, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
      __nextHasNoMargin: true,
      value: overlayGradient,
      onChange: handleChangeOverlayGradient,
      gradients: _types__WEBPACK_IMPORTED_MODULE_4__.GRADIENT_DEFAULT
    }))));
  };
  const renderContent = () => {
    switch (bgType) {
      case "color":
        return renderContentColor();
      case "gradient":
        return renderContentGradient();
      case "image":
        return renderContentImage();
      case "video":
        return renderContentVideo();
      default:
        return null;
    }
  };
  const renderContentVideo = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyVideoUploadCheck__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mediaId: videoData.mediaId,
      mediaUrl: videoData.mediaUrl,
      onChange: handleChangeVideoData
    })), videoData.mediaId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderOverlaySettings()) : null);
  };
  const renderContentImage = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ControlBgImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      bgImageRepeat: IMAGE_REPEAT,
      focalPoint: FOCAL_POINT,
      imageData: IMAGE_DATA,
      bgImageSize: IMAGE_SIZE,
      bgImageAttachment: IMAGE_ATTACMENT
      //
      ,
      setBgImageAttachment: handleChangeBgImageAttachment,
      setBgImageRepeat: handleChangeBgImageRepeat,
      setBgImageSize: handleChangeBgImageSize,
      setFocalPoint: handleChangeFocalPoint,
      setImageData: handleChangeImageData
    }), IMAGE_DATA.mediaId ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderOverlaySettings()) : null);
  };
  const renderContentGradient = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full pt-2.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.GradientPicker, {
      __nextHasNoMargin: true,
      value: gradient,
      onChange: handleChangeGradient,
      gradients: _types__WEBPACK_IMPORTED_MODULE_4__.GRADIENT_DEFAULT
    }));
  };
  const renderContentColor = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelRow, {
      className: "w-full pt-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onChange: handleChangeColor,
      color: color
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderTypeGroupBtn(), renderContent()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBackgroundControl);

/***/ }),

/***/ "./src/components/controls/MyBackgroundControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyBackgroundControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG_ATTACHMENT_OPTIONS: () => (/* binding */ BG_ATTACHMENT_OPTIONS),
/* harmony export */   BG_REPEAT_OPTIONS: () => (/* binding */ BG_REPEAT_OPTIONS),
/* harmony export */   BG_SIZE_OPTIONS: () => (/* binding */ BG_SIZE_OPTIONS),
/* harmony export */   GRADIENT_DEFAULT: () => (/* binding */ GRADIENT_DEFAULT)
/* harmony export */ });
const BG_ATTACHMENT_OPTIONS = [{
  value: "fixed",
  label: "Fixed"
}, {
  value: "local",
  label: "Local"
}, {
  value: "scroll",
  label: "Scroll"
}];
const BG_REPEAT_OPTIONS = [{
  value: "no-repeat",
  label: "No repeat"
}, {
  value: "repeat",
  label: "Repeat"
}, {
  value: "repeat-x",
  label: "Repeat-x"
}, {
  value: "repeat-y",
  label: "Repeat-y"
}];
const BG_SIZE_OPTIONS = [{
  value: "auto",
  label: "Auto"
}, {
  value: "contain",
  label: "Contain"
}, {
  value: "cover",
  label: "Cover"
}];
const GRADIENT_DEFAULT = [{
  name: "JShine",
  gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
  slug: "jshine"
}, {
  name: "Moonlit Asteroid",
  gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
  slug: "moonlit-asteroid"
}, {
  name: "Rastafarie",
  gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
  slug: "rastafari"
}];

/***/ }),

/***/ "./src/components/controls/MyBorderControl/MyBorderControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyBorderControl/MyBorderControl.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBorderControl/types.ts");



// @ts-ignore






const MyBorderControl = ({
  className = "space-y-4",
  borderControl = _types__WEBPACK_IMPORTED_MODULE_7__.MY_BORDER_CONTROL_DEMO,
  setAttrs__border
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  //
  const {
    mainSettings: mainSettingsProps,
    hoverColor: hoverColorProps,
    radius: radiusProps
  } = borderControl;
  const handleChangeBorder = newBorders => {
    setAttrs__border({
      ...borderControl,
      mainSettings: newBorders
    });
  };
  const handleChangeBorderHoverColor = hoverColor => {
    setAttrs__border({
      ...borderControl,
      hoverColor
    });
  };
  const handleChangeBorderRadius = newRadius => {
    // If Desktop and Tablet/Mobile are default or all 3 devices are the same then set for all 3 devices
    const allEqual = radiusProps.Desktop === radiusProps.Tablet && radiusProps.Desktop === radiusProps.Mobile;
    if (deviceType === "Desktop" && ((radiusProps.Tablet === undefined || radiusProps.Tablet === "0") && (radiusProps.Mobile === undefined || radiusProps.Mobile === "0") || allEqual)) {
      setAttrs__border({
        ...borderControl,
        radius: {
          Desktop: newRadius,
          Tablet: newRadius,
          Mobile: newRadius
        }
      });
    } else {
      // Otherwise, just update the current device type
      setAttrs__border({
        ...borderControl,
        radius: {
          ...radiusProps,
          [deviceType]: newRadius
        }
      });
    }
  };

  //
  const RADIUS = radiusProps[deviceType] || radiusProps.Tablet || radiusProps.Desktop;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderBoxControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border"),
    onChange: handleChangeBorder,
    value: mainSettingsProps,
    colors: [],
    enableAlpha: true
    // enableStyle={ showBorderStyle }
    ,
    popoverOffset: 40,
    popoverPlacement: "left-start",
    __experimentalHasMultipleOrigins: true,
    __experimentalIsRenderedInSidebar: true,
    size: "__unstable-large",
    className: "wcb-BorderBoxControl"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hover border color", "boostify-blocks"),
    onChange: handleChangeBorderHoverColor,
    color: hoverColorProps
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "MyBorderControl__BorderRadiusControl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mb-2",
    hasResponsive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Border radius", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderRadiusControl, {
    values: RADIUS,
    onChange: value => {
      handleChangeBorderRadius(value);
    },
    label: ""
    // label={
    // 	<MyLabelControl className="" hasResponsive>
    // 		{__("Border radius", "boostify-blocks")}
    // 	</MyLabelControl>
    // }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBorderControl);

/***/ }),

/***/ "./src/components/controls/MyBorderControl/types.ts":
/*!**********************************************************!*\
  !*** ./src/components/controls/MyBorderControl/types.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BORDER_MAINS: () => (/* binding */ DEFAULT_BORDER_MAINS),
/* harmony export */   DEFAULT_BORDER_MAIN_SINGLE_SIDE: () => (/* binding */ DEFAULT_BORDER_MAIN_SINGLE_SIDE),
/* harmony export */   DEFAULT_BORDER_RADIUS: () => (/* binding */ DEFAULT_BORDER_RADIUS),
/* harmony export */   MY_BORDER_CONTROL_DEMO: () => (/* binding */ MY_BORDER_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_BORDER_RADIUS = "0";
const DEFAULT_BORDER_MAIN_SINGLE_SIDE = {
  color: "#d1d5db",
  style: "solid",
  width: "1px"
};
const DEFAULT_BORDER_MAINS = undefined;
const MY_BORDER_CONTROL_DEMO = {
  mainSettings: DEFAULT_BORDER_MAINS,
  hoverColor: undefined,
  radius: {
    Desktop: DEFAULT_BORDER_RADIUS,
    Tablet: DEFAULT_BORDER_RADIUS,
    Mobile: DEFAULT_BORDER_RADIUS
  }
};

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/MyBoxShadowControl.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BOX_SHADOW_POSITON: () => (/* binding */ BOX_SHADOW_POSITON),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CheckIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../CheckIcon */ "./src/components/CheckIcon.tsx");
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ResetButton */ "./src/components/controls/ResetButton.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyBoxShadowControl/types.ts");











const BOX_SHADOW_POSITON = ["outset", "inset"];
const PanelTab = [{
  name: "Normal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "boostify-blocks")
}, {
  name: "Hover",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover", "boostify-blocks")
}];
const MyBoxShadowControl = ({
  className = "",
  boxShadowControl = _types__WEBPACK_IMPORTED_MODULE_7__.MY_BOX_SHADOW_CONTROL_DEMO,
  setAttrs__boxShadow
}) => {
  //
  const [currentTab, setCurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Normal");
  //
  const {
    color,
    presetClass,
    horizontal,
    vertical,
    blur,
    spread,
    position
  } = boxShadowControl[currentTab];

  //
  const setShadowPreset = preClass => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        presetClass: preClass
      }
    });
  };
  const handleChangeColor = colorHex => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        color: colorHex
      }
    });
  };
  // custoM
  const handleChangePosition = bPosition => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        position: bPosition,
        presetClass: ""
      }
    });
  };
  const setHorizontal = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        horizontal: value,
        presetClass: ""
      }
    });
  };
  const setVertical = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        vertical: value,
        presetClass: ""
      }
    });
  };
  const setBlur = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        blur: value,
        presetClass: ""
      }
    });
  };
  const setSpread = value => {
    setAttrs__boxShadow({
      ...boxShadowControl,
      [currentTab]: {
        ...boxShadowControl[currentTab],
        spread: value,
        presetClass: ""
      }
    });
  };

  // RENDER
  const renderRadioPresetShadow = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.RadioGroup, {
      value: presetClass,
      onChange: setShadowPreset
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.RadioGroup.Label, {
      className: "relative flex items-center justify-between"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Preset", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ResetButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: () => setShadowPreset("")
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative p-3 bg-slate-50 mt-3 rounded-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative grid grid-cols-3 gap-3 "
    }, _types__WEBPACK_IMPORTED_MODULE_7__.TW_SHADOW_PRESET.map(item => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.RadioGroup.Option, {
        key: item,
        value: item
      }, ({
        checked
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${item} flex items-center justify-center w-full h-20 cursor-pointer rounded-lg ${checked ? "bg-sky-50 " : "bg-white"} ${item === "shadow-inner" ? "ring-1 ring-black/5" : ""}`
      }, checked && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "shrink-0 text-sky-500"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CheckIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "h-6 w-6"
      }))));
    }))));
  };
  const renderBlurRange = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Blur", "boostify-blocks"),
      value: blur,
      onChange: setBlur,
      min: 0,
      max: 100
    });
  };
  const renderSpreadRange = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Spread", "boostify-blocks"),
      value: spread,
      onChange: setSpread,
      min: -100,
      max: 100
    });
  };
  const renderVerticalRange = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Vertical", "boostify-blocks"),
      value: vertical,
      onChange: setVertical,
      min: -100,
      max: 100
    });
  };
  const renderHorizontalRange = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Horizontal", "boostify-blocks"),
      className: "mb-0",
      value: horizontal,
      onChange: setHorizontal,
      min: -100,
      max: 100
    });
  };
  const renderPositionRadioGroup = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center justify-between"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadioGroup, {
      onChange: handleChangePosition,
      checked: position
    }, BOX_SHADOW_POSITON.map(item => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalRadio, {
      value: item,
      key: item,
      className: "capitalize"
    }, item))));
  };
  const renderShadowColorPicker = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "boostify-blocks"),
      onChange: handleChangeColor,
      color: color
    });
  };
  const renderContentSettings = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-5"
    }, renderRadioPresetShadow(), renderShadowColorPicker(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], null, renderHorizontalRange(), renderVerticalRange(), renderBlurRange(), renderSpreadRange(), renderPositionRadioGroup()));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel ${className}`,
    activeClass: "active-tab",
    onSelect: tab => setCurrentTab(tab),
    initialTabName: "Normal",
    tabs: PanelTab
  }, _ => renderContentSettings());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyBoxShadowControl);

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts":
/*!**************************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getShadowStyleValueFromTwPreset: () => (/* binding */ getShadowStyleValueFromTwPreset)
/* harmony export */ });
const getShadowStyleValueFromTwPreset = (presetClass, color = "") => {
  switch (presetClass) {
    case "shadow-sm":
      return `0 1px 2px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    case "shadow":
      return `0 1px 3px 0 ${color || "rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-md":
      return `0 4px 6px -1px ${color || "rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-lg":
      return `0 10px 15px -3px ${color || "rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-xl":
      return `0 20px 25px -5px ${color || "rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${color || "rgb(0 0 0 / 0.1)"}`;
    case "shadow-2xl":
      return `0 25px 50px -12px ${color || "rgb(0 0 0 / 0.25)"}`;
    case "shadow-inner":
      return `inset 0 2px 4px 0 ${color || "rgb(0 0 0 / 0.05)"}`;
    default:
      return "";
  }
};

/***/ }),

/***/ "./src/components/controls/MyBoxShadowControl/types.ts":
/*!*************************************************************!*\
  !*** ./src/components/controls/MyBoxShadowControl/types.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_BOX_SHADOW_CONTROL_DEMO: () => (/* binding */ MY_BOX_SHADOW_CONTROL_DEMO),
/* harmony export */   TW_SHADOW_PRESET: () => (/* binding */ TW_SHADOW_PRESET)
/* harmony export */ });
const TW_SHADOW_PRESET = ["shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-inner"];
const MY_BOX_SHADOW_CONTROL_DEMO = {
  Normal: {
    color: "",
    presetClass: "",
    blur: 0,
    horizontal: 0,
    spread: 0,
    vertical: 0,
    position: "outset"
  },
  Hover: {
    color: "",
    presetClass: "",
    blur: 0,
    horizontal: 0,
    spread: 0,
    vertical: 0,
    position: "outset"
  }
};

/***/ }),

/***/ "./src/components/controls/MyButton.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/MyButton.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const MyButton = ({
  className,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: `rounded-md ${className}`,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyButton);

/***/ }),

/***/ "./src/components/controls/MyColorPicker/MyColorPicker.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/controls/MyColorPicker/MyColorPicker.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


// @ts-ignore



const MyColorPicker = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Color", "boostify-blocks"),
  // Default color value — can be a hex string.
  color = "#000",
  onChange,
  showDefaultPalette = true,
  showCustomColorOnDefaultPallete = true
}) => {
  const [colorState, setColorState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    color && setColorState(color);
  }, [color]);
  const handleUpdateColor = c => {
    setColorState(c);
    onChange(c);
  };
  const colorGradientSettings = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalUseMultipleOriginColorsAndGradients)();
  const defaultColorPallete = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const customColors = window.boostify_blocks_global_variables?.customColorPallete;
    if (!customColors || !customColors.length || !showCustomColorOnDefaultPallete) {
      return colorGradientSettings?.colors || [];
    }
    const c = [...(colorGradientSettings?.colors || []), {
      name: "Customs",
      colors: window.boostify_blocks_global_variables.customColorPallete || []
    }];
    return c;
  }, [colorGradientSettings, showCustomColorOnDefaultPallete]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    className: `w-full ${className}`,
    contentClassName: "my-popover-content-classname"
    // @ts-ignore
    ,
    popoverProps: {
      placement: "left-start"
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors`,
      onClick: onToggle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-0.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer ${colorState ? "" : "bg-transparent"}`,
      style: {
        backgroundColor: colorState,
        backgroundImage: !colorState ? "linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)" : undefined,
        backgroundSize: "10px 10px",
        backgroundPosition: "0 0, 0 5px, 5px -5px, -5px 0"
      }
    })), label && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, label))),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bg-white "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPalette, {
      className: "block-editor-color-gradient-control__panel p-4",
      colors: showDefaultPalette ? defaultColorPallete : undefined,
      value: colorState
      // @ts-ignore
      ,
      enableAlpha: true,
      onChange: color => {
        handleUpdateColor(color || "");
      }
      // @ts-ignore
      ,
      __experimentalHasMultipleOrigins: true,
      __experimentalIsRenderedInSidebar: true
    })))
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorPicker);

/***/ }),

/***/ "./src/components/controls/MyCombobox.tsx":
/*!************************************************!*\
  !*** ./src/components/controls/MyCombobox.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const MyComboboxControl = ({
  onChange,
  options,
  value,
  label
}) => {
  const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || "");
  const [filteredOptions, setFilteredOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(options);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFontSize(value || "");
  }, [value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ComboboxControl, {
    label: label,
    value: fontSize,
    onChange: value => {
      setFontSize(value || "");
      onChange(value || "");
    },
    options: filteredOptions,
    onFilterValueChange: inputValue => setFilteredOptions(options.filter(option => option.label.toLowerCase().startsWith(inputValue.toLowerCase())))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComboboxControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_GAP_UNITS: () => (/* binding */ MY_GAP_UNITS),
/* harmony export */   MY_HORIZOLTAL_UNITS: () => (/* binding */ MY_HORIZOLTAL_UNITS),
/* harmony export */   MY_VERTICAL_UNITS: () => (/* binding */ MY_VERTICAL_UNITS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");









const MY_GAP_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 50,
  step: 0.1
}];
const MY_HORIZOLTAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vw",
  label: "vw",
  default: 20,
  step: 0.1
}];
const MY_VERTICAL_UNITS = [{
  value: "px",
  label: "px",
  default: 32,
  step: 1
}, {
  value: "rem",
  label: "rem",
  default: 2,
  step: 0.01
}, {
  value: "em",
  label: "em",
  default: 2,
  step: 0.01
}, {
  value: "%",
  label: "%",
  default: 20,
  step: 0.1
}, {
  value: "vh",
  label: "vh",
  default: 20,
  step: 0.1
}];
const MyDimensionsControl = ({
  className = "space-y-5",
  dimensionControl = _types__WEBPACK_IMPORTED_MODULE_5__.MY_DIMENSIONS_CONTROL_DEMO,
  setAttrs__dimensions
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  //
  const {
    colunmGap: colunmGapProps,
    rowGap: rowGapProps,
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: colunmGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(colunmGapProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_7__["default"])(paddingProps, deviceType);

  //
  const setRowGrap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      rowGap: {
        ...rowGapProps,
        [deviceType]: value
      }
    });
  };
  const setColumnGap = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      colunmGap: {
        ...colunmGapProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setRowGrap,
    value: rowGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Row Gap", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: setColumnGap,
    value: colunmGap || "0",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Column Gap", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "boostify-blocks")),
    values: padding,
    onChange: handleChangePadding
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Margin", "boostify-blocks")),
    values: margin,
    onChange: handleChangeMargin,
    inputProps: {
      min: -2000
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MyDimensionsUnitControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx");








const MyDimensionsNoGapControl = ({
  className = "space-y-5",
  dimensionControl = _types__WEBPACK_IMPORTED_MODULE_4__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
  setAttrs__dimensions
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  //
  const {
    margin: marginProps,
    padding: paddingProps
  } = dimensionControl;
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(marginProps, deviceType);
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(paddingProps, deviceType);

  //

  const handleChangeMargin = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      margin: {
        ...marginProps,
        [deviceType]: value
      }
    });
  };
  const handleChangePadding = value => {
    setAttrs__dimensions({
      ...dimensionControl,
      padding: {
        ...paddingProps,
        [deviceType]: value
      }
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      hasResponsive: true,
      className: ""
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Padding", "boostify-blocks")),
    values: padding || {},
    onChange: handleChangePadding,
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDimensionsUnitControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin", "boostify-blocks")),
    values: margin || {},
    onChange: handleChangeMargin,
    min: 0
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsNoGapControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/MyDimensionsUnitControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link-off.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/controls/MyDimensionsControl/style.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./src/components/controls/MyDimensionsControl/helpers.ts");








// Constants

const DEFAULT_VALUES = {
  top: "",
  right: "",
  bottom: "",
  left: ""
};
const SIDES = [{
  key: "top"
}, {
  key: "right"
}, {
  key: "bottom"
}, {
  key: "left"
}];
const LABELS = {
  top: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Top", "boostify-blocks"),
  right: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Right", "boostify-blocks"),
  bottom: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bottom", "boostify-blocks"),
  left: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Left", "boostify-blocks"),
  mixed: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Mixed", "boostify-blocks")
};

// BoxIcon
const BoxIcon = ({
  side
}) => {
  const focused = s => side === "all" || side === s;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.iconRoot
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.iconViewbox
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("top"), {
      height: 2,
      left: 3,
      right: 3,
      top: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("right"), {
      bottom: 3,
      top: 3,
      width: 2,
      right: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("bottom"), {
      height: 2,
      left: 3,
      right: 3,
      bottom: 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.stroke(focused("left"), {
      bottom: 3,
      top: 3,
      width: 2,
      left: 0
    })
  })));
};

// SideSlider
const SideSlider = ({
  value,
  min,
  onChange
}) => {
  const {
    num,
    unit
  } = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.parseValue)(value);
  const max = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getMaxForUnit)(unit);
  const step = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getStepForUnit)(unit);
  const clamped = Math.max(min, Math.min(max, num));
  const pct = max > min ? (clamped - min) / (max - min) * 100 : 0;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "wcb-dimensions-unit-control__range",
    type: "range",
    value: clamped,
    min: min,
    max: max,
    step: step,
    style: {
      background: `linear-gradient(to right, #0073aa ${pct}%, #ddd ${pct}%)`
    },
    onChange: e => {
      const newNum = parseFloat(e.target.value);
      onChange(unit ? `${newNum}${unit}` : `${newNum}`);
    },
    onWheel: e => e.currentTarget.blur()
  });
};

// MyDimensionsUnitControl

const MyDimensionsUnitControl = ({
  label,
  values = {},
  onChange,
  min = -99999,
  allowReset = true
}) => {
  var _values$top, _values$right, _values$bottom, _values$left;
  _style__WEBPACK_IMPORTED_MODULE_3__.useInjectStyles();
  const hasInitialValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isValuesDefined)(values);
  const [isLinked, setIsLinked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!hasInitialValue || !(0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isMixedValues)(values));
  const [isDirty, setIsDirty] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hasInitialValue);
  const merged = {
    top: (_values$top = values.top) !== null && _values$top !== void 0 ? _values$top : "",
    right: (_values$right = values.right) !== null && _values$right !== void 0 ? _values$right : "",
    bottom: (_values$bottom = values.bottom) !== null && _values$bottom !== void 0 ? _values$bottom : "",
    left: (_values$left = values.left) !== null && _values$left !== void 0 ? _values$left : ""
  };
  const allValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.getAllValue)(merged);
  const isMixed = (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isValuesDefined)(merged) && (0,_helpers__WEBPACK_IMPORTED_MODULE_4__.isMixedValues)(merged);
  const handleAllChange = value => {
    const v = value !== null && value !== void 0 ? value : "";
    onChange({
      top: v,
      right: v,
      bottom: v,
      left: v
    });
    setIsDirty(true);
  };
  const handleSideChange = (side, value) => {
    onChange({
      ...merged,
      [side]: value !== null && value !== void 0 ? value : ""
    });
    setIsDirty(true);
  };
  const handleReset = () => {
    onChange(DEFAULT_VALUES);
    setIsDirty(false);
  };
  const linkLabel = isLinked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Unlink sides", "boostify-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link sides", "boostify-blocks");
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.root
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.header
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.headerActions
  }, allowReset && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "component-box-control__reset-button",
    variant: "secondary",
    isSmall: true,
    onClick: handleReset,
    disabled: !isDirty
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Reset", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
    text: linkLabel
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: "component-box-control__linked-button",
    isSmall: true,
    icon: isLinked ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
    iconSize: 24,
    "aria-label": linkLabel,
    onClick: () => setIsLinked(prev => !prev)
  })))), isLinked ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sideRow
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BoxIcon, {
    side: "all"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    "aria-label": typeof label === "string" ? label : undefined,
    className: "component-box-control__unit-control",
    style: _style__WEBPACK_IMPORTED_MODULE_3__.unitControl,
    value: allValue,
    onChange: v => handleAllChange(v),
    min: min,
    placeholder: isMixed ? LABELS.mixed : undefined,
    isResetValueOnUnitChange: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sliderWrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SideSlider, {
    value: allValue || merged.top,
    min: min,
    onChange: handleAllChange
  }))) : SIDES.map(({
    key
  }, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: key,
    style: index === SIDES.length - 1 ? _style__WEBPACK_IMPORTED_MODULE_3__.sideRowLast : _style__WEBPACK_IMPORTED_MODULE_3__.sideRow
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BoxIcon, {
    side: key
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalUnitControl, {
    "aria-label": LABELS[key],
    className: "component-box-control__unit-control",
    style: _style__WEBPACK_IMPORTED_MODULE_3__.unitControl,
    value: merged[key],
    onChange: v => handleSideChange(key, v),
    min: min,
    isResetValueOnUnitChange: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: _style__WEBPACK_IMPORTED_MODULE_3__.sliderWrapper
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SideSlider, {
    value: merged[key],
    min: min,
    onChange: v => handleSideChange(key, v)
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDimensionsUnitControl);

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/helpers.ts":
/*!****************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/helpers.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllValue: () => (/* binding */ getAllValue),
/* harmony export */   getMaxForUnit: () => (/* binding */ getMaxForUnit),
/* harmony export */   getStepForUnit: () => (/* binding */ getStepForUnit),
/* harmony export */   isMixedValues: () => (/* binding */ isMixedValues),
/* harmony export */   isValuesDefined: () => (/* binding */ isValuesDefined),
/* harmony export */   parseValue: () => (/* binding */ parseValue)
/* harmony export */ });
/** Returns the single value if all 4 sides are equal, otherwise empty string. */
function getAllValue(values) {
  const {
    top,
    right,
    bottom,
    left
  } = values;
  if (top === right && right === bottom && bottom === left) return top || "";
  return "";
}

/** Returns true if any side differs from the others. */
function isMixedValues(values) {
  const {
    top,
    right,
    bottom,
    left
  } = values;
  return !(top === right && right === bottom && bottom === left);
}

/** Returns true if at least one side has a numeric value set. */
function isValuesDefined(values) {
  if (!values) return false;
  return Object.values(values).some(v => !!v && /\d/.test(v));
}

/** Splits a CSS value string (e.g. "16px", "1.5rem") into its numeric part and unit. */
function parseValue(v) {
  if (!v) return {
    num: 0,
    unit: "px"
  };
  const match = v.match(/^([\d.]+)([a-z%]*)$/i);
  if (!match) return {
    num: 0,
    unit: "px"
  };
  return {
    num: parseFloat(match[1]) || 0,
    unit: match[2] || "px"
  };
}

/** Returns the max allowed dimension value for the given CSS unit. */
function getMaxForUnit(unit) {
  switch (unit.toLowerCase()) {
    case "rem":
    case "em":
      return 20;
    case "%":
    case "vw":
    case "vh":
      return 100;
    default:
      return 1000;
  }
}

/** Returns the increment step for the given CSS unit (0.1 for rem/em, 1 otherwise). */
function getStepForUnit(unit) {
  return ["rem", "em"].includes(unit.toLowerCase()) ? 0.1 : 1;
}

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/style.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/style.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   headerActions: () => (/* binding */ headerActions),
/* harmony export */   iconRoot: () => (/* binding */ iconRoot),
/* harmony export */   iconViewbox: () => (/* binding */ iconViewbox),
/* harmony export */   root: () => (/* binding */ root),
/* harmony export */   sideRow: () => (/* binding */ sideRow),
/* harmony export */   sideRowLast: () => (/* binding */ sideRowLast),
/* harmony export */   sliderWrapper: () => (/* binding */ sliderWrapper),
/* harmony export */   stroke: () => (/* binding */ stroke),
/* harmony export */   unitControl: () => (/* binding */ unitControl),
/* harmony export */   useInjectStyles: () => (/* binding */ useInjectStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// ─── Slider pseudo-element CSS ────────────────────────────────────────────────
// Injected directly into document.head to bypass Emotion's CacheProvider
// (which may target the iframed editor canvas on WordPress 6.2+).

const STYLE_TAG_ID = "wcb-dimensions-unit-control-styles";
const CSS = `
.wcb-dimensions-unit-control__range {
	display: block;
	width: 100%;
	height: 4px;
	appearance: none;
	-webkit-appearance: none;
	border-radius: 2px;
	outline: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-thumb {
	-webkit-appearance: none;
	appearance: none;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	cursor: pointer;
	margin-top: -5px;
}
.wcb-dimensions-unit-control__range::-moz-range-thumb {
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: #0073aa;
	border: none;
	cursor: pointer;
}
.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {
	height: 4px;
	border-radius: 2px;
}
.wcb-dimensions-unit-control__range::-moz-range-track {
	height: 4px;
	border-radius: 2px;
	background: #ddd;
}
`;
function useInjectStyles() {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (document.getElementById(STYLE_TAG_ID)) return;
    const tag = document.createElement("style");
    tag.id = STYLE_TAG_ID;
    tag.textContent = CSS;
    document.head.appendChild(tag);
  }, []);
}

// BoxIcon styles ───────────────────────────────────────────────────────────

const iconRoot = {
  boxSizing: "border-box",
  display: "block",
  flex: "0 0 24px",
  width: 24,
  height: 24,
  position: "relative",
  padding: 4
};
const iconViewbox = {
  boxSizing: "border-box",
  display: "block",
  position: "relative",
  width: "100%",
  height: "100%"
};
const baseStroke = {
  boxSizing: "border-box",
  display: "block",
  pointerEvents: "none",
  position: "absolute",
  backgroundColor: "currentColor"
};
function stroke(focused, extra) {
  return {
    ...baseStroke,
    opacity: focused ? 1 : 0.3,
    ...extra
  };
}

// ─── Layout styles ────────────────────────────────────────────────────────────

const root = {
  boxSizing: "border-box",
  width: "100%",
  paddingBottom: 12
};
const header = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 8
};
const headerActions = {
  display: "flex",
  alignItems: "center",
  gap: 4
};
const sideRow = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginBottom: 8
};
const sideRowLast = {
  ...sideRow,
  marginBottom: 0
};
const unitControl = {
  flex: "0 0 110px",
  width: 110
};
const sliderWrapper = {
  flex: 1,
  display: "flex",
  alignItems: "center"
};

/***/ }),

/***/ "./src/components/controls/MyDimensionsControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyDimensionsControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_DIMENSION: () => (/* binding */ DEFAULT_DIMENSION),
/* harmony export */   MY_DIMENSIONS_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_GAP_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_GAP_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_MARGIN_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_MARGIN_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_GAP_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_GAP_DEMO__EMPTY: () => (/* binding */ MY_DIMENSIONS_NO_GAP_DEMO__EMPTY),
/* harmony export */   MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO),
/* harmony export */   MY_DIMENSIONS_PADDING_CONTROL_DEMO: () => (/* binding */ MY_DIMENSIONS_PADDING_CONTROL_DEMO)
/* harmony export */ });
const DEFAULT_DIMENSION = {
  top: "12px",
  left: "12px",
  right: "12px",
  bottom: "12px"
};
const MY_DIMENSIONS_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_PADDING_CONTROL_DEMO = {
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_MARGIN_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_NO_GAP_CONTROL_DEMO = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_GAP_DEMO__EMPTY = {
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  padding: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};
const MY_DIMENSIONS_GAP_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  }
};
const MY_DIMENSIONS_NO_MARGIN_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  padding: {
    Desktop: {
      top: "1rem",
      left: "1rem",
      right: "1rem",
      bottom: "1rem"
    }
  }
};
const MY_DIMENSIONS_NO_PADDING_CONTROL_DEMO = {
  colunmGap: {
    Desktop: "1.5rem"
  },
  rowGap: {
    Desktop: "1.5rem"
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  }
};

/***/ }),

/***/ "./src/components/controls/MyDisclosure.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyDisclosure.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/MinusIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MyDisclosure = ({
  className = "space-y-3.5",
  label = "Customize",
  children,
  defaultOpen,
  as,
  hasResponsive = false,
  isDisableButton = false
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure, {
    defaultOpen: defaultOpen,
    as: as
  }, ({
    open
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: open ? "ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4" : ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Button, {
    className: `flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 ${open ? "rounded-b-none" : ""}`,
    disabled: isDisableButton
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    hasResponsive: hasResponsive,
    className: "MyDisclosure__labelControl"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(label, "boostify-blocks")), open ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
    className: "w-5 h-5 text-purple-900"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "w-4 h-4 text-purple-900",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M3 22H21",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-miterlimit": "10",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Disclosure.Panel, {
    className: "px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, children))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDisclosure);

/***/ }),

/***/ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const TAGS_PLANS = [{
  name: "h1",
  icon: "H1"
}, {
  name: "h2",
  icon: "H2"
}, {
  name: "h3",
  icon: "H3"
}, {
  name: "h4",
  icon: "H4"
}, {
  name: "h5",
  icon: "H5"
}, {
  name: "h6",
  icon: "H6"
}, {
  name: "div",
  icon: "DIV"
}, {
  name: "p",
  icon: "P"
}];
const MyHeadingTagControl = ({
  onChange,
  tag,
  className,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading tag", "boostify-blocks")
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: label,
    className: className
    // @ts-ignore
    ,
    onChange: onChange,
    value: tag,
    plans: TAGS_PLANS,
    isWrap: true,
    hasResponsive: false
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyHeadingTagControl);

/***/ }),

/***/ "./src/components/controls/MyLabelControl/MyLabelControl.tsx":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MyLabelControl/MyLabelControl.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../MyResponsiveToggle/MyResponsiveToggle */ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx");



const MyLabelControl = ({
  children,
  className = "mb-2",
  help,
  hasResponsive,
  devices
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `components-base-control__label font-medium uppercase text-[11px] ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-control-label flex items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__label"
  }, children), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-control__responsive ml-1.5"
  }, hasResponsive && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyResponsiveToggle_MyResponsiveToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    devices: devices
  }))), !!help && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wb-base-help text-xs text-slate-500"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "components-base-control__help"
  }, help)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyLabelControl);

/***/ }),

/***/ "./src/components/controls/MyMediaUploadCheck.tsx":
/*!********************************************************!*\
  !*** ./src/components/controls/MyMediaUploadCheck.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MEDIA_UPLOAD: () => (/* binding */ DEFAULT_MEDIA_UPLOAD),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyButton */ "./src/components/controls/MyButton.tsx");







const DEFAULT_MEDIA_UPLOAD = {
  mediaId: 0,
  mediaUrl: "",
  mediaSrcSet: undefined
};
const MyMediaUploadCheck = ({
  className = "text-gray-700",
  btnClass = "ring-1 ring-neutral-200",
  defaultBtnClass = "hover:bg-slate-100",
  imageData,
  onChange
}) => {
  const {
    mediaId,
    mediaUrl,
    mediaSrcSet,
    sizes
  } = imageData;
  const removeMedia = () => {
    onChange({
      mediaId: 0,
      mediaUrl: "",
      mediaSrcSet: undefined
    });
  };
  const onSelectMedia = media => {
    onChange({
      mediaId: media.id,
      mediaUrl: media.url,
      mediaSrcSet: `${media.url} ${media.width}w, ${media.sizes?.medium?.url} ${media.sizes?.medium?.width}w, ${media.sizes?.full?.url} ${media.sizes?.full?.width}w, ${media.sizes?.large?.url} ${media.sizes?.large?.width}w`,
      sizes: media.sizes
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `editor-post-featured-image w-full ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectMedia,
    value: mediaId,
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: `h-auto rounded-lg text-inherit ${btnClass} ${mediaId == 0 ? "editor-post-featured-image__toggle " + defaultBtnClass : "editor-post-featured-image__preview"}`,
      onClick: open
    }, mediaId == 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center flex flex-col items-center justify-center rounded-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "text-inherit"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mt-0.5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choose an image", "boostify-blocks"))), !!mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: mediaUrl,
      className: "w-full block rounded-lg",
      sizes: "250px",
      srcSet: mediaSrcSet || undefined
    }))
  })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between gap-2 mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace image", "boostify-blocks"),
    value: mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ["image"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "flex-1 my-0 flex justify-center",
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace", "boostify-blocks"))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "flex-1 my-0",
    onClick: removeMedia,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Remove", "boostify-blocks")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyMediaUploadCheck);

/***/ }),

/***/ "./src/components/controls/MyMotionEffectControl/MyMotionEffectControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MyMotionEffectControl/MyMotionEffectControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_MOTION_EFFECT_DEMO: () => (/* binding */ MY_MOTION_EFFECT_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MySelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




// @ts-ignore

const options = [{
  label: "None",
  value: ""
}, {
  label: "Bounce",
  value: "bounce"
}, {
  label: "Flash",
  value: "flash"
}, {
  label: "Pulse",
  value: "pulse"
}, {
  label: "RubberBand",
  value: "rubberBand"
}, {
  label: "ShakeX",
  value: "shakeX"
}, {
  label: "ShakeY",
  value: "shakeY"
}, {
  label: "HeadShake",
  value: "headShake"
}, {
  label: "Swing",
  value: "swing"
}, {
  label: "Tada",
  value: "tada"
}, {
  label: "Wobble",
  value: "wobble"
}, {
  label: "Jello",
  value: "jello"
}, {
  label: "HeartBeat",
  value: "heartBeat"
}, {
  label: "BackInDown",
  value: "backInDown"
}, {
  label: "BackInLeft",
  value: "backInLeft"
}, {
  label: "BackInRight",
  value: "backInRight"
}, {
  label: "BackInUp",
  value: "backInUp"
}, {
  label: "BounceIn",
  value: "bounceIn"
}, {
  label: "BounceInDown",
  value: "bounceInDown"
}, {
  label: "BounceInLeft",
  value: "bounceInLeft"
}, {
  label: "BounceInRight",
  value: "bounceInRight"
}, {
  label: "BounceInUp",
  value: "bounceInUp"
}, {
  label: "FadeIn",
  value: "fadeIn"
}, {
  label: "FadeInDown",
  value: "fadeInDown"
}, {
  label: "FadeInDownBig",
  value: "fadeInDownBig"
}, {
  label: "FadeInLeft",
  value: "fadeInLeft"
}, {
  label: "FadeInLeftBig",
  value: "fadeInLeftBig"
}, {
  label: "FadeInRight",
  value: "fadeInRight"
}, {
  label: "FadeInRightBig",
  value: "fadeInRightBig"
}, {
  label: "FadeInUp",
  value: "fadeInUp"
}, {
  label: "FadeInUpBig",
  value: "fadeInUpBig"
}, {
  label: "FadeInTopLeft",
  value: "fadeInTopLeft"
}, {
  label: "FadeInTopRight",
  value: "fadeInTopRight"
}, {
  label: "FadeInBottomLeft",
  value: "fadeInBottomLeft"
}, {
  label: "FadeInBottomRight",
  value: "fadeInBottomRight"
}, {
  label: "Flip",
  value: "flip"
}, {
  label: "FlipInX",
  value: "flipInX"
}, {
  label: "FlipInY",
  value: "flipInY"
}, {
  label: "LightSpeedInRight",
  value: "lightSpeedInRight"
}, {
  label: "LightSpeedInLeft",
  value: "lightSpeedInLeft"
}, {
  label: "RotateIn",
  value: "rotateIn"
}, {
  label: "RotateInDownLeft",
  value: "rotateInDownLeft"
}, {
  label: "RotateInDownRight",
  value: "rotateInDownRight"
}, {
  label: "RotateInUpLeft",
  value: "rotateInUpLeft"
}, {
  label: "RotateInUpRight",
  value: "rotateInUpRight"
}, {
  label: "Hinge",
  value: "hinge"
}, {
  label: "JackInTheBox",
  value: "jackInTheBox"
}, {
  label: "RollIn",
  value: "rollIn"
}, {
  label: "ZoomIn",
  value: "zoomIn"
}, {
  label: "ZoomInDown",
  value: "zoomInDown"
}, {
  label: "ZoomInLeft",
  value: "zoomInLeft"
}, {
  label: "ZoomInRight",
  value: "zoomInRight"
}, {
  label: "ZoomInUp",
  value: "zoomInUp"
}, {
  label: "SlideInDown",
  value: "slideInDown"
}, {
  label: "SlideInLeft",
  value: "slideInLeft"
}, {
  label: "SlideInRight",
  value: "slideInRight"
}, {
  label: "SlideInUp",
  value: "slideInUp"
}];
const MY_MOTION_EFFECT_DEMO = {
  animationDelay: 0,
  animationDuration: "fast",
  entranceAnimation: "",
  repeat: "1"
};
const MyMyMotionEffectData = ({
  onChange,
  data
}) => {
  console.log(22, "-----MyMyMotionEffectData-----", {
    data
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Animation name",
    options: options,
    hasResponsive: false,
    onChange: value => onChange({
      ...data,
      entranceAnimation: value
    }),
    value: data.entranceAnimation
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Animation duration",
    options: [{
      label: "Slow (2s)",
      value: "slow"
    }, {
      label: "Slower (3s)",
      value: "slower"
    }, {
      label: "Fast (800ms)",
      value: "fast"
    }, {
      label: "Faster (500ms)",
      value: "faster"
    }],
    hasResponsive: false,
    onChange: value => onChange({
      ...data,
      animationDuration: value
    }),
    value: data.animationDuration
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    shiftStep: 1000,
    step: 100,
    __unstableInputWidth: "60px",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Animation delay (ms)"),
    labelPosition: "edge",
    min: 0,
    value: data.animationDelay,
    onChange: e => onChange({
      ...data,
      animationDelay: Number(e || 0) || 0
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MySelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Animation repeat",
    options: [{
      label: "1",
      value: "1"
    }, {
      label: "2",
      value: "2"
    }, {
      label: "3",
      value: "3"
    }, {
      label: "infinite",
      value: "infinite"
    }],
    hasResponsive: false,
    onChange: value => onChange({
      ...data,
      repeat: value
    }),
    value: data.repeat
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyMyMotionEffectData);

/***/ }),

/***/ "./src/components/controls/MyRadioGroup.tsx":
/*!**************************************************!*\
  !*** ./src/components/controls/MyRadioGroup.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALIGNMENT_PLANS_DEMO: () => (/* binding */ ALIGNMENT_PLANS_DEMO),
/* harmony export */   PLANS_DEMO: () => (/* binding */ PLANS_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/radio-group/radio-group.js");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);






const PLANS_DEMO = [{
  name: "left",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "right",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}];
const ALIGNMENT_PLANS_DEMO = [{
  name: "left",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}, {
  name: "right",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		`
}];
function MyRadioGroup({
  onChange = () => {},
  value,
  className = "",
  plans = PLANS_DEMO,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "boostify-blocks"),
  hasResponsive = true,
  isWrap = false,
  labelClassName,
  contentClassName = "mt-3"
}) {
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || plans[0].name);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (selected !== value) {
      setSelected(value || "");
    }
  }, [value]);
  const handleChangeRadio = value => {
    setSelected(value);
    onChange(value);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup, {
    className: className,
    value: selected,
    onChange: handleChangeRadio
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup.Label, {
    className: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: labelClassName,
    hasResponsive: hasResponsive
  }, label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${contentClassName} relative flex gap-1 ${isWrap ? "flex-wrap" : ""}`
  }, plans.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.RadioGroup.Option, {
      key: item.name,
      value: item.name,
      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment
    }, ({
      checked
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg ${checked ? "bg-sky-50 border-sky-400 text-sky-500" : "text-neutral-500 border-slate-300 hover:border-slate-500"}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      position: "top center"
      // @ts-ignore
      ,
      delay: 400,
      text: item.name.charAt(0).toUpperCase() + item.name.slice(1)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "absolute inset-0 z-[1]"
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-xs leading-5",
      dangerouslySetInnerHTML: {
        __html: item.icon
      }
    })));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyRadioGroup);

/***/ }),

/***/ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RESPONSIVE_CONDITON_DEMO: () => (/* binding */ RESPONSIVE_CONDITON_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const RESPONSIVE_CONDITON_DEMO = {
  isHiddenOnDesktop: false,
  isHiddenOnTablet: false,
  isHiddenOnMobile: false
};
const MyResponsiveConditionControl = ({
  className = "space-y-4",
  responsiveConditionControl = RESPONSIVE_CONDITON_DEMO,
  setAttrs__responsiveCondition
}) => {
  const {
    isHiddenOnDesktop,
    isHiddenOnMobile,
    isHiddenOnTablet
  } = responsiveConditionControl;
  const toggleHiddenOnDesktop = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnDesktop: e
    });
  };
  const toggleHiddenOnTablet = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnTablet: e
    });
  };
  const toggleHiddenOnMobile = e => {
    setAttrs__responsiveCondition({
      ...responsiveConditionControl,
      isHiddenOnMobile: e
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Desktop", "boostify-blocks"),
    checked: isHiddenOnDesktop,
    onChange: toggleHiddenOnDesktop,
    className: "mb-0"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Tablet", "boostify-blocks"),
    checked: isHiddenOnTablet,
    onChange: toggleHiddenOnTablet
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide on Mobile", "boostify-blocks"),
    checked: isHiddenOnMobile,
    onChange: toggleHiddenOnMobile
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyResponsiveConditionControl);

/***/ }),

/***/ "./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyResponsiveToggle/MyResponsiveToggle.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/transitions/transition.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ComputerDesktopIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DeviceTabletIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/DevicePhoneMobileIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const DEVICE_TYPES = {
  Desktop: "Desktop",
  Tablet: "Tablet",
  Mobile: "Mobile"
};
const MyResponsiveToggle = ({
  className = "",
  devices = Object.values(DEVICE_TYPES)
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const {
    __experimentalSetPreviewDeviceType: setPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/edit-post");
  const handleSetDeviceType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(dv => {
    setPreviewDeviceType(DEVICE_TYPES[dv]);
  }, []);
  const renderDeviceIcon = (dv, className = "h-4 w-4") => {
    switch (dv) {
      case "Desktop":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Tablet":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
          className: className,
          "aria-hidden": "true"
        });
      case "Mobile":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__, {
          className: className,
          "aria-hidden": "true"
        });
      default:
        return null;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu, {
    as: "div",
    className: `wcbMyResponsiveToggle relative inline-block text-left ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Button, {
    className: "wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",
    title: deviceType
  }, renderDeviceIcon(deviceType), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__, {
    className: "w-2.5 h-2.5 ml-1",
    "aria-hidden": "true"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__.Transition, {
    as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Items, {
    className: "wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-1 space-y-0.5"
  }, devices.map((item, index) => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Menu.Item, {
      key: index + item
    }, ({
      active
    }) => {
      const isActive = active || item === deviceType;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: `${isActive ? "bg-sky-50 text-sky-600" : "text-slate-800"} group flex w-full items-center justify-center rounded-md py-1.5`,
        onClick: e => {
          handleSetDeviceType(item);
        },
        title: item
      }, renderDeviceIcon(item));
    });
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyResponsiveToggle);

/***/ }),

/***/ "./src/components/controls/MySelect.tsx":
/*!**********************************************!*\
  !*** ./src/components/controls/MySelect.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");




const MySelect = ({
  label = "My select",
  hasResponsive,
  labelClass = "flex-1",
  devices,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-MySelect w-full flex justify-between items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: labelClass,
    hasResponsive: hasResponsive,
    devices: devices
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    hideLabelFromVision: true,
    ...props
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySelect);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./src/components/controls/MySpacingSizesControl/styles.scss");
/* harmony import */ var _SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpacingInputControl */ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const MySpacingSizesControl = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
  hasResponsive = true,
  units,
  minCustomValue,
  value = "1rem",
  onChange = () => {},
  customUnitsValueSettings
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `MySpacingSizesControl ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    hasResponsive: hasResponsive
  }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SpacingInputControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: value,
    onChange: onChange,
    minCustomValue: minCustomValue,
    units: units,
    customUnitsValueSettings: customUnitsValueSettings
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MySpacingSizesControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx":
/*!*******************************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/SpacingInputControl.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS),
/* harmony export */   MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE: () => (/* binding */ MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyDimensionsControl/MyDimensionsControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsControl.tsx");





const MY_CUSTOM_UNITS_VALUE_SETTINGS = {
  px: {
    max: 1000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 50,
    steps: 0.1
  },
  rm: {
    max: 50,
    steps: 0.1
  },
  rem: {
    max: 50,
    steps: 0.1
  }
};
const MY_CUSTOM_UNITS_VALUE_SETTINGS__LARGE = {
  px: {
    max: 2000,
    steps: 1
  },
  "%": {
    max: 100,
    steps: 1
  },
  vw: {
    max: 100,
    steps: 1
  },
  vh: {
    max: 100,
    steps: 1
  },
  em: {
    max: 100,
    steps: 0.1
  },
  rm: {
    max: 100,
    steps: 0.1
  },
  rem: {
    max: 100,
    steps: 0.1
  }
};
const SpacingInputControl = ({
  value = "10px",
  onChange,
  minCustomValue = 0,
  units = _MyDimensionsControl_MyDimensionsControl__WEBPACK_IMPORTED_MODULE_3__.MY_GAP_UNITS,
  className = "",
  customUnitsValueSettings = MY_CUSTOM_UNITS_VALUE_SETTINGS
}) => {
  const selectedUnit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => (0,_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalParseQuantityAndUnitFromRawValue)(value), [value])[1] || units[0].value;
  const customRangeValue = parseFloat(value !== null && value !== void 0 ? value : "10");
  const handleCustomValueSliderChange = next => {
    const newValue = [next, selectedUnit].join("");
    onChange(newValue);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${className} flex items-center space-x-2.5`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-[1.5]"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    value: customRangeValue,
    min: minCustomValue,
    max: customUnitsValueSettings[selectedUnit].max,
    step: customUnitsValueSettings[selectedUnit].steps
    // @ts-ignore
    ,
    withInputField: false,
    onChange: handleCustomValueSliderChange,
    className: "m-0"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalUnitControl, {
    onChange: (newSize, ...props) => {
      onChange(newSize);
    },
    placeholder: `${parseInt(value || "")}`,
    value: value,
    units: units,
    min: minCustomValue,
    hideLabelFromVision: true
    // size={"__unstable-large"}
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingInputControl);

/***/ }),

/***/ "./src/components/controls/MySpacingSizesControl/styles.scss":
/*!*******************************************************************!*\
  !*** ./src/components/controls/MySpacingSizesControl/styles.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/controls/MyTabs.tsx":
/*!********************************************!*\
  !*** ./src/components/controls/MyTabs.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MyTabs = ({
  className = "",
  children,
  tabs = [],
  label,
  tabSelected,
  onChangeSelected = () => {}
}) => {
  const [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSelectedIndex(tabs.findIndex(el => el === tabSelected) || 0);
  }, [tabSelected]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `w-full max-w-md py-2 ${className}`
  }, label ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mb-2"
  }, label) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Group, {
    selectedIndex: selectedIndex,
    onChange: index => {
      setSelectedIndex(index);
      onChangeSelected(index);
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.List, {
    className: "flex space-x-1 rounded-xl bg-slate-100 p-1"
  }, tabs.map(category => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab, {
    key: category,
    className: ({
      selected
    }) => classNames("w-full rounded-lg py-2.5 text-xs font-medium leading-5 text-blue-700 capitalize", "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2", selected ? "bg-white shadow" : "text-slate-700 ")
  }, category))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Tab.Panels, {
    className: "relative mt-3 rounded-lg ring-1 ring-offset-4 ring-slate-200 p-2.5 "
  }, children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTabs);

/***/ }),

/***/ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx":
/*!***************************************************************************!*\
  !*** ./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");




const MyTextAlignControl = ({
  onChange,
  textAlignment,
  className,
  hasResponsive,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignment", "boostify-blocks")
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className
    // @ts-ignore
    ,
    onChange: onChange,
    value: textAlignment || "",
    hasResponsive: hasResponsive,
    label: label
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextAlignControl);

/***/ }),

/***/ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-underline.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-strikethrough.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);





const TEXT_DECORATIONS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None"),
  value: "none",
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Underline"),
  value: "underline",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Strikethrough"),
  value: "line-through",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}];
const MyTextDecorationControl = ({
  value = "none",
  onChange = () => {},
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    ...props,
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Decoration"),
    value: value,
    onChange: onChange
  }, TEXT_DECORATIONS.map(textDecoration => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      key: textDecoration.value,
      value: textDecoration.value,
      icon: textDecoration.icon,
      label: textDecoration.name,
      title: textDecoration.name
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextDecorationControl);

/***/ }),

/***/ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-uppercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-lowercase.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/format-capitalize.js");





const TEXT_TRANSFORMS = [{
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None"),
  value: "none",
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    "aria-hidden": "true",
    focusable: "false"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M7 11.5h10V13H7z"
  }))
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Uppercase"),
  value: "uppercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Lowercase"),
  value: "lowercase",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Capitalize"),
  value: "capitalize",
  icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_5__["default"]
}];
const MyTextTransformControl = ({
  value = "none",
  onChange = () => {},
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl, {
    ...props,
    __experimentalIsIconGroup: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Letter case"),
    value: value,
    onChange: onChange
  }, TEXT_TRANSFORMS.map(textTransform => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOptionIcon, {
      key: textTransform.value,
      value: textTransform.value,
      icon: textTransform.icon,
      label: textTransform.name
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTextTransformControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/MyTypographyControl.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");
/* harmony import */ var _MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyTextDecorationControl/MyTextDecorationControl */ "./src/components/controls/MyTextDecorationControl/MyTextDecorationControl.tsx");
/* harmony import */ var _MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MyTextTransformControl/MyTextTransformControl */ "./src/components/controls/MyTextTransformControl/MyTextTransformControl.tsx");
/* harmony import */ var _WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../WcbFontFamilyPicker/WcbFontFamilyPicker */ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx");
/* harmony import */ var _MyDisclosure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");













const MyTypographyControl = ({
  className = "space-y-5",
  typographyControl = _types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
  setAttrs__typography = () => {},
  label = "Typography",
  disclosureDefaultOpen
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const {
    fontSizes: fontSizesProps,
    appearance,
    textDecoration,
    textTransform,
    lineHeight: lineHeightProps,
    letterSpacing: letterSpacingProps,
    fontFamily
  } = typographyControl;
  const {
    currentDeviceValue: FONT_SIZE
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(fontSizesProps, deviceType);
  const {
    currentDeviceValue: LINE_HEIGHT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(lineHeightProps, deviceType);
  const {
    currentDeviceValue: LETTER_SPACING
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(letterSpacingProps, deviceType);

  //
  const handleChangeFontFamily = newFont => {
    setAttrs__typography({
      ...typographyControl,
      fontFamily: newFont
    });
  };
  const handleChangeFontAppearance = value => {
    setAttrs__typography({
      ...typographyControl,
      appearance: value || _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__.FONT_APPEARANCE_OPTIONS[0]
    });
  };
  const handleChangeTextDecoration = value => {
    setAttrs__typography({
      ...typographyControl,
      textDecoration: value
    });
  };
  const handleChangeTextTransform = value => {
    setAttrs__typography({
      ...typographyControl,
      textTransform: value
    });
  };
  const handleChangeLineHeight = value => {
    setAttrs__typography({
      ...typographyControl,
      lineHeight: {
        ...lineHeightProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeLetterSpacing = value => {
    setAttrs__typography({
      ...typographyControl,
      letterSpacing: {
        ...letterSpacingProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeFontSize = newFontSize => {
    setAttrs__typography({
      ...typographyControl,
      fontSizes: {
        ...fontSizesProps,
        [deviceType]: newFontSize
      }
    });
  };
  //
  const renderFontFamily = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFontFamilyPicker_WcbFontFamilyPicker__WEBPACK_IMPORTED_MODULE_9__["default"], {
      selectedFont: fontFamily,
      onChangeFontFamily: handleChangeFontFamily
    }));
  };
  //
  const renderFontsizePicker = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "flex absolute right-8 -top-0.5 z-10",
      hasResponsive: true,
      children: ""
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.FontSizePicker
    // @ts-ignore
    , {
      __nextHasNoMarginBottom: true
      // @ts-ignore
      ,
      fontSizes: _types__WEBPACK_IMPORTED_MODULE_4__.FONT_SIZES_DEMO
      // @ts-ignore
      ,
      value: FONT_SIZE,
      fallbackFontSize: 16
      // @ts-ignore
      ,
      onChange: handleChangeFontSize
    }));
  };
  const renderAppearance = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SelectFontAppearance__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: ({
        selectedItem
      }) => handleChangeFontAppearance(selectedItem),
      value: appearance
    });
  };
  const renderLineHeight = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Line height", "boostify-blocks")
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalNumberControl, {
      onChange: handleChangeLineHeight,
      value: LINE_HEIGHT,
      step: 0.1,
      min: 0,
      max: 100,
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1.5", "boostify-blocks")
    }));
  };
  const renderLetterSpacing = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between space-x-3 items-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      hasResponsive: true,
      className: "flex-shrink-0",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Letter spacing", "boostify-blocks")
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.__experimentalUnitControl, {
      onChange: handleChangeLetterSpacing,
      value: LETTER_SPACING,
      units: [{
        value: "px",
        label: "px",
        default: 0
      }, {
        value: "%",
        label: "%",
        default: 0
      }, {
        value: "em",
        label: "em",
        default: 0
      }]
    }));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyDisclosure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    defaultOpen: disclosureDefaultOpen,
    label: label
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, renderFontFamily(), renderFontsizePicker(), renderAppearance(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextDecorationControl_MyTextDecorationControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: textDecoration,
    onChange: handleChangeTextDecoration
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyTextTransformControl_MyTextTransformControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: textTransform,
    onChange: handleChangeTextTransform
  }), renderLineHeight(), renderLetterSpacing()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyTypographyControl);

/***/ }),

/***/ "./src/components/controls/MyTypographyControl/types.ts":
/*!**************************************************************!*\
  !*** ./src/components/controls/MyTypographyControl/types.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_SIZES_DEMO: () => (/* binding */ FONT_SIZES_DEMO),
/* harmony export */   TYPOGRAPHY_CONTROL_DEMO: () => (/* binding */ TYPOGRAPHY_CONTROL_DEMO),
/* harmony export */   TYPOGRAPHY_CONTROL_PRODUCT_DEMO: () => (/* binding */ TYPOGRAPHY_CONTROL_PRODUCT_DEMO)
/* harmony export */ });
/* harmony import */ var _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SelectFontAppearance */ "./src/components/controls/SelectFontAppearance.tsx");

const TYPOGRAPHY_CONTROL_DEMO = {
  fontSizes: {
    Desktop: ""
  },
  appearance: _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__.FONT_APPEARANCE_OPTIONS[0],
  textDecoration: undefined,
  textTransform: undefined,
  lineHeight: {
    Desktop: undefined
  },
  letterSpacing: {
    Desktop: undefined
  },
  fontFamily: undefined
};
const TYPOGRAPHY_CONTROL_PRODUCT_DEMO = {
  fontSizes: {
    Desktop: "",
    Tablet: "",
    Mobile: ""
  },
  appearance: _SelectFontAppearance__WEBPACK_IMPORTED_MODULE_0__.FONT_APPEARANCE_OPTIONS[0],
  textDecoration: undefined,
  textTransform: undefined,
  lineHeight: {
    Desktop: undefined
  },
  letterSpacing: {
    Desktop: undefined
  },
  fontFamily: undefined
};
const FONT_SIZES_DEMO = [{
  name: "Tiny",
  slug: "tiny",
  size: "8px"
}, {
  name: "Small",
  slug: "small",
  size: "12px"
}, {
  name: "Normal",
  slug: "normal",
  size: "16px"
}, {
  name: "Big",
  slug: "big",
  size: "26px"
}, {
  name: "Bigger",
  slug: "bigger",
  size: "30px"
}, {
  name: "Huge",
  slug: "huge",
  size: "36px"
}];

/***/ }),

/***/ "./src/components/controls/MyVideoUploadCheck.tsx":
/*!********************************************************!*\
  !*** ./src/components/controls/MyVideoUploadCheck.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/plus.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/capture-video.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyButton */ "./src/components/controls/MyButton.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");








const MyVideoUploadCheck = ({
  className = "",
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Video", "boostify-blocks"),
  mediaId,
  mediaUrl,
  onChange
}) => {
  const removeMedia = () => {
    onChange({
      mediaId: 0,
      mediaUrl: ""
    });
  };
  const onSelectMedia = media => {
    onChange({
      mediaId: media.id,
      mediaUrl: media.url
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `editor-post-featured-image w-full ${className}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], null, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectMedia,
    value: mediaId,
    allowedTypes: ["video"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: `h-auto rounded-lg ring-1 ring-black/10  flex items-center justify-center ${mediaId == 0 ? "editor-post-featured-image__toggle hover:bg-slate-100" : "editor-post-featured-image__toggle hover:bg-slate-100"}`,
      onClick: open
    }, mediaId == 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center flex flex-col items-center justify-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"],
      className: "text-slate-700"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mt-0.5"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Choose an video", "boostify-blocks"))), !!mediaUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {
      icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
    }))
  })), mediaId !== 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex justify-between gap-2 mt-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace Video", "boostify-blocks"),
    value: mediaId,
    onSelect: onSelectMedia,
    allowedTypes: ["video"],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "flex-1 my-0 flex justify-center",
      onClick: open,
      variant: "secondary"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Replace", "boostify-blocks"))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Remove Video", "boostify-blocks"),
    className: "flex-1 my-0",
    onClick: removeMedia,
    isDestructive: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Remove", "boostify-blocks")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyVideoUploadCheck);

/***/ }),

/***/ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx":
/*!*********************************************************************!*\
  !*** ./src/components/controls/MyZIndexControl/MyZIndexControl.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z_INDEX_DEMO: () => (/* binding */ Z_INDEX_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");






const Z_INDEX_DEMO = {
  Desktop: undefined
};
const MyZIndexControl = ({
  className = "space-y-3",
  zIndexControl = Z_INDEX_DEMO,
  setAttrs__zIndex
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  const Z_INDEX = zIndexControl[deviceType] !== undefined ? zIndexControl[deviceType] : zIndexControl.Tablet !== undefined ? zIndexControl.Tablet : zIndexControl.Desktop;
  const handleChangeZIndex = value => {
    setAttrs__zIndex({
      ...zIndexControl,
      [deviceType]: value
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Above setting will only take effect once you are on the live page, and not while you're editing.", "boostify-blocks")
    // @ts-ignore
    ,
    value: undefined,
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Z-Index", "boostify-blocks")),
    allowReset: true,
    max: 1000,
    min: -100,
    initialPosition: Z_INDEX,
    onChange: handleChangeZIndex
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyZIndexControl);

/***/ }),

/***/ "./src/components/controls/ResetButton.tsx":
/*!*************************************************!*\
  !*** ./src/components/controls/ResetButton.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);



const ResetButton = ({
  onClick,
  className = "text-slate-700",
  isSmall = true,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
    className: className,
    onClick: onClick,
    icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      className: "w-5 h-5",
      "aria-hidden": "true",
      focusable: "false"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"
    })),
    isSmall: isSmall,
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetButton);

/***/ }),

/***/ "./src/components/controls/SelectFontAppearance.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectFontAppearance.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FONT_APPEARANCE_OPTIONS: () => (/* binding */ FONT_APPEARANCE_OPTIONS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const FONT_APPEARANCE_OPTIONS = [{
  key: "default",
  name: "Default",
  style: {
    fontWeight: undefined,
    fontStyle: undefined
  }
}, {
  key: "thin",
  name: "Thin",
  style: {
    fontWeight: "100",
    fontStyle: "normal"
  }
}, {
  key: "ExtraLight",
  name: "Extra Light",
  style: {
    fontWeight: "200",
    fontStyle: "normal"
  }
}, {
  key: "light",
  name: "Light",
  style: {
    fontWeight: "300",
    fontStyle: "normal"
  }
}, {
  key: "Regular",
  name: "Regular",
  style: {
    fontWeight: "400",
    fontStyle: "normal"
  }
}, {
  key: "Medium",
  name: "Medium",
  style: {
    fontWeight: "500",
    fontStyle: "normal"
  }
}, {
  key: "SemiBold",
  name: "Semi Bold",
  style: {
    fontWeight: "600",
    fontStyle: "normal"
  }
}, {
  key: "Bold",
  name: "Bold",
  style: {
    fontWeight: "700",
    fontStyle: "normal"
  }
}, {
  key: "ExtraBold",
  name: "Extra Bold",
  style: {
    fontWeight: "800",
    fontStyle: "normal"
  }
}, {
  key: "Black",
  name: "Black",
  style: {
    fontWeight: "900",
    fontStyle: "normal"
  }
},
//
{
  key: "thin_italic",
  name: "Thin Italic",
  style: {
    fontWeight: "100",
    fontStyle: "italic"
  }
}, {
  key: "ExtraLight_italic",
  name: "Extra Light Italic",
  style: {
    fontWeight: "200",
    fontStyle: "italic"
  }
}, {
  key: "light_italic",
  name: "Light Italic",
  style: {
    fontWeight: "300",
    fontStyle: "italic"
  }
}, {
  key: "Regular_italic",
  name: "Regular Italic",
  style: {
    fontWeight: "400",
    fontStyle: "italic"
  }
}, {
  key: "Medium_italic",
  name: "Medium Italic",
  style: {
    fontWeight: "500",
    fontStyle: "italic"
  }
}, {
  key: "SemiBold_italic",
  name: "Semi Bold Italic",
  style: {
    fontWeight: "600",
    fontStyle: "italic"
  }
}, {
  key: "Bold_italic",
  name: "Bold Italic",
  style: {
    fontWeight: "700",
    fontStyle: "italic"
  }
}, {
  key: "ExtraBold_italic",
  name: "Extra Bold Italic",
  style: {
    fontWeight: "800",
    fontStyle: "italic"
  }
}, {
  key: "Black_italic",
  name: "Black Italic",
  style: {
    fontWeight: "900",
    fontStyle: "italic"
  }
}];
const SelectFontAppearance = ({
  onChange,
  value
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CustomSelectControl
  //  @ts-ignore
  , {
    __nextUnconstrainedWidth: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Appearance", "boostify-blocks"),
    options: FONT_APPEARANCE_OPTIONS,
    onChange: onChange,
    value: value
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectFontAppearance);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/WcbFontFamilyPicker.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _google_fonts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-fonts.json */ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _MyCombobox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyCombobox */ "./src/components/controls/MyCombobox.tsx");
/* harmony import */ var _MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");







const WcbFontFamilyPicker = ({
  onChangeFontFamily,
  selectedFont
}) => {
  const [fontFamily, setFontFamily] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectedFont);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFontFamily(selectedFont);
  }, [selectedFont]);
  const systemFonts = [{
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }];
  const googleFontsList = [];
  Object.keys(_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__).forEach(k => {
    googleFontsList.push({
      value: k,
      label: k
    });
  });
  const handleChangeFont = newFont => {
    setFontFamily(newFont || "");
    onChangeFontFamily(newFont || "");
    googleFontsList.some(font => {
      if (font.value === newFont) {
        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)(newFont);
        return true;
      }
      return false;
    });
    (0,_utils__WEBPACK_IMPORTED_MODULE_3__.loadGoogleFont)("");
  };
  const FONTS = [{
    value: "",
    label: "Default"
  }, ...systemFonts, ...googleFontsList];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_5__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Font Family", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyCombobox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: fontFamily || "",
    options: FONTS,
    onChange: handleChangeFont
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFontFamilyPicker);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json":
/*!***********************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/google-fonts.json ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}');

/***/ }),

/***/ "./src/data/index.ts":
/*!***************************!*\
  !*** ./src/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_STORE_PANELS: () => (/* binding */ WCB_STORE_PANELS)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const INIT_BLOCK = {
  Advances: {
    panelIsOpen: ""
  },
  General: {
    panelIsOpen: "first"
  },
  Styles: {
    panelIsOpen: "first"
  },
  tabIsOpen: "General"
};
const DEFAULT_STATE = {};
const WCB_STORE_PANELS = "boostify-blocks/panels";
const actions = {
  setBlockPanelInfo(blockId, block) {
    return {
      type: "SET_BLOCK_PANEL_INFO",
      blockId,
      block
    };
  }
};
const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)(WCB_STORE_PANELS, {
  reducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
      case "SET_BLOCK_PANEL_INFO":
        const newBlock = state[action.blockId] || INIT_BLOCK;
        return {
          ...state,
          [action.blockId]: {
            ...newBlock,
            ...action.block
          }
        };
      default:
        return state;
    }
  },
  actions,
  selectors: {
    getBlockPanelInfo(state) {
      return state;
    }
  },
  controls: {},
  resolvers: {}
});

// Guard against duplicate registration: each block is a separate webpack bundle,
// but all bundles share the same browser window. Only register once.

const _win = window;
if (!_win.__boostifyPanelsStoreRegistered) {
  _win.__boostifyPanelsStoreRegistered = true;
  (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);
}


/***/ }),

/***/ "./src/hooks/useCreateCacheEmotion.ts":
/*!********************************************!*\
  !*** ./src/hooks/useCreateCacheEmotion.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");


const useCreateCacheEmotion = (key = "wcb-custom-cache-key") => {
  // This ensures Emotion global CSS is imported inside the mobile iframe.
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
    key,
    container: ref.current || undefined
  });
  return {
    myCache: cache,
    ref
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateCacheEmotion);

/***/ }),

/***/ "./src/hooks/useGetDeviceType.ts":
/*!***************************************!*\
  !*** ./src/hooks/useGetDeviceType.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useGetDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const {
      __experimentalGetPreviewDeviceType: getPreviewDeviceType
    } = select("core/edit-post") || false;
    if (!getPreviewDeviceType) {
      return {
        deviceType: null
      };
    }
    return {
      // @ts-ignore
      deviceType: getPreviewDeviceType()
    };
  }, []);
  return deviceType;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGetDeviceType);

/***/ }),

/***/ "./src/hooks/useGetImageSizeOptions.ts":
/*!*********************************************!*\
  !*** ./src/hooks/useGetImageSizeOptions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGetImageSizeOptions)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function useGetImageSizeOptions() {
  const {
    imageSizes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    // @ts-ignore
    const settings = select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.store).getSettings();
    return {
      imageSizes: settings.imageSizes
    };
  }, []);
  const imageSizeOptions = imageSizes?.map(({
    name,
    slug
  }) => ({
    value: slug,
    label: name
  })) || [];
  return {
    imageSizeOptions
  };
}

/***/ }),

/***/ "./src/hooks/useSetBlockPanelInfo.ts":
/*!*******************************************!*\
  !*** ./src/hooks/useSetBlockPanelInfo.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./src/data/index.ts");


// @ts-ignore

const useSetBlockPanelInfo = uniqueId => {
  // This ensures Emotion global CSS is imported inside the mobile iframe.
  const {
    setBlockPanelInfo
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_data__WEBPACK_IMPORTED_MODULE_2__.WCB_STORE_PANELS);
  const {
    blockStores
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    return {
      blockStores: select(_data__WEBPACK_IMPORTED_MODULE_2__.WCB_STORE_PANELS
      // @ts-ignore
      )?.getBlockPanelInfo()
    };
  }, [uniqueId]);
  const {
    tabIsOpen,
    Advances,
    General,
    Styles
  } = blockStores[uniqueId] || {};
  const blockStore = blockStores[uniqueId];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!blockStore && setBlockPanelInfo) {
      setBlockPanelInfo(uniqueId, {
        tabIsOpen: "General",
        General: {
          panelIsOpen: "first"
        },
        Styles: {
          panelIsOpen: "first"
        }
      });
    }
  }, [uniqueId]);
  const handleTogglePanel = (tab, panel, initOpenPanel) => {
    if (!setBlockPanelInfo) {
      return;
    }
    if (initOpenPanel && blockStore && blockStore[tab]?.panelIsOpen === "first") {
      panel = "";
    }
    if (blockStore && blockStore[tab]?.panelIsOpen === panel) {
      panel = "";
    }
    setBlockPanelInfo(uniqueId, {
      tabIsOpen: tab,
      [tab]: {
        panelIsOpen: panel === undefined && blockStore ? blockStore[tab]?.panelIsOpen : panel
      }
    });
  };
  return {
    setBlockPanelInfo,
    tabAdvances: Advances,
    tabGeneral: General,
    tabStyles: Styles,
    tabIsOpen,
    blockStore,
    handleTogglePanel,
    tabGeneralIsPanelOpen: General?.panelIsOpen,
    tabStylesIsPanelOpen: Styles?.panelIsOpen,
    tabAdvancesIsPanelOpen: Advances?.panelIsOpen
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSetBlockPanelInfo);

/***/ }),

/***/ "./src/styleEditor.ts":
/*!****************************!*\
  !*** ./src/styleEditor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Editor styles for block spacing

const generateEditorSpacingCSS = (spacing = '0px') => `
  /* Desktop */
  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper
    > * + *:not(p),
  .edit-post-visual-editor .editor-styles-wrapper
    .block-editor-block-list__layout.is-root-container
    > * + *:not(p) {
    margin-block-start: ${spacing};
    margin-top: ${spacing};
  }

  body.block-editor-iframe__body.editor-styles-wrapper
    .is-root-container.wp-site-blocks
    > * + *,
  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,
  body.block-editor-iframe__body.editor-styles-wrapper
    .is-layout-constrained
    > * + * {
    margin-block-start: ${spacing};
    margin-top: ${spacing};
  }

  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {
    margin-block-start: ${spacing};
    margin-top: ${spacing};
  }

  /* Tablet */
  @media (max-width: 768px) {
    .editor-styles-wrapper 
      > .block-editor-block-list__layout.is-root-container 
      > .wp-block:not(p) 
      > .block-editor-block-list__block,
    .editor-styles-wrapper
      > .block-editor-block-list__layout.is-root-container
      > .wp-block
      + .wp-block:not(p) {
      margin-block-start: ${spacing};
      margin-top: ${spacing};
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    .editor-styles-wrapper 
      > .block-editor-block-list__layout.is-root-container 
      > .wp-block:not(p) 
      > .block-editor-block-list__block,
    .editor-styles-wrapper
      > .block-editor-block-list__layout.is-root-container
      > .wp-block
      + .wp-block:not(p) {
      margin-block-start: ${spacing};
      margin-top: ${spacing};
    }
  }
`;
const styleEditor = globals => {
  // Fallback to 0px if not provided
  const blocksEditorSpacing = globals?.blocksEditorSpacing;
  const spacingValue = blocksEditorSpacing == '' ? 0 : blocksEditorSpacing;
  const spacing = typeof spacingValue === 'number' ? `${spacingValue}px` : spacingValue;
  const cssString = generateEditorSpacingCSS(spacing);
  let styleNode = document.getElementById('wcb-blocks-editor-custom-style');
  if (!styleNode) {
    styleNode = document.createElement('style');
    styleNode.id = 'wcb-blocks-editor-custom-style';
    document.head.appendChild(styleNode);
  }
  styleNode.textContent = cssString;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleEditor);

/***/ }),

/***/ "./src/utils/checkResponsiveValueForOptimizeCSS.ts":
/*!*********************************************************!*\
  !*** ./src/utils/checkResponsiveValueForOptimizeCSS.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkResponsiveValueForOptimizeCSS = ({
  mobile_v = null,
  tablet_v = null,
  desktop_v = null
}) => {
  let new_tablet_v = tablet_v;
  let new_desktop_v = desktop_v;
  if (mobile_v === tablet_v && tablet_v === desktop_v) {
    return {
      mobile_v,
      tablet_v: null,
      desktop_v: null
    };
  }
  if (desktop_v === tablet_v || desktop_v === mobile_v) {
    new_desktop_v = null;
  }
  if (tablet_v === mobile_v) {
    new_tablet_v = null;
  }
  return {
    mobile_v: mobile_v !== null && mobile_v !== void 0 ? mobile_v : null,
    tablet_v: new_tablet_v !== null && new_tablet_v !== void 0 ? new_tablet_v : null,
    desktop_v: new_desktop_v !== null && new_desktop_v !== void 0 ? new_desktop_v : null
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkResponsiveValueForOptimizeCSS);

/***/ }),

/***/ "./src/utils/color.js":
/*!****************************!*\
  !*** ./src/utils/color.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wcbCreateColor: () => (/* binding */ wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* binding */ wcbGetRgb)
/* harmony export */ });
/* harmony import */ var color_rgba__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-rgba */ "./node_modules/color-rgba/index.mjs");


/**
 * Creates a new random color.
 */
const wcbCreateColor = () => {
  return `#${((1 << 24) * Math.random() | 0).toString(16)}`;
};
/**
 * Returns an rgb string of the hex color.
 *
 * @param {string} hex Color
 */
const wcbGetRgb = hex => {
  const rgbColor = (0,color_rgba__WEBPACK_IMPORTED_MODULE_0__["default"])(hex.match(/^#/) ? hex : `#${hex}`);
  rgbColor.splice(3, 1);
  return rgbColor.join(', ');
};

/***/ }),

/***/ "./src/utils/converUniqueIdToAnphaKey.ts":
/*!***********************************************!*\
  !*** ./src/utils/converUniqueIdToAnphaKey.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   converClientIdToUniqueClass: () => (/* binding */ converClientIdToUniqueClass),
/* harmony export */   "default": () => (/* binding */ converUniqueIdToAnphaKey)
/* harmony export */ });
function converUniqueIdToAnphaKey(text, prefix = "wcb-") {
  if (!text) {
    return (prefix + "converniquedreturnnull" + Date.now() + Math.random()).replace(/\./g, "-");
  }

  // Convert clientId to a valid CSS class name
  // Example: "a1b2c3d4-e5f6-7890" -> "wcb-a1b2c3d4e5f67890"
  const cleanId = text.replace(/-/g, "") // Remove hyphens
  .replace(/\s/g, "") // Remove spaces
  .substring(0, 12); // Keep first 12 characters for reasonable length

  return prefix + cleanId;
}

// Alternative function that maintains full uniqueness
function converClientIdToUniqueClass(clientId, prefix = "wcb-") {
  if (!clientId) {
    return prefix + "fallback" + Date.now();
  }

  // Create a hash-like short identifier from clientId
  let hash = 0;
  for (let i = 0; i < clientId.length; i++) {
    const char = clientId.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Convert to positive number and base36 (alphanumeric)
  const shortId = Math.abs(hash).toString(36);
  return prefix + shortId;
}

/***/ }),

/***/ "./src/utils/convertAttsToPreview.ts":
/*!*******************************************!*\
  !*** ./src/utils/convertAttsToPreview.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ convertObjectAttrToPreview)
/* harmony export */ });
function convertObjectAttrToPreview(A) {
  let B = {};
  for (let key in A) {
    if (A.hasOwnProperty(key)) {
      B[key] = A[key].default;
    }
  }
  return B;
}

/***/ }),

/***/ "./src/utils/font.ts":
/*!***************************!*\
  !*** ./src/utils/font.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createLinkTagWithGoogleFont: () => (/* binding */ createLinkTagWithGoogleFont),
/* harmony export */   getGoogleFontURL: () => (/* binding */ getGoogleFontURL),
/* harmony export */   isGoogleFontEnqueued: () => (/* binding */ isGoogleFontEnqueued),
/* harmony export */   isWebFont: () => (/* binding */ isWebFont),
/* harmony export */   loadGoogleFont: () => (/* binding */ loadGoogleFont)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");

const getGoogleFontURL = fontName => {
  const family = fontName.replace(/ /g, "+");
  const subset = "";
  return `https://fonts.googleapis.com/css?family=${family}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic${subset}`;
};
const isWebFont = fontName => fontName && !fontName?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i);

/**
 * Load the stylesheet of a Google Font.
 *
 * @param {string} fontName The name of the font
 */
const loadGoogleFont = fontName => {
  setTimeout(() => {
    const _loadGoogleFont = head => {
      if (head && isWebFont(fontName)) {
        if (isGoogleFontEnqueued(fontName, head)) {
          return;
        }
        const link = createLinkTagWithGoogleFont(fontName);
        head.appendChild(link);
        console.log(321, "________load-gg-font_____", {
          fontName,
          link
        });
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _loadGoogleFont(headElement);
    if (headElement !== document.querySelector("head")) {
      _loadGoogleFont(document.querySelector("head"));
    }
  }, 50);
};
const createLinkTagWithGoogleFont = (fontName = "") => {
  const link = document.createElement("link");
  link.classList.add("wcb-google-fonts");
  link.setAttribute("data-font-name", fontName);
  link.setAttribute("href", getGoogleFontURL(fontName));
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  return link;
};
const isGoogleFontEnqueued = (fontName, head = document.querySelector("head")) => {
  return head.querySelector(`[data-font-name="${fontName}"]`);
};

/***/ }),

/***/ "./src/utils/getBorderRadiusStyles.ts":
/*!********************************************!*\
  !*** ./src/utils/getBorderRadiusStyles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getBorderRadiusStyles = ({
  className,
  radius,
  isWithIframe = false
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  let {
    value_Desktop: radiusDesktop,
    value_Tablet: radiusTablet,
    value_Mobile: radiusMobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(radius);
  const converttted = radiusValue => {
    let newradiusValue = radiusValue;
    if (typeof radiusValue === "string") {
      newradiusValue = {
        bottomLeft: radiusValue,
        bottomRight: radiusValue,
        topLeft: radiusValue,
        topRight: radiusValue
      };
    } else {
      newradiusValue = {
        bottomLeft: radiusValue?.bottomLeft,
        bottomRight: radiusValue?.bottomRight,
        topLeft: radiusValue?.topLeft,
        topRight: radiusValue?.topRight
      };
    }
    return newradiusValue;
  };
  radiusDesktop = converttted(radiusDesktop);
  radiusTablet = converttted(radiusTablet);
  radiusMobile = converttted(radiusMobile);
  const {
    mobile_v: mobile_v_topLeft,
    tablet_v: tablet_v_topLeft,
    desktop_v: desktop_v_topLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topLeft,
    tablet_v: radiusTablet?.topLeft,
    desktop_v: radiusDesktop?.topLeft
  });
  const {
    mobile_v: mobile_v_topRight,
    tablet_v: tablet_v_topRight,
    desktop_v: desktop_v_topRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.topRight,
    tablet_v: radiusTablet?.topRight,
    desktop_v: radiusDesktop?.topRight
  });
  const {
    mobile_v: mobile_v_bottomRight,
    tablet_v: tablet_v_bottomRight,
    desktop_v: desktop_v_bottomRight
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomRight,
    tablet_v: radiusTablet?.bottomRight,
    desktop_v: radiusDesktop?.bottomRight
  });
  const {
    mobile_v: mobile_v_bottomLeft,
    tablet_v: tablet_v_bottomLeft,
    desktop_v: desktop_v_bottomLeft
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: radiusMobile?.bottomLeft,
    tablet_v: radiusTablet?.bottomLeft,
    desktop_v: radiusDesktop?.bottomLeft
  });

  // Check if className is for iframe
  const applyImportant = isWithIframe ? "!important" : "";
  return {
    [`${className}`]: {
      borderTopLeftRadius: `${mobile_v_topLeft} ${applyImportant}`,
      borderTopRightRadius: `${mobile_v_topRight} ${applyImportant}`,
      borderBottomRightRadius: `${mobile_v_bottomRight} ${applyImportant}`,
      borderBottomLeftRadius: `${mobile_v_bottomLeft} ${applyImportant}`,
      [`@media (min-width: ${media_tablet})`]: tablet_v_topLeft || tablet_v_topRight || tablet_v_bottomRight || tablet_v_bottomLeft ? {
        borderTopLeftRadius: `${tablet_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${tablet_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${tablet_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${tablet_v_bottomLeft} ${applyImportant}`
      } : null,
      [`@media (min-width: ${media_desktop})`]: desktop_v_topLeft || desktop_v_topRight || desktop_v_bottomRight || desktop_v_bottomLeft ? {
        borderTopLeftRadius: `${desktop_v_topLeft} ${applyImportant}`,
        borderTopRightRadius: `${desktop_v_topRight} ${applyImportant}`,
        borderBottomRightRadius: `${desktop_v_bottomRight} ${applyImportant}`,
        borderBottomLeftRadius: `${desktop_v_bottomLeft} ${applyImportant}`
      } : null
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderRadiusStyles);

/***/ }),

/***/ "./src/utils/getBorderStyles.ts":
/*!**************************************!*\
  !*** ./src/utils/getBorderStyles.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBorderRadiusStyles */ "./src/utils/getBorderRadiusStyles.ts");

const getBorderStyles = ({
  border,
  className,
  isWithRadius = false,
  isWithIframe = false
}) => {
  const {
    hoverColor,
    mainSettings,
    radius
  } = border;
  //

  // MAIN BORDER
  let CSSObject = {
    [`${className}`]: {}
  };
  if (mainSettings) {
    const as4Side = mainSettings;
    if ("top" in as4Side || "right" in as4Side || "bottom" in as4Side || "left" in as4Side) {
      const {
        bottom,
        left,
        right,
        top
      } = as4Side;
      CSSObject = {
        [`${className}`]: {
          ...(top ? {
            borderTop: `${top.width} ${top.style || "none"} ${top.color || ""}`
          } : {}),
          ...(left ? {
            borderLeft: `${left.width} ${left.style || "none"} ${left.color || ""}`
          } : {}),
          ...(right ? {
            borderRight: `${right.width} ${right.style || "none"} ${right.color || ""}`
          } : {}),
          ...(bottom ? {
            borderBottom: `${bottom.width} ${bottom.style || "none"} ${bottom.color || ""}`
          } : {}),
          "&:hover": {
            borderColor: `${hoverColor}`
          }
        }
      };
    } else {
      const {
        color,
        style,
        width
      } = mainSettings;
      CSSObject = {
        [`${className}`]: {
          border: `${width} ${style || "none"} ${color || ""}`,
          "&:hover": {
            borderColor: `${hoverColor || ""}`
          }
        }
      };
    }
  }

  // RAIDUS
  let radiusCSSObject = {
    [`${className}`]: {}
  };
  if (isWithRadius && radius) {
    radiusCSSObject = (0,_getBorderRadiusStyles__WEBPACK_IMPORTED_MODULE_0__["default"])({
      radius,
      className,
      isWithIframe
    });
  }

  //
  let a = {};
  let b = {};
  if (typeof CSSObject[className] === "object") {
    a = CSSObject[className] || {};
  }
  if (typeof radiusCSSObject[className] === "object") {
    b = radiusCSSObject[className] || {};
  }
  return {
    [`${className}`]: {
      ...a,
      ...b
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBorderStyles);

/***/ }),

/***/ "./src/utils/getBoxShadowStyles.ts":
/*!*****************************************!*\
  !*** ./src/utils/getBoxShadowStyles.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyBoxShadowControl/getBoxShadowStyles */ "./src/components/controls/MyBoxShadowControl/getBoxShadowStyles.ts");

const getBoxShadowStyles = ({
  boxShadow,
  className
}) => {
  const {
    Hover,
    Normal
  } = boxShadow;
  const {
    presetClass,
    blur,
    color,
    horizontal,
    position,
    spread,
    vertical
  } = Normal || {};
  const {
    presetClass: presetClass_h,
    blur: blur_h,
    color: color_h,
    horizontal: horizontal_h,
    position: position_h,
    spread: spread_h,
    vertical: vertical_h
  } = Hover || {};
  //
  let VALUE = "";
  let VALUE_H = "";
  //
  if (presetClass) {
    VALUE = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass, color);
  } else {
    VALUE = `${horizontal}px ${vertical}px ${blur}px ${spread}px ${color} ${position === "inset" ? position : ""}`;
  }
  //
  if (presetClass_h) {
    VALUE_H = (0,_components_controls_MyBoxShadowControl_getBoxShadowStyles__WEBPACK_IMPORTED_MODULE_0__.getShadowStyleValueFromTwPreset)(presetClass_h, color_h);
  } else {
    VALUE_H = `${horizontal_h}px ${vertical_h}px ${blur_h}px ${spread_h}px ${color_h} ${position_h === "inset" ? position_h : ""}`;
  }
  return {
    [`${className}`]: {
      boxShadow: VALUE,
      "&:hover": {
        boxShadow: VALUE_H
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBoxShadowStyles);

/***/ }),

/***/ "./src/utils/getPaddingMarginStyles.ts":
/*!*********************************************!*\
  !*** ./src/utils/getPaddingMarginStyles.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");




const getPaddingMarginStyles = ({
  className,
  padding,
  margin
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const {
    value_Desktop: margin_Desktop,
    value_Tablet: margin_Tablet,
    value_Mobile: margin_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(margin);
  //

  const {
    value_Desktop: padding_Desktop,
    value_Tablet: padding_Tablet,
    value_Mobile: padding_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(padding);
  //

  //
  const {
    mobile_v: padding_Mobile_top,
    tablet_v: padding_Tablet_top,
    desktop_v: padding_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.top,
    tablet_v: padding_Tablet?.top,
    desktop_v: padding_Desktop?.top
  });
  const {
    mobile_v: padding_Mobile_left,
    tablet_v: padding_Tablet_left,
    desktop_v: padding_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.left,
    tablet_v: padding_Tablet?.left,
    desktop_v: padding_Desktop?.left
  });
  const {
    mobile_v: padding_Mobile_right,
    tablet_v: padding_Tablet_right,
    desktop_v: padding_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.right,
    tablet_v: padding_Tablet?.right,
    desktop_v: padding_Desktop?.right
  });
  const {
    mobile_v: padding_Mobile_bottom,
    tablet_v: padding_Tablet_bottom,
    desktop_v: padding_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: padding_Mobile?.bottom,
    tablet_v: padding_Tablet?.bottom,
    desktop_v: padding_Desktop?.bottom
  });
  //
  const {
    mobile_v: margin_Mobile_top,
    tablet_v: margin_Tablet_top,
    desktop_v: margin_Desktop_top
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.top,
    tablet_v: margin_Tablet?.top,
    desktop_v: margin_Desktop?.top
  });
  const {
    mobile_v: margin_Mobile_left,
    tablet_v: margin_Tablet_left,
    desktop_v: margin_Desktop_left
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.left,
    tablet_v: margin_Tablet?.left,
    desktop_v: margin_Desktop?.left
  });
  const {
    mobile_v: margin_Mobile_right,
    tablet_v: margin_Tablet_right,
    desktop_v: margin_Desktop_right
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.right,
    tablet_v: margin_Tablet?.right,
    desktop_v: margin_Desktop?.right
  });
  const {
    mobile_v: margin_Mobile_bottom,
    tablet_v: margin_Tablet_bottom,
    desktop_v: margin_Desktop_bottom
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: margin_Mobile?.bottom,
    tablet_v: margin_Tablet?.bottom,
    desktop_v: margin_Desktop?.bottom
  });
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.css)`
		body ${className} {
			padding-top: ${padding_Mobile_top} !important;
			padding-right: ${padding_Mobile_right} !important;
			padding-bottom: ${padding_Mobile_bottom} !important;
			padding-left: ${padding_Mobile_left} !important;
			margin-top: ${margin_Mobile_top} !important;
			margin-right: ${margin_Mobile_right};
			margin-bottom: ${margin_Mobile_bottom} !important;
			margin-left: ${margin_Mobile_left};
			@media (min-width: ${media_tablet}) {
				padding-top: ${padding_Tablet_top} !important;
				padding-right: ${padding_Tablet_right} !important;
				padding-bottom: ${padding_Tablet_bottom} !important;
				padding-left: ${padding_Tablet_left} !important;
				margin-top: ${margin_Tablet_top} !important;
				margin-right: ${margin_Tablet_right};
				margin-bottom: ${margin_Tablet_bottom} !important;
				margin-left: ${margin_Tablet_left};
=======
	`},Ve=function(e,a){var t,l;const i=e?.Desktop,r=null!==(t=e?.Tablet)&&void 0!==t?t:i,n=null!==(l=e?.Mobile)&&void 0!==l?l:r;let s;return a&&(s="Desktop"===a?i:"Tablet"===a?r:n),{value_Desktop:null!=i?i:null,value_Tablet:null!=r?r:null,value_Mobile:null!=n?n:null,currentDeviceValue:s}},Ue=({className:e,radius:a,isWithIframe:t=!1})=>{const{media_desktop:l,media_tablet:i}=Fe;let{value_Desktop:r,value_Tablet:n,value_Mobile:s}=Ve(a);const o=e=>{let a=e;return a="string"==typeof e?{bottomLeft:e,bottomRight:e,topLeft:e,topRight:e}:{bottomLeft:e?.bottomLeft,bottomRight:e?.bottomRight,topLeft:e?.topLeft,topRight:e?.topRight},a};r=o(r),n=o(n),s=o(s);const{mobile_v:c,tablet_v:u,desktop_v:g}=ze({mobile_v:s?.topLeft,tablet_v:n?.topLeft,desktop_v:r?.topLeft}),{mobile_v:d,tablet_v:f,desktop_v:h}=ze({mobile_v:s?.topRight,tablet_v:n?.topRight,desktop_v:r?.topRight}),{mobile_v:b,tablet_v:p,desktop_v:m}=ze({mobile_v:s?.bottomRight,tablet_v:n?.bottomRight,desktop_v:r?.bottomRight}),{mobile_v:w,tablet_v:k,desktop_v:v}=ze({mobile_v:s?.bottomLeft,tablet_v:n?.bottomLeft,desktop_v:r?.bottomLeft}),y=t?"!important":"";return{[`${e}`]:{borderTopLeftRadius:`${c} ${y}`,borderTopRightRadius:`${d} ${y}`,borderBottomRightRadius:`${b} ${y}`,borderBottomLeftRadius:`${w} ${y}`,[`@media (min-width: ${i})`]:u||f||p||k?{borderTopLeftRadius:`${u} ${y}`,borderTopRightRadius:`${f} ${y}`,borderBottomRightRadius:`${p} ${y}`,borderBottomLeftRadius:`${k} ${y}`}:null,[`@media (min-width: ${l})`]:g||h||m||v?{borderTopLeftRadius:`${g} ${y}`,borderTopRightRadius:`${h} ${y}`,borderBottomRightRadius:`${m} ${y}`,borderBottomLeftRadius:`${v} ${y}`}:null}}},We=({border:e,className:a,isWithRadius:t=!1,isWithIframe:l=!1})=>{const{hoverColor:i,mainSettings:r,radius:n}=e;let s={[`${a}`]:{}};if(r){const e=r;if("top"in e||"right"in e||"bottom"in e||"left"in e){const{bottom:t,left:l,right:r,top:n}=e;s={[`${a}`]:{...n?{borderTop:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},...l?{borderLeft:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...r?{borderRight:`${r.width} ${r.style||"none"} ${r.color||""}`}:{},...t?{borderBottom:`${t.width} ${t.style||"none"} ${t.color||""}`}:{},"&:hover":{borderColor:`${i}`}}}}else{const{color:e,style:t,width:l}=r;s={[`${a}`]:{border:`${l} ${t||"none"} ${e||""}`,"&:hover":{borderColor:`${i||""}`}}}}}let o={[`${a}`]:{}};t&&n&&(o=Ue({radius:n,className:a,isWithIframe:l}));let c={},u={};return"object"==typeof s[a]&&(c=s[a]||{}),"object"==typeof o[a]&&(u=o[a]||{}),{[`${a}`]:{...c,...u}}},qe=(e,a="")=>{switch(e){case"shadow-sm":return`0 1px 2px 0 ${a||"rgb(0 0 0 / 0.05)"}`;case"shadow":return`0 1px 3px 0 ${a||"rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${a||"rgb(0 0 0 / 0.1)"}`;case"shadow-md":return`0 4px 6px -1px ${a||"rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${a||"rgb(0 0 0 / 0.1)"}`;case"shadow-lg":return`0 10px 15px -3px ${a||"rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${a||"rgb(0 0 0 / 0.1)"}`;case"shadow-xl":return`0 20px 25px -5px ${a||"rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${a||"rgb(0 0 0 / 0.1)"}`;case"shadow-2xl":return`0 25px 50px -12px ${a||"rgb(0 0 0 / 0.25)"}`;case"shadow-inner":return`inset 0 2px 4px 0 ${a||"rgb(0 0 0 / 0.05)"}`;default:return""}},Ke=({boxShadow:e,className:a})=>{const{Hover:t,Normal:l}=e,{presetClass:i,blur:r,color:n,horizontal:s,position:o,spread:c,vertical:u}=l||{},{presetClass:g,blur:d,color:f,horizontal:h,position:b,spread:p,vertical:m}=t||{};let w="",k="";return w=i?qe(i,n):`${s}px ${u}px ${r}px ${c}px ${n} ${"inset"===o?o:""}`,k=g?qe(g,f):`${h}px ${m}px ${d}px ${p}px ${f} ${"inset"===b?b:""}`,{[`${a}`]:{boxShadow:w,"&:hover":{boxShadow:k}}}},Ze=({className:e,padding:a,margin:t})=>{const{media_desktop:l,media_tablet:i}=Fe,{value_Desktop:r,value_Tablet:n,value_Mobile:s}=Ve(t),{value_Desktop:o,value_Tablet:c,value_Mobile:u}=Ve(a),{mobile_v:g,tablet_v:d,desktop_v:f}=ze({mobile_v:u?.top,tablet_v:c?.top,desktop_v:o?.top}),{mobile_v:h,tablet_v:b,desktop_v:p}=ze({mobile_v:u?.left,tablet_v:c?.left,desktop_v:o?.left}),{mobile_v:m,tablet_v:w,desktop_v:k}=ze({mobile_v:u?.right,tablet_v:c?.right,desktop_v:o?.right}),{mobile_v:v,tablet_v:y,desktop_v:_}=ze({mobile_v:u?.bottom,tablet_v:c?.bottom,desktop_v:o?.bottom}),{mobile_v:S,tablet_v:C,desktop_v:E}=ze({mobile_v:s?.top,tablet_v:n?.top,desktop_v:r?.top}),{mobile_v:x,tablet_v:I,desktop_v:R}=ze({mobile_v:s?.left,tablet_v:n?.left,desktop_v:r?.left}),{mobile_v:M,tablet_v:N,desktop_v:T}=ze({mobile_v:s?.right,tablet_v:n?.right,desktop_v:r?.right}),{mobile_v:O,tablet_v:A,desktop_v:D}=ze({mobile_v:s?.bottom,tablet_v:n?.bottom,desktop_v:r?.bottom});return $e`
		body ${e} {
			padding-top: ${g} !important;
			padding-right: ${m} !important;
			padding-bottom: ${v} !important;
			padding-left: ${h} !important;
			margin-top: ${S} !important;
			margin-right: ${M};
			margin-bottom: ${O} !important;
			margin-left: ${x};
			@media (min-width: ${i}) {
				padding-top: ${d} !important;
				padding-right: ${w} !important;
				padding-bottom: ${y} !important;
				padding-left: ${b} !important;
				margin-top: ${C} !important;
				margin-right: ${N};
				margin-bottom: ${A} !important;
				margin-left: ${I};
>>>>>>> refs/remotes/origin/fix/boostifyblock-issue-4
			}
			@media (min-width: ${l}) {
				padding-top: ${f} !important;
				padding-right: ${k} !important;
				padding-bottom: ${_} !important;
				padding-left: ${p} !important;
				margin-top: ${E} !important;
				margin-right: ${T};
				margin-bottom: ${D} !important;
				margin-left: ${R};
			}
		}
	`},Je=function({className:e,prefix:a,prefix_2:t,prefix_3:l,prefix_4:i,value:r,hasUnit:n=!0,unit:s}){const{media_desktop:o,media_tablet:c}=Fe;let{value_Desktop:u,value_Tablet:g,value_Mobile:d}=Ve(r);!n&&s&&("number"==typeof u&&(u+=s,g+=s,d+=s),"string"==typeof u&&(u=u?u+s:null,g=g?g+s:null,d=d?d+s:null));let f=t||"",h=l||"",b=i||"";const{mobile_v:p,tablet_v:m,desktop_v:w}=ze({mobile_v:d,tablet_v:g,desktop_v:u});return{[e]:{[a]:null!=p?p:null,[f]:t&&null!=p?p:null,[h]:l&&null!=p?p:null,[b]:i&&null!=p?p:null,[`@media (min-width: ${c})`]:m?{[a]:m,[f]:t?m:null,[h]:l?m:null,[b]:i?m:null}:void 0,[`@media (min-width: ${o})`]:w?{[a]:w,[f]:t?w:null,[h]:l?w:null,[b]:i?w:null}:void 0}}};t(8156),window.wp.api;const Ye=e=>{setTimeout((()=>{const a=a=>{if(a&&(e=>e&&!e?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i))(e)){if(Xe(e,a))return;const t=Qe(e);a.appendChild(t),console.log(321,"________load-gg-font_____",{fontName:e,link:t})}},t=(()=>{let e=document.querySelector("head");return!!document.querySelector('iframe[name="editor-canvas"]')&&(e=document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector("head")),e})();a(t),t!==document.querySelector("head")&&a(document.querySelector("head"))}),50)},Qe=(e="")=>{const a=document.createElement("link");return a.classList.add("wcb-google-fonts"),a.setAttribute("data-font-name",e),a.setAttribute("href",(e=>`https://fonts.googleapis.com/css?family=${e.replace(/ /g,"+")}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`)(e)),a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a},Xe=(e,a=document.querySelector("head"))=>a.querySelector(`[data-font-name="${e}"]`),ea=({typography:e,className:a})=>{if(!e||!a)return{};const{appearance:t,fontFamily:l,fontSizes:i,letterSpacing:r,lineHeight:n,textDecoration:s,textTransform:o}=e;l&&Ye(l);const{media_desktop:c,media_tablet:u}=Fe,g=i?.Desktop,d=i?.Tablet||g,f=i?.Mobile||d,h=n?.Desktop,b=n?.Tablet||h,p=n?.Mobile||b,m=r?.Desktop,w=r?.Tablet||m,k=r?.Mobile||w,{mobile_v:v,tablet_v:y,desktop_v:_}=ze({mobile_v:f,tablet_v:d,desktop_v:g}),{mobile_v:S,tablet_v:C,desktop_v:E}=ze({mobile_v:p,tablet_v:b,desktop_v:h}),{mobile_v:x,tablet_v:I,desktop_v:R}=ze({mobile_v:k,tablet_v:w,desktop_v:m});return{[`${a}`]:{fontFamily:l,fontWeight:t?.style?.fontWeight,fontStyle:t?.style?.fontStyle,textDecoration:s,textTransform:o,fontSize:v,lineHeight:S,letterSpacing:x,[`@media (min-width: ${u})`]:y||C||I?{fontSize:y,lineHeight:C,letterSpacing:I}:void 0,[`@media (min-width: ${c})`]:_||E||R?{fontSize:_,lineHeight:E,letterSpacing:R}:void 0}}},aa=i().memo((e=>{const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_settings:r,style_caption:n,style_image:s,style_overlay:o,style_dimension:c}=e,{media_desktop:u,media_tablet:g}=Fe,d=`.${a}[data-uniqueid=${a}]`,f=`${d}.wp-block-wcb-image`,h=`${d} img`,b=`${d} figcaption.wp-element-caption`,p=`${d} .wcb-image__overlay-bg`;return a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Be,{styles:[Ze({className:d,padding:s.padding,margin:s.margin}),Ze({className:`${d} .wcb-image__overlay-wrap`,padding:s.padding})]}),(0,l.createElement)(Be,{styles:[Je({className:h,value:r.width,prefix:"width",hasUnit:!1,unit:"px"}),Je({className:h,value:r.height,prefix:"height",hasUnit:!1,unit:"px"}),Je({className:h,value:r.objectFit,prefix:"objectFit"}),We({className:h,border:s.border,isWithRadius:!0}),Ue({className:`${p}`,radius:s.border.radius}),Ke({className:h,boxShadow:s.boxShadow}),Ze({className:h,margin:c?.margin,padding:c?.padding})]}),"overlay"===r.layout?(0,l.createElement)(Be,{styles:[{[p]:{justifyContent:r.contentAlignment,backgroundColor:o.backgroundColor,":hover":{backgroundColor:o.backgroundColorHover}}}]}):null,"zoomin"===r.hoverImage?(0,l.createElement)(Be,{styles:[{[h]:{transition:"transform 0.3s ease-in-out"},[`${d}:hover img`]:{transform:"scale(1.05)"}}]}):"slide"===r.hoverImage?(0,l.createElement)(Be,{styles:[{[h]:{transition:"transform 0.3s cubic-bezier(0.4,0,0.2,1)"},[`${d}:hover img`]:{transform:"translateX(-20px)"}}]}):"grayscale"===r.hoverImage?(0,l.createElement)(Be,{styles:[{[h]:{transition:"filter 0.3s ease-in-out"},[`${d}:hover img`]:{filter:"grayscale(100%)"}}]}):"blur"===r.hoverImage?(0,l.createElement)(Be,{styles:[{[h]:{transition:"filter 0.3s ease-in-out"},[`${d}:hover img`]:{filter:"blur(2px)"}}]}):null,"overlay"!==r.layout?(0,l.createElement)(Be,{styles:[Je({className:b,value:r.captionAlignment,prefix:"textAlign"}),ea({className:b,typography:n.typography}),Ze({className:b,margin:n.margin}),{[b]:{color:n.textColor}}]}):null,(0,l.createElement)(Be,{styles:Ge({advance_responsiveCondition:t,advance_zIndex:i,className:d,defaultDisplay:"flex"})}),(0,l.createElement)(Be,{styles:[{[`${f}.alignright`]:{marginLeft:"auto",marginRight:0},[`${f}.alignleft`]:{marginLeft:0,marginRight:"auto"},[`${f}.aligncenter`]:{marginLeft:"auto",marginRight:"auto",textAlign:"center"}}]})):null})),ta=()=>{const{deviceType:e}=(0,d.useSelect)((e=>{const{__experimentalGetPreviewDeviceType:a}=e("core/edit-post")||!1;return a?{deviceType:a()}:{deviceType:null}}),[]);return e},la=(0,l.memo)((({children:e,uniqueKey:a="uniqueid"})=>{ta(),a.replace(/[0-9]/g,"").replace(/ /g,"").toLocaleLowerCase();const{myCache:t,ref:i}=((e="wcb-custom-cache-key")=>{const a=(0,l.useRef)(null);return{myCache:ke({key:e,container:a.current||void 0}),ref:a}})("wcb-key-cache"),{cache:r,useRefReact:n}=function(e="wcb-custom-cache-key"){const[a,t]=(0,l.useState)(null),i=(0,l.useRef)(null);return(0,l.useEffect)((()=>{let l=null,r=0;const n=a=>{const l=a?.contentDocument?.head;if(!l)return;const r=ke({key:e,container:l||i.current||void 0});t(r)},s=()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e?"complete"===e.contentDocument?.readyState?n(e):e.addEventListener("load",(()=>n(e)),{once:!0}):r<20&&(r++,setTimeout(s,150))};return s(),l=new MutationObserver((()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e&&e!==a?.container?.ownerDocument?.defaultView?.frameElement&&(r=0,s())})),l.observe(document.body,{childList:!0,subtree:!0}),()=>l?.disconnect()}),[]),{cache:a,useRefReact:i}}("wcb-key-cache");return r?(0,l.createElement)(De,{value:r},e):(0,l.createElement)(l.Fragment,null,e)})),ia=window.wp.compose,ra=window.wp.url,na=(0,h.createElement)(b.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,h.createElement)(b.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 5.5h12a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5ZM4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm4 10h2v-1.5H8V16Zm5 0h-2v-1.5h2V16Zm1 0h2v-1.5h-2V16Z"})),sa=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M16.5 7.8v7H18v-7c0-1-.8-1.8-1.8-1.8h-7v1.5h7c.2 0 .3.1.3.3zm-8.7 8.7c-.1 0-.2-.1-.2-.2V2H6v4H2v1.5h4v8.8c0 1 .8 1.8 1.8 1.8h8.8v4H18v-4h4v-1.5H7.8z"})),oa=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M18.5 15v3.5H13V6.7l4.5 4.1 1-1.1-6.2-5.8-5.8 5.8 1 1.1 4-4v11.7h-6V15H4v5h16v-5z"})),ca=window.wp.coreData,ua="none",ga="media",da="attachment",fa="custom",ha=["image"],ba=[{name:"General",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 fill-none"},(0,l.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,w.__)("General","boostify-blocks")))},{name:"Styles",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 6H16.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 18H15.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 13.95L16.47 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 10H14.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M8.44 7H2.53",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),(0,l.createElement)("div",null,(0,w.__)("Styles","boostify-blocks")))},{name:"Advances",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,w.__)("Advances","boostify-blocks")))}],pa=(0,l.memo)((({renderTabPanels:e,tabs:a=ba,uniqueId:t="",tabDefaultActive:i="General",onChangeActive:r})=>{(0,l.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector(".components-panel__body.is-opened");e&&e.scrollIntoView({behavior:"smooth"})}),500)}),[]);const n=()=>{const e=document.querySelector(".components-panel__body.block-editor-block-inspector__advanced"),a=document.querySelector(".HOCInspectorControls__ative-tab"),t=!!a?.id.includes("-Advances");e&&(e.style.display=t?"block":"none")};return(0,l.createElement)(f.InspectorControls,null,(0,l.createElement)(g.TabPanel,{className:`wcb-inspectorControls__panel ${t}`,activeClass:"HOCInspectorControls__ative-tab active-tab",tabs:a,onSelect:e=>{r&&r(e),setTimeout((()=>{n()}),100)},initialTabName:i},(a=>(0,l.createElement)("div",{key:a.name,className:a.name},e(a)))),(t&&setTimeout((()=>{n()}),100),null))})),ma={Advances:{panelIsOpen:""},General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"},tabIsOpen:"General"},wa={},ka="boostify-blocks/panels",va=(0,d.createReduxStore)(ka,{reducer(e=wa,a){if("SET_BLOCK_PANEL_INFO"===a.type){const t=e[a.blockId]||ma;return{...e,[a.blockId]:{...t,...a.block}}}return e},actions:{setBlockPanelInfo:(e,a)=>({type:"SET_BLOCK_PANEL_INFO",blockId:e,block:a})},selectors:{getBlockPanelInfo:e=>e},controls:{},resolvers:{}}),ya=window;ya.__boostifyPanelsStoreRegistered||(ya.__boostifyPanelsStoreRegistered=!0,(0,d.register)(va));const _a={isHiddenOnDesktop:!1,isHiddenOnTablet:!1,isHiddenOnMobile:!1},Sa=({className:e="space-y-4",responsiveConditionControl:a=_a,setAttrs__responsiveCondition:t})=>{const{isHiddenOnDesktop:i,isHiddenOnMobile:r,isHiddenOnTablet:n}=a;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.ToggleControl,{label:(0,w.__)("Hide on Desktop","boostify-blocks"),checked:i,onChange:e=>{t({...a,isHiddenOnDesktop:e})},className:"mb-0"}),(0,l.createElement)(g.ToggleControl,{label:(0,w.__)("Hide on Tablet","boostify-blocks"),checked:n,onChange:e=>{t({...a,isHiddenOnTablet:e})}}),(0,l.createElement)(g.ToggleControl,{label:(0,w.__)("Hide on Mobile","boostify-blocks"),checked:r,onChange:e=>{t({...a,isHiddenOnMobile:e})}}))};function Ca(e,a,...t){if(e in a){let l=a[e];return"function"==typeof l?l(...t):l}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,Ca),l}function Ea(...e){return e.filter(Boolean).join(" ")}var xa=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(xa||{}),Ia=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Ia||{});function Ra({ourProps:e,theirProps:a,slot:t,defaultTag:l,features:i,visible:r=!0,name:n}){let s=Na(a,e);if(r)return Ma(s,t,l,n);let o=null!=i?i:0;if(2&o){let{static:e=!1,...a}=s;if(e)return Ma(a,t,l,n)}if(1&o){let{unmount:e=!0,...a}=s;return Ca(e?0:1,{0:()=>null,1:()=>Ma({...a,hidden:!0,style:{display:"none"}},t,l,n)})}return Ma(s,t,l,n)}function Ma(e,a={},t,i){var r;let{as:n=t,children:s,refName:o="ref",...c}=Aa(e,["unmount","static"]),u=void 0!==e.ref?{[o]:e.ref}:{},g="function"==typeof s?s(a):s;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(a));let d={};if(a){let e=!1,t=[];for(let[l,i]of Object.entries(a))"boolean"==typeof i&&(e=!0),!0===i&&t.push(l);e&&(d["data-headlessui-state"]=t.join(" "))}if(n===l.Fragment&&Object.keys(Oa(c)).length>0){if(!(0,l.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${i} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=Ea(null==(r=g.props)?void 0:r.className,c.className),a=e?{className:e}:{};return(0,l.cloneElement)(g,Object.assign({},Na(g.props,Oa(Aa(c,["ref"]))),d,u,function(...e){return{ref:e.every((e=>null==e))?void 0:a=>{for(let t of e)null!=t&&("function"==typeof t?t(a):t.current=a)}}}(g.ref,u.ref),a))}return(0,l.createElement)(n,Object.assign({},Aa(c,["ref"]),n!==l.Fragment&&u,n!==l.Fragment&&d),g)}function Na(...e){if(0===e.length)return{};if(1===e.length)return e[0];let a={},t={};for(let l of e)for(let e in l)e.startsWith("on")&&"function"==typeof l[e]?(null!=t[e]||(t[e]=[]),t[e].push(l[e])):a[e]=l[e];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(t).map((e=>[e,void 0]))));for(let e in t)Object.assign(a,{[e](a,...l){let i=t[e];for(let e of i){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;e(a,...l)}}});return a}function Ta(e){var a;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(a=e.displayName)?a:e.name})}function Oa(e){let a=Object.assign({},e);for(let e in a)void 0===a[e]&&delete a[e];return a}function Aa(e,a=[]){let t=Object.assign({},e);for(let e of a)e in t&&delete t[e];return t}function Da(){let e=[],a={addEventListener:(e,t,l,i)=>(e.addEventListener(t,l,i),a.add((()=>e.removeEventListener(t,l,i)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return a.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>a.requestAnimationFrame((()=>a.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return a.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{t.current&&e[0]()})),a.add((()=>{t.current=!1}))},style(e,a,t){let l=e.style.getPropertyValue(a);return Object.assign(e.style,{[a]:t}),this.add((()=>{Object.assign(e.style,{[a]:l})}))},group(e){let a=Da();return e(a),this.add((()=>a.dispose()))},add:a=>(e.push(a),()=>{let t=e.indexOf(a);if(t>=0)for(let a of e.splice(t,1))a()}),dispose(){for(let a of e.splice(0))a()}};return a}function La(){let[e]=(0,l.useState)(Da);return(0,l.useEffect)((()=>()=>e.dispose()),[e]),e}var Pa=Object.defineProperty,Ba=(e,a,t)=>(((e,a,t)=>{a in e?Pa(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t})(e,"symbol"!=typeof a?a+"":a,t),t);let $a=new class{constructor(){Ba(this,"current",this.detect()),Ba(this,"handoffState","pending"),Ba(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},Fa=(e,a)=>{$a.isServer?(0,l.useEffect)(e,a):(0,l.useLayoutEffect)(e,a)};function Ha(e){let a=(0,l.useRef)(e);return Fa((()=>{a.current=e}),[e]),a}let za=function(e){let a=Ha(e);return l.useCallback(((...e)=>a.current(...e)),[a])},ja=Symbol();function Ga(e,a=!0){return Object.assign(e,{[ja]:a})}function Va(...e){let a=(0,l.useRef)(e);(0,l.useEffect)((()=>{a.current=e}),[e]);let t=za((e=>{for(let t of a.current)null!=t&&("function"==typeof t?t(e):t.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[ja])))?void 0:t}function Ua(){let[e,a]=(0,l.useState)($a.isHandoffComplete);return e&&!1===$a.isHandoffComplete&&a(!1),(0,l.useEffect)((()=>{!0!==e&&a(!0)}),[e]),(0,l.useEffect)((()=>$a.handoff()),[]),e}var Wa;let qa=null!=(Wa=l.useId)?Wa:function(){let e=Ua(),[a,t]=l.useState(e?()=>$a.nextId():null);return Fa((()=>{null===a&&t($a.nextId())}),[a]),null!=a?""+a:void 0};var Ka=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ka||{}),Za=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Za||{});function Ja(e){let a=e.parentElement,t=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(t=a),a=a.parentElement;let l=""===(null==a?void 0:a.getAttribute("disabled"));return(!l||!function(e){if(!e)return!1;let a=e.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(t))&&l}function Ya(e){return $a.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Qa=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var Xa,et=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(et||{}),at=((Xa=at||{})[Xa.Error=0]="Error",Xa[Xa.Overflow=1]="Overflow",Xa[Xa.Success=2]="Success",Xa[Xa.Underflow=3]="Underflow",Xa),tt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(tt||{});function lt(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Qa)).sort(((e,a)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER))))}var it=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(it||{});function rt(e,a=0){var t;return e!==(null==(t=Ya(e))?void 0:t.body)&&Ca(a,{0:()=>e.matches(Qa),1(){let a=e;for(;null!==a;){if(a.matches(Qa))return!0;a=a.parentElement}return!1}})}function nt(e){let a=Ya(e);Da().nextFrame((()=>{a&&!rt(a.activeElement,0)&&function(e){null==e||e.focus({preventScroll:!0})}(e)}))}let st=["textarea","input"].join(",");function ot(e,a=e=>e){return e.slice().sort(((e,t)=>{let l=a(e),i=a(t);if(null===l||null===i)return 0;let r=l.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function ct(e,a){return ut(lt(),a,{relativeTo:e})}function ut(e,a,{sorted:t=!0,relativeTo:l=null,skipElements:i=[]}={}){let r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?ot(e):e:lt(e);i.length>0&&n.length>1&&(n=n.filter((e=>!i.includes(e)))),l=null!=l?l:r.activeElement;let s,o=(()=>{if(5&a)return 1;if(10&a)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&a)return 0;if(2&a)return Math.max(0,n.indexOf(l))-1;if(4&a)return Math.max(0,n.indexOf(l))+1;if(8&a)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&a?{preventScroll:!0}:{},g=0,d=n.length;do{if(g>=d||g+d<=0)return 0;let e=c+g;if(16&a)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}s=n[e],null==s||s.focus(u),g+=o}while(s!==r.activeElement);return 6&a&&function(e){var a,t;return null!=(t=null==(a=null==e?void 0:e.matches)?void 0:a.call(e,st))&&t}(s)&&s.select(),s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),2}function gt(e,a,t){let i=Ha(a);(0,l.useEffect)((()=>{function a(e){i.current(e)}return document.addEventListener(e,a,t),()=>document.removeEventListener(e,a,t)}),[e,t])}function dt({container:e,accept:a,walk:t,enabled:i=!0}){let r=(0,l.useRef)(a),n=(0,l.useRef)(t);(0,l.useEffect)((()=>{r.current=a,n.current=t}),[a,t]),Fa((()=>{if(!e||!i)return;let a=Ya(e);if(!a)return;let t=r.current,l=n.current,s=Object.assign((e=>t(e)),{acceptNode:t}),o=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);for(;o.nextNode();)l(o.currentNode)}),[e,i,r,n])}let ft=(0,l.createContext)(null);ft.displayName="OpenClosedContext";var ht=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(ht||{});function bt(){return(0,l.useContext)(ft)}function pt({value:e,children:a}){return l.createElement(ft.Provider,{value:e},a)}function mt(e){var a;if(e.type)return e.type;let t=null!=(a=e.as)?a:"button";return"string"==typeof t&&"button"===t.toLowerCase()?"button":void 0}function wt(e,a){let[t,i]=(0,l.useState)((()=>mt(e)));return Fa((()=>{i(mt(e))}),[e.type,e.as]),Fa((()=>{t||a.current&&a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&i("button")}),[t,a]),t}function kt(e){return[e.screenX,e.screenY]}function vt(){let e=(0,l.useRef)([-1,-1]);return{wasMoved(a){let t=kt(a);return(e.current[0]!==t[0]||e.current[1]!==t[1])&&(e.current=t,!0)},update(a){e.current=kt(a)}}}var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),_t=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(_t||{}),St=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(St||{});function Ct(e,a=e=>e){let t=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,l=ot(a(e.items.slice()),(e=>e.dataRef.current.domRef.current)),i=t?l.indexOf(t):null;return-1===i&&(i=null),{items:l,activeItemIndex:i}}let Et={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,a)=>{var t;let l=Ct(e),i=function(e,a){let t=a.resolveItems();if(t.length<=0)return null;let l=a.resolveActiveIndex(),i=null!=l?l:-1,r=(()=>{switch(e.focus){case 0:return t.findIndex((e=>!a.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((e,t,l)=>!(-1!==i&&l.length-t-1>=i||a.resolveDisabled(e))));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,t)=>!(t<=i||a.resolveDisabled(e))));case 3:{let e=t.slice().reverse().findIndex((e=>!a.resolveDisabled(e)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((t=>a.resolveId(t)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===r?l:r}(a,{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...l,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(t=a.trigger)?t:1}},3:(e,a)=>{let t=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find((e=>{var a;return(null==(a=e.dataRef.current.textValue)?void 0:a.startsWith(l))&&!e.dataRef.current.disabled})),r=i?e.items.indexOf(i):-1;return-1===r||r===e.activeItemIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeItemIndex:r,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,a)=>{let t=Ct(e,(e=>[...e,{id:a.id,dataRef:a.dataRef}]));return{...e,...t}},6:(e,a)=>{let t=Ct(e,(e=>{let t=e.findIndex((e=>e.id===a.id));return-1!==t&&e.splice(t,1),e}));return{...e,...t,activationTrigger:1}}},xt=(0,l.createContext)(null);function It(e){let a=(0,l.useContext)(xt);if(null===a){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,It),a}return a}function Rt(e,a){return Ca(a.type,Et,e,a)}xt.displayName="MenuContext";let Mt=l.Fragment,Nt=xa.RenderStrategy|xa.Static,Tt=l.Fragment,Ot=Ta((function(e,a){let t=(0,l.useReducer)(Rt,{menuState:1,buttonRef:(0,l.createRef)(),itemsRef:(0,l.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:r,buttonRef:n},s]=t,o=Va(a);!function(e,a,t=!0){let i=(0,l.useRef)(!1);function r(t,l){if(!i.current||t.defaultPrevented)return;let r=function e(a){return"function"==typeof a?e(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e),n=l(t);if(null!==n&&n.getRootNode().contains(n)){for(let e of r){if(null===e)continue;let a=e instanceof HTMLElement?e:e.current;if(null!=a&&a.contains(n)||t.composed&&t.composedPath().includes(a))return}return!rt(n,it.Loose)&&-1!==n.tabIndex&&t.preventDefault(),a(t,n)}}(0,l.useEffect)((()=>{requestAnimationFrame((()=>{i.current=t}))}),[t]);let n=(0,l.useRef)(null);gt("mousedown",(e=>{var a,t;i.current&&(n.current=(null==(t=null==(a=e.composedPath)?void 0:a.call(e))?void 0:t[0])||e.target)}),!0),gt("click",(e=>{n.current&&(r(e,(()=>n.current)),n.current=null)}),!0),gt("blur",(e=>r(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([n,r],((e,a)=>{var t;s({type:1}),rt(a,it.Loose)||(e.preventDefault(),null==(t=n.current)||t.focus())}),0===i);let c=za((()=>{s({type:1})})),u=(0,l.useMemo)((()=>({open:0===i,close:c})),[i,c]),g=e,d={ref:o};return l.createElement(xt.Provider,{value:t},l.createElement(pt,{value:Ca(i,{0:ht.Open,1:ht.Closed})},Ra({ourProps:d,theirProps:g,slot:u,defaultTag:Mt,name:"Menu"})))})),At=Ta((function(e,a){var t;let i=qa(),{id:r=`headlessui-menu-button-${i}`,...n}=e,[s,o]=It("Menu.Button"),c=Va(s.buttonRef,a),u=La(),g=za((e=>{switch(e.key){case Ka.Space:case Ka.Enter:case Ka.ArrowDown:e.preventDefault(),e.stopPropagation(),o({type:0}),u.nextFrame((()=>o({type:2,focus:Za.First})));break;case Ka.ArrowUp:e.preventDefault(),e.stopPropagation(),o({type:0}),u.nextFrame((()=>o({type:2,focus:Za.Last})))}})),d=za((e=>{e.key===Ka.Space&&e.preventDefault()})),f=za((a=>{if(Ja(a.currentTarget))return a.preventDefault();e.disabled||(0===s.menuState?(o({type:1}),u.nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(a.preventDefault(),o({type:0})))})),h=(0,l.useMemo)((()=>({open:0===s.menuState})),[s]);return Ra({ourProps:{ref:c,id:r,type:wt(e,s.buttonRef),"aria-haspopup":"menu","aria-controls":null==(t=s.itemsRef.current)?void 0:t.id,"aria-expanded":e.disabled?void 0:0===s.menuState,onKeyDown:g,onKeyUp:d,onClick:f},theirProps:n,slot:h,defaultTag:"button",name:"Menu.Button"})})),Dt=Ta((function(e,a){var t,i;let r=qa(),{id:n=`headlessui-menu-items-${r}`,...s}=e,[o,c]=It("Menu.Items"),u=Va(o.itemsRef,a),g=function(...e){return(0,l.useMemo)((()=>Ya(...e)),[...e])}(o.itemsRef),d=La(),f=bt(),h=null!==f?(f&ht.Open)===ht.Open:0===o.menuState;(0,l.useEffect)((()=>{let e=o.itemsRef.current;e&&0===o.menuState&&e!==(null==g?void 0:g.activeElement)&&e.focus({preventScroll:!0})}),[o.menuState,o.itemsRef,g]),dt({container:o.itemsRef.current,enabled:0===o.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let b=za((e=>{var a,t;switch(d.dispose(),e.key){case Ka.Space:if(""!==o.searchQuery)return e.preventDefault(),e.stopPropagation(),c({type:3,value:e.key});case Ka.Enter:if(e.preventDefault(),e.stopPropagation(),c({type:1}),null!==o.activeItemIndex){let{dataRef:e}=o.items[o.activeItemIndex];null==(t=null==(a=e.current)?void 0:a.domRef.current)||t.click()}nt(o.buttonRef.current);break;case Ka.ArrowDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Za.Next});case Ka.ArrowUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Za.Previous});case Ka.Home:case Ka.PageUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Za.First});case Ka.End:case Ka.PageDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Za.Last});case Ka.Escape:e.preventDefault(),e.stopPropagation(),c({type:1}),Da().nextFrame((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case Ka.Tab:e.preventDefault(),e.stopPropagation(),c({type:1}),Da().nextFrame((()=>{ct(o.buttonRef.current,e.shiftKey?et.Previous:et.Next)}));break;default:1===e.key.length&&(c({type:3,value:e.key}),d.setTimeout((()=>c({type:4})),350))}})),p=za((e=>{e.key===Ka.Space&&e.preventDefault()})),m=(0,l.useMemo)((()=>({open:0===o.menuState})),[o]);return Ra({ourProps:{"aria-activedescendant":null===o.activeItemIndex||null==(t=o.items[o.activeItemIndex])?void 0:t.id,"aria-labelledby":null==(i=o.buttonRef.current)?void 0:i.id,id:n,onKeyDown:b,onKeyUp:p,role:"menu",tabIndex:0,ref:u},theirProps:s,slot:m,defaultTag:"div",features:Nt,visible:h,name:"Menu.Items"})})),Lt=Ta((function(e,a){let t=qa(),{id:i=`headlessui-menu-item-${t}`,disabled:r=!1,...n}=e,[s,o]=It("Menu.Item"),c=null!==s.activeItemIndex&&s.items[s.activeItemIndex].id===i,u=(0,l.useRef)(null),g=Va(a,u);Fa((()=>{if(0!==s.menuState||!c||0===s.activationTrigger)return;let e=Da();return e.requestAnimationFrame((()=>{var e,a;null==(a=null==(e=u.current)?void 0:e.scrollIntoView)||a.call(e,{block:"nearest"})})),e.dispose}),[u,c,s.menuState,s.activationTrigger,s.activeItemIndex]);let d=(0,l.useRef)({disabled:r,domRef:u});Fa((()=>{d.current.disabled=r}),[d,r]),Fa((()=>{var e,a;d.current.textValue=null==(a=null==(e=u.current)?void 0:e.textContent)?void 0:a.toLowerCase()}),[d,u]),Fa((()=>(o({type:5,id:i,dataRef:d}),()=>o({type:6,id:i}))),[d,i]);let f=za((()=>{o({type:1})})),h=za((e=>{if(r)return e.preventDefault();o({type:1}),nt(s.buttonRef.current)})),b=za((()=>{if(r)return o({type:2,focus:Za.Nothing});o({type:2,focus:Za.Specific,id:i})})),p=vt(),m=za((e=>p.update(e))),w=za((e=>{p.wasMoved(e)&&(r||c||o({type:2,focus:Za.Specific,id:i,trigger:0}))})),k=za((e=>{p.wasMoved(e)&&(r||c&&o({type:2,focus:Za.Nothing}))})),v=(0,l.useMemo)((()=>({active:c,disabled:r,close:f})),[c,r,f]);return Ra({ourProps:{id:i,ref:g,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:h,onFocus:b,onPointerEnter:m,onMouseEnter:m,onPointerMove:w,onMouseMove:w,onPointerLeave:k,onMouseLeave:k},theirProps:n,slot:v,defaultTag:Tt,name:"Menu.Item"})})),Pt=Object.assign(Ot,{Button:At,Items:Dt,Item:Lt});function Bt(){let e=(0,l.useRef)(!1);return Fa((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function $t(e,...a){e&&a.length>0&&e.classList.add(...a)}function Ft(e,...a){e&&a.length>0&&e.classList.remove(...a)}function Ht({container:e,direction:a,classes:t,onStart:l,onStop:i}){let r=Bt(),n=La(),s=Ha(a);Fa((()=>{let a=Da();n.add(a.dispose);let o=e.current;if(o&&"idle"!==s.current&&r.current)return a.dispose(),l.current(s.current),a.add(function(e,a,t,l){let i=t?"enter":"leave",r=Da(),n=void 0!==l?function(e){let a={called:!1};return(...t)=>{if(!a.called)return a.called=!0,e(...t)}}(l):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let s=Ca(i,{enter:()=>a.enter,leave:()=>a.leave}),o=Ca(i,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),c=Ca(i,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom});return Ft(e,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),$t(e,...s,...c),r.nextFrame((()=>{Ft(e,...c),$t(e,...o),function(e,a){let t=Da();if(!e)return t.dispose;let{transitionDuration:l,transitionDelay:i}=getComputedStyle(e),[r,n]=[l,i].map((e=>{let[a=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,a)=>a-e));return a})),s=r+n;if(0!==s){t.group((t=>{t.setTimeout((()=>{a(),t.dispose()}),s),t.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&t.dispose()}))}));let l=t.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(a(),l())}))}else a();t.add((()=>a())),t.dispose}(e,(()=>(Ft(e,...s),$t(e,...a.entered),n())))})),r.dispose}(o,t.current,"enter"===s.current,(()=>{a.dispose(),i.current(s.current)}))),a.dispose}),[a])}function zt(e=0){let[a,t]=(0,l.useState)(e),i=(0,l.useCallback)((e=>t((a=>a|e))),[a]),r=(0,l.useCallback)((e=>Boolean(a&e)),[a]),n=(0,l.useCallback)((e=>t((a=>a&~e))),[t]),s=(0,l.useCallback)((e=>t((a=>a^e))),[t]);return{flags:a,addFlag:i,hasFlag:r,removeFlag:n,toggleFlag:s}}function jt(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let Gt=(0,l.createContext)(null);Gt.displayName="TransitionContext";var Vt=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Vt||{});let Ut=(0,l.createContext)(null);function Wt(e){return"children"in e?Wt(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function qt(e,a){let t=Ha(e),i=(0,l.useRef)([]),r=Bt(),n=La(),s=za(((e,a=Ia.Hidden)=>{let l=i.current.findIndex((({el:a})=>a===e));-1!==l&&(Ca(a,{[Ia.Unmount](){i.current.splice(l,1)},[Ia.Hidden](){i.current[l].state="hidden"}}),n.microTask((()=>{var e;!Wt(i)&&r.current&&(null==(e=t.current)||e.call(t))})))})),o=za((e=>{let a=i.current.find((({el:a})=>a===e));return a?"visible"!==a.state&&(a.state="visible"):i.current.push({el:e,state:"visible"}),()=>s(e,Ia.Unmount)})),c=(0,l.useRef)([]),u=(0,l.useRef)(Promise.resolve()),g=(0,l.useRef)({enter:[],leave:[],idle:[]}),d=za(((e,t,l)=>{c.current.splice(0),a&&(a.chains.current[t]=a.chains.current[t].filter((([a])=>a!==e))),null==a||a.chains.current[t].push([e,new Promise((e=>{c.current.push(e)}))]),null==a||a.chains.current[t].push([e,new Promise((e=>{Promise.all(g.current[t].map((([e,a])=>a))).then((()=>e()))}))]),"enter"===t?u.current=u.current.then((()=>null==a?void 0:a.wait.current)).then((()=>l(t))):l(t)})),f=za(((e,a,t)=>{Promise.all(g.current[a].splice(0).map((([e,a])=>a))).then((()=>{var e;null==(e=c.current.shift())||e()})).then((()=>t(a)))}));return(0,l.useMemo)((()=>({children:i,register:o,unregister:s,onStart:d,onStop:f,wait:u,chains:g})),[o,s,i,d,f,g,u])}function Kt(){}Ut.displayName="NestingContext";let Zt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Jt(e){var a;let t={};for(let l of Zt)t[l]=null!=(a=e[l])?a:Kt;return t}let Yt=xa.RenderStrategy,Qt=Ta((function(e,a){let{show:t,appear:i=!1,unmount:r,...n}=e,s=(0,l.useRef)(null),o=Va(s,a);Ua();let c=bt();if(void 0===t&&null!==c&&(t=(c&ht.Open)===ht.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,g]=(0,l.useState)(t?"visible":"hidden"),d=qt((()=>{g("hidden")})),[f,h]=(0,l.useState)(!0),b=(0,l.useRef)([t]);Fa((()=>{!1!==f&&b.current[b.current.length-1]!==t&&(b.current.push(t),h(!1))}),[b,t]);let p=(0,l.useMemo)((()=>({show:t,appear:i,initial:f})),[t,i,f]);(0,l.useEffect)((()=>{if(t)g("visible");else if(Wt(d)){let e=s.current;if(!e)return;let a=e.getBoundingClientRect();0===a.x&&0===a.y&&0===a.width&&0===a.height&&g("hidden")}else g("hidden")}),[t,d]);let m={unmount:r};return l.createElement(Ut.Provider,{value:d},l.createElement(Gt.Provider,{value:p},Ra({ourProps:{...m,as:l.Fragment,children:l.createElement(Xt,{ref:o,...m,...n})},theirProps:{},defaultTag:l.Fragment,features:Yt,visible:"visible"===u,name:"Transition"})))})),Xt=Ta((function(e,a){let{beforeEnter:t,afterEnter:i,beforeLeave:r,afterLeave:n,enter:s,enterFrom:o,enterTo:c,entered:u,leave:g,leaveFrom:d,leaveTo:f,...h}=e,b=(0,l.useRef)(null),p=Va(b,a),m=h.unmount?Ia.Unmount:Ia.Hidden,{show:w,appear:k,initial:v}=function(){let e=(0,l.useContext)(Gt);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[y,_]=(0,l.useState)(w?"visible":"hidden"),S=function(){let e=(0,l.useContext)(Ut);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:C,unregister:E}=S,x=(0,l.useRef)(null);(0,l.useEffect)((()=>C(b)),[C,b]),(0,l.useEffect)((()=>{if(m===Ia.Hidden&&b.current)return w&&"visible"!==y?void _("visible"):Ca(y,{hidden:()=>E(b),visible:()=>C(b)})}),[y,b,C,E,w,m]);let I=Ha({enter:jt(s),enterFrom:jt(o),enterTo:jt(c),entered:jt(u),leave:jt(g),leaveFrom:jt(d),leaveTo:jt(f)}),R=function(e){let a=(0,l.useRef)(Jt(e));return(0,l.useEffect)((()=>{a.current=Jt(e)}),[e]),a}({beforeEnter:t,afterEnter:i,beforeLeave:r,afterLeave:n}),M=Ua();(0,l.useEffect)((()=>{if(M&&"visible"===y&&null===b.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[b,y,M]);let N=v&&!k,T=!M||N||x.current===w?"idle":w?"enter":"leave",O=zt(0),A=za((e=>Ca(e,{enter:()=>{O.addFlag(ht.Opening),R.current.beforeEnter()},leave:()=>{O.addFlag(ht.Closing),R.current.beforeLeave()},idle:()=>{}}))),D=za((e=>Ca(e,{enter:()=>{O.removeFlag(ht.Opening),R.current.afterEnter()},leave:()=>{O.removeFlag(ht.Closing),R.current.afterLeave()},idle:()=>{}}))),L=qt((()=>{_("hidden"),E(b)}),S);Ht({container:b,classes:I,direction:T,onStart:Ha((e=>{L.onStart(b,e,A)})),onStop:Ha((e=>{L.onStop(b,e,D),"leave"===e&&!Wt(L)&&(_("hidden"),E(b))}))}),(0,l.useEffect)((()=>{N&&(m===Ia.Hidden?x.current=null:x.current=w)}),[w,N,y]);let P=h,B={ref:p};return k&&w&&$a.isServer&&(P={...P,className:Ea(h.className,...I.current.enter,...I.current.enterFrom)}),l.createElement(Ut.Provider,{value:L},l.createElement(pt,{value:Ca(y,{visible:ht.Open,hidden:ht.Closed})|O.flags},Ra({ourProps:B,theirProps:P,defaultTag:"div",features:Yt,visible:"visible"===y,name:"Transition.Child"})))})),el=Ta((function(e,a){let t=null!==(0,l.useContext)(Gt),i=null!==bt();return l.createElement(l.Fragment,null,!t&&i?l.createElement(Qt,{ref:a,...e}):l.createElement(Xt,{ref:a,...e}))})),al=Object.assign(Qt,{Child:el,Root:Qt});var tl=t(8477),ll=t(7500),il=t(826),rl=t(2149);const nl={Desktop:"Desktop",Tablet:"Tablet",Mobile:"Mobile"},sl=({className:e="",devices:a=Object.values(nl)})=>{const t=ta()||"Desktop",{__experimentalSetPreviewDeviceType:i}=(0,d.dispatch)("core/edit-post"),r=(0,l.useCallback)((e=>{i(nl[e])}),[]),n=(e,a="h-4 w-4")=>{switch(e){case"Desktop":return(0,l.createElement)(tl,{className:a,"aria-hidden":"true"});case"Tablet":return(0,l.createElement)(ll,{className:a,"aria-hidden":"true"});case"Mobile":return(0,l.createElement)(il,{className:a,"aria-hidden":"true"});default:return null}};return(0,l.createElement)(Pt,{as:"div",className:`wcbMyResponsiveToggle relative inline-block text-left ${e}`},(0,l.createElement)(Pt.Button,{className:"wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",title:t},n(t),(0,l.createElement)(rl,{className:"w-2.5 h-2.5 ml-1","aria-hidden":"true"})),(0,l.createElement)(al,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},(0,l.createElement)(Pt.Items,{className:"wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"},(0,l.createElement)("div",{className:"p-1 space-y-0.5"},a.map(((e,a)=>(0,l.createElement)(Pt.Item,{key:a+e},(({active:a})=>{const i=a||e===t;return(0,l.createElement)("button",{className:(i?"bg-sky-50 text-sky-600":"text-slate-800")+" group flex w-full items-center justify-center rounded-md py-1.5",onClick:a=>{r(e)},title:e},n(e))}))))))))},ol=({children:e,className:a="mb-2",help:t,hasResponsive:i,devices:r})=>(0,l.createElement)("div",{className:`components-base-control__label font-medium uppercase text-[11px] ${a}`},(0,l.createElement)("div",{className:"wb-control-label flex items-center"},(0,l.createElement)("div",{className:"wb-base-control__label"},e),(0,l.createElement)("div",{className:"wb-base-control__responsive ml-1.5"},i&&(0,l.createElement)(sl,{devices:r}))),!!t&&(0,l.createElement)("div",{className:"wb-base-help text-xs text-slate-500"},(0,l.createElement)("p",{className:"components-base-control__help"},t))),cl={Desktop:void 0},ul=({className:e="space-y-3",zIndexControl:a=cl,setAttrs__zIndex:t})=>{const i=ta()||"Desktop",r=void 0!==a[i]?a[i]:void 0!==a.Tablet?a.Tablet:a.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.RangeControl,{help:(0,w.__)("Above setting will only take effect once you are on the live page, and not while you're editing.","boostify-blocks"),value:void 0,label:(0,l.createElement)(ol,{className:"",hasResponsive:!0},(0,w.__)("Z-Index","boostify-blocks")),allowReset:!0,max:1e3,min:-100,initialPosition:r,onChange:e=>{t({...a,[i]:e})}}))},gl=({label:e="My select",hasResponsive:a,labelClass:t="flex-1",devices:i,...r})=>(0,l.createElement)("div",{className:"wcb-MySelect w-full flex justify-between items-center"},(0,l.createElement)(ol,{className:t,hasResponsive:a,devices:i},e),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)(g.SelectControl,{hideLabelFromVision:!0,...r}))),dl=[{label:"None",value:""},{label:"Bounce",value:"bounce"},{label:"Flash",value:"flash"},{label:"Pulse",value:"pulse"},{label:"RubberBand",value:"rubberBand"},{label:"ShakeX",value:"shakeX"},{label:"ShakeY",value:"shakeY"},{label:"HeadShake",value:"headShake"},{label:"Swing",value:"swing"},{label:"Tada",value:"tada"},{label:"Wobble",value:"wobble"},{label:"Jello",value:"jello"},{label:"HeartBeat",value:"heartBeat"},{label:"BackInDown",value:"backInDown"},{label:"BackInLeft",value:"backInLeft"},{label:"BackInRight",value:"backInRight"},{label:"BackInUp",value:"backInUp"},{label:"BounceIn",value:"bounceIn"},{label:"BounceInDown",value:"bounceInDown"},{label:"BounceInLeft",value:"bounceInLeft"},{label:"BounceInRight",value:"bounceInRight"},{label:"BounceInUp",value:"bounceInUp"},{label:"FadeIn",value:"fadeIn"},{label:"FadeInDown",value:"fadeInDown"},{label:"FadeInDownBig",value:"fadeInDownBig"},{label:"FadeInLeft",value:"fadeInLeft"},{label:"FadeInLeftBig",value:"fadeInLeftBig"},{label:"FadeInRight",value:"fadeInRight"},{label:"FadeInRightBig",value:"fadeInRightBig"},{label:"FadeInUp",value:"fadeInUp"},{label:"FadeInUpBig",value:"fadeInUpBig"},{label:"FadeInTopLeft",value:"fadeInTopLeft"},{label:"FadeInTopRight",value:"fadeInTopRight"},{label:"FadeInBottomLeft",value:"fadeInBottomLeft"},{label:"FadeInBottomRight",value:"fadeInBottomRight"},{label:"Flip",value:"flip"},{label:"FlipInX",value:"flipInX"},{label:"FlipInY",value:"flipInY"},{label:"LightSpeedInRight",value:"lightSpeedInRight"},{label:"LightSpeedInLeft",value:"lightSpeedInLeft"},{label:"RotateIn",value:"rotateIn"},{label:"RotateInDownLeft",value:"rotateInDownLeft"},{label:"RotateInDownRight",value:"rotateInDownRight"},{label:"RotateInUpLeft",value:"rotateInUpLeft"},{label:"RotateInUpRight",value:"rotateInUpRight"},{label:"Hinge",value:"hinge"},{label:"JackInTheBox",value:"jackInTheBox"},{label:"RollIn",value:"rollIn"},{label:"ZoomIn",value:"zoomIn"},{label:"ZoomInDown",value:"zoomInDown"},{label:"ZoomInLeft",value:"zoomInLeft"},{label:"ZoomInRight",value:"zoomInRight"},{label:"ZoomInUp",value:"zoomInUp"},{label:"SlideInDown",value:"slideInDown"},{label:"SlideInLeft",value:"slideInLeft"},{label:"SlideInRight",value:"slideInRight"},{label:"SlideInUp",value:"slideInUp"}],fl=({onChange:e,data:a})=>(console.log(22,"-----MyMyMotionEffectData-----",{data:a}),(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(gl,{label:"Animation name",options:dl,hasResponsive:!1,onChange:t=>e({...a,entranceAnimation:t}),value:a.entranceAnimation}),(0,l.createElement)(gl,{label:"Animation duration",options:[{label:"Slow (2s)",value:"slow"},{label:"Slower (3s)",value:"slower"},{label:"Fast (800ms)",value:"fast"},{label:"Faster (500ms)",value:"faster"}],hasResponsive:!1,onChange:t=>e({...a,animationDuration:t}),value:a.animationDuration}),(0,l.createElement)(g.__experimentalNumberControl,{isShiftStepEnabled:!0,shiftStep:1e3,step:100,__unstableInputWidth:"60px",label:(0,w.__)("Animation delay (ms)"),labelPosition:"edge",min:0,value:a.animationDelay,onChange:t=>e({...a,animationDelay:Number(t||0)||0})}),(0,l.createElement)(gl,{label:"Animation repeat",options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"infinite",value:"infinite"}],hasResponsive:!1,onChange:t=>e({...a,repeat:t}),value:a.repeat}))),hl=({handleTogglePanel:e,tabAdvancesIsPanelOpen:a,advance_responsiveCondition:t,advance_zIndex:i,advance_motionEffect:r,setAttributes:n,children:s})=>(0,l.createElement)(l.Fragment,null,r?(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","MyMyMotionEffectControl"),initialOpen:"MyMyMotionEffectControl"===a,opened:"MyMyMotionEffectControl"===a||void 0,title:(0,w.__)("Motion Effect","boostify-blocks")},(0,l.createElement)(fl,{data:r,onChange:e=>n({advance_motionEffect:e})})):null,(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","Responsive Conditions"),initialOpen:"Responsive Conditions"===a,opened:"Responsive Conditions"===a||void 0,title:(0,w.__)("Responsive Conditions","boostify-blocks")},(0,l.createElement)(Sa,{responsiveConditionControl:t,setAttrs__responsiveCondition:e=>n({advance_responsiveCondition:e})})),(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","Z-Index"),initialOpen:"Z-Index"===a,opened:"Z-Index"===a||void 0,title:(0,w.__)("Z-Index","boostify-blocks")},(0,l.createElement)(ul,{zIndexControl:i,setAttrs__zIndex:e=>n({advance_zIndex:e})})),s||null);var bl;let pl=null!=(bl=l.startTransition)?bl:function(e){e()};var ml=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ml||{}),wl=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(wl||{});let kl={0:e=>({...e,disclosureState:Ca(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,a)=>e.buttonId===a.buttonId?e:{...e,buttonId:a.buttonId},3:(e,a)=>e.panelId===a.panelId?e:{...e,panelId:a.panelId}},vl=(0,l.createContext)(null);function yl(e){let a=(0,l.useContext)(vl);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,yl),a}return a}vl.displayName="DisclosureContext";let _l=(0,l.createContext)(null);function Sl(e){let a=(0,l.useContext)(_l);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Sl),a}return a}_l.displayName="DisclosureAPIContext";let Cl=(0,l.createContext)(null);function El(e,a){return Ca(a.type,kl,e,a)}Cl.displayName="DisclosurePanelContext";let xl=l.Fragment,Il=xa.RenderStrategy|xa.Static,Rl=Ta((function(e,a){let{defaultOpen:t=!1,...i}=e,r=(0,l.useRef)(null),n=Va(a,Ga((e=>{r.current=e}),void 0===e.as||e.as===l.Fragment)),s=(0,l.useRef)(null),o=(0,l.useRef)(null),c=(0,l.useReducer)(El,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:o,panelRef:s,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:g},d]=c,f=za((e=>{d({type:1});let a=Ya(r);if(!a||!g)return;let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:a.getElementById(g):a.getElementById(g);null==t||t.focus()})),h=(0,l.useMemo)((()=>({close:f})),[f]),b=(0,l.useMemo)((()=>({open:0===u,close:f})),[u,f]),p={ref:n};return l.createElement(vl.Provider,{value:c},l.createElement(_l.Provider,{value:h},l.createElement(pt,{value:Ca(u,{0:ht.Open,1:ht.Closed})},Ra({ourProps:p,theirProps:i,slot:b,defaultTag:xl,name:"Disclosure"}))))})),Ml=Ta((function(e,a){let t=qa(),{id:i=`headlessui-disclosure-button-${t}`,...r}=e,[n,s]=yl("Disclosure.Button"),o=(0,l.useContext)(Cl),c=null!==o&&o===n.panelId,u=(0,l.useRef)(null),g=Va(u,a,c?null:n.buttonRef);(0,l.useEffect)((()=>{if(!c)return s({type:2,buttonId:i}),()=>{s({type:2,buttonId:null})}}),[i,s,c]);let d=za((e=>{var a;if(c){if(1===n.disclosureState)return;switch(e.key){case Ka.Space:case Ka.Enter:e.preventDefault(),e.stopPropagation(),s({type:0}),null==(a=n.buttonRef.current)||a.focus()}}else switch(e.key){case Ka.Space:case Ka.Enter:e.preventDefault(),e.stopPropagation(),s({type:0})}})),f=za((e=>{e.key===Ka.Space&&e.preventDefault()})),h=za((a=>{var t;Ja(a.currentTarget)||e.disabled||(c?(s({type:0}),null==(t=n.buttonRef.current)||t.focus()):s({type:0}))})),b=(0,l.useMemo)((()=>({open:0===n.disclosureState})),[n]),p=wt(e,u);return Ra({ourProps:c?{ref:g,type:p,onKeyDown:d,onClick:h}:{ref:g,id:i,type:p,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:d,onKeyUp:f,onClick:h},theirProps:r,slot:b,defaultTag:"button",name:"Disclosure.Button"})})),Nl=Ta((function(e,a){let t=qa(),{id:i=`headlessui-disclosure-panel-${t}`,...r}=e,[n,s]=yl("Disclosure.Panel"),{close:o}=Sl("Disclosure.Panel"),c=Va(a,n.panelRef,(e=>{pl((()=>s({type:e?4:5})))}));(0,l.useEffect)((()=>(s({type:3,panelId:i}),()=>{s({type:3,panelId:null})})),[i,s]);let u=bt(),g=null!==u?(u&ht.Open)===ht.Open:0===n.disclosureState,d=(0,l.useMemo)((()=>({open:0===n.disclosureState,close:o})),[n,o]),f={ref:c,id:i};return l.createElement(Cl.Provider,{value:n.panelId},Ra({ourProps:f,theirProps:r,slot:d,defaultTag:"div",features:Il,visible:g,name:"Disclosure.Panel"}))})),Tl=Object.assign(Rl,{Button:Ml,Panel:Nl});var Ol=t(1070);const Al=({className:e="space-y-3.5",label:a="Customize",children:t,defaultOpen:i,as:r,hasResponsive:n=!1,isDisableButton:s=!1})=>(0,l.createElement)(Tl,{defaultOpen:i,as:r},(({open:i})=>(0,l.createElement)("div",{className:i?"ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4":""},(0,l.createElement)(Tl.Button,{className:"flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 "+(i?"rounded-b-none":""),disabled:s},(0,l.createElement)(ol,{hasResponsive:n,className:"MyDisclosure__labelControl"},(0,w.__)(a,"boostify-blocks")),i?(0,l.createElement)(Ol,{className:"w-5 h-5 text-purple-900"}):(0,l.createElement)("svg",{className:"w-4 h-4 text-purple-900",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M3 22H21",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}))),(0,l.createElement)(Tl.Panel,{className:"px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"},(0,l.createElement)("div",{className:e},t)))));let Dl=(0,l.createContext)(null);function Ll(){let e=(0,l.useContext)(Dl);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Ll),e}return e}function Pl(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=za((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),i=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(Dl.Provider,{value:i},e.children)}),[a])]}let Bl=Ta((function(e,a){let t=qa(),{id:l=`headlessui-label-${t}`,passive:i=!1,...r}=e,n=Ll(),s=Va(a);Fa((()=>n.register(l)),[l,n.register]);let o={ref:s,...n.props,id:l};return i&&("onClick"in o&&(delete o.htmlFor,delete o.onClick),"onClick"in r&&delete r.onClick),Ra({ourProps:o,theirProps:r,slot:n.slot||{},defaultTag:"label",name:n.name||"Label"})})),$l=Object.assign(Bl,{}),Fl=(0,l.createContext)(null);function Hl(){let e=(0,l.useContext)(Fl);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Hl),e}return e}function zl(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=za((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),i=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(Fl.Provider,{value:i},e.children)}),[a])]}let jl=Ta((function(e,a){let t=qa(),{id:l=`headlessui-description-${t}`,...i}=e,r=Hl(),n=Va(a);return Fa((()=>r.register(l)),[l,r.register]),Ra({ourProps:{ref:n,...r.props,id:l},theirProps:i,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})),Gl=Object.assign(jl,{});var Vl=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Vl||{});let Ul=Ta((function(e,a){let{features:t=1,...l}=e;return Ra({ourProps:{ref:a,"aria-hidden":!(2&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}},theirProps:l,slot:{},defaultTag:"div",name:"Hidden"})}));function Wl(e={},a=null,t=[]){for(let[l,i]of Object.entries(e))Kl(t,ql(a,l),i);return t}function ql(e,a){return e?e+"["+a+"]":a}function Kl(e,a,t){if(Array.isArray(t))for(let[l,i]of t.entries())Kl(e,ql(a,l.toString()),i);else t instanceof Date?e.push([a,t.toISOString()]):"boolean"==typeof t?e.push([a,t?"1":"0"]):"string"==typeof t?e.push([a,t]):"number"==typeof t?e.push([a,`${t}`]):null==t?e.push([a,""]):Wl(t,a,e)}var Zl=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(Zl||{});let Jl={0(e,a){let t=[...e.options,{id:a.id,element:a.element,propsRef:a.propsRef}];return{...e,options:ot(t,(e=>e.element.current))}},1(e,a){let t=e.options.slice(),l=e.options.findIndex((e=>e.id===a.id));return-1===l?e:(t.splice(l,1),{...e,options:t})}},Yl=(0,l.createContext)(null);function Ql(e){let a=(0,l.useContext)(Yl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Ql),a}return a}Yl.displayName="RadioGroupDataContext";let Xl=(0,l.createContext)(null);function ei(e){let a=(0,l.useContext)(Xl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ei),a}return a}function ai(e,a){return Ca(a.type,Jl,e,a)}Xl.displayName="RadioGroupActionsContext";var ti=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(ti||{});let li=Ta((function(e,a){let t=qa(),{id:i=`headlessui-radiogroup-${t}`,value:r,defaultValue:n,name:s,onChange:o,by:c=(e,a)=>e===a,disabled:u=!1,...g}=e,d=za("string"==typeof c?(e,a)=>{let t=c;return(null==e?void 0:e[t])===(null==a?void 0:a[t])}:c),[f,h]=(0,l.useReducer)(ai,{options:[]}),b=f.options,[p,m]=Pl(),[w,k]=zl(),v=(0,l.useRef)(null),y=Va(v,a),[_,S]=function(e,a,t){let[i,r]=(0,l.useState)(t),n=void 0!==e,s=(0,l.useRef)(n),o=(0,l.useRef)(!1),c=(0,l.useRef)(!1);return!n||s.current||o.current?!n&&s.current&&!c.current&&(c.current=!0,s.current=n,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(o.current=!0,s.current=n,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[n?e:i,za((e=>(n||r(e),null==a?void 0:a(e))))]}(r,o,n),C=(0,l.useMemo)((()=>b.find((e=>!e.propsRef.current.disabled))),[b]),E=(0,l.useMemo)((()=>b.some((e=>d(e.propsRef.current.value,_)))),[b,_]),x=za((e=>{var a;if(u||d(e,_))return!1;let t=null==(a=b.find((a=>d(a.propsRef.current.value,e))))?void 0:a.propsRef.current;return!(null!=t&&t.disabled||(null==S||S(e),0))}));dt({container:v.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let I=za((e=>{let a=v.current;if(!a)return;let t=Ya(a),l=b.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case Ka.Enter:!function(e){var a;let t=null!=(a=null==e?void 0:e.form)?a:e.closest("form");if(t)for(let e of t.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type)return void e.click()}(e.currentTarget);break;case Ka.ArrowLeft:case Ka.ArrowUp:if(e.preventDefault(),e.stopPropagation(),ut(l,et.Previous|et.WrapAround)===at.Success){let e=b.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&x(e.propsRef.current.value)}break;case Ka.ArrowRight:case Ka.ArrowDown:if(e.preventDefault(),e.stopPropagation(),ut(l,et.Next|et.WrapAround)===at.Success){let e=b.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&x(e.propsRef.current.value)}break;case Ka.Space:{e.preventDefault(),e.stopPropagation();let a=b.find((e=>e.element.current===(null==t?void 0:t.activeElement)));a&&x(a.propsRef.current.value)}}})),R=za((e=>(h({type:0,...e}),()=>h({type:1,id:e.id})))),M=(0,l.useMemo)((()=>({value:_,firstOption:C,containsCheckedOption:E,disabled:u,compare:d,...f})),[_,C,E,u,d,f]),N=(0,l.useMemo)((()=>({registerOption:R,change:x})),[R,x]),T={ref:y,id:i,role:"radiogroup","aria-labelledby":p,"aria-describedby":w,onKeyDown:I},O=(0,l.useMemo)((()=>({value:_})),[_]),A=(0,l.useRef)(null),D=La();return(0,l.useEffect)((()=>{A.current&&void 0!==n&&D.addEventListener(A.current,"reset",(()=>{x(n)}))}),[A,x]),l.createElement(k,{name:"RadioGroup.Description"},l.createElement(m,{name:"RadioGroup.Label"},l.createElement(Xl.Provider,{value:N},l.createElement(Yl.Provider,{value:M},null!=s&&null!=_&&Wl({[s]:_}).map((([e,a],t)=>l.createElement(Ul,{features:Vl.Hidden,ref:0===t?e=>{var a;A.current=null!=(a=null==e?void 0:e.closest("form"))?a:null}:void 0,...Oa({key:e,as:"input",type:"radio",checked:null!=a,hidden:!0,readOnly:!0,name:e,value:a})}))),Ra({ourProps:T,theirProps:g,slot:O,defaultTag:"div",name:"RadioGroup"})))))})),ii=Ta((function(e,a){var t;let i=qa(),{id:r=`headlessui-radiogroup-option-${i}`,value:n,disabled:s=!1,...o}=e,c=(0,l.useRef)(null),u=Va(c,a),[g,d]=Pl(),[f,h]=zl(),{addFlag:b,removeFlag:p,hasFlag:m}=zt(1),w=Ha({value:n,disabled:s}),k=Ql("RadioGroup.Option"),v=ei("RadioGroup.Option");Fa((()=>v.registerOption({id:r,element:c,propsRef:w})),[r,v,c,e]);let y=za((e=>{var a;if(Ja(e.currentTarget))return e.preventDefault();v.change(n)&&(b(2),null==(a=c.current)||a.focus())})),_=za((e=>{if(Ja(e.currentTarget))return e.preventDefault();b(2)})),S=za((()=>p(2))),C=(null==(t=k.firstOption)?void 0:t.id)===r,E=k.disabled||s,x=k.compare(k.value,n),I={ref:u,id:r,role:"radio","aria-checked":x?"true":"false","aria-labelledby":g,"aria-describedby":f,"aria-disabled":!!E||void 0,tabIndex:E?-1:x||!k.containsCheckedOption&&C?0:-1,onClick:E?void 0:y,onFocus:E?void 0:_,onBlur:E?void 0:S},R=(0,l.useMemo)((()=>({checked:x,disabled:E,active:m(2)})),[x,E,m]);return l.createElement(h,{name:"RadioGroup.Description"},l.createElement(d,{name:"RadioGroup.Label"},Ra({ourProps:I,theirProps:o,slot:R,defaultTag:"div",name:"RadioGroup.Option"})))})),ri=Object.assign(li,{Option:ii,Label:$l,Description:Gl});const ni=[{name:"left",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"center",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"right",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'}],si=function({onChange:e=()=>{},value:a,className:t="",plans:i=ni,label:r=(0,w.__)("Alignment","boostify-blocks"),hasResponsive:n=!0,isWrap:s=!1,labelClassName:o,contentClassName:c="mt-3"}){const[u,d]=(0,l.useState)(a||i[0].name);return(0,l.useEffect)((()=>{u!==a&&d(a||"")}),[a]),(0,l.createElement)(ri,{className:t,value:u,onChange:a=>{d(a),e(a)}},(0,l.createElement)(ri.Label,{className:""},(0,l.createElement)(ol,{className:o,hasResponsive:n},r)),(0,l.createElement)("div",{className:`${c} relative flex gap-1 ${s?"flex-wrap":""}`},i.map((e=>(0,l.createElement)(ri.Option,{key:e.name,value:e.name,as:l.Fragment},(({checked:a})=>(0,l.createElement)("div",{className:"relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg "+(a?"bg-sky-50 border-sky-400 text-sky-500":"text-neutral-500 border-slate-300 hover:border-slate-500")},(0,l.createElement)(g.Tooltip,{position:"top center",delay:400,text:e.name.charAt(0).toUpperCase()+e.name.slice(1)},(0,l.createElement)("div",{className:"absolute inset-0 z-[1]"})),(0,l.createElement)("div",{className:"text-xs leading-5",dangerouslySetInnerHTML:{__html:e.icon}}))))))))},oi=({onChange:e,textAlignment:a,className:t,hasResponsive:i,label:r=(0,w.__)("Alignment","boostify-blocks")})=>(0,l.createElement)(si,{className:t,onChange:e,value:a||"",hasResponsive:i,label:r}),ci={alignment:{Desktop:"center"},captionAlignment:{Desktop:"center"},height:{Desktop:void 0},sizeSlug:{Desktop:void 0},width:{Desktop:void 0},objectFit:{Desktop:"initial"},hoverImage:"static",layout:"normal",contentAlignment:"center"},ui=({panelData:e=ci,setAttr__:a,initialOpen:t,onToggle:i,opened:r,updateImage:n,setAttributes:s,imageSizeOptions:o,isResizable:c,naturalHeight:u,naturalWidth:d,alt:h,enableCaption:b,toggleEnableCaption:p})=>{const m=ta()||"Desktop",{alignment:k,captionAlignment:v,objectFit:y}=e,{currentDeviceValue:_}=Ve(k,m),{currentDeviceValue:S}=Ve(v,m),{currentDeviceValue:C}=Ve(e.width,m),{currentDeviceValue:E}=Ve(e.height,m),{currentDeviceValue:x}=Ve(e.sizeSlug,m),{currentDeviceValue:I}=Ve(y,m);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Settings","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(si,{onChange:t=>{a({...e,alignment:{...k,[m]:t}})},value:_,label:"Alignment"}),(0,l.createElement)(g.TextareaControl,{__nextHasNoMarginBottom:!0,label:(0,w.__)("Alt text (alternative text)"),value:h,onChange:e=>{s({alt:e})},help:(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.ExternalLink,{href:"https://www.w3.org/WAI/tutorials/images/decision-tree"},(0,w.__)("Describe the purpose of the image")),(0,w.__)("Leave empty if the image is purely decorative."))}),(0,l.createElement)(si,{plans:[{name:"normal",icon:"Normal"},{name:"overlay",icon:"Overlay"}],value:e.layout,hasResponsive:!1,label:(0,w.__)("Layout","boostify-blocks"),onChange:t=>{a({...e,layout:t})}}),"overlay"===e.layout&&(0,l.createElement)(si,{plans:[{name:"flex-start",icon:"Top"},{name:"center",icon:"Middle"},{name:"flex-end",icon:"Bottom"}],value:e.contentAlignment,hasResponsive:!1,label:(0,w.__)("Content alignment","boostify-blocks"),onChange:t=>{a({...e,contentAlignment:t})}}),(0,l.createElement)(Al,{label:"Dimensions",hasResponsive:!0,defaultOpen:!0,isDisableButton:!0},(0,l.createElement)(f.__experimentalImageSizeControl,{onChangeImage:n,onChange:({width:t,height:l})=>{if(void 0===t&&void 0===l)a({...e,width:{...e.width,[m]:void 0},height:{...e.height,[m]:void 0}});else{const i=t?{width:{...e.width,[m]:t}}:{},r=l?{height:{...e.height,[m]:l}}:{};a({...e,...i,...r})}},slug:x,width:C,height:E,imageSizeOptions:o,isResizable:c,imageWidth:d,imageHeight:u})),(0,l.createElement)(gl,{label:(0,w.__)("Object Fit","boostify-blocks"),hasResponsive:!0,onChange:t=>{a({...e,objectFit:{...y,[m]:t}})},value:I,options:[{value:"initial",label:"Default"},{value:"fill",label:"Fill"},{value:"cover",label:"Cover"},{value:"contain",label:"Contain"}]}),(0,l.createElement)(gl,{label:(0,w.__)("On Hover Image","boostify-blocks"),onChange:t=>{a({...e,hoverImage:t})},value:e.hoverImage,options:[{value:"static",label:"Static"},{value:"zoomin",label:"Zoom In"},{value:"slide",label:"Slide"},{value:"grayscale",label:"Grayscale"},{value:"blur",label:"Blur"}]}),"overlay"!==e.layout&&(0,l.createElement)(g.ToggleControl,{label:(0,w.__)("Enable caption","boostify-blocks"),checked:b,onChange:p}),"overlay"!==e.layout&&b&&(0,l.createElement)(oi,{textAlignment:S,onChange:t=>{a({...e,captionAlignment:{...v,[m]:t}})},label:(0,w.__)("Caption alignment","boostify-blocks")})))},gi=({className:e="",label:a=(0,w.__)("Color","boostify-blocks"),color:t="#000",onChange:i,showDefaultPalette:r=!0,showCustomColorOnDefaultPallete:n=!0})=>{const[s,o]=(0,l.useState)("");(0,l.useEffect)((()=>{t&&o(t)}),[t]);const c=(0,f.__experimentalUseMultipleOriginColorsAndGradients)(),u=(0,l.useMemo)((()=>{const e=window.boostify_blocks_global_variables?.customColorPallete;return e&&e.length&&n?[...c?.colors||[],{name:"Customs",colors:window.boostify_blocks_global_variables.customColorPallete||[]}]:c?.colors||[]}),[c,n]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.Dropdown,{className:`w-full ${e}`,contentClassName:"my-popover-content-classname",popoverProps:{placement:"left-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,l.createElement)("div",{className:"w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",onClick:t},(0,l.createElement)("div",{className:"flex items-center gap-0.5"},(0,l.createElement)("div",{className:"w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer "+(s?"":"bg-transparent"),style:{backgroundColor:s,backgroundImage:s?void 0:"linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 0 5px, 5px -5px, -5px 0"}})),a&&(0,l.createElement)("div",null,(0,l.createElement)("span",null,a))),renderContent:()=>(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"bg-white "},(0,l.createElement)(g.ColorPalette,{className:"block-editor-color-gradient-control__panel p-4",colors:r?u:void 0,value:s,enableAlpha:!0,onChange:e=>{(e=>{o(e),i(e)})(e||"")},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})))}))},di={color:"#d1d5db",style:"solid",width:"1px"},fi={mainSettings:void 0,hoverColor:void 0,radius:{Desktop:"0",Tablet:"0",Mobile:"0"}},hi=({className:e="space-y-4",borderControl:a=fi,setAttrs__border:t})=>{const i=ta()||"Desktop",{mainSettings:r,hoverColor:n,radius:s}=a,o=s[i]||s.Tablet||s.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.__experimentalBorderBoxControl,{label:(0,w.__)("Border"),onChange:e=>{t({...a,mainSettings:e})},value:r,colors:[],enableAlpha:!0,popoverOffset:40,popoverPlacement:"left-start",__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,size:"__unstable-large",className:"wcb-BorderBoxControl"}),(0,l.createElement)(gi,{label:(0,w.__)("Hover border color","boostify-blocks"),onChange:e=>{t({...a,hoverColor:e})},color:n}),(0,l.createElement)("div",{className:"MyBorderControl__BorderRadiusControl"},(0,l.createElement)(ol,{className:"mb-2",hasResponsive:!0},(0,w.__)("Border radius","boostify-blocks")),(0,l.createElement)(f.__experimentalBorderRadiusControl,{values:o,onChange:e=>{(e=>{const l=s.Desktop===s.Tablet&&s.Desktop===s.Mobile;"Desktop"!==i||(void 0!==s.Tablet&&"0"!==s.Tablet||void 0!==s.Mobile&&"0"!==s.Mobile)&&!l?t({...a,radius:{...s,[i]:e}}):t({...a,radius:{Desktop:e,Tablet:e,Mobile:e}})})(e)},label:""})))},bi={margin:{Desktop:{top:"",left:"",right:"",bottom:""}},padding:{Desktop:{top:"1rem",left:"1rem",right:"1rem",bottom:"1rem"}}},pi=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),mi=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),wi="wcb-dimensions-unit-control-styles",ki={boxSizing:"border-box",display:"block",flex:"0 0 24px",width:24,height:24,position:"relative",padding:4},vi={boxSizing:"border-box",display:"block",position:"relative",width:"100%",height:"100%"},yi={boxSizing:"border-box",display:"block",pointerEvents:"none",position:"absolute",backgroundColor:"currentColor"};function _i(e,a){return{...yi,opacity:e?1:.3,...a}}const Si={boxSizing:"border-box",width:"100%",paddingBottom:12},Ci={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},Ei={display:"flex",alignItems:"center",gap:4},xi={display:"flex",alignItems:"center",gap:8,marginBottom:8},Ii={...xi,marginBottom:0},Ri={flex:"0 0 110px",width:110},Mi={flex:1,display:"flex",alignItems:"center"};function Ni(e){const{top:a,right:t,bottom:l,left:i}=e;return!(a===t&&t===l&&l===i)}function Ti(e){return!!e&&Object.values(e).some((e=>!!e&&/\d/.test(e)))}const Oi={top:"",right:"",bottom:"",left:""},Ai=[{key:"top"},{key:"right"},{key:"bottom"},{key:"left"}],Di={top:(0,w.__)("Top","boostify-blocks"),right:(0,w.__)("Right","boostify-blocks"),bottom:(0,w.__)("Bottom","boostify-blocks"),left:(0,w.__)("Left","boostify-blocks"),mixed:(0,w.__)("Mixed","boostify-blocks")},Li=({side:e})=>{const a=a=>"all"===e||e===a;return(0,l.createElement)("span",{style:ki},(0,l.createElement)("span",{style:vi},(0,l.createElement)("span",{style:_i(a("top"),{height:2,left:3,right:3,top:0})}),(0,l.createElement)("span",{style:_i(a("right"),{bottom:3,top:3,width:2,right:0})}),(0,l.createElement)("span",{style:_i(a("bottom"),{height:2,left:3,right:3,bottom:0})}),(0,l.createElement)("span",{style:_i(a("left"),{bottom:3,top:3,width:2,left:0})})))},Pi=({value:e,min:a,onChange:t})=>{const{num:i,unit:r}=function(e){if(!e)return{num:0,unit:"px"};const a=e.match(/^([\d.]+)([a-z%]*)$/i);return a?{num:parseFloat(a[1])||0,unit:a[2]||"px"}:{num:0,unit:"px"}}(e),n=function(e){switch(e.toLowerCase()){case"rem":case"em":return 20;case"%":case"vw":case"vh":return 100;default:return 1e3}}(r),s=function(e){return["rem","em"].includes(e.toLowerCase())?.1:1}(r),o=Math.max(a,Math.min(n,i)),c=n>a?(o-a)/(n-a)*100:0;return(0,l.createElement)("input",{className:"wcb-dimensions-unit-control__range",type:"range",value:o,min:a,max:n,step:s,style:{background:`linear-gradient(to right, #0073aa ${c}%, #ddd ${c}%)`},onChange:e=>{const a=parseFloat(e.target.value);t(r?`${a}${r}`:`${a}`)},onWheel:e=>e.currentTarget.blur()})},Bi=({label:e,values:a={},onChange:t,min:i=-99999,allowReset:r=!0})=>{var n,s,o,c;(0,l.useEffect)((()=>{if(document.getElementById(wi))return;const e=document.createElement("style");e.id=wi,e.textContent="\n.wcb-dimensions-unit-control__range {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 4px;\n\tappearance: none;\n\t-webkit-appearance: none;\n\tborder-radius: 2px;\n\toutline: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tcursor: pointer;\n\tmargin-top: -5px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-thumb {\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tborder: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {\n\theight: 4px;\n\tborder-radius: 2px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-track {\n\theight: 4px;\n\tborder-radius: 2px;\n\tbackground: #ddd;\n}\n",document.head.appendChild(e)}),[]);const u=Ti(a),[d,f]=(0,l.useState)(!u||!Ni(a)),[h,b]=(0,l.useState)(u),p={top:null!==(n=a.top)&&void 0!==n?n:"",right:null!==(s=a.right)&&void 0!==s?s:"",bottom:null!==(o=a.bottom)&&void 0!==o?o:"",left:null!==(c=a.left)&&void 0!==c?c:""},m=function(e){const{top:a,right:t,bottom:l,left:i}=e;return a===t&&t===l&&l===i&&a||""}(p),k=Ti(p)&&Ni(p),v=e=>{const a=null!=e?e:"";t({top:a,right:a,bottom:a,left:a}),b(!0)},y=(e,a)=>{t({...p,[e]:null!=a?a:""}),b(!0)},_=d?(0,w.__)("Unlink sides","boostify-blocks"):(0,w.__)("Link sides","boostify-blocks");return(0,l.createElement)("div",{style:Si},(0,l.createElement)("div",{style:Ci},(0,l.createElement)("div",null,e),(0,l.createElement)("div",{style:Ei},r&&(0,l.createElement)(g.Button,{className:"component-box-control__reset-button",variant:"secondary",isSmall:!0,onClick:()=>{t(Oi),b(!1)},disabled:!h},(0,w.__)("Reset","boostify-blocks")),(0,l.createElement)(g.Tooltip,{text:_},(0,l.createElement)(g.Button,{className:"component-box-control__linked-button",isSmall:!0,icon:d?pi:mi,iconSize:24,"aria-label":_,onClick:()=>f((e=>!e))})))),d?(0,l.createElement)("div",{style:xi},(0,l.createElement)(Li,{side:"all"}),(0,l.createElement)(g.__experimentalUnitControl,{"aria-label":"string"==typeof e?e:void 0,className:"component-box-control__unit-control",style:Ri,value:m,onChange:e=>v(e),min:i,placeholder:k?Di.mixed:void 0,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:Mi},(0,l.createElement)(Pi,{value:m||p.top,min:i,onChange:v}))):Ai.map((({key:e},a)=>(0,l.createElement)("div",{key:e,style:a===Ai.length-1?Ii:xi},(0,l.createElement)(Li,{side:e}),(0,l.createElement)(g.__experimentalUnitControl,{"aria-label":Di[e],className:"component-box-control__unit-control",style:Ri,value:p[e],onChange:a=>y(e,a),min:i,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:Mi},(0,l.createElement)(Pi,{value:p[e],min:i,onChange:a=>y(e,a)}))))))},$i=({className:e="space-y-5",dimensionControl:a=bi,setAttrs__dimensions:t})=>{const i=ta()||"Desktop",{margin:r,padding:n}=a,{currentDeviceValue:s}=Ve(r,i),{currentDeviceValue:o}=Ve(n,i);return(0,l.createElement)("div",{className:e},(0,l.createElement)(Bi,{label:(0,l.createElement)(ol,{hasResponsive:!0,className:""},(0,w.__)("Padding","boostify-blocks")),values:o||{},onChange:e=>{t({...a,padding:{...n,[i]:e}})},min:0}),(0,l.createElement)(Bi,{label:(0,l.createElement)(ol,{className:"",hasResponsive:!0},(0,w.__)("Margin","boostify-blocks")),values:s||{},onChange:e=>{t({...a,margin:{...r,[i]:e}})},min:0}))},Fi=function(e){return(0,l.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",...e},(0,l.createElement)("circle",{cx:12,cy:12,r:12,fill:"currentColor",opacity:"0.2"}),(0,l.createElement)("path",{d:"M7 13l3 3 7-7",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))},Hi=({onClick:e,className:a="text-slate-700",isSmall:t=!0,...i})=>(0,l.createElement)(g.Button,{className:a,onClick:e,icon:(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-5 h-5","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"})),isSmall:t,...i}),zi=["shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl","shadow-inner"],ji={Normal:{color:"",presetClass:"",blur:0,horizontal:0,spread:0,vertical:0,position:"outset"},Hover:{color:"",presetClass:"",blur:0,horizontal:0,spread:0,vertical:0,position:"outset"}},Gi=["outset","inset"],Vi=[{name:"Normal",title:(0,w.__)("Normal","boostify-blocks")},{name:"Hover",title:(0,w.__)("Hover","boostify-blocks")}],Ui=({className:e="",boxShadowControl:a=ji,setAttrs__boxShadow:t})=>{const[i,r]=(0,l.useState)("Normal"),{color:n,presetClass:s,horizontal:o,vertical:c,blur:u,spread:d,position:f}=a[i],h=e=>{t({...a,[i]:{...a[i],presetClass:e}})},b=e=>{t({...a,[i]:{...a[i],color:e}})},p=e=>{t({...a,[i]:{...a[i],position:e,presetClass:""}})},m=e=>{t({...a,[i]:{...a[i],horizontal:e,presetClass:""}})},k=e=>{t({...a,[i]:{...a[i],vertical:e,presetClass:""}})},v=e=>{t({...a,[i]:{...a[i],blur:e,presetClass:""}})},y=e=>{t({...a,[i]:{...a[i],spread:e,presetClass:""}})};return(0,l.createElement)(g.TabPanel,{className:`wcb-bodyControls__panel ${e}`,activeClass:"active-tab",onSelect:e=>r(e),initialTabName:"Normal",tabs:Vi},(e=>(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(ri,{value:s,onChange:h},(0,l.createElement)(ri.Label,{className:"relative flex items-center justify-between"},(0,l.createElement)("span",null,(0,w.__)("Select Preset","boostify-blocks")),(0,l.createElement)(Hi,{onClick:()=>h("")})),(0,l.createElement)("div",{className:"relative p-3 bg-slate-50 mt-3 rounded-lg"},(0,l.createElement)("div",{className:"absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"}),(0,l.createElement)("div",{className:"relative grid grid-cols-3 gap-3 "},zi.map((e=>(0,l.createElement)(ri.Option,{key:e,value:e},(({checked:a})=>(0,l.createElement)("div",{className:`${e} flex items-center justify-center w-full h-20 cursor-pointer rounded-lg ${a?"bg-sky-50 ":"bg-white"} ${"shadow-inner"===e?"ring-1 ring-black/5":""}`},a&&(0,l.createElement)("div",{className:"shrink-0 text-sky-500"},(0,l.createElement)(Fi,{className:"h-6 w-6"})))))))))),(0,l.createElement)(gi,{label:(0,w.__)("Color","boostify-blocks"),onChange:b,color:n}),(0,l.createElement)(Al,null,(0,l.createElement)(g.RangeControl,{label:(0,w.__)("Horizontal","boostify-blocks"),className:"mb-0",value:o,onChange:m,min:-100,max:100}),(0,l.createElement)(g.RangeControl,{label:(0,w.__)("Vertical","boostify-blocks"),value:c,onChange:k,min:-100,max:100}),(0,l.createElement)(g.RangeControl,{label:(0,w.__)("Blur","boostify-blocks"),value:u,onChange:v,min:0,max:100}),(0,l.createElement)(g.RangeControl,{label:(0,w.__)("Spread","boostify-blocks"),value:d,onChange:y,min:-100,max:100}),(0,l.createElement)("div",{className:"flex items-center justify-between"},(0,l.createElement)("p",null,(0,w.__)("Position","boostify-blocks")),(0,l.createElement)(g.__experimentalRadioGroup,{onChange:p,checked:f},Gi.map((e=>(0,l.createElement)(g.__experimentalRadio,{value:e,key:e,className:"capitalize"},e)))))))))},Wi={border:fi,boxShadow:ji,padding:{Desktop:{top:"",left:"",right:"",bottom:""}},margin:{Desktop:{top:"",left:"",right:"",bottom:""}}},qi=({panelData:e=Wi,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const n=ta()||"Desktop",{border:s,boxShadow:o,padding:c,margin:u}=e,{currentDeviceValue:d}=Ve(c,n),{currentDeviceValue:f}=Ve(u,n);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Image","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(Al,{defaultOpen:!0,label:(0,w.__)("Border","boostify-blocks")},(0,l.createElement)(hi,{borderControl:s,setAttrs__border:t=>{a({...e,border:t})}})),(0,l.createElement)(Al,{label:(0,w.__)("Box shadow","boostify-blocks")},(0,l.createElement)(Ui,{boxShadowControl:o,setAttrs__boxShadow:t=>{a({...e,boxShadow:t})}})),(0,l.createElement)($i,{dimensionControl:e,setAttrs__dimensions:t=>a({...e,...t})})))},Ki=({children:e,className:a="my-1"})=>(0,l.createElement)("p",{className:`components-form-token-field__help ${a}`},e),Zi={backgroundColor:"",backgroundColorHover:""},Ji=({panelData:e=Zi,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{ta();const{backgroundColor:n,backgroundColorHover:s}=e;return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Overlay","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(gi,{color:n,onChange:t=>{a({...e,backgroundColor:t})},label:(0,w.__)("Background color")}),(0,l.createElement)(gi,{color:s,onChange:t=>{a({...e,backgroundColorHover:t})},label:(0,w.__)("Background hover color")}),(0,l.createElement)(Ki,null,(0,w.__)("Let's customize the opacity of the background right inside the color-picker popover","boostify-blocks"))))},Yi=[{key:"default",name:"Default",style:{fontWeight:void 0,fontStyle:void 0}},{key:"thin",name:"Thin",style:{fontWeight:"100",fontStyle:"normal"}},{key:"ExtraLight",name:"Extra Light",style:{fontWeight:"200",fontStyle:"normal"}},{key:"light",name:"Light",style:{fontWeight:"300",fontStyle:"normal"}},{key:"Regular",name:"Regular",style:{fontWeight:"400",fontStyle:"normal"}},{key:"Medium",name:"Medium",style:{fontWeight:"500",fontStyle:"normal"}},{key:"SemiBold",name:"Semi Bold",style:{fontWeight:"600",fontStyle:"normal"}},{key:"Bold",name:"Bold",style:{fontWeight:"700",fontStyle:"normal"}},{key:"ExtraBold",name:"Extra Bold",style:{fontWeight:"800",fontStyle:"normal"}},{key:"Black",name:"Black",style:{fontWeight:"900",fontStyle:"normal"}},{key:"thin_italic",name:"Thin Italic",style:{fontWeight:"100",fontStyle:"italic"}},{key:"ExtraLight_italic",name:"Extra Light Italic",style:{fontWeight:"200",fontStyle:"italic"}},{key:"light_italic",name:"Light Italic",style:{fontWeight:"300",fontStyle:"italic"}},{key:"Regular_italic",name:"Regular Italic",style:{fontWeight:"400",fontStyle:"italic"}},{key:"Medium_italic",name:"Medium Italic",style:{fontWeight:"500",fontStyle:"italic"}},{key:"SemiBold_italic",name:"Semi Bold Italic",style:{fontWeight:"600",fontStyle:"italic"}},{key:"Bold_italic",name:"Bold Italic",style:{fontWeight:"700",fontStyle:"italic"}},{key:"ExtraBold_italic",name:"Extra Bold Italic",style:{fontWeight:"800",fontStyle:"italic"}},{key:"Black_italic",name:"Black Italic",style:{fontWeight:"900",fontStyle:"italic"}}],Qi=({onChange:e,value:a})=>(0,l.createElement)(g.CustomSelectControl,{__nextUnconstrainedWidth:!0,label:(0,w.__)("Appearance","boostify-blocks"),options:Yi,onChange:e,value:a}),Xi={fontSizes:{Desktop:""},appearance:Yi[0],textDecoration:void 0,textTransform:void 0,lineHeight:{Desktop:void 0},letterSpacing:{Desktop:void 0},fontFamily:void 0},er=[{name:"Tiny",slug:"tiny",size:"8px"},{name:"Small",slug:"small",size:"12px"},{name:"Normal",slug:"normal",size:"16px"},{name:"Big",slug:"big",size:"26px"},{name:"Bigger",slug:"bigger",size:"30px"},{name:"Huge",slug:"huge",size:"36px"}],ar=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})),tr=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"})),lr=[{name:(0,w.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,w.__)("Underline"),value:"underline",icon:ar},{name:(0,w.__)("Strikethrough"),value:"line-through",icon:tr}],ir=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(g.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,w.__)("Decoration"),value:e,onChange:a},lr.map((e=>(0,l.createElement)(g.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name,title:e.name})))),rr=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})),nr=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),sr=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})),or=[{name:(0,w.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,w.__)("Uppercase"),value:"uppercase",icon:rr},{name:(0,w.__)("Lowercase"),value:"lowercase",icon:nr},{name:(0,w.__)("Capitalize"),value:"capitalize",icon:sr}],cr=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(g.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,w.__)("Letter case"),value:e,onChange:a},or.map((e=>(0,l.createElement)(g.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name})))),ur=JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}'),gr=({onChange:e,options:a,value:t,label:i})=>{const[r,n]=(0,l.useState)(t||""),[s,o]=(0,l.useState)(a);return(0,l.useEffect)((()=>{n(t||"")}),[t]),(0,l.createElement)(g.ComboboxControl,{label:i,value:r,onChange:a=>{n(a||""),e(a||"")},options:s,onFilterValueChange:e=>o(a.filter((a=>a.label.toLowerCase().startsWith(e.toLowerCase()))))})},dr=({onChangeFontFamily:e,selectedFont:a})=>{const[t,i]=(0,l.useState)(a);(0,l.useEffect)((()=>{i(a)}),[a]);const r=[];Object.keys(ur).forEach((e=>{r.push({value:e,label:e})}));const n=[{value:"",label:"Default"},{value:"Arial",label:"Arial"},{value:"Helvetica",label:"Helvetica"},{value:"Times New Roman",label:"Times New Roman"},{value:"Georgia",label:"Georgia"},...r];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(ol,null,(0,w.__)("Font Family","boostify-blocks")),(0,l.createElement)(gr,{value:t||"",options:n,onChange:a=>{i(a||""),e(a||""),r.some((e=>e.value===a&&(Ye(a),!0))),Ye("")}}))},fr=({className:e="space-y-5",typographyControl:a=Xi,setAttrs__typography:t=()=>{},label:i="Typography",disclosureDefaultOpen:r})=>{const n=ta()||"Desktop",{fontSizes:s,appearance:o,textDecoration:c,textTransform:u,lineHeight:d,letterSpacing:f,fontFamily:h}=a,{currentDeviceValue:b}=Ve(s,n),{currentDeviceValue:p}=Ve(d,n),{currentDeviceValue:m}=Ve(f,n);return(0,l.createElement)(Al,{defaultOpen:r,label:i},(0,l.createElement)("div",{className:e},(0,l.createElement)("div",null,(0,l.createElement)(dr,{selectedFont:h,onChangeFontFamily:e=>{t({...a,fontFamily:e})}})),(0,l.createElement)("div",{className:"relative"},(0,l.createElement)(ol,{className:"flex absolute right-8 -top-0.5 z-10",hasResponsive:!0,children:""}),(0,l.createElement)(g.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:er,value:b,fallbackFontSize:16,onChange:e=>{t({...a,fontSizes:{...s,[n]:e}})}})),(0,l.createElement)(Qi,{onChange:({selectedItem:e})=>{return l=e,void t({...a,appearance:l||Yi[0]});var l},value:o}),(0,l.createElement)(ir,{value:c,onChange:e=>{t({...a,textDecoration:e})}}),(0,l.createElement)(cr,{value:u,onChange:e=>{t({...a,textTransform:e})}}),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(ol,{hasResponsive:!0,className:"flex-shrink-0",children:(0,w.__)("Line height","boostify-blocks")}),(0,l.createElement)(g.__experimentalNumberControl,{onChange:e=>{t({...a,lineHeight:{...d,[n]:e}})},value:p,step:.1,min:0,max:100,placeholder:(0,w.__)("1.5","boostify-blocks")})),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(ol,{hasResponsive:!0,className:"flex-shrink-0",children:(0,w.__)("Letter spacing","boostify-blocks")}),(0,l.createElement)(g.__experimentalUnitControl,{onChange:e=>{t({...a,letterSpacing:{...f,[n]:e}})},value:m,units:[{value:"px",label:"px",default:0},{value:"%",label:"%",default:0},{value:"em",label:"em",default:0}]}))))},hr={typography:Xi,textColor:"",margin:{Desktop:{top:"",left:"",right:"",bottom:""}}},br=({panelData:e=hr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const n=ta()||"Desktop",{typography:s,textColor:o,margin:c}=e,{currentDeviceValue:u}=Ve(c,n);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Caption","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-2.5"},(0,l.createElement)(fr,{typographyControl:s,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(gi,{color:o,onChange:t=>{a({...e,textColor:t})}}),(0,l.createElement)(g.__experimentalBoxControl,{label:(0,l.createElement)(ol,{hasResponsive:!0,className:""},(0,w.__)("Margin","boostify-blocks")),values:u,onChange:t=>{a({...e,margin:{...c,[n]:t}})}})))};t(8698),t(8026),t(498),t(3682);const pr=({className:e,...a})=>(0,l.createElement)(g.Button,{className:`rounded-md ${e}`,...a}),mr=(0,h.createElement)(b.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,h.createElement)(b.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),wr=({className:e="text-gray-700",btnClass:a="ring-1 ring-neutral-200",defaultBtnClass:t="hover:bg-slate-100",imageData:i,onChange:r})=>{const{mediaId:n,mediaUrl:s,mediaSrcSet:o,sizes:c}=i,u=e=>{r({mediaId:e.id,mediaUrl:e.url,mediaSrcSet:`${e.url} ${e.width}w, ${e.sizes?.medium?.url} ${e.sizes?.medium?.width}w, ${e.sizes?.full?.url} ${e.sizes?.full?.width}w, ${e.sizes?.large?.url} ${e.sizes?.large?.width}w`,sizes:e.sizes})};return(0,l.createElement)("div",{className:`editor-post-featured-image w-full ${e}`},(0,l.createElement)(f.MediaUploadCheck,null,(0,l.createElement)(f.MediaUpload,{onSelect:u,value:n,allowedTypes:["image"],render:({open:e})=>(0,l.createElement)(g.Button,{className:`h-auto rounded-lg text-inherit ${a} ${0==n?"editor-post-featured-image__toggle "+t:"editor-post-featured-image__preview"}`,onClick:e},0==n&&(0,l.createElement)("div",{className:"text-center flex flex-col items-center justify-center rounded-lg"},(0,l.createElement)(g.Icon,{icon:mr,className:"text-inherit"}),(0,l.createElement)("span",{className:"mt-0.5"},(0,w.__)("Choose an image","boostify-blocks"))),!!s&&(0,l.createElement)("img",{src:s,className:"w-full block rounded-lg",sizes:"250px",srcSet:o||void 0}))})),0!==n&&(0,l.createElement)("div",{className:"flex justify-between gap-2 mt-2"},(0,l.createElement)(f.MediaUploadCheck,null,(0,l.createElement)(f.MediaUpload,{title:(0,w.__)("Replace image","boostify-blocks"),value:n,onSelect:u,allowedTypes:["image"],render:({open:e})=>(0,l.createElement)(pr,{className:"flex-1 my-0 flex justify-center",onClick:e,variant:"secondary"},(0,w.__)("Replace","boostify-blocks"))})),(0,l.createElement)(f.MediaUploadCheck,null,(0,l.createElement)(pr,{className:"flex-1 my-0",onClick:()=>{r({mediaId:0,mediaUrl:"",mediaSrcSet:void 0})},isDestructive:!0},(0,w.__)("Remove","boostify-blocks")))))},kr={image:{mediaId:0,mediaUrl:"",mediaSrcSet:void 0},isShowImage:!0},vr=({panelData:e=kr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{ta();const{image:n,isShowImage:s}=e,{imageSizeOptions:o}=function(){const{imageSizes:e}=(0,d.useSelect)((e=>({imageSizes:e(f.store).getSettings().imageSizes})),[]);return{imageSizeOptions:e?.map((({name:e,slug:a})=>({value:a,label:e})))||[]}}(),c=[{name:"SelectImages",title:(0,w.__)("Select Images","boostify-blocks")}];return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Images","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(g.TabPanel,{className:"wcb-bodyControls__panel",activeClass:"active-tab",initialTabName:"SelectImages",tabs:c},(()=>s?(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)("div",null,(0,l.createElement)(ol,{hasResponsive:!1},(0,w.__)("Choose Image","boostify-blocks")),(0,l.createElement)(wr,{imageData:n,onChange:t=>{a({...e,image:t})}}))):(0,l.createElement)(Ki,null,(0,w.__)('Please enable the "Show Image" field to select images for testimonials...',"boostify-blocks"))))))},yr={...bi,padding:{Desktop:{top:"",left:"",right:"",bottom:""}},margin:{Desktop:{top:"",left:"",right:"",bottom:""}}},_r=({panelData:e=yr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,w.__)("Dimension","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)($i,{dimensionControl:e,setAttrs__dimensions:t=>a({...e,...t})}))),Sr=({temporaryURL:e,attributes:a,setAttributes:t,isSelected:i,insertBlocksAfter:n,onReplace:s,onSelectImage:c,onSelectURL:b,onUploadError:p,containerRef:k,context:v,clientId:y,isContentLocked:_})=>{const{url:S="",alt:C,caption:E,id:x,href:I,rel:R,linkClass:M,linkDestination:N,title:T,linkTarget:O,advance_responsiveCondition:A,advance_zIndex:D,general_settings:L,general_image:P,uniqueId:B,style_image:$,style_overlay:F,style_caption:H,style_dimension:z}=a,j=ta()||"Desktop",G=(0,h.useRef)(null),V=(0,ia.usePrevious)(E),[U,W]=(0,h.useState)(!!E),{allowResize:q=!0}=v,{currentDeviceValue:K=""}=Ve(L.alignment,j);(0,h.useEffect)((()=>{P.image.mediaUrl!==S&&t({url:P.image.mediaUrl})}),[P.image,S,x,t]);const{image:Z,multiImageSelection:J}=(0,d.useSelect)((e=>{const{getMedia:a}=e(ca.store),{getMultiSelectedBlockClientIds:t,getBlockName:l}=e(f.store),r=t();return{image:x&&i?a(x,{context:"view"}):null,multiImageSelection:r.length&&r.every((e=>"core/image"===l(e)))}}),[x,i,y]),{canInsertCover:Y,imageEditing:Q,imageSizes:X,maxWidth:ee,mediaUpload:ae}=(0,d.useSelect)((e=>{const{getBlockRootClientId:a,getSettings:t,canInsertBlockType:l}=e(f.store),i=a(y);return{...Object.fromEntries(Object.entries(t()).filter((([e])=>["imageEditing","imageSizes","maxWidth","mediaUpload"].includes(e)))),canInsertCover:l("core/cover",i)}}),[y]),{replaceBlocks:te,toggleSelection:le}=(0,d.useDispatch)(f.store),{createErrorNotice:ie,createSuccessNotice:re}=(0,d.useDispatch)(m.store),ne=(0,ia.useViewportMatch)("medium"),se=["wide","full"].includes(K),[{loadedNaturalWidth:oe,loadedNaturalHeight:ce},ue]=(0,h.useState)({}),[ge,de]=(0,h.useState)(!1),[fe,he]=(0,h.useState)(),be=function(e,a){const[t,l]=(0,h.useState)();function i(){l(e.current?.clientWidth)}return(0,h.useEffect)(i,a),(0,h.useEffect)((()=>{const{defaultView:a}=e.current.ownerDocument;return a.addEventListener("resize",i),()=>{a.removeEventListener("resize",i)}}),[]),t}(k,[K]),pe=q&&!_&&!(se&&ne),me=(0,o.map)(X.filter((({slug:e})=>(0,o.get)(Z,["media_details","sizes",e,"source_url"]))),(({name:e,slug:a})=>({value:a,label:e})));(0,h.useEffect)((()=>{Mr(x,S)&&i&&!fe&&window.fetch(S).then((e=>e.blob())).then((e=>he(e))).catch((()=>{}))}),[x,S,i,fe]),(0,h.useEffect)((()=>{E&&!V&&W(!0)}),[E,V]);const we=(0,h.useCallback)((e=>{e&&!E&&e.focus()}),[E]),{naturalWidth:ke,naturalHeight:ve}=(0,h.useMemo)((()=>({naturalWidth:G.current?.naturalWidth||oe||void 0,naturalHeight:G.current?.naturalHeight||ce||void 0})),[oe,ce,G.current?.complete]);function ye(e){const a=(0,o.get)(Z,["media_details","sizes",e,"source_url"]);if(!a)return null;t({url:a,general_settings:{...L,width:{Desktop:void 0,Tablet:void 0,Mobile:void 0},height:{Desktop:void 0,Tablet:void 0,Mobile:void 0},sizeSlug:{...L.sizeSlug,[j]:e}}})}(0,h.useEffect)((()=>{i||(de(!1),E||W(!1))}),[i,E]);const _e=x&&ke&&ve&&Q,Se=!J&&_e&&!ge,{tabIsOpen:Ce,tabAdvancesIsPanelOpen:Ee,tabGeneralIsPanelOpen:xe,tabStylesIsPanelOpen:Ie,handleTogglePanel:Re}=(e=>{const{setBlockPanelInfo:a}=(0,d.useDispatch)(ka),{blockStores:t}=(0,d.useSelect)((e=>({blockStores:e(ka)?.getBlockPanelInfo()})),[e]),{tabIsOpen:i,Advances:r,General:n,Styles:s}=t[e]||{},o=t[e];return(0,l.useEffect)((()=>{!o&&a&&a(e,{tabIsOpen:"General",General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"}})}),[e]),{setBlockPanelInfo:a,tabAdvances:r,tabGeneral:n,tabStyles:s,tabIsOpen:i,blockStore:o,handleTogglePanel:(t,l,i)=>{a&&(i&&o&&"first"===o[t]?.panelIsOpen&&(l=""),o&&o[t]?.panelIsOpen===l&&(l=""),a(e,{tabIsOpen:t,[t]:{panelIsOpen:void 0===l&&o?o[t]?.panelIsOpen:l}}))},tabGeneralIsPanelOpen:n?.panelIsOpen,tabStylesIsPanelOpen:s?.panelIsOpen,tabAdvancesIsPanelOpen:r?.panelIsOpen}})(B),Me=(0,l.createElement)(l.Fragment,null,(0,l.createElement)(f.BlockControls,{group:"block"},!_&&(0,l.createElement)(g.ToolbarButton,{onClick:()=>{W(!U),U&&E&&t({caption:void 0})},icon:na,isPressed:U,label:U?(0,w.__)("Remove caption"):(0,w.__)("Add caption")}),!J&&!ge&&(0,l.createElement)(f.__experimentalImageURLInputUI,{url:I||"",onChangeUrl:function(e){t(e)},linkDestination:N,mediaUrl:Z&&Z.source_url||S,mediaLink:Z&&Z.link,linkTarget:O,linkClass:M,rel:R}),Se&&(0,l.createElement)(g.ToolbarButton,{onClick:()=>de(!0),icon:sa,label:(0,w.__)("Crop")}),fe&&(0,l.createElement)(g.ToolbarButton,{onClick:function(){ae({filesList:[fe],onFileChange([e]){c(e),(0,u.isBlobURL)(e.url)||(he(void 0),re((0,w.__)("Image uploaded."),{type:"snackbar"}))},allowedTypes:ha,onError(e){ie(e,{type:"snackbar"})}})},icon:oa,label:(0,w.__)("Upload external image")})),!J&&!ge&&(0,l.createElement)(f.BlockControls,{group:"other"},(0,l.createElement)(f.MediaReplaceFlow,{mediaId:x,mediaURL:S,allowedTypes:ha,accept:"image/*",onSelect:c,onSelectURL:b,onError:p})),(0,l.createElement)(f.InspectorControls,{__experimentalGroup:"advanced"},(0,l.createElement)(g.TextControl,{label:(0,w.__)("Title attribute"),value:T||"",onChange:function(e){t({title:e})},help:(0,l.createElement)(l.Fragment,null,(0,w.__)("Describe the role of this image on the page."),(0,l.createElement)(g.ExternalLink,{href:"https://www.w3.org/TR/html52/dom.html#the-title-attribute"},(0,w.__)("(Note: many devices and browsers do not display this text.)")))})),(0,l.createElement)(pa,{renderTabPanels:e=>{switch(e.name){case"General":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(vr,{onToggle:()=>Re("General","Images"),initialOpen:"General"===xe,opened:"first"===xe||void 0,setAttr__:e=>{t({general_image:{...e}})},panelData:P}),(0,l.createElement)(ui,{onToggle:()=>Re("General","General",!0),initialOpen:"General"===xe||"settings"===xe,opened:"General"===xe||void 0,setAttr__:e=>{t({general_settings:e})},panelData:L,imageSizeOptions:me,isResizable:pe,naturalHeight:ve,naturalWidth:ke,setAttributes:t,updateImage:ye,alt:C,enableCaption:U,toggleEnableCaption:e=>{W(e)}}));case"Styles":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(qi,{onToggle:()=>Re("Styles","_StyleImage",!0),initialOpen:"_StyleImage"===Ie||"first"===Ie,opened:"_StyleImage"===Ie||void 0,setAttr__:e=>{t({style_image:e})},panelData:$}),"overlay"===L.layout&&(0,l.createElement)(Ji,{onToggle:()=>Re("Styles","_StyleOverlay"),initialOpen:"_StyleOverlay"===Ie,opened:"_StyleOverlay"===Ie||void 0,setAttr__:e=>{t({style_overlay:e})},panelData:F}),U&&"overlay"!==L.layout&&(0,l.createElement)(br,{onToggle:()=>Re("Styles","_StyleCaption"),initialOpen:"_StyleCaption"===Ie,opened:"_StyleCaption"===Ie||void 0,setAttr__:e=>{t({style_caption:e})},panelData:H}),(0,l.createElement)(_r,{onToggle:()=>Re("Styles","_StyleDimension"),initialOpen:"_StyleDimension"===Ie,opened:"_StyleDimension"===Ie||void 0,setAttr__:e=>{t({style_dimension:e})},panelData:z}));case"Advances":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(hl,{advance_responsiveCondition:a.advance_responsiveCondition,advance_zIndex:a.advance_zIndex,handleTogglePanel:Re,setAttributes:t,tabAdvancesIsPanelOpen:Ee}));default:return(0,l.createElement)("div",null)}},uniqueId:B})),{currentDeviceValue:Ne}=Ve(L.width,j),{currentDeviceValue:Te}=Ve(L.height,j),{currentDeviceValue:Oe}=Ve(L.sizeSlug,j),Ae=(0,ra.getFilename)(S);let De;De=C||(Ae?(0,w.sprintf)(/* translators: %s: file name */ /* translators: %s: file name */
(0,w.__)("This image has an empty alt attribute; its file name is %s"),Ae):(0,w.__)("This image has an empty alt attribute"));const Le=(0,f.__experimentalUseBorderProps)(a),Pe=a.className?.includes("is-style-rounded"),Be=!!Le.className||!(0,o.isEmpty)(Le.style);let $e,Fe,He=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("img",{src:e||S,alt:De,onError:()=>{},onLoad:e=>{ue({loadedNaturalWidth:e.target?.naturalWidth,loadedNaturalHeight:e.target?.naturalHeight})},ref:G,className:Le.className,style:Le.style}),e&&(0,l.createElement)(g.Spinner,null));if(be&&ke&&ve){const e=ke>be;$e=e?be:ke,Fe=e?be*(ve/ke):ve}if(_e&&ge)He=(0,l.createElement)(f.__experimentalImageEditor,{borderProps:Pe?void 0:Le,url:S,width:Ne,height:Te,clientWidth:be,naturalHeight:ve,naturalWidth:ke});else if(pe&&$e){const e=Ne||$e,a=Te||Fe,r=ke/ve,n=ke<ve?20:20*r,s=ve<ke?20:20/r,o=2.5*ee;let c=!1,u=!1;"center"===K?(c=!0,u=!0):(0,w.isRTL)()?"left"===K?c=!0:u=!0:"right"===K?u=!0:c=!0,He=(0,l.createElement)(g.ResizableBox,{className:"wcb-image__ResizableBox",size:{width:Ne||"auto",height:Te&&!Be?Te:"auto"},showHandle:i,minWidth:n,maxWidth:o,minHeight:s,maxHeight:o/r,lockAspectRatio:!0,enable:{top:!1,right:c,bottom:!0,left:u},onResizeStart:function(){le(!1)},onResizeStop:(l,i,r,n)=>{le(!0),t({general_settings:{...L,width:{...L.width,[j]:parseInt(e+n.width,10)},height:{...L.height,[j]:parseInt(a+n.height,10)}}})},resizeRatio:"center"===K?2:1},He)}else He=(0,l.createElement)("div",{style:{width:Ne,height:Te}},He);return(0,l.createElement)(l.Fragment,null,!e&&Me,He,U&&(!f.RichText.isEmpty(E)||i)&&(0,l.createElement)(f.RichText,{identifier:"caption",className:(0,f.__experimentalGetElementClassName)("caption"),ref:we,tagName:"figcaption","aria-label":(0,w.__)("Image caption text"),placeholder:(0,w.__)("Add caption"),value:E,onChange:e=>t({caption:e}),inlineToolbar:!0,__unstableOnSplitAtEnd:()=>n((0,r.createBlock)((0,r.getDefaultBlockName)()))}))},Cr={textAlignment:{Desktop:"left"},headingTag:"h2",showHeading:!0,showSeparator:!1,showSubHeading:!1,separatorPosition:"middle"},Er={dimension:{...bi,padding:{Desktop:{bottom:"",top:"",left:"",right:""}}}},xr={border:di,width:{Desktop:"10%"},marginBottom:{Desktop:"1rem"}};function Ir(e,a="wcb-"){return e?a+e.replace(/-/g,"").replace(/\s/g,"").substring(0,12):(a+"converniquedreturnnull"+Date.now()+Math.random()).replace(/\./g,"-")}const Rr=e=>(0,l.createElement)(g.Placeholder,{className:"block-editor-media-placeholder",withIllustration:!0,icon:p,label:(0,w.__)("Image"),instructions:(0,w.__)("Upload an image file, pick one from your media library, or add one with a URL.")},e),Mr=(e,a)=>a&&!e&&!(0,u.isBlobURL)(a),Nr=function({className:e="",uniqueId:a="",HtmlTag:t="div",children:i,attributes:r,id:n,...s}){let o="";try{const e=a=>{if(Array.isArray(a))return 0===a.length?{}:a;if(a&&"object"==typeof a){const t={};for(const[l,i]of Object.entries(a))t[l]=e(i);return t}return a},a=e(r);o=c().escape(JSON.stringify(a))}catch(a){console.log("attributes JSON.stringify error on SAVE function",{error:a,className:e,attributes:r})}const u=r?.advance_responsiveCondition||{},g=[u?.isHiddenOnDesktop?"wcb-hide-desktop":"",u?.isHiddenOnTablet?"wcb-hide-tab":"",u?.isHiddenOnMobile?"wcb-hide-mob":""].filter(Boolean).join(" ");return(0,l.createElement)(t,{...s,className:`wcb-cm wcb-update-div ${g} ${e.trim()} ${a.trim()}`,id:n||r?.anchor,"data-uniqueid":a,"data-is-wcb-save-common":!0},i,(0,l.createElement)("div",{"data-wcb-global-styles":a}),(0,l.createElement)("pre",{"data-wcb-block-attrs":a,style:{display:"none"}},o))},Tr=JSON.parse('{"UU":"boostify-blocks/image"}'),Or={uniqueId:{type:"string",default:""},general_settings:{type:"object",default:ci},general_image:{type:"object",default:kr},style_image:{type:"object",default:Wi},style_overlay:{type:"object",default:Zi},style_caption:{type:"object",default:hr},style_dimension:{type:"object",default:yr},url:{type:"string",source:"attribute",selector:"img",attribute:"src",__experimentalRole:"content"},alt:{type:"string",source:"attribute",selector:"img",attribute:"alt",default:"",__experimentalRole:"content"},caption:{type:"string",source:"html",selector:"figcaption",default:"",__experimentalRole:"content"},title:{type:"string",source:"attribute",selector:"img",attribute:"title",__experimentalRole:"content"},href:{type:"string",source:"attribute",selector:"figure > a",attribute:"href",__experimentalRole:"content"},rel:{type:"string",source:"attribute",selector:"figure > a",attribute:"rel"},linkClass:{type:"string",source:"attribute",selector:"figure > a",attribute:"class"},id:{type:"number",__experimentalRole:"content"},linkDestination:{type:"string"},linkTarget:{type:"string",source:"attribute",selector:"figure > a",attribute:"target"},advance_responsiveCondition:{type:"object",default:_a},advance_zIndex:{type:"object",default:cl}},Ar={attributes:Or,save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,alt:r,caption:n,href:c,id:u,linkClass:g,linkDestination:d,linkTarget:h,rel:b,title:p,url:m,general_settings:w,general_image:k,style_image:v,style_overlay:y,style_caption:_}=e,S={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_settings:{...w,height:"object"!=typeof w.height||Array.isArray(w.height)?{Desktop:void 0}:w.height,width:"object"!=typeof w.width||Array.isArray(w.width)?{Desktop:void 0}:w.width},style_image:v,style_overlay:y,style_caption:_},{currentDeviceValue:C}=Ve(w.alignment,"Desktop"),{currentDeviceValue:E}=Ve(w.width,"Desktop"),{currentDeviceValue:x}=Ve(w.height,"Desktop"),I=(0,o.isEmpty)(b)?void 0:b,R=(0,f.__experimentalGetBorderClassesAndStyles)(e),M=s()({[`align${C}`]:C}),N=s()(R.className,{[`wp-image-${u}`]:!!u}),T=(0,l.createElement)("img",{src:m,alt:r||"",className:N||void 0,style:R.style,width:E,height:x,title:p}),O=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("figure",{className:"wcb-image__wrap-figure"},c?(0,l.createElement)("a",{className:g,href:c,target:h,rel:I},T):T,(0,l.createElement)(f.RichText.Content,{className:(0,f.__experimentalGetElementClassName)("caption"),tagName:"figcaption",value:n||""}),"overlay"===w.layout&&(0,l.createElement)("div",{className:"wcb-image__overlay-wrap"},(0,l.createElement)("div",{className:"wcb-image__overlay-bg"},(0,l.createElement)("div",{className:"wcb-image__overlay-content"},(0,l.createElement)(f.InnerBlocks.Content,null)))))),A=f.useBlockProps.save({className:`woostify-container wcb-image__wrap wcb-image__wrap--${w.layout} ${M}`.trim(),style:{display:"flex",justifyContent:e.general_settings?.alignment?.Desktop}});return(0,l.createElement)(Nr,{...A,attributes:S,uniqueId:a,HtmlTag:"div"},O)}},Dr=[Ar,{},{}],{Fragment:Lr}=wp.element,{withSelect:Pr}=wp.data;(0,r.registerBlockType)(Tr.UU,{__experimentalLabel(e,{context:a}){if("accessibility"===a){const{caption:a,alt:t,url:l}=e;return l?t?t+(a?". "+a:""):a||"":__("Empty")}},getEditWrapperProps(e){const a=ta()||"Desktop";return{"data-align":"Desktop"===a?e.general_settings?.alignment?.Desktop:"Tablet"===a?e.general_settings?.alignment?.Tablet:e.general_settings?.alignment?.Mobile}},edit:e=>{const{attributes:a,setAttributes:t,isSelected:i,className:r,insertBlocksAfter:n,onReplace:c,context:g,clientId:b}=e,{url:k="",alt:v,caption:y,id:_,advance_responsiveCondition:S,advance_zIndex:C,href:E,linkClass:x,linkDestination:I,linkTarget:R,rel:M,title:N,uniqueId:T,general_settings:O,general_image:A,style_image:D,style_overlay:L,style_caption:P,style_dimension:B}=a,[$,F]=(0,h.useState)(),H=ta()||"Desktop",z=(0,h.useRef)();(0,l.useEffect)((()=>{z.current=v}),[v]);const j=(0,h.useRef)();(0,l.useEffect)((()=>{j.current=y}),[y]);const G=(0,h.useRef)(),{imageDefaultSize:V,mediaUpload:U,isContentLocked:W}=(0,d.useSelect)((e=>{const{getSettings:a,__unstableGetContentLockingParent:t}=e(f.store),l=a();return{imageDefaultSize:l.imageDefaultSize,mediaUpload:l.mediaUpload,isContentLocked:!!t(b)}}),[]),{createErrorNotice:q}=(0,d.useDispatch)(m.store);function K(e){q(e,{type:"snackbar"}),t({id:void 0,url:void 0,src:void 0}),F(void 0)}function Z(e){if(!e||!e.url)return void t({url:void 0,alt:void 0,id:void 0,title:void 0,caption:void 0});if((0,u.isBlobURL)(e.url))return void F(e.url);F(void 0);let l,i=((e,a)=>{const t=Object.fromEntries(Object.entries(null!=e?e:{}).filter((([e])=>["alt","id","link","caption"].includes(e))));return t.url=(0,o.get)(e,["sizes",a,"url"])||(0,o.get)(e,["media_details","sizes",a,"source_url"])||e.url,t})(e,V);if(j.current&&!(0,o.get)(i,["caption"])){const{caption:e,...a}=i;i=a}if(e.id&&e.id===_)l={url:k};else{const a=(r=e,n=V,"url"in(null!==(s=r?.sizes?.[n])&&void 0!==s?s:{})||"source_url"in(null!==(c=r?.media_details?.sizes?.[n])&&void 0!==c?c:{})?V:"full");l={general_settings:{...O,width:{Desktop:void 0,Tablet:void 0,Mobile:void 0},height:{Desktop:void 0,Tablet:void 0,Mobile:void 0},sizeSlug:{Desktop:a,Tablet:a,Mobile:a}}}}var r,n,s,c;const g={mediaId:e.id||0,mediaUrl:e.url,mediaSrcSet:e.srcset||"",sizes:e.sizes||e.media_details?.sizes||{}};let d,f=a.linkDestination;if(!f)switch(window?.wp?.media?.view?.settings?.defaultProps?.link||ua){case"file":case ga:f=ga;break;case"post":case da:f=da;break;case fa:f=fa;break;case ua:f=ua}switch(f){case ga:d=e.url;break;case da:d=e.link}i.href=d,t({...i,...l,linkDestination:f,general_image:{...A,image:g}})}function J(e){e!==k&&t({url:e,id:void 0})}let Y=((e,a)=>!e&&(0,u.isBlobURL)(a))(_,k);(0,l.useEffect)((()=>{if(!Y)return;const e=(0,u.getBlobByURL)(k);e&&U({filesList:[e],onFileChange:([e])=>{Z(e)},allowedTypes:ha,onError:e=>{Y=!1,K(e)}})}),[]),(0,l.useEffect)((()=>{Y?F(k):(0,u.revokeBlobURL)($||"")}),[Y,k]);const Q=Mr(_,k)?k:void 0,X=k?(0,l.createElement)("img",{alt:(0,w.__)("Edit image"),title:(0,w.__)("Edit image"),className:"edit-image-preview",src:k}):null,{currentDeviceValue:ee}=Ve(O.alignment,H),ae=s()(r,{[`align${ee}`]:ee,"is-transient":$}),te=(0,f.useBlockProps)({ref:G,className:ae}),le=te.id;(0,l.useEffect)((()=>{t({uniqueId:Ir(le)})}),[le]);const ie=(0,l.useCallback)((()=>({uniqueId:T,advance_responsiveCondition:S,advance_zIndex:C,general_settings:O,general_image:A,style_image:D,style_overlay:L,style_caption:P,style_dimension:B})),[T,S,C,O,A,D,L,P,B]);return(0,l.createElement)(la,{uniqueKey:b},(0,l.createElement)("div",{...te,className:`${te?.className} wcb-image__wrap wcb-image__wrap--${O.layout} ${T}`,"data-uniqueid":T},(0,l.createElement)("figure",{className:"wcb-image__wrap-figure is-selected"},(0,l.createElement)(aa,{...ie()}),(0,l.createElement)(l.Fragment,null,($||k)&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Sr,{className:"wcb-image__image",temporaryURL:$||"",attributes:a,setAttributes:t,isSelected:i,insertBlocksAfter:n,onReplace:c,onSelectImage:Z,onSelectURL:J,onUploadError:K,containerRef:G,context:g,clientId:b,isContentLocked:W}),"overlay"===O.layout&&(()=>{const e={heading:"Title of content",subHeading:"Description of content",styles_separator:{...xr,width:{Desktop:"20%"},border:{...di,color:"#334155"}},general_content:{...Cr,textAlignment:{Desktop:"center"},showSeparator:!0,showSubHeading:!0,headingTag:"h3"},styles_dimensions:{...Er,dimension:{...Er.dimension,margin:{Desktop:{bottom:"1rem",top:"1rem",left:"1rem",right:"1rem"}}}}};return(0,l.createElement)("div",{className:"wcb-image__overlay-wrap"},(0,l.createElement)("div",{className:"wcb-image__overlay-bg"},(0,l.createElement)("div",{className:"wcb-image__overlay-content"},(0,l.createElement)(f.InnerBlocks,{allowedBlocks:[],template:[["boostify-blocks/heading",e]]}))))})()),(0,l.createElement)(f.MediaPlaceholder,{icon:(0,l.createElement)(f.BlockIcon,{icon:p}),onSelect:Z,onSelectURL:J,onError:K,placeholder:Rr,accept:"image/*",allowedTypes:ha,value:{id:_,src:Q},mediaPreview:X||void 0,disableMediaButtons:$||k})))))},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,alt:r,caption:n,href:c,id:u,linkClass:g,linkDestination:d,linkTarget:h,rel:b,title:p,url:m,general_settings:w,general_image:k,style_image:v,style_overlay:y,style_caption:_,style_dimension:S}=e,C={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_settings:{...w,height:"object"!=typeof w.height||Array.isArray(w.height)?{Desktop:void 0}:w.height,width:"object"!=typeof w.width||Array.isArray(w.width)?{Desktop:void 0}:w.width},style_image:v,style_overlay:y,style_caption:_,style_dimension:S,general_image:k},{currentDeviceValue:E}=Ve(w.alignment,"Desktop"),{currentDeviceValue:x}=Ve(w.width,"Desktop"),{currentDeviceValue:I}=Ve(w.height,"Desktop"),R=(0,o.isEmpty)(b)?void 0:b,M=(0,f.__experimentalGetBorderClassesAndStyles)(e),N=s()({[`align${E}`]:E}),T=s()(M.className,{[`wp-image-${u}`]:!!u}),O=(0,l.createElement)("img",{src:m,alt:r||"",className:T||void 0,style:M.style,width:x,height:I,title:p}),A=(0,l.createElement)(l.Fragment,null,(0,l.createElement)("figure",{className:"wcb-image__wrap-figure"},c?(0,l.createElement)("a",{className:g,href:c,target:h,rel:R},O):O,(0,l.createElement)(f.RichText.Content,{className:(0,f.__experimentalGetElementClassName)("caption"),tagName:"figcaption",value:n||""}),"overlay"===w.layout&&(0,l.createElement)("div",{className:"wcb-image__overlay-wrap"},(0,l.createElement)("div",{className:"wcb-image__overlay-bg"},(0,l.createElement)("div",{className:"wcb-image__overlay-content"},(0,l.createElement)(f.InnerBlocks.Content,null)))))),D=f.useBlockProps.save({className:`woostify-container wcb-image__wrap wcb-image__wrap--${w.layout} ${N}`.trim(),style:{display:"flex",justifyContent:e.general_settings?.alignment?.Desktop}});return(0,l.createElement)(Nr,{...D,attributes:C,uniqueId:a,HtmlTag:"div"},A)},attributes:Or,deprecated:Dr,example:function(e){let a={};for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t].default);return a}(Or),icon:(0,l.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))})},7500:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"}))}));e.exports=i},8026:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"}))}));e.exports=i},8156:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8477:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}))}));e.exports=i},8698:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"}))}));e.exports=i}},t={};function l(e){var i=t[e];if(void 0!==i)return i.exports;var r=t[e]={exports:{}};return a[e](r,r.exports,l),r.exports}l.m=a,e=[],l.O=(a,t,i,r)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){for(var[t,i,r]=e[u],s=!0,o=0;o<t.length;o++)(!1&r||n>=r)&&Object.keys(l.O).every((e=>l.O[e](t[o])))?t.splice(o--,1):(s=!1,r<n&&(n=r));if(s){e.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,i,r]},l.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return l.d(a,{a}),a},l.d=(e,a)=>{for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={2647:0,7055:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var i,r,[n,s,o]=t,c=0;if(n.some((a=>0!==e[a]))){for(i in s)l.o(s,i)&&(l.m[i]=s[i]);if(o)var u=o(l)}for(a&&a(t);c<n.length;c++)r=n[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},t=globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var i=l.O(void 0,[7055],(()=>l(6736)));i=l.O(i)})();