import React from 'react';
import { render, screen } from '@testing-library/react';
import CarrouselButtonList from '.';
import '@testing-library/dom';
import '@testing-library/jest-dom';

describe('Component -> <CarrouselButtonList/>', () => {
  it('Component -> <CarrouselButtonList/> - Children Test', () => {
    render(
      <CarrouselButtonList>
        <li>MY ITEM</li>
      </CarrouselButtonList>
    );

    const elementChildren = screen.getByText('MY ITEM');

    expect(elementChildren).toBeInTheDocument();
  });
});
