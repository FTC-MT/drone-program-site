# Take Flight: Fei Tian College drone program pages

Plain static HTML and CSS, with no build step and no dependencies.

## Files
- `index.html` is the program page: pitch, who it's for, the six-session curriculum, the drone lab, and the details.
- `course.html` is the full course and contest page: sessions, the FAA Part 107 test, the three challenges, and prizes.
- `register.html` is the sign-up page, with a spot for the embedded Google Form.
- `css/styles.css` holds all the styles. To match the main college site, change the colors and fonts at the top under `:root`.
- `images/drone-ball.svg` is the hero illustration.

## Preview in VS Code
Install the **Live Server** extension, right-click `index.html`, and choose **Open with Live Server**.
Or with Python, from this folder: `python3 -m http.server 8000`, then open http://localhost:8000.
You can also just double-click `index.html` to open it in a browser.

## Before going live
1. In `index.html`, fill in the bracketed items: dates, competition day, room, and cost.
2. Create the Google Form, and under Settings > Responses turn on **Collect email addresses: Verified**.
   That makes people sign in with a Google account, so you get a real Gmail or Google address with every sign-up.
3. In the form, click Send > the `< >` embed tab, copy the iframe, and paste it into `register.html`
   where the comment says **PASTE YOUR GOOGLE FORM HERE**, replacing the placeholder.

## Putting it on the college site
Copy the whole folder, including `css/` and `images/`, to a path such as `mt.feitian.org/drone/`.
All the links are relative, so it works in any subfolder.

### As a subdomain, such as drone.feitian.org, on GitHub Pages (free)
1. Push this folder to a GitHub repo.
2. In the repo, go to Settings > Pages > Deploy from branch (`main`, root).
3. Under Custom domain, enter `drone.feitian.org`. GitHub adds a `CNAME` file for you.
4. In the feitian.org DNS settings, add a CNAME record from `drone` to `<your-github-username>.github.io`.
5. Back in Settings > Pages, check **Enforce HTTPS** once it's available.
