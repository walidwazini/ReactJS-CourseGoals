import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  Container, Box, Input, Row,
  TextField, Card, CardContent, Button,
} from '@mui/material';
import GoalsList from './Components/GoalsList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: 'Do all exercises!',
    date: new Date(2021, 0, 14),
    deadline: new Date(2021, 0, 16),
  },
  {
    id: 'g2',
    text: 'Do all exercises!',
    date: new Date(2021, 0, 17),
    deadline: new Date(2021, 0, 20),
  },
]

function App() {
  const [goals, setGoals] = useState(DUMMY_DATA)

  return (
    <div className="App">
      <div className='row'
        style={{
          display: 'flex',
          flexDirection: 'row',
          // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '202c44',
        }}
      >
        <img src={logo} className="App-logo"
          alt="logo" style={{ height: '70px' }}
        />
        <p style={{ fontWeight: 'bold', color: 'white' }} >
          Course Goals
        </p>
      </div>
      <Container maxWidth='xl'
        sx={{
          backgroundColor: '#223252',
          height: '100vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }} >
          <Card
            // component='form'
            sx={{
              mt: 1,
              boxShadow: '2px black',
              minWidth: 275,
              width: '500px'
              // alignItems: 'center',
              // height: '200px',
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
              >Enter your goals</p>
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
                >Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <GoalsList items={goals} />


        {/* <Input
          size='small'
          sx={{
            backgroundColor: 'white'
          }} /> */}
      </Container>
    </div>
  );
}

export default App;
