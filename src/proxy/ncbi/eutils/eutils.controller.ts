import { Controller, Get } from '@nestjs/common';
import { EutilsService } from './eutils.service';

@Controller('/proxy/ncbi/eutils')
export class EutilsController {
  constructor(private readonly eutilsService: EutilsService) {}

  @Get()
  getEutild() {
    return this.eutilsService.getEutils();
  }
}
