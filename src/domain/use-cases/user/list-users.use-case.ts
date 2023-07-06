import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/core/base/use-case';
import { UserRepository } from 'src/data/repositories/user';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserFiltersDTO } from 'src/shared/dtos/user-filters';

@Injectable()
export class ListUsersUseCase implements UseCase<UserEntity[]> {
  constructor(private readonly repository: UserRepository) {}

  public async execute(userWhere: UserFiltersDTO): Promise<UserEntity[]> {
    const users = await this.repository.findMany(userWhere);

    return users;
  }
}
