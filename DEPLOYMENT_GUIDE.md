# 🚀 Deployment Guide

## Quick Deployment Options

### 🌟 Recommended: Vercel (Frontend) + Render (Backend)

This is the easiest and most reliable free option.

---

## Option 1: Vercel + Render (Recommended)

### Part A: Deploy Backend to Render

1. **Create a Render account** at https://render.com

2. **Create a new Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Or use "Deploy from Git URL"

3. **Configure the service:**
   - Name: `pridechat-api`
   - Region: Choose closest to your users
   - Branch: `main`
   - Root Directory: `server`
   - Runtime: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`

4. **Add Environment Variable:**
   - Key: `GROQ_API_KEY`
   - Value: Your Groq API key from https://console.groq.com

5. **Deploy!**
   - Click "Create Web Service"
   - Wait 2-3 minutes for deployment
   - Copy the URL (e.g., `https://pridechat-api.onrender.com`)

### Part B: Deploy Frontend to Vercel

1. **Create a Vercel account** at https://vercel.com

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Or drag & drop the project folder

3. **Configure Build Settings:**
   - Framework Preset: `Vite`
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Add Environment Variable:**
   - Key: `VITE_API_URL`
   - Value: `https://your-render-url.onrender.com/api`
   - (Use the URL from Render, add `/api` at the end)

5. **Deploy!**
   - Click "Deploy"
   - Wait 1-2 minutes
   - Your app is live! 🎉

---

## Option 2: Railway (Full Stack)

Railway is great for deploying both frontend and backend together.

1. **Create Railway account** at https://railway.app

2. **Create New Project**
   - "New Project" → "Deploy from GitHub repo"
   - Select your repository

3. **Add Backend Service**
   - Click "New Service" → "GitHub Repo"
   - Root Directory: `server`
   - Add environment variable: `GROQ_API_KEY`
   - Railway will auto-detect Node.js
   - Click "Deploy"

4. **Generate Domain for Backend**
   - Click on the backend service
   - Settings → "Generate Domain"
   - Copy the domain URL

5. **Add Frontend Service**
   - Click "New Service" → "GitHub Repo" (same repo)
   - Root Directory: `client`
   - Add environment variable:
     - `VITE_API_URL`: `https://your-backend-url.railway.app/api`
   - Click "Deploy"

6. **Generate Domain for Frontend**
   - Click on the frontend service
   - Settings → "Generate Domain"
   - Visit the frontend URL - done! 🎉

---

## Option 3: Netlify (Frontend) + Render (Backend)

### Backend: Follow "Part A" from Option 1 (Render)

### Frontend: Deploy to Netlify

1. **Create Netlify account** at https://netlify.com

2. **Deploy via Drag & Drop**
   - Build locally first:
     ```bash
     cd client
     npm run build
     ```
   - Drag the `client/dist` folder to Netlify

3. **OR Deploy via Git**
   - "Add new site" → "Import from Git"
   - Connect repository
   - Configure:
     - Base directory: `client`
     - Build command: `npm run build`
     - Publish directory: `client/dist`

4. **Add Environment Variable**
   - Site settings → Environment variables
   - Add: `VITE_API_URL` = `https://your-render-url.onrender.com/api`

5. **Redeploy**
   - Trigger a new deploy to apply env vars
   - Done! 🎉

---

## Option 4: Self-Hosted VPS (DigitalOcean, AWS, etc.)

For more control and better performance:

### Prerequisites
- VPS with Ubuntu 22.04+
- Domain name (optional)
- SSH access

### Steps

1. **SSH into your server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Clone your project**
   ```bash
   git clone https://github.com/yourusername/lgbtq-chatbot.git
   cd lgbtq-chatbot
   ```

4. **Set up backend**
   ```bash
   cd server
   npm install
   nano .env  # Add GROQ_API_KEY
   pm2 start server.js --name pridechat-api
   pm2 save
   pm2 startup
   ```

5. **Set up frontend**
   ```bash
   cd ../client
   npm install
   
   # Create .env file
   echo "VITE_API_URL=http://your-server-ip:5000/api" > .env
   
   npm run build
   sudo npm install -g serve
   pm2 start "serve -s dist -l 3000" --name pridechat-client
   pm2 save
   ```

6. **Set up Nginx (optional, for custom domain)**
   ```bash
   sudo apt install nginx
   sudo nano /etc/nginx/sites-available/pridechat
   ```
   
   Add this configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }

       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/pridechat /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

7. **Set up SSL with Let's Encrypt (optional)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🔧 Post-Deployment Checklist

- [ ] Test all chat functionality
- [ ] Try both Pride and Trans themes
- [ ] Test on mobile devices
- [ ] Check API key is working
- [ ] Monitor error logs
- [ ] Set up automatic deployments (if using Git-based platforms)

---

## 🔍 Troubleshooting

### "Failed to connect to server"
- Check if backend is running
- Verify `VITE_API_URL` is correct
- Check CORS settings in `server/server.js`

### "API authentication failed"
- Verify `GROQ_API_KEY` in backend environment variables
- Get new key from https://console.groq.com

### Build errors
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Check Node.js version: `node --version` (should be 18+)

### Slow responses
- Groq free tier has rate limits
- Consider caching responses
- Or upgrade to paid tier

---

## 📊 Monitoring & Analytics

### Free monitoring tools:
- **Render**: Built-in logs and metrics
- **Vercel**: Analytics dashboard
- **UptimeRobot**: Monitor uptime (free)
- **Sentry**: Error tracking

---

## 💰 Cost Estimates

### Free Tier (Recommended for starting)
- Groq API: Free (rate limited)
- Vercel: Free (hobby plan)
- Render: Free (with 750 hours/month)
- **Total: $0/month**

### Production Scale
- Groq API: Pay-per-use (very cheap)
- Vercel Pro: $20/month
- Render Paid: $7+/month
- **Total: ~$30-50/month for serious traffic**

---

## 🎯 Performance Tips

1. **Enable caching** for repeated questions
2. **Use CDN** for static assets
3. **Compress responses** with gzip
4. **Add rate limiting** to prevent abuse
5. **Monitor API usage** to optimize costs

---

Need help? Open an issue or reach out to the community! 💜
