import{g as $e,i as Be,a as r,b as m,h as Ae,c as pe,t as te,s as z}from"../chunks/disclose-version.CzqTrwQ2.js";import{h as Je,m as xe,X as be,j as Ue,o as ye,aN as qe,aU as He,aT as Fe,_ as Ge,aJ as Ve,l as Xe,t as u,c,r as d,p as fe,I as Ye,D as B,F as Qe,a as me,f as x,s as l,g,G as We,z as A,b as Ze,n as X,d as ne}from"../chunks/index-client.CRB7gsTB.js";import{L as et,s as tt}from"../chunks/large.DLIbPRcL.js";import{u as Le,d as ve,a as at,b as rt,s as Se,f as st,m as we,h as Pe,j as ot,k as lt,l as it,n as nt,e as ke,I,i as Ne}from"../chunks/stores.kZfEQtYS.js";import{a as dt,b as ct,B as Ee,s as J,h as Y}from"../chunks/base.D7ChWeS7.js";import{l as Te,p as w,s as Oe,i as je,a as ce}from"../chunks/props.DL8UmeUz.js";import{B as C}from"../chunks/button.lf2ESQtB.js";import{R as ft,T as mt,D as vt,C as de,a as ut}from"../chunks/index.CJIagCC-.js";import{S as Me}from"../chunks/separator.CvApvBbv.js";import{R as Ke,T as Ie,a as Ce}from"../chunks/index.CaFW3_r2.js";import{i as ht}from"../chunks/legacy.BxG88TaQ.js";import{g as _t}from"../chunks/paths.Dz_pLdOo.js";function De(h,t,v,_,$){var a=h,s="",i;Je(()=>{if(s===(s=t()??"")){xe&&be();return}i!==void 0&&(Xe(i),i=void 0),s!==""&&(i=Ue(()=>{if(xe){ye.data;for(var o=be(),P=o;o!==null&&(o.nodeType!==8||o.data!=="");)P=o,o=qe(o);if(o===null)throw He(),Fe;$e(ye,P),a=Ge(o);return}var T=s+"",b=Be(T);$e(Ve(b),b.lastChild),a.before(b)}))})}const gt=!1,Zt=Object.freeze(Object.defineProperty({__proto__:null,ssr:gt},Symbol.toStringTag,{value:"Module"}));var $t=m("<h4><!></h4>");function pt(h,t){const v=Te(t,["children","$$slots","$$events","$$legacy"]),_=Te(v,["className"]);let $=w(t,"className",8,"");var a=$t();let s;var i=c(a);dt(i,t,"default",{}),d(a),u(()=>s=ct(a,s,{..._,class:`scroll-m-20 text-xl font-semibold tracking-normal ${$()}`})),r(h,a)}const xt={title:Ee.fullName,icon:"i-carbon-code"},bt=[{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projects",icon:"i-carbon-cube",href:"/projects"},{title:"Experience",icon:"i-carbon-development",href:"/experience"},{title:"Education",icon:"i-carbon-education",href:"/education"},{title:"Resume",icon:"i-carbon-document",href:"/resume"}],ae={left:xt,items:bt};function Q(){Le.set(_t(ve)==="dark"?"light":"dark")}function yt(h){Le.set(h)}function St(h){at.set(h)}function Re({defaultMode:h,themeColors:t,darkClassNames:v=["dark"],lightClassNames:_=[],defaultTheme:$=""}){const a=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||h,i=localStorage.getItem("mode-watcher-theme")||$,o=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(o?(v.length&&a.classList.remove(...v),_.length&&a.classList.add(..._)):(_.length&&a.classList.remove(..._),v.length&&a.classList.add(...v)),a.style.colorScheme=o?"light":"dark",t){const P=document.querySelector('meta[name="theme-color"]');P&&P.setAttribute("content",s==="light"?t.light:t.dark)}i&&(a.setAttribute("data-theme",i),localStorage.setItem("mode-watcher-theme",i)),localStorage.setItem("mode-watcher-mode",s)}var wt=m('<meta name="theme-color">'),Pt=m("<!> <!>",1);function kt(h,t){fe(t,!1);const v=Oe(),_=()=>ce(we,"$modeStorageKeyStore",v),$=()=>ce(Pe,"$themeStorageKeyStore",v),a=We();let s=w(t,"track",8,!0),i=w(t,"defaultMode",8,"system"),o=w(t,"themeColors",24,()=>{}),P=w(t,"disableTransitions",8,!0),T=w(t,"darkClassNames",24,()=>["dark"]),b=w(t,"lightClassNames",24,()=>[]),D=w(t,"defaultTheme",8,""),re=w(t,"nonce",8,""),W=w(t,"themeStorageKey",8,"mode-watcher-theme"),R=w(t,"modeStorageKey",8,"mode-watcher-mode");Ye(()=>{const Z=ve.subscribe(()=>{}),L=rt.subscribe(()=>{});Se.tracking(s()),Se.query();const E=localStorage.getItem(_());yt(st(E)?E:i());const n=localStorage.getItem($());return St(n||D()),()=>{Z(),L()}});const U={defaultMode:i(),themeColors:o(),darkClassNames:T(),lightClassNames:b(),defaultTheme:D(),modeStorageKey:R(),themeStorageKey:W()};B(()=>A(P()),()=>{ot.set(P())}),B(()=>A(o()),()=>{lt.set(o())}),B(()=>A(T()),()=>{it.set(T())}),B(()=>A(b()),()=>{nt.set(b())}),B(()=>A(R()),()=>{we.set(R())}),B(()=>A(W()),()=>{Pe.set(W())}),B(()=>A(re()),()=>{Ze(a,typeof window>"u"?re():"")}),Qe(),ht(),Ae(Z=>{var L=Pt(),E=x(L);je(E,o,f=>{var e=wt();u(()=>J(e,"content",o().dark)),r(f,e)});var n=l(E,2);je(n,()=>g(a),f=>{var e=pe(),y=x(e);De(y,()=>`<script nonce=${g(a)}>(`+Re.toString()+")("+JSON.stringify(U)+");<\/script>",!1,!1),r(f,e)},f=>{var e=pe(),y=x(e);De(y,()=>"<script>("+Re.toString()+")("+JSON.stringify(U)+");<\/script>",!1,!1),r(f,e)}),r(Z,L)}),me()}var Nt=m("<!> <!>",1),Tt=m('<!> <div class="hidden lg:block"> </div>',1),jt=m("<!> <!>",1),Mt=m("<a><!></a>"),Kt=m("<!> <div> </div>",1),It=m('<a class="w-full"><!></a>'),Ct=m("<!> <div>Search</div>",1),Dt=m('<a class="w-full"><!></a>'),Rt=m("<!> <div> </div>",1),Lt=m('<div class="flex flex-col gap-2 pt-4"><!> <!> <!> <!> <!></div> <!>',1),Et=m("<!> <!>",1),Ot=m('<div class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8" style="--bg : hsl(var(--background) / 0.5)"><div class="sm:flex-1"><a class="flex flex-row items-center justify-start gap-2 text-2xl"><!> <!></a></div> <div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex"></div> <div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1"><a><!></a> <!></div> <div class="flex flex-[2] flex-row items-center justify-center sm:hidden"><a><!></a></div> <div class="flex flex-row items-center justify-center sm:hidden"><!></div></div>');function zt(h,t){fe(t,!0);const v=Oe(),_=()=>ce(ve,"$mode",v);let $=ne(()=>_()==="dark");var a=Ot(),s=c(a),i=c(s);u(()=>J(i,"href",Y("/")));var o=c(i);Ke(o,{children:(n,f)=>{var e=Nt(),y=x(e);Ie(y,{children:(j,q)=>{I(j,{get icon(){return ae.left.icon}})},$$slots:{default:!0}});var ee=l(y,2);Ce(ee,{side:"bottom",class:"lg:hidden",children:(j,q)=>{X();var k=te();u(()=>z(k,ae.left.title)),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var P=l(o,2);pt(P,{className:"hidden lg:block",children:(n,f)=>{X();var e=te();u(()=>z(e,ae.left.title)),r(n,e)},$$slots:{default:!0}}),d(i),d(s);var T=l(s,2);ke(T,21,()=>ae.items,Ne,(n,f)=>{var e=Mt();u(()=>J(e,"href",Y(g(f).href)));var y=c(e);Ke(y,{children:(ee,j)=>{var q=jt(),k=x(q);Ie(k,{children:(F,se)=>{C(F,{class:"flex flex-row items-center justify-center gap-2",variant:"ghost",children:(O,ie)=>{var oe=Tt(),le=x(oe);I(le,{get icon(){return g(f).icon},className:"text-xl"});var p=l(le,2),M=c(p,!0);d(p),u(()=>z(M,g(f).title)),r(O,oe)},$$slots:{default:!0}})},$$slots:{default:!0}});var H=l(k,2);Ce(H,{side:"bottom",class:"lg:hidden",children:(F,se)=>{X();var O=te();u(()=>z(O,g(f).title)),r(F,O)},$$slots:{default:!0}}),r(ee,q)},$$slots:{default:!0}}),d(e),r(n,e)}),d(T);var b=l(T,2),D=c(b);u(()=>J(D,"href",Y("/search")));var re=c(D);C(re,{variant:"ghost",class:"text-xl",children:(n,f)=>{I(n,{icon:"i-carbon-search"})},$$slots:{default:!0}}),d(D);var W=l(D,2);C(W,{variant:"ghost",class:"text-xl",$$events:{click(...n){Q==null||Q.apply(this,n)}},children:(n,f)=>{var e=ne(()=>g($)?"i-carbon-moon":"i-carbon-sun");I(n,{get icon(){return g(e)}})},$$slots:{default:!0}}),d(b);var R=l(b,2),U=c(R);u(()=>J(U,"href",Y("/")));var Z=c(U);et(Z,{children:(n,f)=>{X();var e=te();u(()=>z(e,Ee.fullName)),r(n,e)},$$slots:{default:!0}}),d(U),d(R);var L=l(R,2),E=c(L);ft(E,{children:(n,f)=>{var e=Et(),y=x(e);mt(y,{children:(j,q)=>{C(j,{size:"icon",variant:"ghost",children:(k,H)=>{I(k,{className:"text-xl",icon:"i-carbon-menu"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=l(y,2);vt(ee,{children:(j,q)=>{var k=Lt(),H=x(k),F=c(H);ke(F,17,()=>ae.items,Ne,(p,M)=>{de(p,{children:(S,G)=>{var N=It();u(()=>J(N,"href",Y(g(M).href)));var V=c(N);C(V,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(K,ue)=>{var he=Kt(),_e=x(he);I(_e,{get icon(){return g(M).icon},className:"text-xl"});var ge=l(_e,2),ze=c(ge,!0);d(ge),u(()=>z(ze,g(M).title)),r(K,he)},$$slots:{default:!0}}),d(N),r(S,N)},$$slots:{default:!0}})});var se=l(F,2);Me(se,{});var O=l(se,2);de(O,{children:(p,M)=>{var S=Dt();u(()=>J(S,"href",Y("/search")));var G=c(S);C(G,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(N,V)=>{var K=Ct(),ue=x(K);I(ue,{icon:"i-carbon-search",className:"text-xl"}),X(2),r(N,K)},$$slots:{default:!0}}),d(S),r(p,S)},$$slots:{default:!0}});var ie=l(O,2);Me(ie,{});var oe=l(ie,2);C(oe,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",$$events:{click(...p){Q==null||Q.apply(this,p)}},children:(p,M)=>{var S=Rt(),G=x(S),N=ne(()=>g($)?"i-carbon-moon":"i-carbon-sun");I(G,{get icon(){return g(N)},className:"text-xl"});var V=l(G,2),K=c(V,!0);d(V),u(()=>z(K,g($)?"Dark":"Light")),r(p,S)},$$slots:{default:!0}}),d(H);var le=l(H,2);ut(le,{class:"items-end",children:(p,M)=>{de(p,{children:(S,G)=>{C(S,{children:(N,V)=>{X();var K=te("Close");r(N,K)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}}),d(L),d(a),r(h,a),me()}var Bt=m('<!> <div class="flex h-screen w-screen flex-col overflow-x-hidden"><!> <div class="mt-[50px] flex flex-1 flex-col"><!></div></div>',1);function ea(h,t){fe(t,!0);var v=Bt(),_=x(v);kt(_,{});var $=l(_,2),a=c($);zt(a,{});var s=l(a,2),i=c(s);tt(i,()=>t.children),d(s),d($),r(h,v),me()}export{ea as component,Zt as universal};