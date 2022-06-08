import { Gamepad } from "@mui/icons-material";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import * as React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import styles from "./BottomNav.module.scss";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
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
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        defaultValue={0}
        className={styles.navMenu}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Popular"
          icon={<WhatshotIcon />}
          className={
            value === 0 ? styles.navMenuItemSelected : styles.navMenuItem
          }
        />
        <BottomNavigationAction
          label="All Games"
          icon={<Gamepad />}
          className={
            value === 1 ? styles.navMenuItemSelected : styles.navMenuItem
          }
        />
        <BottomNavigationAction
          label="PC Games"
          icon={<DesktopWindowsIcon />}
          className={
            value === 2 ? styles.navMenuItemSelected : styles.navMenuItem
          }
        />
        <BottomNavigationAction
          label="Browser Games"
          icon={<WebAssetIcon />}
          className={
            value === 3 ? styles.navMenuItemSelected : styles.navMenuItem
          }
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          className={
            value === 4 ? styles.navMenuItemSelected : styles.navMenuItem
          }
        />
      </BottomNavigation>
    </Box>
  );
}
