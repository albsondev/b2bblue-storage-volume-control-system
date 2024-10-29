import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import StationPanel from './StationPanel';
import CollectionRequestDialog from './CollectionRequestDialog';
import * as stationService from '../services/stationService';
import '../styles/StationControlPanel.scss';
import { Station } from '../types/station';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#42a5f5',
    },
    secondary: {
      main: '#66bb6a',
    },
    warning: {
      main: '#fdd835',
    },
  },
});

const ControlPanel: React.FC = () => {
  const [stations, setStations] = useState<Station[]>(
    stationService.getStations(),
  );
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogStation, setDialogStation] = useState<Station | null>(null);

  useEffect(() => {
    const checkForCollectionRequests = () => {
      stations.forEach((station) => {
        if (station.volume >= 80 && !station.collectionRequested) {
          setSnackbarMessage(
            `Solicitação de coleta gerada para a estação ${station.name}`,
          );
          setOpenSnackbar(true);
          stationService.requestCollection(station.id);
          setStations((prevStations) =>
            prevStations.map((s) =>
              s.id === station.id
                ? { ...s, collectionRequested: true }
                : s,
            ),
          );
        }
      });
    };

    checkForCollectionRequests();
    const intervalId = setInterval(checkForCollectionRequests, 5000);

    return () => clearInterval(intervalId);
  }, [stations]);

  const handleVolumeChange = (stationId: number, newVolume: number) => {
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === stationId
          ? { ...station, volume: newVolume, occupancy: newVolume }
          : station,
      ),
    );
  };

  const handleRequestCollection = (station: Station) => {
    setDialogStation(station);
    setOpenDialog(true);
  };

  const handleConfirmCollection = (stationId: number) => {
    setOpenDialog(false);
    stationService.confirmCollection(stationId);
    setStations((prevStations) =>
      prevStations.map((station) =>
        station.id === stationId
          ? { ...station, volume: 0, collectionRequested: false, occupancy: 0 }
          : station,
      ),
    );
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="container">
        <Typography variant="h4" component="h1" align="center" className='title-page' gutterBottom>
          Painel de Controle de Volume
        </Typography>
        <Grid container spacing={3}>
          {stations.map((station) => (
            <Grid item xs={12} sm={6} md={4} key={station.id}>
              <StationPanel
                station={station}
                onVolumeChange={(newVolume) =>
                  handleVolumeChange(station.id, newVolume)
                }
                onRequestCollection={() => handleRequestCollection(station)}
                onConfirmCollection={() => handleConfirmCollection(station.id)}
              />
            </Grid>
          ))}
        </Grid>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="warning" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
        {dialogStation && (
          <CollectionRequestDialog
            open={openDialog}
            station={dialogStation}
            onClose={() => setOpenDialog(false)}
            onConfirm={() => handleConfirmCollection(dialogStation.id)}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default ControlPanel;
