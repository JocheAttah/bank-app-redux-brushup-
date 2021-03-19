import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deposit,
  withdraw,
  collectInterest,
  deleteAccount,
  toggleAccount,
} from "../actions/bankingActions";



function Banking() {
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   console.log(isLoggedIn);

  const handleDeposit = () => {
    dispatch(deposit(amount));
  };
  const handleWithdraw = () => {
    dispatch(withdraw(amount));
  };
  const handleCollectInterest = () => {
    dispatch(collectInterest());
  };
  const handleDelete = () => {
    dispatch(deleteAccount());
  };
  const handleAccountChange = () => {
    dispatch(toggleAccount());
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button
        onClick={handleDeposit}
        className="btn btn-success"
        disabled={isLoggedIn ? false : true}
      >
        Deposit
      </button>
      <button
        onClick={handleWithdraw}
        className="btn btn-primary"
        disabled={isLoggedIn ? false : true}
      >
        Witdraw
      </button>
      <button
        onClick={handleCollectInterest}
        className="btn btn-warning"
        disabled={isLoggedIn ? false : true}
      >
        Collect Interest
      </button>
      <button
        onClick={handleDelete}
        className="btn btn-danger"
        disabled={isLoggedIn ? false : true}
      >
        Delete Account
      </button>
      <button
        onClick={handleAccountChange}
        className="btn btn-secondary"
        disabled={isLoggedIn ? false : true}
      >
        Change Account Type
      </button>
    </div>
  );
}

export default Banking;
