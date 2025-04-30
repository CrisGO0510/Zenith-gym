import { $Enums } from "generated/prisma";

export type UpdateMembershipsType = {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  paymentFrequency?: $Enums.frequency;
}
