# Reminder Application

Demo application for WebEvent GDG Tashkent. The application built to demonstrate how to use GitHub and GitHub Actions functionality. 

## Features
- Add / Remove todo items
- Send reminder to Telegram bot

## Prerequisites

```text
npm@^8.5.0
node@14
```

You need Vercel account for Hosting and using Serverless functions.

Provide following Environment variables to application
- `GHP_TOKEN` - GitHub Personal Token for working with GitHub APIs
- `GH_GIST_ID` - GitHub Gist ID needed to store Todo items in dedicated Gist
- `TELEGRAM_BOT_TOKEN` - Telegram Bot Token need to send messages
- `TELEGRAM_CHAT_ID` - Telegram User Chat ID needed to know whom to send message
- `VERCEL_TOKEN` - Vercel token for Deployment
- `VERCEL_ORG_ID` - Vercel Organization ID for configuring Vercel CLI
- `VERCEL_PROJECT_ID` - Vercel Organization ID for configuring Vercel CLI




## Installation

```bash
npm install
```

## Usage

- ```npm run start ``` - Run backend and web application
- ```npm run remind-todos``` - Remind Telegram user about Todo items
- ```npm run get-todos``` - Fetch Todo Items



## Tech stack
- Frontend (React / Typescript / Vite) - [TodoMVC project](https://todomvc.com/examples/react/#/) 
- Testing ([Vitest](https://vitest.dev/))
- CI/CD ([Github Actions](https://github.com/features/actions))
- Database ([GitHub Gists](https://gist.github.com/))
- Hosting ([Vercel](https://vercel.com/))
- Backend ([Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions))

### References

- [Demo Telegram Bot](https://t.me/webevent_github_actions_demo_bot)
- [Demo Web Application](https://webevent-github-actions-demo.vercel.app/)

