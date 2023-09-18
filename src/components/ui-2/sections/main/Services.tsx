import Image from "next/image";
import { useState } from "react";

interface IServices {
  title: string;
  column: number;
  paragraph: string;
  services: {
    image: string;
    paragraph: string;
    title: string;
  }[];
  description: boolean;
  footerColor: boolean;
}

const Services = ({
  title,
  paragraph,
  services,
  description,
  footerColor,
  column,
}: IServices) => {
  return (
    <div
      className={`${
        footerColor ? "bg-csfooter" : "bg-white"
      } py-24 sm:py-28 font-quicksand`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="bg-secondary p-1 w-10 mx-auto rounded-full" />
          <p className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-light text-center">
            {paragraph}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-16 lg:max-w-5xl">
          <div
            className={`grid max-w-xl grid-cols-1 lg:max-w-none ${
              column === 2 && "lg:grid-cols-2"
            } ${column === 3 && "lg:grid-cols-3"} gap-y-8 lg:gap-8 mx-auto`}
          >
            {services.map((item) => {
              if (description == false) {
                return (
                  <div
                    key={item.title}
                    className="relative px-9 py-7 border rounded-md flex gap-6 shadow-lg items-center bg-white"
                  >
                    <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <div className="h-6 w-6 relative">
                        <Image
                          fill
                          src={`/assets/${item.image}`}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="text-base font-bold leading-7 text-gray-900">
                        {item.title}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={item.title}
                  className="relative px-9 py-7 border rounded-md flex flex-col gap-3 shadow-lg"
                >
                  <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <div className="h-6 w-6 relative">
                      <Image
                        fill
                        src={`/assets/${item.image}`}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="text-base font-bold leading-7 text-gray-900">
                    {item.title}
                  </div>
                  <div
                    className={`text-base leading-7 text-gray-600 font-light`}
                  >
                    {item.paragraph}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
