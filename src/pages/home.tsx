import React, { useState } from "react";
import { useAnime } from "../hooks";
import debounce from "lodash.debounce";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  ImageList,
  TextField,
  Typography,
} from "@mui/material";

export interface HomePageProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  let navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [loading, setLoading] = useState(true);
  const { animeList }: any = useAnime(searchString, setLoading);

  const handleSearch = debounce((e: any) => {
    const value = e.target.value;
    setSearchString(value);
  }, 500);

  const onClick = (item: any) => {
    const pathname = `/synopsis/${item.mal_id}`
    navigate(pathname);
  };

  const RenderResults = ({ item }: any) => {
    return (
      <Card sx={{ maxWidth: 225, minWidth: 225, margin: 2}}>
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
          placeholder="search anime"
          defaultValue={searchString}
        />
      </Box>
    );
  };

  const SearchPage = () => {
    return (
      <div style={{ margin: 5 }}>
        <RenderSearch />
        {searchString ? (
          <div style={{ margin: 10 }}>
            <ImageList cols={5} rowHeight={164}>
              {animeList.map((a: any) => (
                <RenderResults item={a} key={a.mal_id} />
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
            <div style={{ margin: 10 }}>
              <ImageList cols={5} rowHeight={164}>
                {animeList.map((a: any) => (
                  <RenderResults item={a} key={a.mal_id} />
                ))}
              </ImageList>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {!loading && 
        <SearchPage />
      }
    </div>
  )
    
};

export default HomePage;