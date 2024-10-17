import { createContext, useState } from "react";
import runChat from '../config/gemini';

export const Context = createContext();

const Contextprovider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState("");
    const [showResult, setShowResult] = useState("");
    const [loading, setLoading] = useState("");
    const [resultData, setResultData] = useState("");

    const delapPara = (index, nextWord) =>{
        
    }

    const onSent = async (prompt) => {

        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        const response = await runChat(input)
        let responseArray = response.split("**")
        let newResponse;
        for(let i=0; i < responseArray.length; i++)
        {
            if(i === 0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>"
            }
        }//this code removes the asterisk from the response
        let newResponse2 = newResponse.split("*").join("</br>")
        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        resultData,
        input,
        setInput,
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default Contextprovider