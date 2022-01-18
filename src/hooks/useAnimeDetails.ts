import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/enum";

export const useAnimeDetails = (id: number) => {
  const [animeDetails, setAnimeDetails] = useState({});

  useEffect(() => {
    const getData = async () => {
      const headers = { "content-type": "application/json" };
      const response = await axios.get(`${BASE_URL.URL}/anime/${id}`, {
        headers,
      });

      if (response.data) {
        setAnimeDetails(response.data);
      }
    };
    getData();
  }, [id]);

  return {
    animeDetails,
  };
};
