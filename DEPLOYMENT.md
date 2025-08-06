# Deployment Guide for Vercel

This guide will help you deploy your Dual Portal Website to Vercel in multiple ways.

## Prerequisites

- A Vercel account (free at [vercel.com](https://vercel.com))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Method 1: Vercel CLI (Recommended)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account.

### Step 3: Deploy
Navigate to your project directory and run:
```bash
vercel
```

The CLI will:
- Detect that you're using Next.js
- Ask for project name (default: dual-portal-website)
- Ask which scope to deploy under
- Deploy your application

### Step 4: Production Deployment
For production deployments:
```bash
vercel --prod
```

## Method 2: Git Integration (Easiest)

### Step 1: Push to Git
Ensure your code is pushed to GitHub, GitLab, or Bitbucket:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Import on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically:
   - Detect Next.js framework
   - Set build command: `npm run build`
   - Set install command: `npm install`
   - Set output directory: `.next`

### Step 3: Deploy
Click "Deploy" and Vercel will build and deploy your application.

### Step 4: Automatic Deployments
Every push to your main branch will trigger a new deployment automatically.

## Method 3: Manual Upload

### Step 1: Build Locally
```bash
npm run build
```

### Step 2: Deploy via Drag & Drop
1. Go to [vercel.com/new](https://vercel.com/new)
2. Drag and drop your project folder
3. Vercel will detect Next.js and deploy

## Post-Deployment

### Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Environment Variables
This project doesn't require environment variables for basic functionality as it uses localStorage.

### Performance Optimization
Your Next.js app is automatically optimized by Vercel with:
- Edge Functions
- Image Optimization
- Automatic HTTPS
- Global CDN
- Serverless Functions

## Troubleshooting

### Build Errors
If you encounter build errors:
```bash
# Clean install dependencies
rm -rf node_modules package-lock.json
npm install

# Test build locally
npm run build
```

### Deployment Issues
- Check Vercel build logs in the dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Local Storage Limitation
Remember that localStorage data is browser-specific and won't persist across devices. For production use, consider:
- Adding a database (Vercel KV, PlanetScale, etc.)
- Using Vercel's serverless functions for API routes

## Your Live URLs

After deployment, you'll receive URLs like:
- **Production**: `https://your-project-name.vercel.app`
- **Preview**: `https://your-project-name-git-branch.vercel.app`

## Next Steps

1. Test all functionality on the live site
2. Share the admin portal URL with content creators
3. Share the public portal URL with your audience
4. Consider adding authentication for the admin portal
5. Consider upgrading to a database for data persistence

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)