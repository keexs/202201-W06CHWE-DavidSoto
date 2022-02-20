import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import robottosReducer from "../reducers/robottosReducer";

const store = createStore(
  robottosReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
