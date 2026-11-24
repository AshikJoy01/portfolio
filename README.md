# Ashik Joy Portfolio

A simple, responsive four-page portfolio built with HTML5, CSS3, and vanilla JavaScript. No frameworks, packages, or build tools are required.

## Open the site

Open `index.html` directly in a browser.

Optional local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Files

```text
Portfolio/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   └── Ashik-Joy-CV.pdf
└── README.md
```

`assets/Ashik-Joy-CV.pdf` is intentionally not included. Add the real PDF at that path when it is ready; the resume button already points to it.

## Common updates

- **Navigation:** each page has its own navigation block. When editing it, copy the same links to all four HTML files and move `class="active"` and `aria-current="page"` to the current page's link.
- **Project links:** replace `href="#"` in `projects.html` with the real repository URLs. Add `target="_blank" rel="noopener noreferrer"` if links should open in a new tab.
- **Contact details:** edit the email and GitHub links in `contact.html`.
- **Colors and spacing:** change the variables at the top of `css/style.css`.
- **Mobile menu behavior:** edit `js/script.js`.

## Notes

- The navigation links are regular HTML links, so navigation works even without JavaScript. JavaScript is used only for the mobile menu.
- The layout uses system fonts and one small stylesheet to keep the site fast and easy to maintain.
- The project cards and page sections are responsive down to 320px-wide screens.
