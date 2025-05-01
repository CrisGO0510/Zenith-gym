export interface User {
  userId: number;
  name: string;
  lastname: string;
  email?: string;
  phone_number?: string;
  birthday: Date;
  restriction?: string;
}
