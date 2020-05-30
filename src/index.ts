const assert = require('assert');

const __FPDI_GLOBAL_STORE__ = new Map<string, any>()

function provide(name: string, dep: unknown) {
  __FPDI_GLOBAL_STORE__.set(name, dep)
}

function inject<
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
>(...deps: string[]):
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
  return deps.map((a) => __FPDI_GLOBAL_STORE__.get(a)) as any
}

function clear() {
  __FPDI_GLOBAL_STORE__.clear()
}

function remove(key: string) {
  __FPDI_GLOBAL_STORE__.delete(key)
}

function main() {
  provide('dep1', 'dep1data')
  provide('dep2', 42)

  const [ dep1, dep2 ] = inject<string, number>('dep1', 'dep2')

  console.log('dep1', dep1)
  console.log('dep2', dep2)
}

if (require.main === module) {
  main()
}