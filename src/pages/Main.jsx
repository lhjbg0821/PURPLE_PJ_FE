import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex  items-center py-5">
      <div>
        <Link to={"/"}>
          <button className="w-64 mx-12">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} />
          </button>
        </Link>
      </div>
      <div className=" w-3/4 mx-auto px-40 py-10 flex items-center justify-between text-xl opacity-1 ">
        <Link to={"/현진"}>
          <button className="px-4 py-2 mx-4 text-3xl rounded-xl bg-opacity-30 text-gray-100">
            현진
          </button>
        </Link>
        <Link to={"/주연"}>
          <button className="px-4 py-2 mx-4 text-3xl rounded-xl bg-opacity-30 text-gray-100">
            주연
          </button>
        </Link>
        <Link to={"/성윤"}>
          <button className="px-4 py-2 mx-4 text-3xl rounded-xl bg-opacity-30 text-gray-100">
            성윤
          </button>
        </Link>
        <Link to={"/규혁"}>
          <button className="px-4 py-2 mx-4 text-3xl rounded-xl bg-opacity-30 text-gray-100">
            규혁
          </button>
        </Link>
        <Link to={"/범진"}>
          <button className="px-4 py-2 mx-4 text-3xl rounded-xl bg-opacity-30 text-gray-100">
            범진
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Main;
