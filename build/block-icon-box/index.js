(()=>{var e,a={826:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"}))}));e.exports=i},1070:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))}));e.exports=i},1609:e=>{"use strict";e.exports=window.React},2149:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}));e.exports=i},3072:(e,a)=>{"use strict";var t="function"==typeof Symbol&&Symbol.for,l=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,d=t?Symbol.for("react.forward_ref"):60112,f=t?Symbol.for("react.suspense"):60113,h=t?Symbol.for("react.suspense_list"):60120,p=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,m=t?Symbol.for("react.block"):60121,w=t?Symbol.for("react.fundamental"):60117,k=t?Symbol.for("react.responder"):60118,v=t?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var a=e.$$typeof;switch(a){case l:switch(e=e.type){case u:case g:case r:case o:case n:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case b:case p:case s:return e;default:return a}}case i:return a}}}function _(e){return y(e)===g}a.AsyncMode=u,a.ConcurrentMode=g,a.ContextConsumer=c,a.ContextProvider=s,a.Element=l,a.ForwardRef=d,a.Fragment=r,a.Lazy=b,a.Memo=p,a.Portal=i,a.Profiler=o,a.StrictMode=n,a.Suspense=f,a.isAsyncMode=function(e){return _(e)||y(e)===u},a.isConcurrentMode=_,a.isContextConsumer=function(e){return y(e)===c},a.isContextProvider=function(e){return y(e)===s},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},a.isForwardRef=function(e){return y(e)===d},a.isFragment=function(e){return y(e)===r},a.isLazy=function(e){return y(e)===b},a.isMemo=function(e){return y(e)===p},a.isPortal=function(e){return y(e)===i},a.isProfiler=function(e){return y(e)===o},a.isStrictMode=function(e){return y(e)===n},a.isSuspense=function(e){return y(e)===f},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===r||e===g||e===o||e===n||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===p||e.$$typeof===s||e.$$typeof===c||e.$$typeof===d||e.$$typeof===w||e.$$typeof===k||e.$$typeof===v||e.$$typeof===m)},a.typeOf=y},3404:(e,a,t)=>{"use strict";e.exports=t(3072)},4146:(e,a,t)=>{"use strict";var l=t(3404),i={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function s(e){return l.isMemo(e)?n:o[e.$$typeof]||i}o[l.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[l.Memo]=n;var c=Object.defineProperty,u=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(a,t,l){if("string"!=typeof t){if(h){var i=f(t);i&&i!==h&&e(a,i,l)}var n=u(t);g&&(n=n.concat(g(t)));for(var o=s(a),p=s(t),b=0;b<n.length;++b){var m=n[b];if(!(r[m]||l&&l[m]||p&&p[m]||o&&o[m])){var w=d(t,m);try{c(a,m,w)}catch(e){}}}}return a}},4545:(e,a,t)=>{"use strict";var l=t(1609),i=t.n(l);const r=window.wp.blocks,n=window.wp.i18n,o=window.wp.blockEditor,s=window.wp.components,c=[{name:"General",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 fill-none"},(0,l.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,n.__)("General","boostify-blocks")))},{name:"Styles",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 6H16.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 18H15.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 13.95L16.47 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 10H14.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M8.44 7H2.53",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),(0,l.createElement)("div",null,(0,n.__)("Styles","boostify-blocks")))},{name:"Advances",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,n.__)("Advances","boostify-blocks")))}],u=(0,l.memo)((({renderTabPanels:e,tabs:a=c,uniqueId:t="",tabDefaultActive:i="General",onChangeActive:r})=>{(0,l.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector(".components-panel__body.is-opened");e&&e.scrollIntoView({behavior:"smooth"})}),500)}),[]);const n=()=>{const e=document.querySelector(".components-panel__body.block-editor-block-inspector__advanced"),a=document.querySelector(".HOCInspectorControls__ative-tab"),t=!!a?.id.includes("-Advances");e&&(e.style.display=t?"block":"none")};return(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(s.TabPanel,{className:`wcb-inspectorControls__panel ${t}`,activeClass:"HOCInspectorControls__ative-tab active-tab",tabs:a,onSelect:e=>{r&&r(e),setTimeout((()=>{n()}),100)},initialTabName:i},(a=>(0,l.createElement)("div",{key:a.name,className:a.name},e(a)))),(t&&setTimeout((()=>{n()}),100),null))}));var g=function(){function e(e){var a=this;this._insertTag=function(e){var t;t=0===a.tags.length?a.insertionPoint?a.insertionPoint.nextSibling:a.prepend?a.container.firstChild:a.before:a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(e,t),a.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var a=e.prototype;return a.hydrate=function(e){e.forEach(this._insertTag)},a.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var a=document.createElement("style");return a.setAttribute("data-emotion",e.key),void 0!==e.nonce&&a.setAttribute("nonce",e.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===e)return document.styleSheets[a]}(a);try{t.insertRule(e,t.cssRules.length)}catch(e){}}else a.appendChild(document.createTextNode(e));this.ctr++},a.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),d=Math.abs,f=String.fromCharCode,h=Object.assign;function p(e){return e.trim()}function b(e,a,t){return e.replace(a,t)}function m(e,a){return e.indexOf(a)}function w(e,a){return 0|e.charCodeAt(a)}function k(e,a,t){return e.slice(a,t)}function v(e){return e.length}function y(e){return e.length}function _(e,a){return a.push(e),e}var x=1,S=1,C=0,E=0,I=0,T="";function N(e,a,t,l,i,r,n){return{value:e,root:a,parent:t,type:l,props:i,children:r,line:x,column:S,length:n,return:""}}function P(e,a){return h(N("",null,null,"",null,null,0),e,{length:-e.length},a)}function M(){return I=E>0?w(T,--E):0,S--,10===I&&(S=1,x--),I}function O(){return I=E<C?w(T,E++):0,S++,10===I&&(S=1,x++),I}function R(){return w(T,E)}function A(){return E}function D(e,a){return k(T,e,a)}function L(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function B(e){return x=S=1,C=v(T=e),E=0,[]}function F(e){return T="",e}function $(e){return p(D(E-1,z(91===e?e+2:40===e?e+1:e)))}function H(e){for(;(I=R())&&I<33;)O();return L(e)>2||L(I)>3?"":" "}function j(e,a){for(;--a&&O()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return D(e,A()+(a<6&&32==R()&&32==O()))}function z(e){for(;O();)switch(I){case e:return E;case 34:case 39:34!==e&&39!==e&&z(I);break;case 40:41===e&&z(e);break;case 92:O()}return E}function G(e,a){for(;O()&&e+I!==57&&(e+I!==84||47!==R()););return"/*"+D(a,E-1)+"*"+f(47===e?e:O())}function W(e){for(;!L(R());)O();return D(e,E)}var V="-ms-",U="-moz-",q="-webkit-",K="comm",J="rule",Z="decl",Y="@keyframes";function Q(e,a){for(var t="",l=y(e),i=0;i<l;i++)t+=a(e[i],i,e,a)||"";return t}function X(e,a,t,l){switch(e.type){case"@import":case Z:return e.return=e.return||e.value;case K:return"";case Y:return e.return=e.value+"{"+Q(e.children,l)+"}";case J:e.value=e.props.join(",")}return v(t=Q(e.children,l))?e.return=e.value+"{"+t+"}":""}function ee(e){return F(ae("",null,null,null,[""],e=B(e),0,[0],e))}function ae(e,a,t,l,i,r,n,o,s){for(var c=0,u=0,g=n,d=0,h=0,p=0,k=1,y=1,x=1,S=0,C="",E=i,I=r,T=l,N=C;y;)switch(p=S,S=O()){case 40:if(108!=p&&58==w(N,g-1)){-1!=m(N+=b($(S),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:N+=$(S);break;case 9:case 10:case 13:case 32:N+=H(p);break;case 92:N+=j(A()-1,7);continue;case 47:switch(R()){case 42:case 47:_(le(G(O(),A()),a,t),s);break;default:N+="/"}break;case 123*k:o[c++]=v(N)*x;case 125*k:case 59:case 0:switch(S){case 0:case 125:y=0;case 59+u:h>0&&v(N)-g&&_(h>32?ie(N+";",l,t,g-1):ie(b(N," ","")+";",l,t,g-2),s);break;case 59:N+=";";default:if(_(T=te(N,a,t,c,u,i,o,C,E=[],I=[],g),r),123===S)if(0===u)ae(N,a,T,T,E,r,g,o,I);else switch(99===d&&110===w(N,3)?100:d){case 100:case 109:case 115:ae(e,T,T,l&&_(te(e,T,T,0,0,i,o,C,i,E=[],g),I),i,I,g,o,l?E:I);break;default:ae(N,T,T,T,[""],I,0,o,I)}}c=u=h=0,k=x=1,C=N="",g=n;break;case 58:g=1+v(N),h=p;default:if(k<1)if(123==S)--k;else if(125==S&&0==k++&&125==M())continue;switch(N+=f(S),S*k){case 38:x=u>0?1:(N+="\f",-1);break;case 44:o[c++]=(v(N)-1)*x,x=1;break;case 64:45===R()&&(N+=$(O())),d=R(),u=g=v(C=N+=W(A())),S++;break;case 45:45===p&&2==v(N)&&(k=0)}}return r}function te(e,a,t,l,i,r,n,o,s,c,u){for(var g=i-1,f=0===i?r:[""],h=y(f),m=0,w=0,v=0;m<l;++m)for(var _=0,x=k(e,g+1,g=d(w=n[m])),S=e;_<h;++_)(S=p(w>0?f[_]+" "+x:b(x,/&\f/g,f[_])))&&(s[v++]=S);return N(e,a,t,0===i?J:o,s,c,u)}function le(e,a,t){return N(e,a,t,K,f(I),k(e,2,-2),0)}function ie(e,a,t,l){return N(e,a,t,Z,k(e,0,l),k(e,l+1,-1),l)}var re=function(e,a,t){for(var l=0,i=0;l=i,i=R(),38===l&&12===i&&(a[t]=1),!L(i);)O();return D(e,E)},ne=new WeakMap,oe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var a=e.value,t=e.parent,l=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===a.charCodeAt(0)||ne.get(t))&&!l){ne.set(e,!0);for(var i=[],r=function(e,a){return F(function(e,a){var t=-1,l=44;do{switch(L(l)){case 0:38===l&&12===R()&&(a[t]=1),e[t]+=re(E-1,a,t);break;case 2:e[t]+=$(l);break;case 4:if(44===l){e[++t]=58===R()?"&\f":"",a[t]=e[t].length;break}default:e[t]+=f(l)}}while(l=O());return e}(B(e),a))}(a,i),n=t.props,o=0,s=0;o<r.length;o++)for(var c=0;c<n.length;c++,s++)e.props[s]=i[o]?r[o].replace(/&\f/g,n[c]):n[c]+" "+r[o]}}},se=function(e){if("decl"===e.type){var a=e.value;108===a.charCodeAt(0)&&98===a.charCodeAt(2)&&(e.return="",e.value="")}};function ce(e,a){switch(function(e,a){return 45^w(e,0)?(((a<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}(e,a)){case 5103:return q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return q+e+U+e+V+e+e;case 6828:case 4268:return q+e+V+e+e;case 6165:return q+e+V+"flex-"+e+e;case 5187:return q+e+b(e,/(\w+).+(:[^]+)/,q+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return q+e+V+"flex-item-"+b(e,/flex-|-self/,"")+e;case 4675:return q+e+V+"flex-line-pack"+b(e,/align-content|flex-|-self/,"")+e;case 5548:return q+e+V+b(e,"shrink","negative")+e;case 5292:return q+e+V+b(e,"basis","preferred-size")+e;case 6060:return q+"box-"+b(e,"-grow","")+q+e+V+b(e,"grow","positive")+e;case 4554:return q+b(e,/([^-])(transform)/g,"$1"+q+"$2")+e;case 6187:return b(b(b(e,/(zoom-|grab)/,q+"$1"),/(image-set)/,q+"$1"),e,"")+e;case 5495:case 3959:return b(e,/(image-set\([^]*)/,q+"$1$`$1");case 4968:return b(b(e,/(.+:)(flex-)?(.*)/,q+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+q+e+e;case 4095:case 3583:case 4068:case 2532:return b(e,/(.+)-inline(.+)/,q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(v(e)-1-a>6)switch(w(e,a+1)){case 109:if(45!==w(e,a+4))break;case 102:return b(e,/(.+:)(.+)-([^]+)/,"$1"+q+"$2-$3$1"+U+(108==w(e,a+3)?"$3":"$2-$3"))+e;case 115:return~m(e,"stretch")?ce(b(e,"stretch","fill-available"),a)+e:e}break;case 4949:if(115!==w(e,a+1))break;case 6444:switch(w(e,v(e)-3-(~m(e,"!important")&&10))){case 107:return b(e,":",":"+q)+e;case 101:return b(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+q+(45===w(e,14)?"inline-":"")+"box$3$1"+q+"$2$3$1"+V+"$2box$3")+e}break;case 5936:switch(w(e,a+11)){case 114:return q+e+V+b(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return q+e+V+b(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return q+e+V+b(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return q+e+V+e+e}return e}var ue=[function(e,a,t,l){if(e.length>-1&&!e.return)switch(e.type){case Z:e.return=ce(e.value,e.length);break;case Y:return Q([P(e,{value:b(e.value,"@","@"+q)})],l);case J:if(e.length)return function(e,a){return e.map(a).join("")}(e.props,(function(a){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(a)){case":read-only":case":read-write":return Q([P(e,{props:[b(a,/:(read-\w+)/,":-moz-$1")]})],l);case"::placeholder":return Q([P(e,{props:[b(a,/:(plac\w+)/,":"+q+"input-$1")]}),P(e,{props:[b(a,/:(plac\w+)/,":-moz-$1")]}),P(e,{props:[b(a,/:(plac\w+)/,V+"input-$1")]})],l)}return""}))}}];const ge=function(e){var a=e.key;if("css"===a){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var l,i,r=e.stylisPlugins||ue,n={},o=[];l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),(function(e){for(var a=e.getAttribute("data-emotion").split(" "),t=1;t<a.length;t++)n[a[t]]=!0;o.push(e)}));var s,c,u,d,f=[X,(d=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],h=(c=[oe,se].concat(r,f),u=y(c),function(e,a,t,l){for(var i="",r=0;r<u;r++)i+=c[r](e,a,t,l)||"";return i});i=function(e,a,t,l){s=t,Q(ee(e?e+"{"+a.styles+"}":a.styles),h),l&&(p.inserted[a.name]=!0)};var p={key:a,sheet:new g({key:a,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:n,registered:{},insert:i};return p.sheet.hydrate(o),p},de=function(e){for(var a,t=0,l=0,i=e.length;i>=4;++l,i-=4)a=1540483477*(65535&(a=255&e.charCodeAt(l)|(255&e.charCodeAt(++l))<<8|(255&e.charCodeAt(++l))<<16|(255&e.charCodeAt(++l))<<24))+(59797*(a>>>16)<<16),t=1540483477*(65535&(a^=a>>>24))+(59797*(a>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(i){case 3:t^=(255&e.charCodeAt(l+2))<<16;case 2:t^=(255&e.charCodeAt(l+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(l)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},fe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var he=/[A-Z]|^ms/g,pe=/_EMO_([^_]+?)_([^]*?)_EMO_/g,be=function(e){return 45===e.charCodeAt(1)},me=function(e){return null!=e&&"boolean"!=typeof e},we=function(){var e=Object.create(null);return function(a){return void 0===e[a]&&(e[a]=be(t=a)?t:t.replace(he,"-$&").toLowerCase()),e[a];var t}}(),ke=function(e,a){switch(e){case"animation":case"animationName":if("string"==typeof a)return a.replace(pe,(function(e,a,t){return ye={name:a,styles:t,next:ye},a}))}return 1===fe[e]||be(e)||"number"!=typeof a||0===a?a:a+"px"};function ve(e,a,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return ye={name:t.name,styles:t.styles,next:ye},t.name;if(void 0!==t.styles){var l=t.next;if(void 0!==l)for(;void 0!==l;)ye={name:l.name,styles:l.styles,next:ye},l=l.next;return t.styles+";"}return function(e,a,t){var l="";if(Array.isArray(t))for(var i=0;i<t.length;i++)l+=ve(e,a,t[i])+";";else for(var r in t){var n=t[r];if("object"!=typeof n)null!=a&&void 0!==a[n]?l+=r+"{"+a[n]+"}":me(n)&&(l+=we(r)+":"+ke(r,n)+";");else if(!Array.isArray(n)||"string"!=typeof n[0]||null!=a&&void 0!==a[n[0]]){var o=ve(e,a,n);switch(r){case"animation":case"animationName":l+=we(r)+":"+o+";";break;default:l+=r+"{"+o+"}"}}else for(var s=0;s<n.length;s++)me(n[s])&&(l+=we(r)+":"+ke(r,n[s])+";")}return l}(e,a,t);case"function":if(void 0!==e){var i=ye,r=t(e);return ye=i,ve(e,a,r)}}if(null==a)return t;var n=a[t];return void 0!==n?n:t}var ye,_e=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xe=function(e,a,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var l=!0,i="";ye=void 0;var r=e[0];null==r||void 0===r.raw?(l=!1,i+=ve(t,a,r)):i+=r[0];for(var n=1;n<e.length;n++)i+=ve(t,a,e[n]),l&&(i+=r[n]);_e.lastIndex=0;for(var o,s="";null!==(o=_e.exec(i));)s+="-"+o[1];return{name:de(i)+s,styles:i,next:ye}},Se=!!l.useInsertionEffect&&l.useInsertionEffect||l.useLayoutEffect,Ce=(0,l.createContext)("undefined"!=typeof HTMLElement?ge({key:"css"}):null),Ee=Ce.Provider,Ie=function(e){return(0,l.forwardRef)((function(a,t){var i=(0,l.useContext)(Ce);return e(a,i,t)}))},Te=(0,l.createContext)({});t(4146);var Ne=Ie((function(e,a){var t=e.styles,i=xe([t],void 0,(0,l.useContext)(Te)),r=(0,l.useRef)();return Se((function(){var e=a.key+"-global",t=new a.sheet.constructor({key:e,nonce:a.sheet.nonce,container:a.sheet.container,speedy:a.sheet.isSpeedy}),l=!1,n=document.querySelector('style[data-emotion="'+e+" "+i.name+'"]');return a.sheet.tags.length&&(t.before=a.sheet.tags[0]),null!==n&&(l=!0,n.setAttribute("data-emotion",e),t.hydrate([n])),r.current=[t,l],function(){t.flush()}}),[a]),Se((function(){var e=r.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==i.next&&function(e,a){!function(e,a){e.key,a.name}(e,a);var t=e.key+"-"+a.name;if(void 0===e.inserted[a.name]){var l=a;do{e.insert(a===l?"."+t:"",l,e.sheet,!0),l=l.next}while(void 0!==l)}}(a,i.next),t.tags.length){var l=t.tags[t.tags.length-1].nextElementSibling;t.before=l,t.flush()}a.insert("",i,t,!1)}}),[a,i.name]),null}));function Pe(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return xe(a)}window.jQuery;const Me={media_tablet:"768px",media_desktop:"1024px",reCAPTCHA_v3_secret_key:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",reCAPTCHA_v3_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",defaultContentWidth:window?.boostify_blocks_layout_global_settings?.contentSize||"",containerPadding:"10px",enableTemplatesButton:"true",enableCopyPasteStyles:"false",containerElementsGap:"10px",blocksEditorSpacing:"0px",buttonInheritFromTheme:"false",buttonTheme:{backgroundColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor||"#0073aa",backgroundColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover||"#3a3a3a",textColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor||"#ffffff",textColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover||"#ffffff",borderRadius:window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius||"50px"},...window.boostify_blocks_global_variables||{},defaultContentWidth:window.boostify_blocks_global_variables?.defaultContentWidth||window.boostify_blocks_layout_global_settings?.contentSize};var Oe;Oe=()=>{(e=>{const a=e?.blocksEditorSpacing,t=""==a?0:a,l=((e="0px")=>`\n  /* Desktop */\n  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper\n    > * + *:not(p),\n  .edit-post-visual-editor .editor-styles-wrapper\n    .block-editor-block-list__layout.is-root-container\n    > * + *:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-root-container.wp-site-blocks\n    > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-layout-constrained\n    > * + * {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  /* Tablet */\n  @media (max-width: 768px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n\n  /* Mobile */\n  @media (max-width: 480px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n`)("number"==typeof t?`${t}px`:t);let i=document.getElementById("wcb-blocks-editor-custom-style");i||(i=document.createElement("style"),i.id="wcb-blocks-editor-custom-style",document.head.appendChild(i)),i.textContent=l})(Me)},window.wp?.domReady&&window.wp.domReady(Oe);const Re=({mobile_v:e=null,tablet_v:a=null,desktop_v:t=null})=>{let l=a,i=t;return e===a&&a===t?{mobile_v:e,tablet_v:null,desktop_v:null}:(t!==a&&t!==e||(i=null),a===e&&(l=null),{mobile_v:null!=e?e:null,tablet_v:null!=l?l:null,desktop_v:null!=i?i:null})},Ae=Pe`
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
`,De=({advance_motionEffect:e,advance_zIndex:a,advance_responsiveCondition:t,className:l,defaultDisplay:i})=>{const{media_desktop:r,media_tablet:n}=Me;try{if(e?.entranceAnimation){const a=document.querySelectorAll(l),t=new IntersectionObserver((a=>{a.forEach((a=>{if(a.isIntersecting){const l=a.target,i=/\banimate__\S+/g,r=l?.className.replace(i,"");l.setAttribute("class",r),setTimeout((()=>{l?.classList.add("animate__animated",`animate__${e?.entranceAnimation}`,`animate__${e?.animationDuration}`,`animate__delay-${e?.animationDelay}ms`,`animate__repeat-${e?.repeat}`)}),50),t.unobserve(l)}}))}),{threshold:.2});a.forEach((e=>t.observe(e)))}}catch(e){console.log("error, advance_motionEffect",e)}const{mobile_v:o,tablet_v:s,desktop_v:c}=Re({mobile_v:a?.Mobile||a?.Tablet||a?.Desktop,tablet_v:a?.Tablet||a?.Desktop,desktop_v:a?.Desktop}),u=e=>""===e?"":e?Ae:Pe`display: ${i};`;return Pe`
		${l} {
			visibility: visible;
			@media (min-width: ${r}) {
				z-index: ${c};
				${u(t?.isHiddenOnDesktop)}
			}

			@media (min-width: ${n}) and (max-width: ${r}) {
				z-index: ${s};
				${u(t?.isHiddenOnTablet)}
			}

			@media (max-width: ${n}) {
				z-index: ${o};
				${u(t?.isHiddenOnMobile)}
			}
		}
<<<<<<< HEAD
	`;
};

/***/ }),

/***/ "./src/block-icon-box/Edit.tsx":
/*!*************************************!*\
  !*** ./src/block-icon-box/Edit.tsx ***!
  \*************************************/
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
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _GlobalCss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalCss */ "./src/block-icon-box/GlobalCss.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block-icon-box/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AdvancePanelCommon */ "./src/components/AdvancePanelCommon.tsx");
/* harmony import */ var _WcbIconBoxPanelLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WcbIconBoxPanelLayout */ "./src/block-icon-box/WcbIconBoxPanelLayout.tsx");
/* harmony import */ var _WcbIconBoxPanelIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WcbIconBoxPanelIcon */ "./src/block-icon-box/WcbIconBoxPanelIcon.tsx");
/* harmony import */ var _components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/MyCacheProvider */ "./src/components/MyCacheProvider.tsx");
/* harmony import */ var _WcbTeamPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WcbTeamPanel_StyleTitle */ "./src/block-icon-box/WcbTeamPanel_StyleTitle.tsx");
/* harmony import */ var _WcbTeamPanel_StyleDesignation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WcbTeamPanel_StyleDesignation */ "./src/block-icon-box/WcbTeamPanel_StyleDesignation.tsx");
/* harmony import */ var _WcbTeamPanel_StyleDescription__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WcbTeamPanel_StyleDescription */ "./src/block-icon-box/WcbTeamPanel_StyleDescription.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleIcons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleIcons */ "./src/block-icon-box/WcbIconBoxPanel_StyleIcons.tsx");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleSeparator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleSeparator */ "./src/block-icon-box/WcbIconBoxPanel_StyleSeparator.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleDimension__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleDimension */ "./src/block-icon-box/WcbIconBoxPanel_StyleDimension.tsx");
/* harmony import */ var _WcbIconBoxPanelSeparator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WcbIconBoxPanelSeparator */ "./src/block-icon-box/WcbIconBoxPanelSeparator.tsx");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");





















const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    advance_responsiveCondition,
    advance_zIndex,
    heading,
    description,
    designation,
    uniqueId,
    general_layout,
    general_icon,
    style_title,
    style_desination,
    style_description,
    style_Icon,
    style_separator,
    style_dimension,
    general_separator,
    advance_motionEffect
  } = attributes;
  //  COMMON HOOKS
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // const { myCache, ref } = useCreateCacheEmotion();
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    ref
  });
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_6__["default"])(uniqueId);

  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_19__["default"])(UNIQUE_ID)
    });
  }, [UNIQUE_ID]);
  //
  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanelLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onToggle: () => handleTogglePanel("General", "Layout", true),
          initialOpen: tabGeneralIsPanelOpen === "Layout" || tabGeneralIsPanelOpen === "first",
          opened: tabGeneralIsPanelOpen === "Layout" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_layout: data
            });
          },
          panelData: general_layout
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanelIcon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          onToggle: () => handleTogglePanel("General", "Icon"),
          initialOpen: tabGeneralIsPanelOpen === "Icon",
          opened: tabGeneralIsPanelOpen === "Icon" || undefined
          //
          ,
          setAttr__: data => {
            if (data.iconPosition === "leftOfTitle" || data.iconPosition === "left") {
              return setAttributes({
                general_icon: data,
                general_separator: {
                  ...general_separator,
                  position: "afterTitle"
                },
                general_layout: {
                  ...general_layout,
                  textAlignment: {
                    Desktop: "left",
                    Tablet: "left",
                    Mobile: "left"
                  }
                },
                style_Icon: {
                  ...style_Icon
                }
              });
            }
            if (data.iconPosition === "rightOfTitle" || data.iconPosition === "right") {
              return setAttributes({
                general_icon: data,
                general_separator: {
                  ...general_separator,
                  position: "afterTitle"
                },
                general_layout: {
                  ...general_layout,
                  textAlignment: {
                    Desktop: "right",
                    Tablet: "right",
                    Mobile: "right"
                  }
                },
                style_Icon: {
                  ...style_Icon
                }
              });
            }
            return setAttributes({
              general_icon: data,
              style_Icon: {
                ...style_Icon
              }
            });
          },
          panelData: general_icon
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanelSeparator__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onToggle: () => handleTogglePanel("General", "Separator"),
          initialOpen: tabGeneralIsPanelOpen === "Separator",
          opened: tabGeneralIsPanelOpen === "Separator" || undefined
          //
          ,
          showOptionAfterIcon: general_icon.iconPosition === "top" || general_icon.iconPosition === "bellowTitle",
          setAttr__: data => {
            if (data.position === "afterIcon" && general_icon.iconPosition !== "top" && general_icon.iconPosition !== "bellowTitle") {
              return setAttributes({
                general_separator: {
                  ...general_separator,
                  position: "afterTitle"
                }
              });
            }
            return setAttributes({
              general_separator: data
            });
          },
          panelData: general_separator
        }));
      case "Styles":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_icon.enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanel_StyleIcons__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleIcons"),
          initialOpen: tabStylesIsPanelOpen === "_StyleIcons",
          opened: tabStylesIsPanelOpen === "_StyleIcons" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_Icon: data
            });
          },
          panelData: style_Icon
        }), general_layout.enablePrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbTeamPanel_StyleDesignation__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleDesignation"),
          initialOpen: tabStylesIsPanelOpen === "_StyleDesignation",
          opened: tabStylesIsPanelOpen === "_StyleDesignation" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_desination: data
            });
          },
          panelData: style_desination
        }), general_layout.enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbTeamPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleTitle", true),
          initialOpen: tabStylesIsPanelOpen === "_StyleTitle" || tabStylesIsPanelOpen === "first",
          opened: tabStylesIsPanelOpen === "_StyleTitle" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_title: data
            });
          },
          panelData: style_title
        }), general_separator.enableSeparator && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanel_StyleSeparator__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleSeparator"),
          initialOpen: tabStylesIsPanelOpen === "_StyleSeparator",
          opened: tabStylesIsPanelOpen === "_StyleSeparator" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_separator: data
            });
          },
          panelData: style_separator
        }), general_layout.enableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbTeamPanel_StyleDescription__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleDescription"),
          initialOpen: tabStylesIsPanelOpen === "_StyleDescription",
          opened: tabStylesIsPanelOpen === "_StyleDescription" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_description: data
            });
          },
          panelData: style_description
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbIconBoxPanel_StyleDimension__WEBPACK_IMPORTED_MODULE_17__["default"], {
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
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_7__["default"], {
          advance_motionEffect: advance_motionEffect,
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
  const WcbAttrsForSave = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    return {
      uniqueId,
      advance_responsiveCondition,
      advance_zIndex,
      general_layout,
      style_title,
      style_desination,
      style_description,
      style_Icon,
      style_separator,
      style_dimension,
      general_icon,
      general_separator,
      advance_motionEffect
    };
  }, [uniqueId, advance_responsiveCondition, advance_zIndex, general_layout, style_title, style_desination, style_description, style_Icon, style_separator, style_dimension, general_icon, general_separator, advance_motionEffect]);
  const renderIcon = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_icon.enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_15__["default"], {
      icon: general_icon.icon
    }))), general_separator.position === "afterIcon" && renderSeparator());
  };
  const renderSeparator = () => {
    if (!general_separator.enableSeparator) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator"
    }));
  };
  const HeadingTag = general_layout.headingTag;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    uniqueKey: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...wrapBlockProps,
    className: `${wrapBlockProps?.className} wcb-icon-box__wrap ${uniqueId}`,
    "data-uniqueid": uniqueId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderTabPanels: renderTabBodyPanels,
    uniqueId: uniqueId
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GlobalCss__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...WcbAttrsForSave()
  }), (general_icon.iconPosition === "top" || general_icon.iconPosition === "left") && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title-wrap"
  }, general_icon.iconPosition === "leftOfTitle" && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title"
  }, general_layout.enablePrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: designation,
    allowedFormats: [],
    onChange: content => setAttributes({
      designation: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Write a Prefix"),
    className: "wcb-icon-box__designation"
  }), general_separator.position === "afterPrefix" && renderSeparator(), general_layout.enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: HeadingTag,
    value: heading,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      heading: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading of box"),
    className: "wcb-icon-box__heading"
  })), (general_icon.iconPosition === "rightOfTitle" || general_icon.iconPosition === "bellowTitle") && renderIcon()), general_separator.position === "afterTitle" && renderSeparator(), general_layout.enableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "div",
    value: description,
    allowedFormats: ["core/bold", "core/italic"],
    onChange: content => setAttributes({
      description: content
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description of box ..."),
    className: "wcb-icon-box__description"
  }), general_separator.position === "afterDescription" && renderSeparator(), general_layout.enableCTAButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, {
    allowedBlocks: [],
    template: [["boostify-blocks/button", {}]]
  })), general_icon.iconPosition === "right" && renderIcon()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/block-icon-box/GlobalCss.tsx":
/*!******************************************!*\
  !*** ./src/block-icon-box/GlobalCss.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var _block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-container/getAdvanveStyles */ "./src/block-container/getAdvanveStyles.ts");
/* harmony import */ var _utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getBorderStyles */ "./src/utils/getBorderStyles.ts");
/* harmony import */ var _utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getPaddingMarginStyles */ "./src/utils/getPaddingMarginStyles.ts");
/* harmony import */ var _utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getStyleObjectFromResponsiveAttr */ "./src/utils/getStyleObjectFromResponsiveAttr.ts");
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../________ */ "./src/________.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    //
    advance_responsiveCondition,
    advance_zIndex,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_6__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    return [(0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: WRAP_CLASSNAME,
      value: general_layout.textAlignment,
      prefix: "textAlign"
    }), {
      [`${WRAP_CLASSNAME}`]: {
        display: general_icon.iconPosition === "left" || general_icon.iconPosition === "right" ? "flex" : "block",
        flexDirection: general_icon.stackOn === "mobile" || general_icon.stackOn === "tablet" ? general_icon.iconPosition === "right" ? "column-reverse" : "column" : undefined,
        ".wcb-icon-box__icon-wrap, .wcb-icon-box__content": {
          alignSelf: general_icon.verticalAlignment === "middle" ? "center" : undefined
        },
        ".wcb-icon-box__content-title-wrap": {
          display: general_icon.iconPosition === "leftOfTitle" || general_icon.iconPosition === "rightOfTitle" ? "flex" : "block"
        },
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: general_icon.stackOn === "mobile" ? "row" : undefined
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: "row"
        }
      }
    }];
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: WRAP_CLASSNAME,
      margin: style_dimension.margin,
      padding: style_dimension.padding
    })
  }), general_icon.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
      margin: style_Icon.dimensions.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
      padding: style_Icon.dimensions.padding
    }), (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: style_Icon.border,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon`,
      isWithRadius: true
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-full`,
      value: style_Icon.iconSize,
      prefix: "width",
      prefix_2: "fontSize"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-full`]: {
        color: style_Icon.color,
        ":hover": {
          color: style_Icon.hoverColor
        }
      }
    }]
  }) : null, general_layout.enablePrefix ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_desination.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__designation`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__designation`,
      value: style_desination.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__designation`]: {
        color: style_desination.textColor
      }
    }]
  }) : null, general_layout.enableTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_title.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__heading`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__heading`,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__heading`]: {
        color: style_title.textColor
      }
    }]
  }) : null, general_separator.enableSeparator ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      border: {
        mainSettings: style_separator.border
      },
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`,
      value: style_separator.width,
      prefix: "width"
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__separator`,
      value: style_separator.marginBottom,
      prefix: "marginBottom"
    })]
  }) : null, general_layout.enableDescription ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_description.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__description`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__description`,
      value: style_description.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__description`]: {
        color: style_description.textColor
      }
    }]
  }) : null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_responsiveCondition,
      advance_motionEffect,
      advance_zIndex,
      className: WRAP_CLASSNAME
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-icon-box/Save.tsx":
/*!*************************************!*\
  !*** ./src/block-icon-box/Save.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-icon-box/style.scss");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");








function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    heading,
    description,
    designation,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  };
  //

  const renderIcon = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_icon.enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: general_icon.icon
    }))), general_separator.position === "afterIcon" && renderSeparator());
  };
  const renderSeparator = () => {
    if (!general_separator.enableSeparator) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator"
    }));
  };
  const HeadingTag = general_layout.headingTag;

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "wcb-icon-box__wrap"
  });
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId
  }, (general_icon.iconPosition === "top" || general_icon.iconPosition === "left") && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title-wrap"
  }, general_icon.iconPosition === "leftOfTitle" && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title"
  }, general_layout.enablePrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: designation,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Designation..."),
    className: "wcb-icon-box__designation"
  }), general_separator.position === "afterPrefix" && renderSeparator(), general_layout.enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: HeadingTag,
    value: heading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading..."),
    className: "wcb-icon-box__heading"
  })), (general_icon.iconPosition === "rightOfTitle" || general_icon.iconPosition === "bellowTitle") && renderIcon()), general_separator.position === "afterTitle" && renderSeparator(), general_layout.enableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: description,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description..."),
    className: "wcb-icon-box__description"
  }), general_separator.position === "afterDescription" && renderSeparator(), general_layout.enableCTAButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), general_icon.iconPosition === "right" && renderIcon());
}

/***/ }),

/***/ "./src/block-icon-box/Save__100623.tsx":
/*!*********************************************!*\
  !*** ./src/block-icon-box/Save__100623.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-icon-box/style.scss");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");








function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    heading,
    description,
    designation,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator,
    advance_motionEffect
  };
  //

  const renderIcon = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_icon.enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: general_icon.icon
    }))), general_separator.position === "afterIcon" && renderSeparator());
  };
  const renderSeparator = () => {
    if (!general_separator.enableSeparator) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator"
    }));
  };
  const HeadingTag = general_layout.headingTag;

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "wcb-icon-box__wrap"
  });
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId
  }, (general_icon.iconPosition === "top" || general_icon.iconPosition === "left") && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title-wrap"
  }, general_icon.iconPosition === "leftOfTitle" && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title"
  }, general_layout.enablePrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: designation,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Designation..."),
    className: "wcb-icon-box__designation"
  }), general_separator.position === "afterPrefix" && renderSeparator(), general_layout.enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: HeadingTag,
    value: heading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading..."),
    className: "wcb-icon-box__heading"
  })), (general_icon.iconPosition === "rightOfTitle" || general_icon.iconPosition === "bellowTitle") && renderIcon()), general_separator.position === "afterTitle" && renderSeparator(), general_layout.enableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: description,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description..."),
    className: "wcb-icon-box__description"
  }), general_separator.position === "afterDescription" && renderSeparator(), general_layout.enableCTAButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), general_icon.iconPosition === "right" && renderIcon());
}

/***/ }),

/***/ "./src/block-icon-box/Save__260523.tsx":
/*!*********************************************!*\
  !*** ./src/block-icon-box/Save__260523.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/block-icon-box/style.scss");
/* harmony import */ var _components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyIconFull */ "./src/components/controls/MyIconFull.tsx");








function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    heading,
    description,
    designation,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    general_icon,
    style_dimension,
    style_separator,
    general_separator
  };
  //

  const renderIcon = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, general_icon.enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyIconFull__WEBPACK_IMPORTED_MODULE_5__["default"], {
      icon: general_icon.icon
    }))), general_separator.position === "afterIcon" && renderSeparator());
  };
  const renderSeparator = () => {
    if (!general_separator.enableSeparator) {
      return null;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator-wrap"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wcb-icon-box__separator"
    }));
  };
  const HeadingTag = general_layout.headingTag;

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "wcb-icon-box__wrap"
  });
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_3__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId
  }, (general_icon.iconPosition === "top" || general_icon.iconPosition === "left") && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title-wrap"
  }, general_icon.iconPosition === "leftOfTitle" && renderIcon(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-icon-box__content-title"
  }, general_layout.enablePrefix && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: designation,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Designation..."),
    className: "wcb-icon-box__designation"
  }), general_separator.position === "afterPrefix" && renderSeparator(), general_layout.enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: HeadingTag,
    value: heading,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Heading..."),
    className: "wcb-icon-box__heading"
  })), (general_icon.iconPosition === "rightOfTitle" || general_icon.iconPosition === "bellowTitle") && renderIcon()), general_separator.position === "afterTitle" && renderSeparator(), general_layout.enableDescription && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: description,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description..."),
    className: "wcb-icon-box__description"
  }), general_separator.position === "afterDescription" && renderSeparator(), general_layout.enableCTAButton && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), general_icon.iconPosition === "right" && renderIcon());
}

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanelIcon.tsx":
/*!****************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanelIcon.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_ICON_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_ICON_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/SelectIcon/SelecIcon */ "./src/components/controls/SelectIcon/SelecIcon.tsx");






const WCB_ICON_BOX_PANEL_ICON_DEMO = {
  enableIcon: true,
  iconPosition: "top",
  stackOn: "none",
  verticalAlignment: "top",
  icon: {
    ..._components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_MY_ICON,
    iconName: "lni-checkmark-circle"
  }
};
const WcbIconBoxPanelIcon = ({
  panelData = WCB_ICON_BOX_PANEL_ICON_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    enableIcon,
    icon,
    iconPosition,
    stackOn,
    verticalAlignment
  } = panelData;
  //
  const PLANS_DEMO = [{
    value: "top",
    label: "Top"
  }, {
    value: "left",
    label: "Left"
  }, {
    value: "right",
    label: "Right"
  }, {
    value: "leftOfTitle",
    label: "Left Of Title"
  }, {
    value: "rightOfTitle",
    label: "Right Of Title"
  }, {
    value: "bellowTitle",
    label: "Bellow Title"
  }];
  const STACK_ON_DEMO = [{
    value: "none",
    label: "None"
  }, {
    value: "tablet",
    label: "Tablet"
  }, {
    value: "mobile",
    label: "Mobile"
  }];
  const VERTICAL_DEMO = [{
    value: "top",
    label: "Top"
  }, {
    value: "middle",
    label: "Middle"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable Icon", "boostify-blocks"),
    checked: enableIcon,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableIcon: checked
      });
    }
  }), enableIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    iconData: icon,
    onChange: value => {
      setAttr__({
        ...panelData,
        icon: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", "boostify-blocks"),
    options: PLANS_DEMO,
    value: iconPosition,
    onChange: value => {
      let newData = {
        ...panelData,
        iconPosition: value
      };
      if (iconPosition !== "left" && iconPosition !== "right") {
        newData = {
          ...panelData,
          iconPosition: value,
          stackOn: "none"
        };
      }
      setAttr__(newData);
    }
  }), (iconPosition === "left" || iconPosition === "right") && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Stack On", "boostify-blocks"),
    options: STACK_ON_DEMO,
    value: stackOn,
    onChange: value => {
      setAttr__({
        ...panelData,
        stackOn: value
      });
    }
  }), (iconPosition === "left" || iconPosition === "right" || iconPosition === "leftOfTitle" || iconPosition === "rightOfTitle") && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Vertical Alignment", "boostify-blocks"),
    options: VERTICAL_DEMO,
    value: verticalAlignment,
    onChange: value => {
      setAttr__({
        ...panelData,
        verticalAlignment: value
      });
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanelIcon);

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanelLayout.tsx":
/*!******************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanelLayout.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_LAYOUT_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_LAYOUT_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyHeadingTagControl/MyHeadingTagControl */ "./src/components/controls/MyHeadingTagControl/MyHeadingTagControl.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");








const WCB_ICON_BOX_PANEL_LAYOUT_DEMO = {
  textAlignment: {
    Desktop: "center"
  },
  headingTag: "h4",
  enableDescription: true,
  enablePrefix: false,
  enableTitle: true,
  enableCTAButton: false
};
const WcbIconBoxPanelLayout = ({
  panelData = WCB_ICON_BOX_PANEL_LAYOUT_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    textAlignment,
    headingTag,
    enableDescription,
    enablePrefix,
    enableTitle,
    enableCTAButton
  } = panelData;
  const {
    currentDeviceValue: TEXT_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(textAlignment, deviceType);

  //
  const handleChangeTextAlignment = selected => {
    setAttr__({
      ...panelData,
      textAlignment: {
        ...textAlignment,
        [deviceType]: selected
      }
    });
  };
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    textAlignment: TEXT_ALIGNMENT,
    onChange: handleChangeTextAlignment
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable prefix", "boostify-blocks"),
    checked: enablePrefix,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enablePrefix: checked
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable title", "boostify-blocks"),
    checked: enableTitle,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableTitle: checked
      });
    }
  }), enableTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyHeadingTagControl_MyHeadingTagControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tag: headingTag,
    onChange: value => {
      setAttr__({
        ...panelData,
        headingTag: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable description", "boostify-blocks"),
    checked: enableDescription,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableDescription: checked
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable CTA button", "boostify-blocks"),
    checked: enableCTAButton,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableCTAButton: checked
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanelLayout);

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanelSeparator.tsx":
/*!*********************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanelSeparator.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_SEPARATOR_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_SEPARATOR_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MySelect */ "./src/components/controls/MySelect.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const WCB_ICON_BOX_PANEL_SEPARATOR_DEMO = {
  enableSeparator: false,
  position: "afterTitle"
};
const WcbIconBoxPanelSeparator = ({
  panelData = WCB_ICON_BOX_PANEL_SEPARATOR_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened,
  showOptionAfterIcon
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const {
    enableSeparator,
    position
  } = panelData;
  let PLANS_DEMO = [{
    value: "afterPrefix",
    label: "After Prefix"
  }, {
    value: "afterTitle",
    label: "After Title"
  }, {
    value: "afterDescription",
    label: "After Description"
  }];
  if (showOptionAfterIcon) {
    PLANS_DEMO = [{
      value: "afterIcon",
      label: "After Icon"
    }, ...PLANS_DEMO];
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Separator", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable separator", "boostify-blocks"),
    checked: enableSeparator,
    className: "mb-0",
    onChange: checked => {
      setAttr__({
        ...panelData,
        enableSeparator: checked
      });
    }
  }), enableSeparator && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Position", "boostify-blocks"),
    options: PLANS_DEMO,
    value: position,
    onChange: value => {
      setAttr__({
        ...panelData,
        position: value
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanelSeparator);

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanel_StyleDimension.tsx":
/*!***************************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanel_StyleDimension.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO),
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






const WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO = {
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
const WcbIconBoxPanel_StyleDimension = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanel_StyleDimension);

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanel_StyleIcons.tsx":
/*!***********************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanel_StyleIcons.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/types */ "./src/components/controls/MyDimensionsControl/types.ts");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");













const WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO = {
  color: "#334155",
  hoverColor: "",
  iconSize: {
    Desktop: "2.5rem"
  },
  dimensions: {
    ..._components_controls_MyDimensionsControl_types__WEBPACK_IMPORTED_MODULE_7__.MY_DIMENSIONS_NO_GAP_CONTROL_DEMO,
    margin: {
      Desktop: {
        top: "1rem",
        left: "1rem",
        right: "1rem",
        bottom: "1rem"
      }
    },
    padding: {
      Desktop: {
        bottom: "",
        left: "",
        right: "",
        top: ""
      }
    }
  },
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_9__.MY_BORDER_CONTROL_DEMO
};
const WcbIconBoxPanel_StyleIcons = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  const {
    color,
    hoverColor,
    iconSize,
    dimensions,
    border
  } = panelData;
  const {
    currentDeviceValue: currentIconSize
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(iconSize, deviceType);

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        iconSize: {
          ...iconSize,
          [deviceType]: value
        }
      });
    },
    value: currentIconSize || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon size", "boostify-blocks"),
    hasResponsive: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        color: color
      });
    },
    color: color
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        hoverColor: color
      });
    },
    color: hoverColor,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover color", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    borderControl: border,
    setAttrs__border: data => {
      setAttr__({
        ...panelData,
        border: data
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: "Dimensions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    dimensionControl: dimensions,
    setAttrs__dimensions: data => {
      setAttr__({
        ...panelData,
        dimensions: data
      });
    }
  })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanel_StyleIcons);

/***/ }),

/***/ "./src/block-icon-box/WcbIconBoxPanel_StyleSeparator.tsx":
/*!***************************************************************!*\
  !*** ./src/block-icon-box/WcbIconBoxPanel_StyleSeparator.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");








const WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO = {
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_BORDER_MAIN_SINGLE_SIDE,
    color: "#334155"
  },
  width: {
    Desktop: "40%"
  },
  marginBottom: {
    Desktop: "1rem"
  }
};
const WcbIconBoxPanel_StyleSeparator = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const {
    border,
    width: widthProps,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(marginBottom, deviceType);
  const {
    currentDeviceValue: CUSTOM_WIDTH
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(widthProps, deviceType);

  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Separator", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    value: CUSTOM_WIDTH || "",
    onChange: value => {
      setAttr__({
        ...panelData,
        width: {
          ...widthProps,
          [deviceType]: value
        }
      });
    },
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Custom Width", "boostify-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.__experimentalBorderControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border styles"),
    onChange: border => {
      setAttr__({
        ...panelData,
        border
      });
    },
    withSlider: true,
    value: border
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbIconBoxPanel_StyleSeparator);

/***/ }),

/***/ "./src/block-icon-box/WcbTeamPanel_StyleDescription.tsx":
/*!**************************************************************!*\
  !*** ./src/block-icon-box/WcbTeamPanel_StyleDescription.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO),
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
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");











const WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "#171717",
  marginBottom: {
    Desktop: "1rem"
  }
};
const WcbTeamPanel_StyleDescription = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Description", "boostify-blocks")
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
    hasResponsive: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbTeamPanel_StyleDescription);

/***/ }),

/***/ "./src/block-icon-box/WcbTeamPanel_StyleDesignation.tsx":
/*!**************************************************************!*\
  !*** ./src/block-icon-box/WcbTeamPanel_StyleDesignation.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO),
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
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");











const WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO = {
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
    fontSizes: {
      Desktop: "1rem"
    }
  },
  textColor: "#6b7280",
  marginBottom: {
    Desktop: "0.5rem"
  }
};
const WcbTeamPanel_StyleDesignation = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Prefix", "boostify-blocks")
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
    hasResponsive: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbTeamPanel_StyleDesignation);

/***/ }),

/***/ "./src/block-icon-box/WcbTeamPanel_StyleTitle.tsx":
/*!********************************************************!*\
  !*** ./src/block-icon-box/WcbTeamPanel_StyleTitle.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO: () => (/* binding */ WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO),
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
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");











const WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_4__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "#171717",
  marginBottom: {
    Desktop: "1rem"
  }
};
const WcbTeamPanel_StyleTitle = ({
  panelData = WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_6__["default"])() || "Desktop";
  const {
    typography,
    textColor,
    marginBottom
  } = panelData;
  const {
    currentDeviceValue: MARGIN_BOTTOM
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginBottom, deviceType);
  //
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "boostify-blocks")
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "More styles"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: color => {
      setAttr__({
        ...panelData,
        textColor: color
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onChange: value => {
      setAttr__({
        ...panelData,
        marginBottom: {
          ...marginBottom,
          [deviceType]: value
        }
      });
    },
    value: MARGIN_BOTTOM || "",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin bottom", "boostify-blocks"),
    hasResponsive: true
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbTeamPanel_StyleTitle);

/***/ }),

/***/ "./src/block-icon-box/attributes.ts":
/*!******************************************!*\
  !*** ./src/block-icon-box/attributes.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");
/* harmony import */ var _WcbIconBoxPanelIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WcbIconBoxPanelIcon */ "./src/block-icon-box/WcbIconBoxPanelIcon.tsx");
/* harmony import */ var _WcbIconBoxPanelLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WcbIconBoxPanelLayout */ "./src/block-icon-box/WcbIconBoxPanelLayout.tsx");
/* harmony import */ var _WcbTeamPanel_StyleDesignation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WcbTeamPanel_StyleDesignation */ "./src/block-icon-box/WcbTeamPanel_StyleDesignation.tsx");
/* harmony import */ var _WcbTeamPanel_StyleDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbTeamPanel_StyleDescription */ "./src/block-icon-box/WcbTeamPanel_StyleDescription.tsx");
/* harmony import */ var _WcbTeamPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WcbTeamPanel_StyleTitle */ "./src/block-icon-box/WcbTeamPanel_StyleTitle.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleIcons */ "./src/block-icon-box/WcbIconBoxPanel_StyleIcons.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleSeparator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleSeparator */ "./src/block-icon-box/WcbIconBoxPanel_StyleSeparator.tsx");
/* harmony import */ var _WcbIconBoxPanel_StyleDimension__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WcbIconBoxPanel_StyleDimension */ "./src/block-icon-box/WcbIconBoxPanel_StyleDimension.tsx");
/* harmony import */ var _WcbIconBoxPanelSeparator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WcbIconBoxPanelSeparator */ "./src/block-icon-box/WcbIconBoxPanelSeparator.tsx");
/* harmony import */ var _components_controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/MyMotionEffectControl/MyMotionEffectControl */ "./src/components/controls/MyMotionEffectControl/MyMotionEffectControl.tsx");












const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  // THE ATTRS OF BLOCK HERE
  heading: {
    type: "string",
    source: "html",
    selector: ".wcb-icon-box__heading",
    default: "John Doe"
  },
  designation: {
    type: "string",
    source: "html",
    selector: ".wcb-icon-box__designation",
    default: "Write a Prefix"
  },
  description: {
    type: "string",
    source: "html",
    selector: ".wcb-icon-box__description",
    default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  //

  general_layout: {
    type: "object",
    default: _WcbIconBoxPanelLayout__WEBPACK_IMPORTED_MODULE_3__.WCB_ICON_BOX_PANEL_LAYOUT_DEMO
  },
  general_icon: {
    type: "object",
    default: _WcbIconBoxPanelIcon__WEBPACK_IMPORTED_MODULE_2__.WCB_ICON_BOX_PANEL_ICON_DEMO
  },
  general_separator: {
    type: "object",
    default: _WcbIconBoxPanelSeparator__WEBPACK_IMPORTED_MODULE_10__.WCB_ICON_BOX_PANEL_SEPARATOR_DEMO
  },
  style_title: {
    type: "object",
    default: _WcbTeamPanel_StyleTitle__WEBPACK_IMPORTED_MODULE_6__.WCB_ICON_BOX_PANEL_STYLE_TITLE_DEMO
  },
  style_desination: {
    type: "object",
    default: _WcbTeamPanel_StyleDesignation__WEBPACK_IMPORTED_MODULE_4__.WCB_ICON_BOX_PANEL_STYLE_DESIGNATION_DEMO
  },
  style_separator: {
    type: "object",
    default: _WcbIconBoxPanel_StyleSeparator__WEBPACK_IMPORTED_MODULE_8__.WCB_ICON_BOX_PANEL_STYLE_SEPARATOR_DEMO
  },
  style_description: {
    type: "object",
    default: _WcbTeamPanel_StyleDescription__WEBPACK_IMPORTED_MODULE_5__.WCB_ICON_BOX_PANEL_STYLE_DESCRIPTION_DEMO
  },
  style_Icon: {
    type: "object",
    default: _WcbIconBoxPanel_StyleIcons__WEBPACK_IMPORTED_MODULE_7__.WCB_ICON_BOX_PANEL_STYLE_ICON_DEMO
  },
  style_dimension: {
    type: "object",
    default: _WcbIconBoxPanel_StyleDimension__WEBPACK_IMPORTED_MODULE_9__.WCB_ICON_BOX_PANEL_STYLE_DIMENSION_DEMO
  },
  // ADVANCE
  advance_responsiveCondition: {
    type: "object",
    default: _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_0__.RESPONSIVE_CONDITON_DEMO
  },
  advance_zIndex: {
    type: "object",
    default: _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_1__.Z_INDEX_DEMO
  },
  advance_motionEffect: {
    type: "object",
    default: _components_controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_11__.MY_MOTION_EFFECT_DEMO
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokc1Attrs);

/***/ }),

/***/ "./src/block-icon-box/block.json":
/*!***************************************!*\
  !*** ./src/block-icon-box/block.json ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"boostify-blocks/icon-box","version":"0.1.0","title":"Icon box","category":"boostify-blocks","icon":"- wcb-block-editor-block-icon lni lni-clipboard","description":"Create a box containing an icon or image and, optionally, a title, description, and learn more text.","supports":{"html":false,"anchor":true,"align":true},"textdomain":"boostify-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/block-icon-box/deprecated.tsx":
/*!*******************************************!*\
  !*** ./src/block-icon-box/deprecated.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Save_260523__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save__260523 */ "./src/block-icon-box/Save__260523.tsx");
/* harmony import */ var _Save_100623__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Save__100623 */ "./src/block-icon-box/Save__100623.tsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/block-icon-box/attributes.ts");
/* harmony import */ var _components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/SelectIcon/SelecIcon */ "./src/components/controls/SelectIcon/SelecIcon.tsx");




const v1 = {};
const v2 = {};
const v3 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
    general_icon: {
      type: "object",
      default: {
        enableIcon: true,
        iconPosition: "top",
        icon: {
          ..._components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_MY_ICON,
          iconName: "lni-checkmark-circle"
        }
      }
    }
  },
  save: _Save_260523__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const v4 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
    general_icon: {
      type: "object",
      default: {
        enableIcon: true,
        iconPosition: "top",
        icon: {
          ..._components_controls_SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_MY_ICON,
          iconName: "lni-checkmark-circle"
        }
      }
    }
  },
  save: _Save_100623__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const deprecated = [v4, v3, v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/block-icon-box/editor.scss":
/*!****************************************!*\
  !*** ./src/block-icon-box/editor.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-icon-box/index.js":
/*!*************************************!*\
  !*** ./src/block-icon-box/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-icon-box/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-icon-box/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-icon-box/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-icon-box/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-icon-box/attributes.ts");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/block-icon-box/deprecated.tsx");
/* harmony import */ var _utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/convertAttsToPreview */ "./src/utils/convertAttsToPreview.ts");

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
    d: "M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M14 8H19",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15 12H19",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M17 16H19",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-icon-box/style.scss":
/*!***************************************!*\
  !*** ./src/block-icon-box/style.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/components/controls/MyIcon.tsx":
/*!********************************************!*\
  !*** ./src/components/controls/MyIcon.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const MyIcon = ({
  icon = "lni-image",
  className,
  size,
  ...props
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    ...props,
    className: `lni ${icon} ${className}`
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyIcon);

/***/ }),

/***/ "./src/components/controls/MyIconFull.tsx":
/*!************************************************!*\
  !*** ./src/components/controls/MyIconFull.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyIcon */ "./src/components/controls/MyIcon.tsx");
/* harmony import */ var _SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SelectIcon/SelecIcon */ "./src/components/controls/SelectIcon/SelecIcon.tsx");




const MyIconFull = ({
  icon = _SelectIcon_SelecIcon__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_MY_ICON,
  className = "",
  renderIfNone = null,
  ...props
}) => {
  const renderIcon = () => {
    const classes = `wcb-icon-full ${className}`.trim();
    if (!icon) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderIfNone);
    }
    if (icon.type === "icon" && icon.iconName) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: `${classes}`,
        icon: icon.iconName
      });
    }
    if (icon.type === "svg") {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${classes} is-svg wcb-icon-full--svg`,
        dangerouslySetInnerHTML: {
          __html: icon.svgCode
        }
      });
    }
    if (icon.type === "image" && icon.imageData?.mediaId) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: `${classes} is-image wcb-icon-full--image`
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: icon.imageData.mediaUrl,
        alt: ""
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderIfNone);
  };
  return renderIcon();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyIconFull);

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

/***/ "./src/components/controls/SelectIcon/SelecIcon.tsx":
/*!**********************************************************!*\
  !*** ./src/components/controls/SelectIcon/SelecIcon.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_MY_ICON: () => (/* binding */ DEFAULT_MY_ICON),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ResetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ResetButton */ "./src/components/controls/ResetButton.tsx");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var _public_lineicons_free_basic_icon_font_unicodesMap_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../public/lineicons-free-basic/icon-font/unicodesMap.json */ "./public/lineicons-free-basic/icon-font/unicodesMap.json");
/* harmony import */ var _MyIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../MyIcon */ "./src/components/controls/MyIcon.tsx");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/tabs/tabs.js");
/* harmony import */ var _MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MyMediaUploadCheck */ "./src/components/controls/MyMediaUploadCheck.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/components/controls/SelectIcon/editor.scss");
/* harmony import */ var _utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/checkIsSvgHtmlTag */ "./src/utils/checkIsSvgHtmlTag.ts");
/* harmony import */ var _MyIconFull__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MyIconFull */ "./src/components/controls/MyIconFull.tsx");













const ICON_KEYS = Object.keys(_public_lineicons_free_basic_icon_font_unicodesMap_json__WEBPACK_IMPORTED_MODULE_4__);
const DEFAULT_MY_ICON = {
  type: "icon",
  iconName: "lni-heart-filled",
  imageData: _MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_MEDIA_UPLOAD,
  svgCode: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
	<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
  </svg>`
};
const SelecIcon = ({
  onChange,
  iconData,
  label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon:", "boostify-blocks")
}) => {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isCorrectSvgCode, setIsCorrectSvgCode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_8__["default"])(iconData.svgCode));
  const [svgCodeState, setSvgCodeState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setSvgCodeState(iconData.svgCode);
  }, [iconData.svgCode]);
  const gridRef = react__WEBPACK_IMPORTED_MODULE_0___default().createRef();
  const people = ICON_KEYS;
  const filteredPeople = query === "" ? people : people.filter(person => {
    return person.toLowerCase().includes(query.toLowerCase());
  });
  const ICONS_KEYS = filteredPeople;
  const scrollToIcon = () => {
    setTimeout(() => {
      if (!iconData.iconName) return;
      const index = filteredPeople.indexOf(iconData.iconName);
      index && gridRef?.current?.scrollToItem({
        rowIndex: Math.ceil(index / 3),
        align: "center"
      });
    }, 1);
  };
  const Cell = ({
    columnIndex,
    rowIndex,
    style
  }) => {
    const index = rowIndex * 3 + columnIndex;
    const item = ICONS_KEYS[index];
    if (!item) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        style: {
          ...style
        }
      });
    }
    const isActive = item === iconData.iconName;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        ...style,
        padding: "4px 0px 4px 8px"
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: item,
      className: `h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer ${isActive ? "ring-2 SelecIcon__item--isActive" : ""}`,
      onClick: () => {
        onChange({
          ...iconData,
          iconName: isActive ? undefined : item
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "grid"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center overflow-hidden "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "text-lg",
      size: 16,
      icon: item
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "block mt-2.5 truncate text-gray-300 text-xs"
    }, item)))));
  };
  const renderInput = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative p-2 mb-2 -mt-2 border-b border-gray-800 text-white "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pointer-events-none absolute inset-y-0 left-2.5 flex items-center pl-2.5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: 1.5,
      stroke: "currentColor",
      className: "w-5 h-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      onChange: event => setQuery(event.target.value),
      type: "text",
      className: "block w-full py-1.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-800 border-transparent text-white",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Search for an icon...", "boostify-blocks"),
      defaultValue: query,
      name: "icon-query",
      autoFocus: true
    }));
  };
  const TABS = [{
    name: "icon",
    icon: "lni lni-ruler-pencil text-lg"
  }, {
    name: "image",
    icon: "lni lni-image text-lg"
  }, {
    name: "svg",
    icon: "lni lni-code text-lg"
  }];
  const renderContent = ({
    onToggle,
    onClose
  }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "min-w-[310px] min-h-[510px] bg-gray-900 pt-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cursor-pointer absolute -right-0.5 -top-0.5 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-lg ring-1 ring-gray-200/70 hover:ring-gray-300",
    onClick: onClose
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    className: "w-6 h-6 text-red-500"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Group, {
    onChange: i => {
      onChange({
        ...iconData,
        type: TABS[i].name
      });
    },
    defaultIndex: TABS.findIndex(item => item.name === iconData.type)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.List, {
    className: "flex p-1.5 bg-slate-700/60 rounded-lg shadow-md mx-2"
  }, TABS.map(item => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab, {
      key: item.name,
      className: ({
        selected
      }) => `flex-1 font-medium whitespace-nowrap px-1 py-2 text-sm focus:outline-none flex flex-col items-center justify-center space-y-1 rounded-lg capitalize ${selected ? "bg-slate-900 text-slate-50 " : "text-slate-300 hover:text-slate-100 border-b-transparent"}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: item.icon
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "block"
    }, item.name));
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panels, {
    className: "mt-3 pt-3 border-t border-slate-700"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {
    className: ""
  }, renderContentDefault()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {
    className: ""
  }, renderContentUploadImage()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__.Tab.Panel, {
    className: ""
  }, renderContentUploadSVG()))));
  const renderContentUploadSVG = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "pt-1 px-3 text-slate-300"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
      rows: 17,
      label: "",
      placeholder: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...`,
      className: "Wcb-SelectIcon__textarea text-slate-200",
      help: !svgCodeState || isCorrectSvgCode ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter your SVG code here", "boostify-blocks") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "text-red-500"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Please write a valid SVG code", "boostify-blocks")),
      value: svgCodeState,
      onChange: value => {
        setSvgCodeState(value);
        if ((0,_utils_checkIsSvgHtmlTag__WEBPACK_IMPORTED_MODULE_8__["default"])(value)) {
          setIsCorrectSvgCode(true);
          const a = /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.exec(value);
          onChange({
            ...iconData,
            svgCode: a?.[0] || ""
          });
        } else {
          setIsCorrectSvgCode(false);
        }
      }
    }));
  };
  const renderContentUploadImage = () => {
    const imageData = iconData?.imageData;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "px-3 pt-1"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyMediaUploadCheck__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "text-neutral-200",
      btnClass: "ring-1 ring-neutral-700",
      defaultBtnClass: "hover:bg-black/10",
      onChange: data => {
        onChange({
          ...iconData,
          imageData: data
        });
      },
      imageData: imageData
    }));
  };
  const renderContentDefault = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, renderInput()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_window__WEBPACK_IMPORTED_MODULE_11__.FixedSizeGrid, {
      ref: gridRef,
      className: "hiddenScrollbar",
      columnCount: 3,
      columnWidth: 100,
      height: 380,
      rowCount: Math.ceil(ICONS_KEYS.length / 3),
      rowHeight: 88,
      width: 308
    }, Cell));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
    position: "middle left",
    className: "w-full",
    contentClassName: "Wcb-SelectIcon z-[100]",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center space-x-4"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg ",
      onClick: () => {
        onToggle();
        if (iconData.type === "icon") {
          scrollToIcon();
        }
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "mr-3"
    }, label), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyIconFull__WEBPACK_IMPORTED_MODULE_9__["default"], {
      icon: iconData,
      className: "w-6 h-6 text-[24px] flex items-center ",
      renderIfNone: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("None", "boostify-blocks"))
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_ResetButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: () => {
        onChange(DEFAULT_MY_ICON);
      }
    })),
    renderContent: renderContent
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelecIcon);

/***/ }),

/***/ "./src/components/controls/SelectIcon/editor.scss":
/*!********************************************************!*\
  !*** ./src/components/controls/SelectIcon/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/utils/checkIsSvgHtmlTag.ts":
/*!****************************************!*\
  !*** ./src/utils/checkIsSvgHtmlTag.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function checkIsSvgHtmlTag(str) {
  if (typeof str !== "string") {
    return false;
  }
  return /<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.test(str);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkIsSvgHtmlTag);

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
	`},Le=function(e,a){var t,l;const i=e?.Desktop,r=null!==(t=e?.Tablet)&&void 0!==t?t:i,n=null!==(l=e?.Mobile)&&void 0!==l?l:r;let o;return a&&(o="Desktop"===a?i:"Tablet"===a?r:n),{value_Desktop:null!=i?i:null,value_Tablet:null!=r?r:null,value_Mobile:null!=n?n:null,currentDeviceValue:o}},Be=({border:e,className:a,isWithRadius:t=!1,isWithIframe:l=!1})=>{const{hoverColor:i,mainSettings:r,radius:n}=e;let o={[`${a}`]:{}};if(r){const e=r;if("top"in e||"right"in e||"bottom"in e||"left"in e){const{bottom:t,left:l,right:r,top:n}=e;o={[`${a}`]:{...n?{borderTop:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},...l?{borderLeft:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...r?{borderRight:`${r.width} ${r.style||"none"} ${r.color||""}`}:{},...t?{borderBottom:`${t.width} ${t.style||"none"} ${t.color||""}`}:{},"&:hover":{borderColor:`${i}`}}}}else{const{color:e,style:t,width:l}=r;o={[`${a}`]:{border:`${l} ${t||"none"} ${e||""}`,"&:hover":{borderColor:`${i||""}`}}}}}let s={[`${a}`]:{}};t&&n&&(s=(({className:e,radius:a,isWithIframe:t=!1})=>{const{media_desktop:l,media_tablet:i}=Me;let{value_Desktop:r,value_Tablet:n,value_Mobile:o}=Le(a);const s=e=>{let a=e;return a="string"==typeof e?{bottomLeft:e,bottomRight:e,topLeft:e,topRight:e}:{bottomLeft:e?.bottomLeft,bottomRight:e?.bottomRight,topLeft:e?.topLeft,topRight:e?.topRight},a};r=s(r),n=s(n),o=s(o);const{mobile_v:c,tablet_v:u,desktop_v:g}=Re({mobile_v:o?.topLeft,tablet_v:n?.topLeft,desktop_v:r?.topLeft}),{mobile_v:d,tablet_v:f,desktop_v:h}=Re({mobile_v:o?.topRight,tablet_v:n?.topRight,desktop_v:r?.topRight}),{mobile_v:p,tablet_v:b,desktop_v:m}=Re({mobile_v:o?.bottomRight,tablet_v:n?.bottomRight,desktop_v:r?.bottomRight}),{mobile_v:w,tablet_v:k,desktop_v:v}=Re({mobile_v:o?.bottomLeft,tablet_v:n?.bottomLeft,desktop_v:r?.bottomLeft}),y=t?"!important":"";return{[`${e}`]:{borderTopLeftRadius:`${c} ${y}`,borderTopRightRadius:`${d} ${y}`,borderBottomRightRadius:`${p} ${y}`,borderBottomLeftRadius:`${w} ${y}`,[`@media (min-width: ${i})`]:u||f||b||k?{borderTopLeftRadius:`${u} ${y}`,borderTopRightRadius:`${f} ${y}`,borderBottomRightRadius:`${b} ${y}`,borderBottomLeftRadius:`${k} ${y}`}:null,[`@media (min-width: ${l})`]:g||h||m||v?{borderTopLeftRadius:`${g} ${y}`,borderTopRightRadius:`${h} ${y}`,borderBottomRightRadius:`${m} ${y}`,borderBottomLeftRadius:`${v} ${y}`}:null}}})({radius:n,className:a,isWithIframe:l}));let c={},u={};return"object"==typeof o[a]&&(c=o[a]||{}),"object"==typeof s[a]&&(u=s[a]||{}),{[`${a}`]:{...c,...u}}},Fe=({className:e,padding:a,margin:t})=>{const{media_desktop:l,media_tablet:i}=Me,{value_Desktop:r,value_Tablet:n,value_Mobile:o}=Le(t),{value_Desktop:s,value_Tablet:c,value_Mobile:u}=Le(a),{mobile_v:g,tablet_v:d,desktop_v:f}=Re({mobile_v:u?.top,tablet_v:c?.top,desktop_v:s?.top}),{mobile_v:h,tablet_v:p,desktop_v:b}=Re({mobile_v:u?.left,tablet_v:c?.left,desktop_v:s?.left}),{mobile_v:m,tablet_v:w,desktop_v:k}=Re({mobile_v:u?.right,tablet_v:c?.right,desktop_v:s?.right}),{mobile_v:v,tablet_v:y,desktop_v:_}=Re({mobile_v:u?.bottom,tablet_v:c?.bottom,desktop_v:s?.bottom}),{mobile_v:x,tablet_v:S,desktop_v:C}=Re({mobile_v:o?.top,tablet_v:n?.top,desktop_v:r?.top}),{mobile_v:E,tablet_v:I,desktop_v:T}=Re({mobile_v:o?.left,tablet_v:n?.left,desktop_v:r?.left}),{mobile_v:N,tablet_v:P,desktop_v:M}=Re({mobile_v:o?.right,tablet_v:n?.right,desktop_v:r?.right}),{mobile_v:O,tablet_v:R,desktop_v:A}=Re({mobile_v:o?.bottom,tablet_v:n?.bottom,desktop_v:r?.bottom});return Pe`
		body ${e} {
			padding-top: ${g} !important;
			padding-right: ${m} !important;
			padding-bottom: ${v} !important;
			padding-left: ${h} !important;
			margin-top: ${x} !important;
			margin-right: ${N};
			margin-bottom: ${O} !important;
			margin-left: ${E};
			@media (min-width: ${i}) {
				padding-top: ${d} !important;
				padding-right: ${w} !important;
				padding-bottom: ${y} !important;
				padding-left: ${p} !important;
				margin-top: ${S} !important;
				margin-right: ${P};
				margin-bottom: ${R} !important;
				margin-left: ${I};
>>>>>>> refs/remotes/origin/fix/boostifyblock-issue-4
			}
			@media (min-width: ${l}) {
				padding-top: ${f} !important;
				padding-right: ${k} !important;
				padding-bottom: ${_} !important;
				padding-left: ${b} !important;
				margin-top: ${C} !important;
				margin-right: ${M};
				margin-bottom: ${A} !important;
				margin-left: ${T};
			}
		}
	`},$e=function({className:e,prefix:a,prefix_2:t,prefix_3:l,prefix_4:i,value:r,hasUnit:n=!0,unit:o}){const{media_desktop:s,media_tablet:c}=Me;let{value_Desktop:u,value_Tablet:g,value_Mobile:d}=Le(r);!n&&o&&("number"==typeof u&&(u+=o,g+=o,d+=o),"string"==typeof u&&(u=u?u+o:null,g=g?g+o:null,d=d?d+o:null));let f=t||"",h=l||"",p=i||"";const{mobile_v:b,tablet_v:m,desktop_v:w}=Re({mobile_v:d,tablet_v:g,desktop_v:u});return{[e]:{[a]:null!=b?b:null,[f]:t&&null!=b?b:null,[h]:l&&null!=b?b:null,[p]:i&&null!=b?b:null,[`@media (min-width: ${c})`]:m?{[a]:m,[f]:t?m:null,[h]:l?m:null,[p]:i?m:null}:void 0,[`@media (min-width: ${s})`]:w?{[a]:w,[f]:t?w:null,[h]:l?w:null,[p]:i?w:null}:void 0}}};t(8156);const He=window.lodash;var je=t.n(He);window.wp.api;const ze=e=>{setTimeout((()=>{const a=a=>{if(a&&(e=>e&&!e?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i))(e)){if(We(e,a))return;const t=Ge(e);a.appendChild(t),console.log(321,"________load-gg-font_____",{fontName:e,link:t})}},t=(()=>{let e=document.querySelector("head");return!!document.querySelector('iframe[name="editor-canvas"]')&&(e=document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector("head")),e})();a(t),t!==document.querySelector("head")&&a(document.querySelector("head"))}),50)},Ge=(e="")=>{const a=document.createElement("link");return a.classList.add("wcb-google-fonts"),a.setAttribute("data-font-name",e),a.setAttribute("href",(e=>`https://fonts.googleapis.com/css?family=${e.replace(/ /g,"+")}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`)(e)),a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a},We=(e,a=document.querySelector("head"))=>a.querySelector(`[data-font-name="${e}"]`),Ve=({typography:e,className:a})=>{if(!e||!a)return{};const{appearance:t,fontFamily:l,fontSizes:i,letterSpacing:r,lineHeight:n,textDecoration:o,textTransform:s}=e;l&&ze(l);const{media_desktop:c,media_tablet:u}=Me,g=i?.Desktop,d=i?.Tablet||g,f=i?.Mobile||d,h=n?.Desktop,p=n?.Tablet||h,b=n?.Mobile||p,m=r?.Desktop,w=r?.Tablet||m,k=r?.Mobile||w,{mobile_v:v,tablet_v:y,desktop_v:_}=Re({mobile_v:f,tablet_v:d,desktop_v:g}),{mobile_v:x,tablet_v:S,desktop_v:C}=Re({mobile_v:b,tablet_v:p,desktop_v:h}),{mobile_v:E,tablet_v:I,desktop_v:T}=Re({mobile_v:k,tablet_v:w,desktop_v:m});return{[`${a}`]:{fontFamily:l,fontWeight:t?.style?.fontWeight,fontStyle:t?.style?.fontStyle,textDecoration:o,textTransform:s,fontSize:v,lineHeight:x,letterSpacing:E,[`@media (min-width: ${u})`]:y||S||I?{fontSize:y,lineHeight:S,letterSpacing:I}:void 0,[`@media (min-width: ${c})`]:_||C||T?{fontSize:_,lineHeight:C,letterSpacing:T}:void 0}}},Ue=i().memo((e=>{const{uniqueId:a,general_layout:t,style_description:i,style_desination:r,style_Icon:n,style_title:o,advance_responsiveCondition:s,advance_zIndex:c,general_icon:u,style_dimension:g,style_separator:d,general_separator:f,advance_motionEffect:h}=e,{media_desktop:p,media_tablet:b}=Me,m=`.${a}[data-uniqueid=${a}]`;return a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Ne,{styles:[$e({className:m,value:t.textAlignment,prefix:"textAlign"}),{[`${m}`]:{display:"left"===u.iconPosition||"right"===u.iconPosition?"flex":"block",flexDirection:"mobile"===u.stackOn||"tablet"===u.stackOn?"right"===u.iconPosition?"column-reverse":"column":void 0,".wcb-icon-box__icon-wrap, .wcb-icon-box__content":{alignSelf:"middle"===u.verticalAlignment?"center":void 0},".wcb-icon-box__content-title-wrap":{display:"leftOfTitle"===u.iconPosition||"rightOfTitle"===u.iconPosition?"flex":"block"},[`@media (min-width: ${b})`]:{flexDirection:"mobile"===u.stackOn?"row":void 0},[`@media (min-width: ${p})`]:{flexDirection:"row"}}}]}),(0,l.createElement)(Ne,{styles:Fe({className:m,margin:g.margin,padding:g.padding})}),u.enableIcon?(0,l.createElement)(Ne,{styles:[Fe({className:`${m} .wcb-icon-box__icon-wrap`,margin:n.dimensions.margin}),Fe({className:`${m} .wcb-icon-box__icon`,padding:n.dimensions.padding}),Be({border:n.border,className:`${m} .wcb-icon-box__icon`,isWithRadius:!0}),$e({className:`${m} .wcb-icon-full`,value:n.iconSize,prefix:"width",prefix_2:"fontSize"}),{[`${m} .wcb-icon-full`]:{color:n.color,":hover":{color:n.hoverColor}}}]}):null,t.enablePrefix?(0,l.createElement)(Ne,{styles:[Ve({typography:r.typography,className:`${m} .wcb-icon-box__designation`}),$e({className:`${m} .wcb-icon-box__designation`,value:r.marginBottom,prefix:"marginBottom"}),{[`${m} .wcb-icon-box__designation`]:{color:r.textColor}}]}):null,t.enableTitle?(0,l.createElement)(Ne,{styles:[Ve({typography:o.typography,className:`${m} .wcb-icon-box__heading`}),$e({className:`${m} .wcb-icon-box__heading`,value:o.marginBottom,prefix:"marginBottom"}),{[`${m} .wcb-icon-box__heading`]:{color:o.textColor}}]}):null,f.enableSeparator?(0,l.createElement)(Ne,{styles:[Be({border:{mainSettings:d.border},className:`${m} .wcb-icon-box__separator`}),$e({className:`${m} .wcb-icon-box__separator`,value:d.width,prefix:"width"}),$e({className:`${m} .wcb-icon-box__separator`,value:d.marginBottom,prefix:"marginBottom"})]}):null,t.enableDescription?(0,l.createElement)(Ne,{styles:[Ve({typography:i.typography,className:`${m} .wcb-icon-box__description`}),$e({className:`${m} .wcb-icon-box__description`,value:i.marginBottom,prefix:"marginBottom"}),{[`${m} .wcb-icon-box__description`]:{color:i.textColor}}]}):null,(0,l.createElement)(Ne,{styles:De({advance_responsiveCondition:s,advance_motionEffect:h,advance_zIndex:c,className:m})})):null})),qe=window.wp.data,Ke={Advances:{panelIsOpen:""},General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"},tabIsOpen:"General"},Je={},Ze="boostify-blocks/panels",Ye=(0,qe.createReduxStore)(Ze,{reducer(e=Je,a){if("SET_BLOCK_PANEL_INFO"===a.type){const t=e[a.blockId]||Ke;return{...e,[a.blockId]:{...t,...a.block}}}return e},actions:{setBlockPanelInfo:(e,a)=>({type:"SET_BLOCK_PANEL_INFO",blockId:e,block:a})},selectors:{getBlockPanelInfo:e=>e},controls:{},resolvers:{}}),Qe=window;Qe.__boostifyPanelsStoreRegistered||(Qe.__boostifyPanelsStoreRegistered=!0,(0,qe.register)(Ye));const Xe={isHiddenOnDesktop:!1,isHiddenOnTablet:!1,isHiddenOnMobile:!1},ea=({className:e="space-y-4",responsiveConditionControl:a=Xe,setAttrs__responsiveCondition:t})=>{const{isHiddenOnDesktop:i,isHiddenOnMobile:r,isHiddenOnTablet:o}=a;return(0,l.createElement)("div",{className:e},(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Hide on Desktop","boostify-blocks"),checked:i,onChange:e=>{t({...a,isHiddenOnDesktop:e})},className:"mb-0"}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Hide on Tablet","boostify-blocks"),checked:o,onChange:e=>{t({...a,isHiddenOnTablet:e})}}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Hide on Mobile","boostify-blocks"),checked:r,onChange:e=>{t({...a,isHiddenOnMobile:e})}}))},aa=()=>{const{deviceType:e}=(0,qe.useSelect)((e=>{const{__experimentalGetPreviewDeviceType:a}=e("core/edit-post")||!1;return a?{deviceType:a()}:{deviceType:null}}),[]);return e};function ta(e,a,...t){if(e in a){let l=a[e];return"function"==typeof l?l(...t):l}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,ta),l}function la(...e){return e.filter(Boolean).join(" ")}var ia,ra=((ia=ra||{})[ia.None=0]="None",ia[ia.RenderStrategy=1]="RenderStrategy",ia[ia.Static=2]="Static",ia),na=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(na||{});function oa({ourProps:e,theirProps:a,slot:t,defaultTag:l,features:i,visible:r=!0,name:n}){let o=ca(a,e);if(r)return sa(o,t,l,n);let s=null!=i?i:0;if(2&s){let{static:e=!1,...a}=o;if(e)return sa(a,t,l,n)}if(1&s){let{unmount:e=!0,...a}=o;return ta(e?0:1,{0:()=>null,1:()=>sa({...a,hidden:!0,style:{display:"none"}},t,l,n)})}return sa(o,t,l,n)}function sa(e,a={},t,i){var r;let{as:n=t,children:o,refName:s="ref",...c}=da(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},g="function"==typeof o?o(a):o;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(a));let d={};if(a){let e=!1,t=[];for(let[l,i]of Object.entries(a))"boolean"==typeof i&&(e=!0),!0===i&&t.push(l);e&&(d["data-headlessui-state"]=t.join(" "))}if(n===l.Fragment&&Object.keys(ga(c)).length>0){if(!(0,l.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${i} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=la(null==(r=g.props)?void 0:r.className,c.className),a=e?{className:e}:{};return(0,l.cloneElement)(g,Object.assign({},ca(g.props,ga(da(c,["ref"]))),d,u,function(...e){return{ref:e.every((e=>null==e))?void 0:a=>{for(let t of e)null!=t&&("function"==typeof t?t(a):t.current=a)}}}(g.ref,u.ref),a))}return(0,l.createElement)(n,Object.assign({},da(c,["ref"]),n!==l.Fragment&&u,n!==l.Fragment&&d),g)}function ca(...e){if(0===e.length)return{};if(1===e.length)return e[0];let a={},t={};for(let l of e)for(let e in l)e.startsWith("on")&&"function"==typeof l[e]?(null!=t[e]||(t[e]=[]),t[e].push(l[e])):a[e]=l[e];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(t).map((e=>[e,void 0]))));for(let e in t)Object.assign(a,{[e](a,...l){let i=t[e];for(let e of i){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;e(a,...l)}}});return a}function ua(e){var a;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(a=e.displayName)?a:e.name})}function ga(e){let a=Object.assign({},e);for(let e in a)void 0===a[e]&&delete a[e];return a}function da(e,a=[]){let t=Object.assign({},e);for(let e of a)e in t&&delete t[e];return t}function fa(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function ha(){let e=[],a={addEventListener:(e,t,l,i)=>(e.addEventListener(t,l,i),a.add((()=>e.removeEventListener(t,l,i)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return a.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>a.requestAnimationFrame((()=>a.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return a.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return fa((()=>{t.current&&e[0]()})),a.add((()=>{t.current=!1}))},style(e,a,t){let l=e.style.getPropertyValue(a);return Object.assign(e.style,{[a]:t}),this.add((()=>{Object.assign(e.style,{[a]:l})}))},group(e){let a=ha();return e(a),this.add((()=>a.dispose()))},add:a=>(e.push(a),()=>{let t=e.indexOf(a);if(t>=0)for(let a of e.splice(t,1))a()}),dispose(){for(let a of e.splice(0))a()}};return a}function pa(){let[e]=(0,l.useState)(ha);return(0,l.useEffect)((()=>()=>e.dispose()),[e]),e}var ba=Object.defineProperty,ma=(e,a,t)=>(((e,a,t)=>{a in e?ba(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t})(e,"symbol"!=typeof a?a+"":a,t),t);let wa=new class{constructor(){ma(this,"current",this.detect()),ma(this,"handoffState","pending"),ma(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},ka=(e,a)=>{wa.isServer?(0,l.useEffect)(e,a):(0,l.useLayoutEffect)(e,a)};function va(e){let a=(0,l.useRef)(e);return ka((()=>{a.current=e}),[e]),a}let ya=function(e){let a=va(e);return l.useCallback(((...e)=>a.current(...e)),[a])},_a=Symbol();function xa(e,a=!0){return Object.assign(e,{[_a]:a})}function Sa(...e){let a=(0,l.useRef)(e);(0,l.useEffect)((()=>{a.current=e}),[e]);let t=ya((e=>{for(let t of a.current)null!=t&&("function"==typeof t?t(e):t.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[_a])))?void 0:t}function Ca(){let[e,a]=(0,l.useState)(wa.isHandoffComplete);return e&&!1===wa.isHandoffComplete&&a(!1),(0,l.useEffect)((()=>{!0!==e&&a(!0)}),[e]),(0,l.useEffect)((()=>wa.handoff()),[]),e}var Ea;let Ia=null!=(Ea=l.useId)?Ea:function(){let e=Ca(),[a,t]=l.useState(e?()=>wa.nextId():null);return ka((()=>{null===a&&t(wa.nextId())}),[a]),null!=a?""+a:void 0};var Ta=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ta||{}),Na=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Na||{});function Pa(e){let a=e.parentElement,t=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(t=a),a=a.parentElement;let l=""===(null==a?void 0:a.getAttribute("disabled"));return(!l||!function(e){if(!e)return!1;let a=e.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(t))&&l}function Ma(e){return wa.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Oa=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var Ra,Aa=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Aa||{}),Da=((Ra=Da||{})[Ra.Error=0]="Error",Ra[Ra.Overflow=1]="Overflow",Ra[Ra.Success=2]="Success",Ra[Ra.Underflow=3]="Underflow",Ra),La=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(La||{});function Ba(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Oa)).sort(((e,a)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER))))}var Fa=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fa||{});function $a(e,a=0){var t;return e!==(null==(t=Ma(e))?void 0:t.body)&&ta(a,{0:()=>e.matches(Oa),1(){let a=e;for(;null!==a;){if(a.matches(Oa))return!0;a=a.parentElement}return!1}})}function Ha(e){let a=Ma(e);ha().nextFrame((()=>{a&&!$a(a.activeElement,0)&&function(e){null==e||e.focus({preventScroll:!0})}(e)}))}let ja=["textarea","input"].join(",");function za(e,a=e=>e){return e.slice().sort(((e,t)=>{let l=a(e),i=a(t);if(null===l||null===i)return 0;let r=l.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function Ga(e,a){return Wa(Ba(),a,{relativeTo:e})}function Wa(e,a,{sorted:t=!0,relativeTo:l=null,skipElements:i=[]}={}){let r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?za(e):e:Ba(e);i.length>0&&n.length>1&&(n=n.filter((e=>!i.includes(e)))),l=null!=l?l:r.activeElement;let o,s=(()=>{if(5&a)return 1;if(10&a)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&a)return 0;if(2&a)return Math.max(0,n.indexOf(l))-1;if(4&a)return Math.max(0,n.indexOf(l))+1;if(8&a)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&a?{preventScroll:!0}:{},g=0,d=n.length;do{if(g>=d||g+d<=0)return 0;let e=c+g;if(16&a)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}o=n[e],null==o||o.focus(u),g+=s}while(o!==r.activeElement);return 6&a&&function(e){var a,t;return null!=(t=null==(a=null==e?void 0:e.matches)?void 0:a.call(e,ja))&&t}(o)&&o.select(),o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),2}function Va(e,a,t){let i=va(a);(0,l.useEffect)((()=>{function a(e){i.current(e)}return document.addEventListener(e,a,t),()=>document.removeEventListener(e,a,t)}),[e,t])}function Ua({container:e,accept:a,walk:t,enabled:i=!0}){let r=(0,l.useRef)(a),n=(0,l.useRef)(t);(0,l.useEffect)((()=>{r.current=a,n.current=t}),[a,t]),ka((()=>{if(!e||!i)return;let a=Ma(e);if(!a)return;let t=r.current,l=n.current,o=Object.assign((e=>t(e)),{acceptNode:t}),s=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)l(s.currentNode)}),[e,i,r,n])}let qa=(0,l.createContext)(null);qa.displayName="OpenClosedContext";var Ka=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Ka||{});function Ja(){return(0,l.useContext)(qa)}function Za({value:e,children:a}){return l.createElement(qa.Provider,{value:e},a)}function Ya(e){var a;if(e.type)return e.type;let t=null!=(a=e.as)?a:"button";return"string"==typeof t&&"button"===t.toLowerCase()?"button":void 0}function Qa(e,a){let[t,i]=(0,l.useState)((()=>Ya(e)));return ka((()=>{i(Ya(e))}),[e.type,e.as]),ka((()=>{t||a.current&&a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&i("button")}),[t,a]),t}function Xa(e){return[e.screenX,e.screenY]}function et(){let e=(0,l.useRef)([-1,-1]);return{wasMoved(a){let t=Xa(a);return(e.current[0]!==t[0]||e.current[1]!==t[1])&&(e.current=t,!0)},update(a){e.current=Xa(a)}}}var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),lt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(lt||{});function it(e,a=e=>e){let t=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,l=za(a(e.items.slice()),(e=>e.dataRef.current.domRef.current)),i=t?l.indexOf(t):null;return-1===i&&(i=null),{items:l,activeItemIndex:i}}let rt={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,a)=>{var t;let l=it(e),i=function(e,a){let t=a.resolveItems();if(t.length<=0)return null;let l=a.resolveActiveIndex(),i=null!=l?l:-1,r=(()=>{switch(e.focus){case 0:return t.findIndex((e=>!a.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((e,t,l)=>!(-1!==i&&l.length-t-1>=i||a.resolveDisabled(e))));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,t)=>!(t<=i||a.resolveDisabled(e))));case 3:{let e=t.slice().reverse().findIndex((e=>!a.resolveDisabled(e)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((t=>a.resolveId(t)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===r?l:r}(a,{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...l,searchQuery:"",activeItemIndex:i,activationTrigger:null!=(t=a.trigger)?t:1}},3:(e,a)=>{let t=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),i=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find((e=>{var a;return(null==(a=e.dataRef.current.textValue)?void 0:a.startsWith(l))&&!e.dataRef.current.disabled})),r=i?e.items.indexOf(i):-1;return-1===r||r===e.activeItemIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeItemIndex:r,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,a)=>{let t=it(e,(e=>[...e,{id:a.id,dataRef:a.dataRef}]));return{...e,...t}},6:(e,a)=>{let t=it(e,(e=>{let t=e.findIndex((e=>e.id===a.id));return-1!==t&&e.splice(t,1),e}));return{...e,...t,activationTrigger:1}}},nt=(0,l.createContext)(null);function ot(e){let a=(0,l.useContext)(nt);if(null===a){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}return a}function st(e,a){return ta(a.type,rt,e,a)}nt.displayName="MenuContext";let ct=l.Fragment,ut=ra.RenderStrategy|ra.Static,gt=l.Fragment,dt=ua((function(e,a){let t=(0,l.useReducer)(st,{menuState:1,buttonRef:(0,l.createRef)(),itemsRef:(0,l.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:r,buttonRef:n},o]=t,s=Sa(a);!function(e,a,t=!0){let i=(0,l.useRef)(!1);function r(t,l){if(!i.current||t.defaultPrevented)return;let r=function e(a){return"function"==typeof a?e(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e),n=l(t);if(null!==n&&n.getRootNode().contains(n)){for(let e of r){if(null===e)continue;let a=e instanceof HTMLElement?e:e.current;if(null!=a&&a.contains(n)||t.composed&&t.composedPath().includes(a))return}return!$a(n,Fa.Loose)&&-1!==n.tabIndex&&t.preventDefault(),a(t,n)}}(0,l.useEffect)((()=>{requestAnimationFrame((()=>{i.current=t}))}),[t]);let n=(0,l.useRef)(null);Va("mousedown",(e=>{var a,t;i.current&&(n.current=(null==(t=null==(a=e.composedPath)?void 0:a.call(e))?void 0:t[0])||e.target)}),!0),Va("click",(e=>{n.current&&(r(e,(()=>n.current)),n.current=null)}),!0),Va("blur",(e=>r(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([n,r],((e,a)=>{var t;o({type:1}),$a(a,Fa.Loose)||(e.preventDefault(),null==(t=n.current)||t.focus())}),0===i);let c=ya((()=>{o({type:1})})),u=(0,l.useMemo)((()=>({open:0===i,close:c})),[i,c]),g=e,d={ref:s};return l.createElement(nt.Provider,{value:t},l.createElement(Za,{value:ta(i,{0:Ka.Open,1:Ka.Closed})},oa({ourProps:d,theirProps:g,slot:u,defaultTag:ct,name:"Menu"})))})),ft=ua((function(e,a){var t;let i=Ia(),{id:r=`headlessui-menu-button-${i}`,...n}=e,[o,s]=ot("Menu.Button"),c=Sa(o.buttonRef,a),u=pa(),g=ya((e=>{switch(e.key){case Ta.Space:case Ta.Enter:case Ta.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:Na.First})));break;case Ta.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:Na.Last})))}})),d=ya((e=>{e.key===Ta.Space&&e.preventDefault()})),f=ya((a=>{if(Pa(a.currentTarget))return a.preventDefault();e.disabled||(0===o.menuState?(s({type:1}),u.nextFrame((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(a.preventDefault(),s({type:0})))})),h=(0,l.useMemo)((()=>({open:0===o.menuState})),[o]);return oa({ourProps:{ref:c,id:r,type:Qa(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(t=o.itemsRef.current)?void 0:t.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:g,onKeyUp:d,onClick:f},theirProps:n,slot:h,defaultTag:"button",name:"Menu.Button"})})),ht=ua((function(e,a){var t,i;let r=Ia(),{id:n=`headlessui-menu-items-${r}`,...o}=e,[s,c]=ot("Menu.Items"),u=Sa(s.itemsRef,a),g=function(...e){return(0,l.useMemo)((()=>Ma(...e)),[...e])}(s.itemsRef),d=pa(),f=Ja(),h=null!==f?(f&Ka.Open)===Ka.Open:0===s.menuState;(0,l.useEffect)((()=>{let e=s.itemsRef.current;e&&0===s.menuState&&e!==(null==g?void 0:g.activeElement)&&e.focus({preventScroll:!0})}),[s.menuState,s.itemsRef,g]),Ua({container:s.itemsRef.current,enabled:0===s.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let p=ya((e=>{var a,t;switch(d.dispose(),e.key){case Ta.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),c({type:3,value:e.key});case Ta.Enter:if(e.preventDefault(),e.stopPropagation(),c({type:1}),null!==s.activeItemIndex){let{dataRef:e}=s.items[s.activeItemIndex];null==(t=null==(a=e.current)?void 0:a.domRef.current)||t.click()}Ha(s.buttonRef.current);break;case Ta.ArrowDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Next});case Ta.ArrowUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Previous});case Ta.Home:case Ta.PageUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.First});case Ta.End:case Ta.PageDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Last});case Ta.Escape:e.preventDefault(),e.stopPropagation(),c({type:1}),ha().nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case Ta.Tab:e.preventDefault(),e.stopPropagation(),c({type:1}),ha().nextFrame((()=>{Ga(s.buttonRef.current,e.shiftKey?Aa.Previous:Aa.Next)}));break;default:1===e.key.length&&(c({type:3,value:e.key}),d.setTimeout((()=>c({type:4})),350))}})),b=ya((e=>{e.key===Ta.Space&&e.preventDefault()})),m=(0,l.useMemo)((()=>({open:0===s.menuState})),[s]);return oa({ourProps:{"aria-activedescendant":null===s.activeItemIndex||null==(t=s.items[s.activeItemIndex])?void 0:t.id,"aria-labelledby":null==(i=s.buttonRef.current)?void 0:i.id,id:n,onKeyDown:p,onKeyUp:b,role:"menu",tabIndex:0,ref:u},theirProps:o,slot:m,defaultTag:"div",features:ut,visible:h,name:"Menu.Items"})})),pt=ua((function(e,a){let t=Ia(),{id:i=`headlessui-menu-item-${t}`,disabled:r=!1,...n}=e,[o,s]=ot("Menu.Item"),c=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===i,u=(0,l.useRef)(null),g=Sa(a,u);ka((()=>{if(0!==o.menuState||!c||0===o.activationTrigger)return;let e=ha();return e.requestAnimationFrame((()=>{var e,a;null==(a=null==(e=u.current)?void 0:e.scrollIntoView)||a.call(e,{block:"nearest"})})),e.dispose}),[u,c,o.menuState,o.activationTrigger,o.activeItemIndex]);let d=(0,l.useRef)({disabled:r,domRef:u});ka((()=>{d.current.disabled=r}),[d,r]),ka((()=>{var e,a;d.current.textValue=null==(a=null==(e=u.current)?void 0:e.textContent)?void 0:a.toLowerCase()}),[d,u]),ka((()=>(s({type:5,id:i,dataRef:d}),()=>s({type:6,id:i}))),[d,i]);let f=ya((()=>{s({type:1})})),h=ya((e=>{if(r)return e.preventDefault();s({type:1}),Ha(o.buttonRef.current)})),p=ya((()=>{if(r)return s({type:2,focus:Na.Nothing});s({type:2,focus:Na.Specific,id:i})})),b=et(),m=ya((e=>b.update(e))),w=ya((e=>{b.wasMoved(e)&&(r||c||s({type:2,focus:Na.Specific,id:i,trigger:0}))})),k=ya((e=>{b.wasMoved(e)&&(r||c&&s({type:2,focus:Na.Nothing}))})),v=(0,l.useMemo)((()=>({active:c,disabled:r,close:f})),[c,r,f]);return oa({ourProps:{id:i,ref:g,role:"menuitem",tabIndex:!0===r?void 0:-1,"aria-disabled":!0===r||void 0,disabled:void 0,onClick:h,onFocus:p,onPointerEnter:m,onMouseEnter:m,onPointerMove:w,onMouseMove:w,onPointerLeave:k,onMouseLeave:k},theirProps:n,slot:v,defaultTag:gt,name:"Menu.Item"})})),bt=Object.assign(dt,{Button:ft,Items:ht,Item:pt});function mt(){let e=(0,l.useRef)(!1);return ka((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function wt(e,...a){e&&a.length>0&&e.classList.add(...a)}function kt(e,...a){e&&a.length>0&&e.classList.remove(...a)}function vt({container:e,direction:a,classes:t,onStart:l,onStop:i}){let r=mt(),n=pa(),o=va(a);ka((()=>{let a=ha();n.add(a.dispose);let s=e.current;if(s&&"idle"!==o.current&&r.current)return a.dispose(),l.current(o.current),a.add(function(e,a,t,l){let i=t?"enter":"leave",r=ha(),n=void 0!==l?function(e){let a={called:!1};return(...t)=>{if(!a.called)return a.called=!0,e(...t)}}(l):()=>{};"enter"===i&&(e.removeAttribute("hidden"),e.style.display="");let o=ta(i,{enter:()=>a.enter,leave:()=>a.leave}),s=ta(i,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),c=ta(i,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom});return kt(e,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),wt(e,...o,...c),r.nextFrame((()=>{kt(e,...c),wt(e,...s),function(e,a){let t=ha();if(!e)return t.dispose;let{transitionDuration:l,transitionDelay:i}=getComputedStyle(e),[r,n]=[l,i].map((e=>{let[a=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,a)=>a-e));return a})),o=r+n;if(0!==o){t.group((t=>{t.setTimeout((()=>{a(),t.dispose()}),o),t.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&t.dispose()}))}));let l=t.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(a(),l())}))}else a();t.add((()=>a())),t.dispose}(e,(()=>(kt(e,...o),wt(e,...a.entered),n())))})),r.dispose}(s,t.current,"enter"===o.current,(()=>{a.dispose(),i.current(o.current)}))),a.dispose}),[a])}function yt(e=0){let[a,t]=(0,l.useState)(e),i=(0,l.useCallback)((e=>t((a=>a|e))),[a]),r=(0,l.useCallback)((e=>Boolean(a&e)),[a]),n=(0,l.useCallback)((e=>t((a=>a&~e))),[t]),o=(0,l.useCallback)((e=>t((a=>a^e))),[t]);return{flags:a,addFlag:i,hasFlag:r,removeFlag:n,toggleFlag:o}}function _t(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let xt=(0,l.createContext)(null);xt.displayName="TransitionContext";var St=(e=>(e.Visible="visible",e.Hidden="hidden",e))(St||{});let Ct=(0,l.createContext)(null);function Et(e){return"children"in e?Et(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function It(e,a){let t=va(e),i=(0,l.useRef)([]),r=mt(),n=pa(),o=ya(((e,a=na.Hidden)=>{let l=i.current.findIndex((({el:a})=>a===e));-1!==l&&(ta(a,{[na.Unmount](){i.current.splice(l,1)},[na.Hidden](){i.current[l].state="hidden"}}),n.microTask((()=>{var e;!Et(i)&&r.current&&(null==(e=t.current)||e.call(t))})))})),s=ya((e=>{let a=i.current.find((({el:a})=>a===e));return a?"visible"!==a.state&&(a.state="visible"):i.current.push({el:e,state:"visible"}),()=>o(e,na.Unmount)})),c=(0,l.useRef)([]),u=(0,l.useRef)(Promise.resolve()),g=(0,l.useRef)({enter:[],leave:[],idle:[]}),d=ya(((e,t,l)=>{c.current.splice(0),a&&(a.chains.current[t]=a.chains.current[t].filter((([a])=>a!==e))),null==a||a.chains.current[t].push([e,new Promise((e=>{c.current.push(e)}))]),null==a||a.chains.current[t].push([e,new Promise((e=>{Promise.all(g.current[t].map((([e,a])=>a))).then((()=>e()))}))]),"enter"===t?u.current=u.current.then((()=>null==a?void 0:a.wait.current)).then((()=>l(t))):l(t)})),f=ya(((e,a,t)=>{Promise.all(g.current[a].splice(0).map((([e,a])=>a))).then((()=>{var e;null==(e=c.current.shift())||e()})).then((()=>t(a)))}));return(0,l.useMemo)((()=>({children:i,register:s,unregister:o,onStart:d,onStop:f,wait:u,chains:g})),[s,o,i,d,f,g,u])}function Tt(){}Ct.displayName="NestingContext";let Nt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Pt(e){var a;let t={};for(let l of Nt)t[l]=null!=(a=e[l])?a:Tt;return t}let Mt=ra.RenderStrategy,Ot=ua((function(e,a){let{show:t,appear:i=!1,unmount:r,...n}=e,o=(0,l.useRef)(null),s=Sa(o,a);Ca();let c=Ja();if(void 0===t&&null!==c&&(t=(c&Ka.Open)===Ka.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,g]=(0,l.useState)(t?"visible":"hidden"),d=It((()=>{g("hidden")})),[f,h]=(0,l.useState)(!0),p=(0,l.useRef)([t]);ka((()=>{!1!==f&&p.current[p.current.length-1]!==t&&(p.current.push(t),h(!1))}),[p,t]);let b=(0,l.useMemo)((()=>({show:t,appear:i,initial:f})),[t,i,f]);(0,l.useEffect)((()=>{if(t)g("visible");else if(Et(d)){let e=o.current;if(!e)return;let a=e.getBoundingClientRect();0===a.x&&0===a.y&&0===a.width&&0===a.height&&g("hidden")}else g("hidden")}),[t,d]);let m={unmount:r};return l.createElement(Ct.Provider,{value:d},l.createElement(xt.Provider,{value:b},oa({ourProps:{...m,as:l.Fragment,children:l.createElement(Rt,{ref:s,...m,...n})},theirProps:{},defaultTag:l.Fragment,features:Mt,visible:"visible"===u,name:"Transition"})))})),Rt=ua((function(e,a){let{beforeEnter:t,afterEnter:i,beforeLeave:r,afterLeave:n,enter:o,enterFrom:s,enterTo:c,entered:u,leave:g,leaveFrom:d,leaveTo:f,...h}=e,p=(0,l.useRef)(null),b=Sa(p,a),m=h.unmount?na.Unmount:na.Hidden,{show:w,appear:k,initial:v}=function(){let e=(0,l.useContext)(xt);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[y,_]=(0,l.useState)(w?"visible":"hidden"),x=function(){let e=(0,l.useContext)(Ct);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:S,unregister:C}=x,E=(0,l.useRef)(null);(0,l.useEffect)((()=>S(p)),[S,p]),(0,l.useEffect)((()=>{if(m===na.Hidden&&p.current)return w&&"visible"!==y?void _("visible"):ta(y,{hidden:()=>C(p),visible:()=>S(p)})}),[y,p,S,C,w,m]);let I=va({enter:_t(o),enterFrom:_t(s),enterTo:_t(c),entered:_t(u),leave:_t(g),leaveFrom:_t(d),leaveTo:_t(f)}),T=function(e){let a=(0,l.useRef)(Pt(e));return(0,l.useEffect)((()=>{a.current=Pt(e)}),[e]),a}({beforeEnter:t,afterEnter:i,beforeLeave:r,afterLeave:n}),N=Ca();(0,l.useEffect)((()=>{if(N&&"visible"===y&&null===p.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[p,y,N]);let P=v&&!k,M=!N||P||E.current===w?"idle":w?"enter":"leave",O=yt(0),R=ya((e=>ta(e,{enter:()=>{O.addFlag(Ka.Opening),T.current.beforeEnter()},leave:()=>{O.addFlag(Ka.Closing),T.current.beforeLeave()},idle:()=>{}}))),A=ya((e=>ta(e,{enter:()=>{O.removeFlag(Ka.Opening),T.current.afterEnter()},leave:()=>{O.removeFlag(Ka.Closing),T.current.afterLeave()},idle:()=>{}}))),D=It((()=>{_("hidden"),C(p)}),x);vt({container:p,classes:I,direction:M,onStart:va((e=>{D.onStart(p,e,R)})),onStop:va((e=>{D.onStop(p,e,A),"leave"===e&&!Et(D)&&(_("hidden"),C(p))}))}),(0,l.useEffect)((()=>{P&&(m===na.Hidden?E.current=null:E.current=w)}),[w,P,y]);let L=h,B={ref:b};return k&&w&&wa.isServer&&(L={...L,className:la(h.className,...I.current.enter,...I.current.enterFrom)}),l.createElement(Ct.Provider,{value:D},l.createElement(Za,{value:ta(y,{visible:Ka.Open,hidden:Ka.Closed})|O.flags},oa({ourProps:B,theirProps:L,defaultTag:"div",features:Mt,visible:"visible"===y,name:"Transition.Child"})))})),At=ua((function(e,a){let t=null!==(0,l.useContext)(xt),i=null!==Ja();return l.createElement(l.Fragment,null,!t&&i?l.createElement(Ot,{ref:a,...e}):l.createElement(Rt,{ref:a,...e}))})),Dt=Object.assign(Ot,{Child:At,Root:Ot});var Lt=t(8477),Bt=t(7500),Ft=t(826),$t=t(2149);const Ht={Desktop:"Desktop",Tablet:"Tablet",Mobile:"Mobile"},jt=({className:e="",devices:a=Object.values(Ht)})=>{const t=aa()||"Desktop",{__experimentalSetPreviewDeviceType:i}=(0,qe.dispatch)("core/edit-post"),r=(0,l.useCallback)((e=>{i(Ht[e])}),[]),n=(e,a="h-4 w-4")=>{switch(e){case"Desktop":return(0,l.createElement)(Lt,{className:a,"aria-hidden":"true"});case"Tablet":return(0,l.createElement)(Bt,{className:a,"aria-hidden":"true"});case"Mobile":return(0,l.createElement)(Ft,{className:a,"aria-hidden":"true"});default:return null}};return(0,l.createElement)(bt,{as:"div",className:`wcbMyResponsiveToggle relative inline-block text-left ${e}`},(0,l.createElement)(bt.Button,{className:"wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",title:t},n(t),(0,l.createElement)($t,{className:"w-2.5 h-2.5 ml-1","aria-hidden":"true"})),(0,l.createElement)(Dt,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},(0,l.createElement)(bt.Items,{className:"wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"},(0,l.createElement)("div",{className:"p-1 space-y-0.5"},a.map(((e,a)=>(0,l.createElement)(bt.Item,{key:a+e},(({active:a})=>{const i=a||e===t;return(0,l.createElement)("button",{className:(i?"bg-sky-50 text-sky-600":"text-slate-800")+" group flex w-full items-center justify-center rounded-md py-1.5",onClick:a=>{r(e)},title:e},n(e))}))))))))},zt=({children:e,className:a="mb-2",help:t,hasResponsive:i,devices:r})=>(0,l.createElement)("div",{className:`components-base-control__label font-medium uppercase text-[11px] ${a}`},(0,l.createElement)("div",{className:"wb-control-label flex items-center"},(0,l.createElement)("div",{className:"wb-base-control__label"},e),(0,l.createElement)("div",{className:"wb-base-control__responsive ml-1.5"},i&&(0,l.createElement)(jt,{devices:r}))),!!t&&(0,l.createElement)("div",{className:"wb-base-help text-xs text-slate-500"},(0,l.createElement)("p",{className:"components-base-control__help"},t))),Gt={Desktop:void 0},Wt=({className:e="space-y-3",zIndexControl:a=Gt,setAttrs__zIndex:t})=>{const i=aa()||"Desktop",r=void 0!==a[i]?a[i]:void 0!==a.Tablet?a.Tablet:a.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(s.RangeControl,{help:(0,n.__)("Above setting will only take effect once you are on the live page, and not while you're editing.","boostify-blocks"),value:void 0,label:(0,l.createElement)(zt,{className:"",hasResponsive:!0},(0,n.__)("Z-Index","boostify-blocks")),allowReset:!0,max:1e3,min:-100,initialPosition:r,onChange:e=>{t({...a,[i]:e})}}))},Vt=({label:e="My select",hasResponsive:a,labelClass:t="flex-1",devices:i,...r})=>(0,l.createElement)("div",{className:"wcb-MySelect w-full flex justify-between items-center"},(0,l.createElement)(zt,{className:t,hasResponsive:a,devices:i},e),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)(s.SelectControl,{hideLabelFromVision:!0,...r}))),Ut=[{label:"None",value:""},{label:"Bounce",value:"bounce"},{label:"Flash",value:"flash"},{label:"Pulse",value:"pulse"},{label:"RubberBand",value:"rubberBand"},{label:"ShakeX",value:"shakeX"},{label:"ShakeY",value:"shakeY"},{label:"HeadShake",value:"headShake"},{label:"Swing",value:"swing"},{label:"Tada",value:"tada"},{label:"Wobble",value:"wobble"},{label:"Jello",value:"jello"},{label:"HeartBeat",value:"heartBeat"},{label:"BackInDown",value:"backInDown"},{label:"BackInLeft",value:"backInLeft"},{label:"BackInRight",value:"backInRight"},{label:"BackInUp",value:"backInUp"},{label:"BounceIn",value:"bounceIn"},{label:"BounceInDown",value:"bounceInDown"},{label:"BounceInLeft",value:"bounceInLeft"},{label:"BounceInRight",value:"bounceInRight"},{label:"BounceInUp",value:"bounceInUp"},{label:"FadeIn",value:"fadeIn"},{label:"FadeInDown",value:"fadeInDown"},{label:"FadeInDownBig",value:"fadeInDownBig"},{label:"FadeInLeft",value:"fadeInLeft"},{label:"FadeInLeftBig",value:"fadeInLeftBig"},{label:"FadeInRight",value:"fadeInRight"},{label:"FadeInRightBig",value:"fadeInRightBig"},{label:"FadeInUp",value:"fadeInUp"},{label:"FadeInUpBig",value:"fadeInUpBig"},{label:"FadeInTopLeft",value:"fadeInTopLeft"},{label:"FadeInTopRight",value:"fadeInTopRight"},{label:"FadeInBottomLeft",value:"fadeInBottomLeft"},{label:"FadeInBottomRight",value:"fadeInBottomRight"},{label:"Flip",value:"flip"},{label:"FlipInX",value:"flipInX"},{label:"FlipInY",value:"flipInY"},{label:"LightSpeedInRight",value:"lightSpeedInRight"},{label:"LightSpeedInLeft",value:"lightSpeedInLeft"},{label:"RotateIn",value:"rotateIn"},{label:"RotateInDownLeft",value:"rotateInDownLeft"},{label:"RotateInDownRight",value:"rotateInDownRight"},{label:"RotateInUpLeft",value:"rotateInUpLeft"},{label:"RotateInUpRight",value:"rotateInUpRight"},{label:"Hinge",value:"hinge"},{label:"JackInTheBox",value:"jackInTheBox"},{label:"RollIn",value:"rollIn"},{label:"ZoomIn",value:"zoomIn"},{label:"ZoomInDown",value:"zoomInDown"},{label:"ZoomInLeft",value:"zoomInLeft"},{label:"ZoomInRight",value:"zoomInRight"},{label:"ZoomInUp",value:"zoomInUp"},{label:"SlideInDown",value:"slideInDown"},{label:"SlideInLeft",value:"slideInLeft"},{label:"SlideInRight",value:"slideInRight"},{label:"SlideInUp",value:"slideInUp"}],qt=({onChange:e,data:a})=>(console.log(22,"-----MyMyMotionEffectData-----",{data:a}),(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(Vt,{label:"Animation name",options:Ut,hasResponsive:!1,onChange:t=>e({...a,entranceAnimation:t}),value:a.entranceAnimation}),(0,l.createElement)(Vt,{label:"Animation duration",options:[{label:"Slow (2s)",value:"slow"},{label:"Slower (3s)",value:"slower"},{label:"Fast (800ms)",value:"fast"},{label:"Faster (500ms)",value:"faster"}],hasResponsive:!1,onChange:t=>e({...a,animationDuration:t}),value:a.animationDuration}),(0,l.createElement)(s.__experimentalNumberControl,{isShiftStepEnabled:!0,shiftStep:1e3,step:100,__unstableInputWidth:"60px",label:(0,n.__)("Animation delay (ms)"),labelPosition:"edge",min:0,value:a.animationDelay,onChange:t=>e({...a,animationDelay:Number(t||0)||0})}),(0,l.createElement)(Vt,{label:"Animation repeat",options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"infinite",value:"infinite"}],hasResponsive:!1,onChange:t=>e({...a,repeat:t}),value:a.repeat}))),Kt=({handleTogglePanel:e,tabAdvancesIsPanelOpen:a,advance_responsiveCondition:t,advance_zIndex:i,advance_motionEffect:r,setAttributes:o,children:c})=>(0,l.createElement)(l.Fragment,null,r?(0,l.createElement)(s.PanelBody,{onToggle:()=>e("Advances","MyMyMotionEffectControl"),initialOpen:"MyMyMotionEffectControl"===a,opened:"MyMyMotionEffectControl"===a||void 0,title:(0,n.__)("Motion Effect","boostify-blocks")},(0,l.createElement)(qt,{data:r,onChange:e=>o({advance_motionEffect:e})})):null,(0,l.createElement)(s.PanelBody,{onToggle:()=>e("Advances","Responsive Conditions"),initialOpen:"Responsive Conditions"===a,opened:"Responsive Conditions"===a||void 0,title:(0,n.__)("Responsive Conditions","boostify-blocks")},(0,l.createElement)(ea,{responsiveConditionControl:t,setAttrs__responsiveCondition:e=>o({advance_responsiveCondition:e})})),(0,l.createElement)(s.PanelBody,{onToggle:()=>e("Advances","Z-Index"),initialOpen:"Z-Index"===a,opened:"Z-Index"===a||void 0,title:(0,n.__)("Z-Index","boostify-blocks")},(0,l.createElement)(Wt,{zIndexControl:i,setAttrs__zIndex:e=>o({advance_zIndex:e})})),c||null);let Jt=(0,l.createContext)(null);function Zt(){let e=(0,l.useContext)(Jt);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Zt),e}return e}function Yt(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=ya((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),i=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(Jt.Provider,{value:i},e.children)}),[a])]}let Qt=ua((function(e,a){let t=Ia(),{id:l=`headlessui-label-${t}`,passive:i=!1,...r}=e,n=Zt(),o=Sa(a);ka((()=>n.register(l)),[l,n.register]);let s={ref:o,...n.props,id:l};return i&&("onClick"in s&&(delete s.htmlFor,delete s.onClick),"onClick"in r&&delete r.onClick),oa({ourProps:s,theirProps:r,slot:n.slot||{},defaultTag:"label",name:n.name||"Label"})})),Xt=Object.assign(Qt,{}),el=(0,l.createContext)(null);function al(){let e=(0,l.useContext)(el);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,al),e}return e}function tl(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=ya((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),i=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(el.Provider,{value:i},e.children)}),[a])]}let ll=ua((function(e,a){let t=Ia(),{id:l=`headlessui-description-${t}`,...i}=e,r=al(),n=Sa(a);return ka((()=>r.register(l)),[l,r.register]),oa({ourProps:{ref:n,...r.props,id:l},theirProps:i,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})})),il=Object.assign(ll,{});var rl=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(rl||{});let nl=ua((function(e,a){let{features:t=1,...l}=e;return oa({ourProps:{ref:a,"aria-hidden":!(2&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}},theirProps:l,slot:{},defaultTag:"div",name:"Hidden"})}));function ol(e={},a=null,t=[]){for(let[l,i]of Object.entries(e))cl(t,sl(a,l),i);return t}function sl(e,a){return e?e+"["+a+"]":a}function cl(e,a,t){if(Array.isArray(t))for(let[l,i]of t.entries())cl(e,sl(a,l.toString()),i);else t instanceof Date?e.push([a,t.toISOString()]):"boolean"==typeof t?e.push([a,t?"1":"0"]):"string"==typeof t?e.push([a,t]):"number"==typeof t?e.push([a,`${t}`]):null==t?e.push([a,""]):ol(t,a,e)}var ul=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(ul||{});let gl={0(e,a){let t=[...e.options,{id:a.id,element:a.element,propsRef:a.propsRef}];return{...e,options:za(t,(e=>e.element.current))}},1(e,a){let t=e.options.slice(),l=e.options.findIndex((e=>e.id===a.id));return-1===l?e:(t.splice(l,1),{...e,options:t})}},dl=(0,l.createContext)(null);function fl(e){let a=(0,l.useContext)(dl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,fl),a}return a}dl.displayName="RadioGroupDataContext";let hl=(0,l.createContext)(null);function pl(e){let a=(0,l.useContext)(hl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,pl),a}return a}function bl(e,a){return ta(a.type,gl,e,a)}hl.displayName="RadioGroupActionsContext";var ml=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(ml||{});let wl=ua((function(e,a){let t=Ia(),{id:i=`headlessui-radiogroup-${t}`,value:r,defaultValue:n,name:o,onChange:s,by:c=(e,a)=>e===a,disabled:u=!1,...g}=e,d=ya("string"==typeof c?(e,a)=>{let t=c;return(null==e?void 0:e[t])===(null==a?void 0:a[t])}:c),[f,h]=(0,l.useReducer)(bl,{options:[]}),p=f.options,[b,m]=Yt(),[w,k]=tl(),v=(0,l.useRef)(null),y=Sa(v,a),[_,x]=function(e,a,t){let[i,r]=(0,l.useState)(t),n=void 0!==e,o=(0,l.useRef)(n),s=(0,l.useRef)(!1),c=(0,l.useRef)(!1);return!n||o.current||s.current?!n&&o.current&&!c.current&&(c.current=!0,o.current=n,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,o.current=n,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[n?e:i,ya((e=>(n||r(e),null==a?void 0:a(e))))]}(r,s,n),S=(0,l.useMemo)((()=>p.find((e=>!e.propsRef.current.disabled))),[p]),C=(0,l.useMemo)((()=>p.some((e=>d(e.propsRef.current.value,_)))),[p,_]),E=ya((e=>{var a;if(u||d(e,_))return!1;let t=null==(a=p.find((a=>d(a.propsRef.current.value,e))))?void 0:a.propsRef.current;return!(null!=t&&t.disabled||(null==x||x(e),0))}));Ua({container:v.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let I=ya((e=>{let a=v.current;if(!a)return;let t=Ma(a),l=p.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case Ta.Enter:!function(e){var a;let t=null!=(a=null==e?void 0:e.form)?a:e.closest("form");if(t)for(let e of t.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type)return void e.click()}(e.currentTarget);break;case Ta.ArrowLeft:case Ta.ArrowUp:if(e.preventDefault(),e.stopPropagation(),Wa(l,Aa.Previous|Aa.WrapAround)===Da.Success){let e=p.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&E(e.propsRef.current.value)}break;case Ta.ArrowRight:case Ta.ArrowDown:if(e.preventDefault(),e.stopPropagation(),Wa(l,Aa.Next|Aa.WrapAround)===Da.Success){let e=p.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&E(e.propsRef.current.value)}break;case Ta.Space:{e.preventDefault(),e.stopPropagation();let a=p.find((e=>e.element.current===(null==t?void 0:t.activeElement)));a&&E(a.propsRef.current.value)}}})),T=ya((e=>(h({type:0,...e}),()=>h({type:1,id:e.id})))),N=(0,l.useMemo)((()=>({value:_,firstOption:S,containsCheckedOption:C,disabled:u,compare:d,...f})),[_,S,C,u,d,f]),P=(0,l.useMemo)((()=>({registerOption:T,change:E})),[T,E]),M={ref:y,id:i,role:"radiogroup","aria-labelledby":b,"aria-describedby":w,onKeyDown:I},O=(0,l.useMemo)((()=>({value:_})),[_]),R=(0,l.useRef)(null),A=pa();return(0,l.useEffect)((()=>{R.current&&void 0!==n&&A.addEventListener(R.current,"reset",(()=>{E(n)}))}),[R,E]),l.createElement(k,{name:"RadioGroup.Description"},l.createElement(m,{name:"RadioGroup.Label"},l.createElement(hl.Provider,{value:P},l.createElement(dl.Provider,{value:N},null!=o&&null!=_&&ol({[o]:_}).map((([e,a],t)=>l.createElement(nl,{features:rl.Hidden,ref:0===t?e=>{var a;R.current=null!=(a=null==e?void 0:e.closest("form"))?a:null}:void 0,...ga({key:e,as:"input",type:"radio",checked:null!=a,hidden:!0,readOnly:!0,name:e,value:a})}))),oa({ourProps:M,theirProps:g,slot:O,defaultTag:"div",name:"RadioGroup"})))))})),kl=ua((function(e,a){var t;let i=Ia(),{id:r=`headlessui-radiogroup-option-${i}`,value:n,disabled:o=!1,...s}=e,c=(0,l.useRef)(null),u=Sa(c,a),[g,d]=Yt(),[f,h]=tl(),{addFlag:p,removeFlag:b,hasFlag:m}=yt(1),w=va({value:n,disabled:o}),k=fl("RadioGroup.Option"),v=pl("RadioGroup.Option");ka((()=>v.registerOption({id:r,element:c,propsRef:w})),[r,v,c,e]);let y=ya((e=>{var a;if(Pa(e.currentTarget))return e.preventDefault();v.change(n)&&(p(2),null==(a=c.current)||a.focus())})),_=ya((e=>{if(Pa(e.currentTarget))return e.preventDefault();p(2)})),x=ya((()=>b(2))),S=(null==(t=k.firstOption)?void 0:t.id)===r,C=k.disabled||o,E=k.compare(k.value,n),I={ref:u,id:r,role:"radio","aria-checked":E?"true":"false","aria-labelledby":g,"aria-describedby":f,"aria-disabled":!!C||void 0,tabIndex:C?-1:E||!k.containsCheckedOption&&S?0:-1,onClick:C?void 0:y,onFocus:C?void 0:_,onBlur:C?void 0:x},T=(0,l.useMemo)((()=>({checked:E,disabled:C,active:m(2)})),[E,C,m]);return l.createElement(h,{name:"RadioGroup.Description"},l.createElement(d,{name:"RadioGroup.Label"},oa({ourProps:I,theirProps:s,slot:T,defaultTag:"div",name:"RadioGroup.Option"})))})),vl=Object.assign(wl,{Option:kl,Label:Xt,Description:il});const yl=[{name:"left",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"center",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"right",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'}],_l=function({onChange:e=()=>{},value:a,className:t="",plans:i=yl,label:r=(0,n.__)("Alignment","boostify-blocks"),hasResponsive:o=!0,isWrap:c=!1,labelClassName:u,contentClassName:g="mt-3"}){const[d,f]=(0,l.useState)(a||i[0].name);return(0,l.useEffect)((()=>{d!==a&&f(a||"")}),[a]),(0,l.createElement)(vl,{className:t,value:d,onChange:a=>{f(a),e(a)}},(0,l.createElement)(vl.Label,{className:""},(0,l.createElement)(zt,{className:u,hasResponsive:o},r)),(0,l.createElement)("div",{className:`${g} relative flex gap-1 ${c?"flex-wrap":""}`},i.map((e=>(0,l.createElement)(vl.Option,{key:e.name,value:e.name,as:l.Fragment},(({checked:a})=>(0,l.createElement)("div",{className:"relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg "+(a?"bg-sky-50 border-sky-400 text-sky-500":"text-neutral-500 border-slate-300 hover:border-slate-500")},(0,l.createElement)(s.Tooltip,{position:"top center",delay:400,text:e.name.charAt(0).toUpperCase()+e.name.slice(1)},(0,l.createElement)("div",{className:"absolute inset-0 z-[1]"})),(0,l.createElement)("div",{className:"text-xs leading-5",dangerouslySetInnerHTML:{__html:e.icon}}))))))))},xl=[{name:"h1",icon:"H1"},{name:"h2",icon:"H2"},{name:"h3",icon:"H3"},{name:"h4",icon:"H4"},{name:"h5",icon:"H5"},{name:"h6",icon:"H6"},{name:"div",icon:"DIV"},{name:"p",icon:"P"}],Sl=({onChange:e,tag:a,className:t,label:i=(0,n.__)("Heading tag","boostify-blocks")})=>(0,l.createElement)(_l,{label:i,className:t,onChange:e,value:a,plans:xl,isWrap:!0,hasResponsive:!1}),Cl=({onChange:e,textAlignment:a,className:t,hasResponsive:i,label:r=(0,n.__)("Alignment","boostify-blocks")})=>(0,l.createElement)(_l,{className:t,onChange:e,value:a||"",hasResponsive:i,label:r}),El={textAlignment:{Desktop:"center"},headingTag:"h4",enableDescription:!0,enablePrefix:!1,enableTitle:!0,enableCTAButton:!1},Il=({panelData:e=El,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{textAlignment:c,headingTag:u,enableDescription:g,enablePrefix:d,enableTitle:f,enableCTAButton:h}=e,{currentDeviceValue:p}=Le(c,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Layout","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(Cl,{textAlignment:p,onChange:t=>{a({...e,textAlignment:{...c,[o]:t}})}}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable prefix","boostify-blocks"),checked:d,className:"mb-0",onChange:t=>{a({...e,enablePrefix:t})}}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable title","boostify-blocks"),checked:f,className:"mb-0",onChange:t=>{a({...e,enableTitle:t})}}),f&&(0,l.createElement)(Sl,{tag:u,onChange:t=>{a({...e,headingTag:t})}}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable description","boostify-blocks"),checked:g,className:"mb-0",onChange:t=>{a({...e,enableDescription:t})}}),(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable CTA button","boostify-blocks"),checked:h,className:"mb-0",onChange:t=>{a({...e,enableCTAButton:t})}})))},Tl=({onClick:e,className:a="text-slate-700",isSmall:t=!0,...i})=>(0,l.createElement)(s.Button,{className:a,onClick:e,icon:(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-5 h-5","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"})),isSmall:t,...i});function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)({}).hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Nl.apply(null,arguments)}function Pl(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Ml(e,a){return Ml=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},Ml(e,a)}var Ol=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function Rl(e,a){if(e.length!==a.length)return!1;for(var t=0;t<e.length;t++)if(!((l=e[t])===(i=a[t])||Ol(l)&&Ol(i)))return!1;var l,i;return!0}const Al=function(e,a){var t;void 0===a&&(a=Rl);var l,i=[],r=!1;return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];return r&&t===this&&a(n,i)||(l=e.apply(this,n),r=!0,t=this,i=n),l}};var Dl="object"==typeof performance&&"function"==typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function Ll(e){cancelAnimationFrame(e.id)}var Bl=-1;var Fl=null;function $l(e){if(void 0===e&&(e=!1),null===Fl||e){var a=document.createElement("div"),t=a.style;t.width="50px",t.height="50px",t.overflow="scroll",t.direction="rtl";var l=document.createElement("div"),i=l.style;return i.width="100px",i.height="100px",a.appendChild(l),document.body.appendChild(a),a.scrollLeft>0?Fl="positive-descending":(a.scrollLeft=1,Fl=0===a.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(a),Fl}return Fl}var Hl=function(e){var a=e.columnIndex;return e.data,e.rowIndex+":"+a};function jl(e){var a,t=e.getColumnOffset,i=e.getColumnStartIndexForOffset,r=e.getColumnStopIndexForStartIndex,n=e.getColumnWidth,o=e.getEstimatedTotalHeight,s=e.getEstimatedTotalWidth,c=e.getOffsetForColumnAndAlignment,u=e.getOffsetForRowAndAlignment,g=e.getRowHeight,d=e.getRowOffset,f=e.getRowStartIndexForOffset,h=e.getRowStopIndexForStartIndex,p=e.initInstanceProps,b=e.shouldResetStyleCacheOnItemSizeChange,m=e.validateProps;return(a=function(e){function a(a){var l;return(l=e.call(this,a)||this)._instanceProps=p(l.props,Pl(l)),l._resetIsScrollingTimeoutId=null,l._outerRef=void 0,l.state={instance:Pl(l),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:"number"==typeof l.props.initialScrollLeft?l.props.initialScrollLeft:0,scrollTop:"number"==typeof l.props.initialScrollTop?l.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},l._callOnItemsRendered=void 0,l._callOnItemsRendered=Al((function(e,a,t,i,r,n,o,s){return l.props.onItemsRendered({overscanColumnStartIndex:e,overscanColumnStopIndex:a,overscanRowStartIndex:t,overscanRowStopIndex:i,visibleColumnStartIndex:r,visibleColumnStopIndex:n,visibleRowStartIndex:o,visibleRowStopIndex:s})})),l._callOnScroll=void 0,l._callOnScroll=Al((function(e,a,t,i,r){return l.props.onScroll({horizontalScrollDirection:t,scrollLeft:e,scrollTop:a,verticalScrollDirection:i,scrollUpdateWasRequested:r})})),l._getItemStyle=void 0,l._getItemStyle=function(e,a){var i,r=l.props,o=r.columnWidth,s=r.direction,c=r.rowHeight,u=l._getItemStyleCache(b&&o,b&&s,b&&c),f=e+":"+a;if(u.hasOwnProperty(f))i=u[f];else{var h=t(l.props,a,l._instanceProps),p="rtl"===s;u[f]=i={position:"absolute",left:p?void 0:h,right:p?h:void 0,top:d(l.props,e,l._instanceProps),height:g(l.props,e,l._instanceProps),width:n(l.props,a,l._instanceProps)}}return i},l._getItemStyleCache=void 0,l._getItemStyleCache=Al((function(e,__,a){return{}})),l._onScroll=function(e){var a=e.currentTarget,t=a.clientHeight,i=a.clientWidth,r=a.scrollLeft,n=a.scrollTop,o=a.scrollHeight,s=a.scrollWidth;l.setState((function(e){if(e.scrollLeft===r&&e.scrollTop===n)return null;var a=l.props.direction,c=r;if("rtl"===a)switch($l()){case"negative":c=-r;break;case"positive-descending":c=s-i-r}c=Math.max(0,Math.min(c,s-i));var u=Math.max(0,Math.min(n,o-t));return{isScrolling:!0,horizontalScrollDirection:e.scrollLeft<r?"forward":"backward",scrollLeft:c,scrollTop:u,verticalScrollDirection:e.scrollTop<n?"forward":"backward",scrollUpdateWasRequested:!1}}),l._resetIsScrollingDebounced)},l._outerRefSetter=function(e){var a=l.props.outerRef;l._outerRef=e,"function"==typeof a?a(e):null!=a&&"object"==typeof a&&a.hasOwnProperty("current")&&(a.current=e)},l._resetIsScrollingDebounced=function(){var e,a,t,i;null!==l._resetIsScrollingTimeoutId&&Ll(l._resetIsScrollingTimeoutId),l._resetIsScrollingTimeoutId=(e=l._resetIsScrolling,a=150,t=Dl(),i={id:requestAnimationFrame((function l(){Dl()-t>=a?e.call(null):i.id=requestAnimationFrame(l)}))})},l._resetIsScrolling=function(){l._resetIsScrollingTimeoutId=null,l.setState({isScrolling:!1},(function(){l._getItemStyleCache(-1)}))},l}(function(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,Ml(e,a)})(a,e),a.getDerivedStateFromProps=function(e,a){return zl(e,a),m(e),null};var w=a.prototype;return w.scrollTo=function(e){var a=e.scrollLeft,t=e.scrollTop;void 0!==a&&(a=Math.max(0,a)),void 0!==t&&(t=Math.max(0,t)),this.setState((function(e){return void 0===a&&(a=e.scrollLeft),void 0===t&&(t=e.scrollTop),e.scrollLeft===a&&e.scrollTop===t?null:{horizontalScrollDirection:e.scrollLeft<a?"forward":"backward",scrollLeft:a,scrollTop:t,scrollUpdateWasRequested:!0,verticalScrollDirection:e.scrollTop<t?"forward":"backward"}}),this._resetIsScrollingDebounced)},w.scrollToItem=function(e){var a=e.align,t=void 0===a?"auto":a,l=e.columnIndex,i=e.rowIndex,r=this.props,n=r.columnCount,g=r.height,d=r.rowCount,f=r.width,h=this.state,p=h.scrollLeft,b=h.scrollTop,m=function(e){if(void 0===e&&(e=!1),-1===Bl||e){var a=document.createElement("div"),t=a.style;t.width="50px",t.height="50px",t.overflow="scroll",document.body.appendChild(a),Bl=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return Bl}();void 0!==l&&(l=Math.max(0,Math.min(l,n-1))),void 0!==i&&(i=Math.max(0,Math.min(i,d-1)));var w=o(this.props,this._instanceProps),k=s(this.props,this._instanceProps)>f?m:0,v=w>g?m:0;this.scrollTo({scrollLeft:void 0!==l?c(this.props,l,t,p,this._instanceProps,v):p,scrollTop:void 0!==i?u(this.props,i,t,b,this._instanceProps,k):b})},w.componentDidMount=function(){var e=this.props,a=e.initialScrollLeft,t=e.initialScrollTop;if(null!=this._outerRef){var l=this._outerRef;"number"==typeof a&&(l.scrollLeft=a),"number"==typeof t&&(l.scrollTop=t)}this._callPropsCallbacks()},w.componentDidUpdate=function(){var e=this.props.direction,a=this.state,t=a.scrollLeft,l=a.scrollTop;if(a.scrollUpdateWasRequested&&null!=this._outerRef){var i=this._outerRef;if("rtl"===e)switch($l()){case"negative":i.scrollLeft=-t;break;case"positive-ascending":i.scrollLeft=t;break;default:var r=i.clientWidth,n=i.scrollWidth;i.scrollLeft=n-r-t}else i.scrollLeft=Math.max(0,t);i.scrollTop=Math.max(0,l)}this._callPropsCallbacks()},w.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&Ll(this._resetIsScrollingTimeoutId)},w.render=function(){var e=this.props,a=e.children,t=e.className,i=e.columnCount,r=e.direction,n=e.height,c=e.innerRef,u=e.innerElementType,g=e.innerTagName,d=e.itemData,f=e.itemKey,h=void 0===f?Hl:f,p=e.outerElementType,b=e.outerTagName,m=e.rowCount,w=e.style,k=e.useIsScrolling,v=e.width,y=this.state.isScrolling,_=this._getHorizontalRangeToRender(),x=_[0],S=_[1],C=this._getVerticalRangeToRender(),E=C[0],I=C[1],T=[];if(i>0&&m)for(var N=E;N<=I;N++)for(var P=x;P<=S;P++)T.push((0,l.createElement)(a,{columnIndex:P,data:d,isScrolling:k?y:void 0,key:h({columnIndex:P,data:d,rowIndex:N}),rowIndex:N,style:this._getItemStyle(N,P)}));var M=o(this.props,this._instanceProps),O=s(this.props,this._instanceProps);return(0,l.createElement)(p||b||"div",{className:t,onScroll:this._onScroll,ref:this._outerRefSetter,style:Nl({position:"relative",height:n,width:v,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:r},w)},(0,l.createElement)(u||g||"div",{children:T,ref:c,style:{height:M,pointerEvents:y?"none":void 0,width:O}}))},w._callPropsCallbacks=function(){var e=this.props,a=e.columnCount,t=e.onItemsRendered,l=e.onScroll,i=e.rowCount;if("function"==typeof t&&a>0&&i>0){var r=this._getHorizontalRangeToRender(),n=r[0],o=r[1],s=r[2],c=r[3],u=this._getVerticalRangeToRender(),g=u[0],d=u[1],f=u[2],h=u[3];this._callOnItemsRendered(n,o,g,d,s,c,f,h)}if("function"==typeof l){var p=this.state,b=p.horizontalScrollDirection,m=p.scrollLeft,w=p.scrollTop,k=p.scrollUpdateWasRequested,v=p.verticalScrollDirection;this._callOnScroll(m,w,b,v,k)}},w._getHorizontalRangeToRender=function(){var e=this.props,a=e.columnCount,t=e.overscanColumnCount,l=e.overscanColumnsCount,n=e.overscanCount,o=e.rowCount,s=this.state,c=s.horizontalScrollDirection,u=s.isScrolling,g=s.scrollLeft,d=t||l||n||1;if(0===a||0===o)return[0,0,0,0];var f=i(this.props,g,this._instanceProps),h=r(this.props,f,g,this._instanceProps),p=u&&"backward"!==c?1:Math.max(1,d),b=u&&"forward"!==c?1:Math.max(1,d);return[Math.max(0,f-p),Math.max(0,Math.min(a-1,h+b)),f,h]},w._getVerticalRangeToRender=function(){var e=this.props,a=e.columnCount,t=e.overscanCount,l=e.overscanRowCount,i=e.overscanRowsCount,r=e.rowCount,n=this.state,o=n.isScrolling,s=n.verticalScrollDirection,c=n.scrollTop,u=l||i||t||1;if(0===a||0===r)return[0,0,0,0];var g=f(this.props,c,this._instanceProps),d=h(this.props,g,c,this._instanceProps),p=o&&"backward"!==s?1:Math.max(1,u),b=o&&"forward"!==s?1:Math.max(1,u);return[Math.max(0,g-p),Math.max(0,Math.min(r-1,d+b)),g,d]},a}(l.PureComponent)).defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},a}var zl=function(e,a){e.children,e.direction,e.height,e.innerTagName,e.outerTagName,e.overscanColumnsCount,e.overscanCount,e.overscanRowsCount,e.width,a.instance},Gl=jl({getColumnOffset:function(e,a){return a*e.columnWidth},getColumnWidth:function(e,a){return e.columnWidth},getRowOffset:function(e,a){return a*e.rowHeight},getRowHeight:function(e,a){return e.rowHeight},getEstimatedTotalHeight:function(e){var a=e.rowCount;return e.rowHeight*a},getEstimatedTotalWidth:function(e){var a=e.columnCount;return e.columnWidth*a},getOffsetForColumnAndAlignment:function(e,a,t,l,i,r){var n=e.columnCount,o=e.columnWidth,s=e.width,c=Math.max(0,n*o-s),u=Math.min(c,a*o),g=Math.max(0,a*o-s+r+o);switch("smart"===t&&(t=l>=g-s&&l<=u+s?"auto":"center"),t){case"start":return u;case"end":return g;case"center":var d=Math.round(g+(u-g)/2);return d<Math.ceil(s/2)?0:d>c+Math.floor(s/2)?c:d;default:return l>=g&&l<=u?l:g>u||l<g?g:u}},getOffsetForRowAndAlignment:function(e,a,t,l,i,r){var n=e.rowHeight,o=e.height,s=e.rowCount,c=Math.max(0,s*n-o),u=Math.min(c,a*n),g=Math.max(0,a*n-o+r+n);switch("smart"===t&&(t=l>=g-o&&l<=u+o?"auto":"center"),t){case"start":return u;case"end":return g;case"center":var d=Math.round(g+(u-g)/2);return d<Math.ceil(o/2)?0:d>c+Math.floor(o/2)?c:d;default:return l>=g&&l<=u?l:g>u||l<g?g:u}},getColumnStartIndexForOffset:function(e,a){var t=e.columnWidth,l=e.columnCount;return Math.max(0,Math.min(l-1,Math.floor(a/t)))},getColumnStopIndexForStartIndex:function(e,a,t){var l=e.columnWidth,i=e.columnCount,r=e.width,n=a*l,o=Math.ceil((r+t-n)/l);return Math.max(0,Math.min(i-1,a+o-1))},getRowStartIndexForOffset:function(e,a){var t=e.rowHeight,l=e.rowCount;return Math.max(0,Math.min(l-1,Math.floor(a/t)))},getRowStopIndexForStartIndex:function(e,a,t){var l=e.rowHeight,i=e.rowCount,r=e.height,n=a*l,o=Math.ceil((r+t-n)/l);return Math.max(0,Math.min(i-1,a+o-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.columnWidth,e.rowHeight}});const Wl=JSON.parse('{"lni-500px":59907,"lni-add-files":59905,"lni-adobe":59910,"lni-agenda":59906,"lni-airbnb":59911,"lni-alarm-clock":59912,"lni-alarm":59908,"lni-amazon-original":59909,"lni-amazon-pay":59913,"lni-amazon":59914,"lni-ambulance":59915,"lni-amex":59916,"lni-anchor":59917,"lni-android-original":59918,"lni-android":59919,"lni-angellist":59920,"lni-angle-double-down":59921,"lni-angle-double-left":59922,"lni-angle-double-right":59923,"lni-angle-double-up":59924,"lni-angular":59925,"lni-apartment":59926,"lni-app-store":59927,"lni-apple-music":59928,"lni-apple-pay":59929,"lni-apple":59930,"lni-archive":59935,"lni-arrow-down-circle":59931,"lni-arrow-down":59932,"lni-arrow-left-circle":59933,"lni-arrow-left":59934,"lni-arrow-right-circle":59936,"lni-arrow-right":59937,"lni-arrow-top-left":59938,"lni-arrow-top-right":59939,"lni-arrow-up-circle":59940,"lni-arrow-up":59941,"lni-arrows-horizontal":59942,"lni-arrows-vertical":59943,"lni-atlassian":59944,"lni-aws":59945,"lni-azure":59946,"lni-backward":59947,"lni-baloon":59948,"lni-ban":59949,"lni-bar-chart":59950,"lni-basketball":59951,"lni-behance-original":59952,"lni-behance":59953,"lni-bi-cycle":59954,"lni-bitbucket":59955,"lni-bitcoin":59956,"lni-blackboard":59957,"lni-blogger":59958,"lni-bluetooth-original":59959,"lni-bluetooth":59960,"lni-bold":59961,"lni-bolt-alt":59962,"lni-bolt":59968,"lni-book":59963,"lni-bookmark-alt":59964,"lni-bookmark":59965,"lni-bootstrap":59966,"lni-bricks":59967,"lni-bridge":59969,"lni-briefcase":59970,"lni-brush-alt":59971,"lni-brush":59972,"lni-btc":59973,"lni-bubble":59974,"lni-bug":59975,"lni-bulb":59976,"lni-bullhorn":59977,"lni-burger":59978,"lni-bus":59979,"lni-cake":59980,"lni-calculator":59981,"lni-calendar":59982,"lni-camera":59983,"lni-candy-cane":59984,"lni-candy":59985,"lni-capsule":59986,"lni-car-alt":59987,"lni-car":59988,"lni-caravan":59989,"lni-cart-full":59990,"lni-cart":59991,"lni-certificate":59992,"lni-check-box":59993,"lni-checkmark-circle":59994,"lni-checkmark":59995,"lni-chef-hat":59996,"lni-chevron-down-circle":59997,"lni-chevron-down":59998,"lni-chevron-left-circle":59999,"lni-chevron-left":60000,"lni-chevron-right-circle":60001,"lni-chevron-right":60002,"lni-chevron-up-circle":60003,"lni-chevron-up":60004,"lni-chrome":60005,"lni-chromecast":60006,"lni-circle-minus":60007,"lni-circle-plus":60008,"lni-clipboard":60009,"lni-close":60010,"lni-cloud-check":60011,"lni-cloud-download":60012,"lni-cloud-network":60013,"lni-cloud-sync":60014,"lni-cloud-upload":60015,"lni-cloud":60016,"lni-cloudflare":60017,"lni-cloudy-sun":60018,"lni-code-alt":60019,"lni-code":60020,"lni-codepen":60021,"lni-coffee-cup":60022,"lni-cog":60023,"lni-cogs":60024,"lni-coin":60025,"lni-comments-alt":60026,"lni-comments-reply":60027,"lni-comments":60028,"lni-compass":60029,"lni-connectdevelop":60030,"lni-construction-hammer":60031,"lni-construction":60032,"lni-consulting":60033,"lni-control-panel":60034,"lni-cool":60035,"lni-cpanel":60036,"lni-creative-commons":60037,"lni-credit-cards":60038,"lni-crop":60039,"lni-cross-circle":60040,"lni-crown":60041,"lni-css3":60042,"lni-cup":60043,"lni-customer":60044,"lni-cut":60045,"lni-dashboard":60046,"lni-database":60047,"lni-delivery":60048,"lni-dev":60049,"lni-diamond-alt":60050,"lni-diamond":60051,"lni-digitalocean":60052,"lni-diners-club":60053,"lni-dinner":60054,"lni-direction-alt":60055,"lni-direction-ltr":60056,"lni-direction-rtl":60057,"lni-direction":60058,"lni-discord":60059,"lni-discover":60060,"lni-display-alt":60061,"lni-display":60062,"lni-docker":60063,"lni-dollar":60064,"lni-domain":60065,"lni-download":60066,"lni-dribbble":60067,"lni-drop":60068,"lni-dropbox-original":60069,"lni-dropbox":60070,"lni-drupal-original":60071,"lni-drupal":60072,"lni-dumbbell":60073,"lni-edge":60074,"lni-empty-file":60075,"lni-enter":60076,"lni-envato":60077,"lni-envelope":60078,"lni-eraser":60079,"lni-euro":60080,"lni-exit-down":60081,"lni-exit-up":60082,"lni-exit":60083,"lni-eye":60084,"lni-facebook-filled":60085,"lni-facebook-messenger":60086,"lni-facebook-original":60087,"lni-facebook-oval":60088,"lni-facebook":60089,"lni-figma":60090,"lni-files":60091,"lni-firefox-original":60092,"lni-firefox":60093,"lni-fireworks":60094,"lni-first-aid":60095,"lni-flag-alt":60096,"lni-flag":60097,"lni-flags":60098,"lni-flickr":60099,"lni-flower":60100,"lni-folder":60101,"lni-forward":60102,"lni-frame-expand":60103,"lni-fresh-juice":60104,"lni-friendly":60105,"lni-full-screen":60106,"lni-funnel":60107,"lni-gallery":60108,"lni-game":60109,"lni-gatsby":60110,"lni-gift":60111,"lni-git":60112,"lni-github-original":60113,"lni-github":60114,"lni-goodreads":60115,"lni-google-drive":60116,"lni-google-pay":60117,"lni-google-wallet":60118,"lni-google":60119,"lni-graduation":60120,"lni-graph":60121,"lni-grid-alt":60122,"lni-grid":60123,"lni-grow":60124,"lni-hacker-news":60125,"lni-hammer":60126,"lni-hand":60127,"lni-handshake":60128,"lni-happy":60129,"lni-harddrive":60130,"lni-headphone-alt":60131,"lni-headphone":60132,"lni-heart-filled":60133,"lni-heart-monitor":60134,"lni-heart":60135,"lni-helicopter":60136,"lni-helmet":60137,"lni-help":60138,"lni-highlight-alt":60139,"lni-highlight":60140,"lni-home":60141,"lni-hospital":60142,"lni-hourglass":60143,"lni-html5":60144,"lni-image":60145,"lni-imdb":60146,"lni-inbox":60147,"lni-indent-decrease":60148,"lni-indent-increase":60149,"lni-infinite":60150,"lni-information":60151,"lni-instagram-filled":60152,"lni-instagram-original":60153,"lni-instagram":60154,"lni-invention":60155,"lni-invest-monitor":60156,"lni-investment":60157,"lni-island":60158,"lni-italic":60159,"lni-java":60160,"lni-javascript":60161,"lni-jcb":60162,"lni-joomla-original":60163,"lni-joomla":60164,"lni-jsfiddle":60165,"lni-juice":60166,"lni-key":60167,"lni-keyboard":60168,"lni-keyword-research":60169,"lni-laptop-phone":60170,"lni-laptop":60171,"lni-laravel":60172,"lni-layers":60173,"lni-layout":60174,"lni-leaf":60175,"lni-library":60176,"lni-license":60177,"lni-lifering":60178,"lni-line-dashed":60179,"lni-line-dotted":60180,"lni-line-double":60181,"lni-line-spacing":60182,"lni-line":60183,"lni-lineicons-alt":60184,"lni-lineicons":60185,"lni-link":60186,"lni-linkedin-original":60187,"lni-linkedin":60188,"lni-list":60189,"lni-lock-alt":60190,"lni-lock":60191,"lni-magento":60192,"lni-magnet":60193,"lni-magnifier":60194,"lni-mailchimp":60195,"lni-map-marker":60196,"lni-map":60197,"lni-markdown":60198,"lni-mashroom":60199,"lni-mastercard":60200,"lni-medium":60201,"lni-menu":60202,"lni-mic":60203,"lni-microphone":60204,"lni-microscope":60205,"lni-microsoft-edge":60206,"lni-microsoft":60207,"lni-minus":60208,"lni-mobile":60209,"lni-money-location":60210,"lni-money-protection":60211,"lni-more-alt":60212,"lni-more":60213,"lni-mouse":60214,"lni-move":60215,"lni-music":60216,"lni-netlify":60217,"lni-network":60218,"lni-night":60219,"lni-nodejs-alt":60220,"lni-nodejs":60221,"lni-notepad":60222,"lni-npm":60223,"lni-offer":60224,"lni-opera":60225,"lni-package":60226,"lni-page-break":60227,"lni-pagination":60228,"lni-paint-bucket":60229,"lni-paint-roller":60230,"lni-pallet":60231,"lni-paperclip":60232,"lni-patreon":60233,"lni-pause":60234,"lni-paypal-original":60235,"lni-paypal":60236,"lni-pencil-alt":60237,"lni-pencil":60238,"lni-phone-set":60239,"lni-phone":60240,"lni-php":60241,"lni-pie-chart":60242,"lni-pilcrow":60243,"lni-pin":60244,"lni-pinterest":60245,"lni-pizza":60246,"lni-plane":60247,"lni-play-store":60248,"lni-play":60249,"lni-playstation":60250,"lni-plug":60251,"lni-plus":60252,"lni-pointer-down":60253,"lni-pointer-left":60254,"lni-pointer-right":60255,"lni-pointer-top":60256,"lni-pointer":60257,"lni-popup":60258,"lni-postcard":60259,"lni-pound":60260,"lni-power-switch":60261,"lni-printer":60262,"lni-producthunt":60263,"lni-protection":60264,"lni-pulse":60265,"lni-pyramids":60266,"lni-python":60267,"lni-question-circle":60268,"lni-quora":60269,"lni-quotation":60270,"lni-radio-button":60271,"lni-rain":60272,"lni-react":60275,"lni-reddit":60273,"lni-reload":60274,"lni-remove-file":60276,"lni-reply":60277,"lni-restaurant":60278,"lni-revenue":60279,"lni-road":60280,"lni-rocket":60281,"lni-rss-feed":60282,"lni-ruler-alt":60283,"lni-ruler-pencil":60284,"lni-ruler":60285,"lni-rupee":60286,"lni-sad":60287,"lni-save":60288,"lni-school-bench-alt":60289,"lni-school-bench":60290,"lni-scooter":60291,"lni-scroll-down":60292,"lni-search-alt":60293,"lni-search":60294,"lni-select":60295,"lni-seo":60296,"lni-service":60297,"lni-share-alt-1":60298,"lni-share-alt":60299,"lni-share":60300,"lni-shield":60301,"lni-shift-left":60302,"lni-shift-right":60303,"lni-ship":60304,"lni-shopify":60305,"lni-shopping-basket":60306,"lni-shortcode":60307,"lni-shovel":60308,"lni-shuffle":60309,"lni-signal":60310,"lni-sketch":60311,"lni-skipping-rope":60312,"lni-skype":60313,"lni-slack-line":60314,"lni-slack":60315,"lni-slice":60316,"lni-slideshare":60317,"lni-slim":60318,"lni-smile":60319,"lni-snapchat":60320,"lni-sort-alpha-asc":60321,"lni-sort-amount-asc":60322,"lni-sort-amount-dsc":60323,"lni-soundcloud-original":60324,"lni-soundcloud":60325,"lni-speechless":60326,"lni-spellcheck":60327,"lni-spinner-arrow":60328,"lni-spinner-solid":60329,"lni-spinner":60330,"lni-spotify-original":60331,"lni-spotify":60332,"lni-spray":60333,"lni-sprout":60334,"lni-squarespace":60335,"lni-stackoverflow":60336,"lni-stamp":60337,"lni-star-empty":60338,"lni-star-filled":60339,"lni-star-half":60340,"lni-star":60341,"lni-stats-down":60342,"lni-stats-up":60343,"lni-steam":60344,"lni-sthethoscope":60345,"lni-stop":60346,"lni-strikethrough":60347,"lni-stripe":60348,"lni-stumbleupon":60349,"lni-sun":60350,"lni-support":60351,"lni-surf-board":60352,"lni-suspect":60353,"lni-swift":60354,"lni-syringe":60355,"lni-tab":60356,"lni-tag":60357,"lni-target-customer":60358,"lni-target-revenue":60359,"lni-target":60360,"lni-taxi":60361,"lni-teabag":60362,"lni-telegram-original":60363,"lni-telegram":60364,"lni-text-align-center":60365,"lni-text-align-justify":60366,"lni-text-align-left":60367,"lni-text-align-right":60368,"lni-text-format-remove":60372,"lni-text-format":60369,"lni-thought":60370,"lni-thumbs-down":60371,"lni-thumbs-up":60373,"lni-thunder-alt":60374,"lni-thunder":60375,"lni-ticket-alt":60376,"lni-ticket":60377,"lni-tiktok":60378,"lni-timer":60379,"lni-tounge":60380,"lni-train-alt":60381,"lni-train":60382,"lni-trash-can":60383,"lni-travel":60384,"lni-tree":60385,"lni-trees":60386,"lni-trello":60387,"lni-trowel":60388,"lni-tshirt":60389,"lni-tumblr":60390,"lni-twitch":60391,"lni-twitter-filled":60392,"lni-twitter-original":60393,"lni-twitter":60394,"lni-ubuntu":60395,"lni-underline":60396,"lni-unlink":60397,"lni-unlock":60398,"lni-unsplash":60399,"lni-upload":60400,"lni-user":60401,"lni-users":60406,"lni-ux":60402,"lni-vector":60403,"lni-video":60404,"lni-vimeo":60405,"lni-visa":60407,"lni-vk":60408,"lni-volume-high":60409,"lni-volume-low":60410,"lni-volume-medium":60411,"lni-volume-mute":60412,"lni-volume":60413,"lni-wallet":60414,"lni-warning":60415,"lni-website-alt":60416,"lni-website":60417,"lni-wechat":60418,"lni-weight":60419,"lni-whatsapp":60420,"lni-wheelbarrow":60421,"lni-wheelchair":60422,"lni-windows":60423,"lni-wordpress-filled":60424,"lni-wordpress":60425,"lni-world-alt":60426,"lni-world":60428,"lni-write":60427,"lni-xbox":60429,"lni-yahoo":60430,"lni-ycombinator":60431,"lni-yen":60432,"lni-youtube":60435,"lni-zip":60433,"lni-zoom-in":60434,"lni-zoom-out":60436}'),Vl=({icon:e="lni-image",className:a,size:t,...i})=>(0,l.createElement)("i",{...i,className:`lni ${e} ${a}`});function Ul({onFocus:e}){let[a,t]=(0,l.useState)(!0);return a?l.createElement(nl,{as:"button",type:"button",features:rl.Focusable,onFocus:a=>{a.preventDefault();let l,i=50;l=requestAnimationFrame((function a(){if(!(i--<=0))return e()?(t(!1),void cancelAnimationFrame(l)):void(l=requestAnimationFrame(a));l&&cancelAnimationFrame(l)}))}}):null}const ql=l.createContext(null);function Kl({children:e}){let a=l.useRef({groups:new Map,get(e,a){var t;let l=this.groups.get(e);l||(l=new Map,this.groups.set(e,l));let i=null!=(t=l.get(a))?t:0;return l.set(a,i+1),[Array.from(l.keys()).indexOf(a),function(){let e=l.get(a);e>1?l.set(a,e-1):l.delete(a)}]}});return l.createElement(ql.Provider,{value:a},e)}function Jl(e){let a=l.useContext(ql);if(!a)throw new Error("You must wrap your component in a <StableCollection>");let t=function(){var e,a,t;let i=null!=(t=null==(a=null==(e=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:a.current)?t:null;if(!i)return Symbol();let r=[],n=i;for(;n;)r.push(n.index),n=n.return;return"$."+r.join(".")}(),[i,r]=a.current.get(e,t);return l.useEffect((()=>r),[]),i}var Zl=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Zl||{}),Yl=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(Yl||{}),Ql=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(Ql||{});let Xl={0(e,a){var t;let l=za(e.tabs,(e=>e.current)),i=za(e.panels,(e=>e.current)),r=l.filter((e=>{var a;return!(null!=(a=e.current)&&a.hasAttribute("disabled"))})),n={...e,tabs:l,panels:i};if(a.index<0||a.index>l.length-1){let t=ta(Math.sign(a.index-e.selectedIndex),{[-1]:()=>1,0:()=>ta(Math.sign(a.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===r.length?n:{...n,selectedIndex:ta(t,{0:()=>l.indexOf(r[0]),1:()=>l.indexOf(r[r.length-1])})}}let o=l.slice(0,a.index),s=[...l.slice(a.index),...o].find((e=>r.includes(e)));if(!s)return n;let c=null!=(t=l.indexOf(s))?t:e.selectedIndex;return-1===c&&(c=e.selectedIndex),{...n,selectedIndex:c}},1(e,a){var t;if(e.tabs.includes(a.tab))return e;let l=e.tabs[e.selectedIndex],i=za([...e.tabs,a.tab],(e=>e.current)),r=null!=(t=i.indexOf(l))?t:e.selectedIndex;return-1===r&&(r=e.selectedIndex),{...e,tabs:i,selectedIndex:r}},2:(e,a)=>({...e,tabs:e.tabs.filter((e=>e!==a.tab))}),3:(e,a)=>e.panels.includes(a.panel)?e:{...e,panels:za([...e.panels,a.panel],(e=>e.current))},4:(e,a)=>({...e,panels:e.panels.filter((e=>e!==a.panel))})},ei=(0,l.createContext)(null);function ai(e){let a=(0,l.useContext)(ei);if(null===a){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ai),a}return a}ei.displayName="TabsDataContext";let ti=(0,l.createContext)(null);function li(e){let a=(0,l.useContext)(ti);if(null===a){let a=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,li),a}return a}function ii(e,a){return ta(a.type,Xl,e,a)}ti.displayName="TabsActionsContext";let ri=l.Fragment,ni=ra.RenderStrategy|ra.Static,oi=ua((function(e,a){var t,i;let r=Ia(),{id:n=`headlessui-tabs-tab-${r}`,...o}=e,{orientation:s,activation:c,selectedIndex:u,tabs:g,panels:d}=ai("Tab"),f=li("Tab"),h=ai("Tab"),p=(0,l.useRef)(null),b=Sa(p,a);ka((()=>f.registerTab(p)),[f,p]);let m=Jl("tabs"),w=g.indexOf(p);-1===w&&(w=m);let k=w===u,v=ya((e=>{var a;let t=e();if(t===Da.Success&&"auto"===c){let e=null==(a=Ma(p))?void 0:a.activeElement,t=h.tabs.findIndex((a=>a.current===e));-1!==t&&f.change(t)}return t})),y=ya((e=>{let a=g.map((e=>e.current)).filter(Boolean);if(e.key===Ta.Space||e.key===Ta.Enter)return e.preventDefault(),e.stopPropagation(),void f.change(w);switch(e.key){case Ta.Home:case Ta.PageUp:return e.preventDefault(),e.stopPropagation(),v((()=>Wa(a,Aa.First)));case Ta.End:case Ta.PageDown:return e.preventDefault(),e.stopPropagation(),v((()=>Wa(a,Aa.Last)))}return v((()=>ta(s,{vertical:()=>e.key===Ta.ArrowUp?Wa(a,Aa.Previous|Aa.WrapAround):e.key===Ta.ArrowDown?Wa(a,Aa.Next|Aa.WrapAround):Da.Error,horizontal:()=>e.key===Ta.ArrowLeft?Wa(a,Aa.Previous|Aa.WrapAround):e.key===Ta.ArrowRight?Wa(a,Aa.Next|Aa.WrapAround):Da.Error})))===Da.Success?e.preventDefault():void 0})),_=(0,l.useRef)(!1),x=ya((()=>{var e;_.current||(_.current=!0,null==(e=p.current)||e.focus(),f.change(w),fa((()=>{_.current=!1})))})),S=ya((e=>{e.preventDefault()})),C=(0,l.useMemo)((()=>({selected:k})),[k]);return oa({ourProps:{ref:b,onKeyDown:y,onMouseDown:S,onClick:x,id:n,role:"tab",type:Qa(e,p),"aria-controls":null==(i=null==(t=d[w])?void 0:t.current)?void 0:i.id,"aria-selected":k,tabIndex:k?0:-1},theirProps:o,slot:C,defaultTag:"button",name:"Tabs.Tab"})})),si=ua((function(e,a){let{defaultIndex:t=0,vertical:i=!1,manual:r=!1,onChange:n,selectedIndex:o=null,...s}=e;const c=i?"vertical":"horizontal",u=r?"manual":"auto";let g=null!==o,d=Sa(a),[f,h]=(0,l.useReducer)(ii,{selectedIndex:null!=o?o:t,tabs:[],panels:[]}),p=(0,l.useMemo)((()=>({selectedIndex:f.selectedIndex})),[f.selectedIndex]),b=va(n||(()=>{})),m=va(f.tabs),w=(0,l.useMemo)((()=>({orientation:c,activation:u,...f})),[c,u,f]),k=ya((e=>(h({type:1,tab:e}),()=>h({type:2,tab:e})))),v=ya((e=>(h({type:3,panel:e}),()=>h({type:4,panel:e})))),y=ya((e=>{_.current!==e&&b.current(e),g||h({type:0,index:e})})),_=va(g?e.selectedIndex:f.selectedIndex),x=(0,l.useMemo)((()=>({registerTab:k,registerPanel:v,change:y})),[]);ka((()=>{h({type:0,index:null!=o?o:t})}),[o]),ka((()=>{if(void 0===_.current||f.tabs.length<=0)return;let e=za(f.tabs,(e=>e.current));e.some(((e,a)=>f.tabs[a]!==e))&&y(e.indexOf(f.tabs[_.current]))}));let S={ref:d};return l.createElement(Kl,null,l.createElement(ti.Provider,{value:x},l.createElement(ei.Provider,{value:w},w.tabs.length<=0&&l.createElement(Ul,{onFocus:()=>{var e,a;for(let t of m.current)if(0===(null==(e=t.current)?void 0:e.tabIndex))return null==(a=t.current)||a.focus(),!0;return!1}}),oa({ourProps:S,theirProps:s,slot:p,defaultTag:ri,name:"Tabs"}))))})),ci=ua((function(e,a){let{orientation:t,selectedIndex:l}=ai("Tab.List");return oa({ourProps:{ref:Sa(a),role:"tablist","aria-orientation":t},theirProps:e,slot:{selectedIndex:l},defaultTag:"div",name:"Tabs.List"})})),ui=ua((function(e,a){let{selectedIndex:t}=ai("Tab.Panels");return oa({ourProps:{ref:Sa(a)},theirProps:e,slot:(0,l.useMemo)((()=>({selectedIndex:t})),[t]),defaultTag:"div",name:"Tabs.Panels"})})),gi=ua((function(e,a){var t,i,r,n;let o=Ia(),{id:s=`headlessui-tabs-panel-${o}`,tabIndex:c=0,...u}=e,{selectedIndex:g,tabs:d,panels:f}=ai("Tab.Panel"),h=li("Tab.Panel"),p=(0,l.useRef)(null),b=Sa(p,a);ka((()=>h.registerPanel(p)),[h,p]);let m=Jl("panels"),w=f.indexOf(p);-1===w&&(w=m);let k=w===g,v=(0,l.useMemo)((()=>({selected:k})),[k]),y={ref:b,id:s,role:"tabpanel","aria-labelledby":null==(i=null==(t=d[w])?void 0:t.current)?void 0:i.id,tabIndex:k?c:-1};return k||null!=(r=u.unmount)&&!r||null!=(n=u.static)&&n?oa({ourProps:y,theirProps:u,slot:v,defaultTag:"div",features:ni,visible:k,name:"Tabs.Panel"}):l.createElement(nl,{as:"span",...y})})),di=Object.assign(oi,{Group:si,List:ci,Panels:ui,Panel:gi});const fi=window.wp.element,hi=window.wp.primitives,pi=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),bi=({className:e,...a})=>(0,l.createElement)(s.Button,{className:`rounded-md ${e}`,...a}),mi=({className:e="text-gray-700",btnClass:a="ring-1 ring-neutral-200",defaultBtnClass:t="hover:bg-slate-100",imageData:i,onChange:r})=>{const{mediaId:c,mediaUrl:u,mediaSrcSet:g,sizes:d}=i,f=e=>{r({mediaId:e.id,mediaUrl:e.url,mediaSrcSet:`${e.url} ${e.width}w, ${e.sizes?.medium?.url} ${e.sizes?.medium?.width}w, ${e.sizes?.full?.url} ${e.sizes?.full?.width}w, ${e.sizes?.large?.url} ${e.sizes?.large?.width}w`,sizes:e.sizes})};return(0,l.createElement)("div",{className:`editor-post-featured-image w-full ${e}`},(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(o.MediaUpload,{onSelect:f,value:c,allowedTypes:["image"],render:({open:e})=>(0,l.createElement)(s.Button,{className:`h-auto rounded-lg text-inherit ${a} ${0==c?"editor-post-featured-image__toggle "+t:"editor-post-featured-image__preview"}`,onClick:e},0==c&&(0,l.createElement)("div",{className:"text-center flex flex-col items-center justify-center rounded-lg"},(0,l.createElement)(s.Icon,{icon:pi,className:"text-inherit"}),(0,l.createElement)("span",{className:"mt-0.5"},(0,n.__)("Choose an image","boostify-blocks"))),!!u&&(0,l.createElement)("img",{src:u,className:"w-full block rounded-lg",sizes:"250px",srcSet:g||void 0}))})),0!==c&&(0,l.createElement)("div",{className:"flex justify-between gap-2 mt-2"},(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(o.MediaUpload,{title:(0,n.__)("Replace image","boostify-blocks"),value:c,onSelect:f,allowedTypes:["image"],render:({open:e})=>(0,l.createElement)(bi,{className:"flex-1 my-0 flex justify-center",onClick:e,variant:"secondary"},(0,n.__)("Replace","boostify-blocks"))})),(0,l.createElement)(o.MediaUploadCheck,null,(0,l.createElement)(bi,{className:"flex-1 my-0",onClick:()=>{r({mediaId:0,mediaUrl:"",mediaSrcSet:void 0})},isDestructive:!0},(0,n.__)("Remove","boostify-blocks")))))},wi=function(e){return"string"==typeof e&&/<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.test(e)},ki=({icon:e=yi,className:a="",renderIfNone:t=null,...i})=>(()=>{const i=`wcb-icon-full ${a}`.trim();return e?"icon"===e.type&&e.iconName?(0,l.createElement)(Vl,{className:`${i}`,icon:e.iconName}):"svg"===e.type?(0,l.createElement)("div",{className:`${i} is-svg wcb-icon-full--svg`,dangerouslySetInnerHTML:{__html:e.svgCode}}):"image"===e.type&&e.imageData?.mediaId?(0,l.createElement)("div",{className:`${i} is-image wcb-icon-full--image`},(0,l.createElement)("img",{src:e.imageData.mediaUrl,alt:""})):(0,l.createElement)(l.Fragment,null,t):(0,l.createElement)(l.Fragment,null,t)})(),vi=Object.keys(Wl),yi={type:"icon",iconName:"lni-heart-filled",imageData:{mediaId:0,mediaUrl:"",mediaSrcSet:void 0},svgCode:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">\n\t<path stroke-linecap="round" stroke-linejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />\n  </svg>'},_i=({onChange:e,iconData:a,label:t=(0,n.__)("Icon:","boostify-blocks")})=>{const[r,o]=(0,l.useState)(""),[c,u]=(0,l.useState)(wi(a.svgCode)),[g,d]=(0,l.useState)("");(0,l.useEffect)((()=>{d(a.svgCode)}),[a.svgCode]);const f=i().createRef(),h=""===r?vi:vi.filter((e=>e.toLowerCase().includes(r.toLowerCase()))),p=h,b=({columnIndex:t,rowIndex:i,style:r})=>{const n=p[3*i+t];if(!n)return(0,l.createElement)("div",{style:{...r}});const o=n===a.iconName;return(0,l.createElement)("div",{style:{...r,padding:"4px 0px 4px 8px"}},(0,l.createElement)("div",{key:n,className:"h-20 p-3 flex items-center justify-center bg-gray-800 rounded-lg text-gray-50 hover:ring-2 ring-offset-1 ring-sky-500 cursor-pointer "+(o?"ring-2 SelecIcon__item--isActive":""),onClick:()=>{e({...a,iconName:o?void 0:n})}},(0,l.createElement)("div",{className:"grid"},(0,l.createElement)("div",{className:"text-center overflow-hidden "},(0,l.createElement)(Vl,{className:"text-lg",size:16,icon:n}),(0,l.createElement)("p",{className:"block mt-2.5 truncate text-gray-300 text-xs"},n)))))},m=[{name:"icon",icon:"lni lni-ruler-pencil text-lg"},{name:"image",icon:"lni lni-image text-lg"},{name:"svg",icon:"lni lni-code text-lg"}];return(0,l.createElement)(s.Dropdown,{position:"middle left",className:"w-full",contentClassName:"Wcb-SelectIcon z-[100]",renderToggle:({isOpen:i,onToggle:r})=>(0,l.createElement)("div",{className:"flex items-center space-x-4"},(0,l.createElement)("button",{className:"py-3 px-6 flex items-center justify-center ring-2 ring-slate-200 hover:ring-slate-300 rounded-lg ",onClick:()=>{r(),"icon"===a.type&&setTimeout((()=>{if(!a.iconName)return;const e=h.indexOf(a.iconName);e&&f?.current?.scrollToItem({rowIndex:Math.ceil(e/3),align:"center"})}),1)}},(0,l.createElement)("span",{className:"mr-3"},t),(0,l.createElement)(ki,{icon:a,className:"w-6 h-6 text-[24px] flex items-center ",renderIfNone:(0,l.createElement)("strong",null,(0,n.__)("None","boostify-blocks"))})),(0,l.createElement)(Tl,{onClick:()=>{e(yi)}})),renderContent:({onToggle:t,onClose:i})=>(0,l.createElement)("div",{className:"min-w-[310px] min-h-[510px] bg-gray-900 pt-3"},(0,l.createElement)("div",{className:"cursor-pointer absolute -right-0.5 -top-0.5 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-lg ring-1 ring-gray-200/70 hover:ring-gray-300",onClick:i},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:"w-6 h-6 text-red-500"},(0,l.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))),(0,l.createElement)(di.Group,{onChange:t=>{e({...a,type:m[t].name})},defaultIndex:m.findIndex((e=>e.name===a.type))},(0,l.createElement)(di.List,{className:"flex p-1.5 bg-slate-700/60 rounded-lg shadow-md mx-2"},m.map((e=>(0,l.createElement)(di,{key:e.name,className:({selected:e})=>"flex-1 font-medium whitespace-nowrap px-1 py-2 text-sm focus:outline-none flex flex-col items-center justify-center space-y-1 rounded-lg capitalize "+(e?"bg-slate-900 text-slate-50 ":"text-slate-300 hover:text-slate-100 border-b-transparent")},(0,l.createElement)("i",{className:e.icon}),(0,l.createElement)("span",{className:"block"},e.name))))),(0,l.createElement)(di.Panels,{className:"mt-3 pt-3 border-t border-slate-700"},(0,l.createElement)(di.Panel,{className:""},(0,l.createElement)("div",null,(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"relative p-2 mb-2 -mt-2 border-b border-gray-800 text-white "},(0,l.createElement)("div",{className:"pointer-events-none absolute inset-y-0 left-2.5 flex items-center pl-2.5"},(0,l.createElement)("svg",{fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5"},(0,l.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"}))),(0,l.createElement)("input",{onChange:e=>o(e.target.value),type:"text",className:"block w-full py-1.5 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-800 border-transparent text-white",placeholder:(0,n.__)("Search for an icon...","boostify-blocks"),defaultValue:r,name:"icon-query",autoFocus:!0}))),(0,l.createElement)(Gl,{ref:f,className:"hiddenScrollbar",columnCount:3,columnWidth:100,height:380,rowCount:Math.ceil(p.length/3),rowHeight:88,width:308},b))),(0,l.createElement)(di.Panel,{className:""},(()=>{const t=a?.imageData;return(0,l.createElement)("div",{className:"px-3 pt-1"},(0,l.createElement)(mi,{className:"text-neutral-200",btnClass:"ring-1 ring-neutral-700",defaultBtnClass:"hover:bg-black/10",onChange:t=>{e({...a,imageData:t})},imageData:t}))})()),(0,l.createElement)(di.Panel,{className:""},(0,l.createElement)("div",{className:"pt-1 px-3 text-slate-300"},(0,l.createElement)(s.TextareaControl,{rows:17,label:"",placeholder:'<svg xmlns="http://www.w3.org/2000/svg" fill="none" ...',className:"Wcb-SelectIcon__textarea text-slate-200",help:!g||c?(0,n.__)("Enter your SVG code here","boostify-blocks"):(0,l.createElement)("p",{className:"text-red-500"},(0,n.__)("Please write a valid SVG code","boostify-blocks")),value:g,onChange:t=>{if(d(t),wi(t)){u(!0);const l=/<svg\b[^>]*?(?:viewBox=\"(\b[^"]*)\")?>([\s\S]*?)<\/svg>/g.exec(t);e({...a,svgCode:l?.[0]||""})}else u(!1)}}))))))})},xi={enableIcon:!0,iconPosition:"top",stackOn:"none",verticalAlignment:"top",icon:{...yi,iconName:"lni-checkmark-circle"}},Si=({panelData:e=xi,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const{enableIcon:o,icon:c,iconPosition:u,stackOn:g,verticalAlignment:d}=e;return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Icon","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable Icon","boostify-blocks"),checked:o,className:"mb-0",onChange:t=>{a({...e,enableIcon:t})}}),o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_i,{iconData:c,onChange:t=>{a({...e,icon:t})}}),(0,l.createElement)(Vt,{label:(0,n.__)("Position","boostify-blocks"),options:[{value:"top",label:"Top"},{value:"left",label:"Left"},{value:"right",label:"Right"},{value:"leftOfTitle",label:"Left Of Title"},{value:"rightOfTitle",label:"Right Of Title"},{value:"bellowTitle",label:"Bellow Title"}],value:u,onChange:t=>{let l={...e,iconPosition:t};"left"!==u&&"right"!==u&&(l={...e,iconPosition:t,stackOn:"none"}),a(l)}}),("left"===u||"right"===u)&&(0,l.createElement)(Vt,{label:(0,n.__)("Stack On","boostify-blocks"),options:[{value:"none",label:"None"},{value:"tablet",label:"Tablet"},{value:"mobile",label:"Mobile"}],value:g,onChange:t=>{a({...e,stackOn:t})}}),("left"===u||"right"===u||"leftOfTitle"===u||"rightOfTitle"===u)&&(0,l.createElement)(Vt,{label:(0,n.__)("Vertical Alignment","boostify-blocks"),options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],value:d,onChange:t=>{a({...e,verticalAlignment:t})}}))))},Ci=(0,l.memo)((({children:e,uniqueKey:a="uniqueid"})=>{aa(),a.replace(/[0-9]/g,"").replace(/ /g,"").toLocaleLowerCase();const{myCache:t,ref:i}=((e="wcb-custom-cache-key")=>{const a=(0,l.useRef)(null);return{myCache:ge({key:e,container:a.current||void 0}),ref:a}})("wcb-key-cache"),{cache:r,useRefReact:n}=function(e="wcb-custom-cache-key"){const[a,t]=(0,l.useState)(null),i=(0,l.useRef)(null);return(0,l.useEffect)((()=>{let l=null,r=0;const n=a=>{const l=a?.contentDocument?.head;if(!l)return;const r=ge({key:e,container:l||i.current||void 0});t(r)},o=()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e?"complete"===e.contentDocument?.readyState?n(e):e.addEventListener("load",(()=>n(e)),{once:!0}):r<20&&(r++,setTimeout(o,150))};return o(),l=new MutationObserver((()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e&&e!==a?.container?.ownerDocument?.defaultView?.frameElement&&(r=0,o())})),l.observe(document.body,{childList:!0,subtree:!0}),()=>l?.disconnect()}),[]),{cache:a,useRefReact:i}}("wcb-key-cache");return r?(0,l.createElement)(Ee,{value:r},e):(0,l.createElement)(l.Fragment,null,e)})),Ei=[{key:"default",name:"Default",style:{fontWeight:void 0,fontStyle:void 0}},{key:"thin",name:"Thin",style:{fontWeight:"100",fontStyle:"normal"}},{key:"ExtraLight",name:"Extra Light",style:{fontWeight:"200",fontStyle:"normal"}},{key:"light",name:"Light",style:{fontWeight:"300",fontStyle:"normal"}},{key:"Regular",name:"Regular",style:{fontWeight:"400",fontStyle:"normal"}},{key:"Medium",name:"Medium",style:{fontWeight:"500",fontStyle:"normal"}},{key:"SemiBold",name:"Semi Bold",style:{fontWeight:"600",fontStyle:"normal"}},{key:"Bold",name:"Bold",style:{fontWeight:"700",fontStyle:"normal"}},{key:"ExtraBold",name:"Extra Bold",style:{fontWeight:"800",fontStyle:"normal"}},{key:"Black",name:"Black",style:{fontWeight:"900",fontStyle:"normal"}},{key:"thin_italic",name:"Thin Italic",style:{fontWeight:"100",fontStyle:"italic"}},{key:"ExtraLight_italic",name:"Extra Light Italic",style:{fontWeight:"200",fontStyle:"italic"}},{key:"light_italic",name:"Light Italic",style:{fontWeight:"300",fontStyle:"italic"}},{key:"Regular_italic",name:"Regular Italic",style:{fontWeight:"400",fontStyle:"italic"}},{key:"Medium_italic",name:"Medium Italic",style:{fontWeight:"500",fontStyle:"italic"}},{key:"SemiBold_italic",name:"Semi Bold Italic",style:{fontWeight:"600",fontStyle:"italic"}},{key:"Bold_italic",name:"Bold Italic",style:{fontWeight:"700",fontStyle:"italic"}},{key:"ExtraBold_italic",name:"Extra Bold Italic",style:{fontWeight:"800",fontStyle:"italic"}},{key:"Black_italic",name:"Black Italic",style:{fontWeight:"900",fontStyle:"italic"}}],Ii=({onChange:e,value:a})=>(0,l.createElement)(s.CustomSelectControl,{__nextUnconstrainedWidth:!0,label:(0,n.__)("Appearance","boostify-blocks"),options:Ei,onChange:e,value:a}),Ti={fontSizes:{Desktop:""},appearance:Ei[0],textDecoration:void 0,textTransform:void 0,lineHeight:{Desktop:void 0},letterSpacing:{Desktop:void 0},fontFamily:void 0},Ni=[{name:"Tiny",slug:"tiny",size:"8px"},{name:"Small",slug:"small",size:"12px"},{name:"Normal",slug:"normal",size:"16px"},{name:"Big",slug:"big",size:"26px"},{name:"Bigger",slug:"bigger",size:"30px"},{name:"Huge",slug:"huge",size:"36px"}],Pi=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})),Mi=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"})),Oi=[{name:(0,n.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,n.__)("Underline"),value:"underline",icon:Pi},{name:(0,n.__)("Strikethrough"),value:"line-through",icon:Mi}],Ri=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(s.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,n.__)("Decoration"),value:e,onChange:a},Oi.map((e=>(0,l.createElement)(s.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name,title:e.name})))),Ai=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})),Di=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),Li=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})),Bi=[{name:(0,n.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,n.__)("Uppercase"),value:"uppercase",icon:Ai},{name:(0,n.__)("Lowercase"),value:"lowercase",icon:Di},{name:(0,n.__)("Capitalize"),value:"capitalize",icon:Li}],Fi=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(s.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,n.__)("Letter case"),value:e,onChange:a},Bi.map((e=>(0,l.createElement)(s.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name})))),$i=JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}'),Hi=({onChange:e,options:a,value:t,label:i})=>{const[r,n]=(0,l.useState)(t||""),[o,c]=(0,l.useState)(a);return(0,l.useEffect)((()=>{n(t||"")}),[t]),(0,l.createElement)(s.ComboboxControl,{label:i,value:r,onChange:a=>{n(a||""),e(a||"")},options:o,onFilterValueChange:e=>c(a.filter((a=>a.label.toLowerCase().startsWith(e.toLowerCase()))))})},ji=({onChangeFontFamily:e,selectedFont:a})=>{const[t,i]=(0,l.useState)(a);(0,l.useEffect)((()=>{i(a)}),[a]);const r=[];Object.keys($i).forEach((e=>{r.push({value:e,label:e})}));const o=[{value:"",label:"Default"},{value:"Arial",label:"Arial"},{value:"Helvetica",label:"Helvetica"},{value:"Times New Roman",label:"Times New Roman"},{value:"Georgia",label:"Georgia"},...r];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(zt,null,(0,n.__)("Font Family","boostify-blocks")),(0,l.createElement)(Hi,{value:t||"",options:o,onChange:a=>{i(a||""),e(a||""),r.some((e=>e.value===a&&(ze(a),!0))),ze("")}}))};var zi;let Gi=null!=(zi=l.startTransition)?zi:function(e){e()};var Wi=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Wi||{}),Vi=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Vi||{});let Ui={0:e=>({...e,disclosureState:ta(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,a)=>e.buttonId===a.buttonId?e:{...e,buttonId:a.buttonId},3:(e,a)=>e.panelId===a.panelId?e:{...e,panelId:a.panelId}},qi=(0,l.createContext)(null);function Ki(e){let a=(0,l.useContext)(qi);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Ki),a}return a}qi.displayName="DisclosureContext";let Ji=(0,l.createContext)(null);function Zi(e){let a=(0,l.useContext)(Ji);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Zi),a}return a}Ji.displayName="DisclosureAPIContext";let Yi=(0,l.createContext)(null);function Qi(e,a){return ta(a.type,Ui,e,a)}Yi.displayName="DisclosurePanelContext";let Xi=l.Fragment,er=ra.RenderStrategy|ra.Static,ar=ua((function(e,a){let{defaultOpen:t=!1,...i}=e,r=(0,l.useRef)(null),n=Sa(a,xa((e=>{r.current=e}),void 0===e.as||e.as===l.Fragment)),o=(0,l.useRef)(null),s=(0,l.useRef)(null),c=(0,l.useReducer)(Qi,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:g},d]=c,f=ya((e=>{d({type:1});let a=Ma(r);if(!a||!g)return;let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:a.getElementById(g):a.getElementById(g);null==t||t.focus()})),h=(0,l.useMemo)((()=>({close:f})),[f]),p=(0,l.useMemo)((()=>({open:0===u,close:f})),[u,f]),b={ref:n};return l.createElement(qi.Provider,{value:c},l.createElement(Ji.Provider,{value:h},l.createElement(Za,{value:ta(u,{0:Ka.Open,1:Ka.Closed})},oa({ourProps:b,theirProps:i,slot:p,defaultTag:Xi,name:"Disclosure"}))))})),tr=ua((function(e,a){let t=Ia(),{id:i=`headlessui-disclosure-button-${t}`,...r}=e,[n,o]=Ki("Disclosure.Button"),s=(0,l.useContext)(Yi),c=null!==s&&s===n.panelId,u=(0,l.useRef)(null),g=Sa(u,a,c?null:n.buttonRef);(0,l.useEffect)((()=>{if(!c)return o({type:2,buttonId:i}),()=>{o({type:2,buttonId:null})}}),[i,o,c]);let d=ya((e=>{var a;if(c){if(1===n.disclosureState)return;switch(e.key){case Ta.Space:case Ta.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(a=n.buttonRef.current)||a.focus()}}else switch(e.key){case Ta.Space:case Ta.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}})),f=ya((e=>{e.key===Ta.Space&&e.preventDefault()})),h=ya((a=>{var t;Pa(a.currentTarget)||e.disabled||(c?(o({type:0}),null==(t=n.buttonRef.current)||t.focus()):o({type:0}))})),p=(0,l.useMemo)((()=>({open:0===n.disclosureState})),[n]),b=Qa(e,u);return oa({ourProps:c?{ref:g,type:b,onKeyDown:d,onClick:h}:{ref:g,id:i,type:b,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:d,onKeyUp:f,onClick:h},theirProps:r,slot:p,defaultTag:"button",name:"Disclosure.Button"})})),lr=ua((function(e,a){let t=Ia(),{id:i=`headlessui-disclosure-panel-${t}`,...r}=e,[n,o]=Ki("Disclosure.Panel"),{close:s}=Zi("Disclosure.Panel"),c=Sa(a,n.panelRef,(e=>{Gi((()=>o({type:e?4:5})))}));(0,l.useEffect)((()=>(o({type:3,panelId:i}),()=>{o({type:3,panelId:null})})),[i,o]);let u=Ja(),g=null!==u?(u&Ka.Open)===Ka.Open:0===n.disclosureState,d=(0,l.useMemo)((()=>({open:0===n.disclosureState,close:s})),[n,s]),f={ref:c,id:i};return l.createElement(Yi.Provider,{value:n.panelId},oa({ourProps:f,theirProps:r,slot:d,defaultTag:"div",features:er,visible:g,name:"Disclosure.Panel"}))})),ir=Object.assign(ar,{Button:tr,Panel:lr});var rr=t(1070);const nr=({className:e="space-y-3.5",label:a="Customize",children:t,defaultOpen:i,as:r,hasResponsive:o=!1,isDisableButton:s=!1})=>(0,l.createElement)(ir,{defaultOpen:i,as:r},(({open:i})=>(0,l.createElement)("div",{className:i?"ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4":""},(0,l.createElement)(ir.Button,{className:"flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 "+(i?"rounded-b-none":""),disabled:s},(0,l.createElement)(zt,{hasResponsive:o,className:"MyDisclosure__labelControl"},(0,n.__)(a,"boostify-blocks")),i?(0,l.createElement)(rr,{className:"w-5 h-5 text-purple-900"}):(0,l.createElement)("svg",{className:"w-4 h-4 text-purple-900",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M3 22H21",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}))),(0,l.createElement)(ir.Panel,{className:"px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"},(0,l.createElement)("div",{className:e},t))))),or=({className:e="space-y-5",typographyControl:a=Ti,setAttrs__typography:t=()=>{},label:i="Typography",disclosureDefaultOpen:r})=>{const o=aa()||"Desktop",{fontSizes:c,appearance:u,textDecoration:g,textTransform:d,lineHeight:f,letterSpacing:h,fontFamily:p}=a,{currentDeviceValue:b}=Le(c,o),{currentDeviceValue:m}=Le(f,o),{currentDeviceValue:w}=Le(h,o);return(0,l.createElement)(nr,{defaultOpen:r,label:i},(0,l.createElement)("div",{className:e},(0,l.createElement)("div",null,(0,l.createElement)(ji,{selectedFont:p,onChangeFontFamily:e=>{t({...a,fontFamily:e})}})),(0,l.createElement)("div",{className:"relative"},(0,l.createElement)(zt,{className:"flex absolute right-8 -top-0.5 z-10",hasResponsive:!0,children:""}),(0,l.createElement)(s.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:Ni,value:b,fallbackFontSize:16,onChange:e=>{t({...a,fontSizes:{...c,[o]:e}})}})),(0,l.createElement)(Ii,{onChange:({selectedItem:e})=>{return l=e,void t({...a,appearance:l||Ei[0]});var l},value:u}),(0,l.createElement)(Ri,{value:g,onChange:e=>{t({...a,textDecoration:e})}}),(0,l.createElement)(Fi,{value:d,onChange:e=>{t({...a,textTransform:e})}}),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(zt,{hasResponsive:!0,className:"flex-shrink-0",children:(0,n.__)("Line height","boostify-blocks")}),(0,l.createElement)(s.__experimentalNumberControl,{onChange:e=>{t({...a,lineHeight:{...f,[o]:e}})},value:m,step:.1,min:0,max:100,placeholder:(0,n.__)("1.5","boostify-blocks")})),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(zt,{hasResponsive:!0,className:"flex-shrink-0",children:(0,n.__)("Letter spacing","boostify-blocks")}),(0,l.createElement)(s.__experimentalUnitControl,{onChange:e=>{t({...a,letterSpacing:{...h,[o]:e}})},value:w,units:[{value:"px",label:"px",default:0},{value:"%",label:"%",default:0},{value:"em",label:"em",default:0}]}))))},sr=({className:e="",label:a=(0,n.__)("Color","boostify-blocks"),color:t="#000",onChange:i,showDefaultPalette:r=!0,showCustomColorOnDefaultPallete:c=!0})=>{const[u,g]=(0,l.useState)("");(0,l.useEffect)((()=>{t&&g(t)}),[t]);const d=(0,o.__experimentalUseMultipleOriginColorsAndGradients)(),f=(0,l.useMemo)((()=>{const e=window.boostify_blocks_global_variables?.customColorPallete;return e&&e.length&&c?[...d?.colors||[],{name:"Customs",colors:window.boostify_blocks_global_variables.customColorPallete||[]}]:d?.colors||[]}),[d,c]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(s.Dropdown,{className:`w-full ${e}`,contentClassName:"my-popover-content-classname",popoverProps:{placement:"left-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,l.createElement)("div",{className:"w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",onClick:t},(0,l.createElement)("div",{className:"flex items-center gap-0.5"},(0,l.createElement)("div",{className:"w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer "+(u?"":"bg-transparent"),style:{backgroundColor:u,backgroundImage:u?void 0:"linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 0 5px, 5px -5px, -5px 0"}})),a&&(0,l.createElement)("div",null,(0,l.createElement)("span",null,a))),renderContent:()=>(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"bg-white "},(0,l.createElement)(s.ColorPalette,{className:"block-editor-color-gradient-control__panel p-4",colors:r?f:void 0,value:u,enableAlpha:!0,onChange:e=>{var a;g(a=e||""),i(a)},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})))}))},cr={margin:{Desktop:{top:"",left:"",right:"",bottom:""}},padding:{Desktop:{top:"1rem",left:"1rem",right:"1rem",bottom:"1rem"}}},ur=[{value:"px",label:"px",default:32,step:1},{value:"rem",label:"rem",default:2,step:.01},{value:"em",label:"em",default:2,step:.01},{value:"%",label:"%",default:50,step:.1}],gr={px:{max:1e3,steps:1},"%":{max:100,steps:1},vw:{max:100,steps:1},vh:{max:100,steps:1},em:{max:50,steps:.1},rm:{max:50,steps:.1},rem:{max:50,steps:.1}},dr=({value:e="10px",onChange:a,minCustomValue:t=0,units:i=ur,className:r="",customUnitsValueSettings:n=gr})=>{const o=(0,fi.useMemo)((()=>(0,s.__experimentalParseQuantityAndUnitFromRawValue)(e)),[e])[1]||i[0].value,c=parseFloat(null!=e?e:"10");return(0,l.createElement)("div",{className:`${r} flex items-center space-x-2.5`},(0,l.createElement)("div",{className:"flex-[1.5]"},(0,l.createElement)(s.RangeControl,{value:c,min:t,max:n[o].max,step:n[o].steps,withInputField:!1,onChange:e=>{const t=[e,o].join("");a(t)},className:"m-0"})),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)(s.__experimentalUnitControl,{onChange:(e,...t)=>{a(e)},placeholder:`${parseInt(e||"")}`,value:e,units:i,min:t,hideLabelFromVision:!0})))},fr=({className:e="",label:a=(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:t=!0,units:i,minCustomValue:r,value:o="1rem",onChange:s=()=>{},customUnitsValueSettings:c})=>(0,l.createElement)("div",{className:`MySpacingSizesControl ${e}`},(0,l.createElement)(zt,{hasResponsive:t},a),(0,l.createElement)(dr,{value:o,onChange:s,minCustomValue:r,units:i,customUnitsValueSettings:c})),hr={typography:Ti,textColor:"#171717",marginBottom:{Desktop:"1rem"}},pr=({panelData:e=hr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{typography:c,textColor:u,marginBottom:g}=e,{currentDeviceValue:d}=Le(g,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Title","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-2.5"},(0,l.createElement)(or,{typographyControl:c,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(nr,{defaultOpen:!0,label:"More styles"},(0,l.createElement)(sr,{onChange:t=>{a({...e,textColor:t})},color:u}),(0,l.createElement)(fr,{onChange:t=>{a({...e,marginBottom:{...g,[o]:t}})},value:d||"",label:(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:!0}))))},br={typography:{...Ti,fontSizes:{Desktop:"1rem"}},textColor:"#6b7280",marginBottom:{Desktop:"0.5rem"}},mr=({panelData:e=br,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{typography:c,textColor:u,marginBottom:g}=e,{currentDeviceValue:d}=Le(g,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Prefix","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-2.5"},(0,l.createElement)(or,{typographyControl:c,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(nr,{defaultOpen:!0,label:"More styles"},(0,l.createElement)(sr,{onChange:t=>{a({...e,textColor:t})},color:u}),(0,l.createElement)(fr,{onChange:t=>{a({...e,marginBottom:{...g,[o]:t}})},value:d||"",label:(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:!0}))))},wr={typography:Ti,textColor:"#171717",marginBottom:{Desktop:"1rem"}},kr=({panelData:e=wr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{typography:c,textColor:u,marginBottom:g}=e,{currentDeviceValue:d}=Le(g,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Description","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-2.5"},(0,l.createElement)(or,{typographyControl:c,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(nr,{defaultOpen:!0,label:"More styles"},(0,l.createElement)(sr,{onChange:t=>{a({...e,textColor:t})},color:u}),(0,l.createElement)(fr,{onChange:t=>{a({...e,marginBottom:{...g,[o]:t}})},value:d||"",label:(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:!0}))))},vr=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),yr=(0,fi.createElement)(hi.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,fi.createElement)(hi.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),_r="wcb-dimensions-unit-control-styles",xr={boxSizing:"border-box",display:"block",flex:"0 0 24px",width:24,height:24,position:"relative",padding:4},Sr={boxSizing:"border-box",display:"block",position:"relative",width:"100%",height:"100%"},Cr={boxSizing:"border-box",display:"block",pointerEvents:"none",position:"absolute",backgroundColor:"currentColor"};function Er(e,a){return{...Cr,opacity:e?1:.3,...a}}const Ir={boxSizing:"border-box",width:"100%",paddingBottom:12},Tr={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},Nr={display:"flex",alignItems:"center",gap:4},Pr={display:"flex",alignItems:"center",gap:8,marginBottom:8},Mr={...Pr,marginBottom:0},Or={flex:"0 0 110px",width:110},Rr={flex:1,display:"flex",alignItems:"center"};function Ar(e){const{top:a,right:t,bottom:l,left:i}=e;return!(a===t&&t===l&&l===i)}function Dr(e){return!!e&&Object.values(e).some((e=>!!e&&/\d/.test(e)))}const Lr={top:"",right:"",bottom:"",left:""},Br=[{key:"top"},{key:"right"},{key:"bottom"},{key:"left"}],Fr={top:(0,n.__)("Top","boostify-blocks"),right:(0,n.__)("Right","boostify-blocks"),bottom:(0,n.__)("Bottom","boostify-blocks"),left:(0,n.__)("Left","boostify-blocks"),mixed:(0,n.__)("Mixed","boostify-blocks")},$r=({side:e})=>{const a=a=>"all"===e||e===a;return(0,l.createElement)("span",{style:xr},(0,l.createElement)("span",{style:Sr},(0,l.createElement)("span",{style:Er(a("top"),{height:2,left:3,right:3,top:0})}),(0,l.createElement)("span",{style:Er(a("right"),{bottom:3,top:3,width:2,right:0})}),(0,l.createElement)("span",{style:Er(a("bottom"),{height:2,left:3,right:3,bottom:0})}),(0,l.createElement)("span",{style:Er(a("left"),{bottom:3,top:3,width:2,left:0})})))},Hr=({value:e,min:a,onChange:t})=>{const{num:i,unit:r}=function(e){if(!e)return{num:0,unit:"px"};const a=e.match(/^([\d.]+)([a-z%]*)$/i);return a?{num:parseFloat(a[1])||0,unit:a[2]||"px"}:{num:0,unit:"px"}}(e),n=function(e){switch(e.toLowerCase()){case"rem":case"em":return 20;case"%":case"vw":case"vh":return 100;default:return 1e3}}(r),o=function(e){return["rem","em"].includes(e.toLowerCase())?.1:1}(r),s=Math.max(a,Math.min(n,i)),c=n>a?(s-a)/(n-a)*100:0;return(0,l.createElement)("input",{className:"wcb-dimensions-unit-control__range",type:"range",value:s,min:a,max:n,step:o,style:{background:`linear-gradient(to right, #0073aa ${c}%, #ddd ${c}%)`},onChange:e=>{const a=parseFloat(e.target.value);t(r?`${a}${r}`:`${a}`)},onWheel:e=>e.currentTarget.blur()})},jr=({label:e,values:a={},onChange:t,min:i=-99999,allowReset:r=!0})=>{var o,c,u,g;(0,l.useEffect)((()=>{if(document.getElementById(_r))return;const e=document.createElement("style");e.id=_r,e.textContent="\n.wcb-dimensions-unit-control__range {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 4px;\n\tappearance: none;\n\t-webkit-appearance: none;\n\tborder-radius: 2px;\n\toutline: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tcursor: pointer;\n\tmargin-top: -5px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-thumb {\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tborder: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {\n\theight: 4px;\n\tborder-radius: 2px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-track {\n\theight: 4px;\n\tborder-radius: 2px;\n\tbackground: #ddd;\n}\n",document.head.appendChild(e)}),[]);const d=Dr(a),[f,h]=(0,l.useState)(!d||!Ar(a)),[p,b]=(0,l.useState)(d),m={top:null!==(o=a.top)&&void 0!==o?o:"",right:null!==(c=a.right)&&void 0!==c?c:"",bottom:null!==(u=a.bottom)&&void 0!==u?u:"",left:null!==(g=a.left)&&void 0!==g?g:""},w=function(e){const{top:a,right:t,bottom:l,left:i}=e;return a===t&&t===l&&l===i&&a||""}(m),k=Dr(m)&&Ar(m),v=e=>{const a=null!=e?e:"";t({top:a,right:a,bottom:a,left:a}),b(!0)},y=(e,a)=>{t({...m,[e]:null!=a?a:""}),b(!0)},_=f?(0,n.__)("Unlink sides","boostify-blocks"):(0,n.__)("Link sides","boostify-blocks");return(0,l.createElement)("div",{style:Ir},(0,l.createElement)("div",{style:Tr},(0,l.createElement)("div",null,e),(0,l.createElement)("div",{style:Nr},r&&(0,l.createElement)(s.Button,{className:"component-box-control__reset-button",variant:"secondary",isSmall:!0,onClick:()=>{t(Lr),b(!1)},disabled:!p},(0,n.__)("Reset","boostify-blocks")),(0,l.createElement)(s.Tooltip,{text:_},(0,l.createElement)(s.Button,{className:"component-box-control__linked-button",isSmall:!0,icon:f?vr:yr,iconSize:24,"aria-label":_,onClick:()=>h((e=>!e))})))),f?(0,l.createElement)("div",{style:Pr},(0,l.createElement)($r,{side:"all"}),(0,l.createElement)(s.__experimentalUnitControl,{"aria-label":"string"==typeof e?e:void 0,className:"component-box-control__unit-control",style:Or,value:w,onChange:e=>v(e),min:i,placeholder:k?Fr.mixed:void 0,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:Rr},(0,l.createElement)(Hr,{value:w||m.top,min:i,onChange:v}))):Br.map((({key:e},a)=>(0,l.createElement)("div",{key:e,style:a===Br.length-1?Mr:Pr},(0,l.createElement)($r,{side:e}),(0,l.createElement)(s.__experimentalUnitControl,{"aria-label":Fr[e],className:"component-box-control__unit-control",style:Or,value:m[e],onChange:a=>y(e,a),min:i,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:Rr},(0,l.createElement)(Hr,{value:m[e],min:i,onChange:a=>y(e,a)}))))))},zr=({className:e="space-y-5",dimensionControl:a=cr,setAttrs__dimensions:t})=>{const i=aa()||"Desktop",{margin:r,padding:o}=a,{currentDeviceValue:s}=Le(r,i),{currentDeviceValue:c}=Le(o,i);return(0,l.createElement)("div",{className:e},(0,l.createElement)(jr,{label:(0,l.createElement)(zt,{hasResponsive:!0,className:""},(0,n.__)("Padding","boostify-blocks")),values:c||{},onChange:e=>{t({...a,padding:{...o,[i]:e}})},min:0}),(0,l.createElement)(jr,{label:(0,l.createElement)(zt,{className:"",hasResponsive:!0},(0,n.__)("Margin","boostify-blocks")),values:s||{},onChange:e=>{t({...a,margin:{...r,[i]:e}})},min:0}))},Gr={mainSettings:void 0,hoverColor:void 0,radius:{Desktop:"0",Tablet:"0",Mobile:"0"}},Wr=({className:e="space-y-4",borderControl:a=Gr,setAttrs__border:t})=>{const i=aa()||"Desktop",{mainSettings:r,hoverColor:c,radius:u}=a,g=u[i]||u.Tablet||u.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(s.__experimentalBorderBoxControl,{label:(0,n.__)("Border"),onChange:e=>{t({...a,mainSettings:e})},value:r,colors:[],enableAlpha:!0,popoverOffset:40,popoverPlacement:"left-start",__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,size:"__unstable-large",className:"wcb-BorderBoxControl"}),(0,l.createElement)(sr,{label:(0,n.__)("Hover border color","boostify-blocks"),onChange:e=>{t({...a,hoverColor:e})},color:c}),(0,l.createElement)("div",{className:"MyBorderControl__BorderRadiusControl"},(0,l.createElement)(zt,{className:"mb-2",hasResponsive:!0},(0,n.__)("Border radius","boostify-blocks")),(0,l.createElement)(o.__experimentalBorderRadiusControl,{values:g,onChange:e=>{(e=>{const l=u.Desktop===u.Tablet&&u.Desktop===u.Mobile;"Desktop"!==i||(void 0!==u.Tablet&&"0"!==u.Tablet||void 0!==u.Mobile&&"0"!==u.Mobile)&&!l?t({...a,radius:{...u,[i]:e}}):t({...a,radius:{Desktop:e,Tablet:e,Mobile:e}})})(e)},label:""})))},Vr={color:"#334155",hoverColor:"",iconSize:{Desktop:"2.5rem"},dimensions:{...cr,margin:{Desktop:{top:"1rem",left:"1rem",right:"1rem",bottom:"1rem"}},padding:{Desktop:{bottom:"",left:"",right:"",top:""}}},border:Gr},Ur=({panelData:e=Vr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{color:c,hoverColor:u,iconSize:g,dimensions:d,border:f}=e,{currentDeviceValue:h}=Le(g,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Icon","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(fr,{onChange:t=>{a({...e,iconSize:{...g,[o]:t}})},value:h||"",label:(0,n.__)("Icon size","boostify-blocks"),hasResponsive:!0}),(0,l.createElement)(sr,{onChange:t=>{a({...e,color:t})},color:c}),(0,l.createElement)(sr,{onChange:t=>{a({...e,hoverColor:t})},color:u,label:(0,n.__)("Hover color","boostify-blocks")}),(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(nr,{label:"Border"},(0,l.createElement)(Wr,{borderControl:f,setAttrs__border:t=>{a({...e,border:t})}})),(0,l.createElement)(nr,{label:"Dimensions"},(0,l.createElement)(zr,{dimensionControl:d,setAttrs__dimensions:t=>{a({...e,dimensions:t})}})))))},qr={border:{color:"#d1d5db",style:"solid",width:"1px",color:"#334155"},width:{Desktop:"40%"},marginBottom:{Desktop:"1rem"}},Kr=({panelData:e=qr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>{const o=aa()||"Desktop",{border:c,width:u,marginBottom:g}=e,{currentDeviceValue:d}=Le(g,o),{currentDeviceValue:f}=Le(u,o);return(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Separator","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(fr,{value:f||"",onChange:t=>{a({...e,width:{...u,[o]:t}})},label:(0,n.__)("Custom Width","boostify-blocks")}),(0,l.createElement)(s.__experimentalBorderControl,{label:(0,n.__)("Border styles"),onChange:t=>{a({...e,border:t})},withSlider:!0,value:c}),(0,l.createElement)(fr,{onChange:t=>{a({...e,marginBottom:{...g,[o]:t}})},value:d||"",label:(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:!0})))},Jr={...cr,padding:{Desktop:{top:"",left:"",right:"",bottom:""}},margin:{Desktop:{top:"",left:"",right:"",bottom:""}}},Zr=({panelData:e=Jr,setAttr__:a,initialOpen:t,onToggle:i,opened:r})=>(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Dimension","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(zr,{dimensionControl:e,setAttrs__dimensions:t=>a({...e,...t})}))),Yr={enableSeparator:!1,position:"afterTitle"},Qr=({panelData:e=Yr,setAttr__:a,initialOpen:t,onToggle:i,opened:r,showOptionAfterIcon:o})=>{aa();const{enableSeparator:c,position:u}=e;let g=[{value:"afterPrefix",label:"After Prefix"},{value:"afterTitle",label:"After Title"},{value:"afterDescription",label:"After Description"}];return o&&(g=[{value:"afterIcon",label:"After Icon"},...g]),(0,l.createElement)(s.PanelBody,{initialOpen:t,onToggle:i,opened:r,title:(0,n.__)("Separator","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(s.ToggleControl,{label:(0,n.__)("Enable separator","boostify-blocks"),checked:c,className:"mb-0",onChange:t=>{a({...e,enableSeparator:t})}}),c&&(0,l.createElement)(Vt,{label:(0,n.__)("Position","boostify-blocks"),options:g,value:u,onChange:t=>{a({...e,position:t})}})))};function Xr(e,a="wcb-"){return e?a+e.replace(/-/g,"").replace(/\s/g,"").substring(0,12):(a+"converniquedreturnnull"+Date.now()+Math.random()).replace(/\./g,"-")}const en=function({className:e="",uniqueId:a="",HtmlTag:t="div",children:i,attributes:r,id:n,...o}){let s="";try{const e=a=>{if(Array.isArray(a))return 0===a.length?{}:a;if(a&&"object"==typeof a){const t={};for(const[l,i]of Object.entries(a))t[l]=e(i);return t}return a},a=e(r);s=je().escape(JSON.stringify(a))}catch(a){console.log("attributes JSON.stringify error on SAVE function",{error:a,className:e,attributes:r})}const c=r?.advance_responsiveCondition||{},u=[c?.isHiddenOnDesktop?"wcb-hide-desktop":"",c?.isHiddenOnTablet?"wcb-hide-tab":"",c?.isHiddenOnMobile?"wcb-hide-mob":""].filter(Boolean).join(" ");return(0,l.createElement)(t,{...o,className:`wcb-cm wcb-update-div ${u} ${e.trim()} ${a.trim()}`,id:n||r?.anchor,"data-uniqueid":a,"data-is-wcb-save-common":!0},i,(0,l.createElement)("div",{"data-wcb-global-styles":a}),(0,l.createElement)("pre",{"data-wcb-block-attrs":a,style:{display:"none"}},s))},an=JSON.parse('{"UU":"boostify-blocks/icon-box"}'),tn={uniqueId:{type:"string",default:""},heading:{type:"string",source:"html",selector:".wcb-icon-box__heading",default:"John Doe"},designation:{type:"string",source:"html",selector:".wcb-icon-box__designation",default:"Write a Prefix"},description:{type:"string",source:"html",selector:".wcb-icon-box__description",default:"Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."},general_layout:{type:"object",default:El},general_icon:{type:"object",default:xi},general_separator:{type:"object",default:Yr},style_title:{type:"object",default:hr},style_desination:{type:"object",default:br},style_separator:{type:"object",default:qr},style_description:{type:"object",default:wr},style_Icon:{type:"object",default:Vr},style_dimension:{type:"object",default:Jr},advance_responsiveCondition:{type:"object",default:Xe},advance_zIndex:{type:"object",default:Gt},advance_motionEffect:{type:"object",default:{animationDelay:0,animationDuration:"fast",entranceAnimation:"",repeat:"1"}}},ln={attributes:{...tn,general_icon:{type:"object",default:{enableIcon:!0,iconPosition:"top",icon:{...yi,iconName:"lni-checkmark-circle"}}}},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,heading:s,description:c,designation:u,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w}=e,k={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w},v=()=>(0,l.createElement)(l.Fragment,null,p.enableIcon&&(0,l.createElement)("div",{className:"wcb-icon-box__icon-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__icon"},(0,l.createElement)(ki,{icon:p.icon}))),"afterIcon"===w.position&&y()),y=()=>w.enableSeparator?(0,l.createElement)("div",{className:"wcb-icon-box__separator-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__separator"})):null,_=r.headingTag,x=o.useBlockProps.save({className:"wcb-icon-box__wrap"});return(0,l.createElement)(en,{...x,attributes:k,uniqueId:a},("top"===p.iconPosition||"left"===p.iconPosition)&&v(),(0,l.createElement)("div",{className:"wcb-icon-box__content"},(0,l.createElement)("div",{className:"wcb-icon-box__content-title-wrap"},"leftOfTitle"===p.iconPosition&&v(),(0,l.createElement)("div",{className:"wcb-icon-box__content-title"},r.enablePrefix&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:u,placeholder:(0,n.__)("Designation..."),className:"wcb-icon-box__designation"}),"afterPrefix"===w.position&&y(),r.enableTitle&&(0,l.createElement)(o.RichText.Content,{tagName:_,value:s,placeholder:(0,n.__)("Heading..."),className:"wcb-icon-box__heading"})),("rightOfTitle"===p.iconPosition||"bellowTitle"===p.iconPosition)&&v()),"afterTitle"===w.position&&y(),r.enableDescription&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:c,placeholder:(0,n.__)("Description..."),className:"wcb-icon-box__description"}),"afterDescription"===w.position&&y(),r.enableCTAButton&&(0,l.createElement)(o.InnerBlocks.Content,null)),"right"===p.iconPosition&&v())}},rn={attributes:{...tn,general_icon:{type:"object",default:{enableIcon:!0,iconPosition:"top",icon:{...yi,iconName:"lni-checkmark-circle"}}}},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,heading:s,description:c,designation:u,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w,advance_motionEffect:k}=e,v={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w,advance_motionEffect:k},y=()=>(0,l.createElement)(l.Fragment,null,p.enableIcon&&(0,l.createElement)("div",{className:"wcb-icon-box__icon-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__icon"},(0,l.createElement)(ki,{icon:p.icon}))),"afterIcon"===w.position&&_()),_=()=>w.enableSeparator?(0,l.createElement)("div",{className:"wcb-icon-box__separator-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__separator"})):null,x=r.headingTag,S=o.useBlockProps.save({className:"wcb-icon-box__wrap"});return(0,l.createElement)(en,{...S,attributes:v,uniqueId:a},("top"===p.iconPosition||"left"===p.iconPosition)&&y(),(0,l.createElement)("div",{className:"wcb-icon-box__content"},(0,l.createElement)("div",{className:"wcb-icon-box__content-title-wrap"},"leftOfTitle"===p.iconPosition&&y(),(0,l.createElement)("div",{className:"wcb-icon-box__content-title"},r.enablePrefix&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:u,placeholder:(0,n.__)("Designation..."),className:"wcb-icon-box__designation"}),"afterPrefix"===w.position&&_(),r.enableTitle&&(0,l.createElement)(o.RichText.Content,{tagName:x,value:s,placeholder:(0,n.__)("Heading..."),className:"wcb-icon-box__heading"})),("rightOfTitle"===p.iconPosition||"bellowTitle"===p.iconPosition)&&y()),"afterTitle"===w.position&&_(),r.enableDescription&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:c,placeholder:(0,n.__)("Description..."),className:"wcb-icon-box__description"}),"afterDescription"===w.position&&_(),r.enableCTAButton&&(0,l.createElement)(o.InnerBlocks.Content,null)),"right"===p.iconPosition&&y())}},nn=[rn,ln,{},{}],{Fragment:on}=wp.element,{withSelect:sn}=wp.data;(0,r.registerBlockType)(an.UU,{edit:e=>{const{attributes:a,setAttributes:t,clientId:i}=e,{advance_responsiveCondition:r,advance_zIndex:s,heading:c,description:g,designation:d,uniqueId:f,general_layout:h,general_icon:p,style_title:b,style_desination:m,style_description:w,style_Icon:k,style_separator:v,style_dimension:y,general_separator:_,advance_motionEffect:x}=a,S=(0,l.useRef)(null),C=(0,o.useBlockProps)({ref:S}),{tabIsOpen:E,tabAdvancesIsPanelOpen:I,tabGeneralIsPanelOpen:T,tabStylesIsPanelOpen:N,handleTogglePanel:P}=(e=>{const{setBlockPanelInfo:a}=(0,qe.useDispatch)(Ze),{blockStores:t}=(0,qe.useSelect)((e=>({blockStores:e(Ze)?.getBlockPanelInfo()})),[e]),{tabIsOpen:i,Advances:r,General:n,Styles:o}=t[e]||{},s=t[e];return(0,l.useEffect)((()=>{!s&&a&&a(e,{tabIsOpen:"General",General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"}})}),[e]),{setBlockPanelInfo:a,tabAdvances:r,tabGeneral:n,tabStyles:o,tabIsOpen:i,blockStore:s,handleTogglePanel:(t,l,i)=>{a&&(i&&s&&"first"===s[t]?.panelIsOpen&&(l=""),s&&s[t]?.panelIsOpen===l&&(l=""),a(e,{tabIsOpen:t,[t]:{panelIsOpen:void 0===l&&s?s[t]?.panelIsOpen:l}}))},tabGeneralIsPanelOpen:n?.panelIsOpen,tabStylesIsPanelOpen:o?.panelIsOpen,tabAdvancesIsPanelOpen:r?.panelIsOpen}})(f),M=C.id;(0,l.useEffect)((()=>{t({uniqueId:Xr(M)})}),[M]);const O=(0,l.useCallback)((()=>({uniqueId:f,advance_responsiveCondition:r,advance_zIndex:s,general_layout:h,style_title:b,style_desination:m,style_description:w,style_Icon:k,style_separator:v,style_dimension:y,general_icon:p,general_separator:_,advance_motionEffect:x})),[f,r,s,h,b,m,w,k,v,y,p,_,x]),R=()=>(0,l.createElement)(l.Fragment,null,p.enableIcon&&(0,l.createElement)("div",{className:"wcb-icon-box__icon-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__icon"},(0,l.createElement)(ki,{icon:p.icon}))),"afterIcon"===_.position&&A()),A=()=>_.enableSeparator?(0,l.createElement)("div",{className:"wcb-icon-box__separator-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__separator"})):null,D=h.headingTag;return(0,l.createElement)(Ci,{uniqueKey:i},(0,l.createElement)("div",{...C,className:`${C?.className} wcb-icon-box__wrap ${f}`,"data-uniqueid":f},(0,l.createElement)(u,{renderTabPanels:e=>{switch(e.name){case"General":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Il,{onToggle:()=>P("General","Layout",!0),initialOpen:"Layout"===T||"first"===T,opened:"Layout"===T||void 0,setAttr__:e=>{t({general_layout:e})},panelData:h}),(0,l.createElement)(Si,{onToggle:()=>P("General","Icon"),initialOpen:"Icon"===T,opened:"Icon"===T||void 0,setAttr__:e=>"leftOfTitle"===e.iconPosition||"left"===e.iconPosition?t({general_icon:e,general_separator:{..._,position:"afterTitle"},general_layout:{...h,textAlignment:{Desktop:"left",Tablet:"left",Mobile:"left"}},style_Icon:{...k}}):"rightOfTitle"===e.iconPosition||"right"===e.iconPosition?t({general_icon:e,general_separator:{..._,position:"afterTitle"},general_layout:{...h,textAlignment:{Desktop:"right",Tablet:"right",Mobile:"right"}},style_Icon:{...k}}):t({general_icon:e,style_Icon:{...k}}),panelData:p}),(0,l.createElement)(Qr,{onToggle:()=>P("General","Separator"),initialOpen:"Separator"===T,opened:"Separator"===T||void 0,showOptionAfterIcon:"top"===p.iconPosition||"bellowTitle"===p.iconPosition,setAttr__:e=>"afterIcon"===e.position&&"top"!==p.iconPosition&&"bellowTitle"!==p.iconPosition?t({general_separator:{..._,position:"afterTitle"}}):t({general_separator:e}),panelData:_}));case"Styles":return(0,l.createElement)(l.Fragment,null,p.enableIcon&&(0,l.createElement)(Ur,{onToggle:()=>P("Styles","_StyleIcons"),initialOpen:"_StyleIcons"===N,opened:"_StyleIcons"===N||void 0,setAttr__:e=>{t({style_Icon:e})},panelData:k}),h.enablePrefix&&(0,l.createElement)(mr,{onToggle:()=>P("Styles","_StyleDesignation"),initialOpen:"_StyleDesignation"===N,opened:"_StyleDesignation"===N||void 0,setAttr__:e=>{t({style_desination:e})},panelData:m}),h.enableTitle&&(0,l.createElement)(pr,{onToggle:()=>P("Styles","_StyleTitle",!0),initialOpen:"_StyleTitle"===N||"first"===N,opened:"_StyleTitle"===N||void 0,setAttr__:e=>{t({style_title:e})},panelData:b}),_.enableSeparator&&(0,l.createElement)(Kr,{onToggle:()=>P("Styles","_StyleSeparator"),initialOpen:"_StyleSeparator"===N,opened:"_StyleSeparator"===N||void 0,setAttr__:e=>{t({style_separator:e})},panelData:v}),h.enableDescription&&(0,l.createElement)(kr,{onToggle:()=>P("Styles","_StyleDescription"),initialOpen:"_StyleDescription"===N,opened:"_StyleDescription"===N||void 0,setAttr__:e=>{t({style_description:e})},panelData:w}),(0,l.createElement)(Zr,{onToggle:()=>P("Styles","_StyleDimension"),initialOpen:"_StyleDimension"===N,opened:"_StyleDimension"===N||void 0,setAttr__:e=>{t({style_dimension:e})},panelData:y}));case"Advances":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Kt,{advance_motionEffect:x,advance_responsiveCondition:a.advance_responsiveCondition,advance_zIndex:a.advance_zIndex,handleTogglePanel:P,setAttributes:t,tabAdvancesIsPanelOpen:I}));default:return(0,l.createElement)("div",null)}},uniqueId:f}),(0,l.createElement)(Ue,{...O()}),("top"===p.iconPosition||"left"===p.iconPosition)&&R(),(0,l.createElement)("div",{className:"wcb-icon-box__content"},(0,l.createElement)("div",{className:"wcb-icon-box__content-title-wrap"},"leftOfTitle"===p.iconPosition&&R(),(0,l.createElement)("div",{className:"wcb-icon-box__content-title"},h.enablePrefix&&(0,l.createElement)(o.RichText,{tagName:"div",value:d,allowedFormats:[],onChange:e=>t({designation:e}),placeholder:(0,n.__)("Write a Prefix"),className:"wcb-icon-box__designation"}),"afterPrefix"===_.position&&A(),h.enableTitle&&(0,l.createElement)(o.RichText,{tagName:D,value:c,allowedFormats:["core/bold","core/italic"],onChange:e=>t({heading:e}),placeholder:(0,n.__)("Heading of box"),className:"wcb-icon-box__heading"})),("rightOfTitle"===p.iconPosition||"bellowTitle"===p.iconPosition)&&R()),"afterTitle"===_.position&&A(),h.enableDescription&&(0,l.createElement)(o.RichText,{tagName:"div",value:g,allowedFormats:["core/bold","core/italic"],onChange:e=>t({description:e}),placeholder:(0,n.__)("Description of box ..."),className:"wcb-icon-box__description"}),"afterDescription"===_.position&&A(),h.enableCTAButton&&(0,l.createElement)(o.InnerBlocks,{allowedBlocks:[],template:[["boostify-blocks/button",{}]]})),"right"===p.iconPosition&&R()))},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,heading:s,description:c,designation:u,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w,advance_motionEffect:k}=e,v={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:i,general_layout:r,style_description:g,style_desination:d,style_Icon:f,style_title:h,general_icon:p,style_dimension:b,style_separator:m,general_separator:w,advance_motionEffect:k},y=()=>(0,l.createElement)(l.Fragment,null,p.enableIcon&&(0,l.createElement)("div",{className:"wcb-icon-box__icon-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__icon"},(0,l.createElement)(ki,{icon:p.icon}))),"afterIcon"===w.position&&_()),_=()=>w.enableSeparator?(0,l.createElement)("div",{className:"wcb-icon-box__separator-wrap"},(0,l.createElement)("div",{className:"wcb-icon-box__separator"})):null,x=r.headingTag,S=o.useBlockProps.save({className:"wcb-icon-box__wrap"});return(0,l.createElement)(en,{...S,attributes:v,uniqueId:a},("top"===p.iconPosition||"left"===p.iconPosition)&&y(),(0,l.createElement)("div",{className:"wcb-icon-box__content"},(0,l.createElement)("div",{className:"wcb-icon-box__content-title-wrap"},"leftOfTitle"===p.iconPosition&&y(),(0,l.createElement)("div",{className:"wcb-icon-box__content-title"},r.enablePrefix&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:u,placeholder:(0,n.__)("Designation..."),className:"wcb-icon-box__designation"}),"afterPrefix"===w.position&&_(),r.enableTitle&&(0,l.createElement)(o.RichText.Content,{tagName:x,value:s,placeholder:(0,n.__)("Heading..."),className:"wcb-icon-box__heading"})),("rightOfTitle"===p.iconPosition||"bellowTitle"===p.iconPosition)&&y()),"afterTitle"===w.position&&_(),r.enableDescription&&(0,l.createElement)(o.RichText.Content,{tagName:"div",value:c,placeholder:(0,n.__)("Description..."),className:"wcb-icon-box__description"}),"afterDescription"===w.position&&_(),r.enableCTAButton&&(0,l.createElement)(o.InnerBlocks.Content,null)),"right"===p.iconPosition&&y())},attributes:tn,deprecated:nn,example:function(e){let a={};for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t].default);return a}(tn),icon:(0,l.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M14 8H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M15 12H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M17 16H19",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))})},7500:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"}))}));e.exports=i},8156:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8477:(e,a,t)=>{const l=t(1609),i=l.forwardRef((function({title:e,titleId:a,...t},i){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}))}));e.exports=i}},t={};function l(e){var i=t[e];if(void 0!==i)return i.exports;var r=t[e]={exports:{}};return a[e](r,r.exports,l),r.exports}l.m=a,e=[],l.O=(a,t,i,r)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){for(var[t,i,r]=e[u],o=!0,s=0;s<t.length;s++)(!1&r||n>=r)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(o=!1,r<n&&(n=r));if(o){e.splice(u--,1);var c=i();void 0!==c&&(a=c)}}return a}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,i,r]},l.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return l.d(a,{a}),a},l.d=(e,a)=>{for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={6937:0,9677:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var i,r,[n,o,s]=t,c=0;if(n.some((a=>0!==e[a]))){for(i in o)l.o(o,i)&&(l.m[i]=o[i]);if(s)var u=s(l)}for(a&&a(t);c<n.length;c++)r=n[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(u)},t=globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var i=l.O(void 0,[9677],(()=>l(4545)));i=l.O(i)})();