"use client";

import { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface IProps {
  title: string;
  description: string;
  qualities: {
    image: string;
    heading: string;
    text: string;
  }[];
  image: string;
}

const Choose = ({ title, description, qualities, image }: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const qualitiesLength = qualities.length / 2;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= qualitiesLength) {
      newIndex = qualitiesLength - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 max-w-7xl mx-auto px-6">
      <div className="lg:col-span-7 gap-7 flex flex-col">
        <div className="space-y-1">
          <h2
            id="why-choose-us"
            className="text-secondary font-bold text-center lg:text-left"
          >
            WHY CHOOSE US
          </h2>
          <h3 className="text-black text-3xl lg:text-5xl font-bold w-10/12 text-center lg:text-left mx-auto lg:mx-0">
            {title}
          </h3>
        </div>
        <p className="font-light text-black w-4/5 text-center lg:text-left mx-auto lg:mx-0">
          {description}
        </p>
        <div>
          <div className=" overflow-hidden cursor-grab">
            <ul
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:flex gap-10 md:gap-6 sm:pr-12 flex-nowrap w-full overflow-visible relative"
              style={{ transform: `translate(-${activeIndex * 100}%)` }}
            >
              {qualities.map((quality) => {
                return (
                  <li
                    key={quality.heading}
                    className="bg-[#f3f1f2] p-9 border-t-4 border-secondary gap-5 flex-col flex lg:w-1/2 flex-none"
                  >
                    <div className="h-12 w-12 relative">
                      <Image
                        className="text-secondary"
                        fill
                        src={`/assets/${quality.image}`}
                        alt={""}
                      />
                    </div>
                    <h3 className="text-black font-semibold text-2xl">
                      {quality.heading}
                    </h3>
                    <p className="text-black font-light">{quality.text}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="relative lg:col-span-5 w-full mx-auto hidden lg:block">
        <Image
          fill
          src={`/assets/${image}`}
          sizes="(max-width: 1200px) 100vw, 60vw"
          alt={""}
          style={{ objectFit: "cover", objectPosition: "bottom" }}
        />
        <div className="bg-white py-10 pl-14 pr-9 absolute flex gap-6 shadow-2xl rounded-lg -translate-x-1/3 translate-y-1/2">
          <div className="h-16 w-16 absolute -translate-x-1/2 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60.006"
              height="60.002"
              viewBox="0 0 60.006 60.002"
            >
              <g id="customer-check-icon" transform="translate(0.003 -0.001)">
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M26.325,3.144a3.72,3.72,0,0,1,7.35,0,3.72,3.72,0,0,0,6.57,1.76A3.72,3.72,0,0,1,46.611,8.58a3.72,3.72,0,0,0,4.81,4.81A3.72,3.72,0,0,1,55.1,19.755a3.72,3.72,0,0,0,1.76,6.57,3.72,3.72,0,0,1,0,7.35,3.72,3.72,0,0,0-1.76,6.57,3.72,3.72,0,0,1-3.675,6.366,3.72,3.72,0,0,0-4.81,4.81,3.72,3.72,0,0,1-6.37,3.679,3.72,3.72,0,0,0-6.57,1.76,3.72,3.72,0,0,1-7.35,0,3.72,3.72,0,0,0-6.57-1.76,3.72,3.72,0,0,1-6.366-3.675,3.72,3.72,0,0,0-4.81-4.81A3.72,3.72,0,0,1,4.9,40.245a3.72,3.72,0,0,0-1.76-6.57,3.72,3.72,0,0,1,0-7.35,3.72,3.72,0,0,0,1.76-6.57,3.72,3.72,0,0,1,3.68-6.366,3.72,3.72,0,0,0,4.81-4.81A3.72,3.72,0,0,1,19.755,4.9a3.72,3.72,0,0,0,6.57-1.756Z"
                  fill="#0756FB"
                />
                <path
                  id="Path_2"
                  data-name="Path 2"
                  d="M37.734,22.316a.423.423,0,0,1,.344-.129.693.693,0,0,1,.387.129l1.2,1.246a.53.53,0,0,1,.172.344.545.545,0,0,1-.172.387L26.777,37.184a.488.488,0,0,1-.344.129.525.525,0,0,1-.387-.129l-5.715-5.758a.349.349,0,0,1-.172-.344.525.525,0,0,1,.172-.387l1.2-1.2a.544.544,0,0,1,.387-.172.53.53,0,0,1,.344.172l4.168,4.168Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </div>
          <div className="text-black text-5xl font-bold">95%</div>
          <div className="text-black font-semibold break-normal">
            Customers <br /> Satisfaction
          </div>
        </div>
      </div>
      <div className="hidden max-w-fit mt-4 gap-2 col-span-3 lg:flex">
        <button className="p-2 border text-black rounded-lg shadow-md hover:scale-105 cursor-pointer">
          <BsChevronLeft onClick={() => updateIndex(activeIndex - 1)} />
        </button>
        <button
          className="p-2 border text-black rounded-lg shadow-md"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Choose;
