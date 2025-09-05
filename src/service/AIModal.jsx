import {GoogleGenerativeAI} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINIAI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,   // ✅ fixed
  responseMimeType: "application/json",
};
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate Travel Plan for Location: {Location}, for {noOfDays} days for {traveler} with a {budget} budget. 
                 Give me hotels list (HotelName, address, price, img URL, geo coordinates, rating, description) 
                 and suggest itinerary (PlaceName, Place Detail, Place img URL, Geo Coordinates, Ticket Price, Travel Time) for each day in JSON format.`,
        },
      ],
    },
  ],
});