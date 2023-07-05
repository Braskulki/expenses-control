import { Module } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/user';
import { CreateUserUseCase } from '../../../use-cases/user/create-user.use-case';
import { UsersControllers } from 'src/presentation/user.controller';
import { PrismaModule } from 'src/infra/prisma/prisma.module';

@Module({
  providers: [UserRepository, CreateUserUseCase],
  controllers: [UsersControllers],
  imports: [PrismaModule],
  exports: [],
})
export class UserModule {}
