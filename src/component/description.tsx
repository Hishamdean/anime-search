import React from 'react';
import { CardContent, Typography, Card } from '@mui/material';
import { DescriptionType } from '../component/lib/types';
import CardMedia from '@mui/material/CardMedia';

interface DescriptionProps {
  synopsis: string,
  title: string,
  imgUrl: string,
}

const Description:React.FC<DescriptionProps> = ({synopsis, title, imgUrl}) => {
  return (
    <div style={{ margin: 10 }}>
      <Card sx={{maxWidth: 225}}>
        <CardMedia
          style={{ float: 'left' }}
          component="img"
          height="194"
          image={imgUrl}
          alt="image not found"
        />
      </Card>
      <Typography style={{fontWeight: 'bold'}}>{title}</Typography>
      <Typography>
        {synopsis}
      </Typography>
    </div>
  )
}

export default Description;