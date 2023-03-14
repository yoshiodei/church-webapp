import React from 'react';
import Home from '../sections/Home';
import About from '../sections/About';
import Scripture from '../sections/Scripture';
import ServiceTimes from '../sections/ServiceTimes';
import Join from '../sections/Join';
import Sermons from '../sections/Sermons';

export default function Main() {
  return (
    <>
      <Home />
      <About />
      <Scripture />
      <ServiceTimes />
      <Join />
      <Sermons />
    </>
  );
}
