import i,{useEffect as h,useRef as m}from"react";import{forwardRefWithAs as y,render as S}from'../../utils/render.js';import{useServerHandoffComplete as g}from'../../hooks/use-server-handoff-complete.js';import{useSyncRefs as B}from'../../hooks/use-sync-refs.js';import{Features as M,Hidden as L}from'../../internal/hidden.js';import{focusElement as f,focusIn as b,Focus as E,FocusResult as I}from'../../utils/focus-management.js';import{match as P}from'../../utils/match.js';import{useEvent as _}from'../../hooks/use-event.js';import{useTabDirection as U,Direction as d}from'../../hooks/use-tab-direction.js';import{useIsMounted as H}from'../../hooks/use-is-mounted.js';import{useOwnerDocument as C}from'../../hooks/use-owner.js';import{useEventListener as R}from'../../hooks/use-event-listener.js';import{microTask as F}from'../../utils/micro-task.js';import{useWatch as O}from'../../hooks/use-watch.js';let N="div";var v=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(v||{});let fe=Object.assign(y(function(u,e){let l=m(null),o=B(l,e),{initialFocus:a,containers:r,features:n=30,...c}=u;g()||(n=1);let s=C(l);V({ownerDocument:s},Boolean(n&16));let j=x({ownerDocument:s,container:l,initialFocus:a},Boolean(n&2));G({ownerDocument:s,container:l,containers:r,previousActiveElement:j},Boolean(n&8));let k=U(),p=_(()=>{let T=l.current;!T||P(k.current,{[d.Forwards]:()=>b(T,E.First),[d.Backwards]:()=>b(T,E.Last)})}),A={ref:o};return i.createElement(i.Fragment,null,Boolean(n&4)&&i.createElement(L,{as:"button",type:"button",onFocus:p,features:M.Focusable}),S({ourProps:A,theirProps:c,defaultTag:N,name:"FocusTrap"}),Boolean(n&4)&&i.createElement(L,{as:"button",type:"button",onFocus:p,features:M.Focusable}))}),{features:v});function V({ownerDocument:t},u){let e=m(null);R(t==null?void 0:t.defaultView,"focusout",o=>{!u||e.current||(e.current=o.target)},!0),O(()=>{u||((t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&f(e.current),e.current=null)},[u]);let l=m(!1);h(()=>(l.current=!1,()=>{l.current=!0,F(()=>{!l.current||(f(e.current),e.current=null)})}),[])}function x({ownerDocument:t,container:u,initialFocus:e},l){let o=m(null),a=H();return O(()=>{if(!l)return;let r=u.current;!r||F(()=>{if(!a.current)return;let n=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===n){o.current=n;return}}else if(r.contains(n)){o.current=n;return}e!=null&&e.current?f(e.current):b(r,E.First)===I.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=t==null?void 0:t.activeElement})},[l]),o}function G({ownerDocument:t,container:u,containers:e,previousActiveElement:l},o){let a=H();R(t==null?void 0:t.defaultView,"focus",r=>{if(!o||!a.current)return;let n=new Set(e==null?void 0:e.current);n.add(u);let c=l.current;if(!c)return;let s=r.target;s&&s instanceof HTMLElement?W(n,s)?(l.current=s,f(s)):(r.preventDefault(),r.stopPropagation(),f(c)):f(l.current)},!0)}function W(t,u){var e;for(let l of t)if((e=l.current)!=null&&e.contains(u))return!0;return!1}export{fe as FocusTrap};
