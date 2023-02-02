import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { TestService } from './test.service'

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('cookie')
  getCookie(@Res({ passthrough: true }) response: Response) {
    response.cookie('test', 'test cookie', {
      sameSite: 'none',
    })
    return this.testService.getCookie()
  }
}
