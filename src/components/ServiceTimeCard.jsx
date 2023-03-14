import React from 'react';
import '../styles/components/ServiceTimeCard.css';

export default function ServiceTimeCard() {
  return (
    <div className="card">
      <div className="card-image-div">
        <h5 className="card-banner">Every Sunday</h5>
      </div>
      <div className="card__inner-div">
        <h5 className="card__service-title fw-bold pb-3">English Service</h5>
        <div className="card__service-info-div">
          <h6 className="fw-bold">First Service</h6>
          <p>Time: 7:30 am</p>
          <p>Venue: XYZ Chapel</p>
          <hr />
        </div>
        <div className="card__service-info-div">
          <h6 className="fw-bold">Second Service</h6>
          <p>Time: 10:30 am</p>
          <p>Venue: XYZ Chapel</p>
        </div>
      </div>
    </div>
  );
}
