export interface MembershipClient {
  id: number;
  name: string;
  lastName: string;
  membershipType: string;
  membershipTypeId: number;
  createdAt: Date;
  endAt: Date;
}
