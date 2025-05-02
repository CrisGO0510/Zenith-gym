import { Client } from "./client.interface";
import { Routine } from "./routine.interface";

export interface Reservation {
  id: number;
  id_client_membership: number;
  id_routine: number;
  start_time: Date;
  end_time: Date;
  status: string;
  TB_routines: Routine;
  TB_client_membership: Client;
}