(()=>{var e,t={498:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"}))}));e.exports=o},826:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"}))}));e.exports=o},1070:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 12h-15"}))}));e.exports=o},1163:(e,t,n)=>{"use strict";var r=n(1609),o=n.n(r);const a=window.wp.blocks,l=window.wp.i18n,i=window.wp.blockEditor,s=window.lodash;var c=n.n(s);const u={flexDirection:{Desktop:"column",Tablet:"column"},alignItems:{Desktop:"center"},justifyContent:{Desktop:"center"},flexWrap:{Desktop:"nowrap"}},d=[{name:"row",icon:'<svg class="scale-[.65]" width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M13.5 4.1L13.5 19.9C13.5 21.4 14.14 22 15.73 22L19.77 22C21.36 22 22 21.4 22 19.9L22 4.1C22 2.6 21.36 2 19.77 2L15.73 2C14.14 2 13.5 2.6 13.5 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 4.1L2 19.9C2 21.4 2.64 22 4.23 22L8.27 22C9.86 22 10.5 21.4 10.5 19.9L10.5 4.1C10.5 2.6 9.86 2 8.27 2L4.23 2C2.64 2 2 2.6 2 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M28.43 18.0702L34.5 12.0002L28.43 5.93018" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M17.5 12L34.33 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"column",icon:'<svg class="scale-[.65]"  width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.9 13.5L4.1 13.5C2.6 13.5 2 14.14 2 15.73L2 19.77C2 21.36 2.6 22 4.1 22L19.9 22C21.4 22 22 21.36 22 19.77L22 15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M19.9 2L4.1 2C2.6 2 2 2.64 2 4.23L2 8.27C2 9.86 2.6 10.5 4.1 10.5L19.9 10.5C21.4 10.5 22 9.86 22 8.27L22 4.23C22 2.64 21.4 2 19.9 2Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5.93001 28.43L12 34.5L18.07 28.43" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M12 17.5001L12 34.3301" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"row-reverse",icon:'<svg class="scale-[.65]"  width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M24.5 19.9V4.1C24.5 2.6 23.86 2 22.27 2H18.23C16.64 2 16 2.6 16 4.1V19.9C16 21.4 16.64 22 18.23 22H22.27C23.86 22 24.5 21.4 24.5 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M36 19.9V4.1C36 2.6 35.36 2 33.77 2H29.73C28.14 2 27.5 2.6 27.5 4.1V19.9C27.5 21.4 28.14 22 29.73 22H33.77C35.36 22 36 21.4 36 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M9.57 5.92982L3.5 11.9998L9.57 18.0698" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M20.5 12L3.67004 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"column-reverse",icon:'<svg class="scale-[.65]" width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M4.1 24.5L19.9 24.5C21.4 24.5 22 23.86 22 22.27L22 18.23C22 16.64 21.4 16 19.9 16L4.1 16C2.6 16 2 16.64 2 18.23L2 22.27C2 23.86 2.6 24.5 4.1 24.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M4.1 36L19.9 36C21.4 36 22 35.36 22 33.77L22 29.73C22 28.14 21.4 27.5 19.9 27.5L4.1 27.5C2.6 27.5 2 28.14 2 29.73L2 33.77C2 35.36 2.6 36 4.1 36Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M12 20.4999L12 3.66992" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '}],p=[{name:"start",icon:' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.26 5.1001V16.9001C19.26 18.4001 18.62 19.0001 17.03 19.0001H15.99C14.4 19.0001 13.76 18.4001 13.76 16.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5.26 5.1001V11.9001C5.26 13.4001 5.9 14.0001 7.49 14.0001H8.53C10.12 14.0001 10.76 13.4001 10.76 11.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"center",icon:' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M22 12H19.31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        \n    '},{name:"end",icon:' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5.25999 18.9V12.1C5.25999 10.6 5.89999 10 7.48999 10H8.52999C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        \n    '},{name:"baseline",icon:' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M13.25 13.4V6.6C13.25 5.1 13.89 4.5 15.48 4.5H16.52C18.11 4.5 18.75 5.1 18.75 6.6V13.4C18.75 14.9 18.11 15.5 16.52 15.5H15.48C13.89 15.5 13.25 14.9 13.25 13.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M22 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        \n    '},{name:"stretch",icon:' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5 19V8.30337C5 5.94382 5.69818 5 7.43273 5H8.56727C10.3018 5 11 5.94382 11 8.30337V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        \n    '}],m=[{name:"flex-start",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M16.26 18.9V7.1C16.26 5.6 15.62 5 14.03 5H12.99C11.4 5 10.76 5.6 10.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"flex-end",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M8.26001 18.9V12.1C8.26001 10.6 8.90001 10 10.49 10H11.53C13.12 10 13.76 10.6 13.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"center",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"space-between",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"space-around",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M20.26 18.9V7.1C20.26 5.6 19.62 5 18.03 5H16.99C15.4 5 14.76 5.6 14.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M4.26001 18.9V12.1C4.26001 10.6 4.90001 10 6.49001 10H7.53001C9.12001 10 9.76001 10.6 9.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"space-evenly",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '}],f=[{name:"nowrap",icon:'<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 14.27V10.23C22 8.64 21.36 8 19.77 8H15.73C14.14 8 13.5 8.64 13.5 10.23V14.27C13.5 15.86 14.14 16.5 15.73 16.5H19.77C21.36 16.5 22 15.86 22 14.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M31.77 8H27.73C26.14 8 25.5 8.64 25.5 10.23V14.27C25.5 15.86 26.14 16.5 27.73 16.5H31.77" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.5 14.52V9.98C10.5 8.57 9.86 8 8.27 8H4.23C2.64 8 2 8.57 2 9.98V14.51C2 15.93 2.64 16.49 4.23 16.49H8.27C9.86 16.5 10.5 15.93 10.5 14.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"wrap",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n    '},{name:"wrap-reverse",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 15.73V19.77C22 21.36 21.36 22 19.77 22H15.73C14.14 22 13.5 21.36 13.5 19.77V15.73C13.5 14.14 14.14 13.5 15.73 13.5H19.77C21.36 13.5 22 14.14 22 15.73Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.5 15.48V20.02C10.5 21.43 9.86 22 8.27 22H4.23C2.64 22 2 21.43 2 20.02L2 15.49C2 14.07 2.64 13.51 4.23 13.51H8.27C9.86 13.5 10.5 14.07 10.5 15.48Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M21 10C21 6.13 17.87 3 14 3L15.05 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        <path d="M10.5 4.23V8.27C10.5 9.86 9.86 10.5 8.27 10.5H4.23C2.64 10.5 2 9.86 2 8.27L2 4.23C2 2.64 2.64 2 4.23 2H8.27C9.86 2 10.5 2.64 10.5 4.23Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </svg>\n        \n    '}],b=window.wp.data,v=window.wp.components,h=({className:e="",label:t=(0,l.__)("Color","boostify-blocks"),color:n="#000",onChange:o,showDefaultPalette:a=!0,showCustomColorOnDefaultPallete:s=!0})=>{const[c,u]=(0,r.useState)("");(0,r.useEffect)((()=>{n&&u(n)}),[n]);const d=(0,i.__experimentalUseMultipleOriginColorsAndGradients)(),p=(0,r.useMemo)((()=>{const e=window.boostify_blocks_global_variables?.customColorPallete;return e&&e.length&&s?[...d?.colors||[],{name:"Customs",colors:window.boostify_blocks_global_variables.customColorPallete||[]}]:d?.colors||[]}),[d,s]);return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.Dropdown,{className:`w-full ${e}`,contentClassName:"my-popover-content-classname",popoverProps:{placement:"left-start"},renderToggle:({isOpen:e,onToggle:n})=>(0,r.createElement)("div",{className:"w-full flex items-center gap-3 border p-2 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors",onClick:n},(0,r.createElement)("div",{className:"flex items-center gap-0.5"},(0,r.createElement)("div",{className:"w-7 h-7 rounded-full shadow-md ring-1 ring-black/5 cursor-pointer "+(c?"":"bg-transparent"),style:{backgroundColor:c,backgroundImage:c?void 0:"linear-gradient(45deg, #ddd 25%, transparent 0), linear-gradient(-45deg, #ddd 25%, transparent 0), linear-gradient(45deg, transparent 75%, #ddd 0), linear-gradient(-45deg, transparent 75%, #ddd 0)",backgroundSize:"10px 10px",backgroundPosition:"0 0, 0 5px, 5px -5px, -5px 0"}})),t&&(0,r.createElement)("div",null,(0,r.createElement)("span",null,t))),renderContent:()=>(0,r.createElement)("div",null,(0,r.createElement)("div",{className:"bg-white "},(0,r.createElement)(v.ColorPalette,{className:"block-editor-color-gradient-control__panel p-4",colors:a?p:void 0,value:c,enableAlpha:!0,onChange:e=>{var t;u(t=e||""),o(t)},__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0})))}))};var g=n(8698),k=n(8026),w=n(498),y=n(3682);const _=[{value:"fixed",label:"Fixed"},{value:"local",label:"Local"},{value:"scroll",label:"Scroll"}],C=[{value:"no-repeat",label:"No repeat"},{value:"repeat",label:"Repeat"},{value:"repeat-x",label:"Repeat-x"},{value:"repeat-y",label:"Repeat-y"}],x=[{value:"auto",label:"Auto"},{value:"contain",label:"Contain"},{value:"cover",label:"Cover"}],E=[{name:"JShine",gradient:"linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",slug:"jshine"},{name:"Moonlit Asteroid",gradient:"linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",slug:"moonlit-asteroid"},{name:"Rastafarie",gradient:"linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",slug:"rastafari"}];function I(...e){return e.filter(Boolean).join(" ")}function T(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,T),r}var N,S=((N=S||{})[N.None=0]="None",N[N.RenderStrategy=1]="RenderStrategy",N[N.Static=2]="Static",N),R=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(R||{});function P({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:a=!0,name:l}){let i=M(t,e);if(a)return $(i,n,r,l);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=i;if(e)return $(t,n,r,l)}if(1&s){let{unmount:e=!0,...t}=i;return T(e?0:1,{0:()=>null,1:()=>$({...t,hidden:!0,style:{display:"none"}},n,r,l)})}return $(i,n,r,l)}function $(e,t={},n,o){var a;let{as:l=n,children:i,refName:s="ref",...c}=A(e,["unmount","static"]),u=void 0!==e.ref?{[s]:e.ref}:{},d="function"==typeof i?i(t):i;"className"in c&&c.className&&"function"==typeof c.className&&(c.className=c.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(l===r.Fragment&&Object.keys(L(c)).length>0){if(!(0,r.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${o} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(c).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));let e=I(null==(a=d.props)?void 0:a.className,c.className),t=e?{className:e}:{};return(0,r.cloneElement)(d,Object.assign({},M(d.props,L(A(c,["ref"]))),p,u,function(...e){return{ref:e.every((e=>null==e))?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,u.ref),t))}return(0,r.createElement)(l,Object.assign({},A(c,["ref"]),l!==r.Fragment&&u,l!==r.Fragment&&p),d)}function M(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let e in n)Object.assign(t,{[e](t,...r){let o=n[e];for(let e of o){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;e(t,...r)}}});return t}function D(e){var t;return Object.assign((0,r.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function L(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function A(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var B=Object.defineProperty,O=(e,t,n)=>(((e,t,n)=>{t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!=typeof t?t+"":t,n),n);let j=new class{constructor(){O(this,"current",this.detect()),O(this,"handoffState","pending"),O(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}},H=(e,t)=>{j.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)};function F(){let[e,t]=(0,r.useState)(j.isHandoffComplete);return e&&!1===j.isHandoffComplete&&t(!1),(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>j.handoff()),[]),e}var V;let W=null!=(V=r.useId)?V:function(){let e=F(),[t,n]=r.useState(e?()=>j.nextId():null);return H((()=>{null===t&&n(j.nextId())}),[t]),null!=t?""+t:void 0};var z=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(z||{});function U(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}function G(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add((()=>e.removeEventListener(n,r,o)))),requestAnimationFrame(...e){let n=requestAnimationFrame(...e);return t.add((()=>cancelAnimationFrame(n)))},nextFrame:(...e)=>t.requestAnimationFrame((()=>t.requestAnimationFrame(...e))),setTimeout(...e){let n=setTimeout(...e);return t.add((()=>clearTimeout(n)))},microTask(...e){let n={current:!0};return U((()=>{n.current&&e[0]()})),t.add((()=>{n.current=!1}))},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add((()=>{Object.assign(e.style,{[t]:r})}))},group(e){let t=G();return e(t),this.add((()=>t.dispose()))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function q(e){return j.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Z=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var K,J=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(J||{}),Q=((K=Q||{})[K.Error=0]="Error",K[K.Overflow=1]="Overflow",K[K.Success=2]="Success",K[K.Underflow=3]="Underflow",K),Y=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Y||{});function X(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(Z)).sort(((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER))))}var ee=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ee||{});function te(e,t=0){var n;return e!==(null==(n=q(e))?void 0:n.body)&&T(t,{0:()=>e.matches(Z),1(){let t=e;for(;null!==t;){if(t.matches(Z))return!0;t=t.parentElement}return!1}})}function ne(e){let t=q(e);G().nextFrame((()=>{t&&!te(t.activeElement,0)&&function(e){null==e||e.focus({preventScroll:!0})}(e)}))}let re=["textarea","input"].join(",");function oe(e,t=e=>e){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let a=r.compareDocumentPosition(o);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function ae(e,t){return le(X(),t,{relativeTo:e})}function le(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?n?oe(e):e:X(e);o.length>0&&l.length>1&&(l=l.filter((e=>!o.includes(e)))),r=null!=r?r:a.activeElement;let i,s=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,l.indexOf(r))-1;if(4&t)return Math.max(0,l.indexOf(r))+1;if(8&t)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=32&t?{preventScroll:!0}:{},d=0,p=l.length;do{if(d>=p||d+p<=0)return 0;let e=c+d;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}i=l[e],null==i||i.focus(u),d+=s}while(i!==a.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,re))&&n}(i)&&i.select(),i.hasAttribute("tabindex")||i.setAttribute("tabindex","0"),2}function ie(e){let t=(0,r.useRef)(e);return H((()=>{t.current=e}),[e]),t}let se=function(e){let t=ie(e);return r.useCallback(((...e)=>t.current(...e)),[t])},ce=Symbol();function ue(e,t=!0){return Object.assign(e,{[ce]:t})}function de(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=se((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}));return e.every((e=>null==e||(null==e?void 0:e[ce])))?void 0:n}function pe(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function me(e,t){let[n,o]=(0,r.useState)((()=>pe(e)));return H((()=>{o(pe(e))}),[e.type,e.as]),H((()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")}),[n,t]),n}var fe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(fe||{});let be=D((function(e,t){let{features:n=1,...r}=e;return P({ourProps:{ref:t,"aria-hidden":!(2&~n)||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...!(4&~n)&&!!(2&~n)&&{display:"none"}}},theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})}));function ve({onFocus:e}){let[t,n]=(0,r.useState)(!0);return t?r.createElement(be,{as:"button",type:"button",features:fe.Focusable,onFocus:t=>{t.preventDefault();let r,o=50;r=requestAnimationFrame((function t(){if(!(o--<=0))return e()?(n(!1),void cancelAnimationFrame(r)):void(r=requestAnimationFrame(t));r&&cancelAnimationFrame(r)}))}}):null}const he=r.createContext(null);function ge({children:e}){let t=r.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let o=null!=(n=r.get(t))?n:0;return r.set(t,o+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return r.createElement(he.Provider,{value:t},e)}function ke(e){let t=r.useContext(he);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let o=null!=(n=null==(t=null==(e=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!o)return Symbol();let a=[],l=o;for(;l;)a.push(l.index),l=l.return;return"$."+a.join(".")}(),[o,a]=t.current.get(e,n);return r.useEffect((()=>a),[]),o}var we=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(we||{}),ye=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ye||{}),_e=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(_e||{});let Ce={0(e,t){var n;let r=oe(e.tabs,(e=>e.current)),o=oe(e.panels,(e=>e.current)),a=r.filter((e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))})),l={...e,tabs:r,panels:o};if(t.index<0||t.index>r.length-1){let n=T(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>T(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});return 0===a.length?l:{...l,selectedIndex:T(n,{0:()=>r.indexOf(a[0]),1:()=>r.indexOf(a[a.length-1])})}}let i=r.slice(0,t.index),s=[...r.slice(t.index),...i].find((e=>a.includes(e)));if(!s)return l;let c=null!=(n=r.indexOf(s))?n:e.selectedIndex;return-1===c&&(c=e.selectedIndex),{...l,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],o=oe([...e.tabs,t.tab],(e=>e.current)),a=null!=(n=o.indexOf(r))?n:e.selectedIndex;return-1===a&&(a=e.selectedIndex),{...e,tabs:o,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter((e=>e!==t.tab))}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:oe([...e.panels,t.panel],(e=>e.current))},4:(e,t)=>({...e,panels:e.panels.filter((e=>e!==t.panel))})},xe=(0,r.createContext)(null);function Ee(e){let t=(0,r.useContext)(xe);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Ee),t}return t}xe.displayName="TabsDataContext";let Ie=(0,r.createContext)(null);function Te(e){let t=(0,r.useContext)(Ie);if(null===t){let t=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Te),t}return t}function Ne(e,t){return T(t.type,Ce,e,t)}Ie.displayName="TabsActionsContext";let Se=r.Fragment,Re=S.RenderStrategy|S.Static,Pe=D((function(e,t){var n,o;let a=W(),{id:l=`headlessui-tabs-tab-${a}`,...i}=e,{orientation:s,activation:c,selectedIndex:u,tabs:d,panels:p}=Ee("Tab"),m=Te("Tab"),f=Ee("Tab"),b=(0,r.useRef)(null),v=de(b,t);H((()=>m.registerTab(b)),[m,b]);let h=ke("tabs"),g=d.indexOf(b);-1===g&&(g=h);let k=g===u,w=se((e=>{var t;let n=e();if(n===Q.Success&&"auto"===c){let e=null==(t=q(b))?void 0:t.activeElement,n=f.tabs.findIndex((t=>t.current===e));-1!==n&&m.change(n)}return n})),y=se((e=>{let t=d.map((e=>e.current)).filter(Boolean);if(e.key===z.Space||e.key===z.Enter)return e.preventDefault(),e.stopPropagation(),void m.change(g);switch(e.key){case z.Home:case z.PageUp:return e.preventDefault(),e.stopPropagation(),w((()=>le(t,J.First)));case z.End:case z.PageDown:return e.preventDefault(),e.stopPropagation(),w((()=>le(t,J.Last)))}return w((()=>T(s,{vertical:()=>e.key===z.ArrowUp?le(t,J.Previous|J.WrapAround):e.key===z.ArrowDown?le(t,J.Next|J.WrapAround):Q.Error,horizontal:()=>e.key===z.ArrowLeft?le(t,J.Previous|J.WrapAround):e.key===z.ArrowRight?le(t,J.Next|J.WrapAround):Q.Error})))===Q.Success?e.preventDefault():void 0})),_=(0,r.useRef)(!1),C=se((()=>{var e;_.current||(_.current=!0,null==(e=b.current)||e.focus(),m.change(g),U((()=>{_.current=!1})))})),x=se((e=>{e.preventDefault()})),E=(0,r.useMemo)((()=>({selected:k})),[k]);return P({ourProps:{ref:v,onKeyDown:y,onMouseDown:x,onClick:C,id:l,role:"tab",type:me(e,b),"aria-controls":null==(o=null==(n=p[g])?void 0:n.current)?void 0:o.id,"aria-selected":k,tabIndex:k?0:-1},theirProps:i,slot:E,defaultTag:"button",name:"Tabs.Tab"})})),$e=D((function(e,t){let{defaultIndex:n=0,vertical:o=!1,manual:a=!1,onChange:l,selectedIndex:i=null,...s}=e;const c=o?"vertical":"horizontal",u=a?"manual":"auto";let d=null!==i,p=de(t),[m,f]=(0,r.useReducer)(Ne,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),b=(0,r.useMemo)((()=>({selectedIndex:m.selectedIndex})),[m.selectedIndex]),v=ie(l||(()=>{})),h=ie(m.tabs),g=(0,r.useMemo)((()=>({orientation:c,activation:u,...m})),[c,u,m]),k=se((e=>(f({type:1,tab:e}),()=>f({type:2,tab:e})))),w=se((e=>(f({type:3,panel:e}),()=>f({type:4,panel:e})))),y=se((e=>{_.current!==e&&v.current(e),d||f({type:0,index:e})})),_=ie(d?e.selectedIndex:m.selectedIndex),C=(0,r.useMemo)((()=>({registerTab:k,registerPanel:w,change:y})),[]);H((()=>{f({type:0,index:null!=i?i:n})}),[i]),H((()=>{if(void 0===_.current||m.tabs.length<=0)return;let e=oe(m.tabs,(e=>e.current));e.some(((e,t)=>m.tabs[t]!==e))&&y(e.indexOf(m.tabs[_.current]))}));let x={ref:p};return r.createElement(ge,null,r.createElement(Ie.Provider,{value:C},r.createElement(xe.Provider,{value:g},g.tabs.length<=0&&r.createElement(ve,{onFocus:()=>{var e,t;for(let n of h.current)if(0===(null==(e=n.current)?void 0:e.tabIndex))return null==(t=n.current)||t.focus(),!0;return!1}}),P({ourProps:x,theirProps:s,slot:b,defaultTag:Se,name:"Tabs"}))))})),Me=D((function(e,t){let{orientation:n,selectedIndex:r}=Ee("Tab.List");return P({ourProps:{ref:de(t),role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})})),De=D((function(e,t){let{selectedIndex:n}=Ee("Tab.Panels");return P({ourProps:{ref:de(t)},theirProps:e,slot:(0,r.useMemo)((()=>({selectedIndex:n})),[n]),defaultTag:"div",name:"Tabs.Panels"})})),Le=D((function(e,t){var n,o,a,l;let i=W(),{id:s=`headlessui-tabs-panel-${i}`,tabIndex:c=0,...u}=e,{selectedIndex:d,tabs:p,panels:m}=Ee("Tab.Panel"),f=Te("Tab.Panel"),b=(0,r.useRef)(null),v=de(b,t);H((()=>f.registerPanel(b)),[f,b]);let h=ke("panels"),g=m.indexOf(b);-1===g&&(g=h);let k=g===d,w=(0,r.useMemo)((()=>({selected:k})),[k]),y={ref:v,id:s,role:"tabpanel","aria-labelledby":null==(o=null==(n=p[g])?void 0:n.current)?void 0:o.id,tabIndex:k?c:-1};return k||null!=(a=u.unmount)&&!a||null!=(l=u.static)&&l?P({ourProps:y,theirProps:u,slot:w,defaultTag:"div",features:Re,visible:k,name:"Tabs.Panel"}):r.createElement(be,{as:"span",...y})})),Ae=Object.assign(Pe,{Group:$e,List:Me,Panels:De,Panel:Le});const Be=({className:e="",children:t,tabs:n=[],label:o,tabSelected:a,onChangeSelected:l=()=>{}})=>{const[i,s]=(0,r.useState)(0);return(0,r.useEffect)((()=>{s(n.findIndex((e=>e===a))||0)}),[a]),(0,r.createElement)("div",{className:`w-full max-w-md py-2 ${e}`},o?(0,r.createElement)("p",{className:"mb-2"},o):null,(0,r.createElement)(Ae.Group,{selectedIndex:i,onChange:e=>{s(e),l(e)}},(0,r.createElement)(Ae.List,{className:"flex space-x-1 rounded-xl bg-slate-100 p-1"},n.map((e=>(0,r.createElement)(Ae,{key:e,className:({selected:e})=>function(...e){return e.filter(Boolean).join(" ")}("w-full rounded-lg py-2.5 text-xs font-medium leading-5 text-blue-700 capitalize","ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",e?"bg-white shadow":"text-slate-700 ")},e)))),(0,r.createElement)(Ae.Panels,{className:"relative mt-3 rounded-lg ring-1 ring-offset-4 ring-slate-200 p-2.5 "},t)))},Oe=window.wp.element,je=window.wp.primitives,He=(0,Oe.createElement)(je.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,Oe.createElement)(je.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"})),Fe=(0,Oe.createElement)(je.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,Oe.createElement)(je.Path,{d:"M14 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm.5 12c0 .3-.2.5-.5.5H4c-.3 0-.5-.2-.5-.5V7c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v10zm2.5-7v4l5 3V7l-5 3zm3.5 4.4l-2-1.2v-2.3l2-1.2v4.7z"})),Ve=({className:e,...t})=>(0,r.createElement)(v.Button,{className:`rounded-md ${e}`,...t});function We(){let[e]=(0,r.useState)(G);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}var ze=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(ze||{});function Ue(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}function Ge(e,t,n){let o=ie(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)}),[e,n])}function qe({container:e,accept:t,walk:n,enabled:o=!0}){let a=(0,r.useRef)(t),l=(0,r.useRef)(n);(0,r.useEffect)((()=>{a.current=t,l.current=n}),[t,n]),H((()=>{if(!e||!o)return;let t=q(e);if(!t)return;let n=a.current,r=l.current,i=Object.assign((e=>n(e)),{acceptNode:n}),s=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,!1);for(;s.nextNode();)r(s.currentNode)}),[e,o,a,l])}let Ze=(0,r.createContext)(null);Ze.displayName="OpenClosedContext";var Ke=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(Ke||{});function Je(){return(0,r.useContext)(Ze)}function Qe({value:e,children:t}){return r.createElement(Ze.Provider,{value:e},t)}function Ye(e){return[e.screenX,e.screenY]}function Xe(){let e=(0,r.useRef)([-1,-1]);return{wasMoved(t){let n=Ye(t);return(e.current[0]!==n[0]||e.current[1]!==n[1])&&(e.current=n,!0)},update(t){e.current=Ye(t)}}}var et=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(et||{}),tt=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(tt||{}),nt=(e=>(e[e.OpenMenu=0]="OpenMenu",e[e.CloseMenu=1]="CloseMenu",e[e.GoToItem=2]="GoToItem",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterItem=5]="RegisterItem",e[e.UnregisterItem=6]="UnregisterItem",e))(nt||{});function rt(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=oe(t(e.items.slice()),(e=>e.dataRef.current.domRef.current)),o=n?r.indexOf(n):null;return-1===o&&(o=null),{items:r,activeItemIndex:o}}let ot={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,menuState:0},2:(e,t)=>{var n;let r=rt(e),o=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),o=null!=r?r:-1,a=(()=>{switch(e.focus){case 0:return n.findIndex((e=>!t.resolveDisabled(e)));case 1:{let e=n.slice().reverse().findIndex(((e,n,r)=>!(-1!==o&&r.length-n-1>=o||t.resolveDisabled(e))));return-1===e?e:n.length-1-e}case 2:return n.findIndex(((e,n)=>!(n<=o||t.resolveDisabled(e))));case 3:{let e=n.slice().reverse().findIndex((e=>!t.resolveDisabled(e)));return-1===e?e:n.length-1-e}case 4:return n.findIndex((n=>t.resolveId(n)===e.id));case 5:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}})();return-1===a?r:a}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:o,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),o=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find((e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled})),a=o?e.items.indexOf(o):-1;return-1===a||a===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:a,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=rt(e,(e=>[...e,{id:t.id,dataRef:t.dataRef}]));return{...e,...n}},6:(e,t)=>{let n=rt(e,(e=>{let n=e.findIndex((e=>e.id===t.id));return-1!==n&&e.splice(n,1),e}));return{...e,...n,activationTrigger:1}}},at=(0,r.createContext)(null);function lt(e){let t=(0,r.useContext)(at);if(null===t){let t=new Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,lt),t}return t}function it(e,t){return T(t.type,ot,e,t)}at.displayName="MenuContext";let st=r.Fragment,ct=S.RenderStrategy|S.Static,ut=r.Fragment,dt=D((function(e,t){let n=(0,r.useReducer)(it,{menuState:1,buttonRef:(0,r.createRef)(),itemsRef:(0,r.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:o,itemsRef:a,buttonRef:l},i]=n,s=de(t);!function(e,t,n=!0){let o=(0,r.useRef)(!1);function a(n,r){if(!o.current||n.defaultPrevented)return;let a=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r(n);if(null!==l&&l.getRootNode().contains(l)){for(let e of a){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l)||n.composed&&n.composedPath().includes(t))return}return!te(l,ee.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,r.useEffect)((()=>{requestAnimationFrame((()=>{o.current=n}))}),[n]);let l=(0,r.useRef)(null);Ge("mousedown",(e=>{var t,n;o.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)}),!0),Ge("click",(e=>{l.current&&(a(e,(()=>l.current)),l.current=null)}),!0),Ge("blur",(e=>a(e,(()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null))),!0)}([l,a],((e,t)=>{var n;i({type:1}),te(t,ee.Loose)||(e.preventDefault(),null==(n=l.current)||n.focus())}),0===o);let c=se((()=>{i({type:1})})),u=(0,r.useMemo)((()=>({open:0===o,close:c})),[o,c]),d=e,p={ref:s};return r.createElement(at.Provider,{value:n},r.createElement(Qe,{value:T(o,{0:Ke.Open,1:Ke.Closed})},P({ourProps:p,theirProps:d,slot:u,defaultTag:st,name:"Menu"})))})),pt=D((function(e,t){var n;let o=W(),{id:a=`headlessui-menu-button-${o}`,...l}=e,[i,s]=lt("Menu.Button"),c=de(i.buttonRef,t),u=We(),d=se((e=>{switch(e.key){case z.Space:case z.Enter:case z.ArrowDown:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:ze.First})));break;case z.ArrowUp:e.preventDefault(),e.stopPropagation(),s({type:0}),u.nextFrame((()=>s({type:2,focus:ze.Last})))}})),p=se((e=>{e.key===z.Space&&e.preventDefault()})),m=se((t=>{if(Ue(t.currentTarget))return t.preventDefault();e.disabled||(0===i.menuState?(s({type:1}),u.nextFrame((()=>{var e;return null==(e=i.buttonRef.current)?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),s({type:0})))})),f=(0,r.useMemo)((()=>({open:0===i.menuState})),[i]);return P({ourProps:{ref:c,id:a,type:me(e,i.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=i.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===i.menuState,onKeyDown:d,onKeyUp:p,onClick:m},theirProps:l,slot:f,defaultTag:"button",name:"Menu.Button"})})),mt=D((function(e,t){var n,o;let a=W(),{id:l=`headlessui-menu-items-${a}`,...i}=e,[s,c]=lt("Menu.Items"),u=de(s.itemsRef,t),d=function(...e){return(0,r.useMemo)((()=>q(...e)),[...e])}(s.itemsRef),p=We(),m=Je(),f=null!==m?(m&Ke.Open)===Ke.Open:0===s.menuState;(0,r.useEffect)((()=>{let e=s.itemsRef.current;e&&0===s.menuState&&e!==(null==d?void 0:d.activeElement)&&e.focus({preventScroll:!0})}),[s.menuState,s.itemsRef,d]),qe({container:s.itemsRef.current,enabled:0===s.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let b=se((e=>{var t,n;switch(p.dispose(),e.key){case z.Space:if(""!==s.searchQuery)return e.preventDefault(),e.stopPropagation(),c({type:3,value:e.key});case z.Enter:if(e.preventDefault(),e.stopPropagation(),c({type:1}),null!==s.activeItemIndex){let{dataRef:e}=s.items[s.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}ne(s.buttonRef.current);break;case z.ArrowDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:ze.Next});case z.ArrowUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:ze.Previous});case z.Home:case z.PageUp:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:ze.First});case z.End:case z.PageDown:return e.preventDefault(),e.stopPropagation(),c({type:2,focus:ze.Last});case z.Escape:e.preventDefault(),e.stopPropagation(),c({type:1}),G().nextFrame((()=>{var e;return null==(e=s.buttonRef.current)?void 0:e.focus({preventScroll:!0})}));break;case z.Tab:e.preventDefault(),e.stopPropagation(),c({type:1}),G().nextFrame((()=>{ae(s.buttonRef.current,e.shiftKey?J.Previous:J.Next)}));break;default:1===e.key.length&&(c({type:3,value:e.key}),p.setTimeout((()=>c({type:4})),350))}})),v=se((e=>{e.key===z.Space&&e.preventDefault()})),h=(0,r.useMemo)((()=>({open:0===s.menuState})),[s]);return P({ourProps:{"aria-activedescendant":null===s.activeItemIndex||null==(n=s.items[s.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(o=s.buttonRef.current)?void 0:o.id,id:l,onKeyDown:b,onKeyUp:v,role:"menu",tabIndex:0,ref:u},theirProps:i,slot:h,defaultTag:"div",features:ct,visible:f,name:"Menu.Items"})})),ft=D((function(e,t){let n=W(),{id:o=`headlessui-menu-item-${n}`,disabled:a=!1,...l}=e,[i,s]=lt("Menu.Item"),c=null!==i.activeItemIndex&&i.items[i.activeItemIndex].id===o,u=(0,r.useRef)(null),d=de(t,u);H((()=>{if(0!==i.menuState||!c||0===i.activationTrigger)return;let e=G();return e.requestAnimationFrame((()=>{var e,t;null==(t=null==(e=u.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})})),e.dispose}),[u,c,i.menuState,i.activationTrigger,i.activeItemIndex]);let p=(0,r.useRef)({disabled:a,domRef:u});H((()=>{p.current.disabled=a}),[p,a]),H((()=>{var e,t;p.current.textValue=null==(t=null==(e=u.current)?void 0:e.textContent)?void 0:t.toLowerCase()}),[p,u]),H((()=>(s({type:5,id:o,dataRef:p}),()=>s({type:6,id:o}))),[p,o]);let m=se((()=>{s({type:1})})),f=se((e=>{if(a)return e.preventDefault();s({type:1}),ne(i.buttonRef.current)})),b=se((()=>{if(a)return s({type:2,focus:ze.Nothing});s({type:2,focus:ze.Specific,id:o})})),v=Xe(),h=se((e=>v.update(e))),g=se((e=>{v.wasMoved(e)&&(a||c||s({type:2,focus:ze.Specific,id:o,trigger:0}))})),k=se((e=>{v.wasMoved(e)&&(a||c&&s({type:2,focus:ze.Nothing}))})),w=(0,r.useMemo)((()=>({active:c,disabled:a,close:m})),[c,a,m]);return P({ourProps:{id:o,ref:d,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:f,onFocus:b,onPointerEnter:h,onMouseEnter:h,onPointerMove:g,onMouseMove:g,onPointerLeave:k,onMouseLeave:k},theirProps:l,slot:w,defaultTag:ut,name:"Menu.Item"})})),bt=Object.assign(dt,{Button:pt,Items:mt,Item:ft});function vt(){let e=(0,r.useRef)(!1);return H((()=>(e.current=!0,()=>{e.current=!1})),[]),e}function ht(e,...t){e&&t.length>0&&e.classList.add(...t)}function gt(e,...t){e&&t.length>0&&e.classList.remove(...t)}function kt({container:e,direction:t,classes:n,onStart:r,onStop:o}){let a=vt(),l=We(),i=ie(t);H((()=>{let t=G();l.add(t.dispose);let s=e.current;if(s&&"idle"!==i.current&&a.current)return t.dispose(),r.current(i.current),t.add(function(e,t,n,r){let o=n?"enter":"leave",a=G(),l=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{};"enter"===o&&(e.removeAttribute("hidden"),e.style.display="");let i=T(o,{enter:()=>t.enter,leave:()=>t.leave}),s=T(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=T(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return gt(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),ht(e,...i,...c),a.nextFrame((()=>{gt(e,...c),ht(e,...s),function(e,t){let n=G();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[a,l]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t})),i=a+l;if(0!==i){n.group((n=>{n.setTimeout((()=>{t(),n.dispose()}),i),n.addEventListener(e,"transitionrun",(e=>{e.target===e.currentTarget&&n.dispose()}))}));let r=n.addEventListener(e,"transitionend",(e=>{e.target===e.currentTarget&&(t(),r())}))}else t();n.add((()=>t())),n.dispose}(e,(()=>(gt(e,...i),ht(e,...t.entered),l())))})),a.dispose}(s,n.current,"enter"===i.current,(()=>{t.dispose(),o.current(i.current)}))),t.dispose}),[t])}function wt(e=0){let[t,n]=(0,r.useState)(e),o=(0,r.useCallback)((e=>n((t=>t|e))),[t]),a=(0,r.useCallback)((e=>Boolean(t&e)),[t]),l=(0,r.useCallback)((e=>n((t=>t&~e))),[n]),i=(0,r.useCallback)((e=>n((t=>t^e))),[n]);return{flags:t,addFlag:o,hasFlag:a,removeFlag:l,toggleFlag:i}}function yt(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let _t=(0,r.createContext)(null);_t.displayName="TransitionContext";var Ct=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Ct||{});let xt=(0,r.createContext)(null);function Et(e){return"children"in e?Et(e.children):e.current.filter((({el:e})=>null!==e.current)).filter((({state:e})=>"visible"===e)).length>0}function It(e,t){let n=ie(e),o=(0,r.useRef)([]),a=vt(),l=We(),i=se(((e,t=R.Hidden)=>{let r=o.current.findIndex((({el:t})=>t===e));-1!==r&&(T(t,{[R.Unmount](){o.current.splice(r,1)},[R.Hidden](){o.current[r].state="hidden"}}),l.microTask((()=>{var e;!Et(o)&&a.current&&(null==(e=n.current)||e.call(n))})))})),s=se((e=>{let t=o.current.find((({el:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):o.current.push({el:e,state:"visible"}),()=>i(e,R.Unmount)})),c=(0,r.useRef)([]),u=(0,r.useRef)(Promise.resolve()),d=(0,r.useRef)({enter:[],leave:[],idle:[]}),p=se(((e,n,r)=>{c.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter((([t])=>t!==e))),null==t||t.chains.current[n].push([e,new Promise((e=>{c.current.push(e)}))]),null==t||t.chains.current[n].push([e,new Promise((e=>{Promise.all(d.current[n].map((([e,t])=>t))).then((()=>e()))}))]),"enter"===n?u.current=u.current.then((()=>null==t?void 0:t.wait.current)).then((()=>r(n))):r(n)})),m=se(((e,t,n)=>{Promise.all(d.current[t].splice(0).map((([e,t])=>t))).then((()=>{var e;null==(e=c.current.shift())||e()})).then((()=>n(t)))}));return(0,r.useMemo)((()=>({children:o,register:s,unregister:i,onStart:p,onStop:m,wait:u,chains:d})),[s,i,o,p,m,d,u])}function Tt(){}xt.displayName="NestingContext";let Nt=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function St(e){var t;let n={};for(let r of Nt)n[r]=null!=(t=e[r])?t:Tt;return n}let Rt=S.RenderStrategy,Pt=D((function(e,t){let{show:n,appear:o=!1,unmount:a,...l}=e,i=(0,r.useRef)(null),s=de(i,t);F();let c=Je();if(void 0===n&&null!==c&&(n=(c&Ke.Open)===Ke.Open),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[u,d]=(0,r.useState)(n?"visible":"hidden"),p=It((()=>{d("hidden")})),[m,f]=(0,r.useState)(!0),b=(0,r.useRef)([n]);H((()=>{!1!==m&&b.current[b.current.length-1]!==n&&(b.current.push(n),f(!1))}),[b,n]);let v=(0,r.useMemo)((()=>({show:n,appear:o,initial:m})),[n,o,m]);(0,r.useEffect)((()=>{if(n)d("visible");else if(Et(p)){let e=i.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&d("hidden")}else d("hidden")}),[n,p]);let h={unmount:a};return r.createElement(xt.Provider,{value:p},r.createElement(_t.Provider,{value:v},P({ourProps:{...h,as:r.Fragment,children:r.createElement($t,{ref:s,...h,...l})},theirProps:{},defaultTag:r.Fragment,features:Rt,visible:"visible"===u,name:"Transition"})))})),$t=D((function(e,t){let{beforeEnter:n,afterEnter:o,beforeLeave:a,afterLeave:l,enter:i,enterFrom:s,enterTo:c,entered:u,leave:d,leaveFrom:p,leaveTo:m,...f}=e,b=(0,r.useRef)(null),v=de(b,t),h=f.unmount?R.Unmount:R.Hidden,{show:g,appear:k,initial:w}=function(){let e=(0,r.useContext)(_t);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[y,_]=(0,r.useState)(g?"visible":"hidden"),C=function(){let e=(0,r.useContext)(xt);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:x,unregister:E}=C,N=(0,r.useRef)(null);(0,r.useEffect)((()=>x(b)),[x,b]),(0,r.useEffect)((()=>{if(h===R.Hidden&&b.current)return g&&"visible"!==y?void _("visible"):T(y,{hidden:()=>E(b),visible:()=>x(b)})}),[y,b,x,E,g,h]);let S=ie({enter:yt(i),enterFrom:yt(s),enterTo:yt(c),entered:yt(u),leave:yt(d),leaveFrom:yt(p),leaveTo:yt(m)}),$=function(e){let t=(0,r.useRef)(St(e));return(0,r.useEffect)((()=>{t.current=St(e)}),[e]),t}({beforeEnter:n,afterEnter:o,beforeLeave:a,afterLeave:l}),M=F();(0,r.useEffect)((()=>{if(M&&"visible"===y&&null===b.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[b,y,M]);let D=w&&!k,L=!M||D||N.current===g?"idle":g?"enter":"leave",A=wt(0),B=se((e=>T(e,{enter:()=>{A.addFlag(Ke.Opening),$.current.beforeEnter()},leave:()=>{A.addFlag(Ke.Closing),$.current.beforeLeave()},idle:()=>{}}))),O=se((e=>T(e,{enter:()=>{A.removeFlag(Ke.Opening),$.current.afterEnter()},leave:()=>{A.removeFlag(Ke.Closing),$.current.afterLeave()},idle:()=>{}}))),H=It((()=>{_("hidden"),E(b)}),C);kt({container:b,classes:S,direction:L,onStart:ie((e=>{H.onStart(b,e,B)})),onStop:ie((e=>{H.onStop(b,e,O),"leave"===e&&!Et(H)&&(_("hidden"),E(b))}))}),(0,r.useEffect)((()=>{D&&(h===R.Hidden?N.current=null:N.current=g)}),[g,D,y]);let V=f,W={ref:v};return k&&g&&j.isServer&&(V={...V,className:I(f.className,...S.current.enter,...S.current.enterFrom)}),r.createElement(xt.Provider,{value:H},r.createElement(Qe,{value:T(y,{visible:Ke.Open,hidden:Ke.Closed})|A.flags},P({ourProps:W,theirProps:V,defaultTag:"div",features:Rt,visible:"visible"===y,name:"Transition.Child"})))})),Mt=D((function(e,t){let n=null!==(0,r.useContext)(_t),o=null!==Je();return r.createElement(r.Fragment,null,!n&&o?r.createElement(Pt,{ref:t,...e}):r.createElement($t,{ref:t,...e}))})),Dt=Object.assign(Pt,{Child:Mt,Root:Pt});var Lt=n(8477),At=n(7500),Bt=n(826),Ot=n(2149);const jt=()=>{const{deviceType:e}=(0,b.useSelect)((e=>{const{__experimentalGetPreviewDeviceType:t}=e("core/edit-post")||!1;return t?{deviceType:t()}:{deviceType:null}}),[]);return e},Ht={Desktop:"Desktop",Tablet:"Tablet",Mobile:"Mobile"},Ft=({className:e="",devices:t=Object.values(Ht)})=>{const n=jt()||"Desktop",{__experimentalSetPreviewDeviceType:o}=(0,b.dispatch)("core/edit-post"),a=(0,r.useCallback)((e=>{o(Ht[e])}),[]),l=(e,t="h-4 w-4")=>{switch(e){case"Desktop":return(0,r.createElement)(Lt,{className:t,"aria-hidden":"true"});case"Tablet":return(0,r.createElement)(At,{className:t,"aria-hidden":"true"});case"Mobile":return(0,r.createElement)(Bt,{className:t,"aria-hidden":"true"});default:return null}};return(0,r.createElement)(bt,{as:"div",className:`wcbMyResponsiveToggle relative inline-block text-left ${e}`},(0,r.createElement)(bt.Button,{className:"wcbMyResponsiveToggle__button inline-flex w-full items-center justify-center rounded-md p-1 focus:outline-none focus-visible:ring-0 transition-colors text-slate-600 border border-slate-200 hover:border-slate-400",title:n},l(n),(0,r.createElement)(Ot,{className:"w-2.5 h-2.5 ml-1","aria-hidden":"true"})),(0,r.createElement)(Dt,{as:r.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95"},(0,r.createElement)(bt.Items,{className:"wcbMyResponsiveToggle__items absolute z-50 inset-x-0 mt-1 rounded-lg bg-white shadow-lg ring-1 ring-black/10 focus:outline-none"},(0,r.createElement)("div",{className:"p-1 space-y-0.5"},t.map(((e,t)=>(0,r.createElement)(bt.Item,{key:t+e},(({active:t})=>{const o=t||e===n;return(0,r.createElement)("button",{className:(o?"bg-sky-50 text-sky-600":"text-slate-800")+" group flex w-full items-center justify-center rounded-md py-1.5",onClick:t=>{a(e)},title:e},l(e))}))))))))},Vt=({children:e,className:t="mb-2",help:n,hasResponsive:o,devices:a})=>(0,r.createElement)("div",{className:`components-base-control__label font-medium uppercase text-[11px] ${t}`},(0,r.createElement)("div",{className:"wb-control-label flex items-center"},(0,r.createElement)("div",{className:"wb-base-control__label"},e),(0,r.createElement)("div",{className:"wb-base-control__responsive ml-1.5"},o&&(0,r.createElement)(Ft,{devices:a}))),!!n&&(0,r.createElement)("div",{className:"wb-base-help text-xs text-slate-500"},(0,r.createElement)("p",{className:"components-base-control__help"},n))),Wt=({className:e="",label:t=(0,l.__)("Video","boostify-blocks"),mediaId:n,mediaUrl:o,onChange:a})=>{const s=e=>{a({mediaId:e.id,mediaUrl:e.url})};return(0,r.createElement)("div",{className:`editor-post-featured-image w-full ${e}`},(0,r.createElement)(Vt,null,t),(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{onSelect:s,value:n,allowedTypes:["video"],render:({open:e})=>(0,r.createElement)(v.Button,{className:"h-auto rounded-lg ring-1 ring-black/10  flex items-center justify-center editor-post-featured-image__toggle hover:bg-slate-100",onClick:e},0==n&&(0,r.createElement)("div",{className:"text-center flex flex-col items-center justify-center"},(0,r.createElement)(v.Icon,{icon:He,className:"text-slate-700"}),(0,r.createElement)("span",{className:"mt-0.5"},(0,l.__)("Choose an video","boostify-blocks"))),!!o&&(0,r.createElement)(v.Icon,{icon:Fe}))})),0!==n&&(0,r.createElement)("div",{className:"flex justify-between gap-2 mt-2"},(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{title:(0,l.__)("Replace Video","boostify-blocks"),value:n,onSelect:s,allowedTypes:["video"],render:({open:e})=>(0,r.createElement)(Ve,{className:"flex-1 my-0 flex justify-center",onClick:e,variant:"secondary"},(0,l.__)("Replace","boostify-blocks"))})),(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(Ve,{title:(0,l.__)("Remove Video","boostify-blocks"),className:"flex-1 my-0",onClick:()=>{a({mediaId:0,mediaUrl:""})},isDestructive:!0},(0,l.__)("Remove","boostify-blocks")))))},zt=({className:e="text-gray-700",btnClass:t="ring-1 ring-neutral-200",defaultBtnClass:n="hover:bg-slate-100",imageData:o,onChange:a})=>{const{mediaId:s,mediaUrl:c,mediaSrcSet:u,sizes:d}=o,p=e=>{a({mediaId:e.id,mediaUrl:e.url,mediaSrcSet:`${e.url} ${e.width}w, ${e.sizes?.medium?.url} ${e.sizes?.medium?.width}w, ${e.sizes?.full?.url} ${e.sizes?.full?.width}w, ${e.sizes?.large?.url} ${e.sizes?.large?.width}w`,sizes:e.sizes})};return(0,r.createElement)("div",{className:`editor-post-featured-image w-full ${e}`},(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{onSelect:p,value:s,allowedTypes:["image"],render:({open:e})=>(0,r.createElement)(v.Button,{className:`h-auto rounded-lg text-inherit ${t} ${0==s?"editor-post-featured-image__toggle "+n:"editor-post-featured-image__preview"}`,onClick:e},0==s&&(0,r.createElement)("div",{className:"text-center flex flex-col items-center justify-center rounded-lg"},(0,r.createElement)(v.Icon,{icon:He,className:"text-inherit"}),(0,r.createElement)("span",{className:"mt-0.5"},(0,l.__)("Choose an image","boostify-blocks"))),!!c&&(0,r.createElement)("img",{src:c,className:"w-full block rounded-lg",sizes:"250px",srcSet:u||void 0}))})),0!==s&&(0,r.createElement)("div",{className:"flex justify-between gap-2 mt-2"},(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(i.MediaUpload,{title:(0,l.__)("Replace image","boostify-blocks"),value:s,onSelect:p,allowedTypes:["image"],render:({open:e})=>(0,r.createElement)(Ve,{className:"flex-1 my-0 flex justify-center",onClick:e,variant:"secondary"},(0,l.__)("Replace","boostify-blocks"))})),(0,r.createElement)(i.MediaUploadCheck,null,(0,r.createElement)(Ve,{className:"flex-1 my-0",onClick:()=>{a({mediaId:0,mediaUrl:"",mediaSrcSet:void 0})},isDestructive:!0},(0,l.__)("Remove","boostify-blocks")))))},Ut=({label:e="My select",hasResponsive:t,labelClass:n="flex-1",devices:o,...a})=>(0,r.createElement)("div",{className:"wcb-MySelect w-full flex justify-between items-center"},(0,r.createElement)(Vt,{className:n,hasResponsive:t,devices:o},e),(0,r.createElement)("div",{className:"flex-1"},(0,r.createElement)(v.SelectControl,{hideLabelFromVision:!0,...a}))),Gt=({imageData:e,setImageData:t,focalPoint:n,setFocalPoint:o,bgImageAttachment:a,setBgImageAttachment:i,bgImageRepeat:s,bgImageSize:c,setBgImageRepeat:u,setBgImageSize:d})=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelRow,{className:"w-full"},(0,r.createElement)("div",{className:"w-full"},(0,r.createElement)(Vt,{hasResponsive:!0},(0,l.__)("Image","boostify-blocks")),(0,r.createElement)(zt,{onChange:e=>t(e),imageData:e}))),e.mediaId?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelRow,{className:"w-full"},(0,r.createElement)("div",{className:"w-full "},(0,r.createElement)(Vt,{hasResponsive:!0},(0,l.__)("Image Position","boostify-blocks")),(0,r.createElement)(v.FocalPointPicker,{className:"mt-2.5",url:e.mediaUrl,value:n,onDragStart:o,onDrag:o,onChange:o}))),(0,r.createElement)(v.PanelRow,{className:"w-full "},(0,r.createElement)(Ut,{label:(0,l.__)("Attachment","boostify-blocks"),hasResponsive:!0,hideLabelFromVision:!0,options:_,defaultValue:a,value:a,onChange:e=>i(e||"local")})),(0,r.createElement)(v.PanelRow,{className:"w-full "},(0,r.createElement)(Ut,{label:(0,l.__)("Repeat","boostify-blocks"),hasResponsive:!0,hideLabelFromVision:!0,defaultValue:s,value:s,options:C,onChange:e=>u(e||"no-repeat")})),(0,r.createElement)(v.PanelRow,{className:"w-full "},(0,r.createElement)(Ut,{label:(0,l.__)("Size","boostify-blocks"),hasResponsive:!0,hideLabelFromVision:!0,defaultValue:c,value:c,options:x,onChange:e=>d(e||"cover")}))):null),qt=[{name:"color",icon:g},{name:"gradient",icon:k},{name:"image",icon:w},{name:"video",icon:y}],Zt=["none","color","gradient"],Kt={bgImageAttachment:{Desktop:"local"},bgImageRepeat:{Desktop:"no-repeat"},bgImageSize:{Desktop:"cover"},bgType:"color",color:"",focalPoint:{Desktop:{x:.5,y:.5}},gradient:"linear-gradient(104deg, rgb(93, 206, 231) 0%, rgb(244, 119, 127) 100%)",imageData:{Desktop:{mediaId:0,mediaUrl:"",mediaSrcSet:void 0}},overlayColor:"#9437374d",overlayGradient:"linear-gradient(104deg,rgba(93,207,232,0.72) 0%,rgba(245,120,128,0.69) 100%)",overlayType:"none",videoData:{mediaId:0,mediaUrl:""}},Jt=({className:e="",backgroundControl:t=Kt,setAttrs__backgroundControl:n,bgTypesPlans:o=qt})=>{const a=jt()||"Desktop",{bgImageAttachment:i,bgImageRepeat:s,bgImageSize:c,bgType:u,color:d,focalPoint:p,gradient:m,imageData:f,overlayColor:b,overlayGradient:g,overlayType:k,videoData:w}=t,y=i[a]||i.Tablet||i.Desktop,_=s[a]||s.Tablet||s.Desktop,C=c[a]||c.Tablet||c.Desktop,x=p[a]||p.Tablet||p.Desktop,I=f[a]||f.Tablet||f.Desktop,T=e=>{n({...t,color:e})},N=e=>{n({...t,gradient:e})},S=e=>{n({...t,imageData:{...f,[a]:e}})},R=e=>{n({...t,focalPoint:{...p,[a]:e}})},P=e=>{n({...t,bgImageSize:{...c,[a]:e}})},$=e=>{n({...t,bgImageRepeat:{...s,[a]:e}})},M=e=>{n({...t,bgImageAttachment:{...i,[a]:e}})},D=e=>{n({...t,videoData:e})},L=e=>{n({...t,overlayGradient:e})},A=e=>{n({...t,overlayColor:e})},B=e=>{n({...t,overlayType:Zt[e]})},O=()=>(0,r.createElement)(v.PanelRow,{className:"w-full "},(0,r.createElement)(Be,{tabs:Zt,label:(0,l.__)("Overlay Type","boostify-blocks"),tabSelected:k,onChangeSelected:B},(0,r.createElement)(Ae.Panel,{className:"absolute -inset-1.5 bg-white z-10"}),(0,r.createElement)(Ae.Panel,null,(0,r.createElement)(h,{onChange:A,color:b})),(0,r.createElement)(Ae.Panel,null,(0,r.createElement)(v.GradientPicker,{__nextHasNoMargin:!0,value:g,onChange:L,gradients:E}))));return(0,r.createElement)("div",{className:e},(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelRow,{className:"w-full flex justify-between items-center"},(0,r.createElement)("p",{className:"flex-1"},(0,l.__)("Type","boostify-blocks")),(0,r.createElement)("div",{className:"flex gap-1"},o.map((e=>{const o=e.name===u;return(0,r.createElement)("div",{key:e.name,className:"p-2 rounded-lg border  "+(o?"text-sky-600 bg-sky-50 border-sky-400":"border-slate-300 hover:border-slate-500 cursor-pointer"),onClick:()=>{return r=e.name,void n({...t,bgType:r});var r},title:e.name},(0,r.createElement)(e.icon,{className:"w-4 h-4"}))})))),(()=>{switch(u){case"color":return(0,r.createElement)(v.PanelRow,{className:"w-full pt-2"},(0,r.createElement)(h,{onChange:T,color:d}));case"gradient":return(0,r.createElement)(v.PanelRow,{className:"w-full pt-2.5"},(0,r.createElement)(v.GradientPicker,{__nextHasNoMargin:!0,value:m,onChange:N,gradients:E}));case"image":return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Gt,{bgImageRepeat:_,focalPoint:x,imageData:I,bgImageSize:C,bgImageAttachment:y,setBgImageAttachment:M,setBgImageRepeat:$,setBgImageSize:P,setFocalPoint:R,setImageData:S}),I.mediaId?(0,r.createElement)(r.Fragment,null,O()):null);case"video":return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelRow,{className:"w-full"},(0,r.createElement)(Wt,{mediaId:w.mediaId,mediaUrl:w.mediaUrl,onChange:D})),w.mediaId?(0,r.createElement)(r.Fragment,null,O()):null);default:return null}})()))},Qt=[{name:"General",title:(0,r.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,r.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",className:"w-5 h-5 fill-none"},(0,r.createElement)("path",{d:"M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,r.createElement)("div",null,(0,l.__)("General","boostify-blocks")))},{name:"Styles",title:(0,r.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,r.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,r.createElement)("path",{d:"M21.47 19V5C21.47 3 20.47 2 18.47 2H14.47C12.47 2 11.47 3 11.47 5V19C11.47 21 12.47 22 14.47 22H18.47C20.47 22 21.47 21 21.47 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M11.47 6H16.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M11.47 18H15.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M11.47 13.95L16.47 14",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M11.47 10H14.47",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M5.49 2C3.86 2 2.53 3.33 2.53 4.95V17.91C2.53 18.36 2.72 19.04 2.95 19.43L3.77 20.79C4.71 22.36 6.26 22.36 7.2 20.79L8.02 19.43C8.25 19.04 8.44 18.36 8.44 17.91V4.95C8.44 3.33 7.11 2 5.49 2Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),(0,r.createElement)("path",{d:"M8.44 7H2.53",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})),(0,r.createElement)("div",null,(0,l.__)("Styles","boostify-blocks")))},{name:"Advances",title:(0,r.createElement)("div",{className:"flex flex-col items-center justify-center space-y-0.5"},(0,r.createElement)("svg",{className:"w-5 h-5 fill-none",viewBox:"0 0 24 24",fill:"none"},(0,r.createElement)("path",{d:"M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z",stroke:"currentColor",strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"})),(0,r.createElement)("div",null,(0,l.__)("Advances","boostify-blocks")))}],Yt=(0,r.memo)((({renderTabPanels:e,tabs:t=Qt,uniqueId:n="",tabDefaultActive:o="General",onChangeActive:a})=>{(0,r.useEffect)((()=>{setTimeout((()=>{const e=document.querySelector(".components-panel__body.is-opened");e&&e.scrollIntoView({behavior:"smooth"})}),500)}),[]);const l=()=>{const e=document.querySelector(".components-panel__body.block-editor-block-inspector__advanced"),t=document.querySelector(".HOCInspectorControls__ative-tab"),n=!!t?.id.includes("-Advances");e&&(e.style.display=n?"block":"none")};return(0,r.createElement)(i.InspectorControls,null,(0,r.createElement)(v.TabPanel,{className:`wcb-inspectorControls__panel ${n}`,activeClass:"HOCInspectorControls__ative-tab active-tab",tabs:t,onSelect:e=>{a&&a(e),setTimeout((()=>{l()}),100)},initialTabName:o},(t=>(0,r.createElement)("div",{key:t.name,className:t.name},e(t)))),(n&&setTimeout((()=>{l()}),100),null))})),Xt={mainSettings:void 0,hoverColor:void 0,radius:{Desktop:"0",Tablet:"0",Mobile:"0"}},en=({className:e="space-y-4",borderControl:t=Xt,setAttrs__border:n})=>{const o=jt()||"Desktop",{mainSettings:a,hoverColor:s,radius:c}=t,u=c[o]||c.Tablet||c.Desktop;return(0,r.createElement)("div",{className:e},(0,r.createElement)(v.__experimentalBorderBoxControl,{label:(0,l.__)("Border"),onChange:e=>{n({...t,mainSettings:e})},value:a,colors:[],enableAlpha:!0,popoverOffset:40,popoverPlacement:"left-start",__experimentalHasMultipleOrigins:!0,__experimentalIsRenderedInSidebar:!0,size:"__unstable-large",className:"wcb-BorderBoxControl"}),(0,r.createElement)(h,{label:(0,l.__)("Hover border color","boostify-blocks"),onChange:e=>{n({...t,hoverColor:e})},color:s}),(0,r.createElement)("div",{className:"MyBorderControl__BorderRadiusControl"},(0,r.createElement)(Vt,{className:"mb-2",hasResponsive:!0},(0,l.__)("Border radius","boostify-blocks")),(0,r.createElement)(i.__experimentalBorderRadiusControl,{values:u,onChange:e=>{(e=>{const r=c.Desktop===c.Tablet&&c.Desktop===c.Mobile;"Desktop"!==o||(void 0!==c.Tablet&&"0"!==c.Tablet||void 0!==c.Mobile&&"0"!==c.Mobile)&&!r?n({...t,radius:{...c,[o]:e}}):n({...t,radius:{Desktop:e,Tablet:e,Mobile:e}})})(e)},label:""})))};let tn=(0,r.createContext)(null);function nn(){let e=(0,r.useContext)(tn);if(null===e){let e=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,nn),e}return e}function rn(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=se((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(tn.Provider,{value:o},e.children)}),[t])]}let on=D((function(e,t){let n=W(),{id:r=`headlessui-label-${n}`,passive:o=!1,...a}=e,l=nn(),i=de(t);H((()=>l.register(r)),[r,l.register]);let s={ref:i,...l.props,id:r};return o&&("onClick"in s&&(delete s.htmlFor,delete s.onClick),"onClick"in a&&delete a.onClick),P({ourProps:s,theirProps:a,slot:l.slot||{},defaultTag:"label",name:l.name||"Label"})})),an=Object.assign(on,{}),ln=(0,r.createContext)(null);function sn(){let e=(0,r.useContext)(ln);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,sn),e}return e}function cn(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=se((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n}))))),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(ln.Provider,{value:o},e.children)}),[t])]}let un=D((function(e,t){let n=W(),{id:r=`headlessui-description-${n}`,...o}=e,a=sn(),l=de(t);return H((()=>a.register(r)),[r,a.register]),P({ourProps:{ref:l,...a.props,id:r},theirProps:o,slot:a.slot||{},defaultTag:"p",name:a.name||"Description"})})),dn=Object.assign(un,{});function pn(e={},t=null,n=[]){for(let[r,o]of Object.entries(e))fn(n,mn(t,r),o);return n}function mn(e,t){return e?e+"["+t+"]":t}function fn(e,t,n){if(Array.isArray(n))for(let[r,o]of n.entries())fn(e,mn(t,r.toString()),o);else n instanceof Date?e.push([t,n.toISOString()]):"boolean"==typeof n?e.push([t,n?"1":"0"]):"string"==typeof n?e.push([t,n]):"number"==typeof n?e.push([t,`${n}`]):null==n?e.push([t,""]):pn(n,t,e)}var bn=(e=>(e[e.RegisterOption=0]="RegisterOption",e[e.UnregisterOption=1]="UnregisterOption",e))(bn||{});let vn={0(e,t){let n=[...e.options,{id:t.id,element:t.element,propsRef:t.propsRef}];return{...e,options:oe(n,(e=>e.element.current))}},1(e,t){let n=e.options.slice(),r=e.options.findIndex((e=>e.id===t.id));return-1===r?e:(n.splice(r,1),{...e,options:n})}},hn=(0,r.createContext)(null);function gn(e){let t=(0,r.useContext)(hn);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,gn),t}return t}hn.displayName="RadioGroupDataContext";let kn=(0,r.createContext)(null);function wn(e){let t=(0,r.useContext)(kn);if(null===t){let t=new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,wn),t}return t}function yn(e,t){return T(t.type,vn,e,t)}kn.displayName="RadioGroupActionsContext";var Cn=(e=>(e[e.Empty=1]="Empty",e[e.Active=2]="Active",e))(Cn||{});let xn=D((function(e,t){let n=W(),{id:o=`headlessui-radiogroup-${n}`,value:a,defaultValue:l,name:i,onChange:s,by:c=(e,t)=>e===t,disabled:u=!1,...d}=e,p=se("string"==typeof c?(e,t)=>{let n=c;return(null==e?void 0:e[n])===(null==t?void 0:t[n])}:c),[m,f]=(0,r.useReducer)(yn,{options:[]}),b=m.options,[v,h]=rn(),[g,k]=cn(),w=(0,r.useRef)(null),y=de(w,t),[_,C]=function(e,t,n){let[o,a]=(0,r.useState)(n),l=void 0!==e,i=(0,r.useRef)(l),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||i.current||s.current?!l&&i.current&&!c.current&&(c.current=!0,i.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,i.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:o,se((e=>(l||a(e),null==t?void 0:t(e))))]}(a,s,l),x=(0,r.useMemo)((()=>b.find((e=>!e.propsRef.current.disabled))),[b]),E=(0,r.useMemo)((()=>b.some((e=>p(e.propsRef.current.value,_)))),[b,_]),I=se((e=>{var t;if(u||p(e,_))return!1;let n=null==(t=b.find((t=>p(t.propsRef.current.value,e))))?void 0:t.propsRef.current;return!(null!=n&&n.disabled||(null==C||C(e),0))}));qe({container:w.current,accept:e=>"radio"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let T=se((e=>{let t=w.current;if(!t)return;let n=q(t),r=b.filter((e=>!1===e.propsRef.current.disabled)).map((e=>e.element.current));switch(e.key){case z.Enter:!function(e){var t;let n=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(n)for(let e of n.elements)if("INPUT"===e.tagName&&"submit"===e.type||"BUTTON"===e.tagName&&"submit"===e.type||"INPUT"===e.nodeName&&"image"===e.type)return void e.click()}(e.currentTarget);break;case z.ArrowLeft:case z.ArrowUp:if(e.preventDefault(),e.stopPropagation(),le(r,J.Previous|J.WrapAround)===Q.Success){let e=b.find((e=>e.element.current===(null==n?void 0:n.activeElement)));e&&I(e.propsRef.current.value)}break;case z.ArrowRight:case z.ArrowDown:if(e.preventDefault(),e.stopPropagation(),le(r,J.Next|J.WrapAround)===Q.Success){let e=b.find((e=>e.element.current===(null==n?void 0:n.activeElement)));e&&I(e.propsRef.current.value)}break;case z.Space:{e.preventDefault(),e.stopPropagation();let t=b.find((e=>e.element.current===(null==n?void 0:n.activeElement)));t&&I(t.propsRef.current.value)}}})),N=se((e=>(f({type:0,...e}),()=>f({type:1,id:e.id})))),S=(0,r.useMemo)((()=>({value:_,firstOption:x,containsCheckedOption:E,disabled:u,compare:p,...m})),[_,x,E,u,p,m]),R=(0,r.useMemo)((()=>({registerOption:N,change:I})),[N,I]),$={ref:y,id:o,role:"radiogroup","aria-labelledby":v,"aria-describedby":g,onKeyDown:T},M=(0,r.useMemo)((()=>({value:_})),[_]),D=(0,r.useRef)(null),A=We();return(0,r.useEffect)((()=>{D.current&&void 0!==l&&A.addEventListener(D.current,"reset",(()=>{I(l)}))}),[D,I]),r.createElement(k,{name:"RadioGroup.Description"},r.createElement(h,{name:"RadioGroup.Label"},r.createElement(kn.Provider,{value:R},r.createElement(hn.Provider,{value:S},null!=i&&null!=_&&pn({[i]:_}).map((([e,t],n)=>r.createElement(be,{features:fe.Hidden,ref:0===n?e=>{var t;D.current=null!=(t=null==e?void 0:e.closest("form"))?t:null}:void 0,...L({key:e,as:"input",type:"radio",checked:null!=t,hidden:!0,readOnly:!0,name:e,value:t})}))),P({ourProps:$,theirProps:d,slot:M,defaultTag:"div",name:"RadioGroup"})))))})),En=D((function(e,t){var n;let o=W(),{id:a=`headlessui-radiogroup-option-${o}`,value:l,disabled:i=!1,...s}=e,c=(0,r.useRef)(null),u=de(c,t),[d,p]=rn(),[m,f]=cn(),{addFlag:b,removeFlag:v,hasFlag:h}=wt(1),g=ie({value:l,disabled:i}),k=gn("RadioGroup.Option"),w=wn("RadioGroup.Option");H((()=>w.registerOption({id:a,element:c,propsRef:g})),[a,w,c,e]);let y=se((e=>{var t;if(Ue(e.currentTarget))return e.preventDefault();w.change(l)&&(b(2),null==(t=c.current)||t.focus())})),_=se((e=>{if(Ue(e.currentTarget))return e.preventDefault();b(2)})),C=se((()=>v(2))),x=(null==(n=k.firstOption)?void 0:n.id)===a,E=k.disabled||i,I=k.compare(k.value,l),T={ref:u,id:a,role:"radio","aria-checked":I?"true":"false","aria-labelledby":d,"aria-describedby":m,"aria-disabled":!!E||void 0,tabIndex:E?-1:I||!k.containsCheckedOption&&x?0:-1,onClick:E?void 0:y,onFocus:E?void 0:_,onBlur:E?void 0:C},N=(0,r.useMemo)((()=>({checked:I,disabled:E,active:h(2)})),[I,E,h]);return r.createElement(f,{name:"RadioGroup.Description"},r.createElement(p,{name:"RadioGroup.Label"},P({ourProps:T,theirProps:s,slot:N,defaultTag:"div",name:"RadioGroup.Option"})))})),In=Object.assign(xn,{Option:En,Label:an,Description:dn});const Tn=function(e){return(0,r.createElement)("svg",{viewBox:"0 0 24 24",fill:"none",...e},(0,r.createElement)("circle",{cx:12,cy:12,r:12,fill:"currentColor",opacity:"0.2"}),(0,r.createElement)("path",{d:"M7 13l3 3 7-7",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))};var Nn;let Sn=null!=(Nn=r.startTransition)?Nn:function(e){e()};var Rn=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Rn||{}),Pn=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(Pn||{});let $n={0:e=>({...e,disclosureState:T(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},Mn=(0,r.createContext)(null);function Dn(e){let t=(0,r.useContext)(Mn);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Dn),t}return t}Mn.displayName="DisclosureContext";let Ln=(0,r.createContext)(null);function An(e){let t=(0,r.useContext)(Ln);if(null===t){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,An),t}return t}Ln.displayName="DisclosureAPIContext";let Bn=(0,r.createContext)(null);function On(e,t){return T(t.type,$n,e,t)}Bn.displayName="DisclosurePanelContext";let jn=r.Fragment,Hn=S.RenderStrategy|S.Static,Fn=D((function(e,t){let{defaultOpen:n=!1,...o}=e,a=(0,r.useRef)(null),l=de(t,ue((e=>{a.current=e}),void 0===e.as||e.as===r.Fragment)),i=(0,r.useRef)(null),s=(0,r.useRef)(null),c=(0,r.useReducer)(On,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:u,buttonId:d},p]=c,m=se((e=>{p({type:1});let t=q(a);if(!t||!d)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(d):t.getElementById(d);null==n||n.focus()})),f=(0,r.useMemo)((()=>({close:m})),[m]),b=(0,r.useMemo)((()=>({open:0===u,close:m})),[u,m]),v={ref:l};return r.createElement(Mn.Provider,{value:c},r.createElement(Ln.Provider,{value:f},r.createElement(Qe,{value:T(u,{0:Ke.Open,1:Ke.Closed})},P({ourProps:v,theirProps:o,slot:b,defaultTag:jn,name:"Disclosure"}))))})),Vn=D((function(e,t){let n=W(),{id:o=`headlessui-disclosure-button-${n}`,...a}=e,[l,i]=Dn("Disclosure.Button"),s=(0,r.useContext)(Bn),c=null!==s&&s===l.panelId,u=(0,r.useRef)(null),d=de(u,t,c?null:l.buttonRef);(0,r.useEffect)((()=>{if(!c)return i({type:2,buttonId:o}),()=>{i({type:2,buttonId:null})}}),[o,i,c]);let p=se((e=>{var t;if(c){if(1===l.disclosureState)return;switch(e.key){case z.Space:case z.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=l.buttonRef.current)||t.focus()}}else switch(e.key){case z.Space:case z.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}})),m=se((e=>{e.key===z.Space&&e.preventDefault()})),f=se((t=>{var n;Ue(t.currentTarget)||e.disabled||(c?(i({type:0}),null==(n=l.buttonRef.current)||n.focus()):i({type:0}))})),b=(0,r.useMemo)((()=>({open:0===l.disclosureState})),[l]),v=me(e,u);return P({ourProps:c?{ref:d,type:v,onKeyDown:p,onClick:f}:{ref:d,id:o,type:v,"aria-expanded":e.disabled?void 0:0===l.disclosureState,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:p,onKeyUp:m,onClick:f},theirProps:a,slot:b,defaultTag:"button",name:"Disclosure.Button"})})),Wn=D((function(e,t){let n=W(),{id:o=`headlessui-disclosure-panel-${n}`,...a}=e,[l,i]=Dn("Disclosure.Panel"),{close:s}=An("Disclosure.Panel"),c=de(t,l.panelRef,(e=>{Sn((()=>i({type:e?4:5})))}));(0,r.useEffect)((()=>(i({type:3,panelId:o}),()=>{i({type:3,panelId:null})})),[o,i]);let u=Je(),d=null!==u?(u&Ke.Open)===Ke.Open:0===l.disclosureState,p=(0,r.useMemo)((()=>({open:0===l.disclosureState,close:s})),[l,s]),m={ref:c,id:o};return r.createElement(Bn.Provider,{value:l.panelId},P({ourProps:m,theirProps:a,slot:p,defaultTag:"div",features:Hn,visible:d,name:"Disclosure.Panel"}))})),zn=Object.assign(Fn,{Button:Vn,Panel:Wn});var Un=n(1070);const Gn=({className:e="space-y-3.5",label:t="Customize",children:n,defaultOpen:o,as:a,hasResponsive:i=!1,isDisableButton:s=!1})=>(0,r.createElement)(zn,{defaultOpen:o,as:a},(({open:o})=>(0,r.createElement)("div",{className:o?"ring-2 ring-offset-1 rounded-lg ring-purple-200 mb-4":""},(0,r.createElement)(zn.Button,{className:"flex w-full justify-between items-center rounded-lg bg-purple-100 px-3 py-2.5 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 "+(o?"rounded-b-none":""),disabled:s},(0,r.createElement)(Vt,{hasResponsive:i,className:"MyDisclosure__labelControl"},(0,l.__)(t,"boostify-blocks")),o?(0,r.createElement)(Un,{className:"w-5 h-5 text-purple-900"}):(0,r.createElement)("svg",{className:"w-4 h-4 text-purple-900",viewBox:"0 0 24 24",fill:"none"},(0,r.createElement)("path",{d:"M13.26 3.59997L5.04997 12.29C4.73997 12.62 4.43997 13.27 4.37997 13.72L4.00997 16.96C3.87997 18.13 4.71997 18.93 5.87997 18.73L9.09997 18.18C9.54997 18.1 10.18 17.77 10.49 17.43L18.7 8.73997C20.12 7.23997 20.76 5.52997 18.55 3.43997C16.35 1.36997 14.68 2.09997 13.26 3.59997Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.createElement)("path",{d:"M11.89 5.05005C12.32 7.81005 14.56 9.92005 17.34 10.2",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}),(0,r.createElement)("path",{d:"M3 22H21",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecap":"round","stroke-linejoin":"round"}))),(0,r.createElement)(zn.Panel,{className:"px-3 pt-4 pb-3 text-sm text-gray-600 rounded-b-lg bg-purple-50/20"},(0,r.createElement)("div",{className:e},n))))),qn=({onClick:e,className:t="text-slate-700",isSmall:n=!0,...o})=>(0,r.createElement)(v.Button,{className:t,onClick:e,icon:(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"w-5 h-5","aria-hidden":"true",focusable:"false"},(0,r.createElement)("path",{d:"M12 4V2.2L9 4.8l3 2.5V5.5c3.6 0 6.5 2.9 6.5 6.5 0 2.9-1.9 5.3-4.5 6.2v.2l-.1-.2c-.4.1-.7.2-1.1.2l.2 1.5c.3 0 .6-.1 1-.2 3.5-.9 6-4 6-7.7 0-4.4-3.6-8-8-8zm-7.9 7l1.5.2c.1-1.2.5-2.3 1.2-3.2l-1.1-.9C4.8 8.2 4.3 9.6 4.1 11zm1.5 1.8l-1.5.2c.1.7.3 1.4.5 2 .3.7.6 1.3 1 1.8l1.2-.8c-.3-.5-.6-1-.8-1.5s-.4-1.1-.4-1.7zm1.5 5.5c1.1.9 2.4 1.4 3.8 1.6l.2-1.5c-1.1-.1-2.2-.5-3.1-1.2l-.9 1.1z"})),isSmall:n,...o}),Zn=["shadow-sm","shadow","shadow-md","shadow-lg","shadow-xl","shadow-2xl","shadow-inner"],Kn={Normal:{color:"",presetClass:"",blur:0,horizontal:0,spread:0,vertical:0,position:"outset"},Hover:{color:"",presetClass:"",blur:0,horizontal:0,spread:0,vertical:0,position:"outset"}},Jn=["outset","inset"],Qn=[{name:"Normal",title:(0,l.__)("Normal","boostify-blocks")},{name:"Hover",title:(0,l.__)("Hover","boostify-blocks")}],Yn=({className:e="",boxShadowControl:t=Kn,setAttrs__boxShadow:n})=>{const[o,a]=(0,r.useState)("Normal"),{color:i,presetClass:s,horizontal:c,vertical:u,blur:d,spread:p,position:m}=t[o],f=e=>{n({...t,[o]:{...t[o],presetClass:e}})},b=e=>{n({...t,[o]:{...t[o],color:e}})},g=e=>{n({...t,[o]:{...t[o],position:e,presetClass:""}})},k=e=>{n({...t,[o]:{...t[o],horizontal:e,presetClass:""}})},w=e=>{n({...t,[o]:{...t[o],vertical:e,presetClass:""}})},y=e=>{n({...t,[o]:{...t[o],blur:e,presetClass:""}})},_=e=>{n({...t,[o]:{...t[o],spread:e,presetClass:""}})};return(0,r.createElement)(v.TabPanel,{className:`wcb-bodyControls__panel ${e}`,activeClass:"active-tab",onSelect:e=>a(e),initialTabName:"Normal",tabs:Qn},(e=>(0,r.createElement)("div",{className:"space-y-5"},(0,r.createElement)(In,{value:s,onChange:f},(0,r.createElement)(In.Label,{className:"relative flex items-center justify-between"},(0,r.createElement)("span",null,(0,l.__)("Select Preset","boostify-blocks")),(0,r.createElement)(qn,{onClick:()=>f("")})),(0,r.createElement)("div",{className:"relative p-3 bg-slate-50 mt-3 rounded-lg"},(0,r.createElement)("div",{className:"absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"}),(0,r.createElement)("div",{className:"relative grid grid-cols-3 gap-3 "},Zn.map((e=>(0,r.createElement)(In.Option,{key:e,value:e},(({checked:t})=>(0,r.createElement)("div",{className:`${e} flex items-center justify-center w-full h-20 cursor-pointer rounded-lg ${t?"bg-sky-50 ":"bg-white"} ${"shadow-inner"===e?"ring-1 ring-black/5":""}`},t&&(0,r.createElement)("div",{className:"shrink-0 text-sky-500"},(0,r.createElement)(Tn,{className:"h-6 w-6"})))))))))),(0,r.createElement)(h,{label:(0,l.__)("Color","boostify-blocks"),onChange:b,color:i}),(0,r.createElement)(Gn,null,(0,r.createElement)(v.RangeControl,{label:(0,l.__)("Horizontal","boostify-blocks"),className:"mb-0",value:c,onChange:k,min:-100,max:100}),(0,r.createElement)(v.RangeControl,{label:(0,l.__)("Vertical","boostify-blocks"),value:u,onChange:w,min:-100,max:100}),(0,r.createElement)(v.RangeControl,{label:(0,l.__)("Blur","boostify-blocks"),value:d,onChange:y,min:0,max:100}),(0,r.createElement)(v.RangeControl,{label:(0,l.__)("Spread","boostify-blocks"),value:p,onChange:_,min:-100,max:100}),(0,r.createElement)("div",{className:"flex items-center justify-between"},(0,r.createElement)("p",null,(0,l.__)("Position","boostify-blocks")),(0,r.createElement)(v.__experimentalRadioGroup,{onChange:g,checked:m},Jn.map((e=>(0,r.createElement)(v.__experimentalRadio,{value:e,key:e,className:"capitalize"},e)))))))))},Xn={colunmGap:{Desktop:"1.5rem"},rowGap:{Desktop:"1.5rem"},margin:{Desktop:{top:"",left:"",right:"",bottom:""}},padding:{Desktop:{top:"1rem",left:"1rem",right:"1rem",bottom:"1rem"}}},er={px:{max:1e3,steps:1},"%":{max:100,steps:1},vw:{max:100,steps:1},vh:{max:100,steps:1},em:{max:50,steps:.1},rm:{max:50,steps:.1},rem:{max:50,steps:.1}},tr={px:{max:2e3,steps:1},"%":{max:100,steps:1},vw:{max:100,steps:1},vh:{max:100,steps:1},em:{max:100,steps:.1},rm:{max:100,steps:.1},rem:{max:100,steps:.1}},nr=({value:e="10px",onChange:t,minCustomValue:n=0,units:o=ar,className:a="",customUnitsValueSettings:l=er})=>{const i=(0,Oe.useMemo)((()=>(0,v.__experimentalParseQuantityAndUnitFromRawValue)(e)),[e])[1]||o[0].value,s=parseFloat(null!=e?e:"10");return(0,r.createElement)("div",{className:`${a} flex items-center space-x-2.5`},(0,r.createElement)("div",{className:"flex-[1.5]"},(0,r.createElement)(v.RangeControl,{value:s,min:n,max:l[i].max,step:l[i].steps,withInputField:!1,onChange:e=>{const n=[e,i].join("");t(n)},className:"m-0"})),(0,r.createElement)("div",{className:"flex-1"},(0,r.createElement)(v.__experimentalUnitControl,{onChange:(e,...n)=>{t(e)},placeholder:`${parseInt(e||"")}`,value:e,units:o,min:n,hideLabelFromVision:!0})))},rr=({className:e="",label:t=(0,l.__)("Margin bottom","boostify-blocks"),hasResponsive:n=!0,units:o,minCustomValue:a,value:i="1rem",onChange:s=()=>{},customUnitsValueSettings:c})=>(0,r.createElement)("div",{className:`MySpacingSizesControl ${e}`},(0,r.createElement)(Vt,{hasResponsive:n},t),(0,r.createElement)(nr,{value:i,onChange:s,minCustomValue:a,units:o,customUnitsValueSettings:c})),or=function(e,t){var n,r;const o=e?.Desktop,a=null!==(n=e?.Tablet)&&void 0!==n?n:o,l=null!==(r=e?.Mobile)&&void 0!==r?r:a;let i;return t&&(i="Desktop"===t?o:"Tablet"===t?a:l),{value_Desktop:null!=o?o:null,value_Tablet:null!=a?a:null,value_Mobile:null!=l?l:null,currentDeviceValue:i}},ar=[{value:"px",label:"px",default:32,step:1},{value:"rem",label:"rem",default:2,step:.01},{value:"em",label:"em",default:2,step:.01},{value:"%",label:"%",default:50,step:.1}],lr=[{value:"px",label:"px",default:32,step:1},{value:"rem",label:"rem",default:2,step:.01},{value:"em",label:"em",default:2,step:.01},{value:"%",label:"%",default:20,step:.1},{value:"vw",label:"vw",default:20,step:.1}],ir=[{value:"px",label:"px",default:32,step:1},{value:"rem",label:"rem",default:2,step:.01},{value:"em",label:"em",default:2,step:.01},{value:"%",label:"%",default:20,step:.1},{value:"vh",label:"vh",default:20,step:.1}],sr=({className:e="space-y-5",dimensionControl:t=Xn,setAttrs__dimensions:n})=>{const o=jt()||"Desktop",{colunmGap:a,rowGap:i,margin:s,padding:c}=t,{currentDeviceValue:u}=or(a,o),{currentDeviceValue:d}=or(i,o),{currentDeviceValue:p}=or(s,o),{currentDeviceValue:m}=or(c,o);return(0,r.createElement)("div",{className:e},(0,r.createElement)(rr,{onChange:e=>{n({...t,rowGap:{...i,[o]:e}})},value:d||"0",label:(0,l.__)("Row Gap","boostify-blocks")}),(0,r.createElement)(rr,{onChange:e=>{n({...t,colunmGap:{...a,[o]:e}})},value:u||"0",label:(0,l.__)("Column Gap","boostify-blocks")}),(0,r.createElement)(v.__experimentalBoxControl,{label:(0,r.createElement)(Vt,{className:"",hasResponsive:!0},(0,l.__)("Padding","boostify-blocks")),values:m,onChange:e=>{n({...t,padding:{...c,[o]:e}})}}),(0,r.createElement)(v.__experimentalBoxControl,{label:(0,r.createElement)(Vt,{className:"",hasResponsive:!0},(0,l.__)("Margin","boostify-blocks")),values:p,onChange:e=>{n({...t,margin:{...s,[o]:e}})},inputProps:{min:-2e3}}))},cr=[{name:"left",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 9.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 19.5H12.47" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"center",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 9.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M7.26001 19.5H16.74" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'},{name:"right",icon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t<path d="M3 4.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 9.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M3 14.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t<path d="M11.53 19.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n\t\t</svg>\n\t\t'}],ur=function({onChange:e=()=>{},value:t,className:n="",plans:o=cr,label:a=(0,l.__)("Alignment","boostify-blocks"),hasResponsive:i=!0,isWrap:s=!1,labelClassName:c,contentClassName:u="mt-3"}){const[d,p]=(0,r.useState)(t||o[0].name);return(0,r.useEffect)((()=>{d!==t&&p(t||"")}),[t]),(0,r.createElement)(In,{className:n,value:d,onChange:t=>{p(t),e(t)}},(0,r.createElement)(In.Label,{className:""},(0,r.createElement)(Vt,{className:c,hasResponsive:i},a)),(0,r.createElement)("div",{className:`${u} relative flex gap-1 ${s?"flex-wrap":""}`},o.map((e=>(0,r.createElement)(In.Option,{key:e.name,value:e.name,as:r.Fragment},(({checked:t})=>(0,r.createElement)("div",{className:"relative flex flex-1 basis-12 items-center justify-center p-1.5 max-w-xs cursor-pointer bg-white border rounded-lg "+(t?"bg-sky-50 border-sky-400 text-sky-500":"text-neutral-500 border-slate-300 hover:border-slate-500")},(0,r.createElement)(v.Tooltip,{position:"top center",delay:400,text:e.name.charAt(0).toUpperCase()+e.name.slice(1)},(0,r.createElement)("div",{className:"absolute inset-0 z-[1]"})),(0,r.createElement)("div",{className:"text-xs leading-5",dangerouslySetInnerHTML:{__html:e.icon}}))))))))},dr=(window.jQuery,e=>{const t=e?.blocksEditorSpacing,n=""==t?0:t,r=((e="0px")=>`\n  /* Desktop */\n  .edit-post-visual-editor .editor-styles-wrapper .edit-post-visual-editor__post-title-wrapper\n    > * + *:not(p),\n  .edit-post-visual-editor .editor-styles-wrapper\n    .block-editor-block-list__layout.is-root-container\n    > * + *:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-root-container.wp-site-blocks\n    > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper .is-layout-flow > * + *,\n  body.block-editor-iframe__body.editor-styles-wrapper\n    .is-layout-constrained\n    > * + * {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  .editor-styles-wrapper > .block-editor-block-list__layout.is-root-container > .wp-block + .wp-block:not(p) {\n    margin-block-start: ${e};\n    margin-top: ${e};\n  }\n\n  /* Tablet */\n  @media (max-width: 768px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n\n  /* Mobile */\n  @media (max-width: 480px) {\n    .editor-styles-wrapper \n      > .block-editor-block-list__layout.is-root-container \n      > .wp-block:not(p) \n      > .block-editor-block-list__block,\n    .editor-styles-wrapper\n      > .block-editor-block-list__layout.is-root-container\n      > .wp-block\n      + .wp-block:not(p) {\n      margin-block-start: ${e};\n      margin-top: ${e};\n    }\n  }\n`)("number"==typeof n?`${n}px`:n);let o=document.getElementById("wcb-blocks-editor-custom-style");o||(o=document.createElement("style"),o.id="wcb-blocks-editor-custom-style",document.head.appendChild(o)),o.textContent=r}),pr={media_tablet:"768px",media_desktop:"1024px",reCAPTCHA_v3_secret_key:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI",reCAPTCHA_v3_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_site_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",reCAPTCHA_v2_secret_key:"6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe",defaultContentWidth:window?.boostify_blocks_layout_global_settings?.contentSize||"",containerPadding:"10px",enableTemplatesButton:"true",enableCopyPasteStyles:"false",containerElementsGap:"10px",blocksEditorSpacing:"0px",buttonInheritFromTheme:"false",buttonTheme:{backgroundColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColor||"#0073aa",backgroundColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.backgroundColorHover||"#3a3a3a",textColor:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColor||"#ffffff",textColorHover:window?.boostify_blocks_layout_global_settings?.buttonTheme?.textColorHover||"#ffffff",borderRadius:window?.boostify_blocks_layout_global_settings?.buttonTheme?.borderRadius||"50px"},...window.boostify_blocks_global_variables||{},defaultContentWidth:window.boostify_blocks_global_variables?.defaultContentWidth||window.boostify_blocks_layout_global_settings?.contentSize};var mr;mr=()=>{dr(pr)},window.wp?.domReady&&window.wp.domReady(mr);const fr=({children:e,className:t="my-1"})=>(0,r.createElement)("p",{className:`components-form-token-field__help ${t}`},e),br={containerWidthType:"Full Width",contentWidthType:"Boxed",customWidth:{Desktop:"100%",Mobile:"100%"},contentBoxWidth:{Desktop:"",Mobile:""},minHeight:{Desktop:void 0},htmlTag:"div",overflow:"visible"},vr=["Full Width","Boxed"],hr=["Full Width","Boxed","Custom"],gr=["visible","hidden","auto"],kr=({className:e="space-y-5",containerControl:t=br,setAttrs__container:n,showContainerWidthType:o})=>{const a=jt()||"Desktop",{containerWidthType:i,contentWidthType:s,minHeight:c,contentBoxWidth:u,customWidth:d,htmlTag:p,overflow:m}=t;(0,r.useEffect)((()=>{o||"Custom"===i||f("Custom")}),[o]);const f=e=>{n({...t,containerWidthType:e})},b=e=>{n({...t,contentWidthType:e})},h=e=>{n({...t,overflow:e})},{currentDeviceValue:g}=or(d,a);let{currentDeviceValue:k}=or(u,a);k||(k=pr.defaultContentWidth||window.boostify_blocks_layout_global_settings.contentSize);const{currentDeviceValue:w}=or(c,a);return(0,r.createElement)("div",{className:e},o&&(()=>{const e=hr.map((e=>({name:e,icon:"Boxed"===e?"Wide":e})));return(0,r.createElement)(ur,{plans:e,label:(0,l.__)("Container Width","boostify-blocks"),onChange:f,contentClassName:"capitalize mt-3",value:i,hasResponsive:!1})})(),"Custom"===i?(0,r.createElement)(rr,{onChange:e=>{n({...t,customWidth:{...d,[a]:e}})},value:g||"0",label:(0,l.__)("Custom Width","boostify-blocks"),hasResponsive:!0,units:lr,customUnitsValueSettings:tr}):null,(()=>{const e=vr.map((e=>({name:e,icon:e})));return(0,r.createElement)(ur,{plans:e,label:(0,l.__)("Content Width","boostify-blocks"),onChange:b,contentClassName:"capitalize mt-3",value:s,hasResponsive:!1})})(),"Boxed"===s?(0,r.createElement)("div",null,(0,r.createElement)(rr,{onChange:e=>{n({...t,contentBoxWidth:{...u,[a]:e}})},value:k||"0",label:(0,l.__)("Content Box Width","boostify-blocks"),hasResponsive:!0,units:lr,customUnitsValueSettings:tr}),(0,r.createElement)(fr,null,(0,l.__)("Default content box width "+pr.defaultContentWidth))):null,(0,r.createElement)(rr,{onChange:e=>{n({...t,minHeight:{...c,[a]:e}})},value:w||"0",label:(0,l.__)("Minimum Height","boostify-blocks"),hasResponsive:!0,units:ir,customUnitsValueSettings:tr}),(0,r.createElement)("div",{className:"flow-root"},(0,r.createElement)("div",{className:"flex justify-between items-center -mb-3"},(0,r.createElement)(Vt,{className:"mb-4"},(0,l.__)("HTML Tag","boostify-blocks")),(0,r.createElement)(v.SelectControl,{label:"",value:p,options:[{label:"div",value:"div"},{label:"header",value:"header"},{label:"footer",value:"footer"},{label:"main",value:"main"},{label:"article",value:"article"},{label:"section",value:"section"},{label:"aside",value:"aside"},{label:"summary",value:"summary"},{label:"figure",value:"figure"},{label:"link",value:"link"},{label:"nav",value:"nav"}],onChange:e=>{n({...t,htmlTag:e})},__nextHasNoMarginBottom:!0,help:""}))),(()=>{const e=gr.map((e=>({name:e,icon:e})));return(0,r.createElement)(ur,{plans:e,label:(0,l.__)("Overflow","boostify-blocks"),onChange:h,contentClassName:"capitalize mt-3",value:m})})())},wr=({className:e="space-y-5",flexPropertiesControl:t=u,setAttrs__flexProperties:n})=>{const o=jt()||"Desktop",{flexDirection:a,alignItems:i,justifyContent:s,flexWrap:c}=t,{currentDeviceValue:b}=or(a,o),{currentDeviceValue:v}=or(i,o),{currentDeviceValue:h}=or(s,o),{currentDeviceValue:g}=or(c,o);return(0,r.createElement)("div",{className:e},(0,r.createElement)(ur,{label:(0,l.__)("Flex Direction","boostify-blocks"),onChange:e=>{n({...t,flexDirection:{...a,[o]:e}})},plans:d,value:b}),(0,r.createElement)(ur,{label:(0,l.__)("Align Items","boostify-blocks"),onChange:e=>{n({...t,alignItems:{...i,[o]:e}})},plans:p,value:v}),(0,r.createElement)(ur,{label:(0,l.__)("Justify Content","boostify-blocks"),onChange:e=>{n({...t,justifyContent:{...s,[o]:e}})},plans:m,value:h}),(0,r.createElement)(ur,{label:(0,l.__)("Flex Wrap","boostify-blocks"),onChange:e=>{n({...t,flexWrap:{...c,[o]:e}})},plans:f,value:g}))};var yr=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(e){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),_r=Math.abs,Cr=String.fromCharCode,xr=Object.assign;function Er(e){return e.trim()}function Ir(e,t,n){return e.replace(t,n)}function Tr(e,t){return e.indexOf(t)}function Nr(e,t){return 0|e.charCodeAt(t)}function Sr(e,t,n){return e.slice(t,n)}function Rr(e){return e.length}function Pr(e){return e.length}function $r(e,t){return t.push(e),e}var Mr=1,Dr=1,Lr=0,Ar=0,Br=0,Or="";function jr(e,t,n,r,o,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:Mr,column:Dr,length:l,return:""}}function Hr(e,t){return xr(jr("",null,null,"",null,null,0),e,{length:-e.length},t)}function Fr(){return Br=Ar>0?Nr(Or,--Ar):0,Dr--,10===Br&&(Dr=1,Mr--),Br}function Vr(){return Br=Ar<Lr?Nr(Or,Ar++):0,Dr++,10===Br&&(Dr=1,Mr++),Br}function Wr(){return Nr(Or,Ar)}function zr(){return Ar}function Ur(e,t){return Sr(Or,e,t)}function Gr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qr(e){return Mr=Dr=1,Lr=Rr(Or=e),Ar=0,[]}function Zr(e){return Or="",e}function Kr(e){return Er(Ur(Ar-1,Yr(91===e?e+2:40===e?e+1:e)))}function Jr(e){for(;(Br=Wr())&&Br<33;)Vr();return Gr(e)>2||Gr(Br)>3?"":" "}function Qr(e,t){for(;--t&&Vr()&&!(Br<48||Br>102||Br>57&&Br<65||Br>70&&Br<97););return Ur(e,zr()+(t<6&&32==Wr()&&32==Vr()))}function Yr(e){for(;Vr();)switch(Br){case e:return Ar;case 34:case 39:34!==e&&39!==e&&Yr(Br);break;case 40:41===e&&Yr(e);break;case 92:Vr()}return Ar}function Xr(e,t){for(;Vr()&&e+Br!==57&&(e+Br!==84||47!==Wr()););return"/*"+Ur(t,Ar-1)+"*"+Cr(47===e?e:Vr())}function eo(e){for(;!Gr(Wr());)Vr();return Ur(e,Ar)}var to="-ms-",no="-moz-",ro="-webkit-",oo="comm",ao="rule",lo="decl",io="@keyframes";function so(e,t){for(var n="",r=Pr(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function co(e,t,n,r){switch(e.type){case"@import":case lo:return e.return=e.return||e.value;case oo:return"";case io:return e.return=e.value+"{"+so(e.children,r)+"}";case ao:e.value=e.props.join(",")}return Rr(n=so(e.children,r))?e.return=e.value+"{"+n+"}":""}function uo(e){return Zr(po("",null,null,null,[""],e=qr(e),0,[0],e))}function po(e,t,n,r,o,a,l,i,s){for(var c=0,u=0,d=l,p=0,m=0,f=0,b=1,v=1,h=1,g=0,k="",w=o,y=a,_=r,C=k;v;)switch(f=g,g=Vr()){case 40:if(108!=f&&58==Nr(C,d-1)){-1!=Tr(C+=Ir(Kr(g),"&","&\f"),"&\f")&&(h=-1);break}case 34:case 39:case 91:C+=Kr(g);break;case 9:case 10:case 13:case 32:C+=Jr(f);break;case 92:C+=Qr(zr()-1,7);continue;case 47:switch(Wr()){case 42:case 47:$r(fo(Xr(Vr(),zr()),t,n),s);break;default:C+="/"}break;case 123*b:i[c++]=Rr(C)*h;case 125*b:case 59:case 0:switch(g){case 0:case 125:v=0;case 59+u:m>0&&Rr(C)-d&&$r(m>32?bo(C+";",r,n,d-1):bo(Ir(C," ","")+";",r,n,d-2),s);break;case 59:C+=";";default:if($r(_=mo(C,t,n,c,u,o,i,k,w=[],y=[],d),a),123===g)if(0===u)po(C,t,_,_,w,a,d,i,y);else switch(99===p&&110===Nr(C,3)?100:p){case 100:case 109:case 115:po(e,_,_,r&&$r(mo(e,_,_,0,0,o,i,k,o,w=[],d),y),o,y,d,i,r?w:y);break;default:po(C,_,_,_,[""],y,0,i,y)}}c=u=m=0,b=h=1,k=C="",d=l;break;case 58:d=1+Rr(C),m=f;default:if(b<1)if(123==g)--b;else if(125==g&&0==b++&&125==Fr())continue;switch(C+=Cr(g),g*b){case 38:h=u>0?1:(C+="\f",-1);break;case 44:i[c++]=(Rr(C)-1)*h,h=1;break;case 64:45===Wr()&&(C+=Kr(Vr())),p=Wr(),u=d=Rr(k=C+=eo(zr())),g++;break;case 45:45===f&&2==Rr(C)&&(b=0)}}return a}function mo(e,t,n,r,o,a,l,i,s,c,u){for(var d=o-1,p=0===o?a:[""],m=Pr(p),f=0,b=0,v=0;f<r;++f)for(var h=0,g=Sr(e,d+1,d=_r(b=l[f])),k=e;h<m;++h)(k=Er(b>0?p[h]+" "+g:Ir(g,/&\f/g,p[h])))&&(s[v++]=k);return jr(e,t,n,0===o?ao:i,s,c,u)}function fo(e,t,n){return jr(e,t,n,oo,Cr(Br),Sr(e,2,-2),0)}function bo(e,t,n,r){return jr(e,t,n,lo,Sr(e,0,r),Sr(e,r+1,-1),r)}var vo=function(e,t,n){for(var r=0,o=0;r=o,o=Wr(),38===r&&12===o&&(t[n]=1),!Gr(o);)Vr();return Ur(e,Ar)},ho=new WeakMap,go=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ho.get(n))&&!r){ho.set(e,!0);for(var o=[],a=function(e,t){return Zr(function(e,t){var n=-1,r=44;do{switch(Gr(r)){case 0:38===r&&12===Wr()&&(t[n]=1),e[n]+=vo(Ar-1,t,n);break;case 2:e[n]+=Kr(r);break;case 4:if(44===r){e[++n]=58===Wr()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=Cr(r)}}while(r=Vr());return e}(qr(e),t))}(t,o),l=n.props,i=0,s=0;i<a.length;i++)for(var c=0;c<l.length;c++,s++)e.props[s]=o[i]?a[i].replace(/&\f/g,l[c]):l[c]+" "+a[i]}}},ko=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function wo(e,t){switch(function(e,t){return 45^Nr(e,0)?(((t<<2^Nr(e,0))<<2^Nr(e,1))<<2^Nr(e,2))<<2^Nr(e,3):0}(e,t)){case 5103:return ro+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ro+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ro+e+no+e+to+e+e;case 6828:case 4268:return ro+e+to+e+e;case 6165:return ro+e+to+"flex-"+e+e;case 5187:return ro+e+Ir(e,/(\w+).+(:[^]+)/,ro+"box-$1$2"+to+"flex-$1$2")+e;case 5443:return ro+e+to+"flex-item-"+Ir(e,/flex-|-self/,"")+e;case 4675:return ro+e+to+"flex-line-pack"+Ir(e,/align-content|flex-|-self/,"")+e;case 5548:return ro+e+to+Ir(e,"shrink","negative")+e;case 5292:return ro+e+to+Ir(e,"basis","preferred-size")+e;case 6060:return ro+"box-"+Ir(e,"-grow","")+ro+e+to+Ir(e,"grow","positive")+e;case 4554:return ro+Ir(e,/([^-])(transform)/g,"$1"+ro+"$2")+e;case 6187:return Ir(Ir(Ir(e,/(zoom-|grab)/,ro+"$1"),/(image-set)/,ro+"$1"),e,"")+e;case 5495:case 3959:return Ir(e,/(image-set\([^]*)/,ro+"$1$`$1");case 4968:return Ir(Ir(e,/(.+:)(flex-)?(.*)/,ro+"box-pack:$3"+to+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ro+e+e;case 4095:case 3583:case 4068:case 2532:return Ir(e,/(.+)-inline(.+)/,ro+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Rr(e)-1-t>6)switch(Nr(e,t+1)){case 109:if(45!==Nr(e,t+4))break;case 102:return Ir(e,/(.+:)(.+)-([^]+)/,"$1"+ro+"$2-$3$1"+no+(108==Nr(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Tr(e,"stretch")?wo(Ir(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==Nr(e,t+1))break;case 6444:switch(Nr(e,Rr(e)-3-(~Tr(e,"!important")&&10))){case 107:return Ir(e,":",":"+ro)+e;case 101:return Ir(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ro+(45===Nr(e,14)?"inline-":"")+"box$3$1"+ro+"$2$3$1"+to+"$2box$3")+e}break;case 5936:switch(Nr(e,t+11)){case 114:return ro+e+to+Ir(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ro+e+to+Ir(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ro+e+to+Ir(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return ro+e+to+e+e}return e}var yo=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case lo:e.return=wo(e.value,e.length);break;case io:return so([Hr(e,{value:Ir(e.value,"@","@"+ro)})],r);case ao:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e){return(e=/(::plac\w+|:read-\w+)/.exec(e))?e[0]:e}(t)){case":read-only":case":read-write":return so([Hr(e,{props:[Ir(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return so([Hr(e,{props:[Ir(t,/:(plac\w+)/,":"+ro+"input-$1")]}),Hr(e,{props:[Ir(t,/:(plac\w+)/,":-moz-$1")]}),Hr(e,{props:[Ir(t,/:(plac\w+)/,to+"input-$1")]})],r)}return""}))}}];const _o=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,o,a=e.stylisPlugins||yo,l={},i=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)l[t[n]]=!0;i.push(e)}));var s,c,u,d,p=[co,(d=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&d(e)})],m=(c=[go,ko].concat(a,p),u=Pr(c),function(e,t,n,r){for(var o="",a=0;a<u;a++)o+=c[a](e,t,n,r)||"";return o});o=function(e,t,n,r){s=n,so(uo(e?e+"{"+t.styles+"}":t.styles),m),r&&(f.inserted[t.name]=!0)};var f={key:t,sheet:new yr({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:l,registered:{},insert:o};return f.sheet.hydrate(i),f},Co=function(e){for(var t,n=0,r=0,o=e.length;o>=4;++r,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(o){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)},xo={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var Eo=/[A-Z]|^ms/g,Io=/_EMO_([^_]+?)_([^]*?)_EMO_/g,To=function(e){return 45===e.charCodeAt(1)},No=function(e){return null!=e&&"boolean"!=typeof e},So=function(){var e=Object.create(null);return function(t){return void 0===e[t]&&(e[t]=To(n=t)?n:n.replace(Eo,"-$&").toLowerCase()),e[t];var n}}(),Ro=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(Io,(function(e,t,n){return $o={name:t,styles:n,next:$o},t}))}return 1===xo[e]||To(e)||"number"!=typeof t||0===t?t:t+"px"};function Po(e,t,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return $o={name:n.name,styles:n.styles,next:$o},n.name;if(void 0!==n.styles){var r=n.next;if(void 0!==r)for(;void 0!==r;)$o={name:r.name,styles:r.styles,next:$o},r=r.next;return n.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=Po(e,t,n[o])+";";else for(var a in n){var l=n[a];if("object"!=typeof l)null!=t&&void 0!==t[l]?r+=a+"{"+t[l]+"}":No(l)&&(r+=So(a)+":"+Ro(a,l)+";");else if(!Array.isArray(l)||"string"!=typeof l[0]||null!=t&&void 0!==t[l[0]]){var i=Po(e,t,l);switch(a){case"animation":case"animationName":r+=So(a)+":"+i+";";break;default:r+=a+"{"+i+"}"}}else for(var s=0;s<l.length;s++)No(l[s])&&(r+=So(a)+":"+Ro(a,l[s])+";")}return r}(e,t,n);case"function":if(void 0!==e){var o=$o,a=n(e);return $o=o,Po(e,t,a)}}if(null==t)return n;var l=t[n];return void 0!==l?l:n}var $o,Mo=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Do=function(e,t,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,o="";$o=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,o+=Po(n,t,a)):o+=a[0];for(var l=1;l<e.length;l++)o+=Po(n,t,e[l]),r&&(o+=a[l]);Mo.lastIndex=0;for(var i,s="";null!==(i=Mo.exec(o));)s+="-"+i[1];return{name:Co(o)+s,styles:o,next:$o}},Lo=!!r.useInsertionEffect&&r.useInsertionEffect||r.useLayoutEffect,Ao=(0,r.createContext)("undefined"!=typeof HTMLElement?_o({key:"css"}):null),Bo=Ao.Provider,Oo=function(e){return(0,r.forwardRef)((function(t,n){var o=(0,r.useContext)(Ao);return e(t,o,n)}))},jo=(0,r.createContext)({});n(4146);var Ho=Oo((function(e,t){var n=e.styles,o=Do([n],void 0,(0,r.useContext)(jo)),a=(0,r.useRef)();return Lo((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,l=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==l&&(r=!0,l.setAttribute("data-emotion",e),n.hydrate([l])),a.current=[n,r],function(){n.flush()}}),[t]),Lo((function(){var e=a.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&function(e,t){!function(e,t){e.key,t.name}(e,t);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var r=t;do{e.insert(t===r?"."+n:"",r,e.sheet,!0),r=r.next}while(void 0!==r)}}(t,o.next),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",o,n,!1)}}),[t,o.name]),null}));function Fo(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Do(t)}const Vo=(e,t="")=>{switch(e){case"shadow-sm":return`0 1px 2px 0 ${t||"rgb(0 0 0 / 0.05)"}`;case"shadow":return`0 1px 3px 0 ${t||"rgb(0 0 0 / 0.1)"}, 0 1px 2px -1px ${t||"rgb(0 0 0 / 0.1)"}`;case"shadow-md":return`0 4px 6px -1px ${t||"rgb(0 0 0 / 0.1)"}, 0 2px 4px -2px ${t||"rgb(0 0 0 / 0.1)"}`;case"shadow-lg":return`0 10px 15px -3px ${t||"rgb(0 0 0 / 0.1)"}, 0 4px 6px -4px ${t||"rgb(0 0 0 / 0.1)"}`;case"shadow-xl":return`0 20px 25px -5px ${t||"rgb(0 0 0 / 0.1)"}, 0 8px 10px -6px ${t||"rgb(0 0 0 / 0.1)"}`;case"shadow-2xl":return`0 25px 50px -12px ${t||"rgb(0 0 0 / 0.25)"}`;case"shadow-inner":return`inset 0 2px 4px 0 ${t||"rgb(0 0 0 / 0.05)"}`;default:return""}},Wo=({mobile_v:e=null,tablet_v:t=null,desktop_v:n=null})=>{let r=t,o=n;return e===t&&t===n?{mobile_v:e,tablet_v:null,desktop_v:null}:(n!==t&&n!==e||(o=null),t===e&&(r=null),{mobile_v:null!=e?e:null,tablet_v:null!=r?r:null,desktop_v:null!=o?o:null})},zo=({border:e,className:t,isWithRadius:n=!1,isWithIframe:r=!1})=>{const{hoverColor:o,mainSettings:a,radius:l}=e;let i={[`${t}`]:{}};if(a){const e=a;if("top"in e||"right"in e||"bottom"in e||"left"in e){const{bottom:n,left:r,right:a,top:l}=e;i={[`${t}`]:{...l?{borderTop:`${l.width} ${l.style||"none"} ${l.color||""}`}:{},...r?{borderLeft:`${r.width} ${r.style||"none"} ${r.color||""}`}:{},...a?{borderRight:`${a.width} ${a.style||"none"} ${a.color||""}`}:{},...n?{borderBottom:`${n.width} ${n.style||"none"} ${n.color||""}`}:{},"&:hover":{borderColor:`${o}`}}}}else{const{color:e,style:n,width:r}=a;i={[`${t}`]:{border:`${r} ${n||"none"} ${e||""}`,"&:hover":{borderColor:`${o||""}`}}}}}let s={[`${t}`]:{}};n&&l&&(s=(({className:e,radius:t,isWithIframe:n=!1})=>{const{media_desktop:r,media_tablet:o}=pr;let{value_Desktop:a,value_Tablet:l,value_Mobile:i}=or(t);const s=e=>{let t=e;return t="string"==typeof e?{bottomLeft:e,bottomRight:e,topLeft:e,topRight:e}:{bottomLeft:e?.bottomLeft,bottomRight:e?.bottomRight,topLeft:e?.topLeft,topRight:e?.topRight},t};a=s(a),l=s(l),i=s(i);const{mobile_v:c,tablet_v:u,desktop_v:d}=Wo({mobile_v:i?.topLeft,tablet_v:l?.topLeft,desktop_v:a?.topLeft}),{mobile_v:p,tablet_v:m,desktop_v:f}=Wo({mobile_v:i?.topRight,tablet_v:l?.topRight,desktop_v:a?.topRight}),{mobile_v:b,tablet_v:v,desktop_v:h}=Wo({mobile_v:i?.bottomRight,tablet_v:l?.bottomRight,desktop_v:a?.bottomRight}),{mobile_v:g,tablet_v:k,desktop_v:w}=Wo({mobile_v:i?.bottomLeft,tablet_v:l?.bottomLeft,desktop_v:a?.bottomLeft}),y=n?"!important":"";return{[`${e}`]:{borderTopLeftRadius:`${c} ${y}`,borderTopRightRadius:`${p} ${y}`,borderBottomRightRadius:`${b} ${y}`,borderBottomLeftRadius:`${g} ${y}`,[`@media (min-width: ${o})`]:u||m||v||k?{borderTopLeftRadius:`${u} ${y}`,borderTopRightRadius:`${m} ${y}`,borderBottomRightRadius:`${v} ${y}`,borderBottomLeftRadius:`${k} ${y}`}:null,[`@media (min-width: ${r})`]:d||f||h||w?{borderTopLeftRadius:`${d} ${y}`,borderTopRightRadius:`${f} ${y}`,borderBottomRightRadius:`${h} ${y}`,borderBottomLeftRadius:`${w} ${y}`}:null}}})({radius:l,className:t,isWithIframe:r}));let c={},u={};return"object"==typeof i[t]&&(c=i[t]||{}),"object"==typeof s[t]&&(u=s[t]||{}),{[`${t}`]:{...c,...u}}};function Uo({styles_background:e,className:t}){const n=t,{media_desktop:r,media_tablet:o}=pr;return[(()=>{const{}=e;return(({className:e,background:t,backgroundHover:n})=>{const{bgType:r,color:o,gradient:a}=t,{bgType:l,color:i,gradient:s}=n||{};if("color"!==r&&"gradient"!==r)return{};let c="",u="";"color"===r&&(c="backgroundColor",u=o),"gradient"===r&&(c="backgroundImage",u=a);let d="",p="";return"color"===l&&(d="backgroundColor",p=i||""),"gradient"===l&&(d="backgroundImage",p=s||""),{[`${e}`]:{[`${c}`]:`${u}`,":hover":{[`${d}`]:`${p||null}`}}}})({background:e,className:n})})(),(()=>{const{bgImageAttachment:t,bgImageRepeat:a,bgImageSize:l,bgType:i,focalPoint:s,imageData:c}=e;if("image"!==i)return{};const u=c.Desktop?.mediaUrl,d=c.Tablet?.mediaUrl||u,p=c.Mobile?.mediaUrl||d,{value_Desktop:m,value_Tablet:f,value_Mobile:b}=or(a),{value_Desktop:v,value_Tablet:h,value_Mobile:g}=or(t),{value_Desktop:k,value_Tablet:w,value_Mobile:y}=or(l),{value_Desktop:_,value_Tablet:C,value_Mobile:x}=or(s),E=x?`${100*x.x}% ${100*x.y}%`:"",I=C?`${100*C.x}% ${100*C.y}%`:"",T=_?`${100*_.x}% ${100*_.y}%`:"",{mobile_v:N,tablet_v:S,desktop_v:R}=Wo({mobile_v:p,tablet_v:d,desktop_v:u}),{mobile_v:P,tablet_v:$,desktop_v:M}=Wo({mobile_v:b,tablet_v:f,desktop_v:m}),{mobile_v:D,tablet_v:L,desktop_v:A}=Wo({mobile_v:g,tablet_v:h,desktop_v:v}),{mobile_v:B,tablet_v:O,desktop_v:j}=Wo({mobile_v:y,tablet_v:w,desktop_v:k}),{mobile_v:H,tablet_v:F,desktop_v:V}=Wo({mobile_v:E,tablet_v:I,desktop_v:T});return{[`${n}`]:{backgroundImage:N?`url(${N})`:void 0,backgroundRepeat:N?`${P}`:void 0,backgroundAttachment:N?`${D}`:void 0,backgroundSize:N?`${B}`:void 0,backgroundPosition:N?`${H}`:void 0,[`@media (min-width: ${o})`]:S?{backgroundImage:`url(${S})`,backgroundRepeat:`${$}`,backgroundAttachment:`${L}`,backgroundSize:`${O}`,backgroundPosition:`${F}`}:void 0,[`@media (min-width: ${r})`]:R?{backgroundImage:`url(${R})`,backgroundRepeat:`${M}`,backgroundAttachment:`${A}`,backgroundSize:`${j}`,backgroundPosition:`${V}`}:void 0}}})(),(()=>{const{overlayColor:t,overlayGradient:r,overlayType:o}=e;if("color"!==o&&"gradient"!==o)return{};let a="",l="";return"color"===o&&(a="backgroundColor",l=t),"gradient"===o&&(a="backgroundImage",l=r),{[`${n}`]:{".wcb-OverlayBackgroundByBgControl":{[`${a}`]:`${l}`,position:"absolute",inset:0,zIndex:0}}}})()]}const Go=Fo`
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
`,qo=({advance_motionEffect:e,advance_zIndex:t,advance_responsiveCondition:n,className:r,defaultDisplay:o})=>{const{media_desktop:a,media_tablet:l}=pr;try{if(e?.entranceAnimation){const t=document.querySelectorAll(r),n=new IntersectionObserver((t=>{t.forEach((t=>{if(t.isIntersecting){const r=t.target,o=/\banimate__\S+/g,a=r?.className.replace(o,"");r.setAttribute("class",a),setTimeout((()=>{r?.classList.add("animate__animated",`animate__${e?.entranceAnimation}`,`animate__${e?.animationDuration}`,`animate__delay-${e?.animationDelay}ms`,`animate__repeat-${e?.repeat}`)}),50),n.unobserve(r)}}))}),{threshold:.2});t.forEach((e=>n.observe(e)))}}catch(e){console.log("error, advance_motionEffect",e)}const{mobile_v:i,tablet_v:s,desktop_v:c}=Wo({mobile_v:t?.Mobile||t?.Tablet||t?.Desktop,tablet_v:t?.Tablet||t?.Desktop,desktop_v:t?.Desktop}),u=e=>""===e?"":e?Go:Fo`display: ${o};`;return Fo`
		${r} {
			visibility: visible;
			@media (min-width: ${a}) {
				z-index: ${c};
				${u(n?.isHiddenOnDesktop)}
			}

			@media (min-width: ${l}) and (max-width: ${a}) {
				z-index: ${s};
				${u(n?.isHiddenOnTablet)}
			}

			@media (max-width: ${l}) {
				z-index: ${i};
				${u(n?.isHiddenOnMobile)}
			}
		}
<<<<<<< HEAD
	`;
};

/***/ }),

/***/ "./src/block-container/index.js":
/*!**************************************!*\
  !*** ./src/block-container/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/block-container/style.scss");
/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edit */ "./src/block-container/Edit.tsx");
/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Save */ "./src/block-container/Save.tsx");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/block-container/block.json");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/block-container/attributes.ts");
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./variations */ "./src/block-container/variations.tsx");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/block-container/deprecated.tsx");
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




//-----------------------------------------

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  edit: _Edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _Save__WEBPACK_IMPORTED_MODULE_4__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  variations: _variations__WEBPACK_IMPORTED_MODULE_7__["default"],
  example: (0,_utils_convertAttsToPreview__WEBPACK_IMPORTED_MODULE_9__["default"])(_attributes__WEBPACK_IMPORTED_MODULE_6__["default"]),
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"],
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "wcb-editor-block-icons fill-none ",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
});

/***/ }),

/***/ "./src/block-container/style.scss":
/*!****************************************!*\
  !*** ./src/block-container/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-container/variations.tsx":
/*!********************************************!*\
  !*** ./src/block-container/variations.tsx ***!
  \********************************************/
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
/* harmony import */ var _components_controls_MyFlexPropertiesControl_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/controls/MyFlexPropertiesControl/types */ "./src/components/controls/MyFlexPropertiesControl/types.ts");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes */ "./src/block-container/attributes.ts");
/* harmony import */ var _MyContainerControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MyContainerControl */ "./src/block-container/MyContainerControl.tsx");







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
const getContainerAttrsByFlexWrap = (flexWrap = "nowrap", flexDirection = "column", alignItems = "stretch", justifyContent = "center") => {
  const attrsDefault = Object.keys(_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]).reduce((previousValue, currentValue) => {
    return {
      ...previousValue,
      [currentValue]: _attributes__WEBPACK_IMPORTED_MODULE_3__["default"][currentValue]?.default
    };
  }, {});
  return {
    ...attrsDefault,
    general_flexProperties: {
      ..._components_controls_MyFlexPropertiesControl_types__WEBPACK_IMPORTED_MODULE_2__.FLEX_PROPERTIES_CONTROL_DEMO,
      flexDirection: {
        Desktop: flexDirection,
        Tablet: "row"
      },
      flexWrap: {
        Desktop: flexWrap,
        Mobile: "wrap"
      },
      alignItems: {
        Desktop: alignItems
      },
      justifyContent: {
        Desktop: justifyContent
      }
    }
  };
};
const getContainerBoxAttrsByWidth = width => {
  return {
    general_container: {
      ..._MyContainerControl__WEBPACK_IMPORTED_MODULE_4__.CONTAINER_CONTROL_DEMO,
      containerWidthType: "Custom",
      customWidth: {
        Desktop: width,
        Tablet: width,
        Mobile: "100%"
      }
    }
  };
};
const variations = [{
  name: "one-column-full",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("100"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("One column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 row-span-2 bg-white"
  })),
  innerBlocks: [],
  scope: ["block"],
  isDefault: true,
  attributes: getContainerAttrsByFlexWrap("nowrap", "column", "stretch", "center")
}, {
  name: "two-columns-equal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("50 / 50"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Two columns; equal split"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 row-span-2 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 row-span-2 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
}, {
  name: "two-columns-33-66",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("33 / 66"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Two columns; one-third, two-thirds split"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-8 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
}, {
  name: "two-columns-66-33",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("66 / 33"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Two columns; two-thirds, one-third split"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-8 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-4 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
}, {
  name: "three-columns-equal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("33 / 33 / 33"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; equal split"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-4 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
}, {
  name: "four-columns-equal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("25 / 25 / 25 / 25"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; equal split"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
}, {
  name: "three-columns-25-50-25",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("25 / 50 / 25"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row-span-2 col-span-3 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("nowrap", "row")
},
// TWO ROW - FLEX WRAP
{
  name: "two-rows-equal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("100 / 100 / x2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("100%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("100%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-50-50-2full",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("50 / 50 / 100"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-12 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("100%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-33-33-33-50x2",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("33 x 3 / 50 x 2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-33-66",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("33 / 66 / x2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-8 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-8 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-50-50",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("50 / 50 / x2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-66-33",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("66 / 33 / x2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-8 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-8 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("66.66%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-25-50-25",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("25 / 50 / 25 / x2"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-6 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-3 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("50%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("25%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
}, {
  name: "two-rows-33-equal",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("33 / 33 / 33 "),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Three columns; wide center column"),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RenderIcon, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-span-4 bg-white"
  })),
  innerBlocks: [["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")], ["boostify-blocks/container", getContainerBoxAttrsByWidth("33.33%")]],
  scope: ["block"],
  attributes: getContainerAttrsByFlexWrap("wrap", "row")
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

/***/ "./src/components/OverlayBackgroundByBgControl.tsx":
/*!*********************************************************!*\
  !*** ./src/components/OverlayBackgroundByBgControl.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const OverlayBackgroundByBgControl = ({
  overlayType,
  bgType
}) => {
  if (overlayType === "none") {
    return null;
  }
  if (bgType !== "video" && bgType !== "image") {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-OverlayBackgroundByBgControl"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverlayBackgroundByBgControl);

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

/***/ "./src/components/VideoBackgroundByBgControl.tsx":
/*!*******************************************************!*\
  !*** ./src/components/VideoBackgroundByBgControl.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const VideoBackgroundByBgControl = ({
  videoData,
  bgType
}) => {
  if (bgType !== "video" || !videoData?.mediaId) {
    return null;
  }
  const SRC = videoData?.mediaUrl || "";
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wcb-VideoBackgroundByBgControl"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    controls: false,
    title: SRC,
    "data-id": videoData.mediaId,
    src: SRC
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoBackgroundByBgControl);

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

/***/ "./src/components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/controls/MyFlexPropertiesControl/MyFlexPropertiesControl.tsx ***!
  \*************************************************************************************/
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
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/components/controls/MyFlexPropertiesControl/types.ts");
/* harmony import */ var _MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MyRadioGroup */ "./src/components/controls/MyRadioGroup.tsx");
/* harmony import */ var _utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");







const MyFlexPropertiesControl = ({
  className = "space-y-5",
  flexPropertiesControl = _types__WEBPACK_IMPORTED_MODULE_3__.FLEX_PROPERTIES_CONTROL_DEMO,
  setAttrs__flexProperties
}) => {
  const deviceType = (0,_hooks_useGetDeviceType__WEBPACK_IMPORTED_MODULE_2__["default"])() || "Desktop";
  const {
    flexDirection: flexDirectionProps,
    alignItems: alignItemsProps,
    justifyContent: justifyContentProps,
    flexWrap: flexWrapProps
  } = flexPropertiesControl;
  const {
    currentDeviceValue: FLEX_DIRECTION
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(flexDirectionProps, deviceType);
  const {
    currentDeviceValue: ALIGN_ITEMS
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(alignItemsProps, deviceType);
  const {
    currentDeviceValue: JUSTIFY_CONTENT
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(justifyContentProps, deviceType);
  const {
    currentDeviceValue: FLEX_WRAP
  } = (0,_utils_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_5__["default"])(flexWrapProps, deviceType);

  //
  const handleChangeFlexDirectionType = value => {
    setAttrs__flexProperties({
      ...flexPropertiesControl,
      flexDirection: {
        ...flexDirectionProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeAlignItems = value => {
    setAttrs__flexProperties({
      ...flexPropertiesControl,
      alignItems: {
        ...alignItemsProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeJustifyContent = value => {
    setAttrs__flexProperties({
      ...flexPropertiesControl,
      justifyContent: {
        ...justifyContentProps,
        [deviceType]: value
      }
    });
  };
  const handleChangeFlexWrap = value => {
    setAttrs__flexProperties({
      ...flexPropertiesControl,
      flexWrap: {
        ...flexWrapProps,
        [deviceType]: value
      }
    });
  };

  //
  const renderFlexDirectionType = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Flex Direction", "boostify-blocks")
      // @ts-ignore
      ,
      onChange: handleChangeFlexDirectionType,
      plans: _types__WEBPACK_IMPORTED_MODULE_3__.PLANS_FLEX_DIRECTIONS_DEMO,
      value: FLEX_DIRECTION
    });
  };
  const renderFlexAlignItems = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Align Items", "boostify-blocks")
      // @ts-ignore
      ,
      onChange: handleChangeAlignItems,
      plans: _types__WEBPACK_IMPORTED_MODULE_3__.PLANS_FLEX_ALIGNITEMS_DEMO,
      value: ALIGN_ITEMS
    });
  };
  const renderFlexJustifyContent = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Justify Content", "boostify-blocks")
      // @ts-ignore
      ,
      onChange: handleChangeJustifyContent,
      plans: _types__WEBPACK_IMPORTED_MODULE_3__.PLANS_FLEX_JUSTIFY_CONTENT_DEMO,
      value: JUSTIFY_CONTENT
    });
  };
  const renderFlexWrap = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MyRadioGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Flex Wrap", "boostify-blocks")
      // @ts-ignore
      ,
      onChange: handleChangeFlexWrap,
      plans: _types__WEBPACK_IMPORTED_MODULE_3__.PLANS_FLEX_WRAP_DEMO,
      value: FLEX_WRAP
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, renderFlexDirectionType(), renderFlexAlignItems(), renderFlexJustifyContent(), renderFlexWrap());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyFlexPropertiesControl);

/***/ }),

/***/ "./src/components/controls/MyFlexPropertiesControl/types.ts":
/*!******************************************************************!*\
  !*** ./src/components/controls/MyFlexPropertiesControl/types.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FLEX_PROPERTIES_CONTROL_DEMO: () => (/* binding */ FLEX_PROPERTIES_CONTROL_DEMO),
/* harmony export */   PLANS_FLEX_ALIGNITEMS_DEMO: () => (/* binding */ PLANS_FLEX_ALIGNITEMS_DEMO),
/* harmony export */   PLANS_FLEX_DIRECTIONS_DEMO: () => (/* binding */ PLANS_FLEX_DIRECTIONS_DEMO),
/* harmony export */   PLANS_FLEX_JUSTIFY_CONTENT_DEMO: () => (/* binding */ PLANS_FLEX_JUSTIFY_CONTENT_DEMO),
/* harmony export */   PLANS_FLEX_WRAP_DEMO: () => (/* binding */ PLANS_FLEX_WRAP_DEMO)
/* harmony export */ });
const FLEX_PROPERTIES_CONTROL_DEMO = {
  flexDirection: {
    Desktop: "column",
    Tablet: "column"
  },
  alignItems: {
    Desktop: "center"
  },
  justifyContent: {
    Desktop: "center"
  },
  flexWrap: {
    Desktop: "nowrap"
  }
};
const PLANS_FLEX_DIRECTIONS_DEMO = [{
  name: "row",
  icon: `<svg class="scale-[.65]" width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 4.1L13.5 19.9C13.5 21.4 14.14 22 15.73 22L19.77 22C21.36 22 22 21.4 22 19.9L22 4.1C22 2.6 21.36 2 19.77 2L15.73 2C14.14 2 13.5 2.6 13.5 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 4.1L2 19.9C2 21.4 2.64 22 4.23 22L8.27 22C9.86 22 10.5 21.4 10.5 19.9L10.5 4.1C10.5 2.6 9.86 2 8.27 2L4.23 2C2.64 2 2 2.6 2 4.1Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M28.43 18.0702L34.5 12.0002L28.43 5.93018" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M17.5 12L34.33 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "column",
  icon: `<svg class="scale-[.65]"  width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.9 13.5L4.1 13.5C2.6 13.5 2 14.14 2 15.73L2 19.77C2 21.36 2.6 22 4.1 22L19.9 22C21.4 22 22 21.36 22 19.77L22 15.73C22 14.14 21.4 13.5 19.9 13.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.9 2L4.1 2C2.6 2 2 2.64 2 4.23L2 8.27C2 9.86 2.6 10.5 4.1 10.5L19.9 10.5C21.4 10.5 22 9.86 22 8.27L22 4.23C22 2.64 21.4 2 19.9 2Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.93001 28.43L12 34.5L18.07 28.43" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 17.5001L12 34.3301" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "row-reverse",
  icon: `<svg class="scale-[.65]"  width="38" height="24" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.5 19.9V4.1C24.5 2.6 23.86 2 22.27 2H18.23C16.64 2 16 2.6 16 4.1V19.9C16 21.4 16.64 22 18.23 22H22.27C23.86 22 24.5 21.4 24.5 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M36 19.9V4.1C36 2.6 35.36 2 33.77 2H29.73C28.14 2 27.5 2.6 27.5 4.1V19.9C27.5 21.4 28.14 22 29.73 22H33.77C35.36 22 36 21.4 36 19.9Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.57 5.92982L3.5 11.9998L9.57 18.0698" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.5 12L3.67004 12" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "column-reverse",
  icon: `<svg class="scale-[.65]" width="24" height="38" viewBox="0 0 24 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.1 24.5L19.9 24.5C21.4 24.5 22 23.86 22 22.27L22 18.23C22 16.64 21.4 16 19.9 16L4.1 16C2.6 16 2 16.64 2 18.23L2 22.27C2 23.86 2.6 24.5 4.1 24.5Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.1 36L19.9 36C21.4 36 22 35.36 22 33.77L22 29.73C22 28.14 21.4 27.5 19.9 27.5L4.1 27.5C2.6 27.5 2 28.14 2 29.73L2 33.77C2 35.36 2.6 36 4.1 36Z" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 20.4999L12 3.66992" stroke="currentColor" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}];
const PLANS_FLEX_ALIGNITEMS_DEMO = [{
  name: "start",
  icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 5.1001V16.9001C19.26 18.4001 18.62 19.0001 17.03 19.0001H15.99C14.4 19.0001 13.76 18.4001 13.76 16.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26 5.1001V11.9001C5.26 13.4001 5.9 14.0001 7.49 14.0001H8.53C10.12 14.0001 10.76 13.4001 10.76 11.9001V5.1001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 5H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "center",
  icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.25 15.4V8.6C13.25 7.1 13.89 6.5 15.48 6.5H16.52C18.11 6.5 18.75 7.1 18.75 8.6V15.4C18.75 16.9 18.11 17.5 16.52 17.5H15.48C13.89 17.5 13.25 16.9 13.25 15.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12H19.31" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `
}, {
  name: "end",
  icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.25999 18.9V12.1C5.25999 10.6 5.89999 10 7.48999 10H8.52999C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `
}, {
  name: "baseline",
  icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.25 13.4V6.6C13.25 5.1 13.89 4.5 15.48 4.5H16.52C18.11 4.5 18.75 5.1 18.75 6.6V13.4C18.75 14.9 18.11 15.5 16.52 15.5H15.48C13.89 15.5 13.25 14.9 13.25 13.4Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 12H4.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11 12H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `
}, {
  name: "stretch",
  icon: ` <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 19V8.30337C5 5.94382 5.69818 5 7.43273 5H8.56727C10.3018 5 11 5.94382 11 8.30337V19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `
}];
const PLANS_FLEX_JUSTIFY_CONTENT_DEMO = [{
  name: "flex-start",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.26 18.9V7.1C16.26 5.6 15.62 5 14.03 5H12.99C11.4 5 10.76 5.6 10.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "flex-end",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.26001 18.9V12.1C8.26001 10.6 8.90001 10 10.49 10H11.53C13.12 10 13.76 10.6 13.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "center",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "space-between",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.26 18.9V7.1C22.26 5.6 21.62 5 20.03 5H18.99C17.4 5 16.76 5.6 16.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2.26001 18.9V12.1C2.26001 10.6 2.90001 10 4.49001 10H5.53001C7.12001 10 7.76001 10.6 7.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "space-around",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.26 18.9V7.1C20.26 5.6 19.62 5 18.03 5H16.99C15.4 5 14.76 5.6 14.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4.26001 18.9V12.1C4.26001 10.6 4.90001 10 6.49001 10H7.53001C9.12001 10 9.76001 10.6 9.76001 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "space-evenly",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.26 18.9V7.1C19.26 5.6 18.62 5 17.03 5H15.99C14.4 5 13.76 5.6 13.76 7.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5.26001 18.9V12.1C5.26001 10.6 5.90001 10 7.49001 10H8.53001C10.12 10 10.76 10.6 10.76 12.1V18.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M2 19H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}];
const PLANS_FLEX_WRAP_DEMO = [{
  name: "nowrap",
  icon: `<svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 14.27V10.23C22 8.64 21.36 8 19.77 8H15.73C14.14 8 13.5 8.64 13.5 10.23V14.27C13.5 15.86 14.14 16.5 15.73 16.5H19.77C21.36 16.5 22 15.86 22 14.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M31.77 8H27.73C26.14 8 25.5 8.64 25.5 10.23V14.27C25.5 15.86 26.14 16.5 27.73 16.5H31.77" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 14.52V9.98C10.5 8.57 9.86 8 8.27 8H4.23C2.64 8 2 8.57 2 9.98V14.51C2 15.93 2.64 16.49 4.23 16.49H8.27C9.86 16.5 10.5 15.93 10.5 14.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "wrap",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 8.27V4.23C22 2.64 21.36 2 19.77 2H15.73C14.14 2 13.5 2.64 13.5 4.23V8.27C13.5 9.86 14.14 10.5 15.73 10.5H19.77C21.36 10.5 22 9.86 22 8.27Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `
}, {
  name: "wrap-reverse",
  icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 15.73V19.77C22 21.36 21.36 22 19.77 22H15.73C14.14 22 13.5 21.36 13.5 19.77V15.73C13.5 14.14 14.14 13.5 15.73 13.5H19.77C21.36 13.5 22 14.14 22 15.73Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 15.48V20.02C10.5 21.43 9.86 22 8.27 22H4.23C2.64 22 2 21.43 2 20.02L2 15.49C2 14.07 2.64 13.51 4.23 13.51H8.27C9.86 13.5 10.5 14.07 10.5 15.48Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 10C21 6.13 17.87 3 14 3L15.05 4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.5 4.23V8.27C10.5 9.86 9.86 10.5 8.27 10.5H4.23C2.64 10.5 2 9.86 2 8.27L2 4.23C2 2.64 2.64 2 4.23 2H8.27C9.86 2 10.5 2.64 10.5 4.23Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    `
}];

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

/***/ "./src/utils/getBackgroundColorGradientStyles.ts":
/*!*******************************************************!*\
  !*** ./src/utils/getBackgroundColorGradientStyles.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBackgroundColorGradientStyles = ({
  className,
  background,
  backgroundHover
}) => {
  const {
    bgType,
    color,
    gradient
  } = background;
  const {
    bgType: bgType_h,
    color: color_h,
    gradient: gradient_h
  } = backgroundHover || {};
  if (bgType !== "color" && bgType !== "gradient") {
    return {};
  }
  let preBgName = "";
  let bgValue = "";
  if (bgType === "color") {
    preBgName = "backgroundColor";
    bgValue = color;
  }
  // Backgroud gradient
  if (bgType === "gradient") {
    preBgName = "backgroundImage";
    bgValue = gradient;
  }
  //
  //
  let preBgName_h = "";
  let bgValue_h = "";
  if (bgType_h === "color") {
    preBgName_h = "backgroundColor";
    bgValue_h = color_h || "";
  }
  // Backgroud gradient
  if (bgType_h === "gradient") {
    preBgName_h = "backgroundImage";
    bgValue_h = gradient_h || "";
  }
  //
  //
  return {
    [`${className}`]: {
      [`${preBgName}`]: `${bgValue}`,
      ":hover": {
        [`${preBgName_h}`]: `${bgValue_h || null}`
      }
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBackgroundColorGradientStyles);

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

/***/ "./src/utils/getFlexPropertiesStyles.ts":
/*!**********************************************!*\
  !*** ./src/utils/getFlexPropertiesStyles.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../________ */ "./src/________.ts");
/* harmony import */ var _getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getValueFromAttrsResponsives */ "./src/utils/getValueFromAttrsResponsives.ts");


const getFlexPropertiesStyles = ({
  flexProperties,
  className
}) => {
  const {
    media_desktop,
    media_tablet
  } = ___WEBPACK_IMPORTED_MODULE_0__.DEMO_BOOSTIFYBLOCKS_GLOBAL_VARIABLES;

  //
  const {
    alignItems,
    flexDirection,
    flexWrap,
    justifyContent,
    colunmGap,
    rowGap
  } = flexProperties;
  //

  const {
    value_Desktop: flexDirection_Desktop,
    value_Tablet: flexDirection_Tablet,
    value_Mobile: flexDirection_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexDirection);
  //
  const {
    value_Desktop: alignItems_Desktop,
    value_Tablet: alignItems_Tablet,
    value_Mobile: alignItems_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(alignItems);
  //
  const {
    value_Desktop: flexWrap_Desktop,
    value_Tablet: flexWrap_Tablet,
    value_Mobile: flexWrap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(flexWrap);
  //
  const {
    value_Desktop: justifyContent_Desktop,
    value_Tablet: justifyContent_Tablet,
    value_Mobile: justifyContent_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(justifyContent);

  //
  const {
    value_Desktop: colunmGap_Desktop,
    value_Tablet: colunmGap_Tablet,
    value_Mobile: colunmGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(colunmGap);
  //
  const {
    value_Desktop: rowGap_Desktop,
    value_Tablet: rowGap_Tablet,
    value_Mobile: rowGap_Mobile
  } = (0,_getValueFromAttrsResponsives__WEBPACK_IMPORTED_MODULE_1__["default"])(rowGap);
  //

  return {
    [`${className}`]: {
      flexDirection: flexDirection_Mobile,
      alignItems: alignItems_Mobile,
      flexWrap: flexWrap_Mobile,
      justifyContent: justifyContent_Mobile,
      columnGap: colunmGap_Mobile,
      rowGap: rowGap_Mobile,
      [`@media (min-width: ${media_tablet})`]: flexDirection_Tablet || alignItems_Tablet || flexWrap_Tablet || justifyContent_Tablet || colunmGap_Tablet || rowGap_Tablet ? {
        flexDirection: flexDirection_Tablet,
        alignItems: alignItems_Tablet,
        flexWrap: flexWrap_Tablet,
        justifyContent: justifyContent_Tablet,
        columnGap: colunmGap_Tablet,
        rowGap: rowGap_Tablet
      } : undefined,
      [`@media (min-width: ${media_desktop})`]: flexDirection_Desktop || alignItems_Desktop || flexWrap_Desktop || justifyContent_Desktop || colunmGap_Desktop || rowGap_Desktop ? {
        flexDirection: flexDirection_Desktop,
        alignItems: alignItems_Desktop,
        flexWrap: flexWrap_Desktop,
        justifyContent: justifyContent_Desktop,
        columnGap: colunmGap_Desktop,
        rowGap: rowGap_Desktop
      } : undefined
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFlexPropertiesStyles);

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
	`},Zo=o().memo((e=>{const{uniqueId:t,general_container:n,general_flexProperties:o,styles_background:a,styles_border:l,styles_boxShadow:i,styles_color:s,styles_dimensions:c,advance_responsiveCondition:u,advance_zIndex:d,advance_motionEffect:p}=e,{margin:m,padding:f}=c,{value_Desktop:b,value_Tablet:v,value_Mobile:h}=or(m),g=e=>(e=>null!=e&&""!==e)(e)&&""!==e,k=g(b?.top),w=g(b?.bottom),{media_desktop:y,media_tablet:_,defaultContentWidth:C,containerPadding:x,containerElementsGap:E}=pr,I=".wp-block",T=`.wcb-container__wrap.${t}[data-uniqueid=${t}]`,N=`${T} .wcb-container__inner`;return t?(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Ho,{styles:(()=>{const{containerWidthType:e,customWidth:r,overflow:o,minHeight:a}=n;let{value_Desktop:l,value_Tablet:i,value_Mobile:c}=or(r);"Custom"!==e&&(l=null,i=null,c=null);const{value_Desktop:u,value_Tablet:d,value_Mobile:p}=or(a),{mobile_v:m,tablet_v:f,desktop_v:b}=Wo({mobile_v:c,tablet_v:i,desktop_v:l}),{mobile_v:v,tablet_v:h,desktop_v:g}=Wo({mobile_v:p,tablet_v:d,desktop_v:u});return[{[`${I}:has(> .wcb-container__wrap.${t}[data-uniqueid=${t}])`]:{marginTop:k?"0px !important":"",marginBottom:w?"0px !important":""}},{[`${I}[data-align="full"]:has(> .wcb-container__wrap.${t}[data-uniqueid=${t}])`]:{[T]:{marginLeft:"auto",marginRight:"auto"}}},{[`${I}[data-align="wide"]:has(> .wcb-container__wrap.${t}[data-uniqueid=${t}])`]:{marginLeft:"-8px",marginRight:"-8px",[T]:{marginLeft:"auto",marginRight:"auto"}}},{[T]:{padding:x||"",color:s,overflow:o,maxWidth:m?m+" !important":"",minHeight:null!=v?v:void 0,"&.alignfull":{marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)"},"&.is_wcb_container_child":{width:null!=m?m:void 0},[`@media (min-width: ${_})`]:{maxWidth:f?f+" !important":"",minHeight:null!=h?h:void 0,"&.is_wcb_container_child":{width:null!=f?f:void 0}},[`@media (min-width: ${y})`]:{maxWidth:b?b+" !important":"",minHeight:null!=g?g:void 0,"&.is_wcb_container_child":{width:null!=b?b:void 0}}}}]})()}),(0,r.createElement)(Ho,{styles:Uo({className:T,styles_background:a})}),(0,r.createElement)(Ho,{styles:zo({border:l,className:T,isWithRadius:!0})}),(0,r.createElement)(Ho,{styles:(()=>{const{Hover:e,Normal:t}=i,{presetClass:n,blur:r,color:o,horizontal:a,position:l,spread:s,vertical:c}=t,{presetClass:u,blur:d,color:p,horizontal:m,position:f,spread:b,vertical:v}=e;let h="",g="";return h=n?Vo(n,o):`${a}px ${c}px ${r}px ${s}px ${o} ${"inset"===l?l:""}`,g=u?Vo(u,p):`${m}px ${v}px ${d}px ${b}px ${p} ${"inset"===f?f:""}`,Fo`
			${T} {
				box-shadow: ${h};
				&:hover {
					box-shadow: ${g};
				}
>>>>>>> refs/remotes/origin/fix/boostifyblock-issue-4
			}
		`})()}),(0,r.createElement)(Ho,{styles:(()=>{const{margin:e,padding:t}=c;return(({className:e,padding:t,margin:n})=>{const{media_desktop:r,media_tablet:o}=pr,{value_Desktop:a,value_Tablet:l,value_Mobile:i}=or(n),{value_Desktop:s,value_Tablet:c,value_Mobile:u}=or(t),{mobile_v:d,tablet_v:p,desktop_v:m}=Wo({mobile_v:u?.top,tablet_v:c?.top,desktop_v:s?.top}),{mobile_v:f,tablet_v:b,desktop_v:v}=Wo({mobile_v:u?.left,tablet_v:c?.left,desktop_v:s?.left}),{mobile_v:h,tablet_v:g,desktop_v:k}=Wo({mobile_v:u?.right,tablet_v:c?.right,desktop_v:s?.right}),{mobile_v:w,tablet_v:y,desktop_v:_}=Wo({mobile_v:u?.bottom,tablet_v:c?.bottom,desktop_v:s?.bottom}),{mobile_v:C,tablet_v:x,desktop_v:E}=Wo({mobile_v:i?.top,tablet_v:l?.top,desktop_v:a?.top}),{mobile_v:I,tablet_v:T,desktop_v:N}=Wo({mobile_v:i?.left,tablet_v:l?.left,desktop_v:a?.left}),{mobile_v:S,tablet_v:R,desktop_v:P}=Wo({mobile_v:i?.right,tablet_v:l?.right,desktop_v:a?.right}),{mobile_v:$,tablet_v:M,desktop_v:D}=Wo({mobile_v:i?.bottom,tablet_v:l?.bottom,desktop_v:a?.bottom});return Fo`
		body ${e} {
			padding-top: ${d} !important;
			padding-right: ${h} !important;
			padding-bottom: ${w} !important;
			padding-left: ${f} !important;
			margin-top: ${C} !important;
			margin-right: ${S};
			margin-bottom: ${$} !important;
			margin-left: ${I};
			@media (min-width: ${o}) {
				padding-top: ${p} !important;
				padding-right: ${g} !important;
				padding-bottom: ${y} !important;
				padding-left: ${b} !important;
				margin-top: ${x} !important;
				margin-right: ${R};
				margin-bottom: ${M} !important;
				margin-left: ${T};
			}
			@media (min-width: ${r}) {
				padding-top: ${m} !important;
				padding-right: ${k} !important;
				padding-bottom: ${_} !important;
				padding-left: ${v} !important;
				margin-top: ${E} !important;
				margin-right: ${P};
				margin-bottom: ${D} !important;
				margin-left: ${N};
			}
		}
	`})({margin:e,padding:t,className:T})})()}),(0,r.createElement)(Ho,{styles:(()=>{let{contentWidthType:e,contentBoxWidth:t}=n;if("Full Width"===e)return{[N]:{maxWidth:"100%"}};t.Desktop||t.Tablet||t.Mobile||(t={Desktop:C||""});const{value_Desktop:r,value_Tablet:o,value_Mobile:a}=or(t),{mobile_v:l,tablet_v:i,desktop_v:s}=Wo({mobile_v:a,tablet_v:o,desktop_v:r});return l||i||s?{[N]:{rowGap:E||"",columnGap:E||"",maxWidth:null!=l?l:void 0,[`@media (min-width: ${_})`]:i?{maxWidth:i}:void 0,[`@media (min-width: ${y})`]:s?{maxWidth:s}:void 0}}:{}})()}),(0,r.createElement)(Ho,{styles:(()=>{const{colunmGap:e,rowGap:t}=c;return(({flexProperties:e,className:t})=>{const{media_desktop:n,media_tablet:r}=pr,{alignItems:o,flexDirection:a,flexWrap:l,justifyContent:i,colunmGap:s,rowGap:c}=e,{value_Desktop:u,value_Tablet:d,value_Mobile:p}=or(a),{value_Desktop:m,value_Tablet:f,value_Mobile:b}=or(o),{value_Desktop:v,value_Tablet:h,value_Mobile:g}=or(l),{value_Desktop:k,value_Tablet:w,value_Mobile:y}=or(i),{value_Desktop:_,value_Tablet:C,value_Mobile:x}=or(s),{value_Desktop:E,value_Tablet:I,value_Mobile:T}=or(c);return{[`${t}`]:{flexDirection:p,alignItems:b,flexWrap:g,justifyContent:y,columnGap:x,rowGap:T,[`@media (min-width: ${r})`]:d||f||h||w||C||I?{flexDirection:d,alignItems:f,flexWrap:h,justifyContent:w,columnGap:C,rowGap:I}:void 0,[`@media (min-width: ${n})`]:u||m||v||k||_||E?{flexDirection:u,alignItems:m,flexWrap:v,justifyContent:k,columnGap:_,rowGap:E}:void 0}}})({flexProperties:{...o,colunmGap:e,rowGap:t},className:N})})()}),(0,r.createElement)(Ho,{styles:qo({advance_motionEffect:p,advance_responsiveCondition:u,advance_zIndex:d,className:T,defaultDisplay:"flex"})})):null})),Ko=({videoData:e,bgType:t})=>{if("video"!==t||!e?.mediaId)return null;const n=e?.mediaUrl||"";return(0,r.createElement)("div",{className:"wcb-VideoBackgroundByBgControl"},(0,r.createElement)("video",{autoPlay:!0,loop:!0,muted:!0,controls:!1,title:n,"data-id":e.mediaId,src:n}))},Jo=({overlayType:e,bgType:t})=>"none"===e||"video"!==t&&"image"!==t?null:(0,r.createElement)("div",{className:"wcb-OverlayBackgroundByBgControl"}),Qo={Advances:{panelIsOpen:""},General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"},tabIsOpen:"General"},Yo={},Xo="boostify-blocks/panels",ea=(0,b.createReduxStore)(Xo,{reducer(e=Yo,t){if("SET_BLOCK_PANEL_INFO"===t.type){const n=e[t.blockId]||Qo;return{...e,[t.blockId]:{...n,...t.block}}}return e},actions:{setBlockPanelInfo:(e,t)=>({type:"SET_BLOCK_PANEL_INFO",blockId:e,block:t})},selectors:{getBlockPanelInfo:e=>e},controls:{},resolvers:{}}),ta=window;ta.__boostifyPanelsStoreRegistered||(ta.__boostifyPanelsStoreRegistered=!0,(0,b.register)(ea));const na={isHiddenOnDesktop:!1,isHiddenOnTablet:!1,isHiddenOnMobile:!1},ra=({className:e="space-y-4",responsiveConditionControl:t=na,setAttrs__responsiveCondition:n})=>{const{isHiddenOnDesktop:o,isHiddenOnMobile:a,isHiddenOnTablet:i}=t;return(0,r.createElement)("div",{className:e},(0,r.createElement)(v.ToggleControl,{label:(0,l.__)("Hide on Desktop","boostify-blocks"),checked:o,onChange:e=>{n({...t,isHiddenOnDesktop:e})},className:"mb-0"}),(0,r.createElement)(v.ToggleControl,{label:(0,l.__)("Hide on Tablet","boostify-blocks"),checked:i,onChange:e=>{n({...t,isHiddenOnTablet:e})}}),(0,r.createElement)(v.ToggleControl,{label:(0,l.__)("Hide on Mobile","boostify-blocks"),checked:a,onChange:e=>{n({...t,isHiddenOnMobile:e})}}))},oa={Desktop:void 0},aa=({className:e="space-y-3",zIndexControl:t=oa,setAttrs__zIndex:n})=>{const o=jt()||"Desktop",a=void 0!==t[o]?t[o]:void 0!==t.Tablet?t.Tablet:t.Desktop;return(0,r.createElement)("div",{className:e},(0,r.createElement)(v.RangeControl,{help:(0,l.__)("Above setting will only take effect once you are on the live page, and not while you're editing.","boostify-blocks"),value:void 0,label:(0,r.createElement)(Vt,{className:"",hasResponsive:!0},(0,l.__)("Z-Index","boostify-blocks")),allowReset:!0,max:1e3,min:-100,initialPosition:a,onChange:e=>{n({...t,[o]:e})}}))},la=[{label:"None",value:""},{label:"Bounce",value:"bounce"},{label:"Flash",value:"flash"},{label:"Pulse",value:"pulse"},{label:"RubberBand",value:"rubberBand"},{label:"ShakeX",value:"shakeX"},{label:"ShakeY",value:"shakeY"},{label:"HeadShake",value:"headShake"},{label:"Swing",value:"swing"},{label:"Tada",value:"tada"},{label:"Wobble",value:"wobble"},{label:"Jello",value:"jello"},{label:"HeartBeat",value:"heartBeat"},{label:"BackInDown",value:"backInDown"},{label:"BackInLeft",value:"backInLeft"},{label:"BackInRight",value:"backInRight"},{label:"BackInUp",value:"backInUp"},{label:"BounceIn",value:"bounceIn"},{label:"BounceInDown",value:"bounceInDown"},{label:"BounceInLeft",value:"bounceInLeft"},{label:"BounceInRight",value:"bounceInRight"},{label:"BounceInUp",value:"bounceInUp"},{label:"FadeIn",value:"fadeIn"},{label:"FadeInDown",value:"fadeInDown"},{label:"FadeInDownBig",value:"fadeInDownBig"},{label:"FadeInLeft",value:"fadeInLeft"},{label:"FadeInLeftBig",value:"fadeInLeftBig"},{label:"FadeInRight",value:"fadeInRight"},{label:"FadeInRightBig",value:"fadeInRightBig"},{label:"FadeInUp",value:"fadeInUp"},{label:"FadeInUpBig",value:"fadeInUpBig"},{label:"FadeInTopLeft",value:"fadeInTopLeft"},{label:"FadeInTopRight",value:"fadeInTopRight"},{label:"FadeInBottomLeft",value:"fadeInBottomLeft"},{label:"FadeInBottomRight",value:"fadeInBottomRight"},{label:"Flip",value:"flip"},{label:"FlipInX",value:"flipInX"},{label:"FlipInY",value:"flipInY"},{label:"LightSpeedInRight",value:"lightSpeedInRight"},{label:"LightSpeedInLeft",value:"lightSpeedInLeft"},{label:"RotateIn",value:"rotateIn"},{label:"RotateInDownLeft",value:"rotateInDownLeft"},{label:"RotateInDownRight",value:"rotateInDownRight"},{label:"RotateInUpLeft",value:"rotateInUpLeft"},{label:"RotateInUpRight",value:"rotateInUpRight"},{label:"Hinge",value:"hinge"},{label:"JackInTheBox",value:"jackInTheBox"},{label:"RollIn",value:"rollIn"},{label:"ZoomIn",value:"zoomIn"},{label:"ZoomInDown",value:"zoomInDown"},{label:"ZoomInLeft",value:"zoomInLeft"},{label:"ZoomInRight",value:"zoomInRight"},{label:"ZoomInUp",value:"zoomInUp"},{label:"SlideInDown",value:"slideInDown"},{label:"SlideInLeft",value:"slideInLeft"},{label:"SlideInRight",value:"slideInRight"},{label:"SlideInUp",value:"slideInUp"}],ia=({onChange:e,data:t})=>(console.log(22,"-----MyMyMotionEffectData-----",{data:t}),(0,r.createElement)("div",{className:"space-y-4"},(0,r.createElement)(Ut,{label:"Animation name",options:la,hasResponsive:!1,onChange:n=>e({...t,entranceAnimation:n}),value:t.entranceAnimation}),(0,r.createElement)(Ut,{label:"Animation duration",options:[{label:"Slow (2s)",value:"slow"},{label:"Slower (3s)",value:"slower"},{label:"Fast (800ms)",value:"fast"},{label:"Faster (500ms)",value:"faster"}],hasResponsive:!1,onChange:n=>e({...t,animationDuration:n}),value:t.animationDuration}),(0,r.createElement)(v.__experimentalNumberControl,{isShiftStepEnabled:!0,shiftStep:1e3,step:100,__unstableInputWidth:"60px",label:(0,l.__)("Animation delay (ms)"),labelPosition:"edge",min:0,value:t.animationDelay,onChange:n=>e({...t,animationDelay:Number(n||0)||0})}),(0,r.createElement)(Ut,{label:"Animation repeat",options:[{label:"1",value:"1"},{label:"2",value:"2"},{label:"3",value:"3"},{label:"infinite",value:"infinite"}],hasResponsive:!1,onChange:n=>e({...t,repeat:n}),value:t.repeat}))),sa=({handleTogglePanel:e,tabAdvancesIsPanelOpen:t,advance_responsiveCondition:n,advance_zIndex:o,advance_motionEffect:a,setAttributes:i,children:s})=>(0,r.createElement)(r.Fragment,null,a?(0,r.createElement)(v.PanelBody,{onToggle:()=>e("Advances","MyMyMotionEffectControl"),initialOpen:"MyMyMotionEffectControl"===t,opened:"MyMyMotionEffectControl"===t||void 0,title:(0,l.__)("Motion Effect","boostify-blocks")},(0,r.createElement)(ia,{data:a,onChange:e=>i({advance_motionEffect:e})})):null,(0,r.createElement)(v.PanelBody,{onToggle:()=>e("Advances","Responsive Conditions"),initialOpen:"Responsive Conditions"===t,opened:"Responsive Conditions"===t||void 0,title:(0,l.__)("Responsive Conditions","boostify-blocks")},(0,r.createElement)(ra,{responsiveConditionControl:n,setAttrs__responsiveCondition:e=>i({advance_responsiveCondition:e})})),(0,r.createElement)(v.PanelBody,{onToggle:()=>e("Advances","Z-Index"),initialOpen:"Z-Index"===t,opened:"Z-Index"===t||void 0,title:(0,l.__)("Z-Index","boostify-blocks")},(0,r.createElement)(aa,{zIndexControl:o,setAttrs__zIndex:e=>i({advance_zIndex:e})})),s||null),ca=(0,r.memo)((({children:e,uniqueKey:t="uniqueid"})=>{jt(),t.replace(/[0-9]/g,"").replace(/ /g,"").toLocaleLowerCase();const{myCache:n,ref:o}=((e="wcb-custom-cache-key")=>{const t=(0,r.useRef)(null);return{myCache:_o({key:e,container:t.current||void 0}),ref:t}})("wcb-key-cache"),{cache:a,useRefReact:l}=function(e="wcb-custom-cache-key"){const[t,n]=(0,r.useState)(null),o=(0,r.useRef)(null);return(0,r.useEffect)((()=>{let r=null,a=0;const l=t=>{const r=t?.contentDocument?.head;if(!r)return;const a=_o({key:e,container:r||o.current||void 0});n(a)},i=()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e?"complete"===e.contentDocument?.readyState?l(e):e.addEventListener("load",(()=>l(e)),{once:!0}):a<20&&(a++,setTimeout(i,150))};return i(),r=new MutationObserver((()=>{const e=document.querySelector('iframe[name="editor-canvas"]');e&&e!==t?.container?.ownerDocument?.defaultView?.frameElement&&(a=0,i())})),r.observe(document.body,{childList:!0,subtree:!0}),()=>r?.disconnect()}),[]),{cache:t,useRefReact:o}}("wcb-key-cache");return a?(0,r.createElement)(Bo,{value:a},e):(0,r.createElement)(r.Fragment,null,e)}));function ua(e,t="wcb-"){return e?t+e.replace(/-/g,"").replace(/\s/g,"").substring(0,12):(t+"converniquedreturnnull"+Date.now()+Math.random()).replace(/\./g,"-")}const da=e=>{const{attributes:t,setAttributes:n,clientId:o,isSelected:a}=e,{uniqueId:s,containerClassName:c,advance_responsiveCondition:u,advance_zIndex:d,general_container:p,general_flexProperties:m,styles_background:f,styles_border:g,styles_boxShadow:k,styles_color:w,styles_dimensions:y,advance_motionEffect:_}=t;(0,r.useEffect)((()=>{if(s)return;const{containerWidthType:e}=p;"Custom"!==e&&n({align:"Boxed"===e?"wide":"full"})}),[s]);const C=(0,r.useRef)(null),{tabIsOpen:x,tabAdvancesIsPanelOpen:E,tabGeneralIsPanelOpen:I,tabStylesIsPanelOpen:T,handleTogglePanel:N}=(e=>{const{setBlockPanelInfo:t}=(0,b.useDispatch)(Xo),{blockStores:n}=(0,b.useSelect)((e=>({blockStores:e(Xo)?.getBlockPanelInfo()})),[e]),{tabIsOpen:o,Advances:a,General:l,Styles:i}=n[e]||{},s=n[e];return(0,r.useEffect)((()=>{!s&&t&&t(e,{tabIsOpen:"General",General:{panelIsOpen:"first"},Styles:{panelIsOpen:"first"}})}),[e]),{setBlockPanelInfo:t,tabAdvances:a,tabGeneral:l,tabStyles:i,tabIsOpen:o,blockStore:s,handleTogglePanel:(n,r,o)=>{t&&(o&&s&&"first"===s[n]?.panelIsOpen&&(r=""),s&&s[n]?.panelIsOpen===r&&(r=""),t(e,{tabIsOpen:n,[n]:{panelIsOpen:void 0===r&&s?s[n]?.panelIsOpen:r}}))},tabGeneralIsPanelOpen:l?.panelIsOpen,tabStylesIsPanelOpen:i?.panelIsOpen,tabAdvancesIsPanelOpen:a?.panelIsOpen}})(s),{hasInnerBlocks:S,hasParent:R}=(0,b.useSelect)((e=>({hasParent:e(i.store).getBlockParents(o).length>0,hasInnerBlocks:e(i.store).getBlocks(o).length>0})),[o]),{containerWidthType:P}=p;(0,r.useEffect)((()=>{let e="";R&&(e="is_wcb_container_child"),n({containerClassName:e})}),[R,P]);const{colunmGap:$,rowGap:M}=y,D=(0,i.useBlockProps)({className:"wcb-container__inner is-layout-flow"}),L=(0,i.useInnerBlocksProps)(D,{allowedBlocks:null,renderAppender:()=>S?a?(0,r.createElement)(i.InnerBlocks.DefaultBlockAppender,null):null:(0,r.createElement)(i.InnerBlocks.ButtonBlockAppender,null)}),A=(0,r.useCallback)((()=>({uniqueId:s,advance_responsiveCondition:u,advance_zIndex:d,containerClassName:c,general_container:p,general_flexProperties:m,styles_background:f,styles_border:g,styles_boxShadow:k,styles_color:w,styles_dimensions:y,advance_motionEffect:_})),[s,u,d,c,p,m,f,g,k,w,y,_]),B=(0,i.useBlockProps)({ref:C,className:`wcb-container__wrap ${s} ${c}`.trim()}),O=B.id;return(0,r.useEffect)((()=>{n({uniqueId:ua(O)})}),[O]),(0,r.createElement)(ca,{uniqueKey:o},(0,r.createElement)("div",{...B,"data-uniqueid":s},s&&(0,r.createElement)(Zo,{...A()}),(0,r.createElement)(Ko,{bgType:f.bgType,videoData:f.videoData}),(0,r.createElement)(Jo,{bgType:f.bgType,overlayType:f.overlayType}),(0,r.createElement)("div",{...L,id:void 0,style:{}}),(0,r.createElement)(Yt,{uniqueId:s,renderTabPanels:e=>{switch(e.name){case"General":return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelBody,{title:(0,l.__)("Container","boostify-blocks"),onToggle:()=>N("General","Container",!0),initialOpen:"Container"===I||"first"===I,opened:"Container"===I||void 0},(0,r.createElement)(kr,{containerControl:t.general_container,setAttrs__container:e=>{let t={general_container:e};t="Boxed"===e.containerWidthType?{...t,align:"wide"}:"Full Width"===e.containerWidthType?{...t,align:"full"}:{...t,align:""},n(t)},showContainerWidthType:!R})),(0,r.createElement)(v.PanelBody,{onToggle:()=>N("General","Flex Properties"),initialOpen:"Flex Properties"===I,opened:"Flex Properties"===I||void 0,title:(0,l.__)("Flex Properties","boostify-blocks")},(0,r.createElement)(wr,{flexPropertiesControl:t.general_flexProperties,setAttrs__flexProperties:e=>n({general_flexProperties:e})})));case"Styles":return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(v.PanelBody,{onToggle:()=>N("Styles","Background",!0),initialOpen:"Background"===T||"first"===T,opened:"Background"===T||void 0,title:(0,l.__)("Background","boostify-blocks")},(0,r.createElement)(Jt,{backgroundControl:t.styles_background,setAttrs__backgroundControl:e=>n({styles_background:e})})),(0,r.createElement)(v.PanelBody,{initialOpen:"Color"===T,title:(0,l.__)("Color","boostify-blocks"),onToggle:()=>N("Styles","Color"),opened:"Styles"===T||void 0},(0,r.createElement)(h,{onChange:e=>n({styles_color:e}),color:t.styles_color})),(0,r.createElement)(v.PanelBody,{onToggle:()=>N("Styles","Border"),initialOpen:"Border"===T,opened:"Border"===T||void 0,title:(0,l.__)("Border","boostify-blocks")},(0,r.createElement)(en,{borderControl:t.styles_border,setAttrs__border:e=>n({styles_border:e})})),(0,r.createElement)(v.PanelBody,{onToggle:()=>N("Styles","Box Shadow"),initialOpen:"Box Shadow"===T,opened:"Box Shadow"===T||void 0,title:(0,l.__)("Box Shadow","boostify-blocks")},(0,r.createElement)(Yn,{boxShadowControl:t.styles_boxShadow,setAttrs__boxShadow:e=>n({styles_boxShadow:e})})),(0,r.createElement)(v.PanelBody,{onToggle:()=>N("Styles","Dimension"),initialOpen:"Dimension"===T,opened:"Dimension"===T||void 0,title:(0,l.__)("Dimension","boostify-blocks")},(0,r.createElement)(sr,{dimensionControl:t.styles_dimensions,setAttrs__dimensions:e=>n({styles_dimensions:e})})));case"Advances":return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(sa,{advance_motionEffect:_,advance_responsiveCondition:t.advance_responsiveCondition,advance_zIndex:t.advance_zIndex,handleTogglePanel:N,setAttributes:n,tabAdvancesIsPanelOpen:E}));default:return(0,r.createElement)("div",null)}}})))},pa=({attributes:e,setAttributes:t,name:n,clientId:o,onSelect:c})=>{(0,r.useEffect)((()=>{t({general_flexProperties:u})}),[]);const{blockType:d,defaultVariation:p,variations:m}=(0,b.useSelect)((e=>{const{getBlockVariations:t,getBlockType:r,getDefaultBlockVariation:o}=e(a.store);return{blockType:r(n),defaultVariation:o(n,"block"),variations:t(n,"block")}}),[n]),{replaceInnerBlocks:f}=(0,b.useDispatch)(i.store);return(0,r.createElement)("div",{...(0,i.useBlockProps)()},(0,r.createElement)(i.__experimentalBlockVariationPicker,{icon:(0,s.get)(d,["icon","src"]),label:(0,s.get)(d,["title"]),instructions:(0,l.__)("Select a variation to start with."),onSelect:(n=p)=>{c(),"object"==typeof n.attributes&&t({...e,...n.attributes}),n.innerBlocks&&f(o,(0,a.createBlocksFromInnerBlocksTemplate)(n.innerBlocks),!0)},variations:m,allowSkip:!0}))},ma=function({className:e="",uniqueId:t="",HtmlTag:n="div",children:o,attributes:a,id:l,...i}){let s="";try{const e=t=>{if(Array.isArray(t))return 0===t.length?{}:t;if(t&&"object"==typeof t){const n={};for(const[r,o]of Object.entries(t))n[r]=e(o);return n}return t},t=e(a);s=c().escape(JSON.stringify(t))}catch(t){console.log("attributes JSON.stringify error on SAVE function",{error:t,className:e,attributes:a})}const u=a?.advance_responsiveCondition||{},d=[u?.isHiddenOnDesktop?"wcb-hide-desktop":"",u?.isHiddenOnTablet?"wcb-hide-tab":"",u?.isHiddenOnMobile?"wcb-hide-mob":""].filter(Boolean).join(" ");return(0,r.createElement)(n,{...i,className:`wcb-cm wcb-update-div ${d} ${e.trim()} ${t.trim()}`,id:l||a?.anchor,"data-uniqueid":t,"data-is-wcb-save-common":!0},o,(0,r.createElement)("div",{"data-wcb-global-styles":t}),(0,r.createElement)("pre",{"data-wcb-block-attrs":t,style:{display:"none"}},s))},fa=JSON.parse('{"UU":"boostify-blocks/container"}'),ba={uniqueId:{type:"string",default:""},containerClassName:{type:"string",default:""},isShowVariations:{type:"bool",default:!0},general_container:{type:"object",default:br},general_flexProperties:{type:"object",default:{...u,flexDirection:{Desktop:"column"},alignItems:{Desktop:"stretch"},justifyContent:{Desktop:"center"},flexWrap:{Desktop:"nowrap",Mobile:"wrap"}}},styles_color:{type:"string",default:"#000"},styles_background:{type:"object",default:Kt},styles_border:{type:"object",default:Xt},styles_boxShadow:{type:"object",default:Kn},styles_dimensions:{type:"object",default:{...Xn,colunmGap:{Desktop:""},rowGap:{Desktop:""},margin:{Desktop:{bottom:"",left:"",right:"",top:""}},padding:{Desktop:{bottom:"",left:"",right:"",top:""}}}},advance_responsiveCondition:{type:"object",default:na},advance_zIndex:{type:"object",default:oa},advance_motionEffect:{type:"object",default:{animationDelay:0,animationDuration:"fast",entranceAnimation:"",repeat:"1"}}},va=e=>(0,r.createElement)("div",{className:"w-16 h-12 flex items-center justify-center "},(0,r.createElement)("div",{className:"grid grid-rows-2 grid-cols-12 w-14 h-8 p-0.5 bg-[#007cba] gap-0.5 rounded-sm"},e.children)),ha=(e="nowrap",t="column",n="stretch",r="center")=>({...Object.keys(ba).reduce(((e,t)=>({...e,[t]:ba[t]?.default})),{}),general_flexProperties:{...u,flexDirection:{Desktop:t,Tablet:"row"},flexWrap:{Desktop:e,Mobile:"wrap"},alignItems:{Desktop:n},justifyContent:{Desktop:r}}}),ga=e=>({general_container:{...br,containerWidthType:"Custom",customWidth:{Desktop:e,Tablet:e,Mobile:"100%"}}}),ka=[{name:"one-column-full",title:(0,l.__)("100"),description:(0,l.__)("One column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-12 row-span-2 bg-white"})),innerBlocks:[],scope:["block"],isDefault:!0,attributes:ha("nowrap","column","stretch","center")},{name:"two-columns-equal",title:(0,l.__)("50 / 50"),description:(0,l.__)("Two columns; equal split"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-6 row-span-2 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 row-span-2 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"two-columns-33-66",title:(0,l.__)("33 / 66"),description:(0,l.__)("Two columns; one-third, two-thirds split"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"row-span-2 col-span-4 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-8 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("66.66%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"two-columns-66-33",title:(0,l.__)("66 / 33"),description:(0,l.__)("Two columns; two-thirds, one-third split"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"row-span-2 col-span-8 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-4 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("66.66%")],["boostify-blocks/container",ga("33.33%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"three-columns-equal",title:(0,l.__)("33 / 33 / 33"),description:(0,l.__)("Three columns; equal split"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"row-span-2 col-span-4 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-4 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-4 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"four-columns-equal",title:(0,l.__)("25 / 25 / 25 / 25"),description:(0,l.__)("Three columns; equal split"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("25%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"three-columns-25-50-25",title:(0,l.__)("25 / 50 / 25"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-6 bg-white"}),(0,r.createElement)("div",{className:"row-span-2 col-span-3 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("25%")]],scope:["block"],attributes:ha("nowrap","row")},{name:"two-rows-equal",title:(0,l.__)("100 / 100 / x2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-12 bg-white"}),(0,r.createElement)("div",{className:"col-span-12 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("100%")],["boostify-blocks/container",ga("100%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-50-50-2full",title:(0,l.__)("50 / 50 / 100"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-12 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("100%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-33-33-33-50x2",title:(0,l.__)("33 x 3 / 50 x 2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-33-66",title:(0,l.__)("33 / 66 / x2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-8 bg-white"}),(0,r.createElement)("div",{className:"col-span-8 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("66.66%")],["boostify-blocks/container",ga("66.66%")],["boostify-blocks/container",ga("33.33%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-50-50",title:(0,l.__)("50 / 50 / x2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("50%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-66-33",title:(0,l.__)("66 / 33 / x2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-8 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-8 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("66.66%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("66.66%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-25-50-25",title:(0,l.__)("25 / 50 / 25 / x2"),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-3 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-3 bg-white"}),(0,r.createElement)("div",{className:"col-span-3 bg-white"}),(0,r.createElement)("div",{className:"col-span-6 bg-white"}),(0,r.createElement)("div",{className:"col-span-3 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("25%")],["boostify-blocks/container",ga("50%")],["boostify-blocks/container",ga("25%")]],scope:["block"],attributes:ha("wrap","row")},{name:"two-rows-33-equal",title:(0,l.__)("33 / 33 / 33 "),description:(0,l.__)("Three columns; wide center column"),icon:(0,r.createElement)(va,null,(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"}),(0,r.createElement)("div",{className:"col-span-4 bg-white"})),innerBlocks:[["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")],["boostify-blocks/container",ga("33.33%")]],scope:["block"],attributes:ha("wrap","row")}],wa={attributes:ba,save:function({attributes:e}){const{styles_background:t,uniqueId:n,general_container:o,styles_dimensions:a,advance_responsiveCondition:l,advance_zIndex:s,general_flexProperties:c,styles_border:u,styles_boxShadow:d,styles_color:p,containerClassName:m,advance_motionEffect:f}=e,{htmlTag:b="div"}=o,v={styles_background:t,uniqueId:n,general_container:o,styles_dimensions:a,advance_responsiveCondition:l,advance_zIndex:s,general_flexProperties:c,styles_border:u,styles_boxShadow:d,styles_color:p,containerClassName:m,advance_motionEffect:f},h=i.useBlockProps.save({className:"wcb-container__wrap "+m}),g=i.useBlockProps.save(),k=i.useInnerBlocksProps.save(g);return(0,r.createElement)(ma,{...h,attributes:v,uniqueId:n,HtmlTag:b},(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Ko,{bgType:t.bgType,videoData:t.videoData}),(0,r.createElement)(Jo,{bgType:t.bgType,overlayType:t.overlayType}),(0,r.createElement)("div",{children:k.children,className:"wcb-container__inner",style:{}})))}},ya=[wa,{},{}],{Fragment:_a}=wp.element,{withSelect:Ca}=wp.data;(0,a.registerBlockType)(fa.UU,{edit:e=>{const{clientId:t,attributes:n,setAttributes:o}=e,{hasInnerBlocks:a,hasParent:l}=(0,b.useSelect)((e=>({hasParent:e(i.store).getBlockParents(t).length>0,hasInnerBlocks:e(i.store).getBlocks(t).length>0})),[t]),[s,c]=(0,r.useState)(!1),u=(0,r.useMemo)((()=>l||a||s||n.uniqueId?da:pa),[l,a,s]);return(0,r.createElement)(u,{...e,onSelect:()=>{c(!0)}})},save:function({attributes:e}){const{styles_background:t,uniqueId:n,general_container:o,styles_dimensions:a,advance_responsiveCondition:l,advance_zIndex:s,general_flexProperties:c,styles_border:u,styles_boxShadow:d,styles_color:p,containerClassName:m,advance_motionEffect:f}=e,{htmlTag:b="div"}=o,v={styles_background:t,uniqueId:n,general_container:o,styles_dimensions:a,advance_responsiveCondition:l,advance_zIndex:s,general_flexProperties:c,styles_border:u,styles_boxShadow:d,styles_color:p,containerClassName:m,advance_motionEffect:f},h=i.useBlockProps.save({className:"wcb-container__wrap "+m}),g=i.useBlockProps.save(),k=i.useInnerBlocksProps.save(g);return(0,r.createElement)(ma,{...h,attributes:v,uniqueId:n,HtmlTag:b},(0,r.createElement)(r.Fragment,null,(0,r.createElement)(Ko,{bgType:t.bgType,videoData:t.videoData}),(0,r.createElement)(Jo,{bgType:t.bgType,overlayType:t.overlayType}),(0,r.createElement)("div",{children:k.children,className:"wcb-container__inner",style:{}})))},attributes:ba,variations:ka,example:function(e){let t={};for(let n in e)e.hasOwnProperty(n)&&(t[n]=e[n].default);return t}(ba),deprecated:ya,icon:(0,r.createElement)("svg",{className:"wcb-editor-block-icons fill-none ",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M10.5 13.1V19.9C10.5 21.4 9.86 22 8.27 22H4.23C2.64 22 2 21.4 2 19.9V13.1C2 11.6 2.64 11 4.23 11H8.27C9.86 11 10.5 11.6 10.5 13.1Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,r.createElement)("path",{d:"M10.5 4.1V5.9C10.5 7.4 9.86 8 8.27 8H4.23C2.64 8 2 7.4 2 5.9V4.1C2 2.6 2.64 2 4.23 2H8.27C9.86 2 10.5 2.6 10.5 4.1Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))})},1609:e=>{"use strict";e.exports=window.React},2149:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))}));e.exports=o},3072:(e,t)=>{"use strict";var n="function"==typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,c=n?Symbol.for("react.context"):60110,u=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,f=n?Symbol.for("react.suspense_list"):60120,b=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,h=n?Symbol.for("react.block"):60121,g=n?Symbol.for("react.fundamental"):60117,k=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function y(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case u:case d:case a:case i:case l:case m:return e;default:switch(e=e&&e.$$typeof){case c:case p:case v:case b:case s:return e;default:return t}}case o:return t}}}function _(e){return y(e)===d}t.AsyncMode=u,t.ConcurrentMode=d,t.ContextConsumer=c,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=a,t.Lazy=v,t.Memo=b,t.Portal=o,t.Profiler=i,t.StrictMode=l,t.Suspense=m,t.isAsyncMode=function(e){return _(e)||y(e)===u},t.isConcurrentMode=_,t.isContextConsumer=function(e){return y(e)===c},t.isContextProvider=function(e){return y(e)===s},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return y(e)===p},t.isFragment=function(e){return y(e)===a},t.isLazy=function(e){return y(e)===v},t.isMemo=function(e){return y(e)===b},t.isPortal=function(e){return y(e)===o},t.isProfiler=function(e){return y(e)===i},t.isStrictMode=function(e){return y(e)===l},t.isSuspense=function(e){return y(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===d||e===i||e===l||e===m||e===f||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===s||e.$$typeof===c||e.$$typeof===p||e.$$typeof===g||e.$$typeof===k||e.$$typeof===w||e.$$typeof===h)},t.typeOf=y},3404:(e,t,n)=>{"use strict";e.exports=n(3072)},3682:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",d:"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"}))}));e.exports=o},4146:(e,t,n)=>{"use strict";var r=n(3404),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return r.isMemo(e)?l:i[e.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=l;var c=Object.defineProperty,u=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,f=Object.prototype;e.exports=function e(t,n,r){if("string"!=typeof n){if(f){var o=m(n);o&&o!==f&&e(t,o,r)}var l=u(n);d&&(l=l.concat(d(n)));for(var i=s(t),b=s(n),v=0;v<l.length;++v){var h=l[v];if(!(a[h]||r&&r[h]||b&&b[h]||i&&i[h])){var g=p(n,h);try{c(t,h,g)}catch(e){}}}}return t}},7500:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 002.25-2.25v-15a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 4.5v15a2.25 2.25 0 002.25 2.25z"}))}));e.exports=o},8026:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"}))}));e.exports=o},8477:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}))}));e.exports=o},8698:(e,t,n)=>{const r=n(1609),o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"}))}));e.exports=o}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],i=!0,s=0;s<n.length;s++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={9625:0,4509:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,i,s]=n,c=0;if(l.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var u=s(r)}for(t&&t(n);c<l.length;c++)a=l[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},n=globalThis.webpackChunkboostify_blocks=globalThis.webpackChunkboostify_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[4509],(()=>r(1163)));o=r.O(o)})();