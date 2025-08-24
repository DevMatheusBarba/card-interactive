import React from 'react';
import './Background.css';
import PropTypes from 'prop-types';

// 1. Em vez de 'children', recebemos props nomeadas para cada "slot".
export default function Background({ cardSlot, formSlot }) {
  return (
    <section className="main-container">
      <div className="card-container">

        {cardSlot}
      </div>
      <div className="input-container">

        {formSlot}
      </div>
    </section>
  );
}

Background.propTypes = {
  cardSlot: PropTypes.node.isRequired,
  formSlot: PropTypes.node.isRequired,
};
