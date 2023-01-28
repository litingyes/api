import { Module } from '@nestjs/common';
import { Sp2000Module } from './sp2000/sp2000.module';

@Module({
  imports: [Sp2000Module],
})
export class ProxyModule {}
