import React from 'react';
import './Styles/Tab.css'; // Ensure the path is correct based on your project structure

const FooterTab = () => {
    return (
        <footer className="footer">
            <div className="frame-27">
                <div className="frame-28">
                    <img
                        className="logo-final-working"
                        alt="Logo final working"
                        src="img/logo-final-working-file-01-1-1.png"
                    />
                    <img className="group-2" alt="Group" src="img/group-3-1.png" />
                </div>
                <div className="frame-29">
                    <p className="text-wrapper-37">Phone : +1 000 000 00</p>
                    <p className="text-wrapper-38">Email : comstream@gmail.com</p>
                </div>
            </div>
            <div className="frame-30">
                <div className="navigate">
                    <div className="frame-31">
                        <div className="text-wrapper-39">Navigate</div>
                        <div className="line-4"></div>
                    </div>
                    <div className="frame-32">
                        <a href="#" className="text-wrapper-40">Home</a>
                        <a href="#" className="text-wrapper-41">About Us</a>
                        <a href="#" className="text-wrapper-41">Contact Us</a>
                        <a href="#" className="text-wrapper-41">Case Studies</a>
                        <a href="#" className="text-wrapper-41">Testimonials</a>
                    </div>
                </div>
                <div className="frame-33">
                    <div className="frame-31">
                        <div className="text-wrapper-39">Services</div>
                        <div className="line-5"></div>
                    </div>
                    <div className="frame-32">
                        <a href="#" className="text-wrapper-40">Technical</a>
                        <a href="#" className="text-wrapper-41">Managed Platforms</a>
                        <a href="#" className="text-wrapper-41">Billing Support</a>
                        <a href="#" className="text-wrapper-41">Other Services</a>
                    </div>
                </div>
                <div className="frame-33">
                    <div className="frame-34">
                        <div className="text-wrapper-39">Legal</div>
                        <div className="line-6"></div>
                    </div>
                    <div className="frame-32">
                        <a href="#" className="text-wrapper-40">Privacy Statement</a>
                        <a href="#" className="text-wrapper-41">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterTab;
