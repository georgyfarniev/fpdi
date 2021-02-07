import 'jest'
import { Container } from '../src'

describe('Container', () => {
  test('assert on missing key', () => {

    const container = new Container()
    const expectedError = 'Key unknownkey does not exists in FPDI container'

    expect(() => container.injectOne('unknownkey')).toThrowError(expectedError)
    expect(() => container.inject('unknownkey')).toThrowError(expectedError)
  })

  test('injectOne', () => {
    const key1 = 'dep1'
    const key2 = 'dep2'

    const value1 = 'foo'
    const value2 = 42

    const container = new Container()

    container.provide(key1, value1)
    container.provide(key2, value2)

    const ret1 = container.injectOne<string>(key1)
    const ret2 = container.injectOne<number>(key2)

    expect(ret1).not.toEqual(ret2)
    expect(ret1).toEqual(value1)
    expect(ret2).toEqual(value2)
  })

  test('provide and inject single', () => {
    const key1 = 'dep1'
    const key2 = 'dep2'

    const value1 = 'foo'
    const value2 = 42

    const container = new Container()

    container.provide(key1, value1)
    container.provide(key2, value2)

    const [ ret1 ] = container.inject<string>(key1)
    const [ ret2 ] = container.inject<number>(key2)

    expect(ret1).not.toEqual(ret2)
    expect(ret1).toEqual(value1)
    expect(ret2).toEqual(value2)
  })

  test('provide and inject single symbol key', () => {
    const key1 = Symbol('dep')
    const key2 = Symbol('dep')

    const value1 = 'foo'
    const value2 = 42

    const container = new Container()

    container.provide(key1, value1)
    container.provide(key2, value2)

    const [ ret1 ] = container.inject(key1)
    const [ ret2 ] = container.inject(key2)

    expect(ret1).not.toEqual(ret2)
    expect(ret1).toEqual(value1)
    expect(ret2).toEqual(value2)
  })

  test('provide and inject many', () => {
    const key1 = 'dep1'
    const key2 = 'dep2'

    const value1 = 'foo'
    const value2 = 42

    const container = new Container()

    container.provide(key1, value1)
    container.provide(key2, value2)

    const [ ret1, ret2 ] = container.inject<string, number>(key1, key2)

    expect(ret1).not.toEqual(ret2)
    expect(ret1).toEqual(value1)
    expect(ret2).toEqual(value2)
  })

  test('remove', () => {
    const key1 = 'dep1'
    const key2 = 'dep2'

    const value1 = 'foo'
    const value2 = 42

    const container = new Container()

    container.provide(key1, value1)
    container.provide(key2, value2)

    expect(container.count).toEqual(2)

    container.remove(key2)
    expect(container.count).toEqual(1)

    expect(container.inject<string>(key1)[0]).toEqual(value1)
    container.remove(key1)
    expect(container.count).toEqual(0)
  })

  test('clear', () => {
    const container = new Container()

    container.provide('key1', 'value1')
    container.provide('key2', 'value2')

    expect(container.count).toEqual(2)
    container.clear()
    expect(container.count).toEqual(0)
  })

  test('inject non-existing entity (assertion)', () => {
    const container = new Container()

    container.provide('key1', 'value1')
    container.provide('key2', 'value2')

    expect(
      () => container.inject('nonexisting')
    ).toThrowError(`Key nonexisting does not exists in FPDI container`)
  })

  test('trying to override dep with same key', () => {
    const container = new Container()

    container.provide('key1', 'value1')

    expect(
      () => container.provide('key1', 'value2')
    ).toThrowError(`Key key1 already exists in FPDI container`)
  })
})

