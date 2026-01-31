/** @type {import('next').NextConfig} */

// Get base path from environment variable (for GitHub Pages subpath)
// Format: /repo-name or empty string for root domain
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Set base path for GitHub Pages deployment (e.g., /GlimmerAtlas)
  basePath: basePath,

  // Asset prefix must match basePath for proper asset loading
  assetPrefix: basePath,

  // Recommended for GitHub Pages - ensures trailing slashes
  trailingSlash: true,

  // Disable image optimization (not available in static export)
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
