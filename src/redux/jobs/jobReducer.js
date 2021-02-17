import {
  FETCH_JOB_LIST,
  FETCH_JOB_SUCCESS,
  FETCH_JOB_ERROR,
} from "./jobTypes";

const initialState = {
  loading: false,
  jobList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOB_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_JOB_SUCCESS:
      return {
        loading: false,
        jobList: action.payload,
        error: "",
      };
    case FETCH_JOB_ERROR:
      return {
        loading: false,
        jobList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
