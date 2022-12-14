import * as React from 'react';
import '@testing-library/dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, act } from '@testing-library/react';
import Carrousel from '.';
import { Provider } from 'react-redux';
import content from '../../content/index.json';
import { store } from '../../store';
import {
  setBannerList,
  setCurrentBanner,
  setFillBar,
} from '../../store/reducers';
import {
  defineBannerList,
  defineCurrentElement,
  grownthFillBar,
  resetFillBar,
} from '../../store/actions';

jest.useFakeTimers();

describe('Component -> CarrouselSlider', () => {
  it('Component -> CarrouselSlider - Current Last Element next First Element, full fill bar', () => {
    jest.spyOn(store, 'dispatch');
    store.dispatch(setBannerList(defineBannerList(content)));
    store.dispatch(setFillBar(resetFillBar()));
    store.dispatch(setFillBar(grownthFillBar(100)));
    store.dispatch(setCurrentBanner(defineCurrentElement(content[3])));

    render(
      <Provider store={store}>
        <Carrousel carrouselContent={content} />
      </Provider>
    );

    const buttonName = screen.getByText('4 Element');

    fireEvent.click(buttonName);

    act(() => {
      jest.runOnlyPendingTimers();
    });
  });

  it('Component -> CarrouselSlider - Get Any Element, fill bar small', () => {
    store.dispatch(setBannerList(defineBannerList(content)));
    store.dispatch(setFillBar(resetFillBar()));
    store.dispatch(setFillBar(grownthFillBar(1)));
    store.dispatch(setCurrentBanner(defineCurrentElement(content[0])));

    render(
      <Provider store={store}>
        <Carrousel carrouselContent={content} />
      </Provider>
    );

    const buttonName = screen.getByText('4 Element');

    fireEvent.click(buttonName);
  });

  it('Component -> CarrouselSlider -  useEffect test if grownth bar full', () => {
    store.dispatch(setBannerList(defineBannerList(content)));
    store.dispatch(setFillBar(resetFillBar()));
    store.dispatch(setFillBar(grownthFillBar(100)));
    store.dispatch(setCurrentBanner(defineCurrentElement(content[2])));

    render(
      <Provider store={store}>
        <Carrousel carrouselContent={content} />
      </Provider>
    );

    const buttonName = screen.getAllByText('4 Element')[1];

    fireEvent.click(buttonName);

    act(() => {
      jest.runOnlyPendingTimers();
    });
  });

  it('Component -> CarrouselSlider - useEffect test if growth bar not full ', () => {
    store.dispatch(setBannerList(defineBannerList(content)));
    store.dispatch(setFillBar(resetFillBar()));
    store.dispatch(setFillBar(grownthFillBar(70)));
    store.dispatch(setCurrentBanner(defineCurrentElement(content[2])));

    render(
      <Provider store={store}>
        <Carrousel carrouselContent={content} />
      </Provider>
    );

    const buttonName = screen.getAllByText('4 Element')[1];

    fireEvent.click(buttonName);

    act(() => {
      jest.runOnlyPendingTimers();
    });
  });
});
