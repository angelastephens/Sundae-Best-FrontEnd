import {
  START_LOADING_SUNDAES,
  SUCCESSFULLY_LOADED_SUNDAES,
  SUCCESSFULLY_LOADED_SUNDAE,
  SUCCESSFULLY_CREATED_SUNDAE,
  SUCCESSFULLY_ADD_VOTE,
  SUCCESSFULLY_BOO_VOTE,
  FAILED_LOADING_SUNDAES,
  ADD_SUNDAE
} from "../actions";
const initialState = {
  loadingState: "notStarted",
  list: [],
  sundae: {}
};

// export default function counterReducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case 'ADD':
//       return {
//         ...state,
//         count: state.count + 1
//       }
//   }
// }

export default function sundaesReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_SUNDAES:
      // spread out the previous state into a new object literal and set loadingState to "inProgress"
      return { ...state, loadingState: "inProgress" };
    case SUCCESSFULLY_LOADED_SUNDAES:
      const sundae = action.payload;
      return {
        ...state,
        loadingState: "successful",

        list: sundae
      };
    case SUCCESSFULLY_LOADED_SUNDAE:
      // spread out the previous state into a new object literal and set loadingState to "inProgress"
      return {
        ...state,
        loadingState: "successful",

        sundae: action.payload
      };

    case SUCCESSFULLY_CREATED_SUNDAE:
      return {
        ...state,
        list: [...state.list, action.payload]
      };

    case SUCCESSFULLY_ADD_VOTE:
      return {
        ...state,
        list: state.list.map((sundae) => {
          //new state, returning a new state based on the old state and the action that dispatched
          if (sundae.id !== action.payload.id) {
            return sundae; //(return the original sundae that was in the list in state)
          }
          return action.payload; // return the updated sundae that was liked
        })
      };

    case SUCCESSFULLY_BOO_VOTE:
      return {
        ...state,
        list: state.list.map((sundae) => {
          //new state, returning a new state based on the old state and the action that dispatched
          if (sundae.id !== action.payload.id) {
            return sundae; //(return the original sundae that was in the list in state)
          }
          return action.payload; // return the updated sundae that was liked
        })
      };
    default:
      // if we dispatch an action that this reducer doesnt care about then we will return the original state
      return state;
  }
}
