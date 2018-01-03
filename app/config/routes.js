import { StackNavigator } from 'react-navigation';

import Home from './../screens/Home';

export default StackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Currencies',
    },
  },
});
