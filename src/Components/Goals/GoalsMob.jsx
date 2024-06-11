import { useWindowWidth } from "../../breakpoints"
import "./styles/goalsMob.css"

const GoalsMob = () => {
    const screenWidth = useWindowWidth()
    return (
        <>
            <div
                className="our-goals-2"
                style={{
                    gap: screenWidth < 1024 ? "30px" : screenWidth >= 1024 && screenWidth < 1440 ? "48.36px" : undefined,
                    left: screenWidth < 1024 ? "22px" : screenWidth >= 1024 && screenWidth < 1440 ? "96px" : undefined,
                    top: screenWidth < 1024 ? "734px" : screenWidth >= 1024 && screenWidth < 1440 ? "2307px" : undefined,
                }}
            >
                {screenWidth < 1024 && (
                    <>
                        <div className="frame-16">
                            <div className="frame-17">
                                <div className="text-wrapper-22">Our Goals</div>
                            </div>
                            <p className="text-wrapper-23">We Provide The Best Solution For Your Business Development</p>
                        </div>
                        <div className="mask-group-wrapper">
                            <img className="mask-group-2" alt="Mask group" src="/img/mask-group.png" />
                        </div>
                        <p className="text-wrapper-24">
                            Our expert team specializes in delivering meticulous provisioning processes and advanced
                            troubleshooting techniques, meticulously tailored to guarantee seamless SIP operations. With our
                            in-depth knowledge and proactive approach, we ensure that your SIP infrastructure operates flawlessly,
                            minimizing downtime and maximizing efficiency
                        </p>
                    </>
                )}
            </div>
        </>
    )
}

export default GoalsMob