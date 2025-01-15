import{j as oe,c as ae,i as re,b as r,t as d,a as se,e as E,s as y,n as te}from"../chunks/disclose-version.DgrYO7ja.js";import{j as le,n as ne,l as x,g as o,x as N,a as ie,r as A,q as m,J as D,v as k,w as v,s as ce}from"../chunks/index-client.aj5FnfNL.js";import{e as O}from"../chunks/updater.DJ4uUEBf.js";import{b as J}from"../chunks/legacy.CqLudUwD.js";import{E as me}from"../chunks/empty-result.BcNQcgN1.js";import{S as de,F as ge,a as pe,C as fe,N as U}from"../chunks/fancy-card.CITPHibh.js";import{A as ue,a as $e,b as ve}from"../chunks/avatar-fallback.Dxycw1Q_.js";import{h as _e}from"../chunks/utils.KYuuLy4t.js";import{I as he}from"../chunks/icon.DedB4ad8.js";import{S as xe}from"../chunks/separator.BWEHuFEW.js";import{R as ke,T as be,a as we}from"../chunks/index.BY2gm-wq.js";import{L as G}from"../chunks/large.CGZqOGS3.js";import{A as Ce}from"../chunks/assets.Dqca1Pm-.js";import{E as Pe}from"../chunks/education.8CbjNWlX.js";import{E as Le}from"../chunks/experience.Bj1_TTK7.js";import{P as Se}from"../chunks/projects.B_hHnZjd.js";import{S as Ee}from"../chunks/skills.CPL5ZljU.js";import{B as ye}from"../chunks/blogs.DtJy4_xm.js";import{d as Ae}from"../chunks/stores.BY_mds9i.js";var De=d("<img>"),je=d("<!> <!>",1),Re=d("<!> <!>",1),Be=d("<!> <!>",1),Te=d('<div class="flex flex-col gap-8"><div class="flex flex-row items-center gap-6"><div class="flex flex-row gap-2"><!> <!></div> <!></div> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></div>'),ze=d('<div class="mt-8 flex flex-col gap-12"></div>');function lo(H,K){le(K,!0);const Q=oe(),g=()=>te(Ae,"$mode",Q);let j=ce("");const V=s=>{const b=Ee.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),p=Se.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),_=Le.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),i=Pe.items.filter(e=>e.organization.toLowerCase().includes(s.toLowerCase())),c=ye.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),a=[];return b.length&&a.push({icon:"i-carbon-assembly-cluster",name:"Skills",items:b.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/skills/${e.slug}`,color:e.color}))}),p.length&&a.push({icon:"i-carbon-cube",name:"Projects",items:p.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/projects/${e.slug}`,color:e.color}))}),_.length&&a.push({icon:"i-carbon-development",name:"Experience",items:_.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/experience/${e.slug}`,color:e.color}))}),i.length&&a.push({icon:"i-carbon-education",name:"Education",items:i.map(e=>({name:e.organization,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/education/${e.slug}`,color:U.gray}))}),c.length&&a.push({icon:"i-carbon-blog",name:"Blogs",items:c.map(e=>({name:e.name,logo:g()==="dark"?e.banner.dark:e.banner.light,link:`/blogs/${e.slug}`,color:U.gray}))}),a};let R=N(()=>V(o(j)));de(H,{title:"Search",onSearch:s=>ie(j,se(s)),children:(s,b)=>{var p=ae(),_=x(p);re(_,()=>o(R).length===0,i=>{me(i)},i=>{var c=ze();O(c,21,()=>o(R),a=>a.name,(a,e)=>{var w=Te(),C=A(w),P=A(C),B=A(P);G(B,{children:(n,t)=>{he(n,{get icon(){return o(e).icon}})},$$slots:{default:!0}});var W=m(B,2);G(W,{children:(n,t)=>{D();var h=E();k(()=>y(h,o(e).name)),r(n,h)},$$slots:{default:!0}}),v(P);var X=m(P,2);xe(X,{class:"flex-1"}),v(C);var T=m(C,2);O(T,21,()=>o(e).items,n=>n.link,(n,t)=>{var h=N(()=>_e(o(t).link));ge(n,{get color(){return o(t).color},get href(){return o(h)},children:(Y,Ie)=>{pe(Y,{class:"flex flex-row items-center gap-4",children:(Z,Me)=>{var z=Be(),F=x(z);ue(F,{children:(L,ee)=>{var f=je(),u=x(f);$e(u,{children:($,I)=>{var l=De();k(()=>{J(l,"src",Ce.Unknown.light),J(l,"alt",o(t).name)}),r($,l)},$$slots:{default:!0}});var S=m(u,2);ve(S,{get src(){return o(t).logo}}),r(L,f)},$$slots:{default:!0}});var q=m(F,2);ke(q,{openDelay:300,children:(L,ee)=>{var f=Re(),u=x(f);be(u,{children:($,I)=>{fe($,{class:"line-clamp-2 truncate text-ellipsis text-left",children:(l,Ne)=>{D();var M=E();k(()=>y(M,o(t).name)),r(l,M)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=m(u,2);we(S,{children:($,I)=>{D();var l=E();k(()=>y(l,o(t).name)),r($,l)},$$slots:{default:!0}}),r(L,f)},$$slots:{default:!0}}),r(Z,z)},$$slots:{default:!0}})},$$slots:{default:!0}})}),v(T),v(w),r(a,w)}),v(c),r(i,c)}),r(s,p)},$$slots:{default:!0}}),ne()}export{lo as component};
