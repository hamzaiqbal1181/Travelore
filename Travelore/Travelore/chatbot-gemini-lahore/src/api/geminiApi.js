import axios from 'axios';

const API_URL = 'https://api.gemini.com/v1/chat'; // Replace with the actual Gemini API endpoint

export const fetchHistoricalPlaces = async (query) => {
  try {
    const response = await axios.post(API_URL, {
      prompt: `Tell me about historical places in Lahore, Pakistan. ${query}`,
      // Add any other necessary parameters for the API request
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Gemini API:', error);
    throw error;
  }
};