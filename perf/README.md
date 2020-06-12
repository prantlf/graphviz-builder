# Microbenchmarks

Compare implementations of attributes object. Either using a plain object or `Map`.

```
$ pnpm i
$ npm test

attributes:
  object x 1,036,852 ops/sec ±0.40% (93 runs sampled)
  map x 2,740,534 ops/sec ±0.66% (94 runs sampled)
  fastest is map
```
