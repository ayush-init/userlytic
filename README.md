# User Directory Application

A modern, high-performance, and fully responsive **User Directory Application** built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**.

---

## ✨ Features

- **🔀 Persistent View Toggle**: Seamlessly switch between a Card Grid view and a Table view. Your selection is automatically saved in `localStorage` and restored on page reloads with zero layout flicker.
- **📱 Mobile-First Responsive Design**:
  - **Cards Grid**: 1 column on mobile (`grid-cols-1`), 2 columns on tablet (`sm:grid-cols-2`), and 3 columns on desktop (`lg:grid-cols-3`).
  - **Table View**: Responsive horizontal scroll container with prioritized column visibility on smaller screens.
- **👤 Detailed Profile Page**: Dedicated profile pages (`/users/[id]`) presenting user contact details, company employment info, address details, and metadata with clean icon indicators.
- **⚡ Zero Layout Shift Skeletons**: View-aware loading skeletons matched to card and table layouts to eliminate visual jump.
- **🛡️ Error & Empty Handling**: User-friendly error alert UI with one-click retry action and toast notifications (`Sonner`).

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Shadcn UI
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.si/)
- **API Provider**: [DummyJSON Users API](https://dummyjson.com/docs/users)

---

## 📁 Project Structure

```text
user-directory/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global CSS & Tailwind configuration
│   │   ├── layout.tsx          # Root layout with fonts & providers
│   │   ├── page.tsx            # Directory home page
│   │   └── users/
│   │       └── [id]/
│   │           └── page.tsx    # User details profile page
│   ├── components/
│   │   ├── ui/                 # Reusable UI primitives (Avatar, Card, Table, etc.)
│   │   ├── empty-state.tsx     # Empty state feedback component
│   │   ├── error-state.tsx     # Error state component with retry action
│   │   ├── loading-state.tsx   # View-aware skeleton loader
│   │   ├── user-card.tsx       # User profile card component
│   │   ├── user-list.tsx       # Responsive user cards grid
│   │   ├── user-table.tsx      # Responsive user table component
│   │   └── view-toggle.tsx     # Segmented Cards/Table view toggle
│   ├── lib/
│   │   ├── api.ts              # API service functions
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── user.ts             # TypeScript interfaces
├── components.json             # Shadcn UI configuration
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18.x or later
- npm, pnpm, or yarn

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd user-directory
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Build & Production

To compile the production build and verify type safety:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```
