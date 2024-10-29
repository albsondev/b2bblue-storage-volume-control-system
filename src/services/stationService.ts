import { Station } from '../types/station';

let stations: Station[] = [
    { id: 1, name: 'Estação A', volume: 0, collectionRequested: false, occupancy: 0, avatarLetter: 'A'},
    { id: 2, name: 'Estação B', volume: 0, collectionRequested: false, occupancy: 0, avatarLetter: 'B'},
    { id: 3, name: 'Estação C', volume: 0, collectionRequested: false, occupancy: 0, avatarLetter: 'C'},

  ];

export function getStations(): Station[] {
  return stations;
}

export function requestCollection(stationId: number): void {
  stations = stations.map((station) =>
    station.id === stationId ? { ...station, collectionRequested: true } : station,
  );
  // Simula uma requisição para o backend
  console.log(`Coleta solicitada para a estação ${stationId}`);
}

export function confirmCollection(stationId: number): void {
  stations = stations.map((station) =>
    station.id === stationId
      ? { ...station, volume: 0, collectionRequested: false }
      : station,
  );
  // Simula uma requisição para o backend
  console.log(`Coleta confirmada para a estação ${stationId}`);
}

