import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UseCase } from 'src/core/base/use-case';
import { UserRepository } from 'src/data/repositories/user';
import { SignInDTO } from 'src/shared/dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { comparePass } from 'src/shared/methods/crypto';
import { AccessTokenDTO } from 'src/shared/dtos/access-token.dto';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from 'src/shared/interfaces/config.interface';

@Injectable()
export class SignInUseCase implements UseCase<AccessTokenDTO> {
  constructor(
    private readonly repository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  public async execute({ email, password }: SignInDTO): Promise<AccessTokenDTO> {
    const user = await this.repository.find({ email });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await comparePass(password, user.password);

    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    const jwtConfig = this.configService.get<JwtConfig>('jwt') as JwtConfig;

    const payload = { userId: user.id };
    return {
      accessToken: await this.jwtService.signAsync(payload, jwtConfig),
    };
  }
}
