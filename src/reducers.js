import { combineReducers } from "redux";
import users from "./features/Users/reducer";

const rootReducer = combineReducers({
    users
});

export default rootReducer;
