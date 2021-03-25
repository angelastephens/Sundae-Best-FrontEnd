import { START_LOADING_SUNDAE, SUCCESSFULLY_LOADED_SUNDAE } from "./index";
import { START_LOADING_SUNDAES, SUCCESSFULLY_LOADED_SUNDAES } from "./index";
import { SUCCESSFULLY_CREATED_SUNDAE } from "./index";

export const fetchSundae = (sundaeId) => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_SUNDAE, payload: sundaeId });
    fetch(`http://localhost:3001/sundaes/${sundaeId}`)
      .then((res) => res.json())
      .then((sundaeJson) => {
        dispatch({
          type: SUCCESSFULLY_LOADED_SUNDAE,
          payload: sundaeJson
        });
      });
  };
};

export const fetchSundaes = () => {
  return (dispatch) => {
    dispatch({ type: START_LOADING_SUNDAES});
    fetch(`http://localhost:3001/sundaes`)
      .then((res) => res.json())
      .then((sundaesJson) => {
        dispatch({
          type: SUCCESSFULLY_LOADED_SUNDAES,
          payload: sundaesJson
        });
      });
  };
};

export const createSundae = (formData) => {
  return (dispatch) => {
    return fetch("http://localhost:3001/sundaes", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ sundae: formData })
    })
      .then((res) => res.json())
      .then((sundaeJson) => {
        dispatch({
          type: SUCCESSFULLY_CREATED_SUNDAE,
          payload: sundaeJson
        });
      });
  };
};



