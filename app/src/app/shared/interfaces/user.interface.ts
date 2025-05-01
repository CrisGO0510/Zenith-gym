export interface User {
  userId: number;
  name: string;
  lastname: string;
  email?: string;
  password?: string;
  phone_number?: string;
  birthday: Date;
  restriction?: string;
}
