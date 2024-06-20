import { forwardRef } from "react";
import "./styles/desk.css";

const Questiondesk = forwardRef((props, ref) => {
  return (
    <>
      <div className="question-2" id="contact-us-section" ref={ref}>
        <div className="frame-58">
          <p className="have-another-2">
            Have Another Question? <br />
            Let’s Talk
          </p>
          <div className="frame-59">
            <div className="frame-60">
              <div className="frame-61">
                <p className="div-7">
                  <span className="text-wrapper-75">Full Name</span>
                  <span className="text-wrapper-76">*</span>
                </p>
                <div className="frame-31">
                  <input className="input-style" placeholder="Joan Smith" />
                </div>
              </div>
              <div className="frame-61">
                <p className="div-7">
                  <span className="text-wrapper-75">Your email</span>
                  <span className="text-wrapper-76">*</span>
                </p>
                <div className="frame-31">
                  <input className="input-style" type="email" placeholder="joansmith@gmail.com" />
                  {/* <img className="line-11" alt="Line" src="/img/line-3-7.svg" /> */}
                </div>
              </div>
            </div>
            <div className="frame-61">
              <p className="div-7">
                <span className="text-wrapper-75">Message</span>
                <span className="text-wrapper-76">*</span>
              </p>
              <div className="frame-31">
                <textarea className="input-style h-11" placeholder="Enter your message here"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-62">
          <div className="frame-63 button-hover ">
            <span className="text-wrapper-78">Send Request</span>
          </div>
        </div>
      </div>
    </>
  )
})

export default Questiondesk
