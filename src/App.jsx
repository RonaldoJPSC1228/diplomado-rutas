import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import Inicio from "./components/Inicio";
import Productos from "./components/Productos";
import Detalle from "./components/Detalle";
import Descuentos from "./components/Descuentos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={ <Detalle /> } ></Route>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<Productos />} />
          <Route path='*' element={ <Error/> } />
          <Route path="/descuentos"  element={ <Descuentos /> } ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
