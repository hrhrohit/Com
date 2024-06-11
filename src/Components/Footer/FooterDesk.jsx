import React from 'react';
import './Styles/Desk.css'; // Ensure the path is correct based on your project structure

const FooterDesk = () => {
    return (
        <footer className="footer-2">
            <div className="frame-51">
                <img
                    className="logo-final-working-2"
                    alt="Logo final working"
                    src="img/logo-final-working-file-01-1-2.png"
                />
                <img className="group-5" alt="Group" src="img/group-3-2.png" />
                <p className="text-wrapper-59">Phone: +1 000 000 00</p>
                <p className="text-wrapper-60">Email: comstream@gmail.com</p>
            </div>
            <div className="frame-52">
                <div className="navigate-2">
                    <div className="frame-53">
                        <div className="text-wrapper-61">Navigate</div>
                        <div className="line-7"></div>
                    </div>
                    <div className="div-4">
                        <a href="#" className="text-wrapper-62">Home</a>
                        <a href="#" className="text-wrapper-63">About Us</a>
                        <a href="#" className="text-wrapper-63">Contact Us</a>
                        <a href="#" className="text-wrapper-63">Case Studies</a>
                        <a href="#" className="text-wrapper-63">Testimonials</a>
                    </div>
                </div>
                <div className="frame-54">
                    <div className="frame-53">
                        <div className="text-wrapper-61">Services</div>
                        <div className="line-8"></div>
                    </div>
                    <div className="div-4">
                        <a href="#" className="text-wrapper-62">Technical</a>
                        <a href="#" className="text-wrapper-63">Managed Platforms</a>
                        <a href="#" className="text-wrapper-63">Billing Support</a>
                        <a href="#" className="text-wrapper-63">Other Services</a>
                    </div>
                </div>
                <div className="frame-54">
                    <div className="frame-55">
                        <div className="text-wrapper-61">Legal</div>
                        <div className="line-9"></div>
                    </div>
                    <div className="div-4">
                        <a href="#" className="text-wrapper-62">Privacy Statement</a>
                        <a href="#" className="text-wrapper-63">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterDesk;
