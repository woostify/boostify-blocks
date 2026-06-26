(()=>{var e,a={826:(e,a,t)=>{const l=t(1609),r=l.forwardRef((function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"}))}));e.exports=r},877:(e,a,t)=>{"use strict";var l=t(1609),r=t.n(l);const i=window.wp.blocks,n=window.wp.i18n,o=window.wp.blockEditor,s=window.lodash;var c=t.n(s);const u=window.wp.compose,g=window.wp.components,f=[{name:"General",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 fill-none"},(0,l.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,n.__)("General","boostify-blocks")))},{name:"Styles",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 6H16.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 18H15.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 13.95L16.47 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M11.47 10H14.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,l.createElement)("path",{d:"M8.44 7H2.53",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),(0,l.createElement)("div",null,(0,n.__)("Styles","boostify-blocks")))},{name:"Advances",title:(0,l.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,l.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,l.createElement)("div",null,(0,n.__)("Advances","boostify-blocks")))}],d=(0,l.memo)((({renderTabPanels:e,tabs:a=f,uniqueId:t="",tabDefaultActive:r="General",onChangeActive:i})=>{(0,l.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector(".components-panel__body.is-opened");e&&e.scrollIntoView({behavior:"smooth"})}),500)}),[]);const n=()=>{const e=document.querySelector(".components-panel__body.block-editor-block-inspector__advanced"),a=document.querySelector(".HOCInspectorControls__ative-tab"),t=!!a?.id.includes("-Advances");e&&(e.style.display=t?"block":"none")};return(0,l.createElement)(o.InspectorControls,null,(0,l.createElement)(g.TabPanel,{className:`wcb-inspectorControls__panel ${t}`,activeClass:"HOCInspectorControls__ative-tab active-tab",tabs:a,onSelect:e=>{i&&i(e),setTimeout((()=>{n()}),100)},initialTabName:r},(a=>(0,l.createElement)("div",{key:a.name,className:a.name},e(a)))),(t&&setTimeout((()=>{n()}),100),null))}));var b=function(){function e(e){var a=this;this._insertTag=function(e){var t;t=0===a.tags.length?a.insertionPoint?a.insertionPoint.nextSibling:a.prepend?a.container.firstChild:a.before:a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(e,t),a.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var a=e.prototype;return a.hydrate=function(e){e.forEach(this._insertTag)},a.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var a=document.createElement("style");return a.setAttribute("data-emotion",e.key),void 0!==e.nonce&&a.setAttribute("nonce",e.nonce),a.appendChild(document.createTextNode("")),a.setAttribute("data-s",""),a}(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var t=function(e){if(e.sheet)return e.sheet;for(var a=0;a<document.styleSheets.length;a++)if(document.styleSheets[a].ownerNode===e)return document.styleSheets[a]}(a);try{t.insertRule(e,t.cssRules.length)}catch(e){}}else a.appendChild(document.createTextNode(e));this.ctr++},a.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),h=Math.abs,p=String.fromCharCode,m=Object.assign;function k(e){return e.trim()}function w(e,a,t){return e.replace(a,t)}function y(e,a){return e.indexOf(a)}function v(e,a){return 0|e.charCodeAt(a)}function _(e,a,t){return e.slice(a,t)}function C(e){return e.length}function E(e){return e.length}function S(e,a){return a.push(e),e}var x=1,T=1,I=0,N=0,R=0,M="";function A(e,a,t,l,r,i,n){return{value:e,root:a,parent:t,type:l,props:r,children:i,line:x,column:T,length:n,return:""}}function O(e,a){return m(A("",null,null,"",null,null,0),e,{length:-e.length},a)}function P(){return R=N>0?v(M,--N):0,T--,10===R&&(T=1,x--),R}function D(){return R=N<I?v(M,N++):0,T++,10===R&&(T=1,x++),R}function B(){return v(M,N)}function L(){return N}function $(e,a){return _(M,e,a)}function F(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return x=T=1,I=C(M=e),N=0,[]}function j(e){return M="",e}function G(e){return k($(N-1,W(91===e?e+2:40===e?e+1:e)))}function z(e){for(;(R=B())&&R<33;)D();return F(e)>2||F(R)>3?"":" "}function V(e,a){for(;--a&&D()&&!(R<48||R>102||R>57&&R<65||R>70&&R<97););return $(e,L()+(a<6&&32==B()&&32==D()))}function W(e){for(;D();)switch(R){case e:return N;case 34:case 39:34!==e&&39!==e&&W(R);break;case 40:41===e&&W(e);break;case 92:D()}return N}function U(e,a){for(;D()&&e+R!==57&&(e+R!==84||47!==B()););return"/*"+$(a,N-1)+"*"+p(47===e?e:D())}function q(e){for(;!F(B());)D();return $(e,N)}var K="-ms-",J="-moz-",Z="-webkit-",Q="comm",Y="rule",X="decl",ee="@keyframes";function ae(e,a){for(var t="",l=E(e),r=0;r<l;r++)t+=a(e[r],r,e,a)||"";return t}function te(e,a,t,l){switch(e.type){case"@import":case X:return e.return=e.return||e.value;case Q:return"";case ee:return e.return=e.value+"{"+ae(e.children,l)+"}";case Y:e.value=e.props.join(",")}return C(t=ae(e.children,l))?e.return=e.value+"{"+t+"}":""}function le(e){return j(re("",null,null,null,[""],e=H(e),0,[0],e))}function re(e,a,t,l,r,i,n,o,s){for(var c=0,u=0,g=n,f=0,d=0,b=0,h=1,m=1,k=1,_=0,E="",x=r,T=i,I=l,N=E;m;)switch(b=_,_=D()){case 40:if(108!=b&&58==v(N,g-1)){-1!=y(N+=w(G(_),"&","&\f"),"&\f")&&(k=-1);break}case 34:case 39:case 91:N+=G(_);break;case 9:case 10:case 13:case 32:N+=z(b);break;case 92:N+=V(L()-1,7);continue;case 47:switch(B()){case 42:case 47:S(ne(U(D(),L()),a,t),s);break;default:N+="/"}break;case 123*h:o[c++]=C(N)*k;case 125*h:case 59:case 0:switch(_){case 0:case 125:m=0;case 59+u:d>0&&C(N)-g&&S(d>32?oe(N+";",l,t,g-1):oe(w(N," ","")+";",l,t,g-2),s);break;case 59:N+=";";default:if(S(I=ie(N,a,t,c,u,r,o,E,x=[],T=[],g),i),123===_)if(0===u)re(N,a,I,I,x,i,g,o,T);else switch(99===f&&110===v(N,3)?100:f){case 100:case 109:case 115:re(e,I,I,l&&S(ie(e,I,I,0,0,r,o,E,r,x=[],g),T),r,T,g,o,l?x:T);break;default:re(N,I,I,I,[""],T,0,o,T)}}c=u=d=0,h=k=1,E=N="",g=n;break;case 58:g=1+C(N),d=b;default:if(h<1)if(123==_)--h;else if(125==_&&0==h++&&125==P())continue;switch(N+=p(_),_*h){case 38:k=u>0?1:(N+="\f",-1);break;case 44:o[c++]=(C(N)-1)*k,k=1;break;case 64:45===B()&&(N+=G(D())),f=B(),u=g=C(E=N+=q(L())),_++;break;case 45:45===b&&2==C(N)&&(h=0)}}return i}function ie(e,a,t,l,r,i,n,o,s,c,u){for(var g=r-1,f=0===r?i:[""],d=E(f),b=0,p=0,m=0;b<l;++b)for(var y=0,v=_(e,g+1,g=h(p=n[b])),C=e;y<d;++y)(C=k(p>0?f[y]+" "+v:w(v,/&\f/g,f[y])))&&(s[m++]=C);return A(e,a,t,0===r?Y:o,s,c,u)}function ne(e,a,t){return A(e,a,t,Q,p(R),_(e,2,-2),0)}function oe(e,a,t,l){return A(e,a,t,X,_(e,0,l),_(e,l+1,-1),l)}var se=function(e,a,t){for(var l=0,r=0;l=r,r=B(),38===l&&12===r&&(a[t]=1),!F(r);)D();return $(e,N)},ce=new WeakMap,ue=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var a=e.value,t=e.parent,l=e.column===t.column&&e.line===t.line;"rule"!==t.type;)if(!(t=t.parent))return;if((1!==e.props.length||58===a.charCodeAt(0)||ce.get(t))&&!l){ce.set(e,!0);for(var r=[],i=function(e,a){return j(function(e,a){var t=-1,l=44;do{switch(F(l)){case 0:38===l&&12===B()&&(a[t]=1),e[t]+=se(N-1,a,t);break;case 2:e[t]+=G(l);break;case 4:if(44===l){e[++t]=58===B()?"&\f":"",a[t]=e[t].length;break}default:e[t]+=p(l)}}while(l=D());return e}(H(e),a))}(a,r),n=t.props,o=0,s=0;o<i.length;o++)for(var c=0;c<n.length;c++,s++)e.props[s]=r[o]?i[o].replace(/&\f/g,n[c]):n[c]+" "+i[o]}}},ge=function(e){if("decl"===e.type){var a=e.value;108===a.charCodeAt(0)&&98===a.charCodeAt(2)&&(e.return="",e.value="")}};function fe(e,a){switch(function(e,a){return 45^v(e,0)?(((a<<2^v(e,0))<<2^v(e,1))<<2^v(e,2))<<2^v(e,3):0}(e,a)){case 5103:return Z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Z+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Z+e+J+e+K+e+e;case 6828:case 4268:return Z+e+K+e+e;case 6165:return Z+e+K+"flex-"+e+e;case 5187:return Z+e+w(e,/(\w+).+(:[^]+)/,Z+"box-$1$2"+K+"flex-$1$2")+e;case 5443:return Z+e+K+"flex-item-"+w(e,/flex-|-self/,"")+e;case 4675:return Z+e+K+"flex-line-pack"+w(e,/align-content|flex-|-self/,"")+e;case 5548:return Z+e+K+w(e,"shrink","negative")+e;case 5292:return Z+e+K+w(e,"basis","preferred-size")+e;case 6060:return Z+"box-"+w(e,"-grow","")+Z+e+K+w(e,"grow","positive")+e;case 4554:return Z+w(e,/([^-])(transform)/g,"$1"+Z+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,Z+"$1"),/(image-set)/,Z+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,Z+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,Z+"box-pack:$3"+K+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Z+e+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,Z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(C(e)-1-a>6)switch(v(e,a+1)){case 109:if(45!==v(e,a+4))break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+Z+"$2-$3$1"+J+(108==v(e,a+3)?"$3":"$2-$3"))+e;case 115:return~y(e,"stretch")?fe(w(e,"stretch","fill-available"),a)+e:e}break;case 4949:if(115!==v(e,a+1))break;case 6444:switch(v(e,C(e)-3-(~y(e,"!important")&&10))){case 107:return w(e,":",":"+Z)+e;case 101:return w(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Z+(45===v(e,14)?"inline-":"")+"box$3$1"+Z+"$2$3$1"+K+"$2box$3")+e}break;case 5936:switch(v(e,a+11)){case 114:return Z+e+K+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Z+e+K+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Z+e+K+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Z+e+K+e+e}return e}var de=[function(e,a,t,l){if(e.length>-1&&!e.return)switch(e.type){case X:e.return=fe(e.value,e.length);break;case ee:return ae([O(e,{value:w(e.value,"@","@"+Z)})],l);case Y:if(e.length)return function(e,a){return e.map(a).join("")}(e.props,(function(a){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(a)){case":read-only":case":read-write":return ae([O(e,{props:[w(a,/:(read-\w+)/,":-moz-$1")]})],l);case"::placeholder":return ae([O(e,{props:[w(a,/:(plac\w+)/,":"+Z+"input-$1")]}),O(e,{props:[w(a,/:(plac\w+)/,":-moz-$1")]}),O(e,{props:[w(a,/:(plac\w+)/,K+"input-$1")]})],l)}return""}))}}];const be=function(e){var a=e.key;if("css"===a){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var l,r,i=e.stylisPlugins||de,n={},o=[];l=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+a+' "]'),(function(e){for(var a=e.getAttribute("data-emotion").split(" "),t=1;t<a.length;t++)n[a[t]]=!0;o.push(e)}));var s,c,u,g,f=[te,(g=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&g(e)})],d=(c=[ue,ge].concat(i,f),u=E(c),function(e,a,t,l){for(var r="",i=0;i<u;i++)r+=c[i](e,a,t,l)||"";return r});r=function(e,a,t,l){s=t,ae(le(e?e+"{"+a.styles+"}":a.styles),d),l&&(h.inserted[a.name]=!0)};var h={key:a,sheet:new b({key:a,container:l,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:n,registered:{},insert:r};return h.sheet.hydrate(o),h},he=function(e){for(var a,t=0,l=0,r=e.length;r>=4;++l,r-=4)a=1540483477*(65535&(a=255&e.charCodeAt(l)|(255&e.charCodeAt(++l))<<8|(255&e.charCodeAt(++l))<<16|(255&e.charCodeAt(++l))<<24))+(59797*(a>>>16)<<16),t=1540483477*(65535&(a^=a>>>24))+(59797*(a>>>16)<<16)^1540483477*(65535&t)+(59797*(t>>>16)<<16);switch(r){case 3:t^=(255&e.charCodeAt(l+2))<<16;case 2:t^=(255&e.charCodeAt(l+1))<<8;case 1:t=1540483477*(65535&(t^=255&e.charCodeAt(l)))+(59797*(t>>>16)<<16)}return(((t=1540483477*(65535&(t^=t>>>13))+(59797*(t>>>16)<<16))^t>>>15)>>>0).toString(36)},pe={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var me=/[A-Z]|^ms/g,ke=/_EMO_([^_]+?)_([^]*?)_EMO_/g,we=function(e){return 45===e.charCodeAt(1)},ye=function(e){return null!=e&&"boolean"!=typeof e},ve=function(){var e=Object.create(null);return function(a){return void 0===e[a]&&(e[a]=we(t=a)?t:t.replace(me,"-$&").toLowerCase()),e[a];var t}}(),_e=function(e,a){switch(e){case"animation":case"animationName":if("string"==typeof a)return a.replace(ke,(function(e,a,t){return Ee={name:a,styles:t,next:Ee},a}))}return 1===pe[e]||we(e)||"number"!=typeof a||0===a?a:a+"px"};function Ce(e,a,t){if(null==t)return"";if(void 0!==t.__emotion_styles)return t;switch(typeof t){case"boolean":return"";case"object":if(1===t.anim)return Ee={name:t.name,styles:t.styles,next:Ee},t.name;if(void 0!==t.styles){var l=t.next;if(void 0!==l)for(;void 0!==l;)Ee={name:l.name,styles:l.styles,next:Ee},l=l.next;return t.styles+";"}return function(e,a,t){var l="";if(Array.isArray(t))for(var r=0;r<t.length;r++)l+=Ce(e,a,t[r])+";";else for(var i in t){var n=t[i];if("object"!=typeof n)null!=a&&void 0!==a[n]?l+=i+"{"+a[n]+"}":ye(n)&&(l+=ve(i)+":"+_e(i,n)+";");else if(!Array.isArray(n)||"string"!=typeof n[0]||null!=a&&void 0!==a[n[0]]){var o=Ce(e,a,n);switch(i){case"animation":case"animationName":l+=ve(i)+":"+o+";";break;default:l+=i+"{"+o+"}"}}else for(var s=0;s<n.length;s++)ye(n[s])&&(l+=ve(i)+":"+_e(i,n[s])+";")}return l}(e,a,t);case"function":if(void 0!==e){var r=Ee,i=t(e);return Ee=r,Ce(e,a,i)}}if(null==a)return t;var n=a[t];return void 0!==n?n:t}var Ee,Se=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xe=function(e,a,t){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var l=!0,r="";Ee=void 0;var i=e[0];null==i||void 0===i.raw?(l=!1,r+=Ce(t,a,i)):r+=i[0];for(var n=1;n<e.length;n++)r+=Ce(t,a,e[n]),l&&(r+=i[n]);Se.lastIndex=0;for(var o,s="";null!==(o=Se.exec(r));)s+="-"+o[1];return{name:he(r)+s,styles:r,next:Ee}},Te=!!l.useInsertionEffect&&l.useInsertionEffect||l.useLayoutEffect,Ie=(0,l.createContext)("undefined"!=typeof HTMLElement?be({key:"css"}):null),Ne=Ie.Provider,Re=function(e){return(0,l.forwardRef)((function(a,t){var r=(0,l.useContext)(Ie);return e(a,r,t)}))},Me=(0,l.createContext)({});t(4146);var Ae=Re((function(e,a){var t=e.styles,r=xe([t],void 0,(0,l.useContext)(Me)),i=(0,l.useRef)();return Te((function(){var e=a.key+"-global",t=new a.sheet.constructor({key:e,nonce:a.sheet.nonce,container:a.sheet.container,speedy:a.sheet.isSpeedy}),l=!1,n=document.querySelector('style[data-emotion="'+e+" "+r.name+'"]');return a.sheet.tags.length&&(t.before=a.sheet.tags[0]),null!==n&&(l=!0,n.setAttribute("data-emotion",e),t.hydrate([n])),i.current=[t,l],function(){t.flush()}}),[a]),Te((function(){var e=i.current,t=e[0];if(e[1])e[1]=!1;else{if(void 0!==r.next&&function(e,a){!function(e,a){e.key,a.name}(e,a);var t=e.key+"-"+a.name;if(void 0===e.inserted[a.name]){var l=a;do{e.insert(a===l?"."+t:"",l,e.sheet,!0),l=l.next}while(void 0!==l)}}(a,r.next),t.tags.length){var l=t.tags[t.tags.length-1].nextElementSibling;t.before=l,t.flush()}a.insert("",r,t,!1)}}),[a,r.name]),null}));function Oe(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return xe(a)}window.jQuery;const Pe={media_tablet:"768px",media_desktop:"1024px",reCAPTCHA_v3_secret_key:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",reCAPTCHA_v3_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",defaultContentWidth:window?.boostify_blocks_layout_global_settings?.contentSize||"",containerPadding:"10px",enableTemplatesButton:"true",enableCopyPasteStyles:"false",containerElementsGap:"10px",blocksEditorSpacing:"0px",buttonInheritFromTheme:"false",buttonTheme:{backgroundColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor||"#0073aa",backgroundColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover||"#3a3a3a",textColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor||"#ffffff",textColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover||"#ffffff",borderRadius:window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius||"50px"},...window.boostify_blocks_global_variables||{},defaultContentWidth:window.boostify_blocks_global_variables?.defaultContentWidth||window.boostify_blocks_layout_global_settings?.contentSize};var De;De=()=>{(e=>{const a=e?.blocksEditorSpacing,t=""==a?0:a,l=((e="0px")=>`\n  /* Desktop */\n  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper\n    > * + *:not(p),\n  .edit-post-visual-editor .editor-styles-wrapper\n    .block-editor-block-list__layout.is-root-container\n    > * + *:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-root-container.wp-site-blocks\n    > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-layout-constrained\n    > * + * {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  /* Tablet */\n  @media (max-width: 768px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n\n  /* Mobile */\n  @media (max-width: 480px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n`)("number"==typeof t?`${t}px`:t);let r=document.getElementById("wcb-blocks-editor-custom-style");r||(r=document.createElement("style"),r.id="wcb-blocks-editor-custom-style",document.head.appendChild(r)),r.textContent=l})(Pe)},window.wp?.domReady&&window.wp.domReady(De);const Be=({mobile_v:e=null,tablet_v:a=null,desktop_v:t=null})=>{let l=a,r=t;return e===a&&a===t?{mobile_v:e,tablet_v:null,desktop_v:null}:(t!==a&&t!==e||(r=null),a===e&&(l=null),{mobile_v:null!=e?e:null,tablet_v:null!=l?l:null,desktop_v:null!=r?r:null})},Le=Oe`
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
`,$e=({advance_motionEffect:e,advance_zIndex:a,advance_responsiveCondition:t,className:l,defaultDisplay:r})=>{const{media_desktop:i,media_tablet:n}=Pe;try{if(e?.entranceAnimation){const a=document.querySelectorAll(l),t=new IntersectionObserver((a=>{a.forEach((a=>{if(a.isIntersecting){const l=a.target,r=/\banimate__\S+/g,i=l?.className.replace(r,"");l.setAttribute("class",i),setTimeout((()=>{l?.classList.add("animate__animated",`animate__${e?.entranceAnimation}`,`animate__${e?.animationDuration}`,`animate__delay-${e?.animationDelay}ms`,`animate__repeat-${e?.repeat}`)}),50),t.unobserve(l)}}))}),{threshold:.2});a.forEach((e=>t.observe(e)))}}catch(e){console.log("error, advance_motionEffect",e)}const{mobile_v:o,tablet_v:s,desktop_v:c}=Be({mobile_v:a?.Mobile||a?.Tablet||a?.Desktop,tablet_v:a?.Tablet||a?.Desktop,desktop_v:a?.Desktop}),u=e=>""===e?"":e?Le:Oe`display: ${r};`;return Oe`
		${l} {
			visibility: visible;
			@media (min-width: ${i}) {
				z-index: ${c};
				${u(t?.isHiddenOnDesktop)}
			}

			@media (min-width: ${n}) and (max-width: ${i}) {
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

/***/ "./src/block-form/Edit.tsx":
/*!*********************************!*\
  !*** ./src/block-form/Edit.tsx ***!
  \*********************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HOCInspectorControls */ "./src/components/HOCInspectorControls.tsx");
/* harmony import */ var _GlobalCss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GlobalCss */ "./src/block-form/GlobalCss.tsx");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/block-form/editor.scss");
/* harmony import */ var _hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useSetBlockPanelInfo */ "./src/hooks/useSetBlockPanelInfo.ts");
/* harmony import */ var _components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/AdvancePanelCommon */ "./src/components/AdvancePanelCommon.tsx");
/* harmony import */ var _WcbFormPanelGeneral__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WcbFormPanelGeneral */ "./src/block-form/WcbFormPanelGeneral.tsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _WcbFormPanelSubmitButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./WcbFormPanelSubmitButton */ "./src/block-form/WcbFormPanelSubmitButton.tsx");
/* harmony import */ var _WcbFormPanelAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./WcbFormPanelAction */ "./src/block-form/WcbFormPanelAction.tsx");
/* harmony import */ var _WcbFormPanelGoogleRecaptcha__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./WcbFormPanelGoogleRecaptcha */ "./src/block-form/WcbFormPanelGoogleRecaptcha.tsx");
/* harmony import */ var _WcbFormPanel_StyleLabel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./WcbFormPanel_StyleLabel */ "./src/block-form/WcbFormPanel_StyleLabel.tsx");
/* harmony import */ var _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./WcbFormPanel_StyleInput */ "./src/block-form/WcbFormPanel_StyleInput.tsx");
/* harmony import */ var _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WcbFormPanel_StyleCheckBoxRadio */ "./src/block-form/WcbFormPanel_StyleCheckBoxRadio.tsx");
/* harmony import */ var _WcbPostGridPanel_StyleSubmitButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./WcbPostGridPanel_StyleSubmitButton */ "./src/block-form/WcbPostGridPanel_StyleSubmitButton.tsx");
/* harmony import */ var _WcbPostGridPanel_StyleMessages__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./WcbPostGridPanel_StyleMessages */ "./src/block-form/WcbPostGridPanel_StyleMessages.tsx");
/* harmony import */ var _WcbFormPanel_StyleSpacing__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./WcbFormPanel_StyleSpacing */ "./src/block-form/WcbFormPanel_StyleSpacing.tsx");
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../components/MyCacheProvider */ "./src/components/MyCacheProvider.tsx");
/* harmony import */ var _utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../utils/converUniqueIdToAnphaKey */ "./src/utils/converUniqueIdToAnphaKey.ts");


























const Edit = props => {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    general_general,
    uniqueId,
    general_submit_button,
    general_action,
    general_gg_recaptcha,
    style_label,
    style_input,
    style_checkbox_radio_toggle,
    style_submit_button,
    style_messages,
    style_spacing
  } = attributes;
  //  COMMON HOOKS
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const wrapBlockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    ref
  });
  const {
    tabIsOpen,
    tabAdvancesIsPanelOpen,
    tabGeneralIsPanelOpen,
    tabStylesIsPanelOpen,
    handleTogglePanel
  } = (0,_hooks_useSetBlockPanelInfo__WEBPACK_IMPORTED_MODULE_8__["default"])(uniqueId);

  // make uniqueid
  const UNIQUE_ID = wrapBlockProps.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      uniqueId: (0,_utils_converUniqueIdToAnphaKey__WEBPACK_IMPORTED_MODULE_24__["default"])(UNIQUE_ID)
    });
  }, [UNIQUE_ID]);
  //

  const handleChangeFormPanelGeneral = data => {
    let NEW_DATA = {
      general_general: data
    };

    // when change FORM STYLE
    if (data.formStyle !== general_general.formStyle) {
      if (data.formStyle === "simple") {
        NEW_DATA = {
          general_general: data,
          style_input: _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_17__.WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE,
          style_checkbox_radio_toggle: _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_18__.WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE
        };
      } else if (data.formStyle === "solid") {
        NEW_DATA = {
          general_general: data,
          style_input: _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_17__.WCB_FORM_PANEL_STYLE_INPUT_DEMO__SOLID,
          style_checkbox_radio_toggle: _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_18__.WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SOLID
        };
      } else if (data.formStyle === "underline") {
        NEW_DATA = {
          general_general: data,
          style_input: _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_17__.WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE,
          style_checkbox_radio_toggle: _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_18__.WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE
        };
      }
    }
    setAttributes(NEW_DATA);
  };
  //

  const renderTabBodyPanels = tab => {
    switch (tab.name) {
      case "General":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanelGeneral__WEBPACK_IMPORTED_MODULE_10__["default"], {
          onToggle: () => handleTogglePanel("General", "General", true),
          initialOpen: tabGeneralIsPanelOpen === "General" || tabGeneralIsPanelOpen === "first",
          opened: tabGeneralIsPanelOpen === "General" || undefined
          //
          ,
          setAttr__: data => {
            handleChangeFormPanelGeneral(data);
          },
          panelData: general_general
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanelSubmitButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
          onToggle: () => handleTogglePanel("General", "SubmitButton"),
          initialOpen: tabGeneralIsPanelOpen === "SubmitButton",
          opened: tabGeneralIsPanelOpen === "SubmitButton" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_submit_button: data
            });
          },
          panelData: general_submit_button
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanelAction__WEBPACK_IMPORTED_MODULE_14__["default"], {
          onToggle: () => handleTogglePanel("General", "Action"),
          initialOpen: tabGeneralIsPanelOpen === "Action",
          opened: tabGeneralIsPanelOpen === "Action" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_action: data
            });
          },
          panelData: general_action
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanelGoogleRecaptcha__WEBPACK_IMPORTED_MODULE_15__["default"], {
          onToggle: () => handleTogglePanel("General", "GoogleRecaptcha"),
          initialOpen: tabGeneralIsPanelOpen === "GoogleRecaptcha",
          opened: tabGeneralIsPanelOpen === "GoogleRecaptcha" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              general_gg_recaptcha: data
            });
          },
          panelData: general_gg_recaptcha
        }));
      case "Styles":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanel_StyleLabel__WEBPACK_IMPORTED_MODULE_16__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleLabel", true),
          initialOpen: tabStylesIsPanelOpen === "_StyleLabel" || tabStylesIsPanelOpen === "first",
          opened: tabStylesIsPanelOpen === "_StyleLabel" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_label: data
            });
          },
          panelData: style_label
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_17__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleInput"),
          initialOpen: tabStylesIsPanelOpen === "_StyleInput",
          opened: tabStylesIsPanelOpen === "_StyleInput" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_input: data
            });
          },
          panelData: style_input
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleCheckBoxRadio"),
          initialOpen: tabStylesIsPanelOpen === "_StyleCheckBoxRadio",
          opened: tabStylesIsPanelOpen === "_StyleCheckBoxRadio" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_checkbox_radio_toggle: data
            });
          },
          panelData: style_checkbox_radio_toggle
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbPostGridPanel_StyleSubmitButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleSubmitButton"),
          initialOpen: tabStylesIsPanelOpen === "_StyleSubmitButton",
          opened: tabStylesIsPanelOpen === "_StyleSubmitButton" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_submit_button: data
            });
          },
          panelData: style_submit_button
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbPostGridPanel_StyleMessages__WEBPACK_IMPORTED_MODULE_20__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleMessages"),
          initialOpen: tabStylesIsPanelOpen === "_StyleMessages",
          opened: tabStylesIsPanelOpen === "_StyleMessages" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_messages: data
            });
          },
          panelData: style_messages
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_WcbFormPanel_StyleSpacing__WEBPACK_IMPORTED_MODULE_21__["default"], {
          onToggle: () => handleTogglePanel("Styles", "_StyleSpacing"),
          initialOpen: tabStylesIsPanelOpen === "_StyleSpacing",
          opened: tabStylesIsPanelOpen === "_StyleSpacing" || undefined
          //
          ,
          setAttr__: data => {
            setAttributes({
              style_spacing: data
            });
          },
          panelData: style_spacing
        }));
      case "Advances":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_AdvancePanelCommon__WEBPACK_IMPORTED_MODULE_9__["default"], {
          advance_motionEffect: attributes.advance_motionEffect,
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
  const {} = attributes;
  const ALLOWED_BLOCKS = ["boostify-blocks/input", "boostify-blocks/email", "boostify-blocks/phone", "boostify-blocks/textarea", "boostify-blocks/toggle", "boostify-blocks/checkbox", "boostify-blocks/radio", "boostify-blocks/password", "boostify-blocks/select", "boostify-blocks/url", "boostify-blocks/hidden", "boostify-blocks/date", "boostify-blocks/accept"];
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `wcb-form__inner`
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useInnerBlocksProps)(blockProps, {
    allowedBlocks: ALLOWED_BLOCKS,
    renderAppender: () => false
  });
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_MyCacheProvider__WEBPACK_IMPORTED_MODULE_23__["default"], {
    uniqueKey: clientId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    ...wrapBlockProps,
    className: `wcb-form__wrap ${uniqueId} ${wrapBlockProps.className} `,
    "data-uniqueid": uniqueId
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GlobalCss__WEBPACK_IMPORTED_MODULE_6__["default"], {
    ...attributes
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...innerBlocksProps,
    name: (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.useInstanceId)(Edit)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__btn-submit-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "wcb-form__btn-submit",
    tagName: "div" // The tag here is the element output and editable in the admin
    ,
    value: attributes.btnSubmitText // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: ["core/bold", "core/italic"] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: content => setAttributes({
      btnSubmitText: content
    }) // Store updated content as a block attribute
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Submit", "boostify-blocks") // Display this text before any content has been added by the user
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full flex-1 flex-shrink-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__successMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.successMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_22__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("(Success message: Only show on the frontend when the form submit is successful.)", "boostify-blocks"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__errorMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.errorMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_22__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("(Error message: Only show on the frontend when the form submit is error.)", "boostify-blocks"))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_HOCInspectorControls__WEBPACK_IMPORTED_MODULE_5__["default"], {
    uniqueId: uniqueId,
    renderTabPanels: renderTabBodyPanels
  }));
};
const Placeholder = ({
  attributes,
  setAttributes,
  name,
  clientId
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
  const {
    blockType,
    defaultVariation,
    variations
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_11__.useSelect)(select => {
    const {
      getBlockVariations,
      getBlockType,
      getDefaultBlockVariation
    } = select(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_12__.store);
    return {
      blockType: getBlockType(name),
      defaultVariation: getDefaultBlockVariation(name, "block"),
      variations: getBlockVariations(name, "block")
    };
  }, [name]);
  const {
    replaceInnerBlocks
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_11__.useDispatch)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalBlockVariationPicker, {
    icon: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(blockType, ["icon", "src"]),
    label: (0,lodash__WEBPACK_IMPORTED_MODULE_3__.get)(blockType, ["title"]),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select a variation to start with."),
    onSelect: (nextVariation = defaultVariation) => {
      if (typeof nextVariation.attributes === "object") {
        setAttributes({
          ...attributes,
          ...nextVariation.attributes
        });
      }
      if (nextVariation.innerBlocks) {
        replaceInnerBlocks(clientId, (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_12__.createBlocksFromInnerBlocksTemplate)(nextVariation.innerBlocks), true);
      }
    },
    variations: variations,
    allowSkip: true
  }));
};
const FormEdit = props => {
  const {
    clientId
  } = props;
  const hasInnerBlocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_11__.useSelect)(select => select(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.store).getBlocks(clientId).length > 0, [clientId]);
  const Component = hasInnerBlocks ? Edit : Placeholder;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ...props
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormEdit);

/***/ }),

/***/ "./src/block-form/GlobalCss.tsx":
/*!**************************************!*\
  !*** ./src/block-form/GlobalCss.tsx ***!
  \**************************************/
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
/* harmony import */ var _utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getTypographyStyles */ "./src/utils/getTypographyStyles.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getCssProperyHasResponsive */ "./src/utils/getCssProperyHasResponsive.ts");









const GlobalCss = attrs => {
  const {
    uniqueId,
    // ATTRS OF BLOCK
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    //
    advance_responsiveCondition,
    advance_zIndex,
    advance_motionEffect
  } = attrs;
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_5__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  const WRAP_CLASSNAME = `.${uniqueId}[data-uniqueid=${uniqueId}]`;
  const BOX_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__box`;
  const INNER_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__inner`;
  const INPUT_CLASSNAME = `${WRAP_CLASSNAME} [type="text"], ${WRAP_CLASSNAME} [type="email"], ${WRAP_CLASSNAME} [type="url"], ${WRAP_CLASSNAME} [type="password"], ${WRAP_CLASSNAME} [type="number"], ${WRAP_CLASSNAME} [type="date"], ${WRAP_CLASSNAME} [type="datetime-local"], ${WRAP_CLASSNAME} [type="month"], ${WRAP_CLASSNAME} [type="search"], ${WRAP_CLASSNAME} [type="tel"], ${WRAP_CLASSNAME} [type="time"], ${WRAP_CLASSNAME} [type="week"], ${WRAP_CLASSNAME} [multiple], ${WRAP_CLASSNAME} select, ${WRAP_CLASSNAME} textarea`;
  const CHECKBOX_RADIO_CLASSNAME = `${WRAP_CLASSNAME} .wcb-radio__option, ${WRAP_CLASSNAME} .wcb-checkbox__option`;
  const CHECKBOX_RADIO_INPUT_CLASSNAME = `${WRAP_CLASSNAME} input[type="checkbox"], ${WRAP_CLASSNAME} input[type="radio"]`;
  const TOGGLE_CLASSNAME = `${WRAP_CLASSNAME} .wcb-toggle__switch`;
  const SUBMIT_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__btn-submit`;
  const SUCCESS_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__successMessageText`;
  const ERROR_MESS_CLASSNAME = `${WRAP_CLASSNAME} .wcb-form__errorMessageText`;

  // ------------------- WRAP DIV
  const getDivWrapStyles = () => {
    const {
      textAlignment
    } = general_general;
    const {
      position,
      textAlignment: btnAlignment
    } = general_submit_button;
    const {
      value_desktop: textAlignment_desktop,
      value_tablet: textAlignment_tablet,
      value_mobile: textAlignment_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: textAlignment
    });
    const {
      value_desktop: btnAlignment_desktop,
      value_tablet: btnAlignment_tablet,
      value_mobile: btnAlignment_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: btnAlignment
    });
    const boxflexDirectionType = position => {
      if (position === "right") return "row";
      if (position === "left") return "row-reverse";
      if (position === "top") return "column-reverse";
      return "column";
    };
    const {
      value_desktop: position_desktop,
      value_tablet: position_tablet,
      value_mobile: position_mobile
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: position
    });
    const isFlexRow = position => {
      if (position === "right" || position === "left") return true;
      return false;
    };
    return {
      [`${WRAP_CLASSNAME}`]: {
        textAlign: textAlignment_mobile,
        ".wcb-form__btn-submit-wrap": !isFlexRow(position_mobile) ? {
          justifyContent: btnAlignment_mobile
        } : {
          alignItems: btnAlignment_mobile
        },
        [`@media (min-width: ${media_tablet})`]: {
          textAlign: textAlignment_tablet,
          ".wcb-form__btn-submit-wrap": !isFlexRow(position_tablet) ? {
            justifyContent: btnAlignment_tablet
          } : {
            alignItems: btnAlignment_tablet
          }
        },
        [`@media (min-width: ${media_desktop})`]: {
          textAlign: textAlignment_desktop,
          ".wcb-form__btn-submit-wrap": !isFlexRow(position_desktop) ? {
            justifyContent: btnAlignment_desktop
          } : {
            alignItems: btnAlignment_desktop
          }
        }
      },
      [`${BOX_CLASSNAME}`]: {
        flexDirection: boxflexDirectionType(position_mobile),
        [`@media (min-width: ${media_tablet})`]: {
          flexDirection: boxflexDirectionType(position_tablet)
        },
        [`@media (min-width: ${media_desktop})`]: {
          flexDirection: boxflexDirectionType(position_desktop)
        }
      }
    };
  };
  const renderCheckboxRadioSize = () => {
    const {
      value_desktop: size_desktop,
      value_mobile: size_mobile,
      value_tablet: size_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_checkbox_radio_toggle.checkboxRadioSize
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${CHECKBOX_RADIO_INPUT_CLASSNAME} `]: {
          width: size_mobile,
          height: size_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            width: size_tablet,
            height: size_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            width: size_desktop,
            height: size_desktop
          }
        }
      }
    });
  };
  const renderToggleSize = () => {
    const {
      value_desktop: size_desktop,
      value_mobile: size_mobile,
      value_tablet: size_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_checkbox_radio_toggle.toggleSize
    });
    const mobileSize = size_mobile + "rem";
    const tabletSize = size_tablet + "rem";
    const desktopSize = size_desktop + "rem";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${TOGGLE_CLASSNAME}`]: {
          ".wcb-toggle__slider::before": {
            width: mobileSize,
            height: mobileSize
          },
          "input:checked + .wcb-toggle__slider:before": {
            transform: `translateX(${mobileSize})`
          },
          height: `calc(${mobileSize} + 8px)`,
          width: `calc((${mobileSize} * 2) + 8px)`,
          [`@media (min-width: ${media_tablet})`]: {
            ".wcb-toggle__slider::before": {
              width: tabletSize,
              height: tabletSize
            },
            "input:checked + .wcb-toggle__slider:before": {
              transform: `translateX(${tabletSize})`
            },
            height: `calc(${tabletSize} + 8px)`,
            width: `calc((${tabletSize} * 2) + 8px)`
          },
          [`@media (min-width: ${media_desktop})`]: {
            ".wcb-toggle__slider::before": {
              width: desktopSize,
              height: desktopSize
            },
            "input:checked + .wcb-toggle__slider:before": {
              transform: `translateX(${desktopSize})`
            },
            height: `calc(${desktopSize} + 8px)`,
            width: `calc((${desktopSize} * 2) + 8px)`
          }
        }
      }
    });
  };
  const renderDivInnerSpacingGap = () => {
    const {
      value_mobile: rowGap_mobile,
      value_desktop: rowGap_desktop,
      value_tablet: rowGap_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_spacing.rowGap
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${INNER_CLASSNAME}, ${BOX_CLASSNAME}`]: {
          rowGap: rowGap_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            rowGap: rowGap_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            rowGap: rowGap_desktop
          }
        }
      }
    });
  };
  const renderLabelMarginBottom = () => {
    const {
      value_mobile: bottomMargin_mobile,
      value_desktop: bottomMargin_desktop,
      value_tablet: bottomMargin_tablet
    } = (0,_utils_getCssProperyHasResponsive__WEBPACK_IMPORTED_MODULE_6__["default"])({
      cssProperty: style_spacing.labelBottomMargin
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
      styles: {
        [`${WRAP_CLASSNAME} .wcb-form__label`]: {
          marginBottom: bottomMargin_mobile,
          [`@media (min-width: ${media_tablet})`]: {
            marginBottom: bottomMargin_tablet
          },
          [`@media (min-width: ${media_desktop})`]: {
            marginBottom: bottomMargin_desktop
          }
        }
      }
    });
  };
  if (!uniqueId) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: getDivWrapStyles()
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${WRAP_CLASSNAME}`,
      border: style_spacing.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME}`,
      padding: style_spacing.padding,
      margin: style_spacing.margin
    })
  }), renderDivInnerSpacingGap(), renderLabelMarginBottom(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-form__label`,
      typography: style_label.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${WRAP_CLASSNAME} .wcb-form__label`]: {
        color: style_label.textColor,
        display: general_general.isShowLabel ? "block" : "none",
        ":hover": {
          color: style_label.textColorHover
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: INPUT_CLASSNAME,
      typography: style_input.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${INPUT_CLASSNAME}`,
      border: style_input.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${INPUT_CLASSNAME}`,
      padding: style_input.padding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [INPUT_CLASSNAME]: {
        color: style_input.textColor,
        backgroundColor: style_input.bgAndPlaceholder.Normal.backgroundColor,
        "::placeholder": {
          color: style_input.bgAndPlaceholder.Normal.placeholderColor
        },
        ":hover": {
          backgroundColor: style_input.bgAndPlaceholder.Hover.backgroundColor,
          "::placeholder": {
            color: style_input.bgAndPlaceholder.Hover.placeholderColor
          }
        },
        ":active, :focus": {
          backgroundColor: style_input.bgAndPlaceholder.Active.backgroundColor,
          "::placeholder": {
            color: style_input.bgAndPlaceholder.Active.placeholderColor
          }
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${CHECKBOX_RADIO_INPUT_CLASSNAME}, ${TOGGLE_CLASSNAME} .wcb-toggle__slider, ${TOGGLE_CLASSNAME} .wcb-toggle__slider::before`,
      border: style_checkbox_radio_toggle.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [CHECKBOX_RADIO_INPUT_CLASSNAME]: {
        backgroundColor: style_checkbox_radio_toggle.colors.Normal.backgroundColor,
        ":checked": {
          backgroundColor: style_checkbox_radio_toggle.colors.Active.backgroundColor
        }
      },
      [`${TOGGLE_CLASSNAME}`]: {
        ".wcb-toggle__slider": {
          backgroundColor: style_checkbox_radio_toggle.colors.Normal.backgroundColor
        },
        "input:checked + .wcb-toggle__slider": {
          backgroundColor: style_checkbox_radio_toggle.colors.Active.backgroundColor
        }
      }
    }
  }), renderCheckboxRadioSize(), renderToggleSize(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${SUBMIT_CLASSNAME}`,
      border: style_submit_button.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: SUBMIT_CLASSNAME,
      typography: style_submit_button.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [SUBMIT_CLASSNAME]: {
        color: style_submit_button.colorAndBackgroundColor?.Normal?.color,
        backgroundColor: style_submit_button.colorAndBackgroundColor?.Normal?.backgroundColor,
        ":hover": {
          color: style_submit_button.colorAndBackgroundColor?.Hover?.color,
          backgroundColor: style_submit_button.colorAndBackgroundColor?.Hover?.backgroundColor
        }
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${SUBMIT_CLASSNAME}`,
      padding: style_submit_button.padding,
      margin: style_submit_button.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
      typography: style_messages.typography
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}`,
      border: style_messages.Success.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${SUCCESS_MESS_CLASSNAME}, ${ERROR_MESS_CLASSNAME}`,
      margin: style_messages.margin
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${SUCCESS_MESS_CLASSNAME}`]: {
        color: style_messages.Success.color,
        backgroundColor: style_messages.Success.backgroundColor
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_utils_getBorderStyles__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: `${ERROR_MESS_CLASSNAME}`,
      border: style_messages.Error.border,
      isWithRadius: true
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: {
      [`${ERROR_MESS_CLASSNAME}`]: {
        color: style_messages.Error.color,
        backgroundColor: style_messages.Error.backgroundColor
      }
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: (0,_block_container_getAdvanveStyles__WEBPACK_IMPORTED_MODULE_1__.getAdvanveDivWrapStyles)({
      advance_motionEffect,
      advance_responsiveCondition,
      advance_zIndex,
      className: WRAP_CLASSNAME,
      defaultDisplay: "flex"
    })
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0___default().memo(GlobalCss));

/***/ }),

/***/ "./src/block-form/Save.tsx":
/*!*********************************!*\
  !*** ./src/block-form/Save.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/block-form/style.scss");





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  };
  //

  const reCaptchaV2 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v2";
  const reCaptchaV3 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v3";

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__wrap"
  });
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__inner"
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__box"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    children: innerBlocksProps.children,
    className: "wcb-form__inner"
  }), reCaptchaV2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "g-recaptcha"
    // data-sitekey will be added dynamically via jQuery in Frontend.tsx.
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__btn-submit-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: `wcb-form__btn-submit ${reCaptchaV3 ? "g-recaptcha" : ""}`,
    value: attributes.btnSubmitText,
    tagName: "button",
    type: "submit"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__successMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.successMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__errorMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.errorMessageText)));
}

/***/ }),

/***/ "./src/block-form/Save__250523.tsx":
/*!*****************************************!*\
  !*** ./src/block-form/Save__250523.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/block-form/style.scss");





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button
  };
  //

  const reCaptchaV2 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v2";
  const reCaptchaV3 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v3";

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__wrap"
  });
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__inner"
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    children: innerBlocksProps.children,
    className: "wcb-form__inner"
  }), reCaptchaV2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "g-recaptcha"
    // data-sitekey will be added dynamically via jQuery in Frontend.tsx.
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__btn-submit-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: `wcb-form__btn-submit ${reCaptchaV3 ? "g-recaptcha" : ""}`,
    value: attributes.btnSubmitText,
    tagName: "button",
    type: "submit"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__successMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.successMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__errorMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.errorMessageText)));
}

/***/ }),

/***/ "./src/block-form/Save__290723.tsx":
/*!*****************************************!*\
  !*** ./src/block-form/Save__290723.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/block-form/style.scss");





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  };
  //

  const reCaptchaV2 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v2";
  const reCaptchaV3 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v3";

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__wrap"
  });
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__inner"
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    children: innerBlocksProps.children,
    className: "wcb-form__inner"
  }), reCaptchaV2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "g-recaptcha"
    // data-sitekey will be added dynamically via jQuery in Frontend.tsx.
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__btn-submit-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: `wcb-form__btn-submit ${reCaptchaV3 ? "g-recaptcha" : ""}`,
    value: attributes.btnSubmitText,
    tagName: "button",
    type: "submit"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__successMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.successMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__errorMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.errorMessageText)));
}

/***/ }),

/***/ "./src/block-form/Save__300523.tsx":
/*!*****************************************!*\
  !*** ./src/block-form/Save__300523.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SaveCommon */ "./src/components/SaveCommon.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/block-form/style.scss");





function save({
  attributes
}) {
  const {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  } = attributes;
  //

  const newAttrForSave = {
    uniqueId,
    advance_responsiveCondition,
    advance_zIndex,
    general_action,
    general_general,
    general_gg_recaptcha,
    general_submit_button,
    style_checkbox_radio_toggle,
    style_input,
    style_label,
    style_messages,
    style_spacing,
    style_submit_button,
    advance_motionEffect
  };
  //

  const reCaptchaV2 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v2";
  const reCaptchaV3 = general_gg_recaptcha.enableReCaptcha && general_gg_recaptcha.version === "v3";

  //
  const wrapBlockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__wrap"
  });
  //
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: "wcb-form__inner"
  });
  const innerBlocksProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useInnerBlocksProps.save(blockProps);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SaveCommon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...wrapBlockProps,
    attributes: newAttrForSave,
    uniqueId: uniqueId,
    HtmlTag: "form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    children: innerBlocksProps.children,
    className: "wcb-form__inner"
  }), reCaptchaV2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "g-recaptcha"
    // data-sitekey will be added dynamically via jQuery in Frontend.tsx.
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__btn-submit-wrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    className: `wcb-form__btn-submit ${reCaptchaV3 ? "g-recaptcha" : ""}`,
    value: attributes.btnSubmitText,
    tagName: "button",
    type: "submit"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__successMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.successMessageText)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-form__errorMessageText"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, attributes.general_general.errorMessageText)));
}

/***/ }),

/***/ "./src/block-form/WcbFormPanelAction.tsx":
/*!***********************************************!*\
  !*** ./src/block-form/WcbFormPanelAction.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_ACTION_DEMO: () => (/* binding */ WCB_FORM_PANEL_ACTION_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);




const WCB_FORM_PANEL_ACTION_DEMO = {
  main: {
    To: {
      email: ""
    },
    BCC: {
      email: ""
    },
    CC: {
      email: ""
    }
  },
  subject: "Wootify subject"
};
const WcbFormPanelAction = ({
  panelData = WCB_FORM_PANEL_ACTION_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    subject,
    main
  } = panelData;
  const PanelTab = [{
    name: "To",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("To", "boostify-blocks")
  }, {
    name: "CC",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("CC", "boostify-blocks")
  }, {
    name: "BCC",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("BCC", "boostify-blocks")
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Action", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "warning",
    className: "m-0",
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Note: ", "boostify-blocks")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(" It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.", "boostify-blocks")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel `,
    activeClass: "active-tab",
    initialTabName: "To",
    tabs: PanelTab
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Email", "boostify-blocks"),
    type: "email",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("email@example.com", "boostify-blocks"),
    value: main[tab.name].email,
    onChange: nextValue => {
      setAttr__({
        ...panelData,
        main: {
          ...main,
          [tab.name]: {
            ...main[tab.name],
            email: nextValue
          }
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("SUBJECT", "boostify-blocks"),
    value: subject,
    onChange: nextValue => {
      setAttr__({
        ...panelData,
        subject: nextValue
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanelAction);

/***/ }),

/***/ "./src/block-form/WcbFormPanelGeneral.tsx":
/*!************************************************!*\
  !*** ./src/block-form/WcbFormPanelGeneral.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_GENERAL_DEMO: () => (/* binding */ WCB_FORM_PANEL_GENERAL_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyTextAlignControl/MyTextAlignControl */ "./src/components/controls/MyTextAlignControl/MyTextAlignControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");








const WCB_FORM_PANEL_GENERAL_DEMO = {
  textAlignment: {
    Desktop: "left"
  },
  isShowLabel: true,
  formStyle: "simple",
  confirmationType: "message",
  successMessageText: "The form has been submitted successfully!",
  errorMessageText: "There has been some error while submitting the form. Please verify all form fields again.",
  successRedirectUrl: "#"
};
const WcbFormPanelGeneral = ({
  panelData = WCB_FORM_PANEL_GENERAL_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_5__["default"])() || "Desktop";
  const {
    textAlignment,
    isShowLabel,
    formStyle,
    confirmationType,
    errorMessageText,
    successMessageText,
    successRedirectUrl
  } = panelData;
  const {
    currentDeviceValue: TEXT_ALIGNMENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_6__["default"])(textAlignment, deviceType);

  //
  const form_style_plans = [{
    name: "simple",
    icon: "Simple"
  }, {
    name: "underline",
    icon: "Underline"
  }, {
    name: "solid",
    icon: "Solid"
  }];
  const confirmationType_plans = [{
    name: "message",
    icon: "Message"
  }, {
    name: "url-text",
    icon: "Url text"
  }];
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("General", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: isShowLabel,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Display label", "boostify-blocks"),
    onChange: e => {
      setAttr__({
        ...panelData,
        isShowLabel: e
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Style",
    value: formStyle,
    plans: form_style_plans,
    onChange: value => {
      setAttr__({
        ...panelData,
        formStyle: value
      });
    },
    hasResponsive: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTextAlignControl_MyTextAlignControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    textAlignment: TEXT_ALIGNMENT,
    onChange: value => {
      setAttr__({
        ...panelData,
        textAlignment: {
          ...textAlignment,
          [deviceType]: value
        }
      });
    },
    hasResponsive: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Confirmation Type",
    value: confirmationType,
    plans: confirmationType_plans,
    onChange: value => {
      setAttr__({
        ...panelData,
        confirmationType: value
      });
    },
    hasResponsive: false
  }), confirmationType === "message" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("SUCCESS MESSAGE TEXT", "boostify-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter a message you want to display after successfull form submission", "boostify-blocks"),
    value: successMessageText,
    onChange: value => {
      setAttr__({
        ...panelData,
        successMessageText: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("ERROR MESSAGE TEXT", "boostify-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enter a message you want to display after unsuccessfull form submission", "boostify-blocks"),
    value: errorMessageText,
    onChange: value => {
      setAttr__({
        ...panelData,
        errorMessageText: value
      });
    }
  })), confirmationType === "url-text" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("SUCCESS REDIRECT URL", "boostify-blocks"),
    value: successRedirectUrl,
    onChange: value => {
      setAttr__({
        ...panelData,
        successRedirectUrl: value
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanelGeneral);

/***/ }),

/***/ "./src/block-form/WcbFormPanelGoogleRecaptcha.tsx":
/*!********************************************************!*\
  !*** ./src/block-form/WcbFormPanelGoogleRecaptcha.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO: () => (/* binding */ WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");






const WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO = {
  enableReCaptcha: false,
  version: "v2"
};
const WcbFormPanelGoogleRecaptcha = ({
  panelData = WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_4__["default"])() || "Desktop";
  const {
    enableReCaptcha,
    version
  } = panelData;
  const reCaptcha_plans = [{
    name: "v2",
    icon: "V2"
  }, {
    name: "v3",
    icon: "V3"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Google reCAPTCHA", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    checked: enableReCaptcha,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Enable reCAPTCHA", "boostify-blocks"),
    onChange: e => {
      setAttr__({
        ...panelData,
        enableReCaptcha: e
      });
    }
  }), enableReCaptcha && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: "Select Version",
    value: version,
    plans: reCaptcha_plans,
    onChange: value => {
      setAttr__({
        ...panelData,
        version: value
      });
    },
    hasResponsive: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Notice, {
    status: "warning",
    className: "m-0",
    isDismissible: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("P.S. ", "boostify-blocks")), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(" Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page.", "boostify-blocks")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanelGoogleRecaptcha);

/***/ }),

/***/ "./src/block-form/WcbFormPanelSubmitButton.tsx":
/*!*****************************************************!*\
  !*** ./src/block-form/WcbFormPanelSubmitButton.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO: () => (/* binding */ WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");







const WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO = {
  textAlignment: {
    Desktop: "start"
  },
  position: {
    Desktop: "bottom"
  }
};
const WcbFormPanelSubmitButton = ({
  panelData = WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_3__["default"])() || "Desktop";
  const {
    textAlignment: textAlignmentProp,
    position: positionProp = {
      Desktop: "bottom"
    }
  } = panelData;
  const {
    currentDeviceValue: position
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(positionProp, deviceType);
  const {
    currentDeviceValue: textAlignment
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(textAlignmentProp, deviceType);
  const alignment_plan = [{
    name: "start",
    icon: "Start"
  }, {
    name: "center",
    icon: "Center"
  }, {
    name: "end",
    icon: "End"
  }];
  const position_plan = [{
    name: "bottom",
    icon: "Bottom"
  }, {
    name: "top",
    icon: "Top"
  }, {
    name: "left",
    icon: "Left"
  }, {
    name: "right",
    icon: "Right"
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Submit button", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "Position",
    value: position,
    plans: position_plan,
    onChange: value => {
      setAttr__({
        ...panelData,
        position: {
          ...(positionProp || {}),
          [deviceType]: value
        }
      });
    },
    hasResponsive: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: "ALIGNMENT",
    value: textAlignment,
    plans: alignment_plan,
    onChange: value => {
      setAttr__({
        ...panelData,
        textAlignment: {
          ...textAlignmentProp,
          [deviceType]: value
        }
      });
    },
    hasResponsive: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanelSubmitButton);

/***/ }),

/***/ "./src/block-form/WcbFormPanel_StyleCheckBoxRadio.tsx":
/*!************************************************************!*\
  !*** ./src/block-form/WcbFormPanel_StyleCheckBoxRadio.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO),
/* harmony export */   WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE: () => (/* binding */ WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE),
/* harmony export */   WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SOLID: () => (/* binding */ WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SOLID),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/HelpText */ "./src/components/controls/HelpText.tsx");
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");












const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE = {
  colors: {
    Normal: {
      backgroundColor: ""
    },
    Active: {
      backgroundColor: "#0284c7"
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      color: "#d1d5db",
      style: "solid",
      width: "1px"
    },
    radius: {
      Desktop: {
        bottomLeft: "0.25rem",
        bottomRight: "0.25rem",
        topLeft: "0.25rem",
        topRight: "0.25rem"
      }
    }
  },
  checkboxRadioSize: {
    Desktop: "1rem"
  },
  toggleSize: {
    Desktop: 1
  }
};
const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SOLID = {
  colors: {
    Normal: {
      backgroundColor: "#e5e7eb"
    },
    Active: {
      backgroundColor: "#374151"
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      color: "",
      style: "solid",
      width: "0px"
    },
    radius: {
      Desktop: {
        bottomLeft: "0.25rem",
        bottomRight: "0.25rem",
        topLeft: "0.25rem",
        topRight: "0.25rem"
      }
    }
  },
  checkboxRadioSize: {
    Desktop: "1rem"
  },
  toggleSize: {
    Desktop: 1
  }
};
const WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO = WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO__SIMPLE;
const WcbFormPanel_StyleCheckBoxRadio = ({
  panelData = WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    border,
    checkboxRadioSize,
    colors,
    toggleSize
  } = panelData;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_9__["default"])() || "Desktop";
  const {
    currentDeviceValue: checkboxRadioSizeCurrent
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(checkboxRadioSize, deviceType);
  const {
    currentDeviceValue: toggleSizeCurrent
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_10__["default"])(toggleSize, deviceType);
  const PanelTab = [{
    name: "Normal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "boostify-blocks")
  }, {
    name: "Active",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Active", "boostify-blocks")
  }];
  const initialTabName = "Normal";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Checkbox/Toogle/Radio", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Sizes",
    defaultOpen: true,
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: checkboxRadioSizeCurrent || "1rem",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Checkbox/Radio size", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        checkboxRadioSize: {
          ...checkboxRadioSize,
          [deviceType]: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Toggle size", "boostify-blocks"),
    value: toggleSizeCurrent || 1,
    step: 0.1,
    onChange: value => setAttr__({
      ...panelData,
      toggleSize: {
        ...toggleSize,
        [deviceType]: value
      }
    }),
    min: 1,
    max: 10
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Colors"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel `,
    activeClass: "active-tab",
    initialTabName: initialTabName,
    tabs: PanelTab
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "boostify-blocks"),
    color: colors[tab.name].backgroundColor,
    onChange: value => {
      setAttr__({
        ...panelData,
        colors: {
          ...colors,
          [tab.name]: {
            ...colors[tab.name],
            backgroundColor: value
          }
        }
      });
    }
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: "Border",
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    borderControl: border,
    setAttrs__border: data => setAttr__({
      ...panelData,
      border: data
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_HelpText__WEBPACK_IMPORTED_MODULE_3__["default"], null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Border radius will be applied to Radio & Toggle only when the layout for those blocks is set to Square.", "boostify-blocks")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanel_StyleCheckBoxRadio);

/***/ }),

/***/ "./src/block-form/WcbFormPanel_StyleInput.tsx":
/*!****************************************************!*\
  !*** ./src/block-form/WcbFormPanel_StyleInput.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_INPUT_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_INPUT_DEMO),
/* harmony export */   WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE: () => (/* binding */ WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE),
/* harmony export */   WCB_FORM_PANEL_STYLE_INPUT_DEMO__SOLID: () => (/* binding */ WCB_FORM_PANEL_STYLE_INPUT_DEMO__SOLID),
/* harmony export */   WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE: () => (/* binding */ WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");













const WCB_FORM_PANEL_STYLE_INPUT_DEMO__SIMPLE = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "",
  bgAndPlaceholder: {
    Active: {
      backgroundColor: "#fff",
      placeholderColor: ""
    },
    Hover: {
      backgroundColor: "#fff",
      placeholderColor: ""
    },
    Normal: {
      backgroundColor: "#fff",
      placeholderColor: ""
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      color: "#d1d5db",
      style: "solid",
      width: "1px"
    }
  },
  padding: {
    Desktop: {
      top: "0.5rem",
      left: "0.75rem",
      right: "0.75rem",
      bottom: "0.5rem"
    }
  }
};
const WCB_FORM_PANEL_STYLE_INPUT_DEMO__SOLID = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "",
  bgAndPlaceholder: {
    Normal: {
      backgroundColor: "#f9fafb",
      placeholderColor: ""
    },
    Hover: {
      backgroundColor: "#f9fafb",
      placeholderColor: ""
    },
    Active: {
      backgroundColor: "#fff",
      placeholderColor: ""
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      color: "#f9fafb",
      style: "solid",
      width: "1px"
    }
  },
  padding: {
    Desktop: {
      top: "0.5rem",
      left: "0.75rem",
      right: "0.75rem",
      bottom: "0.5rem"
    }
  }
};
const WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_9__.TYPOGRAPHY_CONTROL_DEMO,
  textColor: "",
  bgAndPlaceholder: {
    Normal: {
      backgroundColor: "#fff",
      placeholderColor: ""
    },
    Hover: {
      backgroundColor: "#fff",
      placeholderColor: ""
    },
    Active: {
      backgroundColor: "#fff",
      placeholderColor: ""
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
    radius: {
      Desktop: {
        bottomLeft: "0",
        bottomRight: "0",
        topLeft: "0",
        topRight: "0"
      }
    },
    mainSettings: {
      bottom: {
        color: "#e5e7eb",
        style: "solid",
        width: "2px"
      },
      left: {
        color: "",
        style: "solid",
        width: "0"
      },
      right: {
        color: "",
        style: "solid",
        width: "0"
      },
      top: {
        color: "",
        style: "solid",
        width: "0"
      }
    }
  },
  padding: {
    Desktop: {
      top: "0.5rem",
      left: "0rem",
      right: "0rem",
      bottom: "0.5rem"
    }
  }
};
const WCB_FORM_PANEL_STYLE_INPUT_DEMO = WCB_FORM_PANEL_STYLE_INPUT_DEMO__UNDERLINE;
const WcbFormPanel_StyleInput = ({
  panelData = WCB_FORM_PANEL_STYLE_INPUT_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    textColor,
    typography,
    bgAndPlaceholder,
    border,
    padding: paddingProps
  } = panelData;
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__["default"])() || "Desktop";
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_11__["default"])(paddingProps, deviceType);
  const PanelTab = [{
    name: "Normal",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "boostify-blocks")
  }, {
    name: "Hover",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover", "boostify-blocks")
  }, {
    name: "Active",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Active", "boostify-blocks")
  }];
  const initialTabName = "Normal";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Input", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel `,
    activeClass: "active-tab",
    initialTabName: initialTabName,
    tabs: PanelTab
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Placeholder color", "boostify-blocks"),
    color: bgAndPlaceholder[tab.name].placeholderColor,
    onChange: value => {
      setAttr__({
        ...panelData,
        bgAndPlaceholder: {
          ...bgAndPlaceholder,
          [tab.name]: {
            ...(bgAndPlaceholder[tab.name] || []),
            placeholderColor: value
          }
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color", "boostify-blocks"),
    color: bgAndPlaceholder[tab.name].backgroundColor,
    onChange: value => {
      setAttr__({
        ...panelData,
        bgAndPlaceholder: {
          ...bgAndPlaceholder,
          [tab.name]: {
            ...(bgAndPlaceholder[tab.name] || []),
            backgroundColor: value
          }
        }
      });
    }
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-3.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: "Color, Border & Padding",
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "boostify-blocks"),
    color: textColor,
    onChange: value => {
      setAttr__({
        ...panelData,
        textColor: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: border,
    setAttrs__border: data => setAttr__({
      ...panelData,
      border: data
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "boostify-blocks")),
    values: padding,
    onChange: value => {
      setAttr__({
        ...panelData,
        padding: {
          ...paddingProps,
          [deviceType]: value
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanel_StyleInput);

/***/ }),

/***/ "./src/block-form/WcbFormPanel_StyleLabel.tsx":
/*!****************************************************!*\
  !*** ./src/block-form/WcbFormPanel_StyleLabel.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_LABEL_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_LABEL_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");








const WCB_FORM_PANEL_STYLE_LABEL_DEMO = {
  typography: {
    ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_6__.TYPOGRAPHY_CONTROL_DEMO,
    appearance: {
      ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_6__.TYPOGRAPHY_CONTROL_DEMO.appearance,
      style: {
        ..._components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_6__.TYPOGRAPHY_CONTROL_DEMO.appearance.style,
        fontWeight: 500
      }
    }
  },
  textColor: "",
  textColorHover: ""
};
const WcbFormPanel_StyleLabel = ({
  panelData = WCB_FORM_PANEL_STYLE_LABEL_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const {
    textColor,
    textColorHover,
    typography
  } = panelData;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Label", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    typographyControl: typography,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_4__["default"], {
    defaultOpen: true,
    label: "Color"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        textColor: value
      });
    },
    color: textColor
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover Color", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        textColorHover: value
      });
    },
    color: textColorHover
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanel_StyleLabel);

/***/ }),

/***/ "./src/block-form/WcbFormPanel_StyleSpacing.tsx":
/*!******************************************************!*\
  !*** ./src/block-form/WcbFormPanel_StyleSpacing.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_SPACING_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_SPACING_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MySpacingSizesControl/MySpacingSizesControl */ "./src/components/controls/MySpacingSizesControl/MySpacingSizesControl.tsx");
/* harmony import */ var _components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyDimensionsControl/MyDimensionsNoGapControl */ "./src/components/controls/MyDimensionsControl/MyDimensionsNoGapControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");










const WCB_FORM_PANEL_STYLE_SPACING_DEMO = {
  padding: {
    Desktop: {
      top: "1.75rem",
      left: "1.75rem",
      right: "1.75rem",
      bottom: "1.75rem"
    }
  },
  margin: {
    Desktop: {
      top: "",
      left: "",
      right: "",
      bottom: ""
    }
  },
  border: {
    ..._components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
    mainSettings: {
      color: "#38bdf8",
      style: "solid",
      width: "1px"
    }
  },
  rowGap: {
    Desktop: "1.75rem"
  },
  labelBottomMargin: {
    Desktop: "0.5rem"
  }
};
const WcbFormPanel_StyleSpacing = ({
  panelData = WCB_FORM_PANEL_STYLE_SPACING_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    border,
    labelBottomMargin: labelBottomMarginProps,
    padding: paddingProps,
    rowGap: rowGapProps
  } = panelData;
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(paddingProps, deviceType);
  const {
    currentDeviceValue: rowGap
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(rowGapProps, deviceType);
  const {
    currentDeviceValue: labelBottomMargin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_8__["default"])(labelBottomMarginProps, deviceType);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Spacing", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDimensionsControl_MyDimensionsNoGapControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    dimensionControl: panelData,
    setAttrs__dimensions: data => setAttr__({
      ...panelData,
      ...data
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: border,
    setAttrs__border: data => setAttr__({
      ...panelData,
      border: data
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rowGap || "1rem",
    hasResponsive: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Row spacing", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        rowGap: {
          ...rowGapProps,
          [deviceType]: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MySpacingSizesControl_MySpacingSizesControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: labelBottomMargin || "1rem",
    hasResponsive: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Label margin bottom", "boostify-blocks"),
    onChange: value => {
      setAttr__({
        ...panelData,
        labelBottomMargin: {
          ...labelBottomMarginProps,
          [deviceType]: value
        }
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbFormPanel_StyleSpacing);

/***/ }),

/***/ "./src/block-form/WcbPostGridPanel_StyleMessages.tsx":
/*!***********************************************************!*\
  !*** ./src/block-form/WcbPostGridPanel_StyleMessages.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_MESSAGES_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_MESSAGES_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");













const WCB_FORM_PANEL_STYLE_MESSAGES_DEMO = {
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_7__.TYPOGRAPHY_CONTROL_DEMO,
  margin: undefined,
  Success: {
    color: "#0c4a6e",
    backgroundColor: "#f0f9ff",
    border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO
  },
  Error: {
    color: "#ef4444",
    backgroundColor: "#fef2f2",
    border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO
  }
};
const WcbPostGridPanel_StyleMessages = ({
  panelData = WCB_FORM_PANEL_STYLE_MESSAGES_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_10__["default"])() || "Desktop";
  const PanelTab = [{
    name: "Success",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Success", "boostify-blocks")
  }, {
    name: "Error",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Error", "boostify-blocks")
  }];
  const {
    margin: marginProps = {
      Desktop: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      }
    }
  } = panelData;
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginProps, deviceType);
  const initialTabName = "Success";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Messages", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    typographyControl: panelData.typography || _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_7__.TYPOGRAPHY_CONTROL_DEMO,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel `,
    activeClass: "active-tab",
    initialTabName: initialTabName,
    tabs: PanelTab
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text color", "boostify-blocks"),
    color: panelData[tab.name].color,
    onChange: value => {
      setAttr__({
        ...panelData,
        [tab.name]: {
          ...panelData[tab.name],
          color: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color", "boostify-blocks"),
    color: panelData[tab.name].backgroundColor,
    onChange: value => {
      setAttr__({
        ...panelData,
        [tab.name]: {
          ...panelData[tab.name],
          backgroundColor: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Border & Margin"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: panelData[tab.name].border,
    setAttrs__border: border => {
      setAttr__({
        ...panelData,
        [tab.name]: {
          border
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("margin", "boostify-blocks")),
    values: margin,
    onChange: value => {
      setAttr__({
        ...panelData,
        margin: {
          ...marginProps,
          [deviceType]: value
        }
      });
    }
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbPostGridPanel_StyleMessages);

/***/ }),

/***/ "./src/block-form/WcbPostGridPanel_StyleSubmitButton.tsx":
/*!***************************************************************!*\
  !*** ./src/block-form/WcbPostGridPanel_StyleSubmitButton.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO: () => (/* binding */ WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/controls/MyBorderControl/MyBorderControl */ "./src/components/controls/MyBorderControl/MyBorderControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");
/* harmony import */ var _components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyDisclosure */ "./src/components/controls/MyDisclosure.tsx");
/* harmony import */ var _components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/controls/MyLabelControl/MyLabelControl */ "./src/components/controls/MyLabelControl/MyLabelControl.tsx");
/* harmony import */ var _hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useGetDeviceType */ "./src/hooks/useGetDeviceType.ts");
/* harmony import */ var _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl */ "./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/types */ "./src/components/controls/MyTypographyControl/types.ts");
/* harmony import */ var _components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/controls/MyTypographyControl/MyTypographyControl */ "./src/components/controls/MyTypographyControl/MyTypographyControl.tsx");













const WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO = {
  colorAndBackgroundColor: _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_8__.MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
  padding: {
    Desktop: {
      top: "1rem",
      left: "2rem",
      right: "2rem",
      bottom: "1rem"
    }
  },
  margin: undefined,
  border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_4__.MY_BORDER_CONTROL_DEMO,
  typography: _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_10__.TYPOGRAPHY_CONTROL_DEMO
};
const WcbPostGridPanel_StyleSubmitButton = ({
  panelData = WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO,
  setAttr__,
  initialOpen,
  onToggle,
  opened
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_7__["default"])() || "Desktop";
  const {
    margin: marginProps = {
      Desktop: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0"
      }
    },
    padding: paddingProps,
    border,
    colorAndBackgroundColor,
    typography = _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_10__.TYPOGRAPHY_CONTROL_DEMO
  } = panelData;
  const {
    currentDeviceValue: padding
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(paddingProps, deviceType);
  const {
    currentDeviceValue: margin
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_9__["default"])(marginProps, deviceType);
  //

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: initialOpen,
    onToggle: onToggle,
    opened: opened,
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Submit button", "boostify-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-2.5"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    defaultOpen: true,
    label: "Colors"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_8__["default"], {
    controlData: colorAndBackgroundColor,
    setAttrs__control: data => {
      setAttr__({
        ...panelData,
        colorAndBackgroundColor: data
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyDisclosure__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: "Border & Dimensions"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyBorderControl_MyBorderControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
    borderControl: border,
    setAttrs__border: border => {
      setAttr__({
        ...panelData,
        border
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Padding", "boostify-blocks")),
    values: padding,
    onChange: value => {
      setAttr__({
        ...panelData,
        padding: {
          ...paddingProps,
          [deviceType]: value
        }
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl, {
    label: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyLabelControl_MyLabelControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: "",
      hasResponsive: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("margin", "boostify-blocks")),
    values: margin,
    onChange: value => {
      setAttr__({
        ...panelData,
        margin: {
          ...marginProps,
          [deviceType]: value
        }
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_controls_MyTypographyControl_MyTypographyControl__WEBPACK_IMPORTED_MODULE_11__["default"], {
    typographyControl: typography || _components_controls_MyTypographyControl_types__WEBPACK_IMPORTED_MODULE_10__.TYPOGRAPHY_CONTROL_DEMO,
    setAttrs__typography: typography => {
      setAttr__({
        ...panelData,
        typography
      });
    }
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WcbPostGridPanel_StyleSubmitButton);

/***/ }),

/***/ "./src/block-form/attributes.ts":
/*!**************************************!*\
  !*** ./src/block-form/attributes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/controls/MyMotionEffectControl/MyMotionEffectControl */ "./src/components/controls/MyMotionEffectControl/MyMotionEffectControl.tsx");
/* harmony import */ var _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl */ "./src/components/controls/MyResponsiveConditionControl/MyResponsiveConditionControl.tsx");
/* harmony import */ var _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/controls/MyZIndexControl/MyZIndexControl */ "./src/components/controls/MyZIndexControl/MyZIndexControl.tsx");
/* harmony import */ var _WcbFormPanelAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WcbFormPanelAction */ "./src/block-form/WcbFormPanelAction.tsx");
/* harmony import */ var _WcbFormPanelGeneral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WcbFormPanelGeneral */ "./src/block-form/WcbFormPanelGeneral.tsx");
/* harmony import */ var _WcbFormPanelGoogleRecaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WcbFormPanelGoogleRecaptcha */ "./src/block-form/WcbFormPanelGoogleRecaptcha.tsx");
/* harmony import */ var _WcbFormPanelSubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WcbFormPanelSubmitButton */ "./src/block-form/WcbFormPanelSubmitButton.tsx");
/* harmony import */ var _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WcbFormPanel_StyleCheckBoxRadio */ "./src/block-form/WcbFormPanel_StyleCheckBoxRadio.tsx");
/* harmony import */ var _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WcbFormPanel_StyleInput */ "./src/block-form/WcbFormPanel_StyleInput.tsx");
/* harmony import */ var _WcbFormPanel_StyleLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WcbFormPanel_StyleLabel */ "./src/block-form/WcbFormPanel_StyleLabel.tsx");
/* harmony import */ var _WcbFormPanel_StyleSpacing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WcbFormPanel_StyleSpacing */ "./src/block-form/WcbFormPanel_StyleSpacing.tsx");
/* harmony import */ var _WcbPostGridPanel_StyleMessages__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WcbPostGridPanel_StyleMessages */ "./src/block-form/WcbPostGridPanel_StyleMessages.tsx");
/* harmony import */ var _WcbPostGridPanel_StyleSubmitButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./WcbPostGridPanel_StyleSubmitButton */ "./src/block-form/WcbPostGridPanel_StyleSubmitButton.tsx");













const blokc1Attrs = {
  uniqueId: {
    type: "string",
    default: ""
  },
  btnSubmitText: {
    type: "string",
    source: "html",
    selector: "button.wcb-form__btn-submit",
    default: "Submit"
  },
  // THE ATTRS OF BLOCK HERE
  general_general: {
    type: "object",
    default: _WcbFormPanelGeneral__WEBPACK_IMPORTED_MODULE_4__.WCB_FORM_PANEL_GENERAL_DEMO
  },
  general_submit_button: {
    type: "object",
    default: _WcbFormPanelSubmitButton__WEBPACK_IMPORTED_MODULE_6__.WCB_FORM_PANEL_SUBMIT_BUTTON_DEMO
  },
  general_action: {
    type: "object",
    default: _WcbFormPanelAction__WEBPACK_IMPORTED_MODULE_3__.WCB_FORM_PANEL_ACTION_DEMO
  },
  general_gg_recaptcha: {
    type: "object",
    default: _WcbFormPanelGoogleRecaptcha__WEBPACK_IMPORTED_MODULE_5__.WCB_FORM_PANEL_GOOGLE_RECAPTCHA_DEMO
  },
  //
  style_label: {
    type: "object",
    default: _WcbFormPanel_StyleLabel__WEBPACK_IMPORTED_MODULE_9__.WCB_FORM_PANEL_STYLE_LABEL_DEMO
  },
  style_input: {
    type: "object",
    default: _WcbFormPanel_StyleInput__WEBPACK_IMPORTED_MODULE_8__.WCB_FORM_PANEL_STYLE_INPUT_DEMO
  },
  style_checkbox_radio_toggle: {
    type: "object",
    default: _WcbFormPanel_StyleCheckBoxRadio__WEBPACK_IMPORTED_MODULE_7__.WCB_FORM_PANEL_STYLE_CHECKBOX_RADIO_TOGGLE_DEMO
  },
  style_submit_button: {
    type: "object",
    default: _WcbPostGridPanel_StyleSubmitButton__WEBPACK_IMPORTED_MODULE_12__.WCB_FORM_PANEL_STYLE_SUBMIT_BUTTON_DEMO
  },
  style_messages: {
    type: "object",
    default: _WcbPostGridPanel_StyleMessages__WEBPACK_IMPORTED_MODULE_11__.WCB_FORM_PANEL_STYLE_MESSAGES_DEMO
  },
  style_spacing: {
    type: "object",
    default: _WcbFormPanel_StyleSpacing__WEBPACK_IMPORTED_MODULE_10__.WCB_FORM_PANEL_STYLE_SPACING_DEMO
  },
  // ADVANCE
  advance_responsiveCondition: {
    type: "object",
    default: _components_controls_MyResponsiveConditionControl_MyResponsiveConditionControl__WEBPACK_IMPORTED_MODULE_1__.RESPONSIVE_CONDITON_DEMO
  },
  advance_zIndex: {
    type: "object",
    default: _components_controls_MyZIndexControl_MyZIndexControl__WEBPACK_IMPORTED_MODULE_2__.Z_INDEX_DEMO
  },
  advance_motionEffect: {
    type: "object",
    default: _components_controls_MyMotionEffectControl_MyMotionEffectControl__WEBPACK_IMPORTED_MODULE_0__.MY_MOTION_EFFECT_DEMO
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blokc1Attrs);

/***/ }),

/***/ "./src/block-form/block.json":
/*!***********************************!*\
  !*** ./src/block-form/block.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"boostify-blocks/form","version":"0.1.0","title":"Form","category":"boostify-blocks","icon":"- wcb-block-editor-block-icon lni lni-postcard","description":"Create a contact form or marketing form and style it within the block editor.","supports":{"html":false,"anchor":true,"align":true},"textdomain":"boostify-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ }),

/***/ "./src/block-form/deprecated.tsx":
/*!***************************************!*\
  !*** ./src/block-form/deprecated.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Save_300523__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save__300523 */ "./src/block-form/Save__300523.tsx");
/* harmony import */ var _Save_250523__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Save__250523 */ "./src/block-form/Save__250523.tsx");
/* harmony import */ var _Save_290723__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Save__290723 */ "./src/block-form/Save__290723.tsx");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/block-form/attributes.ts");
/* harmony import */ var _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl */ "./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx");
/* harmony import */ var _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/controls/MyBorderControl/types */ "./src/components/controls/MyBorderControl/types.ts");






const v1 = {};
const v2 = {};
const v3 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
    style_submit_button: {
      type: "object",
      default: {
        colorAndBackgroundColor: _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_4__.MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
        padding: {
          Desktop: {
            top: "1rem",
            left: "2rem",
            right: "2rem",
            bottom: "1rem"
          }
        },
        border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
      }
    },
    style_messages: {
      type: "object",
      default: {
        Success: {
          color: "#0c4a6e",
          backgroundColor: "#f0f9ff",
          border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
        },
        Error: {
          color: "#ef4444",
          backgroundColor: "#fef2f2",
          border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
        }
      }
    }
  },
  save: _Save_250523__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const v4 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
    style_submit_button: {
      type: "object",
      default: {
        colorAndBackgroundColor: _components_controls_MyColorBackgroundColorControl_MyColorBackgroundColorControl__WEBPACK_IMPORTED_MODULE_4__.MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO,
        padding: {
          Desktop: {
            top: "1rem",
            left: "2rem",
            right: "2rem",
            bottom: "1rem"
          }
        },
        border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
      }
    },
    style_messages: {
      type: "object",
      default: {
        Success: {
          color: "#0c4a6e",
          backgroundColor: "#f0f9ff",
          border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
        },
        Error: {
          color: "#ef4444",
          backgroundColor: "#fef2f2",
          border: _components_controls_MyBorderControl_types__WEBPACK_IMPORTED_MODULE_5__.MY_BORDER_CONTROL_DEMO
        }
      }
    }
  },
  save: _Save_300523__WEBPACK_IMPORTED_MODULE_0__["default"]
};
const v5 = {
  attributes: {
    ..._attributes__WEBPACK_IMPORTED_MODULE_3__["default"],
    general_submit_button: {
      type: "object",
      default: {
        textAlignment: "left"
      }
    }
  },
  save: _Save_290723__WEBPACK_IMPORTED_MODULE_2__["default"]
};
const deprecated = [v5, v4, v4, v3, v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/block-form/editor.scss":
/*!************************************!*\
  !*** ./src/block-form/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-form/index.js":
/*!*********************************!*\
  !*** ./src/block-form/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-form/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-form/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-form/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-form/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-form/attributes.ts");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variations */ "./src/block-form/variations.tsx");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/block-form/deprecated.tsx");
/* harmony import */ var _utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/convertAttsToPreview */ "./src/utils/convertAttsToPreview.ts");

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
  variations: _variations__WEBPACK_IMPORTED_MODULE_7__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"],
  example: {
    attributes: (0,_utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_9__["default"])(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"]),
    innerBlocks: [{
      name: "boostify-blocks/input",
      attributes: {
        label: "Name"
      }
    }, {
      name: "boostify-blocks/email",
      attributes: {
        label: "Email"
      }
    }]
  },
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 13H12",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8 17H16",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-form/style.scss":
/*!***********************************!*\
  !*** ./src/block-form/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-form/variations.tsx":
/*!***************************************!*\
  !*** ./src/block-form/variations.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   variations: () => (/* binding */ variations)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



/** @typedef {import('@wordpress/blocks').WPBlockVariation} WPBlockVariation */

/**
 * Template option choices for predefined columns layouts.
 *
 * @type {WPBlockVariation[]}
 */

const RenderIcon = props => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-16 h-12 flex items-center justify-center "
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "grid grid-rows-2 grid-cols-12 w-14 h-8 p-0.5 bg-[#007cba] gap-0.5 rounded-sm"
  }, props.children));
};
const variations = [{
  name: "test-full",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Test Full Form"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Test Full Form"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 row-span-2 bg-white"
  })),
  innerBlocks: [["boostify-blocks/input", {
    label: "First Name"
  }], ["boostify-blocks/email", {
    label: "Email"
  }], ["boostify-blocks/phone", undefined], ["boostify-blocks/toggle", undefined], ["boostify-blocks/url", undefined], ["boostify-blocks/checkbox", undefined], ["boostify-blocks/radio", undefined], ["boostify-blocks/select", undefined], ["boostify-blocks/textarea", undefined], ["boostify-blocks/hidden", undefined], ["boostify-blocks/accept", undefined]],
  scope: ["block"],
  isDefault: true
}, {
  name: "SimpleContactForm",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Simple Contact Form"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Simple Contact Form"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 row-span-2 bg-white"
  })),
  innerBlocks: [["boostify-blocks/input", {
    label: "First Name"
  }], ["boostify-blocks/input", {
    label: "Last Name"
  }], ["boostify-blocks/email", {
    label: "Email"
  }], ["boostify-blocks/textarea", {
    label: "Message"
  }]],
  scope: ["block"]
}, {
  name: "NewsletterForm",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Newsletter Form"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Newsletter Form"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 row-span-2 bg-white"
  })),
  innerBlocks: [["boostify-blocks/input", {
    label: "Name"
  }], ["boostify-blocks/email", {
    label: "Email"
  }], ["boostify-blocks/radio", {
    label: "Some question with below listed option?"
  }], ["boostify-blocks/input", {
    label: "Subject"
  }], ["boostify-blocks/textarea", {
    label: "Message"
  }]],
  scope: ["block"]
}, {
  name: "SuggestionForm",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suggestion Form"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Suggestion Form"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 row-span-2 bg-white"
  })),
  innerBlocks: [["boostify-blocks/input", {
    label: "Name"
  }], ["boostify-blocks/email", {
    label: "Email"
  }]],
  scope: ["block"]
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variations);

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

/***/ "./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/components/controls/MyColorBackgroundColorControl/MyColorBackgroundColorControl.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MY_COLOR_BGCOLOR_CONTROL_DEMO: () => (/* binding */ MY_COLOR_BGCOLOR_CONTROL_DEMO),
/* harmony export */   MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO: () => (/* binding */ MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO),
/* harmony export */   PANEL_COLOR_TABS: () => (/* binding */ PANEL_COLOR_TABS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MyColorPicker/MyColorPicker */ "./src/components/controls/MyColorPicker/MyColorPicker.tsx");





const PANEL_COLOR_TABS = [{
  name: "Normal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Normal", "boostify-blocks")
}, {
  name: "Hover",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hover", "boostify-blocks")
}];
const MY_COLOR_BGCOLOR_CONTROL_DEMO = {
  Normal: {
    color: "",
    backgroundColor: ""
  },
  Hover: {
    color: "",
    backgroundColor: ""
  }
};
const MY_COLOR_BGCOLOR_CONTROL_FOR_BUTTON_DEMO = {
  Normal: {
    color: "#fff",
    backgroundColor: "#1346af"
  },
  Hover: {
    color: "#fff",
    backgroundColor: "#3a3a3a"
  }
};
const MyColorBackgroundColorControl = ({
  className = "",
  controlData = MY_COLOR_BGCOLOR_CONTROL_DEMO,
  setAttrs__control
}) => {
  const handleChangeColor = (currentTab, colorHex) => {
    setAttrs__control({
      ...controlData,
      [currentTab]: {
        ...controlData[currentTab],
        color: colorHex
      }
    });
  };
  const handleChangeBackgroundColor = (currentTab, colorHex) => {
    setAttrs__control({
      ...controlData,
      [currentTab]: {
        ...controlData[currentTab],
        backgroundColor: colorHex
      }
    });
  };
  const renderShadowColorPicker = tab => {
    const tabName = tab.name;
    const {
      color,
      backgroundColor
    } = controlData[tabName];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-3.5"
    }, typeof color !== undefined ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Color", "boostify-blocks"),
      onChange: value => handleChangeColor(tabName, value),
      color: color
    }) : null, typeof backgroundColor !== undefined ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyColorPicker_MyColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Background color", "boostify-blocks"),
      onChange: value => handleChangeBackgroundColor(tabName, value),
      color: backgroundColor
    }) : null);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TabPanel, {
    className: `wcb-bodyControls__panel ${className}`,
    activeClass: "active-tab",
    initialTabName: "Normal",
    tabs: PANEL_COLOR_TABS
  }, renderShadowColorPicker);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyColorBackgroundColorControl);

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

/***/ "./src/utils/getCssProperyHasResponsive.ts":
/*!*************************************************!*\
  !*** ./src/utils/getCssProperyHasResponsive.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");

function getCssProperyHasResponsive({
  cssProperty
}) {
  const {
    value_Desktop: value_desktop,
    value_Tablet: value_tablet,
    value_Mobile: value_mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(cssProperty);
  // const value_desktop = cssProperty.Desktop;
  // const value_tablet = cssProperty.Tablet || value_desktop;
  // const value_mobile = cssProperty.Mobile || value_tablet;
  return {
    value_desktop,
    value_tablet,
    value_mobile
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCssProperyHasResponsive);

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
	`},Fe=function(e,a){var t,l;const r=e?.Desktop,i=null!==(t=e?.Tablet)&&void 0!==t?t:r,n=null!==(l=e?.Mobile)&&void 0!==l?l:i;let o;return a&&(o="Desktop"===a?r:"Tablet"===a?i:n),{value_Desktop:null!=r?r:null,value_Tablet:null!=i?i:null,value_Mobile:null!=n?n:null,currentDeviceValue:o}},He=({border:e,className:a,isWithRadius:t=!1,isWithIframe:l=!1})=>{const{hoverColor:r,mainSettings:i,radius:n}=e;let o={[`${a}`]:{}};if(i){const e=i;if("top"in e||"right"in e||"bottom"in e||"left"in e){const{bottom:t,left:l,right:i,top:n}=e;o={[`${a}`]:{...n?{borderTop:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},...l?{borderLeft:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...i?{borderRight:`${i.width} ${i.style||"none"} ${i.color||""}`}:{},...t?{borderBottom:`${t.width} ${t.style||"none"} ${t.color||""}`}:{},"&:hover":{borderColor:`${r}`}}}}else{const{color:e,style:t,width:l}=i;o={[`${a}`]:{border:`${l} ${t||"none"} ${e||""}`,"&:hover":{borderColor:`${r||""}`}}}}}let s={[`${a}`]:{}};t&&n&&(s=(({className:e,radius:a,isWithIframe:t=!1})=>{const{media_desktop:l,media_tablet:r}=Pe;let{value_Desktop:i,value_Tablet:n,value_Mobile:o}=Fe(a);const s=e=>{let a=e;return a="string"==typeof e?{bottomLeft:e,bottomRight:e,topLeft:e,topRight:e}:{bottomLeft:e?.bottomLeft,bottomRight:e?.bottomRight,topLeft:e?.topLeft,topRight:e?.topRight},a};i=s(i),n=s(n),o=s(o);const{mobile_v:c,tablet_v:u,desktop_v:g}=Be({mobile_v:o?.topLeft,tablet_v:n?.topLeft,desktop_v:i?.topLeft}),{mobile_v:f,tablet_v:d,desktop_v:b}=Be({mobile_v:o?.topRight,tablet_v:n?.topRight,desktop_v:i?.topRight}),{mobile_v:h,tablet_v:p,desktop_v:m}=Be({mobile_v:o?.bottomRight,tablet_v:n?.bottomRight,desktop_v:i?.bottomRight}),{mobile_v:k,tablet_v:w,desktop_v:y}=Be({mobile_v:o?.bottomLeft,tablet_v:n?.bottomLeft,desktop_v:i?.bottomLeft}),v=t?"!important":"";return{[`${e}`]:{borderTopLeftRadius:`${c} ${v}`,borderTopRightRadius:`${f} ${v}`,borderBottomRightRadius:`${h} ${v}`,borderBottomLeftRadius:`${k} ${v}`,[`@media (min-width: ${r})`]:u||d||p||w?{borderTopLeftRadius:`${u} ${v}`,borderTopRightRadius:`${d} ${v}`,borderBottomRightRadius:`${p} ${v}`,borderBottomLeftRadius:`${w} ${v}`}:null,[`@media (min-width: ${l})`]:g||b||m||y?{borderTopLeftRadius:`${g} ${v}`,borderTopRightRadius:`${b} ${v}`,borderBottomRightRadius:`${m} ${v}`,borderBottomLeftRadius:`${y} ${v}`}:null}}})({radius:n,className:a,isWithIframe:l}));let c={},u={};return"object"==typeof o[a]&&(c=o[a]||{}),"object"==typeof s[a]&&(u=s[a]||{}),{[`${a}`]:{...c,...u}}},je=({className:e,padding:a,margin:t})=>{const{media_desktop:l,media_tablet:r}=Pe,{value_Desktop:i,value_Tablet:n,value_Mobile:o}=Fe(t),{value_Desktop:s,value_Tablet:c,value_Mobile:u}=Fe(a),{mobile_v:g,tablet_v:f,desktop_v:d}=Be({mobile_v:u?.top,tablet_v:c?.top,desktop_v:s?.top}),{mobile_v:b,tablet_v:h,desktop_v:p}=Be({mobile_v:u?.left,tablet_v:c?.left,desktop_v:s?.left}),{mobile_v:m,tablet_v:k,desktop_v:w}=Be({mobile_v:u?.right,tablet_v:c?.right,desktop_v:s?.right}),{mobile_v:y,tablet_v:v,desktop_v:_}=Be({mobile_v:u?.bottom,tablet_v:c?.bottom,desktop_v:s?.bottom}),{mobile_v:C,tablet_v:E,desktop_v:S}=Be({mobile_v:o?.top,tablet_v:n?.top,desktop_v:i?.top}),{mobile_v:x,tablet_v:T,desktop_v:I}=Be({mobile_v:o?.left,tablet_v:n?.left,desktop_v:i?.left}),{mobile_v:N,tablet_v:R,desktop_v:M}=Be({mobile_v:o?.right,tablet_v:n?.right,desktop_v:i?.right}),{mobile_v:A,tablet_v:O,desktop_v:P}=Be({mobile_v:o?.bottom,tablet_v:n?.bottom,desktop_v:i?.bottom});return Oe`
		body ${e} {
			padding-top: ${g} !important;
			padding-right: ${m} !important;
			padding-bottom: ${y} !important;
			padding-left: ${b} !important;
			margin-top: ${C} !important;
			margin-right: ${N};
			margin-bottom: ${A} !important;
			margin-left: ${x};
			@media (min-width: ${r}) {
				padding-top: ${f} !important;
				padding-right: ${k} !important;
				padding-bottom: ${v} !important;
				padding-left: ${h} !important;
				margin-top: ${E} !important;
				margin-right: ${R};
				margin-bottom: ${O} !important;
				margin-left: ${T};
>>>>>>> refs/remotes/origin/fix/boostifyblock-issue-4
			}
			@media (min-width: ${l}) {
				padding-top: ${d} !important;
				padding-right: ${w} !important;
				padding-bottom: ${_} !important;
				padding-left: ${p} !important;
				margin-top: ${S} !important;
				margin-right: ${M};
				margin-bottom: ${P} !important;
				margin-left: ${I};
			}
		}
	`};t(8156),window.wp.api;const Ge=e=>{setTimeout((()=>{const a=a=>{if(a&&(e=>e&&!e?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i))(e)){if(Ve(e,a))return;const t=ze(e);a.appendChild(t),console.log(321,"________load-gg-font_____",{fontName:e,link:t})}},t=(()=>{let e=document.querySelector("head");return!!document.querySelector('iframe[name="editor-canvas"]')&&(e=document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector("head")),e})();a(t),t!==document.querySelector("head")&&a(document.querySelector("head"))}),50)},ze=(e="")=>{const a=document.createElement("link");return a.classList.add("wcb-google-fonts"),a.setAttribute("data-font-name",e),a.setAttribute("href",(e=>`https://fonts.googleapis.com/css?family=${e.replace(/ /g,"+")}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`)(e)),a.setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a},Ve=(e,a=document.querySelector("head"))=>a.querySelector(`[data-font-name="${e}"]`),We=({typography:e,className:a})=>{if(!e||!a)return{};const{appearance:t,fontFamily:l,fontSizes:r,letterSpacing:i,lineHeight:n,textDecoration:o,textTransform:s}=e;l&&Ge(l);const{media_desktop:c,media_tablet:u}=Pe,g=r?.Desktop,f=r?.Tablet||g,d=r?.Mobile||f,b=n?.Desktop,h=n?.Tablet||b,p=n?.Mobile||h,m=i?.Desktop,k=i?.Tablet||m,w=i?.Mobile||k,{mobile_v:y,tablet_v:v,desktop_v:_}=Be({mobile_v:d,tablet_v:f,desktop_v:g}),{mobile_v:C,tablet_v:E,desktop_v:S}=Be({mobile_v:p,tablet_v:h,desktop_v:b}),{mobile_v:x,tablet_v:T,desktop_v:I}=Be({mobile_v:w,tablet_v:k,desktop_v:m});return{[`${a}`]:{fontFamily:l,fontWeight:t?.style?.fontWeight,fontStyle:t?.style?.fontStyle,textDecoration:o,textTransform:s,fontSize:y,lineHeight:C,letterSpacing:x,[`@media (min-width: ${u})`]:v||E||T?{fontSize:v,lineHeight:E,letterSpacing:T}:void 0,[`@media (min-width: ${c})`]:_||S||I?{fontSize:_,lineHeight:S,letterSpacing:I}:void 0}}},Ue=function({cssProperty:e}){const{value_Desktop:a,value_Tablet:t,value_Mobile:l}=Fe(e);return{value_desktop:a,value_tablet:t,value_mobile:l}},qe=r().memo((e=>{const{uniqueId:a,general_action:t,general_general:r,general_gg_recaptcha:i,general_submit_button:n,style_checkbox_radio_toggle:o,style_input:s,style_label:c,style_messages:u,style_spacing:g,style_submit_button:f,advance_responsiveCondition:d,advance_zIndex:b,advance_motionEffect:h}=e,{media_desktop:p,media_tablet:m}=Pe,k=`.${a}[data-uniqueid=${a}]`,w=`${k} .wcb-form__box`,y=`${k} .wcb-form__inner`,v=`${k} [type="text"], ${k} [type="email"], ${k} [type="url"], ${k} [type="password"], ${k} [type="number"], ${k} [type="date"], ${k} [type="datetime-local"], ${k} [type="month"], ${k} [type="search"], ${k} [type="tel"], ${k} [type="time"], ${k} [type="week"], ${k} [multiple], ${k} select, ${k} textarea`,_=`${k} input[type="checkbox"], ${k} input[type="radio"]`,C=`${k} .wcb-toggle__switch`,E=`${k} .wcb-form__btn-submit`,S=`${k} .wcb-form__successMessageText`,x=`${k} .wcb-form__errorMessageText`;return a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Ae,{styles:(()=>{const{textAlignment:e}=r,{position:a,textAlignment:t}=n,{value_desktop:l,value_tablet:i,value_mobile:o}=Ue({cssProperty:e}),{value_desktop:s,value_tablet:c,value_mobile:u}=Ue({cssProperty:t}),g=e=>"right"===e?"row":"left"===e?"row-reverse":"top"===e?"column-reverse":"column",{value_desktop:f,value_tablet:d,value_mobile:b}=Ue({cssProperty:a}),h=e=>"right"===e||"left"===e;return{[`${k}`]:{textAlign:o,".wcb-form__btn-submit-wrap":h(b)?{alignItems:u}:{justifyContent:u},[`@media (min-width: ${m})`]:{textAlign:i,".wcb-form__btn-submit-wrap":h(d)?{alignItems:c}:{justifyContent:c}},[`@media (min-width: ${p})`]:{textAlign:l,".wcb-form__btn-submit-wrap":h(f)?{alignItems:s}:{justifyContent:s}}},[`${w}`]:{flexDirection:g(b),[`@media (min-width: ${m})`]:{flexDirection:g(d)},[`@media (min-width: ${p})`]:{flexDirection:g(f)}}}})()}),(0,l.createElement)(Ae,{styles:He({className:`${k}`,border:g.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:je({className:`${k}`,padding:g.padding,margin:g.margin})}),(()=>{const{value_mobile:e,value_desktop:a,value_tablet:t}=Ue({cssProperty:g.rowGap});return(0,l.createElement)(Ae,{styles:{[`${y}, ${w}`]:{rowGap:e,[`@media (min-width: ${m})`]:{rowGap:t},[`@media (min-width: ${p})`]:{rowGap:a}}}})})(),(()=>{const{value_mobile:e,value_desktop:a,value_tablet:t}=Ue({cssProperty:g.labelBottomMargin});return(0,l.createElement)(Ae,{styles:{[`${k} .wcb-form__label`]:{marginBottom:e,[`@media (min-width: ${m})`]:{marginBottom:t},[`@media (min-width: ${p})`]:{marginBottom:a}}}})})(),(0,l.createElement)(Ae,{styles:We({className:`${k} .wcb-form__label`,typography:c.typography})}),(0,l.createElement)(Ae,{styles:{[`${k} .wcb-form__label`]:{color:c.textColor,display:r.isShowLabel?"block":"none",":hover":{color:c.textColorHover}}}}),(0,l.createElement)(Ae,{styles:We({className:v,typography:s.typography})}),(0,l.createElement)(Ae,{styles:He({className:`${v}`,border:s.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:je({className:`${v}`,padding:s.padding})}),(0,l.createElement)(Ae,{styles:{[v]:{color:s.textColor,backgroundColor:s.bgAndPlaceholder.Normal.backgroundColor,"::placeholder":{color:s.bgAndPlaceholder.Normal.placeholderColor},":hover":{backgroundColor:s.bgAndPlaceholder.Hover.backgroundColor,"::placeholder":{color:s.bgAndPlaceholder.Hover.placeholderColor}},":active, :focus":{backgroundColor:s.bgAndPlaceholder.Active.backgroundColor,"::placeholder":{color:s.bgAndPlaceholder.Active.placeholderColor}}}}}),(0,l.createElement)(Ae,{styles:He({className:`${_}, ${C} .wcb-toggle__slider, ${C} .wcb-toggle__slider::before`,border:o.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:{[_]:{backgroundColor:o.colors.Normal.backgroundColor,":checked":{backgroundColor:o.colors.Active.backgroundColor}},[`${C}`]:{".wcb-toggle__slider":{backgroundColor:o.colors.Normal.backgroundColor},"input:checked + .wcb-toggle__slider":{backgroundColor:o.colors.Active.backgroundColor}}}}),(()=>{const{value_desktop:e,value_mobile:a,value_tablet:t}=Ue({cssProperty:o.checkboxRadioSize});return(0,l.createElement)(Ae,{styles:{[`${_} `]:{width:a,height:a,[`@media (min-width: ${m})`]:{width:t,height:t},[`@media (min-width: ${p})`]:{width:e,height:e}}}})})(),(()=>{const{value_desktop:e,value_mobile:a,value_tablet:t}=Ue({cssProperty:o.toggleSize}),r=a+"rem",i=t+"rem",n=e+"rem";return(0,l.createElement)(Ae,{styles:{[`${C}`]:{".wcb-toggle__slider::before":{width:r,height:r},"input:checked + .wcb-toggle__slider:before":{transform:`translateX(${r})`},height:`calc(${r} + 8px)`,width:`calc((${r} * 2) + 8px)`,[`@media (min-width: ${m})`]:{".wcb-toggle__slider::before":{width:i,height:i},"input:checked + .wcb-toggle__slider:before":{transform:`translateX(${i})`},height:`calc(${i} + 8px)`,width:`calc((${i} * 2) + 8px)`},[`@media (min-width: ${p})`]:{".wcb-toggle__slider::before":{width:n,height:n},"input:checked + .wcb-toggle__slider:before":{transform:`translateX(${n})`},height:`calc(${n} + 8px)`,width:`calc((${n} * 2) + 8px)`}}}})})(),(0,l.createElement)(Ae,{styles:He({className:`${E}`,border:f.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:We({className:E,typography:f.typography})}),(0,l.createElement)(Ae,{styles:{[E]:{color:f.colorAndBackgroundColor?.Normal?.color,backgroundColor:f.colorAndBackgroundColor?.Normal?.backgroundColor,":hover":{color:f.colorAndBackgroundColor?.Hover?.color,backgroundColor:f.colorAndBackgroundColor?.Hover?.backgroundColor}}}}),(0,l.createElement)(Ae,{styles:je({className:`${E}`,padding:f.padding,margin:f.margin})}),(0,l.createElement)(Ae,{styles:We({className:`${S}, ${x}`,typography:u.typography})}),(0,l.createElement)(Ae,{styles:He({className:`${S}`,border:u.Success.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:je({className:`${S}, ${x}`,margin:u.margin})}),(0,l.createElement)(Ae,{styles:{[`${S}`]:{color:u.Success.color,backgroundColor:u.Success.backgroundColor}}}),(0,l.createElement)(Ae,{styles:He({className:`${x}`,border:u.Error.border,isWithRadius:!0})}),(0,l.createElement)(Ae,{styles:{[`${x}`]:{color:u.Error.color,backgroundColor:u.Error.backgroundColor}}}),(0,l.createElement)(Ae,{styles:$e({advance_motionEffect:h,advance_responsiveCondition:d,advance_zIndex:b,className:k,defaultDisplay:"flex"})})):null})),Ke=window.wp.data,Je={Advances:{panelIsOpen:""},General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"},tabIsOpen:"General"},Ze={},Qe="boostify-blocks/panels",Ye=(0,Ke.createReduxStore)(Qe,{reducer(e=Ze,a){if("SET_BLOCK_PANEL_INFO"===a.type){const t=e[a.blockId]||Je;return{...e,[a.blockId]:{...t,...a.block}}}return e},actions:{setBlockPanelInfo:(e,a)=>({type:"SET_BLOCK_PANEL_INFO",blockId:e,block:a})},selectors:{getBlockPanelInfo:e=>e},controls:{},resolvers:{}}),Xe=window;Xe.__boostifyPanelsStoreRegistered||(Xe.__boostifyPanelsStoreRegistered=!0,(0,Ke.register)(Ye));const ea={isHiddenOnDesktop:!1,isHiddenOnTablet:!1,isHiddenOnMobile:!1},aa=({className:e="space-y-4",responsiveConditionControl:a=ea,setAttrs__responsiveCondition:t})=>{const{isHiddenOnDesktop:r,isHiddenOnMobile:i,isHiddenOnTablet:o}=a;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.ToggleControl,{label:(0,n.__)("Hide on Desktop","boostify-blocks"),checked:r,onChange:e=>{t({...a,isHiddenOnDesktop:e})},className:"mb-0"}),(0,l.createElement)(g.ToggleControl,{label:(0,n.__)("Hide on Tablet","boostify-blocks"),checked:o,onChange:e=>{t({...a,isHiddenOnTablet:e})}}),(0,l.createElement)(g.ToggleControl,{label:(0,n.__)("Hide on Mobile","boostify-blocks"),checked:i,onChange:e=>{t({...a,isHiddenOnMobile:e})}}))},ta=()=>{const{deviceType:e}=(0,Ke.useSelect)((e=>{const{__experimentalGetPreviewDeviceType:a}=e("core/edit-post")||!1;return a?{deviceType:a()}:{deviceType:null}}),[]);return e};function la(e,a,...t){if(e in a){let l=a[e];return"function"==typeof l?l(...t):l}let l=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,la),l}function ra(...e){return e.filter(Boolean).join(" ")}var ia,na=((ia=na||{})[ia.None=0]="None",ia[ia.RenderStrategy=1]="RenderStrategy",ia[ia.Static=2]="Static",ia),oa=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(oa||{});function sa({ourProps:e,theirProps:a,slot:t,defaultTag:l,features:r,visible:i=!0,name:n}){let o=ua(a,e);if(i)return ca(o,t,l,n);let s=null!=r?r:0;if(2&s){let{static:e=!1,...a}=o;if(e)return ca(a,t,l,n)}if(1&s){let{unmount:e=!0,...a}=o;return la(e?0:1,{0:()=>null,1:()=>ca({...a,hidden:!0,style:{display:"none"}},t,l,n)})}return ca(o,t,l,n)}function ca(e,a={},t,r){var i;let{as:n=t,children:o,refName:s="ref",...c}=da(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},g="function"==typeof o?o(a):o;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(a));let f={};if(a){let e=!1,t=[];for(let[l,r]of Object.entries(a))"boolean"==typeof r&&(e=!0),!0===r&&t.push(l);e&&(f["data-headlessui-state"]=t.join(" "))}if(n===l.Fragment&&Object.keys(fa(c)).length>0){if(!(0,l.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=ra(null==(i=g.props)?void 0:i.className,c.className),a=e?{className:e}:{};return(0,l.cloneElement)(g,Object.assign({},ua(g.props,fa(da(c,["ref"]))),f,u,function(...e){return{ref:e.every((e=>null==e))?void 0:a=>{for(let t of e)null!=t&&("function"==typeof t?t(a):t.current=a)}}}(g.ref,u.ref),a))}return(0,l.createElement)(n,Object.assign({},da(c,["ref"]),n!==l.Fragment&&u,n!==l.Fragment&&f),g)}function ua(...e){if(0===e.length)return{};if(1===e.length)return e[0];let a={},t={};for(let l of e)for(let e in l)e.startsWith("on")&&"function"==typeof l[e]?(null!=t[e]||(t[e]=[]),t[e].push(l[e])):a[e]=l[e];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(t).map((e=>[e,void 0]))));for(let e in t)Object.assign(a,{[e](a,...l){let r=t[e];for(let e of r){if((a instanceof Event||(null==a?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;e(a,...l)}}});return a}function ga(e){var a;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(a=e.displayName)?a:e.name})}function fa(e){let a=Object.assign({},e);for(let e in a)void 0===a[e]&&delete a[e];return a}function da(e,a=[]){let t=Object.assign({},e);for(let e of a)e in t&&delete t[e];return t}function ba(){let e=[],a={addEventListener:(e,t,l,r)=>(e.addEventListener(t,l,r),a.add((()=>e.removeEventListener(t,l,r)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return a.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>a.requestAnimationFrame((()=>a.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return a.add((()=>clearTimeout(t)))},microTask(...e){let t={current:!0};return function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}((()=>{t.current&&e[0]()})),a.add((()=>{t.current=!1}))},style(e,a,t){let l=e.style.getPropertyValue(a);return Object.assign(e.style,{[a]:t}),this.add((()=>{Object.assign(e.style,{[a]:l})}))},group(e){let a=ba();return e(a),this.add((()=>a.dispose()))},add:a=>(e.push(a),()=>{let t=e.indexOf(a);if(t>=0)for(let a of e.splice(t,1))a()}),dispose(){for(let a of e.splice(0))a()}};return a}function ha(){let[e]=(0,l.useState)(ba);return(0,l.useEffect)((()=>()=>e.dispose()),[e]),e}var pa=Object.defineProperty,ma=(e,a,t)=>(((e,a,t)=>{a in e?pa(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t})(e,"symbol"!=typeof a?a+"":a,t),t);let ka=new class{constructor(){ma(this,"current",this.detect()),ma(this,"handoffState","pending"),ma(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},wa=(e,a)=>{ka.isServer?(0,l.useEffect)(e,a):(0,l.useLayoutEffect)(e,a)};function ya(e){let a=(0,l.useRef)(e);return wa((()=>{a.current=e}),[e]),a}let va=function(e){let a=ya(e);return l.useCallback(((...e)=>a.current(...e)),[a])},_a=Symbol();function Ca(e,a=!0){return Object.assign(e,{[_a]:a})}function Ea(...e){let a=(0,l.useRef)(e);(0,l.useEffect)((()=>{a.current=e}),[e]);let t=va((e=>{for(let t of a.current)null!=t&&("function"==typeof t?t(e):t.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[_a])))?void 0:t}function Sa(){let[e,a]=(0,l.useState)(ka.isHandoffComplete);return e&&!1===ka.isHandoffComplete&&a(!1),(0,l.useEffect)((()=>{!0!==e&&a(!0)}),[e]),(0,l.useEffect)((()=>ka.handoff()),[]),e}var xa;let Ta=null!=(xa=l.useId)?xa:function(){let e=Sa(),[a,t]=l.useState(e?()=>ka.nextId():null);return wa((()=>{null===a&&t(ka.nextId())}),[a]),null!=a?""+a:void 0};var Ia=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ia||{}),Na=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(Na||{});function Ra(e){let a=e.parentElement,t=null;for(;a&&!(a instanceof HTMLFieldSetElement);)a instanceof HTMLLegendElement&&(t=a),a=a.parentElement;let l=""===(null==a?void 0:a.getAttribute("disabled"));return(!l||!function(e){if(!e)return!1;let a=e.previousElementSibling;for(;null!==a;){if(a instanceof HTMLLegendElement)return!1;a=a.previousElementSibling}return!0}(t))&&l}function Ma(e){return ka.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Aa=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var Oa,Pa=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(Pa||{}),Da=((Oa=Da||{})[Oa.Error=0]="Error",Oa[Oa.Overflow=1]="Overflow",Oa[Oa.Success=2]="Success",Oa[Oa.Underflow=3]="Underflow",Oa),Ba=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ba||{});function La(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Aa)).sort(((e,a)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(a.tabIndex||Number.MAX_SAFE_INTEGER))))}var $a=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($a||{});function Fa(e,a=0){var t;return e!==(null==(t=Ma(e))?void 0:t.body)&&la(a,{0:()=>e.matches(Aa),1(){let a=e;for(;null!==a;){if(a.matches(Aa))return!0;a=a.parentElement}return!1}})}function Ha(e){let a=Ma(e);ba().nextFrame((()=>{a&&!Fa(a.activeElement,0)&&function(e){null==e||e.focus({preventScroll:!0})}(e)}))}let ja=["textarea","input"].join(",");function Ga(e,a=e=>e){return e.slice().sort(((e,t)=>{let l=a(e),r=a(t);if(null===l||null===r)return 0;let i=l.compareDocumentPosition(r);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function za(e,a){return Va(La(),a,{relativeTo:e})}function Va(e,a,{sorted:t=!0,relativeTo:l=null,skipElements:r=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?Ga(e):e:La(e);r.length>0&&n.length>1&&(n=n.filter((e=>!r.includes(e)))),l=null!=l?l:i.activeElement;let o,s=(()=>{if(5&a)return 1;if(10&a)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&a)return 0;if(2&a)return Math.max(0,n.indexOf(l))-1;if(4&a)return Math.max(0,n.indexOf(l))+1;if(8&a)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&a?{preventScroll:!0}:{},g=0,f=n.length;do{if(g>=f||g+f<=0)return 0;let e=c+g;if(16&a)e=(e+f)%f;else{if(e<0)return 3;if(e>=f)return 1}o=n[e],null==o||o.focus(u),g+=s}while(o!==i.activeElement);return 6&a&&function(e){var a,t;return null!=(t=null==(a=null==e?void 0:e.matches)?void 0:a.call(e,ja))&&t}(o)&&o.select(),o.hasAttribute("tabindex")||o.setAttribute("tabindex","0"),2}function Wa(e,a,t){let r=ya(a);(0,l.useEffect)((()=>{function a(e){r.current(e)}return document.addEventListener(e,a,t),()=>document.removeEventListener(e,a,t)}),[e,t])}function Ua({container:e,accept:a,walk:t,enabled:r=!0}){let i=(0,l.useRef)(a),n=(0,l.useRef)(t);(0,l.useEffect)((()=>{i.current=a,n.current=t}),[a,t]),wa((()=>{if(!e||!r)return;let a=Ma(e);if(!a)return;let t=i.current,l=n.current,o=Object.assign((e=>t(e)),{acceptNode:t}),s=a.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,o,!1);for(;s.nextNode();)l(s.currentNode)}),[e,r,i,n])}let qa=(0,l.createContext)(null);qa.displayName="OpenClosedContext";var Ka=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Ka||{});function Ja(){return(0,l.useContext)(qa)}function Za({value:e,children:a}){return l.createElement(qa.Provider,{value:e},a)}function Qa(e){var a;if(e.type)return e.type;let t=null!=(a=e.as)?a:"button";return"string"==typeof t&&"button"===t.toLowerCase()?"button":void 0}function Ya(e,a){let[t,r]=(0,l.useState)((()=>Qa(e)));return wa((()=>{r(Qa(e))}),[e.type,e.as]),wa((()=>{t||a.current&&a.current instanceof HTMLButtonElement&&!a.current.hasAttribute("type")&&r("button")}),[t,a]),t}function Xa(e){return[e.screenX,e.screenY]}function et(){let e=(0,l.useRef)([-1,-1]);return{wasMoved(a){let t=Xa(a);return(e.current[0]!==t[0]||e.current[1]!==t[1])&&(e.current=t,!0)},update(a){e.current=Xa(a)}}}var at=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(at||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),lt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(lt||{});function rt(e,a=e=>e){let t=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,l=Ga(a(e.items.slice()),(e=>e.dataRef.current.domRef.current)),r=t?l.indexOf(t):null;return-1===r&&(r=null),{items:l,activeItemIndex:r}}let it={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,a)=>{var t;let l=rt(e),r=function(e,a){let t=a.resolveItems();if(t.length<=0)return null;let l=a.resolveActiveIndex(),r=null!=l?l:-1,i=(()=>{switch(e.focus){case 0:return t.findIndex((e=>!a.resolveDisabled(e)));case 1:{let e=t.slice().reverse().findIndex(((e,t,l)=>!(-1!==r&&l.length-t-1>=r||a.resolveDisabled(e))));return-1===e?e:t.length-1-e}case 2:return t.findIndex(((e,t)=>!(t<=r||a.resolveDisabled(e))));case 3:{let e=t.slice().reverse().findIndex((e=>!a.resolveDisabled(e)));return-1===e?e:t.length-1-e}case 4:return t.findIndex((t=>a.resolveId(t)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===i?l:i}(a,{resolveItems:()=>l.items,resolveActiveIndex:()=>l.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...l,searchQuery:"",activeItemIndex:r,activationTrigger:null!=(t=a.trigger)?t:1}},3:(e,a)=>{let t=""!==e.searchQuery?0:1,l=e.searchQuery+a.value.toLowerCase(),r=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+t).concat(e.items.slice(0,e.activeItemIndex+t)):e.items).find((e=>{var a;return(null==(a=e.dataRef.current.textValue)?void 0:a.startsWith(l))&&!e.dataRef.current.disabled})),i=r?e.items.indexOf(r):-1;return-1===i||i===e.activeItemIndex?{...e,searchQuery:l}:{...e,searchQuery:l,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,a)=>{let t=rt(e,(e=>[...e,{id:a.id,dataRef:a.dataRef}]));return{...e,...t}},6:(e,a)=>{let t=rt(e,(e=>{let t=e.findIndex((e=>e.id===a.id));return-1!==t&&e.splice(t,1),e}));return{...e,...t,activationTrigger:1}}},nt=(0,l.createContext)(null);function ot(e){let a=(0,l.useContext)(nt);if(null===a){let a=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,ot),a}return a}function st(e,a){return la(a.type,it,e,a)}nt.displayName="MenuContext";let ct=l.Fragment,ut=na.RenderStrategy|na.Static,gt=l.Fragment,ft=ga((function(e,a){let t=(0,l.useReducer)(st,{menuState:1,buttonRef:(0,l.createRef)(),itemsRef:(0,l.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:r,itemsRef:i,buttonRef:n},o]=t,s=Ea(a);!function(e,a,t=!0){let r=(0,l.useRef)(!1);function i(t,l){if(!r.current||t.defaultPrevented)return;let i=function e(a){return"function"==typeof a?e(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e),n=l(t);if(null!==n&&n.getRootNode().contains(n)){for(let e of i){if(null===e)continue;let a=e instanceof HTMLElement?e:e.current;if(null!=a&&a.contains(n)||t.composed&&t.composedPath().includes(a))return}return!Fa(n,$a.Loose)&&-1!==n.tabIndex&&t.preventDefault(),a(t,n)}}(0,l.useEffect)((()=>{requestAnimationFrame((()=>{r.current=t}))}),[t]);let n=(0,l.useRef)(null);Wa("mousedown",(e=>{var a,t;r.current&&(n.current=(null==(t=null==(a=e.composedPath)?void 0:a.call(e))?void 0:t[0])||e.target)}),!0),Wa("click",(e=>{n.current&&(i(e,(()=>n.current)),n.current=null)}),!0),Wa("blur",(e=>i(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([n,i],((e,a)=>{var t;o({type:1}),Fa(a,$a.Loose)||(e.preventDefault(),null==(t=n.current)||t.focus())}),0===r);let c=va((()=>{o({type:1})})),u=(0,l.useMemo)((()=>({open:0===r,close:c})),[r,c]),g=e,f={ref:s};return l.createElement(nt.Provider,{value:t},l.createElement(Za,{value:la(r,{0:Ka.Open,1:Ka.Closed})},sa({ourProps:f,theirProps:g,slot:u,defaultTag:ct,name:"Menu"})))})),dt=ga((function(e,a){var t;let r=Ta(),{id:i=`headlessui-menu-button-${r}`,...n}=e,[o,s]=ot("Menu.Button"),c=Ea(o.buttonRef,a),u=ha(),g=va((e=>{switch(e.key){case Ia.Space:case Ia.Enter:case Ia.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:Na.First})));break;case Ia.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:Na.Last})))}})),f=va((e=>{e.key===Ia.Space&&e.preventDefault()})),d=va((a=>{if(Ra(a.currentTarget))return a.preventDefault();e.disabled||(0===o.menuState?(s({type:1}),u.nextFrame((()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(a.preventDefault(),s({type:0})))})),b=(0,l.useMemo)((()=>({open:0===o.menuState})),[o]);return sa({ourProps:{ref:c,id:i,type:Ya(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(t=o.itemsRef.current)?void 0:t.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:g,onKeyUp:f,onClick:d},theirProps:n,slot:b,defaultTag:"button",name:"Menu.Button"})})),bt=ga((function(e,a){var t,r;let i=Ta(),{id:n=`headlessui-menu-items-${i}`,...o}=e,[s,c]=ot("Menu.Items"),u=Ea(s.itemsRef,a),g=function(...e){return(0,l.useMemo)((()=>Ma(...e)),[...e])}(s.itemsRef),f=ha(),d=Ja(),b=null!==d?(d&Ka.Open)===Ka.Open:0===s.menuState;(0,l.useEffect)((()=>{let e=s.itemsRef.current;e&&0===s.menuState&&e!==(null==g?void 0:g.activeElement)&&e.focus({preventScroll:!0})}),[s.menuState,s.itemsRef,g]),Ua({container:s.itemsRef.current,enabled:0===s.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let h=va((e=>{var a,t;switch(f.dispose(),e.key){case Ia.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),c({type:3,value:e.key});case Ia.Enter:if(e.preventDefault(),e.stopPropagation(),c({type:1}),null!==s.activeItemIndex){let{dataRef:e}=s.items[s.activeItemIndex];null==(t=null==(a=e.current)?void 0:a.domRef.current)||t.click()}Ha(s.buttonRef.current);break;case Ia.ArrowDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Next});case Ia.ArrowUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Previous});case Ia.Home:case Ia.PageUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.First});case Ia.End:case Ia.PageDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:Na.Last});case Ia.Escape:e.preventDefault(),e.stopPropagation(),c({type:1}),ba().nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case Ia.Tab:e.preventDefault(),e.stopPropagation(),c({type:1}),ba().nextFrame((()=>{za(s.buttonRef.current,e.shiftKey?Pa.Previous:Pa.Next)}));break;default:1===e.key.length&&(c({type:3,value:e.key}),f.setTimeout((()=>c({type:4})),350))}})),p=va((e=>{e.key===Ia.Space&&e.preventDefault()})),m=(0,l.useMemo)((()=>({open:0===s.menuState})),[s]);return sa({ourProps:{"aria-activedescendant":null===s.activeItemIndex||null==(t=s.items[s.activeItemIndex])?void 0:t.id,"aria-labelledby":null==(r=s.buttonRef.current)?void 0:r.id,id:n,onKeyDown:h,onKeyUp:p,role:"menu",tabIndex:0,ref:u},theirProps:o,slot:m,defaultTag:"div",features:ut,visible:b,name:"Menu.Items"})})),ht=ga((function(e,a){let t=Ta(),{id:r=`headlessui-menu-item-${t}`,disabled:i=!1,...n}=e,[o,s]=ot("Menu.Item"),c=null!==o.activeItemIndex&&o.items[o.activeItemIndex].id===r,u=(0,l.useRef)(null),g=Ea(a,u);wa((()=>{if(0!==o.menuState||!c||0===o.activationTrigger)return;let e=ba();return e.requestAnimationFrame((()=>{var e,a;null==(a=null==(e=u.current)?void 0:e.scrollIntoView)||a.call(e,{block:"nearest"})})),e.dispose}),[u,c,o.menuState,o.activationTrigger,o.activeItemIndex]);let f=(0,l.useRef)({disabled:i,domRef:u});wa((()=>{f.current.disabled=i}),[f,i]),wa((()=>{var e,a;f.current.textValue=null==(a=null==(e=u.current)?void 0:e.textContent)?void 0:a.toLowerCase()}),[f,u]),wa((()=>(s({type:5,id:r,dataRef:f}),()=>s({type:6,id:r}))),[f,r]);let d=va((()=>{s({type:1})})),b=va((e=>{if(i)return e.preventDefault();s({type:1}),Ha(o.buttonRef.current)})),h=va((()=>{if(i)return s({type:2,focus:Na.Nothing});s({type:2,focus:Na.Specific,id:r})})),p=et(),m=va((e=>p.update(e))),k=va((e=>{p.wasMoved(e)&&(i||c||s({type:2,focus:Na.Specific,id:r,trigger:0}))})),w=va((e=>{p.wasMoved(e)&&(i||c&&s({type:2,focus:Na.Nothing}))})),y=(0,l.useMemo)((()=>({active:c,disabled:i,close:d})),[c,i,d]);return sa({ourProps:{id:r,ref:g,role:"menuitem",tabIndex:!0===i?void 0:-1,"aria-disabled":!0===i||void 0,disabled:void 0,onClick:b,onFocus:h,onPointerEnter:m,onMouseEnter:m,onPointerMove:k,onMouseMove:k,onPointerLeave:w,onMouseLeave:w},theirProps:n,slot:y,defaultTag:gt,name:"Menu.Item"})})),pt=Object.assign(ft,{Button:dt,Items:bt,Item:ht});function mt(){let e=(0,l.useRef)(!1);return wa((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function kt(e,...a){e&&a.length>0&&e.classList.add(...a)}function wt(e,...a){e&&a.length>0&&e.classList.remove(...a)}function yt({container:e,direction:a,classes:t,onStart:l,onStop:r}){let i=mt(),n=ha(),o=ya(a);wa((()=>{let a=ba();n.add(a.dispose);let s=e.current;if(s&&"idle"!==o.current&&i.current)return a.dispose(),l.current(o.current),a.add(function(e,a,t,l){let r=t?"enter":"leave",i=ba(),n=void 0!==l?function(e){let a={called:!1};return(...t)=>{if(!a.called)return a.called=!0,e(...t)}}(l):()=>{};"enter"===r&&(e.removeAttribute("hidden"),e.style.display="");let o=la(r,{enter:()=>a.enter,leave:()=>a.leave}),s=la(r,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),c=la(r,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom});return wt(e,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),kt(e,...o,...c),i.nextFrame((()=>{wt(e,...c),kt(e,...s),function(e,a){let t=ba();if(!e)return t.dispose;let{transitionDuration:l,transitionDelay:r}=getComputedStyle(e),[i,n]=[l,r].map((e=>{let[a=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,a)=>a-e));return a})),o=i+n;if(0!==o){t.group((t=>{t.setTimeout((()=>{a(),t.dispose()}),o),t.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&t.dispose()}))}));let l=t.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(a(),l())}))}else a();t.add((()=>a())),t.dispose}(e,(()=>(wt(e,...o),kt(e,...a.entered),n())))})),i.dispose}(s,t.current,"enter"===o.current,(()=>{a.dispose(),r.current(o.current)}))),a.dispose}),[a])}function vt(e=0){let[a,t]=(0,l.useState)(e),r=(0,l.useCallback)((e=>t((a=>a|e))),[a]),i=(0,l.useCallback)((e=>Boolean(a&e)),[a]),n=(0,l.useCallback)((e=>t((a=>a&~e))),[t]),o=(0,l.useCallback)((e=>t((a=>a^e))),[t]);return{flags:a,addFlag:r,hasFlag:i,removeFlag:n,toggleFlag:o}}function _t(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let Ct=(0,l.createContext)(null);Ct.displayName="TransitionContext";var Et=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Et||{});let St=(0,l.createContext)(null);function xt(e){return"children"in e?xt(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function Tt(e,a){let t=ya(e),r=(0,l.useRef)([]),i=mt(),n=ha(),o=va(((e,a=oa.Hidden)=>{let l=r.current.findIndex((({el:a})=>a===e));-1!==l&&(la(a,{[oa.Unmount](){r.current.splice(l,1)},[oa.Hidden](){r.current[l].state="hidden"}}),n.microTask((()=>{var e;!xt(r)&&i.current&&(null==(e=t.current)||e.call(t))})))})),s=va((e=>{let a=r.current.find((({el:a})=>a===e));return a?"visible"!==a.state&&(a.state="visible"):r.current.push({el:e,state:"visible"}),()=>o(e,oa.Unmount)})),c=(0,l.useRef)([]),u=(0,l.useRef)(Promise.resolve()),g=(0,l.useRef)({enter:[],leave:[],idle:[]}),f=va(((e,t,l)=>{c.current.splice(0),a&&(a.chains.current[t]=a.chains.current[t].filter((([a])=>a!==e))),null==a||a.chains.current[t].push([e,new Promise((e=>{c.current.push(e)}))]),null==a||a.chains.current[t].push([e,new Promise((e=>{Promise.all(g.current[t].map((([e,a])=>a))).then((()=>e()))}))]),"enter"===t?u.current=u.current.then((()=>null==a?void 0:a.wait.current)).then((()=>l(t))):l(t)})),d=va(((e,a,t)=>{Promise.all(g.current[a].splice(0).map((([e,a])=>a))).then((()=>{var e;null==(e=c.current.shift())||e()})).then((()=>t(a)))}));return(0,l.useMemo)((()=>({children:r,register:s,unregister:o,onStart:f,onStop:d,wait:u,chains:g})),[s,o,r,f,d,g,u])}function It(){}St.displayName="NestingContext";let Nt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Rt(e){var a;let t={};for(let l of Nt)t[l]=null!=(a=e[l])?a:It;return t}let Mt=na.RenderStrategy,At=ga((function(e,a){let{show:t,appear:r=!1,unmount:i,...n}=e,o=(0,l.useRef)(null),s=Ea(o,a);Sa();let c=Ja();if(void 0===t&&null!==c&&(t=(c&Ka.Open)===Ka.Open),![!0,!1].includes(t))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,g]=(0,l.useState)(t?"visible":"hidden"),f=Tt((()=>{g("hidden")})),[d,b]=(0,l.useState)(!0),h=(0,l.useRef)([t]);wa((()=>{!1!==d&&h.current[h.current.length-1]!==t&&(h.current.push(t),b(!1))}),[h,t]);let p=(0,l.useMemo)((()=>({show:t,appear:r,initial:d})),[t,r,d]);(0,l.useEffect)((()=>{if(t)g("visible");else if(xt(f)){let e=o.current;if(!e)return;let a=e.getBoundingClientRect();0===a.x&&0===a.y&&0===a.width&&0===a.height&&g("hidden")}else g("hidden")}),[t,f]);let m={unmount:i};return l.createElement(St.Provider,{value:f},l.createElement(Ct.Provider,{value:p},sa({ourProps:{...m,as:l.Fragment,children:l.createElement(Ot,{ref:s,...m,...n})},theirProps:{},defaultTag:l.Fragment,features:Mt,visible:"visible"===u,name:"Transition"})))})),Ot=ga((function(e,a){let{beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:n,enter:o,enterFrom:s,enterTo:c,entered:u,leave:g,leaveFrom:f,leaveTo:d,...b}=e,h=(0,l.useRef)(null),p=Ea(h,a),m=b.unmount?oa.Unmount:oa.Hidden,{show:k,appear:w,initial:y}=function(){let e=(0,l.useContext)(Ct);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[v,_]=(0,l.useState)(k?"visible":"hidden"),C=function(){let e=(0,l.useContext)(St);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:E,unregister:S}=C,x=(0,l.useRef)(null);(0,l.useEffect)((()=>E(h)),[E,h]),(0,l.useEffect)((()=>{if(m===oa.Hidden&&h.current)return k&&"visible"!==v?void _("visible"):la(v,{hidden:()=>S(h),visible:()=>E(h)})}),[v,h,E,S,k,m]);let T=ya({enter:_t(o),enterFrom:_t(s),enterTo:_t(c),entered:_t(u),leave:_t(g),leaveFrom:_t(f),leaveTo:_t(d)}),I=function(e){let a=(0,l.useRef)(Rt(e));return(0,l.useEffect)((()=>{a.current=Rt(e)}),[e]),a}({beforeEnter:t,afterEnter:r,beforeLeave:i,afterLeave:n}),N=Sa();(0,l.useEffect)((()=>{if(N&&"visible"===v&&null===h.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[h,v,N]);let R=y&&!w,M=!N||R||x.current===k?"idle":k?"enter":"leave",A=vt(0),O=va((e=>la(e,{enter:()=>{A.addFlag(Ka.Opening),I.current.beforeEnter()},leave:()=>{A.addFlag(Ka.Closing),I.current.beforeLeave()},idle:()=>{}}))),P=va((e=>la(e,{enter:()=>{A.removeFlag(Ka.Opening),I.current.afterEnter()},leave:()=>{A.removeFlag(Ka.Closing),I.current.afterLeave()},idle:()=>{}}))),D=Tt((()=>{_("hidden"),S(h)}),C);yt({container:h,classes:T,direction:M,onStart:ya((e=>{D.onStart(h,e,O)})),onStop:ya((e=>{D.onStop(h,e,P),"leave"===e&&!xt(D)&&(_("hidden"),S(h))}))}),(0,l.useEffect)((()=>{R&&(m===oa.Hidden?x.current=null:x.current=k)}),[k,R,v]);let B=b,L={ref:p};return w&&k&&ka.isServer&&(B={...B,className:ra(b.className,...T.current.enter,...T.current.enterFrom)}),l.createElement(St.Provider,{value:D},l.createElement(Za,{value:la(v,{visible:Ka.Open,hidden:Ka.Closed})|A.flags},sa({ourProps:L,theirProps:B,defaultTag:"div",features:Mt,visible:"visible"===v,name:"Transition.Child"})))})),Pt=ga((function(e,a){let t=null!==(0,l.useContext)(Ct),r=null!==Ja();return l.createElement(l.Fragment,null,!t&&r?l.createElement(At,{ref:a,...e}):l.createElement(Ot,{ref:a,...e}))})),Dt=Object.assign(At,{Child:Pt,Root:At});var Bt=t(8477),Lt=t(7500),$t=t(826),Ft=t(2149);const Ht={Desktop:"Desktop",Tablet:"Tablet",Mobile:"Mobile"},jt=({className:e="",devices:a=Object.values(Ht)})=>{const t=ta()||"Desktop",{__experimentalSetPreviewDeviceType:r}=(0,Ke.dispatch)("core/edit-post"),i=(0,l.useCallback)((e=>{r(Ht[e])}),[]),n=(e,a="h-4 w-4")=>{switch(e){case"Desktop":return(0,l.createElement)(Bt,{className:a,"aria-hidden":"true"});case"Tablet":return(0,l.createElement)(Lt,{className:a,"aria-hidden":"true"});case"Mobile":return(0,l.createElement)($t,{className:a,"aria-hidden":"true"});default:return null}};return(0,l.createElement)(pt,{as:"div",className:`wcbMyResponsiveToggle relative inline-block text-left ${e}`},(0,l.createElement)(pt.Button,{className:"wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",title:t},n(t),(0,l.createElement)(Ft,{className:"w-2.5 h-2.5 ml-1","aria-hidden":"true"})),(0,l.createElement)(Dt,{as:l.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},(0,l.createElement)(pt.Items,{className:"wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"},(0,l.createElement)("div",{className:"p-1 space-y-0.5"},a.map(((e,a)=>(0,l.createElement)(pt.Item,{key:a+e},(({active:a})=>{const r=a||e===t;return(0,l.createElement)("button",{className:(r?"bg-sky-50 text-sky-600":"text-slate-800")+" group flex w-full items-center justify-center rounded-md py-1.5",onClick:a=>{i(e)},title:e},n(e))}))))))))},Gt=({children:e,className:a="mb-2",help:t,hasResponsive:r,devices:i})=>(0,l.createElement)("div",{className:`components-base-control__label font-medium uppercase text-[11px] ${a}`},(0,l.createElement)("div",{className:"wb-control-label flex items-center"},(0,l.createElement)("div",{className:"wb-base-control__label"},e),(0,l.createElement)("div",{className:"wb-base-control__responsive ml-1.5"},r&&(0,l.createElement)(jt,{devices:i}))),!!t&&(0,l.createElement)("div",{className:"wb-base-help text-xs text-slate-500"},(0,l.createElement)("p",{className:"components-base-control__help"},t))),zt={Desktop:void 0},Vt=({className:e="space-y-3",zIndexControl:a=zt,setAttrs__zIndex:t})=>{const r=ta()||"Desktop",i=void 0!==a[r]?a[r]:void 0!==a.Tablet?a.Tablet:a.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.RangeControl,{help:(0,n.__)("Above setting will only take effect once you are on the live page, and not while you're editing.","boostify-blocks"),value:void 0,label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("Z-Index","boostify-blocks")),allowReset:!0,max:1e3,min:-100,initialPosition:i,onChange:e=>{t({...a,[r]:e})}}))},Wt=({label:e="My select",hasResponsive:a,labelClass:t="flex-1",devices:r,...i})=>(0,l.createElement)("div",{className:"wcb-MySelect w-full flex justify-between items-center"},(0,l.createElement)(Gt,{className:t,hasResponsive:a,devices:r},e),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)(g.SelectControl,{hideLabelFromVision:!0,...i}))),Ut=[{label:"None",value:""},{label:"Bounce",value:"bounce"},{label:"Flash",value:"flash"},{label:"Pulse",value:"pulse"},{label:"RubberBand",value:"rubberBand"},{label:"ShakeX",value:"shakeX"},{label:"ShakeY",value:"shakeY"},{label:"HeadShake",value:"headShake"},{label:"Swing",value:"swing"},{label:"Tada",value:"tada"},{label:"Wobble",value:"wobble"},{label:"Jello",value:"jello"},{label:"HeartBeat",value:"heartBeat"},{label:"BackInDown",value:"backInDown"},{label:"BackInLeft",value:"backInLeft"},{label:"BackInRight",value:"backInRight"},{label:"BackInUp",value:"backInUp"},{label:"BounceIn",value:"bounceIn"},{label:"BounceInDown",value:"bounceInDown"},{label:"BounceInLeft",value:"bounceInLeft"},{label:"BounceInRight",value:"bounceInRight"},{label:"BounceInUp",value:"bounceInUp"},{label:"FadeIn",value:"fadeIn"},{label:"FadeInDown",value:"fadeInDown"},{label:"FadeInDownBig",value:"fadeInDownBig"},{label:"FadeInLeft",value:"fadeInLeft"},{label:"FadeInLeftBig",value:"fadeInLeftBig"},{label:"FadeInRight",value:"fadeInRight"},{label:"FadeInRightBig",value:"fadeInRightBig"},{label:"FadeInUp",value:"fadeInUp"},{label:"FadeInUpBig",value:"fadeInUpBig"},{label:"FadeInTopLeft",value:"fadeInTopLeft"},{label:"FadeInTopRight",value:"fadeInTopRight"},{label:"FadeInBottomLeft",value:"fadeInBottomLeft"},{label:"FadeInBottomRight",value:"fadeInBottomRight"},{label:"Flip",value:"flip"},{label:"FlipInX",value:"flipInX"},{label:"FlipInY",value:"flipInY"},{label:"LightSpeedInRight",value:"lightSpeedInRight"},{label:"LightSpeedInLeft",value:"lightSpeedInLeft"},{label:"RotateIn",value:"rotateIn"},{label:"RotateInDownLeft",value:"rotateInDownLeft"},{label:"RotateInDownRight",value:"rotateInDownRight"},{label:"RotateInUpLeft",value:"rotateInUpLeft"},{label:"RotateInUpRight",value:"rotateInUpRight"},{label:"Hinge",value:"hinge"},{label:"JackInTheBox",value:"jackInTheBox"},{label:"RollIn",value:"rollIn"},{label:"ZoomIn",value:"zoomIn"},{label:"ZoomInDown",value:"zoomInDown"},{label:"ZoomInLeft",value:"zoomInLeft"},{label:"ZoomInRight",value:"zoomInRight"},{label:"ZoomInUp",value:"zoomInUp"},{label:"SlideInDown",value:"slideInDown"},{label:"SlideInLeft",value:"slideInLeft"},{label:"SlideInRight",value:"slideInRight"},{label:"SlideInUp",value:"slideInUp"}],qt=({onChange:e,data:a})=>(console.log(22,"-----MyMyMotionEffectData-----",{data:a}),(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(Wt,{label:"Animation name",options:Ut,hasResponsive:!1,onChange:t=>e({...a,entranceAnimation:t}),value:a.entranceAnimation}),(0,l.createElement)(Wt,{label:"Animation duration",options:[{label:"Slow (2s)",value:"slow"},{label:"Slower (3s)",value:"slower"},{label:"Fast (800ms)",value:"fast"},{label:"Faster (500ms)",value:"faster"}],hasResponsive:!1,onChange:t=>e({...a,animationDuration:t}),value:a.animationDuration}),(0,l.createElement)(g.__experimentalNumberControl,{isShiftStepEnabled:!0,shiftStep:1e3,step:100,__unstableInputWidth:"60px",label:(0,n.__)("Animation delay (ms)"),labelPosition:"edge",min:0,value:a.animationDelay,onChange:t=>e({...a,animationDelay:Number(t||0)||0})}),(0,l.createElement)(Wt,{label:"Animation repeat",options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"infinite",value:"infinite"}],hasResponsive:!1,onChange:t=>e({...a,repeat:t}),value:a.repeat}))),Kt=({handleTogglePanel:e,tabAdvancesIsPanelOpen:a,advance_responsiveCondition:t,advance_zIndex:r,advance_motionEffect:i,setAttributes:o,children:s})=>(0,l.createElement)(l.Fragment,null,i?(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","MyMyMotionEffectControl"),initialOpen:"MyMyMotionEffectControl"===a,opened:"MyMyMotionEffectControl"===a||void 0,title:(0,n.__)("Motion Effect","boostify-blocks")},(0,l.createElement)(qt,{data:i,onChange:e=>o({advance_motionEffect:e})})):null,(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","Responsive Conditions"),initialOpen:"Responsive Conditions"===a,opened:"Responsive Conditions"===a||void 0,title:(0,n.__)("Responsive Conditions","boostify-blocks")},(0,l.createElement)(aa,{responsiveConditionControl:t,setAttrs__responsiveCondition:e=>o({advance_responsiveCondition:e})})),(0,l.createElement)(g.PanelBody,{onToggle:()=>e("Advances","Z-Index"),initialOpen:"Z-Index"===a,opened:"Z-Index"===a||void 0,title:(0,n.__)("Z-Index","boostify-blocks")},(0,l.createElement)(Vt,{zIndexControl:r,setAttrs__zIndex:e=>o({advance_zIndex:e})})),s||null);let Jt=(0,l.createContext)(null);function Zt(){let e=(0,l.useContext)(Jt);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,Zt),e}return e}function Qt(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=va((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),r=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(Jt.Provider,{value:r},e.children)}),[a])]}let Yt=ga((function(e,a){let t=Ta(),{id:l=`headlessui-label-${t}`,passive:r=!1,...i}=e,n=Zt(),o=Ea(a);wa((()=>n.register(l)),[l,n.register]);let s={ref:o,...n.props,id:l};return r&&("onClick"in s&&(delete s.htmlFor,delete s.onClick),"onClick"in i&&delete i.onClick),sa({ourProps:s,theirProps:i,slot:n.slot||{},defaultTag:"label",name:n.name||"Label"})})),Xt=Object.assign(Yt,{}),el=(0,l.createContext)(null);function al(){let e=(0,l.useContext)(el);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,al),e}return e}function tl(){let[e,a]=(0,l.useState)([]);return[e.length>0?e.join(" "):void 0,(0,l.useMemo)((()=>function(e){let t=va((e=>(a((a=>[...a,e])),()=>a((a=>{let t=a.slice(),l=t.indexOf(e);return-1!==l&&t.splice(l,1),t}))))),r=(0,l.useMemo)((()=>({register:t,slot:e.slot,name:e.name,props:e.props})),[t,e.slot,e.name,e.props]);return l.createElement(el.Provider,{value:r},e.children)}),[a])]}let ll=ga((function(e,a){let t=Ta(),{id:l=`headlessui-description-${t}`,...r}=e,i=al(),n=Ea(a);return wa((()=>i.register(l)),[l,i.register]),sa({ourProps:{ref:n,...i.props,id:l},theirProps:r,slot:i.slot||{},defaultTag:"p",name:i.name||"Description"})})),rl=Object.assign(ll,{});var il=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(il||{});let nl=ga((function(e,a){let{features:t=1,...l}=e;return sa({ourProps:{ref:a,"aria-hidden":!(2&~t)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~t)&&!!(2&~t)&&{display:"none"}}},theirProps:l,slot:{},defaultTag:"div",name:"Hidden"})}));function ol(e={},a=null,t=[]){for(let[l,r]of Object.entries(e))cl(t,sl(a,l),r);return t}function sl(e,a){return e?e+"["+a+"]":a}function cl(e,a,t){if(Array.isArray(t))for(let[l,r]of t.entries())cl(e,sl(a,l.toString()),r);else t instanceof Date?e.push([a,t.toISOString()]):"boolean"==typeof t?e.push([a,t?"1":"0"]):"string"==typeof t?e.push([a,t]):"number"==typeof t?e.push([a,`${t}`]):null==t?e.push([a,""]):ol(t,a,e)}var ul=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(ul||{});let gl={0(e,a){let t=[...e.options,{id:a.id,element:a.element,propsRef:a.propsRef}];return{...e,options:Ga(t,(e=>e.element.current))}},1(e,a){let t=e.options.slice(),l=e.options.findIndex((e=>e.id===a.id));return-1===l?e:(t.splice(l,1),{...e,options:t})}},fl=(0,l.createContext)(null);function dl(e){let a=(0,l.useContext)(fl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,dl),a}return a}fl.displayName="RadioGroupDataContext";let bl=(0,l.createContext)(null);function hl(e){let a=(0,l.useContext)(bl);if(null===a){let a=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,hl),a}return a}function pl(e,a){return la(a.type,gl,e,a)}bl.displayName="RadioGroupActionsContext";var ml=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(ml||{});let kl=ga((function(e,a){let t=Ta(),{id:r=`headlessui-radiogroup-${t}`,value:i,defaultValue:n,name:o,onChange:s,by:c=(e,a)=>e===a,disabled:u=!1,...g}=e,f=va("string"==typeof c?(e,a)=>{let t=c;return(null==e?void 0:e[t])===(null==a?void 0:a[t])}:c),[d,b]=(0,l.useReducer)(pl,{options:[]}),h=d.options,[p,m]=Qt(),[k,w]=tl(),y=(0,l.useRef)(null),v=Ea(y,a),[_,C]=function(e,a,t){let[r,i]=(0,l.useState)(t),n=void 0!==e,o=(0,l.useRef)(n),s=(0,l.useRef)(!1),c=(0,l.useRef)(!1);return!n||o.current||s.current?!n&&o.current&&!c.current&&(c.current=!0,o.current=n,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,o.current=n,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[n?e:r,va((e=>(n||i(e),null==a?void 0:a(e))))]}(i,s,n),E=(0,l.useMemo)((()=>h.find((e=>!e.propsRef.current.disabled))),[h]),S=(0,l.useMemo)((()=>h.some((e=>f(e.propsRef.current.value,_)))),[h,_]),x=va((e=>{var a;if(u||f(e,_))return!1;let t=null==(a=h.find((a=>f(a.propsRef.current.value,e))))?void 0:a.propsRef.current;return!(null!=t&&t.disabled||(null==C||C(e),0))}));Ua({container:y.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let T=va((e=>{let a=y.current;if(!a)return;let t=Ma(a),l=h.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case Ia.Enter:!function(e){var a;let t=null!=(a=null==e?void 0:e.form)?a:e.closest("form");if(t)for(let e of t.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type)return void e.click()}(e.currentTarget);break;case Ia.ArrowLeft:case Ia.ArrowUp:if(e.preventDefault(),e.stopPropagation(),Va(l,Pa.Previous|Pa.WrapAround)===Da.Success){let e=h.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&x(e.propsRef.current.value)}break;case Ia.ArrowRight:case Ia.ArrowDown:if(e.preventDefault(),e.stopPropagation(),Va(l,Pa.Next|Pa.WrapAround)===Da.Success){let e=h.find((e=>e.element.current===(null==t?void 0:t.activeElement)));e&&x(e.propsRef.current.value)}break;case Ia.Space:{e.preventDefault(),e.stopPropagation();let a=h.find((e=>e.element.current===(null==t?void 0:t.activeElement)));a&&x(a.propsRef.current.value)}}})),I=va((e=>(b({type:0,...e}),()=>b({type:1,id:e.id})))),N=(0,l.useMemo)((()=>({value:_,firstOption:E,containsCheckedOption:S,disabled:u,compare:f,...d})),[_,E,S,u,f,d]),R=(0,l.useMemo)((()=>({registerOption:I,change:x})),[I,x]),M={ref:v,id:r,role:"radiogroup","aria-labelledby":p,"aria-describedby":k,onKeyDown:T},A=(0,l.useMemo)((()=>({value:_})),[_]),O=(0,l.useRef)(null),P=ha();return(0,l.useEffect)((()=>{O.current&&void 0!==n&&P.addEventListener(O.current,"reset",(()=>{x(n)}))}),[O,x]),l.createElement(w,{name:"RadioGroup.Description"},l.createElement(m,{name:"RadioGroup.Label"},l.createElement(bl.Provider,{value:R},l.createElement(fl.Provider,{value:N},null!=o&&null!=_&&ol({[o]:_}).map((([e,a],t)=>l.createElement(nl,{features:il.Hidden,ref:0===t?e=>{var a;O.current=null!=(a=null==e?void 0:e.closest("form"))?a:null}:void 0,...fa({key:e,as:"input",type:"radio",checked:null!=a,hidden:!0,readOnly:!0,name:e,value:a})}))),sa({ourProps:M,theirProps:g,slot:A,defaultTag:"div",name:"RadioGroup"})))))})),wl=ga((function(e,a){var t;let r=Ta(),{id:i=`headlessui-radiogroup-option-${r}`,value:n,disabled:o=!1,...s}=e,c=(0,l.useRef)(null),u=Ea(c,a),[g,f]=Qt(),[d,b]=tl(),{addFlag:h,removeFlag:p,hasFlag:m}=vt(1),k=ya({value:n,disabled:o}),w=dl("RadioGroup.Option"),y=hl("RadioGroup.Option");wa((()=>y.registerOption({id:i,element:c,propsRef:k})),[i,y,c,e]);let v=va((e=>{var a;if(Ra(e.currentTarget))return e.preventDefault();y.change(n)&&(h(2),null==(a=c.current)||a.focus())})),_=va((e=>{if(Ra(e.currentTarget))return e.preventDefault();h(2)})),C=va((()=>p(2))),E=(null==(t=w.firstOption)?void 0:t.id)===i,S=w.disabled||o,x=w.compare(w.value,n),T={ref:u,id:i,role:"radio","aria-checked":x?"true":"false","aria-labelledby":g,"aria-describedby":d,"aria-disabled":!!S||void 0,tabIndex:S?-1:x||!w.containsCheckedOption&&E?0:-1,onClick:S?void 0:v,onFocus:S?void 0:_,onBlur:S?void 0:C},I=(0,l.useMemo)((()=>({checked:x,disabled:S,active:m(2)})),[x,S,m]);return l.createElement(b,{name:"RadioGroup.Description"},l.createElement(f,{name:"RadioGroup.Label"},sa({ourProps:T,theirProps:s,slot:I,defaultTag:"div",name:"RadioGroup.Option"})))})),yl=Object.assign(kl,{Option:wl,Label:Xt,Description:rl});const vl=[{name:"left",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"center",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"right",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'}],_l=function({onChange:e=()=>{},value:a,className:t="",plans:r=vl,label:i=(0,n.__)("Alignment","boostify-blocks"),hasResponsive:o=!0,isWrap:s=!1,labelClassName:c,contentClassName:u="mt-3"}){const[f,d]=(0,l.useState)(a||r[0].name);return(0,l.useEffect)((()=>{f!==a&&d(a||"")}),[a]),(0,l.createElement)(yl,{className:t,value:f,onChange:a=>{d(a),e(a)}},(0,l.createElement)(yl.Label,{className:""},(0,l.createElement)(Gt,{className:c,hasResponsive:o},i)),(0,l.createElement)("div",{className:`${u} relative flex gap-1 ${s?"flex-wrap":""}`},r.map((e=>(0,l.createElement)(yl.Option,{key:e.name,value:e.name,as:l.Fragment},(({checked:a})=>(0,l.createElement)("div",{className:"relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg "+(a?"bg-sky-50 border-sky-400 text-sky-500":"text-neutral-500 border-slate-300 hover:border-slate-500")},(0,l.createElement)(g.Tooltip,{position:"top center",delay:400,text:e.name.charAt(0).toUpperCase()+e.name.slice(1)},(0,l.createElement)("div",{className:"absolute inset-0 z-[1]"})),(0,l.createElement)("div",{className:"text-xs leading-5",dangerouslySetInnerHTML:{__html:e.icon}}))))))))},Cl=({onChange:e,textAlignment:a,className:t,hasResponsive:r,label:i=(0,n.__)("Alignment","boostify-blocks")})=>(0,l.createElement)(_l,{className:t,onChange:e,value:a||"",hasResponsive:r,label:i}),El={textAlignment:{Desktop:"left"},isShowLabel:!0,formStyle:"simple",confirmationType:"message",successMessageText:"The form has been submitted successfully!",errorMessageText:"There has been some error while submitting the form. Please verify all form fields again.",successRedirectUrl:"#"},Sl=({panelData:e=El,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const o=ta()||"Desktop",{textAlignment:s,isShowLabel:c,formStyle:u,confirmationType:f,errorMessageText:d,successMessageText:b,successRedirectUrl:h}=e,{currentDeviceValue:p}=Fe(s,o);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("General","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(g.ToggleControl,{checked:c,label:(0,n.__)("Display label","boostify-blocks"),onChange:t=>{a({...e,isShowLabel:t})}}),(0,l.createElement)(_l,{label:"Style",value:u,plans:[{name:"simple",icon:"Simple"},{name:"underline",icon:"Underline"},{name:"solid",icon:"Solid"}],onChange:t=>{a({...e,formStyle:t})},hasResponsive:!1}),(0,l.createElement)(Cl,{textAlignment:p,onChange:t=>{a({...e,textAlignment:{...s,[o]:t}})},hasResponsive:!1}),(0,l.createElement)(_l,{label:"Confirmation Type",value:f,plans:[{name:"message",icon:"Message"},{name:"url-text",icon:"Url text"}],onChange:t=>{a({...e,confirmationType:t})},hasResponsive:!1}),"message"===f&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.TextareaControl,{label:(0,n.__)("SUCCESS MESSAGE TEXT","boostify-blocks"),help:(0,n.__)("Enter a message you want to display after successfull form submission","boostify-blocks"),value:b,onChange:t=>{a({...e,successMessageText:t})}}),(0,l.createElement)(g.TextareaControl,{label:(0,n.__)("ERROR MESSAGE TEXT","boostify-blocks"),help:(0,n.__)("Enter a message you want to display after unsuccessfull form submission","boostify-blocks"),value:d,onChange:t=>{a({...e,errorMessageText:t})}})),"url-text"===f&&(0,l.createElement)(g.__experimentalInputControl,{label:(0,n.__)("SUCCESS REDIRECT URL","boostify-blocks"),value:h,onChange:t=>{a({...e,successRedirectUrl:t})}})))},xl={textAlignment:{Desktop:"start"},position:{Desktop:"bottom"}},Tl=({panelData:e=xl,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const o=ta()||"Desktop",{textAlignment:s,position:c={Desktop:"bottom"}}=e,{currentDeviceValue:u}=Fe(c,o),{currentDeviceValue:f}=Fe(s,o);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Submit button","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(_l,{label:"Position",value:u,plans:[{name:"bottom",icon:"Bottom"},{name:"top",icon:"Top"},{name:"left",icon:"Left"},{name:"right",icon:"Right"}],onChange:t=>{a({...e,position:{...c||{},[o]:t}})},hasResponsive:!0}),(0,l.createElement)(_l,{label:"ALIGNMENT",value:f,plans:[{name:"start",icon:"Start"},{name:"center",icon:"Center"},{name:"end",icon:"End"}],onChange:t=>{a({...e,textAlignment:{...s,[o]:t}})},hasResponsive:!0})))},Il={main:{To:{email:""},BCC:{email:""},CC:{email:""}},subject:"Wootify subject"},Nl=({panelData:e=Il,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const{subject:o,main:s}=e,c=[{name:"To",title:(0,n.__)("To","boostify-blocks")},{name:"CC",title:(0,n.__)("CC","boostify-blocks")},{name:"BCC",title:(0,n.__)("BCC","boostify-blocks")}];return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Action","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(g.Notice,{status:"warning",className:"m-0",isDismissible:!1},(0,l.createElement)("strong",null,(0,n.__)("Note: ","boostify-blocks")),(0,n.__)(" It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.","boostify-blocks")),(0,l.createElement)(g.TabPanel,{className:"wcb-bodyControls__panel ",activeClass:"active-tab",initialTabName:"To",tabs:c},(t=>(0,l.createElement)(g.__experimentalInputControl,{label:(0,n.__)("Email","boostify-blocks"),type:"email",placeholder:(0,n.__)("email@example.com","boostify-blocks"),value:s[t.name].email,onChange:l=>{a({...e,main:{...s,[t.name]:{...s[t.name],email:l}}})}}))),(0,l.createElement)(g.__experimentalInputControl,{label:(0,n.__)("SUBJECT","boostify-blocks"),value:o,onChange:t=>{a({...e,subject:t})}})))},Rl={enableReCaptcha:!1,version:"v2"},Ml=({panelData:e=Rl,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{ta();const{enableReCaptcha:o,version:s}=e;return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Google reCAPTCHA","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(g.ToggleControl,{checked:o,label:(0,n.__)("Enable reCAPTCHA","boostify-blocks"),onChange:t=>{a({...e,enableReCaptcha:t})}}),o&&(0,l.createElement)(l.Fragment,null,(0,l.createElement)(_l,{label:"Select Version",value:s,plans:[{name:"v2",icon:"V2"},{name:"v3",icon:"V3"}],onChange:t=>{a({...e,version:t})},hasResponsive:!1}),(0,l.createElement)(g.Notice,{status:"warning",className:"m-0",isDismissible:!1},(0,l.createElement)("strong",null,(0,n.__)("P.S. ","boostify-blocks")),(0,n.__)(" Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page.","boostify-blocks")))))},Al=({className:e="",label:a=(0,n.__)("Color","boostify-blocks"),color:t="#000",onChange:r,showDefaultPalette:i=!0,showCustomColorOnDefaultPallete:s=!0})=>{const[c,u]=(0,l.useState)("");(0,l.useEffect)((()=>{t&&u(t)}),[t]);const f=(0,o.__experimentalUseMultipleOriginColorsAndGradients)(),d=(0,l.useMemo)((()=>{const e=window.boostify_blocks_global_variables?.customColorPallete;return e&&e.length&&s?[...f?.colors||[],{name:"Customs",colors:window.boostify_blocks_global_variables.customColorPallete||[]}]:f?.colors||[]}),[f,s]);return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(g.Dropdown,{className:`w-full ${e}`,contentClassName:"my-popover-content-classname",popoverProps:{placement:"left-start"},renderToggle:({isOpen:e,onToggle:t})=>(0,l.createElement)("div",{className:"w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",onClick:t},(0,l.createElement)("div",{className:"flex items-center gap-0.5"},(0,l.createElement)("div",{className:"w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer "+(c?"":"bg-transparent"),style:{backgroundColor:c,backgroundImage:c?void 0:"linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 0 5px, 5px -5px, -5px 0"}})),a&&(0,l.createElement)("div",null,(0,l.createElement)("span",null,a))),renderContent:()=>(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"bg-white "},(0,l.createElement)(g.ColorPalette,{className:"block-editor-color-gradient-control__panel p-4",colors:i?d:void 0,value:c,enableAlpha:!0,onChange:e=>{(e=>{u(e),r(e)})(e||"")},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})))}))};var Ol;let Pl=null!=(Ol=l.startTransition)?Ol:function(e){e()};var Dl=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Dl||{}),Bl=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Bl||{});let Ll={0:e=>({...e,disclosureState:la(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,a)=>e.buttonId===a.buttonId?e:{...e,buttonId:a.buttonId},3:(e,a)=>e.panelId===a.panelId?e:{...e,panelId:a.panelId}},$l=(0,l.createContext)(null);function Fl(e){let a=(0,l.useContext)($l);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Fl),a}return a}$l.displayName="DisclosureContext";let Hl=(0,l.createContext)(null);function jl(e){let a=(0,l.useContext)(Hl);if(null===a){let a=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,jl),a}return a}Hl.displayName="DisclosureAPIContext";let Gl=(0,l.createContext)(null);function zl(e,a){return la(a.type,Ll,e,a)}Gl.displayName="DisclosurePanelContext";let Vl=l.Fragment,Wl=na.RenderStrategy|na.Static,Ul=ga((function(e,a){let{defaultOpen:t=!1,...r}=e,i=(0,l.useRef)(null),n=Ea(a,Ca((e=>{i.current=e}),void 0===e.as||e.as===l.Fragment)),o=(0,l.useRef)(null),s=(0,l.useRef)(null),c=(0,l.useReducer)(zl,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:s,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:g},f]=c,d=va((e=>{f({type:1});let a=Ma(i);if(!a||!g)return;let t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:a.getElementById(g):a.getElementById(g);null==t||t.focus()})),b=(0,l.useMemo)((()=>({close:d})),[d]),h=(0,l.useMemo)((()=>({open:0===u,close:d})),[u,d]),p={ref:n};return l.createElement($l.Provider,{value:c},l.createElement(Hl.Provider,{value:b},l.createElement(Za,{value:la(u,{0:Ka.Open,1:Ka.Closed})},sa({ourProps:p,theirProps:r,slot:h,defaultTag:Vl,name:"Disclosure"}))))})),ql=ga((function(e,a){let t=Ta(),{id:r=`headlessui-disclosure-button-${t}`,...i}=e,[n,o]=Fl("Disclosure.Button"),s=(0,l.useContext)(Gl),c=null!==s&&s===n.panelId,u=(0,l.useRef)(null),g=Ea(u,a,c?null:n.buttonRef);(0,l.useEffect)((()=>{if(!c)return o({type:2,buttonId:r}),()=>{o({type:2,buttonId:null})}}),[r,o,c]);let f=va((e=>{var a;if(c){if(1===n.disclosureState)return;switch(e.key){case Ia.Space:case Ia.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(a=n.buttonRef.current)||a.focus()}}else switch(e.key){case Ia.Space:case Ia.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}})),d=va((e=>{e.key===Ia.Space&&e.preventDefault()})),b=va((a=>{var t;Ra(a.currentTarget)||e.disabled||(c?(o({type:0}),null==(t=n.buttonRef.current)||t.focus()):o({type:0}))})),h=(0,l.useMemo)((()=>({open:0===n.disclosureState})),[n]),p=Ya(e,u);return sa({ourProps:c?{ref:g,type:p,onKeyDown:f,onClick:b}:{ref:g,id:r,type:p,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:f,onKeyUp:d,onClick:b},theirProps:i,slot:h,defaultTag:"button",name:"Disclosure.Button"})})),Kl=ga((function(e,a){let t=Ta(),{id:r=`headlessui-disclosure-panel-${t}`,...i}=e,[n,o]=Fl("Disclosure.Panel"),{close:s}=jl("Disclosure.Panel"),c=Ea(a,n.panelRef,(e=>{Pl((()=>o({type:e?4:5})))}));(0,l.useEffect)((()=>(o({type:3,panelId:r}),()=>{o({type:3,panelId:null})})),[r,o]);let u=Ja(),g=null!==u?(u&Ka.Open)===Ka.Open:0===n.disclosureState,f=(0,l.useMemo)((()=>({open:0===n.disclosureState,close:s})),[n,s]),d={ref:c,id:r};return l.createElement(Gl.Provider,{value:n.panelId},sa({ourProps:d,theirProps:i,slot:f,defaultTag:"div",features:Wl,visible:g,name:"Disclosure.Panel"}))})),Jl=Object.assign(Ul,{Button:ql,Panel:Kl});var Zl=t(1070);const Ql=({className:e="space-y-3.5",label:a="Customize",children:t,defaultOpen:r,as:i,hasResponsive:o=!1,isDisableButton:s=!1})=>(0,l.createElement)(Jl,{defaultOpen:r,as:i},(({open:r})=>(0,l.createElement)("div",{className:r?"ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4":""},(0,l.createElement)(Jl.Button,{className:"flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 "+(r?"rounded-b-none":""),disabled:s},(0,l.createElement)(Gt,{hasResponsive:o,className:"MyDisclosure__labelControl"},(0,n.__)(a,"boostify-blocks")),r?(0,l.createElement)(Zl,{className:"w-5 h-5 text-purple-900"}):(0,l.createElement)("svg",{className:"w-4 h-4 text-purple-900",viewBox:"0 0 24 24",fill:"none"},(0,l.createElement)("path",{d:"M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,l.createElement)("path",{d:"M3 22H21",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}))),(0,l.createElement)(Jl.Panel,{className:"px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"},(0,l.createElement)("div",{className:e},t))))),Yl=[{key:"default",name:"Default",style:{fontWeight:void 0,fontStyle:void 0}},{key:"thin",name:"Thin",style:{fontWeight:"100",fontStyle:"normal"}},{key:"ExtraLight",name:"Extra Light",style:{fontWeight:"200",fontStyle:"normal"}},{key:"light",name:"Light",style:{fontWeight:"300",fontStyle:"normal"}},{key:"Regular",name:"Regular",style:{fontWeight:"400",fontStyle:"normal"}},{key:"Medium",name:"Medium",style:{fontWeight:"500",fontStyle:"normal"}},{key:"SemiBold",name:"Semi Bold",style:{fontWeight:"600",fontStyle:"normal"}},{key:"Bold",name:"Bold",style:{fontWeight:"700",fontStyle:"normal"}},{key:"ExtraBold",name:"Extra Bold",style:{fontWeight:"800",fontStyle:"normal"}},{key:"Black",name:"Black",style:{fontWeight:"900",fontStyle:"normal"}},{key:"thin_italic",name:"Thin Italic",style:{fontWeight:"100",fontStyle:"italic"}},{key:"ExtraLight_italic",name:"Extra Light Italic",style:{fontWeight:"200",fontStyle:"italic"}},{key:"light_italic",name:"Light Italic",style:{fontWeight:"300",fontStyle:"italic"}},{key:"Regular_italic",name:"Regular Italic",style:{fontWeight:"400",fontStyle:"italic"}},{key:"Medium_italic",name:"Medium Italic",style:{fontWeight:"500",fontStyle:"italic"}},{key:"SemiBold_italic",name:"Semi Bold Italic",style:{fontWeight:"600",fontStyle:"italic"}},{key:"Bold_italic",name:"Bold Italic",style:{fontWeight:"700",fontStyle:"italic"}},{key:"ExtraBold_italic",name:"Extra Bold Italic",style:{fontWeight:"800",fontStyle:"italic"}},{key:"Black_italic",name:"Black Italic",style:{fontWeight:"900",fontStyle:"italic"}}],Xl=({onChange:e,value:a})=>(0,l.createElement)(g.CustomSelectControl,{__nextUnconstrainedWidth:!0,label:(0,n.__)("Appearance","boostify-blocks"),options:Yl,onChange:e,value:a}),er={fontSizes:{Desktop:""},appearance:Yl[0],textDecoration:void 0,textTransform:void 0,lineHeight:{Desktop:void 0},letterSpacing:{Desktop:void 0},fontFamily:void 0},ar=[{name:"Tiny",slug:"tiny",size:"8px"},{name:"Small",slug:"small",size:"12px"},{name:"Normal",slug:"normal",size:"16px"},{name:"Big",slug:"big",size:"26px"},{name:"Bigger",slug:"bigger",size:"30px"},{name:"Huge",slug:"huge",size:"36px"}],tr=window.wp.element,lr=window.wp.primitives,rr=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M7 18v1h10v-1H7zm5-2c1.5 0 2.6-.4 3.4-1.2.8-.8 1.1-2 1.1-3.5V5H15v5.8c0 1.2-.2 2.1-.6 2.8-.4.7-1.2 1-2.4 1s-2-.3-2.4-1c-.4-.7-.6-1.6-.6-2.8V5H7.5v6.2c0 1.5.4 2.7 1.1 3.5.8.9 1.9 1.3 3.4 1.3z"})),ir=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M9.1 9v-.5c0-.6.2-1.1.7-1.4.5-.3 1.2-.5 2-.5.7 0 1.4.1 2.1.3.7.2 1.4.5 2.1.9l.2-1.9c-.6-.3-1.2-.5-1.9-.7-.8-.1-1.6-.2-2.4-.2-1.5 0-2.7.3-3.6 1-.8.7-1.2 1.5-1.2 2.6V9h2zM20 12H4v1h8.3c.3.1.6.2.8.3.5.2.9.5 1.1.8.3.3.4.7.4 1.2 0 .7-.2 1.1-.8 1.5-.5.3-1.2.5-2.1.5-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.5-2.2-.8L7 18.1c.5.2 1.2.4 2 .6.8.2 1.6.3 2.4.3 1.7 0 3-.3 3.9-1 .9-.7 1.3-1.6 1.3-2.8 0-.9-.2-1.7-.7-2.2H20v-1z"})),nr=[{name:(0,n.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,n.__)("Underline"),value:"underline",icon:rr},{name:(0,n.__)("Strikethrough"),value:"line-through",icon:ir}],or=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(g.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,n.__)("Decoration"),value:e,onChange:a},nr.map((e=>(0,l.createElement)(g.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name,title:e.name})))),sr=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"})),cr=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"})),ur=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"})),gr=[{name:(0,n.__)("None"),value:"none",icon:(0,l.createElement)("svg",{viewBox:"0 0 24 24",className:"w-6 h-6","aria-hidden":"true",focusable:"false"},(0,l.createElement)("path",{d:"M7 11.5h10V13H7z"}))},{name:(0,n.__)("Uppercase"),value:"uppercase",icon:sr},{name:(0,n.__)("Lowercase"),value:"lowercase",icon:cr},{name:(0,n.__)("Capitalize"),value:"capitalize",icon:ur}],fr=({value:e="none",onChange:a=()=>{},...t})=>(0,l.createElement)(g.__experimentalToggleGroupControl,{...t,__experimentalIsIconGroup:!0,label:(0,n.__)("Letter case"),value:e,onChange:a},gr.map((e=>(0,l.createElement)(g.__experimentalToggleGroupControlOptionIcon,{key:e.value,value:e.value,icon:e.icon,label:e.name})))),dr=JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}'),br=({onChange:e,options:a,value:t,label:r})=>{const[i,n]=(0,l.useState)(t||""),[o,s]=(0,l.useState)(a);return(0,l.useEffect)((()=>{n(t||"")}),[t]),(0,l.createElement)(g.ComboboxControl,{label:r,value:i,onChange:a=>{n(a||""),e(a||"")},options:o,onFilterValueChange:e=>s(a.filter((a=>a.label.toLowerCase().startsWith(e.toLowerCase()))))})},hr=({onChangeFontFamily:e,selectedFont:a})=>{const[t,r]=(0,l.useState)(a);(0,l.useEffect)((()=>{r(a)}),[a]);const i=[];Object.keys(dr).forEach((e=>{i.push({value:e,label:e})}));const o=[{value:"",label:"Default"},{value:"Arial",label:"Arial"},{value:"Helvetica",label:"Helvetica"},{value:"Times New Roman",label:"Times New Roman"},{value:"Georgia",label:"Georgia"},...i];return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Gt,null,(0,n.__)("Font Family","boostify-blocks")),(0,l.createElement)(br,{value:t||"",options:o,onChange:a=>{r(a||""),e(a||""),i.some((e=>e.value===a&&(Ge(a),!0))),Ge("")}}))},pr=({className:e="space-y-5",typographyControl:a=er,setAttrs__typography:t=()=>{},label:r="Typography",disclosureDefaultOpen:i})=>{const o=ta()||"Desktop",{fontSizes:s,appearance:c,textDecoration:u,textTransform:f,lineHeight:d,letterSpacing:b,fontFamily:h}=a,{currentDeviceValue:p}=Fe(s,o),{currentDeviceValue:m}=Fe(d,o),{currentDeviceValue:k}=Fe(b,o);return(0,l.createElement)(Ql,{defaultOpen:i,label:r},(0,l.createElement)("div",{className:e},(0,l.createElement)("div",null,(0,l.createElement)(hr,{selectedFont:h,onChangeFontFamily:e=>{t({...a,fontFamily:e})}})),(0,l.createElement)("div",{className:"relative"},(0,l.createElement)(Gt,{className:"flex absolute right-8 -top-0.5 z-10",hasResponsive:!0,children:""}),(0,l.createElement)(g.FontSizePicker,{__nextHasNoMarginBottom:!0,fontSizes:ar,value:p,fallbackFontSize:16,onChange:e=>{t({...a,fontSizes:{...s,[o]:e}})}})),(0,l.createElement)(Xl,{onChange:({selectedItem:e})=>{return l=e,void t({...a,appearance:l||Yl[0]});var l},value:c}),(0,l.createElement)(or,{value:u,onChange:e=>{t({...a,textDecoration:e})}}),(0,l.createElement)(fr,{value:f,onChange:e=>{t({...a,textTransform:e})}}),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(Gt,{hasResponsive:!0,className:"flex-shrink-0",children:(0,n.__)("Line height","boostify-blocks")}),(0,l.createElement)(g.__experimentalNumberControl,{onChange:e=>{t({...a,lineHeight:{...d,[o]:e}})},value:m,step:.1,min:0,max:100,placeholder:(0,n.__)("1.5","boostify-blocks")})),(0,l.createElement)("div",{className:"flex justify-between space-x-3 items-center"},(0,l.createElement)(Gt,{hasResponsive:!0,className:"flex-shrink-0",children:(0,n.__)("Letter spacing","boostify-blocks")}),(0,l.createElement)(g.__experimentalUnitControl,{onChange:e=>{t({...a,letterSpacing:{...b,[o]:e}})},value:k,units:[{value:"px",label:"px",default:0},{value:"%",label:"%",default:0},{value:"em",label:"em",default:0}]}))))},mr={typography:{...er,appearance:{...er.appearance,style:{...er.appearance.style,fontWeight:500}}},textColor:"",textColorHover:""},kr=({panelData:e=mr,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const{textColor:o,textColorHover:s,typography:c}=e;return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Label","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(pr,{typographyControl:c,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(Ql,{defaultOpen:!0,label:"Color"},(0,l.createElement)(Al,{label:(0,n.__)("Color","boostify-blocks"),onChange:t=>{a({...e,textColor:t})},color:o}),(0,l.createElement)(Al,{label:(0,n.__)("Hover Color","boostify-blocks"),onChange:t=>{a({...e,textColorHover:t})},color:s}))))},wr={mainSettings:void 0,hoverColor:void 0,radius:{Desktop:"0",Tablet:"0",Mobile:"0"}},yr=({className:e="space-y-4",borderControl:a=wr,setAttrs__border:t})=>{const r=ta()||"Desktop",{mainSettings:i,hoverColor:s,radius:c}=a,u=c[r]||c.Tablet||c.Desktop;return(0,l.createElement)("div",{className:e},(0,l.createElement)(g.__experimentalBorderBoxControl,{label:(0,n.__)("Border"),onChange:e=>{t({...a,mainSettings:e})},value:i,colors:[],enableAlpha:!0,popoverOffset:40,popoverPlacement:"left-start",__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,size:"__unstable-large",className:"wcb-BorderBoxControl"}),(0,l.createElement)(Al,{label:(0,n.__)("Hover border color","boostify-blocks"),onChange:e=>{t({...a,hoverColor:e})},color:s}),(0,l.createElement)("div",{className:"MyBorderControl__BorderRadiusControl"},(0,l.createElement)(Gt,{className:"mb-2",hasResponsive:!0},(0,n.__)("Border radius","boostify-blocks")),(0,l.createElement)(o.__experimentalBorderRadiusControl,{values:u,onChange:e=>{(e=>{const l=c.Desktop===c.Tablet&&c.Desktop===c.Mobile;"Desktop"!==r||(void 0!==c.Tablet&&"0"!==c.Tablet||void 0!==c.Mobile&&"0"!==c.Mobile)&&!l?t({...a,radius:{...c,[r]:e}}):t({...a,radius:{Desktop:e,Tablet:e,Mobile:e}})})(e)},label:""})))},vr={typography:er,textColor:"",bgAndPlaceholder:{Active:{backgroundColor:"#fff",placeholderColor:""},Hover:{backgroundColor:"#fff",placeholderColor:""},Normal:{backgroundColor:"#fff",placeholderColor:""}},border:{...wr,mainSettings:{color:"#d1d5db",style:"solid",width:"1px"}},padding:{Desktop:{top:"0.5rem",left:"0.75rem",right:"0.75rem",bottom:"0.5rem"}}},_r={typography:er,textColor:"",bgAndPlaceholder:{Normal:{backgroundColor:"#f9fafb",placeholderColor:""},Hover:{backgroundColor:"#f9fafb",placeholderColor:""},Active:{backgroundColor:"#fff",placeholderColor:""}},border:{...wr,mainSettings:{color:"#f9fafb",style:"solid",width:"1px"}},padding:{Desktop:{top:"0.5rem",left:"0.75rem",right:"0.75rem",bottom:"0.5rem"}}},Cr={typography:er,textColor:"",bgAndPlaceholder:{Normal:{backgroundColor:"#fff",placeholderColor:""},Hover:{backgroundColor:"#fff",placeholderColor:""},Active:{backgroundColor:"#fff",placeholderColor:""}},border:{...wr,radius:{Desktop:{bottomLeft:"0",bottomRight:"0",topLeft:"0",topRight:"0"}},mainSettings:{bottom:{color:"#e5e7eb",style:"solid",width:"2px"},left:{color:"",style:"solid",width:"0"},right:{color:"",style:"solid",width:"0"},top:{color:"",style:"solid",width:"0"}}},padding:{Desktop:{top:"0.5rem",left:"0rem",right:"0rem",bottom:"0.5rem"}}},Er=Cr,Sr=({panelData:e=Er,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const{textColor:o,typography:s,bgAndPlaceholder:c,border:u,padding:f}=e,d=ta()||"Desktop",{currentDeviceValue:b}=Fe(f,d),h=[{name:"Normal",title:(0,n.__)("Normal","boostify-blocks")},{name:"Hover",title:(0,n.__)("Hover","boostify-blocks")},{name:"Active",title:(0,n.__)("Active","boostify-blocks")}];return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Input","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(g.TabPanel,{className:"wcb-bodyControls__panel ",activeClass:"active-tab",initialTabName:"Normal",tabs:h},(t=>(0,l.createElement)("div",{className:"space-y-3.5"},(0,l.createElement)(Al,{label:(0,n.__)("Placeholder color","boostify-blocks"),color:c[t.name].placeholderColor,onChange:l=>{a({...e,bgAndPlaceholder:{...c,[t.name]:{...c[t.name]||[],placeholderColor:l}}})}}),(0,l.createElement)(Al,{label:(0,n.__)("Background color","boostify-blocks"),color:c[t.name].backgroundColor,onChange:l=>{a({...e,bgAndPlaceholder:{...c,[t.name]:{...c[t.name]||[],backgroundColor:l}}})}})))),(0,l.createElement)("div",{className:"space-y-3.5"},(0,l.createElement)(Ql,{label:"Color, Border & Padding",className:"space-y-5"},(0,l.createElement)(Al,{label:(0,n.__)("Color","boostify-blocks"),color:o,onChange:t=>{a({...e,textColor:t})}}),(0,l.createElement)(yr,{borderControl:u,setAttrs__border:t=>a({...e,border:t})}),(0,l.createElement)(g.__experimentalBoxControl,{label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("Padding","boostify-blocks")),values:b,onChange:t=>{a({...e,padding:{...f,[d]:t}})}})),(0,l.createElement)(pr,{typographyControl:s,setAttrs__typography:t=>{a({...e,typography:t})}}))))},xr=({children:e,className:a="my-1"})=>(0,l.createElement)("p",{className:`components-form-token-field__help ${a}`},e),Tr={margin:{Desktop:{top:"",left:"",right:"",bottom:""}},padding:{Desktop:{top:"1rem",left:"1rem",right:"1rem",bottom:"1rem"}}},Ir=[{value:"px",label:"px",default:32,step:1},{value:"rem",label:"rem",default:2,step:.01},{value:"em",label:"em",default:2,step:.01},{value:"%",label:"%",default:50,step:.1}],Nr={px:{max:1e3,steps:1},"%":{max:100,steps:1},vw:{max:100,steps:1},vh:{max:100,steps:1},em:{max:50,steps:.1},rm:{max:50,steps:.1},rem:{max:50,steps:.1}},Rr=({value:e="10px",onChange:a,minCustomValue:t=0,units:r=Ir,className:i="",customUnitsValueSettings:n=Nr})=>{const o=(0,tr.useMemo)((()=>(0,g.__experimentalParseQuantityAndUnitFromRawValue)(e)),[e])[1]||r[0].value,s=parseFloat(null!=e?e:"10");return(0,l.createElement)("div",{className:`${i} flex items-center space-x-2.5`},(0,l.createElement)("div",{className:"flex-[1.5]"},(0,l.createElement)(g.RangeControl,{value:s,min:t,max:n[o].max,step:n[o].steps,withInputField:!1,onChange:e=>{const t=[e,o].join("");a(t)},className:"m-0"})),(0,l.createElement)("div",{className:"flex-1"},(0,l.createElement)(g.__experimentalUnitControl,{onChange:(e,...t)=>{a(e)},placeholder:`${parseInt(e||"")}`,value:e,units:r,min:t,hideLabelFromVision:!0})))},Mr=({className:e="",label:a=(0,n.__)("Margin bottom","boostify-blocks"),hasResponsive:t=!0,units:r,minCustomValue:i,value:o="1rem",onChange:s=()=>{},customUnitsValueSettings:c})=>(0,l.createElement)("div",{className:`MySpacingSizesControl ${e}`},(0,l.createElement)(Gt,{hasResponsive:t},a),(0,l.createElement)(Rr,{value:o,onChange:s,minCustomValue:i,units:r,customUnitsValueSettings:c})),Ar={colors:{Normal:{backgroundColor:""},Active:{backgroundColor:"#0284c7"}},border:{...wr,mainSettings:{color:"#d1d5db",style:"solid",width:"1px"},radius:{Desktop:{bottomLeft:"0.25rem",bottomRight:"0.25rem",topLeft:"0.25rem",topRight:"0.25rem"}}},checkboxRadioSize:{Desktop:"1rem"},toggleSize:{Desktop:1}},Or={colors:{Normal:{backgroundColor:"#e5e7eb"},Active:{backgroundColor:"#374151"}},border:{...wr,mainSettings:{color:"",style:"solid",width:"0px"},radius:{Desktop:{bottomLeft:"0.25rem",bottomRight:"0.25rem",topLeft:"0.25rem",topRight:"0.25rem"}}},checkboxRadioSize:{Desktop:"1rem"},toggleSize:{Desktop:1}},Pr=Ar,Dr=({panelData:e=Pr,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const{border:o,checkboxRadioSize:s,colors:c,toggleSize:u}=e,f=ta()||"Desktop",{currentDeviceValue:d}=Fe(s,f),{currentDeviceValue:b}=Fe(u,f),h=[{name:"Normal",title:(0,n.__)("Normal","boostify-blocks")},{name:"Active",title:(0,n.__)("Active","boostify-blocks")}];return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Checkbox/Toogle/Radio","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(Ql,{label:"Sizes",defaultOpen:!0,className:"space-y-5"},(0,l.createElement)(Mr,{value:d||"1rem",label:(0,n.__)("Checkbox/Radio size","boostify-blocks"),onChange:t=>{a({...e,checkboxRadioSize:{...s,[f]:t}})}}),(0,l.createElement)(g.RangeControl,{label:(0,n.__)("Toggle size","boostify-blocks"),value:b||1,step:.1,onChange:t=>a({...e,toggleSize:{...u,[f]:t}}),min:1,max:10})),(0,l.createElement)(Ql,{label:"Colors"},(0,l.createElement)(g.TabPanel,{className:"wcb-bodyControls__panel ",activeClass:"active-tab",initialTabName:"Normal",tabs:h},(t=>(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(Al,{label:(0,n.__)("Color","boostify-blocks"),color:c[t.name].backgroundColor,onChange:l=>{a({...e,colors:{...c,[t.name]:{...c[t.name],backgroundColor:l}}})}}))))),(0,l.createElement)(Ql,{label:"Border",className:"space-y-2.5"},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(yr,{borderControl:o,setAttrs__border:t=>a({...e,border:t})})),(0,l.createElement)(xr,null,(0,n.__)("Border radius will be applied to Radio & Toggle only when the layout for those blocks is set to Square.","boostify-blocks")))))},Br=[{name:"Normal",title:(0,n.__)("Normal","boostify-blocks")},{name:"Hover",title:(0,n.__)("Hover","boostify-blocks")}],Lr={Normal:{color:"",backgroundColor:""},Hover:{color:"",backgroundColor:""}},$r={Normal:{color:"#fff",backgroundColor:"#1346af"},Hover:{color:"#fff",backgroundColor:"#3a3a3a"}},Fr=({className:e="",controlData:a=Lr,setAttrs__control:t})=>(0,l.createElement)(g.TabPanel,{className:`wcb-bodyControls__panel ${e}`,activeClass:"active-tab",initialTabName:"Normal",tabs:Br},(e=>{const r=e.name,{color:i,backgroundColor:o}=a[r];return(0,l.createElement)("div",{className:"space-y-3.5"},void 0!==typeof i?(0,l.createElement)(Al,{label:(0,n.__)("Color","boostify-blocks"),onChange:e=>{return l=r,i=e,void t({...a,[l]:{...a[l],color:i}});var l,i},color:i}):null,void 0!==typeof o?(0,l.createElement)(Al,{label:(0,n.__)("Background color","boostify-blocks"),onChange:e=>{return l=r,i=e,void t({...a,[l]:{...a[l],backgroundColor:i}});var l,i},color:o}):null)})),Hr={colorAndBackgroundColor:$r,padding:{Desktop:{top:"1rem",left:"2rem",right:"2rem",bottom:"1rem"}},margin:void 0,border:wr,typography:er},jr=({panelData:e=Hr,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const o=ta()||"Desktop",{margin:s={Desktop:{top:"0",left:"0",right:"0",bottom:"0"}},padding:c,border:u,colorAndBackgroundColor:f,typography:d=er}=e,{currentDeviceValue:b}=Fe(c,o),{currentDeviceValue:h}=Fe(s,o);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Submit button","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-2.5"},(0,l.createElement)(Ql,{defaultOpen:!0,label:"Colors"},(0,l.createElement)(Fr,{controlData:f,setAttrs__control:t=>{a({...e,colorAndBackgroundColor:t})}})),(0,l.createElement)(Ql,{label:"Border & Dimensions"},(0,l.createElement)(yr,{borderControl:u,setAttrs__border:t=>{a({...e,border:t})}}),(0,l.createElement)(g.__experimentalBoxControl,{label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("Padding","boostify-blocks")),values:b,onChange:t=>{a({...e,padding:{...c,[o]:t}})}}),(0,l.createElement)(g.__experimentalBoxControl,{label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("margin","boostify-blocks")),values:h,onChange:t=>{a({...e,margin:{...s,[o]:t}})}})),(0,l.createElement)(pr,{typographyControl:d||er,setAttrs__typography:t=>{a({...e,typography:t})}})))},Gr={typography:er,margin:void 0,Success:{color:"#0c4a6e",backgroundColor:"#f0f9ff",border:wr},Error:{color:"#ef4444",backgroundColor:"#fef2f2",border:wr}},zr=({panelData:e=Gr,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const o=ta()||"Desktop",s=[{name:"Success",title:(0,n.__)("Success","boostify-blocks")},{name:"Error",title:(0,n.__)("Error","boostify-blocks")}],{margin:c={Desktop:{top:"0",left:"0",right:"0",bottom:"0"}}}=e,{currentDeviceValue:u}=Fe(c,o);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Messages","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-4"},(0,l.createElement)(pr,{typographyControl:e.typography||er,setAttrs__typography:t=>{a({...e,typography:t})}}),(0,l.createElement)(g.TabPanel,{className:"wcb-bodyControls__panel ",activeClass:"active-tab",initialTabName:"Success",tabs:s},(t=>(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(Al,{label:(0,n.__)("Text color","boostify-blocks"),color:e[t.name].color,onChange:l=>{a({...e,[t.name]:{...e[t.name],color:l}})}}),(0,l.createElement)(Al,{label:(0,n.__)("Background color","boostify-blocks"),color:e[t.name].backgroundColor,onChange:l=>{a({...e,[t.name]:{...e[t.name],backgroundColor:l}})}}),(0,l.createElement)(Ql,{label:"Border & Margin"},(0,l.createElement)(yr,{borderControl:e[t.name].border,setAttrs__border:l=>{a({...e,[t.name]:{border:l}})}}),(0,l.createElement)(g.__experimentalBoxControl,{label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("margin","boostify-blocks")),values:u,onChange:t=>{a({...e,margin:{...c,[o]:t}})}})))))))},Vr=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),Wr=(0,tr.createElement)(lr.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,tr.createElement)(lr.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),Ur="wcb-dimensions-unit-control-styles",qr={boxSizing:"border-box",display:"block",flex:"0 0 24px",width:24,height:24,position:"relative",padding:4},Kr={boxSizing:"border-box",display:"block",position:"relative",width:"100%",height:"100%"},Jr={boxSizing:"border-box",display:"block",pointerEvents:"none",position:"absolute",backgroundColor:"currentColor"};function Zr(e,a){return{...Jr,opacity:e?1:.3,...a}}const Qr={boxSizing:"border-box",width:"100%",paddingBottom:12},Yr={display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:8},Xr={display:"flex",alignItems:"center",gap:4},ei={display:"flex",alignItems:"center",gap:8,marginBottom:8},ai={...ei,marginBottom:0},ti={flex:"0 0 110px",width:110},li={flex:1,display:"flex",alignItems:"center"};function ri(e){const{top:a,right:t,bottom:l,left:r}=e;return!(a===t&&t===l&&l===r)}function ii(e){return!!e&&Object.values(e).some((e=>!!e&&/\d/.test(e)))}const ni={top:"",right:"",bottom:"",left:""},oi=[{key:"top"},{key:"right"},{key:"bottom"},{key:"left"}],si={top:(0,n.__)("Top","boostify-blocks"),right:(0,n.__)("Right","boostify-blocks"),bottom:(0,n.__)("Bottom","boostify-blocks"),left:(0,n.__)("Left","boostify-blocks"),mixed:(0,n.__)("Mixed","boostify-blocks")},ci=({side:e})=>{const a=a=>"all"===e||e===a;return(0,l.createElement)("span",{style:qr},(0,l.createElement)("span",{style:Kr},(0,l.createElement)("span",{style:Zr(a("top"),{height:2,left:3,right:3,top:0})}),(0,l.createElement)("span",{style:Zr(a("right"),{bottom:3,top:3,width:2,right:0})}),(0,l.createElement)("span",{style:Zr(a("bottom"),{height:2,left:3,right:3,bottom:0})}),(0,l.createElement)("span",{style:Zr(a("left"),{bottom:3,top:3,width:2,left:0})})))},ui=({value:e,min:a,onChange:t})=>{const{num:r,unit:i}=function(e){if(!e)return{num:0,unit:"px"};const a=e.match(/^([\d.]+)([a-z%]*)$/i);return a?{num:parseFloat(a[1])||0,unit:a[2]||"px"}:{num:0,unit:"px"}}(e),n=function(e){switch(e.toLowerCase()){case"rem":case"em":return 20;case"%":case"vw":case"vh":return 100;default:return 1e3}}(i),o=function(e){return["rem","em"].includes(e.toLowerCase())?.1:1}(i),s=Math.max(a,Math.min(n,r)),c=n>a?(s-a)/(n-a)*100:0;return(0,l.createElement)("input",{className:"wcb-dimensions-unit-control__range",type:"range",value:s,min:a,max:n,step:o,style:{background:`linear-gradient(to right, #0073aa ${c}%, #ddd ${c}%)`},onChange:e=>{const a=parseFloat(e.target.value);t(i?`${a}${i}`:`${a}`)},onWheel:e=>e.currentTarget.blur()})},gi=({label:e,values:a={},onChange:t,min:r=-99999,allowReset:i=!0})=>{var o,s,c,u;(0,l.useEffect)((()=>{if(document.getElementById(Ur))return;const e=document.createElement("style");e.id=Ur,e.textContent="\n.wcb-dimensions-unit-control__range {\n\tdisplay: block;\n\twidth: 100%;\n\theight: 4px;\n\tappearance: none;\n\t-webkit-appearance: none;\n\tborder-radius: 2px;\n\toutline: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-thumb {\n\t-webkit-appearance: none;\n\tappearance: none;\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tcursor: pointer;\n\tmargin-top: -5px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-thumb {\n\twidth: 14px;\n\theight: 14px;\n\tborder-radius: 50%;\n\tbackground: #0073aa;\n\tborder: none;\n\tcursor: pointer;\n}\n.wcb-dimensions-unit-control__range::-webkit-slider-runnable-track {\n\theight: 4px;\n\tborder-radius: 2px;\n}\n.wcb-dimensions-unit-control__range::-moz-range-track {\n\theight: 4px;\n\tborder-radius: 2px;\n\tbackground: #ddd;\n}\n",document.head.appendChild(e)}),[]);const f=ii(a),[d,b]=(0,l.useState)(!f||!ri(a)),[h,p]=(0,l.useState)(f),m={top:null!==(o=a.top)&&void 0!==o?o:"",right:null!==(s=a.right)&&void 0!==s?s:"",bottom:null!==(c=a.bottom)&&void 0!==c?c:"",left:null!==(u=a.left)&&void 0!==u?u:""},k=function(e){const{top:a,right:t,bottom:l,left:r}=e;return a===t&&t===l&&l===r&&a||""}(m),w=ii(m)&&ri(m),y=e=>{const a=null!=e?e:"";t({top:a,right:a,bottom:a,left:a}),p(!0)},v=(e,a)=>{t({...m,[e]:null!=a?a:""}),p(!0)},_=d?(0,n.__)("Unlink sides","boostify-blocks"):(0,n.__)("Link sides","boostify-blocks");return(0,l.createElement)("div",{style:Qr},(0,l.createElement)("div",{style:Yr},(0,l.createElement)("div",null,e),(0,l.createElement)("div",{style:Xr},i&&(0,l.createElement)(g.Button,{className:"component-box-control__reset-button",variant:"secondary",isSmall:!0,onClick:()=>{t(ni),p(!1)},disabled:!h},(0,n.__)("Reset","boostify-blocks")),(0,l.createElement)(g.Tooltip,{text:_},(0,l.createElement)(g.Button,{className:"component-box-control__linked-button",isSmall:!0,icon:d?Vr:Wr,iconSize:24,"aria-label":_,onClick:()=>b((e=>!e))})))),d?(0,l.createElement)("div",{style:ei},(0,l.createElement)(ci,{side:"all"}),(0,l.createElement)(g.__experimentalUnitControl,{"aria-label":"string"==typeof e?e:void 0,className:"component-box-control__unit-control",style:ti,value:k,onChange:e=>y(e),min:r,placeholder:w?si.mixed:void 0,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:li},(0,l.createElement)(ui,{value:k||m.top,min:r,onChange:y}))):oi.map((({key:e},a)=>(0,l.createElement)("div",{key:e,style:a===oi.length-1?ai:ei},(0,l.createElement)(ci,{side:e}),(0,l.createElement)(g.__experimentalUnitControl,{"aria-label":si[e],className:"component-box-control__unit-control",style:ti,value:m[e],onChange:a=>v(e,a),min:r,isResetValueOnUnitChange:!1}),(0,l.createElement)("div",{style:li},(0,l.createElement)(ui,{value:m[e],min:r,onChange:a=>v(e,a)}))))))},fi=({className:e="space-y-5",dimensionControl:a=Tr,setAttrs__dimensions:t})=>{const r=ta()||"Desktop",{margin:i,padding:o}=a,{currentDeviceValue:s}=Fe(i,r),{currentDeviceValue:c}=Fe(o,r);return(0,l.createElement)("div",{className:e},(0,l.createElement)(gi,{label:(0,l.createElement)(Gt,{hasResponsive:!0,className:""},(0,n.__)("Padding","boostify-blocks")),values:c||{},onChange:e=>{t({...a,padding:{...o,[r]:e}})},min:0}),(0,l.createElement)(gi,{label:(0,l.createElement)(Gt,{className:"",hasResponsive:!0},(0,n.__)("Margin","boostify-blocks")),values:s||{},onChange:e=>{t({...a,margin:{...i,[r]:e}})},min:0}))},di={padding:{Desktop:{top:"1.75rem",left:"1.75rem",right:"1.75rem",bottom:"1.75rem"}},margin:{Desktop:{top:"",left:"",right:"",bottom:""}},border:{...wr,mainSettings:{color:"#38bdf8",style:"solid",width:"1px"}},rowGap:{Desktop:"1.75rem"},labelBottomMargin:{Desktop:"0.5rem"}},bi=({panelData:e=di,setAttr__:a,initialOpen:t,onToggle:r,opened:i})=>{const o=ta()||"Desktop",{border:s,labelBottomMargin:c,padding:u,rowGap:f}=e,{currentDeviceValue:d}=Fe(u,o),{currentDeviceValue:b}=Fe(f,o),{currentDeviceValue:h}=Fe(c,o);return(0,l.createElement)(g.PanelBody,{initialOpen:t,onToggle:r,opened:i,title:(0,n.__)("Spacing","boostify-blocks")},(0,l.createElement)("div",{className:"space-y-5"},(0,l.createElement)(fi,{dimensionControl:e,setAttrs__dimensions:t=>a({...e,...t})}),(0,l.createElement)(yr,{borderControl:s,setAttrs__border:t=>a({...e,border:t})}),(0,l.createElement)(Mr,{value:b||"1rem",hasResponsive:!0,label:(0,n.__)("Row spacing","boostify-blocks"),onChange:t=>{a({...e,rowGap:{...f,[o]:t}})}}),(0,l.createElement)(Mr,{value:h||"1rem",hasResponsive:!0,label:(0,n.__)("Label margin bottom","boostify-blocks"),onChange:t=>{a({...e,labelBottomMargin:{...c,[o]:t}})}})))},hi=(0,l.memo)((({children:e,uniqueKey:a="uniqueid"})=>{ta(),a.replace(/[0-9]/g,"").replace(/ /g,"").toLocaleLowerCase();const{myCache:t,ref:r}=((e="wcb-custom-cache-key")=>{const a=(0,l.useRef)(null);return{myCache:be({key:e,container:a.current||void 0}),ref:a}})("wcb-key-cache"),{cache:i,useRefReact:n}=function(e="wcb-custom-cache-key"){const[a,t]=(0,l.useState)(null),r=(0,l.useRef)(null);return(0,l.useEffect)((()=>{let l=null,i=0;const n=a=>{const l=a?.contentDocument?.head;if(!l)return;const i=be({key:e,container:l||r.current||void 0});t(i)},o=()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e?"complete"===e.contentDocument?.readyState?n(e):e.addEventListener("load",(()=>n(e)),{once:!0}):i<20&&(i++,setTimeout(o,150))};return o(),l=new MutationObserver((()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e&&e!==a?.container?.ownerDocument?.defaultView?.frameElement&&(i=0,o())})),l.observe(document.body,{childList:!0,subtree:!0}),()=>l?.disconnect()}),[]),{cache:a,useRefReact:r}}("wcb-key-cache");return i?(0,l.createElement)(Ne,{value:i},e):(0,l.createElement)(l.Fragment,null,e)}));function pi(e,a="wcb-"){return e?a+e.replace(/-/g,"").replace(/\s/g,"").substring(0,12):(a+"converniquedreturnnull"+Date.now()+Math.random()).replace(/\./g,"-")}const mi=e=>{const{attributes:a,setAttributes:t,clientId:r}=e,{general_general:i,uniqueId:s,general_submit_button:c,general_action:g,general_gg_recaptcha:f,style_label:b,style_input:h,style_checkbox_radio_toggle:p,style_submit_button:m,style_messages:k,style_spacing:w}=a,y=(0,l.useRef)(null),v=(0,o.useBlockProps)({ref:y}),{tabIsOpen:_,tabAdvancesIsPanelOpen:C,tabGeneralIsPanelOpen:E,tabStylesIsPanelOpen:S,handleTogglePanel:x}=(e=>{const{setBlockPanelInfo:a}=(0,Ke.useDispatch)(Qe),{blockStores:t}=(0,Ke.useSelect)((e=>({blockStores:e(Qe)?.getBlockPanelInfo()})),[e]),{tabIsOpen:r,Advances:i,General:n,Styles:o}=t[e]||{},s=t[e];return(0,l.useEffect)((()=>{!s&&a&&a(e,{tabIsOpen:"General",General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"}})}),[e]),{setBlockPanelInfo:a,tabAdvances:i,tabGeneral:n,tabStyles:o,tabIsOpen:r,blockStore:s,handleTogglePanel:(t,l,r)=>{a&&(r&&s&&"first"===s[t]?.panelIsOpen&&(l=""),s&&s[t]?.panelIsOpen===l&&(l=""),a(e,{tabIsOpen:t,[t]:{panelIsOpen:void 0===l&&s?s[t]?.panelIsOpen:l}}))},tabGeneralIsPanelOpen:n?.panelIsOpen,tabStylesIsPanelOpen:o?.panelIsOpen,tabAdvancesIsPanelOpen:i?.panelIsOpen}})(s),T=v.id;(0,l.useEffect)((()=>{t({uniqueId:pi(T)})}),[T]);const{}=a,I=(0,o.useBlockProps)({className:"wcb-form__inner"}),N=(0,o.useInnerBlocksProps)(I,{allowedBlocks:["boostify-blocks/input","boostify-blocks/email","boostify-blocks/phone","boostify-blocks/textarea","boostify-blocks/toggle","boostify-blocks/checkbox","boostify-blocks/radio","boostify-blocks/password","boostify-blocks/select","boostify-blocks/url","boostify-blocks/hidden","boostify-blocks/date","boostify-blocks/accept"],renderAppender:()=>!1});return(0,l.createElement)(hi,{uniqueKey:r},(0,l.createElement)("form",{...v,className:`wcb-form__wrap ${s} ${v.className} `,"data-uniqueid":s},(0,l.createElement)(qe,{...a}),(0,l.createElement)("div",{className:"wcb-form__box"},(0,l.createElement)("div",{...N,name:(0,u.useInstanceId)(mi)}),(0,l.createElement)("div",{className:"wcb-form__btn-submit-wrap"},(0,l.createElement)(o.RichText,{className:"wcb-form__btn-submit",tagName:"div",value:a.btnSubmitText,allowedFormats:["core/bold","core/italic"],onChange:e=>t({btnSubmitText:e}),placeholder:(0,n.__)("Submit","boostify-blocks")}))),(0,l.createElement)("div",{className:"w-full flex-1 flex-shrink-0"},(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"wcb-form__successMessageText"},(0,l.createElement)("span",null,a.general_general.successMessageText)),(0,l.createElement)(xr,null,(0,n.__)("(Success message: Only show on the frontend when the form submit is successful.)","boostify-blocks"))),(0,l.createElement)("div",null,(0,l.createElement)("div",{className:"wcb-form__errorMessageText"},(0,l.createElement)("span",null,a.general_general.errorMessageText)),(0,l.createElement)(xr,null,(0,n.__)("(Error message: Only show on the frontend when the form submit is error.)","boostify-blocks"))))),(0,l.createElement)(d,{uniqueId:s,renderTabPanels:e=>{switch(e.name){case"General":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Sl,{onToggle:()=>x("General","General",!0),initialOpen:"General"===E||"first"===E,opened:"General"===E||void 0,setAttr__:e=>{(e=>{let a={general_general:e};e.formStyle!==i.formStyle&&("simple"===e.formStyle?a={general_general:e,style_input:vr,style_checkbox_radio_toggle:Ar}:"solid"===e.formStyle?a={general_general:e,style_input:_r,style_checkbox_radio_toggle:Or}:"underline"===e.formStyle&&(a={general_general:e,style_input:Cr,style_checkbox_radio_toggle:Ar})),t(a)})(e)},panelData:i}),(0,l.createElement)(Tl,{onToggle:()=>x("General","SubmitButton"),initialOpen:"SubmitButton"===E,opened:"SubmitButton"===E||void 0,setAttr__:e=>{t({general_submit_button:e})},panelData:c}),(0,l.createElement)(Nl,{onToggle:()=>x("General","Action"),initialOpen:"Action"===E,opened:"Action"===E||void 0,setAttr__:e=>{t({general_action:e})},panelData:g}),(0,l.createElement)(Ml,{onToggle:()=>x("General","GoogleRecaptcha"),initialOpen:"GoogleRecaptcha"===E,opened:"GoogleRecaptcha"===E||void 0,setAttr__:e=>{t({general_gg_recaptcha:e})},panelData:f}));case"Styles":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(kr,{onToggle:()=>x("Styles","_StyleLabel",!0),initialOpen:"_StyleLabel"===S||"first"===S,opened:"_StyleLabel"===S||void 0,setAttr__:e=>{t({style_label:e})},panelData:b}),(0,l.createElement)(Sr,{onToggle:()=>x("Styles","_StyleInput"),initialOpen:"_StyleInput"===S,opened:"_StyleInput"===S||void 0,setAttr__:e=>{t({style_input:e})},panelData:h}),(0,l.createElement)(Dr,{onToggle:()=>x("Styles","_StyleCheckBoxRadio"),initialOpen:"_StyleCheckBoxRadio"===S,opened:"_StyleCheckBoxRadio"===S||void 0,setAttr__:e=>{t({style_checkbox_radio_toggle:e})},panelData:p}),(0,l.createElement)(jr,{onToggle:()=>x("Styles","_StyleSubmitButton"),initialOpen:"_StyleSubmitButton"===S,opened:"_StyleSubmitButton"===S||void 0,setAttr__:e=>{t({style_submit_button:e})},panelData:m}),(0,l.createElement)(zr,{onToggle:()=>x("Styles","_StyleMessages"),initialOpen:"_StyleMessages"===S,opened:"_StyleMessages"===S||void 0,setAttr__:e=>{t({style_messages:e})},panelData:k}),(0,l.createElement)(bi,{onToggle:()=>x("Styles","_StyleSpacing"),initialOpen:"_StyleSpacing"===S,opened:"_StyleSpacing"===S||void 0,setAttr__:e=>{t({style_spacing:e})},panelData:w}));case"Advances":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(Kt,{advance_motionEffect:a.advance_motionEffect,advance_responsiveCondition:a.advance_responsiveCondition,advance_zIndex:a.advance_zIndex,handleTogglePanel:x,setAttributes:t,tabAdvancesIsPanelOpen:C}));default:return(0,l.createElement)("div",null)}}}))},ki=({attributes:e,setAttributes:a,name:t,clientId:r})=>{(0,l.useEffect)((()=>{}),[]);const{blockType:c,defaultVariation:u,variations:g}=(0,Ke.useSelect)((e=>{const{getBlockVariations:a,getBlockType:l,getDefaultBlockVariation:r}=e(i.store);return{blockType:l(t),defaultVariation:r(t,"block"),variations:a(t,"block")}}),[t]),{replaceInnerBlocks:f}=(0,Ke.useDispatch)(o.store);return(0,l.createElement)("div",{...(0,o.useBlockProps)()},(0,l.createElement)(o.__experimentalBlockVariationPicker,{icon:(0,s.get)(c,["icon","src"]),label:(0,s.get)(c,["title"]),instructions:(0,n.__)("Select a variation to start with."),onSelect:(t=u)=>{"object"==typeof t.attributes&&a({...e,...t.attributes}),t.innerBlocks&&f(r,(0,i.createBlocksFromInnerBlocksTemplate)(t.innerBlocks),!0)},variations:g,allowSkip:!0}))},wi=function({className:e="",uniqueId:a="",HtmlTag:t="div",children:r,attributes:i,id:n,...o}){let s="";try{const e=a=>{if(Array.isArray(a))return 0===a.length?{}:a;if(a&&"object"==typeof a){const t={};for(const[l,r]of Object.entries(a))t[l]=e(r);return t}return a},a=e(i);s=c().escape(JSON.stringify(a))}catch(a){console.log("attributes JSON.stringify error on SAVE function",{error:a,className:e,attributes:i})}const u=i?.advance_responsiveCondition||{},g=[u?.isHiddenOnDesktop?"wcb-hide-desktop":"",u?.isHiddenOnTablet?"wcb-hide-tab":"",u?.isHiddenOnMobile?"wcb-hide-mob":""].filter(Boolean).join(" ");return(0,l.createElement)(t,{...o,className:`wcb-cm wcb-update-div ${g} ${e.trim()} ${a.trim()}`,id:n||i?.anchor,"data-uniqueid":a,"data-is-wcb-save-common":!0},r,(0,l.createElement)("div",{"data-wcb-global-styles":a}),(0,l.createElement)("pre",{"data-wcb-block-attrs":a,style:{display:"none"}},s))},yi=JSON.parse('{"UU":"boostify-blocks/form"}'),vi={uniqueId:{type:"string",default:""},btnSubmitText:{type:"string",source:"html",selector:"button.wcb-form__btn-submit",default:"Submit"},general_general:{type:"object",default:El},general_submit_button:{type:"object",default:xl},general_action:{type:"object",default:Il},general_gg_recaptcha:{type:"object",default:Rl},style_label:{type:"object",default:mr},style_input:{type:"object",default:Er},style_checkbox_radio_toggle:{type:"object",default:Pr},style_submit_button:{type:"object",default:Hr},style_messages:{type:"object",default:Gr},style_spacing:{type:"object",default:di},advance_responsiveCondition:{type:"object",default:ea},advance_zIndex:{type:"object",default:zt},advance_motionEffect:{type:"object",default:{animationDelay:0,animationDuration:"fast",entranceAnimation:"",repeat:"1"}}},_i=e=>(0,l.createElement)("div",{className:"w-16 h-12 flex items-center justify-center "},(0,l.createElement)("div",{className:"grid grid-rows-2 grid-cols-12 w-14 h-8 p-0.5 bg-[#007cba] gap-0.5 rounded-sm"},e.children)),Ci=[{name:"test-full",title:(0,n.__)("Test Full Form"),description:(0,n.__)("Test Full Form"),icon:(0,l.createElement)(_i,null,(0,l.createElement)("div",{className:"col-span-12 row-span-2 bg-white"})),innerBlocks:[["boostify-blocks/input",{label:"First Name"}],["boostify-blocks/email",{label:"Email"}],["boostify-blocks/phone",void 0],["boostify-blocks/toggle",void 0],["boostify-blocks/url",void 0],["boostify-blocks/checkbox",void 0],["boostify-blocks/radio",void 0],["boostify-blocks/select",void 0],["boostify-blocks/textarea",void 0],["boostify-blocks/hidden",void 0],["boostify-blocks/accept",void 0]],scope:["block"],isDefault:!0},{name:"SimpleContactForm",title:(0,n.__)("Simple Contact Form"),description:(0,n.__)("Simple Contact Form"),icon:(0,l.createElement)(_i,null,(0,l.createElement)("div",{className:"col-span-12 row-span-2 bg-white"})),innerBlocks:[["boostify-blocks/input",{label:"First Name"}],["boostify-blocks/input",{label:"Last Name"}],["boostify-blocks/email",{label:"Email"}],["boostify-blocks/textarea",{label:"Message"}]],scope:["block"]},{name:"NewsletterForm",title:(0,n.__)("Newsletter Form"),description:(0,n.__)("Newsletter Form"),icon:(0,l.createElement)(_i,null,(0,l.createElement)("div",{className:"col-span-12 row-span-2 bg-white"})),innerBlocks:[["boostify-blocks/input",{label:"Name"}],["boostify-blocks/email",{label:"Email"}],["boostify-blocks/radio",{label:"Some question with below listed option?"}],["boostify-blocks/input",{label:"Subject"}],["boostify-blocks/textarea",{label:"Message"}]],scope:["block"]},{name:"SuggestionForm",title:(0,n.__)("Suggestion Form"),description:(0,n.__)("Suggestion Form"),icon:(0,l.createElement)(_i,null,(0,l.createElement)("div",{className:"col-span-12 row-span-2 bg-white"})),innerBlocks:[["boostify-blocks/input",{label:"Name"}],["boostify-blocks/email",{label:"Email"}]],scope:["block"]}],Ei={attributes:{...vi,style_submit_button:{type:"object",default:{colorAndBackgroundColor:$r,padding:{Desktop:{top:"1rem",left:"2rem",right:"2rem",bottom:"1rem"}},border:wr}},style_messages:{type:"object",default:{Success:{color:"#0c4a6e",backgroundColor:"#f0f9ff",border:wr},Error:{color:"#ef4444",backgroundColor:"#fef2f2",border:wr}}}},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h}=e,p={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h},m=s.enableReCaptcha&&"v2"===s.version,k=s.enableReCaptcha&&"v3"===s.version,w=o.useBlockProps.save({className:"wcb-form__wrap"}),y=o.useBlockProps.save({className:"wcb-form__inner"}),v=o.useInnerBlocksProps.save(y);return(0,l.createElement)(wi,{...w,attributes:p,uniqueId:a,HtmlTag:"form"},(0,l.createElement)("div",{children:v.children,className:"wcb-form__inner"}),m&&(0,l.createElement)("div",{className:"g-recaptcha"}),(0,l.createElement)("div",{className:"wcb-form__btn-submit-wrap"},(0,l.createElement)(o.RichText.Content,{className:"wcb-form__btn-submit "+(k?"g-recaptcha":""),value:e.btnSubmitText,tagName:"button",type:"submit"})),(0,l.createElement)("div",{className:"wcb-form__successMessageText"},(0,l.createElement)("span",null,e.general_general.successMessageText)),(0,l.createElement)("div",{className:"wcb-form__errorMessageText"},(0,l.createElement)("span",null,e.general_general.errorMessageText)))}},Si={attributes:{...vi,style_submit_button:{type:"object",default:{colorAndBackgroundColor:$r,padding:{Desktop:{top:"1rem",left:"2rem",right:"2rem",bottom:"1rem"}},border:wr}},style_messages:{type:"object",default:{Success:{color:"#0c4a6e",backgroundColor:"#f0f9ff",border:wr},Error:{color:"#ef4444",backgroundColor:"#fef2f2",border:wr}}}},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p}=e,m={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p},k=s.enableReCaptcha&&"v2"===s.version,w=s.enableReCaptcha&&"v3"===s.version,y=o.useBlockProps.save({className:"wcb-form__wrap"}),v=o.useBlockProps.save({className:"wcb-form__inner"}),_=o.useInnerBlocksProps.save(v);return(0,l.createElement)(wi,{...y,attributes:m,uniqueId:a,HtmlTag:"form"},(0,l.createElement)("div",{children:_.children,className:"wcb-form__inner"}),k&&(0,l.createElement)("div",{className:"g-recaptcha"}),(0,l.createElement)("div",{className:"wcb-form__btn-submit-wrap"},(0,l.createElement)(o.RichText.Content,{className:"wcb-form__btn-submit "+(w?"g-recaptcha":""),value:e.btnSubmitText,tagName:"button",type:"submit"})),(0,l.createElement)("div",{className:"wcb-form__successMessageText"},(0,l.createElement)("span",null,e.general_general.successMessageText)),(0,l.createElement)("div",{className:"wcb-form__errorMessageText"},(0,l.createElement)("span",null,e.general_general.errorMessageText)))}},xi={attributes:{...vi,general_submit_button:{type:"object",default:{textAlignment:"left"}}},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p}=e,m={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p},k=s.enableReCaptcha&&"v2"===s.version,w=s.enableReCaptcha&&"v3"===s.version,y=o.useBlockProps.save({className:"wcb-form__wrap"}),v=o.useBlockProps.save({className:"wcb-form__inner"}),_=o.useInnerBlocksProps.save(v);return(0,l.createElement)(wi,{...y,attributes:m,uniqueId:a,HtmlTag:"form"},(0,l.createElement)("div",{children:_.children,className:"wcb-form__inner"}),k&&(0,l.createElement)("div",{className:"g-recaptcha"}),(0,l.createElement)("div",{className:"wcb-form__btn-submit-wrap"},(0,l.createElement)(o.RichText.Content,{className:"wcb-form__btn-submit "+(w?"g-recaptcha":""),value:e.btnSubmitText,tagName:"button",type:"submit"})),(0,l.createElement)("div",{className:"wcb-form__successMessageText"},(0,l.createElement)("span",null,e.general_general.successMessageText)),(0,l.createElement)("div",{className:"wcb-form__errorMessageText"},(0,l.createElement)("span",null,e.general_general.errorMessageText)))}},Ti=[xi,Si,Si,Ei,{},{}],{Fragment:Ii}=wp.element,{withSelect:Ni}=wp.data;(0,i.registerBlockType)(yi.UU,{edit:e=>{const{clientId:a}=e,t=(0,Ke.useSelect)((e=>e(o.store).getBlocks(a).length>0),[a])?mi:ki;return(0,l.createElement)(t,{...e})},save:function({attributes:e}){const{uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p}=e,m={uniqueId:a,advance_responsiveCondition:t,advance_zIndex:r,general_action:i,general_general:n,general_gg_recaptcha:s,general_submit_button:c,style_checkbox_radio_toggle:u,style_input:g,style_label:f,style_messages:d,style_spacing:b,style_submit_button:h,advance_motionEffect:p},k=s.enableReCaptcha&&"v2"===s.version,w=s.enableReCaptcha&&"v3"===s.version,y=o.useBlockProps.save({className:"wcb-form__wrap"}),v=o.useBlockProps.save({className:"wcb-form__inner"}),_=o.useInnerBlocksProps.save(v);return(0,l.createElement)(wi,{...y,attributes:m,uniqueId:a,HtmlTag:"form"},(0,l.createElement)("div",{className:"wcb-form__box"},(0,l.createElement)("div",{children:_.children,className:"wcb-form__inner"}),k&&(0,l.createElement)("div",{className:"g-recaptcha"}),(0,l.createElement)("div",{className:"wcb-form__btn-submit-wrap"},(0,l.createElement)(o.RichText.Content,{className:"wcb-form__btn-submit "+(w?"g-recaptcha":""),value:e.btnSubmitText,tagName:"button",type:"submit"}))),(0,l.createElement)("div",{className:"wcb-form__successMessageText"},(0,l.createElement)("span",null,e.general_general.successMessageText)),(0,l.createElement)("div",{className:"wcb-form__errorMessageText"},(0,l.createElement)("span",null,e.general_general.errorMessageText)))},attributes:vi,variations:Ci,deprecated:Ti,example:{attributes:function(e){let a={};for(let t in e)e.hasOwnProperty(t)&&(a[t]=e[t].default);return a}(vi),innerBlocks:[{name:"boostify-blocks/input",attributes:{label:"Name"}},{name:"boostify-blocks/email",attributes:{label:"Email"}}]},icon:(0,l.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)("path",{d:"M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M8 13H12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.createElement)("path",{d:"M8 17H16",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))})},1070:(e,a,t)=>{const l=t(1609),r=l.forwardRef((function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))}));e.exports=r},1609:e=>{"use strict";e.exports=window.React},2149:(e,a,t)=>{const l=t(1609),r=l.forwardRef((function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}));e.exports=r},3072:(e,a)=>{"use strict";var t="function"==typeof Symbol&&Symbol.for,l=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,i=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,o=t?Symbol.for("react.profiler"):60114,s=t?Symbol.for("react.provider"):60109,c=t?Symbol.for("react.context"):60110,u=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,f=t?Symbol.for("react.forward_ref"):60112,d=t?Symbol.for("react.suspense"):60113,b=t?Symbol.for("react.suspense_list"):60120,h=t?Symbol.for("react.memo"):60115,p=t?Symbol.for("react.lazy"):60116,m=t?Symbol.for("react.block"):60121,k=t?Symbol.for("react.fundamental"):60117,w=t?Symbol.for("react.responder"):60118,y=t?Symbol.for("react.scope"):60119;function v(e){if("object"==typeof e&&null!==e){var a=e.$$typeof;switch(a){case l:switch(e=e.type){case u:case g:case i:case o:case n:case d:return e;default:switch(e=e&&e.$$typeof){case c:case f:case p:case h:case s:return e;default:return a}}case r:return a}}}function _(e){return v(e)===g}a.AsyncMode=u,a.ConcurrentMode=g,a.ContextConsumer=c,a.ContextProvider=s,a.Element=l,a.ForwardRef=f,a.Fragment=i,a.Lazy=p,a.Memo=h,a.Portal=r,a.Profiler=o,a.StrictMode=n,a.Suspense=d,a.isAsyncMode=function(e){return _(e)||v(e)===u},a.isConcurrentMode=_,a.isContextConsumer=function(e){return v(e)===c},a.isContextProvider=function(e){return v(e)===s},a.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===l},a.isForwardRef=function(e){return v(e)===f},a.isFragment=function(e){return v(e)===i},a.isLazy=function(e){return v(e)===p},a.isMemo=function(e){return v(e)===h},a.isPortal=function(e){return v(e)===r},a.isProfiler=function(e){return v(e)===o},a.isStrictMode=function(e){return v(e)===n},a.isSuspense=function(e){return v(e)===d},a.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===g||e===o||e===n||e===d||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===h||e.$$typeof===s||e.$$typeof===c||e.$$typeof===f||e.$$typeof===k||e.$$typeof===w||e.$$typeof===y||e.$$typeof===m)},a.typeOf=v},3404:(e,a,t)=>{"use strict";e.exports=t(3072)},4146:(e,a,t)=>{"use strict";var l=t(3404),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function s(e){return l.isMemo(e)?n:o[e.$$typeof]||r}o[l.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[l.Memo]=n;var c=Object.defineProperty,u=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(a,t,l){if("string"!=typeof t){if(b){var r=d(t);r&&r!==b&&e(a,r,l)}var n=u(t);g&&(n=n.concat(g(t)));for(var o=s(a),h=s(t),p=0;p<n.length;++p){var m=n[p];if(!(i[m]||l&&l[m]||h&&h[m]||o&&o[m])){var k=f(t,m);try{c(a,m,k)}catch(e){}}}}return a}},7500:(e,a,t)=>{const l=t(1609),r=l.forwardRef((function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"}))}));e.exports=r},8156:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8477:(e,a,t)=>{const l=t(1609),r=l.forwardRef((function({title:e,titleId:a,...t},r){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:r,"aria-labelledby":a},t),e?l.createElement("title",{id:a},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}))}));e.exports=r}},t={};function l(e){var r=t[e];if(void 0!==r)return r.exports;var i=t[e]={exports:{}};return a[e](i,i.exports,l),i.exports}l.m=a,e=[],l.O=(a,t,r,i)=>{if(!t){var n=1/0;for(u=0;u<e.length;u++){for(var[t,r,i]=e[u],o=!0,s=0;s<t.length;s++)(!1&i||n>=i)&&Object.keys(l.O).every((e=>l.O[e](t[s])))?t.splice(s--,1):(o=!1,i<n&&(n=i));if(o){e.splice(u--,1);var c=r();void 0!==c&&(a=c)}}return a}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,r,i]},l.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return l.d(a,{a}),a},l.d=(e,a)=>{for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},l.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{var e={7556:0,3324:0};l.O.j=a=>0===e[a];var a=(a,t)=>{var r,i,[n,o,s]=t,c=0;if(n.some((a=>0!==e[a]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(s)var u=s(l)}for(a&&a(t);c<n.length;c++)i=n[c],l.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return l.O(u)},t=globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})();var r=l.O(void 0,[3324],(()=>l(877)));r=l.O(r)})();