# 📁 Project Structure Documentation

Complete breakdown of every file and folder in the PrideChat project.

## 🏗️ Overview

```
lgbtq-chatbot/
├── client/                 # React frontend (Vite + React)
├── server/                 # Express backend (Node.js API)
├── README.md              # Main project documentation
├── QUICKSTART.md          # Quick setup guide
├── DEPLOYMENT_GUIDE.md    # Deployment instructions
├── setup.sh               # Setup script (Mac/Linux)
├── setup.bat              # Setup script (Windows)
└── .gitignore            # Git ignore rules
```

---

## 📱 Client (Frontend)

```
client/
├── src/
│   ├── components/        # React components
│   ├── services/          # API communication
│   ├── App.jsx            # Root component
│   ├── App.css            # Root styles
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies & scripts
```

### Components Breakdown

#### `Header.jsx` + `Header.css`
- **Purpose**: Top navigation and branding
- **Features**:
  - Pride/Trans theme toggle buttons
  - Animated logo with rainbow gradient
  - Responsive tagline
  - Floating heart and sparkle icons
- **Props**: `theme`, `setTheme`

#### `ChatContainer.jsx` + `ChatContainer.css`
- **Purpose**: Main chat interface container
- **Features**:
  - Message list management
  - Auto-scrolling
  - Typing indicator display
  - API communication
  - State management
- **Props**: `theme`
- **State**: `messages`, `isTyping`

#### `MessageBubble.jsx` + `MessageBubble.css`
- **Purpose**: Individual chat message display
- **Features**:
  - User/bot avatar
  - Colored bubbles (gradient for user, white for bot)
  - Timestamp
  - Theme-based border colors
  - Bubble pop animation
- **Props**: `message`, `theme`

#### `ChatInput.jsx` + `ChatInput.css`
- **Purpose**: Message input field
- **Features**:
  - Emoji icon decoration
  - Send button with hover effects
  - Enter key to send
  - Disabled state during typing
  - Animated slide-up entrance
- **Props**: `onSend`, `disabled`

#### `TypingIndicator.jsx` + `TypingIndicator.css`
- **Purpose**: Shows when bot is "thinking"
- **Features**:
  - Three bouncing dots
  - Staggered animation timing
  - Theme-aware styling
- **Props**: `theme`

#### `FloatingBubbles.jsx` + `FloatingBubbles.css`
- **Purpose**: Background decoration
- **Features**:
  - 8 animated bubbles
  - Randomized positions and timing
  - Gradient colors (pride colors)
  - Float-up animation
  - No user interaction (pointer-events: none)

### Services

#### `api.js`
- **Purpose**: Backend API communication
- **Functions**:
  - `sendMessage(message)`: Send chat message to backend
  - `getHealthStatus()`: Check server status
- **Configuration**: Uses `VITE_API_URL` env variable

### Styling Architecture

#### `index.css`
- Global CSS variables (colors)
- CSS animations (float, bubble-pop, shimmer, etc.)
- Reset styles
- Body background gradient

#### Component-specific CSS
- Each component has its own CSS file
- Uses CSS variables for theming
- Responsive design with media queries
- Smooth animations and transitions

### Build Configuration

#### `vite.config.js`
- React plugin
- Dev server on port 3000
- Proxy to backend at port 5000

---

## 🖥️ Server (Backend)

```
server/
├── controllers/           # Route handlers
│   └── chatController.js
├── services/             # Business logic
│   └── llmService.js
├── routes/               # API routes
│   └── chat.js
├── middleware/           # Custom middleware
│   └── errorHandler.js
├── server.js             # Main entry point
├── .env.example          # Environment template
└── package.json          # Dependencies & scripts
```

### Server Entry Point

#### `server.js`
- **Purpose**: Main server setup
- **Features**:
  - Express app configuration
  - CORS middleware
  - Route mounting
  - Health check endpoint
  - Error handling
  - Server startup

### Routes

#### `routes/chat.js`
- **Purpose**: Chat API routes
- **Endpoints**:
  - `POST /` - Send message and get response

### Controllers

#### `controllers/chatController.js`
- **Purpose**: Handle chat requests
- **Function**: `handleChatMessage`
- **Validates**: Message input
- **Calls**: LLM service
- **Returns**: AI response with timestamp

### Services

#### `services/llmService.js`
- **Purpose**: LLM integration
- **Provider**: Groq (free Llama 3.1)
- **Key Features**:
  - LGBTQ+-focused system prompt
  - Compassionate, supportive tone
  - Community resource information
  - Crisis hotline numbers
  - Educational content
  - Inclusive language
- **Model**: `llama-3.1-70b-versatile`
- **Configuration**:
  - Temperature: 0.7
  - Max tokens: 1024
  - Top P: 1

**System Prompt Covers:**
- Gender identity & sexual orientation
- Trans experiences & transitions
- Coming out support
- Community resources
- Rights & advocacy
- Health & wellness
- Crisis support numbers

### Middleware

#### `middleware/errorHandler.js`
- **Purpose**: Global error handling
- **Features**:
  - Catches all errors
  - Logs to console
  - Returns JSON error response
  - Includes stack trace in development

### Configuration

#### `.env.example`
Template for environment variables:
- `GROQ_API_KEY`: API key for Groq
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment (development/production)

---

## 🎨 Design System

### Color Palette

#### Pride Theme
- Red: `#E40303`
- Orange: `#FF8C00`
- Yellow: `#FFED00`
- Green: `#008026`
- Blue: `#24408E`
- Purple: `#732982`

#### Trans Theme
- Blue: `#5BCEFA`
- Pink: `#F5A9B8`
- White: `#FFFFFF`

#### UI Colors
- Background Primary: `#FFF5F8`
- Background Secondary: `#FFE5EF`
- Text Primary: `#2D1B3D`
- Text Secondary: `#6B4C7A`

### Typography

- **Display**: Righteous (Google Fonts)
- **Body**: DM Sans (Google Fonts)
- **Sizes**: Responsive, 1rem-3rem range

### Animations

1. **float**: Gentle up/down movement (20s)
2. **bubble-pop**: Entry animation for messages
3. **shimmer**: Rainbow text effect (3s)
4. **pulse-glow**: Pulsing shadow effect (2s)
5. **slide-up**: Slide in from bottom
6. **rainbow-border**: Cycling pride colors (3s)
7. **typing-bounce**: Typing indicator dots
8. **float-up**: Background bubbles rising

---

## 🔧 Configuration Files

### `.gitignore`
Ignores:
- node_modules/
- .env files
- Build outputs (dist/, build/)
- IDE files
- OS files
- Logs

### `package.json` (Client)
- **Dependencies**:
  - react, react-dom
  - axios (API calls)
  - lucide-react (icons)
- **Dev Dependencies**:
  - vite (build tool)
  - @vitejs/plugin-react

### `package.json` (Server)
- **Dependencies**:
  - express (web framework)
  - cors (CORS middleware)
  - dotenv (environment variables)
  - groq-sdk (AI integration)

---

## 📊 Data Flow

```
User Input (Client)
    ↓
ChatInput component
    ↓
ChatContainer.handleSendMessage()
    ↓
api.sendMessage()
    ↓
HTTP POST to /api/chat
    ↓
Server: chatController.handleChatMessage()
    ↓
llmService.generateResponse()
    ↓
Groq API (Llama 3.1)
    ↓
Response back through chain
    ↓
ChatContainer adds to messages
    ↓
MessageBubble renders response
```

---

## 🔐 Environment Variables

### Client
- `VITE_API_URL`: Backend API URL
  - Dev: `http://localhost:5000/api`
  - Prod: Your deployed backend URL

### Server
- `GROQ_API_KEY`: API key for Groq (required)
- `PORT`: Server port (default: 5000)
- `NODE_ENV`: Environment mode

---

## 📦 Build & Deploy

### Development
- Client: `npm run dev` (port 3000)
- Server: `npm run dev` (port 5000)

### Production
- Client: `npm run build` → creates `dist/`
- Server: `npm start` → runs with production settings

---

## 🧩 Extensibility

### Adding New Components
1. Create component in `client/src/components/`
2. Create matching CSS file
3. Import in parent component
4. Use consistent naming (PascalCase)

### Adding New API Endpoints
1. Create route in `server/routes/`
2. Create controller in `server/controllers/`
3. Add business logic in `server/services/`
4. Mount route in `server/server.js`

### Changing LLM Provider
1. Modify `server/services/llmService.js`
2. Install new SDK
3. Update environment variables
4. Adjust API call structure

### Adding New Themes
1. Add colors to `client/src/index.css`
2. Add theme button in Header
3. Apply theme classes in components

---

This modular structure makes it easy to:
- Add features
- Fix bugs
- Scale the application
- Deploy anywhere
- Collaborate with others

💜 Happy coding! 🌈
