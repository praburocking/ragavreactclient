import {
  FETCH_EQUIPMENTS_LIST,
  FETCH_EQUIPMENTS_SUCCESS,
  FETCH_EQUIPMENTS_ERROR,
} from "./equipmentsTypes";

const initialState = {
  loading: false,
  equipmentList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EQUIPMENTS_LIST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_EQUIPMENTS_SUCCESS:
      return {
        loading: false,
        equipmentList: action.payload,
        error: "",
      };
    case FETCH_EQUIPMENTS_ERROR:
      return {
        loading: false,
        equipmentList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
