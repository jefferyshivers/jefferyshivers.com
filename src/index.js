import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import application from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';

let store = createStore(
  application
)

// store.subscribe(() => { console.log(store.getState()) })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
