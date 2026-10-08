import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/auth.module.js';
import { AuthController } from './auth/auth.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AuthController],
})
export class AppModule {}
