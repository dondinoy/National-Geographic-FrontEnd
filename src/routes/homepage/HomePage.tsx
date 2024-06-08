import React from "react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 gap-x-2 gap-y-2 grid-flow-row-dense ">
      <div className="bg-red-500 shadow-xl ">
        <div className="grid grid-rows-6 gap-x-2 gap-y-2 grid-flow-col-dense">
          <div className="bg-teal-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-blue-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-indigo-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-purple-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-pink-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-slate-500 shadow-xl min-h-[50px]"></div>
        </div>
      </div>
      <div className="bg-yellow-500 shadow-xl col-span-2">
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 grid-flow-row-dense col-span-4">
          <div className="bg-pink-500 shadow-xl min-h-[100vh]"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 grid-flow-row-dense col-span-4">
          <div className="bg-indigo-500 shadow-xl min-h-[80vh]"></div>
          <div className="bg-teal-500 shadow-xl min-h-[80vh]"></div>
        </div>
      </div>
      <div className="bg-orange-500  shadow-xl min-h-[150vh] col-span-3">
      </div>
      <div className="bg-red-500 shadow-xl p-4 flex flex-col justify-evenly">
        <div className="grid grid-rows-6 gap-x-2 gap-y-2">
          <div className="bg-teal-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-blue-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-indigo-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-purple-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-pink-500 shadow-xl min-h-[50px]"></div>
          <div className="bg-slate-500 shadow-xl min-h-[50px]"></div>
        </div>
      </div>
      <div className="bg-yellow-500 shadow-xl col-span-2">
        <div className="grid grid-cols-1 gap-x-2 gap-y-2 grid-flow-row-dense col-span-4">
          <div className="bg-pink-500 shadow-xl min-h-[100vh]"></div>
        </div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-2 grid-flow-row-dense col-span-4">
          <div className="bg-indigo-500 shadow-xl min-h-[80vh]"></div>
          <div className="bg-teal-500 shadow-xl min-h-[80vh]"></div>
        </div>
      </div>
      <div className="bg-orange-500  shadow-xl min-h-[100vh] col-span-3">
       </div>
    </div>
  );
};

export default HomePage;
