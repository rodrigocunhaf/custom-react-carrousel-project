import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import carrouselReducers from './reducers';

const store = configureStore({
  reducer: {
    carrousel: carrouselReducers,
  },
});

type RootStatePage = ReturnType<typeof store.getState>;

export type PageDispatch = typeof store.dispatch;

const usePageSelector: TypedUseSelectorHook<RootStatePage> = useSelector;

const usePageDispatch: () => PageDispatch = useDispatch;

export { store, usePageSelector, usePageDispatch };
