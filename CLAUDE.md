# Site rules

Personal site of Woohee (Elise) Kwak, served by GitHub Pages from `main`. Work on a branch and open a pull request. Nothing merges to `main` (which publishes the site) without Elise's explicit approval, and any clinical or psychoeducational content gets her review first.

The interactive tools, the Therapy Resources library, and the For Therapists toolkit live on Beyond the Room (repo `woohaa98/beyond-the-room`, beyondtheroomtherapy.com). Here, `tools/`, `therapists/` and the `resources/` pages are redirect stubs that forward to it, keeping `?from=`/`?reply=` therapist links working. Build or change tools there, not here. The homepage Tools section is a short teaser linking to Beyond the Room.

## Privacy guardrails (apply to every page and tool)

The site never collects information. Tools are for individuals to use on their own, save on their own device, and share outside the tool if they choose.

1. **Collect nothing.** No accounts, form submissions, server endpoints, analytics, tracking pixels, cookies, or error reporting. No `fetch`, `XMLHttpRequest`, `sendBeacon` or WebSockets that send what a person types.
2. **No third parties that see visitors.** No external scripts, embeds, CDNs or web fonts. Fonts are self-hosted (`fonts/`, `resources/assets/fonts/`). Plain outbound links are fine.
3. **Save only on the device.** If a tool saves progress, use `localStorage` on that browser only, wrapped in try/catch, and the tool must work without it.
4. **One-tap erase.** Any tool that saves must have a visible "Erase my answers" button that clears everything it stored.
5. **Say it plainly.** Every tool states near the top that nothing leaves the device, using wording like "Nothing is saved, tracked, or sent anywhere" (no saving) or "Your progress saves on this device. Nothing is sent anywhere unless you choose to share it" (with saving).
6. **The person shares, not the site.** Results leave the tool only by the person's own action: print, Save as PDF, copy text, or a `mailto:` link that opens their own email app for them to review and send.
7. **No clinical records.** Clinical measures and anything tied to a named client (such as group pre/post ratings or screening scores) belong in the practice's own systems, never on this site.
8. **Crisis line.** Tools touching distress link to 988 or the existing grounding pattern, and never present themselves as crisis support.

Before merging, check: `grep -rnE "googleapis|gstatic|gtag|analytics|fetch\(|sendBeacon|XMLHttpRequest" --include=*.html --include=*.js --include=*.css .` returns nothing new.

The public-facing version of these rules is `privacy/index.html`. Keep the two in step.
