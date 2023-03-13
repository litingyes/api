import { Controller, Get, Query } from '@nestjs/common'
import { HttpService } from '@nestjs/axios'
import { Sp2000Service } from './sp2000.service'

@Controller('/proxy/sp2000')
export class Sp2000Controller {
  constructor(
    private readonly sp2000Service: Sp2000Service,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  getSp2000() {
    return this.sp2000Service.getSp2000()
  }

  @Get('/v2/getFamiliesByFamilyName')
  async getFamiliesByFamilyName(
    @Query() params: { familyName: string; apiKey: string; page: number },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getFamiliesByFamilyName`,
      {
        params,
      },
    )

    return data
  }

  @Get('/v2/getSpeciesByFamilyId')
  async getSpeciesByFamilyId(
    @Query() params: { familyId: string; apiKey: string; page: number },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getSpeciesByFamilyId`,
      {
        params,
      },
    )

    return data
  }

  @Get('/v2/getSpeciesByScientificName')
  async getSpeciesByScientificName(
    @Query() params: { scientificName: string; apiKey: string; page: number },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getSpeciesByScientificName`,
      {
        params,
      },
    )

    return data
  }

  @Get('/v2/getSpeciesByCommonName')
  async getSpeciesByCommonName(
    @Query() params: { commonName: string; apiKey: string; page: number },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getSpeciesByCommonName`,
      {
        params,
      },
    )

    return data
  }

  @Get('/v2/getSpeciesByNameCode')
  async getSpeciesByNameCode(
    @Query() params: { nameCode: string; apiKey: string },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getSpeciesByNameCode`,
      {
        params,
      },
    )

    return data
  }

  @Get('/v2/getNameByKeyword')
  async getNameByKeyword(
    @Query() params: { keyword: string; apiKey: string },
  ): Promise<any> {
    params.apiKey = params.apiKey ?? process.env.API_KEY_SP2000
    const { data } = await this.httpService.axiosRef.get(
      `${this.sp2000Service.getApiPrefix()}/v2/getNameByKeyword`,
      {
        params,
      },
    )

    return data
  }
}
