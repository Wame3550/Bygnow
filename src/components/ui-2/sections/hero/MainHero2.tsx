/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import ArrowButton from "../../../shared/ArrowButton";
import Image from "next/legacy/image";
import { GeneralContext } from "../../../../context/GeneralContext";
import React, { useContext } from "react";
import IconWithText from "../../../shared/IconWithText";

interface IProps {
  h1: string;
  h2: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  button: {
    name: string;
    link: string;
  };
}

const MainHero: React.FC<IProps> = ({ h1, h2, description, image, button }) => {
  const { setMenu } = useContext(GeneralContext);

  return (
    <section>
      <div onMouseEnter={() => setMenu(false)}>
        <div className="relative w-screen px-5 pt-10 bg-primary h-110 md:h-99 md:flex md:px-10 md:pt-28 lg:px-16 xl:px-36">
          <div className="flex flex-col items-center md:w-1/2 md:items-baseline">
            <div className="mb-2 font-normal text-left text-red-600 text-md sm:text-lg font-quicksand md:flex ">
              <h2>{h2}</h2>
            </div>
            <div className="mb-5 text-lg font-normal text-center text-white sm:text-xl md:text-left font-nunito md:text-xl md:pb-0 lg:text-2xl">
              <h1>{h1}</h1>
            </div>
            <div className="mb-5 font-thin text-white md:flex md:flex-col">
              {description}
            </div>
            <div className="flex items-center max-w-lg space-x-2">
              <ArrowButton name={button.name} link={button.link} />
            </div>
          </div>
          <div className="pb-40 mx-auto mt-8 md:justify-end md:flex lg:mt-0 lg:items-center">
            <div className="mx-auto w-52 lg:w-80 lg:mx-0">
              <Image
                src={image.src}
                width={500}
                height={500}
                alt={image.alt}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 justify-center mx-5 -mt-16 md:space-x-10 md:flex md:px-10 lg:mx-16 xl:mx-36">
        <div className="z-10 grid justify-center grid-cols-2 gap-5 md:flex md:w-full">
          <IconWithText
            name="Domain"
            image="/assets/domain.svg"
            link="/domain"
          />
          <IconWithText
            name="Web Hosting"
            image="/assets/domain.svg"
            link="/web-hosting"
          />
          <IconWithText
            name="Ecommerce"
            image="/assets/domain.svg"
            link="/ecommerce"
          />
          <IconWithText
            name="Email Marketing"
            image="/assets/domain.svg"
            link="/domain"
          />
        </div>
      </div>
    </section>
  );
};

export default MainHero;
