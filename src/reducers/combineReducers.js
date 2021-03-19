import { combineReducers } from "redux";
import { authReducers } from "./authReducers";
import { bankingReducers } from "./bankingReducers";

export const rootReducer = combineReducers({
  auth: authReducers,
  banking: bankingReducers,
});

//what it would look like

// const store = {
//   auth: {
//     isLoggedIn: false,
//   },
//   banking: {
//     balance: 0,
//     isSavings: false,
//   },
// };
  