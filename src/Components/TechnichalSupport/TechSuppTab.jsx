import React, { useState } from "react";
import "./Styles/mob.css";
import "./Styles/desk.css";
import "./Styles/tab.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TechSuppTab = () => {
    const [selectedService, setSelectedService] = useState("Technical Support");

    const services = [
        {
            name: "Technical Support",
            icon: (color) => (
                <svg width="31" height="50" viewBox="0 0 31 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.83301 29.5995L18.0108 1.86621V20.3551H29.5663L13.3886 48.0884V29.5995H1.83301Z" stroke={color} stroke-width="2.13333" stroke-linejoin="round" />
                </svg>

            )
        },
        {
            name: "Billing Support",
            icon: (color) => (
                <svg width="36" height="41" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.15373 35.1793C9.71846 33.5 12.1037 33.6336 13.4776 35.4655L15.4049 38.0416C16.9506 40.0834 19.4503 40.0834 20.9959 38.0416L22.9232 35.4655C24.2971 33.6336 26.6824 33.5 28.2471 35.1793C31.6437 38.8049 34.4106 37.6027 34.4106 32.5269V11.0214C34.4297 3.33134 32.636 1.40405 25.423 1.40405H10.997C3.78395 1.40405 1.99023 3.33134 1.99023 11.0214V32.5078C1.99023 37.6027 4.77621 38.7858 8.15373 35.1793Z" stroke={color} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.7158 13.4095H25.0129" stroke={color} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.4854 18.5781H23.9346" stroke={color} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.7422 23.4944H22.6578" stroke={color} stroke-width="2.13333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            )
        },
        {
            name: "Managed Platform",
            icon: (color) => (
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.31055 36.5923H35.1772" stroke={color} stroke-width="2.48889" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.62459 13.9929H6.96981C6.05721 13.9929 5.31055 14.7396 5.31055 15.6522V29.955C5.31055 30.8676 6.05721 31.6142 6.96981 31.6142H9.62459C10.5372 31.6142 11.2838 30.8676 11.2838 29.955V15.6522C11.2838 14.7396 10.5372 13.9929 9.62459 13.9929Z" stroke={color} stroke-width="2.48889" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.5717 8.70007H18.9171C18.0045 8.70007 17.2578 9.44674 17.2578 10.3593V29.9552C17.2578 30.8678 18.0045 31.6144 18.9171 31.6144H21.5717C22.4843 31.6144 23.231 30.8678 23.231 29.9552V10.3593C23.231 9.44674 22.4843 8.70007 21.5717 8.70007Z" stroke={color} stroke-width="2.48889" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M33.5182 3.40686H30.8634C29.9508 3.40686 29.2041 4.15353 29.2041 5.06612V29.955C29.2041 30.8676 29.9508 31.6143 30.8634 31.6143H33.5182C34.4308 31.6143 35.1774 30.8676 35.1774 29.955V5.06612C35.1774 4.15353 34.4308 3.40686 33.5182 3.40686Z" stroke={color} stroke-width="2.48889" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

            )
        },
        {
            name: "Other Services",
            icon: (color) => (
                <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.3013 11.3013L29.3013 11.3021C29.2534 12.0403 29.5367 12.76 30.0648 13.2722C30.5926 13.7842 31.3202 14.0454 32.0563 13.9749C32.0567 13.9748 32.0572 13.9748 32.0576 13.9747L34.2256 13.7711L34.23 13.7707C34.7947 13.7153 35.3238 13.4677 35.7265 13.0649C35.7266 13.0648 35.7266 13.0648 35.7267 13.0647L38.3277 10.4637C38.4091 10.3823 38.5415 10.3444 38.6787 10.3916C38.8192 10.4399 38.9217 10.5644 38.9435 10.7055L38.9439 10.708C39.3703 13.4282 38.2655 16.1114 36.0884 17.696C33.9101 19.2815 30.9922 19.5234 28.4984 18.2977L27.8134 17.9611L27.2736 18.5008L18.5872 27.1872L18.0483 27.7262L18.3835 28.4106C19.7876 31.2775 19.2469 34.6521 17.0721 36.8461C15.4359 38.3597 13.192 39.0636 10.9344 38.7576L10.92 38.7556L10.9056 38.7541C10.7621 38.7385 10.6308 38.6385 10.578 38.4953C10.5264 38.3555 10.5641 38.2191 10.6473 38.136L10.6475 38.1358L13.1411 35.6422C13.1412 35.6421 13.1412 35.642 13.1413 35.642C13.544 35.2393 13.7917 34.7102 13.8471 34.1454L14.0609 31.9733L14.0612 31.9712C14.1322 31.2347 13.8709 30.5065 13.3587 29.9784C12.8465 29.4503 12.1267 29.167 11.3886 29.2149L11.3877 29.2149L9.12846 29.3632C9.12799 29.3633 9.12752 29.3633 9.12705 29.3633C8.53397 29.4012 7.97356 29.6508 7.55065 30.0717L7.5489 30.0735L5.06707 32.5553L5.06682 32.5556C4.98373 32.6387 4.84732 32.6764 4.70748 32.6248C4.56428 32.572 4.46427 32.4407 4.44876 32.2972L4.44733 32.2839L4.44557 32.2707C4.14454 30.0141 4.85106 27.7731 6.36469 26.139C8.55727 23.9643 11.9302 23.4221 14.7969 24.8237L15.4811 25.1582L16.0197 24.6197L24.7081 15.9313L25.2475 15.3919L24.9114 14.7071C23.6876 12.2131 23.9304 9.29621 25.5155 7.11843C27.0997 4.94187 29.7817 3.83653 32.5015 4.26115L32.5033 4.26143C32.6445 4.28321 32.769 4.38569 32.8173 4.52615C32.8644 4.66338 32.8266 4.79581 32.7451 4.87724L30.1599 7.46249L30.1581 7.46424C29.7373 7.887 29.4878 8.44718 29.4498 9.04006C29.4497 9.04072 29.4497 9.04138 29.4496 9.04204L29.3013 11.3013Z"
                        stroke={color} stroke-width="2.13333" />
                </svg>

            )
        }
    ];

    const serviceDetails = {
        "Technical Support": "Revolutionize your communication with our VoIP Lifecycle Management Services. We offer detailed provisioning, advanced SIP troubleshooting, and custom dial plan creation, ensuring seamless solutions tailored to your needs.",
        "Billing Support": "Our billing support team provides assistance with all your invoicing and payment queries, ensuring accurate and timely billing.",
        "Managed Platform": "Our managed platform services offer end-to-end solutions for your business, ensuring optimal performance and reliability.",
        "Other Services": "Explore our range of other services designed to meet your diverse business needs."
    };

    const carouselContent = {
        "Technical Support": [
            {
                title: "Detailed Provisioning Processes",
                description: "Streamline your setup with our detailed provisioning processes.",
                subtitle: "Expert SIP Troubleshooting",
                subdescription: "Experience seamless communication with our expert SIP troubleshooting services. Our team utilizes advanced techniques and tools to swiftly identify and resolve SIP-related issues, ensuring uninterrupted connectivity for your business."
            },
            {
                title: "Advanced Network Analysis",
                description: "Leverage our advanced network analysis services to ensure optimal performance.",
                subtitle: "24/7 Monitoring",
                subdescription: "Our 24/7 monitoring services provide continuous oversight to maintain peak operational efficiency and security."
            },
            {
                title: "Custom Solutions",
                description: "Tailored solutions designed to meet your specific business needs and goals.",
                subtitle: "Expert Consultation",
                subdescription: "Benefit from our expert consultation services to optimize your communication strategies and infrastructure."
            }
        ],
        "Billing Support": [
            {
                title: "Invoice Management",
                description: "Easily manage your invoices with our comprehensive solutions.",
                subtitle: "Payment Processing",
                subdescription: "Our secure payment processing services ensure your transactions are handled efficiently and safely."
            },
            {
                title: "Financial Reporting",
                description: "Get detailed financial reports to keep track of your billing and payments.",
                subtitle: "Customer Support",
                subdescription: "Our customer support team is here to help you with any billing inquiries or issues you may have."
            }
        ],
        "Managed Platform": [
            {
                title: "Cloud Management",
                description: "Our cloud management services ensure your data is safe and accessible.",
                subtitle: "Scalability Solutions",
                subdescription: "We provide scalable solutions that grow with your business needs."
            },
            {
                title: "Infrastructure Support",
                description: "Get comprehensive support for your IT infrastructure.",
                subtitle: "Data Security",
                subdescription: "We prioritize data security to protect your business information."
            }
        ],
        "Other Services": [
            {
                title: "Consulting Services",
                description: "Leverage our expertise with our professional consulting services.",
                subtitle: "Custom Integrations",
                subdescription: "We offer custom integrations to fit your unique business requirements."
            },
            {
                title: "Training Programs",
                description: "Our training programs help you get the most out of our services.",
                subtitle: "Technical Documentation",
                subdescription: "Access our comprehensive technical documentation for detailed guidance."
            }
        ]
    };

    const renderCarouselContent = (content, rectangleColor) => (
        content.map((item, index) => (
            <div className="frame-47" key={index}>
                <div className="frame-13">
                    <div className="rectangle" style={{ backgroundColor: rectangleColor }} />
                    <div className="text-wrapper-18">{item.title}</div>
                    <p className="text-wrapper-19">{item.description}</p>
                </div>
                <div className="frame-13">
                    <div className="rectangle" style={{ backgroundColor: rectangleColor }} />
                    <div className="text-wrapper-18">{item.title}</div>
                    <p className="text-wrapper-19">{item.description}</p>
                </div>
            </div>
        ))
    );

    const renderCarousel = (service, rectangleColor, indicatorColor) => (
        <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            className="carousel-container"
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                const className = isSelected ? "active-dot" : "dot";
                const style = isSelected ? { backgroundColor: indicatorColor } : { backgroundColor: "#FFFFFF" };
                return (
                    <li
                        className={className}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label={`${label} ${index + 1}`}
                        style={style}
                    />
                );
            }}
        >
            {renderCarouselContent(carouselContent[service], rectangleColor)}
        </Carousel>
    );

    const getServiceStyles = (service) => {
        switch (service) {
            case "Technical Support":
                return {
                    frame7: { backgroundColor: selectedService === service ? "#FFC5C5" : "#002263" },
                    textWrapper14: { color: selectedService === service ? "#FF4E4E" : "#FFFFFF" },
                    frame10: { backgroundColor: selectedService === service ? "#FFC5C5" : "#FEDADA" },
                    frame46Image: "/newImg/tech.png",
                    frame46Text: "#FF4E4E",
                    iconColor: selectedService === service ? "#FF4E4E" : "#FFFFFF",
                    rectangleColor: "#FF4E4E",
                    indicatorColor: "#FF4E4E"
                };
            case "Billing Support":
                return {
                    frame7: { backgroundColor: selectedService === service ? "#D2FDF0" : "#002263" },
                    textWrapper14: { color: selectedService === service ? "#00CE90" : "#FFFFFF" },
                    frame10: { backgroundColor: selectedService === service ? "#D2FDF0" : "#FEDADA" },
                    frame46Image: "/newImg/bill.png",
                    frame46Text: "#00CE90",
                    iconColor: selectedService === service ? "#00CE90" : "#FFFFFF",
                    rectangleColor: "#00CE90",
                    indicatorColor: "#00CE90"
                };
            case "Managed Platform":
                return {
                    frame7: { backgroundColor: selectedService === service ? "#C1D6FF" : "#002263" },
                    textWrapper14: { color: selectedService === service ? "#5B94FF" : "#FFFFFF" },
                    frame10: { backgroundColor: selectedService === service ? "#C1D6FF" : "#FEDADA" },
                    frame46Image: "/newImg/mp.png",
                    frame46Text: "#5B94FF",
                    iconColor: selectedService === service ? "#5B94FF" : "#FFFFFF",
                    rectangleColor: "#5B94FF",
                    indicatorColor: "#5B94FF"
                };
            case "Other Services":
                return {
                    frame7: { backgroundColor: selectedService === service ? "#E8D1FF" : "#002263" },
                    textWrapper14: { color: selectedService === service ? "#BA75FF" : "#FFFFFF" },
                    frame10: { backgroundColor: selectedService === service ? "#E8D1FF" : "#FEDADA" },
                    frame46Image: "/newImg/os.png",
                    frame46Text: "#BA75FF",
                    iconColor: selectedService === service ? "#BA75FF" : "#FFFFFF",
                    rectangleColor: "#BA75FF",
                    indicatorColor: "#BA75FF"
                };
            default:
                return {};
        }
    };

    const serviceStyles = getServiceStyles(selectedService);

    return (
        <>
            <div className="services">
                <div className="frame-6">
                    {services.map(service => (
                        <div className="frame-wrapper" key={service.name}>
                            <div
                                className="frame-7"
                                style={getServiceStyles(service.name).frame7}
                                onClick={() => setSelectedService(service.name)}
                            >
                                {service.icon(getServiceStyles(service.name).iconColor)}
                                <div className="text-wrapper-14" style={getServiceStyles(service.name).textWrapper14}>{service.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="frame-10" style={serviceStyles.frame10}>
                    <div className="group">
                        <div className="frame-11" style={{ backgroundColor: "#FFFFFF" }}>
                            {
                                serviceStyles.frame46Image === "/newImg/tech.png" ?
                                    <img className="w-[14%]" alt="Vector" src={serviceStyles.frame46Image} />
                                    :<img className="vector" alt="Vector" src={serviceStyles.frame46Image} />
                            }
                            <div className="text-wrapper-16" style={{ color: serviceStyles.frame46Text }}>{selectedService}</div>
                        </div>
                    </div>
                    <p className="text-wrapper-17">
                        {serviceDetails[selectedService]}
                    </p>
                    {renderCarousel(selectedService, serviceStyles.rectangleColor, serviceStyles.indicatorColor)}
                </div>
            </div>
        </>
    );
}

export default TechSuppTab;
