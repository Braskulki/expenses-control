import { UserEntity } from 'src/domain/entities/user.entity';

export interface IUserRepository {
  create(data: UserEntity): Promise<UserEntity>;
  find(where: Partial<UserEntity>): Promise<UserEntity | null>;
  findMany(where: Partial<UserEntity>): Promise<UserEntity[]>;
}
