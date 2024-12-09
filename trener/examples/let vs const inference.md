let zmienna = 123; // number
zmienna = 232343423

const stala = 123; // 123

// let zmiennaAleNiezmienna:123 = 123; // 123
let zmiennaAleNiezmienna = 123 as const

// zmiennaAleNiezmienna = 234
zmiennaAleNiezmienna = 123

function SaveCommand(obj: {}) {
    return {
        type:'SAVE' as const, 
        payload: obj
    } // as const
}
let command = SaveCommand('banana')
