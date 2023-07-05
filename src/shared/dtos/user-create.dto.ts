import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserCreateDto {
  id?: string;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
