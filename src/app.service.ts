import { Injectable } from '@nestjs/common';
import { CrawlerApiService } from 'crawler';

@Injectable()
export class AppService {
  constructor(private crawlerApiService: CrawlerApiService) {}

  subscribeNewBlocks() {
    const blocks = this.crawlerApiService.subscribeNewBlocks();

    console.log('Start new blocks listening');
    blocks.subscribe({
      next(x) {
        console.log('got value ' + x);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('Observable completed.');
      },
    });
  }
}
