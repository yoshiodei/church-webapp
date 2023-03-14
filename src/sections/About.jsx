import React from 'react';
import '../styles/sections/About.css';
import church from '../assets/images/church.jpg';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="about-image-div col-md-5">
            <div className="about-image-inner-div">
              <img src={church} alt="church" className="about-image" />
              <div className="about-image-border" />
            </div>
          </div>
          <div className="about-info-div col-md-7">
            <div>
              <div>
                <i />
                <h4 className="fw-bold">Church History</h4>
              </div>
              <p>
                Lorem ipsum imei dolor areil lor kimtu kan salanta
                ini mori taliti mintu lorem ipsum dolor lam sal mint
                lemei walim sur talib walakim vaikim.
              </p>
            </div>
            <div>
              <div>
                <i />
                <h4 className="fw-bold">Our Mission</h4>
              </div>
              <p>
                Lorem ipsum imei dolor areil lor kimtu kan salanta
                ini mori taliti mintu lorem ipsum dolor lam sal mint
                lemei walim sur talib walakim vaikim.
              </p>
            </div>
            <div>
              <div>
                <i />
                <h4 className="fw-bold">Our Vision</h4>
              </div>
              <p>
                Lorem ipsum imei dolor areil lor kimtu kan salanta
                ini mori taliti mintu lorem ipsum dolor lam sal mint
                lemei walim sur talib walakim vaikim.
              </p>
            </div>
            <Button>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
