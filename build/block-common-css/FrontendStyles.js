<<<<<<< HEAD
(()=>{var e,t,n={41:(e,t,n)=>{"use strict";n.d(t,{sk:()=>o});var o=function(e,t,n){!function(e,t,n){var o=e.key+"-"+t.name;!1===n&&void 0===e.registered[o]&&(e.registered[o]=t.styles)}(e,t,n);var o=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var r=t;do{e.insert(t===r?"."+o:"",r,e.sheet,!0),r=r.next}while(void 0!==r)}}},64:(e,t,n)=>{"use strict";n(8156)},390:(e,t,n)=>{"use strict";n.d(t,{C:()=>u,Cv:()=>C,G1:()=>a,K2:()=>m,Nc:()=>A,OW:()=>h,Sh:()=>g,Tb:()=>y,Tp:()=>b,VF:()=>w,YL:()=>p,c4:()=>_,di:()=>v,mw:()=>k,nf:()=>$,rH:()=>d,se:()=>f});var o=n(9735),r=1,i=1,s=0,a=0,l=0,c="";function d(e,t,n,o,s,a,l){return{value:e,root:t,parent:n,type:o,props:s,children:a,line:r,column:i,length:l,return:""}}function u(e,t){return(0,o.kp)(d("",null,null,"",null,null,0),e,{length:-e.length},t)}function b(){return l}function p(){return l=a>0?(0,o.wN)(c,--a):0,i--,10===l&&(i=1,r--),l}function m(){return l=a<s?(0,o.wN)(c,a++):0,i++,10===l&&(i=1,r++),l}function f(){return(0,o.wN)(c,a)}function h(){return a}function v(e,t){return(0,o.c1)(c,e,t)}function g(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _(e){return r=i=1,s=(0,o.b2)(c=e),a=0,[]}function w(e){return c="",e}function y(e){return(0,o.Bq)(v(a-1,x(91===e?e+2:40===e?e+1:e)))}function k(e){for(;(l=f())&&l<33;)m();return g(e)>2||g(l)>3?"":" "}function A(e,t){for(;--t&&m()&&!(l<48||l>102||l>57&&l<65||l>70&&l<97););return v(e,h()+(t<6&&32==f()&&32==m()))}function x(e){for(;m();)switch(l){case e:return a;case 34:case 39:34!==e&&39!==e&&x(l);break;case 40:41===e&&x(e);break;case 92:m()}return a}function $(e,t){for(;m()&&e+l!==57&&(e+l!==84||47!==f()););return"/*"+v(t,a-1)+"*"+(0,o.HT)(47===e?e:m())}function C(e){for(;!g(f());)m();return v(e,a)}},428:e=>{"use strict";e.exports=window.jQuery},483:(e,t,n)=>{"use strict";n.d(t,{A:()=>s,l:()=>i});var o=n(4534),r=n(9735);function i(e,t){for(var n="",o=(0,r.FK)(e),i=0;i<o;i++)n+=t(e[i],i,e,t)||"";return n}function s(e,t,n,s){switch(e.type){case o.yE:case o.LU:return e.return=e.return||e.value;case o.YK:return"";case o.Sv:return e.return=e.value+"{"+i(e.children,s)+"}";case o.XZ:e.value=e.props.join(",")}return(0,r.b2)(n=i(e.children,s))?e.return=e.value+"{"+n+"}":""}},1287:(e,t,n)=>{"use strict";n.d(t,{i:()=>r});var o=n(1609),r=!!o.useInsertionEffect&&o.useInsertionEffect||o.useLayoutEffect},1609:e=>{"use strict";e.exports=window.React},1622:(e,t,n)=>{"use strict";n.d(t,{_4:()=>o}),n(5419),n(6217),n(5587);const o=()=>{let e=document.querySelector("head");return r()&&(e=document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector("head")),e},r=()=>!!document.querySelector('iframe[name="editor-canvas"]')},2323:(e,t,n)=>{"use strict";n.d(t,{J:()=>f});var o=n(5137),r=n(3969),i=n(6289),s=/[A-Z]|^ms/g,a=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},d=(0,i.A)((function(e){return l(e)?e:e.replace(s,"-$&").toLowerCase()})),u=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(a,(function(e,t,n){return p={name:t,styles:n,next:p},t}))}return 1===r.A[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function b(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return p={name:n.name,styles:n.styles,next:p},n.name;if(void 0!==n.styles){var o=n.next;if(void 0!==o)for(;void 0!==o;)p={name:o.name,styles:o.styles,next:p},o=o.next;return n.styles+";"}return function(e,t,n){var o="";if(Array.isArray(n))for(var r=0;r<n.length;r++)o+=b(e,t,n[r])+";";else for(var i in n){var s=n[i];if("object"!=typeof s)null!=t&&void 0!==t[s]?o+=i+"{"+t[s]+"}":c(s)&&(o+=d(i)+":"+u(i,s)+";");else if(!Array.isArray(s)||"string"!=typeof s[0]||null!=t&&void 0!==t[s[0]]){var a=b(e,t,s);switch(i){case"animation":case"animationName":o+=d(i)+":"+a+";";break;default:o+=i+"{"+a+"}"}}else for(var l=0;l<s.length;l++)c(s[l])&&(o+=d(i)+":"+u(i,s[l])+";")}return o}(e,t,n);case"function":if(void 0!==e){var r=p,i=n(e);return p=r,b(e,t,i)}}if(null==t)return n;var s=t[n];return void 0!==s?s:n}var p,m=/label:\s*([^\s;\n{]+)\s*(;|$)/g,f=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";p=void 0;var s=e[0];null==s||void 0===s.raw?(r=!1,i+=b(n,t,s)):i+=s[0];for(var a=1;a<e.length;a++)i+=b(n,t,e[a]),r&&(i+=s[a]);m.lastIndex=0;for(var l,c="";null!==(l=m.exec(i));)c+="-"+l[1];return{name:(0,o.A)(i)+c,styles:i,next:p}}},2431:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(7788),r=n(5419),i=n(9278);const s=({typography:e,className:t})=>{if(!e||!t)return{};const{appearance:n,fontFamily:s,fontSizes:a,letterSpacing:l,lineHeight:c,textDecoration:d,textTransform:u}=e;s&&(0,r.Fd)(s);const{media_desktop:b,media_tablet:p}=o.s,m=a?.Desktop,f=a?.Tablet||m,h=a?.Mobile||f,v=c?.Desktop,g=c?.Tablet||v,_=c?.Mobile||g,w=l?.Desktop,y=l?.Tablet||w,k=l?.Mobile||y,{mobile_v:A,tablet_v:x,desktop_v:$}=(0,i.A)({mobile_v:h,tablet_v:f,desktop_v:m}),{mobile_v:C,tablet_v:S,desktop_v:T}=(0,i.A)({mobile_v:_,tablet_v:g,desktop_v:v}),{mobile_v:E,tablet_v:L,desktop_v:M}=(0,i.A)({mobile_v:k,tablet_v:y,desktop_v:w});return{[`${t}`]:{fontFamily:s,fontWeight:n?.style?.fontWeight,fontStyle:n?.style?.fontStyle,textDecoration:d,textTransform:u,fontSize:A,lineHeight:C,letterSpacing:E,[`@media (min-width: ${p})`]:x||S||L?{fontSize:x,lineHeight:S,letterSpacing:L}:void 0,[`@media (min-width: ${b})`]:$||T||M?{fontSize:$,lineHeight:T,letterSpacing:M}:void 0}}}},2440:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var o=n(2710);const r=({border:e,className:t,isWithRadius:n=!1,isWithIframe:r=!1})=>{const{hoverColor:i,mainSettings:s,radius:a}=e;let l={[`${t}`]:{}};if(s){const e=s;if("top"in e||"right"in e||"bottom"in e||"left"in e){const{bottom:n,left:o,right:r,top:s}=e;l={[`${t}`]:{...s?{borderTop:`${s.width} ${s.style||"none"} ${s.color||""}`}:{},...o?{borderLeft:`${o.width} ${o.style||"none"} ${o.color||""}`}:{},...r?{borderRight:`${r.width} ${r.style||"none"} ${r.color||""}`}:{},...n?{borderBottom:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},"&:hover":{borderColor:`${i}`}}}}else{const{color:e,style:n,width:o}=s;l={[`${t}`]:{border:`${o} ${n||"none"} ${e||""}`,"&:hover":{borderColor:`${i||""}`}}}}}let c={[`${t}`]:{}};n&&a&&(c=(0,o.A)({radius:a,className:t,isWithIframe:r}));let d={},u={};return"object"==typeof l[t]&&(d=l[t]||{}),"object"==typeof c[t]&&(u=c[t]||{}),{[`${t}`]:{...d,...u}}}},2710:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(7788),r=n(5192),i=n(9278);const s=({className:e,radius:t,isWithIframe:n=!1})=>{const{media_desktop:s,media_tablet:a}=o.s;let{value_Desktop:l,value_Tablet:c,value_Mobile:d}=(0,r.A)(t);const u=e=>{let t=e;return t="string"==typeof e?{bottomLeft:e,bottomRight:e,topLeft:e,topRight:e}:{bottomLeft:e?.bottomLeft,bottomRight:e?.bottomRight,topLeft:e?.topLeft,topRight:e?.topRight},t};l=u(l),c=u(c),d=u(d);const{mobile_v:b,tablet_v:p,desktop_v:m}=(0,i.A)({mobile_v:d?.topLeft,tablet_v:c?.topLeft,desktop_v:l?.topLeft}),{mobile_v:f,tablet_v:h,desktop_v:v}=(0,i.A)({mobile_v:d?.topRight,tablet_v:c?.topRight,desktop_v:l?.topRight}),{mobile_v:g,tablet_v:_,desktop_v:w}=(0,i.A)({mobile_v:d?.bottomRight,tablet_v:c?.bottomRight,desktop_v:l?.bottomRight}),{mobile_v:y,tablet_v:k,desktop_v:A}=(0,i.A)({mobile_v:d?.bottomLeft,tablet_v:c?.bottomLeft,desktop_v:l?.bottomLeft}),x=n?"!important":"";return{[`${e}`]:{borderTopLeftRadius:`${b} ${x}`,borderTopRightRadius:`${f} ${x}`,borderBottomRightRadius:`${g} ${x}`,borderBottomLeftRadius:`${y} ${x}`,[`@media (min-width: ${a})`]:p||h||_||k?{borderTopLeftRadius:`${p} ${x}`,borderTopRightRadius:`${h} ${x}`,borderBottomRightRadius:`${_} ${x}`,borderBottomLeftRadius:`${k} ${x}`}:null,[`@media (min-width: ${s})`]:m||v||w||A?{borderTopLeftRadius:`${m} ${x}`,borderTopRightRadius:`${v} ${x}`,borderBottomRightRadius:`${w} ${x}`,borderBottomLeftRadius:`${A} ${x}`}:null}}}},3062:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=e=>{const t=e?.blocksEditorSpacing,n=""==t?0:t,o=((e="0px")=>`\n  /* Desktop */\n  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper\n    > * + *:not(p),\n  .edit-post-visual-editor .editor-styles-wrapper\n    .block-editor-block-list__layout.is-root-container\n    > * + *:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-root-container.wp-site-blocks\n    > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-layout-constrained\n    > * + * {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  /* Tablet */\n  @media (max-width: 768px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n\n  /* Mobile */\n  @media (max-width: 480px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n`)("number"==typeof n?`${n}px`:n);let r=document.getElementById("wcb-blocks-editor-custom-style");r||(r=document.createElement("style"),r.id="wcb-blocks-editor-custom-style",document.head.appendChild(r)),r.textContent=o}},3072:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,r=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,s=n?Symbol.for("react.strict_mode"):60108,a=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.async_mode"):60111,u=n?Symbol.for("react.concurrent_mode"):60111,b=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,f=n?Symbol.for("react.memo"):60115,h=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,_=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case d:case u:case i:case a:case s:case p:return e;default:switch(e=e&&e.$$typeof){case c:case b:case h:case f:case l:return e;default:return t}}case r:return t}}}function k(e){return y(e)===u}t.AsyncMode=d,t.ConcurrentMode=u,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=b,t.Fragment=i,t.Lazy=h,t.Memo=f,t.Portal=r,t.Profiler=a,t.StrictMode=s,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||y(e)===d},t.isConcurrentMode=k,t.isContextConsumer=function(e){return y(e)===c},t.isContextProvider=function(e){return y(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return y(e)===b},t.isFragment=function(e){return y(e)===i},t.isLazy=function(e){return y(e)===h},t.isMemo=function(e){return y(e)===f},t.isPortal=function(e){return y(e)===r},t.isProfiler=function(e){return y(e)===a},t.isStrictMode=function(e){return y(e)===s},t.isSuspense=function(e){return y(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===u||e===a||e===s||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===h||e.$$typeof===f||e.$$typeof===l||e.$$typeof===c||e.$$typeof===b||e.$$typeof===g||e.$$typeof===_||e.$$typeof===w||e.$$typeof===v)},t.typeOf=y},3404:(e,t,n)=>{"use strict";e.exports=n(3072)},3716:(e,t,n)=>{"use strict";n.d(t,{wE:()=>s});var o=n(4534),r=n(9735),i=n(390);function s(e){return(0,i.VF)(a("",null,null,null,[""],e=(0,i.c4)(e),0,[0],e))}function a(e,t,n,o,s,u,b,p,m){for(var f=0,h=0,v=b,g=0,_=0,w=0,y=1,k=1,A=1,x=0,$="",C=s,S=u,T=o,E=$;k;)switch(w=x,x=(0,i.K2)()){case 40:if(108!=w&&58==(0,r.wN)(E,v-1)){-1!=(0,r.K5)(E+=(0,r.HC)((0,i.Tb)(x),"&","&\f"),"&\f")&&(A=-1);break}case 34:case 39:case 91:E+=(0,i.Tb)(x);break;case 9:case 10:case 13:case 32:E+=(0,i.mw)(w);break;case 92:E+=(0,i.Nc)((0,i.OW)()-1,7);continue;case 47:switch((0,i.se)()){case 42:case 47:(0,r.BC)(c((0,i.nf)((0,i.K2)(),(0,i.OW)()),t,n),m);break;default:E+="/"}break;case 123*y:p[f++]=(0,r.b2)(E)*A;case 125*y:case 59:case 0:switch(x){case 0:case 125:k=0;case 59+h:_>0&&(0,r.b2)(E)-v&&(0,r.BC)(_>32?d(E+";",o,n,v-1):d((0,r.HC)(E," ","")+";",o,n,v-2),m);break;case 59:E+=";";default:if((0,r.BC)(T=l(E,t,n,f,h,s,p,$,C=[],S=[],v),u),123===x)if(0===h)a(E,t,T,T,C,u,v,p,S);else switch(99===g&&110===(0,r.wN)(E,3)?100:g){case 100:case 109:case 115:a(e,T,T,o&&(0,r.BC)(l(e,T,T,0,0,s,p,$,s,C=[],v),S),s,S,v,p,o?C:S);break;default:a(E,T,T,T,[""],S,0,p,S)}}f=h=_=0,y=A=1,$=E="",v=b;break;case 58:v=1+(0,r.b2)(E),_=w;default:if(y<1)if(123==x)--y;else if(125==x&&0==y++&&125==(0,i.YL)())continue;switch(E+=(0,r.HT)(x),x*y){case 38:A=h>0?1:(E+="\f",-1);break;case 44:p[f++]=((0,r.b2)(E)-1)*A,A=1;break;case 64:45===(0,i.se)()&&(E+=(0,i.Tb)((0,i.K2)())),g=(0,i.se)(),h=v=(0,r.b2)($=E+=(0,i.Cv)((0,i.OW)())),x++;break;case 45:45===w&&2==(0,r.b2)(E)&&(y=0)}}return u}function l(e,t,n,s,a,l,c,d,u,b,p){for(var m=a-1,f=0===a?l:[""],h=(0,r.FK)(f),v=0,g=0,_=0;v<s;++v)for(var w=0,y=(0,r.c1)(e,m+1,m=(0,r.tn)(g=c[v])),k=e;w<h;++w)(k=(0,r.Bq)(g>0?f[w]+" "+y:(0,r.HC)(y,/&\f/g,f[w])))&&(u[_++]=k);return(0,i.rH)(e,t,n,0===a?o.XZ:d,u,b,p)}function c(e,t,n){return(0,i.rH)(e,t,n,o.YK,(0,r.HT)((0,i.Tp)()),(0,r.c1)(e,2,-2),0)}function d(e,t,n,s){return(0,i.rH)(e,t,n,o.LU,(0,r.c1)(e,0,s),(0,r.c1)(e,s+1,-1),s)}},3969:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1}},4146:(e,t,n)=>{"use strict";var o=n(3404),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(e){return o.isMemo(e)?s:a[e.$$typeof]||r}a[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[o.Memo]=s;var c=Object.defineProperty,d=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,o){if("string"!=typeof n){if(m){var r=p(n);r&&r!==m&&e(t,r,o)}var s=d(n);u&&(s=s.concat(u(n)));for(var a=l(t),f=l(n),h=0;h<s.length;++h){var v=s[h];if(!(i[v]||o&&o[v]||f&&f[v]||a&&a[v])){var g=b(n,v);try{c(t,v,g)}catch(e){}}}}return t}},4181:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>b});var o=n(1609),r=n.n(o),i=n(7437),s=n(4505),a=n(2440),l=n(7931),c=n(8885),d=n(2431),u=n(7788);const b=r().memo((e=>{const{uniqueId:t,general_layout:n,style_description:r,style_desination:b,style_Icon:p,style_title:m,advance_responsiveCondition:f,advance_zIndex:h,general_icon:v,style_dimension:g,advance_motionEffect:_}=e,{media_desktop:w,media_tablet:y}=u.s,k=`.${t}[data-uniqueid=${t}]`;return t?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(i.mL,{styles:[(0,c.A)({className:k,value:n.textAlignment,prefix:"textAlign"}),{[`${k}`]:{display:"left"===v.iconPosition||"right"===v.iconPosition?"flex":"block",flexDirection:"mobile"===v.stackOn||"tablet"===v.stackOn?"right"===v.iconPosition?"column-reverse":"column":void 0,".wcb-icon-box__icon-wrap, .wcb-icon-box__content":{alignSelf:"middle"===v.verticalAlignment?"center":void 0},".wcb-icon-box__content-title-wrap":{display:"leftOfTitle"===v.iconPosition||"rightOfTitle"===v.iconPosition?"flex":"block"},".wcb-icon-box__progress-circle-wrap":{position:"relative",margin:"left"===n.textAlignment.Desktop||"left"===n.textAlignment.Tablet?"":"right"===n.textAlignment.Desktop||"right"===n.textAlignment.Tablet?"0 0 0 auto":"0 auto"},".wcb-icon-box__progress-bar-wrap":{position:"relative",width:"100%",textAlign:"left"===n.textAlignment.Desktop||"left"===n.textAlignment.Tablet?"start":"right"===n.textAlignment.Desktop||"right"===n.textAlignment.Tablet?"end":"center"},".wcb-icon-box__title":{fontSize:"16px",color:"#666",marginTop:"10px"},".wcb-icon-box__icon":{fontSize:"20px",marginBottom:"10px"},[`@media (min-width: ${y})`]:{flexDirection:"mobile"===v.stackOn?"row":void 0},[`@media (min-width: ${w})`]:{flexDirection:"row"}}}]}),(0,o.createElement)(i.mL,{styles:(0,l.A)({className:k,margin:g?.margin,padding:g?.padding})}),v.enableIcon?(0,o.createElement)(i.mL,{styles:[(0,l.A)({className:`${k} .wcb-icon-box__icon-wrap`,margin:p.dimensions?.margin}),(0,l.A)({className:`${k} .wcb-icon-box__icon-wrap`,padding:p.dimensions?.padding}),(0,a.A)({border:p.border,className:`${k} .wcb-icon-box__icon`,isWithRadius:!0}),(0,c.A)({className:`${k} .wcb-icon-full`,value:p.iconSize,prefix:"width",prefix_2:"fontSize"}),{[`${k} .wcb-icon-full`]:{color:p.color,":hover":{color:p.hoverColor}}}]}):null,n.enablePrefix?(0,o.createElement)(i.mL,{styles:[(0,d.A)({typography:b.typography,className:`${k} .wcb-icon-box__number`}),(0,c.A)({className:`${k} .wcb-icon-box__number`,value:b.marginBottom,prefix:"marginBottom"}),{[`${k} .wcb-icon-box__number`]:{color:b.textColor}}]}):null,n.enableTitle?(0,o.createElement)(i.mL,{styles:[(0,d.A)({typography:m.typography,className:`${k} .wcb-icon-box__number`}),(0,c.A)({className:`${k} .wcb-icon-box__number`,value:m.marginBottom,prefix:"marginBottom"}),{[`${k} .wcb-icon-box__number`]:{color:m.textColor}}]}):null,n.enableDescription?(0,o.createElement)(i.mL,{styles:[(0,d.A)({typography:r.typography,className:`${k} .wcb-icon-box__description`}),(0,c.A)({className:`${k} .wcb-icon-box__description`,value:r.marginBottom,prefix:"marginBottom"}),{[`${k} .wcb-icon-box__description`]:{color:r.textColor}}]}):null,(0,o.createElement)(i.mL,{styles:(0,s.F)({advance_responsiveCondition:f,advance_motionEffect:_,advance_zIndex:h,className:k})})):null}))},4505:(e,t,n)=>{"use strict";n.d(t,{F:()=>a});var o=n(7437),r=n(7788),i=n(9278);const s=o.AH`
=======
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0]; // in nested rules comments become children of the "auto-inserted" rule
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? children[0].children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);

    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if ( true && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if ( key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (true) {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (true) {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify,  true ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : 0];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if ( true && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hoistNonReactStatics);


/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CacheProvider),
/* harmony export */   E: () => (/* binding */ Emotion),
/* harmony export */   T: () => (/* binding */ ThemeContext),
/* harmony export */   _: () => (/* binding */ __unsafe_useEmotionCache),
/* harmony export */   a: () => (/* binding */ ThemeProvider),
/* harmony export */   b: () => (/* binding */ withTheme),
/* harmony export */   c: () => (/* binding */ createEmotionProps),
/* harmony export */   h: () => (/* binding */ hasOwnProperty),
/* harmony export */   u: () => (/* binding */ useTheme),
/* harmony export */   w: () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");









var hasOwnProperty = {}.hasOwnProperty;

var EmotionCacheContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});

if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ( true && (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ( true && (theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';

  var render = function render(props, ref) {
    var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext);
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  }; // $FlowFixMe


  var WithTheme = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(render);
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"])(WithTheme, Component);
}

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if ( true && typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // For performance, only call getLabelFromStackTrace in development and when
  // the label hasn't already been computed

  if ( true && !!props.css && (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.registerStyles)(cache, serialized, isStringTag);
  var rules = (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__.useInsertionEffectAlwaysWithSyncFallback)(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ThemeContext));

  if ( true && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( false || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, newProps));
});

if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   ClassNames: () => (/* binding */ ClassNames),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   __unsafe_useEmotionCache: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   createElement: () => (/* binding */ jsx),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   jsx: () => (/* binding */ jsx),
/* harmony export */   keyframes: () => (/* binding */ keyframes),
/* harmony export */   useTheme: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.u),
/* harmony export */   withEmotionCache: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w),
/* harmony export */   withTheme: () => (/* reexport safe */ _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.b)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js");
/* harmony import */ var _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emotion-element-6a883da9.browser.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");












var pkg = {
	name: "@emotion/react",
	version: "11.10.6",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				worker: "./dist/emotion-react.worker.esm.js",
				browser: "./dist/emotion-react.browser.esm.js",
				"default": "./dist/emotion-react.esm.js"
			},
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			module: {
				worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
				browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
			},
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			module: {
				worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
				browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
			},
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			module: {
				worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
				browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
			},
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": "./macro.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.10.6",
		"@emotion/cache": "^11.10.5",
		"@emotion/serialize": "^1.1.1",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.0.0",
		"@emotion/utils": "^1.2.0",
		"@emotion/weak-memoize": "^0.3.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.10.6",
		"@emotion/css-prettifier": "1.1.1",
		"@emotion/server": "11.10.0",
		"@emotion/styled": "11.10.6",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^4.5.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact",
		exports: {
			envConditions: [
				"browser",
				"worker"
			],
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": "./macro.js"
			}
		}
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if ( true && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectWithLayoutFallback)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectWithLayoutFallback)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (true) {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if ( true && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_8__.useInsertionEffectAlwaysWithSyncFallback)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      var res = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_7__.serializeStyles)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.registerStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "development" !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_6a883da9_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}

if (true) {
  var isBrowser = "object" !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeStyles: () => (/* binding */ serializeStyles)
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (true) {
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if ( true && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if ( true && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (true) {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "development" !== 'production') {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if ( true && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if ( true && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if ( true && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (true) {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (true) {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleSheet: () => (/* binding */ StyleSheet)
/* harmony export */ });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? "development" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (true) {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if ( true && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (true) {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsertionEffectAlwaysWithSyncFallback: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback),
/* harmony export */   useInsertionEffectWithLayoutFallback: () => (/* binding */ useInsertionEffectWithLayoutFallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback =  useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredStyles: () => (/* binding */ getRegisteredStyles),
/* harmony export */   insertStyles: () => (/* binding */ insertStyles),
/* harmony export */   registerStyles: () => (/* binding */ registerStyles)
/* harmony export */ });
var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weakMemoize);


/***/ }),

/***/ "./node_modules/accordion-js/dist/accordion.min.css":
/*!**********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/accordion-js/dist/accordion.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/accordion-js/dist/accordion.min.js ***!
  \*********************************************************/
/***/ ((module) => {

/**
 * Accordion v3.3.4
 * Lightweight and accessible accordion module created in pure Javascript
 * https://github.com/michu2k/Accordion
 *
 * Copyright (c) Michał Strumpf
 * Published under MIT License
 */

!function(e){var t=0,n=function e(n,s){var i=this,r=this,o=!1;if(Array.isArray(n))return!!n.length&&n.map((function(t){return new e(t,s)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},s);var e="string"==typeof n;this.container=e?document.querySelector(n):n,this.createDefinitions(),r.attachEvents()},createDefinitions:function(){var e=this,n=this.options,s=n.elementClass,i=n.openOnInit,r=n.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(u(s));this.elements=Array.from(r).filter((function(e){return e.classList&&e.classList.contains(s)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(n){n.classList.add("js-enabled"),e.generateIDs(n),e.setARIA(n),e.setTransition(n);var s=e.elements.indexOf(n);t++,i.includes(s)?e.showElement(n,!1):e.closeElement(n,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,s=n.duration,i=n.panelClass,r=e.querySelector(u(i)),o=l("transitionDuration");r.style[o]=t?null:"".concat(s,"ms")},generateIDs:function(e){var n=this.options,s=n.triggerClass,i=n.panelClass,r=e.querySelector(u(s)),o=e.querySelector(u(i));e.setAttribute("id",e.id||"ac-".concat(t)),r.setAttribute("id",r.id||"ac-trigger-".concat(t)),o.setAttribute("id",o.id||"ac-panel-".concat(t))},removeIDs:function(e){var t=this.options,n=t.triggerClass,s=t.panelClass,i=e.querySelector(u(n)),r=e.querySelector(u(s));e.id.startsWith("ac-")&&e.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id")},setARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.setAttribute("role","button"),r.setAttribute("aria-controls",o.id),r.setAttribute("aria-disabled",!1),r.setAttribute("aria-expanded",!1),o.setAttribute("role","region"),o.setAttribute("aria-labelledby",r.id)}},updateARIA:function(e,t){var n=t.ariaExpanded,s=t.ariaDisabled,i=this.options,r=i.ariaEnabled,o=i.triggerClass;if(r){var a=e.querySelector(u(o));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",s)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,s=t.triggerClass,i=t.panelClass;if(n){var r=e.querySelector(u(s)),o=e.querySelector(u(i));r.removeAttribute("role"),r.removeAttribute("aria-controls"),r.removeAttribute("aria-disabled"),r.removeAttribute("aria-expanded"),o.removeAttribute("role"),o.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(u(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.collapse,o=n.beforeOpen;t&&o(e);var a=e.querySelector(u(s)),l=a.scrollHeight;e.classList.add(i),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(l,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!r})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,s=n.panelClass,i=n.activeClass,r=n.beforeClose,o=e.querySelector(u(s)),a=o.scrollHeight;e.classList.remove(i),t?(r(e),requestAnimationFrame((function(){o.style.height="".concat(a,"px"),requestAnimationFrame((function(){o.style.height=0}))}))):o.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,s=t.collapse,i=e.classList.contains(n);if(!i||s)return i?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,s){t.classList.contains(n)&&s!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(s,i){s.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=i,t.closeElements(),t.focus(e,s),t.toggleElement(s))}))},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var t=e.currentTarget,n=this.elements.find((function(e){return e.contains(t)}));this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(e){if(e.stopPropagation(),"height"===e.propertyName){var t=this.options,n=t.onOpen,s=t.onClose,i=e.currentTarget,r=parseInt(i.style.height),o=this.elements.find((function(e){return e.contains(i)}));r>0?(i.style.height="auto",n(o)):s(o)}}};this.attachEvents=function(){if(!o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.addEventListener("click",a.handleClick),s.addEventListener("keydown",a.handleKeydown),s.addEventListener("focus",a.handleFocus),i.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.addEventListener("transitionend",a.handleTransitionEnd)})),o=!0}},this.detachEvents=function(){if(o){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var s=e.querySelector(u(t)),i=e.querySelector(u(n));s.removeEventListener("click",a.handleClick),s.removeEventListener("keydown",a.handleKeydown),s.removeEventListener("focus",a.handleFocus),i.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),i.removeEventListener("transitionend",a.handleTransitionEnd)})),o=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){var e=a.options,t=e.activeClass,n=e.onOpen;a.elements.forEach((function(e){e.classList.contains(t)||(a.showElement(e,!1),n(e))}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){var e=a.options,t=e.activeClass,n=e.onClose;a.elements.forEach((function(e){e.classList.contains(t)&&(a.closeElement(e,!1),n(e))}))},this.destroy=function(){i.detachEvents(),i.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),o=!0},this.update=function(){a.createDefinitions(),i.detachEvents(),i.attachEvents()};var l=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=c(e),e="webkit".concat(e))},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},u=function(e){return".".concat(CSS.escape(e))};a.init()}; true&&void 0!==module.exports?module.exports=n:e.Accordion=n}(window);

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-parse/index.mjs":
/*!********************************************!*\
  !*** ./node_modules/color-parse/index.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var color_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js");
/**
 * @module color-parse
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);

/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
}

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [], alpha = 1, space

	if (typeof cstr === 'string') {
		//keyword
		if (color_name__WEBPACK_IMPORTED_MODULE_0__[cstr]) {
			parts = color_name__WEBPACK_IMPORTED_MODULE_0__[cstr].slice()
			space = 'rgb'
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0
			space = 'rgb'
			parts = [0,0,0]
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.slice(1)
			var size = base.length
			var isShort = size <= 4
			alpha = 1

			if (isShort) {
				parts = [
					parseInt(base[0] + base[0], 16),
					parseInt(base[1] + base[1], 16),
					parseInt(base[2] + base[2], 16)
				]
				if (size === 4) {
					alpha = parseInt(base[3] + base[3], 16) / 255
				}
			}
			else {
				parts = [
					parseInt(base[0] + base[1], 16),
					parseInt(base[2] + base[3], 16),
					parseInt(base[4] + base[5], 16)
				]
				if (size === 8) {
					alpha = parseInt(base[6] + base[7], 16) / 255
				}
			}

			if (!parts[0]) parts[0] = 0
			if (!parts[1]) parts[1] = 0
			if (!parts[2]) parts[2] = 0

			space = 'rgb'
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1]
			var isRGB = name === 'rgb'
			var base = name.replace(/a$/, '')
			space = base
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3
			parts = m[2].trim()
				.split(/\s*[,\/]\s*|\s+/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100
						return parseFloat(x)
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x)
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x]
						}
					}
					return parseFloat(x)
				})

			if (name === base) parts.push(1)
			alpha = (isRGB) ? 1 : (parts[size] === undefined) ? 1 : parts[size]
			parts = parts.slice(0, size)
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value)
			})

			space = cstr.match(/([a-z])/ig).join('').toLowerCase()
		}
	}

	//numeric case
	else if (!isNaN(cstr)) {
		space = 'rgb'
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff]
	}

	//array-like
	else if (Array.isArray(cstr) || cstr.length) {
		parts = [cstr[0], cstr[1], cstr[2]]
		space = 'rgb'
		alpha = cstr.length === 4 ? cstr[3] : 1
	}

	//object case - detects css cases of rgb and hsl
	else if (cstr instanceof Object) {
		if (cstr.r != null || cstr.red != null || cstr.R != null) {
			space = 'rgb'
			parts = [
				cstr.r || cstr.red || cstr.R || 0,
				cstr.g || cstr.green || cstr.G || 0,
				cstr.b || cstr.blue || cstr.B || 0
			]
		}
		else {
			space = 'hsl'
			parts = [
				cstr.h || cstr.hue || cstr.H || 0,
				cstr.s || cstr.saturation || cstr.S || 0,
				cstr.l || cstr.lightness || cstr.L || cstr.b || cstr.brightness
			]
		}

		alpha = cstr.a || cstr.alpha || cstr.opacity || 1

		if (cstr.opacity != null) alpha /= 100
	}

	return {
		space: space,
		values: parts,
		alpha: alpha
	}
}


/***/ }),

/***/ "./node_modules/color-rgba/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/color-rgba/index.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rgba)
/* harmony export */ });
/* harmony import */ var color_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color-parse */ "./node_modules/color-parse/index.mjs");
/* harmony import */ var color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-space/rgb.js */ "./node_modules/color-space/rgb.js");
/* harmony import */ var color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! color-space/hsl.js */ "./node_modules/color-space/hsl.js");
/** @module  color-rgba */




function rgba (color) {
	// template literals
	if (Array.isArray(color) && color.raw) color = String.raw(...arguments)

	var values, i, l

	//attempt to parse non-array arguments
	var parsed = (0,color_parse__WEBPACK_IMPORTED_MODULE_0__["default"])(color)

	if (!parsed.space) return []

	const min = parsed.space[0] === 'h' ? color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].min : color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"].min
	const max = parsed.space[0] === 'h' ? color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].max : color_space_rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"].max

	values = Array(3)
	values[0] = Math.min(Math.max(parsed.values[0], min[0]), max[0])
	values[1] = Math.min(Math.max(parsed.values[1], min[1]), max[1])
	values[2] = Math.min(Math.max(parsed.values[2], min[2]), max[2])

	if (parsed.space[0] === 'h') {
		values = color_space_hsl_js__WEBPACK_IMPORTED_MODULE_2__["default"].rgb(values)
	}

	values.push(Math.min(Math.max(parsed.alpha, 0), 1))

	return values
}


/***/ }),

/***/ "./node_modules/color-space/hsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsl.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/color-space/rgb.js");
/**
 * @module color-space/hsl
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	name: 'hsl',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSL'],

	rgb: function(hsl) {
		var h = hsl[0] / 360,
				s = hsl[1] / 100,
				l = hsl[2] / 100,
				t1, t2, t3, rgb, val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		}
		else {
			t2 = l + s - l * s;
		}
		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * - (i - 1);
			if (t3 < 0) {
				t3++;
			}
			else if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			}
			else if (2 * t3 < 1) {
				val = t2;
			}
			else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			}
			else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	}
});


//extend rgb
_rgb_js__WEBPACK_IMPORTED_MODULE_0__["default"].hsl = function(rgb) {
	var r = rgb[0]/255,
			g = rgb[1]/255,
			b = rgb[2]/255,
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			h, s, l;

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g)/ delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	}
	else if (l <= 0.5) {
		s = delta / (max + min);
	}
	else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


/***/ }),

/***/ "./node_modules/color-space/rgb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/rgb.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * RGB space.
 *
 * @module  color-space/rgb
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	name: 'rgb',
	min: [0,0,0],
	max: [255,255,255],
	channel: ['red', 'green', 'blue'],
	alias: ['RGB']
});


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset:
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d m s
									case 100: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./src/________.ts":
/*!*************************!*\
  !*** ./src/________.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES: () => (/* binding */ DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES),
/* harmony export */   ___boostify_blocks_global: () => (/* binding */ ___boostify_blocks_global)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styleEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleEditor */ "./src/styleEditor.ts");

// add editor styles for block spacing

const INIT_BOOSTIFYBLOCKS_GLOBAL_VARIABLES = {
  media_tablet: "768px",
  media_desktop: "1024px",
  reCAPTCHA_v3_secret_key: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",
  reCAPTCHA_v3_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  reCAPTCHA_v2_site_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  reCAPTCHA_v2_secret_key: "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",
  // Used when picking a container for the first time, or when the container's contentWidth is not set.
  defaultContentWidth: window?.boostify_blocks_layout_global_settings?.contentSize || "",
  containerPadding: "10px",
  enableTemplatesButton: "true",
  enableCopyPasteStyles: "false",
  containerElementsGap: "10px",
  blocksEditorSpacing: "0px",
  buttonInheritFromTheme: "false",
  buttonTheme: {
    backgroundColor: window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor || "#0073aa",
    backgroundColorHover: window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover || "#3a3a3a",
    textColor: window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor || "#ffffff",
    textColorHover: window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover || "#ffffff",
    borderRadius: window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius || "50px"
  }
};
const DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES = {
  ...INIT_BOOSTIFYBLOCKS_GLOBAL_VARIABLES,
  ...(window.boostify_blocks_global_variables || {}),
  defaultContentWidth: window.boostify_blocks_global_variables?.defaultContentWidth || window.boostify_blocks_layout_global_settings?.contentSize
};
const onReady = cb => {
  if (window.wp?.domReady) {
    window.wp.domReady(cb);
  }
};
onReady(() => {
  (0,_styleEditor__WEBPACK_IMPORTED_MODULE_1__["default"])(DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES);
});
const ___boostify_blocks_global = 1;

/***/ }),

/***/ "./src/block-container/getAdvanveStyles.ts":
/*!*************************************************!*\
  !*** ./src/block-container/getAdvanveStyles.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdvanveDivWrapStyles: () => (/* binding */ getAdvanveDivWrapStyles)
/* harmony export */ });
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



// Base overlay for hidden preview
const hiddenPreviewOverlay = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
>>>>>>> d6eb24798a5273e95b00e88c13508951e8609150
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
`;
const getAdvanveDivWrapStyles = ({
  advance_motionEffect,
  advance_zIndex,
  advance_responsiveCondition,
  className,
  defaultDisplay
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  //
  //
  // Trigger animation only when in viewport
  try {
    if (advance_motionEffect?.entranceAnimation) {
      const thisELs = document.querySelectorAll(className);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;

            // remove old animation classes
            const regex = /\banimate__\S+/g;
            const classRemoved = element?.className.replace(regex, "");
            element.setAttribute("class", classRemoved);

            // add new animation classes
            setTimeout(() => {
              element?.classList.add("animate__animated", `animate__${advance_motionEffect?.entranceAnimation}`, `animate__${advance_motionEffect?.animationDuration}`, `animate__delay-${advance_motionEffect?.animationDelay}ms`, `animate__repeat-${advance_motionEffect?.repeat}`);
            }, 50);

            // optional: stop observing after first animation
            observer.unobserve(element);
          }
        });
      }, {
        threshold: 0.2 // trigger when 20% visible
      });
      thisELs.forEach(el => observer.observe(el));
    }
  } catch (error) {
    console.log("error, advance_motionEffect", error);
  }
  const {
    mobile_v: zIndexMobile,
    tablet_v: zIndexTablet,
    desktop_v: zIndexDesktop
  } = (0,_utils_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_1__["default"])({
    mobile_v: advance_zIndex?.Mobile || advance_zIndex?.Tablet || advance_zIndex?.Desktop,
    tablet_v: advance_zIndex?.Tablet || advance_zIndex?.Desktop,
    desktop_v: advance_zIndex?.Desktop
  });
  //

  // const {
  // 	mobile_v: isHiddenOnMobile,
  // 	tablet_v: isHiddenOnTablet,
  // 	desktop_v: isHiddenOnDesktop,
  // } = checkResponsiveValueForOptimizeCSS({
  // 	// @ts-ignore
  // 	mobile_v: advance_responsiveCondition.isHiddenOnMobile,
  // 	// @ts-ignore
  // 	tablet_v: advance_responsiveCondition.isHiddenOnTablet,
  // 	// @ts-ignore
  // 	desktop_v: advance_responsiveCondition.isHiddenOnDesktop,
  // });

  // Helper
  const getHiddenCss = isHidden => {
    if (isHidden === "") return "";
    return isHidden ? hiddenPreviewOverlay : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`display: ${defaultDisplay};`;
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)`
		${className} {
			visibility: visible;
			@media (min-width: ${media_desktop}) {
				z-index: ${zIndexDesktop};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnDesktop)}
			}

			@media (min-width: ${media_tablet}) and (max-width: ${media_desktop}) {
				z-index: ${zIndexTablet};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnTablet)}
			}

			@media (max-width: ${media_tablet}) {
				z-index: ${zIndexMobile};
				${getHiddenCss(advance_responsiveCondition?.isHiddenOnMobile)}
			}
		}
<<<<<<< HEAD
	`}},4534:(e,t,n)=>{"use strict";n.d(t,{LU:()=>l,MS:()=>o,Sv:()=>d,XZ:()=>a,YK:()=>s,j:()=>i,vd:()=>r,yE:()=>c});var o="-ms-",r="-moz-",i="-webkit-",s="comm",a="rule",l="decl",c="@import",d="@keyframes"},4715:e=>{"use strict";e.exports=window.wp.blockEditor},5137:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=function(e){for(var t,n=0,o=0,r=e.length;r>=4;++o,r-=4)t=1540483477*(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(r){case 3:n^=(255&e.charCodeAt(o+2))<<16;case 2:n^=(255&e.charCodeAt(o+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(o)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}},5192:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=function(e,t){var n,o;const r=e?.Desktop,i=null!==(n=e?.Tablet)&&void 0!==n?n:r,s=null!==(o=e?.Mobile)&&void 0!==o?o:i;let a;return t&&(a="Desktop"===t?r:"Tablet"===t?i:s),{value_Desktop:null!=r?r:null,value_Tablet:null!=i?i:null,value_Mobile:null!=s?s:null,currentDeviceValue:a}}},5239:(e,t,n)=>{"use strict";n(7771).A.hsl=function(e){var t,n,o=e[0]/255,r=e[1]/255,i=e[2]/255,s=Math.min(o,r,i),a=Math.max(o,r,i),l=a-s;return a===s?t=0:o===a?t=(r-i)/l:r===a?t=2+(i-o)/l:i===a&&(t=4+(o-r)/l),(t=Math.min(60*t,360))<0&&(t+=360),n=(s+a)/2,[t,100*(a===s?0:n<=.5?l/(a+s):l/(2-a-s)),100*n]}},5419:(e,t,n)=>{"use strict";n.d(t,{Fd:()=>r});var o=n(1622);n(7788);const r=e=>{if("true"!==window.boostify_blocks_global_variables?.loadGoogleFontsLocally){if("true"===window.boostify_blocks_global_variables?.allowOnlySelectedFonts){var t;const n=null!==(t=window.boostify_blocks_global_variables?.selectedFonts)&&void 0!==t?t:"";if(""!==n.trim()&&!n.split(",").map((e=>e.trim().toLowerCase())).filter(Boolean).includes(e.trim().toLowerCase()))return}setTimeout((()=>{const t=t=>{if(t&&(e=>e&&!e?.match(/^(sans[-+]serif|serif|monospace|serif-alt)$/i))(e)){if(s(e,t))return;const n=i(e);t.appendChild(n)}},n=(0,o._4)();t(n),n!==document.querySelector("head")&&t(document.querySelector("head"))}),50)}},i=(e="")=>{const t=document.createElement("link");return t.classList.add("wcb-google-fonts"),t.setAttribute("data-font-name",e),t.setAttribute("href",(e=>`https://fonts.googleapis.com/css?family=${e.replace(/ /g,"+")}:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic`)(e)),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t},s=(e,t=document.querySelector("head"))=>t.querySelector(`[data-font-name="${e}"]`)},5587:(e,t,n)=>{"use strict";n(1622),n(6087),n(5863)},5815:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var o=n(8081),r=n(390),i=n(9735),s=n(4534),a=n(483),l=n(9503),c=n(3716),d=function(e,t,n){for(var o=0,i=0;o=i,i=(0,r.se)(),38===o&&12===i&&(t[n]=1),!(0,r.Sh)(i);)(0,r.K2)();return(0,r.di)(e,r.G1)},u=new WeakMap,b=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,o=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||u.get(n))&&!o){u.set(e,!0);for(var s=[],a=function(e,t){return(0,r.VF)(function(e,t){var n=-1,o=44;do{switch((0,r.Sh)(o)){case 0:38===o&&12===(0,r.se)()&&(t[n]=1),e[n]+=d(r.G1-1,t,n);break;case 2:e[n]+=(0,r.Tb)(o);break;case 4:if(44===o){e[++n]=58===(0,r.se)()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=(0,i.HT)(o)}}while(o=(0,r.K2)());return e}((0,r.c4)(e),t))}(t,s),l=n.props,c=0,b=0;c<a.length;c++)for(var p=0;p<l.length;p++,b++)e.props[b]=s[c]?a[c].replace(/&\f/g,l[p]):l[p]+" "+a[c]}}},p=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function m(e,t){switch((0,i.tW)(e,t)){case 5103:return s.j+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return s.j+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return s.j+e+s.vd+e+s.MS+e+e;case 6828:case 4268:return s.j+e+s.MS+e+e;case 6165:return s.j+e+s.MS+"flex-"+e+e;case 5187:return s.j+e+(0,i.HC)(e,/(\w+).+(:[^]+)/,s.j+"box-$1$2"+s.MS+"flex-$1$2")+e;case 5443:return s.j+e+s.MS+"flex-item-"+(0,i.HC)(e,/flex-|-self/,"")+e;case 4675:return s.j+e+s.MS+"flex-line-pack"+(0,i.HC)(e,/align-content|flex-|-self/,"")+e;case 5548:return s.j+e+s.MS+(0,i.HC)(e,"shrink","negative")+e;case 5292:return s.j+e+s.MS+(0,i.HC)(e,"basis","preferred-size")+e;case 6060:return s.j+"box-"+(0,i.HC)(e,"-grow","")+s.j+e+s.MS+(0,i.HC)(e,"grow","positive")+e;case 4554:return s.j+(0,i.HC)(e,/([^-])(transform)/g,"$1"+s.j+"$2")+e;case 6187:return(0,i.HC)((0,i.HC)((0,i.HC)(e,/(zoom-|grab)/,s.j+"$1"),/(image-set)/,s.j+"$1"),e,"")+e;case 5495:case 3959:return(0,i.HC)(e,/(image-set\([^]*)/,s.j+"$1$`$1");case 4968:return(0,i.HC)((0,i.HC)(e,/(.+:)(flex-)?(.*)/,s.j+"box-pack:$3"+s.MS+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+s.j+e+e;case 4095:case 3583:case 4068:case 2532:return(0,i.HC)(e,/(.+)-inline(.+)/,s.j+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if((0,i.b2)(e)-1-t>6)switch((0,i.wN)(e,t+1)){case 109:if(45!==(0,i.wN)(e,t+4))break;case 102:return(0,i.HC)(e,/(.+:)(.+)-([^]+)/,"$1"+s.j+"$2-$3$1"+s.vd+(108==(0,i.wN)(e,t+3)?"$3":"$2-$3"))+e;case 115:return~(0,i.K5)(e,"stretch")?m((0,i.HC)(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==(0,i.wN)(e,t+1))break;case 6444:switch((0,i.wN)(e,(0,i.b2)(e)-3-(~(0,i.K5)(e,"!important")&&10))){case 107:return(0,i.HC)(e,":",":"+s.j)+e;case 101:return(0,i.HC)(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+s.j+(45===(0,i.wN)(e,14)?"inline-":"")+"box$3$1"+s.j+"$2$3$1"+s.MS+"$2box$3")+e}break;case 5936:switch((0,i.wN)(e,t+11)){case 114:return s.j+e+s.MS+(0,i.HC)(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return s.j+e+s.MS+(0,i.HC)(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return s.j+e+s.MS+(0,i.HC)(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return s.j+e+s.MS+e+e}return e}var f=[function(e,t,n,o){if(e.length>-1&&!e.return)switch(e.type){case s.LU:e.return=m(e.value,e.length);break;case s.Sv:return(0,a.l)([(0,r.C)(e,{value:(0,i.HC)(e.value,"@","@"+s.j)})],o);case s.XZ:if(e.length)return(0,i.kg)(e.props,(function(t){switch((0,i.YW)(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return(0,a.l)([(0,r.C)(e,{props:[(0,i.HC)(t,/:(read-\w+)/,":"+s.vd+"$1")]})],o);case"::placeholder":return(0,a.l)([(0,r.C)(e,{props:[(0,i.HC)(t,/:(plac\w+)/,":"+s.j+"input-$1")]}),(0,r.C)(e,{props:[(0,i.HC)(t,/:(plac\w+)/,":"+s.vd+"$1")]}),(0,r.C)(e,{props:[(0,i.HC)(t,/:(plac\w+)/,s.MS+"input-$1")]})],o)}return""}))}}];const h=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,i,s=e.stylisPlugins||f,d={},u=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)d[t[n]]=!0;u.push(e)}));var m,h=[b,p],v=[a.A,(0,l.MY)((function(e){m.insert(e)}))],g=(0,l.r1)(h.concat(s,v));i=function(e,t,n,o){var r;m=n,r=e?e+"{"+t.styles+"}":t.styles,(0,a.l)((0,c.wE)(r),g),o&&(_.inserted[t.name]=!0)};var _={key:t,sheet:new o.v({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:d,registered:{},insert:i};return _.sheet.hydrate(u),_}},5863:e=>{"use strict";e.exports=window.wp.api},6087:e=>{"use strict";e.exports=window.lodash},6217:(e,t,n)=>{"use strict";n(7739)},6289:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=function(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}},6427:e=>{"use strict";e.exports=window.wp.components},7143:e=>{"use strict";e.exports=window.wp.data},7437:(e,t,n)=>{"use strict";n.d(t,{AH:()=>c,mL:()=>l});var o=n(1609),r=(n(5815),n(9593)),i=(n(4146),n(41)),s=n(2323),a=n(1287),l=(0,r.w)((function(e,t){var n=e.styles,l=(0,s.J)([n],void 0,(0,o.useContext)(r.T)),c=(0,o.useRef)();return(0,a.i)((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,r=document.querySelector('style[data-emotion="'+e+" "+l.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==r&&(o=!0,r.setAttribute("data-emotion",e),n.hydrate([r])),c.current=[n,o],function(){n.flush()}}),[t]),(0,a.i)((function(){var e=c.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==l.next&&(0,i.sk)(t,l.next,!0),n.tags.length){var o=n.tags[n.tags.length-1].nextElementSibling;n.before=o,n.flush()}t.insert("",l,n,!1)}}),[t,l.name]),null}));function c(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.J)(t)}},7723:e=>{"use strict";e.exports=window.wp.i18n},7739:(e,t,n)=>{"use strict";n(64),n(7771),n(5239)},7771:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o={name:"rgb",min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},7788:(e,t,n)=>{"use strict";n.d(t,{s:()=>r}),n(428);var o=n(3062);const r={media_tablet:"768px",media_desktop:"1024px",reCAPTCHA_v3_secret_key:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",reCAPTCHA_v3_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",defaultContentWidth:window?.boostify_blocks_layout_global_settings?.contentSize||"",containerPadding:"10px",enableTemplatesButton:"true",enableCopyPasteStyles:"false",containerElementsGap:"10px",blocksEditorSpacing:"0px",buttonInheritFromTheme:"false",buttonTheme:{backgroundColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor||"#0073aa",backgroundColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover||"#3a3a3a",textColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor||"#ffffff",textColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover||"#ffffff",borderRadius:window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius||"50px"},...window.boostify_blocks_global_variables||{},defaultContentWidth:window.boostify_blocks_global_variables?.defaultContentWidth||window.boostify_blocks_layout_global_settings?.contentSize};var i;i=()=>{(0,o.A)(r)},window.wp?.domReady&&window.wp.domReady(i)},7931:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(7437),r=n(7788),i=n(5192),s=n(9278);const a=({className:e,padding:t,margin:n})=>{const{media_desktop:a,media_tablet:l}=r.s,{value_Desktop:c,value_Tablet:d,value_Mobile:u}=(0,i.A)(n),{value_Desktop:b,value_Tablet:p,value_Mobile:m}=(0,i.A)(t),{mobile_v:f,tablet_v:h,desktop_v:v}=(0,s.A)({mobile_v:m?.top,tablet_v:p?.top,desktop_v:b?.top}),{mobile_v:g,tablet_v:_,desktop_v:w}=(0,s.A)({mobile_v:m?.left,tablet_v:p?.left,desktop_v:b?.left}),{mobile_v:y,tablet_v:k,desktop_v:A}=(0,s.A)({mobile_v:m?.right,tablet_v:p?.right,desktop_v:b?.right}),{mobile_v:x,tablet_v:$,desktop_v:C}=(0,s.A)({mobile_v:m?.bottom,tablet_v:p?.bottom,desktop_v:b?.bottom}),{mobile_v:S,tablet_v:T,desktop_v:E}=(0,s.A)({mobile_v:u?.top,tablet_v:d?.top,desktop_v:c?.top}),{mobile_v:L,tablet_v:M,desktop_v:q}=(0,s.A)({mobile_v:u?.left,tablet_v:d?.left,desktop_v:c?.left}),{mobile_v:I,tablet_v:D,desktop_v:j}=(0,s.A)({mobile_v:u?.right,tablet_v:d?.right,desktop_v:c?.right}),{mobile_v:H,tablet_v:R,desktop_v:F}=(0,s.A)({mobile_v:u?.bottom,tablet_v:d?.bottom,desktop_v:c?.bottom});return o.AH`
		body ${e} {
			padding-top: ${f} !important;
			padding-right: ${y} !important;
			padding-bottom: ${x} !important;
			padding-left: ${g} !important;
			margin-top: ${S} !important;
			margin-right: ${I};
			margin-bottom: ${H} !important;
			margin-left: ${L};
			@media (min-width: ${l}) {
				padding-top: ${h} !important;
				padding-right: ${k} !important;
				padding-bottom: ${$} !important;
				padding-left: ${_} !important;
				margin-top: ${T} !important;
				margin-right: ${D};
				margin-bottom: ${R} !important;
				margin-left: ${M};
			}
			@media (min-width: ${a}) {
				padding-top: ${v} !important;
				padding-right: ${A} !important;
				padding-bottom: ${C} !important;
				padding-left: ${w} !important;
				margin-top: ${E} !important;
				margin-right: ${j};
				margin-bottom: ${F} !important;
				margin-left: ${q};
			}
		}
	`}},8081:(e,t,n)=>{"use strict";n.d(t,{v:()=>o});var o=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}()},8156:e=>{"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8344:e=>{var t,n,o;t=window,n=0,o=function e(t,o){var r=this,i=this,s=!1;if(Array.isArray(t))return!!t.length&&t.map((function(t){return new e(t,o)}));var a={init:function(){this.options=Object.assign({duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,onlyChildNodes:!0,openOnInit:[],elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active",beforeOpen:function(){},onOpen:function(){},beforeClose:function(){},onClose:function(){}},o);var e="string"==typeof t;this.container=e?document.querySelector(t):t,this.createDefinitions(),i.attachEvents()},createDefinitions:function(){var e=this,t=this.options,o=t.elementClass,r=t.openOnInit,i=t.onlyChildNodes?this.container.childNodes:this.container.querySelectorAll(d(o));this.elements=Array.from(i).filter((function(e){return e.classList&&e.classList.contains(o)})),this.firstElement=this.elements[0],this.lastElement=this.elements[this.elements.length-1],this.elements.filter((function(e){return!e.classList.contains("js-enabled")})).forEach((function(t){t.classList.add("js-enabled"),e.generateIDs(t),e.setARIA(t),e.setTransition(t);var o=e.elements.indexOf(t);n++,r.includes(o)?e.showElement(t,!1):e.closeElement(t,!1)}))},setTransition:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.options,o=n.duration,r=n.panelClass,i=e.querySelector(d(r)),s=l("transitionDuration");i.style[s]=t?null:"".concat(o,"ms")},generateIDs:function(e){var t=this.options,o=t.triggerClass,r=t.panelClass,i=e.querySelector(d(o)),s=e.querySelector(d(r));e.setAttribute("id",e.id||"ac-".concat(n)),i.setAttribute("id",i.id||"ac-trigger-".concat(n)),s.setAttribute("id",s.id||"ac-panel-".concat(n))},removeIDs:function(e){var t=this.options,n=t.triggerClass,o=t.panelClass,r=e.querySelector(d(n)),i=e.querySelector(d(o));e.id.startsWith("ac-")&&e.removeAttribute("id"),r.id.startsWith("ac-")&&r.removeAttribute("id"),i.id.startsWith("ac-")&&i.removeAttribute("id")},setARIA:function(e){var t=this.options,n=t.ariaEnabled,o=t.triggerClass,r=t.panelClass;if(n){var i=e.querySelector(d(o)),s=e.querySelector(d(r));i.setAttribute("role","button"),i.setAttribute("aria-controls",s.id),i.setAttribute("aria-disabled",!1),i.setAttribute("aria-expanded",!1),s.setAttribute("role","region"),s.setAttribute("aria-labelledby",i.id)}},updateARIA:function(e,t){var n=t.ariaExpanded,o=t.ariaDisabled,r=this.options,i=r.ariaEnabled,s=r.triggerClass;if(i){var a=e.querySelector(d(s));a.setAttribute("aria-expanded",n),a.setAttribute("aria-disabled",o)}},removeARIA:function(e){var t=this.options,n=t.ariaEnabled,o=t.triggerClass,r=t.panelClass;if(n){var i=e.querySelector(d(o)),s=e.querySelector(d(r));i.removeAttribute("role"),i.removeAttribute("aria-controls"),i.removeAttribute("aria-disabled"),i.removeAttribute("aria-expanded"),s.removeAttribute("role"),s.removeAttribute("aria-labelledby")}},focus:function(e,t){e.preventDefault();var n=this.options.triggerClass;t.querySelector(d(n)).focus()},focusFirstElement:function(e){this.focus(e,this.firstElement),this.currFocusedIdx=0},focusLastElement:function(e){this.focus(e,this.lastElement),this.currFocusedIdx=this.elements.length-1},focusNextElement:function(e){var t=this.currFocusedIdx+1;if(t>this.elements.length-1)return this.focusFirstElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},focusPrevElement:function(e){var t=this.currFocusedIdx-1;if(t<0)return this.focusLastElement(e);this.focus(e,this.elements[t]),this.currFocusedIdx=t},showElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,o=n.panelClass,r=n.activeClass,i=n.collapse,s=n.beforeOpen;t&&s(e);var a=e.querySelector(d(o)),l=a.scrollHeight;e.classList.add(r),requestAnimationFrame((function(){requestAnimationFrame((function(){a.style.height=t?"".concat(l,"px"):"auto"}))})),this.updateARIA(e,{ariaExpanded:!0,ariaDisabled:!i})},closeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=this.options,o=n.panelClass,r=n.activeClass,i=n.beforeClose,s=e.querySelector(d(o)),a=s.scrollHeight;e.classList.remove(r),t?(i(e),requestAnimationFrame((function(){s.style.height="".concat(a,"px"),requestAnimationFrame((function(){s.style.height=0}))}))):s.style.height=0,this.updateARIA(e,{ariaExpanded:!1,ariaDisabled:!1})},toggleElement:function(e){var t=this.options,n=t.activeClass,o=t.collapse,r=e.classList.contains(n);if(!r||o)return r?this.closeElement(e):this.showElement(e)},closeElements:function(){var e=this,t=this.options,n=t.activeClass;t.showMultiple||this.elements.forEach((function(t,o){t.classList.contains(n)&&o!==e.currFocusedIdx&&e.closeElement(t)}))},handleClick:function(e){var t=this,n=e.currentTarget;this.elements.forEach((function(o,r){o.contains(n)&&"A"!==e.target.nodeName&&(t.currFocusedIdx=r,t.closeElements(),t.focus(e,o),t.toggleElement(o))}))},handleKeydown:function(e){switch(e.key){case"ArrowUp":return this.focusPrevElement(e);case"ArrowDown":return this.focusNextElement(e);case"Home":return this.focusFirstElement(e);case"End":return this.focusLastElement(e);default:return null}},handleFocus:function(e){var t=e.currentTarget,n=this.elements.find((function(e){return e.contains(t)}));this.currFocusedIdx=this.elements.indexOf(n)},handleTransitionEnd:function(e){if(e.stopPropagation(),"height"===e.propertyName){var t=this.options,n=t.onOpen,o=t.onClose,r=e.currentTarget,i=parseInt(r.style.height),s=this.elements.find((function(e){return e.contains(r)}));i>0?(r.style.height="auto",n(s)):o(s)}}};this.attachEvents=function(){if(!s){var e=a.options,t=e.triggerClass,n=e.panelClass;a.handleClick=a.handleClick.bind(a),a.handleKeydown=a.handleKeydown.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.elements.forEach((function(e){var o=e.querySelector(d(t)),r=e.querySelector(d(n));o.addEventListener("click",a.handleClick),o.addEventListener("keydown",a.handleKeydown),o.addEventListener("focus",a.handleFocus),r.addEventListener("webkitTransitionEnd",a.handleTransitionEnd),r.addEventListener("transitionend",a.handleTransitionEnd)})),s=!0}},this.detachEvents=function(){if(s){var e=a.options,t=e.triggerClass,n=e.panelClass;a.elements.forEach((function(e){var o=e.querySelector(d(t)),r=e.querySelector(d(n));o.removeEventListener("click",a.handleClick),o.removeEventListener("keydown",a.handleKeydown),o.removeEventListener("focus",a.handleFocus),r.removeEventListener("webkitTransitionEnd",a.handleTransitionEnd),r.removeEventListener("transitionend",a.handleTransitionEnd)})),s=!1}},this.toggle=function(e){var t=a.elements[e];t&&a.toggleElement(t)},this.open=function(e){var t=a.elements[e];t&&a.showElement(t)},this.openAll=function(){var e=a.options,t=e.activeClass,n=e.onOpen;a.elements.forEach((function(e){e.classList.contains(t)||(a.showElement(e,!1),n(e))}))},this.close=function(e){var t=a.elements[e];t&&a.closeElement(t)},this.closeAll=function(){var e=a.options,t=e.activeClass,n=e.onClose;a.elements.forEach((function(e){e.classList.contains(t)&&(a.closeElement(e,!1),n(e))}))},this.destroy=function(){r.detachEvents(),r.openAll(),a.elements.forEach((function(e){a.removeIDs(e),a.removeARIA(e),a.setTransition(e,!0)})),s=!0},this.update=function(){a.createDefinitions(),r.detachEvents(),r.attachEvents()};var l=function(e){return"string"==typeof document.documentElement.style[e]?e:(e=c(e),e="webkit".concat(e))},c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},d=function(e){return".".concat(CSS.escape(e))};a.init()},void 0!==e.exports?e.exports=o:t.Accordion=o},8885:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(7788),r=n(5192),i=n(9278);const s=function({className:e,prefix:t,prefix_2:n,prefix_3:s,prefix_4:a,value:l,hasUnit:c=!0,unit:d}){const{media_desktop:u,media_tablet:b}=o.s;let{value_Desktop:p,value_Tablet:m,value_Mobile:f}=(0,r.A)(l);!c&&d&&("number"==typeof p&&(p+=d,m+=d,f+=d),"string"==typeof p&&(p=p?p+d:null,m=m?m+d:null,f=f?f+d:null));let h=n||"",v=s||"",g=a||"";const{mobile_v:_,tablet_v:w,desktop_v:y}=(0,i.A)({mobile_v:f,tablet_v:m,desktop_v:p});return{[e]:{[t]:null!=_?_:null,[h]:n&&null!=_?_:null,[v]:s&&null!=_?_:null,[g]:a&&null!=_?_:null,[`@media (min-width: ${b})`]:w?{[t]:w,[h]:n?w:null,[v]:s?w:null,[g]:a?w:null}:void 0,[`@media (min-width: ${u})`]:y?{[t]:y,[h]:n?y:null,[v]:s?y:null,[g]:a?y:null}:void 0}}}},9278:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=({mobile_v:e=null,tablet_v:t=null,desktop_v:n=null})=>{let o=t,r=n;return e===t&&t===n?{mobile_v:e,tablet_v:null,desktop_v:null}:(n!==t&&n!==e||(r=null),t===e&&(o=null),{mobile_v:null!=e?e:null,tablet_v:null!=o?o:null,desktop_v:null!=r?r:null})}},9503:(e,t,n)=>{"use strict";n.d(t,{MY:()=>i,r1:()=>r});var o=n(9735);function r(e){var t=(0,o.FK)(e);return function(n,o,r,i){for(var s="",a=0;a<t;a++)s+=e[a](n,o,r,i)||"";return s}}function i(e){return function(t){t.root||(t=t.return)&&e(t)}}},9593:(e,t,n)=>{"use strict";n.d(t,{T:()=>a,w:()=>s});var o=n(1609),r=n(5815),i=(n(2323),n(1287),(0,o.createContext)("undefined"!=typeof HTMLElement?(0,r.A)({key:"css"}):null));i.Provider;var s=function(e){return(0,o.forwardRef)((function(t,n){var r=(0,o.useContext)(i);return e(t,r,n)}))},a=(0,o.createContext)({})},9735:(e,t,n)=>{"use strict";n.d(t,{BC:()=>f,Bq:()=>a,FK:()=>m,HC:()=>c,HT:()=>r,K5:()=>d,YW:()=>l,b2:()=>p,c1:()=>b,kg:()=>h,kp:()=>i,tW:()=>s,tn:()=>o,wN:()=>u});var o=Math.abs,r=String.fromCharCode,i=Object.assign;function s(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}function a(e){return e.trim()}function l(e,t){return(e=t.exec(e))?e[0]:e}function c(e,t,n){return e.replace(t,n)}function d(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function b(e,t,n){return e.slice(t,n)}function p(e){return e.length}function m(e){return e.length}function f(e,t){return t.push(e),e}function h(e,t){return e.map(t).join("")}}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="boostify-blocks:",r.l=(n,o,i,s)=>{if(e[n])e[n].push(o);else{var a,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+i){a=u;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[o];var b=(t,o)=>{a.onerror=a.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(o))),t)return t(o)},p=setTimeout(b.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=b.bind(null,a.onerror),a.onload=b.bind(null,a.onload),l&&document.head.appendChild(a)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})(),(()=>{var e={4907:0};r.f.j=(t,n)=>{var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));n.push(o[2]=i);var s=r.p+r.u(t),a=new Error;r.l(s,(n=>{if(r.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}}),"chunk-"+t,t)}};var t=(t,n)=>{var o,i,[s,a,l]=n,c=0;if(s.some((t=>0!==e[t]))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);l&&l(r)}for(t&&t(n);c<s.length;c++)i=s[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=r(1609),t=r.n(e);const n=window.ReactDOM;var o=r.n(n),i=r(8344),s=r.n(i);function a(e,t){e&&"accordion"===t.layout&&new(s())(e,{duration:400,showMultiple:t?.showMultiple,openOnInit:t.collapseOtherItems?t?.expandFirstItem?[0]:[]:[...Array(99).keys()],activeClass:"active"})}var l=r(7788),c=r(5192);class d{scrollTimeoutId=null;constructor(e){Object.assign(this,{scrollTimeout:100,roundingMethod:Math.round,sizingMethod:e=>e.element.firstElementChild.offsetWidth,...e}),this.scrollTimeoutId=null,this.itemSize=this.sizingMethod(this),this.update(),this.addEventListener=this.element.addEventListener.bind(this.element),this.removeEventListener=this.element.removeEventListener.bind(this.element),this.plugins=new window.Map,this.resizeObserver=new ResizeObserver(this.onSlideResize),this.resizeObserver.observe(this.element);for(const e of this.element.children)this.resizeObserver.observe(e);this.attachListeners()}with(e,t=!0){for(const n of e)n.slider=this,this.plugins.set(n.id,n),t&&n.enable();return this}attachListeners(){this.addEventListener("scroll",this.onScroll,{passive:!0})}detachListeners(){this.removeEventListener("scroll",this.onScroll),this.scrollTimeoutId&&window.clearTimeout(this.scrollTimeoutId)}slideTo=e=>{this.element.scrollTo({left:e*this.itemSize})};destroy(){this.scrollTimeoutId&&window.clearTimeout(this.scrollTimeoutId),this.detachListeners();for(const[e,t]of this.plugins)t.disable(),t.slider=null,this.plugins.delete(e)}update=()=>{this.slide=this.calculateSlide(),this.slideScrollLeft=this.slide*this.itemSize};calculateSlide(){return this.roundingMethod(this.element.scrollLeft/this.itemSize)}onScrollEnd=()=>{this.scrollTimeoutId=null,this.update(),this.dispatch("slide-stop",this.slide)};onSlideResize=e=>{this.itemSize=this.sizingMethod(this,e)};dispatch(e,t){return this.element.dispatchEvent(new window.CustomEvent(e,{detail:t}))}onScroll=()=>{if(null===this.scrollTimeoutId){const e=this.element.scrollLeft>this.slideScrollLeft?1:-1;this.dispatch("slide-start",this.slide+e)}this.calculateSlide()!==this.slide&&(this.update(),this.dispatch("slide-pass",this.slide)),this.scrollTimeoutId&&window.clearTimeout(this.scrollTimeoutId),this.scrollTimeoutId=window.setTimeout(this.onScrollEnd,this.scrollTimeout)}}class u extends d{constructor(e){super(e)}get id(){return"lubba-wubba-dub-dub"}enable(e){}disable(){}sizingMethod=function(e){const t=e.element.firstElementChild?.offsetWidth,n=e.element.childElementCount;return t+(e.element.scrollWidth-n*t)/(n-1||1)}}function b(){const e=window;return e?.BOOSTIFY_BLOCKS_THEME_DEFAULTS||{}}function p(e){if("true"===e.getAttribute("data-animated"))return;e.setAttribute("data-animated","true");const t=e.querySelectorAll(".wcb-icon-box__progress-circle-wrap"),n=e.querySelectorAll(".wcb-icon-box__progress-bar-wrap"),o=e.querySelectorAll(".wcb-icon-box__number[data-start-number]");t.forEach((e=>{const t=parseInt(e.getAttribute("data-start-number")||"0"),n=parseInt(e.getAttribute("data-end-number")||"0"),o=parseInt(e.getAttribute("data-animation-duration")||"1500"),r=parseInt(e.getAttribute("data-decimal-places")||"0"),i=e.getAttribute("data-number-prefix")||"",s=e.getAttribute("data-number-suffix")||"",a=e.querySelector(".wcb-icon-box__progress-circle"),l=e.querySelector(".wcb-icon-box__number");if(!a||!l)return;const c=280*Math.PI;if(t===n){const e=c-n/100*100/100*c;return a.style.strokeDashoffset=e.toString(),void(l.innerHTML=`${i}${n.toFixed(r)}${s}`)}let d=t;const u=o/Math.abs(n-t),b=()=>{const e=c-(d-t)/(n-t)*(n/100)*100/100*c;a.style.strokeDashoffset=e.toString(),l.innerHTML=`${i}${d.toFixed(r)}${s}`,t<n&&d<n||t>n&&d>n?(d+=t<n?1:-1,setTimeout(b,u)):l.innerHTML=`${i}${n.toFixed(r)}${s}`};b()})),n.forEach((e=>{const t=parseInt(e.getAttribute("data-start-number")||"0"),n=parseInt(e.getAttribute("data-end-number")||"0"),o=parseInt(e.getAttribute("data-animation-duration")||"1500"),r=(e.getAttribute("data-number-prefix"),e.getAttribute("data-number-suffix"),e.querySelector(".wcb-icon-box__progress-bar")),i=e.querySelector(".wcb-icon-box__number"),s=e.querySelector(".wcb-icon-box__number-value");if(!r||!i||!s)return;if(i.style.marginTop="12px",i.style.marginBottom="12px",t===n){const e=n/100*100;return r.style.width=`${e}%`,void(s.innerHTML=`${n}`)}let a=t;const l=o/Math.abs(n-t),c=()=>{const e=(a-t)/(n-t)*n,o=e/100*100;r.style.width=`${o}%`,s.innerHTML=`${Math.round(e)}`,t<n&&a<n||t>n&&a>n?(a+=t<n?1:-1,setTimeout(c,l)):(r.style.width=n/100*100+"%",s.innerHTML=`${Math.round(n)}`)};s.innerHTML=`${t}`,c()})),o.forEach((e=>{const t=parseInt(e.getAttribute("data-start-number")||"0"),n=parseInt(e.getAttribute("data-end-number")||"0"),o=parseInt(e.getAttribute("data-animation-duration")||"1500"),r=parseInt(e.getAttribute("data-decimal-places")||"0"),i=e.querySelector(".wcb-icon-box__number-value");if(!i)return;if(t===n)return void(i.innerHTML=`${n.toFixed(r)}`);let s=t;const a=o/Math.abs(n-t),l=()=>{i.innerHTML=`${s.toFixed(r)}`,t<n&&s<n||t>n&&s>n?(s+=t<n?1:-1,setTimeout(l,a)):i.innerHTML=`${n.toFixed(r)}`};l()}))}r(4181),[{D:".wcb-button__wrap.wcb-update-div",C:t().lazy((()=>r.e(7291).then(r.bind(r,7291))))},{D:".wcb-buttons__wrap.wcb-update-div",C:t().lazy((()=>r.e(4882).then(r.bind(r,4882))))},{D:".wcb-cta__wrap.wcb-update-div",C:t().lazy((()=>r.e(8579).then(r.bind(r,8579))))},{D:".wcb-products__wrap.wcb-update-div",C:t().lazy((()=>r.e(3191).then(r.bind(r,3191)))),F:function(e,t){const n=e=>{if(!e)return!1;const t=e.querySelector(".wcb-products__add-to-cart-label"),n=t?.innerText?.trim();return"Add to cart"===n},o=new MutationObserver((()=>{document.querySelector(`[data-block-products-uniqueId=${e.getAttribute("data-uniqueid")}]`)&&(o.disconnect(),setTimeout((()=>{(()=>{const t=e.getAttribute("data-uniqueid")||"";window.__wcbWishlistListeners||(window.__wcbWishlistListeners=new Set),window.__wcbWishlistListeners.has(t)||(window.__wcbWishlistListeners.add(t),document.addEventListener("click",(e=>{const n=e.target,o=n.closest(`.${t} .wcb-products__product--wishlistBottomRight--item`),r=n.closest(`.${t} .wcb-products__product--wishlistTopRight--item`);(o||r)&&(r&&r.classList.add("is-in-wishlist"),o&&o.classList.add("is-in-wishlist"))})))})(),(()=>{const t=e.getAttribute("data-uniqueid")||"",n=document.querySelector(`.${t} .scroll-snap-slider.-multi`);if(!n||n.classList.contains("swithToScrollSnapX--None")||!n.firstElementChild)return;const o=new u({element:n}),r=document.querySelector(`.${t} .indicators.-multi`),i=document.querySelector(`.${t} .indicators.-multi .p-arrow.-prev`),s=document.querySelector(`.${t} .indicators.-multi .p-arrow.-next`),a=function(){i?.classList.toggle("-disabled",0===n.scrollLeft),s?.classList.toggle("-disabled",n.scrollLeft+n.offsetWidth===n.scrollWidth),r?.classList.toggle("-hidden",n.scrollWidth<=n.clientWidth)};i?.addEventListener("click",(function(e){const t=(o.slide||1)-1;o.slideTo(t)})),s?.addEventListener("click",(function(){const e=(o.slide||0)+1;o.slideTo(e)})),o.addEventListener("slide-pass",a),o.addEventListener("slide-stop",a),o.slideTo(0),window.addEventListener("resize",a),a()})(),(()=>{const t=e.getAttribute("data-uniqueid")||"";window.__wcbAddToCartLayout2Listeners||(window.__wcbAddToCartLayout2Listeners=new Set),window.__wcbAddToCartLayout2Listeners.has(t)||(window.__wcbAddToCartLayout2Listeners.add(t),document.addEventListener("click",(e=>{const n=b(),o=n?.shop_archive_add_to_cart_btn,r=e.target.closest(`.${t} .wcb-products__product-add-to-cart .add_to_cart_button`);if(!r)return;switch(o?.position){case"bottom-visible":r.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");break;case"inside image":setTimeout((()=>{r.classList.add("wcb-products__product-style-hidden-btn-add-to-cart")}),200);break;case"bottom":setTimeout((()=>{r.classList.add("wcb-products__product-style-hidden-btn-add-to-cart")}),500)}const i=r.closest(`.${t} .wcb-products__product-add-to-cart`);if(!i)return;const s=i.querySelector(".added_to_cart");s&&s.classList.add("visible")})))})(),(()=>{const t=e.getAttribute("data-uniqueid")||"";window.__wcbAddToCartIsLoadingListeners||(window.__wcbAddToCartIsLoadingListeners=new Set),window.__wcbAddToCartIsLoadingListeners.has(t)||(window.__wcbAddToCartIsLoadingListeners.add(t),document.addEventListener("click",(e=>{const o=b(),r=o?.shop_archive_add_to_cart_btn,i=e.target,s=i.closest(`.${t} .wcb-products__product-add-to-cart .add_to_cart_button`),a=i.closest(`.${t} .wcb-products__product--btnIconAddToCart--item`);if(s||a){switch(r?.position){case"bottom-visible":n(s)&&s.classList.add("add_to_cart_button--loading");break;case"inside image":n(s)&&s?.classList.add("add_to_cart_button__insite-image--loading");break;case"bottom":if(n(s)){const e=s.querySelector(".wcb-products__add-to-cart-icon");if(e){const t=e.querySelector("svg");t&&t.remove(),e.classList.add("add_to_cart_button__style-bottom-visible--loading")}}break;case"icon":(l=a)&&l.classList.contains("ajax_add_to_cart")&&a?.classList.add("add_to_cart_button--loading")}if(s){const e=s.closest(`.${t} .wcb-products__product-add-to-cart`);if(!e)return;const n=e.querySelector(".added_to_cart");n&&n.classList.add("visible")}if(a){const e=a.closest(`.${t} .wcb-products__product--topRight`);if(!e)return;const n=e.querySelector(".added_to_cart");n&&n.classList.add("visible")}setTimeout((()=>{s&&(s.classList.remove("add_to_cart_button--loading"),s.classList.remove("add_to_cart_button__style-bottom-visible--loading"),s.classList.remove("add_to_cart_button__insite-image--loading")),a&&a.classList.remove("add_to_cart_button--loading")}),500)}var l})))})()}),500))}));o.observe(document.body||document,{childList:!0,subtree:!0})}},{D:".wcb-posts-grid__wrap.wcb-update-div",C:t().lazy((()=>r.e(3097).then(r.bind(r,3097))))},{D:".wcb-container__wrap.wcb-update-div",C:t().lazy((()=>r.e(3012).then(r.bind(r,3012))))},{D:".wcb-faq__wrap.wcb-update-div",C:t().lazy((()=>r.e(4621).then(r.bind(r,4621)))),F:function(e,{general_general:t}){const n=e.children;for(let e=0;e<n.length;e++){const o=n[e];o.classList.contains("accordion-container")&&a(o,t)}}},{D:".wcb-form__wrap.wcb-update-div",C:t().lazy((()=>r.e(8329).then(r.bind(r,8329)))),F:function(e,t){const n=e.getAttribute("data-uniqueid")||"";let o=jQuery;if("function"!=typeof jQuery)return;const r=t.general_gg_recaptcha?.enableReCaptcha&&"v2"===t.general_gg_recaptcha?.version,i=t.general_gg_recaptcha?.enableReCaptcha&&"v3"===t.general_gg_recaptcha?.version;r&&o(`.${n} .g-recaptcha`).attr("data-sitekey",l.s.reCAPTCHA_v2_site_key||""),o("."+n).on("submit",(function(e){e.preventDefault();const r=()=>{let e=o(this).serializeArray();e=e.map((e=>({name:o(`[data-label-for='${e.name}']`).text(),value:e.value})));const r={subject:t.general_action.subject||"",to:t.general_action.main.To.email||"",cc:t.general_action.main.CC.email||"",bcc:t.general_action.main.BCC.email||""};o.ajax({type:"post",dataType:"json",url:boostify_blocks_frontend_ajax_object.ajaxurl,data:{action:"boostify_blocks_form_action",nonce:boostify_blocks_frontend_ajax_object.nonce,formData:e,mailInfo:r},context:this,beforeSend:function(){},success:function(r){console.log(99,"-----------OK",{props:t,response:r,formData:e}),o(`.${n} .wcb-form__successMessageText`).css("display","block"),o(`.${n} .wcb-form__errorMessageText`).css("display","none"),"url-text"===t?.general_general?.confirmationType&&t?.general_general?.successRedirectUrl&&(window.location.href=t?.general_general?.successRedirectUrl)},error:function(e,t,r){console.log("The following error occured: "+t,r),o(`.${n} .wcb-form__successMessageText`).css("display","none"),o(`.${n} .wcb-form__errorMessageText`).css("display","block")}})};return"object"==typeof grecaptcha&&i?grecaptcha.ready((function(){grecaptcha.execute(l.s.reCAPTCHA_v3_site_key,{action:"submit"}).then((function(e){console.log(123,{token:e,key:l.s.reCAPTCHA_v3_site_key}),r()}))})):r(),!1}))}},{D:".wcb-heading__wrap.wcb-update-div",C:t().lazy((()=>r.e(4767).then(r.bind(r,4767))))},{D:".wcb-icon-box__wrap.wcb-update-div",C:t().lazy((()=>r.e(6388).then(r.bind(r,6388))))},{D:".wcb-image__wrap.wcb-update-div",C:t().lazy((()=>r.e(9446).then(r.bind(r,9446))))},{D:".wcb-map__wrap.wcb-update-div",C:t().lazy((()=>r.e(3995).then(r.bind(r,3995))))},{D:".wcb-team__wrap.wcb-update-div",C:t().lazy((()=>r.e(1304).then(r.bind(r,1304))))},{D:".wcb-testimonials__wrap.wcb-update-div",C:t().lazy((()=>r.e(1355).then(r.bind(r,1355)))),F:function(e,t){const n=e.getAttribute("data-uniqueid")||"";let o=jQuery;if("function"!=typeof jQuery)return;const{animationDuration:r,autoplaySpeed:i,hoverpause:s,isAutoPlay:a,rewind:d,showArrowsDots:u,adaptiveHeight:b}=t.general_carousel,{colGap:p,columns:m,numberofTestimonials:f,textAlignment:h}=t.general_general,{value_Desktop:v,value_Tablet:g,value_Mobile:_}=(0,c.A)(m),w={infinite:d,speed:r||500,autoplay:a,autoplaySpeed:i,slidesToShow:v,slidesToScroll:1,prevArrow:'<button type="button" class="slick-arrow slick-prev">\n\t\t<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n\t\t<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />\n\t\t</svg>\n\t\t</button>',nextArrow:'<button type="button" class="slick-arrow slick-next">\n\t\t<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n\t\t<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />\n\t\t</svg>\n\t\t</button>',dots:"Arrow"!==u,arrows:"Dot"!==u,adaptiveHeight:b,pauseOnHover:s,responsive:[{breakpoint:parseInt(l.s.media_desktop),settings:{slidesToShow:g}},{breakpoint:parseInt(l.s.media_tablet),settings:{slidesToShow:_}}]};o(`.${n} .wcb-testimonials__wrap-items`)?.slick?.(w)}},{D:".wcb-countdown__wrap.wcb-update-div",C:t().lazy((()=>r.e(8316).then(r.bind(r,8316)))),F:function(e,t){const n={block_id:t.uniqueId,showDays:t.general_date.show_day,showHours:t.general_date.show_hour,showMinutes:t.general_date.show_minute,isFrontend:!0,redirectURL:"",endDateTime:"",timerEndAction:""};if("evergreen"===t.general_date.timerType){var o,r,i,s,a;n.timerType="evergreen",n.evergreenDays=null!==(o=t.general_date.evergreenDays)&&void 0!==o?o:0,n.evergreenHrs=null!==(r=t.general_date.evergreenHrs)&&void 0!==r?r:0,n.evergreenMinutes=null!==(i=t.general_date.evergreenMinutes)&&void 0!==i?i:0,n.resetDays=null!==(s=t.general_date.resetDays)&&void 0!==s?s:30,n.campaignID=null!==(a=t.general_date.campaignID)&&void 0!==a?a:"",WCBCountdown.init(`.${t.uniqueId} .wcb-countdown__content`,n)}else{const e=t.general_date.date.split("T");n.endDateTime=e[0],n.timerEndAction=e[1]||"",WCBCountdown.changeEndTime(`.${t.uniqueId} .wcb-countdown__content`,n)}}},{D:".wcb-tabs__wrap.wcb-update-div",C:t().lazy((()=>r.e(3095).then(r.bind(r,3095)))),F:function(e,t){const n=new MutationObserver((()=>{document.querySelector(`.wcb-tabs__wrap[data-uniqueid="${e.getAttribute("data-uniqueid")}"]`)&&(n.disconnect(),setTimeout((()=>{(()=>{const t=e.getAttribute("data-uniqueid")||"",n=document.querySelector(`.wcb-tabs__wrap[data-uniqueid="${t}"]`);if(!n)return void console.warn("No .wcb-tabs__wrap element found for uniqueid:",t);const o=n.querySelectorAll(".wcb-tabs__title_inner"),r=n.querySelectorAll(".wcb-tab-child__wrap");o.length&&r.length?(r.forEach(((e,t)=>{e.setAttribute("role","tabpanel"),0!==t?e.setAttribute("hidden",""):(e.removeAttribute("hidden"),o[0].classList.add("active"))})),o.forEach(((e,t)=>{e.addEventListener("click",(()=>{const n=null!==e.getAttribute("data-tab-index")?parseInt(e.getAttribute("data-tab-index")||""):t;if(isNaN(n)||!r[n])return void console.warn("Tabs block: Invalid tab index or content not found.");o.forEach((e=>{e.classList.remove("active","wcb-tabs__title_inner-selected");const t=e.querySelector(".wcb-tabs__icon"),n=e.querySelector(".wcb-tabs__title");t?.classList.remove("wcb-tabs__icon-selected"),n?.classList.remove("wcb-tabs__title-selected")})),e.classList.add("active","wcb-tabs__title_inner-selected");const i=e.querySelector(".wcb-tabs__icon"),s=e.querySelector(".wcb-tabs__title");i?.classList.add("wcb-tabs__icon-selected"),s?.classList.add("wcb-tabs__title-selected"),r.forEach((e=>e.setAttribute("hidden",""))),r[n].removeAttribute("hidden")}))}))):console.warn("Tabs block: No titles or contents found.")})()}),500))}));n.observe(document.body||document,{childList:!0,subtree:!0})}},{D:".wcb-counter-box__wrap.wcb-update-div",C:t().lazy((()=>Promise.resolve().then(r.bind(r,4181)))),F:function(){const e=()=>{const e=document.querySelectorAll(".wcb-counter-box__wrap:not(.wcb-update-div)");if(!window.IntersectionObserver)return void e.forEach(p);const t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(p(e.target),t.unobserve(e.target))}))}),{threshold:.2,rootMargin:"0px 0px -100px 0px"});e.forEach((e=>{t.observe(e)}))};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",(()=>{setTimeout(e,100)})):setTimeout(e,100)}},{D:".wcb-slider__wrap.wcb-update-div",C:t().lazy((()=>r.e(2008).then(r.bind(r,2008)))),F:function(e,t){const n=e.getAttribute("data-uniqueid")||"";let o=jQuery;if("function"!=typeof jQuery)return;if(!t.general_carousel||!t.general_general)return;const{animationDuration:r,autoplaySpeed:i,hoverpause:s,isAutoPlay:a,rewind:d,showArrowsDots:u,adaptiveHeight:b}=t.general_carousel||{},{colGap:p,columns:m,numberofTestimonials:f,textAlignment:h}=t.general_general||{},{value_Desktop:v,value_Tablet:g,value_Mobile:_}=(0,c.A)(m),w={infinite:d,speed:r||500,autoplay:a,autoplaySpeed:i,slidesToShow:v,slidesToScroll:1,prevArrow:'<button type="button" class="slick-arrow slick-prev">\n\t\t<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n\t\t<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />\n\t\t</svg>\n\t\t</button>',nextArrow:'<button type="button" class="slick-arrow slick-next">\n\t\t<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">\n\t\t<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />\n\t\t</svg>\n\t\t</button>',dots:"Arrow"!==u,arrows:"Dot"!==u,adaptiveHeight:b,pauseOnHover:s,responsive:[{breakpoint:parseInt(l.s.media_desktop),settings:{slidesToShow:g}},{breakpoint:parseInt(l.s.media_tablet),settings:{slidesToShow:_}}]},y=o(`.${n} .wcb-slider__wrap-items`);if(0!==y.length&&0!==y.children().length)try{y.slick(w)}catch(e){console.error("🎠 Slider initialization failed:",e)}}},{D:".wcb-slider-child__wrap.wcb-update-div",C:t().lazy((()=>r.e(9021).then(r.bind(r,9021))))},{D:".wcb-icon-list__wrap.wcb-update-div",C:t().lazy((()=>r.e(9681).then(r.bind(r,9681))))},{D:".wcb-icon-list__wrap.wcb-update-div[data-block-type='icon-item']",C:t().lazy((()=>r.e(8425).then(r.bind(r,8425))))},{D:".wcb-icon__wrap.wcb-update-div",C:t().lazy((()=>r.e(7644).then(r.bind(r,7644))))}].forEach((({D:t,C:n,F:r})=>{const i=document.querySelectorAll(t);var s,a;i&&i.length&&(s=n,a=r,i.forEach((t=>{const n=t.querySelector(`pre[data-wcb-block-attrs=${t.getAttribute("data-uniqueid")}]`),r=t.querySelector(`div[data-wcb-global-styles=${t.getAttribute("data-uniqueid")}]`);if(!n||!n.innerText||!r)return;const i=JSON.parse(n?.innerText);o().render((0,e.createElement)(e.Suspense,{fallback:(0,e.createElement)("div",null)},(0,e.createElement)(s,{...i})),r),a&&a(t,i),t.classList.remove("wcb-update-div"),n.remove()})))}))})()})();
=======
	`;
};

/***/ }),

/***/ "./src/block-countdown/FrontendScript.tsx":
/*!************************************************!*\
  !*** ./src/block-countdown/FrontendScript.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCountDown: () => (/* binding */ initCountDown)
/* harmony export */ });
function initCountDown(elem, props) {
  const baseData = {
    'block_id': props.uniqueId,
    'showDays': props.general_date.show_day,
    'showHours': props.general_date.show_hour,
    'showMinutes': props.general_date.show_minute,
    'isFrontend': true,
    'redirectURL': '',
    'endDateTime': '',
    'timerEndAction': ''
  };
  if (props.general_date.timerType === 'evergreen') {
    var _props$general_date$e, _props$general_date$e2, _props$general_date$e3, _props$general_date$r, _props$general_date$c;
    baseData.timerType = 'evergreen';
    baseData.evergreenDays = (_props$general_date$e = props.general_date.evergreenDays) !== null && _props$general_date$e !== void 0 ? _props$general_date$e : 0;
    baseData.evergreenHrs = (_props$general_date$e2 = props.general_date.evergreenHrs) !== null && _props$general_date$e2 !== void 0 ? _props$general_date$e2 : 0;
    baseData.evergreenMinutes = (_props$general_date$e3 = props.general_date.evergreenMinutes) !== null && _props$general_date$e3 !== void 0 ? _props$general_date$e3 : 0;
    baseData.resetDays = (_props$general_date$r = props.general_date.resetDays) !== null && _props$general_date$r !== void 0 ? _props$general_date$r : 30;
    baseData.campaignID = (_props$general_date$c = props.general_date.campaignID) !== null && _props$general_date$c !== void 0 ? _props$general_date$c : '';
    WCBCountdown.init(`.${props.uniqueId} .wcb-countdown__content`, baseData);
  } else {
    const cd_date = props.general_date.date.split("T");
    baseData.endDateTime = cd_date[0];
    baseData.timerEndAction = cd_date[1] || '';
    WCBCountdown.changeEndTime(`.${props.uniqueId} .wcb-countdown__content`, baseData);
  }
}

/***/ }),

/***/ "./src/block-counter/FrontendStyles.tsx":
/*!**********************************************!*\
  !*** ./src/block-counter/FrontendStyles.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animateProgressElements: () => (/* binding */ animateProgressElements),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalCss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalCss */ "./src/block-counter/GlobalCss.tsx");



const FrontendStyles = attrs => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_GlobalCss__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...attrs
  });
};

// Animation logic for individual counter element
function animateCounterElement(counterBlock) {
  // Check if already animated to prevent re-animation
  if (counterBlock.getAttribute("data-animated") === "true") {
    return;
  }

  // Mark as animated
  counterBlock.setAttribute("data-animated", "true");

  // Target circle, bar, and number wrappers within this specific counter block
  const circleWrappers = counterBlock.querySelectorAll(".wcb-icon-box__progress-circle-wrap");
  const barWrappers = counterBlock.querySelectorAll(".wcb-icon-box__progress-bar-wrap");
  const numberWrappers = counterBlock.querySelectorAll(".wcb-icon-box__number[data-start-number]");

  // Animate circles
  circleWrappers.forEach(wrapper => {
    const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
    const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
    const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
    const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");
    const numberPrefix = wrapper.getAttribute("data-number-prefix") || "";
    const numberSuffix = wrapper.getAttribute("data-number-suffix") || "";
    const circle = wrapper.querySelector(".wcb-icon-box__progress-circle");
    const numberDisplay = wrapper.querySelector(".wcb-icon-box__number");
    if (!circle || !numberDisplay) return;
    const radius = 150 - 5 * 2; // Same as in renderProgressCircle
    const circumference = radius * 2 * Math.PI;
    const maxValue = 100;
    if (startNumber === endNumber) {
      const progress = endNumber / maxValue * 100;
      const strokeDashoffset = circumference - progress / 100 * circumference;
      circle.style.strokeDashoffset = strokeDashoffset.toString();
      numberDisplay.innerHTML = `${numberPrefix}${endNumber.toFixed(decimalPlaces)}${numberSuffix}`;
      return;
    }
    let current = startNumber;
    const incrementTime = animationDuration / Math.abs(endNumber - startNumber);
    const updateCircle = () => {
      const progress = (current - startNumber) / (endNumber - startNumber) * (endNumber / maxValue) * 100;
      const strokeDashoffset = circumference - progress / 100 * circumference;
      circle.style.strokeDashoffset = strokeDashoffset.toString();
      numberDisplay.innerHTML = `${numberPrefix}${current.toFixed(decimalPlaces)}${numberSuffix}`;
      if (startNumber < endNumber && current < endNumber || startNumber > endNumber && current > endNumber) {
        current += startNumber < endNumber ? 1 : -1;
        setTimeout(updateCircle, incrementTime);
      } else {
        numberDisplay.innerHTML = `${numberPrefix}${endNumber.toFixed(decimalPlaces)}${numberSuffix}`;
      }
    };
    updateCircle();
  });

  // Animate bars
  barWrappers.forEach(wrapper => {
    const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
    const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
    const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
    const numberPrefix = wrapper.getAttribute("data-number-prefix") || "";
    const numberSuffix = wrapper.getAttribute("data-number-suffix") || "";
    const bar = wrapper.querySelector(".wcb-icon-box__progress-bar");
    const numberDisplay = wrapper.querySelector(".wcb-icon-box__number");
    const numberValue = wrapper.querySelector(".wcb-icon-box__number-value");
    if (!bar || !numberDisplay || !numberValue) return;
    numberDisplay.style.marginTop = "12px";
    numberDisplay.style.marginBottom = "12px";
    const maxValue = 100;
    if (startNumber === endNumber) {
      const widthPercentage = endNumber / maxValue * 100;
      bar.style.width = `${widthPercentage}%`;
      numberValue.innerHTML = `${endNumber}`;
      return;
    }
    let current = startNumber;
    const incrementTime = animationDuration / Math.abs(endNumber - startNumber);
    const updateBar = () => {
      const progress = (current - startNumber) / (endNumber - startNumber) * endNumber;
      const widthPercentage = progress / maxValue * 100;
      bar.style.width = `${widthPercentage}%`;
      numberValue.innerHTML = `${Math.round(progress)}`;
      if (startNumber < endNumber && current < endNumber || startNumber > endNumber && current > endNumber) {
        current += startNumber < endNumber ? 1 : -1;
        setTimeout(updateBar, incrementTime);
      } else {
        bar.style.width = `${endNumber / maxValue * 100}%`;
        numberValue.innerHTML = `${Math.round(endNumber)}`;
      }
    };
    numberValue.innerHTML = `${startNumber}`;
    updateBar();
  });

  // Animate numbers
  numberWrappers.forEach(wrapper => {
    const startNumber = parseInt(wrapper.getAttribute("data-start-number") || "0");
    const endNumber = parseInt(wrapper.getAttribute("data-end-number") || "0");
    const animationDuration = parseInt(wrapper.getAttribute("data-animation-duration") || "1500");
    const decimalPlaces = parseInt(wrapper.getAttribute("data-decimal-places") || "0");
    const numberDisplay = wrapper.querySelector(".wcb-icon-box__number-value");
    if (!numberDisplay) return;
    if (startNumber === endNumber) {
      numberDisplay.innerHTML = `${endNumber.toFixed(decimalPlaces)}`;
      return;
    }
    let current = startNumber;
    const incrementTime = animationDuration / Math.abs(endNumber - startNumber);
    const updateNumber = () => {
      numberDisplay.innerHTML = `${current.toFixed(decimalPlaces)}`;
      if (startNumber < endNumber && current < endNumber || startNumber > endNumber && current > endNumber) {
        current += startNumber < endNumber ? 1 : -1;
        setTimeout(updateNumber, incrementTime);
      } else {
        numberDisplay.innerHTML = `${endNumber.toFixed(decimalPlaces)}`;
      }
    };
    updateNumber();
  });
}

// Setup Intersection Observer for scroll trigger
function animateProgressElements() {
  // Function to initialize when DOM is ready
  const initializeAnimation = () => {
    // Use specific selector for counter blocks
    const counterBlocks = document.querySelectorAll(".wcb-counter-box__wrap:not(.wcb-update-div)");

    // Check if IntersectionObserver is supported
    if (!window.IntersectionObserver) {
      counterBlocks.forEach(animateCounterElement);
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounterElement(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      // Trigger when 20% of the element is visible
      rootMargin: "0px 0px -100px 0px" // Start 100px before element enters viewport
    });

    // Observe all counter blocks
    counterBlocks.forEach(block => {
      observer.observe(block);
    });
  };

  // Check if DOM is already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(initializeAnimation, 100); // Small delay to ensure dynamic content is loaded
    });
  } else {
    setTimeout(initializeAnimation, 100);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontendStyles);

/***/ }),

/***/ "./src/block-counter/GlobalCss.tsx":
/*!*****************************************!*\
  !*** ./src/block-counter/GlobalCss.tsx ***!
  \*****************************************/
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
    general_layout,
    style_description,
    style_desination,
    style_Icon,
    style_title,
    advance_responsiveCondition,
    advance_zIndex,
    general_icon,
    style_dimension,
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
        // Styles for circle type
        ".wcb-icon-box__progress-circle-wrap": {
          position: "relative",
          margin: general_layout.textAlignment.Desktop === "left" ? "" : general_layout.textAlignment.Tablet === "left" ? "" : general_layout.textAlignment.Desktop === "right" ? "0 0 0 auto" : general_layout.textAlignment.Tablet === "right" ? "0 0 0 auto" : "0 auto"
        },
        // Styles for bar type
        ".wcb-icon-box__progress-bar-wrap": {
          position: "relative",
          width: "100%",
          textAlign: general_layout.textAlignment.Desktop === "left" ? "start" : general_layout.textAlignment.Tablet === "left" ? "start" : general_layout.textAlignment.Desktop === "right" ? "end" : general_layout.textAlignment.Tablet === "right" ? "end" : "center"
        },
        ".wcb-icon-box__title": {
          fontSize: "16px",
          color: "#666",
          marginTop: "10px"
        },
        ".wcb-icon-box__icon": {
          fontSize: "20px",
          marginBottom: "10px"
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
      margin: style_dimension?.margin,
      padding: style_dimension?.padding
    })
  }), general_icon.enableIcon ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
      margin: style_Icon.dimensions?.margin
    }), (0,_utils_getPaddingMarginStyles__WEBPACK_IMPORTED_MODULE_3__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__icon-wrap`,
      padding: style_Icon.dimensions?.padding
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
      className: `${WRAP_CLASSNAME} .wcb-icon-box__number`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
      value: style_desination.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
        color: style_desination.textColor
      }
    }]
  }) : null, general_layout.enableTitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_emotion_react__WEBPACK_IMPORTED_MODULE_7__.Global, {
    styles: [(0,_utils_getTypographyStyles__WEBPACK_IMPORTED_MODULE_5__["default"])({
      typography: style_title.typography,
      className: `${WRAP_CLASSNAME} .wcb-icon-box__number`
    }), (0,_utils_getStyleObjectFromResponsiveAttr__WEBPACK_IMPORTED_MODULE_4__["default"])({
      className: `${WRAP_CLASSNAME} .wcb-icon-box__number`,
      value: style_title.marginBottom,
      prefix: "marginBottom"
    }), {
      [`${WRAP_CLASSNAME} .wcb-icon-box__number`]: {
        color: style_title.textColor
      }
    }]
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

/***/ "./src/block-faq/FrontendStyles.tsx":
/*!******************************************!*\
  !*** ./src/block-faq/FrontendStyles.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarouselForWcbFaq: () => (/* binding */ initCarouselForWcbFaq)
/* harmony export */ });
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accordion_js_dist_accordion_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js/dist/accordion.min.css */ "./node_modules/accordion-js/dist/accordion.min.css");


// --------------------------- FORM AJAX
function initCarouselForWcbFaq(div, {
  general_general
}) {
  const collection = div.children;
  for (let i = 0; i < collection.length; i++) {
    const el = collection[i];
    if (el.classList.contains("accordion-container")) {
      handleAccordion(el, general_general);
    }
  }
  //
}
function handleAccordion(container, general_general) {
  if (!container || general_general.layout !== "accordion") {
    return;
  }
  new (accordion_js__WEBPACK_IMPORTED_MODULE_0___default())(container, {
    duration: 400,
    showMultiple: general_general?.showMultiple,
    openOnInit: !general_general.collapseOtherItems ? [...Array(99).keys()] : general_general?.expandFirstItem ? [0] : [],
    activeClass: "active"
  });
}

/***/ }),

/***/ "./src/block-form/FrontendStyles.tsx":
/*!*******************************************!*\
  !*** ./src/block-form/FrontendStyles.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSubmitFormForWcbForm: () => (/* binding */ handleSubmitFormForWcbForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");

// --------------------------- FORM AJAX
function handleSubmitFormForWcbForm(div, props) {
  // const formId = div.id;
  const dataUniqueid = div.getAttribute("data-uniqueid") || "";
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }
  const reCaptchaV2 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v2";
  const reCaptchaV3 = props.general_gg_recaptcha?.enableReCaptcha && props.general_gg_recaptcha?.version === "v3";
  if (reCaptchaV2) {
    $(`.${dataUniqueid} .g-recaptcha`).attr("data-sitekey", ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.reCAPTCHA_v2_site_key || "");
  }
  $("." + dataUniqueid).on("submit", function (event) {
    event.preventDefault();

    // ----------------------------
    const handleAjaxAction = () => {
      let formData = $(this).serializeArray();
      formData = formData.map(item => {
        const fieldLabel = $(`[data-label-for='${item.name}']`).text();
        return {
          name: fieldLabel,
          value: item.value
        };
      });
      const mailInfo = {
        subject: props.general_action.subject || "",
        to: props.general_action.main.To.email || "",
        cc: props.general_action.main.CC.email || "",
        bcc: props.general_action.main.BCC.email || ""
      };
      $.ajax({
        type: "post",
        // HTTP method: post or get.
        dataType: "json",
        // Response data type: xml, json, script, or html.
        url: boostify_blocks_frontend_ajax_object.ajaxurl,
        // WP default AJAX handler URL.
        data: {
          action: "boostify_blocks_form_action",
          nonce: boostify_blocks_frontend_ajax_object.nonce,
          formData,
          mailInfo
        },
        context: this,
        beforeSend: function () {},
        success: function (response) {
          // This is OK code
          console.log(99, "-----------OK", {
            props,
            response,
            formData
          });
          $(`.${dataUniqueid}` + " .wcb-form__successMessageText").css("display", "block");
          $(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css("display", "none");
          if (props?.general_general?.confirmationType === "url-text" && props?.general_general?.successRedirectUrl) {
            window.location.href = props?.general_general?.successRedirectUrl;
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log("The following error occured: " + textStatus, errorThrown);
          $(`.${dataUniqueid}` + " .wcb-form__successMessageText").css("display", "none");
          $(`.${dataUniqueid}` + " .wcb-form__errorMessageText").css("display", "block");
        }
      });
    };

    // ------------------------------------------------------------------------------------
    if (typeof grecaptcha === "object" && reCaptchaV3) {
      grecaptcha.ready(function () {
        grecaptcha.execute(___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key, {
          action: "submit"
        }).then(function (token) {
          console.log(123, {
            token,
            key: ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.reCAPTCHA_v3_site_key
          });
          handleAjaxAction();
        });
      });
    } else {
      handleAjaxAction();
    }
    return false;
  });
}

/***/ }),

/***/ "./src/block-products/FrontendStyles.tsx":
/*!***********************************************!*\
  !*** ./src/block-products/FrontendStyles.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarouselForWcbProducts: () => (/* binding */ initCarouselForWcbProducts)
/* harmony export */ });
/* harmony import */ var _MyScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyScrollSnapSlider */ "./src/block-products/MyScrollSnapSlider.tsx");
/* harmony import */ var _utils_themeDefaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/themeDefaults */ "./src/utils/themeDefaults.ts");
// @ts-nocheck



/**
 * Initialize carousel for WCB Products block
 * 
 * @param div div element of the block
 * @param props peoperties of the block
 */
function initCarouselForWcbProducts(div, props) {
  // 1. Handle Wishlist Click
  const handleWishlistClick = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";

    // Sure every block only register listener one time
    if (!window.__wcbWishlistListeners) {
      window.__wcbWishlistListeners = new Set();
    }
    // Avoid attach multi for the same block
    if (!window.__wcbWishlistListeners.has(dataUniqueid)) {
      window.__wcbWishlistListeners.add(dataUniqueid);
      document.addEventListener("click", e => {
        const target = e.target;
        const btnBottomRight = target.closest(`.${dataUniqueid} .wcb-products__product--wishlistBottomRight--item`);
        const btnTopRight = target.closest(`.${dataUniqueid} .wcb-products__product--wishlistTopRight--item`);
        if (!btnBottomRight && !btnTopRight) return;
        if (btnTopRight) {
          btnTopRight.classList.add("is-in-wishlist");
        }
        if (btnBottomRight) {
          btnBottomRight.classList.add("is-in-wishlist");
        }
      });
    }
  };

  // 2. Handle add style hidden for add to cart button
  const handleAddToCartStyleHidden = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";

    // Only attach listener 1 time / block
    if (!window.__wcbAddToCartLayout2Listeners) {
      window.__wcbAddToCartLayout2Listeners = new Set();
    }
    if (window.__wcbAddToCartLayout2Listeners.has(dataUniqueid)) return;
    window.__wcbAddToCartLayout2Listeners.add(dataUniqueid);
    document.addEventListener("click", e => {
      const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_1__.getThemeDefaults)();
      const addToCartBtn = theme?.shop_archive_add_to_cart_btn;
      const target = e.target;

      // Find button add-to-cart depence on block
      const btnLayoutInsiteImage = target.closest(`.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`);
      if (!btnLayoutInsiteImage) return;
      switch (addToCartBtn?.position) {
        case 'bottom-visible':
          btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
          break;
        case 'inside image':
          setTimeout(() => {
            btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
          }, 200);
          break;
        case 'bottom':
          setTimeout(() => {
            btnLayoutInsiteImage.classList.add("wcb-products__product-style-hidden-btn-add-to-cart");
          }, 500);
          break;
        case 'icon':
          // Do nothing
          break;
        default:
          // Do nothing
          break;
      }

      // 2. Show view cart trong cùng block
      const parent = btnLayoutInsiteImage.closest(`.${dataUniqueid} .wcb-products__product-add-to-cart`);
      if (!parent) return;
      const viewCart = parent.querySelector(".added_to_cart");
      if (viewCart) {
        viewCart.classList.add("visible");
      }
    });
  };

  /**
   * Check button add to cart is loading state
   * 
   * @param buttonEl HTMLButtonElement
   * @returns boolean
   */
  const checkIsLoadingAddToCart = buttonEl => {
    if (!buttonEl) return false;
    const label = buttonEl.querySelector(".wcb-products__add-to-cart-label");
    const text = label?.innerText?.trim();
    return text === "Add to cart";
  };

  /**
   * Check button add to cart has class ajax_add_to_cart
   * 
   * @param buttonEl HTMLButtonElement
   * @returns boolean
   */
  const hasAjaxAddToCartClass = buttonEl => {
    if (!buttonEl) return false;
    return buttonEl.classList.contains("ajax_add_to_cart");
  };

  // 3. Handle add style is loading for add to cart button
  const handleAddToCartIsLoading = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";

    // Only attach listener 1 time / block
    if (!window.__wcbAddToCartIsLoadingListeners) {
      window.__wcbAddToCartIsLoadingListeners = new Set();
    }
    if (window.__wcbAddToCartIsLoadingListeners.has(dataUniqueid)) return;
    window.__wcbAddToCartIsLoadingListeners.add(dataUniqueid);
    document.addEventListener("click", e => {
      const theme = (0,_utils_themeDefaults__WEBPACK_IMPORTED_MODULE_1__.getThemeDefaults)();
      const addToCartBtn = theme?.shop_archive_add_to_cart_btn;
      const target = e.target;

      // Find button add-to-cart depence on block
      const btnLayoutBottomVisible = target.closest(
      // `.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`
      `.${dataUniqueid} .wcb-products__product-add-to-cart .add_to_cart_button`);
      const btnLayoutTopRightIcon = target.closest(`.${dataUniqueid} .wcb-products__product--btnIconAddToCart--item`);

      // 1. Add className loading
      if (btnLayoutBottomVisible || btnLayoutTopRightIcon) {
        switch (addToCartBtn?.position) {
          case 'bottom-visible':
            if (checkIsLoadingAddToCart(btnLayoutBottomVisible)) {
              btnLayoutBottomVisible.classList.add("add_to_cart_button--loading");
            }
            break;
          case 'inside image':
            if (checkIsLoadingAddToCart(btnLayoutBottomVisible)) {
              btnLayoutBottomVisible?.classList.add("add_to_cart_button__insite-image--loading");
            }
            break;
          case 'bottom':
            if (checkIsLoadingAddToCart(btnLayoutBottomVisible)) {
              const iconWrapper = btnLayoutBottomVisible.querySelector('.wcb-products__add-to-cart-icon');
              // Delete SVG if have
              if (iconWrapper) {
                const svg = iconWrapper.querySelector("svg");
                if (svg) {
                  svg.remove();
                }
                iconWrapper.classList.add("add_to_cart_button__style-bottom-visible--loading");
              }
            }
            break;
          case 'icon':
            // Do nothing
            if (hasAjaxAddToCartClass(btnLayoutTopRightIcon)) {
              btnLayoutTopRightIcon?.classList.add("add_to_cart_button--loading");
            }
            break;
          default:
            // Do nothing
            break;
        }
        if (btnLayoutBottomVisible) {
          // 2. Show view cart trong cùng block
          const parent = btnLayoutBottomVisible.closest(`.${dataUniqueid} .wcb-products__product-add-to-cart`);
          if (!parent) return;
          const viewCart = parent.querySelector(".added_to_cart");
          if (viewCart) {
            viewCart.classList.add("visible");
          }
        }
        if (btnLayoutTopRightIcon) {
          // 2. Show view cart trong cùng block
          const parent = btnLayoutTopRightIcon.closest(`.${dataUniqueid} .wcb-products__product--topRight`);
          if (!parent) return;
          const viewCart = parent.querySelector(".added_to_cart");
          if (viewCart) {
            viewCart.classList.add("visible");
          }
        }

        // Delay 500ms
        setTimeout(() => {
          if (btnLayoutBottomVisible) {
            btnLayoutBottomVisible.classList.remove("add_to_cart_button--loading");
            btnLayoutBottomVisible.classList.remove("add_to_cart_button__style-bottom-visible--loading");
            btnLayoutBottomVisible.classList.remove("add_to_cart_button__insite-image--loading");
          }
          if (btnLayoutTopRightIcon) {
            btnLayoutTopRightIcon.classList.remove("add_to_cart_button--loading");
          }
        }, 500);
      }
    });
  };
  const handleCarouselForWcbProducts = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";

    // Handle Carousel
    const sliderMultiElement = document.querySelector(`.${dataUniqueid} .scroll-snap-slider.-multi`);
    if (!sliderMultiElement || sliderMultiElement.classList.contains("swithToScrollSnapX--None") || !sliderMultiElement.firstElementChild) {
      return;
    }
    const sliderMulti = new _MyScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__.CustomPlugin({
      element: sliderMultiElement
    });
    const arrows = document.querySelector(`.${dataUniqueid} .indicators.-multi`);
    const prev = document.querySelector(`.${dataUniqueid} .indicators.-multi .p-arrow.-prev`);
    const next = document.querySelector(`.${dataUniqueid} .indicators.-multi .p-arrow.-next`);
    const updateArrows = function () {
      prev?.classList.toggle("-disabled", sliderMultiElement.scrollLeft === 0);
      next?.classList.toggle("-disabled", sliderMultiElement.scrollLeft + sliderMultiElement.offsetWidth === sliderMultiElement.scrollWidth);
      arrows?.classList.toggle("-hidden", sliderMultiElement.scrollWidth <= sliderMultiElement.clientWidth);
    };
    prev?.addEventListener("click", function (event) {
      const prevI = (sliderMulti.slide || 1) - 1;
      sliderMulti.slideTo(prevI);
    });
    next?.addEventListener("click", function () {
      const nextI = (sliderMulti.slide || 0) + 1;
      sliderMulti.slideTo(nextI);
    });
    sliderMulti.addEventListener("slide-pass", updateArrows);
    sliderMulti.addEventListener("slide-stop", updateArrows);

    //
    sliderMulti.slideTo(0);
    window.addEventListener("resize", updateArrows);
    updateArrows();
  };

  // Observe DOM changes to ensure the block is fully loaded
  const domObserver = new MutationObserver(() => {
    if (document.querySelector(`[data-block-products-uniqueId=${div.getAttribute("data-uniqueid")}]`)) {
      domObserver.disconnect();
      setTimeout(() => {
        handleWishlistClick();
        handleCarouselForWcbProducts();
        handleAddToCartStyleHidden();
        handleAddToCartIsLoading();
      }, 500);
    }
  });
  domObserver.observe(document.body || document, {
    childList: true,
    subtree: true
  });
  //
}

/***/ }),

/***/ "./src/block-products/MyScrollSnapSlider.tsx":
/*!***************************************************!*\
  !*** ./src/block-products/MyScrollSnapSlider.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPlugin: () => (/* binding */ CustomPlugin)
/* harmony export */ });
/* harmony import */ var _ScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollSnapSlider */ "./src/block-products/ScrollSnapSlider.ts");

class CustomPlugin extends _ScrollSnapSlider__WEBPACK_IMPORTED_MODULE_0__.ScrollSnapSlider {
  /**
   * Pass any config here
   * @param {*} config
   */
  constructor(element) {
    super(element);
  }

  /**
   * Override this if you need multiple instances of the same plugin on the same slider.
   * By default, the id will be the plugin's class name.
   * @return {String}
   */
  get id() {
    return "lubba-wubba-dub-dub";
  }

  /**
   * Attach listeners, fetch DOM things, save reference to the slider
   * @param {ScrollSnapSlider} slider
   * @override
   */
  enable(slider) {
    // TODO methods stub
  }

  /**
   * Free resources, remove listeners, ...
   * @override
   */
  disable() {
    // TODO methods stub
  }
  sizingMethod = function (slider) {
    const childWidth = slider.element.firstElementChild?.offsetWidth;
    const numbChild = slider.element.childElementCount;
    const totalWidth = slider.element.scrollWidth;
    const totalGapWidth = totalWidth - numbChild * childWidth;
    const gap = totalGapWidth / (numbChild - 1 || 1);
    return childWidth + gap;
  };
}

/***/ }),

/***/ "./src/block-products/ScrollSnapSlider.ts":
/*!************************************************!*\
  !*** ./src/block-products/ScrollSnapSlider.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollSnapSlider: () => (/* binding */ ScrollSnapSlider)
/* harmony export */ });
/**
 * All options have sensitive defaults. The only required option is the <code>element</code>.
 */

/**
 * @classdesc Mostly CSS slider with great performance.
 */
class ScrollSnapSlider {
  /**
   * Base element of this slider
   */

  /**
   * additional behaviour
   */

  /**
   * @inheritDoc
   */

  /**
   * @inheritDoc
   */

  /**
   * Rounding method used to calculate the current slide (e.g. Math.floor, Math.round, Math.ceil, or totally custom.)
   *
   * @param value - factor indicating th current position (e.g "0" for first slide, "2.5" for third slide and a half)
   * @return f(x) - integer factor indicating the currently 'active' slide.
   */

  /**
   * Timeout delay in milliseconds used to catch the end of scroll events
   */

  /**
   * Calculated size of a single item
   */

  /**
   * Computes a single number representing the slides widths.
   * By default, this will use the first slide's <code>offsetWidth</code>.
   * Possible values could be an average of all slides, the min or max values, ...
   *
   * @param slider current slider
   * @param entries resized entries
   * @return integer size of a slide in pixels
   */

  /**
   * Active slide
   */

  /**
   * Resize observer used to update item size
   */

  /**
   * Timeout ID used to catch the end of scroll events
   */
  scrollTimeoutId = null;

  /**
   * Active slide's scrollLeft in the containing element
   */

  /**
   * Bind methods and possibly attach listeners.
   */
  constructor(options) {
    Object.assign(this, {
      scrollTimeout: 100,
      roundingMethod: Math.round,
      sizingMethod: slider => slider.element.firstElementChild.offsetWidth,
      ...options
    });
    this.scrollTimeoutId = null;
    this.itemSize = this.sizingMethod(this);
    this.update();
    this.addEventListener = this.element.addEventListener.bind(this.element);
    this.removeEventListener = this.element.removeEventListener.bind(this.element);
    this.plugins = new window.Map();
    this.resizeObserver = new ResizeObserver(this.onSlideResize);
    this.resizeObserver.observe(this.element);
    for (const child of this.element.children) {
      this.resizeObserver.observe(child);
    }
    this.attachListeners();
  }

  /**
   * Extend the Slider's functionality with Plugins
   *
   * @param plugins Plugins to attach
   * @param enabled Whether the plugins are enabled right away
   */
  with(plugins, enabled = true) {
    for (const plugin of plugins) {
      plugin.slider = this;
      this.plugins.set(plugin.id, plugin);
      enabled && plugin.enable();
    }
    return this;
  }

  /**
   * Attach all necessary listeners
   */
  attachListeners() {
    this.addEventListener("scroll", this.onScroll, {
      passive: true
    });
  }

  /**
   * Detach all listeners
   */
  detachListeners() {
    this.removeEventListener("scroll", this.onScroll);
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
  }

  /**
   * Scroll to a slide by index.
   */
  slideTo = index => {
    this.element.scrollTo({
      left: index * this.itemSize
    });
  };

  /**
   * Free resources and listeners, disable plugins
   */
  destroy() {
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
    this.detachListeners();
    for (const [id, plugin] of this.plugins) {
      plugin.disable();
      plugin.slider = null;
      this.plugins.delete(id);
    }
  }

  /**
   * Updates the computed values
   */
  update = () => {
    this.slide = this.calculateSlide();
    this.slideScrollLeft = this.slide * this.itemSize;
  };

  /**
   * Calculates the active slide using the user-defined <code>roundingMethod</code>
   */
  calculateSlide() {
    return this.roundingMethod(this.element.scrollLeft / this.itemSize);
  }

  /**
   * Calculate all necessary things and dispatch an event when sliding stops
   */
  onScrollEnd = () => {
    this.scrollTimeoutId = null;
    this.update();
    this.dispatch("slide-stop", this.slide);
  };

  /**
   * Callback on resize. This will recompute the <code>itemSize</code>
   * @param entries Entries that have changed size
   */
  onSlideResize = entries => {
    this.itemSize = this.sizingMethod(this, entries);
  };

  /**
   * Dispatches an event on the slider's element
   */
  dispatch(event, detail) {
    return this.element.dispatchEvent(new window.CustomEvent(event, {
      detail
    }));
  }

  /**
   * Act when scrolling starts and stops
   */
  onScroll = () => {
    if (null === this.scrollTimeoutId) {
      const direction = this.element.scrollLeft > this.slideScrollLeft ? 1 : -1;
      this.dispatch("slide-start", this.slide + direction);
    }
    if (this.calculateSlide() !== this.slide) {
      this.update();
      this.dispatch("slide-pass", this.slide);
    }
    this.scrollTimeoutId && window.clearTimeout(this.scrollTimeoutId);
    this.scrollTimeoutId = window.setTimeout(this.onScrollEnd, this.scrollTimeout);
  };
}

/***/ }),

/***/ "./src/block-slider/FrontendStyles.tsx":
/*!*********************************************!*\
  !*** ./src/block-slider/FrontendStyles.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarouselForWcbSliders: () => (/* binding */ initCarouselForWcbSliders)
/* harmony export */ });
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


//
function initCarouselForWcbSliders(div, props) {
  const dataUniqueid = div.getAttribute("data-uniqueid") || "";
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }

  // Safety check: Return early if this is a slider child or missing required props
  if (!props.general_carousel || !props.general_general) {
    return;
  }
  const {
    animationDuration,
    autoplaySpeed,
    hoverpause,
    isAutoPlay,
    rewind,
    showArrowsDots,
    adaptiveHeight
  } = props.general_carousel || {};
  const {
    colGap,
    columns,
    numberofTestimonials,
    textAlignment
  } = props.general_general || {};
  const {
    value_Desktop: col_desktop,
    value_Tablet: col_tablet,
    value_Mobile: col_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(columns);
  const settings = {
    infinite: rewind,
    speed: animationDuration || 500,
    autoplay: isAutoPlay,
    autoplaySpeed,
    //
    slidesToShow: col_desktop,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-arrow slick-prev">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
		</button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
		</button>`,
    dots: showArrowsDots !== "Arrow",
    arrows: showArrowsDots !== "Dot",
    adaptiveHeight,
    pauseOnHover: hoverpause,
    responsive: [{
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.media_desktop),
      settings: {
        slidesToShow: col_tablet
      }
    }, {
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.media_tablet),
      settings: {
        slidesToShow: col_mobile
      }
    }]
  };
  const targetSelector = `.${dataUniqueid} .wcb-slider__wrap-items`;
  const targetElement = $(targetSelector);
  if (targetElement.length === 0) {
    return;
  }
  if (targetElement.children().length === 0) {
    return;
  }
  try {
    // @ts-ignore
    targetElement.slick(settings);
  } catch (error) {
    console.error('🎠 Slider initialization failed:', error);
  }
}

/***/ }),

/***/ "./src/block-tabs/FrontendStyles.tsx":
/*!*******************************************!*\
  !*** ./src/block-tabs/FrontendStyles.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarouselForWcbFaq: () => (/* binding */ initCarouselForWcbFaq),
/* harmony export */   initTabsForWcbTabs: () => (/* binding */ initTabsForWcbTabs)
/* harmony export */ });
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! accordion-js */ "./node_modules/accordion-js/dist/accordion.min.js");
/* harmony import */ var accordion_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(accordion_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var accordion_js_dist_accordion_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! accordion-js/dist/accordion.min.css */ "./node_modules/accordion-js/dist/accordion.min.css");


// --------------------------- FORM AJAX

// https://stackoverflow.com/questions/11645081/how-to-build-simple-tabs-with-jquery

function initCarouselForWcbFaq(div, {
  general_general
}) {
  const collection = div.children;
  for (let i = 0; i < collection.length; i++) {
    const el = collection[i];
    if (el.classList.contains("accordion-container")) {
      handleAccordion(el, general_general);
    }
  }
  //
}
function handleAccordion(container, general_general) {
  if (!container || general_general.layout !== "accordion") {
    return;
  }
  new (accordion_js__WEBPACK_IMPORTED_MODULE_0___default())(container, {
    duration: 400,
    showMultiple: general_general?.showMultiple,
    openOnInit: !general_general.collapseOtherItems ? [...Array(99).keys()] : general_general?.expandFirstItem ? [0] : [],
    activeClass: "active"
  });
}

// Handle event click tabs
function initTabsForWcbTabs(div, props) {
  const handleTabsForWcbTabs = () => {
    const dataUniqueid = div.getAttribute("data-uniqueid") || "";
    const tabWrap = document.querySelector(`.wcb-tabs__wrap[data-uniqueid="${dataUniqueid}"]`);
    if (!tabWrap) {
      console.warn("No .wcb-tabs__wrap element found for uniqueid:", dataUniqueid);
      return;
    }
    const titles = tabWrap.querySelectorAll(".wcb-tabs__title_inner");
    const contents = tabWrap.querySelectorAll(".wcb-tab-child__wrap");
    if (!titles.length || !contents.length) {
      console.warn("Tabs block: No titles or contents found.");
      return;
    }

    // Init status origin: show tab 1
    contents.forEach((content, index) => {
      content.setAttribute("role", "tabpanel");
      if (index !== 0) {
        content.setAttribute("hidden", "");
      } else {
        content.removeAttribute("hidden");
        titles[0].classList.add("active");
      }
    });
    titles.forEach((title, index) => {
      title.addEventListener("click", () => {
        const tabIndex = title.getAttribute("data-tab-index") !== null ? parseInt(title.getAttribute("data-tab-index") || "") : index;
        if (isNaN(tabIndex) || !contents[tabIndex]) {
          console.warn("Tabs block: Invalid tab index or content not found.");
          return;
        }

        // Remove selected classes from all tabs and icons
        titles.forEach(t => {
          t.classList.remove("active", "wcb-tabs__title_inner-selected");
          const icon = t.querySelector(".wcb-tabs__icon");
          const titleText = t.querySelector(".wcb-tabs__title");
          icon?.classList.remove("wcb-tabs__icon-selected");
          titleText?.classList.remove("wcb-tabs__title-selected");
        });

        // Add selected classes to current tab and icon
        title.classList.add("active", "wcb-tabs__title_inner-selected");
        const currentIcon = title.querySelector(".wcb-tabs__icon");
        const currentTitleText = title.querySelector(".wcb-tabs__title");
        currentIcon?.classList.add("wcb-tabs__icon-selected");
        currentTitleText?.classList.add("wcb-tabs__title-selected");

        // Show selected content
        contents.forEach(content => content.setAttribute("hidden", ""));
        contents[tabIndex].removeAttribute("hidden");
      });
    });
  };
  const domObserver = new MutationObserver(() => {
    if (document.querySelector(`.wcb-tabs__wrap[data-uniqueid="${div.getAttribute("data-uniqueid")}"]`)) {
      domObserver.disconnect();
      setTimeout(() => {
        handleTabsForWcbTabs();
      }, 500);
    }
  });
  domObserver.observe(document.body || document, {
    childList: true,
    subtree: true
  });
}

/***/ }),

/***/ "./src/block-testimonials/FrontendStyles.tsx":
/*!***************************************************!*\
  !*** ./src/block-testimonials/FrontendStyles.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initCarouselForWcbTestimonials: () => (/* binding */ initCarouselForWcbTestimonials)
/* harmony export */ });
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../________ */ "./src/________.ts");


//
function initCarouselForWcbTestimonials(div, props) {
  const dataUniqueid = div.getAttribute("data-uniqueid") || "";
  let $ = jQuery;
  if (typeof jQuery !== "function") {
    return;
  }
  const {
    animationDuration,
    autoplaySpeed,
    hoverpause,
    isAutoPlay,
    rewind,
    showArrowsDots,
    adaptiveHeight
  } = props.general_carousel;
  const {
    colGap,
    columns,
    numberofTestimonials,
    textAlignment
  } = props.general_general;
  const {
    value_Desktop: col_desktop,
    value_Tablet: col_tablet,
    value_Mobile: col_mobile
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_0__["default"])(columns);
  const settings = {
    infinite: rewind,
    speed: animationDuration || 500,
    autoplay: isAutoPlay,
    autoplaySpeed,
    //
    slidesToShow: col_desktop,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-arrow slick-prev">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
		</svg>
		</button>`,
    nextArrow: `<button type="button" class="slick-arrow slick-next">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
		<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		</svg>
		</button>`,
    dots: showArrowsDots !== "Arrow",
    arrows: showArrowsDots !== "Dot",
    adaptiveHeight,
    pauseOnHover: hoverpause,
    responsive: [{
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.media_desktop),
      settings: {
        slidesToShow: col_tablet
      }
    }, {
      breakpoint: parseInt(___WEBPACK_IMPORTED_MODULE_1__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES.media_tablet),
      settings: {
        slidesToShow: col_mobile
      }
    }]
  };
  // @ts-ignore
  $(`.${dataUniqueid} .wcb-testimonials__wrap-items`)?.slick?.(settings);
}

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
			}
			@media (min-width: ${media_desktop}) {
				padding-top: ${padding_Desktop_top} !important;
				padding-right: ${padding_Desktop_right} !important;
				padding-bottom: ${padding_Desktop_bottom} !important;
				padding-left: ${padding_Desktop_left} !important;
				margin-top: ${margin_Desktop_top} !important;
				margin-right: ${margin_Desktop_right};
				margin-bottom: ${margin_Desktop_bottom} !important;
				margin-left: ${margin_Desktop_left};
			}
		}
	`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPaddingMarginStyles);

/***/ }),

/***/ "./src/utils/getStyleObjectFromResponsiveAttr.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getStyleObjectFromResponsiveAttr.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



function getStyleObjectFromResponsiveAttr({
  className,
  prefix,
  prefix_2,
  prefix_3,
  prefix_4,
  value,
  hasUnit = true,
  unit
}) {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  let {
    value_Desktop,
    value_Tablet,
    value_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  if (!hasUnit && !!unit) {
    if (typeof value_Desktop === "number") {
      value_Desktop = value_Desktop + unit;
      value_Tablet = value_Tablet + unit;
      value_Mobile = value_Mobile + unit;
    }
    if (typeof value_Desktop === "string") {
      value_Desktop = value_Desktop ? value_Desktop + unit : null;
      value_Tablet = value_Tablet ? value_Tablet + unit : null;
      value_Mobile = value_Mobile ? value_Mobile + unit : null;
    }
  }

  //
  let prefix2 = prefix_2 || "";
  let prefix3 = prefix_3 || "";
  let prefix4 = prefix_4 || "";

  //
  const {
    mobile_v: value_Mobile_new,
    tablet_v: value_Tablet_new,
    desktop_v: value_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: value_Mobile,
    tablet_v: value_Tablet,
    desktop_v: value_Desktop
  });
  //

  return {
    [className]: {
      [prefix]: value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null,
      [prefix2]: prefix_2 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [prefix3]: prefix_3 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [prefix4]: prefix_4 ? value_Mobile_new !== null && value_Mobile_new !== void 0 ? value_Mobile_new : null : null,
      [`@media (min-width: ${media_tablet})`]: value_Tablet_new ? {
        [prefix]: value_Tablet_new,
        [prefix2]: prefix_2 ? value_Tablet_new : null,
        [prefix3]: prefix_3 ? value_Tablet_new : null,
        [prefix4]: prefix_4 ? value_Tablet_new : null
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: value_Desktop_new ? {
        [prefix]: value_Desktop_new,
        [prefix2]: prefix_2 ? value_Desktop_new : null,
        [prefix3]: prefix_3 ? value_Desktop_new : null,
        [prefix4]: prefix_4 ? value_Desktop_new : null
      } : undefined
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStyleObjectFromResponsiveAttr);

/***/ }),

/***/ "./src/utils/getTypographyStyles.ts":
/*!******************************************!*\
  !*** ./src/utils/getTypographyStyles.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkResponsiveValueForOptimizeCSS */ "./src/utils/checkResponsiveValueForOptimizeCSS.ts");



const getTypographyStyles = ({
  typography,
  className
}) => {
  if (!typography || !className) {
    return {};
  }
  const {
    appearance,
    fontFamily,
    fontSizes,
    letterSpacing,
    lineHeight,
    textDecoration,
    textTransform
  } = typography;
  if (!!fontFamily) {
    (0,_font__WEBPACK_IMPORTED_MODULE_1__.loadGoogleFont)(fontFamily);
  }
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;
  //
  const fontSize_Desktop = fontSizes?.Desktop;
  const fontSize_Tablet = fontSizes?.Tablet || fontSize_Desktop;
  const fontSize_Mobile = fontSizes?.Mobile || fontSize_Tablet;
  //
  const lineHeight_Desktop = lineHeight?.Desktop;
  const lineHeight_Tablet = lineHeight?.Tablet || lineHeight_Desktop;
  const lineHeight_Mobile = lineHeight?.Mobile || lineHeight_Tablet;
  //
  const letterSpacing_Desktop = letterSpacing?.Desktop;
  const letterSpacing_Tablet = letterSpacing?.Tablet || letterSpacing_Desktop;
  const letterSpacing_Mobile = letterSpacing?.Mobile || letterSpacing_Tablet;
  //

  //
  const {
    mobile_v: fontSize_Mobile_new,
    tablet_v: fontSize_Tablet_new,
    desktop_v: fontSize_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: fontSize_Mobile,
    tablet_v: fontSize_Tablet,
    desktop_v: fontSize_Desktop
  });
  const {
    mobile_v: lineHeight_Mobile_new,
    tablet_v: lineHeight_Tablet_new,
    desktop_v: lineHeight_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: lineHeight_Mobile,
    tablet_v: lineHeight_Tablet,
    desktop_v: lineHeight_Desktop
  });
  const {
    mobile_v: letterSpacing_Mobile_new,
    tablet_v: letterSpacing_Tablet_new,
    desktop_v: letterSpacing_Desktop_new
  } = (0,_checkResponsiveValueForOptimizeCSS__WEBPACK_IMPORTED_MODULE_2__["default"])({
    mobile_v: letterSpacing_Mobile,
    tablet_v: letterSpacing_Tablet,
    desktop_v: letterSpacing_Desktop
  });
  //

  return {
    [`${className}`]: {
      fontFamily: fontFamily,
      fontWeight: appearance?.style?.fontWeight,
      fontStyle: appearance?.style?.fontStyle,
      textDecoration,
      textTransform,
      //
      fontSize: fontSize_Mobile_new,
      lineHeight: lineHeight_Mobile_new,
      letterSpacing: letterSpacing_Mobile_new,
      [`@media (min-width: ${media_tablet})`]: fontSize_Tablet_new || lineHeight_Tablet_new || letterSpacing_Tablet_new ? {
        fontSize: fontSize_Tablet_new,
        lineHeight: lineHeight_Tablet_new,
        letterSpacing: letterSpacing_Tablet_new
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: fontSize_Desktop_new || lineHeight_Desktop_new || letterSpacing_Desktop_new ? {
        fontSize: fontSize_Desktop_new,
        lineHeight: lineHeight_Desktop_new,
        letterSpacing: letterSpacing_Desktop_new
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTypographyStyles);

/***/ }),

/***/ "./src/utils/getValueFromAttrsResponsives.ts":
/*!***************************************************!*\
  !*** ./src/utils/getValueFromAttrsResponsives.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getValueFromAttrsResponsives = function (properties, currentDevice) {
  var _properties$Tablet, _properties$Mobile;
  const v_Desktop = properties?.Desktop;
  const v_Tablet = (_properties$Tablet = properties?.Tablet) !== null && _properties$Tablet !== void 0 ? _properties$Tablet : v_Desktop;
  const v_Mobile = (_properties$Mobile = properties?.Mobile) !== null && _properties$Mobile !== void 0 ? _properties$Mobile : v_Tablet;
  let currentDeviceValue = undefined;
  if (currentDevice) {
    currentDeviceValue = currentDevice === "Desktop" ? v_Desktop : currentDevice === "Tablet" ? v_Tablet : v_Mobile;
  }
  return {
    value_Desktop: v_Desktop !== null && v_Desktop !== void 0 ? v_Desktop : null,
    value_Tablet: v_Tablet !== null && v_Tablet !== void 0 ? v_Tablet : null,
    value_Mobile: v_Mobile !== null && v_Mobile !== void 0 ? v_Mobile : null,
    currentDeviceValue
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getValueFromAttrsResponsives);

/***/ }),

/***/ "./src/utils/global-style.js":
/*!***********************************!*\
  !*** ./src/utils/global-style.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToResponsiveStyle: () => (/* binding */ convertToResponsiveStyle),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* binding */ createStyleTagWithGlobalStyleContent),
/* harmony export */   isStyleTagAdded: () => (/* binding */ isStyleTagAdded),
/* harmony export */   removeOldStyleTag: () => (/* binding */ removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* binding */ renderGlobalStyle)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/utils/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_2__);



const convertToResponsiveStyle = () => {
  let responsiveJson = {
    'desktop': {
      'style': []
    },
    'tablet': {
      'breakpoint': '991px',
      'style': []
    },
    'mobile': {
      'breakpoint': '767px',
      'style': []
    }
  };
  let content = '';
  _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.loadPromise.then(() => {
    const settings = new _wordpress_api__WEBPACK_IMPORTED_MODULE_2__.models.Settings();
    settings.fetch().then(response => {
      const typography = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.head)(response.wcb_global_typography);
      const colors = response.wcb_global_colors;
      for (const selector in typography) {
        //styleContent += `${cssPrefix} ${selector}{${JSToCSS(typo[selector])}}`;
        const attrs = typography[selector];
        let selectorStyle = {
          [selector]: {}
        };
        responsiveJson['desktop']['style'].push(selectorStyle);
        responsiveJson['mobile']['style'].push(selectorStyle);
        responsiveJson['tablet']['style'].push(selectorStyle);
        for (const attrName in attrs) {
          if (attrName.includes('Tablet')) {} else if (attrName.includes('Mobile')) {} else {}
        }
      }
      return responsiveJson;
    });
  });
  return content;
};
const renderGlobalStyle = () => {
  setTimeout(() => {
    const _renderGlobalStyle = head => {
      if (head) {
        removeOldStyleTag(head);
        const style = createStyleTagWithGlobalStyleContent();
        head.appendChild(style);
      }
    };
    const headElement = (0,___WEBPACK_IMPORTED_MODULE_0__.getDocumentHead)();
    _renderGlobalStyle(headElement);
    if (headElement !== document.querySelector('head')) {
      _renderGlobalStyle(document.querySelector('head'));
    }
  }, 50);
};
const createStyleTagWithGlobalStyleContent = () => {
  let cssPrefix = '.woostify-block';
  if ((0,___WEBPACK_IMPORTED_MODULE_0__.isEditingPost)()) {
    cssPrefix = '.editor-styles-wrapper .woostify-block';
  }
  const style = document.createElement('style');
  style.classList.add('wcb-global-style');
  style.textContent = convertToResponsiveStyle();
  return style;
};
const removeOldStyleTag = (head = document.querySelector('head')) => {
  if (!isStyleTagAdded(head)) {
    return;
  }
  const oldTag = head.querySelector('.wcb-global-style');
  oldTag.remove();
};
const isStyleTagAdded = (head = document.querySelector('head')) => {
  return head.querySelector('.wcb-global-style');
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSToCSS: () => (/* binding */ JSToCSS),
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   convertToResponsiveStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.convertToResponsiveStyle),
/* harmony export */   createLinkTagWithGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.createLinkTagWithGoogleFont),
/* harmony export */   createStyleTagWithGlobalStyleContent: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.createStyleTagWithGlobalStyleContent),
/* harmony export */   getDocumentHead: () => (/* binding */ getDocumentHead),
/* harmony export */   getGoogleFontURL: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.getGoogleFontURL),
/* harmony export */   isEditingContent: () => (/* binding */ isEditingContent),
/* harmony export */   isEditingPost: () => (/* binding */ isEditingPost),
/* harmony export */   isGoogleFontEnqueued: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isGoogleFontEnqueued),
/* harmony export */   isStyleTagAdded: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.isStyleTagAdded),
/* harmony export */   isWebFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.isWebFont),
/* harmony export */   loadGoogleFont: () => (/* reexport safe */ _font__WEBPACK_IMPORTED_MODULE_0__.loadGoogleFont),
/* harmony export */   removeOldStyleTag: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.removeOldStyleTag),
/* harmony export */   renderGlobalStyle: () => (/* reexport safe */ _global_style__WEBPACK_IMPORTED_MODULE_2__.renderGlobalStyle),
/* harmony export */   wcbCreateColor: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbCreateColor),
/* harmony export */   wcbGetRgb: () => (/* reexport safe */ _color__WEBPACK_IMPORTED_MODULE_1__.wcbGetRgb)
/* harmony export */ });
/* harmony import */ var _font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./font */ "./src/utils/font.ts");
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color */ "./src/utils/color.js");
/* harmony import */ var _global_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global-style */ "./src/utils/global-style.js");




/**
 * Capitalize the first letter in string
 * @param {*} string
 * @returns
 */
const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const getDocumentHead = () => {
  let head = document.querySelector('head');
  if (isEditingContent()) {
    head = document.querySelector('iframe[name="editor-canvas"]').contentWindow.document.querySelector('head');
  }
  return head;
};
const isEditingContent = () => !!document.querySelector('iframe[name="editor-canvas"]');
const isEditingPost = () => {
  if (document.querySelector('.edit-post-visual-editor')) {
    return true;
  }
  return false;
};
const JSToCSS = JS => {
  let cssString = '';
  for (let objectKey in JS) {
    if (objectKey.includes('Unit')) {
      return;
    }
    let suffix = '';
    if (objectKey.includes('fontFamily')) {
      suffix = ', Sans-serif';
    }
    if (objectKey.includes('letterSpacing')) {
      suffix = 'px';
    }
    cssString += objectKey.replace(/([A-Z])/g, g => `-${g[0].toLowerCase()}`) + ': ' + JS[objectKey] + suffix + ';\n';
  }
  return cssString;
};

/***/ }),

/***/ "./src/utils/themeDefaults.ts":
/*!************************************!*\
  !*** ./src/utils/themeDefaults.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThemeDefaults: () => (/* binding */ getThemeDefaults)
/* harmony export */ });
function getThemeDefaults() {
  // @ts-ignore
  const win = window;
  return win?.BOOSTIFY_BLOCKS_THEME_DEFAULTS || {};
}

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["api"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "boostify-blocks:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"block-common-css/FrontendStyles": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************************************!*\
  !*** ./src/block-common-css/FrontendStyles.tsx ***!
  \*************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_faq_FrontendStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../block-faq/FrontendStyles */ "./src/block-faq/FrontendStyles.tsx");
/* harmony import */ var _block_form_FrontendStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block-form/FrontendStyles */ "./src/block-form/FrontendStyles.tsx");
/* harmony import */ var _block_testimonials_FrontendStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block-testimonials/FrontendStyles */ "./src/block-testimonials/FrontendStyles.tsx");
/* harmony import */ var _block_slider_FrontendStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block-slider/FrontendStyles */ "./src/block-slider/FrontendStyles.tsx");
/* harmony import */ var _block_products_FrontendStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block-products/FrontendStyles */ "./src/block-products/FrontendStyles.tsx");
/* harmony import */ var _block_countdown_FrontendScript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../block-countdown/FrontendScript */ "./src/block-countdown/FrontendScript.tsx");
/* harmony import */ var _block_tabs_FrontendStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../block-tabs/FrontendStyles */ "./src/block-tabs/FrontendStyles.tsx");
/* harmony import */ var _block_counter_FrontendStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../block-counter/FrontendStyles */ "./src/block-counter/FrontendStyles.tsx");











const classes = [{
  D: ".wcb-button__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-button_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-button/GlobalCss */ "./src/block-button/GlobalCss.tsx")))
}, {
  D: ".wcb-buttons__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-buttons_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-buttons/GlobalCss */ "./src/block-buttons/GlobalCss.tsx")))
}, {
  D: ".wcb-cta__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-cta_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-cta/GlobalCss */ "./src/block-cta/GlobalCss.tsx")))
}, {
  D: ".wcb-products__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-products_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-products/GlobalCss */ "./src/block-products/GlobalCss.tsx"))),
  F: _block_products_FrontendStyles__WEBPACK_IMPORTED_MODULE_6__.initCarouselForWcbProducts
}, {
  D: ".wcb-posts-grid__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-posts-grid_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-posts-grid/GlobalCss */ "./src/block-posts-grid/GlobalCss.tsx")))
}, {
  D: ".wcb-container__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-container_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-container/GlobalCss */ "./src/block-container/GlobalCss.tsx")))
}, {
  D: ".wcb-faq__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-faq_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-faq/GlobalCss */ "./src/block-faq/GlobalCss.tsx"))),
  F: _block_faq_FrontendStyles__WEBPACK_IMPORTED_MODULE_2__.initCarouselForWcbFaq
}, {
  D: ".wcb-form__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-form_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-form/GlobalCss */ "./src/block-form/GlobalCss.tsx"))),
  F: _block_form_FrontendStyles__WEBPACK_IMPORTED_MODULE_3__.handleSubmitFormForWcbForm
}, {
  D: ".wcb-heading__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-heading_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-heading/GlobalCss */ "./src/block-heading/GlobalCss.tsx")))
}, {
  D: ".wcb-icon-box__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-icon-box_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-icon-box/GlobalCss */ "./src/block-icon-box/GlobalCss.tsx")))
}, {
  D: ".wcb-image__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-image_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-image/GlobalCss */ "./src/block-image/GlobalCss.tsx")))
}, {
  D: ".wcb-map__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-map_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-map/GlobalCss */ "./src/block-map/GlobalCss.tsx")))
}, {
  D: ".wcb-team__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-team_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-team/GlobalCss */ "./src/block-team/GlobalCss.tsx")))
}, {
  D: ".wcb-testimonials__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-testimonials_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-testimonials/GlobalCss */ "./src/block-testimonials/GlobalCss.tsx"))),
  F: _block_testimonials_FrontendStyles__WEBPACK_IMPORTED_MODULE_4__.initCarouselForWcbTestimonials
}, {
  D: ".wcb-countdown__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-countdown_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-countdown/GlobalCss */ "./src/block-countdown/GlobalCss.tsx"))),
  F: _block_countdown_FrontendScript__WEBPACK_IMPORTED_MODULE_7__.initCountDown
}, {
  D: ".wcb-tabs__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-tabs_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-tabs/GlobalCss */ "./src/block-tabs/GlobalCss.tsx"))),
  F: _block_tabs_FrontendStyles__WEBPACK_IMPORTED_MODULE_8__.initTabsForWcbTabs
}, {
  D: ".wcb-counter-box__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../block-counter/GlobalCss */ "./src/block-counter/GlobalCss.tsx"))),
  F: _block_counter_FrontendStyles__WEBPACK_IMPORTED_MODULE_9__.animateProgressElements
}, {
  D: ".wcb-slider__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-slider_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-slider/GlobalCss */ "./src/block-slider/GlobalCss.tsx"))),
  F: _block_slider_FrontendStyles__WEBPACK_IMPORTED_MODULE_5__.initCarouselForWcbSliders
}, {
  D: ".wcb-slider-child__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-slider-child_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-slider-child/GlobalCss */ "./src/block-slider-child/GlobalCss.tsx")))
}, {
  D: ".wcb-icon-list__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-icon-list_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-icon-list/GlobalCss */ "./src/block-icon-list/GlobalCss.tsx")))
}, {
  D: ".wcb-icon-list__wrap.wcb-update-div[data-block-type='icon-item']",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-icon-child_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-icon-child/GlobalCss */ "./src/block-icon-child/GlobalCss.tsx")))
}, {
  D: ".wcb-icon__wrap.wcb-update-div",
  C: react__WEBPACK_IMPORTED_MODULE_0___default().lazy(() => __webpack_require__.e(/*! import() */ "src_block-icon_GlobalCss_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../block-icon/GlobalCss */ "./src/block-icon/GlobalCss.tsx")))
}];
classes.forEach(({
  D,
  C,
  F
}) => {
  const divs = document.querySelectorAll(D);
  if (divs && divs.length) {
    renderToDom(divs, C, F);
  }
});

/**
 * Renders the GlobalCss component to the DOM and optionally executes a function on each element.
 * 
 * @param {NodeListOf<Element>} divsToUpdate - The divs to update.
 * @param {React.LazyExoticComponent<React.NamedExoticComponent<any>>} GlobalCss - The GlobalCss component to render.
 * @param {(el: Element, props: any) => void} [funcRunOnEl] - Optional function to run on each element after rendering.
 */
function renderToDom(divsToUpdate, GlobalCss, funcRunOnEl) {
  divsToUpdate.forEach(div => {
    const preEl = div.querySelector(`pre[data-wcb-block-attrs=${div.getAttribute("data-uniqueid")}]`);
    const divRenderCssEl = div.querySelector(`div[data-wcb-global-styles=${div.getAttribute("data-uniqueid")}]`);
    if (!preEl || !preEl.innerText || !divRenderCssEl) {
      return;
    }
    //
    const props = JSON.parse(preEl?.innerText);
    //

    react_dom__WEBPACK_IMPORTED_MODULE_1___default().render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GlobalCss, {
      ...props
    })), divRenderCssEl);

    // run function if exits
    funcRunOnEl && funcRunOnEl(div, props);

    //
    div.classList.remove("wcb-update-div");
    preEl.remove();
  });
}
})();

/******/ })()
;
//# sourceMappingURL=FrontendStyles.js.map
>>>>>>> d6eb24798a5273e95b00e88c13508951e8609150
