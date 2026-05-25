# Bishal Samanta — Portfolio

Academic portfolio website built for GitHub Pages.
Aesthetic: al-folio minimalist — EB Garamond serif + clean sans-serif layout.

## Deployment (GitHub Pages)

1. Create a new GitHub repo named `bishal-samanta.github.io`
   (replace `bishal-samanta` with your actual GitHub username)

2. Push all files from this folder to the `main` branch

3. Go to repo **Settings → Pages** → Source: `main` branch → `/root`

4. Your site will be live at `https://bishal-samanta.github.io`

## Structure

```
├── index.html          ← About / Home
├── research.html       ← Research experience & projects
├── publications.html   ← Papers & presentations
├── cv.html             ← Full CV
├── blog/
│   ├── index.html      ← Blog listing
│   ├── template.html   ← Copy this to add new posts
│   └── post-*.html     ← Your posts go here
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   ├── img/            ← Add profile.jpg here
│   └── pdf/            ← Add cv.pdf here
└── _config.yml
```

## Adding a Blog Post

1. Copy `blog/template.html` → `blog/post-my-title.html`
2. Edit the `<title>`, heading, date, tag, and body content
3. Add an entry to `blog/index.html` pointing to the new file
4. Paste LinkedIn post content or write directly in the `.post-body` div

## Customization Checklist

- [ ] Add your profile photo at `assets/img/profile.jpg`
  (then uncomment the `<img>` tag and remove the placeholder in `index.html`)
- [ ] Add your CV PDF at `assets/pdf/cv.pdf`
- [ ] Update LinkedIn / GitHub URLs in `index.html` nav links
- [ ] Add real blog posts (copy `blog/template.html`)
- [ ] Update contact email if different
- [ ] Add Google Analytics or Plausible if you want analytics
      (add the snippet before `</head>` in each HTML file)
