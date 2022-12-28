# ChatGPT

ChatGPT is a chatbot launched by OpenAI in November 2022. It is built on top of OpenAI's GPT-3.5 family of large language models, and is fine-tuned with both supervised and reinforcement learning techniques.

ChatGPT was launched as a prototype on November 30, 2022, and quickly garnered attention for its detailed responses and articulate answers across many domains of knowledge. Its uneven factual accuracy was identified as a significant drawback.

## ChatGPT development

As it is currently in an open beta, there is no official API. However, there are developers that have reverse engineered their protocol. You can view the available APIs and Libraries below:

_Note: Libraries can only be used within the specified language. APIs work via HTTP so any language can utilize it_

| Author              | Type        | Language | Status        | Source                                             |
| ------------------- | ----------- | -------- | ------------- | -------------------------------------------------- |
| acheong08           | API         | Go/JS    | Open Source   | https://github.com/ChatGPT-Hackers/                |
| acheong08           | Library     | Python   | Open Source   | https://github.com/acheong08/ChatGPT               |
| transitive-bullshit | Library     | NodeJS   | Open Source   | https://github.com/transitive-bullshit/chatgpt-api |
| LanLan69            | Library     | Python   | Open Source   | https://github.com/LanLan69/easyChatGPT            |
| PawanOsman          | API/Library | C#       | Open Source   | https://github.com/PawanOsman/ChatGPT.Net/         |
| tonyb               | API (Paid)  | NodeJS   | Closed Source | https://justbrowse.io/                             |

## acheong08

### API

#### Features

- Multi account pool
- Multiple agents can live in one window (Least RAM used)
- Protect your server with authentication
- Email/Password autofill
- Automatic cloudflare bypass
- Persistent conversations

### Library

The ultimate original library. It has once again been revived with new bypass techniques. 

#### Features

- Lightweight
- Can be headless with Xvfb
- Extremely simple API (Just `ask(prompt)`)
- Robust error handling
- Automatic token refresh
- Automatic cf_clearance refresh
- Automatic captcha solving
- Email/Password login
- Microsoft login

## transitive-bullshit

### Features

- Captcha solving (third party)
- Cloudflare bypass
- A ton of other features

## LanLan69

A newer Python development library for ChatGPT. A replacement for the old `revChatGPT`

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
