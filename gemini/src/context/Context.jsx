// import { createContext, useState } from "react";
// import run from "../config/gemini";

// export const Context = createContext()

// const ContextProvider = (props) =>{

//     const [input, setInput] = useState("")
//     const [recentPrompt, setRecentPrompt] = useState("")
//     const [prevPrompt, setPrevPrompt] = useState([])
//     const [showResult, setShowResult] = useState(false)
//     const [loading, setLoading] = useState(false)
//     const [resultData, setResultData] = useState("")


//     const onSent = async (prompt)=>{
//         setResultData("")
//         setLoading(true)
//         setShowResult(true)
//         const response = await run(input)
//         setResultData(response)
//         setLoading(false)
//         setInput('');

//     }

//     onSent("someone from my neighborhood died")


//     const contextValue = {
//         prevPrompt,
//         setPrevPrompt,
//         onSent,
//         setRecentPrompt,
//         recentPrompt,
//         showResult,
//         loading,
//         resultData,
//         input,
//         setInput,
//     }

//     return (
//         <Context.Provider value={contextValue}>
//             {props.children}
//         </Context.Provider>
//     )
// }

// export default ContextProvider









import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord)=>{
    setTimeout(function (){
      setResultData(prev => prev+nextWord)
    }, 75*index)
  }

  /////new added
  const newChat = ()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt)=>{
    setResultData("")
    setLoading(true)
    setShowResult(true)

    // let response;
    // try {
    //   if(prompt !== undefined){
    //     response = await run(prompt);
    //     setRecentPrompt(prompt);
    //   } else {
    //     setPrevPrompt(prev => [...prev, input]);
    //     setRecentPrompt(input);
    //     response = await run(input);
    //   }
    // } catch (error) {
    //   console.error("Error while running the prompt:", error);
    // }
    

    setRecentPrompt(input)
    const response = await run(input)

    setPrevPrompt(prev=>[...prev,input])

    
    let responseArray = response.split("**")
    let newResponse = "";
    for(let i = 0; i< responseArray.length; i++){
      if(i === 0 || i%2 !== 1){
        newResponse += responseArray[i]
      } else{
        newResponse += "<b>"+responseArray[i]+"</b>"
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>")
    // setResultData(newResponse2)
    let newResponseArray = newResponse2.split(" ")
    for (let i = 0; i<newResponseArray.length; i++){
      const nextWord = newResponseArray[i]
      delayPara(i, nextWord+" ")
    }
    setLoading(false)
    setInput("");

}

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
