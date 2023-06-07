import {
  REQUEST_ACCOUNT_LIST_TO_SPRING,
} from "./mutation-types";

export default {
  [REQUEST_ACCOUNT_LIST_TO_SPRING](state, receivedData) {
    state.accounts = receivedData;
  },
};
