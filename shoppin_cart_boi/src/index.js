import React from 'react';
import ReactDOM from 'react-dom';
import '../src/stylesheets/App.css';
import '../src/stylesheets/index.css';
import App from '../src/components/App.js';
import registerServiceWorker from './registerServiceWorker';
import Store from './Store'
import { Provider } from 'react-redux'

const StoreInstance = Store()

ReactDOM.render(
    <Provider store={StoreInstance}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
  
            