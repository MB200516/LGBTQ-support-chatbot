# 🏗️ PrideChat Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         USER BROWSER                         │
│                     http://localhost:3000                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     REACT FRONTEND (Vite)                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Header Component                                       │ │
│  │  - Logo & Branding                                     │ │
│  │  - Theme Toggle (Pride/Trans)                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  ChatContainer Component                               │ │
│  │  - Message State Management                            │ │
│  │  - API Communication                                   │ │
│  │  - Auto-scrolling                                      │ │
│  │    ┌──────────────────────────────────────────────┐   │ │
│  │    │  MessageBubble Components                     │   │ │
│  │    │  - User messages (right, gradient)            │   │ │
│  │    │  - Bot messages (left, white)                 │   │ │
│  │    └──────────────────────────────────────────────┘   │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  ChatInput Component                                   │ │
│  │  - Text input field                                    │ │
│  │  - Send button                                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  FloatingBubbles Component (Background)                │ │
│  │  - Decorative animations                               │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP POST /api/chat
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   EXPRESS BACKEND (Node.js)                  │
│                     http://localhost:5000                    │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  CORS Middleware                                       │ │
│  │  - Allow cross-origin requests                         │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Chat Routes (/api/chat)                               │ │
│  │  - POST / → Handle chat messages                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Chat Controller                                       │ │
│  │  - Validate input                                      │ │
│  │  - Call LLM service                                    │ │
│  │  - Return response                                     │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  LLM Service                                           │ │
│  │  - LGBTQ+ focused system prompt                        │ │
│  │  - Groq SDK integration                                │ │
│  │  - Error handling                                      │ │
│  └────────────────────────────────────────────────────────┘ │
│                              │                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Error Handler Middleware                              │ │
│  │  - Catch all errors                                    │ │
│  │  - Return JSON responses                               │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ API Request
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      GROQ API (External)                     │
│                      api.groq.com                            │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Llama 3.1 70B Model                                   │ │
│  │  - Process user message                                │ │
│  │  - Apply system prompt                                 │ │
│  │  - Generate supportive response                        │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow Diagram

```
1. USER TYPES MESSAGE
   └─> ChatInput component
       └─> onSend callback
           └─> ChatContainer.handleSendMessage()
               │
               ├─> Add user message to state
               │   └─> MessageBubble renders it
               │
               └─> Call api.sendMessage()

2. API CALL TO BACKEND
   └─> axios POST to /api/chat
       └─> Server receives request
           └─> Chat Route
               └─> Chat Controller
                   │
                   ├─> Validate message
                   │
                   └─> Call llmService.generateResponse()

3. AI PROCESSING
   └─> LLM Service
       ├─> Prepare system prompt
       ├─> Prepare user message
       └─> Call Groq API
           └─> Llama 3.1 processes
               └─> Returns AI response

4. RESPONSE BACK TO USER
   └─> LLM Service returns text
       └─> Controller adds timestamp
           └─> Express sends JSON response
               └─> Axios receives response
                   └─> ChatContainer adds bot message
                       └─> MessageBubble renders it
                           └─> Auto-scroll to bottom
```

---

## Component Hierarchy

```
App
├── FloatingBubbles
├── Header
│   ├── Logo (Heart icon)
│   ├── Title (PrideChat)
│   ├── Tagline
│   └── Theme Toggle
│       ├── Pride Button 🏳️‍🌈
│       └── Trans Button 🏳️‍⚧️
│
└── ChatContainer
    ├── Messages Wrapper
    │   └── Messages
    │       ├── MessageBubble (user)
    │       ├── MessageBubble (bot)
    │       ├── MessageBubble (user)
    │       └── TypingIndicator (when loading)
    │
    └── ChatInput
        ├── Emoji Icon
        ├── Input Field
        └── Send Button
```

---

## State Management

### Frontend State (React)

```javascript
// App.jsx
const [theme, setTheme] = useState('pride');
  └─> Passed to Header and ChatContainer

// ChatContainer.jsx  
const [messages, setMessages] = useState([...]);
  └─> Array of message objects
      └─> { id, text, sender, timestamp }

const [isTyping, setIsTyping] = useState(false);
  └─> Controls TypingIndicator display

// ChatInput.jsx
const [input, setInput] = useState('');
  └─> Controlled input field value
```

### Backend State
- Stateless (no session management)
- Each request is independent
- All context sent in each API call

---

## API Endpoints

```
┌─────────────────────────────────────────────────────────────┐
│  GET /api/health                                             │
│  └─> Returns: { status, message, timestamp }                │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  POST /api/chat                                              │
│  ├─> Body: { message: string }                              │
│  └─> Returns: { message: string, timestamp: string }        │
└─────────────────────────────────────────────────────────────┘
```

---

## File Dependencies

### Frontend Dependencies Flow
```
main.jsx
  └─> App.jsx
      ├─> App.css
      ├─> FloatingBubbles.jsx → FloatingBubbles.css
      ├─> Header.jsx → Header.css
      └─> ChatContainer.jsx → ChatContainer.css
          ├─> MessageBubble.jsx → MessageBubble.css
          ├─> TypingIndicator.jsx → TypingIndicator.css
          ├─> ChatInput.jsx → ChatInput.css
          └─> api.js (axios)
```

### Backend Dependencies Flow
```
server.js
  ├─> cors
  ├─> express
  ├─> dotenv
  ├─> routes/chat.js
  │   └─> controllers/chatController.js
  │       └─> services/llmService.js
  │           └─> groq-sdk
  └─> middleware/errorHandler.js
```

---

## Styling Architecture

```
index.css (Global)
  ├─> CSS Variables (:root)
  │   ├─> Pride colors
  │   ├─> Trans colors
  │   └─> UI colors
  │
  ├─> Global animations
  │   ├─> @keyframes float
  │   ├─> @keyframes bubble-pop
  │   ├─> @keyframes shimmer
  │   └─> ... more animations
  │
  └─> Reset styles

Component CSS Files
  ├─> Use CSS variables
  ├─> Component-specific styles
  ├─> Responsive media queries
  └─> Animation applications
```

---

## Security Layers

```
┌──────────────────────────────────────────────┐
│  Environment Variables                       │
│  - API keys not in code                      │
│  - .env file ignored by git                  │
└──────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────┐
│  CORS Middleware                             │
│  - Control allowed origins                   │
│  - Prevent unauthorized access               │
└──────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────┐
│  Input Validation                            │
│  - Check message type                        │
│  - Validate required fields                  │
└──────────────────────────────────────────────┘
              │
              ▼
┌──────────────────────────────────────────────┐
│  Error Handling                              │
│  - Try-catch blocks                          │
│  - Graceful error responses                  │
│  - No sensitive data in errors               │
└──────────────────────────────────────────────┘
```

---

## Build & Deploy Pipeline

```
Development
├── Client: npm run dev (Vite dev server)
└── Server: npm run dev (Node.js with watch)

Production Build
├── Client: npm run build
│   └── Creates /dist folder
│       ├── Minified JS
│       ├── Optimized CSS
│       └── Assets
│
└── Server: npm start
    └── Runs production server
        └── Uses .env production values

Deployment
├── Frontend (Vercel/Netlify)
│   ├── Git push triggers build
│   ├── Build runs automatically
│   └── Deploy to CDN
│
└── Backend (Render/Railway)
    ├── Git push triggers deploy
    ├── Installs dependencies
    ├── Sets env variables
    └── Starts server
```

---

## Performance Optimization

```
Frontend
├── Code Splitting (Vite automatic)
├── CSS Animations (GPU accelerated)
├── Lazy Loading (images if added)
└── Minimize Re-renders (React best practices)

Backend
├── Async/Await (non-blocking)
├── Error Handling (prevent crashes)
├── Efficient API calls (single endpoint)
└── Caching (can be added)

Network
├── CORS (allow only needed origins)
├── Compression (gzip, can be added)
└── Rate Limiting (can be added)
```

---

## Scalability Considerations

```
Current Architecture (MVP)
├── Stateless backend (easy to scale horizontally)
├── No database (add when needed)
├── Free tier AI (upgrade path available)
└── Simple deployment (can grow)

Future Enhancements
├── Database (PostgreSQL/MongoDB)
│   └── Store chat history
│
├── Authentication (JWT)
│   └── User accounts
│
├── Caching (Redis)
│   └── Common responses
│
├── Load Balancer
│   └── Multiple server instances
│
└── CDN
    └── Static asset delivery
```

---

This architecture is:
✅ **Modular** - Easy to modify components
✅ **Scalable** - Can grow with your needs
✅ **Maintainable** - Clear separation of concerns
✅ **Production-ready** - Follows best practices
✅ **Beginner-friendly** - Well-documented and organized

💜 Built for the community, by the community! 🌈
