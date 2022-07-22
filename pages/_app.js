import '../styles/globals.css';

import { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
