import React from 'react';
import './Card.css';

export default function Card() {
  return (
    <>
      <div className="card-image-front">
        <span className="card-logo" />
        <p className="card-number">0000 0000 0000 0000</p>
        <div className="card-details">
          <p className="card-holder">JANE APPLESEED</p>
          <p className="card-expiry">00/00</p>
        </div>
      </div>
      <div className="card-image-back">
        <p className="card-cvs">123</p>
      </div>
    </>
  );
}
