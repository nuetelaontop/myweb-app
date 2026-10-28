# My Web App (Practice Project for Vercel Deployment)

This is a clean, responsive starter website created to practice the **Web Deployment SOP**.

## 🚀 How to Practice in VS Code

### Step 1: Open in VS Code
1. Open Visual Studio Code.
2. Click **File -> Open Folder...** and select this folder (`my-web-app`).
3. Open `index.html`.
4. Right-click anywhere in `index.html` and click **"Open with Live Server"** (or double-click `index.html` to open it in your browser).
5. Try changing the text, saving (`Ctrl + S`), and see it update!

### Step 2: Push to GitHub
Open the terminal in VS Code (`Ctrl + ~`) and run:

```bash
git init
git add .
git commit -m "first commit: ready to deploy"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/my-web-app.git
git push -u origin main
```
*(Make sure you create a new empty repository on [github.com](https://github.com/new) first and copy its link)*.

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **"Add New..." -> "Project"**.
3. Select your `my-web-app` repository and click **"Import"**.
4. Click the blue **"Deploy"** button.
5. In 30 seconds, your site is live with a free `https://...vercel.app` link!
