import Link from "next/link";
import Image from "next/legacy/image";
import { FaFacebookSquare } from "react-icons/fa";
import MenuDropdown from "../shared/MenuDropdown";
import text from "./locales/en";

const Footer: React.FC = () => {
  const translate = text;

  return (
    <footer>
      <div className="py-12 bg-csfooter lg:pt-20 lg:pb-1">
        <div className="px-4 mx-auto md:px-10 lg:px-16 xl:max-w-6xl xl:px-0">
          <div className="flex flex-col lg:grid lg:justify-between grid-cols-9">
            <div className="w-full mb-5 lg:place-items-start relative col-span-7">
              <div className="relative flex w-36 sm:w-44 cursor-pointer md:w-56 h-20">
                <Link href="/" locale={false}>
                  <Image
                    layout="fill"
                    src="/assets/hvacpoolerga-black-logo.svg"
                    alt="Bygnow"
                  />
                </Link>
              </div>
            </div>
            <div className="space-x-32 xl:space-x-40 lg:flex col-span-2">
              <div className="space-y-7 flex flex-col w-full">
                <label className="font-quicksand font-semibold border-b w-full pb-1">
                  {translate.footer.label1}
                </label>
                <ul className="space-y-4 text-sm font-light font-quicksand w-max">
                  {translate.footer.navigation.map((navigation) => {
                    return (
                      <li
                        key={navigation.label}
                        className="hover:text-secondary"
                      >
                        <Link href={navigation.link} locale={false}>
                          {navigation.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* <div className="space-y-7">
                <label className="font-quicksand font-semibold">
                  {translate.footer.label2}
                </label>
                <ul className="space-y-4 text-sm font-light w-max font-quicksand">
                  {translate.footer.legal.map((legal) => {
                    return (
                      <li key={legal.label} className="hover:text-secondary">
                        <Link href={legal.link} locale={false}>
                          {legal.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div> */}
              {/* <div className="space-y-7">
                <label className="font-quicksand font-semibold">{translate.footer.label3}</label>
                <ul className="space-y-4 text-sm font-thin w-max font-quicksand">
                  {translate.footer.compare.map((compare) => {
                    return (
                      <li key={compare.label} className="hover:text-secondary">
                        <Link href={compare.link} locale={false}>
                          {compare.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div> */}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-20 mb-16 text-sm font-quicksand font-light text-center xs:text-left">
              <label>Copyright © {new Date().getFullYear()} · </label>
              <label className="text-secondary">
                <Link href="/" locale={false}>
                  HVAC Pooler GA
                </Link>
              </label>
              <label>{translate.footer.copyright}</label>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
