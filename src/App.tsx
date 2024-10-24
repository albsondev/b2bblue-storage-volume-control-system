import React from 'react';
import ControlPanel from './components/ControlPanel';

const App: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Controle de Volume de Armazenamento</h1>
      <ControlPanel />
    </div>
  );
};

export default App;
