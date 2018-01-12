import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import Store from './config/Store';

EStyleSheet.build({
  $main: '#f79319',
});

export default () => (
  <Provider store={Store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
