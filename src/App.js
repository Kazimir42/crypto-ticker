import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Crypto from "./pages/Crypto";
import Exchanges from "./pages/Exchanges";
import Cryptos from "./pages/Cryptos";
import Exchange from "./pages/Exchange";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Navigate replace to="/cryptos"/>}/>
                <Route path="/cryptos" exact element={<Cryptos/>} />
                <Route path="/cryptos/:id" exact element={<Crypto/>}/>
                <Route path="/exchanges" exact element={<Exchanges/>} />
                <Route path="/exchanges/:id" exact element={<Exchange/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
