import React from 'react';
import Carrousel from './components/Carrousel';
import PageGlobalConfig from './global/page-global-config';
import { Provider } from 'react-redux';
import { store } from './store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PageGlobalConfig />
      <Carrousel />
    </Provider>
  );
};

export default App;
