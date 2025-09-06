# Lumina Find - AI-Powered Product Search

An intelligent product search application powered by Gemini AI that understands natural language queries and finds relevant products across e-commerce platforms.

## Features

- **AI-Powered Search**: Uses Gemini AI to interpret user queries and understand intent
- **Smart Product Discovery**: Finds products based on descriptions, even with partial or vague inputs
- **Beautiful UI**: Clean, dark-themed interface with electric blue accents
- **Real-time Results**: Fast search with loading states and animations
- **Product Details**: Comprehensive product information with ratings, prices, and availability

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **AI**: Google Gemini AI, Genkit
- **UI**: Lucide React icons, custom animations
- **Styling**: Inter font, dark theme, electric blue color scheme

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Gemini AI API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lumina-find
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Get your Gemini API key:
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Add it to your `.env.local` file

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Search**: Enter your product query in natural language
   - "wireless headphones under $200"
   - "noise canceling earbuds for gaming"
   - "bluetooth speakers for outdoor use"

2. **AI Analysis**: The system analyzes your query to understand:
   - Intent and keywords
   - Product category
   - Price range preferences
   - Confidence level

3. **Results**: View relevant products with:
   - Product images and descriptions
   - Prices and ratings
   - Direct links to purchase
   - Related search suggestions

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ProductCard.tsx # Individual product display
│   ├── ProductGrid.tsx # Product grid layout
│   ├── SearchInput.tsx # Search input component
│   └── SearchResults.tsx # Results display
├── lib/               # Utility libraries
│   ├── ai.ts          # AI search engine
│   └── inventory-api.ts # Product API integration
└── types/             # TypeScript type definitions
    └── index.ts       # Shared types
```

## Customization

### Colors
The app uses a custom color scheme defined in `tailwind.config.js`:
- **Dark Theme**: Various shades of dark gray/blue
- **Electric Blue**: Primary accent color for highlights and CTAs
- **Inter Font**: Modern, clean typography

### AI Integration
The AI search engine in `src/lib/ai.ts` can be customized to:
- Use different AI models
- Adjust analysis parameters
- Add custom prompt templates

### Product Sources
The inventory API in `src/lib/inventory-api.ts` can be extended to:
- Connect to real e-commerce APIs
- Add more product sources
- Implement advanced filtering

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or issues, please open a GitHub issue or contact the development team.
