import{f as pe,g as Ee,l as be,p as w,b as r,t as m,j as Le,k as Ae,i as xe,c as ye,n as fe,e as te,s as z}from"../chunks/disclose-version.DgrYO7ja.js";import{c as qe,h as Se,b as we,d as He,e as Pe,y as Je,z as Ue,H as Fe,A as Ge,B as Ve,C as Ye,v as u,r as c,w as d,j as me,o as Qe,D as E,F as We,n as ve,l as b,q as l,g,G as Xe,I as A,a as Ze,J as Y,x as de}from"../chunks/index-client.aj5FnfNL.js";import{L as et,s as tt}from"../chunks/large.CGZqOGS3.js";import{e as ke,i as Ne}from"../chunks/updater.CtGtjiDJ.js";import{s as at,a as rt,i as st,b as q}from"../chunks/legacy.CqLudUwD.js";import{B as C}from"../chunks/button.D3uzAuI_.js";import{R as ot,T as lt,D as it,C as ce,a as nt}from"../chunks/index.CHIVYoNt.js";import{I}from"../chunks/icon.DedB4ad8.js";import{S as Te}from"../chunks/separator.DxZQGEap.js";import{R as je,T as Me,a as Ke}from"../chunks/index.D4-0MjBN.js";import{B as ie}from"../chunks/base.DnOT9XF5.js";import{h as Q}from"../chunks/utils.BbjIOT-s.js";import{g as dt}from"../chunks/paths.Bj1w_iqZ.js";import{u as Oe,d as ue,t as ct,a as ft,s as Ce,i as mt,m as Ie,b as De,c as vt,e as ut,f as ht,l as _t}from"../chunks/stores.BrWWwI6S.js";function Re(h,t,v,_,$){var a=h,s="",i;qe(()=>{if(s===(s=t()??"")){Se&&we();return}i!==void 0&&(Ye(i),i=void 0),s!==""&&(i=He(()=>{if(Se){Pe.data;for(var o=we(),P=o;o!==null&&(o.nodeType!==8||o.data!=="");)P=o,o=Je(o);if(o===null)throw Ue(),Fe;pe(Pe,P),a=Ge(o);return}var T=s+"",x=Ee(T);pe(Ve(x),x.lastChild),a.before(x)}))})}const gt=!1,ta=Object.freeze(Object.defineProperty({__proto__:null,ssr:gt},Symbol.toStringTag,{value:"Module"}));var $t=m("<h4><!></h4>");function pt(h,t){const v=be(t,["children","$$slots","$$events","$$legacy"]),_=be(v,["className"]);let $=w(t,"className",8,"");var a=$t();let s;var i=c(a);at(i,t,"default",{}),d(a),u(()=>s=rt(a,s,{..._,class:`scroll-m-20 text-xl font-semibold tracking-normal ${$()}`})),r(h,a)}const bt={title:ie.firstName+" "+ie.lastName,icon:"i-carbon-code"},xt=[{title:"Skills",icon:"i-carbon-assembly-cluster",href:"/skills"},{title:"Projects",icon:"i-carbon-cube",href:"/projects"},{title:"Education",icon:"i-carbon-education",href:"/education"},{title:"Blogs",icon:"i-carbon-blog",href:"/blogs"},{title:"Resume",icon:"i-carbon-document",href:"/resume"}],ae={left:bt,items:xt};function W(){Oe.set(dt(ue)==="dark"?"light":"dark")}function yt(h){Oe.set(h)}function St(h){ct.set(h)}function Be({defaultMode:h,themeColors:t,darkClassNames:v=["dark"],lightClassNames:_=[],defaultTheme:$=""}){const a=document.documentElement,s=localStorage.getItem("mode-watcher-mode")||h,i=localStorage.getItem("mode-watcher-theme")||$,o=s==="light"||s==="system"&&window.matchMedia("(prefers-color-scheme: light)").matches;if(o?(v.length&&a.classList.remove(...v),_.length&&a.classList.add(..._)):(_.length&&a.classList.remove(..._),v.length&&a.classList.add(...v)),a.style.colorScheme=o?"light":"dark",t){const P=document.querySelector('meta[name="theme-color"]');P&&P.setAttribute("content",s==="light"?t.light:t.dark)}i&&(a.setAttribute("data-theme",i),localStorage.setItem("mode-watcher-theme",i)),localStorage.setItem("mode-watcher-mode",s)}var wt=m('<meta name="theme-color">'),Pt=m("<!> <!>",1);function kt(h,t){me(t,!1);const v=Le(),_=()=>fe(Ie,"$modeStorageKeyStore",v),$=()=>fe(De,"$themeStorageKeyStore",v),a=Xe();let s=w(t,"track",8,!0),i=w(t,"defaultMode",8,"system"),o=w(t,"themeColors",24,()=>{}),P=w(t,"disableTransitions",8,!0),T=w(t,"darkClassNames",24,()=>["dark"]),x=w(t,"lightClassNames",24,()=>[]),D=w(t,"defaultTheme",8,""),re=w(t,"nonce",8,""),X=w(t,"themeStorageKey",8,"mode-watcher-theme"),R=w(t,"modeStorageKey",8,"mode-watcher-mode");Qe(()=>{const Z=ue.subscribe(()=>{}),B=ft.subscribe(()=>{});Ce.tracking(s()),Ce.query();const L=localStorage.getItem(_());yt(mt(L)?L:i());const n=localStorage.getItem($());return St(n||D()),()=>{Z(),B()}});const H={defaultMode:i(),themeColors:o(),darkClassNames:T(),lightClassNames:x(),defaultTheme:D(),modeStorageKey:R(),themeStorageKey:X()};E(()=>A(P()),()=>{vt.set(P())}),E(()=>A(o()),()=>{ut.set(o())}),E(()=>A(T()),()=>{ht.set(T())}),E(()=>A(x()),()=>{_t.set(x())}),E(()=>A(R()),()=>{Ie.set(R())}),E(()=>A(X()),()=>{De.set(X())}),E(()=>A(re()),()=>{Ze(a,typeof window>"u"?re():"")}),We(),st(),Ae(Z=>{var B=Pt(),L=b(B);xe(L,o,f=>{var e=wt();u(()=>q(e,"content",o().dark)),r(f,e)});var n=l(L,2);xe(n,()=>g(a),f=>{var e=ye(),y=b(e);Re(y,()=>`<script nonce=${g(a)}>(`+Be.toString()+")("+JSON.stringify(H)+");<\/script>",!1,!1),r(f,e)},f=>{var e=ye(),y=b(e);Re(y,()=>"<script>("+Be.toString()+")("+JSON.stringify(H)+");<\/script>",!1,!1),r(f,e)}),r(Z,B)}),ve()}var Nt=m("<!> <!>",1),Tt=m('<!> <div class="hidden lg:block"> </div>',1),jt=m("<!> <!>",1),Mt=m("<a><!></a>"),Kt=m("<!> <div> </div>",1),Ct=m('<a class="w-full"><!></a>'),It=m("<!> <div>Search</div>",1),Dt=m('<a class="w-full"><!></a>'),Rt=m("<!> <div> </div>",1),Bt=m('<div class="flex flex-col gap-2 pt-4"><!> <!> <!> <!> <!></div> <!>',1),Lt=m("<!> <!>",1),Ot=m('<div class="border-1 absolute left-0 right-0 top-0 z-10 flex h-[50px] flex-row items-center border-b bg-[--bg] px-4 backdrop-blur-xl sm:px-8" style="--bg : hsl(var(--background) / 0.5)"><div class="sm:flex-1"><a class="flex flex-row items-center justify-start gap-2 text-2xl"><!> <!></a></div> <div class="hidden flex-[2] flex-row items-center justify-center gap-2 sm:flex"></div> <div class="hidden flex-row items-center justify-end gap-2 sm:flex sm:flex-1"><a><!></a> <!></div> <div class="flex flex-[2] flex-row items-center justify-center sm:hidden"><a><!></a></div> <div class="flex flex-row items-center justify-center sm:hidden"><!></div></div>');function zt(h,t){me(t,!0);const v=Le(),_=()=>fe(ue,"$mode",v);let $=de(()=>_()==="dark");var a=Ot(),s=c(a),i=c(s);u(()=>q(i,"href",Q("/")));var o=c(i);je(o,{children:(n,f)=>{var e=Nt(),y=b(e);Me(y,{children:(j,J)=>{I(j,{get icon(){return ae.left.icon}})},$$slots:{default:!0}});var ee=l(y,2);Ke(ee,{side:"bottom",class:"lg:hidden",children:(j,J)=>{Y();var k=te();u(()=>z(k,ae.left.title)),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}});var P=l(o,2);pt(P,{className:"hidden lg:block",children:(n,f)=>{Y();var e=te();u(()=>z(e,ae.left.title)),r(n,e)},$$slots:{default:!0}}),d(i),d(s);var T=l(s,2);ke(T,21,()=>ae.items,Ne,(n,f)=>{var e=Mt();u(()=>q(e,"href",Q(g(f).href)));var y=c(e);je(y,{children:(ee,j)=>{var J=jt(),k=b(J);Me(k,{children:(F,se)=>{C(F,{class:"flex flex-row items-center justify-center gap-2",variant:"ghost",children:(O,ne)=>{var oe=Tt(),le=b(oe);I(le,{get icon(){return g(f).icon},className:"text-xl"});var p=l(le,2),M=c(p,!0);d(p),u(()=>z(M,g(f).title)),r(O,oe)},$$slots:{default:!0}})},$$slots:{default:!0}});var U=l(k,2);Ke(U,{side:"bottom",class:"lg:hidden",children:(F,se)=>{Y();var O=te();u(()=>z(O,g(f).title)),r(F,O)},$$slots:{default:!0}}),r(ee,J)},$$slots:{default:!0}}),d(e),r(n,e)}),d(T);var x=l(T,2),D=c(x);u(()=>q(D,"href",Q("/search")));var re=c(D);C(re,{variant:"ghost",class:"text-xl",children:(n,f)=>{I(n,{icon:"i-carbon-search"})},$$slots:{default:!0}}),d(D);var X=l(D,2);C(X,{variant:"ghost",class:"text-xl",$$events:{click(...n){W==null||W.apply(this,n)}},children:(n,f)=>{var e=de(()=>g($)?"i-carbon-moon":"i-carbon-sun");I(n,{get icon(){return g(e)}})},$$slots:{default:!0}}),d(x);var R=l(x,2),H=c(R);u(()=>q(H,"href",Q("/")));var Z=c(H);et(Z,{children:(n,f)=>{Y();var e=te();u(()=>z(e,ie.firstName+" "+ie.lastName)),r(n,e)},$$slots:{default:!0}}),d(H),d(R);var B=l(R,2),L=c(B);ot(L,{children:(n,f)=>{var e=Lt(),y=b(e);lt(y,{children:(j,J)=>{C(j,{size:"icon",variant:"ghost",children:(k,U)=>{I(k,{className:"text-xl",icon:"i-carbon-menu"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ee=l(y,2);it(ee,{children:(j,J)=>{var k=Bt(),U=b(k),F=c(U);ke(F,17,()=>ae.items,Ne,(p,M)=>{ce(p,{children:(S,G)=>{var N=Ct();u(()=>q(N,"href",Q(g(M).href)));var V=c(N);C(V,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(K,he)=>{var _e=Kt(),ge=b(_e);I(ge,{get icon(){return g(M).icon},className:"text-xl"});var $e=l(ge,2),ze=c($e,!0);d($e),u(()=>z(ze,g(M).title)),r(K,_e)},$$slots:{default:!0}}),d(N),r(S,N)},$$slots:{default:!0}})});var se=l(F,2);Te(se,{});var O=l(se,2);ce(O,{children:(p,M)=>{var S=Dt();u(()=>q(S,"href",Q("/search")));var G=c(S);C(G,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",children:(N,V)=>{var K=It(),he=b(K);I(he,{icon:"i-carbon-search",className:"text-xl"}),Y(2),r(N,K)},$$slots:{default:!0}}),d(S),r(p,S)},$$slots:{default:!0}});var ne=l(O,2);Te(ne,{});var oe=l(ne,2);C(oe,{class:"flex w-full flex-row items-center justify-start gap-2",variant:"ghost",$$events:{click(...p){W==null||W.apply(this,p)}},children:(p,M)=>{var S=Rt(),G=b(S),N=de(()=>g($)?"i-carbon-moon":"i-carbon-sun");I(G,{get icon(){return g(N)},className:"text-xl"});var V=l(G,2),K=c(V,!0);d(V),u(()=>z(K,g($)?"Dark":"Light")),r(p,S)},$$slots:{default:!0}}),d(U);var le=l(U,2);nt(le,{class:"items-end",children:(p,M)=>{ce(p,{children:(S,G)=>{C(S,{children:(N,V)=>{Y();var K=te("Close");r(N,K)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),r(j,k)},$$slots:{default:!0}}),r(n,e)},$$slots:{default:!0}}),d(B),d(a),r(h,a),ve()}var Et=m('<!> <div class="flex h-screen w-screen flex-col overflow-x-hidden"><!> <div class="mt-[50px] flex flex-1 flex-col"><!></div></div>',1);function aa(h,t){me(t,!0);var v=Et(),_=b(v);kt(_,{});var $=l(_,2),a=c($);zt(a,{});var s=l(a,2),i=c(s);tt(i,()=>t.children),d(s),d($),r(h,v),ve()}export{aa as component,ta as universal};