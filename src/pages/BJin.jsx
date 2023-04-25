const BJin = () => {
  return (
    <div className="1/2-h-screen px-30 bg-black">
      <div className="relative bg-gray-50 mt-5 pl-4 pt-4 max-w-screen-xl flex flex-col  mx-auto justify-start items-start h-96">
        <div className="flex items-end mb-6">
          <div className="w-48 h-48  mt-4 ml-4 rounded-full">
            <img
              className=" rounded-full"
              src={`${process.env.PUBLIC_URL}/images/BProfile.jpg`}
            />
          </div>
          <div className="text-3xl ml-8">
            <div className=" font-bold text-4xl">범진</div>
            <div className="font-semibold text-xl">***</div>
          </div>
        </div>
        <div className="text-xl">***</div>
      </div>
    </div>
  );
};

export default BJin;
