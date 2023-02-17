import { Module } from '@nestjs/common'
import { AppService } from '../app.service'
import { IdiomController } from './idiom.controller'

@Module({
  controllers: [IdiomController],
  providers: [AppService],
})
export class IdiomModule {}
