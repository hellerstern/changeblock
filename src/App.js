import { useEffect, useState } from "react";
import AppContext from "./context/context";
import Urls from "./Urls";
import "./App.css";
function App() {
  const [sbFlag, setSbFlag] = useState(true);

  const provider = {
    sbFlag,
    setSbFlag,
  };
  return (
    <AppContext.Provider value={provider}>
      <div className="App">
        <Urls />
      </div>
    </AppContext.Provider>
  );
}

export default App;
