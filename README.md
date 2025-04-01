# Pet Store React Application

A modern React application for a pet store, built with Vite, React, TypeScript, and Tailwind CSS.

## Deploying to GitHub Pages

To deploy this project on GitHub Pages, follow these steps:

1. Create a new repository on GitHub
   - Go to [GitHub](https://github.com)
   - Click the '+' icon and select 'New repository'
   - Name your repository
   - Make it public
   - Don't initialize with any files

2. Initialize and push your local repository
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. The GitHub Actions workflow is already set up in `.github/workflows/deploy.yml`. It will:
   - Build your project
   - Deploy it to GitHub Pages automatically when you push to the main branch

4. Enable GitHub Pages
   - Go to your repository's Settings
   - Navigate to 'Pages' in the sidebar
   - Under 'Build and deployment', select 'Deploy from a branch'
   - Select 'gh-pages' branch and 'root' folder
   - Click Save

5. Your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Features

- Modern React with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Shopping cart functionality
- Responsive design
- GitHub Pages deployment