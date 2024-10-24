import React, { useState } from 'react';
import { Container, TextField } from '@mui/material';
import StationPanel from './StationPanel';
import { Station } from '../types/index';

const initialStations: Station[] = [
  { id: 1, occupancy: 0 },
  { id: 2, occupancy: 0 },
  { id: 3, occupancy: 0 },
];

const ControlPanel: React.FC = () => {
  const [stations, setStations] = useState(initialStations);

  const handleChangeOccupancy = (id: number, value: number) => {
    setStations((prev) =>
      prev.map((station) => (station.id === id ? { ...station, occupancy: value } : station))
    );
  };

  const handleCollect = (id: number) => {
    // Lógica para tratar o pedido de coleta
  };

  const handleReset = (id: number) => {
    setStations((prev) =>
      prev.map((station) => (station.id === id ? { ...station, occupancy: 0 } : station))
    );
  };

  return (
    <Container>
      {stations.map((station) => (
        <div key={station.id}>
          <TextField
            type="number"
            label={`Ocupação da Estação ${station.id}`}
            value={station.occupancy}
            onChange={(e) => handleChangeOccupancy(station.id, parseInt(e.target.value))}
            inputProps={{ min: 0, max: 100 }}
          />
          <StationPanel
            stationId={station.id}
            occupancy={station.occupancy}
            onCollect={() => handleCollect(station.id)}
            onReset={() => handleReset(station.id)}
          />
        </div>
      ))}
    </Container>
  );
};

export default ControlPanel;
