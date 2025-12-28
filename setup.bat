@echo off
REM PrideChat Setup Script for Windows

echo.
echo ===========================================
echo  🏳️‍🌈 Welcome to PrideChat Setup! 🏳️‍⚧️
echo ===========================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js 18+ from https://nodejs.org
    pause
    exit /b 1
)

echo ✅ Node.js is installed
node --version
echo.

REM Install server dependencies
echo 📦 Installing Server dependencies...
cd server
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install server dependencies
    pause
    exit /b 1
)
echo ✅ Server dependencies installed!
cd ..
echo.

REM Install client dependencies
echo 📦 Installing Client dependencies...
cd client
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Failed to install client dependencies
    pause
    exit /b 1
)
echo ✅ Client dependencies installed!
cd ..
echo.

REM Setup .env file
if not exist "server\.env" (
    echo 📝 Creating server\.env file...
    copy server\.env.example server\.env
    echo ✅ Created server\.env
    echo.
    echo ⚠️  IMPORTANT: Edit server\.env and add your Groq API key!
    echo    Get it from: https://console.groq.com
    echo.
) else (
    echo ✅ server\.env already exists
    echo.
)

echo ===========================================
echo  🎉 Setup complete!
echo ===========================================
echo.
echo Next steps:
echo 1. Get your free Groq API key from https://console.groq.com
echo 2. Add it to server\.env file (GROQ_API_KEY=your_key_here)
echo 3. Open TWO command prompts and run:
echo.
echo    Command Prompt 1 (Server):
echo    cd server
echo    npm run dev
echo.
echo    Command Prompt 2 (Client):
echo    cd client
echo    npm run dev
echo.
echo 4. Open http://localhost:3000 in your browser
echo.
echo 💜 Enjoy building a more inclusive world! 🌈
echo.
pause
