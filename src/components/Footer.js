import React from "react";
import footerLogo from '../img/sym-logo.svg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                  We are a global leader in a community project established to promote health and wellness.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="/" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/company/symbiotic-infotech-pvt-ltd/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/services">Services</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Educational-content">
                      Educational Content
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Entertainment-content">
                      Entertainment Content
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to="/services/#Games">Games</HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash"></i>
                    <HashLink smooth to ="/services/#Sports">Sports</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                 
                  #1,Sundaram Illam, <br /> Chellamal Street, <br /> Shenoy
                  Nagar, Chennai - 600 030. <br />
                  <br />
                  <strong>Phone:</strong> +233 - 72 - 632 722 <br />
                  <strong>Email: </strong>
                  <a href="mailto:victoryglobal05@gmail.com">                  
                     victoryglobal05@gmail.com
                  </a> 
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> victory global. Ltd </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
