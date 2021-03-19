const initialState = {
  balance: 0,
  isSavings: false,
};

export const bankingReducers = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT":
      //logic for deposit
      return { ...state, balance: state.balance + action.payload };

    case "WITHDRAW":
      //logic for withdraw
      return { ...state, balance: state.balance - action.payload };

    case "COLLECT_INTEREST":
      //logic for collecting interest
      return { ...state, balance: state.balance * 1.03 };

    case "DELETE_ACCOUNT":
      //logic for deleting account
      return { ...state, balance: 0 };

    case "CHANGE_ACCOUNT":
      //logic for change of account
      return { ...state, isSavings: !state.isSavings };

    default:
      return state; // returns the old state ... no change done
  }
};

//actions

//deposits

// const deposit = {
//   type: "DEPOSIT",
//   payload: 20,
// };

//withdraw

// const withdraw = {
//   type: "WITHDRAW",
//   payload: 3,
// };

//collect interest
// const collectInterest = {
//   type: "COLLECT_INTEREST",
//   //no need for payload as this bank has a fix interst rate at 3% done in the reducer
// };

//delete account

// const deleteAccount = {
//   type: "DELETE_ACCOUNT",
//   ///no need for payload
// };
