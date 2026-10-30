# Janaki's Professional Portfolio

A responsive developer portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide React. It is configured for deployment to GitHub Pages using GitHub Actions.

## 1. Requirements

- Node.js 20.19+ or 22.12+
- Git
- A GitHub account

## 2. Run locally

Open this folder in VS Code, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Personalize before publishing

Edit `src/data.js`:
- Replace `your.email@example.com` with your email address.
- Replace `YOUR_GITHUB_USERNAME` and the sample repository names with your real GitHub profile and project links.
- Replace the LinkedIn placeholder with your profile URL.
- Add your resume as `public/resume.pdf` if you want a resume link (or update/remove the resume setting).
- Check every project description and technology list so it accurately matches your finished projects.

The portfolio currently displays only:
1. Mock Stock Trading Simulator
2. Student Login & Registration System

## 4. Publish with GitHub Pages

1. Create a new GitHub repository. A good name is `janaki-portfolio`.
2. Upload/push the contents of this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the workflow named "Deploy portfolio to GitHub Pages" to finish.
6. Your site will be available at `https://YOUR_GITHUB_USERNAME.github.io/janaki-portfolio/`.

The Vite configuration uses relative asset paths (`base: "./"`) so the build works under a GitHub Pages repository subpath.

## 5. Useful commands

```bash
npm run dev
npm run build
npm run preview
```

## Project structure

```text
Janaki_Professional_Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   └── SectionHeading.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```
