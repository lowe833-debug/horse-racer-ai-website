Horse Racer AI — Static Preview

This folder contains a simple static website preview for the Horse Racer AI app.

Files:
- `index.html` — Main landing page (AI predictions, features, screenshots)
- `support.html` — Support & FAQ page
- `privacy.html` — Privacy policy
- `testflight.html` — Beta testing instructions
- `beta-signup.html` — Beta tester registration form
- `app-store-preview.html` — App Store metadata preview
- `marketing.html` — Brand guidelines and assets
- `404.html` — Custom error page
- `sitemap.xml` — Site structure for search engines

Assets:
- `/assets/app-store/` — Screenshot templates and icon guidelines
- `/assets/css/` — Stylesheets (spinner)
- `/assets/js/` — JavaScript (spinner, form handling)
- `/assets/docs/` — Additional documentation

How to preview locally:
- Open `index.html` or `support.html` directly in your browser (double-click the file or use "Open with" in File Explorer).
- Or run a quick local server (Python 3) from this folder:

```powershell
python -m http.server 8000
# then open http://localhost:8000/index.html
```

Notes:
- Replace the placeholder App Store link `https://apps.apple.com/app/idYOURAPPID` with your actual app URL.
- The example uses third-party images (Dreamstime, NPR, Google Play). Ensure you have rights to use them before publishing.
- The site is for entertainment; do not enable real-money betting features without proper compliance and licensing.

Analytics & SEO:
- A placeholder Google Analytics (GA4) snippet was added to each page. Replace `G-XXXXXXXXXX` with your Measurement ID or remove the snippet if you don't want analytics.
- Open Graph and Twitter meta tags were added to the main pages for better social sharing. Update `og:image` URLs to use licensed images hosted on your domain for best appearance.

Sitemap:
- Created `sitemap.xml` at the project root. If you add or remove pages, update the sitemap accordingly and upload it to your site root when publishing.

Spinner:
- A simple full-page loading spinner was added (`/assets/css/spinner.css` and `/assets/js/spinner.js`). The spinner automatically hides when the page finishes loading.

Next steps you might want me to do:
- Generate screenshot templates (PSD/PNG) sized for iPhone/iPad App Store requirements.
- Create an `assets/app-icon` folder and generate a 1024x1024 icon template.
- Prepare a TestFlight invitation management page or simple signup form.
