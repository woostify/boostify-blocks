"use strict";(globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[]).push([[3012],{512:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(7788),l=o(5192);const i=({flexProperties:t,className:e})=>{var o,i,n,r,d,s,b,m,p,v,u,_,c,g,$,h,k,x;const{media_desktop:f,media_tablet:w}=a.s,{alignItems:A,flexDirection:y,flexWrap:R,justifyContent:T,colunmGap:D,rowGap:L}=t,{value_Desktop:I,value_Tablet:W,value_Mobile:C}=(0,l.A)(y),{value_Desktop:M,value_Tablet:E,value_Mobile:G}=(0,l.A)(A),{value_Desktop:N,value_Tablet:z,value_Mobile:H}=(0,l.A)(R),{value_Desktop:B,value_Tablet:P,value_Mobile:S}=(0,l.A)(T),{value_Desktop:j,value_Tablet:q,value_Mobile:O}=(0,l.A)(D),{value_Desktop:F,value_Tablet:U,value_Mobile:J}=(0,l.A)(L);return{[`${e}`]:{display:"flex !important",flexDirection:null!=C?C:"row",alignItems:null!=G?G:"stretch",flexWrap:null!=H?H:"nowrap",justifyContent:null!=S?S:"flex-start",columnGap:null!=O?O:"0px",rowGap:null!=J?J:"0px",[`@media (min-width: ${w})`]:{flexDirection:null!==(o=null!=W?W:C)&&void 0!==o?o:"row",alignItems:null!==(i=null!=E?E:G)&&void 0!==i?i:"stretch",flexWrap:null!==(n=null!=z?z:H)&&void 0!==n?n:"nowrap",justifyContent:null!==(r=null!=P?P:S)&&void 0!==r?r:"flex-start",columnGap:null!==(d=null!=q?q:O)&&void 0!==d?d:"0px",rowGap:null!==(s=null!=U?U:J)&&void 0!==s?s:"0px"},[`@media (min-width: ${f})`]:{flexDirection:null!==(b=null!==(m=null!=I?I:W)&&void 0!==m?m:C)&&void 0!==b?b:"row",alignItems:null!==(p=null!==(v=null!=M?M:E)&&void 0!==v?v:G)&&void 0!==p?p:"stretch",flexWrap:null!==(u=null!==(_=null!=N?N:z)&&void 0!==_?_:H)&&void 0!==u?u:"nowrap",justifyContent:null!==(c=null!==(g=null!=B?B:P)&&void 0!==g?g:S)&&void 0!==c?c:"flex-start",columnGap:null!==($=null!==(h=null!=j?j:q)&&void 0!==h?h:O)&&void 0!==$?$:"0px",rowGap:null!==(k=null!==(x=null!=F?F:U)&&void 0!==x?x:J)&&void 0!==k?k:"0px"}}}}},2092:(t,e,o)=>{o.d(e,{n:()=>a});const a=(t,e="")=>{switch(t){case"shadow-sm":return`0 1px 2px 0 ${e||"rgb(0 0 0 / 0.05)"}`;case"shadow":return`0 1px 3px 0 ${e||"rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-md":return`0 4px 6px -1px ${e||"rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-lg":return`0 10px 15px -3px ${e||"rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-xl":return`0 20px 25px -5px ${e||"rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-2xl":return`0 25px 50px -12px ${e||"rgb(0 0 0 / 0.25)"}`;case"shadow-inner":return`inset 0 2px 4px 0 ${e||"rgb(0 0 0 / 0.05)"}`;default:return""}}},2440:(t,e,o)=>{o.d(e,{A:()=>l});var a=o(2710);const l=({border:t,className:e,isWithRadius:o=!1,isWithIframe:l=!1})=>{const{hoverColor:i,mainSettings:n,radius:r}=t;let d={[`${e}`]:{}};if(n){const t=n;if("top"in t||"right"in t||"bottom"in t||"left"in t){const{bottom:o,left:a,right:l,top:n}=t;d={[`${e}`]:{...n?{borderTop:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},...a?{borderLeft:`${a.width} ${a.style||"none"} ${a.color||""}`}:{},...l?{borderRight:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...o?{borderBottom:`${o.width} ${o.style||"none"} ${o.color||""}`}:{},"&:hover":{borderColor:`${i}`}}}}else{const{color:t,style:o,width:a}=n;d={[`${e}`]:{border:`${a} ${o||"none"} ${t||""}`,"&:hover":{borderColor:`${i||""}`}}}}}let s={[`${e}`]:{}};o&&r&&(s=(0,a.A)({radius:r,className:e,isWithIframe:l}));let b={},m={};return"object"==typeof d[e]&&(b=d[e]||{}),"object"==typeof s[e]&&(m=s[e]||{}),{[`${e}`]:{...b,...m}}}},2710:(t,e,o)=>{o.d(e,{A:()=>n});var a=o(7788),l=o(5192),i=o(9278);const n=({className:t,radius:e,isWithIframe:o=!1})=>{const{media_desktop:n,media_tablet:r}=a.s;let{value_Desktop:d,value_Tablet:s,value_Mobile:b}=(0,l.A)(e);const m=t=>{let e=t;return e="string"==typeof t?{bottomLeft:t,bottomRight:t,topLeft:t,topRight:t}:{bottomLeft:t?.bottomLeft,bottomRight:t?.bottomRight,topLeft:t?.topLeft,topRight:t?.topRight},e};d=m(d),s=m(s),b=m(b);const{mobile_v:p,tablet_v:v,desktop_v:u}=(0,i.A)({mobile_v:b?.topLeft,tablet_v:s?.topLeft,desktop_v:d?.topLeft}),{mobile_v:_,tablet_v:c,desktop_v:g}=(0,i.A)({mobile_v:b?.topRight,tablet_v:s?.topRight,desktop_v:d?.topRight}),{mobile_v:$,tablet_v:h,desktop_v:k}=(0,i.A)({mobile_v:b?.bottomRight,tablet_v:s?.bottomRight,desktop_v:d?.bottomRight}),{mobile_v:x,tablet_v:f,desktop_v:w}=(0,i.A)({mobile_v:b?.bottomLeft,tablet_v:s?.bottomLeft,desktop_v:d?.bottomLeft}),A=o?"!important":"";return{[`${t}`]:{borderTopLeftRadius:`${p} ${A}`,borderTopRightRadius:`${_} ${A}`,borderBottomRightRadius:`${$} ${A}`,borderBottomLeftRadius:`${x} ${A}`,[`@media (min-width: ${r})`]:v||c||h||f?{borderTopLeftRadius:`${v} ${A}`,borderTopRightRadius:`${c} ${A}`,borderBottomRightRadius:`${h} ${A}`,borderBottomLeftRadius:`${f} ${A}`}:null,[`@media (min-width: ${n})`]:u||g||k||w?{borderTopLeftRadius:`${u} ${A}`,borderTopRightRadius:`${g} ${A}`,borderBottomRightRadius:`${k} ${A}`,borderBottomLeftRadius:`${w} ${A}`}:null}}}},3012:(t,e,o)=>{o.r(e),o.d(e,{default:()=>_});var a=o(1609),l=o.n(a),i=o(7437),n=o(2092),r=o(2440),d=o(512),s=o(7931),b=o(4493),m=o(5192),p=o(7788),v=o(4505),u=o(9278);const _=l().memo((t=>{const{uniqueId:e,general_container:o,general_flexProperties:l,styles_background:_,styles_border:c,styles_boxShadow:g,styles_color:$,styles_dimensions:h,advance_responsiveCondition:k,advance_zIndex:x,advance_motionEffect:f}=t,{margin:w,padding:A}=h,{value_Desktop:y,value_Tablet:R,value_Mobile:T}=(0,m.A)(w),D=t=>(t=>null!=t&&""!==t)(t)&&""!==t,L=D(y?.top),I=D(y?.bottom),{media_desktop:W,media_tablet:C,defaultContentWidth:M,containerPadding:E,containerElementsGap:G}=p.s,N=".wp-block",z=`.wcb-container__wrap.${e}[data-uniqueid=${e}]`,H=`${z} .wcb-container__inner`;return e?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(i.mL,{styles:(()=>{var t,a,l,i,n,r;const{containerWidthType:d,customWidth:s,overflow:b,minHeight:p}=o;let{value_Desktop:v,value_Tablet:_,value_Mobile:c}=(0,m.A)(s);"Custom"!==d&&(v=null,_=null,c=null);const{value_Desktop:g,value_Tablet:h,value_Mobile:k}=(0,m.A)(p),{mobile_v:x,tablet_v:f,desktop_v:w}=(0,u.A)({mobile_v:c,tablet_v:_,desktop_v:v}),{mobile_v:A,tablet_v:y,desktop_v:R}=(0,u.A)({mobile_v:k,tablet_v:h,desktop_v:g}),T=t=>{if(null!=t&&""!==t)return t},D=t=>{const e=T(t);if(void 0!==e)return`${e} !important`},M=null!==(t=null!==(a=null!=w?w:f)&&void 0!==a?a:x)&&void 0!==t?t:void 0,G=null!==(l=null!=f?f:x)&&void 0!==l?l:void 0,H=T(x);return[{[`${N}:has(> .wcb-container__wrap.${e}[data-uniqueid=${e}])`]:{marginTop:L?"0px !important":"",marginBottom:I?"0px !important":""}},{[`${N}[data-align="full"]:has(> .wcb-container__wrap.${e}[data-uniqueid=${e}])`]:{[z]:{marginLeft:"auto",marginRight:"auto"}}},{[`${N}[data-align="wide"]:has(> .wcb-container__wrap.${e}[data-uniqueid=${e}])`]:{marginLeft:"-8px",marginRight:"-8px",[z]:{marginLeft:"auto",marginRight:"auto"}}},{[z]:{padding:E||"",color:$,overflow:b,maxWidth:D(x),width:H,minHeight:null!=A?A:void 0,"&.alignfull":{marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)"},"&.is_wcb_container_child":{width:H,maxWidth:D(x)},[`@media (min-width: ${C})`]:{maxWidth:D(f),minHeight:null!==(i=null!=y?y:A)&&void 0!==i?i:void 0,"&.is_wcb_container_child":{width:G}},[`@media (min-width: ${W})`]:{maxWidth:D(w),minHeight:null!==(n=null!==(r=null!=R?R:y)&&void 0!==r?r:A)&&void 0!==n?n:void 0,"&.is_wcb_container_child":{width:M}}}}]})()}),(0,a.createElement)(i.mL,{styles:(0,b.A)({className:z,styles_background:_})}),(0,a.createElement)(i.mL,{styles:(0,r.A)({border:c,className:z,isWithRadius:!0})}),(0,a.createElement)(i.mL,{styles:(()=>{const{Hover:t,Normal:e}=g,{presetClass:o,blur:a,color:l,horizontal:r,position:d,spread:s,vertical:b}=e,{presetClass:m,blur:p,color:v,horizontal:u,position:_,spread:c,vertical:$}=t;let h="",k="";return h=o?(0,n.n)(o,l):`${r}px ${b}px ${a}px ${s}px ${l} ${"inset"===d?d:""}`,k=m?(0,n.n)(m,v):`${u}px ${$}px ${p}px ${c}px ${v} ${"inset"===_?_:""}`,i.AH`
			${z} {
				box-shadow: ${h};
				&:hover {
					box-shadow: ${k};
				}
			}
		`})()}),(0,a.createElement)(i.mL,{styles:(()=>{const{margin:t,padding:e}=h;return(0,s.A)({margin:t,padding:e,className:z})})()}),(0,a.createElement)(i.mL,{styles:(()=>{let{contentWidthType:t,contentBoxWidth:e}=o;if("Full Width"===t)return{[H]:{maxWidth:"100%"}};e.Desktop||e.Tablet||e.Mobile||(e={Desktop:M||""});const{value_Desktop:a,value_Tablet:l,value_Mobile:i}=(0,m.A)(e),{mobile_v:n,tablet_v:r,desktop_v:d}=(0,u.A)({mobile_v:i,tablet_v:l,desktop_v:a});return n||r||d?{[H]:{rowGap:G||"",columnGap:G||"",maxWidth:null!=n?n:void 0,[`@media (min-width: ${C})`]:r?{maxWidth:r}:void 0,[`@media (min-width: ${W})`]:d?{maxWidth:d}:void 0}}:{}})()}),(0,a.createElement)(i.mL,{styles:(()=>{const{colunmGap:t,rowGap:e}=h;return(0,d.A)({flexProperties:{...l,colunmGap:t,rowGap:e},className:H})})()}),(0,a.createElement)(i.mL,{styles:(0,v.F)({advance_motionEffect:f,advance_responsiveCondition:k,advance_zIndex:x,className:z,defaultDisplay:"flex"})})):null}))},4493:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(7788),l=o(7851),i=o(5192),n=o(9278);function r({styles_background:t,className:e}){const o=e,{media_desktop:r,media_tablet:d}=a.s;return[(()=>{const{}=t;return(0,l.A)({background:t,className:o})})(),(()=>{const{bgImageAttachment:e,bgImageRepeat:a,bgImageSize:l,bgType:s,focalPoint:b,imageData:m}=t;if("image"!==s)return{};const p=m.Desktop?.mediaUrl,v=m.Tablet?.mediaUrl||p,u=m.Mobile?.mediaUrl||v,{value_Desktop:_,value_Tablet:c,value_Mobile:g}=(0,i.A)(a),{value_Desktop:$,value_Tablet:h,value_Mobile:k}=(0,i.A)(e),{value_Desktop:x,value_Tablet:f,value_Mobile:w}=(0,i.A)(l),{value_Desktop:A,value_Tablet:y,value_Mobile:R}=(0,i.A)(b),T=R?`${100*R.x}% ${100*R.y}%`:"",D=y?`${100*y.x}% ${100*y.y}%`:"",L=A?`${100*A.x}% ${100*A.y}%`:"",{mobile_v:I,tablet_v:W,desktop_v:C}=(0,n.A)({mobile_v:u,tablet_v:v,desktop_v:p}),{mobile_v:M,tablet_v:E,desktop_v:G}=(0,n.A)({mobile_v:g,tablet_v:c,desktop_v:_}),{mobile_v:N,tablet_v:z,desktop_v:H}=(0,n.A)({mobile_v:k,tablet_v:h,desktop_v:$}),{mobile_v:B,tablet_v:P,desktop_v:S}=(0,n.A)({mobile_v:w,tablet_v:f,desktop_v:x}),{mobile_v:j,tablet_v:q,desktop_v:O}=(0,n.A)({mobile_v:T,tablet_v:D,desktop_v:L});return{[`${o}`]:{backgroundImage:I?`url(${I})`:void 0,backgroundRepeat:I?`${M}`:void 0,backgroundAttachment:I?`${N}`:void 0,backgroundSize:I?`${B}`:void 0,backgroundPosition:I?`${j}`:void 0,[`@media (min-width: ${d})`]:W?{backgroundImage:`url(${W})`,backgroundRepeat:`${E}`,backgroundAttachment:`${z}`,backgroundSize:`${P}`,backgroundPosition:`${q}`}:void 0,[`@media (min-width: ${r})`]:C?{backgroundImage:`url(${C})`,backgroundRepeat:`${G}`,backgroundAttachment:`${H}`,backgroundSize:`${S}`,backgroundPosition:`${O}`}:void 0}}})(),(()=>{const{overlayColor:e,overlayGradient:a,overlayType:l}=t;if("color"!==l&&"gradient"!==l)return{};let i="",n="";return"color"===l&&(i="backgroundColor",n=e),"gradient"===l&&(i="backgroundImage",n=a),{[`${o}`]:{".wcb-OverlayBackgroundByBgControl":{[`${i}`]:`${n}`,position:"absolute",inset:0,zIndex:0}}}})()]}},4505:(t,e,o)=>{o.d(e,{F:()=>r});var a=o(7437),l=o(7788),i=o(9278);const n=a.AH`
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
`,r=({advance_motionEffect:t,advance_zIndex:e,advance_responsiveCondition:o,className:r,defaultDisplay:d})=>{const{media_desktop:s,media_tablet:b}=l.s;try{if(t?.entranceAnimation){const e=document.querySelectorAll(r),o=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const a=e.target,l=/\banimate__\S+/g,i=a?.className.replace(l,"");a.setAttribute("class",i),setTimeout((()=>{a?.classList.add("animate__animated",`animate__${t?.entranceAnimation}`,`animate__${t?.animationDuration}`,`animate__delay-${t?.animationDelay}ms`,`animate__repeat-${t?.repeat}`)}),50),o.unobserve(a)}}))}),{threshold:.2});e.forEach((t=>o.observe(t)))}}catch(t){console.log("error, advance_motionEffect",t)}const{mobile_v:m,tablet_v:p,desktop_v:v}=(0,i.A)({mobile_v:e?.Mobile||e?.Tablet||e?.Desktop,tablet_v:e?.Tablet||e?.Desktop,desktop_v:e?.Desktop}),u=t=>""===t?"":t?n:a.AH`display: ${d};`;return a.AH`
		${r} {
			visibility: visible;
			@media (min-width: ${s}) {
				z-index: ${v};
				${u(o?.isHiddenOnDesktop)}
			}

			@media (min-width: ${b}) and (max-width: ${s}) {
				z-index: ${p};
				${u(o?.isHiddenOnTablet)}
			}

			@media (max-width: ${b}) {
				z-index: ${m};
				${u(o?.isHiddenOnMobile)}
			}
		}
	`}},7851:(t,e,o)=>{o.d(e,{A:()=>a});const a=({className:t,background:e,backgroundHover:o})=>{const{bgType:a,color:l,gradient:i}=e,{bgType:n,color:r,gradient:d}=o||{};if("color"!==a&&"gradient"!==a)return{};let s="",b="";"color"===a&&(s="backgroundColor",b=l),"gradient"===a&&(s="backgroundImage",b=i);let m="",p="";return"color"===n&&(m="backgroundColor",p=r||""),"gradient"===n&&(m="backgroundImage",p=d||""),{[`${t}`]:{[`${s}`]:`${b}`,":hover":{[`${m}`]:`${p||null}`}}}}},7931:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(7437),l=o(7788),i=o(5192),n=o(9278);const r=({className:t,padding:e,margin:o})=>{const{media_desktop:r,media_tablet:d}=l.s,{value_Desktop:s,value_Tablet:b,value_Mobile:m}=(0,i.A)(o),{value_Desktop:p,value_Tablet:v,value_Mobile:u}=(0,i.A)(e),{mobile_v:_,tablet_v:c,desktop_v:g}=(0,n.A)({mobile_v:u?.top,tablet_v:v?.top,desktop_v:p?.top}),{mobile_v:$,tablet_v:h,desktop_v:k}=(0,n.A)({mobile_v:u?.left,tablet_v:v?.left,desktop_v:p?.left}),{mobile_v:x,tablet_v:f,desktop_v:w}=(0,n.A)({mobile_v:u?.right,tablet_v:v?.right,desktop_v:p?.right}),{mobile_v:A,tablet_v:y,desktop_v:R}=(0,n.A)({mobile_v:u?.bottom,tablet_v:v?.bottom,desktop_v:p?.bottom}),{mobile_v:T,tablet_v:D,desktop_v:L}=(0,n.A)({mobile_v:m?.top,tablet_v:b?.top,desktop_v:s?.top}),{mobile_v:I,tablet_v:W,desktop_v:C}=(0,n.A)({mobile_v:m?.left,tablet_v:b?.left,desktop_v:s?.left}),{mobile_v:M,tablet_v:E,desktop_v:G}=(0,n.A)({mobile_v:m?.right,tablet_v:b?.right,desktop_v:s?.right}),{mobile_v:N,tablet_v:z,desktop_v:H}=(0,n.A)({mobile_v:m?.bottom,tablet_v:b?.bottom,desktop_v:s?.bottom});return a.AH`
		body ${t} {
			padding-top: ${_} !important;
			padding-right: ${x} !important;
			padding-bottom: ${A} !important;
			padding-left: ${$} !important;
			margin-top: ${T} !important;
			margin-right: ${M};
			margin-bottom: ${N} !important;
			margin-left: ${I};
			@media (min-width: ${d}) {
				padding-top: ${c} !important;
				padding-right: ${f} !important;
				padding-bottom: ${y} !important;
				padding-left: ${h} !important;
				margin-top: ${D} !important;
				margin-right: ${E};
				margin-bottom: ${z} !important;
				margin-left: ${W};
			}
			@media (min-width: ${r}) {
				padding-top: ${g} !important;
				padding-right: ${w} !important;
				padding-bottom: ${R} !important;
				padding-left: ${k} !important;
				margin-top: ${L} !important;
				margin-right: ${G};
				margin-bottom: ${H} !important;
				margin-left: ${C};
			}
		}
	`}},9278:(t,e,o)=>{o.d(e,{A:()=>a});const a=({mobile_v:t=null,tablet_v:e=null,desktop_v:o=null})=>{let a=e,l=o;return t===e&&e===o?{mobile_v:t,tablet_v:null,desktop_v:null}:(e===t&&(a=null),o===e&&(l=null),{mobile_v:null!=t?t:null,tablet_v:null!=a?a:null,desktop_v:null!=l?l:null})}}}]);