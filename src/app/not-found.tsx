import { Fragment } from "react";
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
                Ups! Du burde ikke se dette!
              </h1>
            </div>
            <div className="flex">
              <p className="text-[#191919] col-span-6 text-center lg:text-left">
                <p>
                  Siden du leder efter eksisterer ikke længere. Klik tilbage til
                  startsiden for at starte forfra med din søgning.
                </p>
              </p>
            </div>
            <div className="mx-auto lg:mx-0">
              <a
                href="/"
                className="text-base font-bold leading-6 text-white bg-secondary py-2.5 px-6 rounded-full flex items-center gap-2 w-fit"
              >
                Startsiden
                <BsArrowRight />
              </a>
            </div>
          </div>
          <div className="relative w-full lg:w-96 lg:h-full h-96 mx-auto">
            <Image src={"/assets/404.svg"} alt={""} fill />
          </div>
        </div>
      </section>
    </Fragment>
  );
}
