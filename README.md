# Dual Portal Website

A modern web application with two distinct portals: an admin portal for content management and a public portal for content viewing.

## Features

### Admin Portal (`/admin`)
- ✅ Create new posts with title, author, and content
- ✅ View and manage all existing posts
- ✅ Delete posts with confirmation
- ✅ Real-time form validation
- ✅ Responsive design

### Public Portal (`/posts`)
- ✅ Browse all published posts in a card grid layout
- ✅ Search functionality (title, content, author)
- ✅ Click to read full post content
- ✅ Responsive design optimized for reading
- ✅ Clean, modern UI

### Technical Features
- ✅ Built with Next.js 14 and TypeScript
- ✅ Styled with Tailwind CSS
- ✅ Local storage for data persistence
- ✅ Fully responsive design
- ✅ Modern icons with Lucide React
- ✅ Optimized for Vercel deployment

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd dual-portal-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── admin/          # Admin portal page
│   ├── posts/          # Public portal page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing page
├── lib/
│   └── posts.ts        # Post management utilities
└── types/
    └── post.ts         # TypeScript interfaces
```

## Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Method 2: Git Integration

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Method 3: Drag & Drop

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `.next` folder to [vercel.com/new](https://vercel.com/new)

## Environment Variables

No environment variables are required for basic functionality. Data is stored in browser localStorage.

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Storage**: Browser localStorage
- **Deployment**: Vercel

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
