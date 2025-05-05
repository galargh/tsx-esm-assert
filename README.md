Node version: `v22.14.0`

`npm test` output:
```
> test
> node --import tsx/esm --test test.ts

▶ a
  ✖ b (7.052375ms)
✖ a (7.434792ms)
ℹ tests 1
ℹ suites 1
ℹ pass 0
ℹ fail 1
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 111.002167

✖ failing tests:

test at test.ts:1:333
✖ b (7.052375ms)
  AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

    c('ContractWithoutLicense')

      at TestContext.<anonymous> (./test.ts:13:9)
      at Test.runInAsyncScope (node:async_hooks:211:14)
      at Test.run (node:internal/test_runner/test:979:25)
      at Test.start (node:internal/test_runner/test:877:17)
      at node:internal/test_runner/test:1356:71
      at node:internal/per_context/primordials:483:82
      at new Promise (<anonymous>)
      at new SafePromise (node:internal/per_context/primordials:451:29)
      at node:internal/per_context/primordials:483:9
      at Array.map (<anonymous>) {
    generatedMessage: true,
    code: 'ERR_ASSERTION',
    actual: false,
    expected: true,
    operator: '=='
  }
```
