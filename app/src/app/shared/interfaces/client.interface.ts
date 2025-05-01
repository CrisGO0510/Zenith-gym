import { User } from "./user.interface";

export interface Client extends User {
  clientId: number;
  id_user_role: number;
  membershipId: number;
  startDate: Date;
  endDate: Date;
}
