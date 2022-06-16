import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from 'crawler';
import { LoggerModule } from './logger/logger.module';
import 'dotenv/config';

@Module({
  imports: [
    LoggerModule,
    CrawlerModule.forRoot({
      wsProviderUrl: process.env.WS_PROVIDER_URL || 'wss://some.wss.url',
      typeProvider: process.env.TYPE_PROVIDER,
      min: -10,
      max: 50,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
