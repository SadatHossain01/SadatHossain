import{a3 as H,av as S,af as R,aw as $,Q as L,a4 as z,m as c,am as Q,i as J,az as b,h as K,aO as X,aP as q,aN as O,a0 as E,_ as A,o as u,aJ as w,aQ as Z,aR as ee,X as B,aS as D,aT as M,aK as te,aU as re,aV as ne,aG as ae,aA as oe,aW as ie,j as se,p as ue,a as fe,v as de}from"./index-client.CRB7gsTB.js";function we(e,t){if(t){const r=document.body;e.autofocus=!0,H(()=>{document.activeElement===r&&e.focus()})}}let W=!1;function le(){W||(W=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function F(e){var t=$,r=L;S(null),R(null);try{return e()}finally{S(t),R(r)}}function Te(e,t,r,o=r){e.addEventListener(t,()=>F(r));const a=e.__on_r;a?e.__on_r=()=>{a(),o()}:e.__on_r=o,le()}const U=new Set,I=new Set;function be(e){if(!c)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function ce(e,t,r,o){function a(n){if(o.capture||T.call(t,n),!n.cancelBubble)return F(()=>r.call(this,n))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?H(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function Ae(e,t,r,o,a){var n={capture:o,passive:a},i=ce(e,t,r,n);(t===document.body||t===window||t===document)&&z(()=>{t.removeEventListener(e,i,n)})}function Le(e){for(var t=0;t<e.length;t++)U.add(e[t]);for(var r of I)r(e)}function T(e){var V;var t=this,r=t.ownerDocument,o=e.type,a=((V=e.composedPath)==null?void 0:V.call(e))||[],n=a[0]||e.target,i=0,_=e.__root;if(_){var d=a.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var y=a.indexOf(t);if(y===-1)return;d<=y&&(i=d)}if(n=a[i]||e.target,n!==t){Q(e,"currentTarget",{configurable:!0,get(){return n||r}});var k=$,v=L;S(null),R(null);try{for(var s,f=[];n!==null;){var h=n.assignedSlot||n.parentNode||n.host||null;try{var m=n["__"+o];if(m!==void 0&&!n.disabled)if(J(m)){var[Y,...x]=m;Y.apply(n,[e,...x])}else m.call(n,e)}catch(N){s?f.push(N):s=N}if(e.cancelBubble||h===t||h===null)break;n=h}if(s){for(let N of f)queueMicrotask(()=>{throw N});throw s}}finally{e.__root=t,delete e.currentTarget,S(k),R(v)}}}let l;function _e(){l=void 0}function Ne(e){let t=null,r=c;var o;if(c){for(t=u,l===void 0&&(l=w(document.head));l!==null&&(l.nodeType!==8||l.data!==q);)l=O(l);l===null?E(!1):l=A(O(l))}c||(o=document.head.appendChild(b()));try{K(()=>e(o),X)}finally{r&&(E(!0),l=u,A(t))}}function j(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=L;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Se(e,t){var r=(t&Z)!==0,o=(t&ee)!==0,a,n=!e.startsWith("<!>");return()=>{if(c)return p(u,null),u;a===void 0&&(a=j(n?e:"<!>"+e),r||(a=w(a)));var i=o?document.importNode(a,!0):a.cloneNode(!0);if(r){var _=w(i),d=i.lastChild;p(_,d)}else p(i,i);return i}}function Re(e,t,r="svg"){var o=!e.startsWith("<!>"),a=`<${r}>${o?e:"<!>"+e}</${r}>`,n;return()=>{if(c)return p(u,null),u;if(!n){var i=j(a),_=w(i);n=w(_)}var d=n.cloneNode(!0);return p(d,d),d}}function ke(e=""){if(!c){var t=b(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=b()),A(r)),p(r,r),r}function Me(){if(c)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=b();return e.append(t,r),p(t,r),e}function Oe(e,t){if(c){L.nodes_end=u,B();return}e!==null&&e.before(t)}function De(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ve=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ie(e){return ve.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function Ce(e){return e=e.toLowerCase(),pe[e]??e}const he=["touchstart","touchmove"];function ye(e){return he.includes(e)}let C=!0;function Pe(e){C=e}function Ve(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function me(e,t){return G(e,t)}function We(e,t){D(),t.intro=t.intro??!1;const r=t.target,o=c,a=u;try{for(var n=w(r);n&&(n.nodeType!==8||n.data!==q);)n=O(n);if(!n)throw M;E(!0),A(n),B();const i=G(e,{...t,anchor:n});if(u===null||u.nodeType!==8||u.data!==te)throw re(),M;return E(!1),i}catch(i){if(i===M)return t.recover===!1&&ne(),D(),ae(r),E(!1),me(e,t);throw i}finally{E(o),A(a),_e()}}const g=new Map;function G(e,{target:t,anchor:r,props:o={},events:a,context:n,intro:i=!0}){D();var _=new Set,d=v=>{for(var s=0;s<v.length;s++){var f=v[s];if(!_.has(f)){_.add(f);var h=ye(f);t.addEventListener(f,T,{passive:h});var m=g.get(f);m===void 0?(document.addEventListener(f,T,{passive:h}),g.set(f,1)):g.set(f,m+1)}}};d(oe(U)),I.add(d);var y=void 0,k=ie(()=>{var v=r??t.appendChild(b());return se(()=>{if(n){ue({});var s=de;s.c=n}a&&(o.$$events=a),c&&p(v,null),C=i,y=e(v,o)||{},C=!0,c&&(L.nodes_end=u),n&&fe()}),()=>{var h;for(var s of _){t.removeEventListener(s,T);var f=g.get(s);--f===0?(document.removeEventListener(s,T),g.delete(s)):g.set(s,f)}I.delete(d),P.delete(y),v!==r&&((h=v.parentNode)==null||h.removeChild(v))}});return P.set(y,k),y}let P=new WeakMap;function He(e){const t=P.get(e);t&&t()}const ge="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ge);export{Oe as a,Se as b,Me as c,We as d,Ae as e,C as f,p as g,Ne as h,j as i,Pe as j,le as k,Te as l,me as m,Re as n,De as o,ce as p,Le as q,be as r,Ve as s,ke as t,He as u,we as v,Ce as w,Ie as x};