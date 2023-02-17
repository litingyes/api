import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProxyModule } from './proxy/proxy.module'
import { IdiomModule } from './idiom/idiom.module'
import { AllegoryModule } from './allegory/allegory.module'

@Module({
  imports: [ProxyModule, IdiomModule, AllegoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
