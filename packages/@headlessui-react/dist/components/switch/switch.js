import l,{Fragment as L,createContext as R,useContext as A,useMemo as S,useRef as H,useState as G}from"react";import{forwardRefWithAs as K,render as E,compact as M}from'../../utils/render.js';import{useId as x}from'../../hooks/use-id.js';import{Keys as w}from'../keyboard.js';import{isDisabledReactIssue7711 as U}from'../../utils/bugs.js';import{Label as _,useLabels as F}from'../label/label.js';import{Description as B,useDescriptions as I}from'../description/description.js';import{useResolveButtonType as O}from'../../hooks/use-resolve-button-type.js';import{useSyncRefs as W}from'../../hooks/use-sync-refs.js';import{Hidden as j,Features as N}from'../../internal/hidden.js';import{attemptSubmit as $}from'../../utils/form.js';import{useEvent as c}from'../../hooks/use-event.js';import{useControllable as q}from'../../hooks/use-controllable.js';let h=R(null);h.displayName="GroupContext";let z=L;function J(b){let[t,o]=G(null),[i,d]=F(),[a,s]=I(),u=S(()=>({switch:t,setSwitch:o,labelledby:i,describedby:a}),[t,o,i,a]),p={},m=b;return l.createElement(s,{name:"Switch.Description"},l.createElement(d,{name:"Switch.Label",props:{onClick(){!t||(t.click(),t.focus({preventScroll:!0}))}}},l.createElement(h.Provider,{value:u},E({ourProps:p,theirProps:m,defaultTag:z,name:"Switch.Group"}))))}let Q="button",V=K(function(t,o){let{checked:i,defaultChecked:d=!1,onChange:a,name:s,value:u,...p}=t,m=`headlessui-switch-${x()}`,r=A(h),y=H(null),P=W(y,o,r===null?null:r.setSwitch),[n,f]=q(i,a,d),T=c(()=>f==null?void 0:f(!n)),v=c(e=>{if(U(e.currentTarget))return e.preventDefault();e.preventDefault(),T()}),k=c(e=>{e.key===w.Space?(e.preventDefault(),T()):e.key===w.Enter&&$(e.currentTarget)}),g=c(e=>e.preventDefault()),C=S(()=>({checked:n}),[n]),D={id:m,ref:P,role:"switch",type:O(t,y),tabIndex:0,"aria-checked":n,"aria-labelledby":r==null?void 0:r.labelledby,"aria-describedby":r==null?void 0:r.describedby,onClick:v,onKeyUp:k,onKeyPress:g};return l.createElement(l.Fragment,null,s!=null&&n&&l.createElement(j,{features:N.Hidden,...M({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:n,name:s,value:u})}),E({ourProps:D,theirProps:p,slot:C,defaultTag:Q,name:"Switch"}))}),be=Object.assign(V,{Group:J,Label:_,Description:B});export{be as Switch};
