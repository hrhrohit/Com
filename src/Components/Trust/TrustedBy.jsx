import React from 'react'
import { useWindowWidth } from '../../breakpoints'
import "./styles/trust.css"

const TrustedBy = () => {
    const screenWidth = useWindowWidth()
    return (
        <>
            <div
                className="trusted-by"
                style={{
                    left: screenWidth >= 1024 && screenWidth < 1440 ? "43px" : screenWidth >= 1440 ? "60px" : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1440 ? "521px" : screenWidth >= 1440 ? "727px" : undefined,
                }}
            >
                <div
                    className="text-wrapper-8"
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
                            screenWidth >= 1024 && screenWidth < 1440 ? "-0.71px" : screenWidth >= 1440 ? "-1.00px" : undefined,
                        whiteSpace: screenWidth >= 1024 && screenWidth < 1440 ? "nowrap" : undefined,
                    }}
                >
                    Trusted By
                </div>
                <img
                    className="img-2"
                    alt="Frame"
                    src={
                        screenWidth >= 1024 && screenWidth < 1440
                            ? "img/frame-38.svg"
                            : screenWidth >= 1440
                                ? "img/frame-38-1.svg"
                                : undefined
                    }
                />
            </div>
        </>
    )
}

export default TrustedBy