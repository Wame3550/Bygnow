/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import ArrowButton from "../../../shared/ArrowButton";
import Image from "next/legacy/image";
import { GeneralContext } from "../../../../context/GeneralContext";
import React, { useContext } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import IconWithText from "../../../shared/IconWithText";
import Link from "next/link";

interface IProps {
  title: string;
  introduction: string;
  products: {
    best: string;
    name: string;
    image: {
      id: string;
      filename_download: string;
    };
    features: {
      feature: string;
    }[];
    link: string;
    body: string;
  }[];
}

const BestOfHero: React.FC<IProps> = ({ title, introduction, products }) => {
  const { setMenu } = useContext(GeneralContext);

  return (
    <section>
      <div onMouseEnter={() => setMenu(false)}>
        <div className="relative w-screen px-5 py-10 bg-primary md:flex-col md:px-10 md:pt-16 lg:px-16 xl:px-36">
          <div className="flex flex-col items-center md:items-baseline">
            <div className="mb-5 text-xl font-light text-center text-white sm:text-2xl md:text-left font-quicksand md:text-4xl md:pb-0 flex justify-center w-full">
              <h1>{title}</h1>
            </div>
            <div
              className="mt-3 font-filson mb-5 font-thin text-white md:flex md:flex-col text-center xl:text-base text-sm not-prose"
              dangerouslySetInnerHTML={{
                __html: introduction,
              }}
            />
          </div>
          <div className="grid md:grid-cols-3 xl:grid-cols-5 mx-auto gap-5 pt-5 pb-10">
            {products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="bg-csfooter py-7 px-5 rounded-lg shadow-lg font-filson flex-col flex justify-center"
                >
                  <p
                    className={`${
                      index === 0 ? "bg-yellow-300" : "bg-gray-200"
                    } py-2.5 px-5 rounded-full font-light text-xs mx-auto items-center`}
                  >
                    {product.best}
                  </p>
                  <div className="mt-8 flex justify-center border rounded-full w-24 mx-auto">
                    <Image
                      className="rounded-full border"
                      width={96}
                      height={96}
                      src={`https://www.api.wheelific.com/assets/${product.image.id}`}
                      alt={product.name}
                    />
                  </div>
                  <h3 className="text-sm text-center font-bold mt-8">
                    {product.name}
                  </h3>
                  <ul className="flex-col mt-4 mx-auto flex-1">
                    {product.features.map((element, index) => {
                      return (
                        <li key={index} className="flex space-x-1 w-full">
                          <BsCheck2Circle color="#61CE70" />
                          <span className="text-sm font-thin">
                            {element.feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={product.link}>
                    <button className="flex items-center space-x-2 text-sm text-white cursor-pointer rounded-full px-6 py-2.5  bg-secondary mt-5 mx-auto">
                      <span className="pl-2 not-italic font-normal font-filson">
                        Check Price
                      </span>
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestOfHero;
