"use strict";(globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[]).push([[2008],{2008:(t,e,o)=>{o.r(e),o.d(e,{default:()=>m});var a=o(1609),i=o.n(a),l=o(7437),r=o(4505),n=o(7931),d=o(2440),s=o(8885),b=o(4493),p=o(3733);const m=i().memo((t=>{const{uniqueId:e,general_general:o,style_arrowAndDots:i,style_backgroundAndBorder:m,style_dimension:v,style_boxshadow:_,advance_responsiveCondition:c,advance_zIndex:u,advance_motionEffect:g}=t,$=`.${e}[data-uniqueid="${e}"]`,k=`${$}.wcb-slider__wrap`,h=`${$} .slick-arrow`,f=`${$} .slick-dots`,x=`${$} .slick-prev`,A=`${$} .slick-next`;return e?(0,a.createElement)(a.Fragment,null,(0,a.createElement)(l.mL,{styles:[(0,s.A)({value:o.textAlignment,className:`${k}`,prefix:"textAlign"})]}),(0,a.createElement)(l.mL,{styles:[(0,d.A)({border:m.border,className:k,isWithRadius:!0}),(0,s.A)({className:k,value:o.colGap,prefix:"paddingLeft",prefix_2:"paddingRight"}),(0,n.A)({className:`${$}`,padding:v.padding,margin:v.margin}),(0,b.A)({className:k,styles_background:m.background})]}),(0,a.createElement)(l.mL,{styles:(0,p.A)({className:k,boxShadow:_})}),(0,a.createElement)(l.mL,{styles:[(0,d.A)({border:i.border,className:h,isWithRadius:!0}),{[`${h} svg`]:{width:i.arrowSize,height:i.arrowSize,color:i.color,background:i.backgroundColor}},{[`${f} li`]:{"button:before":{color:i.color}}},{[`${h}`]:{backgroundColor:i.backgroundColor}},{[`${f}`]:{position:"absolute",bottom:i.dotsMarginTop.Desktop}},{[`${x}`]:{left:i.arrowDistance.Desktop}},{[`${A}`]:{right:i.arrowDistance.Desktop}}]}),(0,a.createElement)(l.mL,{styles:(0,r.F)({advance_motionEffect:g,advance_responsiveCondition:c,advance_zIndex:u,className:$,defaultDisplay:"block"})})):null}))},2092:(t,e,o)=>{o.d(e,{n:()=>a});const a=(t,e="")=>{switch(t){case"shadow-sm":return`0 1px 2px 0 ${e||"rgb(0 0 0 / 0.05)"}`;case"shadow":return`0 1px 3px 0 ${e||"rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-md":return`0 4px 6px -1px ${e||"rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-lg":return`0 10px 15px -3px ${e||"rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-xl":return`0 20px 25px -5px ${e||"rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${e||"rgb(0 0 0 / 0.1)"}`;case"shadow-2xl":return`0 25px 50px -12px ${e||"rgb(0 0 0 / 0.25)"}`;case"shadow-inner":return`inset 0 2px 4px 0 ${e||"rgb(0 0 0 / 0.05)"}`;default:return""}}},2440:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(2710);const i=({border:t,className:e,isWithRadius:o=!1,isWithIframe:i=!1})=>{const{hoverColor:l,mainSettings:r,radius:n}=t;let d={[`${e}`]:{}};if(r){const t=r;if("top"in t||"right"in t||"bottom"in t||"left"in t){const{bottom:o,left:a,right:i,top:r}=t;d={[`${e}`]:{...r?{borderTop:`${r.width} ${r.style||"none"} ${r.color||""}`}:{},...a?{borderLeft:`${a.width} ${a.style||"none"} ${a.color||""}`}:{},...i?{borderRight:`${i.width} ${i.style||"none"} ${i.color||""}`}:{},...o?{borderBottom:`${o.width} ${o.style||"none"} ${o.color||""}`}:{},"&:hover":{borderColor:`${l}`}}}}else{const{color:t,style:o,width:a}=r;d={[`${e}`]:{border:`${a} ${o||"none"} ${t||""}`,"&:hover":{borderColor:`${l||""}`}}}}}let s={[`${e}`]:{}};o&&n&&(s=(0,a.A)({radius:n,className:e,isWithIframe:i}));let b={},p={};return"object"==typeof d[e]&&(b=d[e]||{}),"object"==typeof s[e]&&(p=s[e]||{}),{[`${e}`]:{...b,...p}}}},2710:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(7788),i=o(5192),l=o(9278);const r=({className:t,radius:e,isWithIframe:o=!1})=>{const{media_desktop:r,media_tablet:n}=a.s;let{value_Desktop:d,value_Tablet:s,value_Mobile:b}=(0,i.A)(e);const p=t=>{let e=t;return e="string"==typeof t?{bottomLeft:t,bottomRight:t,topLeft:t,topRight:t}:{bottomLeft:t?.bottomLeft,bottomRight:t?.bottomRight,topLeft:t?.topLeft,topRight:t?.topRight},e};d=p(d),s=p(s),b=p(b);const{mobile_v:m,tablet_v:v,desktop_v:_}=(0,l.A)({mobile_v:b?.topLeft,tablet_v:s?.topLeft,desktop_v:d?.topLeft}),{mobile_v:c,tablet_v:u,desktop_v:g}=(0,l.A)({mobile_v:b?.topRight,tablet_v:s?.topRight,desktop_v:d?.topRight}),{mobile_v:$,tablet_v:k,desktop_v:h}=(0,l.A)({mobile_v:b?.bottomRight,tablet_v:s?.bottomRight,desktop_v:d?.bottomRight}),{mobile_v:f,tablet_v:x,desktop_v:A}=(0,l.A)({mobile_v:b?.bottomLeft,tablet_v:s?.bottomLeft,desktop_v:d?.bottomLeft}),y=o?"!important":"";return{[`${t}`]:{borderTopLeftRadius:`${m} ${y}`,borderTopRightRadius:`${c} ${y}`,borderBottomRightRadius:`${$} ${y}`,borderBottomLeftRadius:`${f} ${y}`,[`@media (min-width: ${n})`]:v||u||k||x?{borderTopLeftRadius:`${v} ${y}`,borderTopRightRadius:`${u} ${y}`,borderBottomRightRadius:`${k} ${y}`,borderBottomLeftRadius:`${x} ${y}`}:null,[`@media (min-width: ${r})`]:_||g||h||A?{borderTopLeftRadius:`${_} ${y}`,borderTopRightRadius:`${g} ${y}`,borderBottomRightRadius:`${h} ${y}`,borderBottomLeftRadius:`${A} ${y}`}:null}}}},3733:(t,e,o)=>{o.d(e,{A:()=>i});var a=o(2092);const i=({boxShadow:t,className:e})=>{const{Hover:o,Normal:i}=t,{presetClass:l,blur:r,color:n,horizontal:d,position:s,spread:b,vertical:p}=i||{},{presetClass:m,blur:v,color:_,horizontal:c,position:u,spread:g,vertical:$}=o||{};let k="",h="";return k=l?(0,a.n)(l,n):`${d}px ${p}px ${r}px ${b}px ${n} ${"inset"===s?s:""}`,h=m?(0,a.n)(m,_):`${c}px ${$}px ${v}px ${g}px ${_} ${"inset"===u?u:""}`,{[`${e}`]:{boxShadow:k,"&:hover":{boxShadow:h}}}}},4493:(t,e,o)=>{o.d(e,{A:()=>n});var a=o(7788),i=o(7851),l=o(5192),r=o(9278);function n({styles_background:t,className:e}){const o=e,{media_desktop:n,media_tablet:d}=a.s;return[(()=>{const{}=t;return(0,i.A)({background:t,className:o})})(),(()=>{const{bgImageAttachment:e,bgImageRepeat:a,bgImageSize:i,bgType:s,focalPoint:b,imageData:p}=t;if("image"!==s)return{};const m=p.Desktop?.mediaUrl,v=p.Tablet?.mediaUrl||m,_=p.Mobile?.mediaUrl||v,{value_Desktop:c,value_Tablet:u,value_Mobile:g}=(0,l.A)(a),{value_Desktop:$,value_Tablet:k,value_Mobile:h}=(0,l.A)(e),{value_Desktop:f,value_Tablet:x,value_Mobile:A}=(0,l.A)(i),{value_Desktop:y,value_Tablet:w,value_Mobile:R}=(0,l.A)(b),T=R?`${100*R.x}% ${100*R.y}%`:"",L=w?`${100*w.x}% ${100*w.y}%`:"",D=y?`${100*y.x}% ${100*y.y}%`:"",{mobile_v:N,tablet_v:I,desktop_v:C}=(0,r.A)({mobile_v:_,tablet_v:v,desktop_v:m}),{mobile_v:z,tablet_v:S,desktop_v:E}=(0,r.A)({mobile_v:g,tablet_v:u,desktop_v:c}),{mobile_v:M,tablet_v:B,desktop_v:H}=(0,r.A)({mobile_v:h,tablet_v:k,desktop_v:$}),{mobile_v:W,tablet_v:O,desktop_v:P}=(0,r.A)({mobile_v:A,tablet_v:x,desktop_v:f}),{mobile_v:U,tablet_v:q,desktop_v:F}=(0,r.A)({mobile_v:T,tablet_v:L,desktop_v:D});return{[`${o}`]:{backgroundImage:N?`url(${N})`:void 0,backgroundRepeat:N?`${z}`:void 0,backgroundAttachment:N?`${M}`:void 0,backgroundSize:N?`${W}`:void 0,backgroundPosition:N?`${U}`:void 0,[`@media (min-width: ${d})`]:I?{backgroundImage:`url(${I})`,backgroundRepeat:`${S}`,backgroundAttachment:`${B}`,backgroundSize:`${O}`,backgroundPosition:`${q}`}:void 0,[`@media (min-width: ${n})`]:C?{backgroundImage:`url(${C})`,backgroundRepeat:`${E}`,backgroundAttachment:`${H}`,backgroundSize:`${P}`,backgroundPosition:`${F}`}:void 0}}})(),(()=>{const{overlayColor:e,overlayGradient:a,overlayType:i}=t;if("color"!==i&&"gradient"!==i)return{};let l="",r="";return"color"===i&&(l="backgroundColor",r=e),"gradient"===i&&(l="backgroundImage",r=a),{[`${o}`]:{".wcb-OverlayBackgroundByBgControl":{[`${l}`]:`${r}`,position:"absolute",inset:0,zIndex:0}}}})()]}},4505:(t,e,o)=>{o.d(e,{F:()=>n});var a=o(7437),i=o(7788),l=o(9278);const r=a.AH`
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
`,n=({advance_motionEffect:t,advance_zIndex:e,advance_responsiveCondition:o,className:n,defaultDisplay:d})=>{const{media_desktop:s,media_tablet:b}=i.s;try{if(t?.entranceAnimation){const e=document.querySelectorAll(n),o=new IntersectionObserver((e=>{e.forEach((e=>{if(e.isIntersecting){const a=e.target,i=/\banimate__\S+/g,l=a?.className.replace(i,"");a.setAttribute("class",l),setTimeout((()=>{a?.classList.add("animate__animated",`animate__${t?.entranceAnimation}`,`animate__${t?.animationDuration}`,`animate__delay-${t?.animationDelay}ms`,`animate__repeat-${t?.repeat}`)}),50),o.unobserve(a)}}))}),{threshold:.2});e.forEach((t=>o.observe(t)))}}catch(t){console.log("error, advance_motionEffect",t)}const{mobile_v:p,tablet_v:m,desktop_v:v}=(0,l.A)({mobile_v:e?.Mobile||e?.Tablet||e?.Desktop,tablet_v:e?.Tablet||e?.Desktop,desktop_v:e?.Desktop}),_=t=>""===t?"":t?r:a.AH`display: ${d};`;return a.AH`
		${n} {
			visibility: visible;
			@media (min-width: ${s}) {
				z-index: ${v};
				${_(o?.isHiddenOnDesktop)}
			}

			@media (min-width: ${b}) and (max-width: ${s}) {
				z-index: ${m};
				${_(o?.isHiddenOnTablet)}
			}

			@media (max-width: ${b}) {
				z-index: ${p};
				${_(o?.isHiddenOnMobile)}
			}
		}
	`}},7851:(t,e,o)=>{o.d(e,{A:()=>a});const a=({className:t,background:e,backgroundHover:o})=>{const{bgType:a,color:i,gradient:l}=e,{bgType:r,color:n,gradient:d}=o||{};if("color"!==a&&"gradient"!==a)return{};let s="",b="";"color"===a&&(s="backgroundColor",b=i),"gradient"===a&&(s="backgroundImage",b=l);let p="",m="";return"color"===r&&(p="backgroundColor",m=n||""),"gradient"===r&&(p="backgroundImage",m=d||""),{[`${t}`]:{[`${s}`]:`${b}`,":hover":{[`${p}`]:`${m||null}`}}}}},7931:(t,e,o)=>{o.d(e,{A:()=>n});var a=o(7437),i=o(7788),l=o(5192),r=o(9278);const n=({className:t,padding:e,margin:o})=>{const{media_desktop:n,media_tablet:d}=i.s,{value_Desktop:s,value_Tablet:b,value_Mobile:p}=(0,l.A)(o),{value_Desktop:m,value_Tablet:v,value_Mobile:_}=(0,l.A)(e),{mobile_v:c,tablet_v:u,desktop_v:g}=(0,r.A)({mobile_v:_?.top,tablet_v:v?.top,desktop_v:m?.top}),{mobile_v:$,tablet_v:k,desktop_v:h}=(0,r.A)({mobile_v:_?.left,tablet_v:v?.left,desktop_v:m?.left}),{mobile_v:f,tablet_v:x,desktop_v:A}=(0,r.A)({mobile_v:_?.right,tablet_v:v?.right,desktop_v:m?.right}),{mobile_v:y,tablet_v:w,desktop_v:R}=(0,r.A)({mobile_v:_?.bottom,tablet_v:v?.bottom,desktop_v:m?.bottom}),{mobile_v:T,tablet_v:L,desktop_v:D}=(0,r.A)({mobile_v:p?.top,tablet_v:b?.top,desktop_v:s?.top}),{mobile_v:N,tablet_v:I,desktop_v:C}=(0,r.A)({mobile_v:p?.left,tablet_v:b?.left,desktop_v:s?.left}),{mobile_v:z,tablet_v:S,desktop_v:E}=(0,r.A)({mobile_v:p?.right,tablet_v:b?.right,desktop_v:s?.right}),{mobile_v:M,tablet_v:B,desktop_v:H}=(0,r.A)({mobile_v:p?.bottom,tablet_v:b?.bottom,desktop_v:s?.bottom});return a.AH`
		body ${t} {
			padding-top: ${c} !important;
			padding-right: ${f} !important;
			padding-bottom: ${y} !important;
			padding-left: ${$} !important;
			margin-top: ${T} !important;
			margin-right: ${z};
			margin-bottom: ${M} !important;
			margin-left: ${N};
			@media (min-width: ${d}) {
				padding-top: ${u} !important;
				padding-right: ${x} !important;
				padding-bottom: ${w} !important;
				padding-left: ${k} !important;
				margin-top: ${L} !important;
				margin-right: ${S};
				margin-bottom: ${B} !important;
				margin-left: ${I};
			}
			@media (min-width: ${n}) {
				padding-top: ${g} !important;
				padding-right: ${A} !important;
				padding-bottom: ${R} !important;
				padding-left: ${h} !important;
				margin-top: ${D} !important;
				margin-right: ${E};
				margin-bottom: ${H} !important;
				margin-left: ${C};
			}
		}
	`}},8885:(t,e,o)=>{o.d(e,{A:()=>r});var a=o(7788),i=o(5192),l=o(9278);const r=function({className:t,prefix:e,prefix_2:o,prefix_3:r,prefix_4:n,value:d,hasUnit:s=!0,unit:b}){const{media_desktop:p,media_tablet:m}=a.s;let{value_Desktop:v,value_Tablet:_,value_Mobile:c}=(0,i.A)(d);!s&&b&&("number"==typeof v&&(v+=b,_+=b,c+=b),"string"==typeof v&&(v=v?v+b:null,_=_?_+b:null,c=c?c+b:null));let u=o||"",g=r||"",$=n||"";const{mobile_v:k,tablet_v:h,desktop_v:f}=(0,l.A)({mobile_v:c,tablet_v:_,desktop_v:v});return{[t]:{[e]:null!=k?k:null,[u]:o&&null!=k?k:null,[g]:r&&null!=k?k:null,[$]:n&&null!=k?k:null,[`@media (min-width: ${m})`]:h?{[e]:h,[u]:o?h:null,[g]:r?h:null,[$]:n?h:null}:void 0,[`@media (min-width: ${p})`]:f?{[e]:f,[u]:o?f:null,[g]:r?f:null,[$]:n?f:null}:void 0}}}},9278:(t,e,o)=>{o.d(e,{A:()=>a});const a=({mobile_v:t=null,tablet_v:e=null,desktop_v:o=null})=>{let a=e,i=o;return t===e&&e===o?{mobile_v:t,tablet_v:null,desktop_v:null}:(e===t&&(a=null),o===e&&(i=null),{mobile_v:null!=t?t:null,tablet_v:null!=a?a:null,desktop_v:null!=i?i:null})}}}]);