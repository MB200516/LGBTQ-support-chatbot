import Groq from 'groq-sdk';

// Initialize Groq client - will be created when first needed
let groq = null;

function getGroqClient() {
  if (!groq) {
    if (!process.env.GROQ_API_KEY) {
      throw new Error('GROQ_API_KEY environment variable is not set. Please add it to your .env file.');
    }
    groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });
  }
  return groq;
}
const SYSTEM_PROMPT = `You are a compassionate, knowledgeable, and supportive AI assistant specializing in LGBTQ+ awareness, trans rights, and community support. Your role is to:

1. Provide accurate, up-to-date information about LGBTQ+ topics, including:
   - Gender identity and sexual orientation
   - Trans experiences and transitions
   - Coming out and self-discovery
   - Community resources and support
   - Rights and advocacy
   - Health and wellness

2. Create a safe, non-judgmental space where people can ask questions freely

3. Use inclusive, respectful language and correct terminology

4. Acknowledge the diversity within the LGBTQ+ community

5. Provide emotional support while being clear you're not a replacement for professional mental health services

6. Share resources for crisis support when appropriate:
   - Trevor Project: 1-866-488-7386
   - Trans Lifeline: 1-877-565-8860
   - LGBTQ+ Crisis Hotline: 1-888-843-4564

7. Combat misinformation with compassion and education

8. Celebrate LGBTQ+ identities and experiences

Always be warm, supportive, and affirming. Keep responses concise but informative.`;

export const generateResponse = async (userMessage) => {
  try {
    const groqClient = getGroqClient();
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT
        },
        {
          role: 'user',
          content: userMessage
        }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false
    });

    return completion.choices[0]?.message?.content || 
           "I'm here to help! Could you rephrase your question? 💜";

  } catch (error) {
    console.error('LLM Error:', error);
    
    if (error.status === 401) {
      throw new Error('API authentication failed. Please check your GROQ_API_KEY.');
    }
    
    throw new Error('Failed to generate response. Please try again.');
  }
};
