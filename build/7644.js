"use strict";(globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[]).push([[7644],{2092:(t,e,o)=>{o.d(e,{n:()=>a});const a=(t,e="")=>{switch(t){case"shadow-sm":return`0 1px 2px 0 ${e||"rgb(0 0 0 / 0.05)"}`;case"shadow":return`0 1px 3px 0 ${e||"rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-md":return`0 4px 6px -1px ${e||"rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-lg":return`0 10px 15px -3px ${e||"rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-xl":return`0 20px 25px -5px ${e||"rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-2xl":return`0 25px 50px -12px ${e||"rgb(0 0 0 / 0.25)"}`;case"shadow-inner":return`inset 0 2px 4px 0 ${e||"rgb(0 0 0 / 0.05)"}`;default:return""}}},2440:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(2710);const i=({border:t,className:e,isWithRadius:o=!1,isWithIframe:i=!1})=>{const{hoverColor:n,mainSettings:l,radius:r}=t;let s={[`${e}`]:{}};if(l){const t=l;if("top"in t||"right"in t||"bottom"in t||"left"in t){const{bottom:o,left:a,right:i,top:l}=t;s={[`${e}`]:{...l?{borderTop:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...a?{borderLeft:`${a.width} ${a.style||"none"} ${a.color||""}`}:{},...i?{borderRight:`${i.width} ${i.style||"none"} ${i.color||""}`}:{},...o?{borderBottom:`${o.width} ${o.style||"none"} ${o.color||""}`}:{},"&:hover":{borderColor:`${n}`}}}}else{const{color:t,style:o,width:a}=l;s={[`${e}`]:{border:`${a} ${o||"none"} ${t||""}`,"&:hover":{borderColor:`${n||""}`}}}}}let d={[`${e}`]:{}};o&&r&&(d=(0,a.A)({radius:r,className:e,isWithIframe:i}));let b={},p={};return"object"==typeof s[e]&&(b=s[e]||{}),"object"==typeof d[e]&&(p=d[e]||{}),{[`${e}`]:{...b,...p}}}},2710:(t,e,o)=>{o.d(e,{A:()=>l});var a=o(7788),i=o(5192),n=o(9278);const l=({className:t,radius:e,isWithIframe:o=!1})=>{const{media_desktop:l,media_tablet:r}=a.s;let{value_Desktop:s,value_Tablet:d,value_Mobile:b}=(0,i.A)(e);const p=t=>{let e=t;return e="string"==typeof t?{bottomLeft:t,bottomRight:t,topLeft:t,topRight:t}:{bottomLeft:t?.bottomLeft,bottomRight:t?.bottomRight,topLeft:t?.topLeft,topRight:t?.topRight},e};s=p(s),d=p(d),b=p(b);const{mobile_v:m,tablet_v:_,desktop_v:v}=(0,n.A)({mobile_v:b?.topLeft,tablet_v:d?.topLeft,desktop_v:s?.topLeft}),{mobile_v:c,tablet_v:$,desktop_v:u}=(0,n.A)({mobile_v:b?.topRight,tablet_v:d?.topRight,desktop_v:s?.topRight}),{mobile_v:g,tablet_v:h,desktop_v:f}=(0,n.A)({mobile_v:b?.bottomRight,tablet_v:d?.bottomRight,desktop_v:s?.bottomRight}),{mobile_v:x,tablet_v:k,desktop_v:A}=(0,n.A)({mobile_v:b?.bottomLeft,tablet_v:d?.bottomLeft,desktop_v:s?.bottomLeft}),w=o?"!important":"";return{[`${t}`]:{borderTopLeftRadius:`${m} ${w}`,borderTopRightRadius:`${c} ${w}`,borderBottomRightRadius:`${g} ${w}`,borderBottomLeftRadius:`${x} ${w}`,[`@media (min-width: ${r})`]:_||$||h||k?{borderTopLeftRadius:`${_} ${w}`,borderTopRightRadius:`${$} ${w}`,borderBottomRightRadius:`${h} ${w}`,borderBottomLeftRadius:`${k} ${w}`}:null,[`@media (min-width: ${l})`]:v||u||f||A?{borderTopLeftRadius:`${v} ${w}`,borderTopRightRadius:`${u} ${w}`,borderBottomRightRadius:`${f} ${w}`,borderBottomLeftRadius:`${A} ${w}`}:null}}}},3733:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(2092);const i=({boxShadow:t,className:e})=>{const{Hover:o,Normal:i}=t,{presetClass:n,blur:l,color:r,horizontal:s,position:d,spread:b,vertical:p}=i||{},{presetClass:m,blur:_,color:v,horizontal:c,position:$,spread:u,vertical:g}=o||{};let h="",f="";return h=n?(0,a.n)(n,r):`${s}px ${p}px ${l}px ${b}px ${r} ${"inset"===d?d:""}`,f=m?(0,a.n)(m,v):`${c}px ${g}px ${_}px ${u}px ${v} ${"inset"===$?$:""}`,{[`${e}`]:{boxShadow:h,"&:hover":{boxShadow:f}}}}},4505:(t,e,o)=>{o.d(e,{F:()=>r});var a=o(7437),i=o(7788),n=o(9278);const l=a.AH`
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
`,r=({advance_motionEffect:t,advance_zIndex:e,advance_responsiveCondition:o,className:r,defaultDisplay:s})=>{const{media_desktop:d,media_tablet:b}=i.s;try{if(t?.entranceAnimation){const e=document.querySelectorAll(r),o=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const a=e.target,i=/\banimate__\S+/g,n=a?.className.replace(i,"");a.setAttribute("class",n),setTimeout((()=>{a?.classList.add("animate__animated",`animate__${t?.entranceAnimation}`,`animate__${t?.animationDuration}`,`animate__delay-${t?.animationDelay}ms`,`animate__repeat-${t?.repeat}`)}),50),o.unobserve(a)}}))}),{threshold:.2});e.forEach((t=>o.observe(t)))}}catch(t){console.log("error, advance_motionEffect",t)}const{mobile_v:p,tablet_v:m,desktop_v:_}=(0,n.A)({mobile_v:e?.Mobile||e?.Tablet||e?.Desktop,tablet_v:e?.Tablet||e?.Desktop,desktop_v:e?.Desktop}),v=t=>""===t?"":t?l:a.AH`display: ${s};`;return a.AH`
		${r} {
			visibility: visible;
			@media (min-width: ${d}) {
				z-index: ${_};
				${v(o?.isHiddenOnDesktop)}
			}

			@media (min-width: ${b}) and (max-width: ${d}) {
				z-index: ${m};
				${v(o?.isHiddenOnTablet)}
			}

			@media (max-width: ${b}) {
				z-index: ${p};
				${v(o?.isHiddenOnMobile)}
			}
		}
	`}},7644:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});var a=o(1609),i=o.n(a),n=o(7437),l=o(2440),r=o(3733),s=o(7851),d=o(4505),b=o(8885),p=o(7931),m=o(5192),_=o(7788),v=o(9278);const c=i().memo((t=>{const{uniqueId:e,general_icon:o,style_background:i,style_icon:c,style_border:$,style_boxshadow:u,style_dimension:g,general_preset:h,advance_responsiveCondition:f,advance_zIndex:x,advance_motionEffect:k}=t,{media_desktop:A,media_tablet:w}=_.s,y=`.${e}[data-uniqueid=${e}]`,R=`${y} .wcb-icon__content`;return e?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(n.mL,{styles:(()=>{const{alignment:t}=o,{value_Desktop:e,value_Mobile:a,value_Tablet:i}=(0,m.A)(t),{mobile_v:n,tablet_v:l,desktop_v:r}=(0,v.A)({mobile_v:a,tablet_v:i,desktop_v:e});return{[`${y}`]:n||l||r?{textAlign:n,[`@media (min-width: ${w})`]:l?{textAlign:l}:void 0,[`@media (min-width: ${A})`]:r?{textAlign:r}:void 0}:void 0}})()}),(0,a.createElement)(n.mL,{styles:(0,s.A)({className:R,background:i.normal,backgroundHover:i.hover})}),(0,a.createElement)(n.mL,{styles:(0,l.A)({className:R,border:$,isWithRadius:!0})}),(0,a.createElement)(n.mL,{styles:(0,r.A)({className:R,boxShadow:u})}),(0,a.createElement)(n.mL,{styles:[(0,p.A)({className:y,margin:g.margin}),(0,p.A)({className:`${y} .wcb-icon__content`,padding:g.padding}),(0,l.A)({border:c,className:`${y} .wcb-icon__content`,isWithRadius:!0}),(0,b.A)({className:`${y} .wcb-icon-full`,value:o.size,prefix:"width",prefix_2:"fontSize"}),{[`${R} .wcb-icon-full`]:{color:c.color},[`${R}:hover .wcb-icon-full`]:{color:c.hoverColor},[`${y} .wcb-icon__content`]:{cursor:o.enableLink?"pointer":""}}]}),(0,a.createElement)(n.mL,{styles:(0,d.F)({advance_motionEffect:k,advance_responsiveCondition:f,advance_zIndex:x,className:R,defaultDisplay:"inline-block"})})):null}))},7851:(t,e,o)=>{o.d(e,{A:()=>a});const a=({className:t,background:e,backgroundHover:o})=>{const{bgType:a,color:i,gradient:n}=e,{bgType:l,color:r,gradient:s}=o||{};if("color"!==a&&"gradient"!==a)return{};let d="",b="";"color"===a&&(d="backgroundColor",b=i),"gradient"===a&&(d="backgroundImage",b=n);let p="",m="";return"color"===l&&(p="backgroundColor",m=r||""),"gradient"===l&&(p="backgroundImage",m=s||""),{[`${t}`]:{[`${d}`]:`${b}`,":hover":{[`${p}`]:`${m||null}`}}}}},7931:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(7437),i=o(7788),n=o(5192),l=o(9278);const r=({className:t,padding:e,margin:o})=>{const{media_desktop:r,media_tablet:s}=i.s,{value_Desktop:d,value_Tablet:b,value_Mobile:p}=(0,n.A)(o),{value_Desktop:m,value_Tablet:_,value_Mobile:v}=(0,n.A)(e),{mobile_v:c,tablet_v:$,desktop_v:u}=(0,l.A)({mobile_v:v?.top,tablet_v:_?.top,desktop_v:m?.top}),{mobile_v:g,tablet_v:h,desktop_v:f}=(0,l.A)({mobile_v:v?.left,tablet_v:_?.left,desktop_v:m?.left}),{mobile_v:x,tablet_v:k,desktop_v:A}=(0,l.A)({mobile_v:v?.right,tablet_v:_?.right,desktop_v:m?.right}),{mobile_v:w,tablet_v:y,desktop_v:R}=(0,l.A)({mobile_v:v?.bottom,tablet_v:_?.bottom,desktop_v:m?.bottom}),{mobile_v:L,tablet_v:T,desktop_v:N}=(0,l.A)({mobile_v:p?.top,tablet_v:b?.top,desktop_v:d?.top}),{mobile_v:C,tablet_v:D,desktop_v:E}=(0,l.A)({mobile_v:p?.left,tablet_v:b?.left,desktop_v:d?.left}),{mobile_v:z,tablet_v:I,desktop_v:H}=(0,l.A)({mobile_v:p?.right,tablet_v:b?.right,desktop_v:d?.right}),{mobile_v:S,tablet_v:B,desktop_v:M}=(0,l.A)({mobile_v:p?.bottom,tablet_v:b?.bottom,desktop_v:d?.bottom});return a.AH`
		body ${t} {
			padding-top: ${c} !important;
			padding-right: ${x} !important;
			padding-bottom: ${w} !important;
			padding-left: ${g} !important;
			margin-top: ${L} !important;
			margin-right: ${z};
			margin-bottom: ${S} !important;
			margin-left: ${C};
			@media (min-width: ${s}) {
				padding-top: ${$} !important;
				padding-right: ${k} !important;
				padding-bottom: ${y} !important;
				padding-left: ${h} !important;
				margin-top: ${T} !important;
				margin-right: ${I};
				margin-bottom: ${B} !important;
				margin-left: ${D};
			}
			@media (min-width: ${r}) {
				padding-top: ${u} !important;
				padding-right: ${A} !important;
				padding-bottom: ${R} !important;
				padding-left: ${f} !important;
				margin-top: ${N} !important;
				margin-right: ${H};
				margin-bottom: ${M} !important;
				margin-left: ${E};
			}
		}
	`}},8885:(t,e,o)=>{o.d(e,{A:()=>l});var a=o(7788),i=o(5192),n=o(9278);const l=function({className:t,prefix:e,prefix_2:o,prefix_3:l,prefix_4:r,value:s,hasUnit:d=!0,unit:b}){const{media_desktop:p,media_tablet:m}=a.s;let{value_Desktop:_,value_Tablet:v,value_Mobile:c}=(0,i.A)(s);!d&&b&&("number"==typeof _&&(_+=b,v+=b,c+=b),"string"==typeof _&&(_=_?_+b:null,v=v?v+b:null,c=c?c+b:null));let $=o||"",u=l||"",g=r||"";const{mobile_v:h,tablet_v:f,desktop_v:x}=(0,n.A)({mobile_v:c,tablet_v:v,desktop_v:_});return{[t]:{[e]:null!=h?h:null,[$]:o&&null!=h?h:null,[u]:l&&null!=h?h:null,[g]:r&&null!=h?h:null,[`@media (min-width: ${m})`]:f?{[e]:f,[$]:o?f:null,[u]:l?f:null,[g]:r?f:null}:void 0,[`@media (min-width: ${p})`]:x?{[e]:x,[$]:o?x:null,[u]:l?x:null,[g]:r?x:null}:void 0}}}},9278:(t,e,o)=>{o.d(e,{A:()=>a});const a=({mobile_v:t=null,tablet_v:e=null,desktop_v:o=null})=>{let a=e,i=o;return t===e&&e===o?{mobile_v:t,tablet_v:null,desktop_v:null}:(e===t&&(a=null),o===e&&(i=null),{mobile_v:null!=t?t:null,tablet_v:null!=a?a:null,desktop_v:null!=i?i:null})}}}]);