import { Module } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/user';
import { PrismaModule } from 'src/infra/prisma/prisma.module';
import { SignInUseCase } from '../use-cases/auth/login.use-case';
import { AuthController } from 'src/presentation/auth.controller';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [UserRepository, SignInUseCase, JwtService],
  controllers: [AuthController],
  imports: [PrismaModule],
  exports: [],
})
export class AuthModule {}
