import { inject, injectable } from 'inversify'
import 'reflect-metadata'
import { TYPES } from './inversify.types'
import { LoggerInterface } from './service/logger/logger.interface'
import { ServerInterface } from './service/server/server.interface'

export interface AppInterface {
  start(): void
  setup(): void
}

/**
 * rest server app
 */
@injectable()
export class App implements AppInterface {
  constructor(
    @inject(TYPES.Service.Logger) private logger: LoggerInterface,
    @inject(TYPES.Service.Server) public server: ServerInterface
  ) {}

  public   setup():  void {
    this.logger.info('setting up app')

    this.server.setup()
  }

  public start(): void {
    this.server.start()
  }
}
