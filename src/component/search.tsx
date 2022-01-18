import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Search = (handleSearch: any) => {
  return (
    <Box component="form" noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        placeholder="search anime"
      />
    </Box>
  )
}

export default Search;
