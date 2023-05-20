import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatModule } from './cats/cats.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const cat = await NestFactory.create(CatModule);
  await cat.listen(8080)
}
bootstrap();
