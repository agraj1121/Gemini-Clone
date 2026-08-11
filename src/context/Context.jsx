import { createContext, useState } from "react";
import { runChat } from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {

        const currentPrompt = prompt !== undefined ? prompt : input;

        if (!currentPrompt.trim()) return;

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(currentPrompt);

        if (prompt === undefined) {
            setPreviousPrompts((prev) => [
                currentPrompt,
                ...prev,
            ]);
        }

        try {

            const response = await runChat(currentPrompt);

            let responseArray = response.split("**");
            let newResponse = "";

            for (let i = 0; i < responseArray.length; i++) {

                if (i % 2 === 0) {
                    newResponse += responseArray[i];
                } else {
                    newResponse += "<b>" + responseArray[i] + "</b>";
                }

            }

            newResponse = newResponse.split("*").join("<br>");

            const words = newResponse.split(" ");

            setResultData("");
            setLoading(false);

            for (let i = 0; i < words.length; i++) {

                const word = words[i];

                setTimeout(() => {

                    setResultData((prev) => prev + word + " ");

                }, 50 * i);
            }

        } catch (error) {

            console.error("Gemini API Error:", error);

            setResultData(
                "Sorry, something went wrong. Please try again."
            );

            setLoading(false);
        }

        setInput("");
    };


    const newChat = () => {

        setShowResult(false);
        setResultData("");
        setRecentPrompt("");
        setInput("");

    };


    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
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