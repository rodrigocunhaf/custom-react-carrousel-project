import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
  position: relative;
`;

const CarrouselButtonListItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Container>{children}</Container>;
};

export default CarrouselButtonListItem;
