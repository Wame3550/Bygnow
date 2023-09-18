import { Fragment } from "react";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { useState } from "react";

interface Props {
  toggle?: boolean;
  name: string;
  children: React.ReactNode;
}

const MenuDropdown: React.FC<Props> = ({ toggle, name, children }: Props) => {
  const [onToggle, setOnToggle] = useState(toggle);

  const onClick = () => {
    setOnToggle(!onToggle);
  };

  return (
    <Fragment>
      <div
        className="flex items-center justify-between mb-2 cursor-pointer"
        onClick={onClick}
      >
        <label
          className="text-base font-medium cursor-pointer font-quicksand text-kpblack"
          onClick={onClick}
        >
          {name}
        </label>
        <div className="cursor-pointer" onClick={onClick}>
          {onToggle ? <VscChevronUp /> : <VscChevronDown />}
        </div>
      </div>
      <div
        className={
          onToggle
            ? "border-b mb-5 border-gray-200"
            : "border-b  border-gray-200"
        }
      />
      <div className={onToggle ? "flex flex-col" : "hidden"}>{children}</div>
    </Fragment>
  );
};

export default MenuDropdown;
