import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../landing.css";
import { useWindowWidth } from '../../breakpoints';
import "./Styles/navbar.css";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const screenWidth = useWindowWidth();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`header-2 z-10 ${isScrolled ? 'scrolled' : ''}`}
            style={{
                gap: screenWidth >= 1024 && screenWidth < 1440 ? "235.38px" : screenWidth >= 1440 ? "331px" : undefined,
                left: screenWidth >= 1024 && screenWidth < 1440 ? "1px" : screenWidth >= 1440 ? "2px" : undefined,
                padding:
                    screenWidth >= 1024 && screenWidth < 1440
                        ? "24.89px 37.82px"
                        : screenWidth >= 1440
                            ? "35px 53px"
                            : undefined,
                width:
                    screenWidth >= 1024 && screenWidth < 1440 ? "100%" : screenWidth >= 1440 ? "100%" : undefined,
                backgroundColor: location.pathname === '/Com/services' ? '#f7f7f5' : undefined,
            }}
        >
            <div
                className="frame"
                style={{
                    gap:
                        screenWidth >= 1024 && screenWidth < 1440 ? "113.07px" : screenWidth >= 1440 ? "159px" : undefined,
                    width:
                        screenWidth >= 1024 && screenWidth < 1440 ? "593.78px" : screenWidth >= 1440 ? "835px" : undefined,
                }}
            >
                <img
                    className="img"
                    alt="Frame"
                    src={
                        screenWidth >= 1024 && screenWidth < 1440
                            ? isScrolled ? "newImg/frame-1-1.svg" : "img/frame-1.svg"
                            : screenWidth >= 1440
                                ? isScrolled ? "newImg/frame-1.svg" : "img/frame-1-1.svg"
                                : undefined
                    }
                />
                <div
                    className="frame-2"
                    style={{
                        gap:
                            screenWidth >= 1024 && screenWidth < 1440 ? "14.18px" : screenWidth >= 1440 ? "9px" : undefined,
                    }}
                >
                    <Link to="/Com/" className="text-wrapper-3" style={{
                            fontFamily:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "17.1px"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-size)"
                                        : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "600"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-weight)"
                                        : undefined,
                            letterSpacing:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "0"
                                    : screenWidth >= 1440
                                        ? "var(--h5-letter-spacing)"
                                        : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "normal"
                                    : screenWidth >= 1440
                                        ? "var(--h5-line-height)"
                                        : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                        }}
                    >
                        Home
                    </Link>
                    <Link to="/Com/services" className="text-wrapper-4" style={{
                            fontFamily:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "17.1px"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-size)"
                                        : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "600"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-weight)"
                                        : undefined,
                            letterSpacing:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "0"
                                    : screenWidth >= 1440
                                        ? "var(--h5-letter-spacing)"
                                        : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "normal"
                                    : screenWidth >= 1440
                                        ? "var(--h5-line-height)"
                                        : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                            width:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "64.71px"
                                    : screenWidth >= 1440
                                        ? "91px"
                                        : undefined,
                        }}
                    >
                        Services
                    </Link>
                    <div
                        className="text-wrapper-5"
                        style={{
                            fontFamily:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "17.1px"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-size)"
                                        : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "600"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-weight)"
                                        : undefined,
                            letterSpacing:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "0"
                                    : screenWidth >= 1440
                                        ? "var(--h5-letter-spacing)"
                                        : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "normal"
                                    : screenWidth >= 1440
                                        ? "var(--h5-line-height)"
                                        : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                            width:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "75.38px"
                                    : screenWidth >= 1440
                                        ? "106px"
                                        : undefined,
                        }}
                    >
                        About Us
                    </div>
                </div>
            </div>
            <div
                className="div-wrapper"
                style={{
                    borderRadius:
                        screenWidth >= 1024 && screenWidth < 1440 ? "24.89px" : screenWidth >= 1440 ? "35px" : undefined,
                    gap: screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                    padding:
                        screenWidth >= 1024 && screenWidth < 1440
                            ? "7.11px 14.22px"
                            : screenWidth >= 1440
                                ? "10px 20px"
                                : undefined,
                }}
            >
                <a href="#contact-us-section">
                    <div
                        className="text-wrapper-6"
                        style={{
                            fontFamily:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "17.1px"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-size)"
                                        : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "600"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-weight)"
                                        : undefined,
                            letterSpacing:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "0"
                                    : screenWidth >= 1440
                                        ? "var(--h5-letter-spacing)"
                                        : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "normal"
                                    : screenWidth >= 1440
                                        ? "var(--h5-line-height)"
                                        : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                        }}
                    >
                        Contact Us
                    </div>
                </a>
            </div>
        </header>
    );
};

export default Navbar;
