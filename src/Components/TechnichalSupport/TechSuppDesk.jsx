import React, { useState } from "react";
import { services, serviceDetails, carouselContent, getServiceStyles } from './serviceConfig';
import "./Styles/mob.css";
import "./Styles/desk.css";
import "./Styles/tab.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TechSuppDesk = () => {
    const [selectedService, setSelectedService] = useState("Technical Support");

    const renderCarouselContent = (content, rectangleColor) => (
        content.map((item, index) => (
            <div className="frame-47" key={index}>
                <div className="frame-48">
                    <div className="rectangle-5" style={{ backgroundColor: rectangleColor }} />
                    <div className="text-wrapper-55">{item.title}</div>
                    <p className="text-wrapper-56">{item.description}</p>
                </div>
                <div className="frame-49">
                    <div className="rectangle-6" style={{ backgroundColor: rectangleColor }} />
                    <div className="text-wrapper-57">{item.subtitle}</div>
                    <p className="text-wrapper-58">{item.subdescription}</p>
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

    const serviceStyles = getServiceStyles(selectedService, selectedService);

    return (
        <>
            <div className="services-2">
                <div className="frame-41">
                    {services.map(service => (
                        <div className="frame-wrapper-2" key={service.name}>
                            <div
                                className="frame-42"
                                style={getServiceStyles(service.name, selectedService).frame42}
                                onClick={() => setSelectedService(service.name)}
                            >
                                {service.icon(getServiceStyles(service.name, selectedService).iconColor)}
                                <div className="text-wrapper-51" style={getServiceStyles(service.name, selectedService).textWrapper51}>{service.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="frame-45" style={serviceStyles.frame45}>
                    <div className="group-3">
                        <div className="frame-46" style={{ backgroundColor: "#FFFFFF" }}>
                            <img alt="Vector" src={serviceStyles.frame46Image} />
                            <div className="text-wrapper-53" style={{ color: serviceStyles.frame46Text }}>{selectedService}</div>
                        </div>
                    </div>
                    <p className="text-wrapper-54">{serviceDetails[selectedService]}</p>
                    {renderCarousel(selectedService, serviceStyles.rectangleColor, serviceStyles.indicatorColor)}
                </div>
            </div>
        </>
    );
};

export default TechSuppDesk;
