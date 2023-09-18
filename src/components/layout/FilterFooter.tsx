import { HiAdjustments } from "react-icons/hi";
import { BiGlasses } from "react-icons/bi";
import { ImPriceTag } from "react-icons/im";
import { Fragment } from "react";

interface Props {
  openModal: () => void;
}

const filterFooter: React.FC<Props> = ({ openModal }: Props) => {
  return (
    <Fragment>
      <ul className="fixed inset-x-0 bottom-0 z-20 flex justify-between h-20 p-5 px-10 bg-white border-t border-gray-200 shadow-3xl lg:hidden">
        <li className="justify-start">
          <BiGlasses className="mx-auto mb-1 text-2xl -rotate-180 text-kpblack" />
          <div className="mx-auto font-light text-1xs font-quicksand">
            Specs
          </div>
        </li>
        <li onClick={openModal} className="justify-center">
          <HiAdjustments className="mx-auto mb-1 text-2xl -rotate-180 text-kpblack" />
          <div className="mx-auto font-light text-1xs font-quicksand">
            Filter
          </div>
        </li>
        <li className="justify-end">
          <ImPriceTag className="mx-auto mb-1 text-2xl -rotate-180 text-kpblack" />
          <div className="mx-auto font-light text-1xs font-quicksand">
            Priser
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default filterFooter;
