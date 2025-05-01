import { PrismaService } from 'src/core/prisma/prisma.service';
import { UsersRepository } from '../users.repository';
import { Prisma, TB_users } from 'generated/prisma';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUsersDto } from '../../dto/users/update.users.dto';

@Injectable()
export class UsersPrisma implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async get(where: Prisma.TB_usersWhereInput): Promise<any[]> {
    const users = await this.prisma.tB_users.findMany({
      where,
      include: {
        TB_restriction: true,
      },
    });
  
    return users.map((user) => ({
      id_user: user.id_user,
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      phone_number: user.phone_number,
      birthday: user.birthday,
      restriction: user.TB_restriction[0]?.description ?? null,
    }));
  }
  

  public async create(data: Prisma.TB_usersCreateInput): Promise<TB_users> {
    return this.prisma.tB_users.create({
      data,
    });
  }

  public async update(
    where: Prisma.TB_usersWhereUniqueInput,
    data: UpdateUsersDto,
  ): Promise<TB_users> {
    const { restriction, ...userData } = data;
  
    const updatedUser = await this.prisma.tB_users.update({
      where,
      data: userData,
    });
  
    if (restriction) {
      await this.prisma.tB_restriction.upsert({
        where: { id_user: updatedUser.id_user },
        update: { description: restriction },
        create: {
          id_user: updatedUser.id_user,
          description: restriction,
        },
      });
    }
  
    return updatedUser;
  }
  
  

  public async delete(
    where: Prisma.TB_usersWhereUniqueInput,
  ): Promise<TB_users> {
    return this.prisma.tB_users.delete({
      where,
    });
  }
}
