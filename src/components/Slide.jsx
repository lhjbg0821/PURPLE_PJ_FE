import { useState } from "react";

const Slide = () => {
  return (
    <>
      <form className="w-1/6 mx-5">
        <img src={`${process.env.PUBLIC_URL}/images/flappybird.jpg`} />
      </form>
      <form className=" w-1/6 mx-5 ">
        <img src={`${process.env.PUBLIC_URL}/images/Joopj.png`} />
      </form>
      <form className="bg-blue-500 w-1/6 mx-5">
        <img src={`${process.env.PUBLIC_URL}/images/tetris.png`} />
      </form>
      <form className="bg-blue-500 w-1/6 mx-5">
        <img src={`${process.env.PUBLIC_URL}/images/flappybird.jpg`} />
      </form>
      <form className="bg-blue-500 w-1/6 mx-5">
        <img src={`${process.env.PUBLIC_URL}/images/flappybird.jpg`} />
      </form>
    </>
  );
};

export default Slide;
