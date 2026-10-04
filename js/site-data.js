/* =====================================================================
   SITE DATA: this is the ONLY file you edit to add new content.
   ---------------------------------------------------------------------
   The website builds every section from the lists below.
   To add something new:  copy ONE whole block { ... }  (from "{" to "},"),
   paste it right below, change the text, save, refresh the browser.
   It appears in the correct place with the correct design automatically.

   RULES (very important, they avoid 95% of errors)
   1. Every block { ... } ends with a comma ,   (the last one may skip it)
   2. Text goes inside quotes "like this".  If your text has a quote mark
      inside, write it like this:  "He said \"hello\""  (or use ' ' marks).
   3. Newest / most important item goes FIRST in each list.
   4. Leave "" (empty quotes) to hide an optional thing, or delete that line.
   5. Do not rename the keys on the left (role, org, title, ...).

   SECTION MAP  (website section  ->  list name in this file)
     Tech stack ............ skills
     Projects (The Garage) . projects
     Experience ............ experience
     Education ............. education
     Certifications ........ certifications
     Achievements .......... achievements
     Contact boxes ......... contact

   CERTIFICATE "Show certificate" BUTTON
     Add   certificate: "assets/certificates/your-file.pdf"   (PDF or image)
     Hide  delete that line, or set it to ""  (the button disappears)

   Counts on the home page (Internships, Projects, Certifications, Awards)
   are calculated automatically from these lists. Never type them by hand.

   Things that are NOT in this file (edit them directly in index.html):
   your name/title text, About paragraphs, the photos, and page colours.
   ===================================================================== */

window.SITE_DATA = {

  /* =================================================================
     SECTION: SKILLS   ->  "Tech stack" cards
     Each block is one card. "items" are the small chips inside it.

     COPY THIS TO ADD A NEW SKILL CARD:
     { group: "Cloud", items: ["AWS", "Docker"] },

     To add one skill to an existing card, just add  , "Name"  inside its items.
     ================================================================= */
  skills: [
    { group: "Programming",       items: ["Python", "C", "Java"] },
    { group: "Web Technologies",  items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"] },
    { group: "Databases",         items: ["MongoDB", "MySQL"] },
    { group: "Cloud", items: ["AWS"] },
    { group: "Tools & Practices", items: ["Git / GitHub", "Version Control", "System Design", "UI/UX Design", "Photoshop"] }
  ],


  /* =================================================================
     SECTION: PROJECTS   ->  "The Garage" cards
     Keep the best / newest project FIRST.
     visual: 'keyboard' | 'campus' | 'mailguard' | 'generic'
             (generic = a clean preview with the project's initials)
     github / live: paste a link, or leave "" (shows "Code coming soon" / hides Live Demo)

     COPY THIS TO ADD A NEW PROJECT:
     {
       title: "My New Project",
       subtitle: "One line about it",
       category: "Full Stack Web App",
       visual: "generic",
       points: [
         "What you built and what it does.",
         "A result or number, if you have one."
       ],
       tags: ["Node.js", "MongoDB"],
       github: "",
       live: ""
     },
     ================================================================= */
  projects: [
    {
      title: "Magical Keyboard",
      subtitle: "AI-driven hand-tracking virtual keyboard",
      category: "Computer Vision",
      visual: "keyboard",
      points: [
        "AI-driven computer vision application built with Python and a webcam to track hand movements with 85%+ tracking accuracy.",
        "Optimised the program architecture to hold a consistent 30-60 FPS during live execution.",
        "Complete version-controlled repository published on GitHub."
      ],
      tags: ["Python", "Computer Vision", "Webcam", "Git / GitHub"],
      github: "https://github.com/Rahman-Sharif-1004/Invisible-_keyboard",
      live: ""
    },
    {
      title: "Smart Campus Assistant",
      subtitle: "Real-time campus event information web app",
      category: "Full Stack Web App",
      visual: "campus",
      points: [
        "Dynamic web application built with Node.js, HTML and MongoDB serving real-time campus event information to 200+ attendees.",
        "Designed an efficient database schema and a step-by-step implementation, reducing data retrieval time by 15%."
      ],
      tags: ["Node.js", "HTML", "MongoDB"],
      github: "",
      live: ""
    },
    {
      title: "MailGuard",
      subtitle: "Email phishing detection system",
      category: "Python / Flask / Machine Learning",
      visual: "mailguard",
      points: [
        "Single-page Flask web app that locally analyses raw email sources and .eml files to detect phishing indicators.",
        "Weighted scoring engine using Python, scikit-learn, pandas and tldextract to evaluate sender authentication (SPF/DKIM), URLs, attachments and NLP-based content classification.",
        "Colour-coded risk dashboard with an itemised reasoning panel and automatic escalation rules for spoofed links and authentication failures."
      ],
      tags: ["Python", "Flask", "scikit-learn", "pandas", "tldextract", "NLP"],
      github: "",
      live: ""
    }
  ],


  /* =================================================================
     SECTION: EXPERIENCE   ->  "Experience" timeline (left column)
     Newest FIRST.
     type: "internship" | "freelance" | "job"   (internships are counted on the home page)
     current: true  -> amber dot (use it for the one you are doing now / latest)
     points: bullet lines (can be empty:  points: [] )
     link:   optional extra line with a clickable link (delete the line if not needed)
     certificate: path to the file, or "" for no button

     COPY THIS TO ADD A NEW EXPERIENCE:
     {
       role: "Web Developer Intern",
       org: "Company Name",
       period: "2 months",
       type: "internship",
       current: false,
       points: [
         "What you did.",
         "Another thing you did."
       ],
       certificate: "assets/certificates/company-internship.pdf"
     },
     ================================================================= */
  experience: [
    {
      role: "Freelance Full Stack Developer",
      org: "Self-employed",
      period: "2 months",
      type: "freelance",
      current: true,
      points: [
        "Designed and built websites for small businesses and startups, delivering 3 client sites."
      ],
      link: { prefix: "Live client site:", text: "theastralifestyle.com", url: "https://theastralifestyle.com" },
      certificate: ""
    },
    {
      role: "Front End Developer Intern",
      org: "JJ Consultancy",
      period: "1 month",
      type: "internship",
      current: false,
      points: [
        "Developed and maintained responsive user interfaces using HTML, CSS and JavaScript.",
        "Collaborated with backend developers to improve web performance."
      ],
      certificate: "assets/certificates/jj-consultancy-internship.pdf"
    },
    {
      role: "Python Developer Intern",
      org: "Scopik EduTech Pvt. Ltd",
      period: "20 days",
      type: "internship",
      current: false,
      points: [
        "Engineered Python scripts for data processing and workflow automation.",
        "Assisted in debugging and testing code for internal tools."
      ],
      certificate: "assets/certificates/scopik-edutech-internship.pdf"
    },
    {
      role: "Full Stack Developer Intern",
      org: "NoviTech",
      period: "1 month",
      type: "internship",
      current: false,
      points: [
        "Developed mini full stack projects using HTML, CSS, JS and MongoDB.",
        "Integrated client-side interfaces with backend services and MongoDB databases."
      ],
      certificate: "assets/certificates/novitech-internship.pdf"
    },
    {
      role: "Cyber Security Intern",
      org: "Alfrah Cognix Innovations Pvt Ltd",
      period: "1 month",
      type: "internship",
      current: false,
      points: [
        "Built MailGuard, an email phishing detection web app (see Projects)."
      ],
      certificate: "assets/certificates/alfrah-cognix-internship.pdf"
    }
  ],


  /* =================================================================
     SECTION: EDUCATION   ->  "Education" timeline (right column)
     Newest / current FIRST.  current: true -> amber dot.

     COPY THIS TO ADD A NEW EDUCATION ITEM:
     { degree: "Diploma in XYZ", school: "College Name, City", period: "2023 - 2024", current: false },
     ================================================================= */
  education: [
    { degree: "BE, Computer Science and Engineering", school: "M.A.M College of Engineering and Technology, Trichy", period: "Expected 2027", current: true },
    { degree: "HSC",  school: "Bishop Heber Higher Secondary School, Trichy", period: "2022 – 2023", current: false },
    { degree: "SSLC", school: "Bishop Heber Higher Secondary School, Trichy", period: "2020 – 2021", current: false }
  ],


  /* =================================================================
     SECTION: CERTIFICATIONS   ->  "Certifications" list
     Newest FIRST.  certificate: path, or "" for no button.

     COPY THIS TO ADD A NEW CERTIFICATION:
     {
       title: "AWS Cloud Practitioner",
       issuer: "Amazon Web Services",
       details: "3 months, online",
       certificate: "assets/certificates/aws-cloud-practitioner.pdf"
     },
     ================================================================= */
  certifications: [
    { title: "Web Application Development", issuer: "Jeyram Education Trust", details: "Central Govt. Certified · 6 months, offline", certificate: "assets/certificates/web-application-development.pdf" },
    { title: "Python Full Stack", issuer: "Code 99 IT Academy", details: "5 montns, online", certificate: "assets/certificates/coming-soon.pdf" },
    { title: "AWS - Cloud Architecting", issuer: "Amazon Web Services Academy", details: "21 days, offline", certificate: "assets/certificates/coming-soon.pdf" },
    // { title: "UI/UX for Beginners", issuer: "Great Learning", details: "15 days, online", certificate: "assets/certificates/ui-ux-for-beginners.pdf" },
    { title: "Cyber Security", issuer: "Alfrah Cognix Innovations Pvt Ltd", details: "3 months, online", certificate: "assets/certificates/cyber-security.pdf" }
  ],


  /* =================================================================
     SECTION: ACHIEVEMENTS   ->  "On the Podium" cards
     place: short badge text such as "1st", "2nd", "3rd", "Top 10", "Winner"

     COPY THIS TO ADD A NEW ACHIEVEMENT:
     {
       place: "1st",
       title: "Winner: Hackathon Name",
       subtitle: "What the event was about",
       description: "Where and when it happened.",
       certificate: "assets/certificates/hackathon-winner.pdf"
     },
     ================================================================= */
  achievements: [
    {
      place: "2nd",
      title: "Runner-Up: Zero Hour",
      subtitle: "Rapid Prototyping & AI-Assisted Development",
      description: "National Level Technical Symposium at JJ College Of Engineering And Technology.",
      certificate: "assets/certificates/zero-hour-runner-up.pdf"
    },
    {
      place: "2nd",
      title: "Runner-Up: Final Hire",
      subtitle: "Mock Recruitment & Interview Simulation",
      description: "National Level Technical Symposium at JJ College Of Engineering And Technology.",
      certificate: "assets/certificates/final-hire-runner-up.pdf"
    }
  ],


  /* =================================================================
     SECTION: CONTACT   ->  boxes at the bottom
     url: mailto:... / https://... / tel:+91... / a file path
     newTab: true  -> opens in a new tab        download: true -> downloads a file
     accent: true  -> blue highlighted box (use for the Resume)

     COPY THIS TO ADD A NEW CONTACT BOX:
     { label: "Portfolio", value: "myname.netlify.app", url: "https://myname.netlify.app", newTab: true },
     ================================================================= */
  contact: [
    { label: "Email", value: "rahman.sharif.rs1004@gmail.com", url: "mailto:rahman.sharif.rs1004@gmail.com" },
    { label: "Phone / WhatsApp", value: "+91 88386 38700", url: "https://wa.me/918838638700?text=Hello%20Rahman%2C%20I%20saw%20your%20portfolio.", newTab: true },
    { label: "LinkedIn", value: "in/rahman-sharif1004", url: "https://www.linkedin.com/in/rahman-sharif1004", newTab: true },
    { label: "GitHub", value: "Rahman-Sharif-1004", url: "https://github.com/Rahman-Sharif-1004", newTab: true },
    { label: "Resume", value: "Download PDF", url: "assets/Rahman_Sharif_M_Resume.pdf", download: true, accent: true }
  ]

};
