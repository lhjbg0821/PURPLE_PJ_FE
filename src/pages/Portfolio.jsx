import GameCard from "../components/GameCard";
import Slide from "../components/Slide";

const Portfolio = () => {
  return (
    <div className="1/2-h-screen px-30 bg-black">
      <div className="relative bg-gray-50 mt-5 pl-4 pt-4 max-w-screen-xl flex flex-col  mx-auto justify-start items-start h-96">
        <div className="flex items-end mb-6">
          <div className="w-48 h-48  mt-4 ml-4 rounded-full">
            <img
              className=" rounded-full"
              src={`${process.env.PUBLIC_URL}/images/profileimg.jpg`}
            />
          </div>
          <div className="text-3xl ml-8">
            <div className=" font-bold text-4xl">현진</div>
            <div className="font-semibold text-xl">Flappy Bird </div>
          </div>
        </div>
        <div className="text-xl">
          스페이스 바를 누르면 새가 점프합니다. 파이프 사이를 통과할 때마다
          1점씩 증가합니다. 파이프에 닿으면 게임 종료!🕊️
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
