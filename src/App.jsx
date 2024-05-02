import React from "react";
import Header from "./components/header"
import Nearby from "./components/nearby"
import Main from "./components/main"
import ball from "../src/img/free-icon-volleyball-ball-8384.svg"
import ball3 from "../src/img/free-icon-volleyball-ball-7041828.svg"
import ball4 from "../src/img/free-icon-volleyball-184940.svg"
function App() {
  return (
    <div>
      <Header />
      <Nearby />
      <Main />
      <div>
        <img className="bgBall1" src={ball} alt="" />
        <img className="bgBall3" src={ball3} alt="" />
        <img className="bgBall4" src={ball4} alt="" />
      </div>
    </div>
  );
}

export default App;
