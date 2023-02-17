import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProxyModule } from './proxy/proxy.module'
import { TestModule } from './test/test.module'
import { IdiomModule } from './idiom/idiom.module'

@Module({
  imports: [ProxyModule, TestModule, IdiomModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
