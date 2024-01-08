
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layouts from './components/layouts/Layouts';
import { CookiesProvider } from "react-cookie"
import Store from './store/store';
import { Provider } from 'react-redux'


import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.rtl.min.css"


//App
export default function App() {

  return (
    <>
      <BrowserRouter >
        <Provider store={Store}>
          <CookiesProvider >
            <HelmetProvider>
              <Helmet>
                <title>NIAN COMPANY</title>
              </Helmet>
              <div className='App' dir="rtl">
                <Layouts />
              </div>
            </HelmetProvider>
          </CookiesProvider>
        </Provider>
      </BrowserRouter>
    </>
  );
}

