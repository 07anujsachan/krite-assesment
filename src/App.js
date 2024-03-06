import React from "react";
import { Aside } from "./component/Aside";
import { Main } from "./component/Main";

function App() {
  return (
    <div className="flex around">
      <Aside /> <Main />
    </div>
  );
}

export default App;
