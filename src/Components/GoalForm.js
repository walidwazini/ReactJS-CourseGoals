import React, { useState } from 'react';
import {
  Card, CardContent, Button,
  TextField, IconButton
} from '@mui/material';
import { Add } from '@mui/icons-material';

const GoalForm = (props) => {
  const rightNow = new Date()  //  Gives current time right now
  const [userInput, setUserInput] = useState({
    enteredGoal: '',
    enteredDate: '',
    enteredDeadline: '',
  })

  const submitHandler = (ev) => {
    ev.preventDefault()
    console.log('Hello')
  }

  const saveGoalHandler = (enteredGoalData) => {
    const goalData = {
      ...enteredGoalData,
      id: Math.random().toString()
    }
    props.onAddGoal(goalData)
  }

  return (
    <React.Fragment>
      <Card
        component='form'
        onSubmit={submitHandler}
        sx={{
          mt: 1,
          minWidth: 275,
          width: '500px',
          // boxShadow: '0px 7px 11px 0px #292929',
          filter: 'drop-shadow(0px 12px 10px #000000)'
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{ fontSize: 22, fontWeight: 'bold' }}
          >
            Enter your goals
          </p>
          <TextField
            id='outlined-required'
            label='Your Goal'
            size='small'
            sx={{
              backgroundColor: 'whitesmoke',
              border: 'none',
              borderColor: 'transparent',
              borderRadius: '13px',
              mb: 3,
            }}
          />
          <div
            style={{
              display: 'flex', flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#101b7c',
                width: '200px'
              }}
              onClick={() => (
                console.log(rightNow)
              )}
              type='submit'
            >Submit
            </Button>
          </div>
        </CardContent>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
          <IconButton>
            <Add />
          </IconButton>
        </div>
      </Card>
    </React.Fragment>
  )
};

export default GoalForm;
