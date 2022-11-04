import { Container } from 'inversify'
import { TYPES } from './inversify.types'
import { App, AppInterface } from './App'
import { Dotenv } from './service/config/dotenv/Dotenv'
import { Pino } from './service/logger/pino/Pino'
import { Fastify } from './service/server/fastify/Fastify'
import { UiInterface } from "./shared/interfaces/ui.interface";
import { LoginAuthUi } from "./core/auth/ui/login.auth.ui";

const container = new Container()

// entry point
container.bind<AppInterface>(TYPES.App).to(App).inSingletonScope()

// bind tools
container.bind(TYPES.Service.Config).to(Dotenv)
container.bind(TYPES.Service.Logger).to(Pino)
container.bind(TYPES.Service.Server).to(Fastify).inSingletonScope()

// bind ui
container.bind<UiInterface>(TYPES.Ui).to(LoginAuthUi)

export { container }
