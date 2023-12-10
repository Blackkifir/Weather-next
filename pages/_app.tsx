import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import './globals.css';
import './globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
