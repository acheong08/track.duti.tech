import{S as v,i as _,s as w,L as k,k as u,l as h,m as d,h as l,n as p,b as m,E as b,M as P,f,t as g,B as o,w as y,x as I,y as A,z as T,q as O,r as C}from"../../../../chunks/index-317a2139.js";import{S as L}from"../../../../chunks/SvelteMarkdown-8af5c757.js";const S=`# ChatGPT

ChatGPT is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques.

ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy was identified as a significant drawback.

## ChatGPT development

As it is currently in an open beta, there is no official API. However, there are developers that have reverse engineered their protocol. You can view the available APIs and Libraries below:

_Note: Libraries can only be used within the specified language. APIs work via HTTP so any language can utilize it_

| Author              | Type        | Language | Status        | Source                                             |
| ------------------- | ----------- | -------- | ------------- | -------------------------------------------------- |
| acheong08           | API         | Go/JS    | Open Source   | https://github.com/ChatGPT-Hackers/                |
| transitive-bullshit | Library     | NodeJS   | Open source   | https://github.com/transitive-bullshit/chatgpt-api |
| PawanOsman          | API/Library | C#       | Open source   | https://github.com/PawanOsman/ChatGPT.Net/         |
| tonyb               | API (Paid)  | NodeJS   | Closed source | https://justbrowse.io/                             |

## acheong08

Probably the best self-hosted API

### Features

- Multi account pool
- Protect your server with authentication
- Multiple agents can live in one window (Least RAM used)

## transitive-bullshit

Probably the best local development library

### Features

TODO

## PawanOsman

TODO

## tonyb

**WARNING**: **This is a paid service**
`;function x(i){return{c:o,l:o,m:o,p:o,i:o,o,d:o}}function G(i){let e,a;return e=new L({props:{source:i[0]}}),{c(){y(e.$$.fragment)},l(n){I(e.$$.fragment,n)},m(n,t){A(e,n,t),a=!0},p:o,i(n){a||(f(e.$$.fragment,n),a=!0)},o(n){g(e.$$.fragment,n),a=!1},d(n){T(e,n)}}}function N(i){let e,a;return{c(){e=u("div"),a=O("Loading...")},l(n){e=h(n,"DIV",{});var t=d(e);a=C(t,"Loading..."),t.forEach(l)},m(n,t){m(n,e,t),b(e,a)},p:o,i:o,o,d(n){n&&l(e)}}}function $(i){let e,a,n,t={ctx:i,current:null,token:null,hasCatch:!1,pending:N,then:G,catch:x,value:0,blocks:[,,,]};return k(S,t),{c(){e=u("div"),a=u("article"),t.block.c(),this.h()},l(s){e=h(s,"DIV",{class:!0});var r=d(e);a=h(r,"ARTICLE",{class:!0});var c=d(a);t.block.l(c),c.forEach(l),r.forEach(l),this.h()},h(){p(a,"class","flex-auto prose max-w-screen-lg text-lg"),p(e,"class","container max-w-fit m-2")},m(s,r){m(s,e,r),b(e,a),t.block.m(a,t.anchor=null),t.mount=()=>a,t.anchor=null,n=!0},p(s,[r]){i=s,P(t,i,r)},i(s){n||(f(t.block),n=!0)},o(s){for(let r=0;r<3;r+=1){const c=t.blocks[r];g(c)}n=!1},d(s){s&&l(e),t.block.d(),t.token=null,t=null}}}class q extends v{constructor(e){super(),_(this,e,null,$,w,{})}}export{q as default};
