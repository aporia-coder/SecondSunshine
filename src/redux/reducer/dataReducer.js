import { SET_LOADING, SET_PROPERTIES } from "../types";

const initialState = {
  loading: true,
  propertys: [],
  error: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_PROPERTIES:
      return {
        ...state,
        properties: [...action.payload],
        loading: false,
      };
    default:
      return initialState;
  }
}
