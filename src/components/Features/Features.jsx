/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Features = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div className="h-full flex items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className=" text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p className="text-sm tracking-wide leading-5">{data.title4}</p>
            <div>
              <button
                style={{ color: data.bgColor }}
                className="bg-white py-2 px-4 rounded-full"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;