export interface SupportWorker {
  supportWorkerId: number;
  contractedHours: number;
  name: string;
  avatar: string;
}

export interface Visit {
  visitId: number;
  startDateTime: number;
  endDateTime: number;
  supportWorkerId: number;
}
