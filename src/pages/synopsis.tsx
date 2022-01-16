import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export interface SynopsisProps {};

const Synopsis:React.FunctionComponent<SynopsisProps> = props => {
  const [message, setMessage] = useState('');
  const { animeId } = useParams();

  useEffect(() => {
    if(animeId){
      setMessage('This is a ' + animeId);
    } else {
      setMessage('This is not a number');
    }
  }, [animeId]);

  return (
    <h2>
      Synopsis
      {message}
    </h2>
  )
}

export default Synopsis;