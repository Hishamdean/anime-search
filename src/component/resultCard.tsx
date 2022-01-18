import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { ResultCardType } from '../lib/types';
import { CardActionArea, CardContent, Typography } from '@mui/material';

interface ResultCardProps {
  data: ResultCardType;
}

const ResultCard = ({item}: any, onClick: any) => {
  return (
    <Card sx={{ maxWidth: 225, minWidth: 225 }} >
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
  )
}

export default ResultCard;