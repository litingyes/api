import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { EutilsService } from './eutils.service'
import { EutilsController } from './eutils.controller'

@Module({
  controllers: [EutilsController],
  providers: [EutilsService],
  imports: [HttpModule],
})
export class EutilsModule {}
