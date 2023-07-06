import { IsOptional, IsUUID } from 'class-validator';

export class UserFiltersDTO {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  name?: string;

  @IsOptional()
  email?: string;
}
