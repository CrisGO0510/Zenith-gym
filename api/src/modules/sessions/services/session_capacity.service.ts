import { Injectable } from '@nestjs/common';
import { SessionCapacityRepository } from '../repositories/session_capacity.repository';

@Injectable()
export class SessionCapacityService {
  constructor(private readonly clients: SessionCapacityRepository) {}

  public get(where: any) {
    return this.clients.get(where);
  }

  public create(data: any) {
    return this.clients.create(data);
  }

  public update(where: { id: number }, data: any) {
    return this.clients.update(where, data);
  }

  public delete(where: { id: number }) {
    return this.clients.delete(where);
  }
}
