import{S as v,i as P,s as y,L as w,k as u,l as h,m as d,h as c,n as p,b as m,E as f,M as _,f as b,t as g,B as o,w as k,x as C,y as T,z as A,q as G,r as I}from"../../../../chunks/index-317a2139.js";import{S as L}from"../../../../chunks/SvelteMarkdown-8af5c757.js";const S=`# ChatGPT

ChatGPT is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques.

ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy was identified as a significant drawback.

## ChatGPT development

As it is currently in an open beta, there is no official API. However, there are developers that have reverse engineered their protocol. You can view the available APIs and Libraries below:

_Note: Libraries can only be used within the specified language. APIs work via HTTP so any language can utilize it_

| Author              | Type        | Language | Status        | Source                                             |
| ------------------- | ----------- | -------- | ------------- | -------------------------------------------------- |
| acheong08           | API         | Go/JS    | Open Source   | https://github.com/ChatGPT-Hackers/                |
| transitive-bullshit | Library     | NodeJS   | Open Source   | https://github.com/transitive-bullshit/chatgpt-api |
| LanLan69            | Library     | Python   | Open Source   | https://github.com/LanLan69/easyChatGPT            |
| PawanOsman          | API/Library | C#       | Open Source   | https://github.com/PawanOsman/ChatGPT.Net/         |
| tonyb               | API (Paid)  | NodeJS   | Closed Source | https://justbrowse.io/                             |

## acheong08

Probably the best self-hosted API

### Features

- Multi account pool
- Protect your server with authentication
- Multiple agents can live in one window (Least RAM used)

## transitive-bullshit

Probably the best local development library

### Features

- Captcha solving (paid)

## LanLan69

A newer Python development library for ChatGPT. A replacement for the old \`revChatGPT\`

### Features

- Fast captcha solving
- Automated browser

## PawanOsman

The ChatGPT.Net Unofficial .Net API for ChatGPT is a C# library that allows developers to access ChatGPT, a chat-based language model. With this API, developers can send queries to ChatGPT and receive responses in real-time, making it easy to integrate ChatGPT into their own applications.

### Features

-   Automatic login to ChatGPT using Microsoft accounts or SessionToken.
-   Bypass of Cloudflare protection and fake rate limit protection.
-   Persistent cookie storage to allow for application restart without requiring login.
-   Functionality to reset conversations or create multiple conversations simultaneously.
-   Automatic refresh of ChatGPT access token and Cloudflare cf_clearance cookie for uninterrupted use.
-   Efficient use of server resources through the use of a single browser window/tab for managing and using multiple accounts in the same time.
-   Cache system enabled by default, with cached data saved to cache.json to reduce requests to ChatGPT endpoint and reduce rate limiting.
-   Ability to delete all conversations created by the user's account or a specific conversation by its ID.
-   Automatic deletion of all conversations at a specified interval.
-   Automatic deletion of inactive conversations.

## tonyb

**WARNING**: **This is a paid service**
`;function N(s){return{c:o,l:o,m:o,p:o,i:o,o,d:o}}function x(s){let e,a;return e=new L({props:{source:s[0]}}),{c(){k(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,n){T(e,t,n),a=!0},p:o,i(t){a||(b(e.$$.fragment,t),a=!0)},o(t){g(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function O(s){let e,a;return{c(){e=u("div"),a=G("Loading...")},l(t){e=h(t,"DIV",{});var n=d(e);a=I(n,"Loading..."),n.forEach(c)},m(t,n){m(t,e,n),f(e,a)},p:o,i:o,o,d(t){t&&c(e)}}}function $(s){let e,a,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:O,then:x,catch:N,value:0,blocks:[,,,]};return w(S,n),{c(){e=u("div"),a=u("article"),n.block.c(),this.h()},l(r){e=h(r,"DIV",{class:!0});var i=d(e);a=h(i,"ARTICLE",{class:!0});var l=d(a);n.block.l(l),l.forEach(c),i.forEach(c),this.h()},h(){p(a,"class","flex-auto prose max-w-screen-lg text-lg"),p(e,"class","container max-w-fit m-2")},m(r,i){m(r,e,i),f(e,a),n.block.m(a,n.anchor=null),n.mount=()=>a,n.anchor=null,t=!0},p(r,[i]){s=r,_(n,s,i)},i(r){t||(b(n.block),t=!0)},o(r){for(let i=0;i<3;i+=1){const l=n.blocks[i];g(l)}t=!1},d(r){r&&c(e),n.block.d(),n.token=null,n=null}}}class F extends v{constructor(e){super(),P(this,e,null,$,y,{})}}export{F as default};
