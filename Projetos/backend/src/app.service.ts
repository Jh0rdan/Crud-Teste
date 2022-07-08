import { Injectable } from '@nestjs/common';
import { appendFile } from 'fs';

const cors = require ('cors')

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
