import React from 'react';
import styles from './PaginationButtons.module.scss'
import Button from "@mui/material/Button";

const PaginationButtons = ({currentPage, setCurrentPage, numberOfGames, gamesPerPage}) => {
  const numberOfPages = Math.ceil(numberOfGames/gamesPerPage);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage => currentPage - 1);
    window.scroll(0,0);
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage => currentPage + 1);
    window.scroll(0,0);
  }

  return (
    <div className={styles.pageButtonsWrapper}>
      <Button
        variant="contained"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Previous Page
      </Button>
      <Button
        variant="contained"
        color='success'
        onClick={handleNextPage}
        disabled={currentPage === numberOfPages}
      >
        Next Page
      </Button>
    </div>
  );
};

export default PaginationButtons;