import React from 'react';
import { Card, CardContent, Typography, Button, LinearProgress } from '@mui/material';
import Swal from 'sweetalert2';

interface StationPanelProps {
  stationId: number;
  occupancy: number;
  onCollect: () => void;
  onReset: () => void;
}

const StationPanel: React.FC<StationPanelProps> = ({ stationId, occupancy, onCollect, onReset }) => {
  const handleCollect = () => {
    if (occupancy >= 80) {
      Swal.fire({
        title: 'Pedido de coleta gerado!',
        text: `Estação ${stationId}: Pedido de coleta gerado com sucesso.`,
        icon: 'success',
      });
      onCollect();
    }
  };

  const handleReset = () => {
    Swal.fire({
      title: 'Confirmação de Coleta',
      text: `Confirma a coleta da estação ${stationId}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
    }).then((result) => {
      if (result.isConfirmed) {
        onReset();
        Swal.fire('Coleta Confirmada!', `Estação ${stationId} foi reiniciada.`, 'success');
      }
    });
  };

  return (
    <Card variant="outlined" style={{ marginBottom: '1rem' }}>
      <CardContent>
        <Typography variant="h5">Estação {stationId}</Typography>
        <LinearProgress variant="determinate" value={occupancy} />
        <Typography variant="body1">{occupancy}% ocupado</Typography>
        {occupancy >= 80 && (
          <Button variant="contained" color="primary" onClick={handleCollect}>
            Gerar Pedido de Coleta
          </Button>
        )}
        {occupancy === 0 ? null : (
          <Button variant="contained" color="secondary" onClick={handleReset} style={{ marginLeft: '1rem' }}>
            Confirmar Coleta
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default StationPanel;
