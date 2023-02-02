import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  getCookie() {
    return 'Set-Cookie With CORS'
  }
}
