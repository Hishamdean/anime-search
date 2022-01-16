import React from 'react';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import Search from './search';
import ResultCard from './resultCard';

const Homepage = ({anime}: any, searchString: string, handleSearch: any, onClick: any) => {
  return (
    <div style={{ margin: 10 }}>
      <Search handleSearch={handleSearch}/ >
      {searchString !== "" ? (
        <div style={{ margin: 10 }}>
          <ImageList cols={5} rowHeight={164}>
            {anime.map((a: any) => (
              <ResultCard item={a} onClick={onClick} />
            ))}
          </ImageList>
        </div>
      ) : (
        <div
          style={{
            textAlign: "center",
            maxHeight: 20,
          }}
        >
          <Typography color="text.secondary">
            Search for something
          </Typography>
        </div>
      )}
    </div>
  )
}

export default Homepage;