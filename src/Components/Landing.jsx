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
import FooterDesk from "./Footer/FooterDesk";
import FooterTab from "./Footer/FooterTab";
import FooterMob from "./Footer/FooterMob";
import TrustedByMob from "./Trust/TrustedByMob";
import ChooseDesk from "./WhyChoose/ChooseDesk";
import ChooseTab from "./WhyChoose/ChooseTab";
import ChooseMob from "./WhyChoose/ChooseMob";

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
      {
        
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

            {/* <Navbar></Navbar> */}
            <Header />
            <TrustedBy />
          </div>
        )}

        {screenWidth < 1024 && <TrustedByMob />}

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

        {screenWidth >= 1440 && <ChooseDesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <ChooseTab />}
        {screenWidth < 1024 && <ChooseMob />}

        {screenWidth >= 1440 && <Questiondesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <QuestionTab />}
        {screenWidth < 1024 && <QuestionMob />}

        {screenWidth >= 1440 && <FooterDesk />}
        {screenWidth >= 1024 && screenWidth < 1440 && <FooterTab />}
        {screenWidth < 1024 && <FooterMob />}
      </div>
    </div>
  );
};

export default Landing