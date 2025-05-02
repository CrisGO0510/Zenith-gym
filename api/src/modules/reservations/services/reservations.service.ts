import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from '../repositories/reservations.repository';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservations: ReservationsRepository) {}

  public get(where: any) {
    return this.reservations.get(where);
  }

  public getPending(where: any) {
    return this.reservations.getPending(where);
  }

  public create(data: any) {
    return this.reservations.create(data);
  }

  public update(where: { id: number }, data: any) {
    return this.reservations.update(where, data);
  }
}
