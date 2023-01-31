import { Module } from '@nestjs/common'
import { Sp2000Module } from './sp2000/sp2000.module'
import { NcbiModule } from './ncbi/ncbi.module'

@Module({
  imports: [Sp2000Module, NcbiModule],
})
export class ProxyModule {}
