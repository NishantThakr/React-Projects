import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Page.css";
import { Context } from "../../context/context";
const Page = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
    } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main_container">
                {!showResult ? (
                    <>
                        <div className="greet">
                            <p>
                                Konichiwa, <span>Nemo, Sama!</span>
                            </p>
                            <p>How can i help you today</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest Beautiful places to see in upcoing road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Suggest Beautiful places to see in upcoing road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Suggest Beautiful places to see in upcoing road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                            <div className="card">
                                <p>Suggest Beautiful places to see in upcoing road trip</p>
                                <img src={assets.compass_icon} />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} />
                            {loading ? (
                                <div className="loader">
                                    <hr></hr>
                                    <hr></hr>
                                    <hr></hr>
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Enter your prompt here.."
                        />
                        <img src={assets.gallery_icon} />
                        <img src={assets.mic_icon} />
                        <img src={assets.send_icon} onClick={() => onSent()} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;
