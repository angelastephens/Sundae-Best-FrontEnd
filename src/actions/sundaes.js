import { START_LOADING_SUNDAE, SUCCESSFULLY_LOADED_SUNDAE } from "./index";
import { START_LOADING_SUNDAES, SUCCESSFULLY_LOADED_SUNDAES } from "./index";
import { SUCCESSFULLY_CREATED_SUNDAE } from "./index";
import { SUCCESSFULLY_ADD_VOTE } from "./index";

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
  return (dispatch) => {  // start of redux thunk/middleware
    console.log("c");
    dispatch({ type: START_LOADING_SUNDAES}); //starts a new circle of redux flow 
    fetch(`http://localhost:3001/sundaes`)
      .then((res) => res.json())
      .then((sundaesJson) => {
        console.log("d")
        dispatch({
          type: SUCCESSFULLY_LOADED_SUNDAES,  //inside asynchronous function 
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


export const addVote = (sundaeId) => {

  return (dispatch) => {
    return fetch(`http://localhost:3001/sundaes/${sundaeId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
      
    })
      .then((res) => res.json())
      .then((sundaeJson) => {
        dispatch({
          type: SUCCESSFULLY_ADD_VOTE,
          payload: sundaeJson
        });
      });
  };
};


 


