import React from "react";
import education from "../img/education-bg.png";
import entertainment from "../img/entertainment-bg.png";
import games from "../img/games-bg.png";
import sports from "../img/sports-bg.png";

import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import serviceHeader from '../img/services-header.jpg'

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img = {serviceHeader}/>

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>
                We are a
                <span style={{ color: "#155bd5" }}> GLOBAL LEADER</span> in
                Energy Consumption, offer Services across Healthcare sector,
                Environmental sector, Globally.
              </h2>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={education}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Namur Fuel Economizer </h4>
                  <p className="description">
                    
                  This product is top-notch, providing an absolute 100% remedy to fuel consumption. 
                  In various parts of the world, fuel consumption has been a major problem for people, 
                  which is why we have come up with this affordable product that can help people save fuel and money.
                  </p>
                  <p className="description">
                  The Namur Fuel Economizer is a unique product made in Japan that provides 100% fuel consumption 
                  management and improves engine performance
                  </p>
                  <p className="description">
                    
                  This product has an exceptionally powerful redox catalyst, electric ion exchange, 
                  far infrared and electromagnetic wave functions, superposition of the four functions,
                  </p>
                  <p className="description">
                    
                    <span className="fw-bold">
                    Improve engine performance,
                    Reduce fuel consumption,
                    Minimize exhaust emissions,
                    Environmentally Friendly,
                    Enhance horsepower for all petrol and diesel engines,
                    Easy to use.  
                    </span>
                     and more...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> CHARACTERISTICS </h4>
                  <p className="description">
                  This product has an exceptionally powerful redox catalyst, electric ion exchange, 
                  far infrared and electromagnetic wave functions, superposition of the four functions, 
                  reduced hydrocarbon fuels (gasoline, diesel) attraction between molecules, 
                  instantaneous and repeated so than the adsorption and removal of oxygen, 
                  pull the molecule, making the subgroup smaller, modify the fuel to achieve the perfect effect, 
                  so that the fuel combustion is close to 100%.
                    <span className="fw-bold">
                      
                    Product will make the engine work in a clean environment, equal to effectively protect the engine,
                    </span>
                    and many more...
                  </p>
                  <p className="description">
                    
                  so that the exhaust pipe emissions such as smoke and odor decreased more than 45%.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={entertainment} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={games} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Namur Alkaline Stick </h4>
                  <p className="description">
                  Water infection has been one of the major issues faced by people in various parts of the world. 
                  Water is very important, as it is called a universal solvent.

                  It is important to revitalize, alkalize, and mineralize our water before consumption. 
                  Hence the introduction of Namur alkaline sticks.
                  </p>
                  <p className="description">
                  Namur Alkaline Stick is a unique product made from all natural alkaline stones that helps revamp, 
                  revitalize, alkalize, and mineralize your water to make it healthy for consumption. 
                  Namur Alkaline Stick is an exclusive and unique nature-made mineral complex delivered in an easy-to-use ion stick. 
                  It is found only in one place on earth, from a pristine ocean source near the Okinawa Islands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Sports">
          <div className="container">
            <div className="row gy-5 align-items-center">
              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-universal-access-circle"
                    style={{ color: "#1335f5" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> FUNCTIONS </h4>
                  <p className="description">
                  To improve nutrient absorption, metabolism, and immunity
Change the common water into nanometer-sized activated water, which is rich in mineral elements such as calcium, magnesium, sodium, potassium, and zinc.
Resist oxidation, delay senility, and be favourable for human beings' health.
The negative potential can eliminate the excrescent free radical.
Detoxicate the alcohol and tobacco.
Strong solubility and long-term drinking can prevent renal calculus.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={sports} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
