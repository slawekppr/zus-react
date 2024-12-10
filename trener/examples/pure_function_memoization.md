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

# Pure / Impure / Side effects / IO 

```js
add = (x,y) =>  x + y; 
(x,y) =>  x + y
Math.random()
0.811271687986364
Math.random()
0.3159594810112578
fs.saveFile('plik.txt') // side effects // IO

getWeather = (city) => {
    db.find('weather',{ city })
}
```

# Pure logic / Impure IO 

```js
function random(seed) {
    return seed * 2345678 % 98765
}
seed = 1234

seed = random(seed)
60797

seed = random(seed)
43856

seed = random(seed)
10608
```

# Pure with Effects ( task vs data)

```js
// Pure 
function getWeather(city, date) {
    // Prepare db request... 

    return (db) => { // Task
        return db.find({city,date})
    }
}

// Impure 
function getWeather(city, date) {
    // Prepare db request... 
    return db.find({city,date}) // Result
}
```

# BIS
```ts
function getWeather(city) {
    // Update Counter + return result ( UPDATE c = 2 )
    return db.find({city}
}

function getWeather(city) {

    // Prepare +  return Task ( UPDATE c += 1 )
    return () => {
       return db.find({city}
    }
}
```