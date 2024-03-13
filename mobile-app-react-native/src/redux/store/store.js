import { createStore } from "@reduxjs/toolkit";
import { Reducers } from "../reducers/reducers";
import { combineReducers } from "@reduxjs/toolkit";
import {Reducers2} from "../reducers/reducers2"
const rootReducer = combineReducers({
    Reducers: Reducers,
    Reducers2: Reducers2,
   

  });
  export const store = createStore(rootReducer)