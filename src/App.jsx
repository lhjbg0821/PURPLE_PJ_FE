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

function App() {
  //슬라이드 이동 함수
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-black px-30 min-h-screen">
        <Main />
        <Routes>
          <Route path="/현진" element={<Portfolio />} />
          <Route path="/주연" element={<JooY />} />
          <Route path="/성윤" element={<SYoon />} />
          <Route path="/규혁" element={<KyuH />} />
          <Route path="/범진" element={<BJin />} />
        </Routes>

        <div className="-translate-x-48 text-gray-50">slider-track</div>

        <div className="bg-red-100 flex py-14">
          <form className="bg-blue-500 w-1/6 mx-5">
            <img src={`${process.env.PUBLIC_URL}/images/gamestart.png`} />
          </form>
          <form className="bg-blue-500 w-1/6 mx-5">
            <img src={`${process.env.PUBLIC_URL}/images/gamestart.png`} />
          </form>
          <form className="bg-blue-500 w-1/6 mx-5">
            <img src={`${process.env.PUBLIC_URL}/images/gamestart.png`} />
          </form>
          <form className="bg-blue-500 w-1/6 mx-5">
            <img src={`${process.env.PUBLIC_URL}/images/gamestart.png`} />
          </form>
          <form className="bg-blue-500 w-1/6 mx-5">
            <img src={`${process.env.PUBLIC_URL}/images/gamestart.png`} />
          </form>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
