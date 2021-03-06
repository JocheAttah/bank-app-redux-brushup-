import React from "react";
import AccountStatus from "./components/AccountStatus.jsx";
import Auth from "./components/Auth.jsx";
import Balance from "./components/Balance";
import Banking from "./components/Banking";

function App() {
  return (
    <div className="App">
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
}

export default App;
