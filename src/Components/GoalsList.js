import { List, ListItem, ListItemText } from '@mui/material';
import React from 'react';


const GoalsList = (props) => {
  const goal = 'The goal'
  const date = '22  Jan 2014'
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <List sx={{
        mt: 4,
        width: '100%', maxWidth: 360, bgcolor: 'background.paper',
      }} >
        <ListItem>
          <ListItemText
            sx={{ color: 'black' }}
            primary={goal} secondary={date} />
        </ListItem>
      </List>
    </div>
  )
};

export default GoalsList;
