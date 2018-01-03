import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import Store from './config/Store';

EStyleSheet.build({
  $white: '#ffffff',
});

export default () => (
  <Provider store={Store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);
