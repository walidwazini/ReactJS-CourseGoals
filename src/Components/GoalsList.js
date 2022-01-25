import {
  Button, List, ListItem, ListItemText,
  IconButton,
} from '@mui/material';
import React from 'react';
import { Delete } from '@mui/icons-material';



const GoalsList = (props) => {
  // const goal = 'The goal'
  // const date = '22  Jan 2014'
  // const deadlineText = 'Deadline : '
  const checkHandler = (data) => {
    const day = data.getDate()
    const month = data.getMonth()
    const year = data.getFullYear()
    console.log(`${day}/${month + 1}/${year}`)
  }
  //-------------------

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
        filter: 'drop-shadow(0px 12px 10px #000000)',
      }} >
        <ListItem sx={{}} >
          <ListItemText
            key={props.items[0].id}
            sx={{ color: 'black' }}
            primary={props.items[0].text} secondary={props.items[0].id} />
          <Button
          >Check</Button>
        </ListItem>
        {
          props.items.map(goal => (
            <ListItem key={goal.id}>
              <ListItemText
                sx={{ color: 'black' }}
                primary={goal.text}
                secondary={goal.date.toLocaleString('en-GB')}
              />
              <IconButton onClick={() => console.log(`Delete ${goal.id}`)} >
                <Delete sx={{ color: 'red' }} />
              </IconButton>
              <Button
                // onClick={() => checkHandler(goal.deadline.toLocaleString('en-GB'))}
                onClick={() => checkHandler(goal.deadline)}
              >Deadline</Button>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
};

export default GoalsList;
