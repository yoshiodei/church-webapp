import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ServiceTimeCard from '../components/ServiceTimeCard';
import '../styles/sections/ServiceTimes.css';

export default function ServiceTimes() {
  return (
    <div className="service-times py-5">
      <div className="container">
        <SectionHeader title="Service Times" />
        <div className="row pt-5 g-5">
          <div className="col-md-4">
            <ServiceTimeCard />
          </div>
          <div className="col-md-4">
            <ServiceTimeCard />
          </div>
          <div className="col-md-4">
            <ServiceTimeCard />
          </div>
        </div>
      </div>
    </div>
  );
}
