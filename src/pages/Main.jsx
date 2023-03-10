import React from 'react';
import BooksnPodcasts from './BooksnPodcasts';
import Events from './Events';
import Testimonials from './Testimonials';

export default function Main() {
  return (
    <>
      <Testimonials />
      <Events />
      <BooksnPodcasts />
    </>
  );
}
