import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: black;
  background-color: yellow;
  border: 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 12rem;
  height: 4rem;
  border-bottom-left-radius: 3rem;
  border-top-left-radius: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

type FillBarProps = {
  currentWidth: number;
};

const FillBar = styled.div<FillBarProps>`
  background-color: black;
  height: 5px;
  position: absolute;
  width: ${(props) => props.currentWidth}%;
  top: 59px;
  left: 25px;
  border-top-left-radius: 1rem;
  transition-duration: 500ms;
`;

type CarrouselButtonProps = {
  buttonName: string;
  fillWidth: number;
  inTransition: boolean;
  disabled: boolean;
  value: number;
  buttonOrder: number;
  currentElement: number;
  inTransitionFillBar: boolean;
  actionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CarrouselButton = ({
  buttonName,
  fillWidth,
  inTransition,
  disabled,
  value,
  buttonOrder,
  currentElement,
  inTransitionFillBar,
  actionClick,
}: CarrouselButtonProps) => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    actionClick(event);
  };

  return (
    <Button
      onClick={onClickHandler}
      value={value}
      disabled={disabled}
      type="button"
    >
      {buttonName}
      {currentElement === buttonOrder && (
        <FillBar
          currentWidth={fillWidth}
          style={{
            transitionDuration: `${
              inTransitionFillBar === false ? '0ms' : '1000ms'
            }`,
            display: `${
              fillWidth >= 100 || inTransition === true ? 'none' : 'flex'
            }`,
          }}
        />
      )}
    </Button>
  );
};

export default CarrouselButton;
