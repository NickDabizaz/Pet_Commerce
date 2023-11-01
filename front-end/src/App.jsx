import { useState } from "react";
import "./App.css";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import MockupHome from "./components/MockupHome";
import MockupBrowse from "./components/MockupBrowse";
import MockupDetail from "./components/MockupDetail";
import MockupCommunity from "./components/MockupCommunity";

function App() {
  const [route, setRoute] = useState("homepage");

  return (
    <>
      {route === "homepage" && <Homepage setRoute={setRoute} />}
      {route === "login" && <Login setRoute={setRoute} />}
      {route === "mockupbelom" && <MockupHome setRoute={setRoute} />}
      {route === "mockupbrowse" && <MockupBrowse setRoute={setRoute} />}
      {route === "mockupdetail" && <MockupDetail setRoute={setRoute} />}
      {route === "mockupcommunity" && <MockupCommunity setRoute={setRoute} />}
    </>
  );
}

export default App;
