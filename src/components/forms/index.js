import React from 'react';
import './Forms.css';

export default function Forms() {
  return (

    <form className="form" action="#">
      <label className="card-name-form" htmlFor="card-name-input">
        Cardholder name
        <input className="card-name-input" type="text" id="card-name-input" placeholder="e.g. Jane Appleseed" />
      </label>
      <label className="card-number-form" htmlFor="card-number-input">
        Card number
        <input className="card-number-input" type="text" id="card-number-input" />
      </label>

      <div className="card-details-form">
        <fieldset className="card-expiry-form">
          <legend>Expiry date</legend>
          <input className="card-expiry-input" type="text" id="card-expiry-month" placeholder="MM" aria-label="Expiration month" />
          <input className="card-expiry-input" type="text" id="card-expiry-year" placeholder="YY" aria-label="Expiration year" />
        </fieldset>

        <label className="card-cvs-form" htmlFor="card-cvs-input">
          CVC
          <input className="card-cvs-input" type="text" id="card-cvs-input" />
        </label>
      </div>
      <button className="form-button" type="submit">Confirm</button>

    </form>
  );
}
