PUT YOUR CERTIFICATE FILES IN THIS FOLDER (PDF or JPG/PNG/WEBP).

The "Show certificate" buttons look for these file names (change the names in js/site-data.js if yours are different):

INTERNSHIPS
  jj-consultancy-internship.pdf
  scopik-edutech-internship.pdf
  novitech-internship.pdf
  alfrah-cognix-internship.pdf

CERTIFICATIONS
  web-application-development.pdf
  python-fundamentals.pdf
  basic-java.pdf
  ui-ux-for-beginners.pdf
  cyber-security.pdf

ACHIEVEMENTS
  zero-hour-runner-up.pdf
  final-hire-runner-up.pdf

To change a path:   open index.html, search for "cert-btn", edit  data-cert="assets/certificates/your-file.pdf"
To remove a button: delete that single <button class="cert-btn" ...> line. Nothing else needs to change.
To hide a button without deleting: set data-cert="" (empty).
