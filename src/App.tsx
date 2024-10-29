import React from 'react';
import ControlPanel from './components/ControlPanel';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className='container' style={{ padding: '2rem' }}>
      <ControlPanel />
    </div>
  );
};

export default App;
