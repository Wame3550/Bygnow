import Link from "next/link";
import Image from "next/legacy/image";
import { AiOutlineCheck } from "react-icons/ai";
import { Fragment } from "react";

interface IProps {
  position: number;
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
}

const AffiliateShopCard = ({
  best,
  name,
  image,
  features,
  link,
  body,
  position,
}: IProps) => {
  return (
    <Fragment>
      <div className="border border-slate-200 p-5 not-prose rounded-2xl font-filson relative mt-16">
        <p
          className={`absolute top-0 ${
            position === 0 ? "bg-yellow-300" : "bg-slate-100"
          } py-2.5 px-5 rounded-full font-light text-xs mx-auto items-center -translate-y-1/2`}
        >
          {best}
        </p>
        <div className="flex px-14 items-center space-x-5 py-8">
          <div className="flex justify-center border rounded-full w-24 mt-5">
            <Image
              className="rounded-full border"
              width={96}
              height={96}
              src={`https://www.api.wheelific.com/assets/${image.id}`}
              alt={name}
            />
          </div>
          <div className="space-y-3">
            <h3
              className="text-xl font-semibold"
              id={name
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "")}
            >
              {name}
            </h3>
            <div className="flex flex-col justify-center mt-2">
              {features.map((element, index) => {
                return (
                  <div key={index} className="flex space-x-1 items-center">
                    <AiOutlineCheck size={20} color="#61CE70" />
                    <p className="font-extralight text-sm">{element.feature}</p>
                  </div>
                );
              })}
            </div>
            <Link href={link}>
              <button className="flex items-center text-sm text-white cursor-pointer rounded-full px-6 py-2.5  bg-secondary mt-3">
                <span className="not-italic font-normal font-filson">
                  Shop now
                </span>
              </button>
            </Link>
            {/* <p className="font-filson text-1xs font-thin">
          By clicking this link, We earn a commission at no
          additional cost to you.
        </p> */}
          </div>
        </div>
      </div>
      <div
        className="mt-5 prose font-filson"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </Fragment>
  );
};

export default AffiliateShopCard;
