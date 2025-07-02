# Setup Your Portfolio on GitHub from Replit

Since Replit has Git restrictions, here's how to manually set up your portfolio on GitHub:

## Method 1: Using Replit's GitHub Integration (Easiest)

### Step 1: Connect Replit to GitHub
1. **Click your profile picture** in top-right of Replit
2. **Go to "Account"** → **"Connected services"**
3. **Connect GitHub** if not already connected

### Step 2: Create Repository from Replit
1. **In your Replit**, click the **"Version control"** tab (left sidebar)
2. **Click "Create a Git Repo"**
3. **Push to GitHub** option should appear
4. **Create new repository** on GitHub
5. **Name it**: `portfolio` or `brahmanand-portfolio`

## Method 2: Manual Upload to GitHub

### Step 1: Download Your Project
1. **Three dots menu (⋯)** in file explorer
2. **"Download as ZIP"**
3. **Extract** on your computer

### Step 2: Create GitHub Repository
1. **Go to [github.com](https://github.com)** and sign in
2. **Click "New repository"** (green button)
3. **Repository name**: `portfolio` or `brahmanand-portfolio`
4. **Description**: "Professional Angular Developer Portfolio"
5. **Make it Public**
6. **Click "Create repository"**

### Step 3: Upload Files
1. **Click "uploading an existing file"**
2. **Drag and drop** all your project files from extracted folder
3. **Commit message**: "Initial portfolio setup"
4. **Click "Commit new files"**

## Method 3: Using Git Commands (Advanced)

If you want to use Git locally:

```bash
# In your extracted project folder
git init
git add .
git commit -m "Initial portfolio setup"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## After Upload - Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Settings tab** → **Pages** (left sidebar)
3. **Source**: Deploy from a branch
4. **Branch**: main
5. **Folder**: / (root)
6. **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

## Connect to Netlify for Full Features

After GitHub setup:

1. **Go to [netlify.com](https://netlify.com)**
2. **"New site from Git"**
3. **Choose GitHub** → Select your repository
4. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
5. **Deploy**

## Repository Settings Recommendations

### Make Repository Public
- Shows your code to potential employers
- Demonstrates your coding skills
- Free hosting on GitHub Pages

### Add Repository Description
"Professional portfolio showcasing 6 years of Angular development experience"

### Add Topics (Tags)
- `portfolio`
- `angular`
- `typescript`
- `react`
- `web-development`

### Enable Issues
- Shows you're open to feedback
- Professional development practice

## Next Steps

1. **Create the repository** using Method 1 or 2
2. **Enable GitHub Pages** for free hosting
3. **Connect to Netlify** for full-stack features
4. **Add your GitHub URL** to your resume and LinkedIn

Your portfolio will be accessible worldwide and show your professional development skills!