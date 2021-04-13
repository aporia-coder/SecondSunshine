import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reducer/dataReducer";

const initialState = {};

const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
