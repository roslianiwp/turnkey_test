import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducerInput from "./reducers/reducerInput";

const rootReducer = combineReducers({
  input: reducerInput,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
