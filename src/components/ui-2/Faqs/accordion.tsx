"use client";

import { GoChevronDown } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

interface Props {
  heading: string;
  paragraph: string;
}

const Faq: React.FC<Props> = ({ heading, paragraph }: Props) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <li
      className={`w-full max-w-3xl bg-white border-2 rounded-lg cursor-pointer border-primary p-9 border-opacity-5`}
      onClick={handleClick}
    >
      <div className="w-full">
        <div className="flex items-center justify-between xs:space-x-10">
          <div>
            <h3 className="mr-auto font-quicksand md:text-lg font-bold">
              {heading}
            </h3>
          </div>
          {active ? (
            <div className="hidden sm:flex">
              <FaTimes size={16} />
            </div>
          ) : (
            <div className="hidden sm:flex">
              <GoChevronDown size={18} />
            </div>
          )}
        </div>
        <div className={`mt-7 ${active ? "flex" : "hidden"}`}>
          <div
            className="font-light prose max-w-none text-csblack font-quicksand"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        </div>
      </div>
    </li>
  );
};

export default Faq;
