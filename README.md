# FPDI - minimalistic dependency injection module

<a href="https://www.npmjs.com/package/fpdi" alt="Downloads">
  <img src="https://img.shields.io/npm/dm/fpdi" />
</a>

<a href="https://www.npmjs.com/package/fpdi">
  <img src="https://img.shields.io/npm/v/fpdi" />
</a>

**Mission: build convenient and lightweight dependency injection library.**

Why FPDI?

- No dependencies
- No requirements to use unsopported language features such as decorators
- Framework and language agnostic (both Typescript and Javascript supported)
- Typescript support (optional)
- Convenience and simplicity (inspired by react hooks)
- Throwing exception if your dependency not found or same dependency overriden (can be disabled)

### Examples

#### Typescript

```ts
import fpdi from 'fpdi'

fpdi.provide('db', 'Database instance')
fpdi.provide('constant', 3.14)

const [ db, constant ] = fpdi.inject<string, number>('db', 'constant')
```

#### Javascript
```js
const fpdi = require('fpdi')

fpdi.provide('db', 'Database instance')
fpdi.provide('constant', 3.14)

// Line below use type annotation for returned array. Works at least in vscode

/** @type {[string, number]} */
const [ db, constant ] = fpdi.inject('db', 'constant')
```

Bigger example stored in /src/examples/basic.ts