import { $Enums } from "generated/prisma";

export type CreateMembershipsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  paymentFrequency: $Enums.frequency;
}
