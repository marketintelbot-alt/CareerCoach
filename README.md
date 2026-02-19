# Career Coach (Static + Pyodide)

Career Coach is a fully static website for high school and college students to discover career matches.

- No backend
- No API keys
- No paid services
- Runs on static hosts (Render Static Sites, GitHub Pages, Netlify, etc.)
- Works offline except for loading Pyodide from CDN

## Files

- `index.html` - app shell and UI structure
- `style.css` - dark theme styling and responsive layout
- `app.js` - quiz flow, dataset, filtering, export/share, and Pyodide integration
- `model.py` - Python scoring logic executed in browser via Pyodide

## Local Run

Use a simple static server:

```bash
python3 -m http.server 8000
```

Then open:

```bash
http://localhost:8000
```

## Deploy to Render (Static Site)

Create a new **Static Site** in Render and point it to this folder/repo.

- **Build Command:** *(leave blank)*
- **Publish Directory:** `.`

Deploy.

## Notes

- Pyodide is loaded from:
  - `https://cdn.jsdelivr.net/pyodide/v0.27.2/full/pyodide.js`
- Career data is local in `app.js`.
- Scoring runs entirely in-browser in `model.py`.
