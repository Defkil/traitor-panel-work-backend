export const TYPES = {
  App: Symbol.for('AppInterface'),
  Ui: Symbol.for('UiInterface'),
  Service: {
    Config: Symbol.for('ConfigServiceInterface'),
    Logger: Symbol.for('LoggerServiceInterface'),
    Server: Symbol.for('ServerServiceInterface'),
  },
}
