import { Gamepad } from "@mui/icons-material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import clsx from "clsx";
import { ReactNode, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface MenuItemType {
  name: string;
  slug: string;
  icon: ReactNode;
}

const MENU_ITEMS: MenuItemType[] = [
  {
    name: "Popular",
    slug: "Popular",
    icon: <WhatshotIcon />,
  },
  {
    name: "All Games",
    slug: "AllGames",
    icon: <Gamepad />,
  },
  {
    name: "PC Games",
    slug: "PCGames",
    icon: <DesktopWindowsIcon />,
  },
  {
    name: "Browser Games",
    slug: "BrowserGames",
    icon: <WebAssetIcon />,
  },
  {
    name: "Favorite Games",
    slug: "FavoriteGames",
    icon: <FavoriteIcon />,
  },
];

export const MenuNavigation = () => {
  const [value, setValue] = useState("Popular");
  const history = useHistory();

  useEffect(() => {
    history.push(`/${value}`);
  }, [value, history]);

  return (
    <div className="hidden mt-16 w-60 flex-col bg-[#EDEEF0] fixed top-0 bottom-0 md:flex">
      {MENU_ITEMS.map((menuItem) => (
        <button
          key={menuItem.name}
          type="button"
          className={clsx(
            "p-5 border-b text-lg font-semibold flex justify-center items-center hover:bg-[#D7DAE8]",
            value === menuItem.slug && "bg-[#d9d9d9]"
          )}
          onClick={() => setValue(menuItem.slug)}
        >
          {menuItem.icon}
          <span className="ml-2">{menuItem.name}</span>
        </button>
      ))}
    </div>
  );
};
