"use client";
import React from "react";


const performancesList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "20,000",
  },
  {
    metric: "Awards",
    value: "72",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const PerformancesSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#fdaef9] bg-opacity-100 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {performancesList.map((performance, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-slate-700 text-4xl font-bold flex flex-row">
                {performance.value}
                {performance.prefix}
                {performance.postfix}
              </h2>
              <p className="text-[#7050cd] text-base">{performance.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PerformancesSection;