import { Fragment } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Props {
  link: string;
  name: string;
}

const ArrowButton: React.FC<Props> = ({ name, link }: Props) => {
  return (
    <Fragment>
      <a href={link}>
        <button className="flex items-center space-x-2 text-sm text-white cursor-pointer lg:text-base rounded-full px-6 py-2.5  bg-secondary">
          <div className="pl-2 not-italic font-bold font-quicksand">{name}</div>
          <FaArrowRight />
        </button>
      </a>
    </Fragment>
  );
};

export default ArrowButton;
