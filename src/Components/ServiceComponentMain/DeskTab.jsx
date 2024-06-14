import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import "./styles/desk.css";

const ServicesDesktop = () => {
    const screenWidth = useWindowWidth();
    const [currentSection, setCurrentSection] = useState('overview');
    const sections = ['overview', 'benefits', 'caseStudy', 'next'];

    // Function to handle section change
    const onSectionChange = section => {
        setCurrentSection(section);
    };

    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });

        scrollSpy.update();

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        };
    }, []);


    // Calculate top offset for the rectangle marker based on the current section
    const calculateMarkerTop = () => {
        const index = sections.indexOf(currentSection);
        return `${index * 50}px`; // Starts at 0px for the first section
    };

    const calculateTopPosition = () => {
        let position;
        switch (currentSection) {
            case 'overview':
                position = "70px";
                break;
            case 'benefits':
                position = "900px";
                break;
            case 'caseStudy':
                position = "2039px";
                break;
            case 'next':
                position = "2439px";
                break;
            default:
                position = "70px";
                break;
        }
        console.log(`Current section: ${currentSection}, Top position: ${position}`);
        return position;
    };

    const handleSetActive = (to) => {
        console.log(to);
        setCurrentSection(to);
    };

    return (
        <div className="relative top-[122px] flex justify-center w-full bg-[#f7f7f5]" 
        style={{
            height: screenWidth < 1440 ? "2288px" : screenWidth >= 1440 ? "3217px" : undefined,
        }}>
        <div
            className="Aservices-desktop"
            style={{
                height: screenWidth < 1440 ? "2288px" : screenWidth >= 1440 ? "3217px" : undefined,
                overflow: screenWidth < 1440 ? "hidden" : undefined,
                width: screenWidth < 1440 ? "1024px" : screenWidth >= 1440 ? "1440px" : undefined,
            }}
        >
            <div
                className="Aframe"
                style={{
                    height: screenWidth < 1440 ? "2288px" : screenWidth >= 1440 ? "3217px" : undefined,
                    left: screenWidth < 1440 ? "285px" : screenWidth >= 1440 ? "401px" : undefined,
                    width: screenWidth < 1440 ? "739px" : screenWidth >= 1440 ? "1039px" : undefined,
                }}
            >
                <Element
                    name="overview"
                    className="Aoverview"
                    id="overview"
                    style={{
                        left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "43px" : undefined,
                        top: screenWidth < 1440 ? "92px" : screenWidth >= 1440 ? "130px" : undefined,
                    }}
                >
                    <div
                        className="Adiv"
                        style={{
                            gap: screenWidth < 1440 ? "27.73px" : screenWidth >= 1440 ? "39px" : undefined,
                        }}
                    >
                        <div
                            className="Aframe-2"
                            style={{
                                gap: screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                            }}
                        >
                            <div
                                className="Atext-wrapper"
                                style={{
                                    fontFamily:
                                        screenWidth < 1440
                                            ? "'Urbanist', Helvetica"
                                            : screenWidth >= 1440
                                                ? "var(--h3-font-family)"
                                                : undefined,
                                    fontSize: screenWidth < 1440 ? "30.6px" : screenWidth >= 1440 ? "var(--h3-font-size)" : undefined,
                                    fontStyle: screenWidth >= 1440 ? "var(--h3-font-style)" : undefined,
                                    fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h3-font-weight)" : undefined,
                                    letterSpacing:
                                        screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h3-letter-spacing)" : undefined,
                                    lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h3-line-height)" : undefined,
                                    marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                                }}
                            >
                                Overview
                            </div>
                            <img
                                className="Aline"
                                style={{
                                    left: screenWidth < 1440 ? "2px" : screenWidth >= 1440 ? "3px" : undefined,
                                    top: screenWidth < 1440 ? "34px" : screenWidth >= 1440 ? "48px" : undefined,
                                    width: screenWidth < 1440 ? "128px" : screenWidth >= 1440 ? "180px" : undefined,
                                }}
                                alt="Line"
                                src={screenWidth < 1440 ? "mainser/line-7.svg" : screenWidth >= 1440 ? "mainser/line-7-4.svg" : undefined}
                            />
                        </div>
                        <div
                            className="Aframe-3"
                            style={{
                                gap: screenWidth < 1440 ? "8.53px" : screenWidth >= 1440 ? "12px" : undefined,
                            }}
                        >
                            <p
                                className="Avoip-lifecycle"
                                style={{
                                    fontFamily:
                                        screenWidth < 1440
                                            ? "'Urbanist', Helvetica"
                                            : screenWidth >= 1440
                                                ? "var(--TS-l-font-family)"
                                                : undefined,
                                    fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                    fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                    fontWeight: screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                    letterSpacing:
                                        screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                    lineHeight:
                                        screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                    marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                                    width: screenWidth < 1440 ? "445.87px" : screenWidth >= 1440 ? "627px" : undefined,
                                }}
                            >
                                VoIP Lifecycle Management Services encompass the complete spectrum of managing your VoIP system from
                                start to finish. We begin with a thorough assessment of your communication needs, followed by detailed
                                provisioning processes to ensure a seamless and precise setup. This includes configuring hardware,
                                software, and network settings to optimize performance. <br /> <br />
                                Our services extend to advanced SIP-related troubleshooting, where our team of experts swiftly diagnose
                                and resolve any issues that arise, ensuring your communication remains uninterrupted. We specialize in
                                creating customized dial plans and translation rules tailored to your specific business requirements,
                                enhancing the efficiency and functionality of your VoIP system.
                            </p>
                            <p
                                className="Aongoing-support-and z-10"
                                style={{
                                    fontFamily:
                                        screenWidth < 1440
                                            ? "'Urbanist', Helvetica"
                                            : screenWidth >= 1440
                                                ? "var(--TS-l-font-family)"
                                                : undefined,
                                    fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                    fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                    fontWeight: screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                    letterSpacing:
                                        screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                    lineHeight:
                                        screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                    width: screenWidth < 1440 ? "682.67px" : screenWidth >= 1440 ? "960px" : undefined,
                                }}
                            >
                                Ongoing support and maintenance are integral to our service, with regular system monitoring, updates,
                                and optimization to keep your VoIP infrastructure running smoothly. We provide training and
                                documentation to empower your team, ensuring they are well-equipped to utilize and manage the system
                                effectively. <br /> <br />
                                Our VoIP Lifecycle Management Services offer a holistic approach to managing your VoIP system, from
                                initial deployment through continuous improvement, guaranteeing reliable and efficient communication for
                                your business.
                            </p>
                            <img
                                className="Apexels-pavel"
                                style={{
                                    height: screenWidth < 1440 ? "339px" : screenWidth >= 1440 ? "476px" : undefined,
                                    left: screenWidth < 1440 ? "457px" : screenWidth >= 1440 ? "642px" : undefined,
                                    top: screenWidth < 1440 ? "-13px" : screenWidth >= 1440 ? "-18px" : undefined,
                                    width: screenWidth < 1440 ? "226px" : screenWidth >= 1440 ? "318px" : undefined,
                                }}
                                alt="Pexels pavel"
                                src={
                                    screenWidth < 1440
                                        ? "mainser/pexels-pavel-danilyuk-7658430-1.png"
                                        : screenWidth >= 1440
                                            ? "mainser/pexels-pavel-danilyuk-7658430-1-1.png"
                                            : undefined
                                }
                            />
                        </div>
                    </div>
                </Element>
                <div
                    className="Aframe-4"
                    style={{
                        gap: screenWidth < 1440 ? "14.93px" : screenWidth >= 1440 ? "21px" : undefined,
                        left: screenWidth < 1440 ? "23px" : screenWidth >= 1440 ? "33px" : undefined,
                        top: screenWidth < 1440 ? "22px" : screenWidth >= 1440 ? "31px" : undefined,
                    }}
                >
                    <div
                        className="Atext-wrapper-2"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h4-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "21.3px" : screenWidth >= 1440 ? "var(--h4-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h4-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h4-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h4-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h4-line-height)" : undefined,
                            marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                            whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                        }}
                    >
                        Technical Support
                    </div>
                    <img
                        className="Avector"
                        style={{
                            height: screenWidth < 1440 ? "14.19px" : screenWidth >= 1440 ? "19.95px" : undefined,
                            width: screenWidth < 1440 ? "8.53px" : screenWidth >= 1440 ? "12px" : undefined,
                        }}
                        alt="Vector"
                        src={screenWidth < 1440 ? "mainser/vector.svg" : screenWidth >= 1440 ? "mainser/vector-1.svg" : undefined}
                    />
                    <div
                        className="Atext-wrapper-3"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h4-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "21.3px" : screenWidth >= 1440 ? "var(--h4-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h4-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h4-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h4-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h4-line-height)" : undefined,
                            marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                            whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                        }}
                    >
                        VoIP Lifecycle Management Services
                    </div>
                </div>
                <Element
                    name="benefits"
                    className="Aframe-5"
                    id="benefits"
                    style={{
                        gap: screenWidth < 1440 ? "27.73px" : screenWidth >= 1440 ? "39px" : undefined,
                        left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                        top: screenWidth < 1440 ? "705px" : screenWidth >= 1440 ? "992px" : undefined,
                    }}
                >
                    <div
                        className="Aframe-6"
                        style={{
                            gap: screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        }}
                    >
                        <div
                            className="Atext-wrapper-4"
                            style={{
                                fontFamily:
                                    screenWidth < 1440
                                        ? "'Urbanist', Helvetica"
                                        : screenWidth >= 1440
                                            ? "var(--h3-font-family)"
                                            : undefined,
                                fontSize: screenWidth < 1440 ? "30.6px" : screenWidth >= 1440 ? "var(--h3-font-size)" : undefined,
                                fontStyle: screenWidth >= 1440 ? "var(--h3-font-style)" : undefined,
                                fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h3-font-weight)" : undefined,
                                letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h3-letter-spacing)" : undefined,
                                lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h3-line-height)" : undefined,
                                marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                            }}
                        >
                            Benefits
                        </div>
                        <img
                            className="Aimg"
                            style={{
                                left: screenWidth < 1440 ? "2px" : screenWidth >= 1440 ? "3px" : undefined,
                                top: screenWidth < 1440 ? "34px" : screenWidth >= 1440 ? "48px" : undefined,
                                width: screenWidth < 1440 ? "107px" : screenWidth >= 1440 ? "150px" : undefined,
                            }}
                            alt="Line"
                            src={screenWidth < 1440 ? "mainser/line-7-1.svg" : screenWidth >= 1440 ? "mainser/line-7-5.svg" : undefined}
                        />
                    </div>
                    <div
                        className="Aframe-7"
                        style={{
                            gap: screenWidth < 1440 ? "39px 25.6px" : screenWidth >= 1440 ? "39px 36px" : undefined,
                            width: screenWidth < 1440 ? "669.87px" : screenWidth >= 1440 ? "942px" : undefined,
                        }}
                    >
                        <div
                            className="Aframe-wrapper"
                            style={{
                                height: screenWidth < 1440 ? "293.69px" : screenWidth >= 1440 ? "413px" : undefined,
                                width: screenWidth < 1440 ? "322.13px" : screenWidth >= 1440 ? "453px" : undefined,
                            }}
                        >
                            <div
                                className="Aframe-8"
                                style={{
                                    gap: screenWidth < 1440 ? "44.8px" : screenWidth >= 1440 ? "63px" : undefined,
                                    left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                                    top: screenWidth < 1440 ? "18px" : screenWidth >= 1440 ? "26px" : undefined,
                                }}
                            >
                                <div
                                    className="Aframe-9"
                                    style={{
                                        gap: screenWidth < 1440 ? "9.24px" : screenWidth >= 1440 ? "13px" : undefined,
                                    }}
                                >
                                    <img
                                        className="Agroup"
                                        style={{
                                            height: screenWidth < 1440 ? "58.8px" : screenWidth >= 1440 ? "82.69px" : undefined,
                                            width: screenWidth < 1440 ? "59.02px" : screenWidth >= 1440 ? "83px" : undefined,
                                        }}
                                        alt="Group"
                                        src={screenWidth < 1440 ? "mainser/group.png" : screenWidth >= 1440 ? "mainser/group-2.png" : undefined}
                                    />
                                    <div
                                        className="Atext-wrapper-5"
                                        style={{
                                            fontFamily:
                                                screenWidth < 1440
                                                    ? "'Urbanist', Helvetica"
                                                    : screenWidth >= 1440
                                                        ? "var(--h5-font-family)"
                                                        : undefined,
                                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                            fontWeight:
                                                screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                            letterSpacing:
                                                screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                            lineHeight:
                                                screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                            width: screenWidth < 1440 ? "160.71px" : screenWidth >= 1440 ? "226px" : undefined,
                                        }}
                                    >
                                        Seamless Integration
                                    </div>
                                </div>
                                <p
                                    className="Ap"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--TS-l-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                        fontWeight:
                                            screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                        width: screenWidth < 1440 ? "259.56px" : screenWidth >= 1440 ? "365px" : undefined,
                                    }}
                                >
                                    Our detailed provisioning processes ensure a smooth and precise setup, minimizing disruptions and
                                    getting your VoIP system operational quickly.
                                </p>
                            </div>
                        </div>
                        <div
                            // className="Adiv-wrapper"
                            className="Aframe-wrapper"
                            style={{
                                height: screenWidth < 1440 ? "293.69px" : screenWidth >= 1440 ? "413px" : undefined,
                                width: screenWidth < 1440 ? "322.13px" : screenWidth >= 1440 ? "453px" : undefined,
                            }}
                        >
                            <div
                                className="Aframe-10"
                                style={{
                                    gap: screenWidth < 1440 ? "44.8px" : screenWidth >= 1440 ? "63px" : undefined,
                                    left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                                    top: screenWidth < 1440 ? "18px" : screenWidth >= 1440 ? "26px" : undefined,
                                }}
                            >
                                <div
                                    className="Aframe-11"
                                    style={{
                                        gap: screenWidth < 1440 ? "9.24px" : screenWidth >= 1440 ? "13px" : undefined,
                                    }}
                                >
                                    <img
                                        className="Agroup-2"
                                        style={{
                                            height: screenWidth < 1440 ? "59.78px" : screenWidth >= 1440 ? "84.06px" : undefined,
                                            width: screenWidth < 1440 ? "59.02px" : screenWidth >= 1440 ? "83px" : undefined,
                                        }}
                                        alt="Group"
                                        src={screenWidth < 1440 ? "mainser/group-1.png" : screenWidth >= 1440 ? "mainser/group-3.png" : undefined}
                                    />
                                    <div
                                        className="Atext-wrapper-6"
                                        style={{
                                            fontFamily:
                                                screenWidth < 1440
                                                    ? "'Urbanist', Helvetica"
                                                    : screenWidth >= 1440
                                                        ? "var(--h5-font-family)"
                                                        : undefined,
                                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                            fontWeight:
                                                screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                            letterSpacing:
                                                screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                            lineHeight:
                                                screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                            width: screenWidth < 1440 ? "184.18px" : screenWidth >= 1440 ? "259px" : undefined,
                                        }}
                                    >
                                        Optimized Performance
                                    </div>
                                </div>
                                <p
                                    className="Atext-wrapper-7"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--TS-l-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                        fontWeight:
                                            screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                        width: screenWidth < 1440 ? "259.56px" : screenWidth >= 1440 ? "365px" : undefined,
                                    }}
                                >
                                    Regular system monitoring and maintenance keep your VoIP infrastructure running at peak performance,
                                    reducing downtime and enhancing reliability.
                                </p>
                            </div>
                        </div>
                        <div
                            // className="Aframe-12"
                            className="Aframe-wrapper"

                            style={{
                                height: screenWidth < 1440 ? "293.69px" : screenWidth >= 1440 ? "413px" : undefined,
                                width: screenWidth < 1440 ? "322.13px" : screenWidth >= 1440 ? "453px" : undefined,
                            }}
                        >
                            <div
                                className="Aframe-13"
                                style={{
                                    gap: screenWidth < 1440 ? "44.8px" : screenWidth >= 1440 ? "63px" : undefined,
                                    left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                                    top: screenWidth < 1440 ? "18px" : screenWidth >= 1440 ? "26px" : undefined,
                                }}
                            >
                                <div
                                    className="Aframe-14"
                                    style={{
                                        gap: screenWidth < 1440 ? "30.58px" : screenWidth >= 1440 ? "43px" : undefined,
                                    }}
                                >
                                    <div
                                        className="Agroup-3"
                                        style={{
                                            height: screenWidth < 1440 ? "37.33px" : screenWidth >= 1440 ? "52.5px" : undefined,
                                            width: screenWidth < 1440 ? "55.47px" : screenWidth >= 1440 ? "78px" : undefined,
                                        }}
                                    >
                                        <svg width="87" height="53" viewBox="0 0 87 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M44.5 11H82.5" stroke="black" stroke-width="8" stroke-linecap="round" />
                                            <path d="M4.5 41H42.5" stroke="black" stroke-width="8" stroke-linecap="round" />
                                            <path d="M6.5 11H9.5" stroke="black" stroke-width="8" stroke-linecap="round" />
                                            <path d="M77.5 41H80.5" stroke="black" stroke-width="8" stroke-linecap="round" />
                                            <circle cx="60.5" cy="41.5" r="7.5" stroke="#FF4E4E" stroke-width="7" />
                                            <circle cx="26.5" cy="11" r="7.5" stroke="#FF4E4E" stroke-width="7" />
                                        </svg>

                                    </div>
                                    <div
                                        className="Atext-wrapper-8"
                                        style={{
                                            fontFamily:
                                                screenWidth < 1440
                                                    ? "'Urbanist', Helvetica"
                                                    : screenWidth >= 1440
                                                        ? "var(--h5-font-family)"
                                                        : undefined,
                                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                            fontWeight:
                                                screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                            letterSpacing:
                                                screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                            lineHeight:
                                                screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                            width: screenWidth < 1440 ? "175.64px" : screenWidth >= 1440 ? "247px" : undefined,
                                        }}
                                    >
                                        Customized Solutions
                                    </div>
                                </div>
                                <p
                                    className="Atext-wrapper-9"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--TS-l-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                        fontWeight:
                                            screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                        width: screenWidth < 1440 ? "259.56px" : screenWidth >= 1440 ? "365px" : undefined,
                                    }}
                                >
                                    Custom dial plans and translation rules designed to meet your specific business needs, improving
                                    efficiency and functionality in your communication system.
                                </p>
                            </div>
                        </div>
                        <div
                            // className="Aframe-15"
                            className="Aframe-wrapper"
                            style={{
                                height: screenWidth < 1440 ? "293.69px" : screenWidth >= 1440 ? "413px" : undefined,
                                width: screenWidth < 1440 ? "322.13px" : screenWidth >= 1440 ? "453px" : undefined,
                            }}
                        >
                            <div
                                className="Aframe-16"
                                style={{
                                    gap: screenWidth < 1440 ? "44.8px" : screenWidth >= 1440 ? "63px" : undefined,
                                    left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                                    top: screenWidth < 1440 ? "18px" : screenWidth >= 1440 ? "26px" : undefined,
                                }}
                            >
                                <div
                                    className="Aframe-17"
                                    style={{
                                        gap: screenWidth < 1440 ? "9.24px" : screenWidth >= 1440 ? "13px" : undefined,
                                    }}
                                >
                                    <img
                                        className="Amask-group"
                                        style={{
                                            height: screenWidth < 1440 ? "52.46px" : screenWidth >= 1440 ? "73.78px" : undefined,
                                            width: screenWidth < 1440 ? "59.02px" : screenWidth >= 1440 ? "83px" : undefined,
                                        }}
                                        alt="Mask group"
                                        src={
                                            screenWidth < 1440
                                                ? "mainser/mask-group.png"
                                                : screenWidth >= 1440
                                                    ? "mainser/mask-group-1.png"
                                                    : undefined
                                        }
                                    />
                                    <div
                                        className="Atext-wrapper-10"
                                        style={{
                                            fontFamily:
                                                screenWidth < 1440
                                                    ? "'Urbanist', Helvetica"
                                                    : screenWidth >= 1440
                                                        ? "var(--h5-font-family)"
                                                        : undefined,
                                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                            fontWeight:
                                                screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                            letterSpacing:
                                                screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                            lineHeight:
                                                screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                            width: screenWidth < 1440 ? "194.13px" : screenWidth >= 1440 ? "273px" : undefined,
                                        }}
                                    >
                                        Comprehensive Support
                                    </div>
                                </div>
                                <p
                                    className="Atext-wrapper-11"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--TS-l-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--TS-l-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--TS-l-font-style)" : undefined,
                                        fontWeight:
                                            screenWidth < 1440 ? "500" : screenWidth >= 1440 ? "var(--TS-l-font-weight)" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--TS-l-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "20.5px" : screenWidth >= 1440 ? "var(--TS-l-line-height)" : undefined,
                                        width: screenWidth < 1440 ? "259.56px" : screenWidth >= 1440 ? "365px" : undefined,
                                    }}
                                >
                                    Regular system monitoring and maintenance keep your VoIP infrastructure running at peak performance,
                                    reducing downtime and enhancing reliability.
                                </p>
                            </div>
                        </div>
                    </div>
                </Element>

                <Element
                    name="caseStudy"
                    className="Aframe-21"
                    id="caseStudy"
                    style={{
                        gap: screenWidth < 1440 ? "29.16px" : screenWidth >= 1440 ? "41px" : undefined,
                        left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "43px" : undefined,
                        top: screenWidth < 1440 ? "1450px" : screenWidth >= 1440 ? "2039px" : undefined,
                    }}
                >
                    <div
                        className="Aframe-22"
                        style={{
                            gap: screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        }}
                    >
                        <div
                            className="Atext-wrapper-15"
                            style={{
                                fontFamily:
                                    screenWidth < 1440
                                        ? "'Urbanist', Helvetica"
                                        : screenWidth >= 1440
                                            ? "var(--h3-font-family)"
                                            : undefined,
                                fontSize: screenWidth < 1440 ? "30.6px" : screenWidth >= 1440 ? "var(--h3-font-size)" : undefined,
                                fontStyle: screenWidth >= 1440 ? "var(--h3-font-style)" : undefined,
                                fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h3-font-weight)" : undefined,
                                letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h3-letter-spacing)" : undefined,
                                lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h3-line-height)" : undefined,
                                marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                            }}
                        >
                            Case Study
                        </div>
                        <img
                            className="Aline-7"
                            style={{
                                left: screenWidth < 1440 ? "2px" : screenWidth >= 1440 ? "3px" : undefined,
                                top: screenWidth < 1440 ? "34px" : screenWidth >= 1440 ? "48px" : undefined,
                                width: screenWidth < 1440 ? "135px" : screenWidth >= 1440 ? "190px" : undefined,
                            }}
                            alt="Line"
                            src={screenWidth < 1440 ? "mainser/line-7-3.svg" : screenWidth >= 1440 ? "mainser/line-7-7.svg" : undefined}
                        />
                    </div>
                    <div
                        className="Aframe-23"
                        style={{
                            gap: screenWidth < 1440 ? "25.6px" : screenWidth >= 1440 ? "36px" : undefined,
                        }}
                    >
                        <div
                            className="Aoverlap-group-wrapper"
                            style={{
                                backgroundImage:
                                    screenWidth < 1440
                                        ? "url(mainser/pexels-fauxels-3183165-1.png)"
                                        : screenWidth >= 1440
                                            ? "url(mainser/pexels-fauxels-3183165-1-1.png)"
                                            : undefined,
                                height: screenWidth < 1440 ? "369.78px" : screenWidth >= 1440 ? "520px" : undefined,
                                overflow: screenWidth < 1440 ? "hidden" : undefined,
                                width: screenWidth < 1440 ? "322.84px" : screenWidth >= 1440 ? "454px" : undefined,
                            }}
                        >
                            <div
                                className="Aoverlap-group"
                                style={{
                                    WebkitBackdropFilter:
                                        screenWidth < 1440
                                            ? "blur(8.39px) brightness(100%)"
                                            : screenWidth >= 1440
                                                ? "blur(11.8px) brightness(100%)"
                                                : undefined,
                                    backdropFilter:
                                        screenWidth < 1440
                                            ? "blur(8.39px) brightness(100%)"
                                            : screenWidth >= 1440
                                                ? "blur(11.8px) brightness(100%)"
                                                : undefined,
                                    height: screenWidth < 1440 ? "119px" : screenWidth >= 1440 ? "168px" : undefined,
                                    top: screenWidth < 1440 ? "250px" : screenWidth >= 1440 ? "352px" : undefined,
                                    width: screenWidth < 1440 ? "323px" : undefined,
                                }}
                            >
                                <div
                                    className="Atext-wrapper-16"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--h4-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "21.3px" : screenWidth >= 1440 ? "var(--h4-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--h4-font-style)" : undefined,
                                        fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h4-font-weight)" : undefined,
                                        left: screenWidth < 1440 ? "108px" : screenWidth >= 1440 ? "152px" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h4-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h4-line-height)" : undefined,
                                        top: screenWidth < 1440 ? "49px" : screenWidth >= 1440 ? "69px" : undefined,
                                        whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                                    }}
                                >
                                    Case Study 1
                                </div>
                            </div>
                        </div>
                        <div
                            className="Aoverlap-wrapper"
                            style={{
                                backgroundImage:
                                    screenWidth < 1440
                                        ? "url(mainser/pexels-lina-3394141-1.png)"
                                        : screenWidth >= 1440
                                            ? "url(mainser/pexels-lina-3394141-1-1.png)"
                                            : undefined,
                                height: screenWidth < 1440 ? "369.78px" : screenWidth >= 1440 ? "520px" : undefined,
                                overflow: screenWidth < 1440 ? "hidden" : undefined,
                                width: screenWidth < 1440 ? "322.84px" : screenWidth >= 1440 ? "454px" : undefined,
                            }}
                        >
                            <div
                                className="Aoverlap"
                                style={{
                                    WebkitBackdropFilter:
                                        screenWidth < 1440
                                            ? "blur(8.39px) brightness(100%)"
                                            : screenWidth >= 1440
                                                ? "blur(11.8px) brightness(100%)"
                                                : undefined,
                                    backdropFilter:
                                        screenWidth < 1440
                                            ? "blur(8.39px) brightness(100%)"
                                            : screenWidth >= 1440
                                                ? "blur(11.8px) brightness(100%)"
                                                : undefined,
                                    height: screenWidth < 1440 ? "119px" : screenWidth >= 1440 ? "168px" : undefined,
                                    top: screenWidth < 1440 ? "250px" : screenWidth >= 1440 ? "352px" : undefined,
                                    width: screenWidth < 1440 ? "323px" : undefined,
                                }}
                            >
                                <div
                                    className="Atext-wrapper-17"
                                    style={{
                                        fontFamily:
                                            screenWidth < 1440
                                                ? "'Urbanist', Helvetica"
                                                : screenWidth >= 1440
                                                    ? "var(--h4-font-family)"
                                                    : undefined,
                                        fontSize: screenWidth < 1440 ? "21.3px" : screenWidth >= 1440 ? "var(--h4-font-size)" : undefined,
                                        fontStyle: screenWidth >= 1440 ? "var(--h4-font-style)" : undefined,
                                        fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h4-font-weight)" : undefined,
                                        left: screenWidth < 1440 ? "108px" : screenWidth >= 1440 ? "152px" : undefined,
                                        letterSpacing:
                                            screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h4-letter-spacing)" : undefined,
                                        lineHeight:
                                            screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h4-line-height)" : undefined,
                                        top: screenWidth < 1440 ? "49px" : screenWidth >= 1440 ? "69px" : undefined,
                                        whiteSpace: screenWidth >= 1440 ? "nowrap" : undefined,
                                    }}
                                >
                                    Case Study 2
                                </div>
                            </div>
                        </div>
                    </div>
                </Element>
                <Element
                    name="next"
                    className="Anext"
                    id="next"
                    style={{
                        gap: screenWidth < 1440 ? "39.82px" : screenWidth >= 1440 ? "56px" : undefined,
                        left: screenWidth < 1440 ? "33px" : screenWidth >= 1440 ? "46px" : undefined,
                        top: screenWidth < 1440 ? "1985px" : screenWidth >= 1440 ? "2791px" : undefined,
                    }}
                >
                    <div
                        className="Aframe-18"
                        style={{
                            gap: screenWidth < 1440 ? "32.71px" : screenWidth >= 1440 ? "46px" : undefined,
                        }}
                    >
                        <div
                            className="Aframe-19"
                            style={{
                                gap: screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                            }}
                        >
                            <div
                                className="Atext-wrapper-12"
                                style={{
                                    fontFamily:
                                        screenWidth < 1440
                                            ? "'Urbanist', Helvetica"
                                            : screenWidth >= 1440
                                                ? "var(--h3-font-family)"
                                                : undefined,
                                    fontSize: screenWidth < 1440 ? "30.6px" : screenWidth >= 1440 ? "var(--h3-font-size)" : undefined,
                                    fontStyle: screenWidth >= 1440 ? "var(--h3-font-style)" : undefined,
                                    fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h3-font-weight)" : undefined,
                                    letterSpacing:
                                        screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h3-letter-spacing)" : undefined,
                                    lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h3-line-height)" : undefined,
                                    marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                                }}
                            >
                                Next Step
                            </div>
                            <img
                                className="Aline-6"
                                style={{
                                    left: screenWidth < 1440 ? "2px" : screenWidth >= 1440 ? "3px" : undefined,
                                    top: screenWidth < 1440 ? "34px" : screenWidth >= 1440 ? "48px" : undefined,
                                    width: screenWidth < 1440 ? "135px" : screenWidth >= 1440 ? "190px" : undefined,
                                }}
                                alt="Line"
                                src={screenWidth < 1440 ? "mainser/line-7-2.svg" : screenWidth >= 1440 ? "mainser/line-7-7.svg" : undefined}
                            />
                        </div>
                        <p
                            className="Atext-wrapper-13"
                            style={{
                                fontFamily:
                                    screenWidth < 1440
                                        ? "'Urbanist', Helvetica"
                                        : screenWidth >= 1440
                                            ? "var(--h5-font-family)"
                                            : undefined,
                                fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                width: screenWidth < 1440 ? "628.62px" : screenWidth >= 1440 ? "884px" : undefined,
                            }}
                        >
                            Take the next step with us. Enhance your business communication with our expert support and comprehensive
                            services.
                        </p>
                    </div>
                    <div
                        className="Aframe-20"
                        style={{
                            borderRadius: screenWidth < 1440 ? "10.67px" : screenWidth >= 1440 ? "15px" : undefined,
                            gap: screenWidth < 1440 ? "12.8px" : screenWidth >= 1440 ? "18px" : undefined,
                            padding:
                                screenWidth < 1440
                                    ? "5.69px 16.36px 5.69px 12.8px"
                                    : screenWidth >= 1440
                                        ? "8px 23px 8px 18px"
                                        : undefined,
                            width: screenWidth < 1440 ? "161.42px" : screenWidth >= 1440 ? "227px" : undefined,
                        }}
                    >
                        <div
                            className="Atext-wrapper-14"
                            style={{
                                fontFamily:
                                    screenWidth < 1440
                                        ? "'Urbanist', Helvetica"
                                        : screenWidth >= 1440
                                            ? "var(--h5-font-family)"
                                            : undefined,
                                fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                                fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                                fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                                letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                                lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                                marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                                whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                            }}
                        >
                            Book a meeting
                        </div>
                        <img
                            className="Avector-2"
                            style={{
                                height: screenWidth < 1440 ? "8px" : screenWidth >= 1440 ? "11px" : undefined,
                                left: screenWidth < 1440 ? "140px" : screenWidth >= 1440 ? "197px" : undefined,
                                top: screenWidth < 1440 ? "12px" : screenWidth >= 1440 ? "17px" : undefined,
                                width: screenWidth < 1440 ? "12px" : screenWidth >= 1440 ? "17px" : undefined,
                            }}
                            alt="Vector"
                            src={
                                screenWidth < 1440 ? "mainser/vector-190.svg" : screenWidth >= 1440 ? "mainser/vector-190-1.svg" : undefined
                            }
                        />
                    </div>
                </Element>
            </div>



            <div
                className="Aframe-24"
                style={{
                    height: screenWidth < 1440 ? "2288px" : screenWidth >= 1440 ? "3217px" : undefined,
                    width: screenWidth < 1440 ? "274px" : screenWidth >= 1440 ? "385px" : undefined,
                }}
            >
                <div

                    className="Aoverlap-2"
                    style={{
                        height: screenWidth < 1440 ? "121px" : screenWidth >= 1440 ? "170px" : undefined,
                        left: screenWidth < 1440 ? "82px" : screenWidth >= 1440 ? "115px" : undefined,
                        top: screenWidth < 1440 ? "50px" : screenWidth >= 1440 ? "70px" : undefined,
                        width: screenWidth < 1440 ? "4px" : screenWidth >= 1440 ? "5px" : undefined,
                    }}
                >
                    <img
                        className="Aline-8 h-[130px]"
                        style={{
                            left: screenWidth < 1440 ? "1px" : screenWidth >= 1440 ? "2px" : undefined,
                            objectFit: screenWidth >= 1440 ? "cover" : undefined,
                        }}
                        alt="Line"
                        src={screenWidth < 1440 ? "mainser/line-8.svg" : screenWidth >= 1440 ? "mainser/line-8-1.svg" : undefined}
                    />
                    <div
                        className="Arectangle"
                        style={{
                            borderRadius: screenWidth < 1440 ? "9.96px" : screenWidth >= 1440 ? "14px" : undefined,
                            height: screenWidth < 1440 ? "21px" : screenWidth >= 1440 ? "29px" : undefined,
                            width: screenWidth < 1440 ? "4px" : screenWidth >= 1440 ? "5px" : undefined,
                            top: calculateMarkerTop(),

                        }}
                    />
                </div>
                <div
                    className="Aframe-25"
                    style={{
                        gap: screenWidth < 1440 ? "14.22px" : screenWidth >= 1440 ? "20px" : undefined,
                        left: screenWidth < 1440 ? "93px" : screenWidth >= 1440 ? "131px" : undefined,
                        top: screenWidth < 1440 ? "50px" : screenWidth >= 1440 ? "70px" : undefined,
                    }}
                >
                    <div
                        className="Atext-wrapper-20"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                            marginTop: screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                            whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                        }}
                    >
                        <Link to="overview" spy={true} smooth={true} duration={50} onSetActive={handleSetActive}>
                            <div className="Atext-wrapper-18">Overview</div>
                        </Link>
                    </div>
                    <div
                        className="Atext-wrapper-20"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                            whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                        }}
                    >
                        <Link to="benefits" spy={true} smooth={true} duration={50} onSetActive={handleSetActive}>
                            <div className="Atext-wrapper-19">Benefits</div>
                        </Link>
                    </div>
                    <div
                        className="Atext-wrapper-20"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                            whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                        }}
                    >
                        <Link to="caseStudy" spy={true} smooth={true} duration={50} onSetActive={handleSetActive}>
                            <div className="Atext-wrapper-20">Case Study</div>
                        </Link>
                    </div>
                    {/* <div
                        className="Atext-wrapper-20"
                        style={{
                            fontFamily:
                                screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h5-font-family)"
                                        : undefined,
                            fontSize: screenWidth < 1440 ? "17.1px" : screenWidth >= 1440 ? "var(--h5-font-size)" : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h5-font-style)" : undefined,
                            fontWeight: screenWidth < 1440 ? "600" : screenWidth >= 1440 ? "var(--h5-font-weight)" : undefined,
                            letterSpacing: screenWidth < 1440 ? "0" : screenWidth >= 1440 ? "var(--h5-letter-spacing)" : undefined,
                            lineHeight: screenWidth < 1440 ? "normal" : screenWidth >= 1440 ? "var(--h5-line-height)" : undefined,
                            whiteSpace: screenWidth < 1440 ? "nowrap" : undefined,
                        }}
                    >
                        <Link to="next" spy={true} smooth={true} duration={50} onSetActive={handleSetActive}>
                            <div className="Atext-wrapper-21">Next</div>
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default ServicesDesktop