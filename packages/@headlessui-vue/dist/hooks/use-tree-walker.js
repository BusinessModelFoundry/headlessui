import{watchEffect as u}from"vue";import{getOwnerDocument as E}from'../utils/owner.js';function p({container:e,accept:t,walk:d,enabled:o}){u(()=>{let r=e.value;if(!r||o!==void 0&&!o.value)return;let l=E(e);if(!l)return;let c=Object.assign(f=>t(f),{acceptNode:t}),n=l.createTreeWalker(r,NodeFilter.SHOW_ELEMENT,c,!1);for(;n.nextNode();)d(n.currentNode)})}export{p as useTreeWalker};