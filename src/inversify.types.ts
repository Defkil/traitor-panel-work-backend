export const TYPES = {
    App: Symbol.for('AppInterface'),
    Service: {
        Config: Symbol.for('ConfigServiceInterface'),
        Logger: Symbol.for('LoggerServiceInterface'),
        Server: Symbol.for('ServerServiceInterface'),
    }
}