import React from 'react';
import SectionHeader from '../components/SectionHeader';
import '../styles/sections/Sermons.css';

export default function Sermons() {
  return (
    <div className="sermons py-5">
      <div className="container">
        <SectionHeader title="Sermons" />
        <div className="row pt-5 g-3">
          <div className="col-md-8">
            <div className="sermon__main-div">
              <h5 className="sermon__live-banner">Live</h5>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-2">
              <div className="col-md-12">
                <div className="sermon__side-div" />
              </div>
              <div className="col-md-12">
                <div className="sermon__side-div" />
              </div>
              <div className="col-md-12">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary custom-button" type="button">Check Out Other Sermons</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
