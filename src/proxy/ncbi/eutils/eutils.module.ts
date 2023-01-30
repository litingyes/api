import { Module } from '@nestjs/common';
import { EutilsService } from './eutils.service';
import { EutilsController } from './eutils.controller';

@Module({
  controllers: [EutilsController],
  providers: [EutilsService],
})
export class EutilsModule {}
