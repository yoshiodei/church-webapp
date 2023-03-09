import React from 'react';
import '../styles/booksnpodcasts.css';
import '../styles/components/SectionHeader.css';
import SectionHeader from '../components/SectionHeader';

function BooksnPodcasts() {
  return (
    <div className="booksnpodcasts">
      <SectionHeader title="Books & Podcasts" icon="fa-solid fa-house" />

      <div className="booksnpodcasts-boxes">
        <div className="booksnpodcasts-box">
          <div className="image-box" />
          <div className="box-content">
            <h3>Podcast XYZ</h3>
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
        <div className="booksnpodcasts-box">
          <div className="image-box" />
          <div className="box-content">
            <h3>Podcast XYZ</h3>
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
        <div className="booksnpodcasts-box">
          <div className="image-box" />
          <div className="box-content">
            <h3>Podcast XYZ</h3>
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
        <div className="booksnpodcasts-box upcoming-booksnpodcasts">
          <div className="booksnpodcasts-circle" />
          <h1>View All Books & Podcasts</h1>
          <i className="fa-solid fa-arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default BooksnPodcasts;
