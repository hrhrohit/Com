import React, { useState } from "react";
import { services, serviceDetails, carouselContent, getServiceStylesTab, renderCarouselContentTab } from './serviceConfig';
import "./Styles/mob.css";
import "./Styles/desk.css";
import "./Styles/tab.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TechSuppTab = () => {
    const [selectedService, setSelectedService] = useState("Technical Support");

    

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
            {renderCarouselContentTab(carouselContent[service], rectangleColor)}
        </Carousel>
    );

    const serviceStyles = getServiceStylesTab(selectedService, selectedService);

    return (
        <>
            <div className="services">
                <div className="frame-6">
                    {services.map(service => (
                        <div className="frame-wrapper" key={service.name}>
                            <div
                                className="frame-7"
                                style={getServiceStylesTab(service.name, selectedService).frame7}
                                onClick={() => setSelectedService(service.name)}
                            >
                                {service.icon(getServiceStylesTab(service.name, selectedService).iconColor)}
                                <div className="text-wrapper-14" style={getServiceStylesTab(service.name, selectedService).textWrapper14}>{service.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="frame-10" style={serviceStyles.frame10}>
                    <div className="group">
                        <div className="frame-11" style={{ backgroundColor: "#FFFFFF" }}>
                            {
                                serviceStyles.frame46Image === "newImg/tech.png" ?
                                    <img className="w-[14%]" alt="Vector" src={serviceStyles.frame46Image} />
                                    : <img className="vector" alt="Vector" src={serviceStyles.frame46Image} />
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
