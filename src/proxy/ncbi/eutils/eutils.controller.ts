import { Controller, Get, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { EutilsService } from './eutils.service';

@Controller('/proxy/ncbi/eutils')
export class EutilsController {
  constructor(
    private readonly eutilsService: EutilsService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getEutild() {
    return this.eutilsService.getEutils();
  }

  @Get('esearch')
  async callEsearch(@Query() params: { db: string; term: string }) {
    const { data } = await this.httpService.axiosRef.get(
      `${this.eutilsService.getApiPrefix()}/esearch.fcgi`,
      {
        params,
      },
    );

    return this.eutilsService.parserXML(data).eSearchResult;
  }
}
