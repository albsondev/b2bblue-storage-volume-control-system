import { Station } from './station';

export interface StationPanelProps {
  station: Station;
  onVolumeChange: (newVolume: number) => void;
  onRequestCollection: () => void;
  onConfirmCollection: () => void;
}
