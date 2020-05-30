/**
 * FPDI container.
 */
export class Container {
  constructor(private strict = true) {}

  private readonly store = new Map<string|Symbol, any>()

  /** @returns count of currently provided depedencies */
  public get count() {
    return this.store.size
  }

  /**
   * @param {string|Symbol} key Dependency key
   * @param {*} dep Dependency itself
   * @throws Error if dependency with same key already present
   */
  public provide(key: string|Symbol, dep: unknown) {
    if (this.strict && this.store.has(key)) {
      throw new Error(`Key ${key} already exists in FPDI container`)
    }
    this.store.set(key, dep)
  }

  /** Remove all stored dependencies from container */
  public clear() {
    this.store.clear()
  }

  /**
   * Removes dependency by key
   * @param {string|Symbol} key Dependency key
   */
  public remove(key: string|Symbol) {
    this.store.delete(key)
  }

  /**
   * @param {(string|Symbol)[]} deps Dependencies to inject
   * @returns Array of dependencies requested if found
   * @throws Error if one or more of dependencies are missing
   */
  public inject<
    T0,
    T1 = unknown,
    T2 = unknown,
    T3 = unknown,
    T4 = unknown,
    T5 = unknown,
    T6 = unknown,
    T7 = unknown,
    T8 = unknown,
    T9 = unknown,
    T10 = unknown,
    T11 = unknown,
    T12 = unknown,
    T13 = unknown,
    T14 = unknown,
    T15 = unknown
  >(...deps: (string|symbol)[]):
    [
      T0,
      T1,
      T2,
      T3,
      T4,
      T5,
      T6,
      T7,
      T8,
      T9,
      T10,
      T11,
      T12,
      T13,
      T14,
      T15
    ] {
    return deps.map(
      (key) => {
        if (this.strict && !this.store.has(key)) {
          throw new Error(
            `Key ${key.toString()} does not exists in FPDI container`
          )
        }
        return this.store.get(key)
      }
    ) as any
  }
}
