import{S as _,i as v,s as w,L as k,k as u,l as d,m as h,h as l,n as m,b as p,E as f,M as P,f as b,t as g,B as o,w as y,x as I,y as A,z as C,q as T,r as S}from"../../../../chunks/index-317a2139.js";import{S as x}from"../../../../chunks/SvelteMarkdown-8af5c757.js";const L=`# ChatGPT

ChatGPT is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques.

ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy was identified as a significant drawback.

## ChatGPT development

As it is currently in an open beta, there is no official API. However, there are developers that have reverse engineered their protocol. You can view the available APIs and Libraries below:

_Note: Libraries can only be used within the specified language. APIs work via HTTP so any language can utilize it_

| Author              | Type        | Language | Status        | Source                                             |
| ------------------- | ----------- | -------- | ------------- | -------------------------------------------------- |
| acheong08           | API         | Go/JS    | Open Source   | https://github.com/ChatGPT-Hackers/                |
| Rawa                | API         | ?        | Closed source | #waitlist                                          |
| transitive-bullshit | Library     | NodeJS   | Open source   | https://github.com/transitive-bullshit/chatgpt-api |
| PawanOsman          | API/Library | C#       | Open source   | https://github.com/PawanOsman/ChatGPT.Net/         |
| tonyb               | API         | NodeJS   | Closed source | https://justbrowse.io/                             |
`;function G(i){return{c:o,l:o,m:o,p:o,i:o,o,d:o}}function $(i){let e,n;return e=new x({props:{source:i[0]}}),{c(){y(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){A(e,t,a),n=!0},p:o,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function O(i){let e,n;return{c(){e=u("div"),n=T("Loading...")},l(t){e=d(t,"DIV",{});var a=h(e);n=S(a,"Loading..."),a.forEach(l)},m(t,a){p(t,e,a),f(e,n)},p:o,i:o,o,d(t){t&&l(e)}}}function N(i){let e,n,t,a={ctx:i,current:null,token:null,hasCatch:!1,pending:O,then:$,catch:G,value:0,blocks:[,,,]};return k(L,a),{c(){e=u("div"),n=u("article"),a.block.c(),this.h()},l(s){e=d(s,"DIV",{class:!0});var r=h(e);n=d(r,"ARTICLE",{class:!0});var c=h(n);a.block.l(c),c.forEach(l),r.forEach(l),this.h()},h(){m(n,"class","flex-auto prose max-w-screen-lg text-lg"),m(e,"class","container max-w-fit m-2")},m(s,r){p(s,e,r),f(e,n),a.block.m(n,a.anchor=null),a.mount=()=>n,a.anchor=null,t=!0},p(s,[r]){i=s,P(a,i,r)},i(s){t||(b(a.block),t=!0)},o(s){for(let r=0;r<3;r+=1){const c=a.blocks[r];g(c)}t=!1},d(s){s&&l(e),a.block.d(),a.token=null,a=null}}}class H extends _{constructor(e){super(),v(this,e,null,N,w,{})}}export{H as default};
