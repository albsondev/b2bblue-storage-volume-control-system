import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { StationPanelProps } from '../types/stationPanel';

const StationPanel: React.FC<StationPanelProps> = ({
  station,
  onVolumeChange,
  onRequestCollection,
  onConfirmCollection,
}) => {
  const handleVolumeChangeLocal = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newVolume = parseInt(event.target.value, 10);
    if (isNaN(newVolume)) {
      newVolume = 0;
    }
    if (newVolume < 0) {
      newVolume = 0;
    }
    if (newVolume > 100) {
      newVolume = 100;
    }
    onVolumeChange(newVolume);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="div">
          {station.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Volume: {station.volume}%
        </Typography>
        <input
          type="range"
          min="0"
          max="100"
          value={station.volume}
          onChange={handleVolumeChangeLocal}
        />
        <LinearProgress
          variant="determinate"
          value={station.volume}
          sx={(theme) => ({
            height: 20,
            borderRadius: 5,
            backgroundColor:
              station.volume >= 80
                ? theme.palette.warning.light
                : station.volume >= 50
                ? theme.palette.secondary.light
                : theme.palette.grey[200],
            '& .MuiLinearProgress-bar': {
              borderRadius: 5,
              backgroundColor:
                station.volume >= 80
                  ? theme.palette.warning.main
                  : station.volume >= 50
                  ? theme.palette.secondary.main
                  : theme.palette.primary.main,
            },
          })}
        />
        {station.collectionRequested ? (
          <Button
            variant="contained"
            color="success"
            onClick={onConfirmCollection}
            fullWidth
          >
            Confirmar Coleta
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="warning"
            onClick={onRequestCollection}
            fullWidth
          >
            Solicitar Coleta
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default StationPanel;
