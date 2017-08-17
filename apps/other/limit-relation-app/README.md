# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues


There are 3 models. M1, M2 and M3.

M1 has 3 M2 and each M2 has 3 M3.

[http://localhost:3000/api/M1s/callWithoutLimit?id=1](http://localhost:3000/api/M1s/callWithoutLimit?id=1)

This API call is without any limits on m3. so for `m1`, it will return 3 m2s each containing 3 m3s, which is perfect.

[http://localhost:3000/api/M1s/callWithLimit?id=1](http://localhost:3000/api/M1s/callWithLimit?id=1)

This API call is with limit = 1 for m3 scope. Ideally it should return one m3 for each m2.

If you change the limit to 2, it will return 2 m3s for first m2 and none for rest of them.

Doesn't look like expected behavior to me.

Thanks.

