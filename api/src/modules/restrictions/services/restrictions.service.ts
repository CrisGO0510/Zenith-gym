import { Injectable } from '@nestjs/common';
import { RestrictionsRepository } from '../repositories/restrictions.repository';

@Injectable()
export class RestrictionsService {
  constructor(private readonly clients: RestrictionsRepository) {}

  public get(where: any) {
    return this.clients.get(where);
  }

  public create(data: any) {
    return this.clients.create(data);
  }

  public update(where: { id_restriction: number }, data: any) {
    return this.clients.update(where, data);
  }

  public delete(where: { id_restriction: number }) {
    return this.clients.delete(where);
  }
}
