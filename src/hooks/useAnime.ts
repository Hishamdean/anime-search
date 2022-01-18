import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/enum';

export const useAnime = (query: string, setLoading: any) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const getAnime = async () => {
      const headers = { 'content-type': 'application/json' }
      const response = await axios.get(
        `${BASE_URL.URL}/search/anime?order_by=title&sort=asc&limit=100${query !== '' && `$&q=${query}`}`,
        { headers }
      );
      
      if(response.data){
        setAnimeList(response.data.results);
        setLoading(false);
      }
    }
    getAnime();
  }, [query, setLoading]);

  return {
    animeList,
  }
}