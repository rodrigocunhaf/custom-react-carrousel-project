import React from 'react';
import '@testing-library/dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CarrouselSlider from '.';

describe('Component -> CarrouselSlider', () => {
  it('Component -> CarrouselSlider - Component Exist - No Transition', () => {
    render(
      <CarrouselSlider
        currentElementColor="red"
        currentElementText="MY TEST"
        inTransition={false}
        nextElementColor="blue"
        nextElementText="green"
        translate={-100}
      />
    );

    const elementInDocument = screen.getByText('MY TEST');

    expect(elementInDocument).toBeInTheDocument();
  });

  it('Component -> CarrouselSlider - Component Exist - In Transition', () => {
    render(
      <CarrouselSlider
        currentElementColor="red"
        currentElementText="MY TEST"
        inTransition={true}
        nextElementColor="blue"
        nextElementText="green"
        translate={-100}
      />
    );

    const elementInDocument = screen.getByText('MY TEST');

    expect(elementInDocument).toBeInTheDocument();
  });
});
