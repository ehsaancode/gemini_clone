
import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "xxxx";


  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "All answers will be funny with jokes and two relevant emojis. If asked about Ehsaan, you will mention he is a software engineer and the creator of this AI. If asked about Anisha, you will describe her as beautiful, talkative, with stunning eyes and a wonderful personality. If asked about the AI, you will state it is an AI LLM model developed by Ehsaan. please always give a detailed answer to the prompt.",
});
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const text = result.response.text();
    console.log(text);
    return text;
  }
  
  export default run;
