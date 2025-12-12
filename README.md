# GTI Labs Website

A modern, responsive company website built with **SvelteKit** and **Svelte 5**, featuring a dark/light theme toggle,
smooth animations, and a professional design.

## Tech Stack

- **Framework:** SvelteKit with Svelte 5 (Runes)
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide Svelte
- **Animations:** Svelte transitions (fly, fade, scale)
- **Language:** TypeScript

## Features

- Responsive design (mobile-first)
- Dark/Light theme with system preference detection
- Smooth scroll animations on section entry
- Glass morphism UI components
- SEO optimized with meta tags
- Fast page loads with SvelteKit

## Project Structure

```
src/
├── app.html              # HTML template
├── app.css               # Global Tailwind styles
├── routes/
│   ├── +layout.svelte    # Root layout
│   └── +page.svelte      # Home page
└── lib/
    ├── components/       # Svelte components
    │   ├── Navbar.svelte
    │   ├── Hero.svelte
    │   ├── About.svelte
    │   ├── Services.svelte
    │   ├── Portfolio.svelte
    │   ├── TechStack.svelte
    │   ├── Team.svelte
    │   ├── Testimonials.svelte
    │   ├── Contact.svelte
    │   ├── Footer.svelte
    │   └── ThemeToggle.svelte
    ├── stores/
    │   └── theme.ts      # Theme state management
    ├── actions/
    │   └── inview.ts     # Intersection Observer action
    └── data/             # JSON data files
        ├── company.json
        ├── navigation.json
        ├── services.json
        ├── portfolio.json
        ├── team.json
        ├── techstack.json
        └── clients.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The development server runs at `http://localhost:5173` by default.

## Scripts

| Command           | Description                      |
|-------------------|----------------------------------|
| `npm run dev`     | Start development server         |
| `npm run build`   | Build for production             |
| `npm run preview` | Preview production build         |
| `npm run check`   | Run svelte-check for type errors |

## Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
colors: {
    primary: { ...
    }
,  // Pink/magenta theme
    dark: { ...
    }
,     // Dark mode colors
    light: { ...
    }
,    // Light mode colors
    accent: { ...
    }    // Accent colors
}
```

### Content

All content is stored in JSON files under `src/lib/data/`:

- `company.json` - Company info, stats, values
- `team.json` - Team member profiles
- `services.json` - Service offerings
- `portfolio.json` - Project showcase
- `techstack.json` - Technology stack
- `clients.json` - Client testimonials

### Adding Team Members

Edit `src/lib/data/team.json`:

```json
{
  "id": "unique-id",
  "name": "Full Name",
  "role": "Job Title",
  "bio": "Short bio description",
  "image": "/images/photo.jpeg",
  "linkedin": "https://linkedin.com/in/...",
  "github": "https://github.com/..."
}
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Static Hosting

```bash
# Install static adapter
npm install -D @sveltejs/adapter-static

# Update svelte.config.js to use adapter-static
# Then build
npm run build
```

The built files will be in the `build` directory.

## License

MIT License

## Contact

- **Email:** hello@gtilabs.id
- **Website:** https://gtilabs.id
- **Location:** Jakarta, Indonesia
