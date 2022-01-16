import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/enum';

export const useAnime = async (query: string) => {
  const [anime, setAnime] = useState([]);

  const headers = { 'content-type': 'application/json' }
  const response = await axios.get(
    `${BASE_URL.URL}/search/anime?q=${query}&order_by=title&sort=asc&limit=100`,
    { headers }
  );

  if(response.data){
    setAnime(response.data.results);
  }

  return {
    anime
  }
}