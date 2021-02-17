import {
  FETCH_CATEGORY_LIST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
} from "./categoryTypes";

const initialState = {
  loading: false,
  categoryList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        loading: false,
        categoryList: action.payload,
        error: "",
      };
    case FETCH_CATEGORY_ERROR:
      return {
        loading: false,
        categoryList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
