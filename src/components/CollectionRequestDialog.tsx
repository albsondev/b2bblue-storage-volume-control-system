import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Station } from '../types/station';

interface CollectionRequestDialogProps {
  open: boolean;
  station: Station;
  onClose: () => void;
  onConfirm: () => void;
}

const CollectionRequestDialog: React.FC<CollectionRequestDialogProps> = ({
  open,
  station,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirmar Coleta?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Confirmar a coleta para a estação {station.name}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CollectionRequestDialog;

