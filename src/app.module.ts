import { Module } from '@nestjs/common';
import { UserModule } from './core/domain/modules/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
