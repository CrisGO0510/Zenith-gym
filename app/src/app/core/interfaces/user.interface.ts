export interface User {
  userId: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  birthdate: Date;
  restriction?: string;
}
