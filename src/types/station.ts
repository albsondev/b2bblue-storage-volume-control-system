export interface Station {
    id: number;
    name: string;
    volume: number;
    occupancy: number | undefined;
    collectionRequested: boolean;
  }
  