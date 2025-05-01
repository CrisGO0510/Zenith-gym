export interface User {
  id_user: number;
  name: string;
  lastname: string;
  email?: string;
  phone_number?: string;
  birthday: Date;
  restriction?: string;
}
