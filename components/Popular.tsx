import React from "react";

type Props = {};

const Popular = (props: Props) => {
  return (
    <div className="flex items-center max-w-7xl px-4 py-4 md:px-0 md:py-[3rem]">
      <div className="flex items-center flex-col w-full">
        <div className="flex items-center justify-between px-[60px] w-full">
          <h2 className="text-greenSec text-[45px] font-b-600">
            Popular Campaigns
          </h2>
          <span className="text-blackPrim">See All</span>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Popular;
