import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({
    model: "gemini-3.5-flash",
});

export const runChat = async (prompt) => {
    const result = await model.generateContent(prompt);

    const response = await result.response;

    return response.text();
};