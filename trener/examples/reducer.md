# Map, filter, reduce 
```ts
[1,2,3,4,5].map(x => x * 2 )
// (5) [2, 4, 6, 8, 10]

[1,2,3,4,5].filter(x => x % 2 )
// (3) [1, 3, 5]

[1,2,3,4,5].reduce( (sum, x) => {
    console.log( sum, x, sum + x )
    return sum + x
}, 0)

// 0 1 1
// 1 2 3
// 3 3 6
// 6 4 10
// 10 5 15
15
```