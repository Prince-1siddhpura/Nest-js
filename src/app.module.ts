import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UsersModules } from './user/users.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [UsersModules,ProductModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
