import { expect, test, vi } from 'vitest'
import { Pino } from './Pino'

vi.mock('pino', () => ({
  pino: () => ({
    trace: (data: string) => {
      expect(data).toBe('trace')
    },
    debug: (data: string) => {
      expect(data).toBe('debug')
    },
    info: (data: string) => {
      expect(data).toBe('info')
    },
    warn: (data: string) => {
      expect(data).toBe('warn')
    },
    error: (data: string) => {
      expect(data).toBe('error')
    },
    child: (data: any) => {
      return data.test === 'test'
    },
  }),
}))

test('create child', async () => {
  const pino = new Pino()
  const childMock = pino.child({ test: 'test' })
  expect(childMock).toBe(true)
})

test('log', async () => {
  const pino = new Pino()
  pino.trace('trace')
  pino.debug('debug')
  pino.info('info')
  pino.warn('warn')
  pino.error('error')
  pino.fatal('error') // fatal is in pino same as error
})
