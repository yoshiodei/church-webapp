import React from 'react';
import img1 from '../assets/images/carousel-image-1.jpg';
import img2 from '../assets/images/carousel-image-2.jpg';
import img3 from '../assets/images/carousel-image-3.jpg';
import '../styles/components/Carousel.css';

export default function Carousel() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide carousel-fade carousel-custom" data-bs-ride="carousel">
      <div className="carousel-indicators carousel-indicators-custom">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4" />
      </div>
      <div className="carousel-inner carousel-inner-custom">
        <div className="carousel-item active carousel-item-custom" data-bs-interval="8000">
          <img src={img1} className="d-block w-100 img-custom" alt="people praying" />
          <div className="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5 className="h3 carousel-caption-header fw-bold">Welcome To</h5>
            <p className="display-3 carousel-caption-title fw-bold">The Church XYZ</p>
            <p className="carousel-caption-text">
              Lorem ipsum imei alor sum dolor kanli ini
              suk madik salum kan tabsal lorem ipsum
              <br />
              dolor haifa imei sum tal sankadoki mandi
              su tailaa maduki lamal
            </p>
            <button type="button" className="carousel-caption-button">Join Us Today</button>
          </div>
        </div>
        <div className="carousel-item carousel-item-custom" data-bs-interval="8000">
          <img src={img2} className="d-block w-100 img-custom" alt="people praying" />
          <div className="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item carousel-item-custom" data-bs-interval="8000">
          <img src={img3} className="d-block w-100 img-custom" alt="people praying" />
          <div className="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div className="carousel-item carousel-item-custom" data-bs-interval="8000">
          <img src={img2} className="d-block w-100 img-custom" alt="people praying" />
          <div className="carousel-caption d-none d-md-block carousel-caption-custom">
            <h5>Forth slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
