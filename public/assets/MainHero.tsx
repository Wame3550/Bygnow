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
    height: string;
  };
  button: {
    name: string;
    link: string;
  };
  icon?: boolean;
}

const MainHero: React.FC<IProps> = ({
  h1,
  h2,
  description,
  image,
  button,
  icon = false,
}) => {
  const { setMenu } = useContext(GeneralContext);

  return (
    <section>
      <div className="bg-primary" onMouseEnter={() => setMenu(false)}>
        <div className="relative w-screen pt-10 bg-primary md:grid md:pt-28 pb-20 max-w-5xl mx-auto grid-cols-2">
          <div className="flex flex-col items-center md:items-baseline">
            <div className="mb-2 text-left text-red-600 text-md sm:text-lg font-quicksand md:flex font-semibold">
              <h3>{h2}</h3>
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
          <div className="mt-8 md:justify-end md:flex lg:mt-0 w-full h-full">
            <div className={`w-52 lg:w-96 ${image.height} lg:mx-0 relative`}>
              <Image
                src={image.src}
                layout="fill"
                alt={image.alt}
                priority={true}
              />
            </div>
          </div>
          {icon && (
            <div className="z-10 justify-center md:space-x-10 md:flex max-w-6xl mx-auto col-span-2 w-full mt-20">
              <div className="z-10 grid justify-center grid-cols-4 gap-5 md:flex md:w-full">
                <IconWithText
                  name="Viceværtservice"
                  image="/assets/sweeping-icon.svg"
                  link="/vicevaertservice"
                />
                <IconWithText
                  name="Gulvservice"
                  image="/assets/floor-icon.svg"
                  link="/gulvservice"
                />
                <IconWithText
                  name="Glarmester"
                  image="/assets/glass-icon.svg"
                  link="/glarmester"
                />
                <IconWithText
                  name="Anlægsgartner"
                  image="/assets/cutting-icon.svg"
                  link="/anlaegsgartner"
                />
                <IconWithText
                  name="Nedrivning"
                  image="/assets/demolition-icon.svg"
                  link="/nedrivning"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainHero;
