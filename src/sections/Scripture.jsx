import React from 'react';
import '../styles/sections/Scripture.css';

export default function Scripture() {
  return (
    <div className="scripture">
      <div className="container py-5">
        <div className="d-flex justify-content-center">
          <div className="scripture-div">
            <h3 className="fw-bold pb-2 scripture-title">Scripture Of The Week</h3>
            <p className="pb-3">
              The message of the cross is foolish to those who are headed for destruction! But we
              who are being saved know it is the very power of God.
            </p>
            <h5 className="fw-bold">1 Corinthians 1:18</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
