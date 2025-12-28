#!/bin/bash

# PrideChat Setup Script
# This script helps you set up the project quickly

echo "🏳️‍🌈 Welcome to PrideChat Setup! 🏳️‍⚧️"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Function to install dependencies
install_deps() {
    local dir=$1
    local name=$2
    
    echo "📦 Installing $name dependencies..."
    cd "$dir" || exit
    npm install
    if [ $? -eq 0 ]; then
        echo "✅ $name dependencies installed successfully!"
    else
        echo "❌ Failed to install $name dependencies"
        exit 1
    fi
    cd - > /dev/null || exit
    echo ""
}

# Install server dependencies
install_deps "server" "Server"

# Install client dependencies
install_deps "client" "Client"

# Setup .env file
if [ ! -f "server/.env" ]; then
    echo "📝 Creating server/.env file..."
    cp server/.env.example server/.env
    echo "✅ Created server/.env"
    echo ""
    echo "⚠️  IMPORTANT: Edit server/.env and add your Groq API key!"
    echo "   Get it from: https://console.groq.com"
    echo ""
else
    echo "✅ server/.env already exists"
    echo ""
fi

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Get your free Groq API key from https://console.groq.com"
echo "2. Add it to server/.env file (GROQ_API_KEY=your_key_here)"
echo "3. Run these commands in separate terminals:"
echo ""
echo "   Terminal 1 (Server):"
echo "   cd server && npm run dev"
echo ""
echo "   Terminal 2 (Client):"
echo "   cd client && npm run dev"
echo ""
echo "4. Open http://localhost:3000 in your browser"
echo ""
echo "💜 Enjoy building a more inclusive world! 🌈"
