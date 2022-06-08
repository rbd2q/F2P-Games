import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function GenresMenu({ setGenre, genre }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleGenre = (event) => {
    genre = event.target.getAttribute("data-genre");
    setGenre(genre);
  };

  const handleAllGenre = () => {
    setGenre("");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <b>Genres</b> <KeyboardArrowDownIcon /> {genre}
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
        <MenuItem onClick={handleAllGenre} data-genre="all">
          All Genres
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="mmorpg">
          MMORPG
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="shooter">
          Shooter
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="strategy">
          Strategy
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="moba">
          MOBA
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="racing">
          Racing
        </MenuItem>
        <MenuItem onClick={handleGenre} data-genre="sports">
          Sports
        </MenuItem>
      </Menu>
    </div>
  );
}
