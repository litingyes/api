import { Controller, Get, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Sp2000Service } from './sp2000.service';

@Controller('/proxy/sp2000')
export class Sp2000Controller {
  constructor(
    private readonly sp2000Service: Sp2000Service,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getSp2000() {
    return this.sp2000Service.getSp2000();
  }

  @Get('/v2/getFamiliesByFamilyName')
  async getFamiliesByFamilyName(
    @Query() params: { familyName: string; apiKey: string; page: number },
  ): Promise<any> {
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getFamiliesByFamilyName`,
      {
        params,
      },
    );

    return data;
  }
}
