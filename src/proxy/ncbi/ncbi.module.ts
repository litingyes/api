import { Module } from '@nestjs/common';
import { EutilsModule } from './eutils/eutils.module';

@Module({
  imports: [EutilsModule],
})
export class NcbiModule {}
