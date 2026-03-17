# VillageFood — Frontend

A premium React e-commerce frontend for the VillageFood platform.

## Tech Stack & Design Decisions

| Choice | What | Why |
|--------|------|-----|
| **React 19** | UI framework | Component-based, huge ecosystem, fast development |
| **Vite** | Build tool | 10x faster than CRA, instant HMR, small bundle size |
| **TypeScript** | Language | Catch bugs at compile time, better DX with autocomplete |
| **Zustand** | State management | Lightweight (~1KB), no boilerplate, persistent cart state |
| **Lucide React** | Icons | Modern, tree-shakeable, consistent design |
| **Framer Motion** | Animations | Smooth page transitions on About page |
| **Vanilla CSS** | Styling | Full control, no framework lock-in, dark mode via `prefers-color-scheme` |

## Architecture

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar/        # Glassmorphism navbar with active routes, cart badge
│   │   ├── Footer/        # Multi-column footer with trust badges
│   │   └── ScrollToTop.tsx
│   ├── pages/
│   │   ├── Home/          # Hero, problem statement, CTA sections
│   │   ├── Products/      # Product grid with cart quantity selector
│   │   ├── Cart/          # Cart management with checkout
│   │   ├── Checkout/      # Multi-step: Address → Payment → Order success
│   │   ├── Order/         # Order history with shipment tracking
│   │   ├── About/         # Founder story with Framer Motion animations
│   │   ├── Quality/       # Quality standards page
│   │   ├── Login/         # JWT login with glassmorphism card
│   │   ├── Signup/        # User registration
│   │   └── Policies/      # Privacy, Terms, Shipping pages
│   ├── services/
│   │   └── api.ts         # Axios instance with JWT interceptor
│   ├── store/
│   │   ├── useAuthStore.ts  # Auth state (JWT, user data)
│   │   └── useCartStore.ts  # Cart state (items, quantities, persistence)
│   ├── styles/
│   │   └── Auth.css       # Shared auth page styling
│   └── App.tsx            # Route definitions
├── nginx.conf             # Production Nginx config (SPA + API proxy)
├── Dockerfile             # Multi-stage: Node build → Nginx serve
└── package.json
```

## Key Features

- **Product cards with live cart count** — See "2 in cart" badge + increment/decrement right on the product
- **Login-gated cart** — "Login to Buy" button for unauthenticated users
- **Multi-step checkout** — Address selection → Razorpay-style payment → Order confirmation with shipment details
- **Active route highlighting** — Current page highlighted in navbar
- **Mobile responsive** — Hamburger menu, stacking layouts
- **Dark mode** — Auto-detects system preference
- **Prices in ₹** — Indian Rupee throughout

## Running Locally

### Prerequisites
- Node.js 18+
- Backend API running on `http://localhost:8000`

### Steps
```bash
# 1. Clone
git clone git@github.com:ppandeyvinay22/vill-proj-frontend.git
cd vill-proj-frontend

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

The app is now live at **http://localhost:5173**

### API Proxy (Dev)
In dev mode, API calls go to `http://localhost:8000` via the Axios base URL in `services/api.ts`.

## Running with Docker

```bash
# From the parent directory (where docker-compose.yml is)
docker-compose up --build
```

In production (Docker), Nginx proxies `/api/*` requests to the backend container.

## Build for Production

```bash
npm run build
# Output in dist/ — serve with any static file server
```
