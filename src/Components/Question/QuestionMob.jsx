import "./styles/mob.css";

const QuestionMob = () => {
    return (
        <>
            <div className="question-3" id="contact-us-section">
                <p className="have-another-3">
                    Have Another Question? <br />
                    Let’s Talk
                </p>
                <div className="frame-70">
                    <div className="frame-23">
                        <p className="div-3">
                            <span className="text-wrapper-35">Full Name</span>
                            <span className="span">*</span>
                        </p>
                        <div className="frame-24">
                            <input type="text" className="input-style" placeholder="Joan Smith" />
                        </div>
                    </div>
                    <div className="frame-23">
                        <p className="div-3">
                            <span className="text-wrapper-35">Your email</span>
                            <span className="span">*</span>
                        </p>
                        <div className="frame-24">
                            <input type="email" className="input-style" placeholder="joansmith@gmail.com" />
                        </div>
                    </div>
                </div>
                <div className="frame-71">
                    <p className="div-3">
                        <span className="text-wrapper-35">Message</span>
                        <span className="span">*</span>
                    </p>
                    <div className="frame-24">
                        <textarea className="input-style h-11" placeholder="Enter your message here"></textarea>
                    </div>
                </div>
                <div className="frame-62">
                    <div className="frame-63 button-hover">
                        <span className="text-wrapper-78">Send Request</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionMob;
