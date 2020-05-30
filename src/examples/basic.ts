import fpdi from '../'

/**
 * Setting dependencies to default global container instance.
 * If you want to create custom instance, import and use Container instead.
 */

/* Using string keys */
fpdi.provide('db', 'Database instance')
fpdi.provide('constant', 3.14)

/* Using Symbol keys will work as well */
const superdep = Symbol('My super important dependency')
fpdi.provide(superdep, 42)

/**
 * Injecting dependencies as needed with any convenient name (inspired by react
 * hooks). Order of injected deps depends on order of arguments.
 */
const [ value, db, constant ] = fpdi.inject<string, number>(
  superdep,
  'db',
  'constant'
)

console.log('Dependency "superdep":', value)
console.log('Dependency "db":', db)
console.log('Dependency "constant":', constant)

console.log('Dependencies count:', fpdi.count)

/* Removing single dependency */
fpdi.remove('db')

/* Removing all dependencies from container */
fpdi.clear()

console.log('Container now empty:', fpdi.count)
