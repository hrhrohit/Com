import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// servicesConfig.js
export const services = [
    {
        name: "Technical Support",
        icon: (color) => (
            <svg width="42" height="69" viewBox="0 0 42 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 41L24.25 2V28H40.5L17.75 67V41H1.5Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
            </svg>
        ),
        dimensions: { width: 42, height: 69 }
    },
    {
        name: "Billing Support",
        icon: (color) => (
            <svg width="49" height="57" viewBox="0 0 49 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3715 49.159C12.5719 46.7976 15.9262 46.9854 17.8582 49.5615L20.5685 53.1841C22.7421 56.0554 26.2573 56.0554 28.4309 53.1841L31.1411 49.5615C33.0732 46.9854 36.4275 46.7976 38.6279 49.159C43.4043 54.2575 47.2953 52.5669 47.2953 45.4291V15.187C47.3221 4.37284 44.7997 1.6626 34.6564 1.6626H14.3698C4.22651 1.6626 1.7041 4.37284 1.7041 15.187V45.4022C1.7041 52.5669 5.62188 54.2307 10.3715 49.159Z" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.3818 18.5454H34.0809" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.4629 25.8135H32.5634" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.2314 32.7271H30.7691" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        dimensions: { width: 49, height: 57 }
    },
    {
        name: "Managed Platform",
        icon: (color) => (
            <svg width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 51.8335H49" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.0666 20.0532H9.33333C8.05 20.0532 7 21.1032 7 22.3866V42.4999C7 43.7832 8.05 44.8332 9.33333 44.8332H13.0666C14.35 44.8332 15.4 43.7832 15.4 42.4999V22.3866C15.4 21.1032 14.35 20.0532 13.0666 20.0532Z" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.8662 12.6099H26.1331C24.8498 12.6099 23.7998 13.6599 23.7998 14.9432V42.4999C23.7998 43.7832 24.8498 44.8332 26.1331 44.8332H29.8662C31.1496 44.8332 32.1996 43.7832 32.1996 42.4999V14.9432C32.1996 13.6599 31.1496 12.6099 29.8662 12.6099Z" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46.6663 5.1665H42.9329C41.6496 5.1665 40.5996 6.2165 40.5996 7.49984V42.4998C40.5996 43.7832 41.6496 44.8332 42.9329 44.8332H46.6663C47.9496 44.8332 48.9996 43.7832 48.9996 42.4998V7.49984C48.9996 6.2165 47.9496 5.1665 46.6663 5.1665Z" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        dimensions: { width: 56, height: 57 }
    },
    {
        name: "Other Services",
        icon: (color) => (
            <svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.0521 5.12771L45.6335 5.61532C45.6999 5.80831 45.6466 5.99453 45.5321 6.10904L41.8966 9.74454L41.8941 9.747C41.3021 10.3417 40.9511 11.1298 40.8979 11.9639C40.8979 11.9645 40.8978 11.9652 40.8978 11.9658L40.6892 15.1429L40.6892 15.1441C40.6218 16.1821 41.0202 17.1942 41.7628 17.9145C42.505 18.6344 43.5283 19.0018 44.5634 18.9026C44.564 18.9025 44.5646 18.9025 44.5653 18.9024L47.614 18.6161L47.6201 18.6155C48.4143 18.5376 49.1584 18.1893 49.7246 17.6229C49.7247 17.6229 49.7248 17.6228 49.7249 17.6227L53.3825 13.9651C53.497 13.8505 53.6832 13.7973 53.8762 13.8636C54.0738 13.9315 54.2179 14.1066 54.2485 14.3051L54.249 14.3086C54.8487 18.1339 53.295 21.9071 50.2336 24.1354C47.1704 26.365 43.067 26.7052 39.5601 24.9816L38.5968 24.5082L37.8378 25.2671L25.6225 37.4825L24.8646 38.2403L25.336 39.2029C27.3106 43.2344 26.5502 47.98 23.4919 51.0653C21.191 53.1937 18.0355 54.1837 14.8607 53.7532L14.8405 53.7505L14.8203 53.7483C14.6184 53.7265 14.4338 53.5859 14.3595 53.3845C14.2869 53.1878 14.34 52.996 14.4569 52.8792L14.4573 52.8788L17.9639 49.3722C17.964 49.3721 17.9641 49.372 17.9641 49.372C18.5304 48.8058 18.8786 48.062 18.9566 47.268C18.9567 47.2678 18.9567 47.2676 18.9567 47.2675L19.2574 44.2129L19.2577 44.2099C19.3576 43.1742 18.9902 42.1501 18.2699 41.4075C17.5496 40.6649 16.5374 40.2665 15.4994 40.3338L15.4982 40.3339L12.3211 40.5425C12.3204 40.5425 12.3197 40.5426 12.3189 40.5426C11.485 40.5959 10.697 40.9469 10.1023 41.5388L10.1023 41.5388L10.0999 41.5412L6.60978 45.0313L6.60945 45.0317C6.49259 45.1486 6.30077 45.2017 6.10411 45.1291C5.90275 45.0548 5.7621 44.8702 5.7403 44.6684L5.73828 44.6497L5.7358 44.6311C5.31249 41.4577 6.30602 38.3063 8.43456 36.0084C11.5179 32.9502 16.261 32.1878 20.2924 34.1588L21.2546 34.6292L22.0119 33.8719L34.23 21.6538L34.9885 20.8953L34.5159 19.9323C32.7949 16.4251 33.1364 12.3232 35.3654 9.26071C37.5932 6.19992 41.3648 4.64554 45.1895 5.24266L45.1921 5.24305C45.3905 5.27368 45.5656 5.41778 45.6335 5.61531L47.0521 5.12771Z" stroke={color} strokeWidth="3" />
            </svg>
        ),
        dimensions: { width: 60, height: 59 }
    }
];

export const serviceDetails = {
    "Technical Support": "Revolutionize your communication with our VoIP Lifecycle Management Services. We offer detailed provisioning, advanced SIP troubleshooting, and custom dial plan creation, ensuring seamless solutions tailored to your needs.",
    "Billing Support": "Our billing support team provides assistance with all your invoicing and payment queries, ensuring accurate and timely billing.",
    "Managed Platform": "Our managed platform services offer end-to-end solutions for your business, ensuring optimal performance and reliability.",
    "Other Services": "Explore our range of other services designed to meet your diverse business needs."
};

export const carouselContent = {
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

export const getServiceStyles = (service, selectedService) => {
    switch (service) {
        case "Technical Support":
            return {
                frame42: { backgroundColor: selectedService === service ? "#FFC5C5" : "#002263" },
                textWrapper51: { color: selectedService === service ? "#FF4E4E" : "#FFFFFF" },
                frame45: { backgroundColor: selectedService === service ? "#FFC5C5" : "#FFC5C5" },
                frame46Image: "img/vector-5.svg",
                frame46Text: "#FF4E4E",
                iconColor: selectedService === service ? "#FF4E4E" : "#FFFFFF",
                rectangleColor: "#FF4E4E",
                indicatorColor: "#FF4E4E"
            };
        case "Billing Support":
            return {
                frame42: { backgroundColor: selectedService === service ? "#D2FDF0" : "#002263" },
                textWrapper51: { color: selectedService === service ? "#00CE90" : "#FFFFFF" },
                frame45: { backgroundColor: selectedService === service ? "#D2FDF0" : "#FFC5C5" },
                frame46Image: "newImg/bill.png",
                frame46Text: "#00CE90",
                iconColor: selectedService === service ? "#00CE90" : "#FFFFFF",
                rectangleColor: "#00CE90",
                indicatorColor: "#00CE90"
            };
        case "Managed Platform":
            return {
                frame42: { backgroundColor: selectedService === service ? "#C1D6FF" : "#002263" },
                textWrapper51: { color: selectedService === service ? "#5B94FF" : "#FFFFFF" },
                frame45: { backgroundColor: selectedService === service ? "#C1D6FF" : "#FFC5C5" },
                frame46Image: "newImg/mp.png",
                frame46Text: "#5B94FF",
                iconColor: selectedService === service ? "#5B94FF" : "#FFFFFF",
                rectangleColor: "#5B94FF",
                indicatorColor: "#5B94FF"
            };
        case "Other Services":
            return {
                frame42: { backgroundColor: selectedService === service ? "#E8D1FF" : "#002263" },
                textWrapper51: { color: selectedService === service ? "#BA75FF" : "#FFFFFF" },
                frame45: { backgroundColor: selectedService === service ? "#E8D1FF" : "#FFC5C5" },
                frame46Image: "newImg/os.png",
                frame46Text: "#BA75FF",
                iconColor: selectedService === service ? "#BA75FF" : "#FFFFFF",
                rectangleColor: "#BA75FF",
                indicatorColor: "#BA75FF"
            };
        default:
            return {};
    }
};


// New function to render individual carousel items
export const renderCarouselContent = (content, rectangleColor) => (
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

export const renderCarouselContentTab = (content, rectangleColor) => (
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

export const renderCarouselContentMob = (content, rectangleColor) => (
    content.map((item, index) => (
        <div className="frame-66" key={index}>
            <div className="frame-67">
                <div className="rectangle-9" style={{ backgroundColor: rectangleColor }} />
                <div className="text-wrapper-84">{item.title}</div>
                <p className="text-wrapper-85">{item.description}</p>
            </div>
            <div className="frame-67">
                <div className="rectangle-9" style={{ backgroundColor: rectangleColor }} />
                <div className="text-wrapper-84">{item.subtitle}</div>
                <p className="text-wrapper-85">{item.subdescription}</p>
            </div>
        </div>
    ))
);






export const getServiceStylesTab = (service, selectedService) => {
    switch (service) {
        case "Technical Support":
            return {
                frame7: { backgroundColor: selectedService === service ? "#FFC5C5" : "#002263" },
                textWrapper14: { color: selectedService === service ? "#FF4E4E" : "#FFFFFF" },
                frame10: { backgroundColor: selectedService === service ? "#FFC5C5" : "#FEDADA" },
                frame46Image: "newImg/tech.png",
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
                frame46Image: "newImg/bill.png",
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
                frame46Image: "newImg/mp.png",
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
                frame46Image: "newImg/os.png",
                frame46Text: "#BA75FF",
                iconColor: selectedService === service ? "#BA75FF" : "#FFFFFF",
                rectangleColor: "#BA75FF",
                indicatorColor: "#BA75FF"
            };
        default:
            return {};
    }
};


export const getServiceStylesMob = (service, selectedService) => {
    switch (service) {
        case "Technical Support":
            return {
                technical: { backgroundColor: selectedService === service ? "#FFC5C5" : "#FEDADA" },
                textWrapper80: { color: selectedService === service ? "#FF4E4E" : "#FF4D4D" },
                serviceDetails: { backgroundColor: selectedService === service ? "#FFC5C5" : "#FEDADA" },
                frame46Image: "newImg/tech.png",
                frame46Text: "#FF4E4E",
                iconColor: selectedService === service ? "#FF4E4E" : "#FF4D4D",
                rectangleColor: "#FF4E4E",
                indicatorColor: "#FF4E4E"
            };
        case "Billing Support":
            return {
                technical: { backgroundColor: selectedService === service ? "#D2FDF0" : "#A7F9E0" },
                textWrapper80: { color: selectedService === service ? "#00CE90" : "#3EDEAE" },
                serviceDetails: { backgroundColor: selectedService === service ? "#D2FDF0" : "#FEDADA" },
                frame46Image: "newImg/bill.png",
                frame46Text: "#00CE90",
                iconColor: selectedService === service ? "#00CE90" : "#3EDEAE",
                rectangleColor: "#00CE90",
                indicatorColor: "#00CE90"
            };
        case "Managed Platform":
            return {
                technical: { backgroundColor: selectedService === service ? "#C1D6FF" : "#C1D6FF" },
                textWrapper80: { color: selectedService === service ? "#5B94FF" : "#5A94FF" },
                serviceDetails: { backgroundColor: selectedService === service ? "#C1D6FF" : "#FEDADA" },
                frame46Image: "newImg/mp.png",
                frame46Text: "#5B94FF",
                iconColor: selectedService === service ? "#5B94FF" : "#5A94FF",
                rectangleColor: "#5B94FF",
                indicatorColor: "#5B94FF"
            };
        case "Other Services":
            return {
                technical: { backgroundColor: selectedService === service ? "#E8D1FF" : "#E8D1FF" },
                textWrapper80: { color: selectedService === service ? "#BA75FF" : "#BA74FF" },
                serviceDetails: { backgroundColor: selectedService === service ? "#E8D1FF" : "#FEDADA" },
                frame46Image: "newImg/os.png",
                frame46Text: "#BA75FF",
                iconColor: selectedService === service ? "#BA75FF" : "#BA74FF",
                rectangleColor: "#BA75FF",
                indicatorColor: "#BA75FF"
            };
        default:
            return {};
    }
};
