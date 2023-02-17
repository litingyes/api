import { Module } from '@nestjs/common'
import { AppService } from '../app.service'
import { AllegoryController } from './allegory.controller'

@Module({
  controllers: [AllegoryController],
  providers: [AppService],
})
export class AllegoryModule {}
