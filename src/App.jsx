import { useState } from "react";

import "./App.css";
import SelectsAnidados from "./components/SelectAnidados";
import Loader from "./components/Loader";

function App() {
  return (
    <>
      <h1>Destinos turisticos en Colombia</h1>
      {/* <Loader /> */}
      <SelectsAnidados />
    </>
  );
}

export default App;
