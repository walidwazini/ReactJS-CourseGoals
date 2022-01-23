import logo from './logo.svg';
import './App.css';
import { Container, Box } from '@mui/material';
;



function App() {
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
      <Container fixed
        style={{ 
          backgroundColor: '#223252', 
          height: '100vh', 
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
      </Container>

    </div>
  );
}

export default App;
