import Link from "next/link";
import { Fragment, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Props {
  name: string;
  link: string;
  menu?: {
    title: string;
    list: { name: string; link: string }[];
  }[];
}

const Nav = ({ name, menu, link }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    // setTimeout(() => {
    setOpenMenu(false);
    // }, 200);
  };

  return (
    <Fragment>
      <li
        className="relative flex items-center px-2.5 py-7 text-sm not-italic font-semibold text-white cursor-pointer font-quicksand lg:text-base"
        onMouseEnter={() => setOpenMenu(true)}
        onMouseLeave={() => setOpenMenu(false)}
        onClick={() => setOpenMenu(false)}
      >
        <Link href={link}>{name}</Link>
      </li>
      {openMenu ? (
        <div className="absolute inset-0 flex top-20 max-w-fit ml-auto right-56">
          <ul
            className="z-50 flex flex-row items-center w-full py-10 font-bold bg-white h-72 font-quicksand rounded-b-lg shadow-lg divide-x divide-solid"
            onMouseEnter={() => setOpenMenu(true)}
            onMouseLeave={handleMenu}
          >
            {menu?.map((item, index, element) => {
              return (
                <Fragment>
                  <li
                    key={item.title}
                    className={`${
                      index + 1 === element.length
                        ? "border-none"
                        : "border-none"
                    } w-full h-56 px-20`}
                  >
                    <label>{item.title}</label>
                    <div className="w-12 mt-2 border-2 border-secondary rounded-full" />
                    <ul className="flex flex-col mt-5 gap-y-5">
                      {item.list.map((item) => {
                        return (
                          <li
                            key={item.name}
                            onClick={() => setOpenMenu(false)}
                            className="whitespace-nowrap"
                          >
                            <Link href={item.link}>
                              <label className="font-light text-gray-900 cursor-pointer hover:text-secondary text-base">
                                {item.name}
                              </label>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Nav;
