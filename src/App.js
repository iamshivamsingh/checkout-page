import { Layout } from './components';
import Checkout from './pages/Checkout.jsx';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Checkout />
      </Layout>
    </Provider>
  );
};

export default App;
