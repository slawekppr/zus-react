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

# Pure random (seed)
```ts
Math.random() // impure

// pure
random = (seed) => seed * 3456789 % 098765;

seed = 1234;
random(seed)
// 17276

seed = random(seed)
// 17276

seed = random(seed)
// 44334
```

# Reduce state
```ts
lista = [1,2,3,4,5]
    
lista.reduce( (state, x) => {
    return { 
        ...state,
        counter: state.counter + x 
    }
}, {
    todos:[],
    counter: 0   
})
// {todos: Array(0), counter: 15}
```

```ts

state = {
    todos:[],
    counter: 0   
}
counterReducer = (state, action) => {
    return { 
        ...state,
        counter: state.counter + action
    }
}
state = counterReducer( state, 1)
// state = TodosReducer( state, 'kup mleko')
```

# Reducer
```ts

state = {
    todos:[],
    counter: 0   
}

reducer = (state, action) => {
    switch(action.type){
        case 'INC': return { ...state,
            counter: state.counter + action.payload
        } 
        case 'ADDTODO': return { ...state,
            todos: [...state.todos, action.payload] 
        }
        default: return state;
    }
}

inc = (payload=1) => ({type:'INC', payload});
addTodo = (payload='') => ({type:'ADDTODO', payload});

// usage
state = reducer( state, inc(2) )
state = reducer( state, addTodo('learn redux!') )

```