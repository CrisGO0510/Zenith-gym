import { UsersRoles } from "./user-roles-body.type";

export interface Client {
  clientId: number;
  id_user_role: number;
  membershipId: number;
  startDate: Date;
  endDate: Date;
  TB_user_role?:  UsersRoles
}
