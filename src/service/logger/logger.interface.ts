export interface LoggerInterface {
  trace(msg: string): void
  debug(msg: string): void
  info(msg: string): void
  warn(msg: string): void
  error(msg: string): void
  fatal(msg: string): void
  child(mergingObject: any): LoggerInterface
}
