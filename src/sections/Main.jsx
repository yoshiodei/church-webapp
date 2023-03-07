import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">To About</Link>
    </>
  );
}
