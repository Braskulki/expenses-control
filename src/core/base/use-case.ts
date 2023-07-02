import { Observable } from 'rxjs';

export interface UseCase<TModel> {
  execute(...args: any[]): Promise<Observable<TModel>>;
}
