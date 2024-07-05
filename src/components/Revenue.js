import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/revenue-dashboard.png'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Victory Global</h4>
                <p>Namur Elite International is a community project established to promote health and wellness. It is an open-source project for elites in different communities to pull their resources together to create major impact in their various communities, with her unique compensation plan and 100% natural products.</p>
                <p> To maintain healthy, safe, and thriving communities where all people have equitable access to employment, food, education, housing, and a high-quality health care system.</p>
                <p> To inspire hope and contribute to the health and well-being of people by providing the best health products that will effectively tackle major health issues. </p>
                <Link to="/about" className="btn-get-started">Read More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue