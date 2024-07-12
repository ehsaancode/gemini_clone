// const apiKey = "AIzaSyC105Hm-p3an8B-pbIsyDS7MAJg0iIjVR0"

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyA1lMxDQd-Yz7oP_mIsCVA4rDEIbiL09Ms";
// const apiKey = import.meta.env.VITE_KEY
// console.log(apiKey)


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






// /*
//  * Install the Generative AI SDK
//  *
//  * $ npm install @google/generative-ai
//  *
//  * See the getting started guide for more information
//  * https://ai.google.dev/gemini-api/docs/get-started/node
//  */

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from ("@google/generative-ai");
  
//   const apiKey = process.env.GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//     systemInstruction: "Use \"hey there, this is ehsaan's AI\" at starting of the response",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run() {
//     const chatSession = model.startChat({
//       generationConfig,
//    // safetySettings: Adjust safety settings
//    // See https://ai.google.dev/gemini-api/docs/safety-settings
//       history: [
//         {
//           role: "user",
//           parts: [
//             {text: "write about react in short"},
//           ],
//         },
//         {
//           role: "model",
//           parts: [
//             {text: "hey there, this is ehsaan's AI \n\nReact is a popular JavaScript library used for building user interfaces (UIs). It's known for its:\n\n* **Component-based architecture:** Breaking down UIs into reusable components, making development easier and more maintainable.\n* **Virtual DOM:**  React uses a virtual representation of the DOM, making updates efficient and fast.\n* **Declarative programming:**  You describe how your UI should look, and React takes care of the updates, reducing boilerplate code.\n* **Large community and ecosystem:** Lots of resources, libraries, and support available.\n\nReact is often used for web applications, but it can also be used for building mobile apps (React Native) and even desktop apps (Electron). \n"},
//           ],
//         },
//       ],
//     });
  
//     const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
//     console.log(result.response.text());
//   }
  
//   run();