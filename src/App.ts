import {inject, injectable, multiInject} from 'inversify'
import 'reflect-metadata'
import { TYPES } from './inversify.types'
import { LoggerInterface } from './service/logger/logger.interface'
import {UiInterface} from "./shared/interfaces/ui.interface";
import {FastifyInterface} from "./shared/fastify/fastify.interface";

export interface AppInterface {
  /**
   * run all necessary setups
   */
  setup(): Promise<void>
  /**
   * Start the application
   */
  start(): Promise<void>
}

/**
 * rest server app
 */
@injectable()
export class App implements AppInterface {
  constructor(
      /**
       * logger service
       */
    @inject(TYPES.Service.Logger) private logger: LoggerInterface,
      /**
       * web server
       */
    @inject(TYPES.Service.Server) private server: FastifyInterface,
      /**
       * all registered uis
       */
    @multiInject(TYPES.Ui) private uis: UiInterface[]
  ) {}

  /**
   * start mounting ui and after that server setup
   */
  public async setup(): Promise<void> {
    this.logger.info('setting up app')
    this.mountUi()
    this.server.setup()
  }

  /**
   * mount all uis to fastify
   * @private
   */
  private mountUi(): void {
    this.uis.forEach(ui => {
      ui.mount(this.server.fastify)
    })
  }

  /**
   * start fastify server
   */
  public async start(): Promise<void> {
    this.logger.info('starting app')
    this.server.start()
  }
}
