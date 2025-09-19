---
title: "Vibe Coding Finance Tracker: Lessons From Building With Al"
date: "2025-09-18"
description: "I hadn't checked my statement for a month, and then one day I saw the balance. I was like, where did I end up spending so much? Then I went to check apps that allow you to track your expenses, but most of them were very basic and not Al native, so I decided to code an Al native finance tracker web app, Here are some screenshots of the app
"
tags: ["product-management", "scalability", "architecture", "engineering"]
---

![Fintracker Overview Screenshot](https://ik.imagekit.io/xy8dm8wet/images/image1.png?updatedAt=1758178534524)

![Fintracker Stories and Categories Screenshot](https://ik.imagekit.io/xy8dm8wet/images/image6.png?updatedAt=1758178534612)

## Part 1: A Full-Fledged App Is Far Away

Initially, the prototype was ready in a short time—basically a UI skeleton—but slowly, things started to go out of control. I am glad that I had experience committing to production, so I had proper guardrails set up for working in checkpoints. If you are wondering what to do, just set up Git and keep committing to GitHub regularly. It's quite easy and makes "vibe coding" much more sustainable, as you never know when an AI will go rogue and delete some components.

One example I always remember is when I told Claude Code to build a mix of an Instagram Stories and Spotify Wrapped-like feature for my finance app. It went ahead and wrote 1,700 lines in a single file. Then, I told it to make it modular. It made four components, deleted the base file, and suddenly the app was not working because of eight different sorts of errors. I had committed code before the refactor, so I just told it to check the last commit. It fixed those errors, and the app was running again.

---

## The Authentication Saga: Firebase → Clerk

While building the product, I also figured out what’s good and what’s not. Initially, the app only had CSV imports, but then I upgraded it to import transactions from UPI apps, as manual data entry is tedious. The reason for this is that I mostly use UPI apps, but it became cumbersome as I use two to three different ones, so I moved to email. It also had an issue where credit/debit card transactions needed to be manually entered.

I decided to migrate the project's authentication from Firebase to Clerk, as Clerk manages refresh tokens and has a lot of built-in features, like disabling signups and managing a waitlist. The migration was a nightmare, and I would prefer custom-coding Google Auth over migrating a project from Firebase to Clerk again.

The most difficult part of working with Clerk is that it has different dev and prod environments, and there are so many hoops to jump through, like whitelisting your URLs. One of the crazy things is that they don't let you deploy with a Vercel URL, so you need to go through the process of buying a domain and configuring it with Vercel, Clerk, and Firebase. Also, you can put your sensitive information, like API keys, in a `.env` file for security, but Clerk does not detect it. This means you can't just go to Vercel and put your Clerk secret and publishable keys there. The most frustrating part is that your app won't crash and will be deployed smoothly, so you won't even see any errors in the build logs. But when you try to hit the login button, the entire web app crashes. Keep in mind that dev and prod keys are different.

After integrating Clerk Auth, all the data disappeared. I tried a lot, but Claude couldn't figure it out and was like, "If it's working on Firebase, why not here, dude?" Finally, Gemini detected the bug, and Claude fixed it. The problem wasn't the individual pieces; Clerk and Firebase both worked fine on their own. But when you connect them, you discover that Firebase Auth automatically converts Firestore Timestamps to JavaScript `Date` objects, while Clerk's custom token approach doesn't. Suddenly, every piece of code that called `expense.date.getTime()` started throwing `TypeError: expense.date.getTime is not a function`.

---

## Unexpected Costs and Technical Pitfalls

While "vibe coding," I burned through my free 50,000 reads in the Firebase free plan in a few hours and was shocked. How the heck? Then I recognized what was happening, did some research, and figured out that if there are 1,000 items in a table, I was reading them one at a time rather than all in one go. I was charged a little.

These are the lessons that you should learn early on if you have enabled billing. You will need some UX skills to figure out cloud costs in Google Cloud because the interface is terrible.

A lot of the time, an AI forgets the dependency array in the `useEffect` hook, and as soon as you run your dev server, boom: infinite calls. I learned the hard way why rate-limiting is important and implemented a rate limiter. Even hand-coded apps have this issue, so ensure you have a central rate-limiting setup, or else you might end up in deep financial trenches.

![Tweet and Cloudflare article about React useEffect hook causing infinite loops](https://ik.imagekit.io/xy8dm8wet/images/image10.png?updatedAt=1758178534729)

---

## UI & Styling Woes

I used to wonder why everything AI creates is purple; I eventually figured out the culprit, and now, no more purple. If you have seen a bunch of AI-generated websites, you can recognize them by the gradient and purple UI. Strive to be a bit novel. Behance and Dribbble are great places for UI inspiration, and for color palettes, try Coolors.

![Tweets about AI generating purple UIs due to Tailwind UI's indigo color default](https://ik.imagekit.io/xy8dm8wet/images/image8.png?updatedAt=1758178534647)

AI is bad at CSS. You need to prompt it well to think in systems and then be intelligent enough to use a two-column grid where appropriate, tell it to adjust the font, and remove some elements on mobile. The AI wrote some good code for graphs, and the UI improved when I provided a Dribbble link.

If you are planning to build the web app in both light mode and dark mode, then make sure to put this directive in `CLAUDE.MD` if you are using Claude's code, or `AGENTS.MD` for Codex, so that both formats of your UI are built. Another important thing: if you want to be mobile-first, do it from the beginning; otherwise, a lot of issues will happen. If you are getting an inconsistent UI, just tell the LLM to take a step back, think deeply, audit the code, and then plan and fix in phases. Surprisingly, this works most of the time.

Attaching screenshots is a powerful way to build cool stuff and guide the AI more specifically.

---

## Part 2: The Workflow That Works

### Trust, But Verify

What I have figured out is that you can trust the model, but you must verify. For example, I wanted to let Claude do its own thing, and it ended up writing class-based components even though the existing code used functional components.

In another instance, there were around 20 TypeScript errors after a 25-minute vibe session. Claude was manually building, solving one error, then building again and getting another error. I simply hit `Esc` and prompted it to audit the code and think deeply. Boom, it was fixed after some time.

LLMs, in general, have a bad habit of writing huge files with, for instance, 1,200 lines of code, which is difficult to maintain. But if you tell it to "go modular," it will create 12 files, so you need to prompt it well. Sometimes, it does not respect `CLAUDE.MD` or `AGENTS.MD`, so keep a watch to ensure it's modular. Maybe this issue will be solved with the next generation of models.

Sometimes, if you don't instruct the AI, it will just hardcode API keys. Anthropic has come out with a security hook for Claude Code, but I would say to just cross-check.

It's crazy how one word can change the outcome. I asked it to review the project from a product and tech perspective, and it gave it a 9/10. I just said, "Be critical," and I got a 4/10 and eventually figured out what to improve.

I had built a project from scratch a quarter ago with the help of Cursor. It took me a lot of time with all the back and forth. Just after two quarters, tools like Claude Code have drastically shortened development timelines.

The best way to make your app production-ready is absolutely not to let Claude, or whichever CLI or AI IDE you are using, do its own thing. You have to be in the loop. First, spend a good amount of time planning the project, creating a plan, and creating a phase-based to-do list. Then, monitor the implementation phase. Guide Claude (or whichever tool you are using) to continue building the project. Keep a dev server running, check the logs, and fix bugs as they appear. This is much easier than letting it "vibe code" and then thinking, "Okay, now I have 15,674 lines of code. How do I get it to compile?"

Claude can search over previous conversations, so I took the learnings from them and used them in my next project. Sometimes, Claude also doesn't help, like a delete function working in one route but not in another because of a missing permission request. Keep committing regularly when things are working. When you want to refactor, commit first, then refactor. Otherwise, your app might break badly. Build with Claude, solve bugs with Jules. It's cool.

When implementing Voice Activity Detection, the LLM ended up writing something verbose that I couldn't understand, and it obviously didn't work. I used `vad-web` for this, so sometimes it's better to use something that's already on the internet rather than reinventing the wheel.

For an AI, the prompt is everything. Again, the initial prompt was vanilla. I improved the prompt and gave it context. These are things that you need to work on; otherwise, its output is very high-level and not of much use.

Claude Code ended up creating five different date filters that could have been one reusable component so that a single change wouldn't need to be made in five places. You need to give it a bit of supervision. With time, I ended up committing more frequently. Even though "Vibe Coding" took me two months to complete, I don't know how much time it would take if I hand-coded it with even minimal AI assistance. The project is fairly complex, with a bunch of features, and is AI-native.

![Repository statistics showing code growth and commit history](https://ik.imagekit.io/xy8dm8wet/images/image2.png?updatedAt=1758178539712)
![Commit history](https://ik.imagekit.io/xy8dm8wet/images/image4.png?updatedAt=1758178534751)

Some commands, like `rm` and `git commit`, should not be given to an AI. Give it granular control; you will be faster. Otherwise, an accident will cost you time.

As a good rule of thumb: trust but verify. Don't "vibe code" without thinking. Eventually, your role should be to get out of the day-to-day and operate on as high a level as possible. I have started doing this since the beginning of my journey with "vibe coding." If you don't believe in vibes, that's fine. You will be deep in the trenches; more on this later.

### Testing the Hard Way

Testing was difficult using a headless browser, as it wasn't able to log in. I was like, "Why?" Then I realized that Google login credentials were needed since the only way to log in to the web app is through a Google account. I had vibe-coded all the tests, and now all of them were failing.

So again, the classic principles of software engineering—like continuous testing—still apply here. No matter how much Claude Code vibes, for now, it can't figure out your email ID and password or create a new Google account for you. You need to do it manually, at least for now. I think this will surely change in the coming quarters with the rise of tools like Comet and Claude for Chrome.

You can get an AI to "vibe" and write a lot of tests to make sure nothing breaks, but I prefer to write end-to-end happy path tests only, just to make sure the app doesn't break.

### The Vibe Coding Workflow That Worked

Vibe coding with a mix of ChatGPT, Claude Code, and the Gemini CLI is good. In a lot of instances, Gemini has been better at detecting bugs, and once you let Claude know, it solves them.

Some bugs could be solved by just telling Claude to use `console.log` to figure out the error, without any descriptive prompting. There is not much difference between Opus and Sonnet; just default to Sonnet. I think it will take some time before purely non-technical people can "vibe code" in a production environment.

The best advice I can give is, if you have time, get out of the comfort zone of using online AI platforms like V0, Replit, Lovable, etc., as they are quite limiting and always abstract away a lot of functionality. They are fine for a quick landing page or minimal functionality, but if you want to build complex applications, it's better to switch. You will always be restricted in what you can build, just like pre-AI era custom website builders like Wix and Squarespace had their own limitations.

An IDE, along with CC/Opencode/Codex, is the holy grail where you are not bound by tools but by your ability to use them. All thanks to AI, it's incredibly easy to code decent side projects, save money, and avoid the dissatisfaction of SaaS.

![Tweet from Sam Altman: "entering the fast fashion era of SaaS very soon"](https://ik.imagekit.io/xy8dm8wet/images/image3.png?updatedAt=1758178539946)

For prompting, I prefer to use the 10-part prompt structure from Anthropic, as it is decent and sets up context well. When using LLMs, a large part of the process is making sure your prompts are good; generic prompts lead to net negative results.

![Anthropic's 10-part prompt structure diagram](https://ik.imagekit.io/xy8dm8wet/images/image7.png?updatedAt=1758178534636)

LLMs can do a lot of heavy lifting and free you from a lot of coding logic. For example, it's better to let an LLM classify expenses than to let bare code do it.

I am glad I was able to build an app to track my expenses. I will open-source it sometime, as there are many alternatives. I have "vibe-coded" a bunch of other web apps which I use daily; more on them in another post.

---

### Optimizing for Production

A lot of time was spent on optimizing the app to make it faster. Sometimes, LLMs will overengineer things, so give them a detailed prompt to pick only low-effort, high-value tasks, and keep tracking the speed. Have an error boundary in place so the app does not crash in production. Write your code in `try-catch` blocks, use shimmer effects for loading states, and load components on demand. A lot of this stuff is basic, but LLMs are not quite good at it yet. With time, however, they will eventually become good at it.

The initial code was totally non-performant—for example, checking authentication on every route in the middleware and having no lazy loading made the app complex.

An AI just fetches stuff again and again, so you need to cache and let the user refresh after some time to make the app faster.

I used to write detailed prompts, but then I let Superclaude do the heavy lifting. Shoutout to Superclaude—give it a try. It has a lot of pre-built hooks, which basically take your normal instruction, run it through a detailed prompt, and let Claude operate on the modified prompt.

---

## Final Thoughts & Takeaways

Sometimes, even an AI gives up, so be ready. This was me trying to churn out a finished blog post from a first draft. Since it lacked context, I tried two to three times to create a good blog post, but eventually, the AI gave up because context matters.

![Terminal screenshot showing an AI model apologizing and stopping](https://ik.imagekit.io/xy8dm8wet/images/image11.png?updatedAt=1758178534473)

Steve Jobs said that computers are the bicycle of the mind. They take us far beyond our inherent abilities.

[![Computers are a bicycle for the mind](https://img.youtube.com/vi/NjIhmzU0Y8Y/hqdefault.jpg)](https://www.youtube.com/watch?v=NjIhmzU0Y8Y)

I think AI is a logarithmic multiplier of that. You can decide not to use it, but you will be capped by your inherent abilities. For example, this project was built in Next.js, but the library used in it is React, which is not a full-stack framework. Next.js has cool features like routing, API routes, and a bunch of stuff that you wouldn't do yourself in React. React is a JavaScript library, and JavaScript runs on a JS engine written in C++. The point is that everything is a wrapper, but I can build production-grade apps in Next.js without knowing what C++ is or how routing code is written. Eventually, in the coming years, AI is going to get to a level where it can operate on plain English, and you won't need to care about security, infrastructure, scaling, etc., for most of the code.

You can choose not to "vibe code," but in the coming years, folks who embraced AI will be able to code at an unimaginable speed. It's like you are walking and someone else is driving an F1 car. Try your best and think about who will win.

---

Just follow the best practices while "vibe coding" and don't be the other guy.

![Meme showing two people on a bus. One is sad, labeled "VIBE CODING IN PROD". The other is happy, also labeled "VIBE CODING IN PROD", but looking out at a sunny landscape.](https://ik.imagekit.io/xy8dm8wet/images/image5.png?updatedAt=1758178534730)

---

This is the Vibe Stack that I used in this project.

![Diagram of the "Vibe Stack" used in the project, including various AI tools, frameworks, and services.](https://ik.imagekit.io/xy8dm8wet/images/image9.png?updatedAt=1758178534553)

I am planning a few more articles to write in-depth on the Vibe Stack. You can take a look at the [Finance Tracker here](https://zeinerkat.site/). Please let me know if you would be interested in using it. Thanks to ChatGPT, Gemini, and Deepseek for reviewing this article and giving their valuable feedback to improve it from the first draft.

Some recommended resources to know more about "vibe coding":

- [The beginning of the term Vibe Coding](https://www.youtube.com/watch?v=jw_n_hYy6v4)
- [Andrej Karpathy: Software Is Changing (Again)](https://www.youtube.com/watch?v=nO3_C-G3-d8)
- [Vibe coding in prod | Code w/ Claude](https://www.youtube.com/watch?v=L3Z2P7d3a_w)