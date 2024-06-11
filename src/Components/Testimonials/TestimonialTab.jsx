import { useWindowWidth } from "../../breakpoints"
import "./Styles/tab.css"

const TestimonialTab = () => {
  const screenWidth = useWindowWidth()
  return (
    <>
    <div className="absolute inline-flex items-center flex-col gap-[48.36px]  left-[96px] top-[2307px] testimonials-tab">
          {screenWidth >= 1024 && screenWidth < 1440 && (
            <>
              <p className="what-our-client-says">
                <span className="span">“</span>
                <span className="text-wrapper-25">What Our Client Says About Us</span>
                <span className="span">”</span>
              </p>
              <div className="client-testimonials">
                <div className="cards">
                  <div className="profile">
                    <img className="image" alt="Image" src="img/image.png" />
                    <div className="name">
                      <div className="text-wrapper-26">Winifred Harmon</div>
                      <div className="text-wrapper-27">Los Angeles, CA</div>
                    </div>
                  </div>
                  <p className="text-wrapper-28">
                    Choosing Comstream was the best decision I made for my company needs. Their professionalism,
                    reliability, and skilled team made the entire process stress-free.
                  </p>
                </div>
                <div className="cards">
                  <div className="profile">
                    <img className="image" alt="Image" src="img/image-1.png" />
                    <div className="name-2">
                      <div className="text-wrapper-26">Henry Barton</div>
                      <div className="text-wrapper-27">Los Angeles, CA</div>
                    </div>
                  </div>
                  <p className="text-wrapper-28">
                    &#34;I was amazed by how quickly Comstream responded to my emergency. The service was outstanding,
                    and they resolved the issue efficiently. Highly recommended!&#34;
                  </p>
                </div>
                <div className="cards-2">
                  <div className="profile">
                    <img className="image" alt="Image" src="img/image-2.png" />
                    <div className="name-3">
                      <div className="text-wrapper-26">Shelia Lawrence</div>
                      <div className="text-wrapper-27">Los Angeles, CA</div>
                    </div>
                  </div>
                  <p className="from-start-to-finish">
                    &#34;From start to finish, Comstream exceeded my expectations. Their attention to detail and
                    commitment to quality craftsmanship truly impressed me. &#34;
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
    </>
  )
}

export default TestimonialTab