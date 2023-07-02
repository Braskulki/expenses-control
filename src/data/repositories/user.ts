import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { UserEntity } from 'src/core/domain/entities/user.entity';
import { PrismaService } from 'src/infra/prisma/prisma.service';
import { IUserRepository } from './interfaces/user';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  public async create(data: UserEntity): Promise<Observable<UserEntity>> {
    const saved = await this.prisma.user.create({ data });

    return of(saved);
  }
}
