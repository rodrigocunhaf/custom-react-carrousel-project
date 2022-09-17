import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  isActiveBanner: boolean;
}

const Button = styled.button<ButtonProps>`
  color: black;
  background-color: ${(props) => (!props.isActiveBanner ? 'yellow' : 'black')};
  border: 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 5rem;
  height: 1rem;
  border-radius: 3rem;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 12rem;
    height: 4rem;
    background-color: yellow;
    border-radius: 0;
    border-bottom-left-radius: 3rem;
    border-top-left-radius: 3rem;
  }
`;

const ButtonContent = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 12rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
  }
`;

interface FillBarProps {
  currentWidth: number;
}

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

interface CarrouselButtonProps {
  buttonName: string;
  fillWidth: number;
  inTransition: boolean;
  disabled: boolean;
  value: number;
  buttonOrder: number;
  currentElement: number;
  inTransitionFillBar: boolean;
  actionClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

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
}: CarrouselButtonProps): JSX.Element => {
  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
    actionClick(event);
  };

  return (
    <Button
      onClick={onClickHandler}
      value={value}
      disabled={disabled}
      type="button"
      isActiveBanner={currentElement === buttonOrder}
    >
      <ButtonContent>
        {buttonName}
        {currentElement === buttonOrder && (
          <FillBar
            currentWidth={fillWidth}
            style={{
              transitionDuration: `${!inTransitionFillBar ? '0ms' : '1000ms'}`,
              display: `${fillWidth >= 100 || inTransition ? 'none' : 'flex'}`,
            }}
          />
        )}
      </ButtonContent>
    </Button>
  );
};

export default CarrouselButton;
