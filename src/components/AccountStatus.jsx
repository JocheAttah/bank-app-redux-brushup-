import React from "react";
import { useSelector } from "react-redux";

function AccountStatus() {
  const isSavings = useSelector((state) => state.banking.isSavings);

  return (
    <div>
      <h1>{isSavings ? "Savings Account" : "Checking Account"}</h1>
    </div>
  );
}

export default AccountStatus;
