import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { Sp2000Controller } from './sp2000.controller';
import { Sp2000Service } from './sp2000.service';

@Module({
  controllers: [Sp2000Controller],
  providers: [Sp2000Service],
  imports: [HttpModule],
})
export class Sp2000Module {}
