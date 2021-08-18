import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import store from './common/app-store/AppStore';
import { Provider } from 'react-redux';


const config = {
    baseUrl: 'http://localhost:3000/api/v1/'
};

ReactDOM.render(
    <Provider store={store}><Controller config={config} /></Provider>
    , document.getElementById('root'));
registerServiceWorker();
