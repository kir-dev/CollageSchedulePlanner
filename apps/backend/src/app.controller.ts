import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/health')
  getHealth(): string {
    return 'Service is up and running';
  }
}
