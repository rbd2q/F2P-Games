import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FavoriteIcon from '@mui/icons-material/Favorite';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import styles from './BottomNav.module.scss'
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {Gamepad} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push('/')
    else if (value === 1) history.push('/Popular')
    else if (value === 2) history.push('/PCGames')
    else if (value === 3) history.push('/BrowserGames')
    else if (value === 4) history.push('/Favorite')
  }, [value, history])

  return (
    <Box className={styles.navMenu}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="All Games" icon={<Gamepad />} />
        <BottomNavigationAction label="Popular" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="PC Games" icon={<DesktopWindowsIcon />} />
        <BottomNavigationAction label="Browser Games" icon={<WebAssetIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      </BottomNavigation>
    </Box>
  );
}