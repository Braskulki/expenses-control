import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SignInUseCase } from 'src/domain/use-cases/auth/login.use-case';
import { SignInDTO } from 'src/shared/dtos/sign-in.dto';
import { AccessTokenDTO } from 'src/shared/dtos/access-token.dto';

@ApiTags('Auth')
@Controller('/auth')
export class AuthController {
  constructor(private signInUseCase: SignInUseCase) {}

  @Post('/sign-in')
  public create(@Body() user: SignInDTO): Promise<AccessTokenDTO> {
    return this.signInUseCase.execute(user);
  }
}
