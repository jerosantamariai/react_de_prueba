import React from 'react'
import injectContext from './store/appContext';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<div>Aqui no hay nada</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
