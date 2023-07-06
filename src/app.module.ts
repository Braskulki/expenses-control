import { Module } from '@nestjs/common';
import { UserModule } from './domain/modules/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
