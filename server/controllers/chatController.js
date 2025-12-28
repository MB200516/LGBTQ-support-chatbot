import { generateResponse } from '../services/llmService.js';

export const handleChatMessage = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ 
        error: 'Message is required and must be a string' 
      });
    }

    // Generate response using LLM
    const response = await generateResponse(message);

    res.json({
      message: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    next(error);
  }
};
