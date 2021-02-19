import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({limit: '3000mb'}));
  app.use(bodyParser.urlencoded({limit: '3000mb', extended: true}))
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
