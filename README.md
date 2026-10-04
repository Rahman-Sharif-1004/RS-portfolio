# Rahman Sharif M: Portfolio

Static site (HTML, CSS, JS). No build step needed.

## Deploy free (no domain needed)
1. Upload this whole folder to a new GitHub repo (index.html must be at the top level).
2. Netlify: "Add new site" > "Import from Git" > pick the repo > Deploy. Or Vercel: "Add New Project" > pick the repo > Deploy.
3. You get a free link like yourname.netlify.app or yourname.vercel.app. Put it on your resume and LinkedIn.

## Add new content later (ONE file: `js/site-data.js`)
Open `js/site-data.js`. Every section of the website has its own clearly marked block there.
Copy one block, paste it below, change the text, save. It is placed automatically.

| Website section | List in js/site-data.js |
|---|---|
| Tech stack | `skills` |
| Projects (The Garage) | `projects` |
| Experience (internship / freelance / job) | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Achievements (On the Podium) | `achievements` |
| Contact boxes | `contact` |

- Hero and About numbers (internships, projects, certifications, podium) are counted automatically.
- "Show certificate" button: set `certificate: "assets/certificates/file.pdf"`. Delete the line (or use `""`) and the button disappears.
- Put certificate files in `assets/certificates/`.
- Every block ends with a comma. Text goes inside quotes.

## Other edits
- Resume: replace `assets/Rahman_Sharif_M_Resume.pdf` (keep the same file name).
- Photos: `assets/rahman-portrait.jpg` (hero), `assets/rahman-creative.jpg` (About).
- Name, hero text and About paragraphs: edit directly in `index.html`.
- Colours: top of `css/style.css` (:root variables).
