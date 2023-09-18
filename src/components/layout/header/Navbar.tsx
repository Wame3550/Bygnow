"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import EmailModal from "../../shared/EmailModal";
import { Sidebar } from "./Sidebar";
import { Cookies } from "../../shared/Cookies";
import { useQuery } from "@apollo/client";
// import { GET_MENU } from "../../../graphql/queries";
import Nav from "./nav";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // const { data } = useQuery(GET_MENU);

  const handleClick = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };

  const handleModal = () => {
    setShowModal(true);
  };

  return (
    <Fragment>
      {showModal ? <EmailModal setShowModal={setShowModal} /> : null}
      <Cookies />
      <div className="bg-primary text-sm font-light">
        <div className="flex items-center gap-2 justify-center md:justify-end max-w-6xl mx-auto p-1 px-8 text-white">
          <div className="text-csgreen">
            <FiClock />
          </div>
          mon - sun (8am - 6pm)
        </div>
      </div>
      <div className="relative bg-primary">
        <div className="items-center border-b border-white shadow-sm bg-primary border-opacity-10">
          <div className="flex items-center justify-between h-20 px-6 mx-auto  max-w-6xl relative">
            <div className="justify-start flex items-center">
              <Link
                className="w-36 sm:w-44 cursor-pointer md:w-56 absolute h-full"
                href="/"
              >
                <Image
                  layout="fill"
                  src="/assets/hvacpoolerga-white-logo.svg"
                  alt="bygnow"
                  priority={true}
                  key={1}
                />
              </Link>
            </div>
            <div className=" text-white md:hidden" onClick={handleClick}>
              <i>{hamburgerIsOpen ? <FaTimes /> : <FaBars />}</i>
            </div>
            <div className="items-center hidden md:flex">
              <nav>
                <ul className="flex mx-10">
                  <Nav name="Home" link="/" />
                  <Nav name="About Us" link="/about-us" />
                  <Nav
                    name="Services"
                    link="#"
                    menu={[
                      {
                        title: "Services",
                        list: [
                          { name: "Radiator", link: "/radiator" },
                          { name: "Commercial Heat", link: "/commercial-heat" },
                        ],
                      },
                    ]}
                  />
                  {/* {data.menus.data.map(
                    (menu: {
                      attributes: {
                        name: string;
                        link: string;
                        menu: {
                          title: string;
                          list: { name: string; link: string }[];
                        }[];
                      };
                    }) => {
                      return (
                        <Nav
                          key={menu.attributes.name}
                          name={menu.attributes.name}
                          link={menu.attributes.link}
                          menu={menu.attributes.menu}
                        />
                      );
                    }
                  )} */}
                </ul>
              </nav>
              <a href={"/"}>
                <button className="flex items-center text-sm text-white cursor-pointer lg:text-base rounded-full px-6 py-2.5  bg-secondary hover:bg-opacity-90s">
                  <BsFillTelephoneFill />
                  <span className="pl-2 not-italic font-semibold font-quicksand">
                    (844) 204-0938
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
        {hamburgerIsOpen ? <Sidebar /> : null}
      </div>
    </Fragment>
  );
};

export default Navbar;
