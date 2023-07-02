import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UseCase } from 'src/core/base/use-case';
import { UserCreateMapper } from 'src/core/domain/mappers/user-create.mapper';
import { UserCreatedMapper } from 'src/core/domain/mappers/user-created.mapper';
import { UserRepository } from 'src/data/repositories/user';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';

@Injectable()
export class CreateUserUseCase implements UseCase<UserCreatedDto> {
  private userCreateMapper: UserCreateMapper;
  private userCreatedMapper: UserCreatedMapper;

  constructor(private readonly repository: UserRepository) {
    this.userCreateMapper = new UserCreateMapper();
    this.userCreatedMapper = new UserCreatedMapper();
  }

  public async execute(
    user: UserCreateDto,
  ): Promise<Observable<UserCreatedDto>> {
    const entity = this.userCreateMapper.mapFrom(user);

    const userCreated = await this.repository.create(entity);

    return userCreated.pipe(map(this.userCreatedMapper.mapTo));
  }
}
