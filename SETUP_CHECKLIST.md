# ✅ Complete Setup Checklist

Use this checklist to ensure everything is configured correctly!

---

## 📋 Pre-Installation

- [ ] **Node.js installed** (v18 or higher)
  - Check: `node --version`
  - Download: https://nodejs.org

- [ ] **Git installed** (optional, for version control)
  - Check: `git --version`
  - Download: https://git-scm.com

- [ ] **Code editor ready** (VS Code recommended)
  - Download: https://code.visualstudio.com

---

## 🔑 API Key Setup

- [ ] **Created Groq account**
  - Go to: https://console.groq.com
  - Sign up (free)

- [ ] **Generated API key**
  - Click "API Keys"
  - Create new key
  - Copy the key (starts with `gsk_`)

- [ ] **Saved API key safely**
  - Don't share it
  - Don't commit to Git

---

## 📦 Project Installation

### Option 1: Automated Setup

- [ ] **Run setup script**
  - Mac/Linux: `./setup.sh`
  - Windows: `setup.bat`

- [ ] **Script completed successfully**
  - Server dependencies installed ✅
  - Client dependencies installed ✅
  - .env file created ✅

### Option 2: Manual Setup

- [ ] **Installed server dependencies**
  ```bash
  cd server
  npm install
  ```

- [ ] **Installed client dependencies**
  ```bash
  cd client
  npm install
  ```

- [ ] **Created .env file**
  ```bash
  cd server
  cp .env.example .env
  ```

---

## ⚙️ Configuration

- [ ] **Added Groq API key to server/.env**
  ```
  GROQ_API_KEY=gsk_your_actual_key_here
  ```

- [ ] **Verified .env format**
  - No extra spaces
  - No quotes around the key
  - File is in `server/` directory

- [ ] **Checked port settings** (optional)
  - Default port 5000 is fine
  - Change if needed in server/.env

---

## 🏃 Running the Application

- [ ] **Started backend server**
  ```bash
  cd server
  npm run dev
  ```
  - Should see: "🌈 Server running on port 5000"

- [ ] **Started frontend client** (in new terminal)
  ```bash
  cd client
  npm run dev
  ```
  - Should see: "Local: http://localhost:3000"

- [ ] **Opened browser to http://localhost:3000**

- [ ] **Saw welcome message from bot**
  - "Hi there! 🌈 I'm here to provide support..."

---

## 🧪 Testing

- [ ] **Sent test message**
  - Try: "What does LGBTQ+ stand for?"

- [ ] **Received bot response**
  - Response appeared within 2-5 seconds
  - Response is relevant and supportive

- [ ] **Tested theme toggle**
  - Clicked Pride flag button 🏳️‍🌈
  - Clicked Trans flag button 🏳️‍⚧️
  - Colors changed appropriately

- [ ] **Tested on mobile** (optional)
  - Open on phone browser
  - Layout is responsive
  - All features work

---

## 🎨 Visual Verification

- [ ] **Header displays correctly**
  - Logo visible
  - "PrideChat" title visible
  - Tagline visible
  - Theme buttons visible

- [ ] **Chat area displays correctly**
  - Messages scroll properly
  - User messages on right (purple gradient)
  - Bot messages on left (white with border)
  - Timestamps visible

- [ ] **Input area works correctly**
  - Can type message
  - Send button enabled when text present
  - Enter key sends message
  - Input clears after sending

- [ ] **Animations working**
  - Messages pop in with animation
  - Typing indicator bounces
  - Background bubbles float
  - Hover effects on buttons

---

## 🔍 Troubleshooting Checklist

If something doesn't work, check:

### Server Issues

- [ ] **Server terminal shows no errors**
- [ ] **Port 5000 is not in use**
  ```bash
  # Mac/Linux
  lsof -i :5000
  
  # Windows
  netstat -ano | findstr :5000
  ```
- [ ] **GROQ_API_KEY is correct in .env**
- [ ] **No firewall blocking port 5000**

### Client Issues

- [ ] **Client terminal shows no errors**
- [ ] **Port 3000 is not in use**
- [ ] **Browser console shows no errors** (F12)
- [ ] **API calls reaching server**
  - Check Network tab in DevTools

### API Issues

- [ ] **Groq API key is valid**
  - Test at: https://console.groq.com
- [ ] **Not hitting rate limits**
  - Free tier: ~30 requests/minute
- [ ] **Internet connection stable**

---

## 🚀 Deployment Preparation

Before deploying to production:

- [ ] **Code tested thoroughly locally**
- [ ] **All features working**
- [ ] **No console errors**
- [ ] **Environment variables documented**
- [ ] **README.md reviewed**
- [ ] **Chose deployment platform**
  - Vercel + Render (recommended)
  - Railway
  - Netlify + Render
  - Self-hosted VPS

- [ ] **Read DEPLOYMENT_GUIDE.md**

---

## 📚 Documentation Review

- [ ] **Read README.md**
  - Understand features
  - Know project structure

- [ ] **Read QUICKSTART.md**
  - Familiar with setup steps

- [ ] **Skimmed DEPLOYMENT_GUIDE.md**
  - Know deployment options

- [ ] **Reviewed PROJECT_STRUCTURE.md**
  - Understand file organization

- [ ] **Checked API_DOCUMENTATION.md**
  - Know API endpoints

---

## 🎯 Next Steps

After completing setup:

### Immediate Actions

- [ ] **Customize colors** (optional)
  - Edit `client/src/index.css`

- [ ] **Adjust AI prompt** (optional)
  - Edit `server/services/llmService.js`

- [ ] **Test extensively**
  - Try various questions
  - Test edge cases

### Short Term

- [ ] **Deploy to production**
  - Follow DEPLOYMENT_GUIDE.md

- [ ] **Share with friends**
  - Get feedback
  - Make improvements

- [ ] **Monitor usage**
  - Check API limits
  - Watch for errors

### Long Term

- [ ] **Add new features**
  - User accounts
  - Chat history
  - More themes

- [ ] **Improve AI responses**
  - Add more context
  - Fine-tune prompts

- [ ] **Scale infrastructure**
  - Upgrade hosting if needed
  - Add caching

---

## ✨ Success Criteria

You're all set when:

✅ Both servers running without errors  
✅ Can send and receive messages  
✅ Themes switch correctly  
✅ Animations are smooth  
✅ Mobile responsive works  
✅ No console errors  
✅ Bot provides helpful responses  

---

## 🆘 Quick Help

### Common Commands

```bash
# Start server
cd server && npm run dev

# Start client
cd client && npm run dev

# Install dependencies
npm install

# Clear cache and reinstall
rm -rf node_modules package-lock.json && npm install

# Check Node version
node --version

# Kill process on port
# Mac/Linux
lsof -ti:5000 | xargs kill -9

# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Quick Fixes

**Problem:** "Cannot find module"  
**Fix:** `npm install`

**Problem:** "Port already in use"  
**Fix:** Kill the process or change port

**Problem:** "API authentication failed"  
**Fix:** Check GROQ_API_KEY in server/.env

**Problem:** Blank page  
**Fix:** Clear browser cache (Ctrl+Shift+R)

---

## 💡 Pro Tips

1. Keep both terminal windows visible
2. Use VS Code's integrated terminal
3. Enable auto-save in your editor
4. Use browser DevTools (F12) for debugging
5. Check server logs for detailed errors
6. Test API with curl/Postman first
7. Read error messages carefully
8. Don't commit .env files to Git

---

## 🎉 Congratulations!

If you've checked all the boxes, you're ready to:
- 🚀 Deploy to production
- 🎨 Customize the design
- 🤖 Improve the AI
- 🌍 Share with the world

**You've built something meaningful! 💜🌈**

---

## 📞 Support Resources

### Technical Help
- Review documentation files
- Check GitHub issues
- Search Stack Overflow
- Ask in developer communities

### LGBTQ+ Support
- **Trevor Project**: 1-866-488-7386
- **Trans Lifeline**: 1-877-565-8860
- **LGBTQ+ National Hotline**: 1-888-843-4564

---

**Remember:** You're not just building an app, you're creating a safe space and spreading awareness. Every line of code matters! 🏳️‍🌈✨

---

**Checklist Version:** 1.0  
**Last Updated:** December 2024  
**Status:** Complete & Production Ready ✅
