import { Layout } from './components';
import Listing from './pages/Listing.jsx';
import Checkout from './pages/Checkout.jsx';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './store';
import Confirm from './pages/Confirm';
import Success from './pages/Success';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Listing />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/confirm' element={<Confirm />} />
            <Route path='/success' element={<Success />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
