# Analytics Pro - AI-Powered Dashboard

A production-ready, responsive analytics dashboard built with React, TypeScript, and TailwindCSS. Features AI-powered insights, real-time data visualization, and comprehensive business metrics tracking.

![Analytics Dashboard](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop&crop=center)

## 🚀 Features

### Core Dashboard Components
- **KPI Cards**: Revenue, active users, growth rate, and session metrics
- **Interactive Charts**: Line charts, bar charts, and pie charts using Recharts
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Data**: Live updates and activity monitoring

### AI-Powered Analytics
- **Natural Language Queries**: Ask questions like "Top campaigns this month?"
- **Intelligent Insights**: AI-generated responses based on your data
- **Quick Prompts**: Pre-built queries for common analytics questions
- **Confidence Scoring**: AI response reliability indicators

### Modern UI/UX
- **Dark Theme**: Professional dark mode design
- **Smooth Animations**: Micro-interactions and transitions
- **Gradient Accents**: Modern visual effects and color schemes
- **Accessible Design**: WCAG compliant components

### Navigation & Layout
- **Collapsible Sidebar**: Space-efficient navigation
- **Top Navigation**: Search, notifications, and user profile
- **Multiple Pages**: Overview, Analytics, Revenue, Users, Campaigns
- **Route Management**: React Router with proper navigation

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS + Custom Design System
- **Charts**: Recharts for data visualization
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development
- **Deployment**: Optimized for Vercel

## 📦 Project Structure

```
src/
├── components/
│   ├── dashboard/         # KPI Cards, Chart Cards
│   ├── charts/           # Reusable chart components
│   ├── layout/           # Sidebar, Navbar, Layout
│   ├── ai/              # AI prompt box component
│   └── ui/              # shadcn/ui components
├── data/
│   └── mockData.ts      # Sample analytics data
├── types/
│   └── dashboard.ts     # TypeScript interfaces
├── pages/               # Route components
└── hooks/               # Custom React hooks
```

## 🎨 Design System

The dashboard uses a comprehensive design system with:

- **Semantic Color Tokens**: HSL-based color system
- **Custom Gradients**: Brand-specific gradient combinations
- **Typography Scale**: Consistent font sizing and weights
- **Shadow System**: Layered shadow effects
- **Animation Library**: Smooth transitions and micro-interactions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd analytics-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)

This project is optimized for Vercel deployment:

1. **Push to GitHub**: Ensure your code is in a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Deploy**: Vercel will automatically detect Vite and deploy

Or use Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Manual Deployment

For other platforms:

1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure your server to serve `index.html` for all routes

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add any API keys or configuration here
VITE_API_URL=https://your-api-url.com
```

### Customization

#### Design System
Modify `src/index.css` to customize:
- Color scheme
- Gradients
- Shadows
- Animations

#### Data Sources
Replace mock data in `src/data/mockData.ts` with real API calls.

#### AI Integration
Enhance `src/components/ai/PromptBox.tsx` to connect with:
- OpenAI GPT API
- Google Gemini
- Custom analytics API

## 📊 Sample Data

The dashboard includes comprehensive mock data:

- **Revenue**: Monthly revenue trends
- **Users**: Growth, retention, demographics
- **Campaigns**: Performance metrics, CTR, conversions
- **Traffic**: Sources, device usage, page views
- **Real-time**: Live activity simulation

## 🤖 AI Assistant Features

The AI prompt box supports:

- **Campaign Analysis**: "What are our top performing campaigns?"
- **Revenue Insights**: "How is our revenue trending?"
- **Traffic Analysis**: "Where is most traffic coming from?"
- **User Metrics**: "How are our user metrics performing?"

## 🎯 AI Development Tips

### Using GitHub Copilot
- **Data Generation**: Let Copilot generate realistic mock data
- **Chart Configurations**: Auto-complete chart props and options
- **Component Structure**: Generate component boilerplate

### Using ChatGPT
- **Mock Data**: "Generate realistic analytics data for a SaaS dashboard"
- **Chart Types**: "What's the best chart type for showing user retention?"
- **Color Schemes**: "Suggest a professional color palette for a dark analytics dashboard"

### Using Claude/Other AI
- **Code Review**: Paste components for optimization suggestions
- **Documentation**: Generate JSDoc comments for functions
- **Testing**: Create test cases for components

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

Key responsive features:
- Collapsible sidebar on mobile
- Stacked charts on smaller screens
- Touch-friendly interactive elements
- Optimized typography scaling

## 🔍 Performance Optimizations

- **Code Splitting**: Route-based lazy loading
- **Tree Shaking**: Unused code elimination
- **Image Optimization**: WebP format with fallbacks
- **Caching**: Proper cache headers in Vercel config
- **Bundle Analysis**: Vite rollup optimizations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Recharts](https://recharts.org/) for chart components
- [Lucide React](https://lucide.dev/) for icons
- [TailwindCSS](https://tailwindcss.com/) for styling

---

Built with ❤️ for modern analytics needs. Perfect for portfolios, client projects, and production applications.
