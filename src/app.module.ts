import { Module } from '@nestjs/common';
import { UsersControllers } from './presentation/user.controller';
import { CreateUserUseCase } from './use-cases/user/create-user.use-case';
import { PrismaModule } from './infra/prisma/prisma.module';
import { UserRepository } from './data/repositories/user';

@Module({
  imports: [PrismaModule],
  controllers: [UsersControllers],
  providers: [UserRepository, CreateUserUseCase],
})
export class AppModule {}
