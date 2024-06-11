import React from 'react'
import NavbarMob from '../Navbar/NavbarMob'
import "./styles.css/headermob.css"

const HeaderMob = () => {
    return (
        <>
            <div className="overlap-group">
                <NavbarMob />
                <p className="top-tier-netsapiens">Top-Tier NetSapiens and VoIP&nbsp;&nbsp;Support Services</p>
                <div className="subtext">
                    <p className="text-wrapper">
                        Our expert team provides detailed provisioning processes and advanced troubleshooting to ensure smooth
                        SIP operations.
                    </p>
                </div>
                <div className="connect">
                    <div className="text-wrapper-2">Connect With Us</div>
                </div>
            </div>
        </>
    )
}

export default HeaderMob