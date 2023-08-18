import { useState } from "react";

import "./App.css";
import SelectsAnidados from "./components/SelectAnidados";

function App() {
  return (
    <main className="colombia">
      <h1>Destinos turisticos en Colombia</h1>
      <SelectsAnidados />
    </main>
  );
}

export default App;
