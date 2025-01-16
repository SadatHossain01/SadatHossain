import{l as B,j as Ct,p as F,b as N,t as U,o as Zt,n as it,q as Rt,c as ne,e as kt,s as Ot}from"../chunks/disclose-version.DgrYO7ja.js";import{i as bt,s as $t,a as Gt,b as zt}from"../chunks/legacy.CqLudUwD.js";import{K as ze,M as Fe,N as Be,j as yt,O as je,v as Y,n as xt,r as et,w as Z,l as rt,g as z,P as jt,J as vt,Q as He,D as Ft,F as Ve,I as Bt,o as Re,a as Ge,G as qe,q as at}from"../chunks/index-client.aj5FnfNL.js";import{e as he,i as ve}from"../chunks/updater.CtGtjiDJ.js";import{T as Ue,R as Ke}from"../chunks/responsive-container.D-tzKieP.js";import{B as Ht}from"../chunks/button.D3uzAuI_.js";import{a as Xe,c as Dt,h as Qe}from"../chunks/utils.BbjIOT-s.js";import{I as _e}from"../chunks/Icon.C_9pZ-Cc.js";import{b as be}from"../chunks/misc.DcPUcBRK.js";import{w as lt}from"../chunks/paths.Bj1w_iqZ.js";import{I as Je}from"../chunks/icon.DedB4ad8.js";import{R as Ye,T as Ze,a as We}from"../chunks/index.D4-0MjBN.js";import{M as tn}from"../chunks/assets.3ni2Wpuz.js";import{B as en}from"../chunks/base.DnOT9XF5.js";import{g as nn}from"../chunks/skills.hRQYynbW.js";import{d as on}from"../chunks/stores.BrWWwI6S.js";function sn(t){return Object.prototype.toString.call(t)==="[object Object]"}function $e(t){return sn(t)||Array.isArray(t)}function rn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function oe(t,e){const o=Object.keys(t),r=Object.keys(e);if(o.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==s?!1:o.every(n=>{const a=t[n],c=e[n];return typeof a=="function"?`${a}`==`${c}`:!$e(a)||!$e(c)?a===c:oe(a,c)})}function ye(t){return t.concat().sort((e,o)=>e.name>o.name?1:-1).map(e=>e.options)}function cn(t,e){if(t.length!==e.length)return!1;const o=ye(t),r=ye(e);return o.every((i,s)=>{const n=r[s];return oe(i,n)})}function se(t){return typeof t=="number"}function Wt(t){return typeof t=="string"}function qt(t){return typeof t=="boolean"}function xe(t){return Object.prototype.toString.call(t)==="[object Object]"}function D(t){return Math.abs(t)}function re(t){return Math.sign(t)}function Pt(t,e){return D(t-e)}function an(t,e){if(t===0||e===0||D(t)<=D(e))return 0;const o=Pt(D(t),D(e));return D(o/t)}function ln(t){return Math.round(t*100)/100}function Tt(t){return Lt(t).map(Number)}function W(t){return t[Mt(t)]}function Mt(t){return Math.max(0,t.length-1)}function ie(t,e){return e===Mt(t)}function Se(t,e=0){return Array.from(Array(t),(o,r)=>e+r)}function Lt(t){return Object.keys(t)}function we(t,e){return[t,e].reduce((o,r)=>(Lt(r).forEach(i=>{const s=o[i],n=r[i],a=xe(s)&&xe(n);o[i]=a?we(s,n):n}),o),{})}function te(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function un(t,e){const o={start:r,center:i,end:s};function r(){return 0}function i(c){return s(c)/2}function s(c){return e-c}function n(c,l){return Wt(t)?o[t](c):t(e,c,l)}return{measure:n}}function At(){let t=[];function e(i,s,n,a={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(s,n,a),c=()=>i.removeEventListener(s,n,a);else{const l=i;l.addListener(n),c=()=>l.removeListener(n)}return t.push(c),r}function o(){t=t.filter(i=>i())}const r={add:e,clear:o};return r}function fn(t,e,o,r){const i=At(),s=1e3/60;let n=null,a=0,c=0;function l(){i.add(t,"visibilitychange",()=>{t.hidden&&u()})}function h(){b(),i.clear()}function d(){return a>=s}function p(){o(),a-=s,d()&&p()}function $(){const v=a/s;r(v)}function f(v){if(!c)return;n||(n=v,o(),$());const _=v-n;n=v,a+=_,d()&&p(),$(),c&&(c=e.requestAnimationFrame(f))}function m(){c||(c=e.requestAnimationFrame(f))}function b(){e.cancelAnimationFrame(c),n=null,a=0,c=0}function u(){n=null,a=0}return{init:l,destroy:h,start:m,stop:b,update:o,render:r}}function dn(t,e){const o=e==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",n=!r&&o?-1:1,a=h(),c=d();function l(f){const{height:m,width:b}=f;return r?m:b}function h(){return r?"top":o?"right":"left"}function d(){return r?"bottom":o?"left":"right"}function p(f){return f*n}return{scroll:i,cross:s,startEdge:a,endEdge:c,measureSize:l,direction:p}}function dt(t=0,e=0){const o=D(t-e);function r(l){return l<t}function i(l){return l>e}function s(l){return r(l)||i(l)}function n(l){return s(l)?r(l)?t:e:l}function a(l){return o?l-o*Math.ceil((l-e)/o):l}return{length:o,max:e,min:t,constrain:n,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function Ie(t,e,o){const{constrain:r}=dt(0,t),i=t+1;let s=n(e);function n(p){return o?D((i+p)%i):r(p)}function a(){return s}function c(p){return s=n(p),d}function l(p){return h().set(a()+p)}function h(){return Ie(t,a(),o)}const d={get:a,set:c,add:l,clone:h};return d}function pn(t,e,o,r,i,s,n,a,c,l,h,d,p,$,f,m,b,u,g){const{cross:v,direction:_}=t,P=["INPUT","SELECT","TEXTAREA"],E={passive:!1},S=At(),w=At(),I=dt(50,225).constrain($.measure(20)),x={mouse:300,touch:400},T={mouse:500,touch:600},L=f?43:25;let j=!1,K=0,H=0,X=!1,G=!1,Q=!1,J=!1;function pt(y){if(!g)return;function A(O){(qt(g)||g(y,O))&&_t(O)}const M=e;S.add(M,"dragstart",O=>O.preventDefault(),E).add(M,"touchmove",()=>{},E).add(M,"touchend",()=>{}).add(M,"touchstart",A).add(M,"mousedown",A).add(M,"touchcancel",k).add(M,"contextmenu",k).add(M,"click",ot,!0)}function V(){S.clear(),w.clear()}function mt(){const y=J?o:e;w.add(y,"touchmove",R,E).add(y,"touchend",k).add(y,"mousemove",R,E).add(y,"mouseup",k)}function gt(y){const A=y.nodeName||"";return P.includes(A)}function nt(){return(f?T:x)[J?"mouse":"touch"]}function St(y,A){const M=d.add(re(y)*-1),O=h.byDistance(y,!f).distance;return f||D(y)<I?O:b&&A?O*.5:h.byIndex(M.get(),0).distance}function _t(y){const A=te(y,r);J=A,Q=f&&A&&!y.buttons&&j,j=Pt(i.get(),n.get())>=2,!(A&&y.button!==0)&&(gt(y.target)||(X=!0,s.pointerDown(y),l.useFriction(0).useDuration(0),i.set(n),mt(),K=s.readPoint(y),H=s.readPoint(y,v),p.emit("pointerDown")))}function R(y){if(!te(y,r)&&y.touches.length>=2)return k(y);const M=s.readPoint(y),O=s.readPoint(y,v),tt=Pt(M,K),st=Pt(O,H);if(!G&&!J&&(!y.cancelable||(G=tt>st,!G)))return k(y);const ut=s.pointerMove(y);tt>m&&(Q=!0),l.useFriction(.3).useDuration(.75),a.start(),i.add(_(ut)),y.preventDefault()}function k(y){const M=h.byDistance(0,!1).index!==d.get(),O=s.pointerUp(y)*nt(),tt=St(_(O),M),st=an(O,tt),ut=L-10*st,ct=u+st/50;G=!1,X=!1,w.clear(),l.useDuration(ut).useFriction(ct),c.distance(tt,!f),J=!1,p.emit("pointerUp")}function ot(y){Q&&(y.stopPropagation(),y.preventDefault(),Q=!1)}function q(){return X}return{init:pt,destroy:V,pointerDown:q}}function mn(t,e){let r,i;function s(d){return d.timeStamp}function n(d,p){const f=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(te(d,e)?d:d.touches[0])[f]}function a(d){return r=d,i=d,n(d)}function c(d){const p=n(d)-n(i),$=s(d)-s(r)>170;return i=d,$&&(r=d),p}function l(d){if(!r||!i)return 0;const p=n(i)-n(r),$=s(d)-s(r),f=s(d)-s(i)>170,m=p/$;return $&&!f&&D(m)>.1?m:0}return{pointerDown:a,pointerMove:c,pointerUp:l,readPoint:n}}function gn(){function t(o){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:n}=o;return{top:r,right:i+s,bottom:r+n,left:i,width:s,height:n}}return{measure:t}}function hn(t){function e(r){return t*(r/100)}return{measure:e}}function vn(t,e,o,r,i,s,n){const a=[t].concat(r);let c,l,h=[],d=!1;function p(b){return i.measureSize(n.measure(b))}function $(b){if(!s)return;l=p(t),h=r.map(p);function u(g){for(const v of g){if(d)return;const _=v.target===t,P=r.indexOf(v.target),E=_?l:h[P],S=p(_?t:r[P]);if(D(S-E)>=.5){b.reInit(),e.emit("resize");break}}}c=new ResizeObserver(g=>{(qt(s)||s(b,g))&&u(g)}),o.requestAnimationFrame(()=>{a.forEach(g=>c.observe(g))})}function f(){d=!0,c&&c.disconnect()}return{init:$,destroy:f}}function bn(t,e,o,r,i,s){let n=0,a=0,c=i,l=s,h=t.get(),d=0;function p(){const E=r.get()-t.get(),S=!c;let w=0;return S?(n=0,o.set(r),t.set(r),w=E):(o.set(t),n+=E/c,n*=l,h+=n,t.add(n),w=h-d),a=re(w),d=h,P}function $(){const E=r.get()-e.get();return D(E)<.001}function f(){return c}function m(){return a}function b(){return n}function u(){return v(i)}function g(){return _(s)}function v(E){return c=E,P}function _(E){return l=E,P}const P={direction:m,duration:f,velocity:b,seek:p,settled:$,useBaseFriction:g,useBaseDuration:u,useFriction:_,useDuration:v};return P}function $n(t,e,o,r,i){const s=i.measure(10),n=i.measure(50),a=dt(.1,.99);let c=!1;function l(){return!(c||!t.reachedAny(o.get())||!t.reachedAny(e.get()))}function h($){if(!l())return;const f=t.reachedMin(e.get())?"min":"max",m=D(t[f]-e.get()),b=o.get()-e.get(),u=a.constrain(m/n);o.subtract(b*u),!$&&D(b)<s&&(o.set(t.constrain(o.get())),r.useDuration(25).useBaseFriction())}function d($){c=!$}return{shouldConstrain:l,constrain:h,toggleActive:d}}function yn(t,e,o,r,i){const s=dt(-e+t,0),n=d(),a=h(),c=p();function l(f,m){return Pt(f,m)<1}function h(){const f=n[0],m=W(n),b=n.lastIndexOf(f),u=n.indexOf(m)+1;return dt(b,u)}function d(){return o.map((f,m)=>{const{min:b,max:u}=s,g=s.constrain(f),v=!m,_=ie(o,m);return v?u:_||l(b,g)?b:l(u,g)?u:g}).map(f=>parseFloat(f.toFixed(3)))}function p(){if(e<=t+i)return[s.max];if(r==="keepSnaps")return n;const{min:f,max:m}=a;return n.slice(f,m)}return{snapsContained:c,scrollContainLimit:a}}function xn(t,e,o){const r=e[0],i=o?r-t:W(e);return{limit:dt(i,r)}}function Sn(t,e,o,r){const s=e.min+.1,n=e.max+.1,{reachedMin:a,reachedMax:c}=dt(s,n);function l(p){return p===1?c(o.get()):p===-1?a(o.get()):!1}function h(p){if(!l(p))return;const $=t*(p*-1);r.forEach(f=>f.add($))}return{loop:h}}function _n(t){const{max:e,length:o}=t;function r(s){const n=s-e;return o?n/-o:0}return{get:r}}function wn(t,e,o,r,i){const{startEdge:s,endEdge:n}=t,{groupSlides:a}=i,c=d().map(e.measure),l=p(),h=$();function d(){return a(r).map(m=>W(m)[n]-m[0][s]).map(D)}function p(){return r.map(m=>o[s]-m[s]).map(m=>-D(m))}function $(){return a(l).map(m=>m[0]).map((m,b)=>m+c[b])}return{snaps:l,snapsAligned:h}}function In(t,e,o,r,i,s){const{groupSlides:n}=i,{min:a,max:c}=r,l=h();function h(){const p=n(s),$=!t||e==="keepSnaps";return o.length===1?[s]:$?p:p.slice(a,c).map((f,m,b)=>{const u=!m,g=ie(b,m);if(u){const v=W(b[0])+1;return Se(v)}if(g){const v=Mt(s)-W(b)[0]+1;return Se(v,W(b)[0])}return f})}return{slideRegistry:l}}function En(t,e,o,r,i){const{reachedAny:s,removeOffset:n,constrain:a}=r;function c(f){return f.concat().sort((m,b)=>D(m)-D(b))[0]}function l(f){const m=t?n(f):a(f),b=e.map((g,v)=>({diff:h(g-m,0),index:v})).sort((g,v)=>D(g.diff)-D(v.diff)),{index:u}=b[0];return{index:u,distance:m}}function h(f,m){const b=[f,f+o,f-o];if(!t)return f;if(!m)return c(b);const u=b.filter(g=>re(g)===m);return u.length?c(u):W(b)-o}function d(f,m){const b=e[f]-i.get(),u=h(b,m);return{index:f,distance:u}}function p(f,m){const b=i.get()+f,{index:u,distance:g}=l(b),v=!t&&s(b);if(!m||v)return{index:u,distance:f};const _=e[u]-g,P=f+h(_,0);return{index:u,distance:P}}return{byDistance:p,byIndex:d,shortcut:h}}function Pn(t,e,o,r,i,s,n){function a(d){const p=d.distance,$=d.index!==e.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),$&&(o.set(e.get()),e.set(d.index),n.emit("select"))}function c(d,p){const $=i.byDistance(d,p);a($)}function l(d,p){const $=e.clone().set(d),f=i.byIndex($.get(),p);a(f)}return{distance:c,index:l}}function Tn(t,e,o,r,i,s,n,a){const c={passive:!0,capture:!0};let l=0;function h($){if(!a)return;function f(m){if(new Date().getTime()-l>10)return;n.emit("slideFocusStart"),t.scrollLeft=0;const g=o.findIndex(v=>v.includes(m));se(g)&&(i.useDuration(0),r.index(g,0),n.emit("slideFocus"))}s.add(document,"keydown",d,!1),e.forEach((m,b)=>{s.add(m,"focus",u=>{(qt(a)||a($,u))&&f(b)},c)})}function d($){$.code==="Tab"&&(l=new Date().getTime())}return{init:h}}function Et(t){let e=t;function o(){return e}function r(c){e=n(c)}function i(c){e+=n(c)}function s(c){e-=n(c)}function n(c){return se(c)?c:c.get()}return{get:o,set:r,add:i,subtract:s}}function Ee(t,e){const o=t.scroll==="x"?n:a,r=e.style;let i=null,s=!1;function n(p){return`translate3d(${p}px,0px,0px)`}function a(p){return`translate3d(0px,${p}px,0px)`}function c(p){if(s)return;const $=ln(t.direction(p));$!==i&&(r.transform=o($),i=$)}function l(p){s=!p}function h(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:c,toggleActive:l}}function Ln(t,e,o,r,i,s,n,a,c){const h=Tt(i),d=Tt(i).reverse(),p=u().concat(g());function $(S,w){return S.reduce((I,x)=>I-i[x],w)}function f(S,w){return S.reduce((I,x)=>$(I,w)>0?I.concat([x]):I,[])}function m(S){return s.map((w,I)=>({start:w-r[I]+.5+S,end:w+e-.5+S}))}function b(S,w,I){const x=m(w);return S.map(T=>{const L=I?0:-o,j=I?o:0,K=I?"end":"start",H=x[T][K];return{index:T,loopPoint:H,slideLocation:Et(-1),translate:Ee(t,c[T]),target:()=>a.get()>H?L:j}})}function u(){const S=n[0],w=f(d,S);return b(w,o,!1)}function g(){const S=e-n[0]-1,w=f(h,S);return b(w,-o,!0)}function v(){return p.every(({index:S})=>{const w=h.filter(I=>I!==S);return $(w,e)<=.1})}function _(){p.forEach(S=>{const{target:w,translate:I,slideLocation:x}=S,T=w();T!==x.get()&&(I.to(T),x.set(T))})}function P(){p.forEach(S=>S.translate.clear())}return{canLoop:v,clear:P,loop:_,loopPoints:p}}function An(t,e,o){let r,i=!1;function s(c){if(!o)return;function l(h){for(const d of h)if(d.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(qt(o)||o(c,h))&&l(h)}),r.observe(t,{childList:!0})}function n(){r&&r.disconnect(),i=!0}return{init:s,destroy:n}}function Cn(t,e,o,r){const i={};let s=null,n=null,a,c=!1;function l(){a=new IntersectionObserver(f=>{c||(f.forEach(m=>{const b=e.indexOf(m.target);i[b]=m}),s=null,n=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(f=>a.observe(f))}function h(){a&&a.disconnect(),c=!0}function d(f){return Lt(i).reduce((m,b)=>{const u=parseInt(b),{isIntersecting:g}=i[u];return(f&&g||!f&&!g)&&m.push(u),m},[])}function p(f=!0){if(f&&s)return s;if(!f&&n)return n;const m=d(f);return f&&(s=m),f||(n=m),m}return{init:l,destroy:h,get:p}}function Dn(t,e,o,r,i,s){const{measureSize:n,startEdge:a,endEdge:c}=t,l=o[0]&&i,h=f(),d=m(),p=o.map(n),$=b();function f(){if(!l)return 0;const g=o[0];return D(e[a]-g[a])}function m(){if(!l)return 0;const g=s.getComputedStyle(W(r));return parseFloat(g.getPropertyValue(`margin-${c}`))}function b(){return o.map((g,v,_)=>{const P=!v,E=ie(_,v);return P?p[v]+h:E?p[v]+d:_[v+1][a]-g[a]}).map(D)}return{slideSizes:p,slideSizesWithGaps:$,startGap:h,endGap:d}}function Mn(t,e,o,r,i,s,n,a,c){const{startEdge:l,endEdge:h,direction:d}=t,p=se(o);function $(u,g){return Tt(u).filter(v=>v%g===0).map(v=>u.slice(v,v+g))}function f(u){return u.length?Tt(u).reduce((g,v,_)=>{const P=W(g)||0,E=P===0,S=v===Mt(u),w=i[l]-s[P][l],I=i[l]-s[v][h],x=!r&&E?d(n):0,T=!r&&S?d(a):0,L=D(I-T-(w+x));return _&&L>e+c&&g.push(v),S&&g.push(u.length),g},[]).map((g,v,_)=>{const P=Math.max(_[v-1]||0);return u.slice(P,g)}):[]}function m(u){return p?$(u,o):f(u)}return{groupSlides:m}}function Nn(t,e,o,r,i,s,n){const{align:a,axis:c,direction:l,startIndex:h,loop:d,duration:p,dragFree:$,dragThreshold:f,inViewThreshold:m,slidesToScroll:b,skipSnaps:u,containScroll:g,watchResize:v,watchSlides:_,watchDrag:P,watchFocus:E}=s,S=2,w=gn(),I=w.measure(e),x=o.map(w.measure),T=dn(c,l),L=T.measureSize(I),j=hn(L),K=un(a,L),H=!d&&!!g,X=d||!!g,{slideSizes:G,slideSizesWithGaps:Q,startGap:J,endGap:pt}=Dn(T,I,x,o,X,i),V=Mn(T,L,b,d,I,x,J,pt,S),{snaps:mt,snapsAligned:gt}=wn(T,K,I,x,V),nt=-W(mt)+W(Q),{snapsContained:St,scrollContainLimit:_t}=yn(L,nt,gt,g,S),R=H?St:gt,{limit:k}=xn(nt,R,d),ot=Ie(Mt(R),h,d),q=ot.clone(),C=Tt(o),y=({dragHandler:ht,scrollBody:Jt,scrollBounds:Yt,options:{loop:Nt}})=>{Nt||Yt.constrain(ht.pointerDown()),Jt.seek()},A=({scrollBody:ht,translate:Jt,location:Yt,offsetLocation:Nt,previousLocation:Le,scrollLooper:Ae,slideLooper:Ce,dragHandler:De,animation:Me,eventHandler:fe,scrollBounds:Ne,options:{loop:de}},pe)=>{const me=ht.settled(),ke=!Ne.shouldConstrain(),ge=de?me:me&&ke;ge&&!De.pointerDown()&&(Me.stop(),fe.emit("settle")),ge||fe.emit("scroll");const Oe=Yt.get()*pe+Le.get()*(1-pe);Nt.set(Oe),de&&(Ae.loop(ht.direction()),Ce.loop()),Jt.to(Nt.get())},M=fn(r,i,()=>y(Qt),ht=>A(Qt,ht)),O=.68,tt=R[ot.get()],st=Et(tt),ut=Et(tt),ct=Et(tt),ft=Et(tt),wt=bn(st,ct,ut,ft,p,O),Kt=En(d,R,nt,k,ft),Xt=Pn(M,ot,q,wt,Kt,ft,n),ae=_n(k),le=At(),Pe=Cn(e,o,n,m),{slideRegistry:ue}=In(H,g,R,_t,V,C),Te=Tn(t,o,ue,Xt,wt,le,n,E),Qt={ownerDocument:r,ownerWindow:i,eventHandler:n,containerRect:I,slideRects:x,animation:M,axis:T,dragHandler:pn(T,t,r,i,ft,mn(T,i),st,M,Xt,wt,Kt,ot,n,j,$,f,u,O,P),eventStore:le,percentOfView:j,index:ot,indexPrevious:q,limit:k,location:st,offsetLocation:ct,previousLocation:ut,options:s,resizeHandler:vn(e,n,i,o,T,v,w),scrollBody:wt,scrollBounds:$n(k,ct,ft,wt,j),scrollLooper:Sn(nt,k,ct,[st,ct,ut,ft]),scrollProgress:ae,scrollSnapList:R.map(ae.get),scrollSnaps:R,scrollTarget:Kt,scrollTo:Xt,slideLooper:Ln(T,L,nt,G,Q,mt,R,ct,o),slideFocus:Te,slidesHandler:An(e,n,_),slidesInView:Pe,slideIndexes:C,slideRegistry:ue,slidesToScroll:V,target:ft,translate:Ee(T,e)};return Qt}function kn(){let t={},e;function o(l){e=l}function r(l){return t[l]||[]}function i(l){return r(l).forEach(h=>h(e,l)),c}function s(l,h){return t[l]=r(l).concat([h]),c}function n(l,h){return t[l]=r(l).filter(d=>d!==h),c}function a(){t={}}const c={init:o,emit:i,off:n,on:s,clear:a};return c}const On={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function zn(t){function e(s,n){return we(s,n||{})}function o(s){const n=s.breakpoints||{},a=Lt(n).filter(c=>t.matchMedia(c).matches).map(c=>n[c]).reduce((c,l)=>e(c,l),{});return e(s,a)}function r(s){return s.map(n=>Lt(n.breakpoints||{})).reduce((n,a)=>n.concat(a),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:o,optionsMediaQueries:r}}function Fn(t){let e=[];function o(s,n){return e=n.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),e.forEach(a=>a.init(s,t)),n.reduce((a,c)=>Object.assign(a,{[c.name]:c}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:o,destroy:r}}function Vt(t,e,o){const r=t.ownerDocument,i=r.defaultView,s=zn(i),n=Fn(s),a=At(),c=kn(),{mergeOptions:l,optionsAtMedia:h,optionsMediaQueries:d}=s,{on:p,off:$,emit:f}=c,m=T;let b=!1,u,g=l(On,Vt.globalOptions),v=l(g),_=[],P,E,S;function w(){const{container:C,slides:y}=v;E=(Wt(C)?t.querySelector(C):C)||t.children[0];const M=Wt(y)?E.querySelectorAll(y):y;S=[].slice.call(M||E.children)}function I(C){const y=Nn(t,E,S,r,i,C,c);if(C.loop&&!y.slideLooper.canLoop()){const A=Object.assign({},C,{loop:!1});return I(A)}return y}function x(C,y){b||(g=l(g,C),v=h(g),_=y||_,w(),u=I(v),d([g,..._.map(({options:A})=>A)]).forEach(A=>a.add(A,"change",T)),v.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(q),u.eventHandler.init(q),u.resizeHandler.init(q),u.slidesHandler.init(q),u.options.loop&&u.slideLooper.loop(),E.offsetParent&&S.length&&u.dragHandler.init(q),P=n.init(q,_)))}function T(C,y){const A=V();L(),x(l({startIndex:A},C),y),c.emit("reInit")}function L(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),n.destroy(),a.clear()}function j(){b||(b=!0,a.clear(),L(),c.emit("destroy"),c.clear())}function K(C,y,A){!v.active||b||(u.scrollBody.useBaseFriction().useDuration(y===!0?0:v.duration),u.scrollTo.index(C,A||0))}function H(C){const y=u.index.add(1).get();K(y,C,-1)}function X(C){const y=u.index.add(-1).get();K(y,C,1)}function G(){return u.index.add(1).get()!==V()}function Q(){return u.index.add(-1).get()!==V()}function J(){return u.scrollSnapList}function pt(){return u.scrollProgress.get(u.location.get())}function V(){return u.index.get()}function mt(){return u.indexPrevious.get()}function gt(){return u.slidesInView.get()}function nt(){return u.slidesInView.get(!1)}function St(){return P}function _t(){return u}function R(){return t}function k(){return E}function ot(){return S}const q={canScrollNext:G,canScrollPrev:Q,containerNode:k,internalEngine:_t,destroy:j,off:$,on:p,emit:f,plugins:St,previousScrollSnap:mt,reInit:m,rootNode:R,scrollNext:H,scrollPrev:X,scrollProgress:pt,scrollSnapList:J,scrollTo:K,selectedScrollSnap:V,slideNodes:ot,slidesInView:gt,slidesNotInView:nt};return x(e,o),setTimeout(()=>c.emit("init"),0),q}Vt.globalOptions=void 0;function ce(t,e={options:{},plugins:[]}){let o=e,r;return rn()&&(Vt.globalOptions=ce.globalOptions,r=Vt(t,o.options,o.plugins),r.on("init",()=>t.dispatchEvent(new CustomEvent("emblaInit",{detail:r})))),{destroy:()=>{r&&r.destroy()},update:i=>{const s=!oe(o.options,i.options),n=!cn(o.plugins,i.plugins);!s&&!n||(o=i,r&&r.reInit(o.options,o.plugins))}}}ce.globalOptions=void 0;const ee=Symbol("EMBLA_CAROUSEL_CONTEXT");function Bn(t){return ze(ee,t),t}function Ut(t="This component"){if(!Fe(ee))throw new Error(`${t} must be used within a <Carousel.Root> component`);return Be(ee)}var jn=U('<div class="overflow-hidden"><div><!></div></div>');function Hn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["class"]);yt(e,!1);const i=Ct(),s=()=>it(h,"$options",i),n=()=>it(l,"$orientation",i),a=()=>it(d,"$plugins",i);let c=F(e,"class",8,void 0);const{orientation:l,options:h,plugins:d,onInit:p}=Ut("<Carousel.Content/>");bt();var $=jn(),f=et($);let m;var b=et(f);$t(b,e,"default",{}),Z(f),Z($),Xe($,(u,g)=>ce(u,g),()=>({options:{container:"[data-embla-container]",slides:"[data-embla-slide]",...s(),axis:n()==="horizontal"?"x":"y"},plugins:a()})),je(()=>Zt("emblaInit",$,p)),Y(()=>m=Gt(f,m,{class:Dt("flex",n()==="horizontal"?"-ml-4":"-mt-4 flex-col",c()),"data-embla-container":"",...r})),N(t,$),xt()}var Vn=U("<div><!></div>");function Rn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["class"]);yt(e,!1);const i=Ct(),s=()=>it(a,"$orientation",i);let n=F(e,"class",8,void 0);const{orientation:a}=Ut("<Carousel.Item/>");bt();var c=Vn();let l;var h=et(c);$t(h,e,"default",{}),Z(c),Y(()=>l=Gt(c,l,{role:"group","aria-roledescription":"slide",class:Dt("min-w-0 shrink-0 grow-0 basis-full",s()==="horizontal"?"pl-4":"pt-4",n()),"data-embla-slide":"",...r})),N(t,c),xt()}function Gn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]);_e(t,Rt({name:"arrow-right"},()=>o,{iconNode:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]],children:(i,s)=>{var n=ne(),a=rt(n);$t(a,e,"default",{}),N(i,n)},$$slots:{default:!0}}))}var qn=U('<!> <span class="sr-only">Next slide</span>',1);function Un(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["class","variant","size"]);yt(e,!1);const i=Ct(),s=()=>it(h,"$orientation",i),n=()=>it(d,"$canScrollNext",i);let a=F(e,"class",8,void 0),c=F(e,"variant",8,"outline"),l=F(e,"size",8,"icon");const{orientation:h,canScrollNext:d,scrollNext:p,handleKeyDown:$}=Ut("<Carousel.Next/>");bt();var f=jt(()=>Dt("absolute h-8 w-8 touch-manipulation rounded-full",s()==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a())),m=jt(()=>!n());Ht(t,Rt({get variant(){return c()},get size(){return l()},get class(){return z(f)},get disabled(){return z(m)}},()=>r,{$$events:{click:p,keydown:$},children:(b,u)=>{var g=qn(),v=rt(g);Gn(v,{class:"h-4 w-4"}),vt(2),N(b,g)},$$slots:{default:!0}})),xt()}function Kn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]);_e(t,Rt({name:"arrow-left"},()=>o,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(i,s)=>{var n=ne(),a=rt(n);$t(a,e,"default",{}),N(i,n)},$$slots:{default:!0}}))}var Xn=U('<!> <span class="sr-only">Previous slide</span>',1);function Qn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["class","variant","size"]);yt(e,!1);const i=Ct(),s=()=>it(h,"$orientation",i),n=()=>it(d,"$canScrollPrev",i);let a=F(e,"class",8,void 0),c=F(e,"variant",8,"outline"),l=F(e,"size",8,"icon");const{orientation:h,canScrollPrev:d,scrollPrev:p,handleKeyDown:$}=Ut("<Carousel.Previous/>");bt();var f=jt(()=>Dt("absolute h-8 w-8 touch-manipulation rounded-full",s()==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a())),m=jt(()=>!n());Ht(t,Rt({get variant(){return c()},get size(){return l()},get class(){return z(f)},get disabled(){return z(m)}},()=>r,{$$events:{click:p,keydown:$},children:(b,u)=>{var g=Xn(),v=rt(g);Kn(v,{class:"h-4 w-4"}),vt(2),N(b,g)},$$slots:{default:!0}})),xt()}var Jn=U("<div><!></div>");function Yn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["opts","plugins","api","orientation","class"]);yt(e,!1);let i=F(e,"opts",24,()=>({})),s=F(e,"plugins",24,()=>[]),n=F(e,"api",12,void 0),a=F(e,"orientation",8,"horizontal"),c=F(e,"class",8,void 0);const l=lt(void 0),h=lt(a()),d=lt(!1),p=lt(!1),$=lt(i()),f=lt(s()),m=lt([]),b=lt(0);function u(){var x;(x=n())==null||x.scrollPrev()}function g(){var x;(x=n())==null||x.scrollNext()}function v(x,T){var L;(L=n())==null||L.scrollTo(x,T)}function _(x){x&&(d.set(x.canScrollPrev()),p.set(x.canScrollNext()),b.set(x.selectedScrollSnap()))}function P(x){x.key==="ArrowLeft"?(x.preventDefault(),u()):x.key==="ArrowRight"&&(x.preventDefault(),g())}Bn({api:l,scrollPrev:u,scrollNext:g,orientation:h,canScrollNext:p,canScrollPrev:d,handleKeyDown:P,options:$,plugins:f,onInit:E,scrollSnaps:m,selectedIndex:b,scrollTo:v});function E(x){n(x.detail),l.set(n()),m.set(n().scrollSnapList())}He(()=>{var x;(x=n())==null||x.off("select",_)}),Ft(()=>Bt(a()),()=>{h.set(a())}),Ft(()=>Bt(s()),()=>{f.set(s())}),Ft(()=>Bt(i()),()=>{$.set(i())}),Ft(()=>Bt(n()),()=>{n()&&(_(n()),n().on("select",_),n().on("reInit",_))}),Ve(),bt();var S=Jn();let w;var I=et(S);$t(I,e,"default",{}),Z(S),Y(()=>w=Gt(S,w,{class:Dt("relative",c()),role:"region","aria-roledescription":"carousel",...r})),Zt("mouseenter",S,function(x){be.call(this,e,x)}),Zt("mouseleave",S,function(x){be.call(this,e,x)}),N(t,S),xt()}var Zn=U("<h2><!></h2>");function Wn(t,e){const o=B(e,["children","$$slots","$$events","$$legacy"]),r=B(o,["className"]);let i=F(e,"className",8,"");var s=Zn();let n;var a=et(s);$t(a,e,"default",{}),Z(s),Y(()=>n=Gt(s,n,{...r,class:`scroll-m-20 pb-2 text-3xl font-semibold tracking-normal first:mt-0 ${i()}`})),N(t,s)}const to="Home",eo={title:`${en.fullName}`,description:"I am a passionate and curious learner. Beyond my academic pursuits, I have actively explored diverse areas of Computer Science, including competitive programming, hackathons, and deep learning competitions. I am eager to embrace opportunities that enable me to apply my problem-solving skills and curiosity to address real-world challenges while further expanding my expertise.",links:[{label:"GitHub",href:"https://github.com/SadatHossain01",icon:"i-carbon-logo-github"},{label:"LinkedIn",href:"https://www.linkedin.com/in/SadatHossain01",icon:"i-carbon-logo-linkedin"},{label:"YouTube",href:"https://www.youtube.com/@SadatHossain01",icon:"i-carbon-logo-youtube"},{label:"Facebook",href:"https://www.facebook.com/sadathossain01",icon:"i-carbon-logo-facebook"},{label:"Instagram",href:"https://www.instagram.com/sadathossain01",icon:"i-carbon-logo-instagram"},{label:"X",href:"https://x.com/SadatHossain01",icon:"i-carbon-logo-x"},{label:"Primary Mail",href:"mailto:sadatho2014@gmail.com",icon:"i-carbon-at"},{label:"Secondary Mail",href:"mailto:sadatdbt@gmail.com",icon:"i-carbon-at"}]},no=nn(),It={title:to,hero:eo,carousel:no};var oo=U("<!> <!>",1),so=U('<a target="_blank"><!></a>'),ro=U('<img class="h-[150px] w-[150px]"> <a><!></a>',1),io=U("<!> <!> <!>",1),co=U('<div class="flex flex-1 flex-col items-center justify-center gap-8 px-14 md:flex-row md:justify-between"><div class="flex flex-col items-center justify-center gap-4 text-center md:items-start md:text-left"><!> <!> <div class="flex flex-row gap-1"></div></div> <div><!></div></div>'),ao=U("<!> <!>",1);function Eo(t,e){yt(e,!1);const o=Ct(),r=()=>it(on,"$mode",o);let i=qe();Re(()=>{setInterval(()=>{z(i)&&z(i).scrollNext()},2e3)}),bt();var s=ao(),n=rt(s);Ue(n,{get title(){return It.title}});var a=at(n,2);Ke(a,{className:"flex flex-col justify-center flex-1",children:(c,l)=>{var h=co(),d=et(h),p=et(d);Wn(p,{children:(u,g)=>{vt();var v=kt();Y(()=>Ot(v,It.hero.title)),N(u,v)},$$slots:{default:!0}});var $=at(p,2);tn($,{children:(u,g)=>{vt();var v=kt();Y(()=>Ot(v,It.hero.description)),N(u,v)},$$slots:{default:!0}});var f=at($,2);he(f,5,()=>It.hero.links,ve,(u,g)=>{var v=so(),_=et(v);Ye(_,{children:(P,E)=>{var S=oo(),w=rt(S);Ze(w,{children:(x,T)=>{Ht(x,{variant:"outline",size:"icon",children:(L,j)=>{Je(L,{get icon(){return z(g).icon},className:"text-lg"})},$$slots:{default:!0}})},$$slots:{default:!0}});var I=at(w,2);We(I,{side:"bottom",children:(x,T)=>{vt();var L=kt();Y(()=>Ot(L,z(g).label)),N(x,L)},$$slots:{default:!0}}),N(P,S)},$$slots:{default:!0}}),Z(v),Y(()=>zt(v,"href",z(g).href)),N(u,v)}),Z(f),Z(d);var m=at(d,2),b=et(m);Yn(b,{get api(){return z(i)},set api(u){Ge(i,u)},class:"w-[200px] md:ml-14",opts:{loop:!0},children:(u,g)=>{var v=io(),_=rt(v);Hn(_,{children:(S,w)=>{var I=ne(),x=rt(I);he(x,1,()=>It.carousel,ve,(T,L)=>{Rn(T,{class:"flex flex-col items-center justify-center gap-4",children:(j,K)=>{var H=ro(),X=rt(H),G=at(X,2);Y(()=>zt(G,"href",Qe(`/skills/${z(L).slug}`)));var Q=et(G);Ht(Q,{variant:"ghost",children:(J,pt)=>{vt();var V=kt();Y(()=>Ot(V,z(L).name)),N(J,V)},$$slots:{default:!0}}),Z(G),Y(()=>{zt(X,"src",r()==="dark"?z(L).logo.dark:z(L).logo.light),zt(X,"alt",z(L).name)}),N(j,H)},$$slots:{default:!0}})}),N(S,I)},$$slots:{default:!0}});var P=at(_,2);Un(P,{});var E=at(P,2);Qn(E,{}),N(u,v)},$$slots:{default:!0},$$legacy:!0}),Z(m),Z(h),N(c,h)},$$slots:{default:!0}}),N(t,s),xt()}export{Eo as component};