# User Directory

A responsive User Directory application built for the Frontend Developer Internship assessment using Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Project Specifications

### Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **API**: DummyJSON Users API (`https://dummyjson.com/users`)

---

## Pages

### 1. Home Page (`/`)
- Displays users fetched from DummyJSON API with options to switch between Card Grid view and Table view.
- Selected view option is saved in `localStorage` and preserved across page reloads.
- Responsive grid layout: 1 column on mobile screens, 2 columns on tablet screens, and 3 columns on desktop screens.
- Includes view-matched loading skeletons and error fallback handling.

### 2. User Details Page (`/users/[id]`)
- Dynamic route displaying detailed profile information for a selected user.
- Displays user contact details, company position, address, and metadata.
- Includes a navigation button to return to the directory homepage.

---

## Features Implemented

1. **API Data Fetching**: Fetches user data from DummyJSON API with full error handling and user feedback.
2. **Cards & Table View**: Allows toggling between visual cards and tabular data formats.
3. **User Navigation**: Clicking any user card or table row navigates to their details page.
4. **Loading & Error States**: Implements view-specific skeleton loaders and error state UI with retry capability.
5. **Responsive Layout**: Designed for mobile, tablet, and desktop viewports.

---

## Project Structure

```text
user-directory/
├── src/
│   ├── app/
│   │   ├── globals.css         # Global CSS & Tailwind configuration
│   │   ├── layout.tsx          # Root layout and providers
│   │   ├── page.tsx            # Home page (Cards & Table view)
│   │   └── users/
│   │       └── [id]/
│   │           └── page.tsx    # User details page
│   ├── components/
│   │   ├── ui/                 # Reusable shadcn/ui components
│   │   ├── empty-state.tsx     # Empty state component
│   │   ├── error-state.tsx     # Error state component
│   │   ├── loading-state.tsx   # Loading skeleton component
│   │   ├── user-card.tsx       # User card component
│   │   ├── user-list.tsx       # User cards grid layout
│   │   ├── user-table.tsx      # User table layout
│   │   └── view-toggle.tsx     # View toggle control
│   ├── lib/
│   │   ├── api.ts              # API service module
│   │   └── utils.ts            # Utility functions
│   └── types/
│       └── user.ts             # TypeScript type definitions
├── components.json             # shadcn/ui configuration
├── package.json                # Project dependencies and scripts
└── tsconfig.json               # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, or yarn

### Installation & Execution

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

4. **Build for production**:
   ```bash
   npm run build
   ```
