# Portfolio Deployment Guide

## Deploy to GitHub Pages (Static Version)

### Step 1: Prepare for GitHub
1. **Download your project** as ZIP from Replit
2. **Extract** the ZIP file on your computer
3. **Create a GitHub account** if you don't have one

### Step 2: Upload to GitHub
1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it: `your-username.github.io` (replace with your actual username)
4. Make it **Public**
5. Click **"Create repository"**

### Step 3: Upload Files
1. Click **"uploading an existing file"**
2. **Drag and drop** all your project files
3. **Commit** the files

### Step 4: Enable GitHub Pages
1. Go to **Settings** tab in your repository
2. Scroll to **Pages** section
3. Select **Source**: Deploy from a branch
4. Select **Branch**: main
5. Click **Save**

Your site will be available at: `https://your-username.github.io`

---

## Deploy to Netlify (Full Stack - Recommended)

### Option A: Git-based Deployment (Recommended)

#### Step 1: Upload to GitHub First
Follow GitHub steps above but name repo anything (e.g., `portfolio`)

#### Step 2: Deploy with Netlify
1. Go to [Netlify.com](https://netlify.com) and sign up
2. Click **"New site from Git"**
3. Choose **GitHub** and authorize
4. Select your portfolio repository
5. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
6. Click **"Deploy site"**

#### Step 3: Configure Environment
1. Go to **Site settings** → **Environment variables**
2. Add any needed variables (currently none required)

### Option B: Manual Deployment

#### Step 1: Build Locally
1. **Extract** your downloaded project
2. **Open terminal** in the project folder
3. Run: `npm install`
4. Run: `npm run build`

#### Step 2: Deploy to Netlify
1. Go to [Netlify.com](https://netlify.com)
2. **Drag and drop** the `dist` folder to Netlify
3. Your site is live!

---

## Deploy to Vercel (Alternative)

### Step 1: Upload to GitHub
Follow GitHub upload steps above

### Step 2: Deploy with Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up
2. Click **"New Project"**
3. **Import** your GitHub repository
4. **Build settings**:
   - Build command: `npm run build`
   - Output directory: `dist/public`
5. Click **"Deploy"**

---

## Deploy to Replit Deployments (Easiest)

### Step 1: In Your Current Replit
1. Click **"Deploy"** button at the top
2. Choose **"Autoscale deployment"**
3. Configure your deployment
4. Your site will get a `.replit.app` domain

---

## Important Notes

### For Full-Stack Features
- **Contact Form**: Works on Netlify, Vercel, and Replit
- **Resume Download**: Works on all platforms
- **Database**: Currently uses in-memory storage (fine for portfolio)

### Custom Domain (Optional)
- Purchase a domain (e.g., `brahmanandmishra.com`)
- Add it in your hosting platform's domain settings
- Update DNS records

### SSL Certificate
- All platforms provide free SSL automatically
- Your site will have `https://` 

---

## Recommended Deployment Order

1. **Start with Netlify** (easiest full-stack)
2. **Add custom domain** later if needed
3. **Keep Replit** as development environment

Your portfolio will be live and accessible worldwide after deployment!