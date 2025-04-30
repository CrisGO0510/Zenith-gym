import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../repositories/reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly clients: ReservationsRepository) {}

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
