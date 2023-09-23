// URL and Request Objects
/*
    url: href, host, hostname, port, protocol, origin, pathname, hash, search, searchParams
    request options: method, body, headers, cache
    cache  (HTTP Cache, NOT Cache API)
    - `default`: cache first, server request if stale, update cache if newer
    - `reload`: always go to server AND update the cache
    - `no-store`: always go to server but do not update the cache
    - `no-cache`: make a conditional request to server and compare, update cache and use latest
    - `force-cache`: only makes request if there is no HTTP Cache file
    - `only-if-cache`: from cache or 504 gateway timeout error
    Headers
    - string | object literal | new Headers()
*/

const str = 'http://127.0.0.1:5500/local-sample.json?attempt=123&other=hello';
console.log(str.split('//'));
export function getData() {
    const url = new URL(str);
    // fetch(url);
}
