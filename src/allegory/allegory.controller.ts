import { resolve } from 'path'
import { Controller, Get } from '@nestjs/common'
import { readJSONSync } from 'fs-extra'
import { AppService } from '../app.service'
import '../../db/allegories.json'

interface AllegoryItem {
  instro: string
  backing: string[]
}

interface AllegoriesData {
  allegories: AllegoryItem[]
  lastUpdatedTime: number
  source: string
}

const fileUrl = resolve(__dirname, '../../db/allegories.json')
const allegoriesData: AllegoriesData = readJSONSync(fileUrl)

@Controller('allegory')
export class AllegoryController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllegory() {
    const allegory =
      allegoriesData?.allegories[
        this.appService.random(0, allegoriesData?.allegories?.length)
      ]
    return `${allegory.instro} -> ${
      allegory.backing[this.appService.random(0, allegory.backing.length - 1)]
    }`
  }
}
