import React, { Component } from 'react';
import Background from './background';
import Card from './card';
import Forms from './forms';

export default class Main extends Component {
  render() {
    return (
      <Background
        cardSlot={<Card />}
        formSlot={<Forms />}
      />
    );
  }
}
