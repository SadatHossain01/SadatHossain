import{B as N}from"../chunks/blogs.BZLghu8X.js";import{j as T,c as U,i as B,e as c,b as r,t as D,s as u,n as A}from"../chunks/disclose-version.DgrYO7ja.js";import{j as C,n as G,g as f,l as E,v,x as _,r as g,J as p,q as x,w as h}from"../chunks/index-client.aj5FnfNL.js";import{B as I,H as K}from"../chunks/base-page.B-THh9fL.js";import{E as Q}from"../chunks/empty-result.CQ7qnSWl.js";import{F as R,M as V,E as W}from"../chunks/empty-markdown.DsfswE_L.js";import{M as S}from"../chunks/assets.3ni2Wpuz.js";import{d as X}from"../chunks/stores.BrWWwI6S.js";import"../chunks/legacy.CqLudUwD.js";function Y({params:n}){if(n.slug)return{item:N.items.find(i=>i.slug===n.slug)}}const ct=Object.freeze(Object.defineProperty({__proto__:null,load:Y},Symbol.toStringTag,{value:"Module"}));var Z=D('<div class="flex w-full flex-col items-center justify-center gap-4"><!> <!> <!></div>'),tt=D('<!> <div class="container mx-auto px-4 py-8"><div class="flex flex-col gap-8"><!></div></div>',1);function ut(n,t){C(t,!0);const i=T(),F=()=>A(X,"$mode",i);let H=_(()=>{var a,d;return`${((d=(a=t.data)==null?void 0:a.item)==null?void 0:d.name)??"Not Found"} - Blog`}),O=_(()=>{var a;return(a=t.data.item)!=null&&a.date?new Date(t.data.item.date).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}):""});I(n,{get title(){return f(H)},children:(a,d)=>{var y=U(),q=E(y);B(q,()=>!t.data.item,l=>{Q(l)},l=>{var b=tt(),$=E(b),z=_(()=>F()==="dark"?t.data.item.banner.dark:t.data.item.banner.light);R($,{get img(){return f(z)},children:(o,et)=>{var m=Z(),j=g(m);K(j,{children:(s,w)=>{p();var e=c();v(()=>u(e,t.data.item.name)),r(s,e)},$$slots:{default:!0}});var k=x(j,2);S(k,{children:(s,w)=>{p();var e=c();v(()=>u(e,t.data.item.type)),r(s,e)},$$slots:{default:!0}});var L=x(k,2);S(L,{children:(s,w)=>{p();var e=c();v(()=>u(e,f(O))),r(s,e)},$$slots:{default:!0}}),h(m),r(o,m)},$$slots:{default:!0}});var M=x($,2),P=g(M),J=g(P);B(J,()=>t.data.item.content,o=>{V(o,{get content(){return t.data.item.content}})},o=>{W(o)}),h(P),h(M),r(l,b)}),r(a,y)},$$slots:{default:!0}}),G()}export{ut as component,ct as universal};