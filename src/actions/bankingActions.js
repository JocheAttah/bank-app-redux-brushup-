const deposit = (amount) => {
  return { type: "DEPOSIT", payload: parseInt(amount) };
};
const withdraw = (amount) => {
  return { type: "WITHDRAW", payload: parseInt(amount) };
};
const collectInterest = () => {
  return { type: "COLLECT_INTEREST" };
};
const deleteAccount = () => {
  return { type: "DELETE_ACCOUNT" };
};

const toggleAccount = () => {
  return { type: 'CHANGE_ACCOUNT' };
};

const toggleLogIn = () => {
    return {type: 'LOGGED_IN'}
}

export { deposit, withdraw, collectInterest, deleteAccount, toggleAccount ,toggleLogIn};
