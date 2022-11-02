import { Container } from "inversify";
import { TYPES } from "./inversify.types";
import {App, AppInterface} from "./App";
import {Dotenv} from "./service/config/dotenv/Dotenv";
import {Pino} from "./service/logger/pino/Pino";
import {Fastify} from "./service/server/fastify/Fastify";


const container = new Container();

// bind tools
container.bind<AppInterface>(TYPES.App).to(App).inSingletonScope()

container.bind(TYPES.Service.Config).to(Dotenv);
container.bind(TYPES.Service.Logger).to(Pino);
container.bind(TYPES.Service.Server).to(Fastify).inSingletonScope();
export { container }