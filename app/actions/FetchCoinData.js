import axios from 'axios';
import apiBaseURL from './../utils/constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL,
} from './../utils/actionTypes';

export default function FetchCoinData() {
  return (dispatch) => {
    dispatch({ type: FETCHING_COIN_DATA });

    return axios
      .get(`${apiBaseURL}/v1/ticker/?limit=20`)
      .then((response) => {
        dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: error.data });
      });
  };
}
