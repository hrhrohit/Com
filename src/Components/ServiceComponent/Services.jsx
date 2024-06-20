import React, { useState, useEffect } from 'react';
import './Styles/styles.css';
import { useWindowWidth } from '../../breakpoints';
import { useNavigate, useLocation } from 'react-router-dom';
import vector_2 from "../../../public/serviceComponent/vector-2.svg"
import vector_2w from "../../../public/serviceComponent/vector-2W.svg"
import report_1  from "../../../public/serviceComponent/report-1.svg"
import report_1w from "../../../public/serviceComponent/report-1w.svg"
import frame_7_1 from "../../../public/serviceComponent/frame-7-1.svg"
import frame_7_1w from "../../../public/serviceComponent/frame-7-1w.svg"
import setBlack from "../../../public/serviceComponent/setBlack.svg"
import set from "../../../public/serviceComponent/set.svg"
import vector_190_7 from "../../../public/serviceComponent/vector-190-7.svg"

const services = [
  {
    name: "Technical Support",
    imgSrc: vector_2,
    imgASrc: vector_2w,
    altText: "Technical Support",
    bgColor: "#FF4E4E",
    textColor: "#f7f7f5",
    link: "/Com/services/technical-support",
  },
  {
    name: "Billing Support",
    imgSrc: report_1,
    imgASrc: report_1w,
    altText: "Billing Support",
    bgColor: "#00CE90",
    textColor: "#f7f7f5",
    link: "/Com/services/billing-support",
  },
  {
    name: "Managed Platform",
    imgSrc: frame_7_1,
    imgASrc: frame_7_1w,
    altText: "Managed Platform",
    bgColor: "#5B94FF",
    textColor: "#f7f7f5",
    link: "/Com/services/managed-platform",
  },
  {
    name: "Other Services",
    imgSrc: setBlack,
    imgASrc: set,
    altText: "Other Services",
    bgColor: "#BA75FF",
    textColor: "#f7f7f5",
    link: "/Com/services/other-services",
  },
];

const contentData = {
  "Technical Support": {
    title: "Technical Support",
    services: [
      {
        title: "VoIP Lifecycle Management Services",
        description: "Efficiently manage VoIP system's entire lifecycle with our comprehensive services. From setup and optimization to ongoing maintenance, we ensure seamless communication for business.",
        link: "/Com/service-details/voip-lifecycle"
      },
      {
        title: "Detailed Provisioning Processes",
        description: "Our meticulous provisioning processes ensure smooth and precise setup of communication systems. We leave no detail overlooked, guaranteeing seamless integration and optimal performance.",
        link: "/Com/service-details/voip-provisioning"
      },
      {
        title: "Expert SIP Troubleshooting",
        description: "Resolve SIP-related issues swiftly and effectively with our expert troubleshooting services. Trust our seasoned professionals to diagnose and address any challenges, ensuring uninterrupted communication for business.",
        link: "/Com/service-details/sip-troubleshooting"
      },
      {
        title: "Customized Dial Plans for Your Needs",
        description: "Tailored dial plans designed to perfectly match your unique requirements, ensuring seamless communication tailored to your business needs.",
        link: "/Com/service-details/custom-dial-plan"
      }
    ]
  },
  "Billing Support": {
    title: "Billing Support",
    services: [
      {
        title: "Rev.io Billing Platform Expertise",
        description: "Our expertise in the Rev.io Billing Platform ensures streamlined billing processes, reducing errors and improving accuracy in invoicing.",
        link: "/Com/service-details/billing-support",
      },
      {
        title: "Dedicated team",
        description: "Our dedicated team provides personalized support, ensuring your VOIP system meets your unique business requirements and goals.",
        link: "/Com/service-details/dedicated-team"
      },
    ]
  },
  "Managed Platform": {
    title: "Managed Platform",
    services: [
      {
        title: "Sky Switch",
        description: "SkySwitch provides a streamlined process to get started selling UCaaS solutions. This ensures a smooth and efficient onboarding experience for your business.",
        link: "/Com/service-details/sky-switch"
      },
      {
        title: "Netsapiens",
        description: "NetSapiens offers a comprehensive communications platform that includes contact centers, video conferencing, and unified communications, all in one place.",
        link: "/Com/service-details/netsapiens"
      },
      {
        title: "Hodusoft",
        description: "HoduSoft's HoduCC is a cloud-native contact center software designed to improve efficiency and make customer interactions more meaningful.",
        link: "/Com/service-details/hodusoft"
      },
      {
        title: "Bicom",
        description: "Bicom Systems' software is designed to be user-friendly, enabling businesses to streamline communication and collaboration processes.",
        link: "/Com/service-details/bicom"
      }
    ]
  },
  "Other Services": {
    title: "Other Services",
    services: [
      {
        title: " Dedicated After-Sale Support via Ticketing Systems, Live Chat, and Phone",
        description: "Our after-sale support is accessible through ticketing systems, live chat, and phone, ensuring you can reach us conveniently through your preferred communication method.",
        link: "/Com/service-details/other-service-support"
      },
      {
        title: "Efficient Transition Management from Existing Platforms to SkySwitch",
        description: "Our transition management ensures a seamless migration from your existing platforms to SkySwitch, minimizing disruptions and ensuring continuity of service.",
        link: "/Com/service-details/efficient-transition"
      },
      {
        title: "Tailored Training Programs for Expertise Development",
        description: "Our tailored training programs offer customized learning paths, ensuring your team develops expertise in specific aspects of VOIP technology relevant to your business.",
        link: "/Com/service-details/custom-training"
      },
      {
        title: "Proficient Communication with Diverse US Communities",
        description: "We prioritize cultural sensitivity in our communication strategies, ensuring respectful and effective interactions with diverse US communities.",
        link: "/Com/service-details/community-communication"
      }
    ]
  }
};

const Tablet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screenWidth = useWindowWidth();

  const getServiceFromPath = (path) => {
    const serviceName = path.split('/').pop().replace('-', ' ');
    return services.find(service => service.name.toLowerCase() === serviceName.toLowerCase())?.name || "Technical Support";
  };

  const [activeService, setActiveService] = useState(getServiceFromPath(location.pathname));

  useEffect(() => {
    const currentService = getServiceFromPath(location.pathname);
    if (currentService !== activeService) {
      setActiveService(currentService);
    }
  }, [location.pathname]);

  useEffect(() => {
    const service = services.find(service => service.name === activeService);
    if (service) {
      navigate(service.link, { replace: true });
    }
  }, [activeService, navigate]);

  return (
    <div className="tablet-wrapper tablet overscroll-none overflow-hidden">
      <div className="desktop-wrapper">
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
                  <div key={index} className="frame-155" style={{ borderColor: services.find(service => service.name === activeService).bgColor }}>
                    <div className="frame-16">
                      <div className="text-wrapper-8">{item.title}</div>
                      <p className="text-wrapper-9">{item.description}</p>
                    </div>
                    <button className="vector-wrapper" onClick={() => navigate(item.link)}>
                      <img className="vector-6" src={vector_190_7} alt="Open" />
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
