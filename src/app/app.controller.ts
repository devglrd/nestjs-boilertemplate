import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  api(): { msg: string; status: number } {
    return {
      status: 200,
      msg: 'Api Started',
    };
  }
}
