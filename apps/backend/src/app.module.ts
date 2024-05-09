import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
