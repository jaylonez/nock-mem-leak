This is a minimal reproduction of nock test leaks.

Jest's `--detectLeaks` flag will detect a memory leak if you run either `nock.restore()` or `nock.cleanAll()` in the `afterAll` hook. Removing both will fix the reported leak.

To run, simply install the deps with `npm i`

and then run the test with `npm run test`
