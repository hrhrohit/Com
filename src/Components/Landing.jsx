import React from "react";
import { useWindowWidth } from "../breakpoints";
import "./landing.css";
import Navbar from "./Navbar/Navbar";
import HeaderMob from "./Header/HeaderMob";
import Header from "./Header/Header";
import TrustedBy from "./Trust/TrustedBy";
import GoalsDesk from "./Goals/GoalsDesk";
import GoalsMob from "./Goals/GoalsMob";
import GoalsTab from "./Goals/GoalsTab";
import ServicesDesk from "./Services/ServicesDesk";
import ServiceTab from "./Services/ServiceTab";
import ServiceMob from "./Services/ServiceMob";
import TechSuppDesk from "./TechnichalSupport/TechSuppDesk";
import TechSuppTab from "./TechnichalSupport/TechSuppTab";
import TechSuppMob from "./TechnichalSupport/TechSuppMob";
import TestimonialDesk from "./Testimonials/TestimonialDesk";
import TestimonialTab from "./Testimonials/TestimonialTab";
import TestimonialMob from "./Testimonials/TestimonialMob";
import Questiondesk from "./Question/Questiondesk";
import QuestionTab from "./Question/QuestionTab";
import QuestionMob from "./Question/QuestionMob";

const Landing = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="iphone-pro-max"
      style={{
        backgroundColor:
          (screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024
            ? "#ffffff"
            : screenWidth >= 1440
              ? "#f7f7f5"
              : undefined,
      }}
    >

      {
        screenWidth > 1024 &&
        <img
          className="pexels-apasaric"
          style={{
            height: screenWidth >= 1024 && screenWidth < 1440 ? "631px" : screenWidth >= 1440 ? "896px" : undefined,
            // width:
            //   screenWidth >= 1024 && screenWidth < 1440 ? "1023px" : screenWidth >= 1440 ? "1439px" : undefined,
          }}
          alt="Pexels apasaric"
          src={
            screenWidth >= 1024 && screenWidth < 1440
              ? "img/pexels-apasaric-325185-1-1.png"
              : screenWidth >= 1440
                ? "img/pexels-apasaric-325185-1-2.png"
                : undefined
          }
        />
      }

      <div
        className="div"
        style={{
          // backgroundColor:
          //   (screenWidth >= 1024 && screenWidth < 1440) || screenWidth < 1024
          //     ? "#ffffff"
          //     : screenWidth >= 1440
          //       ? "#f7f7f5"
          //       : undefined,
          height:
            screenWidth < 1024
              ? "4104px"
              : screenWidth >= 1024 && screenWidth < 1440
                ? "3360px"
                : screenWidth >= 1440
                  ? "4719px"
                  : undefined,
          overflow: screenWidth >= 1440 ? "hidden" : undefined,
          width:
            screenWidth < 1024
              ? "430px"
              : screenWidth >= 1024 && screenWidth < 1440
                ? "1024px"
                : screenWidth >= 1440
                  ? "1440px"
                  : undefined,
        }}
      >
        {screenWidth < 1024 && (
          <HeaderMob />
        )}

        {((screenWidth >= 1024 && screenWidth < 1440) || screenWidth >= 1440) && (
          <div
            className="overlap-group-2"
            style={{
              height: screenWidth >= 1024 && screenWidth < 1440 ? "640px" : screenWidth >= 1440 ? "896px" : undefined,
              width: screenWidth >= 1024 && screenWidth < 1440 ? "1023px" : screenWidth >= 1440 ? "1439px" : undefined,
            }}
          >

            <Navbar></Navbar>
            <Header />
            <TrustedBy />
          </div>
        )}

        {/* Goals Component Start different sizes */}

        {screenWidth >= 1440 && <GoalsDesk />}

        {screenWidth < 1024 && <GoalsMob />}

        {screenWidth >= 1024 && screenWidth < 1440 && (
          <>
            <GoalsMob />
            <GoalsTab />
          </>
        )}

        {/* Goals Component Ends different sizes */}

        {/* Service Component starts different sizes */}

        {screenWidth >= 1440 && <ServicesDesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <ServiceTab />}
        {screenWidth < 1024 && <ServiceMob />}

        {/* Service Component ends different sizes */}

        {/* Tech support  Component starts different sizes */}

        {screenWidth >= 1440 && <TechSuppDesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <TechSuppTab />}
        {screenWidth < 1024 && <TechSuppMob />}

        {screenWidth >= 1440 && <TestimonialDesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <TestimonialTab />}
        {screenWidth < 1024 && <TestimonialMob />}

        {screenWidth >= 1440 && <Questiondesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <QuestionTab />}
        {screenWidth < 1024 && <QuestionMob />}




        {screenWidth >= 1024 && screenWidth < 1440 && (
          <>
            <div className="why-choose-us">
              <div className="why-choose-us-all">
                <div className="why-choose-us-why">
                  <div className="text-wrapper-29">Why Choose Us</div>
                  <p className="body-text">
                    Choose us for unparalleled VoIP and billing support services. Our expertise ensures seamless
                    communication and efficient billing solutions, making us the top choice for your business.
                  </p>
                </div>
                <div className="count">
                  <div className="frame-18">
                    <div className="text-wrapper-30">40K</div>
                    <div className="text-wrapper-30">15+</div>
                    <img className="line" alt="Line" src="img/line-1-1.svg" />
                  </div>
                  <div className="frame-19">
                    <div className="text-wrapper-31">Our Customers</div>
                    <div className="text-wrapper-31">Years of Experties</div>
                  </div>
                </div>
              </div>
              <div className="element-reasons">
                <div className="div-2">
                  <img className="img-3" alt="Icon" src="img/icon-1.svg" />
                  <div className="reliable-and-timely">
                    <div className="text-wrapper-32">Reliable and Timely Service</div>
                    <p className="text-wrapper-33">We value your time and understand the urgency of problems.</p>
                  </div>
                </div>
                <div className="div-2">
                  <img className="img-3" alt="Unparalleled" src="img/unparalleled-expertise-1.svg" />
                  <div className="unparalleled">
                    <div className="text-wrapper-34">Unparalleled Expertise</div>
                    <p className="text-wrapper-33">
                      Our skilled and experienced members are dedicated to delivering top-notch service.
                    </p>
                  </div>
                </div>
                <div className="div-2">
                  <img className="img-3" alt="Satisfaction" src="img/satisfaction-guaranteed-text-1.svg" />
                  <div className="satisfaction">
                    <div className="text-wrapper-32">Satisfaction guaranteed</div>
                    <p className="text-wrapper-33">Customer satisfaction is at the core of everything we do.</p>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="frame-27">
                <div className="frame-28">
                  <img
                    className="logo-final-working"
                    alt="Logo final working"
                    src="img/logo-final-working-file-01-1-1.png"
                  />
                  <img className="group-2" alt="Group" src="img/group-3-1.png" />
                </div>
                <div className="frame-29">
                  <p className="text-wrapper-37">Phone : +1 000 000 00</p>
                  <div className="text-wrapper-38">Email : comstream@gmail.com</div>
                </div>
              </div>
              <div className="frame-30">
                <div className="navigate">
                  <div className="frame-31">
                    <div className="text-wrapper-39">Navigate</div>
                    <img className="line-4" alt="Line" src="img/line-4-1.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="text-wrapper-40">Home</div>
                    <div className="text-wrapper-41">About Us</div>
                    <div className="text-wrapper-41">Contact Us</div>
                    <div className="text-wrapper-41">Case Studies</div>
                    <div className="text-wrapper-41">Testimonials</div>
                  </div>
                </div>
                <div className="frame-33">
                  <div className="frame-31">
                    <div className="text-wrapper-39">Services</div>
                    <img className="line-5" alt="Line" src="img/line-5-1.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="text-wrapper-40">Technical</div>
                    <div className="text-wrapper-41">Managed Platforms</div>
                    <div className="text-wrapper-41">Billing Support</div>
                    <div className="text-wrapper-41">Other Services</div>
                  </div>
                </div>
                <div className="frame-33">
                  <div className="frame-34">
                    <div className="text-wrapper-39">Legal</div>
                    <img className="line-6" alt="Line" src="img/line-6-1.svg" />
                  </div>
                  <div className="frame-32">
                    <div className="text-wrapper-40">Privacy Statement</div>
                    <div className="text-wrapper-41">Terms of Use</div>
                  </div>
                </div>
              </div>
            </footer>
          </>
        )}

        {screenWidth >= 1440 && (
          <>
            <div className="frame-35">
              <div className="frame-36">
                <img className="vector-4" alt="Vector" src="img/page-1-1.png" />
                <div className="text-wrapper-42">Technical Support</div>
              </div>
              <div className="frame-36">
                <img className="report" alt="Report" src="img/page-1-1.png" />
                <div className="text-wrapper-43">Billing Support</div>
              </div>
              <div className="frame-37">
                <img className="frame-38" alt="Frame" src="img/page-1-1.png" />
                <div className="text-wrapper-44">Managed Platform</div>
              </div>
              <div className="frame-36">
                <img className="page-2" alt="Page" src="img/page-1-1.png" />
                <div className="text-wrapper-45">Other Services</div>
              </div>
            </div>



            <footer className="footer-2">
              <div className="frame-51">
                <div className="frame-28">
                  <img
                    className="logo-final-working-2"
                    alt="Logo final working"
                    src="img/logo-final-working-file-01-1-2.png"
                  />
                  <img className="group-5" alt="Group" src="img/group-3-2.png" />
                </div>
                <div className="frame-29">
                  <p className="text-wrapper-59">Phone : +1 000 000 00</p>
                  <div className="text-wrapper-60">Email : comstream@gmail.com</div>
                </div>
              </div>
              <div className="frame-52">
                <div className="navigate-2">
                  <div className="frame-53">
                    <div className="text-wrapper-61">Navigate</div>
                    <img className="line-7" alt="Line" src="img/line-4-2.svg" />
                  </div>
                  <div className="div-4">
                    <div className="text-wrapper-62">Home</div>
                    <div className="text-wrapper-63">About Us</div>
                    <div className="text-wrapper-63">Contact Us</div>
                    <div className="text-wrapper-63">Case Studies</div>
                    <div className="text-wrapper-63">Testimonials</div>
                  </div>
                </div>
                <div className="frame-54">
                  <div className="frame-53">
                    <div className="text-wrapper-61">Services</div>
                    <img className="line-8" alt="Line" src="img/line-5-2.svg" />
                  </div>
                  <div className="div-4">
                    <div className="text-wrapper-62">Technical</div>
                    <div className="text-wrapper-63">Managed Platforms</div>
                    <div className="text-wrapper-63">Billing Support</div>
                    <div className="text-wrapper-63">Other Services</div>
                  </div>
                </div>
                <div className="frame-54">
                  <div className="frame-55">
                    <div className="text-wrapper-61">Legal</div>
                    <img className="line-9" alt="Line" src="img/line-6-2.svg" />
                  </div>
                  <div className="div-4">
                    <div className="text-wrapper-62">Privacy Statement</div>
                    <div className="text-wrapper-63">Terms of Use</div>
                  </div>
                </div>
              </div>
            </footer>

            <div className="why-choose-us-2">
              <div className="why-choose-us-all-2">
                <div className="why-choose-us-why-2">
                  <div className="text-wrapper-69">Why Choose Us</div>
                  <p className="body-text-2">
                    Choose us for unparalleled VoIP and billing support services. Our expertise ensures seamless
                    communication and efficient billing solutions, making us the top choice for your business.
                  </p>
                </div>
                <div className="count-2">
                  <div className="frame-56">
                    <div className="text-wrapper-70">40K</div>
                    <div className="text-wrapper-70">15+</div>
                    <img className="line-10" alt="Line" src="img/line-1-2.svg" />
                  </div>
                  <div className="frame-57">
                    <div className="text-wrapper-71">Our Customers</div>
                    <div className="text-wrapper-71">Years of Experties</div>
                  </div>
                </div>
              </div>
              <div className="element-reasons-2">
                <div className="div-5">
                  <img className="img-4" alt="Icon" src="img/icon-2.svg" />
                  <div className="reliable-and-timely-2">
                    <div className="text-wrapper-72">Reliable and Timely Service</div>
                    <p className="text-wrapper-73">We value your time and understand the urgency of problems.</p>
                  </div>
                </div>
                <div className="div-5">
                  <img className="img-4" alt="Unparalleled" src="img/unparalleled-expertise-2.svg" />
                  <div className="unparalleled-2">
                    <div className="text-wrapper-74">Unparalleled Expertise</div>
                    <p className="text-wrapper-73">
                      Our skilled and experienced members are dedicated to delivering top-notch service.
                    </p>
                  </div>
                </div>
                <div className="div-5">
                  <img className="img-4" alt="Satisfaction" src="img/satisfaction-guaranteed-text-2.svg" />
                  <div className="div-6">
                    <div className="text-wrapper-72">Satisfaction guaranteed</div>
                    <p className="text-wrapper-73">Customer satisfaction is at the core of everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </>
        )}

        {screenWidth < 1024 && (
          <>

       
            <div className="why-choose-US">
              <div className="div-4">
                <div className="text-wrapper-88">Why Choose Us</div>
                <p className="body-text-3">
                  Choose us for unparalleled VoIP and billing support services. Our expertise ensures seamless
                  communication and efficient billing solutions, making us the top choice for your business.
                </p>
              </div>
              <div className="card">
                <div className="reliable-and-timely-3">
                  <img className="img-5" alt="Icon" src="img/icon.svg" />
                  <div className="div-6">
                    <div className="text-wrapper-89">Reliable and Timely Service</div>
                    <p className="text-wrapper-90">We value your time and understand the urgency of problems.</p>
                  </div>
                </div>
                <div className="div-8">
                  <img className="img-5" alt="Unparalleled" src="img/unparalleled-expertise.svg" />
                  <div className="div-6">
                    <div className="text-wrapper-89">Unparalleled Expertise</div>
                    <p className="text-wrapper-90">
                      Our skilled and experienced members are dedicated to delivering top-notch service.
                    </p>
                  </div>
                </div>
                <div className="div-8">
                  <img className="img-5" alt="Satisfaction" src="img/satisfaction-guaranteed-text.svg" />
                  <div className="div-6">
                    <div className="text-wrapper-89">Satisfaction guaranteed</div>
                    <p className="text-wrapper-90">Customer satisfaction is at the core of everything we do.</p>
                  </div>
                </div>
              </div>
              <div className="count">
                <div className="frame-18">
                  <div className="text-wrapper-30">40K</div>
                  <div className="text-wrapper-30">15+</div>
                  <img className="line" alt="Line" src="img/line-1.svg" />
                </div>
                <div className="frame-19">
                  <div className="text-wrapper-31">Our Customers</div>
                  <div className="text-wrapper-31">Years of Experties</div>
                </div>
              </div>
            </div>
        
           

            <footer className="footer-3">
              <div className="frame-73">
                <div className="frame-27">
                  <div className="frame-28">
                    <img
                      className="logo-final-working"
                      alt="Logo final working"
                      src="img/logo-final-working-file-01-1.png"
                    />
                    <img className="group-2" alt="Group" src="img/group-3.png" />
                  </div>
                  <div className="frame-29">
                    <p className="text-wrapper-37">Phone : +1 000 000 00</p>
                    <div className="text-wrapper-38">Email : comstream@gmail.com</div>
                  </div>
                </div>
                <div className="frame-74">
                  <div className="frame-33">
                    <div className="frame-31">
                      <div className="text-wrapper-39">Services</div>
                      <img className="line-5" alt="Line" src="img/line-5.svg" />
                    </div>
                    <div className="frame-32">
                      <div className="text-wrapper-40">Technical</div>
                      <div className="text-wrapper-41">Managed Platforms</div>
                      <div className="text-wrapper-41">Billing Support</div>
                      <div className="text-wrapper-41">Other Services</div>
                    </div>
                  </div>
                  <div className="navigate">
                    <div className="frame-31">
                      <div className="text-wrapper-39">Navigate</div>
                      <img className="line-4" alt="Line" src="img/line-4.svg" />
                    </div>
                    <div className="frame-32">
                      <div className="text-wrapper-40">Home</div>
                      <div className="text-wrapper-41">About Us</div>
                      <div className="text-wrapper-41">Contact Us</div>
                      <div className="text-wrapper-41">Case Studies</div>
                      <div className="text-wrapper-41">Testimonials</div>
                    </div>
                  </div>
                  <div className="frame-33">
                    <div className="frame-34">
                      <div className="text-wrapper-39">Legal</div>
                      <img className="line-6" alt="Line" src="img/line-6.svg" />
                    </div>
                    <div className="frame-32">
                      <div className="text-wrapper-40">Privacy Statement</div>
                      <div className="text-wrapper-41">Terms of Use</div>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
            <div className="trusted-by-2">
              <img className="PC-w" alt="Pc w" src="img/pc-w-1-1.svg" />
              <img className="img-6" alt="Img" src="img/65546b3ead9395d0b0aacee9-croo-logo-1.svg" />
              <img className="iplabs" alt="Iplabs" src="img/ip3labs-1.svg" />
              <img className="frame-75" alt="Frame" src="img/frame-58-1.svg" />
              <div className="text-wrapper-94">Trusted By</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Landing
