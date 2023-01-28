import { Module } from '@nestjs/common';
import { Sp2000Controller } from './sp2000/sp2000.controller';

@Module({
  controllers: [Sp2000Controller],
})
export class ProxyModule {}
