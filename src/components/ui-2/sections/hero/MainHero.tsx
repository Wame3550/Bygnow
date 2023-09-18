"use client";

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import ArrowButton from "../../../shared/ArrowButton";
import Image from "next/legacy/image";
import { GeneralContext } from "../../../../context/GeneralContext";
import React, { useContext } from "react";
import IconWithText from "../../../shared/IconWithText";
import { MdCall } from "react-icons/md";

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

const Hero: React.FC<IProps> = ({
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
        <div className="relative pt-10 bg-primary md:grid md:pt-28 pb-20 max-w-5xl mx-auto grid-cols-2 px-6">
          <div className="flex flex-col items-center md:items-baseline">
            <div className="mb-2 text-left text-red-600 text-lg font-quicksand md:flex font-semibold">
              <div>{h2}</div>
            </div>
            <div className="mb-5 font-semibold text-center text-white text-xl md:text-left font-quicksand md:text-xl md:pb-0 lg:text-2xl">
              <h1>{h1}</h1>
            </div>
            <div className="mb-5 font-light text-white md:flex md:flex-col text-center md:text-left">
              {description}
            </div>
            {/* <div className="text-white font-light mb-5">
              <div className="flex gap-2 items-center text-sm xs:text-base">
                <div className="text-csgreen">
                  <MdCall />
                </div>
                <div className="font-semibold">Mon - Fri:</div>
                9:00am - 5:00pm EST
              </div>
              <div className="flex gap-2 items-center text-sm xs:text-base">
                <div className="text-csgreen gap-2">
                  <MdCall />
                </div>
                <div className="font-semibold">Sat - Sun:</div>
                10:00am - 6:00pm EST
              </div>
            </div> */}
            <div className="flex items-center max-w-lg space-x-2">
              <ArrowButton name={button.name} link={button.link} />
            </div>
          </div>
          <div className="md:justify-end md:flex lg:mt-0 w-full h-full">
            <div
              className={`w-60 lg:w-96 ${image.height} lg:mx-0 relative mx-auto`}
            >
              <Image
                src={image.src}
                layout="fill"
                alt={image.alt}
                priority={true}
              />
            </div>
          </div>
          {icon && (
            <div className="z-10 justify-center md:space-x-10 md:flex max-w-6xl mx-auto col-span-2 w-full mt-5 md:mt-20">
              <div className="z-10 grid justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:w-full">
                <IconWithText
                  name="Radiator"
                  image="/assets/radiator-icon.svg"
                  link="/radiator"
                />
                <IconWithText
                  name="Commercial Heat"
                  image="/assets/commercial-heat-icon.svg"
                  link="/commercial-heat"
                />
                <IconWithText
                  name="Electric Heat"
                  image="/assets/electric-heat-icon.svg"
                  link=""
                />
                <IconWithText
                  name="Furnaces"
                  image="/assets/furnace-icon.svg"
                  link=""
                />
                <IconWithText
                  name="Gas Heat"
                  image="/assets/gas-heat-icon.svg"
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

export default Hero;
