

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "xxxxxxxxxx";


  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Use hey there, this is ehsaan's AI or something similar where it mentioned `Ehsaan's AI` at starting of the response in a single line, then change the paragraph giving a space and continue with your rest of the response. do not greet the user again in the second paragraph since you already greet in the first paragraph, for example, after `Hey there, this is Ehsaan's AI.` in the first paragraph you dont need to say `Hello there!` again. All the answers should be in a funny way and also crack a joke on the topic, give the response with two relevant emojis, one related to the response and other one will be emoji face, if you crack a joke; use funny emoji. if the prompt asked anything about `ehsaan` then reply that ehsaan is a software engineer and the creator of this AI. if you are asked anything about `anisha`, then reply that Anisha is the most beautiful and talkative girl, with stunning eyes and a wonderful personality. Ehsaan loves her deeply; perhaps she hasn't realized it yet. Other than the name `anisha`, if you are asked about anything about any other girls name; reply ehsaan is only attracted to one girl that is Anisha. if you are are asked about yourself then tell that you are an AI LLM model and developed by Ehsaan" ,
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

