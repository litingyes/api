import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  random(start: number, end: number): number {
    start = Math.floor(start)
    end = Math.ceil(end)
    return Math.round(Math.abs(end - start) * Math.random()) + start
  }
}
