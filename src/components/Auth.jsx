import React from "react";
import { toggleLogIn } from "../actions/bankingActions";
import {useDispatch, useSelector} from "react-redux";


function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const handleLog = () => {
    dispatch(toggleLogIn());
  };
  
  return (
    <div>
      <button className="btn btn-info" onClick={handleLog}>
        {isLoggedIn ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

export default Auth;
