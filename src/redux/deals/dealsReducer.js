import {
  FETCH_DEALS_LIST,
  FETCH_DEALS_SUCCESS,
  FETCH_DEALS_ERROR,
} from "./dealsTypes";

const initialState = {
  loading: false,
  dealsList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DEALS_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DEALS_SUCCESS:
      return {
        loading: false,
        dealsList: action.payload,
        error: "",
      };
    case FETCH_DEALS_ERROR:
      return {
        loading: false,
        dealsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
