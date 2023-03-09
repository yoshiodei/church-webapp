import React from 'react';
import '../styles/events.css';
import '../styles/components/SectionHeader.css';
import SectionHeader from '../components/SectionHeader';

function Events() {
  return (
    <div className="events">
      <SectionHeader title="Events" icon="fa-solid fa-house" />

      <div className="events-boxes">
        <div className="events-box">
          <div className="date-box">
            <p>JAN</p>
            <h3>12</h3>
          </div>
          <div className="image-box" />
          <div className="box-content">
            <h3>XYZ Convention</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate fugiat
              quibusdam autem eveniet est...
            </p>
          </div>
          <div className="details-link">
            <p>Checkout Details</p>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
        <div className="events-box">
          <div className="date-box">
            <p>JAN</p>
            <h3>12</h3>
          </div>
          <div className="image-box" />
          <div className="box-content">
            <h3>XYZ Convention</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate fugiat
              quibusdam autem eveniet est...
            </p>
          </div>
          <div className="details-link">
            <p>Checkout Details</p>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
        <div className="events-box">
          <div className="date-box">
            <p>JAN</p>
            <h3>12</h3>
          </div>
          <div className="image-box" />
          <div className="box-content">
            <h3>XYZ Convention</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate fugiat
              quibusdam autem eveniet est...
            </p>
          </div>
          <div className="details-link">
            <p>Checkout Details</p>
            <i className="fa-solid fa-arrow-right" />
          </div>
        </div>
        <div className="events-box upcoming-events">
          <div className="events-circle" />
          <h1>View All Upcoming Events</h1>
          <i className="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default Events;
