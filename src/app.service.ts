import { Injectable } from '@nestjs/common';
// import { RandomService } from 'crawler';

@Injectable()
export class AppService {
  getHello(n: number): string {
    return `Hello World! The number is ${n}`;
  }
}
