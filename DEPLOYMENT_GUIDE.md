# 🚀 Deploy Horse Racer AI to Your Phone

This guide will help you deploy your Horse Racer AI app online so you can access it from your phone.

## 📋 What We're Deploying

1. **Frontend (Website)** → Vercel (Free)
2. **Backend (AI Prediction API)** → Render (Free tier available)

---

## Part 1: Deploy the Prediction API (Render)

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub (recommended) or email
3. Verify your email

### Step 2: Create New Web Service
1. Click **"New +"** → **"Web Service"**
2. Choose **"Build and deploy from a Git repository"**
3. Connect your GitHub account (or use manual deploy)

### Step 3: Upload API Code to GitHub

**Option A: Using GitHub Desktop (Easiest)**
1. Download GitHub Desktop: https://desktop.github.com
2. Create new repository: "horse-racer-api"
3. Add these files from `horse-ai` folder:
   - `src/api.py`
   - `requirements.txt`
   - `render.yaml`
   - `models/` folder (entire folder with your trained model)
4. Commit and push to GitHub

**Option B: Using Git Command Line**
```powershell
cd "c:\Users\Ben Lowe\Downloads\html horse racer\horse-ai"
git init
git add src/ models/ requirements.txt render.yaml
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/horse-racer-api.git
git push -u origin main
```

### Step 4: Configure Render Service
1. Select your `horse-racer-api` repository
2. Render will auto-detect the `render.yaml` settings
3. Review the settings:
   - **Name**: `horse-racer-ai-api` (or your choice)
   - **Environment**: `Python`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn src.api:app --host 0.0.0.0 --port $PORT`
4. Click **"Create Web Service"**

### Step 5: Wait for Deployment
- First deploy takes 5-10 minutes
- Watch the logs for any errors
- Once complete, you'll get a URL like: `https://horse-racer-ai-api.onrender.com`

### Step 6: Test Your API
Copy your Render URL and test it:
```powershell
curl https://horse-racer-ai-api.onrender.com/predict -X POST -H "Content-Type: application/json" -d "@sample_race.json"
```

✅ **API is now live!** Copy your Render URL for the next step.

---

## Part 2: Deploy the Website (Vercel)

### Step 1: Create Vercel Account
1. Go to https://vercel.com
2. Sign up with GitHub (recommended)
3. No credit card required for hobby projects

### Step 2: Install Vercel CLI (Optional but easier)
```powershell
npm install -g vercel
```

### Step 3: Update API URL in Your Code

Before deploying, update the API endpoint:

1. Open `assets/js/config.js`
2. Replace `'https://your-app-name.onrender.com/predict'` with your actual Render URL from Step 1
3. Example:
```javascript
const API_CONFIG = {
  PREDICTION_API: 'https://horse-racer-ai-api.onrender.com/predict',
  BETA_SIGNUP_API: 'http://localhost:3001/api' // Or deploy this too
};
```

### Step 4: Deploy to Vercel

**Option A: Using Vercel CLI**
```powershell
cd "c:\Users\Ben Lowe\Downloads\html horse racer"
vercel
```
Follow the prompts:
- **Set up and deploy?** → `Y`
- **Which scope?** → Your account
- **Link to existing project?** → `N`
- **Project name?** → `horse-racer-ai`
- **In which directory is your code located?** → `./` (current directory)

**Option B: Using Vercel Dashboard**
1. Go to https://vercel.com/new
2. Click **"Add GitHub Account"** and authorize
3. Upload your project or connect the GitHub repo
4. Vercel auto-detects static site
5. Click **"Deploy"**

### Step 5: Get Your Live URL
After deployment (takes 1-2 minutes):
- You'll get a URL like: `https://horse-racer-ai.vercel.app`
- Or add a custom domain in settings

---

## Part 3: Access on Your Phone 📱

### Step 1: Open on Phone
1. On your phone, open Safari (iPhone) or Chrome (Android)
2. Go to your Vercel URL: `https://horse-racer-ai.vercel.app`
3. Bookmark it for easy access!

### Step 2: Add to Home Screen (Optional)

**iPhone:**
1. Tap the Share button
2. Select "Add to Home Screen"
3. Name it "Horse Racer AI"
4. Tap "Add"

**Android:**
1. Tap the menu (⋮)
2. Select "Add to Home screen"
3. Confirm

Now you have an app icon on your phone! 🎉

---

## 🔧 Troubleshooting

### API Not Working
- Check Render logs for errors
- Verify model files were uploaded
- Test API endpoint directly: `https://your-api.onrender.com/docs`

### Website Not Loading
- Check Vercel deployment logs
- Verify `vercel.json` is in root directory
- Check browser console for JavaScript errors

### CORS Errors
The API is configured to allow all origins (`Access-Control-Allow-Origin: *`). If you still get CORS errors:
1. Check Render logs
2. Verify the API URL in `config.js` is correct (https not http)

### Free Tier Limitations
- **Render**: API may sleep after 15 min of inactivity (takes 30 sec to wake up)
- **Vercel**: Unlimited bandwidth for hobby projects
- Both services are free for personal projects!

---

## 💡 Next Steps

1. **Custom Domain**: Add your own domain in Vercel settings
2. **Deploy Beta Signup API**: Follow same Render steps for Express.js server
3. **Add More Features**: Integrate live race data APIs
4. **Create iOS App**: Build native app with Swift using your deployed API

---

## 📝 Cost Breakdown

| Service | Cost | What It Includes |
|---------|------|------------------|
| Render Free Tier | $0/month | 750 hours/month, 0.1 CPU, 512 MB RAM |
| Vercel Hobby | $0/month | Unlimited static sites, 100 GB bandwidth |
| **Total** | **$0/month** | Perfect for testing and beta! |

**Upgrade Later When You Need:**
- Render Pro: $7/month (no sleep, better performance)
- Vercel Pro: $20/month (analytics, more bandwidth)

---

## 🎯 Quick Reference

**Your Deployed URLs:**
- API: `https://horse-racer-ai-api.onrender.com`
- Website: `https://horse-racer-ai.vercel.app`

**Important Files:**
- `vercel.json` - Vercel configuration
- `render.yaml` - Render configuration
- `assets/js/config.js` - API endpoint configuration

**Need Help?**
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- FastAPI CORS: https://fastapi.tiangolo.com/tutorial/cors/

---

**You're all set!** Your app is now accessible from anywhere in the world. 🌍
