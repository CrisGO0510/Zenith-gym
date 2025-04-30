import { Injectable } from '@nestjs/common';
import { MembershipsRepository } from '../repositories/memberships.repository';
import { GetMembershipsType } from '../types/memberships/get.memberships.type';
import { CreateMembershipsType } from '../types/memberships/create.memberships.type';
import { UpdateMembershipsType } from '../types/memberships/update.memberships.typ';

@Injectable()
export class MembershipsService {
  constructor(private readonly memberships: MembershipsRepository) {}

  public get(where: GetMembershipsType) {
    return this.memberships.get(where);
  }

  public create(data: CreateMembershipsType) {
    return this.memberships.create(data);
  }

  public update(where: { id: number }, data: UpdateMembershipsType) {
    return this.memberships.update(where, data);
  }

  public delete(where: { id: number }) {
    return this.memberships.delete(where);
  }
}
