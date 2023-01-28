import { Module } from '@nestjs/common';
import { Sp2000Controller } from './sp2000.controller';
import { Sp2000Service } from './sp2000.service';

@Module({
  controllers: [Sp2000Controller],
  providers: [Sp2000Service],
})
export class Sp2000Module {}
