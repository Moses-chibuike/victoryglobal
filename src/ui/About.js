import React from 'react'
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css'
import about_img from '../img/about-image.png'
import manag_photo1 from '../img/team/Padmakumar.png';
import manag_photo2 from '../img/team/Sundaramoorthy.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg'
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  
  return (
    <>
   <InnerHeader />
   <InnerHeaderBanner name={"About Us"} img = {abtHeader}/>

     <main id="main">   
      <section id="about" className="about">
         <div className="container" data-aos="fade-up">
            <div className="section-header">
               <h2>Helping Clients ACHIEVE their Vision</h2>
            </div>
            <div className="row gy-4 align-items-center" data-aos="fade-up">
               <div className="col-lg-6">
                  <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
               </div>
               <div className="col-lg-6">
                  <p> We started victory global in 2005. When we started our company, we knew we would be working together with our mobile carrier clients to help increase their top-line revenue by saving fuel and drinking clean water.</p>
                  <p> victory global  is a community project established to promote health and wellness. It is an open-source project for elites in different communities to pull their resources together to create major impact in their various communities, with her unique compensation plan and 100% natural products.</p>
                  <p> Since then, victory global has seen unprecedented growth and is one of the largest and fastest growing VAS companies in India. We have generated multi-million dollars in revenue for our clients and currently service over 20 million customers and growing.</p>
                  <p> Our determination to help our clients succeed is only one facet of victory global. When we started victory global, we wanted to create a company that not only succeeded financially, we strive to take care of our employees, and to give back to our community. That is why victory global donates a portion of every dollar we earn to make a difference in this world.</p>
               </div>
            </div>
         </div>
      </section>
    
      <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="row gy-4">
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Vision</h4>
                              <p>To maintain healthy, safe, and thriving communities where all people have equitable access to employment, food, education, housing, and a high-quality health care system.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title"> Mission</h4>
                              <p>To inspire hope and contribute to the health and well-being of people by providing the best health products that will effectively tackle major health issues.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
               <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-item">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="card-body">
                              <h4 className="card-title">Our Values</h4>
                              <p> To reach out to communities and empower them by teaching them various skills. To promote, protect, and improve the health of individuals in various communities.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
              
            </div>
         </div>
      </div>
  
      <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
         <div className="container">
            <div className="section-header">
               <h2>Our Team</h2>
               <p>Victory global's leadership team is dedicated to meet and exceed customer expectations with innovative and cost-effective solutions, industry know-how and unmatched services.</p>
            </div>
            <div className="row member d-flex align-items-center ">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo1} className="img-fluid" alt=""/></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>T.Padmakumar</h4>
                     <span>Co-Founder & Director</span>
                     <p>Padma is a visionary Technocrat with 16 Years of experience and has worked with consulting majors & service industries in the field of IT technologies. His specialization includes Networking, Securities, System Architecture, Data base and Enterprise solutions .</p>
                     <div className="social">
                     <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                     <Link to ="/"> <i className="bi bi-linkedin"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
               <div className="col-md-2">
                  <div className="pic"><img src={manag_photo2} className="img-fluid" alt="" /></div>
               </div>
               <div className="col-md-10">
                  <div className="member-info">
                     <h4>V.Sundaramoorthy </h4>
                     <span>Co-Founder & Director</span>
                     <p>Sundar is a visionary and entrepreneur in his own right. He has worked with IT and Engineering majors before entering the telecom business. He has over 14 years of management experience with IT & Engineering majors and has significant global experience and also an expert in corporate alliance. </p>
                     <p> Sundar has extensive multi-functional management experience in marketing, sales, business and corporate development and holds a Bachelors degree in  Electrical & Electronic Engineering.</p>
                     <div className="social">
                        <Link to ="/"><i className="bi bi-twitter"></i></Link>                
                        <Link to ="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/"> <i className="bi bi-linkedin" target="_blank"></i> </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   
   </main>
   <Footer/>
    
    </>
  )
}

export default About