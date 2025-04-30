import { User } from "./user.interface";

export interface Employee extends User {
  thirdPartyId: number;
  biography: string;
  specialty: string;
  date_entry: Date;
  employeeType: string;
  employeeTypeId: number;
}
