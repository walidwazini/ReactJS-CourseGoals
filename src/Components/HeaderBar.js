import React from 'react';
import logo from '../logo.svg'

const header_bar_style = {
  display: 'flex',
  flexDirection: 'row',
  // backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '202c44',
}

const HeaderBar = (props) => {
  return (
    <div style={header_bar_style} >
      <img src={logo} className="App-logo"
        alt="logo" style={{ height: '70px' }}
      />
      <p style={{ fontWeight: 'bold', color: 'white' }} >
        Course Goals
      </p>
    </div>
  );
};

export default HeaderBar;
