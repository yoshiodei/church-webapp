import React from 'react';
import '../styles/components/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md py-3 bg-mid-primary navbar-custom">
      <div className="container">
        <a className="navbar-brand text-white" href="#home"><h4 className="fw-bolder h4">Brand</h4></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active text-white" aria-current="page" href="#home">Home</a>
            <a className="nav-link ms-2 text-white" href="#about">About</a>
            <a className="nav-link ms-2 text-white" href="#services">Sermons</a>
            <a className="nav-link ms-2 text-white" href="#projects">Events</a>
            <a className="nav-link ms-2 text-white" href="#contact">Gallery</a>
            <a className="nav-link ms-2 text-white" href="#contact">More</a>
            <a className="nav-link ms-2 text-white" href="#contact">Join</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
