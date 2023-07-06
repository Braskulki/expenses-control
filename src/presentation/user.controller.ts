import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';
import { CreateUserUseCase } from 'src/domain/use-cases/user/create-user.use-case';
import { ListUsersUseCase } from 'src/domain/use-cases/user/list-users.use-case';
import { UserEntity } from 'src/domain/entities/user.entity';
import { UserFiltersDTO } from 'src/shared/dtos/user-filters';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('/users')
export class UsersControllers {
  constructor(private createUserUserCase: CreateUserUseCase, private listUsersUseCase: ListUsersUseCase) {}

  @Post()
  public create(@Body() user: UserCreateDto): Promise<UserCreatedDto> {
    return this.createUserUserCase.execute(user);
  }

  @Get()
  public list(
    @Query('name') name?: string,
    @Query('email') email?: string,
    @Query('id') id?: string,
  ): Promise<UserEntity[]> {
    const filters: UserFiltersDTO = {
      name,
      email,
      id,
    };

    return this.listUsersUseCase.execute(filters);
  }
}
