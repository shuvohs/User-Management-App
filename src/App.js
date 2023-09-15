import "./App.css";

import { useState } from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import UsersProvider, { UsersContext } from "./context/UserContext";

function App() {
  return (
    <UsersProvider>
      <div>
        <NewUser />

        <Users />
      </div>
    </UsersProvider>
  );
}

export default App;
