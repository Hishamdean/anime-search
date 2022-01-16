import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/enum';

export const useData = () => {
  const [data, setData] = useState([]);
  const id = 100;

  useEffect(() => {
    const getData = async (id: number) => {
      const headers = { 'content-type': 'application/json' }
      const response = await axios.get(
        `${BASE_URL.URL}/anime/${id}`, 
        { headers }
      );

      if(response.data){
        setData(response.data);
      }
    }
    getData(id);
  }, []);

  return {
    data
  }
}
