import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {
  Container,
} from '@mui/material';
import GoalsList from './Components/GoalsList';
import Extra from './Components/Extra';
import GoalForm from './Components/GoalForm';

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

const headerBar = (<>
  <img src={logo} className="App-logo"
    alt="logo" style={{ height: '70px' }}
  />
  <p style={{ fontWeight: 'bold', color: 'white' }} >
    Course Goals
  </p>
</>)

const header_bar_style = {
  display: 'flex',
  flexDirection: 'row',
  // backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '202c44',
}

const reactLogo = logo

// ___________________________ App() __________

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA)
  const addGoalHandler = (newGoal) => {
    setGoals(prevGoals => {
      return [newGoal, ...prevGoals]
    })
    console.log(goals)
  }

  const addGoalHandlerCancel = (enteredText, enteredDate) => {
    setGoals(allPrevGoals => {
      const updatedGoals = [...allPrevGoals]
      updatedGoals.unshift({
        id: Math.random().toString(),
        text: enteredText,
        date: new Date(),
        deadline: new Date(enteredDate)
      })
    })
  }

  const deleteHandler = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goalToDelete => (
        goalToDelete.id !== goalId
      ))
    })
  }


  return (
    <div className="App">
      <div id='headerBar'
        style={header_bar_style}
      >
        {headerBar}
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
          <Extra image={reactLogo} />
          <GoalForm onAddGoal={addGoalHandler} />
        </div>
        <GoalsList items={goals} />
      </Container>
    </div>
  );
}

export default App;
