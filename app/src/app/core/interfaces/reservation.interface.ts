export interface Reservation {
  id: number;
  clientId: number;
  clientName: string;
  clientLastName: string;
  routineId: number;
  routineName: string;
  instructorId: number;
  instructorName: string;
  instructorLastName: string;
  routineDescription: string;
  startDate: Date;
  endDate: Date;
  reservationStatusId: number;
  reservationStatus: string;
}
