import{useEffect as s,useRef as f}from"react";import{useEvent as i}from'./use-event.js';function m(u,t){let e=f([]),r=i(u);s(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}export{m as useWatch};