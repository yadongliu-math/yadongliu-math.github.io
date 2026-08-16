# Yadong Liu — GitHub Pages website

This is a static, single-page academic website adapted from the public Google Sites page at:

`https://sites.google.com/view/yadongliu`

## Files

- `index.html`: page content and links
- `styles.css`: design and responsive layout
- `assets/profile.jpg`: profile photograph
- `.nojekyll`: tells GitHub Pages to serve the files directly

## Publish through the GitHub website

1. Sign in to GitHub.
2. Create a public repository named exactly:

   `YOUR-GITHUB-USERNAME.github.io`

3. Open the repository and choose **Add file → Upload files**.
4. Upload the contents of this folder. Upload the files themselves, not the outer folder or ZIP file.
5. Commit the upload to the `main` branch.
6. Open **Settings → Pages**.
7. Under **Build and deployment**, choose **Deploy from a branch**.
8. Select branch `main`, folder `/(root)`, and click **Save**.
9. Visit:

   `https://YOUR-GITHUB-USERNAME.github.io`

## Important: preserve this structure

```text
index.html
styles.css
.nojekyll
assets/
  profile.jpg
```

The photograph will not load if `profile.jpg` is moved or renamed without also changing its path in `index.html`.

## Edit the page later

Open `index.html` on GitHub, click the pencil icon, edit the text, and commit the change.

For design changes, edit `styles.css`.

## Host the CV inside the repository instead of Google Drive

1. Upload the CV to the repository root as `YadongLiuCV.pdf`.
2. In `index.html`, replace both occurrences of the Google Drive URL with:

   `YadongLiuCV.pdf`

## Optional local Git workflow

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/YOUR-GITHUB-USERNAME.github.io.git
cd YOUR-GITHUB-USERNAME.github.io
# Copy these site files into this folder.
git add .
git commit -m "Create academic homepage"
git push
```
