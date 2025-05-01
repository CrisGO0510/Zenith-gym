import { User } from './user.interface';

export interface Employee {
  id?: number;
  id_user_role?: number;
  bio: string;
  specialization: string;
  date_entry: Date;
  TB_user_role: {
    id_user_role?: number;
    id_user: number;
    id_role: number;
  };
}

export interface FullEmployee extends User {
  id_user_role?: number;
  bio: string;
  specialization: string;
  date_entry: Date;
  employeeType: string;
  employeeTypeId: number;
}
