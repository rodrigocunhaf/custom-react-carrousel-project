import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CarrouselAction } from '../actions';

export type ItemCarrousel = {
  order: number;
  color: string;
  text: string;
};

type CarrouselState = {
  bannerList: ItemCarrousel[];
  translate: number;
  transitionBanner: boolean;
  currentBanner: ItemCarrousel;
  nextBanner: ItemCarrousel;
  bannerButtonsActivate: boolean;
  fillBar: number;
  transitionFillBar: boolean;
  disableButtons: boolean;
};

const initialState: CarrouselState = {
  bannerList: [],
  translate: 0,
  transitionBanner: false,
  currentBanner: {
    color: '',
    order: 0,
    text: '',
  },
  nextBanner: {
    color: '',
    order: 0,
    text: '',
  },
  bannerButtonsActivate: false,
  fillBar: 0,
  transitionFillBar: false,
  disableButtons: false,
};

export const carroselSlice = createSlice({
  initialState,
  name: 'Carrousel Banner Slice',
  reducers: {
    setBannerList: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, bannerList: action.payload.data };
    },
    setCurrentBanner: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, currentBanner: action.payload.data };
    },
    setNextBanner: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, nextBanner: action.payload.data };
    },
    setFillBar: (state, action: PayloadAction<CarrouselAction>) => {
      if (action.payload.type === 'GROWNTH_FILL_BAR') {
        return { ...state, fillBar: state.fillBar + action.payload.data };
      }
      if (action.payload.type === 'RESET_FILL_BAR') {
        return { ...state, fillBar: action.payload.data };
      }
    },
    setTransitionFillBar: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, transitionFillBar: action.payload.data };
    },
    setTranslateBanner: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, translate: action.payload.data };
    },
    setTransitionBanner: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, transitionBanner: action.payload.data };
    },
    setDisableButtons: (state, action: PayloadAction<CarrouselAction>) => {
      return { ...state, disableButtons: action.payload.data };
    },
  },
});

const carrouselReducers = carroselSlice.reducer;
export default carrouselReducers;

export const {
  setCurrentBanner,
  setBannerList,
  setNextBanner,
  setTranslateBanner,
  setTransitionBanner,
  setFillBar,
  setTransitionFillBar,
  setDisableButtons,
} = carroselSlice.actions;
