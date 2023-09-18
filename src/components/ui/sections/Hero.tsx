import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

interface IProps {
  title: string;
  paragraph: string;
  image_local?: string;
  image_api?: string;
  button: { text: string; link: string };
}

const Hero = ({ title, paragraph, image_local, image_api, button }: IProps) => {
  return (
    <section className="bg-white max-w-7xl mx-auto p-6">
      <div
        className={`rounded-xl h-[510px] w-full bg-no-repeat bg-cover bg-right p-10 lg:p-20 flex flex-col gap-5 justify-center relative`}
      >
        <Image
          priority
          className="rounded-xl"
          fill
          sizes="(max-width: 1200px) 100vw, 60vw"
          alt=""
          src={`${
            image_api === undefined
              ? "/assets/" + image_local
              : "https://www.api.wheelific.com/assets/" + image_api
          }`}
          style={{ objectFit: "cover", objectPosition: "right" }}
        />
        <div className="bg-black absolute inset-0 rounded-xl bg-opacity-60" />
        <div className="lg:w-2/3 z-20">
          <h1 className="text-white lg:text-3xl font-bold lg:col-span-8 mx-auto text-xl md:text-2xl text-center lg:text-left">
            {title}
          </h1>
        </div>
        <div className="grid lg:grid-cols-12 z-20">
          <p className="text-white col-span-6 text-center lg:text-left">
            {paragraph}
          </p>
        </div>
        <div className="mx-auto lg:mx-0 z-20">
          <a
            href={button.link}
            className="text-base font-bold leading-6 text-white bg-secondary py-2.5 px-6 rounded-full flex items-center gap-2 w-fit"
          >
            {button.text}
            <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
