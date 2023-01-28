import { Controller, Get } from '@nestjs/common';
import { Sp2000Service } from './sp2000.service';

@Controller('/proxy/sp2000')
export class Sp2000Controller {
  constructor(private readonly sp2000Service: Sp2000Service) {}

  @Get()
  getSp2000() {
    return this.sp2000Service.getSp2000();
  }
}
