import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(n: number): string {
    return `Hello World! The number is ${n}`;
  }
}
