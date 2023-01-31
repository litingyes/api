import { NestFactory } from '@nestjs/core'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { getPackageInfoSync } from 'local-pkg'
import { AppModule } from './app.module'

const pkg = getPackageInfoSync('@liting-yes/api')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: [`'self'`],
          styleSrc: [`'self'`, `'unsafe-inline'`],
          imgSrc: [`'self'`, 'data:', 'validator.swagger.io'],
          scriptSrc: [`'self'`, `https: 'unsafe-inline'`],
        },
      },
    }),
  )
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  )

  const config = new DocumentBuilder()
    .setTitle('Liting Api')
    .setDescription('A series of api collections of liting-yes')
    .setVersion(pkg?.version ?? '0.0.0')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}

bootstrap()
