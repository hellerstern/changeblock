import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppContext from "./context/context";
import "react-toastify/dist/ReactToastify.css";
import Urls from "./Urls";
import "./App.css";
function App() {
  const [sbFlag, setSbFlag] = useState(true);

  window.addEventListener('resize', (event) => {
    if (event.currentTarget.innerWidth < 900 && sbFlag) setSbFlag(false);
  })

  const provider = {
    sbFlag,
    setSbFlag,
  };
  return (
    <AppContext.Provider value={provider}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <div className="App">
        <Urls />
      </div>
    </AppContext.Provider>
  );
}

export default App;
