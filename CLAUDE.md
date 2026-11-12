# Take Flight: Fei Tian College drone program site

Plain static HTML and CSS. No build step, no dependencies, no JavaScript framework.

## Files
- `index.html`: the program page (hero, who it's for, six-session curriculum, drone lab, course details).
- `register.html`: the registration page. It embeds the Google Form in an iframe.
- `css/styles.css`: all styles. Colors and fonts are defined as variables in `:root` at the top.
- `images/drone-ball.svg`: the hero illustration.

## Preview
From the repo folder: `python3 -m http.server 8000`, then open http://localhost:8000.
Always preview a change locally and check it at phone width (about 375px) before publishing.

## Publishing
- The live site is GitHub Pages, served from the `main` branch: https://ftc-mt.github.io/drone-program-site/
- `main` is protected. Changes go through a pull request that a repo admin must approve:
  1. Create a branch with a short descriptive name (for example `update-dates`).
  2. Commit the change with a clear message.
  3. Push the branch and open a pull request into `main`, describing what changed in plain language.
  4. Once an admin approves and merges it, the live site updates within a couple of minutes.
- Never force-push to `main` and never try to bypass the review.

## Rules for content
- **No personal contact details.** Do not add anyone's email address, phone number, or home address to any page, the README, or commit messages. People reach the program only through the registration form.
- **Registration happens only through the Google Form.** Don't add other sign-up methods, mailto links, or contact forms.
  - Form short link: https://forms.gle/bMYaa4MJ99UH4akB8
  - The embed in `register.html` uses the full `docs.google.com/forms/d/e/.../viewform?embedded=true` URL. A `forms.gle` link can't be embedded. Only change it if the form itself is replaced.
- **Collect no data on the site itself.** No analytics, trackers, cookies, or third-party scripts beyond the Google Fonts already used. The form collects information about minors, so it stays in Google Forms.
- Keep all links relative (`register.html`, `css/styles.css`) so the site works in any folder or domain.
- Keep the established copy and tone: the course is free, it's preparation for the drone competition, every participant gets a tour of the drone lab, and no experience is needed. Current slogans:
  - "Free drone training. Real skills. Big rewards!"
  - "No experience needed, just bring your ambition."
  - "Your future takes flight!"

## Still to fill in
In the course details box in `index.html`, these are still placeholders: `[Dates and times]`, competition day `[Date]`, and `[Building and room]`.
