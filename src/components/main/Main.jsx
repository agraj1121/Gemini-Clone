import './main.css';
import { assets } from '../../assets/assets';
import Card from '../card/Card';
import { useContext } from 'react';
import { Context } from '../../context/Context';

function Main({ extended }) {

    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    } = useContext(Context);


    const handleSend = () => {
        if (input.trim()) {
            onSent();
        }
    };


    return (
        <div className="main">


            {/* Navbar */}

            <div className="nav">

                <p>Gemini</p>

                <img
                    src={assets.user_icon}
                    alt="User"
                />

            </div>


            {/* Main Content */}

            <div className="main-container">

                {!showResult ? (

                    <>

                        <div className="greet">

                            <p>
                                <span>Hello, Dev.</span>
                            </p>

                            <p>
                                How can I help you today?
                            </p>

                        </div>


                        {/* Cards */}

                        <div className="cards">

                            <Card
                                text="Suggest beautiful places to see on an upcoming road trip."
                                icon={assets.compass_icon}
                                onClick={() =>
                                    onSent(
                                        "Suggest beautiful places to see on an upcoming road trip."
                                    )
                                }
                            />


                            <Card
                                text="Briefly summarize this concept: Urban Planning"
                                icon={assets.bulb_icon}
                                onClick={() =>
                                    onSent(
                                        "Briefly summarize this concept: Urban Planning"
                                    )
                                }
                            />


                            <Card
                                text="Brainstorm team bonding activities for our work retreat."
                                icon={assets.message_icon}
                                onClick={() =>
                                    onSent(
                                        "Brainstorm team bonding activities for our work retreat."
                                    )
                                }
                            />


                            <Card
                                text="Improve the readability of my code."
                                icon={assets.code_icon}
                                onClick={() =>
                                    onSent(
                                        "Improve the readability of my code."
                                    )
                                }
                            />

                        </div>

                    </>

                ) : (

                    <div className="result">


                        {/* User prompt */}

                        <div className="result-title">

                            <img
                                src={assets.user_icon}
                                alt="User"
                            />

                            <p>{recentPrompt}</p>

                        </div>


                        {/* Gemini response */}

                        <div className="result-data">

                            <img
                                src={assets.gemini_icon}
                                alt="Gemini"
                            />

                            {loading ? (

                                <p>Thinking...</p>

                            ) : (

                               <p dangerouslySetInnerHTML={{ __html: resultData }}></p>

                            )}

                        </div>

                    </div>

                )}

            </div>


            {/* Search */}

            <div
                className={`main-bottom ${
                    extended ? 'sidebar-open' : ''
                }`}
            >

                <div className="search-box">

                    <img
                        className="add-icon"
                        src={assets.add_icon}
                        alt="Add"
                    />


                    <input
                        type="text"
                        placeholder="Ask Gemini"
                        value={input}
                        onChange={(e) =>
                            setInput(e.target.value)
                        }
                        onKeyDown={(e) => {

                            if (e.key === 'Enter') {
                                handleSend();
                            }

                        }}
                    />


                    <div>

                        <img
                            src={assets.mic_icon}
                            alt="Microphone"
                        />


                        {input && (

                            <img
                                src={assets.send_icon}
                                alt="Send"
                                onClick={handleSend}
                                style={{ cursor: 'pointer' }}
                            />

                        )}

                    </div>

                </div>


                <p className="bottom-info">

                    Gemini may display inaccurate info, including about
                    people, so double-check its responses.

                </p>

            </div>

        </div>
    );
}

export default Main;