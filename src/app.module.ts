import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './core/config/configuration';
import { AuthModule, UserModule } from './domain/modules';

@Module({
  imports: [UserModule, AuthModule, ConfigModule.forRoot({ load: [configuration], isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
