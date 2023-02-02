import { Controller, Get, Headers, Res } from '@nestjs/common'
import { Response } from 'express'
import { TestService } from './test.service'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('cookie')
  getCookie(
    @Headers('Origin') Origin: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.append('Vary', 'Origin')
    response.append('Access-Control-Allow-Origin', Origin)
    response.append('Access-Control-Allow-Credentials', 'true')
    response.cookie('test', 'test cookie', {
      sameSite: 'none',
    })
    return this.testService.getCookie()
  }
}
