import React from 'react';
import store from './store'

import Home from './modules/Home'
import {Provider} from 'react-redux';

export default () =>
      <Provider store={store}>
        <Home/>
      </Provider>;

