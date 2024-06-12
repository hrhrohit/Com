import React, { useState } from "react";
import { services, serviceDetails, carouselContent, getServiceStylesMob, renderCarouselContentMob} from './serviceConfig';
import "./Styles/mob.css";
import "./Styles/desk.css";
import "./Styles/tab.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TechSuppMob = () => {
    const [selectedService, setSelectedService] = useState("Technical Support");



    const renderCarousel = (service, rectangleColor, indicatorColor) => (
        <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={true}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                const className = isSelected ? "active-dot" : "dot";
                const style = isSelected
                    ? { '--indicatorColor': indicatorColor }
                    : {};
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
            {renderCarouselContentMob(carouselContent[service], rectangleColor)}
        </Carousel>
    );

    const serviceStyles = getServiceStylesMob(selectedService, selectedService);

    return (
        <>
            <div className="services-3">
                <div className="frame-65">
                    {services.map(service => (
                        <div className="technical" style={getServiceStylesMob(service.name, selectedService).technical} key={service.name} onClick={() => setSelectedService(service.name)}>
                            <div className="text-wrapper-80 whitespace-normal" style={getServiceStylesMob(service.name, selectedService).textWrapper80}>{service.name}</div>
                        </div>
                    ))}
                </div>
                <div className="service-details" style={serviceStyles.serviceDetails}>
                    <div className="frame-68">
                        <div className="group-7">
                            <div className="frame-11" style={{ backgroundColor: "#FFFFFF" }}>
                            {
                                serviceStyles.frame46Image === "newImg/tech.png" ?
                                    <img className="w-[14%] h-full" alt="Vector" src={serviceStyles.frame46Image} />
                                    :<img className="vector-2" alt="Vector" src={serviceStyles.frame46Image} />
                            }
                                <div className="text-wrapper-86" style={{ color: serviceStyles.frame46Text }}>{selectedService}</div>
                            </div>
                        </div>
                        <p className="text-wrapper-87">
                            {serviceDetails[selectedService]}
                        </p>
                    </div>
                    {renderCarousel(selectedService, serviceStyles.rectangleColor, serviceStyles.indicatorColor)}
                </div>
            </div>
        </>
    );
}

export default TechSuppMob;
