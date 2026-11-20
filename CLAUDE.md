# Take Flight: Fei Tian College Northern Campus drone program site

Plain static HTML and CSS. No build step, no dependencies, no JavaScript framework. The only script is `js/menu.js`, which draws the shared header and menu.

## Files
- `index.html`: the program page, a summary: hero, who it's for, the course at a glance, the contest at a glance, drone lab, course details.
- `course.html`: the full course page: session-by-session topics, the FAA Recreational UAS Safety Test (TRUST), and a short pointer to the contest.
- `contest.html`: the contest rules page: the three events with diagrams, requirements and scoring, overall scoring, prizes, safety.
- `lab.html`: the drone lab page: the tour, flight simulation and software work, internships. Kept short for now and meant to grow.
- `register.html`: the registration page. It embeds the Google Form in an iframe.
- `js/menu.js`: the site header and main menu for every page. **Edit the menu only here.** Each page has an empty `<header class="site-header" id="site-header"></header>` followed by `<script src="js/menu.js"></script>`; a new page needs those two lines and an entry in the `MENU` list.
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
- **Always name the campus.** Write "Fei Tian College Northern Campus" (or "the Northern Campus" on second mention), never just "Fei Tian College" or "Fei Tian". The two campuses are different.
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
  - contest-day logistics: the event schedule and timing estimates, expected number of pilots, and the staff pre-event verification checklist,
  - competitor notes and the reception venue.
- Keep the established facts and tone: $300 course fee; for high school students in grades 10–12 and first- and second-year college students; five 2-hour sessions (one or two in person, the rest online) with guaranteed passing of the FAA Recreational UAS Safety Test (TRUST), the certificate for recreational drone pilots (Part 107 is not part of the course this round); a contest with three events (A. Precision Delivery and Landing, B. Obstacle Corridor Navigation, C. Drone Soccer Skills Challenge), each scored out of 100, two official attempts per event, best valid score counts, overall score is the average of the three; contest rules are drafts and provisional until safety testing; scholarships for the top three overall (1st overall, the Overall Champion: full scholarship; 2nd: $9,000/year tuition; 3rd: $5,000/year tuition); planned event awards named Best Precision Lander (A), Best Navigator (B), Best Drone Soccer Pilot (C), plus Best Rookie Pilot. Never call the event awards "first place," which is reserved for the overall winner; a drone lab tour and celebration reception for everyone; no experience needed. Current slogans:
  - "Real skills. Big rewards!"
  - "No experience needed, just bring your ambition."
  - "Your future takes flight!"

## Still to fill in
- `[Building and room]` in the details boxes on `index.html` and `course.html`.
- Confirming the tentative dates: course March 15–29, 2027, contest Saturday, March 20, 2027.
- Final contest rules: benchmark times, tie-breakers, and penalties (the contest page shows draft rules).
