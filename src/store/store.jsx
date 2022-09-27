import { legacy_createStore as createStore } from "redux";
import notebookReducers from "../reducers/notebookReducers";

let store = createStore(notebookReducers);

export default store;
