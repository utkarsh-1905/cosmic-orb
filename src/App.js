import Loader from "./Loader/Loader";
import { useState } from "react";
function App() {
  const [load, setLoad] = useState(true);

  window.addEventListener("load", () => {
    setLoad(false);
  });

  return <div className="App">{<Loader />}</div>;
}

export default App;
