import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
})
export class AppModule {}
