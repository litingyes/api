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
  async callEsearch(
    @Query()
    params: {
      db: string;
      term: string;
      usehistory?: string;
      WebEnv?: string;
      query_key?: string;
      retstart?: string;
      retmax?: string;
      rettype?: string;
      retmode?: 'json' | 'xml';
      sort?: string;
      field?: string;
      idtype?: string;
      datetype?: string;
      reldate?: number;
      mindate?: string;
      maxdate?: string;
    },
  ) {
    const { data } = await this.httpService.axiosRef.get(
      `${this.eutilsService.getApiPrefix()}/esearch.fcgi`,
      {
        params,
      },
    );

    if (params.retmode === 'json') {
      return data.esearchresult;
    }
    return this.eutilsService.parserXML(data).eSearchResult;
  }
}
