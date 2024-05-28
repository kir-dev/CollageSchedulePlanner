import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }), EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
