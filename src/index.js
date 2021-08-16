import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
import Controller from './screens/Controller';
import store from './common/app-store/AppStore';
import { Provider } from 'react-redux';

// import { ThemeProvider } from '@material-ui/core/styles';
// import theme from './assets/theme';

const config = {
    baseUrl: 'http://abc/'
};

// ReactDOM.render(<ThemeProvider theme={theme}><Controller /></ThemeProvider>, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}><Controller config={config} /></Provider>
    , document.getElementById('root'));
registerServiceWorker();
