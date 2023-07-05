import { Injectable } from '@nestjs/common';

import { UserEntity } from 'src/core/domain/entities/user.entity';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from './interfaces/user';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: UserEntity): Promise<UserEntity> {
    const saved = await this.prisma.user.create({ data });

    return saved;
  }

  public async find(where: { email: string }): Promise<UserEntity | null> {
    const saved = await this.prisma.user.findFirst({ where });

    return saved;
  }
}
