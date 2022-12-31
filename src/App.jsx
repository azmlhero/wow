import React from "react";
import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
// import MainDiv from "./components/MainDiv";
// import Example from "./components/Hooks/Effect"
// import Board from "./components/tic_toe/Board";
import Game from "./components/tic_toe/Game";
function App() {
  return (
    <div>
      <Game/>
      {/* <Board/> */}
      {/* <MainDiv/> */}
      {/* <Example/> */}
    </div>
  );
}

export default App;
