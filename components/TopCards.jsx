import React from "react";

const TopCards = () => {
  return (
    <div className="grid gap-4 p-4 lg:grid-cols-5">
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-2 flex items-center justify-center rounded-lg bg-green-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
      <div className="col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-2 flex items-center justify-center rounded-lg bg-green-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
      <div className="flex w-full justify-between rounded-lg border bg-white p-4">
        <div className="flex w-full flex-col pb-4">
          <p className="text-2xl font-bold">$8,8548</p>
          <p className="text-gray-700">Daily Revenue</p>
        </div>
        <p className="my-2 flex items-center justify-center rounded-lg bg-green-200 p-2 font-semibold">
          <span>+8%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
