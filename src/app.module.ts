import { Module } from '@nestjs/common';
import { UsersControllers } from './presentation/user.controller';
import { CreateUserUseCase } from './use-cases/user/create-user.use-case';
import { GetAllUsersUseCase } from './use-cases/user/get-all-users.use-case';
import { UserRepository } from './core/repositories/user.repository';
import { UsersCacheMemoryRepository } from './data/cache-memory/users-cache-memory.repository';

@Module({
  imports: [],
  controllers: [UsersControllers],
  providers: [
    {
      provide: UserRepository,
      useClass: UsersCacheMemoryRepository,
    },
    CreateUserUseCase,
    GetAllUsersUseCase,
  ],
})
export class AppModule {}
