import{l as N,p as d,c as y,i as D,b as m,d as B,o as n,q as F}from"./disclose-version.DgrYO7ja.js";import{i as S,s as A,a as R}from"./legacy.CqLudUwD.js";import{j as U,l as x,n as C,v as V,R as q,g as G,P as M}from"./index-client.aj5FnfNL.js";import{b as i}from"./misc.DcPUcBRK.js";import{x as I,a as H,c as J}from"./utils.BbjIOT-s.js";import{c as K}from"./index.BnIFU7cG.js";import"./paths.Bj1w_iqZ.js";function L(f,t){const u=[];return t.builders.forEach(c=>{const r=c.action(f);r&&u.push(r)}),{destroy:()=>{u.forEach(c=>{c.destroy&&c.destroy()})}}}function Q(f){const t={};return f.forEach(u=>{Object.keys(u).forEach(c=>{c!=="action"&&(t[c]=u[c])})}),t}function T(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["href","type","builders","el"]);U(t,!1);let r=d(t,"href",24,()=>{}),k=d(t,"type",24,()=>{}),v=d(t,"builders",24,()=>[]),b=d(t,"el",28,()=>{});const w={"data-button-root":""};S();var l=y(),j=x(l);D(j,()=>v()&&v().length,g=>{var h=y(),P=x(h);const o=M(()=>Q(v()));I(P,()=>r()?"a":"button",!1,(s,z)=>{B(s,e=>b(e),()=>b()),H(s,(e,O)=>L(e,O),()=>({builders:v()}));let _;V(()=>_=R(s,_,{type:r()?void 0:k(),href:r(),tabindex:"0",...G(o),...c,...w},void 0,s.namespaceURI===q,s.nodeName.includes("-"))),n("click",s,function(e){i.call(this,t,e)}),n("change",s,function(e){i.call(this,t,e)}),n("keydown",s,function(e){i.call(this,t,e)}),n("keyup",s,function(e){i.call(this,t,e)}),n("mouseenter",s,function(e){i.call(this,t,e)}),n("mouseleave",s,function(e){i.call(this,t,e)}),n("mousedown",s,function(e){i.call(this,t,e)}),n("pointerdown",s,function(e){i.call(this,t,e)}),n("mouseup",s,function(e){i.call(this,t,e)}),n("pointerup",s,function(e){i.call(this,t,e)});var E=y(),a=x(E);A(a,t,"default",{}),m(z,E)}),m(g,h)},g=>{var h=y(),P=x(h);I(P,()=>r()?"a":"button",!1,(o,s)=>{B(o,a=>b(a),()=>b());let z;V(()=>z=R(o,z,{type:r()?void 0:k(),href:r(),tabindex:"0",...c,...w},void 0,o.namespaceURI===q,o.nodeName.includes("-"))),n("click",o,function(a){i.call(this,t,a)}),n("change",o,function(a){i.call(this,t,a)}),n("keydown",o,function(a){i.call(this,t,a)}),n("keyup",o,function(a){i.call(this,t,a)}),n("mouseenter",o,function(a){i.call(this,t,a)}),n("mouseleave",o,function(a){i.call(this,t,a)}),n("mousedown",o,function(a){i.call(this,t,a)}),n("pointerdown",o,function(a){i.call(this,t,a)}),n("mouseup",o,function(a){i.call(this,t,a)}),n("pointerup",o,function(a){i.call(this,t,a)});var _=y(),E=x(_);A(E,t,"default",{}),m(s,_)}),m(g,h)}),m(f,l),C()}const W=K({base:"ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});function et(f,t){const u=N(t,["children","$$slots","$$events","$$legacy"]),c=N(u,["class","variant","size","builders"]);U(t,!1);let r=d(t,"class",8,void 0),k=d(t,"variant",8,"default"),v=d(t,"size",8,"default"),b=d(t,"builders",24,()=>[]);S();var w=M(()=>J(W({variant:k(),size:v(),className:r()})));T(f,F({get builders(){return b()},get class(){return G(w)},type:"button"},()=>c,{$$events:{click(l){i.call(this,t,l)},keydown(l){i.call(this,t,l)}},children:(l,j)=>{var g=y(),h=x(g);A(h,t,"default",{}),m(l,g)},$$slots:{default:!0}})),C()}export{et as B};