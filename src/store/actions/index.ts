import { ItemCarrousel } from '..';

export type CarrouselAction = {
  type: string;
  data: any;
};

export const defineBannerList = (
  bannerList: ItemCarrousel[]
): CarrouselAction => {
  return {
    type: 'DEFINE_BANNER_LIST',
    data: bannerList,
  };
};

export const defineCurrentElement = (
  bannerElement: ItemCarrousel
): CarrouselAction => {
  return {
    type: 'DEFINE_CURRENT_ELEMENT',
    data: bannerElement,
  };
};

export const defineNextElement = (
  bannerElement: ItemCarrousel
): CarrouselAction => {
  return {
    type: 'DEFINE_NEXT_ELEMENT',
    data: bannerElement,
  };
};

export const translateToNext = (): CarrouselAction => {
  return {
    type: 'TRANSLATE_TO_NEXT',
    data: -100,
  };
};

export const resetTranslate = (): CarrouselAction => {
  return {
    type: 'RESET_TRANSLATE',
    data: 0,
  };
};

export const slowTransitionBanner = (): CarrouselAction => {
  return {
    type: 'SLOW_TRANSITION_BANNER',
    data: true,
  };
};

export const instantTransitionBanner = (): CarrouselAction => {
  return {
    type: 'INSTANT_TRANSITION_BANNER',
    data: false,
  };
};

export const grownthFillBar = (): CarrouselAction => {
  return {
    type: 'GROWNTH_FILL_BAR',
    data: 3,
  };
};

export const resetFillBar = (): CarrouselAction => {
  return {
    type: 'RESET_FILL_BAR',
    data: 0,
  };
};

export const slowTransitionFillBar = (): CarrouselAction => {
  return {
    type: 'SLOW_TRANSITION_FILLBAR',
    data: true,
  };
};

export const instantTransitionFillBar = (): CarrouselAction => {
  return {
    type: 'INSTANT_TRANSITION_FILLBAR',
    data: false,
  };
};

export const enableBannerButtons = (): CarrouselAction => {
  return {
    type: 'ENABLE_BANNER_BUTTONS',
    data: false,
  };
};

export const disableBannerButtons = (): CarrouselAction => {
  return {
    type: 'DISABLE_BANNER_BUTTONS',
    data: true,
  };
};
