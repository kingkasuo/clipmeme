# MemeGen AI - Landing Page

A stunning landing page for an AI-powered meme generator, built with Nuxt.js 3, Tailwind CSS, and shadcn/ui design patterns.

## ✨ Features

- **🎨 Instagram-inspired Design** - Beautiful gradient colors and modern aesthetics
- **🌍 Multi-language Support** - 7 languages: English, Русский, Français, 日本語, 한국어, 简体中文, 繁體中文
- **🌙 Dark/Light Mode** - Automatic theme switching with system preference detection
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **⚡ High Performance** - Built with Nuxt.js 3 for optimal loading speed
- **🎯 SEO Optimized** - Meta tags and structured data for better search rankings

## 🛠 Tech Stack

- **Framework:** [Nuxt.js 3](https://nuxt.com/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) patterns
- **Icons:** [Lucide Vue](https://lucide.dev/)
- **Fonts:** [Outfit](https://fonts.google.com/specimen/Outfit) & [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm or npm

### Installation

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Generate static site
pnpm generate

# Or build for SSR
pnpm build
```

## 📁 Project Structure

```
frontend/
├── assets/
│   └── css/
│       └── tailwind.css       # Tailwind + custom styles
├── components/
│   ├── Header.vue             # Navigation header
│   ├── Hero.vue               # Hero section
│   ├── Features.vue           # Features grid
│   ├── HowItWorks.vue         # 3-step process
│   ├── Pricing.vue            # Pricing plans
│   ├── Footer.vue             # Footer
│   └── LanguageSwitcher.vue   # Language dropdown
├── i18n/
│   └── locales/               # Translation files
│       ├── en.json
│       ├── ru.json
│       ├── fr.json
│       ├── ja.json
│       ├── ko.json
│       ├── zh.json
│       └── zh-TW.json
├── layouts/
│   └── default.vue            # Default layout
├── pages/
│   ├── index.vue              # Home page
│   ├── features.vue           # Features page
│   ├── blog.vue               # Blog page
│   └── pricing.vue            # Pricing page
├── app.vue                    # App entry
├── nuxt.config.ts             # Nuxt configuration
└── tailwind.config.js         # Tailwind configuration
```

## 🎨 Design System

### Colors (Instagram-inspired)

```css
--instagram-purple: #833AB4
--instagram-pink: #E4405F
--instagram-orange: #FCAF45
--instagram-yellow: #FFDC80
```

### Typography

- **Display:** Space Grotesk (bold headings)
- **Body:** Outfit (clean, modern)

## 🌍 Internationalization

The app supports 7 languages with automatic browser language detection:

| Code | Language | Name |
|------|----------|------|
| `en` | English | English |
| `ru` | Russian | Русский |
| `fr` | French | Français |
| `ja` | Japanese | 日本語 |
| `ko` | Korean | 한국어 |
| `zh` | Chinese (Simplified) | 简体中文 |
| `zh-TW` | Chinese (Traditional) | 繁體中文 |

## 📄 License

MIT License - feel free to use this for your projects!
