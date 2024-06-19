import { useLocation } from 'react-router-dom';
import "./styles/mob.css";
import contentConfig from './contentConfig';


const ServiceMobContent = () => {
    const location = useLocation();
    const content = contentConfig[location.pathname];
    if (!content) {
        return <div>Content not found</div>;
    }
    return (
        <div className="Bpro-max top-[59px]">


            <div className="Bframe-2">
                <div className="Btext-wrapper-3">{content.title}</div>
                <div className="Bframe-3">
                    <div className="Btext-wrapper">Overview</div>
                    <img className="Bline-6" alt="Line" src={content.line7_1} />
                </div>
                <p className="Bvoip-lifecycle">
                    {content.overview.text1}
                </p>
                <p className="Bvoip-lifecycle">
                    {content.overview.text1_1}
                </p>
                <img className="Bpexels-pavel" alt="Pexels pavel" src={content.overview.imgSrc} />
                <p className="Bongoing-support-and">
                    {content.overview.text2}
                </p>
                <p className="Bongoing-support-and">
                    {content.overview.text2_2}
                </p>
            </div>

            <div className="Bframe">
                <div className="Bdiv">
                    <div className="Btext-wrapper">Benefits</div>
                    <img className="Bline" alt="Line" src={content.line7_1} />
                </div>
                <div className="Boverlap-group">
                    {content.benefits.items.map((item, index) => (
                        <div className="Breliable-and-timely-3">
                            <img className="Bgroup" alt={item.title} src={item.imgSrc} />
                            <div className="Breliable-and-timely-2">
                                <div className="Btext-wrapper-2">{item.title}</div>
                                <p className="Bp">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>




            <div className="Bframe-4">
                <div className="Bdiv">
                    <div className="Btext-wrapper">{content.caseStudy.heading}</div>
                    <img className="Bline-7" alt="Line" src={content.line7_2} />
                </div>
                <div className="Bframe-wrapper">
                    <div className="Boverlap-group-wrapper">
                        <div className="Bimage">
                            <img className="Bpexels-fauxelss" alt="Pexels fauxels" src={content.caseStudy.imgSrc} />
                        </div>
                        <div className="Bdiv-wrapper">
                            <div className="Btext-wrapper-4">{content.caseStudy.title}</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="Bframe-5">
                <div className="Bdiv">
                    <div className="Btext-wrapper">{content.nextStep.heading}</div>
                    <img className="Bline-8" alt="Line" src={content.line7_3} />
                </div>
                <p className="Btext-wrapper-5">{content.nextStep.text}</p>
                <div className="Bframe-6">
                    <div className="Btext-wrapper-6">Book a meeting</div>
                    <img className="Bvector" alt="Vector" src={content.nextStep.imgSrc} />
                </div>
            </div>
        </div>
    );
};

export default ServiceMobContent;
