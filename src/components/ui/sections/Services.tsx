import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IServices {
  title: string;
  column: number;
  paragraph: string;
  services_local?: {
    image: string;
    paragraph?: string;
    title: string;
    link?: string;
  }[];
  services_api?: {
    image: {
      filename_download: string;
      id: string;
      title: string;
    };
    paragraph?: string;
    title: string;
    link?: string;
  }[];
  description: boolean;
  footerColor: boolean;
}

const Services = ({
  title,
  paragraph,
  services_api,
  services_local,
  description,
  footerColor,
  column,
}: IServices) => {
  return (
    <div
      className={`${
        footerColor ? "bg-csfooter pt-16 pb-20" : "bg-white"
      } font-quicksand`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="bg-secondary p-1 w-10 mx-auto rounded-full" />
          <h2 className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 font-light text-center">
            {paragraph}
          </p>
        </div>
        <div className="mx-auto max-w-2xl sm:mt-6 lg:max-w-5xl">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 grid-flow-row gap-y-8 md:gap-8 mx-auto`}
          >
            {services_api === undefined
              ? services_local?.map((item, index) => {
                  if (description == false) {
                    return (
                      <Link href={`${item.link}`}>
                        <div
                          key={item.title}
                          className="relative px-9 py-7 border rounded-md flex gap-6 shadow-lg items-center bg-white"
                        >
                          <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                            <div className="h-6 w-6 relative">
                              <Image
                                fill
                                src={"/assets/" + item.image}
                                alt={""}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base font-bold leading-7 text-gray-900">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                  return (
                    <Link href={`${item.link}`}>
                      <div
                        key={item.title}
                        className={`relative px-9 py-7 border rounded-md flex flex-col gap-3 shadow-lg`}
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
                        <h3 className="text-base font-bold leading-7 text-gray-900">
                          {item.title}
                        </h3>
                        <div
                          className={`text-base leading-7 text-gray-600 font-light`}
                        >
                          {item.paragraph}
                        </div>
                      </div>
                    </Link>
                  );
                })
              : services_api?.map((item, index) => {
                  if (description == false) {
                    return (
                      <Link href={`${item.link}`}>
                        <div
                          key={item.title}
                          className="relative px-9 py-7 border rounded-md flex gap-6 shadow-lg items-center bg-white"
                        >
                          <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                            <div className="h-6 w-6 relative">
                              <Image
                                fill
                                src={
                                  "https://www.api.wheelific.com/assets/" +
                                  item.image.id
                                }
                                alt={item.image.title}
                              />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-base font-bold leading-7 text-gray-900">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                  return (
                    <Link href={`${item.link}`}>
                      <div
                        key={item.title}
                        className={`relative px-9 py-7 border rounded-md flex flex-col gap-3 shadow-lg`}
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
                        <h3 className="text-base font-bold leading-7 text-gray-900">
                          {item.title}
                        </h3>
                        <div
                          className={`text-base leading-7 text-gray-600 font-light`}
                        >
                          {item.paragraph}
                        </div>
                      </div>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
