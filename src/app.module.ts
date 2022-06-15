import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from 'crawler';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    CrawlerModule.forRoot({
      wsProviderUrl: 'wss://some.wss.url',
      min: -10,
      max: 50,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
