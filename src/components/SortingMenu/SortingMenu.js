import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useHistory} from "react-router-dom";

export default function SortingMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (event) => {
    let sort = (event.target.getAttribute('data-sort'))

    history.push(`/games/sorting/${sort}`)
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color={'warning'}
        onClick={handleClick}
      >
        Sort by <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        disableScrollLock={true}
      >
        <MenuItem onClick={handleSort} data-sort={"release-date"}>Release Date</MenuItem>
        <MenuItem onClick={handleSort} data-sort={"popularity"}>Popularity</MenuItem>
        <MenuItem onClick={handleSort} data-sort={"alphabetical"}>Alphabetical</MenuItem>
        <MenuItem onClick={handleSort} data-sort={"relevance"}>Relevance</MenuItem>
      </Menu>
    </div>
  );
}