import { useRouter } from "next/router";
import Link from "next/link";
import MenuDropdown from "../../shared/MenuDropdown";
import menu from "../locales/en";

export const Sidebar: React.FC = () => {
  const router = useRouter();
  const locale = router.pathname.substring(0, 4);

  return (
    <div className="absolute z-50 flex flex-col w-full px-16 py-10 mb-5 space-x-10 font-bold bg-white font-quicksand">
      <div className="w-full">
        <ul className="space-y-4 text-sm font-semibold font-quicksand">
          {menu.navigation.sidebar.map((item) => {
            return (
              <li key={item.label} className="hover:text-secondary">
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
