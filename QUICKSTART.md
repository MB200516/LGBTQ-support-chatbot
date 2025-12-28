# ⚡ Quick Start Guide

Get PrideChat running in 5 minutes!

## 🎯 Prerequisites

- Node.js 18 or higher ([Download here](https://nodejs.org))
- A free Groq API key ([Get one here](https://console.groq.com))

## 🚀 Installation

### Option 1: Automated Setup (Recommended)

**On Mac/Linux:**
```bash
./setup.sh
```

**On Windows:**
```bash
setup.bat
```

### Option 2: Manual Setup

**Step 1: Install Server Dependencies**
```bash
cd server
npm install
```

**Step 2: Install Client Dependencies**
```bash
cd ../client
npm install
```

**Step 3: Configure Environment**
```bash
cd ../server
cp .env.example .env
# Edit .env and add your GROQ_API_KEY
```

## 🔑 Getting Your Groq API Key

1. Go to https://console.groq.com
2. Sign up (it's free!)
3. Click "API Keys" in the sidebar
4. Click "Create API Key"
5. Copy the key
6. Paste it in `server/.env`:
   ```
   GROQ_API_KEY=gsk_your_actual_key_here
   ```

## 🏃 Running the App

You need **TWO terminal windows**:

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
✅ Server running on http://localhost:5000

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```
✅ App running on http://localhost:3000

## 🎨 First Time Usage

1. Open http://localhost:3000 in your browser
2. You'll see the welcome message
3. Try asking: "What does LGBTQ+ stand for?"
4. Switch between Pride 🏳️‍🌈 and Trans 🏳️‍⚧️ themes using the buttons

## 🆘 Troubleshooting

### "Cannot connect to server"
- Make sure the server terminal is running
- Check that it says "Server running on port 5000"

### "API authentication failed"
- Double-check your GROQ_API_KEY in server/.env
- Make sure there are no extra spaces or quotes

### Port already in use
- Kill the process: `lsof -ti:5000 | xargs kill -9` (Mac/Linux)
- Or change PORT in server/.env: `PORT=5001`

### Blank page / Nothing loads
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check browser console (F12) for errors

## 📚 What to Try

Example questions to ask the chatbot:

- "What does transgender mean?"
- "How do I support someone who is coming out?"
- "What are some LGBTQ+ resources?"
- "Tell me about pride month"
- "What's the difference between gender and sexuality?"

## 🎯 Next Steps

- Read the full [README.md](README.md) for detailed features
- Check out [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) to deploy online
- Customize the colors and themes
- Add your own questions and resources

## 💜 Need Help?

If you're stuck:
1. Check the error message in the terminal
2. Make sure Node.js version is 18+ (`node --version`)
3. Try deleting node_modules and reinstalling:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

Enjoy building something meaningful! 🏳️‍🌈✨
