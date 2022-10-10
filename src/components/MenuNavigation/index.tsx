import { Gamepad } from "@mui/icons-material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const MenuNavigation = () => {
  const [value, setValue] = useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) {
      history.push("/Popular");
      window.scroll(0, 0);
    } else if (value === 1) {
      history.push("/AllGames");
      window.scroll(0, 0);
    } else if (value === 2) {
      history.push("/PCGames");
      window.scroll(0, 0);
    } else if (value === 3) {
      history.push("/BrowserGames");
      window.scroll(0, 0);
    } else if (value === 4) {
      history.push("/Favorite");
      window.scroll(0, 0);
    }
  }, [value, history]);

  return (
    <div className="hidden w-60 flex-col bg-[#EDEEF0] fixed top-0 bottom-0 md:flex">
      <button
        className={`p-5 mt-16 border-b border-black border-solid text-lg font-semibold flex justify-center items-center ${
          value === 0 && "bg-[#D7DAE8]"
        }`}
        onClick={() => setValue(0)}
      >
        <WhatshotIcon />
        <span className="ml-2">Popular</span>
      </button>
      <button
        className={`p-5 border-b border-black border-solid text-lg font-semibold flex justify-center items-center ${
          value === 1 && "bg-[#D7DAE8]"
        }`}
        onClick={() => setValue(1)}
      >
        <Gamepad />
        <span className="ml-2">All Games</span>
      </button>
      <button
        className={`p-5 border-b border-black border-solid text-lg font-semibold flex justify-center items-center ${
          value === 2 && "bg-[#D7DAE8]"
        }`}
        value={2}
        onClick={() => setValue(2)}
      >
        <DesktopWindowsIcon />
        <span className="ml-2">PC Games</span>
      </button>
      <button
        className={`p-5 border-b border-black border-solid text-lg font-semibold flex justify-center items-center ${
          value === 3 && "bg-[#D7DAE8]"
        }`}
        value={3}
        onClick={() => setValue(3)}
      >
        <WebAssetIcon />
        <span className="ml-2">Browser Games</span>
      </button>
      <button
        className={`p-5 border-b border-black border-solid text-lg font-semibold flex justify-center items-center ${
          value === 4 && "bg-[#D7DAE8]"
        }`}
        value={4}
        onClick={() => setValue(4)}
      >
        <FavoriteIcon />
        <span className="ml-2">Favorite Games</span>
      </button>
    </div>
  );
};
