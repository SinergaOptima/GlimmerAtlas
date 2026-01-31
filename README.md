# GlimmerAtlas

> Navigate the Linux universe.

A calm, thoughtful Linux distribution finder built with modern web technologies. GlimmerAtlas helps users discover the perfect Linux distribution through a guided questionnaire, advanced filtering, and side-by-side comparison.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## Philosophy

Choosing a Linux distribution can be overwhelming. With hundreds of options available, each with its own philosophy, package management, and desktop environment, finding the right fit requires careful consideration.

GlimmerAtlas was built to simplify this journey. We believe in:

- **Calm aesthetics** - Inspired by Catppuccin Mocha and charm.land tools
- **Thoughtful recommendations** - Weighted scoring based on actual needs
- **Transparency** - Clear explanations of why each distro matches
- **Accessibility** - Fully keyboard navigable, semantic HTML
- **Performance** - Server-first rendering, minimal JavaScript

---

## Features

### 🎯 Guided Questionnaire
Answer 8-12 thoughtful questions about your experience level, use cases, and preferences. Our weighted scoring algorithm provides personalized recommendations based on what matters most to you.

### 🔍 Advanced Filtering
Browse all distributions and filter by:
- Base distribution (Debian, Arch, Fedora, etc.)
- Desktop environment (GNOME, KDE, i3, Hyprland, etc.)
- Usage categories (Gaming, Development, Privacy, etc.)
- Release model and stability preferences

### 🆚 Side-by-Side Comparison
Compare up to 4 distributions at once with detailed specs:
- Technical specifications
- Pros and cons
- Gaming and NVIDIA support
- Install difficulty and target user level
- Package management and customization

### 📊 Detailed Profiles
Each distribution includes:
- Philosophy and intended audience
- Complete technical specifications
- Honest trade-offs (pros & cons)
- Official links to websites and documentation

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Catppuccin Mocha](https://github.com/catppuccin/catppuccin)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/glimmeratlas.git
cd glimmeratlas

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to GitHub Pages

GlimmerAtlas is configured for **static export** and can be deployed to GitHub Pages with zero configuration.

### Prerequisites

1. **GitHub repository** - Push your code to GitHub
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Under "Build and deployment", select **Source: GitHub Actions**

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Builds the static site on every push to `main`
- Exports to the `out/` directory
- Deploys to GitHub Pages

**No manual steps required** - just push to `main`:

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

Your site will be available at:
```
https://<username>.github.io/<repo-name>/
```

### Manual Deployment (Testing Locally)

To test the static export locally before deploying:

```bash
# Build and export the static site
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build

# Serve the exported site locally
npm run serve
```

Open the URL shown in the terminal (usually `http://localhost:3000`) and test:
- ✅ All pages load correctly
- ✅ Navigation works
- ✅ Deep links work (refresh on any page)
- ✅ Compare and filter URLs work
- ✅ Assets (CSS, JS) load correctly

### Environment Variables

The deployment uses one environment variable:

- **`NEXT_PUBLIC_BASE_PATH`** - The repository name (e.g., `/GlimmerAtlas`)
  - Automatically set by GitHub Actions from `github.event.repository.name`
  - For local testing, set manually: `NEXT_PUBLIC_BASE_PATH=/repo-name npm run build`

### Custom Domain (Optional)

To use a custom domain instead of `username.github.io/repo-name`:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure DNS records (see [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
3. Remove `NEXT_PUBLIC_BASE_PATH` from the workflow (set to empty string)

### Troubleshooting

**Issue**: Pages show 404 after deployment
- **Solution**: Verify Pages source is set to "GitHub Actions" in repo settings

**Issue**: Styles/assets not loading (404 errors)
- **Solution**: Check that `NEXT_PUBLIC_BASE_PATH` matches your repo name exactly

**Issue**: Deep links don't work (refresh shows 404)
- **Solution**: The `public/404.html` handles this automatically. Ensure it's in your `public/` folder

**Issue**: Local build works but GitHub Pages doesn't
- **Solution**: Test locally with the correct base path:
  ```bash
  NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
  npm run serve
  ```

**Issue**: Workflow fails with "Permission denied"
- **Solution**: Go to Settings → Actions → General → Workflow permissions → Select "Read and write permissions"

### How It Works

1. **Static Export**: Next.js exports all pages as static HTML files
2. **Base Path**: Assets and links are prefixed with `/repo-name/` for subpath hosting
3. **404 Fallback**: The `public/404.html` redirects deep links to `index.html` for client-side routing
4. **Trailing Slashes**: Enabled for better GitHub Pages compatibility

See `next.config.js` for the complete static export configuration.

---

## Project Structure

```
GlimmerAtlas/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── questionnaire/      # Guided discovery
│   │   ├── browse/             # Filter-based browsing
│   │   ├── distro/[slug]/      # Individual distro pages
│   │   ├── compare/            # Side-by-side comparison
│   │   └── about/              # About & transparency pages
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── questionnaire/      # Questionnaire flow
│   │   ├── filtering/          # Filter panel & active filters
│   │   ├── results/            # Result cards & lists
│   │   ├── compare/            # Comparison table
│   │   ├── distro/             # Distro detail components
│   │   ├── layout/             # Header, Footer, Container
│   │   └── shared/             # Reusable components
│   │
│   ├── data/
│   │   ├── distros/            # Distribution data (16 distros)
│   │   ├── questions/          # Questionnaire questions
│   │   └── constants/          # Categories, desktops, base distros
│   │
│   ├── lib/
│   │   ├── scoring/            # Scoring algorithm & weights
│   │   └── filtering/          # Filter engine & utilities
│   │
│   ├── types/                  # TypeScript type definitions
│   ├── hooks/                  # React hooks
│   └── config/                 # Theme, site config, animations
│
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind + Catppuccin theme
└── components.json             # shadcn/ui configuration
```

---

## Architecture

### Data Architecture

GlimmerAtlas uses **TypeScript data files** instead of a database for the initial release. This approach provides:
- Type safety at compile time
- Easy version control and contributions
- Fast static generation
- No database hosting costs

Each distribution is defined with comprehensive metadata:

```typescript
interface Distro {
  id: string;
  name: string;
  baseDistro: BaseDistro;
  releaseModel: ReleaseModel;
  defaultDesktops: Desktop[];
  categories: Category[];
  targetUser: UserLevel;
  installDifficulty: number;    // 1-5 scale
  gamingSupport: number;         // 1-5 scale
  nvidiaSupport: number;         // 1-5 scale
  customizationLevel: number;    // 1-5 scale
  securityFocus: number;         // 1-5 scale
  pros: string[];
  cons: string[];
  // ... and more
}
```

### Scoring Algorithm

The questionnaire uses a **weighted scoring system** to match users with distributions:

1. **User answers** are collected through a multi-step flow
2. **Scoring criteria** are extracted from each answer based on the question's scoring map
3. **Points are awarded** for matches:
   - User level match: +25 points (exact), +15 (adjacent)
   - Base distro preference: +20 points
   - Category match: +15 points per category
   - Gaming support: +12 points
   - Desktop environment: +10 points per match
4. **Penalties** are applied for mismatches (e.g., install too difficult: -30 points)
5. **Scores are normalized** to 0-100 range
6. **Results are sorted** by score with match reasons generated

See `src/lib/scoring/engine.ts` for the complete implementation.

### Filtering System

The browse page uses **multi-select filtering** with OR/AND logic:
- **OR within category**: Match any selected option (e.g., Arch OR Debian)
- **AND across categories**: Match all active categories (e.g., Arch AND KDE AND Gaming)

Filters sync to URL query parameters for shareable filter combinations.

### State Management

- **Questionnaire**: React state + sessionStorage (no global state library)
- **Filters**: URL query parameters via Next.js `useSearchParams`
- **Compare**: URL query parameters (`/compare?ids=ubuntu,fedora,arch`)

---

## How Scoring & Filtering Work

### Questionnaire Scoring

When you complete the questionnaire, your answers build a **scoring context** that includes:
- Preferred categories (gaming, development, etc.)
- Preferred base distributions
- Preferred desktop environments
- Required attributes (gaming support, NVIDIA support, etc.)
- Target user level

Each distribution is then scored against this context. The algorithm:
1. Starts with a base score of 0
2. Adds points for each match
3. Subtracts points for deal-breakers
4. Normalizes to 0-100
5. Generates human-readable match reasons

### Filter-Based Browsing

The browse page allows direct filtering without the questionnaire:
- Select multiple base distros, desktops, and categories
- Results update in real-time
- Filter state syncs to URL for sharing
- Filter counts show how many distros match each option

---

## Contributing

We welcome contributions! Here's how you can help:

### Adding a New Distribution

1. Create a new file in `src/data/distros/` (e.g., `gentoo.ts`)
2. Follow the `Distro` interface structure
3. Include comprehensive pros/cons and accurate specs
4. Add the distro to `src/data/distros/index.ts`
5. Submit a pull request

### Improving Questions

Questions are defined in `src/data/questions/questions.ts`. When modifying:
- Keep questions clear and non-technical for beginners
- Ensure scoring maps accurately reflect preferences
- Test that the scoring algorithm produces sensible results

### Design Contributions

Follow the **DESIGN_GUIDE.md** for:
- Catppuccin Mocha color usage
- Glass morphism implementation
- Animation guidelines
- Accessibility requirements

---

## Data Transparency

GlimmerAtlas uses a weighted scoring algorithm to recommend distributions. We don't have partnerships with distribution maintainers, and we don't receive compensation for recommendations.

**Scoring is based on**:
- User experience level and comfort with Linux
- Primary use cases (gaming, development, server, etc.)
- Desktop environment preferences
- Stability vs. cutting-edge software preferences
- Hardware considerations (NVIDIA GPU, old hardware, etc.)

**Data is sourced from**:
- Official distribution websites and documentation
- Community wikis (ArchWiki, Debian Wiki, etc.)
- Release notes and changelogs
- Community feedback and testing

See the [Data Transparency](/data-transparency) page for complete methodology.

---

## Future Roadmap

- [ ] Add more distributions (target: 50+)
- [ ] User reviews and ratings
- [ ] Advanced filters (package count, community size)
- [ ] Analytics dashboard (popular distros, questionnaire drop-off)
- [ ] REST API for distro data
- [ ] Database migration for community contributions
- [ ] Internationalization (i18n)
- [ ] Distro logos and branding
- [ ] Installation guides and tutorials

---

## License

MIT License - see [LICENSE](LICENSE) for details.

---

## Acknowledgments

- **Catppuccin** - For the beautiful Mocha color palette
- **charm.land** - Design inspiration (Glow, Gum, VHS)
- **shadcn/ui** - Excellent component library
- **Linux community** - For creating and maintaining all these amazing distributions

---

## Part of Glimmer

GlimmerAtlas is part of the Glimmer ecosystem - a collection of thoughtfully designed tools for developers and Linux enthusiasts.

**Navigate the Linux universe.** 🌌
