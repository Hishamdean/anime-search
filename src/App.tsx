import React, { useState } from "react";
import "./App.css";
import Description from "./component/description";
import Details from "./component/details";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  CardActionArea,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import debounce from "lodash.debounce";
import { BASE_URL } from "./utils/enum";
import axios from "axios";
import ImageList from '@mui/material/ImageList';

function App() {
  const [description, setDescription] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState({});
  const [searchString, setSearchString] = useState("");
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  const HandleGoBack = () => {
    setDescription(false);
  }

  const onClick = (item: any) => {
    setDescription(true);
    getAnimeDetails(item.mal_id);
  };

  const getAnime = async (query: string) => {
    const headers = { 'content-type': 'application/json' }
    const response = await axios.get(
      `${BASE_URL.URL}/search/anime?q=${query}&order_by=title&sort=asc&limit=100`,
      { headers }
    );

    if(response.data){
      setLoading(false);
      setAnime(response.data.results);
    }

    return;
  }

  const getAnimeDetails = async (id: any) => {
    const headers = { 'content-type': 'application/json' }
    const response = await axios.get(
      `${BASE_URL.URL}/anime/${id}/`, 
      { headers }
    );

    if(response.data){
      setSelectedAnime(response.data)
    }

    return null
  }
  
  const handleSearch = debounce((e: any) => {
    e.preventDefault();
    const value = e.target.value;
    getAnime(value);
    setSearchString(value);
  }, 500)

  const Home = () => {
    return (
      <div style={{ margin: 10 }}>
        <RenderSearch />
        {searchString !== "" ? (
          <div style={{ margin: 10 }}>
            <ImageList cols={5} rowHeight={164}>
              {anime.map((a: any) => (
                <RenderResults item={a} />
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

  const RenderResults = ({item}: any) => {
    return (
      <Card sx={{ maxWidth: 225, minWidth: 225, margin: 3 }} >
        <CardActionArea>
          <CardMedia
            onClick={() => onClick(item)}
            component="img"
            height="330"
            image={item.image_url}
            alt="image not found"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };

  const RenderSearch = () => {
    return (
      <Box component="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          onChange={(e) => handleSearch(e)}
          placeholder="Abuden"
        />
      </Box>
    );
  };

  const AnimeDetails = ({item}: any) => {
    return (
      <div style={{ margin: 10 }}>
        <Description
          synopsis={item.synopsis}
          title="Synopsis"
          imgUrl={item.image_url}
        />
        <Details
          users={item.scored_by}
          rank={item.rank}
          popularity={item.popularity}
          members={item.members}
          score={item.score}
        />
        <Typography onClick={() => HandleGoBack()}>Click me to go back</Typography>
      </div>
    )
  }

  return (
    <div>
      {description ? (
        <AnimeDetails item={selectedAnime} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
