import React, { useState } from 'react';
import './Styles/styles.css';
import { useWindowWidth } from '../../breakpoints';
import { useNavigate } from 'react-router-dom';


const services = [
  {
    name: "Technical Support",
    imgSrc: "serviceComponent/vector-2.svg",
    imgASrc: "serviceComponent/vector-2W.svg",
    altText: "Technical Support",
    bgColor: "#FF4E4E",
    textColor: "#f7f7f5",
  },
  {
    name: "Billing Support",
    imgSrc: "serviceComponent/report-1.svg",
    imgASrc: "serviceComponent/report-1w.svg",
    altText: "Billing Support",
    bgColor: "#00CE90",
    textColor: "#f7f7f5",
  },
  {
    name: "Managed Platform",
    imgSrc: "serviceComponent/frame-7-1.svg",
    imgASrc: "serviceComponent/frame-7-1w.svg",
    altText: "Managed Platform",
    bgColor: "#5B94FF",
    textColor: "#f7f7f5",
  },
  {
    name: "Other Services",
    imgSrc: "serviceComponent/setBlack.svg",
    imgASrc: "serviceComponent/set.svg",
    altText: "Other Services",
    bgColor: "#BA75FF",
    textColor: "#f7f7f5",
  },
];

const contentData = {
  "Technical Support": {
    title: "Technical Support",
    services: [
      {
        title: "VoIP Lifecycle Management Services",
        description: "Efficiently manage VoIP system's entire lifecycle with our comprehensive services. From setup and optimization to ongoing maintenance, we ensure seamless communication for business.",
        link:"/Com/service-details/voip-lifecycle"
      },
      {
        title: "Detailed Provisioning Processes",
        description: "Our meticulous provisioning processes ensure smooth and precise setup of communication systems. We leave no detail overlooked, guaranteeing seamless integration and optimal performance."
      },
      {
        title: "Expert SIP Troubleshooting",
        description: "Resolve SIP-related issues swiftly and effectively with our expert troubleshooting services. Trust our seasoned professionals to diagnose and address any challenges, ensuring uninterrupted communication for business."
      },
      {
        title: "Customized Dial Plans for Your Needs",
        description: "Tailored dial plans designed to perfectly match your unique requirements, ensuring seamless communication tailored to your business needs."
      }
    ]
  },
  "Billing Support": {
    title: "Billing Support",
    services: [
      {
        title: "Billing Inquiries",
        description: "Get assistance with any billing inquiries and issues you may have."
      },
      {
        title: "Payment Options",
        description: "Explore various payment options available for your convenience."
      }
    ]
  },
  "Managed Platform": {
    title: "Managed Platform",
    services: [
      {
        title: "Platform Management",
        description: "Comprehensive management of your platform to ensure optimal performance."
      },
      {
        title: "Security Services",
        description: "Robust security services to protect your platform from threats."
      }
    ]
  },
  "Other Services": {
    title: "Other Services",
    services: [
      {
        title: "Consulting",
        description: "Professional consulting services to help you achieve your business goals."
      },
      {
        title: "Custom Solutions",
        description: "Custom solutions tailored to your unique business needs."
      }
    ]
  }
};

const Tablet = () => {
  const [activeService, setActiveService] = useState("Technical Support");
  const navigate = useNavigate();
  const activeServiceData = services.find(service => service.name === activeService);
  const screenWidth = useWindowWidth();

  return (
    <div className="tablet-wrapper tablet overscroll-none overflow-hidden">
      <div className="desktop-wrapper ">
        <div className='desktop'>
          <div className="desktop-child">
            <div className="element-wrapper">
              <div className="element-2">
                {services.map((service) => (
                  <div
                    key={service.name}
                    className={`frame-122 ${activeService === service.name ? 'active' : ''}`}
                    onClick={() => setActiveService(service.name)}
                    style={{
                      backgroundColor: activeService === service.name ? service.bgColor : "#ffffff",
                      borderColor: activeService === service.name ? service.bgColor : "#ffffff",
                    }}
                  >
                    <img
                      className={`service-logo-img ${activeService === service.name ? 'active' : ''}`}
                      src={activeService === service.name ? service.imgASrc : service.imgSrc}
                      alt={service.altText}
                      style={{ stroke: activeService === service.name ? service.textColor : "#000000" }}
                    />
                    <div className={`text-wrapper-6 ${activeService === service.name ? 'text-wrapper-5' : ''}`} style={{ color: activeService === service.name ? service.textColor : "#000000" }}>
                      {service.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="frame-14">
              <div className={`text-wrapper-7 ${activeService ? 'active' : ''}`}>
                {contentData[activeService].title}
              </div>
              <div className={`items-wrapper ${activeService ? 'active' : ''}`}>
                {contentData[activeService].services.map((item, index) => (
                  <div key={index} className="frame-155" style={{ borderColor: activeServiceData.bgColor }}>
                    <div className="frame-16">
                      <div className="text-wrapper-8">{item.title}</div>
                      <p className="text-wrapper-9">{item.description}</p>
                    </div>
                    <button className="vector-wrapper" onClick={() => navigate(item.link)}>
                      <img className="vector-6" src="serviceComponent/vector-190-7.svg" alt="Open" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tablet;
