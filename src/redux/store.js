import { legacy_createStore } from "redux";
import { reduser } from "./reduser";
export const Store=legacy_createStore(reduser,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
