# Take Flight: Fei Tian College drone program site

Plain static HTML and CSS. No build step, no dependencies, no JavaScript framework.

## Files
- `index.html`: the program page, a summary: hero, who it's for, the course at a glance, the contest at a glance, drone lab, course details.
- `course.html`: the full course and contest page: session-by-session topics, the FAA Part 107 test, the three contest challenges, prizes.
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
- **Keep internal planning details off the site.** The course and contest design document is internal. Never publish, on any page, in the README, or in commit messages and pull request descriptions (the repo is public):
  - the program's purposes or recruiting goals,
  - any team member's name or role: instructors, judges, project management, technical support,
  - internal operations: applicant services and admissions handling, the task table and assignments, the promotion plan, operational considerations such as insurance and airspace permits,
  - budget, success criteria, and surveys,
  - competitor notes and the reception venue.
- Keep the established facts and tone: $300 course fee; for high school students in grades 10–12 and first- and second-year college students; five 2-hour sessions (one or two in person, the rest online) preparing for the FAA Part 107 test; a contest with three challenges (speed delivery, precision corridor, endurance loop), three tries each, best score counts; scholarships for the top three (1st: full scholarship, 2nd: $9,000/year tuition, 3rd: $5,000/year tuition); a drone lab tour and celebration reception for everyone; no experience needed. Current slogans:
  - "Drone training. Real skills. Big rewards!"
  - "No experience needed, just bring your ambition."
  - "Your future takes flight!"

## Still to fill in
- `[Building and room]` in the details boxes on `index.html` and `course.html`.
- Confirming the tentative dates: course March 15–29, 2027, contest Saturday, March 20, 2027.
- Contest rules and scoring for each challenge.
