import PropTypes from 'prop-types';
import React from 'react';
import { Text, View, Image } from 'react-native';

import CoinIcons from './../../assets/CoinIcons';
import styles from './styles';

const CoinCard = ({
  SYMBOL, COIN_NAME, COIN_PRICE, PERCENT_CHANGE_24H, PERCENT_CHANGE_7D,
}) => (
  <View style={styles.CoinCard}>
    <View style={styles.coinHeader}>
      <Image style={styles.image} source={CoinIcons[SYMBOL]} />
      <Text style={styles.coinSymbol}>{SYMBOL}</Text>
      <Text style={styles.coinSeperator}>|</Text>
      <Text style={styles.coinName} numberOfLines={1}>
        {COIN_NAME}
      </Text>
      <Text style={styles.coinPrice}>
        {COIN_PRICE}
        <Text style={styles.coinCurrency}> $ </Text>
      </Text>
    </View>
    <View style={styles.coinFooter}>
      <Text>
        24h:
        <Text style={PERCENT_CHANGE_24H < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>
          {` ${PERCENT_CHANGE_24H} %`}
        </Text>
      </Text>
      <Text>
        7d:
        <Text style={PERCENT_CHANGE_7D < 0 ? styles.percentChangeMinus : styles.percentChangePlus}>
          {` ${PERCENT_CHANGE_7D} %`}
        </Text>
      </Text>
    </View>
  </View>
);

CoinCard.propTypes = {
  SYMBOL: PropTypes.string.isRequired,
  COIN_NAME: PropTypes.string.isRequired,
  COIN_PRICE: PropTypes.string.isRequired,
  PERCENT_CHANGE_24H: PropTypes.string.isRequired,
  PERCENT_CHANGE_7D: PropTypes.string.isRequired,
};

export default CoinCard;
