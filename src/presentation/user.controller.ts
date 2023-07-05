import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDto } from 'src/shared/dtos/user-create.dto';
import { UserCreatedDto } from 'src/shared/dtos/user-created.dto';
import { CreateUserUseCase } from 'src/use-cases/user/create-user.use-case';

@Controller('/users')
export class UsersControllers {
  constructor(private createUserUserCase: CreateUserUseCase) {}

  @Post()
  public create(@Body() user: UserCreateDto): Promise<UserCreatedDto> {
    return this.createUserUserCase.execute(user);
  }
}
