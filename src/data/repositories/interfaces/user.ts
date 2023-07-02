import { Observable } from 'rxjs';
import { UserEntity } from 'src/core/domain/entities/user.entity';

export interface IUserRepository {
  create(data: UserEntity): Promise<Observable<UserEntity>>;
}
