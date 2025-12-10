# GTI Labs - Company Profile Website

A modern, responsive company profile website built with Next.js 14, Tailwind CSS, and Framer Motion.

![GTI Labs](https://gtilabs.id)

## Features

- 🚀 **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for smooth animations
- 📱 **Fully Responsive** design
- 🌙 **Dark Theme** with gradient accents
- 📄 **JSON-based** content management
- 🔍 **SEO Optimized** with metadata
- ⚡ **Fast Performance** with static generation

## Project Structure

```
gtilabs-website/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Hero.tsx         # Hero section
│   │   ├── About.tsx        # About section
│   │   ├── Services.tsx     # Services section
│   │   ├── Portfolio.tsx    # Portfolio section
│   │   ├── TechStack.tsx    # Tech stack section
│   │   ├── Team.tsx         # Team section
│   │   ├── Testimonials.tsx # Testimonials section
│   │   ├── Contact.tsx      # Contact section
│   │   └── Footer.tsx       # Footer
│   └── data/
│       ├── company.json     # Company information
│       ├── services.json    # Services data
│       ├── portfolio.json   # Projects/portfolio data
│       ├── team.json        # Team members data
│       ├── techstack.json   # Technologies data
│       ├── clients.json     # Clients & testimonials
│       └── navigation.json  # Navigation links
├── public/
│   └── images/              # Static images
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. **Clone or download the project**

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Customization

### Updating Content

All content is managed through JSON files in the `src/data/` directory:

#### Company Information (`company.json`)

```json
{
  "name": "Your Company Name",
  "tagline": "Your Tagline",
  "email": "hello@yourcompany.com",
  ...
}
```

#### Services (`services.json`)

Add or modify services with icons from Lucide React.

#### Portfolio (`portfolio.json`)

Add your projects with technologies and descriptions.

#### Team (`team.json`)

Update team member information.

### Customizing Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Your primary color palette
  },
  accent: {
    cyan: '#00d4ff',
    purple: '#a855f7',
    // Add more accent colors
  }
}
```

### Adding Images

Place your images in the `public/images/` directory:

- `public/images/projects/` - Project screenshots
- `public/images/team/` - Team member photos
- `public/images/clients/` - Client logos

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy!

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

Add to `next.config.js`:

```javascript
output: 'standalone'
```

Build and run:

```bash
docker build -t gtilabs-website .
docker run -p 3000:3000 gtilabs-website
```

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## License

MIT License - feel free to use this template for your own projects!

---

Built with ❤️ by GTI Labs
