import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
`;

const CarrouselButtonList = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default CarrouselButtonList;
