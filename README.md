# 🏳️‍🌈 PrideChat - LGBTQ+ Awareness Chatbot

A beautiful, supportive chatbot focused on LGBTQ+ awareness, trans rights, and community support. Built with React and Express, powered by free Groq AI (Llama 3.1).

## ✨ Features

- 🎨 **Beautiful, bubbly UI** with pride-themed design and smooth animations
- 🤖 **AI-powered responses** using Groq's free Llama 3.1 model
- 🏳️‍🌈 **Pride & Trans themes** - switch between pride flag and trans flag color schemes
- 💜 **Safe space** - compassionate, knowledgeable responses about LGBTQ+ topics
- 📱 **Fully responsive** - works on desktop, tablet, and mobile
- ⚡ **Fast & efficient** - Vite for lightning-fast development

## 🏗️ Project Structure

```
lgbtq-chatbot/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── ChatInput.jsx
│   │   │   ├── TypingIndicator.jsx
│   │   │   └── FloatingBubbles.jsx
│   │   ├── services/       # API service layer
│   │   │   └── api.js
│   │   ├── App.jsx         # Main app component
│   │   ├── App.css
│   │   ├── main.jsx        # App entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── server/                 # Express backend
    ├── controllers/        # Request handlers
    │   └── chatController.js
    ├── services/          # Business logic
    │   └── llmService.js
    ├── routes/            # API routes
    │   └── chat.js
    ├── middleware/        # Custom middleware
    │   └── errorHandler.js
    ├── server.js          # Server entry point
    ├── .env.example       # Environment variables template
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- Free Groq API key (get one at https://console.groq.com)

### Installation

1. **Clone or download the project**

2. **Set up the server**

```bash
cd server
npm install

# Create .env file
cp .env.example .env

# Edit .env and add your Groq API key
# GROQ_API_KEY=your_actual_key_here
```

3. **Set up the client**

```bash
cd ../client
npm install
```

### Getting Your Free Groq API Key

1. Go to https://console.groq.com
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key and paste it in `server/.env`

## 🎮 Running the Application

### Development Mode

You need two terminal windows:

**Terminal 1 - Start the server:**
```bash
cd server
npm run dev
```
Server will run on http://localhost:5000

**Terminal 2 - Start the client:**
```bash
cd client
npm run dev
```
Client will run on http://localhost:3000

Open http://localhost:3000 in your browser and start chatting! 🎉

## 🏗️ Building for Production

### Build the client

```bash
cd client
npm run build
```

This creates an optimized build in `client/dist/`

### Production server setup

```bash
cd server
NODE_ENV=production npm start
```

## 📦 Deployment Options

### Option 1: Vercel (Frontend) + Render (Backend)

**Frontend (Vercel):**
1. Push code to GitHub
2. Import project to Vercel
3. Set root directory to `client`
4. Set build command: `npm run build`
5. Set environment variable: `VITE_API_URL=https://your-backend-url.com/api`

**Backend (Render):**
1. Create new Web Service
2. Connect GitHub repository
3. Set root directory to `server`
4. Set build command: `npm install`
5. Set start command: `npm start`
6. Add environment variable: `GROQ_API_KEY`

### Option 2: Railway

1. Push code to GitHub
2. Create new project on Railway
3. Add two services: one for client, one for server
4. Configure environment variables
5. Deploy!

### Option 3: Netlify (Frontend) + Railway (Backend)

Similar to Option 1, but using Netlify for the frontend.

## 🎨 Customization

### Changing Colors

Edit `client/src/index.css` - all colors are defined as CSS variables:

```css
:root {
  --pride-red: #E40303;
  --pride-orange: #FF8C00;
  /* ... customize as needed */
}
```

### Changing AI Behavior

Edit the `SYSTEM_PROMPT` in `server/services/llmService.js` to adjust the chatbot's personality and knowledge focus.

### Using Different LLM Models

The project uses Groq's `llama-3.1-70b-versatile` model. You can change this in `server/services/llmService.js`:

```javascript
model: 'llama-3.1-70b-versatile', // or 'mixtral-8x7b-32768', etc.
```

## 🔧 Environment Variables

### Server (.env)
```
GROQ_API_KEY=your_groq_api_key
PORT=5000
NODE_ENV=development
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

This is an open project! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests
- Share with the community

## 📝 License

MIT License - feel free to use this project for your own purposes!

## 🆘 Support & Resources

If you or someone you know needs support:

- **Trevor Project**: 1-866-488-7386 (24/7 crisis support for LGBTQ+ youth)
- **Trans Lifeline**: 1-877-565-8860 (Trans peer support hotline)
- **LGBTQ+ National Hotline**: 1-888-843-4564

## 💖 Acknowledgments

- Built with love for the LGBTQ+ community
- Powered by Groq's free AI API
- Inspired by the need for accessible, supportive resources

---

Made with 🏳️‍🌈 and 🏳️‍⚧️

For questions or support, feel free to reach out!
