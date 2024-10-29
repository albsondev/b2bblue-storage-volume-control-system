import React from 'react';
import ControlPanel from './components/ControlPanel';
import Typography from '@mui/material/Typography';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';
import Divider from '@mui/material/Divider';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className='container' style={{ padding: '2rem' }}>
      <ControlPanel />
    </div>
  );
};

export default App;
