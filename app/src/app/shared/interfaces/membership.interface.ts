export interface MembershipClient {
  id: number;
  id_user_role: number;
  name: string;
  lastName: string;
  membershipType: string;
  membershipTypeId: number;
  createdAt: Date;
  endAt: Date;
}
