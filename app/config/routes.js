import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from './../screens/Home';

export default StackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Currencies',
      },
    },
  },
  {
    cardStyle: { paddingTop: StatusBar.currentHeight },
  },
);
