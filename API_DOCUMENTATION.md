# 🔌 API Documentation

Complete reference for the PrideChat backend API.

## Base URL

**Development:** `http://localhost:5000/api`  
**Production:** Your deployed backend URL + `/api`

---

## Authentication

Currently, the API does not require authentication. All endpoints are publicly accessible.

> **Note:** In production, consider adding rate limiting and authentication for security.

---

## Endpoints

### 1. Health Check

Check if the server is running and healthy.

**Endpoint:** `GET /api/health`

**Request:**
```bash
curl http://localhost:5000/api/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "LGBTQ+ Chatbot API is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Server is healthy

---

### 2. Send Chat Message

Send a message to the chatbot and receive an AI-generated response.

**Endpoint:** `POST /api/chat`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "message": "What does LGBTQ+ stand for?"
}
```

**Request Example (curl):**
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What does LGBTQ+ stand for?"}'
```

**Request Example (JavaScript):**
```javascript
const response = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    message: 'What does LGBTQ+ stand for?'
  })
});

const data = await response.json();
console.log(data.message);
```

**Success Response:**
```json
{
  "message": "LGBTQ+ stands for Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and the '+' represents the many other identities within our diverse community, including but not limited to pansexual, asexual, non-binary, and more. 🏳️‍🌈",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Error Response (400 - Bad Request):**
```json
{
  "error": "Message is required and must be a string",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Error Response (500 - Server Error):**
```json
{
  "error": "Failed to generate response. Please try again.",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Status Codes:**
- `200 OK` - Message processed successfully
- `400 Bad Request` - Invalid request body
- `500 Internal Server Error` - Server or AI API error

---

## Request/Response Schema

### Chat Request

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message | string | Yes | User's message (max 1000 characters recommended) |

### Chat Response

| Field | Type | Description |
|-------|------|-------------|
| message | string | AI-generated response |
| timestamp | string | ISO 8601 formatted timestamp |

### Error Response

| Field | Type | Description |
|-------|------|-------------|
| error | string | Error message |
| timestamp | string | ISO 8601 formatted timestamp |
| stack | string | Stack trace (development only) |

---

## Example Use Cases

### Basic Chat
```javascript
// Send a question
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ 
    message: 'How can I support a trans friend?' 
  })
});

const { message } = await response.json();
console.log(message);
// "Supporting a trans friend is wonderful! Here are some ways..."
```

### Error Handling
```javascript
try {
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: 'Hello!' })
  });
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const data = await response.json();
  console.log(data.message);
  
} catch (error) {
  console.error('Error:', error.message);
  // Show user-friendly error message
}
```

### With Axios
```javascript
import axios from 'axios';

try {
  const { data } = await axios.post('/api/chat', {
    message: 'What are some LGBTQ+ resources?'
  });
  
  console.log(data.message);
  
} catch (error) {
  if (error.response) {
    // Server responded with error
    console.error(error.response.data.error);
  } else if (error.request) {
    // Request made but no response
    console.error('No response from server');
  } else {
    // Error setting up request
    console.error('Error:', error.message);
  }
}
```

---

## Rate Limiting

Currently, there is **no rate limiting** implemented. For production use, consider adding:

```javascript
// Example using express-rate-limit
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api/chat', limiter);
```

---

## CORS Configuration

The API accepts requests from all origins in development:

```javascript
app.use(cors());
```

For production, restrict to your frontend domain:

```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.com',
  credentials: true
}));
```

---

## AI Model Configuration

The API uses Groq's Llama 3.1 70B model with these settings:

| Parameter | Value | Description |
|-----------|-------|-------------|
| model | llama-3.1-70b-versatile | Model identifier |
| temperature | 0.7 | Creativity level (0-2) |
| max_tokens | 1024 | Maximum response length |
| top_p | 1 | Nucleus sampling parameter |

### System Prompt Focus Areas

The AI is instructed to provide support for:
- Gender identity and sexual orientation education
- Trans experiences and transitions
- Coming out support
- Community resources
- Rights and advocacy
- Health and wellness
- Crisis support information

---

## Error Codes Reference

| Code | Message | Cause | Solution |
|------|---------|-------|----------|
| 400 | Message is required | Missing message field | Include message in request body |
| 401 | API authentication failed | Invalid Groq API key | Check GROQ_API_KEY in .env |
| 429 | Rate limit exceeded | Too many requests | Wait and try again |
| 500 | Failed to generate response | AI API error | Retry request |
| 503 | Service unavailable | Server down | Check server status |

---

## Testing the API

### Using curl

```bash
# Health check
curl http://localhost:5000/api/health

# Send message
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Tell me about pride month"}'
```

### Using Postman

1. Create new POST request
2. URL: `http://localhost:5000/api/chat`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
   ```json
   {
     "message": "What does transgender mean?"
   }
   ```
5. Send request

### Using Thunder Client (VS Code)

1. Install Thunder Client extension
2. Create new request
3. Method: POST
4. URL: `http://localhost:5000/api/chat`
5. Body: JSON
   ```json
   {
     "message": "How do I be a better ally?"
   }
   ```

---

## Environment Variables

Required environment variables for the API:

```bash
# Required
GROQ_API_KEY=your_groq_api_key_here

# Optional
PORT=5000
NODE_ENV=development
```

Get your free Groq API key at: https://console.groq.com

---

## API Limits

### Groq Free Tier Limits
- **Requests per minute:** ~30
- **Requests per day:** ~14,400
- **Max tokens per request:** 32,768

### Our API Limits
- **Message length:** Recommended max 1000 characters
- **Response length:** Max 1024 tokens (~800 words)
- **Timeout:** 30 seconds

---

## Troubleshooting

### "Cannot connect to server"
- Verify server is running: `cd server && npm run dev`
- Check port is correct: `5000` by default
- Check firewall settings

### "API authentication failed"
- Verify `GROQ_API_KEY` in `server/.env`
- Key should start with `gsk_`
- No extra spaces or quotes

### "Failed to generate response"
- Check Groq API status
- Verify API key is valid
- Check rate limits

### "CORS error"
- Server CORS is configured for all origins in development
- For production, update CORS settings

---

## Best Practices

1. **Always validate input** before sending to API
2. **Handle errors gracefully** with user-friendly messages
3. **Show loading states** while waiting for response
4. **Implement retry logic** for failed requests
5. **Cache common responses** to reduce API calls
6. **Monitor API usage** to stay within limits
7. **Never expose API keys** in client-side code

---

## Future Enhancements

Planned API features:

- [ ] User authentication (JWT)
- [ ] Chat history persistence
- [ ] Message reactions
- [ ] Multi-language support
- [ ] Voice message support
- [ ] File upload capability
- [ ] WebSocket for real-time chat
- [ ] Rate limiting per user
- [ ] Analytics endpoint

---

## Support

For API issues:
1. Check server logs for errors
2. Verify environment variables
3. Test with curl/Postman first
4. Check network connectivity
5. Review error messages carefully

---

**API Version:** 1.0.0  
**Last Updated:** December 2024  
**Status:** Production Ready ✅

💜 Built with care for the LGBTQ+ community 🌈
