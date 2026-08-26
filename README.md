# User Directory Application

A modern, responsive User Directory application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Shadcn UI**.

## 🚀 Features

- **Responsive Grid & Table Views**: Switch seamlessly between a card grid view and a tabular directory view.
  - **Cards Layout**: 1 column on mobile, 3 columns on tablet, and 4 columns on large screens.
  - **Table Layout**: Fully scrollable horizontal layout with prioritized columns for small devices.
- **Detailed User Pages**: Dynamic routing (`/users/[id]`) displaying complete profile details including contact info, address, company role, and university.
- **Error & Empty Handling**: Includes user-friendly loading skeletons, empty state displays, and error fallback UI with retry capability.
- **Clean Accessibility & Styling**: Styled using Tailwind CSS v4 with clean, modern aesthetics without distracting visual clutter.

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: Custom Shadcn UI components built with Base UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.si/)
- **API**: [DummyJSON Users API](https://dummyjson.com/docs/users)

## 📁 Project Structure

```text
src/
├── app/
│   ├── layout.tsx         # Root layout with providers & fonts
│   ├── page.tsx           # Directory home page (Grid & Table views)
│   ├── globals.css        # Global CSS & Tailwind configuration
│   └── users/
│       └── [id]/
│           └── page.tsx   # Detailed user profile page
├── components/
│   ├── ui/                # Reusable UI primitives (Avatar, Button, Card, Table, Badge, Alert)
│   ├── user-card.tsx      # User profile card component
│   ├── user-table.tsx     # Responsive user table component
│   ├── view-toggle.tsx    # Toggle between grid and table view
│   ├── error-state.tsx   # Error state component with retry action
│   ├── loading-state.tsx # Loading feedback component
│   └── empty-state.tsx   # Empty results state component
├── lib/
│   ├── api.ts             # API service functions for fetching users
│   └── utils.ts           # Class merging helper (clsx + tailwind-merge)
└── types/
    └── user.ts            # TypeScript interfaces for user data & API responses
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, pnpm, or yarn

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd user-directory
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

To build the production bundle and verify type-checking:

```bash
npm run build
```

To start the production server:

```bash
npm run start
```
