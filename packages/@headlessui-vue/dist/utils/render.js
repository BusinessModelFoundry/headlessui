import{h as m,cloneVNode as h,Fragment as b}from"vue";import{match as j}from'./match.js';var R=(o=>(o[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o))(R||{}),O=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(O||{});function P({visible:r=!0,features:t=0,ourProps:e,theirProps:o,...i}){var a;let n=k(o,e),s=Object.assign(i,{props:n});if(r||t&2&&n.static)return p(s);if(t&1){let l=(a=n.unmount)==null||a?0:1;return j(l,{[0](){return null},[1](){return p({...i,props:{...n,hidden:!0,style:{display:"none"}}})}})}return p(s)}function p({props:r,attrs:t,slots:e,slot:o,name:i}){var y;let{as:n,...s}=w(r,["unmount","static"]),a=(y=e.default)==null?void 0:y.call(e,o),l={};if(o){let d=!1,u=[];for(let[f,c]of Object.entries(o))typeof c=="boolean"&&(d=!0),c===!0&&u.push(f);d&&(l["data-headlessui-state"]=u.join(" "))}if(n==="template"){if(a=g(a!=null?a:[]),Object.keys(s).length>0||Object.keys(t).length>0){let[d,...u]=a!=null?a:[];if(!x(d)||u.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${i} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(t)).sort((f,c)=>f.localeCompare(c)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return h(d,Object.assign({},s,l))}return Array.isArray(a)&&a.length===1?a[0]:a}return m(n,Object.assign({},s,l),{default:()=>a})}function g(r){return r.flatMap(t=>t.type===b?g(t.children):[t])}function k(...r){var o;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let i of r)for(let n in i)n.startsWith("on")&&typeof i[n]=="function"?((o=e[n])!=null||(e[n]=[]),e[n].push(i[n])):t[n]=i[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(i=>[i,void 0])));for(let i in e)Object.assign(t,{[i](n,...s){let a=e[i];for(let l of a){if(n instanceof Event&&n.defaultPrevented)return;l(n,...s)}}});return t}function V(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function w(r,t=[]){let e=Object.assign({},r);for(let o of t)o in e&&delete e[o];return e}function x(r){return r==null?!1:typeof r.type=="string"||typeof r.type=="object"||typeof r.type=="function"}export{R as Features,O as RenderStrategy,V as compact,w as omit,P as render};
