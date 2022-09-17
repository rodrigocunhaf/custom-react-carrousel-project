import React, { useEffect } from 'react';
import styled from 'styled-components';
import { usePageDispatch, usePageSelector } from '../../store';
import {
  defineBannerList,
  defineCurrentElement,
  defineNextElement,
  disableBannerButtons,
  enableBannerButtons,
  grownthFillBar,
  instantTransitionBanner,
  instantTransitionFillBar,
  resetFillBar,
  resetTranslate,
  slowTransitionBanner,
  slowTransitionFillBar,
  translateToNext,
} from '../../store/actions';
import {
  ItemCarrousel,
  setBannerList,
  setCurrentBanner,
  setDisableButtons,
  setFillBar,
  setNextBanner,
  setTransitionBanner,
  setTransitionFillBar,
  setTranslateBanner,
} from '../../store/reducers';
import { ComponentKey } from '../../utils/ComponentKey';
import CarrouselButton from './CarrouselButton';
import CarrouselButtonList from './CarrouselButtonList';
import CarrouselButtonListItem from './CarrouselButtonListItem';
import CarrouselSlider from './CarrouselSlider';

const Container = styled.section`
  max-width: 1920px;
  height: 460px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Carrousel = ({
  carrouselContent,
}: {
  carrouselContent: ItemCarrousel[];
}) => {
  const carrouselSelector = usePageSelector((state) => state.carrousel);
  const dispatch = usePageDispatch();

  const goToNextElement = (buttonValue: number) => {
    if (buttonValue !== carrouselSelector.currentBanner.order) {
      const newCurrentElement = carrouselSelector.bannerList.find(
        (element) => element.order === buttonValue
      )!;

      dispatch(setNextBanner(defineNextElement(newCurrentElement)));
      dispatch(setDisableButtons(disableBannerButtons()));
      setTimeout(() => {
        dispatch(setTransitionBanner(slowTransitionBanner()));
        dispatch(setTranslateBanner(translateToNext()));
      }, 100);

      setTimeout(() => {
        dispatch(setTransitionBanner(instantTransitionBanner()));
        dispatch(setTranslateBanner(resetTranslate()));
        dispatch(setCurrentBanner(defineCurrentElement(newCurrentElement)));
        dispatch(setFillBar(resetFillBar()));
        dispatch(setDisableButtons(enableBannerButtons()));
      }, 1000);
    }
  };

  const onClickNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonValue = Number(event.currentTarget.value);
    goToNextElement(buttonValue);
  };

  useEffect(() => {
    dispatch(setBannerList(defineBannerList(carrouselContent)));
    dispatch(setCurrentBanner(defineCurrentElement(carrouselContent[0])));
  }, []);

  useEffect(() => {
    dispatch(setTransitionFillBar(slowTransitionFillBar()));
    if (carrouselSelector.fillBar >= 100) {
      dispatch(setTransitionFillBar(instantTransitionFillBar()));
      const timerOne = setTimeout(() => {
        dispatch(setFillBar(resetFillBar()));
      }, 1000);

      if (
        carrouselSelector.currentBanner.order ===
        carrouselSelector.bannerList.length
      ) {
        goToNextElement(1);
      } else {
        goToNextElement(carrouselSelector.currentBanner.order + 1);
      }
      return () => clearTimeout(timerOne);
    }

    const timerTwo = setTimeout(() => {
      dispatch(setFillBar(grownthFillBar()));
    }, 280);

    return () => {
      clearTimeout(timerTwo);
    };
  }, [carrouselSelector.fillBar]);

  return (
    <Container>
      {/* ImageSlider */}
      <CarrouselSlider
        currentElementColor={carrouselSelector.currentBanner.color}
        currentElementText={carrouselSelector.currentBanner.text}
        nextElementColor={carrouselSelector.nextBanner.color}
        nextElementText={carrouselSelector.nextBanner.text}
        inTransition={carrouselSelector.transitionBanner}
        translate={carrouselSelector.translate}
      />

      {/* Menu List Banner Buttons */}
      <CarrouselButtonList>
        {carrouselSelector.bannerList.map((banner, index) => {
          return (
            <CarrouselButtonListItem
              key={ComponentKey('carrosel_button_item', index)}
            >
              {/* Banner Menu Button */}
              <CarrouselButton
                actionClick={onClickNext}
                buttonName={banner.text}
                buttonOrder={banner.order}
                value={banner.order}
                inTransition={carrouselSelector.transitionBanner}
                inTransitionFillBar={carrouselSelector.transitionFillBar}
                currentElement={carrouselSelector.currentBanner.order}
                disabled={carrouselSelector.disableButtons}
                fillWidth={carrouselSelector.fillBar}
              />
            </CarrouselButtonListItem>
          );
        })}
      </CarrouselButtonList>
    </Container>
  );
};

export default Carrousel;
