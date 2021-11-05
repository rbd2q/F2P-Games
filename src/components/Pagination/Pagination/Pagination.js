import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({currentPage,setCurrentPage, numberOfGames, gamesPerPage}) {
  const numberOfPages = Math.ceil(numberOfGames/gamesPerPage);

  return (
    <Stack spacing={2}>
      <Pagination
        page={currentPage}
        count={numberOfPages}
        color="primary"
        onChange={(_, num) => setCurrentPage(num)}
      />
    </Stack>
  );
}