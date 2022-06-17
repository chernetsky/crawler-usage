import { Injectable } from '@nestjs/common';
import { CrawlerApiService } from 'crawler';

@Injectable()
export class AppService {
  constructor(private crawlerApiService: CrawlerApiService) {}

  async subscribeNewBlocks() {
    const blocksObservable = await this.crawlerApiService.subscribeNewBlocks();

    console.log('Start new blocks listening');
    blocksObservable.subscribe({
      next(blockData) {
        console.log(blockData);
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
