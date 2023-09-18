import { Fragment } from "react";
import MainHero from "../components/ui-2/sections/hero/MainHero";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function NotFound() {
  return (
    <Fragment>
      <section className="bg-white max-w-7xl mx-auto p-6 pb-16">
        <div className="bg-[#f3f1f2] rounded-xl h-[510px] w-full bg-no-repeat p-10 lg:p-20 gap-5 justify-center flex flex-col-reverse lg:grid lg:grid-cols-5">
          <div className="gap-5 flex flex-col lg:col-span-3 my-auto">
            <div>
              <h1 className="text-[#191919] lg:text-4xl font-bold lg:col-span-8 mx-auto text-2xl md:text-3xl text-center lg:text-left">
                Oops! You shouldn't see this!
              </h1>
            </div>
            <div className="flex">
              <p className="text-[#191919] col-span-6 text-center lg:text-left">
                <p>
                  The page you are looking for no longer exists. Click back to
                  home page to start over with your search.
                </p>
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <a
                href="/"
                className="text-base font-bold leading-6 text-white bg-secondary py-2.5 px-6 rounded-full flex items-center gap-2 w-fit"
              >
                Homepage
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className="relative w-full lg:w-96 lg:h-full h-96 mx-auto">
            <Image src={"/assets/404.svg"} alt={""} fill />
          </div>
        </div>
      </section>
      {/* <MainHero
        h2="404"
        h1="Oops! You shouldn't see this!"
        button={{ name: "Back to the home page", link: "/" }}
        description="The page you are looking for no longer exists. Click back to home page to start over with your search."
        image={{
          src: "/assets/404.svg",
          alt: "404 Not found error",
          height: "h-60",
        }}
      /> */}
    </Fragment>
  );
}
