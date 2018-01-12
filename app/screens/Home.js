import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, ScrollView, FlatList, RefreshControl, ActivityIndicator } from 'react-native';

import { Container } from '../components/Container';
import { CoinCard } from '../components/CoinCard';

import FetchCoinData from './../actions/FetchCoinData';

class Home extends Component {
  componentWillMount() {
    this.props.FetchCoinData();
  }

  onRefresh() {
    this.props.FetchCoinData();
  }

  renderCoinCards() {
    const { CryptoReducer } = this.props;
    return (
      <FlatList
        data={CryptoReducer.data}
        renderItem={({ item }) => (
          <CoinCard
            SYMBOL={item.symbol}
            COIN_NAME={item.name}
            COIN_PRICE={item.price_usd}
            PERCENT_CHANGE_24H={item.percent_change_24h}
            PERCENT_CHANGE_7D={item.percent_change_7d}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  }

  render() {
    const { CryptoReducer } = this.props;
    if (CryptoReducer.isFetching) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={this.onRefresh.bind(this)} />
          }
        >
          {this.renderCoinCards()}
        </ScrollView>
      </Container>
    );
  }
}

Home.propTypes = {
  FetchCoinData: PropTypes.func.isRequired,
  CryptoReducer: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    CryptoReducer: state.CryptoReducer,
  };
}

export default connect(mapStateToProps, { FetchCoinData })(Home);
