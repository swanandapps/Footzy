import React from "react";
import Tabs from "../src/components/tabs";
import "./App.css";

const App = () => {
  console.log("App.js Run");

  return (
    <div className="App">
      <div className="main">
        <div className="footzy-header">
          <img
            alt=""
            src="https://i.giphy.com/media/WvuTFk2IN7jxoLVDkP/200w.webp"
          />
        </div>
        <Tabs />
      </div>
    </div>
  );
};

export default App;
