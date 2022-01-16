import React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

interface DetailsProps {
  users: number,
  rank: number,
  popularity: number,
  members: number,
  score: number,
}

const Details:React.FC<DetailsProps> = ({users, rank, popularity, members, score}) => {
  return (
    <div>
      <Stack 
        direction="row"
        spacing={5}
      >
        <Item>
          {users}
          <Typography>Users</Typography>
        </Item>
        <Item>
          {rank}
          <Typography>Rank</Typography>
        </Item>
        <Item>
          {popularity}
          <Typography>Popularity</Typography>
        </Item>
        <Item>
          {members}
          <Typography>Members</Typography>
        </Item>
        <Item>
          {score}
          <Typography>Score</Typography>
        </Item>
      </Stack>
    </div>
  )
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default Details;