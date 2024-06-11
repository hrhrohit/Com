import React from "react";
import "./styles/tab.css";

const QuestionTab = () => {
    return (
        <>
            <div className="question" id="contact-us-section">
                <div className="frame-20">
                    <p className="have-another">
                        Have Another Question? <br />
                        Let’s Talk
                    </p>
                    <div className="frame-21">
                        <div className="frame-22">
                            <div className="frame-23">
                                <p className="div-3">
                                    <span className="text-wrapper-35">Full Name</span>
                                    <span className="span">*</span>
                                </p>
                                <div className="frame-24">
                                    <input className="input-style border-none" placeholder="Joan Smith" />
                                </div>
                            </div>
                            <div className="frame-23">
                                <p className="div-3">
                                    <span className="text-wrapper-35">Your email</span>
                                    <span className="span">*</span>
                                </p>
                                <div className="frame-24">
                                    <input className="input-style" type="email" placeholder="joansmith@gmail.com" />
                                </div>
                            </div>
                        </div>
                        <div className="frame-23">
                            <p className="div-3">
                                <span className="text-wrapper-35">Message</span>
                                <span className="span">*</span>
                            </p>
                            <div className="frame-24">
                                <textarea className="input-style" placeholder="Enter your message here" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-25">
                    <button className="frame-26">
                        <span className="text-wrapper-2">Send Request</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuestionTab;
