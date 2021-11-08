import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cryptos/:id" exact element={<Crypto />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
