import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GameCard from "./components/GameCard";
import NameCard from "./components/NameCard";
import Portfolio from "./pages/Portfolio";
import Main from "./pages/Main";
import JooY from "./pages/JooY";
import SYoon from "./pages/SYoon";
import KyuH from "./pages/KyuH";
import BJin from "./pages/BJin";
import { useState } from "react";
import Slide from "./components/Slide";

function App() {
  //슬라이드 이동 함수

  return (
    <BrowserRouter>
      <div className="bg-black px-25 min-h-screen">
        <Main />
        <div className="bg-gray-50 flex py-14 justify-center items-center">
          <Slide />
        </div>
        <Routes>
          <Route path="/현진" element={<Portfolio />} />
          <Route path="/주연" element={<JooY />} />
          <Route path="/성윤" element={<SYoon />} />
          <Route path="/규혁" element={<KyuH />} />
          <Route path="/범진" element={<BJin />} />
        </Routes>

        <div className="-translate-x-48 text-gray-50">slider-track</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
