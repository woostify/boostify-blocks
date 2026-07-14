/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ b),
/* harmony export */   useDescriptions: () => (/* binding */ M)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function M(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:n},e.children)},[t])]}let S="p";function h(r,t){let a=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:S,name:n.name||"Description"})}let y=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(h),b=Object.assign(y,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/label/label.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/label/label.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Label: () => (/* binding */ M),
/* harmony export */   useLabels: () => (/* binding */ H)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function u(){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(o===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return o}function H(){let[o,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[o.length>0?o.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let s=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(r=>(t(l=>[...l,r]),()=>t(l=>{let n=l.slice(),p=n.indexOf(r);return p!==-1&&n.splice(p,1),n}))),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:s,slot:e.slot,name:e.name,props:e.props}),[s,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:a},e.children)},[t])]}let A="label";function h(o,t){let i=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:e=`headlessui-label-${i}`,passive:s=!1,...a}=o,r=u(),l=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>r.register(e),[e,r.register]);let n={ref:l,...r.props,id:e};return s&&("onClick"in n&&(delete n.htmlFor,delete n.onClick),"onClick"in a&&delete a.onClick),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:n,theirProps:a,slot:r.slot||{},defaultTag:A,name:r.name||"Label"})}let v=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(h),M=Object.assign(v,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/menu/menu.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/menu/menu.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Menu: () => (/* binding */ ot)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/calculate-active-index.js */ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-tree-walker.js */ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../hooks/use-tracked-pointer.js */ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js");
var pe=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(pe||{}),ce=(r=>(r[r.Pointer=0]="Pointer",r[r.Other=1]="Other",r))(ce||{}),me=(a=>(a[a.OpenMenu=0]="OpenMenu",a[a.CloseMenu=1]="CloseMenu",a[a.GoToItem=2]="GoToItem",a[a.Search=3]="Search",a[a.ClearSearch=4]="ClearSearch",a[a.RegisterItem=5]="RegisterItem",a[a.UnregisterItem=6]="UnregisterItem",a))(me||{});function w(e,u=r=>r){let r=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,i=(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.sortByDomNode)(u(e.items.slice()),t=>t.dataRef.current.domRef.current),s=r?i.indexOf(r):null;return s===-1&&(s=null),{items:i,activeItemIndex:s}}let de={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,menuState:1}},[0](e){return e.menuState===0?e:{...e,menuState:0}},[2]:(e,u)=>{var s;let r=w(e),i=(0,_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.calculateActiveIndex)(u,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:t=>t.id,resolveDisabled:t=>t.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:i,activationTrigger:(s=u.trigger)!=null?s:1}},[3]:(e,u)=>{let i=e.searchQuery!==""?0:1,s=e.searchQuery+u.value.toLowerCase(),o=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+i).concat(e.items.slice(0,e.activeItemIndex+i)):e.items).find(l=>{var m;return((m=l.dataRef.current.textValue)==null?void 0:m.startsWith(s))&&!l.dataRef.current.disabled}),a=o?e.items.indexOf(o):-1;return a===-1||a===e.activeItemIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeItemIndex:a,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,u)=>{let r=w(e,i=>[...i,{id:u.id,dataRef:u.dataRef}]);return{...e,...r}},[6]:(e,u)=>{let r=w(e,i=>{let s=i.findIndex(t=>t.id===u.id);return s!==-1&&i.splice(s,1),i});return{...e,...r,activationTrigger:1}}},U=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);U.displayName="MenuContext";function F(e){let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(U);if(u===null){let r=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,F),r}return u}function fe(e,u){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(u.type,de,e,u)}let Te=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function ye(e,u){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fe,{menuState:1,buttonRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),itemsRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:s,buttonRef:t},o]=r,a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u);(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_5__.useOutsideClick)([t,s],(g,A)=>{var I;o({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(A,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)||(g.preventDefault(),(I=t.current)==null||I.focus())},i===0);let l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{o({type:1})}),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i===0,close:l}),[i,l]),M=e,f={ref:a};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(U.Provider,{value:r},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.OpenClosedProvider,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_3__.match)(i,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.render)({ourProps:f,theirProps:M,slot:m,defaultTag:Te,name:"Menu"})))}let Ie="button";function Me(e,u){var I;let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)(),{id:i=`headlessui-menu-button-${r}`,...s}=e,[t,o]=F("Menu.Button"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t.buttonRef,u),l=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)(),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(p=>{switch(p.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame(()=>o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First}));break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:p.preventDefault(),p.stopPropagation(),o({type:0}),l.nextFrame(()=>o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last}));break}}),M=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(p=>{switch(p.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:p.preventDefault();break}}),f=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(p=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_12__.isDisabledReactIssue7711)(p.currentTarget))return p.preventDefault();e.disabled||(t.menuState===0?(o({type:1}),l.nextFrame(()=>{var R;return(R=t.buttonRef.current)==null?void 0:R.focus({preventScroll:!0})})):(p.preventDefault(),o({type:0})))}),g=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.menuState===0}),[t]),A={ref:a,id:i,type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_13__.useResolveButtonType)(e,t.buttonRef),"aria-haspopup":"menu","aria-controls":(I=t.itemsRef.current)==null?void 0:I.id,"aria-expanded":e.disabled?void 0:t.menuState===0,onKeyDown:m,onKeyUp:M,onClick:f};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.render)({ourProps:A,theirProps:s,slot:g,defaultTag:Ie,name:"Menu.Button"})}let ge="div",Re=_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.Features.Static;function Ae(e,u){var R,E;let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)(),{id:i=`headlessui-menu-items-${r}`,...s}=e,[t,o]=F("Menu.Items"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(t.itemsRef,u),l=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_14__.useOwnerDocument)(t.itemsRef),m=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_10__.useDisposables)(),M=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.useOpenClosed)(),f=(()=>M!==null?(M&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_7__.State.Open:t.menuState===0)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let n=t.itemsRef.current;n&&t.menuState===0&&n!==(l==null?void 0:l.activeElement)&&n.focus({preventScroll:!0})},[t.menuState,t.itemsRef,l]),(0,_hooks_use_tree_walker_js__WEBPACK_IMPORTED_MODULE_15__.useTreeWalker)({container:t.itemsRef.current,enabled:t.menuState===0,accept(n){return n.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:n.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(n){n.setAttribute("role","none")}});let g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(n=>{var S,O;switch(m.dispose(),n.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:if(t.searchQuery!=="")return n.preventDefault(),n.stopPropagation(),o({type:3,value:n.key});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Enter:if(n.preventDefault(),n.stopPropagation(),o({type:1}),t.activeItemIndex!==null){let{dataRef:c}=t.items[t.activeItemIndex];(O=(S=c.current)==null?void 0:S.domRef.current)==null||O.click()}(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.restoreFocusIfNecessary)(t.buttonRef.current);break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Next});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.ArrowUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Previous});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Home:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageUp:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.First});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.End:case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.PageDown:return n.preventDefault(),n.stopPropagation(),o({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Last});case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Escape:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(()=>{var c;return(c=t.buttonRef.current)==null?void 0:c.focus({preventScroll:!0})});break;case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Tab:n.preventDefault(),n.stopPropagation(),o({type:1}),(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)().nextFrame(()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.focusFrom)(t.buttonRef.current,n.shiftKey?_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Previous:_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.Focus.Next)});break;default:n.key.length===1&&(o({type:3,value:n.key}),m.setTimeout(()=>o({type:4}),350));break}}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(n=>{switch(n.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_11__.Keys.Space:n.preventDefault();break}}),I=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.menuState===0}),[t]),p={"aria-activedescendant":t.activeItemIndex===null||(R=t.items[t.activeItemIndex])==null?void 0:R.id,"aria-labelledby":(E=t.buttonRef.current)==null?void 0:E.id,id:i,onKeyDown:g,onKeyUp:A,role:"menu",tabIndex:0,ref:a};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.render)({ourProps:p,theirProps:s,slot:I,defaultTag:ge,features:Re,visible:f,name:"Menu.Items"})}let be=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Ee(e,u){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_9__.useId)(),{id:i=`headlessui-menu-item-${r}`,disabled:s=!1,...t}=e,[o,a]=F("Menu.Item"),l=o.activeItemIndex!==null?o.items[o.activeItemIndex].id===i:!1,m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),M=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_4__.useSyncRefs)(u,m);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{if(o.menuState!==0||!l||o.activationTrigger===0)return;let c=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_16__.disposables)();return c.requestAnimationFrame(()=>{var b,_;(_=(b=m.current)==null?void 0:b.scrollIntoView)==null||_.call(b,{block:"nearest"})}),c.dispose},[m,l,o.menuState,o.activationTrigger,o.activeItemIndex]);let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({disabled:s,domRef:m});(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{f.current.disabled=s},[f,s]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>{var c,b;f.current.textValue=(b=(c=m.current)==null?void 0:c.textContent)==null?void 0:b.toLowerCase()},[f,m]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_17__.useIsoMorphicEffect)(()=>(a({type:5,id:i,dataRef:f}),()=>a({type:6,id:i})),[f,i]);let g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{a({type:1})}),A=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(c=>{if(s)return c.preventDefault();a({type:1}),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.restoreFocusIfNecessary)(o.buttonRef.current)}),I=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(()=>{if(s)return a({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing});a({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:i})}),p=(0,_hooks_use_tracked_pointer_js__WEBPACK_IMPORTED_MODULE_18__.useTrackedPointer)(),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(c=>p.update(c)),E=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(c=>{p.wasMoved(c)&&(s||l||a({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Specific,id:i,trigger:0}))}),n=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_6__.useEvent)(c=>{p.wasMoved(c)&&(s||l&&a({type:2,focus:_utils_calculate_active_index_js__WEBPACK_IMPORTED_MODULE_2__.Focus.Nothing}))}),S=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({active:l,disabled:s,close:g}),[l,s,g]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.render)({ourProps:{id:i,ref:M,role:"menuitem",tabIndex:s===!0?void 0:-1,"aria-disabled":s===!0?!0:void 0,disabled:void 0,onClick:A,onFocus:I,onPointerEnter:R,onMouseEnter:R,onPointerMove:E,onMouseMove:E,onPointerLeave:n,onMouseLeave:n},theirProps:t,slot:S,defaultTag:be,name:"Menu.Item"})}let Se=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(ye),Pe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(Me),ve=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(Ae),xe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_8__.forwardRefWithAs)(Ee),ot=Object.assign(Se,{Button:Pe,Items:ve,Item:xe});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/switch/switch.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/switch/switch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Switch: () => (/* binding */ ve)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _label_label_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label/label.js */ "./node_modules/@headlessui/react/dist/components/label/label.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-resolve-button-type.js */ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_form_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/form.js */ "./node_modules/@headlessui/react/dist/utils/form.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-controllable.js */ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
let b=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);b.displayName="GroupContext";let V=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function Y(p){var t;let[n,c]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[d,m]=(0,_label_label_js__WEBPACK_IMPORTED_MODULE_1__.useLabels)(),[r,f]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_2__.useDescriptions)(),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({switch:n,setSwitch:c,labelledby:d,describedby:r}),[n,c,d,r]),h={},T=p;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(f,{name:"Switch.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(m,{name:"Switch.Label",props:{htmlFor:(t=a.switch)==null?void 0:t.id,onClick(o){n&&(o.currentTarget.tagName==="LABEL"&&o.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},react__WEBPACK_IMPORTED_MODULE_0__.createElement(b.Provider,{value:a},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:h,theirProps:T,defaultTag:V,name:"Switch.Group"}))))}let Z="button";function ee(p,n){let c=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:d=`headlessui-switch-${c}`,checked:m,defaultChecked:r=!1,onChange:f,name:a,value:h,...T}=p,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(b),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),D=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(o,n,t===null?null:t.setSwitch),[i,s]=(0,_hooks_use_controllable_js__WEBPACK_IMPORTED_MODULE_6__.useControllable)(m,f,r),y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(()=>s==null?void 0:s(!i)),g=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_8__.isDisabledReactIssue7711)(e.currentTarget))return e.preventDefault();e.preventDefault(),y()}),C=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>{e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Space?(e.preventDefault(),y()):e.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_9__.Keys.Enter&&(0,_utils_form_js__WEBPACK_IMPORTED_MODULE_10__.attemptSubmit)(e.currentTarget)}),L=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_7__.useEvent)(e=>e.preventDefault()),v=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({checked:i}),[i]),G={id:d,ref:D,role:"switch",type:(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_11__.useResolveButtonType)(p,o),tabIndex:0,"aria-checked":i,"aria-labelledby":t==null?void 0:t.labelledby,"aria-describedby":t==null?void 0:t.describedby,onClick:g,onKeyUp:C,onKeyPress:L},R=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_12__.useDisposables)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var S;let e=(S=o.current)==null?void 0:S.closest("form");e&&r!==void 0&&R.addEventListener(e,"reset",()=>{s(r)})},[o,s]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,a!=null&&i&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_13__.Features.Hidden,...(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.compact)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i,name:a,value:h})}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:G,theirProps:T,slot:v,defaultTag:Z,name:"Switch"}))}let te=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(ee),ne=Y,ve=Object.assign(te,{Group:ne,Label:_label_label_js__WEBPACK_IMPORTED_MODULE_1__.Label,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_2__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-controllable.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-controllable.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useControllable: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function T(l,r,c){let[i,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(c),e=l!==void 0,t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e),u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return e&&!t.current&&!u.current?(u.current=!0,t.current=e,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!e&&t.current&&!d.current&&(d.current=!0,t.current=e,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[e?l:i,(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(n=>(e||s(n),r==null?void 0:r(n)))]}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
var o;let I=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId():null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{e===null&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ L)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
function L(m,E,c=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(n,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{u.current&&(f(e,()=>u.current),u.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useResolveButtonType: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function l(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&f(!1),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTrackedPointer: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function t(e){return[e.screenX,e.screenY]}function u(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([-1,-1]);return{wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(r){e.current=t(r)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tree-walker.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useTreeWalker: () => (/* binding */ F)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function F({container:e,accept:t,walk:r,enabled:c=!0}){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{o.current=t,l.current=r},[t,r]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{if(!e||!c)return;let n=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_2__.getOwnerDocument)(e);if(!n)return;let f=o.current,p=l.current,d=Object.assign(i=>f(i),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,d,!1);for(;u.nextNode();)p(u.currentNode)},[e,c,o,l])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ p),
/* harmony export */   Hidden: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let a="div";var p=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(p||{});function s(t,o){let{features:n=1,...e}=t,d={ref:o,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:d,theirProps:e,slot:{},defaultTag:a,name:"Hidden"})}let c=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(s);


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ c),
/* harmony export */   State: () => (/* binding */ d),
/* harmony export */   useOpenClosed: () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function C(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function c({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDisabledReactIssue7711: () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/calculate-active-index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/calculate-active-index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ a),
/* harmony export */   calculateActiveIndex: () => (/* binding */ x)
/* harmony export */ });
function f(r){throw new Error("Unexpected object: "+r)}var a=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(a||{});function x(r,n){let t=n.resolveItems();if(t.length<=0)return null;let l=n.resolveActiveIndex(),s=l!=null?l:-1,d=(()=>{switch(r.focus){case 0:return t.findIndex(e=>!n.resolveDisabled(e));case 1:{let e=t.slice().reverse().findIndex((i,c,u)=>s!==-1&&u.length-c-1>=s?!1:!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 2:return t.findIndex((e,i)=>i<=s?!1:!n.resolveDisabled(e));case 3:{let e=t.slice().reverse().findIndex(i=>!n.resolveDisabled(i));return e===-1?e:t.length-1-e}case 4:return t.findIndex(e=>n.resolveId(e)===r.id);case 5:return null;default:f(r)}})();return d===-1?l:d}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ e)
/* harmony export */ });
function e(...n){return n.filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ L),
/* harmony export */   FocusResult: () => (/* binding */ N),
/* harmony export */   FocusableMode: () => (/* binding */ F),
/* harmony export */   focusElement: () => (/* binding */ S),
/* harmony export */   focusFrom: () => (/* binding */ v),
/* harmony export */   focusIn: () => (/* binding */ I),
/* harmony export */   getFocusableElements: () => (/* binding */ E),
/* harmony export */   isFocusableElement: () => (/* binding */ h),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ g),
/* harmony export */   sortByDomNode: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var L=(r=>(r[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r))(L||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),T=(n=>(n[n.Previous=-1]="Previous",n[n.Next=1]="Next",n))(T||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var F=(n=>(n[n.Strict=0]="Strict",n[n.Loose=1]="Loose",n))(F||{});function h(e,t=0){var n;return e===((n=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:n.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function g(e){let t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function w(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?n:!1}function A(e,t=n=>n){return e.slice().sort((n,l)=>{let o=t(n),i=t(l);if(o===null||i===null)return 0;let r=o.compareDocumentPosition(i);return r&Node.DOCUMENT_POSITION_FOLLOWING?-1:r&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function v(e,t){return I(E(),t,{relativeTo:e})}function I(e,t,{sorted:n=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,r=Array.isArray(e)?n?A(e):e:E(e);o.length>0&&r.length>1&&(r=r.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,r.indexOf(l))-1;if(t&4)return Math.max(0,r.indexOf(l))+1;if(t&8)return r.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},c=0,a=r.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=r[s],u==null||u.focus(p),c+=d}while(u!==i.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/form.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/form.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attemptSubmit: () => (/* binding */ p),
/* harmony export */   objectToFormEntries: () => (/* binding */ e)
/* harmony export */ });
function e(n={},r=null,t=[]){for(let[i,o]of Object.entries(n))f(t,s(r,i),o);return t}function s(n,r){return n?n+"["+r+"]":r}function f(n,r,t){if(Array.isArray(t))for(let[i,o]of t.entries())f(n,s(r,i.toString()),o);else t instanceof Date?n.push([r,t.toISOString()]):typeof t=="boolean"?n.push([r,t?"1":"0"]):typeof t=="string"?n.push([r,t]):typeof t=="number"?n.push([r,`${t}`]):t==null?n.push([r,""]):e(t,r,n)}function p(n){var t;let r=(t=n==null?void 0:n.form)!=null?t:n.closest("form");if(r){for(let i of r.elements)if(i.tagName==="INPUT"&&i.type==="submit"||i.tagName==="BUTTON"&&i.type==="submit"||i.nodeName==="INPUT"&&i.type==="image"){i.click();return}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function e(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ j),
/* harmony export */   RenderStrategy: () => (/* binding */ w),
/* harmony export */   compact: () => (/* binding */ P),
/* harmony export */   forwardRefWithAs: () => (/* binding */ L),
/* harmony export */   render: () => (/* binding */ D)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var j=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(j||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function D({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:l}){let o=h(t,r);if(n)return m(o,e,a,l);let f=s!=null?s:0;if(f&2){let{static:i=!1,...u}=o;if(i)return m(u,e,a,l)}if(f&1){let{unmount:i=!0,...u}=o;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(i?0:1,{[0](){return null},[1](){return m({...u,hidden:!0,style:{display:"none"}},e,a,l)}})}return m(o,e,a,l)}function m(r,t={},e,a){var y;let{as:s=e,children:n,refName:l="ref",...o}=g(r,["unmount","static"]),f=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let u={};if(t){let d=!1,c=[];for(let[p,F]of Object.entries(t))typeof F=="boolean"&&(d=!0),F===!0&&c.push(p);d&&(u["data-headlessui-state"]=c.join(" "))}if(s===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(P(o)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let d=(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)((y=i.props)==null?void 0:y.className,o.className),c=d?{className:d}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},h(i.props,P(g(o,["ref"]))),u,f,O(i.ref,f.ref),c))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(s,Object.assign({},g(o,["ref"]),s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&f,s!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u),i)}function O(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function h(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...l){let o=e[s];for(let f of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;f(n,...l)}}});return t}function L(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function P(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ArrowUpRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
  }));
}

const ForwardRef = React.forwardRef(ArrowUpRightIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/CheckIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/CheckIcon.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function CheckIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4.5 12.75l6 6 9-13.5"
  }));
}

const ForwardRef = React.forwardRef(CheckIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}

const ForwardRef = React.forwardRef(ChevronDownIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/Cog6ToothIcon.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/Cog6ToothIcon.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function Cog6ToothIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
  }), /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  }));
}

const ForwardRef = React.forwardRef(Cog6ToothIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/RectangleGroupIcon.js":
/*!************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/RectangleGroupIcon.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function RectangleGroupIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
  }));
}

const ForwardRef = React.forwardRef(RectangleGroupIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/RocketLaunchIcon.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/RocketLaunchIcon.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function RocketLaunchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
  }));
}

const ForwardRef = React.forwardRef(RocketLaunchIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/SignalSlashIcon.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/SignalSlashIcon.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function SignalSlashIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3 3l8.735 8.735m0 0a.374.374 0 11.53.53m-.53-.53l.53.53m0 0L21 21M14.652 9.348a3.75 3.75 0 010 5.304m2.121-7.425a6.75 6.75 0 010 9.546m2.121-11.667c3.808 3.807 3.808 9.98 0 13.788m-9.546-4.242a3.733 3.733 0 01-1.06-2.122m-1.061 4.243a6.75 6.75 0 01-1.625-6.929m-.496 9.05c-3.068-3.067-3.664-7.67-1.79-11.334M12 12h.008v.008H12V12z"
  }));
}

const ForwardRef = React.forwardRef(SignalSlashIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/Squares2X2Icon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/Squares2X2Icon.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function Squares2X2Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
  }));
}

const ForwardRef = React.forwardRef(Squares2X2Icon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/XMarkIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/XMarkIcon.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const React = __webpack_require__(/*! react */ "react");

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = React.forwardRef(XMarkIcon);
module.exports = ForwardRef;

/***/ }),

/***/ "./node_modules/goober/dist/goober.modern.js":
/*!***************************************************!*\
  !*** ./node_modules/goober/dist/goober.modern.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   css: () => (/* binding */ u),
/* harmony export */   extractCss: () => (/* binding */ r),
/* harmony export */   glob: () => (/* binding */ b),
/* harmony export */   keyframes: () => (/* binding */ h),
/* harmony export */   setup: () => (/* binding */ m),
/* harmony export */   styled: () => (/* binding */ j)
/* harmony export */ });
let e={data:""},t=t=>"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||e,r=e=>{let r=t(e),l=r.data;return r.data="",l},l=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,a=/\/\*[^]*?\*\/|  +/g,n=/\n+/g,o=(e,t)=>{let r="",l="",a="";for(let n in e){let c=e[n];"@"==n[0]?"i"==n[1]?r=n+" "+c+";":l+="f"==n[1]?o(c,n):n+"{"+o(c,"k"==n[1]?"":t)+"}":"object"==typeof c?l+=o(c,t?t.replace(/([^,])+/g,e=>n.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):n):null!=c&&(n=/^--/.test(n)?n:n.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=o.p?o.p(n,c):n+":"+c+";")}return r+(t&&a?t+"{"+a+"}":a)+l},c={},s=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+s(e[r]);return t}return e},i=(e,t,r,i,p)=>{let u=s(e),d=c[u]||(c[u]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(u));if(!c[d]){let t=u!==e?e:(e=>{let t,r,o=[{}];for(;t=l.exec(e.replace(a,""));)t[4]?o.shift():t[3]?(r=t[3].replace(n," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(n," ").trim();return o[0]})(e);c[d]=o(p?{["@keyframes "+d]:t}:t,r?"":"."+d)}let f=r&&c.g?c.g:null;return r&&(c.g=c[d]),((e,t,r,l)=>{l?t.data=t.data.replace(l,e):-1===t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e)})(c[d],t,i,f),d},p=(e,t,r)=>e.reduce((e,l,a)=>{let n=t[a];if(n&&n.call){let e=n(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;n=t?"."+t:e&&"object"==typeof e?e.props?"":o(e,""):!1===e?"":e}return e+l+(null==n?"":n)},"");function u(e){let r=this||{},l=e.call?e(r.p):e;return i(l.unshift?l.raw?p(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>Object.assign(e,t&&t.call?t(r.p):t),{}):l,t(r.target),r.g,r.o,r.k)}let d,f,g,b=u.bind({g:1}),h=u.bind({k:1});function m(e,t,r,l){o.p=t,d=e,f=r,g=l}function j(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:f&&f()},c),r.o=/ *go\d+/.test(s),c.className=u.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=e;return e[0]&&(i=c.as||e,delete c.as),g&&i[0]&&g(c),d(i,c)}return t?t(a):a}}


/***/ }),

/***/ "./node_modules/react-hot-toast/dist/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/react-hot-toast/dist/index.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckmarkIcon: () => (/* binding */ w),
/* harmony export */   ErrorIcon: () => (/* binding */ _),
/* harmony export */   LoaderIcon: () => (/* binding */ V),
/* harmony export */   ToastBar: () => (/* binding */ F),
/* harmony export */   ToastIcon: () => (/* binding */ M),
/* harmony export */   Toaster: () => (/* binding */ Ie),
/* harmony export */   "default": () => (/* binding */ _t),
/* harmony export */   resolveValue: () => (/* binding */ T),
/* harmony export */   toast: () => (/* binding */ n),
/* harmony export */   useToaster: () => (/* binding */ D),
/* harmony export */   useToasterStore: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var goober__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! goober */ "./node_modules/goober/dist/goober.modern.js");
var W=e=>typeof e=="function",T=(e,t)=>W(e)?e(t):e;var U=(()=>{let e=0;return()=>(++e).toString()})(),b=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})();var Q=20;var S=new Map,X=1e3,$=e=>{if(S.has(e))return;let t=setTimeout(()=>{S.delete(e),u({type:4,toastId:e})},X);S.set(e,t)},J=e=>{let t=S.get(e);t&&clearTimeout(t)},v=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,Q)};case 1:return t.toast.id&&J(t.toast.id),{...e,toasts:e.toasts.map(r=>r.id===t.toast.id?{...r,...t.toast}:r)};case 2:let{toast:o}=t;return e.toasts.find(r=>r.id===o.id)?v(e,{type:1,toast:o}):v(e,{type:0,toast:o});case 3:let{toastId:s}=t;return s?$(s):e.toasts.forEach(r=>{$(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(r=>r.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},A=[],P={toasts:[],pausedAt:void 0},u=e=>{P=v(P,e),A.forEach(t=>{t(P)})},Y={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(P);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(A.push(o),()=>{let a=A.indexOf(o);a>-1&&A.splice(a,1)}),[t]);let s=t.toasts.map(a=>{var r,c;return{...e,...e[a.type],...a,duration:a.duration||((r=e[a.type])==null?void 0:r.duration)||(e==null?void 0:e.duration)||Y[a.type],style:{...e.style,...(c=e[a.type])==null?void 0:c.style,...a.style}}});return{...t,toasts:s}};var G=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(o==null?void 0:o.id)||U()}),h=e=>(t,o)=>{let s=G(t,e,o);return u({type:2,toast:s}),s.id},n=(e,t)=>h("blank")(e,t);n.error=h("error");n.success=h("success");n.loading=h("loading");n.custom=h("custom");n.dismiss=e=>{u({type:3,toastId:e})};n.remove=e=>u({type:4,toastId:e});n.promise=(e,t,o)=>{let s=n.loading(t.loading,{...o,...o==null?void 0:o.loading});return e.then(a=>(n.success(T(t.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{n.error(T(t.error,a),{id:s,...o,...o==null?void 0:o.error})}),e};var Z=(e,t)=>{u({type:1,toast:{id:e,height:t}})},ee=()=>{u({type:5,time:Date.now()})},D=e=>{let{toasts:t,pausedAt:o}=I(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(o)return;let r=Date.now(),c=t.map(i=>{if(i.duration===1/0)return;let d=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(d<0){i.visible&&n.dismiss(i.id);return}return setTimeout(()=>n.dismiss(i.id),d)});return()=>{c.forEach(i=>i&&clearTimeout(i))}},[t,o]);let s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{o&&u({type:6,time:Date.now()})},[o]),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((r,c)=>{let{reverseOrder:i=!1,gutter:d=8,defaultPosition:p}=c||{},g=t.filter(m=>(m.position||p)===(r.position||p)&&m.height),E=g.findIndex(m=>m.id===r.id),x=g.filter((m,R)=>R<E&&m.visible).length;return g.filter(m=>m.visible).slice(...i?[x+1]:[0,x]).reduce((m,R)=>m+(R.height||0)+d,0)},[t]);return{toasts:t,handlers:{updateHeight:Z,startPause:ee,endPause:s,calculateOffset:a}}};var oe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,re=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,_=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;var ne=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,V=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${ne} 1s linear infinite;
`;var pe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,de=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,w=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;var ue=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: absolute;
`,le=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Te=(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fe=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,M=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return t!==void 0?typeof t=="string"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(fe,null,t):t:o==="blank"?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...s}),o!=="loading"&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(ue,null,o==="error"?react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{...s}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,{...s})))};var ye=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ge=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,he="0%{opacity:0;} 100%{opacity:1;}",xe="0%{opacity:1;} 100%{opacity:0;}",be=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Se=(0,goober__WEBPACK_IMPORTED_MODULE_1__.styled)("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ae=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=b()?[he,xe]:[ye(s),ge(s)];return{animation:t?`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${(0,goober__WEBPACK_IMPORTED_MODULE_1__.keyframes)(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},F=react__WEBPACK_IMPORTED_MODULE_0__.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?Ae(e.position||t||"top-center",e.visible):{opacity:0},r=react__WEBPACK_IMPORTED_MODULE_0__.createElement(M,{toast:e}),c=react__WEBPACK_IMPORTED_MODULE_0__.createElement(Se,{...e.ariaProps},T(e.message,e));return react__WEBPACK_IMPORTED_MODULE_0__.createElement(be,{className:e.className,style:{...a,...o,...e.style}},typeof s=="function"?s({icon:r,message:c}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,r,c))});(0,goober__WEBPACK_IMPORTED_MODULE_1__.setup)(react__WEBPACK_IMPORTED_MODULE_0__.createElement);var Ee=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(c=>{if(c){let i=()=>{let d=c.getBoundingClientRect().height;s(e,d)};i(),new MutationObserver(i).observe(c,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:r,className:t,style:o},a)},Re=(e,t)=>{let o=e.includes("top"),s=o?{top:0}:{bottom:0},a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:b()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...s,...a}},ve=(0,goober__WEBPACK_IMPORTED_MODULE_1__.css)`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,O=16,Ie=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:c})=>{let{toasts:i,handlers:d}=D(o);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"fixed",zIndex:9999,top:O,left:O,right:O,bottom:O,pointerEvents:"none",...r},className:c,onMouseEnter:d.startPause,onMouseLeave:d.endPause},i.map(p=>{let g=p.position||t,E=d.calculateOffset(p,{reverseOrder:e,gutter:s,defaultPosition:t}),x=Re(g,E);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Ee,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?ve:"",style:x},p.type==="custom"?T(p.message,p):a?a(p):react__WEBPACK_IMPORTED_MODULE_0__.createElement(F,{toast:p,position:g}))}))};var _t=n;
//# sourceMappingURL=index.mjs.map

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

/***/ "./src/____dashboard/App.tsx":
/*!***********************************!*\
  !*** ./src/____dashboard/App.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PAGES: () => (/* binding */ PAGES)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BlocksPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BlocksPage */ "./src/____dashboard/components/BlocksPage.tsx");
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Heading */ "./src/____dashboard/components/Heading.tsx");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Nav */ "./src/____dashboard/components/Nav.tsx");
/* harmony import */ var _components_WelcomePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/WelcomePage */ "./src/____dashboard/components/WelcomePage.tsx");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types */ "./src/____dashboard/types.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _components_SettingsPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/SettingsPage */ "./src/____dashboard/components/SettingsPage.tsx");











const PAGES = [
// { name: "Welcome", path: "welcome" },
{
  name: "Blocks/Extensions",
  path: "blocks"
}, {
  name: "Settings",
  path: "settings"
}];
const App = ({
  boostify_blocks_enable_disable_options,
  boostify_blocks_settings_options,
  boostify_blocks_list,
  boostify_blocks_layout_global_settings
}) => {
  //
  const [currentPath, setcurrentPath] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(PAGES[0].path);
  const [blocksStatus, setBlocksStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(boostify_blocks_enable_disable_options);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const path = urlParams.get("path");
    const pathCorrect = ["blocks", "settings", "welcome"];
    if (path && pathCorrect.includes(path)) {
      setcurrentPath(path);
    }
  }, []);
  const setHistoryStateParams = path => {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("path", path);
    if (path !== "settings") {
      queryParams.delete("tab");
    }
    history.replaceState(null, "", `?${queryParams.toString()}`);
  };
  const renderPage = () => {
    switch (currentPath) {
      case "blocks":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_BlocksPage__WEBPACK_IMPORTED_MODULE_2__["default"], {
          initWcbBlocksList: boostify_blocks_list,
          initWcbBlocksEnableDisable: boostify_blocks_enable_disable_options,
          blocksStatus: blocksStatus,
          setBlocksStatus: setBlocksStatus
        });
      case "settings":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_SettingsPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          initData: boostify_blocks_settings_options,
          themeLayoutGlobal: boostify_blocks_layout_global_settings
        });
      case "welcome":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_WelcomePage__WEBPACK_IMPORTED_MODULE_5__["default"], null);
      default:
        return null;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: ""
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    currentPath: currentPath,
    onChangePath: path => {
      setcurrentPath(path);
      setHistoryStateParams(path);
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container pb-14 px-2"
  }, currentPath !== "welcome" && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: PAGES.filter(item => item.path === currentPath)[0]?.name || ""
  }), renderPage()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {
    position: "top-right",
    containerStyle: {
      marginTop: "40px"
    },
    toastOptions: {
      style: {
        fontSize: 16,
        padding: "14px 16px"
      },
      duration: 4000
    }
  }));
};

// -------------------------------------------------------------------------------------------
const preEl = document.querySelector(`#boostify-blocks-dashboard-root`);
if (preEl) {
  let componentProps = preEl.getAttribute("data-props") ? JSON.parse(preEl.getAttribute("data-props") || "") : {};
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(App, {
    ...componentProps
  }), preEl);
}

//

/***/ }),

/***/ "./src/____dashboard/components/BlocksPage.tsx":
/*!*****************************************************!*\
  !*** ./src/____dashboard/components/BlocksPage.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/CheckIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/SignalSlashIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ArrowUpRightIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _MyToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyToggle */ "./src/____dashboard/components/MyToggle.tsx");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/menu/menu.js");






const BlocksPage = ({
  initWcbBlocksList,
  blocksStatus,
  setBlocksStatus
}) => {
  const [blocksList] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initWcbBlocksList);
  const handleDisableEnableBlocks = obj => {
    if (typeof jQuery !== "function") {
      return;
    }
    const newBlocksStatus = {
      ...blocksStatus,
      ...obj
    };
    setBlocksStatus(newBlocksStatus);
    const data = {
      action: "boostify_blocks_dashboard_blocks_disable_enable",
      nonce: window?.boostify_blocks_frontend_ajax_object?.nonce,
      blocksStatus: newBlocksStatus
    };
    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(
    // @ts-ignore
    jQuery.post(ajaxurl, data, function (response) {
      console.log("Got this from the server: ", response);
    }), {
      loading: "Saving...",
      success: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Successful saved!"),
      error: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Could not save.")
    });
  };
  const renderButtons = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex space-x-3 justify-end"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-xl border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      onClick: () => {
        const newblocksStatus = Object.keys(blocksStatus).reduce((obj, item) => {
          return {
            ...obj,
            [item]: "enabled"
          };
        }, {});
        handleDisableEnableBlocks(newblocksStatus);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, {
      className: "-ml-1 mr-2 h-5 w-5",
      "aria-hidden": "true"
    }), "Active all"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      onClick: () => {
        const newblocksStatus = Object.keys(blocksStatus).reduce((obj, item) => {
          return {
            ...obj,
            [item]: "disabled"
          };
        }, {});
        handleDisableEnableBlocks(newblocksStatus);
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__, {
      className: "-ml-1 mr-2 h-5 w-5 text-gray-500",
      "aria-hidden": "true"
    }), "Deactive all"));
  };
  const renderCard3 = (block, index) => {
    if (block.parent) {
      return null;
    }
    const status = blocksStatus[block.name];
    const currentBlock = block;
    const {
      title = "None",
      icon = "none",
      parent,
      name,
      description
    } = currentBlock || {};
    if (!!parent || !currentBlock) {
      return null;
    }
    const enabled = status !== "disabled";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: name + title,
      className: "overflow-hidden rounded-xl border border-gray-200 flex flex-col"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "h-11 w-11 flex-shrink-0 flex items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `text-lg w-6 h-6 text-black dashicon dashicons dashicons-${icon} ${icon}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-sm font-medium leading-6 text-gray-900"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Menu, {
      as: "a",
      href: `https://woostifyblocks.com/${name.replace(/\//g, "-")}`,
      target: "_blank",
      rel: "noopener noreferrer",
      title: "View demo",
      className: "relative ml-auto text-slate-700 hover:text-black"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__, {
      className: "w-5 h-5"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dl", {
      className: "flex-grow flex flex-col -my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 "
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-between gap-x-4 py-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-gray-700"
    }, description)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-auto flex justify-between gap-x-4 py-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dt", {
      className: "text-gray-500"
    }, "Turn on/off"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("dd", {
      className: "flex items-start gap-x-2"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      checked: enabled,
      id: currentBlock.name,
      name: currentBlock.name,
      onChange: checked => {
        handleDisableEnableBlocks({
          [currentBlock.name]: checked ? "enabled" : "disabled"
        });
      }
    }))))));
  };
  const renderCard2 = (key, index) => {
    const status = blocksStatus[key];
    const currentBlock = blocksList.filter(item => item.name === key)[0];
    const {
      title = "None",
      icon = "none",
      parent,
      name
    } = currentBlock || {};
    if (!!parent || !currentBlock) {
      return null;
    }
    const enabled = status === "enabled";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: key,
      className: `relative border rounded-xl bg-white transition-colors ${enabled ? "border-slate-100 text-slate-800 bg-slate-50" : "border-slate-200/80 hover:border-slate-300 text-slate-400"}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative z-10 h-20 p-4 flex items-center gap-x-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `text-[1.875rem] w-[1.875rem] h-[1.875rem] text-inherit dashicon dashicons dashicons-${icon} ${icon}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-1 min-w-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: key,
      className: "block text-base font-medium text-inherit capitalize select-none"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: `https://woostifyblocks.com/${name.replace(/\//g, "-")}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "focus-visible:text-slate-500 active:text-slate-500 hover:text-slate-500 focus:text-slate-400 text-slate-400 text-sm truncate"
    }, "View demo")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      checked: enabled,
      id: key,
      name: key,
      onChange: checked => {
        handleDisableEnableBlocks({
          [key]: checked ? "enabled" : "disabled"
        });
      }
    }))));
  };
  const renderCard = (key, index) => {
    const status = blocksStatus[key];
    const currentBlock = blocksList.filter(item => item.name === key)[0];
    const {
      title = "None",
      icon = "none",
      parent,
      name,
      description
    } = currentBlock || {};
    if (!!parent || !currentBlock) {
      return null;
    }
    const enabled = status === "enabled";
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: key,
      className: `relative border rounded-xl bg-white transition-colors ${enabled ? "border-slate-100 text-slate-800 bg-slate-50" : "border-slate-200/80 hover:border-slate-300 text-slate-400"}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "relative z-10 p-6 flex items-start gap-x-5"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-1 min-w-0 flex flex-col items-start"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-block flex-shrink-0 rounded-md bg-indigo-500 p-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: `text-lg w-6 h-6 text-white dashicon dashicons dashicons-${icon} ${icon}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: key,
      className: "text-2xl font-bold my-2 block"
    }, title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-xs text-muted-foreground block"
    }, description), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: `https://woostifyblocks.com/${name.replace(/\//g, "-")}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-xs font-medium text-indigo-500 block"
    }, "View demo")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex-shrink-0"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
      checked: enabled,
      id: key,
      name: key,
      onChange: checked => {
        handleDisableEnableBlocks({
          [key]: checked ? "enabled" : "disabled"
        });
      }
    }))));
  };
  const renderGridCards = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      role: "list",
      className: "mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8"
    }, blocksList.map(renderCard3));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, renderButtons(), renderGridCards());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlocksPage);

/***/ }),

/***/ "./src/____dashboard/components/FontMultiSelect.tsx":
/*!**********************************************************!*\
  !*** ./src/____dashboard/components/FontMultiSelect.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/XMarkIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/ChevronDownIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_controls_WcbFontFamilyPicker_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/controls/WcbFontFamilyPicker/google-fonts.json */ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json");




const ALL_FONTS = Object.keys(_components_controls_WcbFontFamilyPicker_google_fonts_json__WEBPACK_IMPORTED_MODULE_1__).sort((a, b) => a.localeCompare(b));
const FontMultiSelect = ({
  value,
  onChange
}) => {
  const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [highlighted, setHighlighted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const listRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const filtered = query.trim() === "" ? ALL_FONTS.filter(f => !value.includes(f)) : ALL_FONTS.filter(f => f.toLowerCase().includes(query.toLowerCase()) && !value.includes(f));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setHighlighted(0);
  }, [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handler = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen && listRef.current) {
      const item = listRef.current.children[highlighted];
      item?.scrollIntoView({
        block: "nearest"
      });
    }
  }, [highlighted, isOpen]);
  const addFont = font => {
    if (!font || value.includes(font)) return;
    onChange([...value, font]);
    setQuery("");
    inputRef.current?.focus();
  };
  const removeFont = font => {
    onChange(value.filter(f => f !== font));
  };
  const clearAll = () => {
    onChange([]);
    setQuery("");
    inputRef.current?.focus();
  };
  const handleKeyDown = e => {
    if (!isOpen && e.key !== "Escape") {
      setIsOpen(true);
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlighted(h => Math.min(h + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlighted(h => Math.max(h - 1, 0));
        break;
      case "Enter":
        e.preventDefault();
        if (filtered[highlighted]) addFont(filtered[highlighted]);
        break;
      case "Backspace":
        if (query === "" && value.length > 0) {
          removeFont(value[value.length - 1]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        setQuery("");
        break;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "relative"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-wrap items-center gap-1.5 px-2.5 py-2 border border-gray-300 rounded-lg bg-white cursor-text min-h-[44px] focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500",
    onClick: () => {
      inputRef.current?.focus();
      setIsOpen(true);
    }
  }, value.map(font => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    key: font,
    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-sm font-medium shrink-0"
  }, font, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onMouseDown: e => {
      e.preventDefault();
      removeFont(font);
    },
    className: "hover:text-blue-900 focus:outline-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__, {
    className: "w-3.5 h-3.5"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: inputRef,
    type: "text",
    value: query,
    onChange: e => {
      setQuery(e.target.value);
      setIsOpen(true);
    },
    onFocus: () => setIsOpen(true),
    onKeyDown: handleKeyDown,
    placeholder: value.length === 0 ? "Search Google Fonts…" : "",
    className: "flex-1 min-w-[140px] outline-none text-sm text-gray-700 bg-transparent placeholder-gray-400 py-0.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center gap-0.5 ml-auto shrink-0"
  }, value.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onMouseDown: e => {
      e.preventDefault();
      clearAll();
    },
    className: "p-1 text-gray-400 hover:text-gray-600 focus:outline-none",
    title: "Clear all"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__, {
    className: "w-4 h-4"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onMouseDown: e => {
      e.preventDefault();
      setIsOpen(o => !o);
      if (!isOpen) inputRef.current?.focus();
    },
    className: "p-1 text-gray-400 hover:text-gray-600 focus:outline-none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__, {
    className: `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`
  })))), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    ref: listRef,
    className: "max-h-56 overflow-y-auto py-1 text-sm"
  }, filtered.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "px-4 py-2.5 text-gray-400"
  }, value.length === ALL_FONTS.length ? "All fonts selected" : "No fonts match") : filtered.map((font, idx) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: font,
    onMouseDown: e => {
      e.preventDefault();
      addFont(font);
    },
    onMouseEnter: () => setHighlighted(idx),
    className: `px-4 py-2 cursor-pointer select-none ${idx === highlighted ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"}`
  }, font))), filtered.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-4 py-1.5 border-t border-gray-100 text-xs text-gray-400"
  }, filtered.length, " font", filtered.length !== 1 ? "s" : "", " available")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FontMultiSelect);

/***/ }),

/***/ "./src/____dashboard/components/Heading.tsx":
/*!**************************************************!*\
  !*** ./src/____dashboard/components/Heading.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Heading = ({
  children
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-10 mb-8 font-semibold text-2xl lg:max-w-[80rem] capitalize"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);

/***/ }),

/***/ "./src/____dashboard/components/InputNumber.tsx":
/*!******************************************************!*\
  !*** ./src/____dashboard/components/InputNumber.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const InputNumber = ({
  label,
  desc,
  unit = "px",
  id,
  onChange,
  value,
  defaultValue,
  ...props
}) => {
  var _ref;
  const [localValue, setLocalValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(String((_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : ""));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (value !== undefined) {
      setLocalValue(String(value));
    }
  }, [value]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "gap-4 flex lg:flex-row flex-col lg:items-center items-start justify-between"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 max-w-2xl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: id,
    className: "block text-base font-medium text-gray-700 select-none"
  }, label), desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-1.5 block text-sm text-gray-500",
    dangerouslySetInnerHTML: {
      __html: desc
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "min-w-[140px] max-w-[180px] flex-shrink-0 relative mt-1 ml-0 rounded-md"
  }, unit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-gray-500 sm:text-sm"
  }, unit)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ...props,
    value: localValue,
    onChange: e => {
      setLocalValue(e.currentTarget.value);
    },
    onBlur: () => {
      onChange && onChange(parseInt(localValue));
    },
    id: id,
    type: "number",
    className: "number-hide-arrow block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputNumber);

/***/ }),

/***/ "./src/____dashboard/components/MyToggle.tsx":
/*!***************************************************!*\
  !*** ./src/____dashboard/components/MyToggle.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/switch/switch.js");



const MyToggle = ({
  checked,
  onChange,
  desc,
  label,
  name,
  id,
  disabled
}) => {
  const [enabled, setEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(checked);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setEnabled(checked);
  }, [checked]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center justify-between space-x-3"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 max-w-2xl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "block text-base font-medium text-gray-700 select-none",
    htmlFor: id
  }, label), desc && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "mt-1.5 block text-sm text-gray-500"
  }, desc)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    disabled: disabled,
    checked: enabled,
    onChange: checked => {
      setEnabled(checked);
      onChange(checked);
    },
    className: `${enabled ? "bg-blue-600" : "bg-gray-200"} flex-shrink-0 relative inline-flex h-6 w-11 items-center rounded-full`,
    name: name,
    id: id
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "sr-only"
  }, "Enable notifications"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `${enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyToggle);

/***/ }),

/***/ "./src/____dashboard/components/Nav.tsx":
/*!**********************************************!*\
  !*** ./src/____dashboard/components/Nav.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ "./src/____dashboard/App.tsx");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Logo */ "./src/components/Logo.tsx");


// import dashboardlogo from "../../../public/images/dashboardlogo.svg";



const Nav = ({
  currentPath,
  onChangePath
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "bg-white px-2 shadow"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container relative flex justify-between h-16 space-x-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-shrink-0 items-center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "flex-shrink-0 flex items-center text-4xl text-black outline-none ring-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], null))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sm:flex space-x-3 sm:space-x-8"
  }, _App__WEBPACK_IMPORTED_MODULE_1__.PAGES.map(item => {
    const isActive = currentPath === item.path;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      key: item.path,
      className: `inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium ring-0 shadow-none focus:ring-0 focus:outline-none ${isActive ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"}`,
      href: "#",
      onClick: e => {
        e.preventDefault();
        if (!isActive) {
          onChangePath(item.path);
        }
      }
    }, item.name);
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center flex-shrink-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    title: "What's New?",
    className: "flex items-center justify-center cursor-pointer rounded-full text-slate-700 hover:text-black font-semibold"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.5 15.5V10C5.5 6.41 8.41 3.5 12 3.5C15.59 3.5 18.5 6.41 18.5 10V14C18.5 16.892 16.611 19.343 14 20.1865",
    stroke: "#4E5969"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.5 10.5H4C3.86739 10.5 3.74021 10.5527 3.64645 10.6464C3.55268 10.7402 3.5 10.8674 3.5 11V14C3.5 14.1326 3.55268 14.2598 3.64645 14.3536C3.74021 14.4473 3.86739 14.5 4 14.5H5.5M18.5 10V14M12 20.5C12.698 20.5 13.37 20.39 14 20.1865V19C14 18.8674 13.9473 18.7402 13.8536 18.6464C13.7598 18.5527 13.6326 18.5 13.5 18.5H10.5C10.3674 18.5 10.2402 18.5527 10.1464 18.6464C10.0527 18.7402 10 18.8674 10 19V20C10 20.1326 10.0527 20.2598 10.1464 20.3536C10.2402 20.4473 10.3674 20.5 10.5 20.5H12ZM18.5 10.5H20C20.1326 10.5 20.2598 10.5527 20.3536 10.6464C20.4473 10.7402 20.5 10.8674 20.5 11V14C20.5 14.1326 20.4473 14.2598 20.3536 14.3536C20.2598 14.4473 20.1326 14.5 20 14.5H18.5V10.5Z",
    stroke: "#4E5969"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-1.5"
  }, "Support")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/____dashboard/components/SettingsPage.tsx":
/*!*******************************************************!*\
  !*** ./src/____dashboard/components/SettingsPage.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/Cog6ToothIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/RectangleGroupIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/Squares2X2Icon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/RocketLaunchIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _SettingsPageEditorOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsPageEditorOptions */ "./src/____dashboard/components/SettingsPageEditorOptions.tsx");
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var _SettingsPageTemplates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingsPageTemplates */ "./src/____dashboard/components/SettingsPageTemplates.tsx");
/* harmony import */ var _SettingsPageBlockSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingsPageBlockSettings */ "./src/____dashboard/components/SettingsPageBlockSettings.tsx");
/* harmony import */ var _SettingsPagePerformance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SettingsPagePerformance */ "./src/____dashboard/components/SettingsPagePerformance.tsx");








const TABS = [{
  name: "editor-options",
  label: "Editor options",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__
}, {
  name: "templates",
  label: "Templates",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__
}, {
  name: "block-settings",
  label: "Block settings",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__
}, {
  name: "performance",
  label: "Performance",
  icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__
}];
const SettingsPage = ({
  initData,
  themeLayoutGlobal
}) => {
  const [allSettings, setAllSettings] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initData);
  const [currentTab, setcurrentTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TABS[0].name);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tab = urlParams.get("tab");
    if (tab && TABS.some(item => item.name === tab)) {
      setcurrentTab(tab);
    }
  }, []);
  const setHistoryStateParams = tab => {
    let queryParams = new URLSearchParams(window.location.search);
    const path = queryParams.get("path");
    if (path) {
      queryParams.set("path", path);
    }
    queryParams.set("tab", tab);
    history.replaceState(null, "", `?${queryParams.toString()}`);
  };
  const handleUpdateSettings = newData => {
    if (typeof jQuery !== "function") {
      return;
    }
    const newSettings = {
      ...allSettings,
      ...newData
    };
    setAllSettings(newSettings);
    const data = {
      action: "boostify_blocks_dashboard_update_settings",
      nonce: window?.boostify_blocks_frontend_ajax_object?.nonce,
      settings: newSettings
    };
    react_hot_toast__WEBPACK_IMPORTED_MODULE_2__["default"].promise(
    // @ts-ignore
    jQuery.post(ajaxurl, data, function (response) {
      console.log("Got this from the server: ", response);
    }), {
      loading: "Saving...",
      success: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Successful saved!"),
      error: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Could not save.")
    });
  };
  const renderLeft = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "space-y-1"
    }, TABS.map(item => {
      const isActive = currentTab === item.name;
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: item.name,
        className: `flex items-center space-x-3 text-base font-medium px-3.5 py-3.5 rounded-xl cursor-pointer ${isActive ? "bg-slate-100/80 text-blue-600" : "text-slate-800 hover:bg-slate-50"}`,
        onClick: () => {
          setcurrentTab(item.name);
          setHistoryStateParams(item.name);
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(item.icon, {
        className: `w-6 h-6  ${isActive ? " text-blue-600" : "text-slate-400"}`
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, item.label));
    }));
  };
  const renderRight = () => {
    switch (currentTab) {
      case "editor-options":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsPageEditorOptions__WEBPACK_IMPORTED_MODULE_1__["default"], {
          themeLayoutGlobal: themeLayoutGlobal,
          onChange: data => {
            handleUpdateSettings(data);
          },
          allSettings: allSettings
        });
      case "templates":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsPageTemplates__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onChange: data => {
            handleUpdateSettings(data);
          },
          allSettings: allSettings
        });
      case "block-settings":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsPageBlockSettings__WEBPACK_IMPORTED_MODULE_4__["default"], {
          onChange: data => {
            handleUpdateSettings(data);
          },
          allSettings: allSettings
        });
      case "performance":
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SettingsPagePerformance__WEBPACK_IMPORTED_MODULE_5__["default"], {
          onChange: data => {
            handleUpdateSettings(data);
          },
          allSettings: allSettings
        });
      default:
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          className: "text-lg font-medium"
        }, "Coming soon ...");
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:grid lg:grid-cols-12 min-h-[36rem] h-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8 sm:px-8 lg:pr-8 lg:pl-0 lg:col-span-3"
  }, renderLeft()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "lg:col-span-9 border-l p-8"
  }, renderRight())));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPage);

/***/ }),

/***/ "./src/____dashboard/components/SettingsPageBlockSettings.tsx":
/*!********************************************************************!*\
  !*** ./src/____dashboard/components/SettingsPageBlockSettings.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Simple debounce utility
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
const SettingsPageBlockSettings = ({
  allSettings,
  onChange
}) => {
  const debounce_fun = debounce(function (data) {
    console.log("Function debounced after 300ms!", {
      data
    });
    onChange(data);
  }, 300);
  const renderFormSettings = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "p-0 flex-1 justify-right inline-flex text-lg font-medium text-gray-900"
    }, "Form"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "text-sm text-slate-500 mt-2"
    }, "To enable reCAPTCHA for your form, please follow the steps mentioned", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://www.google.com/recaptcha/admin/create",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "font-medium underline text-slate-700"
    }, "here"), " ", "or", " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "https://cloud.google.com/recaptcha-enterprise/docs/create-key",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "font-medium underline text-slate-700"
    }, "read more docs."), " ")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "mt-8 grid grid-cols-6 gap-6"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-6 sm:col-span-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "reCAPTCHAv2-sitekey",
      className: "block text-sm font-medium text-gray-700 select-none"
    }, "ReCAPTCHA v2 - site key"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "reCAPTCHAv2-sitekey",
      id: "reCAPTCHAv2-sitekey",
      autoComplete: "given-name",
      className: "mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
      defaultValue: allSettings.reCAPTCHA_v2_site_key,
      onChange: e => {
        debounce_fun({
          ...allSettings,
          reCAPTCHA_v2_site_key: e.currentTarget.value
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-6 sm:col-span-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "reCAPTCHAv2-secret",
      className: "block text-sm font-medium text-gray-700 select-none"
    }, "ReCAPTCHA v2 - secret key"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "reCAPTCHAv2-secret",
      id: "reCAPTCHAv2-secret",
      autoComplete: "family-name",
      className: "mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
      defaultValue: allSettings.reCAPTCHA_v2_secret_key,
      onChange: e => {
        debounce_fun({
          ...allSettings,
          reCAPTCHA_v2_secret_key: e.currentTarget.value
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-6 sm:col-span-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "reCAPTCHAv3-sitekey",
      className: "block text-sm font-medium text-gray-700 select-none"
    }, "ReCAPTCHA v3 - site key"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "reCAPTCHAv3-sitekey",
      id: "reCAPTCHAv3-sitekey",
      autoComplete: "given-name",
      className: "mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
      defaultValue: allSettings.reCAPTCHA_v3_site_key,
      onChange: e => {
        debounce_fun({
          ...allSettings,
          reCAPTCHA_v3_site_key: e.currentTarget.value
        });
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-span-6 sm:col-span-3"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      htmlFor: "reCAPTCHAv3-secret",
      className: "block text-sm font-medium text-gray-700  select-none"
    }, "ReCAPTCHA v3 - secret key"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      name: "reCAPTCHAv3-secret",
      id: "reCAPTCHAv3-secret",
      autoComplete: "family-name",
      className: "mt-1 block w-full rounded-md border-gray-300 pl-3 pr-11 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
      defaultValue: allSettings.reCAPTCHA_v3_secret_key,
      onChange: e => {
        debounce_fun({
          ...allSettings,
          reCAPTCHA_v3_secret_key: e.currentTarget.value
        });
      }
    }))));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divide-y"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-8"
  }, renderFormSettings()));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPageBlockSettings);

/***/ }),

/***/ "./src/____dashboard/components/SettingsPageEditorOptions.tsx":
/*!********************************************************************!*\
  !*** ./src/____dashboard/components/SettingsPageEditorOptions.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputNumber */ "./src/____dashboard/components/InputNumber.tsx");
/* harmony import */ var _MyToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyToggle */ "./src/____dashboard/components/MyToggle.tsx");




// Simple debounce utility
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
const SettingsPageEditorOptions = ({
  allSettings,
  onChange,
  themeLayoutGlobal
}) => {
  const debounce_fun = debounce(function (data) {
    console.log("Function debounced after 300ms!", {
      data
    });
    onChange(data);
  }, 300);

  // ----------------
  let subStr = "";
  if (!!themeLayoutGlobal?.contentSize) {
    if (!!themeLayoutGlobal?.contentSizeOfWoostify) {
      subStr = `<br /><i>(The content width default from Woostify theme customizer: ${themeLayoutGlobal?.contentSize})</i>`;
    } else {
      subStr = `<br /><i>(The content width default from Full Site Editor's Global Styles: ${themeLayoutGlobal?.contentSize})</i>`;
    }
    subStr = "<br /><i> Leave it blank to always use the default value </i>" + subStr;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divide-y"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputNumber__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Default Content Width",
    desc: `This setting will apply to Container Block's default Content Width.` + subStr,
    id: "InputNumber_DefaultContentWidth",
    defaultValue: String(parseInt(allSettings.defaultContentWidth || `${themeLayoutGlobal?.contentSize}`)),
    placeholder: `${parseInt(themeLayoutGlobal?.contentSize || "650")}`,
    onChange: e => {
      const newV = e ? e + "px" : "";
      debounce_fun({
        ...allSettings,
        defaultContentWidth: newV
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Button - Inherit From Theme",
    desc: "Enable the \"Inherit From Theme\" option to make all buttons in Spectra blocks across your website inherit their styles from the theme.",
    id: "MyToggle_ButtonInheritFromTheme",
    checked: allSettings.buttonInheritFromTheme === "true",
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        buttonInheritFromTheme: checked ? "true" : "false"
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputNumber__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Container Padding",
    desc: "This setting will apply default padding in the Container Block.",
    id: "InputNumber_ContainerPadding",
    placeholder: "10",
    value: String(parseInt(allSettings.containerPadding || "10px")),
    onChange: e => {
      onChange({
        ...allSettings,
        containerPadding: e + "px"
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputNumber__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Container Elements Gap",
    desc: "This setting will apply default Row & Column Gaps in the Container Block.",
    id: "InputNumber_ContainerElementsGap",
    placeholder: "10",
    value: String(parseInt(allSettings.containerElementsGap || "10px")),
    onChange: e => {
      onChange({
        ...allSettings,
        containerElementsGap: e + "px"
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InputNumber__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Blocks Editor Spacing",
    desc: "This setting will apply spacing in between all blocks inside block editor.",
    id: "InputNumber_BlocksEditorSpacing",
    placeholder: "0",
    value: String(parseInt(allSettings.blocksEditorSpacing || "0px")),
    onChange: e => {
      onChange({
        ...allSettings,
        blocksEditorSpacing: e + "px"
      });
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-8 wcb-field-disabled"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    checked: allSettings.enableCopyPasteStyles === "true",
    disabled: !!"wcb-field-disabled",
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        enableCopyPasteStyles: checked ? "true" : "false"
      });
    },
    label: "Copy Paste Styles",
    desc: "Enable the \"Copy Paste Styles\" option to have the ability to copy & paste Woostify & Core Gutenberg Blocks Styles.",
    id: "MyToggle_CopyPasteStyles"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPageEditorOptions);

/***/ }),

/***/ "./src/____dashboard/components/SettingsPagePerformance.tsx":
/*!******************************************************************!*\
  !*** ./src/____dashboard/components/SettingsPagePerformance.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyToggle */ "./src/____dashboard/components/MyToggle.tsx");
/* harmony import */ var _FontMultiSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FontMultiSelect */ "./src/____dashboard/components/FontMultiSelect.tsx");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../________ */ "./src/________.ts");





const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
const SettingsPagePerformance = ({
  allSettings,
  onChange
}) => {
  const debounce_fun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(debounce(data => {
    onChange(data);
  }, 300), []);
  const loadLocally = allSettings.loadGoogleFontsLocally === "true";
  const allowOnlySelected = allSettings.allowOnlySelectedFonts === "true";
  const selectedFonts = (allSettings.selectedFonts || "").split(",").map(f => f.trim()).filter(Boolean);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divide-y"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-xl font-semibold text-gray-800 mb-6"
  }, "Performance"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "space-y-0 divide-y"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: loadLocally,
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        loadGoogleFontsLocally: checked ? "true" : "false",
        ...(!checked ? {
          preloadLocalFonts: "false"
        } : {})
      });
    },
    label: "Load Google Fonts Locally",
    desc: "Enable this option to download Google fonts and save them on your server. This can be great for improving speed of your website and to comply with GDPR laws.",
    id: "MyToggle_LoadGoogleFontsLocally"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `py-6 ${!loadLocally ? "opacity-50 pointer-events-none" : ""}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: allSettings.preloadLocalFonts === "true",
    disabled: !loadLocally,
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        preloadLocalFonts: checked ? "true" : "false"
      });
    },
    label: "Preload Local Fonts",
    desc: "This option will load the font files right away on page load. Preloading Local Fonts can speeds up your website even further.",
    id: "MyToggle_PreloadLocalFonts"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-6"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: allowOnlySelected,
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        allowOnlySelectedFonts: checked ? "true" : "false"
      });
    },
    label: "Allow Only Selected Fonts",
    desc: "Woostify offers 1500+ Google font options. If this is overwhelming for your clients, you can use this option to show only limited number of fonts in the block settings.",
    id: "MyToggle_AllowOnlySelectedFonts"
  }), allowOnlySelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-4"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_FontMultiSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: selectedFonts,
    onChange: fonts => {
      debounce_fun({
        ...allSettings,
        selectedFonts: fonts.join(",")
      });
    }
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPagePerformance);

/***/ }),

/***/ "./src/____dashboard/components/SettingsPageTemplates.tsx":
/*!****************************************************************!*\
  !*** ./src/____dashboard/components/SettingsPageTemplates.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MyToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyToggle */ "./src/____dashboard/components/MyToggle.tsx");



// Simple debounce utility
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};
const SettingsPageTemplates = ({
  allSettings,
  onChange
}) => {
  const debounce_fun = debounce(function (data) {
    console.log("Function debounced after 300ms!", {
      data
    });
    onChange(data);
  }, 300);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divide-y"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "pb-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyToggle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    checked: allSettings.enableTemplatesButton === "true",
    onChange: checked => {
      debounce_fun({
        ...allSettings,
        enableTemplatesButton: checked ? "true" : "false"
      });
    },
    label: "Enable Templates Button",
    desc: "Woostify comes with a stunning library of page templates and block patterns. This library is accessible with the Templates button while editing the page or post. Manage the visibility of that button with this option..",
    id: "MyToggle_EnableTemplatesButton"
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsPageTemplates);

/***/ }),

/***/ "./src/____dashboard/components/WelcomePage.tsx":
/*!******************************************************!*\
  !*** ./src/____dashboard/components/WelcomePage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const WelcomePage = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col xl:flex-row gap-5 xl:gap-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 flex flex-col rounded-2xl bg-white p-10 pt-[2.2rem] border border-slate-200"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-slate-800 text-[1.8rem] leading-[2.4rem] font-medium text-left"
  }, "Welcome to Woostify!"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-3 text-slate-700 text-sm"
  }, "We designed Wootify to be intuitive but we do recommend learning how it works by checking our comprehensive documentation and watching the video below. Enjoy your time with Wootify!"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mt-8 z-0"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
    src: "https://www.youtube.com/embed/JX6S3MtkjKs",
    title: "YouTube video player",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    className: "w-full aspect-video rounded-2xl z-10",
    allowFullScreen: true
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-full xl:w-1/3 flex-shrink-0 grid gap-4 lg:gap-5 xl:gap-8"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-8 pr-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center space-x-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-slate-800 text-xl font-semibold"
  }, "Documentation"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12.9399 22.5202H15.0133H6.71994C6.17006 22.5202 5.6427 22.3024 5.25387 21.9146C4.86505 21.5269 4.64661 21.001 4.64661 20.4527V5.97968C4.64661 5.43132 4.86505 4.90543 5.25387 4.51769C5.6427 4.12994 6.17006 3.91211 6.71994 3.91211H19.1599C19.7098 3.91211 20.2372 4.12994 20.626 4.51769C21.0148 4.90543 21.2333 5.43132 21.2333 5.97968V14.2499",
    stroke: "#1F2229",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1233 18.3851C18.1233 18.6593 18.2325 18.9222 18.4269 19.1161C18.6213 19.31 18.885 19.4189 19.16 19.4189H22.27C22.5449 19.4189 22.8086 19.31 23.003 19.1161C23.1974 18.9222 23.3066 18.6593 23.3066 18.3851C23.3066 18.1109 23.1974 17.848 23.003 17.6541C22.8086 17.4602 22.5449 17.3513 22.27 17.3513H19.16C18.885 17.3513 18.6213 17.4602 18.4269 17.6541C18.2325 17.848 18.1233 18.1109 18.1233 18.3851ZM23.3066 22.5202C23.3066 22.2461 23.1974 21.9831 23.003 21.7892C22.8086 21.5954 22.5449 21.4865 22.27 21.4865H19.16C18.885 21.4865 18.6213 21.5954 18.4269 21.7892C18.2325 21.9831 18.1233 22.2461 18.1233 22.5202C18.1233 22.7944 18.2325 23.0574 18.4269 23.2512C18.6213 23.4451 18.885 23.554 19.16 23.554H22.27C22.5449 23.554 22.8086 23.4451 23.003 23.2512C23.1974 23.0574 23.3066 22.7944 23.3066 22.5202Z",
    fill: "#1F2229"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M9.82996 15.8007L12.658 9.69102C12.683 9.63746 12.7228 9.59212 12.7727 9.56036C12.8227 9.52859 12.8807 9.51172 12.94 9.51172C12.9992 9.51172 13.0572 9.52859 13.1072 9.56036C13.1571 9.59212 13.1969 9.63746 13.2219 9.69102L16.05 15.8007",
    stroke: "#1F2229",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.452 13.2162H15.428V15.077H10.452V13.2162Z",
    fill: "#1F2229"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-slate-700 text-sm mt-3"
  }, "Learn everything you need to know about the Wootify plugin with our comprehensive documentation."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "block mt-3 text-base text-blue-600",
    href: "https://woostifyblocks.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Browse Now"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-8 pr-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center space-x-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-slate-800 text-xl font-semibold"
  }, "Community"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "26",
    height: "24",
    viewBox: "0 0 26 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": "url(#clip0_44_2454)"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M25.5366 12C25.5366 5.3725 19.9671 0 13.0966 0C6.22611 0 0.656616 5.3725 0.656616 12C0.656616 17.9895 5.20551 22.954 11.1529 23.854V15.469H7.99414V12H11.1529V9.356C11.1529 6.349 13.0101 4.6875 15.8516 4.6875C17.2122 4.6875 18.636 4.922 18.636 4.922V7.875H17.0676C15.5224 7.875 15.0404 8.8 15.0404 9.75V12H18.4904L17.9389 15.469H15.0404V23.854C20.9877 22.954 25.5366 17.989 25.5366 12Z",
    fill: "black"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: "clip0_44_2454"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    width: "24.88",
    height: "24",
    fill: "white",
    transform: "translate(0.656616)"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-slate-700 text-sm mt-3"
  }, "Learn everything you need to know about the Wootify plugin with our comprehensive documentation."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "block mt-3 text-base text-blue-600",
    href: "https://woostifyblocks.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Go to Facebook Group"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "border border-slate-200 box-border rounded-2xl bg-white shadow-sm overflow-hidden transition hover:shadow-hover"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-8 pr-10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center space-x-2"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "text-slate-800 text-xl font-semibold"
  }, "Give us feedback"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "26",
    height: "24",
    viewBox: "0 0 26 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21.9301 1.5C22.205 1.5 22.4687 1.60536 22.6631 1.79289C22.8575 1.98043 22.9667 2.23478 22.9667 2.5V18.5C22.9667 18.7652 22.8575 19.0196 22.6631 19.2071C22.4687 19.3946 22.205 19.5 21.9301 19.5H16.6311L13.2931 22.398C13.1027 22.5631 12.8558 22.6545 12.5998 22.6545C12.3438 22.6545 12.0969 22.5631 11.9065 22.398L8.56847 19.5H3.27007C2.99512 19.5 2.73144 19.3946 2.53703 19.2071C2.34262 19.0196 2.2334 18.7652 2.2334 18.5V2.5C2.2334 2.23478 2.34262 1.98043 2.53703 1.79289C2.73144 1.60536 2.99512 1.5 3.27007 1.5H21.9301ZM20.8934 3.5H4.30673V17.5H9.36411L12.6001 20.309L15.8355 17.5H20.8934V3.5ZM17.7834 10C17.7834 9.86739 17.7288 9.74021 17.6316 9.64645C17.5344 9.55268 17.4025 9.5 17.2651 9.5H7.93506C7.79759 9.5 7.66575 9.55268 7.56855 9.64645C7.47134 9.74021 7.41673 9.86739 7.41673 10V11C7.41673 11.1326 7.47134 11.2598 7.56855 11.3536C7.66575 11.4473 7.79759 11.5 7.93506 11.5H17.2651C17.4025 11.5 17.5344 11.4473 17.6316 11.3536C17.7288 11.2598 17.7834 11.1326 17.7834 11V10Z",
    fill: "black"
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "text-slate-700 text-sm mt-3"
  }, "Learn everything you need to know about the Wootify plugin with our comprehensive documentation."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "block mt-3 text-base text-blue-600",
    href: "https://woostifyblocks.com/",
    target: "_blank",
    rel: "noreferrer"
  }, "Write a Review"))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WelcomePage);

/***/ }),

/***/ "./src/____dashboard/index.js":
/*!************************************!*\
  !*** ./src/____dashboard/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ "./src/____dashboard/App.tsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/____dashboard/style.scss");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (1);

/***/ }),

/***/ "./src/____dashboard/style.scss":
/*!**************************************!*\
  !*** ./src/____dashboard/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/____dashboard/types.ts":
/*!************************************!*\
  !*** ./src/____dashboard/types.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/components/Logo.tsx":
/*!*********************************!*\
  !*** ./src/components/Logo.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Logo = ({
  className = "w-12 h-12 text-[#5271ff]"
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: className,
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.2",
    viewBox: "0 0 256 256",
    width: "256",
    height: "256"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("defs", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
    width: "256",
    height: "256",
    id: "img1",
    href: "data:image/png;base64,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"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("use", {
    id: "Background",
    href: "#img1",
    x: "0",
    y: "0"
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./src/components/controls/WcbFontFamilyPicker/google-fonts.json":
/*!***********************************************************************!*\
  !*** ./src/components/controls/WcbFontFamilyPicker/google-fonts.json ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"Roboto":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Open Sans":{"weight":["300","300italic","regular","italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Noto Sans JP":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lato":{"weight":["100","100italic","300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Montserrat":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Condensed":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Source Sans Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Oswald":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Poppins":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Roboto Mono":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"monospace"},"Noto Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Raleway":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"PT Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Roboto Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Merriweather":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Ubuntu":{"weight":["300","300italic","regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Playfair Display":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Nunito":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Sans KR":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Open Sans Condensed":{"weight":["300","300italic","700"],"fallback":"sans-serif"},"Rubik":{"weight":["300","regular","500","600","700","800","900","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Lora":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Work Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Mukta":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans TC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Nunito Sans":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"PT Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Nanum Gothic":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Inter":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Fira Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Noto Serif":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Quicksand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Titillium Web":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900"],"fallback":"sans-serif"},"Hind Siliguri":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Karla":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Barlow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Inconsolata":{"weight":["200","300","regular","500","600","700","800","900"],"fallback":"monospace"},"Heebo":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Noto Sans SC":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Oxygen":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Source Code Pro":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"monospace"},"Anton":{"weight":["regular"],"fallback":"sans-serif"},"Josefin Sans":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Arimo":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"PT Sans Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"IBM Plex Sans":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Dosis":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Noto Sans HK":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Libre Franklin":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Libre Baskerville":{"weight":["regular","italic","700"],"fallback":"serif"},"Cabin":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Bitter":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Crimson Text":{"weight":["regular","italic","600","600italic","700","700italic"],"fallback":"serif"},"Bebas Neue":{"weight":["regular"],"fallback":"display"},"Lobster":{"weight":["regular"],"fallback":"display"},"Yanone Kaffeesatz":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Dancing Script":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Cairo":{"weight":["200","300","regular","600","700","900"],"fallback":"sans-serif"},"Abel":{"weight":["regular"],"fallback":"sans-serif"},"Fjalla One":{"weight":["regular"],"fallback":"sans-serif"},"Varela Round":{"weight":["regular"],"fallback":"sans-serif"},"Source Serif Pro":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","900","900italic"],"fallback":"serif"},"Arvo":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"EB Garamond":{"weight":["regular","500","600","700","800","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Barlow Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Architects Daughter":{"weight":["regular"],"fallback":"handwriting"},"Zilla Slab":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Indie Flower":{"weight":["regular"],"fallback":"handwriting"},"Mulish":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Comfortaa":{"weight":["300","regular","500","600","700"],"fallback":"display"},"DM Sans":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Pacifico":{"weight":["regular"],"fallback":"handwriting"},"Exo 2":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Kanit":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Prompt":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Shadows Into Light":{"weight":["regular"],"fallback":"handwriting"},"Questrial":{"weight":["regular"],"fallback":"sans-serif"},"Merriweather Sans":{"weight":["300","regular","500","600","700","800","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"sans-serif"},"Teko":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Balsamiq Sans":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Asap":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Hind Madurai":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Cormorant Garamond":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Antic Slab":{"weight":["regular"],"fallback":"serif"},"Archivo Narrow":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Overpass":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Abril Fatface":{"weight":["regular"],"fallback":"display"},"Slabo 27px":{"weight":["regular"],"fallback":"serif"},"Exo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Assistant":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Maven Pro":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Domine":{"weight":["regular","500","600","700"],"fallback":"serif"},"Fira Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Caveat":{"weight":["regular","500","600","700"],"fallback":"handwriting"},"Rajdhani":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"IBM Plex Serif":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Martel":{"weight":["200","300","regular","600","700","800","900"],"fallback":"serif"},"Play":{"weight":["regular","700"],"fallback":"sans-serif"},"Amatic SC":{"weight":["regular","700"],"fallback":"handwriting"},"Bree Serif":{"weight":["regular"],"fallback":"serif"},"Tajawal":{"weight":["200","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noto Serif JP":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Righteous":{"weight":["regular"],"fallback":"display"},"Satisfy":{"weight":["regular"],"fallback":"handwriting"},"Signika":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Catamaran":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Acme":{"weight":["regular"],"fallback":"sans-serif"},"Manrope":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Fredoka One":{"weight":["regular"],"fallback":"display"},"Nanum Myeongjo":{"weight":["regular","700","800"],"fallback":"serif"},"ABeeZee":{"weight":["regular","italic"],"fallback":"sans-serif"},"Amiri":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Patrick Hand":{"weight":["regular"],"fallback":"handwriting"},"PT Sans Caption":{"weight":["regular","700"],"fallback":"sans-serif"},"Archivo":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Alfa Slab One":{"weight":["regular"],"fallback":"display"},"Cinzel":{"weight":["regular","500","600","700","800","900"],"fallback":"serif"},"Crete Round":{"weight":["regular","italic"],"fallback":"serif"},"Permanent Marker":{"weight":["regular"],"fallback":"handwriting"},"Alegreya Sans":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Almarai":{"weight":["300","regular","700","800"],"fallback":"sans-serif"},"Barlow Semi Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Russo One":{"weight":["regular"],"fallback":"sans-serif"},"Vollkorn":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Sarabun":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Krona One":{"weight":["regular"],"fallback":"sans-serif"},"M PLUS Rounded 1c":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Noticia Text":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Courgette":{"weight":["regular"],"fallback":"handwriting"},"Monda":{"weight":["regular","700"],"fallback":"sans-serif"},"Alegreya":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Frank Ruhl Libre":{"weight":["300","regular","500","700","900"],"fallback":"serif"},"Patua One":{"weight":["regular"],"fallback":"display"},"Ubuntu Condensed":{"weight":["regular"],"fallback":"sans-serif"},"Great Vibes":{"weight":["regular"],"fallback":"handwriting"},"Quattrocento Sans":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"M PLUS 1p":{"weight":["100","300","regular","500","700","800","900"],"fallback":"sans-serif"},"Spartan":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yantramanav":{"weight":["100","300","regular","500","700","900"],"fallback":"sans-serif"},"Lobster Two":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Archivo Black":{"weight":["regular"],"fallback":"sans-serif"},"Kaushan Script":{"weight":["regular"],"fallback":"handwriting"},"Tinos":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Cardo":{"weight":["regular","italic","700"],"fallback":"serif"},"Orbitron":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Sacramento":{"weight":["regular"],"fallback":"handwriting"},"IBM Plex Mono":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"monospace"},"Francois One":{"weight":["regular"],"fallback":"sans-serif"},"Luckiest Guy":{"weight":["regular"],"fallback":"display"},"Gothic A1":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Kalam":{"weight":["300","regular","700"],"fallback":"handwriting"},"Parisienne":{"weight":["regular"],"fallback":"handwriting"},"Gloria Hallelujah":{"weight":["regular"],"fallback":"handwriting"},"Didact Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Cantarell":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Press Start 2P":{"weight":["regular"],"fallback":"display"},"Jost":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Rokkitt":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Paytone One":{"weight":["regular"],"fallback":"sans-serif"},"Prata":{"weight":["regular"],"fallback":"serif"},"Baloo 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Cuprum":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Chivo":{"weight":["300","300italic","regular","italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Encode Sans":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"News Cycle":{"weight":["regular","700"],"fallback":"sans-serif"},"Old Standard TT":{"weight":["regular","italic","700"],"fallback":"serif"},"Hind Guntur":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Pathway Gothic One":{"weight":["regular"],"fallback":"sans-serif"},"Red Hat Display":{"weight":["regular","italic","500","500italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Public Sans":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Secular One":{"weight":["regular"],"fallback":"sans-serif"},"Volkhov":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Concert One":{"weight":["regular"],"fallback":"display"},"Asap Condensed":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Montserrat Alternates":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Ropa Sans":{"weight":["regular","italic"],"fallback":"sans-serif"},"Josefin Slab":{"weight":["100","200","300","regular","500","600","700","100italic","200italic","300italic","italic","500italic","600italic","700italic"],"fallback":"serif"},"Poiret One":{"weight":["regular"],"fallback":"display"},"Passion One":{"weight":["regular","700","900"],"fallback":"display"},"Padauk":{"weight":["regular","700"],"fallback":"sans-serif"},"Changa":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Saira Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Ultra":{"weight":["regular"],"fallback":"serif"},"Quattrocento":{"weight":["regular","700"],"fallback":"serif"},"Arapey":{"weight":["regular","italic"],"fallback":"serif"},"Vidaloka":{"weight":["regular"],"fallback":"serif"},"Playfair Display SC":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"serif"},"Cookie":{"weight":["regular"],"fallback":"handwriting"},"Chakra Petch":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Istok Web":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Cormorant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"DM Serif Display":{"weight":["regular","italic"],"fallback":"serif"},"Neuton":{"weight":["200","300","regular","italic","700","800"],"fallback":"serif"},"Spectral":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Sawarabi Mincho":{"weight":["regular"],"fallback":"sans-serif"},"Lemonada":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Yellowtail":{"weight":["regular"],"fallback":"handwriting"},"Handlee":{"weight":["regular"],"fallback":"handwriting"},"Merienda":{"weight":["regular","700"],"fallback":"handwriting"},"Philosopher":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Sanchez":{"weight":["regular","italic"],"fallback":"serif"},"Hammersmith One":{"weight":["regular"],"fallback":"sans-serif"},"Special Elite":{"weight":["regular"],"fallback":"display"},"Economica":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Staatliches":{"weight":["regular"],"fallback":"display"},"Sriracha":{"weight":["regular"],"fallback":"handwriting"},"Hind Vadodara":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Monoton":{"weight":["regular"],"fallback":"display"},"Ruda":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Advent Pro":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Saira":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Homemade Apple":{"weight":["regular"],"fallback":"handwriting"},"Sigmar One":{"weight":["regular"],"fallback":"display"},"Mitr":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Bangers":{"weight":["regular"],"fallback":"display"},"Khand":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Faustina":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Saira Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cabin Condensed":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Gudea":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Fira Sans Extra Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"DM Serif Text":{"weight":["regular","italic"],"fallback":"serif"},"El Messiri":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Electrolize":{"weight":["regular"],"fallback":"sans-serif"},"Taviraj":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"PT Mono":{"weight":["regular"],"fallback":"monospace"},"Gentium Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Space Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Alice":{"weight":["regular"],"fallback":"serif"},"Unica One":{"weight":["regular"],"fallback":"display"},"Ubuntu Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Pragati Narrow":{"weight":["regular","700"],"fallback":"sans-serif"},"Noto Serif TC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Amaranth":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Karma":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Actor":{"weight":["regular"],"fallback":"sans-serif"},"Nanum Pen Script":{"weight":["regular"],"fallback":"handwriting"},"Noto Serif SC":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Tangerine":{"weight":["regular","700"],"fallback":"handwriting"},"Carter One":{"weight":["regular"],"fallback":"display"},"Neucha":{"weight":["regular"],"fallback":"handwriting"},"Unna":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Pontano Sans":{"weight":["regular"],"fallback":"sans-serif"},"Bai Jamjuree":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marck Script":{"weight":["regular"],"fallback":"handwriting"},"BenchNine":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Fugaz One":{"weight":["regular"],"fallback":"display"},"Yeseva One":{"weight":["regular"],"fallback":"display"},"Eczar":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Bad Script":{"weight":["regular"],"fallback":"handwriting"},"Viga":{"weight":["regular"],"fallback":"sans-serif"},"Gentium Book Basic":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jura":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Allura":{"weight":["regular"],"fallback":"handwriting"},"Palanquin":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Sawarabi Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Rock Salt":{"weight":["regular"],"fallback":"handwriting"},"Lusitana":{"weight":["regular","700"],"fallback":"serif"},"Alef":{"weight":["regular","700"],"fallback":"sans-serif"},"Julius Sans One":{"weight":["regular"],"fallback":"sans-serif"},"Tenor Sans":{"weight":["regular"],"fallback":"sans-serif"},"Nothing You Could Do":{"weight":["regular"],"fallback":"handwriting"},"Cutive Mono":{"weight":["regular"],"fallback":"monospace"},"Khula":{"weight":["300","regular","600","700","800"],"fallback":"sans-serif"},"Adamina":{"weight":["regular"],"fallback":"serif"},"Playball":{"weight":["regular"],"fallback":"display"},"Audiowide":{"weight":["regular"],"fallback":"display"},"Jaldi":{"weight":["regular","700"],"fallback":"sans-serif"},"Black Ops One":{"weight":["regular"],"fallback":"display"},"Signika Negative":{"weight":["300","regular","600","700"],"fallback":"sans-serif"},"Shadows Into Light Two":{"weight":["regular"],"fallback":"handwriting"},"Armata":{"weight":["regular"],"fallback":"sans-serif"},"Mali":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"handwriting"},"Antic":{"weight":["regular"],"fallback":"sans-serif"},"Varela":{"weight":["regular"],"fallback":"sans-serif"},"Berkshire Swash":{"weight":["regular"],"fallback":"handwriting"},"Aleo":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Gelasio":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Rufina":{"weight":["regular","700"],"fallback":"serif"},"Markazi Text":{"weight":["regular","500","600","700"],"fallback":"serif"},"Nanum Gothic Coding":{"weight":["regular","700"],"fallback":"monospace"},"Allan":{"weight":["regular","700"],"fallback":"display"},"Noto Serif KR":{"weight":["200","300","regular","500","600","700","900"],"fallback":"serif"},"Abhaya Libre":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Quantico":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Marcellus":{"weight":["regular"],"fallback":"serif"},"Sorts Mill Goudy":{"weight":["regular","italic"],"fallback":"serif"},"Alata":{"weight":["regular"],"fallback":"sans-serif"},"Knewave":{"weight":["regular"],"fallback":"display"},"Alex Brush":{"weight":["regular"],"fallback":"handwriting"},"Aclonica":{"weight":["regular"],"fallback":"sans-serif"},"Gruppo":{"weight":["regular"],"fallback":"display"},"Damion":{"weight":["regular"],"fallback":"handwriting"},"Itim":{"weight":["regular"],"fallback":"handwriting"},"Bungee":{"weight":["regular"],"fallback":"display"},"Gochi Hand":{"weight":["regular"],"fallback":"handwriting"},"Mr Dafoe":{"weight":["regular"],"fallback":"handwriting"},"Freckle Face":{"weight":["regular"],"fallback":"display"},"Baloo Chettan 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Trirong":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Kosugi Maru":{"weight":["regular"],"fallback":"sans-serif"},"Rubik Mono One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Mono":{"weight":["regular","500","700"],"fallback":"monospace"},"Cantata One":{"weight":["regular"],"fallback":"serif"},"Suez One":{"weight":["regular"],"fallback":"serif"},"Niconne":{"weight":["regular"],"fallback":"handwriting"},"Six Caps":{"weight":["regular"],"fallback":"sans-serif"},"Miriam Libre":{"weight":["regular","700"],"fallback":"sans-serif"},"Sarala":{"weight":["regular","700"],"fallback":"sans-serif"},"Sintony":{"weight":["regular","700"],"fallback":"sans-serif"},"Titan One":{"weight":["regular"],"fallback":"display"},"Encode Sans Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Cousine":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"PT Serif Caption":{"weight":["regular","italic"],"fallback":"serif"},"Courier Prime":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Overlock":{"weight":["regular","italic","700","700italic","900","900italic"],"fallback":"display"},"Allerta":{"weight":["regular"],"fallback":"sans-serif"},"Arsenal":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Black Han Sans":{"weight":["regular"],"fallback":"sans-serif"},"Squada One":{"weight":["regular"],"fallback":"display"},"Lateef":{"weight":["regular"],"fallback":"handwriting"},"Arima Madurai":{"weight":["100","200","300","regular","500","700","800","900"],"fallback":"display"},"Ramabhadra":{"weight":["regular"],"fallback":"sans-serif"},"Covered By Your Grace":{"weight":["regular"],"fallback":"handwriting"},"Martel Sans":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Rancho":{"weight":["regular"],"fallback":"handwriting"},"Enriqueta":{"weight":["regular","500","600","700"],"fallback":"serif"},"Syncopate":{"weight":["regular","700"],"fallback":"sans-serif"},"Pinyon Script":{"weight":["regular"],"fallback":"handwriting"},"Chewy":{"weight":["regular"],"fallback":"display"},"Oleo Script":{"weight":["regular","700"],"fallback":"display"},"Kreon":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Candal":{"weight":["regular"],"fallback":"sans-serif"},"Spinnaker":{"weight":["regular"],"fallback":"sans-serif"},"Reem Kufi":{"weight":["regular"],"fallback":"sans-serif"},"Krub":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Michroma":{"weight":["regular"],"fallback":"sans-serif"},"Annie Use Your Telescope":{"weight":["regular"],"fallback":"handwriting"},"Lilita One":{"weight":["regular"],"fallback":"display"},"Coda":{"weight":["regular","800"],"fallback":"display"},"Fredericka the Great":{"weight":["regular"],"fallback":"display"},"Mukta Malar":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bowlby One SC":{"weight":["regular"],"fallback":"display"},"Average":{"weight":["regular"],"fallback":"serif"},"Londrina Solid":{"weight":["100","300","regular","900"],"fallback":"display"},"New Tegomin":{"weight":["regular"],"fallback":"serif"},"Glegoo":{"weight":["regular","700"],"fallback":"serif"},"Pridi":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Boogaloo":{"weight":["regular"],"fallback":"display"},"Red Hat Text":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Aldrich":{"weight":["regular"],"fallback":"sans-serif"},"Basic":{"weight":["regular"],"fallback":"sans-serif"},"Capriola":{"weight":["regular"],"fallback":"sans-serif"},"Forum":{"weight":["regular"],"fallback":"display"},"Reenie Beanie":{"weight":["regular"],"fallback":"handwriting"},"Laila":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Alegreya Sans SC":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Share Tech Mono":{"weight":["regular"],"fallback":"monospace"},"Italianno":{"weight":["regular"],"fallback":"handwriting"},"Lalezar":{"weight":["regular"],"fallback":"display"},"Lexend Deca":{"weight":["regular"],"fallback":"sans-serif"},"Caveat Brush":{"weight":["regular"],"fallback":"handwriting"},"Shrikhand":{"weight":["regular"],"fallback":"display"},"Creepster":{"weight":["regular"],"fallback":"display"},"Kameron":{"weight":["regular","700"],"fallback":"serif"},"Coda Caption":{"weight":["800"],"fallback":"sans-serif"},"Goudy Bookletter 1911":{"weight":["regular"],"fallback":"serif"},"Coming Soon":{"weight":["regular"],"fallback":"handwriting"},"Saira Extra Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Yrsa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Telex":{"weight":["regular"],"fallback":"sans-serif"},"Bevan":{"weight":["regular"],"fallback":"display"},"Voltaire":{"weight":["regular"],"fallback":"sans-serif"},"Days One":{"weight":["regular"],"fallback":"sans-serif"},"Cabin Sketch":{"weight":["regular","700"],"fallback":"display"},"Norican":{"weight":["regular"],"fallback":"handwriting"},"Rambla":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Mukta Vaani":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Average Sans":{"weight":["regular"],"fallback":"sans-serif"},"Arbutus Slab":{"weight":["regular"],"fallback":"serif"},"Sansita":{"weight":["regular","italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Mada":{"weight":["200","300","regular","500","600","700","900"],"fallback":"sans-serif"},"Just Another Hand":{"weight":["regular"],"fallback":"handwriting"},"Nobile":{"weight":["regular","italic","500","500italic","700","700italic"],"fallback":"sans-serif"},"Gilda Display":{"weight":["regular"],"fallback":"serif"},"VT323":{"weight":["regular"],"fallback":"monospace"},"Mandali":{"weight":["regular"],"fallback":"sans-serif"},"Caudex":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Anonymous Pro":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Bentham":{"weight":["regular"],"fallback":"serif"},"Overpass Mono":{"weight":["300","regular","600","700"],"fallback":"monospace"},"Sen":{"weight":["regular","700","800"],"fallback":"sans-serif"},"Kadwa":{"weight":["regular","700"],"fallback":"serif"},"Cambay":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Yesteryear":{"weight":["regular"],"fallback":"handwriting"},"Molengo":{"weight":["regular"],"fallback":"sans-serif"},"Nixie One":{"weight":["regular"],"fallback":"display"},"Scada":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Crimson Pro":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Arizonia":{"weight":["regular"],"fallback":"handwriting"},"Racing Sans One":{"weight":["regular"],"fallback":"display"},"Scheherazade":{"weight":["regular","700"],"fallback":"serif"},"Seaweed Script":{"weight":["regular"],"fallback":"display"},"Belleza":{"weight":["regular"],"fallback":"sans-serif"},"Harmattan":{"weight":["regular","700"],"fallback":"sans-serif"},"Leckerli One":{"weight":["regular"],"fallback":"handwriting"},"Ovo":{"weight":["regular"],"fallback":"serif"},"Merienda One":{"weight":["regular"],"fallback":"handwriting"},"Holtwood One SC":{"weight":["regular"],"fallback":"serif"},"Cinzel Decorative":{"weight":["regular","700","900"],"fallback":"display"},"Literata":{"weight":["200","300","regular","500","600","700","800","900","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mrs Saint Delafield":{"weight":["regular"],"fallback":"handwriting"},"Schoolbell":{"weight":["regular"],"fallback":"handwriting"},"Bungee Inline":{"weight":["regular"],"fallback":"display"},"Herr Von Muellerhoff":{"weight":["regular"],"fallback":"handwriting"},"Oranienbaum":{"weight":["regular"],"fallback":"serif"},"Baloo Tamma 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Sniglet":{"weight":["regular","800"],"fallback":"display"},"Bubblegum Sans":{"weight":["regular"],"fallback":"display"},"Rochester":{"weight":["regular"],"fallback":"handwriting"},"Judson":{"weight":["regular","italic","700"],"fallback":"serif"},"Marcellus SC":{"weight":["regular"],"fallback":"serif"},"Darker Grotesque":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Changa One":{"weight":["regular","italic"],"fallback":"display"},"Alegreya SC":{"weight":["regular","italic","500","500italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Pattaya":{"weight":["regular"],"fallback":"sans-serif"},"Mallanna":{"weight":["regular"],"fallback":"sans-serif"},"Share":{"weight":["regular","italic","700","700italic"],"fallback":"display"},"Podkova":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Allerta Stencil":{"weight":["regular"],"fallback":"sans-serif"},"Charm":{"weight":["regular","700"],"fallback":"handwriting"},"Niramit":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Halant":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Graduate":{"weight":["regular"],"fallback":"display"},"Nanum Brush Script":{"weight":["regular"],"fallback":"handwriting"},"Amita":{"weight":["regular","700"],"fallback":"handwriting"},"Rozha One":{"weight":["regular"],"fallback":"serif"},"Kristi":{"weight":["regular"],"fallback":"handwriting"},"Biryani":{"weight":["200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Lustria":{"weight":["regular"],"fallback":"serif"},"Delius":{"weight":["regular"],"fallback":"handwriting"},"Suranna":{"weight":["regular"],"fallback":"serif"},"Amethysta":{"weight":["regular"],"fallback":"serif"},"Contrail One":{"weight":["regular"],"fallback":"display"},"Averia Serif Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Do Hyeon":{"weight":["regular"],"fallback":"sans-serif"},"IBM Plex Sans Condensed":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Marvel":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Rye":{"weight":["regular"],"fallback":"display"},"Fauna One":{"weight":["regular"],"fallback":"serif"},"Corben":{"weight":["regular","700"],"fallback":"display"},"Cedarville Cursive":{"weight":["regular"],"fallback":"handwriting"},"Jockey One":{"weight":["regular"],"fallback":"sans-serif"},"Libre Caslon Text":{"weight":["regular","italic","700"],"fallback":"serif"},"Carrois Gothic":{"weight":["regular"],"fallback":"sans-serif"},"Calligraffitti":{"weight":["regular"],"fallback":"handwriting"},"Trocchi":{"weight":["regular"],"fallback":"serif"},"Spectral SC":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"serif"},"Coustard":{"weight":["regular","900"],"fallback":"serif"},"Copse":{"weight":["regular"],"fallback":"serif"},"Athiti":{"weight":["200","300","regular","500","600","700"],"fallback":"sans-serif"},"Carme":{"weight":["regular"],"fallback":"sans-serif"},"Rosario":{"weight":["300","regular","500","600","700","300italic","italic","500italic","600italic","700italic"],"fallback":"sans-serif"},"Limelight":{"weight":["regular"],"fallback":"display"},"Jua":{"weight":["regular"],"fallback":"sans-serif"},"Petit Formal Script":{"weight":["regular"],"fallback":"handwriting"},"Love Ya Like A Sister":{"weight":["regular"],"fallback":"display"},"GFS Didot":{"weight":["regular"],"fallback":"serif"},"Aladin":{"weight":["regular"],"fallback":"handwriting"},"Palanquin Dark":{"weight":["regular","500","600","700"],"fallback":"sans-serif"},"Amiko":{"weight":["regular","600","700"],"fallback":"sans-serif"},"Cormorant Infant":{"weight":["300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"serif"},"Wallpoet":{"weight":["regular"],"fallback":"display"},"Magra":{"weight":["regular","700"],"fallback":"sans-serif"},"Grand Hotel":{"weight":["regular"],"fallback":"handwriting"},"Sunflower":{"weight":["300","500","700"],"fallback":"sans-serif"},"Big Shoulders Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Slabo 13px":{"weight":["regular"],"fallback":"serif"},"Pangolin":{"weight":["regular"],"fallback":"handwriting"},"Mr De Haviland":{"weight":["regular"],"fallback":"handwriting"},"K2D":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Marmelad":{"weight":["regular"],"fallback":"sans-serif"},"Thasadith":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"La Belle Aurore":{"weight":["regular"],"fallback":"handwriting"},"Hanuman":{"weight":["regular","700"],"fallback":"serif"},"Metrophobic":{"weight":["regular"],"fallback":"sans-serif"},"Epilogue":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"sans-serif"},"Radley":{"weight":["regular","italic"],"fallback":"serif"},"Poly":{"weight":["regular","italic"],"fallback":"serif"},"Commissioner":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Averia Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"IM Fell Double Pica":{"weight":["regular","italic"],"fallback":"serif"},"Comic Neue":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"handwriting"},"Baskervville":{"weight":["regular","italic"],"fallback":"serif"},"Kelly Slab":{"weight":["regular"],"fallback":"display"},"Oxygen Mono":{"weight":["regular"],"fallback":"monospace"},"Maitree":{"weight":["200","300","regular","500","600","700"],"fallback":"serif"},"Buenard":{"weight":["regular","700"],"fallback":"serif"},"Duru Sans":{"weight":["regular"],"fallback":"sans-serif"},"Baloo Da 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Grandstander":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Balthazar":{"weight":["regular"],"fallback":"serif"},"ZCOOL XiaoWei":{"weight":["regular"],"fallback":"serif"},"Cutive":{"weight":["regular"],"fallback":"serif"},"Antic Didone":{"weight":["regular"],"fallback":"serif"},"Waiting for the Sunrise":{"weight":["regular"],"fallback":"handwriting"},"B612 Mono":{"weight":["regular","italic","700","700italic"],"fallback":"monospace"},"Chonburi":{"weight":["regular"],"fallback":"display"},"Montaga":{"weight":["regular"],"fallback":"serif"},"UnifrakturMaguntia":{"weight":["regular"],"fallback":"display"},"Kosugi":{"weight":["regular"],"fallback":"sans-serif"},"Gravitas One":{"weight":["regular"],"fallback":"display"},"Mirza":{"weight":["regular","500","600","700"],"fallback":"display"},"Manjari":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Alike":{"weight":["regular"],"fallback":"serif"},"Lekton":{"weight":["regular","italic","700"],"fallback":"sans-serif"},"Sora":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Gabriela":{"weight":["regular"],"fallback":"serif"},"Lemon":{"weight":["regular"],"fallback":"display"},"Esteban":{"weight":["regular"],"fallback":"serif"},"Alatsi":{"weight":["regular"],"fallback":"sans-serif"},"Turret Road":{"weight":["200","300","regular","500","700","800"],"fallback":"display"},"Monsieur La Doulaise":{"weight":["regular"],"fallback":"handwriting"},"Pompiere":{"weight":["regular"],"fallback":"display"},"Cormorant SC":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Kurale":{"weight":["regular"],"fallback":"serif"},"Frijole":{"weight":["regular"],"fallback":"display"},"Rammetto One":{"weight":["regular"],"fallback":"display"},"Chelsea Market":{"weight":["regular"],"fallback":"display"},"Megrim":{"weight":["regular"],"fallback":"display"},"IM Fell English":{"weight":["regular","italic"],"fallback":"serif"},"Oregano":{"weight":["regular","italic"],"fallback":"display"},"Andada":{"weight":["regular"],"fallback":"serif"},"Mate":{"weight":["regular","italic"],"fallback":"serif"},"Convergence":{"weight":["regular"],"fallback":"sans-serif"},"Rouge Script":{"weight":["regular"],"fallback":"handwriting"},"Bowlby One":{"weight":["regular"],"fallback":"display"},"Emilys Candy":{"weight":["regular"],"fallback":"display"},"Wendy One":{"weight":["regular"],"fallback":"sans-serif"},"Fira Code":{"weight":["300","regular","500","600","700"],"fallback":"monospace"},"Dawning of a New Day":{"weight":["regular"],"fallback":"handwriting"},"Sue Ellen Francisco":{"weight":["regular"],"fallback":"handwriting"},"Gurajada":{"weight":["regular"],"fallback":"serif"},"David Libre":{"weight":["regular","500","700"],"fallback":"serif"},"Sofia":{"weight":["regular"],"fallback":"handwriting"},"Short Stack":{"weight":["regular"],"fallback":"handwriting"},"Chau Philomene One":{"weight":["regular","italic"],"fallback":"sans-serif"},"Bellefair":{"weight":["regular"],"fallback":"serif"},"Belgrano":{"weight":["regular"],"fallback":"serif"},"Expletus Sans":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"display"},"Original Surfer":{"weight":["regular"],"fallback":"display"},"Doppio One":{"weight":["regular"],"fallback":"sans-serif"},"Be Vietnam":{"weight":["100","100italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Sail":{"weight":["regular"],"fallback":"display"},"Inder":{"weight":["regular"],"fallback":"sans-serif"},"Give You Glory":{"weight":["regular"],"fallback":"handwriting"},"IM Fell DW Pica":{"weight":["regular","italic"],"fallback":"serif"},"McLaren":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Condensed":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Bungee Shade":{"weight":["regular"],"fallback":"display"},"Baumans":{"weight":["regular"],"fallback":"display"},"Brawler":{"weight":["regular"],"fallback":"serif"},"Tenali Ramakrishna":{"weight":["regular"],"fallback":"sans-serif"},"Ceviche One":{"weight":["regular"],"fallback":"display"},"B612":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Zeyada":{"weight":["regular"],"fallback":"handwriting"},"Mountains of Christmas":{"weight":["regular","700"],"fallback":"display"},"Sedgwick Ave":{"weight":["regular"],"fallback":"handwriting"},"Gugi":{"weight":["regular"],"fallback":"display"},"Oleo Script Swash Caps":{"weight":["regular","700"],"fallback":"display"},"Skranji":{"weight":["regular","700"],"fallback":"display"},"Meddon":{"weight":["regular"],"fallback":"handwriting"},"NTR":{"weight":["regular"],"fallback":"sans-serif"},"Finger Paint":{"weight":["regular"],"fallback":"display"},"Blinker":{"weight":["100","200","300","regular","600","700","800","900"],"fallback":"sans-serif"},"Fanwood Text":{"weight":["regular","italic"],"fallback":"serif"},"Grenze Gotisch":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Hepta Slab":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Anaheim":{"weight":["regular"],"fallback":"sans-serif"},"Major Mono Display":{"weight":["regular"],"fallback":"monospace"},"Quando":{"weight":["regular"],"fallback":"serif"},"Andika":{"weight":["regular"],"fallback":"sans-serif"},"Qwigley":{"weight":["regular"],"fallback":"handwriting"},"Vast Shadow":{"weight":["regular"],"fallback":"display"},"Happy Monkey":{"weight":["regular"],"fallback":"display"},"Montez":{"weight":["regular"],"fallback":"handwriting"},"Proza Libre":{"weight":["regular","italic","500","500italic","600","600italic","700","700italic","800","800italic"],"fallback":"sans-serif"},"Homenaje":{"weight":["regular"],"fallback":"sans-serif"},"Ma Shan Zheng":{"weight":["regular"],"fallback":"handwriting"},"Loved by the King":{"weight":["regular"],"fallback":"handwriting"},"Trade Winds":{"weight":["regular"],"fallback":"display"},"Stardos Stencil":{"weight":["regular","700"],"fallback":"display"},"Raleway Dots":{"weight":["regular"],"fallback":"display"},"Libre Barcode 39":{"weight":["regular"],"fallback":"display"},"Recursive":{"weight":["300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Numans":{"weight":["regular"],"fallback":"sans-serif"},"RocknRoll One":{"weight":["regular"],"fallback":"sans-serif"},"Rakkas":{"weight":["regular"],"fallback":"display"},"Mouse Memoirs":{"weight":["regular"],"fallback":"sans-serif"},"BioRhyme":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Ranchers":{"weight":["regular"],"fallback":"display"},"Patrick Hand SC":{"weight":["regular"],"fallback":"handwriting"},"Codystar":{"weight":["300","regular"],"fallback":"display"},"Rasa":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Meera Inimai":{"weight":["regular"],"fallback":"sans-serif"},"Clicker Script":{"weight":["regular"],"fallback":"handwriting"},"DM Mono":{"weight":["300","300italic","regular","italic","500","500italic"],"fallback":"monospace"},"Gaegu":{"weight":["300","regular","700"],"fallback":"handwriting"},"Aguafina Script":{"weight":["regular"],"fallback":"handwriting"},"Unkempt":{"weight":["regular","700"],"fallback":"display"},"Over the Rainbow":{"weight":["regular"],"fallback":"handwriting"},"Fondamento":{"weight":["regular","italic"],"fallback":"handwriting"},"Battambang":{"weight":["regular","700"],"fallback":"display"},"Cambo":{"weight":["regular"],"fallback":"serif"},"Crafty Girls":{"weight":["regular"],"fallback":"handwriting"},"Nova Mono":{"weight":["regular"],"fallback":"monospace"},"Tillana":{"weight":["regular","500","600","700","800"],"fallback":"handwriting"},"Alike Angular":{"weight":["regular"],"fallback":"serif"},"Kumbh Sans":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Katibeh":{"weight":["regular"],"fallback":"display"},"Sarpanch":{"weight":["regular","500","600","700","800","900"],"fallback":"sans-serif"},"Antonio":{"weight":["100","200","300","regular","500","600","700"],"fallback":"sans-serif"},"Mansalva":{"weight":["regular"],"fallback":"handwriting"},"Faster One":{"weight":["regular"],"fallback":"display"},"Federo":{"weight":["regular"],"fallback":"sans-serif"},"Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Hi Melody":{"weight":["regular"],"fallback":"handwriting"},"Euphoria Script":{"weight":["regular"],"fallback":"handwriting"},"Orienta":{"weight":["regular"],"fallback":"sans-serif"},"Space Grotesk":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Galada":{"weight":["regular"],"fallback":"display"},"Timmana":{"weight":["regular"],"fallback":"sans-serif"},"JetBrains Mono":{"weight":["100","200","300","regular","500","600","700","800","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"monospace"},"Baloo Thambi 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Averia Sans Libre":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"UnifrakturCook":{"weight":["700"],"fallback":"display"},"Tauri":{"weight":["regular"],"fallback":"sans-serif"},"Share Tech":{"weight":["regular"],"fallback":"sans-serif"},"Walter Turncoat":{"weight":["regular"],"fallback":"handwriting"},"Geo":{"weight":["regular","italic"],"fallback":"sans-serif"},"Atma":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Almendra":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Jomhuria":{"weight":["regular"],"fallback":"display"},"Strait":{"weight":["regular"],"fallback":"sans-serif"},"Encode Sans Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Metamorphous":{"weight":["regular"],"fallback":"display"},"Iceland":{"weight":["regular"],"fallback":"display"},"Ledger":{"weight":["regular"],"fallback":"serif"},"Poller One":{"weight":["regular"],"fallback":"display"},"Vollkorn SC":{"weight":["regular","600","700","900"],"fallback":"serif"},"Vesper Libre":{"weight":["regular","500","700","900"],"fallback":"serif"},"Aref Ruqaa":{"weight":["regular","700"],"fallback":"serif"},"Livvic":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","900","900italic"],"fallback":"sans-serif"},"Caladea":{"weight":["regular","italic","700","700italic"],"fallback":"serif"},"Montserrat Subrayada":{"weight":["regular","700"],"fallback":"sans-serif"},"Vampiro One":{"weight":["regular"],"fallback":"display"},"Farro":{"weight":["300","regular","500","700"],"fallback":"sans-serif"},"New Rocker":{"weight":["regular"],"fallback":"display"},"Delius Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"Calistoga":{"weight":["regular"],"fallback":"display"},"Carrois Gothic SC":{"weight":["regular"],"fallback":"sans-serif"},"Italiana":{"weight":["regular"],"fallback":"serif"},"Inknut Antiqua":{"weight":["300","regular","500","600","700","800","900"],"fallback":"serif"},"Life Savers":{"weight":["regular","700","800"],"fallback":"display"},"Imprima":{"weight":["regular"],"fallback":"sans-serif"},"Mako":{"weight":["regular"],"fallback":"sans-serif"},"Lily Script One":{"weight":["regular"],"fallback":"display"},"Bilbo Swash Caps":{"weight":["regular"],"fallback":"handwriting"},"IM Fell English SC":{"weight":["regular"],"fallback":"serif"},"Red Rose":{"weight":["300","regular","500","600","700"],"fallback":"display"},"Shojumaru":{"weight":["regular"],"fallback":"display"},"Prosto One":{"weight":["regular"],"fallback":"display"},"Bodoni Moda":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Mukta Mahee":{"weight":["200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Bubbler One":{"weight":["regular"],"fallback":"sans-serif"},"The Girl Next Door":{"weight":["regular"],"fallback":"handwriting"},"Artifika":{"weight":["regular"],"fallback":"serif"},"Cantora One":{"weight":["regular"],"fallback":"sans-serif"},"Scope One":{"weight":["regular"],"fallback":"serif"},"Yusei Magic":{"weight":["regular"],"fallback":"sans-serif"},"Oxanium":{"weight":["200","300","regular","500","600","700","800"],"fallback":"display"},"Tienne":{"weight":["regular","700","900"],"fallback":"serif"},"Salsa":{"weight":["regular"],"fallback":"display"},"Flamenco":{"weight":["300","regular"],"fallback":"display"},"Port Lligat Sans":{"weight":["regular"],"fallback":"sans-serif"},"Denk One":{"weight":["regular"],"fallback":"sans-serif"},"Fontdiner Swanky":{"weight":["regular"],"fallback":"display"},"Nova Round":{"weight":["regular"],"fallback":"display"},"Gafata":{"weight":["regular"],"fallback":"sans-serif"},"Cormorant Upright":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cherry Cream Soda":{"weight":["regular"],"fallback":"display"},"Asul":{"weight":["regular","700"],"fallback":"sans-serif"},"Big Shoulders Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Voces":{"weight":["regular"],"fallback":"display"},"Dynalight":{"weight":["regular"],"fallback":"display"},"Peralta":{"weight":["regular"],"fallback":"display"},"Mina":{"weight":["regular","700"],"fallback":"sans-serif"},"Headland One":{"weight":["regular"],"fallback":"serif"},"Medula One":{"weight":["regular"],"fallback":"display"},"Englebert":{"weight":["regular"],"fallback":"sans-serif"},"Nova Square":{"weight":["regular"],"fallback":"display"},"Delius Unicase":{"weight":["regular","700"],"fallback":"handwriting"},"Sumana":{"weight":["regular","700"],"fallback":"serif"},"Bilbo":{"weight":["regular"],"fallback":"handwriting"},"Engagement":{"weight":["regular"],"fallback":"handwriting"},"ZCOOL QingKe HuangYou":{"weight":["regular"],"fallback":"display"},"Fresca":{"weight":["regular"],"fallback":"sans-serif"},"Ranga":{"weight":["regular","700"],"fallback":"display"},"Orelega One":{"weight":["regular"],"fallback":"display"},"Zen Dots":{"weight":["regular"],"fallback":"display"},"Shippori Mincho":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Henny Penny":{"weight":["regular"],"fallback":"display"},"Della Respira":{"weight":["regular"],"fallback":"serif"},"Cherry Swash":{"weight":["regular","700"],"fallback":"display"},"Notable":{"weight":["regular"],"fallback":"sans-serif"},"Arya":{"weight":["regular","700"],"fallback":"sans-serif"},"Slackey":{"weight":["regular"],"fallback":"display"},"Vibur":{"weight":["regular"],"fallback":"handwriting"},"Coiny":{"weight":["regular"],"fallback":"display"},"Lexend Zetta":{"weight":["regular"],"fallback":"sans-serif"},"Elsie":{"weight":["regular","900"],"fallback":"display"},"Fjord One":{"weight":["regular"],"fallback":"serif"},"Puritan":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Just Me Again Down Here":{"weight":["regular"],"fallback":"handwriting"},"Khmer":{"weight":["regular"],"fallback":"display"},"Girassol":{"weight":["regular"],"fallback":"display"},"Bellota Text":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Yatra One":{"weight":["regular"],"fallback":"display"},"Stalemate":{"weight":["regular"],"fallback":"handwriting"},"Wire One":{"weight":["regular"],"fallback":"sans-serif"},"Spicy Rice":{"weight":["regular"],"fallback":"display"},"Saira Stencil One":{"weight":["regular"],"fallback":"display"},"Kite One":{"weight":["regular"],"fallback":"sans-serif"},"Port Lligat Slab":{"weight":["regular"],"fallback":"serif"},"Baloo Bhaina 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Pavanam":{"weight":["regular"],"fallback":"sans-serif"},"Eater":{"weight":["regular"],"fallback":"display"},"Text Me One":{"weight":["regular"],"fallback":"sans-serif"},"Ribeye":{"weight":["regular"],"fallback":"display"},"Pirata One":{"weight":["regular"],"fallback":"display"},"Amarante":{"weight":["regular"],"fallback":"display"},"Milonga":{"weight":["regular"],"fallback":"display"},"Habibi":{"weight":["regular"],"fallback":"serif"},"Ruslan Display":{"weight":["regular"],"fallback":"display"},"Encode Sans Semi Expanded":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Nokora":{"weight":["regular","700"],"fallback":"serif"},"Rowdies":{"weight":["300","regular","700"],"fallback":"display"},"Kranky":{"weight":["regular"],"fallback":"display"},"Bigelow Rules":{"weight":["regular"],"fallback":"display"},"League Script":{"weight":["regular"],"fallback":"handwriting"},"Swanky and Moo Moo":{"weight":["regular"],"fallback":"handwriting"},"Karantina":{"weight":["300","regular","700"],"fallback":"display"},"Lovers Quarrel":{"weight":["regular"],"fallback":"handwriting"},"Mate SC":{"weight":["regular"],"fallback":"serif"},"Manuale":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Germania One":{"weight":["regular"],"fallback":"display"},"Sura":{"weight":["regular","700"],"fallback":"serif"},"Sarina":{"weight":["regular"],"fallback":"display"},"Macondo Swash Caps":{"weight":["regular"],"fallback":"display"},"Kotta One":{"weight":["regular"],"fallback":"serif"},"IM Fell French Canon SC":{"weight":["regular"],"fallback":"serif"},"Julee":{"weight":["regular"],"fallback":"handwriting"},"Charmonman":{"weight":["regular","700"],"fallback":"handwriting"},"Shanti":{"weight":["regular"],"fallback":"sans-serif"},"Gamja Flower":{"weight":["regular"],"fallback":"handwriting"},"Averia Gruesa Libre":{"weight":["regular"],"fallback":"display"},"Stint Ultra Expanded":{"weight":["regular"],"fallback":"display"},"Uncial Antiqua":{"weight":["regular"],"fallback":"display"},"Mystery Quest":{"weight":["regular"],"fallback":"display"},"Goldman":{"weight":["regular","700"],"fallback":"display"},"Paprika":{"weight":["regular"],"fallback":"display"},"IM Fell French Canon":{"weight":["regular","italic"],"fallback":"serif"},"Prociono":{"weight":["regular"],"fallback":"serif"},"Kodchasan":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Text":{"weight":["regular"],"fallback":"display"},"Quintessential":{"weight":["regular"],"fallback":"handwriting"},"Moul":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128":{"weight":["regular"],"fallback":"display"},"Ramaraja":{"weight":["regular"],"fallback":"serif"},"Modak":{"weight":["regular"],"fallback":"display"},"Song Myung":{"weight":["regular"],"fallback":"serif"},"East Sea Dokdo":{"weight":["regular"],"fallback":"handwriting"},"Crushed":{"weight":["regular"],"fallback":"display"},"Dekko":{"weight":["regular"],"fallback":"handwriting"},"Chilanka":{"weight":["regular"],"fallback":"handwriting"},"Hanalei Fill":{"weight":["regular"],"fallback":"display"},"Mogra":{"weight":["regular"],"fallback":"display"},"Baloo Tammudu 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Baloo Bhai 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Libre Barcode 39 Extended Text":{"weight":["regular"],"fallback":"display"},"Rosarivo":{"weight":["regular","italic"],"fallback":"serif"},"KoHo":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Offside":{"weight":["regular"],"fallback":"display"},"Reggae One":{"weight":["regular"],"fallback":"display"},"Syne":{"weight":["regular","500","600","700","800"],"fallback":"sans-serif"},"Zilla Slab Highlight":{"weight":["regular","700"],"fallback":"display"},"Donegal One":{"weight":["regular"],"fallback":"serif"},"Bellota":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"display"},"Stoke":{"weight":["300","regular"],"fallback":"serif"},"Cormorant Unicase":{"weight":["300","regular","500","600","700"],"fallback":"serif"},"Cagliostro":{"weight":["regular"],"fallback":"sans-serif"},"Rationale":{"weight":["regular"],"fallback":"sans-serif"},"Margarine":{"weight":["regular"],"fallback":"display"},"Sancreek":{"weight":["regular"],"fallback":"display"},"Inria Serif":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"serif"},"Overlock SC":{"weight":["regular"],"fallback":"display"},"Nosifer":{"weight":["regular"],"fallback":"display"},"Libre Barcode EAN13 Text":{"weight":["regular"],"fallback":"display"},"Yeon Sung":{"weight":["regular"],"fallback":"display"},"Ruluko":{"weight":["regular"],"fallback":"sans-serif"},"Simonetta":{"weight":["regular","italic","900","900italic"],"fallback":"display"},"Lakki Reddy":{"weight":["regular"],"fallback":"handwriting"},"Baloo Paaji 2":{"weight":["regular","500","600","700","800"],"fallback":"display"},"Chango":{"weight":["regular"],"fallback":"display"},"Galdeano":{"weight":["regular"],"fallback":"sans-serif"},"Fahkwang":{"weight":["200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Elsie Swash Caps":{"weight":["regular","900"],"fallback":"display"},"Buda":{"weight":["300"],"fallback":"display"},"Condiment":{"weight":["regular"],"fallback":"handwriting"},"Barrio":{"weight":["regular"],"fallback":"display"},"Chicle":{"weight":["regular"],"fallback":"display"},"Angkor":{"weight":["regular"],"fallback":"display"},"Akronim":{"weight":["regular"],"fallback":"display"},"Tomorrow":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"sans-serif"},"Sonsie One":{"weight":["regular"],"fallback":"display"},"Kumar One":{"weight":["regular"],"fallback":"display"},"Autour One":{"weight":["regular"],"fallback":"display"},"Libre Caslon Display":{"weight":["regular"],"fallback":"serif"},"Farsan":{"weight":["regular"],"fallback":"display"},"Fenix":{"weight":["regular"],"fallback":"serif"},"Solway":{"weight":["300","regular","500","700","800"],"fallback":"serif"},"Kulim Park":{"weight":["200","200italic","300","300italic","regular","italic","600","600italic","700","700italic"],"fallback":"sans-serif"},"Stint Ultra Condensed":{"weight":["regular"],"fallback":"display"},"Metal":{"weight":["regular"],"fallback":"display"},"Rum Raisin":{"weight":["regular"],"fallback":"sans-serif"},"Redressed":{"weight":["regular"],"fallback":"handwriting"},"Tulpen One":{"weight":["regular"],"fallback":"display"},"Petrona":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Marko One":{"weight":["regular"],"fallback":"serif"},"Asar":{"weight":["regular"],"fallback":"serif"},"Nova Flat":{"weight":["regular"],"fallback":"display"},"Koulen":{"weight":["regular"],"fallback":"display"},"Lexend Exa":{"weight":["regular"],"fallback":"sans-serif"},"Londrina Outline":{"weight":["regular"],"fallback":"display"},"Cute Font":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer":{"weight":["regular","italic"],"fallback":"serif"},"Junge":{"weight":["regular"],"fallback":"serif"},"Stylish":{"weight":["regular"],"fallback":"sans-serif"},"Lexend":{"weight":["100","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Spirax":{"weight":["regular"],"fallback":"display"},"Piazzolla":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Piedra":{"weight":["regular"],"fallback":"display"},"Ribeye Marrow":{"weight":["regular"],"fallback":"display"},"Dorsa":{"weight":["regular"],"fallback":"sans-serif"},"Ibarra Real Nova":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"IM Fell DW Pica SC":{"weight":["regular"],"fallback":"serif"},"Wellfleet":{"weight":["regular"],"fallback":"display"},"Eagle Lake":{"weight":["regular"],"fallback":"handwriting"},"Meie Script":{"weight":["regular"],"fallback":"handwriting"},"Goblin One":{"weight":["regular"],"fallback":"display"},"Flavors":{"weight":["regular"],"fallback":"display"},"Gotu":{"weight":["regular"],"fallback":"sans-serif"},"Linden Hill":{"weight":["regular","italic"],"fallback":"serif"},"Chathura":{"weight":["100","300","regular","700","800"],"fallback":"sans-serif"},"Croissant One":{"weight":["regular"],"fallback":"display"},"Jomolhari":{"weight":["regular"],"fallback":"serif"},"Srisakdi":{"weight":["regular","700"],"fallback":"display"},"Modern Antiqua":{"weight":["regular"],"fallback":"display"},"Joti One":{"weight":["regular"],"fallback":"display"},"Kavoon":{"weight":["regular"],"fallback":"display"},"Sulphur Point":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Castoro":{"weight":["regular","italic"],"fallback":"serif"},"Chela One":{"weight":["regular"],"fallback":"display"},"Atomic Age":{"weight":["regular"],"fallback":"display"},"Maiden Orange":{"weight":["regular"],"fallback":"display"},"Ruthie":{"weight":["regular"],"fallback":"handwriting"},"Bayon":{"weight":["regular"],"fallback":"display"},"Potta One":{"weight":["regular"],"fallback":"display"},"Iceberg":{"weight":["regular"],"fallback":"display"},"Bigshot One":{"weight":["regular"],"fallback":"display"},"Gorditas":{"weight":["regular","700"],"fallback":"display"},"Sree Krushnadevaraya":{"weight":["regular"],"fallback":"serif"},"Trykker":{"weight":["regular"],"fallback":"serif"},"Kufam":{"weight":["regular","500","600","700","800","900","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"display"},"Diplomata SC":{"weight":["regular"],"fallback":"display"},"Poor Story":{"weight":["regular"],"fallback":"display"},"Sirin Stencil":{"weight":["regular"],"fallback":"display"},"Kavivanar":{"weight":["regular"],"fallback":"handwriting"},"Syne Mono":{"weight":["regular"],"fallback":"monospace"},"Metal Mania":{"weight":["regular"],"fallback":"display"},"Arbutus":{"weight":["regular"],"fallback":"display"},"Unlock":{"weight":["regular"],"fallback":"display"},"MuseoModerno":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"display"},"Glass Antiqua":{"weight":["regular"],"fallback":"display"},"Miniver":{"weight":["regular"],"fallback":"display"},"Griffy":{"weight":["regular"],"fallback":"display"},"Bokor":{"weight":["regular"],"fallback":"display"},"Felipa":{"weight":["regular"],"fallback":"handwriting"},"Inika":{"weight":["regular","700"],"fallback":"serif"},"Princess Sofia":{"weight":["regular"],"fallback":"handwriting"},"Mrs Sheppards":{"weight":["regular"],"fallback":"handwriting"},"Monofett":{"weight":["regular"],"fallback":"display"},"Sahitya":{"weight":["regular","700"],"fallback":"serif"},"Dela Gothic One":{"weight":["regular"],"fallback":"display"},"Shippori Mincho B1":{"weight":["regular","500","600","700","800"],"fallback":"serif"},"Beth Ellen":{"weight":["regular"],"fallback":"handwriting"},"Lancelot":{"weight":["regular"],"fallback":"display"},"Rhodium Libre":{"weight":["regular"],"fallback":"serif"},"Fraunces":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"Hachi Maru Pop":{"weight":["regular"],"fallback":"handwriting"},"Snippet":{"weight":["regular"],"fallback":"sans-serif"},"Content":{"weight":["regular","700"],"fallback":"display"},"Revalia":{"weight":["regular"],"fallback":"display"},"Diplomata":{"weight":["regular"],"fallback":"display"},"Libre Barcode 128 Text":{"weight":["regular"],"fallback":"display"},"Jacques Francois Shadow":{"weight":["regular"],"fallback":"display"},"Long Cang":{"weight":["regular"],"fallback":"handwriting"},"Caesar Dressing":{"weight":["regular"],"fallback":"display"},"Odor Mean Chey":{"weight":["regular"],"fallback":"display"},"Jolly Lodger":{"weight":["regular"],"fallback":"display"},"Texturina":{"weight":["100","200","300","regular","500","600","700","800","900","100italic","200italic","300italic","italic","500italic","600italic","700italic","800italic","900italic"],"fallback":"serif"},"DotGothic16":{"weight":["regular"],"fallback":"sans-serif"},"Ewert":{"weight":["regular"],"fallback":"display"},"Romanesco":{"weight":["regular"],"fallback":"handwriting"},"Kantumruy":{"weight":["300","regular","700"],"fallback":"sans-serif"},"Asset":{"weight":["regular"],"fallback":"display"},"Odibee Sans":{"weight":["regular"],"fallback":"display"},"Emblema One":{"weight":["regular"],"fallback":"display"},"Kdam Thmor":{"weight":["regular"],"fallback":"display"},"Dr Sugiyama":{"weight":["regular"],"fallback":"handwriting"},"Bahiana":{"weight":["regular"],"fallback":"display"},"GFS Neohellenic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Oldenburg":{"weight":["regular"],"fallback":"display"},"Molle":{"weight":["italic"],"fallback":"handwriting"},"Ravi Prakash":{"weight":["regular"],"fallback":"display"},"Gayathri":{"weight":["100","regular","700"],"fallback":"sans-serif"},"Almendra SC":{"weight":["regular"],"fallback":"serif"},"Varta":{"weight":["300","regular","500","600","700"],"fallback":"sans-serif"},"Risque":{"weight":["regular"],"fallback":"display"},"Sansita Swashed":{"weight":["300","regular","500","600","700","800","900"],"fallback":"display"},"Kiwi Maru":{"weight":["300","regular","500"],"fallback":"serif"},"Dangrek":{"weight":["regular"],"fallback":"display"},"Devonshire":{"weight":["regular"],"fallback":"handwriting"},"Big Shoulders Stencil Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Jim Nightshade":{"weight":["regular"],"fallback":"handwriting"},"Smythe":{"weight":["regular"],"fallback":"display"},"Stick":{"weight":["regular"],"fallback":"sans-serif"},"Lexend Mega":{"weight":["regular"],"fallback":"sans-serif"},"Siemreap":{"weight":["regular"],"fallback":"display"},"Londrina Shadow":{"weight":["regular"],"fallback":"display"},"Train One":{"weight":["regular"],"fallback":"display"},"IM Fell Great Primer SC":{"weight":["regular"],"fallback":"serif"},"Barriecito":{"weight":["regular"],"fallback":"display"},"Underdog":{"weight":["regular"],"fallback":"display"},"Stalinist One":{"weight":["regular"],"fallback":"display"},"Mr Bedfort":{"weight":["regular"],"fallback":"handwriting"},"Freehand":{"weight":["regular"],"fallback":"display"},"MedievalSharp":{"weight":["regular"],"fallback":"display"},"Lexend Giga":{"weight":["regular"],"fallback":"sans-serif"},"Keania One":{"weight":["regular"],"fallback":"display"},"Peddana":{"weight":["regular"],"fallback":"serif"},"Galindo":{"weight":["regular"],"fallback":"display"},"Fascinate":{"weight":["regular"],"fallback":"display"},"Londrina Sketch":{"weight":["regular"],"fallback":"display"},"Gupter":{"weight":["regular","500","700"],"fallback":"serif"},"Nova Slim":{"weight":["regular"],"fallback":"display"},"Snowburst One":{"weight":["regular"],"fallback":"display"},"ZCOOL KuaiLe":{"weight":["regular"],"fallback":"display"},"Plaster":{"weight":["regular"],"fallback":"display"},"Fascinate Inline":{"weight":["regular"],"fallback":"display"},"Newsreader":{"weight":["200","300","regular","500","600","700","800","200italic","300italic","italic","500italic","600italic","700italic","800italic"],"fallback":"serif"},"Purple Purse":{"weight":["regular"],"fallback":"display"},"Sedgwick Ave Display":{"weight":["regular"],"fallback":"handwriting"},"Jacques Francois":{"weight":["regular"],"fallback":"serif"},"Almendra Display":{"weight":["regular"],"fallback":"display"},"Irish Grover":{"weight":["regular"],"fallback":"display"},"Kumar One Outline":{"weight":["regular"],"fallback":"display"},"Andika New Basic":{"weight":["regular","italic","700","700italic"],"fallback":"sans-serif"},"Libre Barcode 39 Extended":{"weight":["regular"],"fallback":"display"},"Taprom":{"weight":["regular"],"fallback":"display"},"Miss Fajardose":{"weight":["regular"],"fallback":"handwriting"},"IM Fell Double Pica SC":{"weight":["regular"],"fallback":"serif"},"Macondo":{"weight":["regular"],"fallback":"display"},"Ruge Boogie":{"weight":["regular"],"fallback":"handwriting"},"Sunshiney":{"weight":["regular"],"fallback":"handwriting"},"Brygada 1918":{"weight":["regular","500","600","700","italic","500italic","600italic","700italic"],"fallback":"serif"},"Grenze":{"weight":["100","100italic","200","200italic","300","300italic","regular","italic","500","500italic","600","600italic","700","700italic","800","800italic","900","900italic"],"fallback":"serif"},"Erica One":{"weight":["regular"],"fallback":"display"},"Seymour One":{"weight":["regular"],"fallback":"sans-serif"},"Supermercado One":{"weight":["regular"],"fallback":"display"},"Zhi Mang Xing":{"weight":["regular"],"fallback":"handwriting"},"Butterfly Kids":{"weight":["regular"],"fallback":"handwriting"},"Kirang Haerang":{"weight":["regular"],"fallback":"display"},"Federant":{"weight":["regular"],"fallback":"display"},"Liu Jian Mao Cao":{"weight":["regular"],"fallback":"handwriting"},"Chenla":{"weight":["regular"],"fallback":"display"},"Hanalei":{"weight":["regular"],"fallback":"display"},"Langar":{"weight":["regular"],"fallback":"display"},"Trochut":{"weight":["regular","italic","700"],"fallback":"display"},"Smokum":{"weight":["regular"],"fallback":"display"},"Black And White Picture":{"weight":["regular"],"fallback":"sans-serif"},"Preahvihear":{"weight":["regular"],"fallback":"display"},"Bungee Outline":{"weight":["regular"],"fallback":"display"},"Astloch":{"weight":["regular","700"],"fallback":"display"},"Fasthand":{"weight":["regular"],"fallback":"serif"},"Akaya Telivigala":{"weight":["regular"],"fallback":"display"},"Inria Sans":{"weight":["300","300italic","regular","italic","700","700italic"],"fallback":"sans-serif"},"Bonbon":{"weight":["regular"],"fallback":"handwriting"},"Combo":{"weight":["regular"],"fallback":"display"},"Nova Script":{"weight":["regular"],"fallback":"display"},"Sofadi One":{"weight":["regular"],"fallback":"display"},"Passero One":{"weight":["regular"],"fallback":"display"},"Suwannaphum":{"weight":["regular"],"fallback":"display"},"Miltonian Tattoo":{"weight":["regular"],"fallback":"display"},"Bungee Hairline":{"weight":["regular"],"fallback":"display"},"Gidugu":{"weight":["regular"],"fallback":"sans-serif"},"Geostar Fill":{"weight":["regular"],"fallback":"display"},"Nerko One":{"weight":["regular"],"fallback":"handwriting"},"Lacquer":{"weight":["regular"],"fallback":"display"},"Butcherman":{"weight":["regular"],"fallback":"display"},"Sevillana":{"weight":["regular"],"fallback":"display"},"Nova Oval":{"weight":["regular"],"fallback":"display"},"Aubrey":{"weight":["regular"],"fallback":"display"},"Akaya Kanadaka":{"weight":["regular"],"fallback":"display"},"Nova Cut":{"weight":["regular"],"fallback":"display"},"Vibes":{"weight":["regular"],"fallback":"display"},"Miltonian":{"weight":["regular"],"fallback":"display"},"Moulpali":{"weight":["regular"],"fallback":"display"},"BioRhyme Expanded":{"weight":["200","300","regular","700","800"],"fallback":"serif"},"Bahianita":{"weight":["regular"],"fallback":"display"},"Suravaram":{"weight":["regular"],"fallback":"serif"},"Fruktur":{"weight":["regular"],"fallback":"display"},"Single Day":{"weight":["regular"],"fallback":"display"},"Imbue":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"serif"},"Lexend Tera":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Inline Text":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Dhurjati":{"weight":["regular"],"fallback":"sans-serif"},"Warnes":{"weight":["regular"],"fallback":"display"},"Kenia":{"weight":["regular"],"fallback":"display"},"Lexend Peta":{"weight":["regular"],"fallback":"sans-serif"},"Big Shoulders Stencil Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Geostar":{"weight":["regular"],"fallback":"display"},"Big Shoulders Inline Display":{"weight":["100","300","regular","500","600","700","800","900"],"fallback":"display"},"Oi":{"weight":["regular"],"fallback":"display"},"Xanh Mono":{"weight":["regular","italic"],"fallback":"monospace"},"Viaoda Libre":{"weight":["regular"],"fallback":"display"},"Truculenta":{"weight":["100","200","300","regular","500","600","700","800","900"],"fallback":"sans-serif"},"Syne Tactile":{"weight":["regular"],"fallback":"display"},"Trispace":{"weight":["100","200","300","regular","500","600","700","800"],"fallback":"sans-serif"},"Ballet":{"weight":["regular"],"fallback":"handwriting"},"Benne":{"weight":["regular"],"fallback":"serif"}}');

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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["jQuery"];

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"____dashboard/index": 0,
/******/ 			"____dashboard/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
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
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkboostify_blocks"] = globalThis["webpackChunkboostify_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["____dashboard/style-index"], () => (__webpack_require__("./src/____dashboard/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map