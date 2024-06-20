import React, { useState, useEffect } from "react";
import { useWindowWidth } from "../../breakpoints";
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import "./styles/desk.css";
import { useLocation, useNavigate } from 'react-router-dom';
import contentConfig from './contentConfig';
import vector from "../../../public/mainser/vector.svg"
import vector_1 from "../../../public/mainser/vector-1.svg"
import pexelDesk from "../../../public/mainser/pexels-pavel-danilyuk-7658430-1-1.png"
import pexelTab from "../../../public/mainser/pexels-pavel-danilyuk-7658430-1.png"
import pexelslina1 from "../../../public/mainser/pexels-lina-3394141-1.png"
import pexelslina1_1 from "../../../public/mainser/pexels-lina-3394141-1-1.png"
import pexelsfauxels1 from "../../../public/mainser/pexels-fauxels-3183165-1.png"
import pexelsfauxels1_1 from "../../../public/mainser/pexels-fauxels-3183165-1-1.png"
import vector190 from "../../../public/mainser/vector-190.svg"
import vector190_1 from "../../../public/mainser/vector-190-1.svg"
import line8 from "../../../public/mainser/line-8.svg"
import line8_1 from "../../../public/mainser/line-8-1.svg"



const ServicesDesktop = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const content = contentConfig[location.pathname];
    if (!content) {
        return <div>Content not found</div>;
    }
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
        <div className="relative top-[122px] flex justify-center w-full"
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
                            className="Aline-8"
                            style={{
                                left: screenWidth < 1440 ? "1px" : screenWidth >= 1440 ? "2px" : undefined,
                                objectFit: screenWidth >= 1440 ? "cover" : undefined,
                                height: screenWidth < 1440 ? "90px" : screenWidth >= 1440 ? "130px" : undefined,
                            }}
                            alt="Line"
                            src={screenWidth < 1440 ? line8 : screenWidth >= 1440 ? line8_1 : undefined}
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
                    </div>
                </div>
                <div
                    className="Aframe items-center"
                    style={{
                        height: screenWidth < 1440 ? "2288px" : screenWidth >= 1440 ? "3217px" : undefined,
                        left: screenWidth < 1440 ? "285px" : screenWidth >= 1440 ? "401px" : undefined,
                        width: screenWidth < 1440 ? "739px" : screenWidth >= 1440 ? "1039px" : undefined,
                    }}
                >
                    <div
                        className="Aframe-4"
                        style={{
                            gap: screenWidth < 1440 ? "14.93px" : screenWidth >= 1440 ? "21px" : undefined,
                            left: screenWidth < 1440 ? "23px" : screenWidth >= 1440 ? "11px" : undefined,
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
                            {content.titleMain}
                        </div>
                        <img
                            className="Avector"
                            style={{
                                height: screenWidth < 1440 ? "14.19px" : screenWidth >= 1440 ? "19.95px" : undefined,
                                width: screenWidth < 1440 ? "8.53px" : screenWidth >= 1440 ? "12px" : undefined,
                            }}
                            alt="Vector"
                            src={screenWidth < 1440 ? vector : screenWidth >= 1440 ? vector_1 : undefined}
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
                            }}
                        >
                            {content.title}
                        </div>
                    </div>
                    <Element
                        name="overview"
                        className="Aoverview"
                        id="overview"
                        style={{
                            left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "43px" : undefined,
                            // top: screenWidth < 1440 ? "92px" : screenWidth >= 1440 ? "130px" : undefined,
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
                                        width: screenWidth < 1440 ? "682px" : screenWidth >= 1440 ? "961px" : undefined,
                                    }}
                                >
                                    {content.overview.text1}<br /> <br />
                                    {content.overview.text1_1 ? content.overview.text1_1 : null}
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
                                    {content.overview.text2} <br /> <br />
                                    {content.overview.text2 ? content.overview.text2 : null}
                                </p>
                                {/* <img
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
                                            ? pexelTab
                                            : screenWidth >= 1440
                                                ? pexelDesk
                                                : undefined
                                    }
                                /> */}
                            </div>
                        </div>
                    </Element>

                    <Element
                        name="benefits"
                        className="Aframe-5"
                        id="benefits"
                        style={{
                            gap: screenWidth < 1440 ? "27.73px" : screenWidth >= 1440 ? "39px" : undefined,
                            left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "44px" : undefined,
                            // top: screenWidth < 1440 ? "705px" : screenWidth >= 1440 ? "992px" : undefined,
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
                        </div>
                        <div
                            className="Aframe-7"
                            style={{
                                gap: screenWidth < 1440 ? "39px 25.6px" : screenWidth >= 1440 ? "39px 36px" : undefined,
                                width: screenWidth < 1440 ? "669.87px" : screenWidth >= 1440 ? "942px" : undefined,
                            }}
                        >

                            {content.benefits.items.map((item) => (
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
                                                src={screenWidth < 1440 ? item.imgSrc : screenWidth >= 1440 ? item.imgSrc : undefined}
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
                                                    width: screenWidth < 1440 ? "100%" : screenWidth >= 1440 ? "100%" : undefined,
                                                }}
                                            >
                                                {item.title}
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
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Element>
                    <Element
                        name="caseStudy"
                        className="Aframe-21"
                        id="caseStudy"
                        style={{
                            gap: screenWidth < 1440 ? "29.16px" : screenWidth >= 1440 ? "41px" : undefined,
                            left: screenWidth < 1440 ? "31px" : screenWidth >= 1440 ? "43px" : undefined,
                            // top: screenWidth < 1440 ? "1450px" : screenWidth >= 1440 ? "2039px" : undefined,
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
                                            ? `url(${pexelsfauxels1})`
                                            : screenWidth >= 1440
                                                ? `url(${pexelsfauxels1_1})`
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
                                            ? `url(${pexelslina1})`
                                            : screenWidth >= 1440
                                                ? `url(${pexelslina1_1})`
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
z */}
                </div>




            </div>
        </div>
    );
};

export default ServicesDesktop