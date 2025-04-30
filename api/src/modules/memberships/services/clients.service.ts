import { Injectable } from '@nestjs/common';
import { ClientsRepository } from '../repositories/clients.repository';
import { GetClientsType } from '../types/clients/get.clients.type';
import { CreateClientsType } from '../types/clients/create.clients.type';
import { UpdateClientsType } from '../types/clients/update.clients.type';

@Injectable()
export class ClientsService {
  constructor(private readonly clients: ClientsRepository) {}

  public get(where: GetClientsType) {
    return this.clients.get(where);
  }

  public create(data: CreateClientsType) {
    return this.clients.create(data);
  }

  public update(where: { id: number }, data: UpdateClientsType) {
    return this.clients.update(where, data);
  }

  public delete(where: { id: number }) {
    return this.clients.delete(where);
  }
}
