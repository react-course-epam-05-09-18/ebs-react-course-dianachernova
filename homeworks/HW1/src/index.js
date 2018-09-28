import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppRouter} from './app-router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));

registerServiceWorker();
