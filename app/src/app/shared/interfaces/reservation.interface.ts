import { Client } from "./client.interface";
import { ReservationStatus } from "./reservation-status.enum";
import { Routine } from "./routine.interface";

export interface Reservation {
  id: number;
  id_client_membership: number;
  id_routine: number;
  start_time: Date;
  end_time: Date;
  status: ReservationStatus;
  TB_routines: Routine;
  TB_client_membership: Client;
}

export interface ReservationCreate {
  id_client_membership: number;
  id_routine: number;
  start_time: Date;
  status: ReservationStatus;
}