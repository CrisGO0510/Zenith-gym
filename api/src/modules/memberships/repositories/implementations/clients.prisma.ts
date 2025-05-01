import { PrismaService } from 'src/core/prisma/prisma.service';
import { ClientsRepository } from '../clients.repository';
import { Prisma, TB_client_membership } from 'generated/prisma';
import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CreateClientsDto } from '../../dtos/clients/create.clients.dto';

@Injectable()
export class ClientsPrisma implements ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(
    where: Prisma.TB_client_membershipWhereInput,
  ): Promise<TB_client_membership[]> {
    return this.prisma.tB_client_membership.findMany({
      where,
      include: {
        TB_user_role: true,
      },
    });
  }

  public async create(data: CreateClientsDto): Promise<TB_client_membership> {
    const { id_user, id_membership, start_date, end_date } = data;

    if (!id_user) {
      throw new BadRequestException('El campo id_user es obligatorio.');
    }

    const parsedStart = new Date(start_date);
    const parsedEnd = new Date(end_date);

    if (isNaN(parsedStart.getTime()) || isNaN(parsedEnd.getTime())) {
      throw new BadRequestException(
        'Las fechas proporcionadas no son válidas.',
      );
    }

    const CLIENT_ROLE_ID = 1;

    // 1. Buscar o crear TB_user_role con id_role = 1 (cliente)
    const existingUserRole = await this.prisma.tB_user_role.findFirst({
      where: {
        id_user,
        id_role: CLIENT_ROLE_ID,
      },
    });

    const userRole =
      existingUserRole ??
      (await this.prisma.tB_user_role.create({
        data: {
          id_user,
          id_role: CLIENT_ROLE_ID,
        },
      }));

    // 2. Verificar si ya tiene una membresía activa (no vencida)
    const existingMembership = await this.prisma.tB_client_membership.findFirst(
      {
        where: {
          id_user_role: userRole.id_user_role,
          end_date: {
            gt: new Date(),
          },
        },
      },
    );

    if (existingMembership) {
      throw new ConflictException(
        'El usuario ya tiene una membresía activa registrada.',
      );
    }

    // 3. Crear la nueva membresía
    return this.prisma.tB_client_membership.create({
      data: {
        id_user_role: userRole.id_user_role,
        id_membership: id_membership,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
      },
    });
  }

  public async update(
    where: Prisma.TB_client_membershipWhereUniqueInput,
    data: Prisma.TB_client_membershipUncheckedUpdateInput,
  ): Promise<TB_client_membership> {
    return this.prisma.tB_client_membership.update({
      where,
      data,
    });
  }

  public async delete(
    where: Prisma.TB_client_membershipWhereUniqueInput,
  ): Promise<TB_client_membership> {
    return this.prisma.tB_client_membership.delete({
      where,
    });
  }
}
