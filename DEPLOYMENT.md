# GitHub Pages Deployment Guide

This document provides a comprehensive guide to deploying GlimmerAtlas to GitHub Pages.

## Changes Made for GitHub Pages

### 1. Static Export Configuration (`next.config.js`)

Updated to enable static export with base path support:

```javascript
output: 'export'
basePath: process.env.NEXT_PUBLIC_BASE_PATH || ''
assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || ''
trailingSlash: true
images: { unoptimized: true }
```

### 2. Package Scripts (`package.json`)

Added convenience scripts:

```json
"export": "next build"
"serve": "npx serve@latest out"
```

### 3. GitHub Pages Configuration Files

Created in `public/` directory:

- **`.nojekyll`** - Prevents GitHub Pages from processing the site with Jekyll
- **`404.html`** - Handles deep linking by redirecting to index.html with path preserved

### 4. Root Layout Update (`src/app/layout.tsx`)

Added redirect handler script in `<head>` to restore paths after 404 redirect:

```javascript
(function() {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();
```

### 5. Footer Component Fix (`src/components/layout/Footer.tsx`)

Changed Data Transparency link from `<a>` to `<Link>` for proper base path handling.

### 6. GitHub Actions Workflow (`.github/workflows/deploy.yml`)

Created automated deployment workflow that:
- Triggers on push to `main` branch
- Builds with `NEXT_PUBLIC_BASE_PATH` from repository name
- Deploys to GitHub Pages using official actions

---

## Deployment Instructions

### First-Time Setup

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select **Source: GitHub Actions**

3. **Enable workflow permissions** (if deployment fails):
   - Go to Settings → Actions → General
   - Under "Workflow permissions", select "Read and write permissions"
   - Click "Save"

### Automatic Deployment

After initial setup, every push to `main` automatically deploys:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Site will be available at:
```
https://<your-username>.github.io/<repo-name>/
```

---

## Local Testing

### Test the Static Export

```bash
# Windows (Git Bash)
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/GlimmerAtlas npm run build

# macOS/Linux
NEXT_PUBLIC_BASE_PATH=/GlimmerAtlas npm run build

# Serve locally
npm run serve
```

### Verify Checklist

- [ ] All pages load correctly
- [ ] Navigation works (header, footer links)
- [ ] Deep links work (refresh on any page)
- [ ] Filter URLs work (`/browse?baseDistros=arch`)
- [ ] Compare URLs work (`/compare?ids=ubuntu,fedora`)
- [ ] Assets load (check browser console for 404s)
- [ ] Styles render correctly

---

## How It Works

### Static Export Process

1. **Build**: Next.js compiles all pages to static HTML/CSS/JS
2. **Base Path**: All internal links and assets get prefixed with `/repo-name/`
3. **Export**: Files are written to `out/` directory
4. **Upload**: GitHub Actions uploads `out/` as Pages artifact
5. **Deploy**: Pages serves the static files

### Deep Link Handling

GitHub Pages only serves files that exist. For client-side routes:

1. User visits `/GlimmerAtlas/questionnaire/` (deep link)
2. GitHub Pages serves `404.html` (file doesn't exist at that exact path)
3. `404.html` captures the URL and saves to `sessionStorage.redirect`
4. Redirects to `index.html`
5. Root layout script restores the path from sessionStorage
6. Next.js router takes over and renders the correct page

This is the standard SPA solution for GitHub Pages and works reliably.

### Environment Variables

- **`NEXT_PUBLIC_BASE_PATH`** - Repository name (e.g., `/GlimmerAtlas`)
  - Set automatically in GitHub Actions from `github.event.repository.name`
  - Must be set manually for local testing
  - Must start with `/` and have no trailing slash

---

## Troubleshooting

### Issue: Pages show 404 after deployment

**Cause**: Pages source not configured correctly

**Solution**:
- Go to Settings → Pages
- Set Source to "GitHub Actions"
- Wait for next deployment

### Issue: Styles/assets return 404

**Cause**: Base path mismatch

**Solution**:
```bash
# Check your repository name exactly matches the base path
# If repo is "glimmeratlas", base path should be "/glimmeratlas"
```

### Issue: Deep links don't work

**Cause**: Missing 404.html

**Solution**: Verify `public/404.html` exists and was copied to `out/`

### Issue: Local testing fails with path conversion error

**Cause**: Git Bash converts `/repo-name` to Windows path

**Solution**: Add `MSYS_NO_PATHCONV=1` before the command:
```bash
MSYS_NO_PATHCONV=1 NEXT_PUBLIC_BASE_PATH=/GlimmerAtlas npm run build
```

### Issue: Workflow fails with "Permission denied"

**Cause**: Insufficient workflow permissions

**Solution**:
- Settings → Actions → General
- Workflow permissions → "Read and write permissions"
- Save

---

## Custom Domain (Optional)

To use a custom domain instead of `username.github.io/repo-name`:

1. Add `public/CNAME` file with your domain:
   ```
   glimmeratlas.com
   ```

2. Configure DNS (see [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain)):
   ```
   Type: CNAME
   Name: www (or @)
   Value: <username>.github.io
   ```

3. Update workflow to remove base path:
   ```yaml
   NEXT_PUBLIC_BASE_PATH: ""
   ```

4. Wait for DNS propagation (can take 24-48 hours)

---

## Performance Notes

- **Build time**: ~10-30 seconds (25 pages)
- **Deploy time**: ~1-2 minutes total
- **CDN**: GitHub Pages uses a global CDN
- **Caching**: Static assets are cached aggressively

---

## What's Exported

```
out/
├── _next/                      # Next.js chunks and assets
│   ├── static/
│   │   ├── chunks/             # JavaScript bundles
│   │   └── css/                # Stylesheets
├── about/                      # Static about page
├── browse/                     # Static browse page
├── compare/                    # Static compare page
├── data-transparency/          # Static transparency page
├── distro/                     # 16 pre-rendered distro pages
│   ├── ubuntu/
│   ├── fedora/
│   └── ...
├── questionnaire/              # Static questionnaire page
├── 404.html                    # Deep link handler
├── index.html                  # Homepage
└── .nojekyll                   # Disable Jekyll processing
```

All 25 pages are pre-rendered at build time (SSG).

---

## Migration Back to Server Mode

If you later want to deploy to Vercel/Netlify with server features:

1. Remove `output: 'export'` from `next.config.js`
2. Remove `images: { unoptimized: true }`
3. Remove `public/404.html` (use Next.js 404 page instead)
4. Remove redirect script from `layout.tsx`
5. Deploy normally

The base path can remain for subdirectory deployments or be removed for root domain.

---

## Summary

✅ **Static export enabled**
✅ **Base path configured**
✅ **Deep linking handled**
✅ **GitHub Actions workflow ready**
✅ **Local testing documented**
✅ **All routes verified**

Just push to `main` and your site will deploy automatically!
