import { useWindowWidth } from "../../breakpoints"
import "./styles.css/header.css"

const Header = () => {
    const screenWidth = useWindowWidth();
    return (
        <>
            <div
                className="frame-3"
                style={{
                    gap: screenWidth >= 1024 && screenWidth < 1440 ? "49.07px" : screenWidth >= 1440 ? "69px" : undefined,
                    left: screenWidth >= 1024 && screenWidth < 1440 ? "195px" : screenWidth >= 1440 ? "274px" : undefined,
                    top: screenWidth >= 1024 && screenWidth < 1440 ? "100px" : screenWidth >= 1440 ? "141px" : undefined,
                }}
            >
                <div
                    className="top-tier-netsapiens-wrapper"
                    style={{
                        gap: screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        padding:
                            screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                    }}
                >
                    <div
                        className="top-tier-netsapiens-2"
                        style={{
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440 ? "51.9px" : screenWidth >= 1440 ? "73px" : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440 ? "62.3px" : screenWidth >= 1440 ? "87.6px" : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                            width:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "617.96px"
                                    : screenWidth >= 1440
                                        ? "869px"
                                        : undefined,
                        }}
                    >
                        {screenWidth >= 1024 && screenWidth < 1440 && (
                            <p className="text-wrapper-95">Top-Tier NetSapiens and VoIP&nbsp;&nbsp;Support Services</p>
                        )}

                        {screenWidth >= 1440 && (
                            <p className="text-wrapper-95"> Top-Tier NetSapiens and VoIP&nbsp;&nbsp;Support Services</p>
                        )}
                    </div>
                </div>
                <div
                    className="subtext-2"
                    style={{
                        WebkitBackdropFilter:
                            screenWidth >= 1024 && screenWidth < 1440
                                ? "blur(2.84px) brightness(100%)"
                                : screenWidth >= 1440
                                    ? "blur(4px) brightness(100%)"
                                    : undefined,
                        backdropFilter:
                            screenWidth >= 1024 && screenWidth < 1440
                                ? "blur(2.84px) brightness(100%)"
                                : screenWidth >= 1440
                                    ? "blur(4px) brightness(100%)"
                                    : undefined,
                        borderRadius:
                            screenWidth >= 1024 && screenWidth < 1440 ? "70.4px" : screenWidth >= 1440 ? "99px" : undefined,
                        gap: screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        padding:
                            screenWidth >= 1024 && screenWidth < 1440
                                ? "7.11px 14.22px"
                                : screenWidth >= 1440
                                    ? "10px 20px"
                                    : undefined,
                        width:
                            screenWidth >= 1024 && screenWidth < 1440 ? "534.76px" : screenWidth >= 1440 ? "752px" : undefined,
                    }}
                >
                    <p
                        className="p"
                        style={{
                            fontFamily:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "'Urbanist', Helvetica"
                                    : screenWidth >= 1440
                                        ? "var(--h4-font-family)"
                                        : undefined,
                            fontSize:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "21.3px"
                                    : screenWidth >= 1440
                                        ? "var(--h4-font-size)"
                                        : undefined,
                            fontStyle: screenWidth >= 1440 ? "var(--h4-font-style)" : undefined,
                            fontWeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "600"
                                    : screenWidth >= 1440
                                        ? "var(--h4-font-weight)"
                                        : undefined,
                            letterSpacing:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "0"
                                    : screenWidth >= 1440
                                        ? "var(--h4-letter-spacing)"
                                        : undefined,
                            lineHeight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "normal"
                                    : screenWidth >= 1440
                                        ? "var(--h4-line-height)"
                                        : undefined,
                            marginLeft:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-7.82px"
                                    : screenWidth >= 1440
                                        ? "-11.00px"
                                        : undefined,
                            marginRight:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-7.82px"
                                    : screenWidth >= 1440
                                        ? "-11.00px"
                                        : undefined,
                            marginTop:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "-0.71px"
                                    : screenWidth >= 1440
                                        ? "-1.00px"
                                        : undefined,
                            width:
                                screenWidth >= 1024 && screenWidth < 1440
                                    ? "521.96px"
                                    : screenWidth >= 1440
                                        ? "734px"
                                        : undefined,
                        }}
                    >
                        Our expert team provides detailed provisioning processes and advanced troubleshooting to ensure smooth
                        SIP operations.
                    </p>
                </div>
                <div
                    className="connect-2"
                    style={{
                        borderRadius:
                            screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        gap: screenWidth >= 1024 && screenWidth < 1440 ? "7.11px" : screenWidth >= 1440 ? "10px" : undefined,
                        padding:
                            screenWidth >= 1024 && screenWidth < 1440
                                ? "7.11px 14.22px"
                                : screenWidth >= 1440
                                    ? "10px 20px"
                                    : undefined,
                    }}
                >
                    <div
                        className="text-wrapper-7"
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
                            whiteSpace: screenWidth >= 1024 && screenWidth < 1440 ? "nowrap" : undefined,
                        }}
                    >
                        Connect With Us
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header