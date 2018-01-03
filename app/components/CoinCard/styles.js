import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  CoinCard: {
    padding: 16,
    marginBottom: 4,
    backgroundColor: 'white',
    '@media ios': {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },
    '@media android': {
      elevation: 2,
    },
  },
  coinHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ededed',
    paddingBottom: 8,
    marginBottom: 8,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  coinSymbol: {
    fontWeight: 'bold',
  },
  coinSeperator: {
    marginHorizontal: 5,
  },
  coinName: {
    marginRight: 4,
    flex: 1,
  },
  coinPrice: {
    // marginLeft: 'auto',
    fontWeight: 'bold',
  },
  coinFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  percentChangePlus: {
    color: '#00BFA5',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
