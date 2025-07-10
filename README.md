# Nursing Wisdom for Newborns

Professional website for Nursing Wisdom for Newborns - Expert in-home newborn care service bridging hospital discharge to confident parenthood.

## 🚀 Modern Tech Stack

- **TypeScript** - Type-safe JavaScript with enhanced developer experience
- **Vite** - Fast build tool and development server with hot module replacement
- **Modern CSS** - Modular CSS with custom properties and component-based architecture
- **Static HTML** - Framework-free for optimal performance and SEO

## 📁 Project Structure

```
nursing-wisdom-for-newborns/
├── src/
│   ├── styles/
│   │   ├── variables.css      # Design system tokens
│   │   ├── base.css          # Reset and base styles
│   │   ├── navigation.css    # Navigation component
│   │   ├── hero.css          # Hero section
│   │   ├── sections.css      # Problem/solution and services
│   │   ├── differences.css   # Why we're different section
│   │   ├── pricing.css       # Pricing and premie packages
│   │   ├── about.css         # About section with credentials
│   │   ├── service-area.css  # Service areas section
│   │   ├── contact.css       # Contact and form section
│   │   ├── footer.css        # Footer section
│   │   └── main.css          # Main stylesheet (imports all)
│   ├── utils/
│   │   ├── navigation.ts     # Navigation management
│   │   ├── contact-form.ts   # Form handling and validation
│   │   ├── animations.ts     # Scroll animations and effects
│   │   └── validation.ts     # Form validation utilities
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   └── main.ts               # Application entry point
├── dist/                     # Built files (generated)
├── index.html               # Main HTML file
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Improvements Over Previous Version

1. **Reduced CSS Size**: From 1500+ lines to ~300 lines per module
2. **Type Safety**: Full TypeScript coverage with type definitions
3. **Modular Architecture**: Organized into logical modules and utilities
4. **Modern Tooling**: Vite for fast development and optimized builds
5. **Better Maintainability**: Clear separation of concerns and reusable utilities

## 🎨 Design System

### Colors
- Primary: `#2D2D2D` (dark text)
- Secondary: `#6B6B6B` (body text)
- Accent Rose: `#A67C7C` (brand color)
- Accent Sage: `#7A9B7A` (secondary brand)
- Backgrounds: `#FEFEFE`, `#F9F7F5`, `#F5F3F1`

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Decorative: Cormorant Garamond

### Spacing Scale
- Uses consistent spacing scale from `--space-1` (0.5rem) to `--space-12` (6rem)

## 📱 Features

### 🏥 Professional Services
- **Nurse-Led Care**: Licensed RNs with labor and delivery expertise
- **72-Hour Guarantee**: Arrival within 6 hours of discharge
- **Comprehensive Support**: Feeding, swaddling, sleep setup, and recovery guidance
- **Hybrid Support**: In-person visits plus 30 days of secure messaging

### 🌐 Website Features
- **Responsive Design**: Mobile-first approach with full desktop support
- **Premium Aesthetic**: Soft, organic design with elegant typography
- **Contact Forms**: TypeScript-powered form validation
- **Service Packages**: Clear pricing tiers for different needs
- **Service Areas**: Coverage for Orange County, Michigan, and Salt Lake City

### ⚡ Technical Features
- **Fast Loading**: Optimized CSS and JavaScript bundles
- **Accessibility**: WCAG compliant with proper focus states
- **SEO Optimized**: Semantic HTML and meta tags
- **Type Safety**: Full TypeScript coverage prevents runtime errors

## 🚢 Deployment

### Build Process
```bash
npm run build
```

### Static Hosting Options
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your Git repository
- **AWS S3**: Upload `dist` folder contents
- **GitHub Pages**: Deploy from `dist` folder

### Environment Variables
No environment variables required for basic functionality.

## 🧪 Testing

The project includes TypeScript type checking:
```bash
npm run type-check
```

For production builds, ensure all TypeScript errors are resolved.

## 📋 Service Packages

### Essential 24 - $1,300
- 6-hour labor attendance focusing on golden hour
- Baby's first latch support
- In-hospital lactation assistance (daily)
- First-night 4-hour in-home visit

### Settled 72 - $2,200 (Most Popular)
- Everything in Essential 24
- Two additional 4-hour day shifts
- 7 daily micro-check-ins
- Written transition plan

### Signature First-Month - $3,000
- Everything in Settled 72
- Unlimited texting for questions
- 3 visits in first week
- Full lactation consultation

### Monthly Support - $1,000/month
- Weekly calls as needed
- Full texting support
- In-home visits as required
- 4-month follow-up included

## 🔧 Customization

### Adding New Sections
1. Create component CSS in `src/styles/`
2. Add TypeScript utilities in `src/utils/`
3. Import in `src/styles/main.css` and `src/main.ts`

### Modifying Design Tokens
Update variables in `src/styles/variables.css` for consistent changes across the site.

### Adding New Features
1. Create TypeScript modules in `src/utils/`
2. Define types in `src/types/index.ts`
3. Initialize in `src/main.ts`

## 📞 Support

### Development Support
- Review TypeScript errors: `npm run type-check`
- Check browser console for runtime errors
- Validate HTML and CSS for standards compliance

### Business Contact
- **Email**: hello@nursingwisdomfornewborns.com
- **Phone**: 949-933-3432
- **Response Time**: Within 4 hours for current clients

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Note**: This is a professional medical service website. All content should be reviewed by licensed healthcare professionals before deployment.