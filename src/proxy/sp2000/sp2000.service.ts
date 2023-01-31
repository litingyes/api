import { Injectable } from '@nestjs/common'

@Injectable()
export class Sp2000Service {
  getSp2000() {
    return 'This is a proxy for http://www.sp2000.org.cn/api/document'
  }

  getApiPrefix() {
    return 'http://www.sp2000.org.cn/api'
  }
}
