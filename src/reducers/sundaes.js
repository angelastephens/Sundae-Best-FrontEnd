import {
  START_LOADING_SUNDAES,
  SUCCESSFULLY_LOADED_SUNDAES,
  SUCCESSFULLY_LOADED_SUNDAE,
  SUCCESSFULLY_CREATED_SUNDAE,
  FAILED_LOADING_SUNDAES,
  ADD_SUNDAE
} from "../actions";
const initialState = {
  loadingState: "notStarted",
  list: [],
  sundae: {}
  
};

export default function sundaesReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_SUNDAES:
      // spread out the previous state into a new object literal and set loadingState to "inProgress"
      return { ...state, loadingState: "inProgress" };
    case SUCCESSFULLY_LOADED_SUNDAES:
      const sundae = action.payload;
      return {
        ...state,
        loadingState: false,

        list: sundae
      };
    case SUCCESSFULLY_LOADED_SUNDAE:
      // spread out the previous state into a new object literal and set loadingState to "inProgress"
      return {
        ...state,
        loadingState: false,

        sundae: action.payload
      };
    
    case SUCCESSFULLY_CREATED_SUNDAE:
      return {
        ...state,
        list:[...state.list, action.payload]
      };
    // case SUCCESSFULLY_LOADED_SUNDAES:
    //   return {
    //     list: action.payload,
    //     loadingState: "successful"
    //   };
    default:
      return state;
  }
}
