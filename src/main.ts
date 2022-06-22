import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appService = app.get(AppService);

  // await appService.subscribeNewBlocks();

  await appService.getBlockByNumber(38500);

  // await app.listen(3000);
}
bootstrap();
