import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { StationPanelProps } from '../types/stationPanel';
import { Avatar, CardActions, CardHeader, IconButton, LinearProgress, Slider } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const StationPanel: React.FC<StationPanelProps> = ({
  station,
  onVolumeChange,
  onRequestCollection,
  onConfirmCollection,
}) => {

  const handleSliderChange = (
    event: Event,
    newValue: number | number[],
  ) => {
    onVolumeChange(newValue as number);
  };

  const valuetext = (value: number) => {
    return `${value}%`;
  };

  return (
    <Card className="cards-panels" variant="outlined">
      <CardHeader
        className="panels-header"
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {station.avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={station.name}
        subheader={`Volume: ${station.volume}%`}
      />
      <CardContent>
        <Slider
          aria-label="Volume"
          min={0}
          max={100}
          step={1}
          value={station.volume}
          onChange={handleSliderChange}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          marks={[
            { value: 0, label: '0%' },
            { value: 50, label: '50%' },
            { value: 100, label: '100%' },
          ]}
        />
        <LinearProgress
          variant="determinate"
          value={station.volume}
          sx={(theme) => ({
            height: 20,
            borderRadius: 5,
            marginTop: theme.spacing(2),
            backgroundColor:
              station.volume >= 80
                ? theme.palette.warning.light
                : station.volume >= 50
                ? theme.palette.secondary.light
                : theme.palette.grey[200],
            transition: 'background-color 0.5s ease',
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
          <CardActions className='card-footer'>
            <Button
              variant="contained"
              color="success"
              className="btn-confirm"
              onClick={onConfirmCollection}
              fullWidth
            >
              Confirmar Coleta
            </Button>
          </CardActions>
        ) : (
          <CardActions className='card-footer'>
            <Button
              variant="outlined"
              color="warning"
              onClick={onRequestCollection}
              fullWidth
              className="btn-request"
            >
              Solicitar Coleta
            </Button>
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default StationPanel;
