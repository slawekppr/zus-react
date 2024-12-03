
# Immutable data, structural sharing, referential transparency

```js
owoc = {name:'jablko'}
drzewoA = {owoc}
drzewoB = {owoc}
las = {drzewoA, drzewoB} 

// Clone with strucural sharing 
las2 = {
    ...las, 
    drzewoB:{
        ...las.drzewoB, 
        owoc:{ 
            ...las.drzewoB.owoc, 
            name:'gruszka'
         }
    }
}

las == las2
// false // Check

las.drzewoA == las2.drzewoA
// true // use Cache!
// ..... gratis!

las.drzewoB == las2.drzewoB
false // Check
las.drzewoB.owoc == las2.drzewoB.owoc
false // Check
las.drzewoB.owoc.name == las2.drzewoB.owoc.name
false // Rerender
```