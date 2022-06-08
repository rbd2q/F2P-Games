import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function SortingMenu({ setSort, sort }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = (event) => {
    const sort = event.target.getAttribute("data-sort");
    setSort(sort);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <b>Sort by</b> <KeyboardArrowDownIcon /> {sort}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClick={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock
      >
        <MenuItem onClick={handleSort} data-sort="release-date">
          Release Date
        </MenuItem>
        <MenuItem onClick={handleSort} data-sort="popularity">
          Popularity
        </MenuItem>
        <MenuItem onClick={handleSort} data-sort="alphabetical">
          Alphabetical
        </MenuItem>
        <MenuItem onClick={handleSort} data-sort="relevance">
          Relevance
        </MenuItem>
      </Menu>
    </div>
  );
}
