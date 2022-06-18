import { slide as Menu } from "react-burger-menu";
import { useHistory } from "react-router-dom";

const styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "20px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: "0",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    display: "flex",
    "flex-direction": "column",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
    "font-size": "26px",
    "margin-bottom": "20px",
  },
  bmOverlay: {
    left: "0",
    top: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.3)",
  },
};

export const BurgerMenu = () => {
  const history = useHistory();

  return (
    <div className="w-full h-full">
      <Menu right styles={styles}>
        <button
          id="home"
          className="menu-item"
          onClick={() => history.push("/Popular")}
        >
          Popular
        </button>
        <button
          id="about"
          className="menu-item"
          onClick={() => history.push("/AllGames")}
        >
          All Games
        </button>
        <button
          id="contact"
          className="menu-item"
          onClick={() => history.push("/PCGames")}
        >
          PC Games
        </button>
        <button
          id="contact"
          className="menu-item"
          onClick={() => history.push("/BrowserGames")}
        >
          Browser Games
        </button>
        <button
          id="contact"
          className="menu-item"
          onClick={() => history.push("/Favorite")}
        >
          Favorite
        </button>
      </Menu>
    </div>
  );
};
