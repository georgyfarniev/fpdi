export type FPDIKey = Symbol | string

export class Container {
  private readonly store = new Map<FPDIKey, any>()

  public get count() {
    return this.store.size
  }

  public provide(name: FPDIKey, dep: unknown) {
    this.store.set(name, dep)
  }

  public clear() {
    this.store.clear()
  }

  public remove(key: FPDIKey) {
    this.store.delete(key)
  }

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
    return deps.map((a) => this.store.get(a)) as any
  }
}
