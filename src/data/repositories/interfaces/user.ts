import { UserEntity } from 'src/core/domain/entities/user.entity';

export interface IUserRepository {
  create(data: UserEntity): Promise<UserEntity>;
  find(where: { email: string }): Promise<UserEntity | null>;
}
