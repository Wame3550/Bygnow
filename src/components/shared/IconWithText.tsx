/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Fragment } from "react";
import Image from "next/legacy/image";
// import LoadMore from "./LoadMore";

interface Props {
  link: string;
  image: string;
  name: string;
}

const IconWithText: React.FC<Props> = ({ image, name, link }: Props) => {
  return (
    <Fragment>
      {link !== "" ? (
        <Link className="w-full" href={link} locale={false}>
          <div className="z-10 flex flex-col items-center w-full px-2 py-6 transform bg-white rounded-md shadow-3xl hover:scale-105 cursor-pointer">
            <Image
              width={64}
              height={64}
              alt={name}
              src={image}
              className="w-16"
            />
            <label className="mt-3 text-sm font-quicksand font-medium">
              {name}
            </label>
          </div>
        </Link>
      ) : (
        <div className="z-10 flex flex-col items-center w-full px-2 py-6 transform bg-white rounded-md cursor-default shadow-3xl hover:scale-105">
          <Image
            width={64}
            height={64}
            alt={name}
            src={image}
            className="w-16"
          />
          <label className="mt-3 text-sm font-quicksand font-medium">
            {name}
          </label>
        </div>
      )}
    </Fragment>
  );
};

export default IconWithText;
