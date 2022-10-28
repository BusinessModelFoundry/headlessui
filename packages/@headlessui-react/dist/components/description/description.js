import f,{createContext as m,useContext as D,useMemo as l,useState as P}from"react";import{useId as T}from'../../hooks/use-id.js';import{forwardRefWithAs as g,render as x}from'../../utils/render.js';import{useIsoMorphicEffect as E}from'../../hooks/use-iso-morphic-effect.js';import{useSyncRefs as h}from'../../hooks/use-sync-refs.js';import{useEvent as v}from'../../hooks/use-event.js';let d=m(null);function u(){let r=D(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}return r}function k(){let[r,t]=P([]);return[r.length>0?r.join(" "):void 0,l(()=>function(e){let i=v(n=>(t(o=>[...o,n]),()=>t(o=>{let c=o.slice(),p=c.indexOf(n);return p!==-1&&c.splice(p,1),c}))),s=l(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return f.createElement(d.Provider,{value:s},e.children)},[t])]}let S="p",F=g(function(t,a){let e=u(),i=`headlessui-description-${T()}`,s=h(a);E(()=>e.register(i),[i,e.register]);let n=t,o={ref:s,...e.props,id:i};return x({ourProps:o,theirProps:n,slot:e.slot||{},defaultTag:S,name:e.name||"Description"})});export{F as Description,k as useDescriptions};
