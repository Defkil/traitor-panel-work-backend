import 'reflect-metadata'
import { ConfigInterface } from '../config.interface'
import * as dotenv from 'dotenv'
import { injectable } from 'inversify'

@injectable()
export class Dotenv implements ConfigInterface {
  data: any
  constructor() {
    this.data = dotenv.config().parsed
  }

  query(msg: string): string {
    return this.data[msg]
  }
}
