import React from 'react';
import { Typography, Card } from '@mui/material';
import { DescriptionType } from '../lib/types';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Details from './details';
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

  const Description:React.FC<DescriptionType> = ({synopsis, title, image_url, scored_by, rank, popularity, members, score}) => {
    const navigate = useNavigate();

    const HandleGoBack = () => {
      navigate(`/`);
    };
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography onClick={() => HandleGoBack()}>
          <ArrowBackIosNewRoundedIcon />
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6} md={2}>
          <Card sx={{maxWidth: 225}}>
            <CardMedia
              style={{ float: 'left' }}
              component="img"
              height="330"
              image={image_url}
              alt="image not found"
            />
          </Card>
        </Grid>
        <Grid item xs={6} md={10}>
          <Typography style={{fontWeight: 'bold'}}>{title}</Typography>
          <Typography>
            {synopsis}
          </Typography>          
          <Details
            users={scored_by}
            rank={rank}
            popularity={popularity}
            members={members}
            score={score}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Description;