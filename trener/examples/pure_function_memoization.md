# Memoization, pure function

```js
add = (x,y) =>  {
    console.log('!droga komuptacja!')
    return x + y;
}
cache = {}
cache['1,2'] = cache['1,2'] ||  add(1,2)
// VM1526:2 !droga komuptacja!
// 3

cache['1,2'] = cache['1,2'] ||  add(1,2)
// 3

```