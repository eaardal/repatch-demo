import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store, { thunk } from 'repatch';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const state = { foo: 'bar' };
const store = new Store(state).addMiddleware(thunk);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
