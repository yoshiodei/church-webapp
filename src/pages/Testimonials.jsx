import React from 'react';
import '../styles/testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonials-title">
        <div className="header__icon-div">
          {/* <i className="fa-solid fa-house header__icon" /> */}
        </div>
        <h1>Testimonials</h1>
      </div>

      <div className="testimonial-cards">
        <div>
          <div className="testimonial-card">
            <div className="testimonial-card-left" />
            <div className="testimonial-card-right">
              <h3>By Mr. Kwame Bentum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-card-left" />
            <div className="testimonial-card-right">
              <h3>By Mr. Kwame Bentum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div>
          <div className="testimonial-card">
            <div className="testimonial-card-left" />
            <div className="testimonial-card-right">
              <h3>By Mr. Kwame Bentum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-card-left" />
            <div className="testimonial-card-right">
              <h3>By Mr. Kwame Bentum</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials-btn">
        <button type="button">See More Testimonies</button>
      </div>
    </div>
  );
}

export default Testimonials;
