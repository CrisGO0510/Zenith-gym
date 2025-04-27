import { User } from "./user.interface";

export interface Client extends User {
  client_id: number;
  thirdPartyId: number;
  id_membership: number;
  startDate: Date;
  endDate: Date;
}
