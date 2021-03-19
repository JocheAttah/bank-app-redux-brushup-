import React from "react";
import { toggleLogIn } from "../actions/authActions";
import {useDispatch, useSelector} from "react-redux";


function Auth() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  
  const handleLog = () => {
    //   console.log('clicked')
    //   console.log(isLoggedIn)
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
