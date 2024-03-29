import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favs from "./Components/Routes/Favs";
import Contact from "./Components/Routes/Contact";
import Detail from "./Components/Routes/Detail";
import Home from "./Components/Routes/Home"
import Layout from "./Components/Layout/Layout"
import Context from "./Components/utils/Context/ProductContext";

function App() {
  return (
    <BrowserRouter>
    <Context>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/contact" element={<Contact/>} />

          <Route path="/favs" element={<Favs />} />
          <Route path="/dentist/:id" element={<Detail />} />
        </Route>

        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Context>
  </BrowserRouter>
  );
}

export default App;
