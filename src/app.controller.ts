import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RandomService } from 'crawler';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private randomService: RandomService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(this.randomService.generate());
  }
}
