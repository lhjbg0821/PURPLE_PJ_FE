import GameCard from "../components/GameCard";

const Portfolio = () => {
  return (
    <div className="1/2-h-screen px-30 bg-black">
      <div className="bg-gray-50 mt-5 max-w-screen-xl flex flex-col mx-auto justify-start items-start h-96">
        <div className="text-3xl ml-4 mt-4">
          <div className=" font-bold">이 름 : 현진</div>
          <div className="font-semibold">게 임 : Flappy Bird </div>
          <div>
            게임설명 : 스페이스 바를 누르면 새가 점프합니다. 파이프 사이를
            통과할 때마다 1점씩 증가합니다. 파이프에 닿으면 게임 종료!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
