import { render, screen } from '@testing-library/react';
import React from 'react';
import CarrouselButtonListItem from '.';
import '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Component -> <CarrouselButtonListItem/>', () => {
  it('<CarrouselButtonListItem> - Children test', () => {
    render(
      <CarrouselButtonListItem>
        <p>MY TEST</p>
      </CarrouselButtonListItem>
    );

    const elementChildren = screen.getByText('MY TEST');
    expect(elementChildren).toBeInTheDocument();
  });
});
