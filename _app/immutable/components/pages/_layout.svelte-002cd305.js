import{S as me,i as pe,s as ve,k as _,q as I,a as L,C as ie,l as d,m as u,r as w,h as n,c as x,D as ce,n as h,b as A,E as r,B as W,F as be,G as ge,e as fe,u as Ee,H as $e,w as Le,x as xe,y as ke,I as ye,J as Ie,K as we,f as ue,t as he,z as Ae}from"../../chunks/index-317a2139.js";import{p as De}from"../../chunks/stores-85dbfd97.js";function _e(c,e,a){const s=c.slice();return s[2]=e[a],s[4]=a,s}function Ce(c){let e,a,s=c[2]+"",o,t,l;return{c(){e=_("li"),a=_("a"),o=I(s),l=L(),this.h()},l(i){e=d(i,"LI",{});var v=u(e);a=d(v,"A",{href:!0});var E=u(a);o=w(E,s),E.forEach(n),l=x(v),v.forEach(n),this.h()},h(){h(a,"href",t=c[0].slice(0,c[4]+1).join("/"))},m(i,v){A(i,e,v),r(e,a),r(a,o),r(e,l)},p(i,v){v&1&&s!==(s=i[2]+"")&&Ee(o,s),v&1&&t!==(t=i[0].slice(0,i[4]+1).join("/"))&&h(a,"href",t)},d(i){i&&n(e)}}}function He(c){let e,a,s,o;return{c(){e=_("li"),a=_("a"),s=I("Home"),o=L(),this.h()},l(t){e=d(t,"LI",{});var l=u(e);a=d(l,"A",{href:!0,class:!0});var i=u(a);s=w(i,"Home"),i.forEach(n),o=x(l),l.forEach(n),this.h()},h(){h(a,"href","/"),h(a,"class","text-purple-500")},m(t,l){A(t,e,l),r(e,a),r(a,s),r(e,o)},p:W,d(t){t&&n(e)}}}function de(c){let e;function a(t,l){return t[4]===0?He:Ce}let o=a(c)(c);return{c(){o.c(),e=fe()},l(t){o.l(t),e=fe()},m(t,l){o.m(t,l),A(t,e,l)},p(t,l){o.p(t,l)},d(t){o.d(t),t&&n(e)}}}function Se(c){let e,a,s,o,t,l,i,v,E,R,F,k,D,J,g,V,K,$,z,C,M,Z,B,H,N,P,y,S,T=c[0],p=[];for(let f=0;f<T.length;f+=1)p[f]=de(_e(c,T,f));return{c(){e=_("div"),a=_("div"),s=_("a"),o=I("AI Tracker"),t=L(),l=_("div"),i=_("ul"),v=_("li"),E=_("a"),R=I("About"),F=L(),k=_("li"),D=_("p"),J=I(`Resources
					`),g=ie("svg"),V=ie("path"),K=L(),$=_("ul"),z=_("li"),C=_("a"),M=I("Stable Diffusion"),Z=L(),B=_("li"),H=_("a"),N=I("ChatGPT"),P=L(),y=_("div"),S=_("ul");for(let f=0;f<p.length;f+=1)p[f].c();this.h()},l(f){e=d(f,"DIV",{class:!0});var b=u(e);a=d(b,"DIV",{class:!0});var m=u(a);s=d(m,"A",{class:!0,href:!0});var G=u(s);o=w(G,"AI Tracker"),G.forEach(n),m.forEach(n),t=x(b),l=d(b,"DIV",{class:!0});var X=u(l);i=d(X,"UL",{class:!0});var U=u(i);v=d(U,"LI",{});var Y=u(v);E=d(Y,"A",{href:!0});var ee=u(E);R=w(ee,"About"),ee.forEach(n),Y.forEach(n),F=x(U),k=d(U,"LI",{});var j=u(k);D=d(j,"P",{});var O=u(D);J=w(O,`Resources
					`),g=ce(O,"svg",{class:!0,xmlns:!0,width:!0,height:!0,viewBox:!0});var te=u(g);V=ce(te,"path",{d:!0}),u(V).forEach(n),te.forEach(n),O.forEach(n),K=x(j),$=d(j,"UL",{class:!0});var q=u($);z=d(q,"LI",{});var le=u(z);C=d(le,"A",{href:!0});var ae=u(C);M=w(ae,"Stable Diffusion"),ae.forEach(n),le.forEach(n),Z=x(q),B=d(q,"LI",{});var se=u(B);H=d(se,"A",{href:!0});var re=u(H);N=w(re,"ChatGPT"),re.forEach(n),se.forEach(n),q.forEach(n),j.forEach(n),U.forEach(n),X.forEach(n),b.forEach(n),P=x(f),y=d(f,"DIV",{class:!0});var oe=u(y);S=d(oe,"UL",{});var ne=u(S);for(let Q=0;Q<p.length;Q+=1)p[Q].l(ne);ne.forEach(n),oe.forEach(n),this.h()},h(){h(s,"class","btn btn-ghost normal-case text-xl"),h(s,"href","/"),h(a,"class","flex-1"),h(E,"href","/about"),h(V,"d","M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"),h(g,"class","fill-current"),h(g,"xmlns","http://www.w3.org/2000/svg"),h(g,"width","20"),h(g,"height","20"),h(g,"viewBox","0 0 24 24"),h(C,"href","/resources/sd"),h(H,"href","/resources/chatgpt"),h($,"class","p-2 bg-base-100"),h(i,"class","menu menu-horizontal mx-10"),h(l,"class","flex-initial"),h(e,"class","navbar bg-base-100/25 backdrop-blur text-primary-content rounded-xm p-0 max-h-1 sticky top-0 z-50 relative max-w-full"),h(y,"class","text-sm breadcrumbs max-w-sm flex-1 m-2")},m(f,b){A(f,e,b),r(e,a),r(a,s),r(s,o),r(e,t),r(e,l),r(l,i),r(i,v),r(v,E),r(E,R),r(i,F),r(i,k),r(k,D),r(D,J),r(D,g),r(g,V),r(k,K),r(k,$),r($,z),r(z,C),r(C,M),r($,Z),r($,B),r(B,H),r(H,N),A(f,P,b),A(f,y,b),r(y,S);for(let m=0;m<p.length;m+=1)p[m].m(S,null)},p(f,[b]){if(b&1){T=f[0];let m;for(m=0;m<T.length;m+=1){const G=_e(f,T,m);p[m]?p[m].p(G,b):(p[m]=de(G),p[m].c(),p[m].m(S,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=T.length}},i:W,o:W,d(f){f&&n(e),f&&n(P),f&&n(y),be(p,f)}}}function Te(c,e,a){let s,o;return ge(c,De,t=>a(1,o=t)),c.$$.update=()=>{c.$$.dirty&2&&a(0,s=o.url.pathname.split("/"))},[s,o]}class Ve extends me{constructor(e){super(),pe(this,e,Te,Se,ve,{})}}function ze(c){let e,a,s;e=new Ve({});const o=c[1].default,t=$e(o,c,c[0],null);return{c(){Le(e.$$.fragment),a=L(),t&&t.c()},l(l){xe(e.$$.fragment,l),a=x(l),t&&t.l(l)},m(l,i){ke(e,l,i),A(l,a,i),t&&t.m(l,i),s=!0},p(l,[i]){t&&t.p&&(!s||i&1)&&ye(t,o,l,l[0],s?we(o,l[0],i,null):Ie(l[0]),null)},i(l){s||(ue(e.$$.fragment,l),ue(t,l),s=!0)},o(l){he(e.$$.fragment,l),he(t,l),s=!1},d(l){Ae(e,l),l&&n(a),t&&t.d(l)}}}function Be(c,e,a){let{$$slots:s={},$$scope:o}=e;return c.$$set=t=>{"$$scope"in t&&a(0,o=t.$$scope)},[o,s]}class Ue extends me{constructor(e){super(),pe(this,e,Be,ze,ve,{})}}export{Ue as default};