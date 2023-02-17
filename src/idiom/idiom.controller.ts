import { resolve } from 'path'
import { Controller, Get } from '@nestjs/common'
import { readJSONSync } from 'fs-extra'
import { AppService } from '../app.service'
import '../../db/idioms.json'

interface IdiomsData {
  idioms: string[]
  lastUpdatedTime: number
  source: string
}

const fileUrl = resolve(__dirname, '../../db/idioms.json')
const idiomsData: IdiomsData = readJSONSync(fileUrl)

@Controller('idiom')
export class IdiomController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getIdiom() {
    return idiomsData?.idioms[
      this.appService.random(0, idiomsData?.idioms?.length)
    ]
  }
}
