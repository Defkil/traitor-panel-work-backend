import { expect, test, vi } from 'vitest'
import { Dotenv } from './Dotenv'

vi.mock('dotenv', () => vi.mocked({
    config: () => {
        return {
            parsed: {
                test: 'test',
            },
        }
    }
}))
test('pass data to dotenv', async () => {
    const dotenv = new Dotenv()
    expect(dotenv.query('test')).toBe('test')
    expect(200).toBe(200)
})