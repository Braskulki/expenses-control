import { Injectable } from '@nestjs/common';
import { UseCase } from 'src/core/base/use-case';
import { UserCreateMapper } from 'src/domain/mappers/user-create.mapper';
import { UserCreatedMapper } from 'src/domain/mappers/user-created.mapper';
import { UserRepository } from 'src/data/repositories/user';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';
import { EntityAlreadyExistsException } from 'src/shared/errors/entity-already-exists';
import { hashPass } from 'src/shared/methods/crypto';

@Injectable()
export class CreateUserUseCase implements UseCase<UserCreatedDto> {
  private userCreateMapper: UserCreateMapper;
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public async execute(user: UserCreateDto): Promise<UserCreatedDto> {
    const entity = this.userCreateMapper.mapFrom(user);

    const userExists = await this.repository.find({ email: user.email });

    if (userExists) {
      throw new EntityAlreadyExistsException('User');
    }

    entity.password = await hashPass(entity.password);

    const userCreated = await this.repository.create(entity);

    return this.userCreatedMapper.mapTo(userCreated);
  }
}
