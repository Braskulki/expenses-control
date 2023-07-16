import { Module } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/user';
import { CreateUserUseCase } from '../use-cases/user/create-user.use-case';
import { UsersController } from 'src/presentation/user.controller';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { ListUsersUseCase } from '../use-cases/user/list-users.use-case';

@Module({
  providers: [UserRepository, CreateUserUseCase, ListUsersUseCase],
  controllers: [UsersController],
  imports: [PrismaModule],
  exports: [],
})
export class UserModule {}
