import React from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  list-style: none;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: center;
    right: 0;
    left: unset;
    gap: unset;
  }
`;

const CarrouselButtonList = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <Container>{children}</Container>;
};

export default CarrouselButtonList;
