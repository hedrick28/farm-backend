import { combineReducers } from "redux";
import { auth } from "./auth";
import { product } from "./product";
import { tipModal } from "./tipModal";

export const allReducers = combineReducers({ auth, product, tip: tipModal });
