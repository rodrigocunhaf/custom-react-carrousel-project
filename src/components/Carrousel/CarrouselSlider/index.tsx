import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  height: 100%;
  display: flex;
  width: 3840px;
`;

interface ItemProps {
  bgColor: string;
}

const Item = styled.div<ItemProps>`
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  color: white;
  font-size: 5rem;
`;

interface CarrouselSliderProps {
  currentElementColor: string;
  currentElementText: string;
  nextElementColor: string;
  nextElementText: string;
  inTransition: boolean;
  translate: number;
}

const CarrouselSlider = ({
  currentElementColor,
  currentElementText,
  nextElementColor,
  nextElementText,
  inTransition,
  translate,
}: CarrouselSliderProps): JSX.Element => {
  return (
    <Container>
      <Item
        bgColor={currentElementColor}
        style={{
          transform: `translateX(${translate}%)`,
          transitionDuration: `${!inTransition ? '0ms' : '1000ms'}`,
        }}
      >
        {currentElementText}
      </Item>
      <Item
        bgColor={nextElementColor}
        style={{
          transform: `translateX(${translate}%)`,
          transitionDuration: `${!inTransition ? '0ms' : '1000ms'}`,
        }}
      >
        {nextElementText}
      </Item>
    </Container>
  );
};

export default CarrouselSlider;
