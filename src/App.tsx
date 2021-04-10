import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from 'routes';
import Layout from 'components/Layout';
import { store } from 'store';
import { colors, fontSize } from 'styles';

const { REACT_APP_URL_BASE = '/' } = process.env;

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <ThemeProvider theme={{ colors, fontSize }}>
        <BrowserRouter basename={REACT_APP_URL_BASE}>
          <Layout>
            <AppRouter />
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
