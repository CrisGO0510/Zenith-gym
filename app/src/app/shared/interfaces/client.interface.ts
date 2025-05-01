import { User } from "./user.interface";

export interface Client extends User {
  clientId: number;
  thirdPartyId: number;
  membershipId: number;
  startDate: Date;
  endDate: Date;
}
