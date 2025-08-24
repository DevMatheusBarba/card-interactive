import React, { Component } from 'react';
import Background from './background';
import Card from './card';

export default class Main extends Component {
  render() {
    return (
      <Background
        cardSlot={<Card />}
        formSlot={<Card />}
      />
    );
  }
}
