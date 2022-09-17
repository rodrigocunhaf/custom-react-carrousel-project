import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CarrouselButton from '.';
import '@testing-library/jest-dom';
import '@testing-library/dom';

const handleClick = jest.fn();

describe('Component -> </CarrouselButton>', () => {
  it('Component -> </CarrouselButton> - NO TRANSITION BANNER', () => {
    render(
      <CarrouselButton
        actionClick={handleClick}
        buttonName="__BUTTON__CARROUSEL__"
        buttonOrder={1}
        currentElement={1}
        disabled={false}
        fillWidth={2}
        inTransition={false}
        inTransitionFillBar={false}
        value={1}
      />
    );

    fireEvent.click(screen.getByText('__BUTTON__CARROUSEL__'));
    expect(screen.getByText('__BUTTON__CARROUSEL__')).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('Component -> </CarrouselButton> - IN TRANSITION BANNER', () => {
    render(
      <CarrouselButton
        actionClick={handleClick}
        buttonName="__BUTTON__CARROUSEL__"
        buttonOrder={1}
        currentElement={1}
        disabled={false}
        fillWidth={2}
        inTransition={true}
        inTransitionFillBar={false}
        value={1}
      />
    );

    fireEvent.click(screen.getByText('__BUTTON__CARROUSEL__'));
    expect(screen.getByText('__BUTTON__CARROUSEL__')).toBeInTheDocument();
  });

  it('Component -> </CarrouselButton> - IN TRANSITION FILLBAR', () => {
    render(
      <CarrouselButton
        actionClick={handleClick}
        buttonName="__BUTTON__CARROUSEL__"
        buttonOrder={1}
        currentElement={1}
        disabled={false}
        fillWidth={100}
        inTransition={false}
        inTransitionFillBar={true}
        value={1}
      />
    );

    fireEvent.click(screen.getByText('__BUTTON__CARROUSEL__'));
    expect(screen.getByText('__BUTTON__CARROUSEL__')).toBeInTheDocument();
  });
});
