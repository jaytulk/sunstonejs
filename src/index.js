import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'toastr/build/toastr.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
