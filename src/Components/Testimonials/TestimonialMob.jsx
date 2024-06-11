import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import "./Styles/mob.css";

const testimonials = [
    {
        review: "Choosing Comstream was the best decision I made for my company needs. Their professionalism, reliability, and skilled team made the entire process stress-free.",
        imageUrl: "img/winifred-harmon.png",
        userName: "Winifred Harmon",
        userLocation: "Los Angeles, CA"
    },
    {
        review: "Comstream's service was exceptional from start to finish. They truly understand the needs of their clients.",
        imageUrl: "img/image-4.png",
        userName: "John Doe",
        userLocation: "New York, NY"
    },
    {
        review: "I am beyond pleased with the communication and results that Comstream delivered. Highly recommend!",
        imageUrl: "img/image-5.png",
        userName: "Jane Doe",
        userLocation: "Chicago, IL"
    }
];

const TestimonialMob = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNext = () => {
        const nextSlide = (currentSlide + 1) % testimonials.length; // Wrap around to the first slide if at the end
        setCurrentSlide(nextSlide);
    };

    const goToPrev = () => {
        const prevSlide = (currentSlide - 1 + testimonials.length) % testimonials.length; // Wrap around to the last slide if at the beginning
        setCurrentSlide(prevSlide);
    };

    return (
        <>
            <div className="frame-69">
                <p className="what-our-client-says-3">
                    <span className="span">“</span>
                    <span className="text-wrapper-25">What Our Client Says About Us</span>
                    <span className="span">”</span>
                </p>
                <Carousel
                    selectedItem={currentSlide}
                    onChange={(index) => setCurrentSlide(index)}
                    showArrows={false}
                    showStatus={false}
                    autoPlay={false}
                    infiniteLoop={true}
                    showIndicators={false}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="client-testimonials-3">
                            <div className="review">
                                <div className="rating-review">
                                    <p className="text-wrapper-91">{testimonial.review}</p>
                                </div>
                                <div className="review-user">
                                    <img className="winifred-harmon" alt={testimonial.userName} src={testimonial.imageUrl} />
                                    <div className="user-name">
                                        <div className="text-wrapper-92">{testimonial.userName}</div>
                                        <div className="text-wrapper-93">{testimonial.userLocation}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <div className="icons">
                    <div className="icon" onClick={goToPrev}>
                        <img className="right" alt="Right" src="img/right.png" />
                    </div>
                    <div className="right-wrapper" onClick={goToNext}>
                        <img className="right-2" alt="Right" src="img/right-1.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialMob;
