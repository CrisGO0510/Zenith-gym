import { Prisma, TB_client_membership } from 'generated/prisma';
import { CreateClientsDto } from '../dtos/clients/create.clients.dto';

export abstract class ClientsRepository {
  abstract get(where: Prisma.TB_client_membershipWhereInput): Promise<TB_client_membership[]>;
  abstract create(data: CreateClientsDto): Promise<TB_client_membership>;
  abstract update(
    where: Prisma.TB_client_membershipWhereUniqueInput,
    data: Prisma.TB_client_membershipUncheckedUpdateInput,
  ): Promise<TB_client_membership>;
  abstract delete(where: Prisma.TB_client_membershipWhereUniqueInput): Promise<TB_client_membership>;
}
