var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function r(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function m(){return l(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function d(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function g(t,n){t.value=null==n?"":n}let f;function $(t){f=t}const x=[],C=[],v=[],k=[],b=Promise.resolve();let S=!1;function w(t){v.push(t)}function y(t){k.push(t)}let L=!1;const N=new Set;function T(){if(!L){L=!0;do{for(let t=0;t<x.length;t+=1){const n=x[t];$(n),_(n.$$)}for($(null),x.length=0;C.length;)C.pop()();for(let t=0;t<v.length;t+=1){const n=v[t];N.has(n)||(N.add(n),n())}v.length=0}while(x.length);for(;k.length;)k.pop()();S=!1,L=!1,N.clear()}}function _(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(w)}}const M=new Set;let E;function D(t,n){t&&t.i&&(M.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(M.has(t))return;M.add(t),E.c.push((()=>{M.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function A(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function R(t){t&&t.c()}function K(t,e,u,i){const{fragment:r,on_mount:c,on_destroy:a,after_update:l}=t.$$;r&&r.m(e,u),i||w((()=>{const e=c.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),l.forEach(w)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(x.push(t),S||(S=!0,b.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function B(n,s,u,i,r,a,l=[-1]){const m=f;$(n);const p=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:r,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:s.context||[]),callbacks:e(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=u?u(n,s.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return p.ctx&&r(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),h&&q(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(c)}else p.fragment&&p.fragment.c();s.intro&&D(n.$$.fragment),K(n,s.target,s.anchor,s.customElement),T()}$(m)}class P{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function U(n){let e,s,u,h,g,f,$,x,C,v,k,b,S,w,y,L,N,T,_,M,E,D,j;return{c(){e=a("p"),s=l("Suprasegment: "),u=l(n[1]),h=m(),g=a("p"),f=l("Segment: "),$=l(n[0]),x=m(),C=a("p"),v=l("Shot: "),k=l(n[2]),b=m(),S=a("button"),S.textContent="Add shot",w=m(),y=a("button"),y.textContent="Add segment",L=m(),N=a("button"),N.textContent="Add suprasegment",T=m(),_=a("button"),_.textContent="Remove last shot",M=m(),E=a("button"),E.textContent="Stop the count"},m(t,o){r(t,e,o),i(e,s),i(e,u),r(t,h,o),r(t,g,o),i(g,f),i(g,$),r(t,x,o),r(t,C,o),i(C,v),i(C,k),r(t,b,o),r(t,S,o),r(t,w,o),r(t,y,o),r(t,L,o),r(t,N,o),r(t,T,o),r(t,_,o),r(t,M,o),r(t,E,o),D||(j=[p(window,"keydown",n[8]),p(S,"click",n[3]),p(y,"click",n[4]),p(N,"click",n[5]),p(_,"click",n[6]),p(E,"click",n[7])],D=!0)},p(t,[n]){2&n&&d(u,t[1]),1&n&&d($,t[0]),4&n&&d(k,t[2])},i:t,o:t,d(t){t&&c(e),t&&c(h),t&&c(g),t&&c(x),t&&c(C),t&&c(b),t&&c(S),t&&c(w),t&&c(y),t&&c(L),t&&c(N),t&&c(T),t&&c(_),t&&c(M),t&&c(E),D=!1,o(j)}}}function G(t,n,e){let o,{segmentCount:s=1}=n,{suprasegmentCount:u=1}=n,{initialTime:i}=n,{endTime:r}=n,{countStopped:c=!1}=n,{exportData:a}=n,{shots:l}=n;const m=()=>{let t=Date.now()/1e3-i,n=t-l[l.length-1].time;l.push({suprasegmentCount:u,segmentCount:s,time:t,length:n}),e(9,l)},p=()=>{e(0,s++,s),m()},h=()=>{e(1,u++,u),p()},d=()=>{console.log(l),l[l.length-1].segmentCount>l[l.length-2].segmentCount&&e(0,s--,s),l[l.length-1].suprasegmentCount>l[l.length-2].suprasegmentCount&&e(1,u--,u),l.pop(),e(9,l)},g=()=>{e(10,r=Date.now()/1e3-i),a(),e(11,c=!0)};return t.$$set=t=>{"segmentCount"in t&&e(0,s=t.segmentCount),"suprasegmentCount"in t&&e(1,u=t.suprasegmentCount),"initialTime"in t&&e(12,i=t.initialTime),"endTime"in t&&e(10,r=t.endTime),"countStopped"in t&&e(11,c=t.countStopped),"exportData"in t&&e(13,a=t.exportData),"shots"in t&&e(9,l=t.shots)},t.$$.update=()=>{512&t.$$.dirty&&e(2,o=l.length)},[s,u,o,m,p,h,d,g,t=>{let n=t.key;t.keyCode,console.log(n),"s"===n||"S"===n||" "===n?m():"g"===n||"G"===n?p():"u"===n||"U"===n?h():"Escape"===n||"Esc"===n?c||g():"Backspace"===n&&d()},l,r,c,i,a]}class W extends P{constructor(t){super(),B(this,t,G,U,u,{segmentCount:0,suprasegmentCount:1,initialTime:12,endTime:10,countStopped:11,exportData:13,shots:9})}}function H(n){let e,o,s,u,p,g,f,$,x,C,v,k,b,S,w,y,L,N,T,_,M,E,D,j,A,R,K,O,q,B,P,U,G,W,H,I,V=n[0].shots.length+"",z=n[0].segmentCount+"",F=n[0].suprasegmentCount+"",J=Math.round(100*n[0].endTime)/100+"",Q=Math.round(100*n[0].averageShotLenght)/100+"",X=Math.round(100*n[0].maxShotLenght)/100+"",Y=Math.round(100*n[0].minShotLenght)/100+"";return{c(){e=a("p"),o=l("Number of shots: "),s=l(V),u=m(),p=a("p"),g=l("Number of segments: "),f=l(z),$=m(),x=a("p"),C=l("Number of suprasegments: "),v=l(F),k=m(),b=a("p"),S=l("Length of the film: "),w=l(J),y=l(" seconds"),L=m(),N=a("p"),T=l("Average shot length: "),_=l(Q),M=l("\n    seconds"),E=m(),D=a("p"),j=l("Max shot length: "),A=l(X),R=l(" seconds"),K=m(),O=a("p"),q=l("Min shot length: "),B=l(Y),P=l(" seconds"),U=m(),G=a("a"),W=l("Download CSV"),h(G,"href",H=n[0].downloadLink),h(G,"download",I=n[0].filmName+".csv")},m(t,n){r(t,e,n),i(e,o),i(e,s),r(t,u,n),r(t,p,n),i(p,g),i(p,f),r(t,$,n),r(t,x,n),i(x,C),i(x,v),r(t,k,n),r(t,b,n),i(b,S),i(b,w),i(b,y),r(t,L,n),r(t,N,n),i(N,T),i(N,_),i(N,M),r(t,E,n),r(t,D,n),i(D,j),i(D,A),i(D,R),r(t,K,n),r(t,O,n),i(O,q),i(O,B),i(O,P),r(t,U,n),r(t,G,n),i(G,W)},p(t,[n]){1&n&&V!==(V=t[0].shots.length+"")&&d(s,V),1&n&&z!==(z=t[0].segmentCount+"")&&d(f,z),1&n&&F!==(F=t[0].suprasegmentCount+"")&&d(v,F),1&n&&J!==(J=Math.round(100*t[0].endTime)/100+"")&&d(w,J),1&n&&Q!==(Q=Math.round(100*t[0].averageShotLenght)/100+"")&&d(_,Q),1&n&&X!==(X=Math.round(100*t[0].maxShotLenght)/100+"")&&d(A,X),1&n&&Y!==(Y=Math.round(100*t[0].minShotLenght)/100+"")&&d(B,Y),1&n&&H!==(H=t[0].downloadLink)&&h(G,"href",H),1&n&&I!==(I=t[0].filmName+".csv")&&h(G,"download",I)},i:t,o:t,d(t){t&&c(e),t&&c(u),t&&c(p),t&&c($),t&&c(x),t&&c(k),t&&c(b),t&&c(L),t&&c(N),t&&c(E),t&&c(D),t&&c(K),t&&c(O),t&&c(U),t&&c(G)}}}function I(t,n,e){let{countResults:o}=n;return t.$$set=t=>{"countResults"in t&&e(0,o=t.countResults)},[o]}class V extends P{constructor(t){super(),B(this,t,I,H,u,{countResults:0})}}function z(t){let n,e,o;return{c(){n=a("div"),e=a("img"),e.src!==(o=t[1])&&h(e,"src",o),h(e,"width","500px"),h(e,"alt","Pan Kokeš je momentálně nedostupný")},m(t,o){r(t,n,o),i(n,e)},p(t,n){2&n&&e.src!==(o=t[1])&&h(e,"src",o)},d(t){t&&c(n)}}}function F(n){let e,o=n[0]&&z(n);return{c(){o&&o.c(),e=l("")},m(t,n){o&&o.m(t,n),r(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=z(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&c(e)}}}function J(t,n,e){let o,s=!1,u=["images/kokes-1.jpg","images/kokes-2.jpg"];return[s,o,()=>{e(0,s=!s),e(1,o=u[Math.floor(Math.random()*u.length)])}]}class Q extends P{constructor(t){super(),B(this,t,J,F,u,{toggleKokes:2})}get toggleKokes(){return this.$$.ctx[2]}}function X(n){let e,s,u,i,l;return{c(){e=a("input"),s=m(),u=a("button"),u.textContent="Start the count"},m(t,o){r(t,e,o),g(e,n[0]),r(t,s,o),r(t,u,o),i||(l=[p(e,"input",n[18]),p(u,"click",n[10])],i=!0)},p(t,n){1&n&&e.value!==t[0]&&g(e,t[0])},i:t,o:t,d(t){t&&c(e),t&&c(s),t&&c(u),i=!1,o(l)}}}function Y(t){let n,e;return n=new V({props:{countResults:t[8]}}),{c(){R(n.$$.fragment)},m(t,o){K(n,t,o),e=!0},p(t,e){const o={};256&e&&(o.countResults=t[8]),n.$set(o)},i(t){e||(D(n.$$.fragment,t),e=!0)},o(t){j(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function Z(t){let n,e,o,s,u,i,r;function c(n){t[13](n)}function a(n){t[14](n)}function l(n){t[15](n)}function m(n){t[16](n)}function p(n){t[17](n)}let h={initialTime:t[3],exportData:t[12]};return void 0!==t[7]&&(h.shots=t[7]),void 0!==t[5]&&(h.segmentCount=t[5]),void 0!==t[6]&&(h.suprasegmentCount=t[6]),void 0!==t[2]&&(h.countStopped=t[2]),void 0!==t[4]&&(h.endTime=t[4]),n=new W({props:h}),C.push((()=>A(n,"shots",c))),C.push((()=>A(n,"segmentCount",a))),C.push((()=>A(n,"suprasegmentCount",l))),C.push((()=>A(n,"countStopped",m))),C.push((()=>A(n,"endTime",p))),{c(){R(n.$$.fragment)},m(t,e){K(n,t,e),r=!0},p(t,r){const c={};8&r&&(c.initialTime=t[3]),!e&&128&r&&(e=!0,c.shots=t[7],y((()=>e=!1))),!o&&32&r&&(o=!0,c.segmentCount=t[5],y((()=>o=!1))),!s&&64&r&&(s=!0,c.suprasegmentCount=t[6],y((()=>s=!1))),!u&&4&r&&(u=!0,c.countStopped=t[2],y((()=>u=!1))),!i&&16&r&&(i=!0,c.endTime=t[4],y((()=>i=!1))),n.$set(c)},i(t){r||(D(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function tt(t){let n,e,s,u,i,l,h,d;const g=[Z,Y,X],f=[];function $(t,n){return t[1]&&!t[2]?0:t[2]?1:2}e=$(t),s=f[e]=g[e](t);return i=new Q({props:{}}),t[19](i),{c(){n=a("div"),s.c(),u=m(),R(i.$$.fragment)},m(o,s){r(o,n,s),f[e].m(n,null),r(o,u,s),K(i,o,s),l=!0,h||(d=p(window,"keydown",t[11]),h=!0)},p(t,[u]){let r=e;e=$(t),e===r?f[e].p(t,u):(E={r:0,c:[],p:E},j(f[r],1,1,(()=>{f[r]=null})),E.r||o(E.c),E=E.p,s=f[e],s?s.p(t,u):(s=f[e]=g[e](t),s.c()),D(s,1),s.m(n,null));i.$set({})},i(t){l||(D(s),D(i.$$.fragment,t),l=!0)},o(t){j(s),j(i.$$.fragment,t),l=!1},d(o){o&&c(n),f[e].d(),o&&c(u),t[19](null),O(i,o),h=!1,d()}}}function nt(t,n,e){let o,s,u,i,r,{filmName:c="Women on the run"}=n,a=!1,l=[{suprasegmentCount:0,segmentCount:0,time:0,length:0}];const m=()=>{e(1,a=!0),e(3,s=Date.now()/1e3)};let p={averageShotLenght:0,maxShotLenght:0,minShotLenght:0};let h;return t.$$set=t=>{"filmName"in t&&e(0,c=t.filmName)},[c,a,o,s,u,i,r,l,p,h,m,t=>{let n=t.key,e=t.keyCode;console.log("Key pressed: "+n+" with code: "+e),"Enter"!==n||a?"D"===n&&h.toggleKokes():m()},()=>{l.shift(),e(8,p.shots=l,p),e(8,p.segmentCount=i,p),e(8,p.suprasegmentCount=r,p),e(8,p.initialTime=s,p),e(8,p.endTime=u,p),e(8,p.shotTimes=l.map((t=>t.time)),p),e(8,p.shotLengths=l.map((t=>t.length)),p),console.log(l),console.log(p.shotLengths),l.length>0&&(e(8,p.averageShotLenght=p.shotLengths.reduce(((t,n)=>t+n))/p.shotLengths.length,p),e(8,p.maxShotLenght=Math.max(...p.shotLengths),p),e(8,p.minShotLenght=Math.min(...p.shotLengths),p)),console.log(p);let t="data:text/csv;charset=utf-8,suprasegment,segment,time,length\n"+l.map((t=>Object.values(t).join(","))).join("\n")+"\nfinal,count,avg shot len: "+p.averageShotLenght+",max shot len: "+p.maxShotLenght+",min shot len: "+p.minShotLenght+"\n";e(8,p.downloadLink=encodeURI(t),p)},function(t){l=t,e(7,l)},function(t){i=t,e(5,i)},function(t){r=t,e(6,r)},function(t){o=t,e(2,o)},function(t){u=t,e(4,u)},function(){c=this.value,e(0,c)},function(t){C[t?"unshift":"push"]((()=>{h=t,e(9,h)}))}]}class et extends P{constructor(t){super(),B(this,t,nt,tt,u,{filmName:0})}}function ot(n){let e,o,s,u,p,g;return{c(){e=a("div"),o=a("h1"),o.textContent="Welcome to Cinecount",s=m(),u=a("h2"),p=l("Counting for a film named: "),g=l(n[0]),h(o,"class","svelte-1a2l3u7"),h(u,"class","svelte-1a2l3u7")},m(t,n){r(t,e,n),i(e,o),i(e,s),i(e,u),i(u,p),i(u,g)},p(t,[n]){1&n&&d(g,t[0])},i:t,o:t,d(t){t&&c(e)}}}function st(t,n,e){let{filmName:o}=n;return t.$$set=t=>{"filmName"in t&&e(0,o=t.filmName)},[o]}class ut extends P{constructor(t){super(),B(this,t,st,ot,u,{filmName:0})}}function it(t){let n,e,o,s,u,l,p,d;function g(n){t[1](n)}e=new ut({props:{filmName:t[0]}});let f={};return void 0!==t[0]&&(f.filmName=t[0]),s=new et({props:f}),C.push((()=>A(s,"filmName",g))),{c(){n=a("main"),R(e.$$.fragment),o=m(),R(s.$$.fragment),l=m(),p=a("footer"),p.innerHTML='<blockquote style="align: center;text-align: left;color: #768390; padding-bottom: 10px;"><p>Shortcuts:</p> \n\t\t<p>S or SPACE - add shot</p> \n\t\t<p>G - add segment</p> \n\t\t<p>U - add suprasegment</p> \n\t\t<p>Backspace - remove last shot</p> \n\t\t<p>Enter - start counting</p> \n\t\t<p>Escape - end counting</p></blockquote>',h(n,"class","svelte-1s5u0aa"),h(p,"class","svelte-1s5u0aa")},m(t,u){r(t,n,u),K(e,n,null),i(n,o),K(s,n,null),r(t,l,u),r(t,p,u),d=!0},p(t,[n]){const o={};1&n&&(o.filmName=t[0]),e.$set(o);const i={};!u&&1&n&&(u=!0,i.filmName=t[0],y((()=>u=!1))),s.$set(i)},i(t){d||(D(e.$$.fragment,t),D(s.$$.fragment,t),d=!0)},o(t){j(e.$$.fragment,t),j(s.$$.fragment,t),d=!1},d(t){t&&c(n),O(e),O(s),t&&c(l),t&&c(p)}}}function rt(t,n,e){let o;return[o,function(t){o=t,e(0,o)}]}return new class extends P{constructor(t){super(),B(this,t,rt,it,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
