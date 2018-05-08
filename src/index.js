import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import {createHashHistory} from 'history';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'toastr/build/toastr.css';
const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
