---
title: "Vibe Coding Finance Tracker: Lessons From Building With Al"
date: "2025-09-18"
description: "I hadn't checked my statement for a month, and then one day I saw the balance. I was like, where did I end up spending so much? Then I went to check apps that allow you to track your expenses, but most of them were very basic and not Al native, so I decided to code an Al native finance tracker web app, Here are some screenshots of the app
"
tags: ["product-management", "scalability", "architecture", "engineering"]
---

![Fintracker Overview Screenshot](https://ik.imagekit.io/xy8dm8wet/images/image1.png?updatedAt=1758178534524)



![Fintracker Stories and Categories Screenshot](https://ik.imagekit.io/xy8dm8wet/images/image6.png?updatedAt=1758178534612)


## Part 1: A Full Fledge app is far away

Initially, the prototype was ready in a short time basically Ul skeleton but slowly, things started to go out of control. I am glad that I had experience in committing to prod, so I had proper guardrails set up for working in checkpoints. If you are thinking what, just set up git and keep committing to GitHub regularly. It's quite easy and makes vibe coding much more sustainable, as you never know when Al will go rogue and delete some components.

One example I always remember is that I told Claude Code to build a mix of Insta Stories & Spotify Wrapped-like feature for my finance app, and it went ahead and wrote 1700 lines in a single file, then I said make it modular. It made four components, deleted the base file, and now the app is not working because of 8 different sorts of errors. I had committed code before the refactor, so I said just check the last commit, and it fixed those errors and the app was back running again.

---

## The Authentication Saga: Firebase → Clerk

While building the product, I also figure out what's good and what's not like initially, the app only had import CSV, but then I upgraded it to import transactions from UPI apps as manual data entry sucks also, the reason being I mostly use UPI apps, but again it became cumbersome as i use 2-3 UPI apps so then I moved to email. It also had a issue that credit/debit credit cards tasnsactions need to be manually entered. 

I decided to migrate the project from firebase for Auth to Clerk for Auth as Clerk manages refresh token and has a lot of inbuilt stuff like disabling singups and wailtist. The migration was a nightmare, and I would prefer custom coding Google Auth over migrating a project from Firebase to Clerk again.

The most difficult part with Clerk is that; it has different dev and prod environments, and then there are so many hoops to jump through, like whitelisting your URLs. One of the crazy things is that they don't let you deploy with a Vercel URL, so you need to go through the process of buying a domain and configuring it with Vercel, Clerk, and Firebase. Also you can put your sensitive stuff like api keys and all in a .env file for security but clerk does not detects it so you not go to vercel and put clerk secret key and publishable key on vercel. The most frustrating part is your app wont crash and will be deployed smoothly so you wont even see any error in build logs but when you try to hit on login button entire web app crashed and keep in mind dev and prode keys are different.

After integrating Clerk auth all the data disappeared. I tried a lot but Claude couldn't figure this out and was like, "If it's working on Firebase, why not here, dude?". Finally Gemini detected the bug and Claude fixed it. The problem wasn't the individual pieces. The clerk worked fine. Firebase worked fine. But when you connect them, you discover that Firebase Auth automatically converts Firestore Timestamps to JavaScript Date objects, while Clerk's custom token approach doesn't. Suddenly, every piece of code that called `expense.date.getTime()` started throwing `TypeError: expense.date.getTime is not a function`.

---

## Unexpected Costs and Technical Pitfalls

While "vibe coding," I burned through my free 50,000 reads in the Firebase free plan in a few hours and was shocked. How the heck? Then I recognized what was happening, did some research, and figured out that if there are 1,000 items in a table, I was reading one at a time rather than reading all in one go. I was charged a little, 

These are the lessons that you should learn early on if you have enabled billing. You will need some UX skills to figure out cloud cost in Google Cloud because it is just terrible.

A lot of the time, Al forgets the dependency array in the useEffect hook, and as soon as you run your dev server, boom, infinite calls. I learned the hard way why rate limiting is important and went and put in a rate limiter. Even hand coded apps have this issue so ensure you have a centeral rate limiting set or else you might end up in deep financial trenches.

![Tweet and Cloudflare article about React useEffect hook causing infinite loops](https://ik.imagekit.io/xy8dm8wet/images/image10.png?updatedAt=1758178534729)

---

## UI & Styling Woes

I used to wonder why everything Al creates is purple; I eventually figured out the culprit, and now, no more purple. If you have seen a bunch of AI generated website you figure out it from the gradeint and purple UI. Strive to be a bit novel. Behance and Dribble are great places for UI inspiration and for color pallette try cooler. 

![Tweets about AI generating purple UIs due to Tailwind UI's indigo color default](https://ik.imagekit.io/xy8dm8wet/images/image8.png?updatedAt=1758178534647)

Al is bad at CSS. You need to prompt it well to think in systems and then be intelligent enough to use a 2-column grid where appropriate, tell it to adjust the font, and remove some stuff on mobile.Al wrote some good code for graphs; the Ul improved when I provided a Dribbble link.

If you are planning to build the web app in both light mode and dark mode than make sure to put this directive in CLAUDE.MD if you are using claude code, AGENTS.MD for codex so your both format Ul is built. One more important stuff i you want to be mobile first do it from beginning otherwise a lot of issues happen. If you are getting inconsistent UI just tell LLM to take a step back think deeply, audit code, plan and fix in phases. Surprisingly works most of the times.

Attaching screenshots is a powerful way to build cool stuff and guide the Al more specifically.

---

## Part 2: The Workflow that works

### Trust, But Verify

What I have figured out is that you can trust the model, but you must verify. For example, I wanted to let Claude do its own thing, and it ended up writing class-based components even though the existing code used functional components.

In one more instance, there were around 20 TypeScript errors after a 25-minute vibe session. Claude was manually building, solving one error, then building again, and getting another error. I simply hit `Esc` and prompted it to audit the code, think deeply, and boom, it was fixed after spmetime.

LLMs in general have a bad habit of writing huge lines of code in a single file, like 1,200 lines, which is difficult to maintain. But if you tell it to "go modular," it will create 12 files, so you need to prompt it well. Sometimes it does not respects CLAUDE.MD or AGENTS.MD so keep a watch to ensure its modular. Maybe this issue is solved with the next gen of models

Sometimes, if you don't instruct the Al, it just hardcodes API keys. Anthropic has come out with a security hook for Claude Code, but I would say just cross-check.

It's crazy how one word can change the outcome. I asked it to review the project from a product and tech perspective, and it gave it a 9/10. I just said, "Be critical," and I got a 4/10 and eventually figured out what to improve.

I had built a project from scratch a quarter ago with the help of Cursor. It took me a lot of time with all the back and forth. Just after two quarters tools like Claude Code have just shortened the timelines to build drastically.

The best way to make your app production-ready is absolutely not to let Claude or whichever CLI or Al IDE you are using do its own thing. You have to be in the loop. First, spend a good amount of time planning the project, creating a plan, and creating a phase based to-do list. Then, monitor the implementation phase guide claude or whicheve tool you are using to keep on building the project or keep a dev server running check logs and fix bugs. This is much easier than letting it "vibe code" and then thinking, "Okay, now I have 15,674 lines of code. How do I get it to compile?"

Claude can search over previous conversations, so I took the learnings out of it and then used them in my next project. Sometimes, Claude also doesn't help, like a delete function working in one route but not in another because of a missing permission request. Keep committing regularly when things are working. When you want to refactor, commit first, then refactor. Otherwise, your app might break badly. Build with Claude, solve bugs with Jules. It's cool.

When implementing Voice Activity Detection, LLM ended up writing something verbose that even I couldn't understand and obviously didn't work. I used vad web for this so sometimes its better to use something already on internet ether than reinventing the wheel.

For Al, the prompt is everything. Again, the initial prompt was vanilla. I improved the prompt and gave it context. These are things that you need to work on; otherwise, its output is very high-level and not of much use. 

Claude Coded ended up creating 5 different date filters that could have been one reusable component so that a single change doesn't need to be done in 5 places. You need to give it a bit of supervision. With time I ended up committing more frequently. Even though Vibe Coded it took me two months to complete it. I dont know how much time it would take if I hand coded it even with minimal Al assistance without vibe coding as the project is fairly complex with bunch of features and is Al native.

![Repository statistics showing code growth and commit history](https://ik.imagekit.io/xy8dm8wet/images/image2.png?updatedAt=1758178539712)
![commit history](https://ik.imagekit.io/xy8dm8wet/images/image4.png?updatedAt=1758178534751)

Some commands, like `rm` and `git commit`, should not be given to Al. Give it granular control; you will be faster. Otherwise, an accident will cost you time.

As a good rule of thumb: trust but verify. Don't "vibe code" without thinking. Eventually, your role should be to get out of the day-to-day and operate on as high a level as possible. I have started doing this since the beginning of my journey of vibe coding. If you don't believe in vibes, that's fine. You will be deep in the trenches, more on this later.

### Testing the Hard Way

Testing was difficult using a headless browser, and It wasn't able to log in. I was like, "Why?" Then I realized Google login and password were needed as the only way to login in the web app is through a google account. I had vibe-coded all the tests, and now all tests were failing.

So again the classic principles of software engineering that keep doing continuous testing still applies here. No matter how much Claude Code vibes for now they cant figure out your email id password or crete a new google account with email and password so you need to do it manually do atleast for now. I think this will for sure change in the coming quarters from the rise of Comet,Claude for Chrome.

You can get AI to vibe and a write lot of test to make sure nothing breaks but I prefer to write end to end happy test only just to make sure app does not breaks.

### The Vibe Coding Workflow That Worked

Vibe coding with a mix of ChatGPT, Claude Code, and Gemini CLI is good. In a lot of instances, Gemini has been better at detecting bugs, and once you let Claude know, it solves them. 

Some bugs could be solved by just telling Claude to use `console.log` to figure out the error, without any descriptive prompting. There is not much difference between Opus and Sonnet; just default to Sonnet. I think it will take some time before purely non-technical people can "vibe code" in production.

The best advice I can give is if you have time, get out of the comfort zone of using online Al platforms like V0, Replit, Lovable, etc, as they are quite limiting and always extract away a lot of stuff. They are fine for a quick landing page or minimal functinality but if you want to build complex stuff its better to switch. You will always be restricted on what you can build, just like pre-ai era custom website builder like Wix, SquareSpace had their own limitations.

IDE along with CC/Opencode/Codex, is the holy grail where you are not bound by tools but by your ability to use them. All thanks to Al, it's incredibly easy to code decent side projects and save money and the dissatisfaction of SASS.

![Tweet from Sam Altman: "entering the fast fashion era of SaaS very soon"](https://ik.imagekit.io/xy8dm8wet/images/image3.png?updatedAt=1758178539946)

For prompting, I prefer to use the 10 prompt structure of Anthropic as it is decent and sets up context well. When using LLMs, a large part is making sure your prompts are good; generic prompts lead to net negative results.

![Anthropic's 10-part prompt structure diagram](https://ik.imagekit.io/xy8dm8wet/images/image7.png?updatedAt=1758178534636)

LLMs can do a lot of heavy lifting and free you from a lot of code logic. For example, it's better to let LLM classify expenses than let the bare code do it.


I am glad I was able to build an app to track my expenses. I will open-source it sometime, as there are many alternatives. I have vibe coded bunch of other web apps which I use daily, more on them in some other post.

---


### Optimizing for Production

A lot of time was spent on optimizing the app to make it faster. Sometimes, LLMs will go and overengineer stuff, so give them a detailed prompt to pick only low effort, high value tasks, and keep on tracking the speed. Have an error boundary in place so the app does not crash in production. Write your code in try catch blogs, use shimmer, load on demand. A lot of this stuff is basic, but LLMs are not quite good at it, but with time, they will eventually become good at it.

The initial code was totally non-performant—for example, checking auth on every route in the middleware and no lazy loading, which made the app complex.

Al just fetches stuff again and again, so you need to cache and let the user refresh after some time so you can make the app faster.

I used to write detailed prompts, but then I let Superclaude do the heavy lifting. Shoutout to Superclaude—give it a try. It has a lot of pre-built hooks, which basically take your normal instruction, run it through a detailed prompt, and let Claude operate on the modified prompt.

---

## Final Thoughts & Takeaways

Sometimes, even Al gives up, so be ready, this was me trying to churn out a finished blog post from first draft, since it lacked context and I tried 2-3 times to create a good blogpost but eventually Al gave up as context matters.

![Terminal screenshot showing an AI model apologizing and stopping](https://ik.imagekit.io/xy8dm8wet/images/image11.png?updatedAt=1758178534473)

Steve Jobs said that Computers are the bicycle of mind. It takes far beyond our inherent abilities.

[![Watch the video](https://img.youtube.com/vi/NjIhmzU0Y8Y/0.jpg)](https://www.youtube.com/watch?v=NjIhmzU0Y8Y)

I think Al is a logarithmic multiplier of it. You can decide not to use it but you will be capped by your inherent abilites. For example this project was built in Next JS but the library used in it is React which is not a full stack framework and Next JS has cool features like routing, api routes and a buch of stuff which is not in React you not do a lot of stuff yourself. React is a Javascript library and Javascript runs on js engine which is written in C++. The point being everything is a wrapper but I can build production grade apps in Next JS without knowing what C++ is or how routing code is written and eventually in coming years Al is going to get at a level where it can operate on plane english and you dont need to care about security, infrastructure, scaling etc for most of the code.

You can choose not to vibe code but in coming years folks who embraced Al will be able to code at unimaginable speed its like you are walking and someone is driving F1 car. Try your best and think who will win?

---

Just follow the best practises while vibe coding and don't be the other guy.

![Meme showing two people on a bus. One is sad, labeled "VIBE CODING IN PROD". The other is happy, also labeled "VIBE CODING IN PROD", but looking out at a sunny landscape.](https://ik.imagekit.io/xy8dm8wet/images/image5.png?updatedAt=1758178534730)

---

This is the Vibe stack that I used in this Project.

![Diagram of the "Vibe Stack" used in the project, including various AI tools, frameworks, and services.](https://ik.imagekit.io/xy8dm8wet/images/image9.png?updatedAt=1758178534553)

I am planning few more articles to write in depth on the Vibe Stack. You can take a look at the [Finance Tracker here](https://zeinerkat.site/). Please let me know if you will be interested in using it. Thanks to ChatGPT, Gemini and Deepseek for reviewing this article and giving their valuable feedback to improve it from first draft.

Some Recommened stuff to know more about vibe coding:

- [The beginning of term Vibe Coding](https://www.youtube.com/watch?v=jw_n_hYy6v4)
- [Andrej Karpathy: Software Is Changing (Again)](https://www.youtube.com/watch?v=nO3_C-G3-d8)
- [Vibe coding in prod | Code w/ Claude](https://www.youtube.com/watch?v=L3Z2P7d3a_w)